import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, Download, FileText } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { CredentialList } from "@/components/credential-list";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Certifications and Registrations",
  description:
    "GST registration and MSME Udyam registration documents for Smart Engineering Solution, an HVAC contractor in Gorakhpur, Uttar Pradesh. View and download the certificates.",
  path: "/certifications",
  keywords: [
    "Smart Engineering Solution GST",
    "HVAC contractor Udyam registration",
    "HVAC contractor certifications Gorakhpur",
  ],
});

const documents = [
  {
    title: "GST registration certificate",
    form: "Form GST REG-06",
    detail:
      "Registration under the Goods and Services Tax Act for the proprietorship trading as Smart Engineering Solution.",
    issued: "Issued 30 October 2023",
    image: "/Certifications/gst-registration.jpg",
    pdf: "/Certifications/AA091023159908X_RC30102023 (1).pdf",
    rows: [
      { label: "Legal name", value: site.legalName },
      { label: "Trade name", value: site.tradeName },
      { label: "GSTIN", value: site.gstin },
      { label: "Registration type", value: "Proprietorship" },
    ],
  },
  {
    title: "Udyam registration certificate",
    form: "Ministry of MSME",
    detail:
      "Registration as a micro enterprise under the Udyam registration framework for MSMEs.",
    issued: "Udyam registration 2026-27",
    image: "/Certifications/udyam-registration.jpg",
    pdf: "/Certifications/Print - Udyam Registration Certificate.pdf",
    rows: [
      { label: "Enterprise name", value: site.tradeName },
      { label: "Udyam number", value: site.udyam },
      { label: "Enterprise type", value: "Micro" },
      { label: "Organisation type", value: "Proprietorship" },
    ],
  },
];

const verificationPoints = [
  "Match the legal name and trade name on the document",
  "Check the GSTIN against the registration number",
  "Check the Udyam number and enterprise type",
  "Confirm the registered address and constitution",
];

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        title="Registration documents, open for review."
        intro="The business is registered for GST and as an MSME Udyam enterprise. The certificates below can be opened, downloaded and checked against the company details used on this site."
        crumbs={[{ label: "Certifications" }]}
        image="/images/showroom.jpg"
        imageAlt="Smart Engineering Solution showroom and equipment display"
        imageCaption="Registration documents are held for the proprietorship trading as Smart Engineering Solution."
        meta={[
          { label: "GSTIN", value: site.gstin },
          { label: "MSME Udyam", value: site.udyam },
          { label: "Business type", value: "Proprietorship" },
          { label: "Established", value: "2020" },
        ]}
      />

      <Section>
        <div className="container-x">
          <SectionHeading
            title="Two documents, shown in full."
            description="These are business registrations, not quality or product certifications. We display what we hold and do not claim approvals we have not obtained."
            action={
              <Link href="/contact" className="btn btn-outline">
                Ask for a document
              </Link>
            }
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {documents.map((doc) => (
              <article key={doc.title} className="border border-line bg-paper">
                <div className="grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <a
                    href={doc.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[3/4] overflow-hidden border-b border-line bg-paper-3 sm:border-b-0 sm:border-r"
                  >
                    <Image
                      src={doc.image}
                      alt={`${doc.title} for Smart Engineering Solution`}
                      fill
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                  <div className="flex flex-col p-6">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-accent-deep" aria-hidden="true" />
                      <span className="meta">{doc.form}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                      {doc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-2">
                      {doc.detail}
                    </p>
                    <p className="mt-1 text-xs text-ink-muted">{doc.issued}</p>

                    <dl className="mt-5 border-t border-line">
                      {doc.rows.map((row) => (
                        <div
                          key={row.label}
                          className="flex items-start justify-between gap-4 border-b border-line py-2.5"
                        >
                          <dt className="text-xs text-ink-muted">{row.label}</dt>
                          <dd className="credential-value max-w-[62%] break-words text-right text-xs font-semibold text-ink">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <a
                        href={doc.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FileText className="h-4 w-4" aria-hidden="true" />
                        Open PDF
                      </a>
                      <a
                        href={doc.pdf}
                        download
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-2 underline decoration-line underline-offset-4 transition-colors hover:text-ink"
                      >
                        <Download className="h-4 w-4" aria-hidden="true" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[16ch]">How to verify a document.</h2>
            <p className="lede mt-5 max-w-[44ch]">
              The numbers on this site are the same numbers printed on the
              certificates. If anything does not match, ask us before relying on
              the document.
            </p>
            <div className="mt-8">
              <Link href="/about" className="btn btn-outline">
                Company details
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-line">
              {verificationPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 border-b border-line py-4 text-sm text-ink-2"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CredentialList columns={2} />
            </div>
            <p className="mt-5 max-w-[62ch] text-sm leading-relaxed text-ink-muted">
              Tender submissions may require additional documents such as PAN,
              bank details or experience records. Those are shared when a
              specific tender requires them.
            </p>
          </div>
        </div>
      </Section>

      <ContactCta
        title="Need the registration set for a tender?"
        description="Send the tender ID or document checklist. We will confirm which registration and company documents can be provided."
      />
    </>
  );
}
