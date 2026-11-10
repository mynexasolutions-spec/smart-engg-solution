import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { SectorCard } from "@/components/sector-card";
import { sectors } from "@/data/sectors";
import { getSystem, systems } from "@/data/systems";
import { siteUrl } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return systems.map((system) => ({ slug: system.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) return {};
  return pageMetadata({
    title: system.name,
    description: `${system.description} Smart Engineering Solution provides design, supply, installation, testing, commissioning and AMC for ${system.shortName.toLowerCase()} systems in Gorakhpur and North India.`,
    path: `/hvac-systems/${system.slug}`,
    keywords: system.keywords,
    image: system.image,
  });
}

export default async function SystemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) notFound();

  const relatedSystems = systems
    .filter((item) => item.slug !== system.slug)
    .slice(0, 3);

  const relatedSectors = sectors
    .filter((sector) => sector.systems.includes(system.slug))
    .slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: system.name,
    description: system.description,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: ["Gorakhpur", "Uttar Pradesh", "Bihar", "India"],
    serviceType: "HVAC contracting",
    url: `${siteUrl}/hvac-systems/${system.slug}`,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title={system.title}
        intro={system.intro}
        crumbs={[{ label: "HVAC systems", href: "/hvac-systems" }, { label: system.shortName }]}
        image={system.image}
        imageAlt={system.imageAlt}
        imageCaption={system.tagline}
        meta={[
          { label: "System", value: system.name },
          { label: "Scope", value: "Supply, install and commission" },
          { label: "Support", value: "AMC and maintenance" },
          { label: "Base", value: "Gorakhpur, Uttar Pradesh" },
        ]}
      />

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="display-2 max-w-[18ch]">What this system includes.</h2>
            <p className="lede mt-5 max-w-[56ch]">{system.description}</p>
            <ul className="mt-8 grid gap-x-8 border-t border-line sm:grid-cols-2">
              {system.components.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-line py-3 text-sm text-ink-2"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-deep" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-line bg-paper-2 p-6">
              <h2 className="font-display text-lg font-semibold">
                Where it is used
              </h2>
              <ul className="mt-3 space-y-2.5 border-t border-line pt-4">
                {system.applications.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-2">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-accent-deep" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary mt-6 w-full">
                Discuss this system
              </Link>
            </div>
            <div className="mt-6 border border-line p-6">
              <h2 className="font-display text-lg font-semibold">Installation scope</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">
                We execute the complete installation and can continue with
                preventive maintenance and AMC after commissioning.
              </p>
              <Link
                href="/hvac-systems"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                Compare systems
                <ArrowUpRight className="h-4 w-4 text-accent-deep" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[15ch]">What we execute.</h2>
            <p className="lede mt-5 max-w-[42ch] text-on-dark-muted">
              The scope below can be handled as a complete package or as part of
              a larger turnkey project.
            </p>
            <Link href="/solutions/turnkey" className="btn btn-accent mt-8">
              Turnkey HVAC
            </Link>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-x-8 border-t border-line-dark sm:grid-cols-2">
              {system.scope.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-line-dark py-3 text-sm text-on-dark-muted"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {relatedSectors.length > 0 ? (
        <Section>
          <div className="container-x">
            <SectionHeading
              title="Where we apply it."
              description="Selected sectors that commonly use this system."
              action={
                <Link href="/industries" className="btn btn-outline">
                  All sectors
                </Link>
              }
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedSectors.map((sector) => (
                <SectorCard key={sector.slug} sector={sector} aspect="aspect-[4/3]" />
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      <Section tone="paper-2">
        <div className="container-x">
          <SectionHeading
            title="Related systems."
            description="A building often uses more than one system. These are commonly specified alongside it."
            action={
              <Link href="/hvac-systems" className="btn btn-outline">
                All systems
              </Link>
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedSystems.map((item) => (
              <Link
                key={item.slug}
                href={`/hvac-systems/${item.slug}`}
                className="group border-t border-line pt-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {item.tagline}
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
        title={`Planning a ${system.shortName.toLowerCase()} installation?`}
        description="Send the building details, drawings or BOQ. We will review the system requirement and respond with the next step."
      />
    </>
  );
}
