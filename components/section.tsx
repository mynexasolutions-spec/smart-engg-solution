import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "paper",
  size = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "paper-2" | "dark" | "accent";
  size?: "default" | "small";
  id?: string;
}) {
  const toneClass =
    tone === "dark"
      ? "on-dark bg-navy-deep text-on-dark"
      : tone === "paper-2"
        ? "bg-paper-2"
        : tone === "accent"
          ? "on-accent bg-accent text-accent-ink"
          : "bg-paper";

  return (
    <section
      id={id}
      className={cn(
        toneClass,
        size === "small" ? "section-sm" : "section",
        "reveal",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  description,
  action,
  className,
  titleClassName,
  as: Tag = "h2",
  id,
}: {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  titleClassName?: string;
  as?: "h2" | "h3";
  id?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-3xl">
        <Tag id={id} className={cn("display-2", titleClassName)}>
          {title}
        </Tag>
        {description ? <p className="lede mt-5">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function HairlineList({
  items,
  className,
}: {
  items: { title: string; description?: string; href?: string }[];
  className?: string;
}) {
  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item, index) => (
        <div
          key={item.title}
          className="grid gap-2 border-b border-line py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6"
        >
          <span className="text-sm tabular-nums text-ink-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold">{item.title}</h3>
            {item.description ? (
            <p className="mt-1.5 max-w-2xl text-base leading-relaxed text-ink-2">
                {item.description}
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
