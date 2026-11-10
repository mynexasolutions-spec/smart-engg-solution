import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, FileText } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { processSteps, projectDocuments, turnkeyScope } from "@/data/services";
import { site } from "@/data/site";
import { whatsappHref } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Turnkey HVAC Solutions",
  description:
    "Turnkey HVAC projects in Gorakhpur: design, heat load calculation, BOQ, equipment procurement, supply, installation, testing, commissioning, handover and maintenance from one contractor.",
  path: "/solutions/turnkey",
  keywords: [
    "HVAC turnkey projects",
    "turnkey HVAC contractor",
    "HVAC design and build",
    "HVAC project execution",
  ],
});

export default function TurnkeyPage() {
  return (
    <>
      <PageHero
        title="Turnkey HVAC, from calculation to handover."
        intro="One contract covers the design, BOQ, equipment, installation, testing, commissioning and documentation. The building team deals with one project team."
        crumbs={[{ label: "Turnkey HVAC" }]}
        image="/images/commercial-glass.jpg"
        imageAlt="Commercial building with glass facade and curved canopy"
        imageCaption="Turnkey scopes keep design, procurement and site execution on the same drawings."
        meta={[
          { label: "Scope", value: "Design, supply, install, commission" },
          { label: "Delivery", value: "Single contract" },
          { label: "Handover", value: "Test records and documentation" },
          { label: "Support", value: "O&M and AMC" },
        ]}
      />

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[16ch]">What turnkey covers.</h2>
            <p className="lede mt-5 max-w-[44ch]">
              The scope can start at a blank drawing or at an approved tender.
              In both cases the sequence closes at commissioning and handover.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Start a turnkey discussion
              </Link>
              <a
                href={whatsappHref(
                  "Hello Smart Engineering Solution, I would like to discuss a turnkey HVAC project.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
            <div className="mt-10 border-t border-line pt-5">
              <h3 className="font-display text-base font-semibold">What we need to start</h3>
              <ul className="mt-3 space-y-2.5">
                {projectDocuments.slice(0, 5).map((doc) => (
                  <li key={doc} className="flex items-start gap-2.5 text-sm text-ink-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" aria-hidden="true" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-x-8 border-t border-line sm:grid-cols-2">
              {turnkeyScope.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 border-b border-line py-3 text-sm text-ink-2"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-accent-deep" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x">
          <SectionHeading
            title="The sequence."
            description="Each step produces something the next step can use, from a load calculation to a commissioning record."
          />
          <ol className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-5 md:gap-5">
            {processSteps.map((step, index) => (
              <li key={step.title} className="min-w-0">
                <span className="font-display text-3xl font-semibold text-accent-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="media-frame aspect-[16/10]">
              <Image
                src="/images/auditorium.jpg"
                alt="Auditorium interior with air distribution and tiered seating"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[15ch]">What gets handed over.</h2>
            <ul className="mt-6 border-t border-line">
              {[
                "Approved drawings and equipment selections",
                "Installation and material records",
                "Pressure test and commissioning records",
                "Air balancing and performance observations",
                "Operating and maintenance information",
                "Spare and material handover, where applicable",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-line py-3 text-sm text-ink-2"
                >
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="display-2 max-w-[18ch]">
              One team accountable for the result.
            </h2>
            <p className="lede mt-5 max-w-[52ch] text-on-dark-muted">
              A turnkey scope removes the gap between the consultant, supplier
              and installer. The same team that selects the equipment is
              responsible for installing and commissioning it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn btn-accent">
                All services
              </Link>
              <Link href="/government-projects" className="btn btn-outline-light">
                Government projects
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <dl className="border-t border-line-dark">
              <div className="flex items-center justify-between gap-4 border-b border-line-dark py-3">
                <dt className="text-sm text-on-dark-muted">Managing Director</dt>
                <dd className="text-sm font-semibold text-on-dark">{site.people[0].name}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-line-dark py-3">
                <dt className="text-sm text-on-dark-muted">Manager</dt>
                <dd className="text-sm font-semibold text-on-dark">{site.people[1].name}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-line-dark py-3">
                <dt className="text-sm text-on-dark-muted">Registration</dt>
                <dd className="credential-value text-sm font-semibold text-on-dark">
                  GSTIN and Udyam
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <ContactCta
        title="Bring us the drawing or the tender."
        description="We will confirm the turnkey scope, the documents needed and the sequence for the site."
      />
    </>
  );
}
