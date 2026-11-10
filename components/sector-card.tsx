import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Sector } from "@/data/sectors";
import { cn } from "@/lib/utils";

export function SectorCard({
  sector,
  aspect = "aspect-[4/3]",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  showDescription = true,
  className,
}: {
  sector: Sector;
  aspect?: string;
  sizes?: string;
  showDescription?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/industries/${sector.slug}`}
      className={cn("group interactive-surface block min-w-0 rounded-[var(--radius)]", className)}
    >
      <div className={cn("media-frame w-full", aspect)}>
        <Image
          src={sector.image}
          alt={sector.imageAlt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold text-ink">
            {sector.name}
          </h3>
          {showDescription ? (
            <p className="mt-1.5 max-w-[44ch] text-sm leading-relaxed text-ink-muted">
              {sector.description}
            </p>
          ) : null}
        </div>
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius)] border border-line text-ink-2 transition-[border-color,color,transform] duration-200 group-hover:border-ink group-hover:text-ink group-hover:translate-x-0.5">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
