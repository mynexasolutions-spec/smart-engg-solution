"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Phone } from "lucide-react";
import { site } from "@/data/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { displayPhone, telHref, whatsappHref } from "@/lib/utils";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Government tender or GeM requirement",
  "Hospital or healthcare facility",
  "Commercial building or office",
  "Hotel, banquet or restaurant",
  "Industrial or factory project",
  "Sports or recreation facility",
  "Education or institutional project",
  "Residential or high-rise project",
  "Turnkey HVAC project",
  "AMC or maintenance",
  "Other HVAC requirement",
];

type Success = {
  id: string | null;
  whatsapp: string | null;
};

type Result = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
  id?: string | null;
  whatsapp?: string | null;
};

export function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState("");
  const [fallbackWhatsapp, setFallbackWhatsapp] = useState(
    whatsappHref(site.whatsappMessage),
  );
  const [success, setSuccess] = useState<Success | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (phone.replace(/\D/g, "").length < 10)
      nextErrors.phone = "Please enter a valid phone number.";
    if (message.length < 10)
      nextErrors.message = "Please describe the requirement in at least 10 characters.";
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setServerMessage("");
      return;
    }

    const summary = [
      "Website inquiry",
      `Name: ${name}`,
      `Phone: ${phone}`,
      data.get("projectType") ? `Project: ${data.get("projectType")}` : "",
      data.get("location") ? `Location: ${data.get("location")}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    setFallbackWhatsapp(whatsappHref(summary));
    setErrors({});
    setServerMessage("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: data,
      });
      const result = (await response.json()) as Result;

      if (response.ok && result.ok) {
        setSuccess({
          id: result.id ?? null,
          whatsapp: result.whatsapp ?? fallbackWhatsapp,
        });
        form.reset();
        return;
      }

      setErrors(result.errors ?? {});
      setServerMessage(result.message || "The inquiry could not be sent. Please try again.");
      if (result.whatsapp) setFallbackWhatsapp(result.whatsapp);
    } catch {
      setServerMessage(
        "The connection was interrupted. Please send the inquiry on WhatsApp or call us.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="surface-card p-6 sm:p-8" role="status" aria-live="polite">
        <CheckCircle2 className="h-8 w-8 text-accent-deep" aria-hidden="true" />
        <h3 className="display-3 mt-5">Inquiry received.</h3>
        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-ink-2">
          Your requirement has been logged. Our team will contact you on the
          phone number provided.
          {success.id ? (
            <>
              {" "}
              Reference:{" "}
              <span className="credential-value font-semibold text-ink">{success.id}</span>
            </>
          ) : null}
        </p>
        <p className="mt-4 text-sm text-ink-muted">
          If you have drawings, a BOQ or a tender document, you can send them on
          WhatsApp and mention your reference.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={success.whatsapp || fallbackWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Continue on WhatsApp
          </a>
          <a
            href={telHref(site.people[0].phone)}
            className="btn btn-outline w-full sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {displayPhone(site.people[0].phone)}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="surface-card p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            className={cn("field-input", errors.name && "border-danger")}
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Full name"
          />
          {errors.name ? (
            <p id="name-error" className="field-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="field-label">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={30}
            className={cn("field-input", errors.phone && "border-danger")}
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="10-digit mobile number"
          />
          {errors.phone ? (
            <p id="phone-error" className="field-error">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email address <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={120}
            className={cn("field-input", errors.email && "border-danger")}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="name@company.com"
          />
          {errors.email ? (
            <p id="email-error" className="field-error">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="organisation" className="field-label">
            Organisation <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            maxLength={120}
            className="field-input"
            placeholder="Company, department or institution"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="field-label">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="field-input"
            defaultValue=""
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="location" className="field-label">
            Site location <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            maxLength={120}
            className="field-input"
            placeholder="City or district"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            Requirement
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={3000}
            className={cn("field-input", errors.message && "border-danger")}
            aria-invalid={errors.message ? "true" : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="Describe the building, scope, area, systems or tender details."
          />
          {errors.message ? (
            <p id="message-error" className="field-error">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {serverMessage ? (
        <div
          role="alert"
          className="mt-5 border border-danger/40 bg-paper-2 px-4 py-3 text-sm text-ink-2"
        >
          <p>{serverMessage}</p>
          <a
            href={fallbackWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 font-semibold text-ink underline decoration-line underline-offset-4"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Send the same details on WhatsApp
          </a>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[42ch] text-xs leading-relaxed text-ink-muted">
          Your details are used only to respond to this inquiry. For tender
          documents or drawings, WhatsApp is the fastest route.
        </p>
        <button type="submit" className="btn btn-primary w-full shrink-0 sm:w-auto" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Send inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
