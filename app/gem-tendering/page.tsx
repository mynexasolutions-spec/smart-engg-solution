import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { projectDocuments } from "@/data/services";
import { site } from "@/data/site";
import { whatsappHref } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GeM and Government Tendering",
  description:
    "GeM HVAC contractor in Gorakhpur. Smart Engineering Solution participates in Government e-Marketplace and government e-tenders for supply, installation, testing, commissioning and AMC of HVAC systems.",
  path: "/gem-tendering",
  keywords: [
    "GeM HVAC contractor",
    "Government e-tender HVAC",
    "GeM seller HVAC",
    "Government HVAC tendering",
  ],
});

const procurementRoutes = [
  "Government e-Marketplace (GeM)",
  "Government e-tenders",
  "Public sector tenders",
  "State government projects",
  "Central government projects",
  "Government infrastructure projects",
  "Institutional HVAC contracts",
  "Commercial HVAC contracts",
];

const contractTypes = [
  "Turnkey HVAC projects",
  "Supply and installation contracts",
  "HVAC operation and maintenance contracts",
  "Equipment supply against approved BOQ",
  "Ducting, piping and ventilation packages",
  "Testing, commissioning and AMC",
];

const tenderSteps = [
  {
    title: "Tender review",
    description:
      "We read the bid documents, BOQ, technical specifications, drawings and completion requirements.",
  },
  {
    title: "Site and scope check",
    description:
      "Plant space, access, power availability, routing constraints and site conditions are checked before pricing.",
  },
  {
    title: "Submission",
    description:
      "The bid is submitted through GeM or the applicable government e-tender platform with the required documents.",
  },
  {
    title: "Award and submittals",
    description:
      "After award, equipment selections, drawings and material submittals are prepared for approval.",
  },
  {
    title: "Execution",
    description:
      "Supply, installation, testing and commissioning are carried out against the approved specification and BOQ.",
  },
  {
    title: "Handover and O&M",
    description:
      "Commissioning records and documentation are handed over, with maintenance or AMC support as required.",
  },
];

export default function GemTenderingPage() {
  return (
    <>
      <PageHero
        title="GeM and government HVAC tendering."
        intro="Smart Engineering Solution participates in GeM and other applicable government e-tendering platforms for HVAC supply, installation, testing, commissioning and maintenance work."
        crumbs={[{ label: "GeM and government tendering" }]}
        image="/images/indianoil.jpg"
        imageAlt="Public sector office building with a louvred facade"
        imageCaption="Public sector and government buildings are procured through defined tender routes."
        meta={[
          { label: "GSTIN", value: site.gstin },
          { label: "MSME Udyam", value: site.udyam },
          { label: "Business type", value: "Proprietorship" },
          { label: "Based in", value: "Gorakhpur, Uttar Pradesh" },
        ]}
      />

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="display-2 max-w-[18ch]">
              Public procurement, without shortcuts.
            </h2>
            <div className="mt-6 max-w-[68ch] space-y-4 text-base leading-relaxed text-ink-2">
              <p>
                Government HVAC work is awarded through a defined process. We
                review the tender documents, confirm the scope and site
                conditions, and submit through the platform named in the bid.
              </p>
              <p>
                Once awarded, the project is executed against the approved BOQ,
                technical specifications and drawings. Material submittals,
                installation checks, testing and commissioning are handled in
                the same sequence as the contract requires.
              </p>
              <p>
                We do not add equipment or scope that is not in the approved
                documents. If a site condition changes the scope, it is raised
                for clarification before work proceeds.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="border-t border-line pt-4">
                <h3 className="font-display text-base font-semibold">Procurement routes</h3>
                <ul className="mt-3 space-y-2">
                  {procurementRoutes.map((route) => (
                    <li key={route} className="flex items-start gap-2 text-sm text-ink-muted">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-deep" aria-hidden="true" />
                      {route}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-line pt-4">
                <h3 className="font-display text-base font-semibold">Contract types</h3>
                <ul className="mt-3 space-y-2">
                  {contractTypes.map((type) => (
                    <li key={type} className="flex items-start gap-2 text-sm text-ink-muted">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-deep" aria-hidden="true" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-line bg-paper-2 p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <FileText className="h-5 w-5 text-accent-deep" aria-hidden="true" />
                Send these for a review
              </h3>
              <ul className="mt-4 border-t border-line">
                {projectDocuments.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start gap-2.5 border-b border-line py-3 text-sm text-ink-2"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-accent-deep" aria-hidden="true" />
                    {doc}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappHref(
                  "Hello Smart Engineering Solution, I have a GeM or government HVAC tender to review.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mt-6 w-full"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp the tender
              </a>
              <Link href="/contact" className="btn btn-outline mt-3 w-full">
                Use the inquiry form
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x">
          <SectionHeading
            title="From bid to handover."
            description="A tender becomes a project only after the scope, site and specification have been checked. The sequence below is how we keep the two connected."
            titleClassName="text-on-dark"
          />
          <ol className="mt-12 grid gap-8 border-t border-line-dark pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {tenderSteps.map((step, index) => (
              <li key={step.title} className="min-w-0">
                <span className="font-display text-3xl font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-on-dark">
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

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[15ch]">Business identity.</h2>
            <p className="lede mt-5 max-w-[44ch]">
              Our GST and MSME Udyam details are available for vendor
              registration and tender submissions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/certifications" className="btn btn-primary">
                View documents
              </Link>
              <Link href="/government-projects" className="btn btn-outline">
                Government projects
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <dl className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {[
                { label: "Trade name", value: site.tradeName },
                { label: "Proprietor", value: site.legalName },
                { label: "GSTIN", value: site.gstin },
                { label: "MSME Udyam", value: site.udyam },
                { label: "Registered office", value: "Gorakhnath, Gorakhpur 273015" },
                { label: "Business category", value: "HVAC contracting and services" },
              ].map((item) => (
                <div key={item.label} className="bg-paper p-5">
                  <dt className="meta">{item.label}</dt>
                  <dd className="credential-value mt-1 text-sm font-semibold text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex items-start gap-3 border border-line p-5">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-ink-2">
                Tender documents and vendor forms are reviewed before
                submission. If a requirement falls outside our scope, we say so
                before bidding.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x">
          <SectionHeading
            title="Where the HVAC scope usually sits."
            description="Most government tenders fall into one of these project categories. Each has a different equipment mix and site sequence."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Government buildings",
                href: "/industries/government-public-sector",
                description: "Offices, administrative buildings, PSUs and public institutions.",
              },
              {
                title: "Healthcare",
                href: "/industries/hospital-healthcare",
                description: "Hospitals, medical colleges, AIIMS and critical care areas.",
              },
              {
                title: "Institutional campuses",
                href: "/industries/education-institutional",
                description: "Universities, schools, libraries, labs and hostels.",
              },
              {
                title: "Sports and assembly",
                href: "/industries/sports-recreation",
                description: "Stadiums, indoor sports halls, auditoriums and convention centres.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col justify-between gap-6 border-t border-line pt-5"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-accent-deep transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <ContactCta
        title="Send the bid documents."
        description="Share the tender ID, BOQ, specifications and site details on WhatsApp or email. We will review the HVAC scope before the submission date."
      />
    </>
  );
}
