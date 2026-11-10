import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/data/site";
import {
  displayPhone,
  mailHref,
  mapsHref,
  telHref,
  whatsappHref,
} from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Smart Engineering Solution in Gorakhpur for HVAC design, supply, installation, testing, commissioning, AMC and government tender requirements. Call, WhatsApp or send an inquiry.",
  path: "/contact",
  keywords: [
    "HVAC contractor contact Gorakhpur",
    "Smart Engineering Solution contact",
    "HVAC quotation Gorakhpur",
  ],
});

const sendList = [
  "Building type, location and approximate area",
  "Scope required: design, supply, installation or AMC",
  "Drawings, BOQ or tender document if available",
  "Preferred timeline and site access details",
  "Equipment specification or brand, if fixed",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Talk to the people who will handle the work."
        intro="Send the requirement, drawings, BOQ or tender details. Inquiries are handled directly by the managing director and manager, so the first conversation is with the people responsible for the scope."
        crumbs={[{ label: "Contact" }]}
        image="/images/showroom.jpg"
        imageAlt="Smart Engineering Solution showroom with equipment displays"
        imageCaption="Showroom and equipment display, Fatma Bypass Road, Gorakhpur."
      />

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="display-2 max-w-[16ch]">Send an inquiry.</h2>
            <p className="lede mt-5 max-w-[52ch]">
              Share as much detail as you have. A phone number is required so the
              team can respond. Drawings and tender documents can follow on
              WhatsApp.
            </p>
            <div className="mt-8">
              <InquiryForm />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border-t border-line">
              <h2 className="py-4 font-display text-lg font-semibold text-ink">
                Direct contacts
              </h2>
              {site.people.map((person) => (
                <div key={person.phone} className="border-t border-line py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-ink">
                      {person.name}
                    </h3>
                    <span className="text-sm text-ink-muted">{person.role}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-4">
                    <a
                      href={telHref(person.phone)}
                      className="flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent-deep"
                    >
                      <Phone className="h-4 w-4 text-accent-deep" aria-hidden="true" />
                      {displayPhone(person.phone)}
                    </a>
                    <a
                      href={mailHref(person.email)}
                      className="flex items-center gap-2 break-all text-sm text-ink-2 transition-colors hover:text-ink"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-accent-deep" aria-hidden="true" />
                      {person.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-line bg-paper-2 p-5">
              <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">
                Fastest for drawings, site photos and tender documents.
              </p>
              <a
                href={whatsappHref(site.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mt-4 w-full"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Message on WhatsApp
              </a>
              <a
                href={mailHref(site.email)}
                className="btn btn-outline mt-3 w-full"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email the team
              </a>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display-2 max-w-[16ch]">Two places to meet us.</h2>
              <p className="lede mt-5 max-w-[42ch]">
                The showroom displays equipment and materials. The Gorakhnath
                office is the registered place of business.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
              {site.addresses.map((address) => (
                <div
                  key={address.label}
                  className="flex flex-col border-t border-line pt-6"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent-deep" aria-hidden="true" />
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {address.label}
                    </h3>
                  </div>
                  <address className="mt-3 flex-1 text-base not-italic leading-relaxed text-ink-2">
                    {address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={mapsHref(address.mapQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="h-4 w-4 text-accent-deep" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[16ch]">What helps us respond.</h2>
            <p className="lede mt-5 max-w-[44ch]">
              A clear scope saves a round of questions. Send what is available
              and we will ask for anything missing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/government-projects" className="btn btn-outline">
                Government projects
              </Link>
              <Link href="/services/amc-maintenance" className="btn btn-outline">
                AMC and maintenance
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-line">
              {sendList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-line py-4 text-sm text-ink-2"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-accent-deep" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-[62ch] text-sm leading-relaxed text-ink-muted">
              For tender work, include the bid number, approved BOQ and technical
              specifications. For maintenance, include the equipment make, model
              and capacity.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
