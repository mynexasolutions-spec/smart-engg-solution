import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "outline-light" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  accent: "btn-accent",
  outline: "btn-outline",
  "outline-light": "btn-outline-light",
  ghost: "btn-ghost",
  whatsapp: "btn-whatsapp",
};

const sizeClass: Record<Size, string> = {
  md: "",
  lg: "min-h-[3.35rem] px-6 text-base",
};

type ButtonStyleProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonStyleProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn("btn", variantClass[variant], sizeClass[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = ButtonStyleProps &
  Omit<ComponentPropsWithoutRef<"a">, "href" | "children"> & {
    href: string;
    newTab?: boolean;
  };

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  newTab = false,
  ...props
}: ButtonLinkProps) {
  const classes = cn("btn", variantClass[variant], sizeClass[size], className);

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
