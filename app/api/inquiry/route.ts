import { randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { site } from "@/data/site";
import { whatsappHref } from "@/lib/utils";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Inquiry = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email?: string;
  organisation?: string;
  projectType: string;
  location?: string;
  message: string;
};

const rateBucket = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 6;

function getClientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "local";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const bucket = rateBucket.get(key);
  if (!bucket || bucket.resetAt < now) {
    rateBucket.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}

function clean(value: FormDataEntryValue | null, max = 500) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

async function storeInquiry(inquiry: Inquiry) {
  const line = `${JSON.stringify(inquiry)}\n`;
  const targets = [
    path.join(process.cwd(), "data", "inquiries.jsonl"),
    path.join("/tmp", "ses-inquiries.jsonl"),
  ];

  for (const target of targets) {
    try {
      await mkdir(path.dirname(target), { recursive: true });
      await appendFile(target, line, "utf8");
      return true;
    } catch {
      continue;
    }
  }
  return false;
}

async function sendEmail(inquiry: Inquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM;
  const to = process.env.INQUIRY_EMAIL || site.email;
  if (!apiKey || !from) return false;

  const body = [
    `New website inquiry ${inquiry.id}`,
    "",
    `Name: ${inquiry.name}`,
    `Phone: ${inquiry.phone}`,
    `Email: ${inquiry.email || "Not provided"}`,
    `Organisation: ${inquiry.organisation || "Not provided"}`,
    `Project type: ${inquiry.projectType}`,
    `Location: ${inquiry.location || "Not provided"}`,
    "",
    inquiry.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: inquiry.email || undefined,
        subject: `Website inquiry ${inquiry.id}: ${inquiry.projectType}`,
        text: body,
      }),
      signal: AbortSignal.timeout(8000),
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function sendWebhook(inquiry: Inquiry) {
  const url = process.env.INQUIRY_WEBHOOK_URL;
  if (!url) return false;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "website", inquiry }),
      signal: AbortSignal.timeout(8000),
    });
    return response.ok;
  } catch {
    return false;
  }
}

function buildWhatsapp(inquiry: Inquiry) {
  return whatsappHref(
    [
      `Website inquiry ${inquiry.id}`,
      `Name: ${inquiry.name}`,
      `Phone: ${inquiry.phone}`,
      `Project: ${inquiry.projectType}`,
      inquiry.location ? `Location: ${inquiry.location}` : "",
      "",
      inquiry.message,
    ]
      .filter(Boolean)
      .join("\n"),
  );
}

export async function POST(request: Request) {
  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Too many requests from this connection. Please call or use WhatsApp for an urgent inquiry.",
        whatsapp: whatsappHref(site.whatsappMessage),
      },
      { status: 429 },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, message: "The form could not be read. Please try again." },
      { status: 400 },
    );
  }

  if (clean(form.get("website"), 200)) {
    return NextResponse.json({ ok: true, id: null, whatsapp: null });
  }

  const name = clean(form.get("name"), 80);
  const phone = clean(form.get("phone"), 30);
  const email = clean(form.get("email"), 120);
  const organisation = clean(form.get("organisation"), 120);
  const projectType = clean(form.get("projectType"), 100) || "General HVAC inquiry";
  const location = clean(form.get("location"), 120);
  const message = clean(form.get("message"), 3000);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isValidPhone(phone)) errors.phone = "Please enter a valid phone number.";
  if (email && !isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please describe the requirement in at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please correct the highlighted fields.", errors },
      { status: 422 },
    );
  }

  const inquiry: Inquiry = {
    id: `SES-${randomUUID().slice(0, 8).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    name,
    phone,
    email: email || undefined,
    organisation: organisation || undefined,
    projectType,
    location: location || undefined,
    message,
  };

  const [stored, emailed, webhooked] = await Promise.all([
    storeInquiry(inquiry),
    sendEmail(inquiry),
    sendWebhook(inquiry),
  ]);

  const whatsapp = buildWhatsapp(inquiry);
  const delivered = stored || emailed || webhooked;

  if (!delivered) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "The inquiry could not be logged right now. Please send it on WhatsApp or call us directly.",
        whatsapp,
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    id: inquiry.id,
    whatsapp,
    delivered: { stored, emailed, webhooked },
  });
}
