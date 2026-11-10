import Image from "next/image";
import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button";
import { site } from "@/data/site";
import { displayPhone, telHref } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  intro,
  crumbs,
  image,
  imageAlt,
  imageCaption,
  meta,
  children,
  className,
}: {
  title: ReactNode;
  intro: ReactNode;
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  meta?: { label: string; value: string }[];
  children?: ReactNode;
  className?: string;
}) {
  const phone = site.people[0].phone;
  return (
    <section className={cn("reveal border-b border-line bg-paper pb-16 pt-8 lg:pb-24 lg:pt-10", className)}>
      <div className="container-x">
        <Breadcrumbs items={crumbs} />
        <div
          className={cn(
            "mt-10 grid items-end gap-10 lg:mt-14 lg:gap-14 lg:grid-cols-12",
          )}
        >
          <div className={image ? "lg:col-span-7" : "lg:col-span-8"}>
            <h1 className="display-2 hero-rise max-w-[22ch]">{title}</h1>
            <div className="hero-rise hero-rise-delay-1 lede mt-6 max-w-[56ch]">{intro}</div>
            {meta ? (
              <div className="hero-rise hero-rise-delay-2 mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
                {meta.map((item) => (
                  <div key={item.label} className="bg-paper px-4 py-3">
                    <div className="meta">{item.label}</div>
                    <div className="credential-value mt-0.5 text-sm font-semibold text-ink">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            <div className="hero-actions hero-rise hero-rise-delay-2 mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" variant="primary" className="w-full sm:w-auto">
                Discuss your project
              </ButtonLink>
              <ButtonLink href={telHref(phone)} variant="outline" className="w-full sm:w-auto">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="tabular-nums">Call {displayPhone(phone)}</span>
              </ButtonLink>
            </div>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>

          {image ? (
            <figure className="hero-rise hero-rise-delay-3 lg:col-span-5">
              <div className="media-frame aspect-[4/3] w-full">
                <Image
                  src={image}
                  alt={imageAlt || ""}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              {imageCaption ? (
                <figcaption className="meta mt-3 max-w-[45ch]">{imageCaption}</figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}
