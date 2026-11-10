import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ProjectGallery } from "@/components/project-gallery";
import { Section, SectionHeading } from "@/components/section";
import { sectors } from "@/data/sectors";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Project Gallery",
  description:
    "HVAC project gallery from Smart Engineering Solution, Gorakhpur. Government, healthcare, education, hospitality, commercial and sports building environments.",
  path: "/projects",
  keywords: [
    "HVAC projects Gorakhpur",
    "HVAC contractor project gallery",
    "commercial HVAC projects",
    "government HVAC projects",
  ],
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Project gallery."
        intro="A visual record of the building environments our HVAC work is built for, from public institutions and healthcare campuses to hotels, sports halls and commercial spaces."
        crumbs={[{ label: "Project gallery" }]}
        image="/images/auditorium.jpg"
        imageAlt="Auditorium with tiered seating and concealed ceiling air distribution"
        imageCaption="Large occupied spaces need air distribution, ventilation and acoustic coordination."
        meta={[
          { label: "Sectors", value: "Government, healthcare, education, hospitality, commercial, sports" },
          { label: "Base", value: "Gorakhpur, Uttar Pradesh" },
          { label: "Scope", value: "Design to commissioning" },
          { label: "Support", value: "AMC and maintenance" },
        ]}
      />

      <Section>
        <div className="container-x">
          <SectionHeading
            title="Sites and installed environments."
            description="Filter the gallery by sector. Photography is from project sites and installed environments; client details are shared only where permitted."
            action={
              <Link href="/contact" className="btn btn-outline">
                Discuss a similar project
              </Link>
            }
          />
          <div className="mt-10">
            <ProjectGallery />
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x">
          <SectionHeading
            title="Find the sector closest to your project."
            description="Each sector page lists the spaces we cover and the systems typically used."
          />
          <div className="mt-10 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/industries/${sector.slug}`}
                className="flex items-center justify-between gap-4 border-t border-line py-4 text-sm font-semibold text-ink"
              >
                {sector.name}
                <ArrowRight className="h-4 w-4 shrink-0 text-accent-deep" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <ContactCta
        title="Have a similar site?"
        description="Send the location, building use and scope. We will review what the project needs and how we can execute it."
      />
    </>
  );
}
