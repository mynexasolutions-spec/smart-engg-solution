import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/seo";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href === "/" ? "" : item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted">
      <JsonLd data={schema} />
      <Link href="/" className="link-quiet whitespace-nowrap">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span aria-hidden="true" className="text-line">
            /
          </span>
          {item.href ? (
            <Link href={item.href} className="link-quiet whitespace-nowrap">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="whitespace-nowrap text-ink-2">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
