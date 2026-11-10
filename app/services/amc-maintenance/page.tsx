import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { site } from "@/data/site";
import { displayPhone, telHref, whatsappHref } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "HVAC AMC and Maintenance",
  description:
    "HVAC annual maintenance contracts in Gorakhpur and North India. Preventive visits, breakdown support, operation and maintenance, upgrades and replacements for VRF, chiller, AHU, ducting and ventilation systems.",
  path: "/services/amc-maintenance",
  keywords: [
    "HVAC AMC services",
    "HVAC maintenance contractor Gorakhpur",
    "VRF AMC",
    "chiller plant maintenance",
    "annual maintenance contract HVAC",
  ],
});

const contractTypes = [
  {
    title: "Preventive maintenance",
    summary:
      "Scheduled visits across the year to clean, inspect, test and adjust the installed equipment before faults reach the building.",
    points: [
      "Filter cleaning and replacement advice",
      "Coil, drain and casing cleaning",
      "Electrical and control checks",
      "Refrigerant and water side checks",
      "Visit reports with observations",
    ],
  },
  {
    title: "Breakdown support",
    summary:
      "Attendance on reported faults, diagnosis and repair, with the scope confirmed before parts are replaced.",
    points: [
      "Fault diagnosis on site",
      "Repair or replacement recommendation",
      "Spare and material coordination",
      "System restart and verification",
      "Record of the work carried out",
    ],
  },
  {
    title: "Operation and maintenance",
    summary:
      "Day-to-day operation support for buildings that need the HVAC plant watched, logged and adjusted through the season.",
    points: [
      "Plant operating checks",
      "Temperature and pressure logging",
      "Air balancing adjustments",
      "Filter and belt upkeep",
      "Coordination with the building team",
    ],
  },
];

const maintenanceScope = [
  "Indoor and outdoor unit cleaning",
  "Filter inspection and cleaning",
  "Evaporator and condenser coil cleaning",
  "Drain line cleaning and checks",
  "Refrigerant charge verification",
  "Leak checks on accessible joints",
  "Compressor and fan motor checks",
  "Electrical terminal and contactor checks",
  "Control and thermostat checks",
  "Belt, bearing and vibration checks",
  "AHU and FCU servicing",
  "Chiller plant routine checks",
  "Duct and grille inspection",
  "Fresh air and exhaust fan checks",
  "Air balancing adjustments",
  "Performance readings and reports",
];

const suitedSystems = [
  { label: "VRF and VRV systems", href: "/hvac-systems/vrf-vrv" },
  { label: "Chiller plant systems", href: "/hvac-systems/chiller-plants" },
  { label: "AHU and ventilation", href: "/hvac-systems/ahu-ventilation" },
  { label: "Ducting and copper piping", href: "/hvac-systems/ducting-piping" },
  { label: "Precision and package units", href: "/hvac-systems/precision-package" },
  { label: "Ventilation and smoke control", href: "/hvac-systems/ventilation-smoke-control" },
  { label: "BMS and HVAC controls", href: "/hvac-systems/bms-controls" },
  { label: "Clean room and industrial HVAC", href: "/hvac-systems/cleanroom-industrial" },
];

const amcSteps = [
  {
    title: "Site survey and asset list",
    description:
      "We list the installed equipment, capacities, locations and current condition, then note access and isolation points.",
  },
  {
    title: "Scope and visit schedule",
    description:
      "The contract states what is covered, how often visits occur, what consumables are included and how breakdown calls are handled.",
  },
  {
    title: "Preventive visits",
    description:
      "Each visit follows a checklist for the equipment type. Readings and observations are recorded rather than assumed.",
  },
  {
    title: "Breakdown response",
    description:
      "Reported faults are attended, diagnosed and discussed. Repair or replacement is confirmed before work proceeds.",
  },
  {
    title: "Review and handover",
    description:
      "Service records are shared with the building team, with recommendations for repairs, upgrades or replacement where needed.",
  },
];

export default function AmcMaintenancePage() {
  return (
    <>
      <PageHero
        title="Maintenance that keeps the installed system working."
        intro="An HVAC system is only as good as the service behind it. We maintain VRF, chiller, AHU, ducting, ventilation and control systems with scheduled visits, recorded checks and clear breakdown support."
        crumbs={[
          { label: "Services", href: "/services" },
          { label: "AMC and maintenance" },
        ]}
        image="/images/commercial-glass.jpg"
        imageAlt="Commercial building with a glass facade and curved entrance canopy"
        imageCaption="Maintenance scope is set by the installed equipment, building use and access."
        meta={[
          { label: "Contract types", value: "Preventive, breakdown, O and M" },
          { label: "Coverage", value: "Gorakhpur and North India" },
          { label: "Systems", value: "VRF, chiller, AHU, ducting" },
          { label: "GSTIN", value: site.gstin },
        ]}
      />

      <Section>
        <div className="container-x">
          <SectionHeading
            title="Three ways to keep the plant attended."
            description="The right contract depends on how the building is used and how much the site team can handle in house. The scope is written down before the first visit."
            action={
              <Link href="/contact" className="btn btn-primary">
                Discuss an AMC
              </Link>
            }
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {contractTypes.map((type, index) => (
              <article key={type.title} className="flex flex-col border border-line p-6">
                <span className="text-sm tabular-nums text-ink-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {type.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{type.summary}</p>
                <ul className="mt-5 border-t border-line pt-4">
                  {type.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 border-b border-line py-2.5 text-sm text-ink-2"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" aria-hidden="true" />
                      {point}
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
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[16ch]">What a visit can cover.</h2>
            <p className="lede mt-5 max-w-[44ch]">
              The checklist is matched to the equipment, not copied across every
              site. Items outside the contract are quoted separately.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={telHref(site.people[0].phone)}
                className="btn btn-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {displayPhone(site.people[0].phone)}
              </a>
              <a
                href={whatsappHref(
                  "Hello Smart Engineering Solution, I would like to discuss an HVAC AMC.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-x-8 border-t border-line sm:grid-cols-2">
              {maintenanceScope.map((item) => (
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
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="display-2 max-w-[16ch]">How the contract runs.</h2>
            <ol className="mt-8 border-t border-line">
              {amcSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-2 border-b border-line py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6"
                >
                  <span className="text-sm tabular-nums text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-2">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-line bg-paper-2 p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-ink">
                Systems covered
              </h2>
              <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-ink-2">
                Maintenance can be taken for one system family or for the full
                installed plant.
              </p>
              <div className="mt-5 border-t border-line">
                {suitedSystems.map((system) => (
                  <Link
                    key={system.href}
                    href={system.href}
                    className="group flex items-center justify-between gap-4 border-b border-line py-3 text-sm font-medium text-ink-2 transition-colors hover:text-ink"
                  >
                    {system.label}
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                Equipment outside these families can still be reviewed. Send the
                make, model and capacity for confirmation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="display-2 max-w-[16ch]">What to send for an AMC quote.</h2>
            <p className="lede mt-5 max-w-[52ch] text-on-dark-muted">
              A short equipment list and a site visit are usually enough to
              prepare a scope. Existing service records help if they are
              available.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-accent">
                Send the equipment list
              </Link>
              <a
                href={whatsappHref(
                  "Hello Smart Engineering Solution, I would like an AMC quotation for our HVAC system.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                Send on WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ul className="border-t border-line-dark">
              {[
                "Equipment make, model and capacity",
                "Number of indoor and outdoor units",
                "Building type and site address",
                "Current maintenance arrangement",
                "Known faults or recurring issues",
                "Preferred visit frequency",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-line-dark py-3 text-sm text-on-dark-muted"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <ContactCta
        title="Need the plant attended before the season?"
        description="Share the equipment list, site location and current issues. We will review what a preventive or breakdown contract should include."
      />
    </>
  );
}
