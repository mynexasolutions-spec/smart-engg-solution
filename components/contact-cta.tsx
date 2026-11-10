import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/data/site";
import { displayPhone, mailHref, telHref, whatsappHref } from "@/lib/utils";

export function ContactCta({
  title = "Tell us what the building needs.",
  description = "Share your drawings, BOQ, tender details or site requirement. We will review the scope and respond with a clear next step.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="on-dark reveal bg-navy-deep text-on-dark">
      <div className="container-x section-sm">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="display-2 max-w-[18ch]">{title}</h2>
            <p className="lede mt-5 max-w-[54ch] text-on-dark-muted">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-accent">
                Send an inquiry
              </Link>
              <a
                href={whatsappHref(site.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-t border-line-dark">
              {site.people.map((person) => (
                <div key={person.phone} className="border-b border-line-dark py-4">
                  <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <div className="font-display text-base font-semibold text-on-dark">
                        {person.name}
                      </div>
                      <div className="meta">{person.role}</div>
                    </div>
                    <a
                      href={telHref(person.phone)}
                      className="credential-value flex items-center gap-2 text-sm font-semibold text-on-dark transition-colors hover:text-accent"
                    >
                      <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                      {displayPhone(person.phone)}
                    </a>
                  </div>
                </div>
              ))}
              <a
                href={mailHref(site.email)}
                className="flex items-center gap-3 border-b border-line-dark py-4 text-sm text-on-dark-muted transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="break-all">{site.email}</span>
              </a>
              <div className="pt-4 text-sm leading-relaxed text-on-dark-muted">
                <div className="font-medium text-on-dark">{site.addresses[1].label}</div>
                {site.addresses[1].lines.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
