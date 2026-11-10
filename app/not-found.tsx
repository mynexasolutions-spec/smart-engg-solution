import Link from "next/link";
import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { site } from "@/data/site";
import { displayPhone, telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const phone = site.people[0].phone;

  return (
    <section className="border-b border-line bg-paper py-24 lg:py-32">
      <div className="container-x">
        <p className="meta">404</p>
        <h1 className="display-1 mt-4 max-w-[18ch]">This page is not here.</h1>
        <p className="lede mt-6 max-w-[52ch]">
          The address may have changed or the link may be out of date. Use the
          navigation, or call the team directly.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href="/" variant="primary">
            Back to home
          </ButtonLink>
          <ButtonLink href={telHref(phone)} variant="outline">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="tabular-nums">Call {displayPhone(phone)}</span>
          </ButtonLink>
        </div>
        <p className="mt-10 text-sm text-ink-muted">
          Looking for something specific?{" "}
          <Link href="/contact" className="link-quiet font-semibold text-ink">
            Send an inquiry
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
