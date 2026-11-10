import type { MetadataRoute } from "next";
import { sectors } from "@/data/sectors";
import { systems } from "@/data/systems";
import { siteUrl } from "@/lib/seo";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "yearly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/amc-maintenance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/turnkey", priority: 0.9, changeFrequency: "monthly" },
  { path: "/government-projects", priority: 0.9, changeFrequency: "monthly" },
  { path: "/gem-tendering", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/hvac-systems", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products", priority: 0.7, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.7, changeFrequency: "monthly" },
  { path: "/certifications", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...sectors.map((sector) => ({
      url: `${siteUrl}/industries/${sector.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...systems.map((system) => ({
      url: `${siteUrl}/hvac-systems/${system.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
