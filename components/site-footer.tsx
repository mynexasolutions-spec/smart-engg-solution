import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { footerNav, site } from "@/data/site";
import {
  displayPhone,
  mailHref,
  mapsHref,
  telHref,
  whatsappHref,
} from "@/lib/utils";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-on-dark">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-base text-on-dark-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="on-dark bg-navy-deep text-on-dark">
      <div className="container-x pt-16 pb-8 lg:pt-20">
        <div className="grid gap-12 border-b border-line-dark pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo invert />
            <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-on-dark-muted">
              HVAC contracting for government, commercial, industrial,
              institutional, healthcare, hospitality and residential projects.
              Based in Gorakhpur, working across Uttar Pradesh, Bihar and
              adjoining regions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-accent">
                Start a project
              </Link>
              <a
                href={whatsappHref(site.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <FooterColumn title="Company" links={footerNav.company} />
            <FooterColumn title="Work" links={footerNav.work} />
            <FooterColumn title="Systems" links={footerNav.systems} />
          </div>
        </div>

        <div className="grid gap-10 border-b border-line-dark py-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-sm font-semibold text-on-dark">Visit us</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {site.addresses.map((address) => (
                <div key={address.label}>
                  <div className="flex items-center gap-2 text-sm font-medium text-on-dark">
                    <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                    {address.label}
                  </div>
                  <address className="mt-2 text-sm not-italic leading-relaxed text-on-dark-muted">
                    {address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={mapsHref(address.mapQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs text-on-dark underline decoration-line-dark underline-offset-4 transition-colors hover:text-accent"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold text-on-dark">Talk to us</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {site.people.map((person) => (
                <div key={person.phone}>
                  <div className="text-sm font-medium text-on-dark">{person.name}</div>
                  <div className="meta">{person.role}</div>
                  <a
                    href={telHref(person.phone)}
                    className="credential-value mt-2 flex items-center gap-2 text-sm font-semibold text-on-dark transition-colors hover:text-accent"
                  >
                    <Phone className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    {displayPhone(person.phone)}
                  </a>
                </div>
              ))}
            </div>
            <a
              href={mailHref(site.email)}
              className="mt-5 flex items-start gap-2 break-all text-sm text-on-dark-muted transition-colors hover:text-accent"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-on-dark-muted lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} Smart Engineering Solution, Gorakhpur.
            Proprietor: {site.legalName}.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>
              GSTIN <span className="credential-value text-on-dark">{site.gstin}</span>
            </span>
            <span>
              Udyam <span className="credential-value text-on-dark">{site.udyam}</span>
            </span>
            <Link
              href="/certifications"
              className="underline decoration-line-dark underline-offset-4 transition-colors hover:text-accent"
            >
              Registration documents
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
