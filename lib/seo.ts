import type { Metadata } from "next";
import { site } from "@/data/site";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://smartengineeringsolution.in";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/images/showroom.jpg",
}: PageMeta): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  const fullTitle =
    path === "/" ? `${site.name} | HVAC Contractor in Gorakhpur` : `${title} | ${site.name}`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords: [...keywords, ...site.primaryKeywords],
    alternates: { canonical: url },
    openGraph: {
      title: { absolute: fullTitle },
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: fullTitle },
      description,
      images: [image],
    },
  };
}
