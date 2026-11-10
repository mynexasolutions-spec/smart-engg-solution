import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import {
  installationMaterials,
  productGroups,
  showroomBrands,
} from "@/data/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "HVAC Equipment and Products",
  description:
    "HVAC equipment and materials in Gorakhpur: VRF units, chillers, AHU, FCU, ducting, grilles, diffusers, dampers, copper piping, insulation, ventilation fans, controls, BMS and installation accessories.",
  path: "/products",
  keywords: [
    "HVAC equipment supplier Gorakhpur",
    "VRF units supplier",
    "AHU supplier",
    "HVAC ducting materials",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="HVAC equipment, materials and accessories."
        intro="Supply against an approved specification and BOQ, from complete air conditioning equipment to ducting, piping, ventilation and controls."
        crumbs={[{ label: "Equipment and products" }]}
        image="/images/showroom.jpg"
        imageAlt="Smart Engineering Solution showroom shelves with HVAC equipment and materials"
        imageCaption="Equipment and materials displayed at our showroom in Gorakhpur."
        meta={[
          { label: "Supply basis", value: "Approved specification and BOQ" },
          { label: "Equipment", value: "Multi-brand" },
          { label: "Materials", value: "Ducting, piping, insulation, controls" },
          { label: "Showroom", value: "Fatma Bypass Road, Gorakhpur" },
        ]}
      />

      <Section>
        <div className="container-x">
          <SectionHeading
            title="What we supply."
            description="Products are confirmed against the approved make, model and technical specification before procurement."
            action={
              <Link href="/contact" className="btn btn-primary">
                Send a BOQ
              </Link>
            }
          />

          <div className="mt-12 grid gap-x-10 gap-y-12 lg:grid-cols-2">
            {productGroups.map((group, index) => (
              <article key={group.title} className="border-t border-line pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {group.title}
                  </h3>
                  <span className="text-sm tabular-nums text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-ink-muted">
                  {group.description}
                </p>
                <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-2">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-accent-deep" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="display-2 max-w-[14ch]">Installation material.</h2>
            <p className="lede mt-5 max-w-[40ch]">
              The small items decide how the system performs and how long it
              lasts. We supply them with the equipment, not as an afterthought.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid gap-x-8 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {installationMaterials.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-line py-2.5 text-sm text-ink-2"
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
                src="/images/showroom.jpg"
                alt="Equipment display wall at the Smart Engineering Solution showroom"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="display-2 max-w-[15ch]">Brands at the showroom.</h2>
            <p className="lede mt-5 max-w-[48ch]">
              Our showroom displays equipment and components from established
              air conditioning brands. The make and model for your project are
              confirmed against the approved specification.
            </p>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5">
              {showroomBrands.map((brand) => (
                <li key={brand} className="font-display text-lg font-semibold text-ink">
                  {brand}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-ink-muted">
              Brand availability depends on the project specification, model and
              current supply. It is not a claim of exclusive dealership.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-outline">
                Check availability
              </Link>
              <Link href="/hvac-systems" className="btn btn-ghost">
                System scope
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x">
          <SectionHeading
            title="Supply is tied to the specification."
            description="We do not substitute a machine or material without approval. The sequence below keeps procurement aligned with the design."
            titleClassName="text-on-dark"
          />
          <div className="mt-10 grid gap-8 border-t border-line-dark pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Specification review",
                description: "Approved make, model, capacity and material schedule are checked.",
              },
              {
                title: "Vendor confirmation",
                description: "Availability and lead time are confirmed before the order is placed.",
              },
              {
                title: "Delivery coordination",
                description: "Delivery is sequenced with site readiness and storage arrangements.",
              },
              {
                title: "Installation support",
                description: "Material is matched to the installation drawings and commissioning plan.",
              },
            ].map((step, index) => (
              <div key={step.title}>
                <span className="font-display text-3xl font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-on-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-accent">
              Request a quotation
            </Link>
            <Link href="/certifications" className="btn btn-outline-light">
              <Check className="h-4 w-4" aria-hidden="true" />
              Registration documents
            </Link>
          </div>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
