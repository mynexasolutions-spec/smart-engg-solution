import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { ContactCta } from "@/components/contact-cta";
import { FaqList } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeading } from "@/components/section";
import { SectorCard } from "@/components/sector-card";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { faqs } from "@/data/faqs";
import { projects } from "@/data/projects";
import { processSteps, whyChoose } from "@/data/services";
import { getSector } from "@/data/sectors";
import { site } from "@/data/site";
import { displayPhone, telHref, whatsappHref } from "@/lib/utils";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "HVAC Contractor in Gorakhpur",
  description:
    "Smart Engineering Solution is an HVAC contractor in Gorakhpur for government, commercial, industrial, healthcare, hospitality and institutional projects. Design, supply, installation, commissioning and AMC.",
  path: "/",
  keywords: [
    "HVAC contractor Gorakhpur",
    "Government HVAC contractor",
    "GeM HVAC contractor",
    "VRF VRV contractor Gorakhpur",
  ],
});

const homeSectorSlugs = [
  "government-public-sector",
  "hospital-healthcare",
  "commercial-buildings",
  "hotel-hospitality",
  "industrial-factory",
  "sports-recreation",
];

const featuredProjects = ["aiims", "showroom", "auditorium", "badminton-hall"];

const featuredSystems = [
  {
    title: "VRF and VRV systems",
    href: "/hvac-systems/vrf-vrv",
    description:
      "Zoned cooling for offices, hotels, hospitals and residences with a single refrigerant network.",
    items: ["Outdoor and indoor units", "Branch joints and refnet piping", "Zone controllers"],
  },
  {
    title: "Chiller plant systems",
    href: "/hvac-systems/chiller-plants",
    description:
      "Central plants for large, continuous cooling loads with pumps, cooling towers and controls.",
    items: ["Air-cooled and water-cooled chillers", "Chilled water piping", "Plant room commissioning"],
  },
  {
    title: "AHU and ventilation",
    href: "/hvac-systems/ahu-ventilation",
    description:
      "Conditioned air, fresh air and exhaust systems with ducting and air distribution.",
    items: ["AHU, FAHU and TFA units", "GI and PUF ducting", "Grilles, diffusers and dampers"],
  },
  {
    title: "Ducting and copper piping",
    href: "/hvac-systems/ducting-piping",
    description:
      "The distribution network that carries refrigerant, water and air through the building.",
    items: ["Refrigerant copper piping", "Nitrile and XLP insulation", "Pressure testing and balancing"],
  },
];

export default function HomePage() {
  const sectorCards = homeSectorSlugs
    .map((slug) => getSector(slug))
    .filter((sector): sector is NonNullable<ReturnType<typeof getSector>> => Boolean(sector));

  const featured = featuredProjects
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<(typeof projects)[number]> => Boolean(project));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="border-b border-line bg-paper">
        <div className="container-x grid gap-10 pb-12 pt-10 lg:grid-cols-12 lg:gap-14 lg:pb-16 lg:pt-14">
          <div className="flex flex-col justify-center lg:col-span-6">
            <h1 className="display-1 hero-rise max-w-[13ch]">
              HVAC engineering for buildings that matter.
            </h1>
            <p className="hero-rise hero-rise-delay-1 lede mt-6 max-w-[50ch]">
              Design, supply, installation and commissioning for government,
              commercial, industrial and healthcare HVAC projects across
              Gorakhpur and North India.
            </p>
            <div className="hero-actions hero-rise hero-rise-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Send your requirement
              </ButtonLink>
              <ButtonLink
                href={telHref(site.people[0].phone)}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="tabular-nums">
                  Call {displayPhone(site.people[0].phone)}
                </span>
              </ButtonLink>
            </div>
            <p className="hero-rise hero-rise-delay-2 mt-6 max-w-[48ch] text-sm leading-relaxed text-ink-muted">
              Government tenders, BOQs, drawings and AMC enquiries are welcome.
              For urgent work, call or send the requirement on WhatsApp.
            </p>
          </div>

          <div className="hero-rise hero-rise-delay-2 min-w-0 lg:col-span-6">
            <figure>
              <div className="media-frame aspect-[4/3] w-full lg:aspect-[5/4.3]">
                <Image
                  src="/images/showroom.jpg"
                  alt="Smart Engineering Solution showroom with air conditioning equipment and brand displays"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex flex-col gap-1 border border-t-0 border-line px-4 py-3 text-sm text-ink-2 sm:flex-row sm:items-center sm:justify-between">
                <span>Showroom and equipment display, Fatma Bypass Road</span>
                <Link
                  href="/projects"
                  className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-ink transition-colors hover:text-accent-deep"
                >
                  View project gallery
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="container-x">
          <dl className="grid gap-px border-t border-line pt-6 pb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="py-1 sm:pr-6">
              <dt className="meta">Based in</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">
                Gorakhpur, Uttar Pradesh
              </dd>
            </div>
            <div className="py-1 sm:border-l sm:border-line sm:pl-6">
              <dt className="meta">Established</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">2020</dd>
            </div>
            <div className="py-1 lg:border-l lg:border-line lg:pl-6">
              <dt className="meta">GSTIN</dt>
              <dd className="credential-value mt-1 text-sm font-semibold text-ink">
                {site.gstin}
              </dd>
            </div>
            <div className="py-1 lg:border-l lg:border-line lg:pl-6">
              <dt className="meta">MSME Udyam</dt>
              <dd className="credential-value mt-1 text-sm font-semibold text-ink">
                {site.udyam}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <Section>
        <div className="container-x">
          <SectionHeading
            title="Where our HVAC work lives."
            description="Public buildings, hospitals, hotels, offices, factories and sports halls each ask for a different balance of air, filtration, control and maintenance access."
            action={
              <Link href="/industries" className="btn btn-outline">
                Explore all sectors
              </Link>
            }
          />

          <div className="mt-12 grid gap-x-6 gap-y-10 lg:grid-cols-12">
            <SectorCard
              sector={sectorCards[0]}
              aspect="aspect-[16/10]"
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="lg:col-span-7"
            />
            <SectorCard
              sector={sectorCards[1]}
              aspect="aspect-[16/10]"
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="lg:col-span-5"
            />
            <SectorCard
              sector={sectorCards[2]}
              aspect="aspect-[4/3]"
              className="lg:col-span-4"
            />
            <SectorCard
              sector={sectorCards[3]}
              aspect="aspect-[4/3]"
              className="lg:col-span-4"
            />
            <SectorCard
              sector={sectorCards[4]}
              aspect="aspect-[4/3]"
              className="lg:col-span-4"
            />
          </div>

          <div className="mt-10 border-t border-line pt-6">
            <Link
              href={`/industries/${sectorCards[5].slug}`}
              className="group flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {sectorCards[5].name}
                </h3>
                <p className="mt-1 max-w-[70ch] text-sm text-ink-muted">
                  {sectorCards[5].description}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                View sector
                <ArrowUpRight className="h-4 w-4 text-accent-deep transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <h2 className="display-2 max-w-[15ch]">
                One contractor, from load calculation to AMC.
              </h2>
              <p className="lede mt-5 max-w-[46ch]">
                We keep design, equipment, installation and maintenance in the
                same scope so responsibility does not stop at a delivery
                challan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/services" className="btn btn-primary">
                  Our services
                </Link>
                <Link href="/solutions/turnkey" className="btn btn-outline">
                  Turnkey HVAC
                </Link>
              </div>
              <dl className="mt-10 border-t border-line">
                <div className="flex items-center justify-between gap-4 border-b border-line py-3">
                  <dt className="text-sm text-ink-muted">Design and BOQ</dt>
                  <dd className="text-sm font-semibold text-ink">In house</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-line py-3">
                  <dt className="text-sm text-ink-muted">Supply and installation</dt>
                  <dd className="text-sm font-semibold text-ink">Single scope</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-line py-3">
                  <dt className="text-sm text-ink-muted">Testing and commissioning</dt>
                  <dd className="text-sm font-semibold text-ink">Documented</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {[
                {
                  title: "HVAC design and engineering",
                  description:
                    "Heat load calculation, system selection, equipment schedules, BOQ and technical specifications.",
                  href: "/services",
                },
                {
                  title: "Equipment supply",
                  description:
                    "Air conditioning, ventilation and control equipment supplied against the approved specification.",
                  href: "/products",
                },
                {
                  title: "Installation and execution",
                  description:
                    "VRF, chiller, AHU, ducting, refrigerant piping, ventilation, electrical and control works.",
                  href: "/solutions/turnkey",
                },
                {
                  title: "Testing and commissioning",
                  description:
                    "Pressure testing, air balancing, control checks, performance testing and handover.",
                  href: "/solutions/turnkey",
                },
                {
                  title: "AMC and maintenance",
                  description:
                    "Preventive maintenance, breakdown support, operation and maintenance, upgrades and replacements.",
                  href: "/services/amc-maintenance",
                },
                {
                  title: "Government contracting",
                  description:
                    "GeM and government e-tender participation with execution against approved BOQs and specifications.",
                  href: "/gem-tendering",
                },
              ].map((service, index) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group grid gap-2 border-b border-line py-5 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-start sm:gap-6"
                >
                  <span className="text-sm tabular-nums text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold text-ink">
                      {service.title}
                    </span>
                    <span className="mt-1 block max-w-[52ch] text-sm leading-relaxed text-ink-2">
                      {service.description}
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1 hidden h-4 w-4 shrink-0 text-ink-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink sm:block" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="display-2 max-w-[18ch]">
              Government HVAC, executed to the specification.
            </h2>
            <p className="lede mt-5 max-w-[52ch] text-on-dark-muted">
              We participate in GeM and government e-tenders for public
              buildings, hospitals, institutions and infrastructure projects.
              Work is executed against approved BOQs, drawings and technical
              requirements, with testing and commissioning before handover.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/government-projects" className="btn btn-accent">
                Government projects
              </Link>
              <Link href="/gem-tendering" className="btn btn-outline-light">
                GeM and tendering
              </Link>
            </div>
            <div className="mt-10 grid gap-4 border-t border-line-dark pt-6 sm:grid-cols-3">
              <div>
                <div className="text-sm text-on-dark-muted">Tender routes</div>
                <div className="mt-1 text-sm font-semibold text-on-dark">
                  GeM, e-tenders and PSU tenders
                </div>
              </div>
              <div>
                <div className="text-sm text-on-dark-muted">Execution basis</div>
                <div className="mt-1 text-sm font-semibold text-on-dark">
                  BOQ, drawings and specifications
                </div>
              </div>
              <div>
                <div className="text-sm text-on-dark-muted">Registration</div>
                <div className="credential-value mt-1 text-sm font-semibold text-on-dark">
                  GSTIN and MSME Udyam
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-line-dark p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold text-on-dark">
                What we need to review a tender
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Tender ID or GeM bid details",
                  "Approved BOQ and technical specifications",
                  "HVAC drawings and site address",
                  "Completion timeline and site access",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-on-dark-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="my-6 border-t border-line-dark" />
              <p className="text-sm leading-relaxed text-on-dark-muted">
                Share the documents on WhatsApp or email. We will confirm the
                scope, material requirement and site feasibility before quoting.
              </p>
              <a
                href={whatsappHref(
                  "Hello Smart Engineering Solution, I have a government HVAC tender to discuss.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mt-6 w-full"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Send tender details
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading
            title="Systems we design, install and commission."
            description="From a single VRF network to a full chiller plant, the scope covers equipment, distribution, controls and commissioning."
            action={
              <Link href="/hvac-systems" className="btn btn-outline">
                All HVAC systems
              </Link>
            }
          />
          <div className="mt-12 grid border-l border-t border-line md:grid-cols-2">
            {featuredSystems.map((system, index) => (
              <Link
                key={system.href}
                href={system.href}
                className="group flex flex-col justify-between gap-8 border-b border-r border-line p-6 transition-colors hover:bg-paper-2 sm:p-8"
              >
                <div>
                  <span className="text-sm tabular-nums text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                    {system.title}
                  </h3>
                  <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-ink-2">
                    {system.description}
                  </p>
                </div>
                <div>
                  <ul className="space-y-1.5">
                    {system.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink-muted">
                        <span className="h-1 w-1 bg-accent-deep" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    View system
                    <ArrowUpRight className="h-4 w-4 text-accent-deep transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x">
          <SectionHeading
            title="How a project moves."
            description="A clear sequence keeps the design, site work and handover tied to the same set of documents."
            action={
              <Link href="/solutions/turnkey" className="btn btn-outline">
                Turnkey scope
              </Link>
            }
          />
          <ol className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-5 md:gap-5">
            {processSteps.map((step, index) => (
              <li key={step.title} className="min-w-0">
                <span className="font-display text-3xl font-semibold text-accent-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading
            title="Work in the field."
            description="Government campuses, healthcare buildings, hospitality projects, sports halls and commercial spaces. Photography from project sites and installed environments."
            action={
              <Link href="/projects" className="btn btn-outline">
                Project gallery
              </Link>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-12">
            <figure className="md:col-span-7">
              <div className="media-frame aspect-[16/10]">
                <Image
                  src={featured[0].src}
                  alt={featured[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm">
                <span className="font-semibold text-ink">{featured[0].title}</span>
                <span className="text-ink-muted">Healthcare</span>
              </figcaption>
            </figure>
            <figure className="md:col-span-5">
              <div className="media-frame aspect-[16/10] md:aspect-[4/3]">
                <Image
                  src={featured[1].src}
                  alt={featured[1].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm">
                <span className="font-semibold text-ink">{featured[1].title}</span>
                <span className="text-ink-muted">Commercial</span>
              </figcaption>
            </figure>
            <figure className="md:col-span-5">
              <div className="media-frame aspect-[16/10] md:aspect-[4/3]">
                <Image
                  src={featured[2].src}
                  alt={featured[2].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm">
                <span className="font-semibold text-ink">{featured[2].title}</span>
                <span className="text-ink-muted">Government</span>
              </figcaption>
            </figure>
            <figure className="md:col-span-7">
              <div className="media-frame aspect-[16/10]">
                <Image
                  src={featured[3].src}
                  alt={featured[3].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm">
                <span className="font-semibold text-ink">{featured[3].title}</span>
                <span className="text-ink-muted">Sports</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[16ch]">
              Why clients keep the scope with us.
            </h2>
            <p className="lede mt-5 max-w-[44ch]">
              The team that calculates the load can also install the system,
              test it and maintain it after handover.
            </p>
            <div className="mt-8">
              <Link href="/about" className="btn btn-primary">
                About the company
              </Link>
            </div>
            <dl className="mt-10 border-t border-line">
              <div className="flex items-center justify-between gap-4 border-b border-line py-3">
                <dt className="text-sm text-ink-muted">Managing Director</dt>
                <dd className="text-sm font-semibold text-ink">{site.people[0].name}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-line py-3">
                <dt className="text-sm text-ink-muted">Manager</dt>
                <dd className="text-sm font-semibold text-ink">{site.people[1].name}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-line py-3">
                <dt className="text-sm text-ink-muted">Service area</dt>
                <dd className="text-right text-sm font-semibold text-ink">
                  {site.serviceAreaShort}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {whyChoose.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-2 border-b border-line py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6"
                >
                  <span className="text-sm tabular-nums text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 max-w-[58ch] text-sm leading-relaxed text-ink-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display-2 max-w-[15ch]">
                Questions we get before a site visit.
              </h2>
              <p className="lede mt-5 max-w-[42ch]">
                If your question is about a live tender or an urgent breakdown,
                call directly.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {site.people.map((person) => (
                  <a
                    key={person.phone}
                    href={telHref(person.phone)}
                    className="group flex flex-col items-start justify-between gap-2 border border-line px-4 py-3 transition-colors hover:border-ink sm:flex-row sm:items-center"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-ink">
                        {person.name}
                      </span>
                      <span className="meta">{person.role}</span>
                    </span>
                    <span className="credential-value flex items-center gap-2 text-sm font-semibold text-ink">
                      <Phone className="h-4 w-4 text-accent-deep" aria-hidden="true" />
                      {displayPhone(person.phone)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <FaqList />
            </div>
          </div>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
