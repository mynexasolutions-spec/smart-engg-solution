import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  FileText,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { CredentialList } from "@/components/credential-list";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { projects } from "@/data/projects";
import { processSteps, projectDocuments } from "@/data/services";
import { getSector } from "@/data/sectors";
import { systemBySlug } from "@/data/systems";
import { site } from "@/data/site";
import { whatsappHref } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Government HVAC Projects",
  description:
    "Government HVAC contractor in Gorakhpur for central and state government buildings, hospitals, railways, defence, PSUs, universities and public infrastructure projects. GeM and e-tender participation.",
  path: "/government-projects",
  keywords: [
    "Government HVAC contractor",
    "Government HVAC projects",
    "Railway HVAC contractor",
    "GeM HVAC contractor",
  ],
});

const governmentSector = getSector("government-public-sector")!;

const relatedProjects = ["aiims", "auditorium", "indianoil", "university"]
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is NonNullable<(typeof projects)[number]> => Boolean(project));

export default function GovernmentProjectsPage() {
  return (
    <>
      <PageHero
        title="HVAC for government and public sector projects."
        intro="Public buildings need documented execution. We take HVAC scopes through approved BOQs, drawings, technical specifications, testing and commissioning, with the records to match."
        crumbs={[{ label: "Government projects" }]}
        image="/images/aiims-gorakhpur.jpg"
        imageAlt="All India Institute of Medical Sciences, Gorakhpur"
        imageCaption="Government healthcare and institutional campuses are among the public building types we serve."
        meta={[
          { label: "Procurement", value: "GeM and e-tenders" },
          { label: "GSTIN", value: site.gstin },
          { label: "MSME Udyam", value: site.udyam },
          { label: "Established", value: "2020" },
        ]}
      />

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[15ch]">Buildings in the public record.</h2>
            <p className="lede mt-5 max-w-[46ch]">
              Government work covers a wide range of building types, each with
              its own occupancy, safety and maintenance requirements.
            </p>
            <div className="mt-8">
              <Link href="/gem-tendering" className="btn btn-primary">
                How we work on GeM
              </Link>
            </div>
            <CredentialList className="mt-10" columns={2} />
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-x-8 border-t border-line sm:grid-cols-2">
              {governmentSector.points.map((point) => (
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
      </Section>

      <Section tone="dark">
        <div className="container-x">
          <SectionHeading
            title="Tender routes and execution."
            description="We participate in government procurement through GeM and other applicable e-tendering platforms. The scope is executed as awarded, with clarifications handled before materials are ordered."
            titleClassName="text-on-dark"
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ol className="border-t border-line-dark">
                {processSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="grid gap-2 border-b border-line-dark py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <span className="text-sm tabular-nums text-on-dark-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-on-dark">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-on-dark-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-line-dark p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-on-dark">
                  <FileText className="h-5 w-5 text-accent" aria-hidden="true" />
                  Documents we review
                </h3>
                <ul className="mt-4 space-y-2.5 border-t border-line-dark pt-4">
                  {projectDocuments.map((doc) => (
                    <li key={doc} className="flex items-start gap-2.5 text-sm text-on-dark-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappHref(
                    "Hello Smart Engineering Solution, I would like to discuss a government HVAC project.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp mt-6 w-full"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Send the tender details
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[15ch]">Systems used in public buildings.</h2>
            <p className="lede mt-5 max-w-[44ch]">
              The system mix depends on the building use, plant space and
              maintenance arrangement.
            </p>
            <Link href="/hvac-systems" className="btn btn-outline mt-8">
              All HVAC systems
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {governmentSector.systems.map((slug) => {
                const system = systemBySlug.get(slug);
                if (!system) return null;
                return (
                  <Link
                    key={slug}
                    href={`/hvac-systems/${system.slug}`}
                    className="group flex items-center justify-between gap-6 border-b border-line py-5"
                  >
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {system.name}
                      </h3>
                      <p className="mt-1 max-w-[56ch] text-sm text-ink-muted">
                        {system.tagline}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x">
          <SectionHeading
            title="Public building work in view."
            description="A selection of government, healthcare and institutional environments from our project records."
            action={
              <Link href="/projects" className="btn btn-outline">
                Full gallery
              </Link>
            }
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProjects.map((project) => (
              <figure key={project.id}>
                <Link href="/projects" className="group block">
                  <div className="media-frame aspect-[4/3]">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                </Link>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <ContactCta
        title="Have a government tender to review?"
        description="Send the tender ID, BOQ and specifications. We will review the HVAC scope and confirm what can be executed."
      />
    </>
  );
}
