import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { allSystemTypes, systems } from "@/data/systems";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "HVAC Systems",
  description:
    "VRF and VRV, chiller plants, AHU, FAHU, FCU, TFA, precision and package units, ducting, copper piping, ventilation, smoke control, pressurization, BMS and clean room HVAC systems.",
  path: "/hvac-systems",
  keywords: [
    "VRF VRV systems",
    "chiller plant contractor",
    "AHU installation contractor",
    "HVAC ducting contractor",
  ],
});

export default function HvacSystemsPage() {
  return (
    <>
      <PageHero
        title="HVAC systems, selected for the building."
        intro="The system follows the load, the space and the way the building will be maintained. We design, supply, install and commission the full range, from VRF networks to central chiller plants."
        crumbs={[{ label: "HVAC systems" }]}
        image="/images/auditorium.jpg"
        imageAlt="Auditorium with ceiling air distribution and tiered seating"
        imageCaption="Air distribution, ventilation and controls have to work together in large occupied spaces."
        meta={[
          { label: "System families", value: "Eight core groups" },
          { label: "Equipment", value: "Multi-brand supply" },
          { label: "Execution", value: "Installation and commissioning" },
          { label: "Support", value: "AMC and maintenance" },
        ]}
      />

      <Section>
        <div className="container-x">
          <SectionHeading
            title="System families we work with."
            description="Open a system for the equipment, applications and installation scope we cover."
            action={
              <Link href="/products" className="btn btn-outline">
                Equipment and products
              </Link>
            }
          />

          <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {systems.map((system, index) => (
              <Link
                key={system.slug}
                href={`/hvac-systems/${system.slug}`}
                className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] gap-4 border-t border-line py-6"
              >
                <span className="pt-1 text-sm tabular-nums text-ink-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg font-semibold text-ink">
                    {system.name}
                  </span>
                  <span className="mt-1 block max-w-[48ch] text-sm leading-relaxed text-ink-muted">
                    {system.tagline}
                  </span>
                </span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[16ch]">The full technical list.</h2>
            <p className="lede mt-5 max-w-[44ch]">
              These are the HVAC and ventilation systems we design, supply,
              install and maintain. The final selection is made from the heat
              load and building use.
            </p>
            <Link href="/contact" className="btn btn-primary mt-8">
              Discuss your system
            </Link>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-x-8 border-t border-line sm:grid-cols-2">
              {allSystemTypes.map((type) => (
                <li
                  key={type}
                  className="flex items-start gap-2.5 border-b border-line py-3 text-sm text-ink-2"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-accent-deep" aria-hidden="true" />
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="media-frame aspect-[4/3]">
              <Image
                src="/images/showroom.jpg"
                alt="Showroom display of HVAC units, copper piping and accessories"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="display-2 max-w-[16ch]">Equipment has to match the design.</h2>
            <p className="lede mt-5 max-w-[48ch]">
              We supply equipment against the approved specification and BOQ.
              Model and brand availability is confirmed before the order so the
              installed system matches the approved drawings.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-primary">
                Equipment and materials
              </Link>
              <Link href="/hvac-systems/ducting-piping" className="btn btn-outline">
                Ducting and piping
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <ContactCta
        title="Need help selecting a system?"
        description="Share the building use, area, drawings and load details. We will recommend a system configuration and the equipment required."
      />
    </>
  );
}
