import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { completeServices, coreServices, processSteps } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "HVAC Services",
  description:
    "Complete HVAC services in Gorakhpur: design and heat load calculation, equipment supply, VRF and chiller installation, ducting, copper piping, testing, commissioning, AMC and maintenance.",
  path: "/services",
  keywords: [
    "HVAC services Gorakhpur",
    "HVAC installation contractor",
    "HVAC AMC services",
    "HVAC design and commissioning",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="HVAC services from design to maintenance."
        intro="One scope covers the calculations, equipment, installation, testing and the support that follows handover. Each stage is tied to the approved BOQ and project drawings."
        crumbs={[{ label: "Services" }]}
        image="/images/commercial-glass.jpg"
        imageAlt="Commercial building with a curved entrance canopy and glass facade"
        imageCaption="Commercial HVAC scopes include air side, refrigerant, controls and commissioning."
      />

      <Section>
        <div className="container-x">
          <SectionHeading
            title="What we take on."
            description="Choose a single service or hand over the complete HVAC package. The scope is written down before the work starts."
            action={
              <Link href="/contact" className="btn btn-primary">
                Send your scope
              </Link>
            }
          />

          <div className="mt-12 border-t border-line">
            {coreServices.map((service, index) => (
              <article
                key={service.slug}
                className="grid gap-5 border-b border-line py-7 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-1">
                  <span className="text-sm tabular-nums text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-ink-2">
                    {service.summary}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink"
                  >
                    Explore
                    <ArrowUpRight className="h-4 w-4 text-accent-deep" aria-hidden="true" />
                  </Link>
                </div>
                <div className="lg:col-span-6">
                  <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-deep" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[16ch]">The complete service list.</h2>
            <p className="lede mt-5 max-w-[44ch]">
              Every item below can be included in a project scope or an AMC,
              depending on what the building needs.
            </p>
            <div className="mt-8">
              <Link href="/solutions/turnkey" className="btn btn-outline">
                Turnkey HVAC scope
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-x-8 border-t border-line sm:grid-cols-2">
              {completeServices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-line py-3 text-sm text-ink-2"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-accent-deep" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="media-frame aspect-[4/3]">
              <Image
                src="/images/auditorium.jpg"
                alt="Auditorium interior with concealed air distribution and tiered seating"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="display-2 max-w-[16ch]">How the work is sequenced.</h2>
            <ol className="mt-8 border-t border-line">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-2 border-b border-line py-4 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5"
                >
                  <span className="text-sm tabular-nums text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="display-2 max-w-[14ch]">Turnkey HVAC.</h2>
            <p className="lede mt-5 max-w-[44ch] text-on-dark-muted">
              One contract for design, BOQ, procurement, installation, testing,
              commissioning and handover documentation.
            </p>
            <Link href="/solutions/turnkey" className="btn btn-accent mt-7">
              Turnkey scope
            </Link>
          </div>
          <div>
            <h2 className="display-2 max-w-[14ch]">AMC and maintenance.</h2>
            <p className="lede mt-5 max-w-[44ch] text-on-dark-muted">
              Preventive visits, breakdown support, operation and maintenance,
              upgrades and replacements for installed systems.
            </p>
            <Link href="/services/amc-maintenance" className="btn btn-outline-light mt-7">
              Maintenance support
            </Link>
          </div>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
