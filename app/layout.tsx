import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { JsonLd } from "@/components/json-ld";
import { coreServices } from "@/data/services";
import { sectors } from "@/data/sectors";
import { site } from "@/data/site";
import { systems } from "@/data/systems";
import { siteUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Smart Engineering Solution | HVAC Contractor in Gorakhpur",
    template: "%s | Smart Engineering Solution",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "HVAC contracting",
  keywords: [...site.primaryKeywords],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: site.name,
    title: "Smart Engineering Solution | HVAC Contractor in Gorakhpur",
    description: site.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smart Engineering Solution, HVAC contractor in Gorakhpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Engineering Solution | HVAC Contractor in Gorakhpur",
    description: site.description,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b262c",
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HVACBusiness", "LocalBusiness"],
      "@id": `${siteUrl}/#business`,
      name: site.name,
      legalName: site.legalName,
      description: site.description,
      url: siteUrl,
      telephone: `+91${site.people[0].phone}`,
      email: site.email,
      image: [`${siteUrl}/images/showroom.jpg`, `${siteUrl}/images/aiims-gorakhpur.jpg`],
      logo: `${siteUrl}/icon.svg`,
      foundingDate: "2020-03-01",
      priceRange: "Project based",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gorakhnath Mandir, Ansari Road",
        addressLocality: "Gorakhpur",
        addressRegion: "Uttar Pradesh",
        postalCode: "273015",
        addressCountry: "IN",
      },
      location: site.addresses.map((address) => ({
        "@type": "Place",
        name: `${site.name}, ${address.label}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: address.lines[0],
          addressLocality: "Gorakhpur",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      })),
      areaServed: [
        { "@type": "City", name: "Gorakhpur" },
        { "@type": "State", name: "Uttar Pradesh" },
        { "@type": "State", name: "Bihar" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Nepal" },
      ],
      founder: {
        "@type": "Person",
        name: site.people[0].name,
        telephone: `+91${site.people[0].phone}`,
        jobTitle: site.people[0].role,
      },
      employee: [
        {
          "@type": "Person",
          name: site.people[0].name,
          telephone: `+91${site.people[0].phone}`,
          jobTitle: site.people[0].role,
        },
        {
          "@type": "Person",
          name: site.people[1].name,
          telephone: `+91${site.people[1].phone}`,
          jobTitle: site.people[1].role,
        },
      ],
      identifier: [
        { "@type": "PropertyValue", name: "GSTIN", value: site.gstin },
        { "@type": "PropertyValue", name: "Udyam Registration Number", value: site.udyam },
      ],
      knowsAbout: systems.map((system) => system.name),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HVAC contracting services",
        itemListElement: coreServices.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.summary,
            serviceType: "HVAC contracting",
            areaServed: "Gorakhpur, Uttar Pradesh, India",
          },
        })),
      },
      additionalType: "https://www.wikidata.org/wiki/Q1058917",
      disambiguatingDescription: sectors.map((sector) => sector.name).join(", "),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable}`}
    >
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink focus:outline focus:outline-2 focus:outline-ink"
        >
          Skip to content
        </a>
        <JsonLd data={businessJsonLd} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
