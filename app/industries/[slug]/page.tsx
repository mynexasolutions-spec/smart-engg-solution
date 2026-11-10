import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { projects, type ProjectSector } from "@/data/projects";
import { processSteps } from "@/data/services";
import { getSector, sectors } from "@/data/sectors";
import { systemBySlug } from "@/data/systems";
import { site } from "@/data/site";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const dynamicParams = false;

const projectSectorMap: Partial<Record<string, ProjectSector>> = {
  "government-public-sector": "government",
  "hospital-healthcare": "healthcare",
  "hotel-hospitality": "hospitality",
  "commercial-buildings": "commercial",
  "sports-recreation": "sports",
  "education-institutional": "education",
};

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return pageMetadata({
    title: sector.name,
    description: `${sector.description} Smart Engineering Solution provides HVAC design, supply, installation, testing, commissioning and AMC for ${sector.shortName.toLowerCase()} projects in Gorakhpur and North India.`,
    path: `/industries/${sector.slug}`,
    keywords: sector.keywords,
    image: sector.image,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const sectorProjects = projectSectorMap[sector.slug]
    ? projects.filter((project) => project.sector === projectSectorMap[sector.slug]).slice(0, 3)
    : [];

  const relatedSectors = sectors
    .filter((item) => item.slug !== sector.slug)
    .slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `HVAC for ${sector.name}`,
    description: sector.description,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: ["Gorakhpur", "Uttar Pradesh", "Bihar", "India"],
    serviceType: "HVAC contracting",
    url: `${siteUrl}/industries/${sector.slug}`,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title={sector.title}
        intro={sector.intro}
        crumbs={[{ label: "Sectors", href: "/industries" }, { label: sector.name }]}
        image={sector.image}
        imageAlt={sector.imageAlt}
        imageCaption={sector.tagline}
        meta={[
          { label: "Sector", value: sector.name },
          { label: "Base", value: "Gorakhpur, Uttar Pradesh" },
          { label: "Scope", value: "Design to AMC" },
          { label: "Work type", value: "Government and private" },
        ]}
      />

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="display-2 max-w-[18ch]">{sector.tagline}</h2>
            <p className="lede mt-5 max-w-[60ch]">{sector.description}</p>
            <div className="mt-10 border-t border-line">
              <h3 className="py-4 font-display text-lg font-semibold">
                Spaces and building types
              </h3>
              <ul className="grid gap-x-8 border-t border-line sm:grid-cols-2">
                {sector.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 border-b border-line py-3 text-sm text-ink-2"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-accent-deep" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-line bg-paper-2 p-6">
              <h2 className="font-display text-lg font-semibold">HVAC systems used here</h2>
              <div className="mt-3 border-t border-line">
                {sector.systems.map((systemSlug) => {
                  const system = systemBySlug.get(systemSlug);
                  if (!system) return null;
                  return (
                    <Link
                      key={system.slug}
                      href={`/hvac-systems/${system.slug}`}
                      className="group flex items-center justify-between gap-4 border-b border-line py-3"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-ink">
                          {system.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-ink-muted">
                          {system.tagline}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>
              <Link href="/contact" className="btn btn-primary mt-6 w-full">
                Discuss this sector
              </Link>
            </div>

            <div className="mt-6 border border-line p-6">
              <h2 className="font-display text-lg font-semibold">What we need</h2>
              <ul className="mt-3 space-y-2.5 border-t border-line pt-4">
                {[
                  "Building use and occupancy",
                  "Drawings or layout",
                  "Approved BOQ or tender",
                  "Site location and access",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x">
          <SectionHeading
            title="How the work is delivered."
            description={`The same sequence is applied to ${sector.shortName.toLowerCase()} projects, with the technical detail adapted to the building.`}
            titleClassName="text-on-dark"
          />
          <ol className="mt-12 grid gap-8 border-t border-line-dark pt-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {processSteps.map((step, index) => (
              <li key={step.title} className="min-w-0">
                <span className="font-display text-3xl font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-on-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {sectorProjects.length > 0 ? (
        <Section>
          <div className="container-x">
            <SectionHeading
              title="Images from this sector."
              description="Photography from project sites and installed environments."
              action={
                <Link href="/projects" className="btn btn-outline">
                  Project gallery
                </Link>
              }
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectorProjects.map((project) => (
                <figure key={project.id}>
                  <div className="media-frame aspect-[4/3]">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <span className="block text-sm font-semibold text-ink">
                      {project.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-ink-muted">
                      {project.caption}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      <Section tone="paper-2">
        <div className="container-x">
          <SectionHeading
            title="Other sectors."
            description="HVAC scope changes with the building. These sectors use related systems with different constraints."
            action={
              <Link href="/industries" className="btn btn-outline">
                All sectors
              </Link>
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedSectors.map((item) => (
              <Link
                key={item.slug}
                href={`/industries/${item.slug}`}
                className="group border-t border-line pt-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <ContactCta
        title={`Planning an HVAC scope for a ${sector.shortName.toLowerCase()} building?`}
        description={`Speak to ${site.people[0].name} and ${site.people[1].name} about the requirement, drawings or tender documents.`}
      />
    </>
  );
}
