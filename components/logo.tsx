import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandMark({
  invert = false,
  className,
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 44"
      aria-hidden="true"
      className={cn("h-10 w-auto", className)}
      fill="none"
    >
      <path
        d="M2 17.5 20 5l18 12.5v3.2L20 8.4 2 20.7v-3.2Z"
        fill={invert ? "var(--on-dark)" : "var(--navy)"}
      />
      <rect
        x="6.5"
        y="21"
        width="7"
        height="18"
        fill={invert ? "var(--on-dark)" : "var(--ink)"}
      />
      <rect
        x="16.5"
        y="27"
        width="7"
        height="12"
        fill={invert ? "var(--accent)" : "var(--navy)"}
      />
      <rect
        x="26.5"
        y="15.5"
        width="7"
        height="23.5"
        fill={invert ? "var(--on-dark)" : "var(--ink)"}
      />
      <rect
        x="26.5"
        y="15.5"
        width="7"
        height="4"
        fill="var(--accent)"
      />
      <rect
        x="2"
        y="39"
        width="36"
        height="1.5"
        fill={invert ? "var(--accent)" : "var(--accent-deep)"}
      />
    </svg>
  );
}

export function Logo({
  invert = false,
  className,
  compact = false,
}: {
  invert?: boolean;
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Smart Engineering Solution, home"
      className={cn(
        "group inline-flex shrink-0 items-center gap-3",
        invert ? "text-on-dark" : "text-ink",
        className,
      )}
    >
      <BrandMark invert={invert} className={compact ? "h-9" : "h-11"} />
      <span className="flex flex-col justify-center leading-none">
        <span className="font-display text-[1.12rem] font-bold tracking-[-0.03em]">
          Smart
        </span>
        <span
          className={cn(
            "mt-0.5 whitespace-nowrap font-display text-[0.72rem] font-semibold tracking-[-0.01em]",
            invert ? "text-on-dark-muted" : "text-ink-2",
          )}
        >
          Engineering Solution
        </span>
      </span>
    </Link>
  );
}
