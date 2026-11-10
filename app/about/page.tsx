import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { CredentialList } from "@/components/credential-list";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { site } from "@/data/site";
import { whyChoose } from "@/data/services";
import {
  displayPhone,
  mailHref,
  mapsHref,
  telHref,
} from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Smart Engineering Solution is a Gorakhpur based HVAC contractor undertaking design, supply, installation, testing, commissioning and maintenance for government, commercial, industrial and institutional projects.",
  path: "/about",
  keywords: [
    "HVAC company in Gorakhpur",
    "HVAC contractor in Uttar Pradesh",
    "about Smart Engineering Solution",
  ],
});

const companyFacts = [
  { label: "Legal name", value: site.legalName },
  { label: "Trade name", value: site.tradeName },
  { label: "Business type", value: "Proprietorship" },
  { label: "Established", value: "2020" },
  { label: "GSTIN", value: site.gstin },
  { label: "MSME Udyam", value: site.udyam },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A Gorakhpur HVAC contractor with the complete scope."
        intro="Smart Engineering Solution plans, supplies, installs, tests, commissions and maintains heating, ventilation and air conditioning systems for public and private buildings."
        crumbs={[{ label: "About" }]}
        image="/images/showroom.jpg"
        imageAlt="Smart Engineering Solution showroom with equipment displays and brand wall"
        imageCaption="Showroom and equipment display, Fatma Bypass Road, Gorakhpur."
        meta={[
          { label: "Established", value: "2020" },
          { label: "Registered as", value: "Proprietorship" },
          { label: "GSTIN", value: site.gstin },
          { label: "MSME Udyam", value: site.udyam },
        ]}
      />

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="display-2 max-w-[18ch]">
              HVAC is the whole job, not one part of it.
            </h2>
            <div className="mt-6 max-w-[68ch] space-y-5 text-base leading-relaxed text-ink-2">
              <p>
                Smart Engineering Solution is an HVAC contracting and
                engineering company based in Gorakhpur. We handle the supply,
                installation, testing, commissioning and maintenance of complete
                heating, ventilation and air conditioning systems.
              </p>
              <p>
                Our work covers government, public sector, commercial,
                industrial, institutional, healthcare, hospitality and
                residential projects. Each scope starts with the building and the
                approved specification, not with a pre-selected machine.
              </p>
              <p>
                We participate in government HVAC tenders through GeM and other
                applicable tendering platforms. Public projects are executed
                against approved BOQs, technical specifications and project
                drawings, with testing and commissioning records before handover.
              </p>
              <p>
                From initial planning and heat load calculation to equipment
                supply, installation and after-sales maintenance, the intent is
                to deliver reliable, energy-conscious systems that the building
                team can operate and service.
              </p>
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <h3 className="font-display text-lg font-semibold">Our vision</h3>
              <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-ink-2">
                To become a trusted HVAC contracting and engineering company for
                government, commercial, industrial, institutional, healthcare,
                hospitality and residential infrastructure projects, delivering
                high-quality, reliable and technologically sound HVAC solutions.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-line bg-paper-2 p-6 sm:p-7">
              <h2 className="font-display text-lg font-semibold">Company record</h2>
              <dl className="mt-4 border-t border-line">
                {companyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-start justify-between gap-6 border-b border-line py-3"
                  >
                    <dt className="text-sm text-ink-muted">{fact.label}</dt>
                    <dd className="credential-value max-w-[60%] break-words text-right text-sm font-semibold text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                Registered address: Gorakhnath Mandir, Ansari Road, Gorakhnath,
                Gorakhpur, Uttar Pradesh 273015.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/certifications" className="btn btn-primary">
                  Registration documents
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Contact
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[14ch]">What stays constant.</h2>
            <p className="lede mt-5 max-w-[42ch] text-on-dark-muted">
              The details change with every building. The way we take
              responsibility does not.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-x-8 border-t border-line-dark sm:grid-cols-2">
              {whyChoose.map((item) => (
                <li key={item.title} className="border-b border-line-dark py-5">
                  <div className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <h3 className="font-display text-base font-semibold text-on-dark">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-on-dark-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading
            title="Who you speak to."
            description="Inquiries are handled directly by the managing director and manager, so the people quoting the work understand the site."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {site.people.map((person) => (
              <div key={person.phone} className="border-t border-line pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {person.name}
                  </h3>
                  <span className="text-sm text-ink-muted">{person.role}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-5">
                  <a
                    href={telHref(person.phone)}
                    className="flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent-deep"
                  >
                    <Phone className="h-4 w-4 text-accent-deep" aria-hidden="true" />
                    {displayPhone(person.phone)}
                  </a>
                  <a
                    href={mailHref(person.email)}
                    className="flex items-center gap-2 break-all text-sm text-ink-2 underline decoration-line underline-offset-4 transition-colors hover:decoration-accent-deep"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-accent-deep" aria-hidden="true" />
                    {person.email}
                  </a>
                </div>
                <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-ink-muted">
                  {person.role === "Managing Director"
                    ? "Project discussions, government tenders, technical planning and commercial decisions."
                    : "Site coordination, material schedules, installation follow-up and service requests."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x">
          <SectionHeading
            title="Two places to meet us."
            description="Our showroom displays equipment and materials. The Gorakhnath office is the registered place of business."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {site.addresses.map((address) => (
              <div key={address.label} className="flex flex-col border-t border-line pt-6">
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
          <div className="mt-10">
            <CredentialList columns={4} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[16ch]">Registration, in the open.</h2>
            <p className="lede mt-5 max-w-[42ch]">
              The business is registered for GST and as an MSME Udyam enterprise.
              Both documents can be viewed and downloaded.
            </p>
            <Link href="/certifications" className="btn btn-primary mt-8">
              View certifications
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                href: "/certifications",
                image: "/Certifications/gst-registration.jpg",
                title: "GST registration certificate",
                detail: "Form GST REG-06, issued 30 October 2023.",
                pdf: "/Certifications/AA091023159908X_RC30102023 (1).pdf",
              },
              {
                href: "/certifications",
                image: "/Certifications/udyam-registration.jpg",
                title: "Udyam registration certificate",
                detail: "Micro enterprise, registration 2026-27.",
                pdf: "/Certifications/Print - Udyam Registration Certificate.pdf",
              },
            ].map((doc) => (
              <article key={doc.title} className="border border-line">
                <Link href={doc.href} className="block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper-3">
                    <Image
                      src={doc.image}
                      alt={`${doc.title} for Smart Engineering Solution`}
                      fill
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-cover object-top"
                    />
                  </div>
                </Link>
                <div className="border-t border-line p-4">
                  <h3 className="font-display text-base font-semibold text-ink">
                    {doc.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">{doc.detail}</p>
                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <Link href={doc.href} className="inline-flex items-center gap-1.5 font-semibold text-ink">
                      <FileText className="h-4 w-4" aria-hidden="true" />
                      Details
                    </Link>
                    <a
                      href={doc.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-ink-2"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                      PDF
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <ContactCta
        title="Start with the building."
        description="Tell us the location, use and approximate scope. We will tell you what information is needed for a proper HVAC proposal."
      />
    </>
  );
}
