import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { SectorCard } from "@/components/sector-card";
import { sectors } from "@/data/sectors";
import { systems } from "@/data/systems";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industries and Sectors",
  description:
    "HVAC projects for government, healthcare, hospitality, commercial, sports, industrial, residential, education and specialised buildings in Gorakhpur and across North India.",
  path: "/industries",
  keywords: [
    "HVAC contractor for hospitals",
    "commercial HVAC contractor",
    "industrial HVAC contractor",
    "hotel HVAC contractor",
  ],
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="HVAC for the sectors we build for."
        intro="A building's use decides its air. We work across public infrastructure, healthcare, hospitality, commerce, industry, sport, education and housing, with the system scope matched to the sector."
        crumbs={[{ label: "Sectors" }]}
        image="/images/commercial-glass.jpg"
        imageAlt="Commercial building with blue glazing and a curved entrance canopy"
        imageCaption="Commercial, institutional and public buildings all need a different HVAC balance."
        meta={[
          { label: "Sectors covered", value: "Nine building categories" },
          { label: "Base", value: "Gorakhpur, Uttar Pradesh" },
          { label: "Service area", value: "UP, Bihar and adjoining regions" },
          { label: "Projects", value: "Government and private sector" },
        ]}
      />

      <Section>
        <div className="container-x">
          <SectionHeading
            title="Nine building categories, one technical standard."
            description="Each sector page lists the spaces we cover and the HVAC systems typically used there. Open a sector for the full scope."
          />
          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <SectorCard
                key={sector.slug}
                sector={sector}
                aspect="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[16ch]">Systems cross every sector.</h2>
            <p className="lede mt-5 max-w-[44ch]">
              The building type changes the application, not the need for a
              properly designed and commissioned system.
            </p>
            <Link href="/hvac-systems" className="btn btn-primary mt-8">
              Explore HVAC systems
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {systems.slice(0, 6).map((system) => (
                <Link
                  key={system.slug}
                  href={`/hvac-systems/${system.slug}`}
                  className="group flex items-center justify-between gap-6 border-b border-line py-4"
                >
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {system.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-muted">{system.tagline}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
                </Link>
              ))}
              <Link
                href="/hvac-systems"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                All systems
                <ArrowRight className="h-4 w-4 text-accent-deep" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <ContactCta
        title="Not sure which sector fits?"
        description="Describe the building and how it will be used. We will map it to the right system and service scope."
      />
    </>
  );
}
