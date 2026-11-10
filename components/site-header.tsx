"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { mainNav, site } from "@/data/site";
import {
  cn,
  displayPhone,
  mailHref,
  telHref,
  whatsappHref,
} from "@/lib/utils";

function isPathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!openMenu) return;
    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const primaryPhone = site.people[0].phone;

  return (
    <header
      ref={headerRef}
      className="site-header sticky top-0 z-50"
      onClickCapture={() => {
        setOpenMenu(null);
        setMobileOpen(false);
      }}
    >
      <div className="bg-navy-deep text-on-dark">
        <div className="container-x flex h-10 items-center justify-between gap-2 text-[0.82rem] sm:gap-4">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="flex min-w-0 items-center gap-1.5 text-on-dark-muted">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="min-w-0 truncate">Gorakhpur, Uttar Pradesh</span>
            </span>
            <span aria-hidden="true" className="hidden h-3 w-px bg-line-dark sm:block" />
            <span className="hidden text-on-dark-muted md:inline">
              GSTIN <span className="text-on-dark">{site.gstin}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={mailHref(site.email)}
              className="hidden items-center gap-1.5 text-on-dark-muted transition-colors hover:text-on-dark xl:flex"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={telHref(primaryPhone)}
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium text-on-dark transition-colors hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="tabular-nums">{displayPhone(primaryPhone)}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-3 sm:gap-6 lg:h-20">
          <Logo compact />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex xl:gap-2">
            {mainNav.map((item) => {
              const active =
                isPathActive(pathname, item.href) ||
                item.children?.some((child) => isPathActive(pathname, child.href));

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-link px-3"
                    data-active={active ? "true" : "false"}
                  >
                    {item.label}
                  </Link>
                );
              }

              const panelOpen = openMenu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                      setOpenMenu(null);
                    }
                  }}
                >
                  <button
                    type="button"
                    className="nav-link px-3"
                    data-active={active ? "true" : "false"}
                    aria-expanded={panelOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(panelOpen ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "ml-1 h-3.5 w-3.5 transition-transform duration-200",
                        panelOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={cn(
                      "absolute left-0 top-full w-[min(34rem,calc(100vw-3rem))] rounded-[var(--radius)] border border-line bg-paper p-2 shadow-[0_18px_50px_-30px_oklch(0.2_0.03_245/0.55)] transition-[opacity,transform,visibility,box-shadow] duration-200",
                      item.children.length > 5 ? "grid grid-cols-2 gap-0.5" : "grid gap-0.5",
                      panelOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0",
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="group flex min-h-0 flex-col gap-0.5 px-3 py-2.5 transition-colors hover:bg-paper-2"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="flex items-center justify-between gap-2 text-sm font-semibold text-ink">
                          {child.label}
                          <ArrowRight
                            className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-accent-deep opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </span>
                        {child.description ? (
                          <span className="text-xs leading-snug text-ink-muted">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappHref(site.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Smart Engineering Solution on WhatsApp"
              className="hidden h-11 w-11 items-center justify-center border border-line text-ink-2 transition-colors hover:border-ink hover:text-ink sm:flex xl:hidden"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="header-cta btn btn-primary min-h-11 px-4 sm:px-5"
            >
              Send inquiry
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-ink lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span className="relative flex h-5 w-5 items-center justify-center" aria-hidden="true">
                <Menu
                  className={cn(
                    "absolute h-5 w-5 transition-[opacity,transform] duration-300 ease-out",
                    mobileOpen
                      ? "rotate-90 scale-50 opacity-0"
                      : "rotate-0 scale-100 opacity-100",
                  )}
                />
                <X
                  className={cn(
                    "absolute h-5 w-5 transition-[opacity,transform] duration-300 ease-out",
                    mobileOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-50 opacity-0",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        aria-label="Site menu"
        inert={!mobileOpen}
        className={cn(
          "fixed inset-0 z-[80] flex flex-col bg-paper transition-[opacity,visibility] duration-300 lg:hidden",
          mobileOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        <div
          className={cn(
            "flex h-full flex-col transition-transform duration-300 ease-out",
            mobileOpen ? "translate-y-0" : "-translate-y-3",
          )}
        >
          <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-line container-x">
            <Logo compact />
            <button
              ref={closeButtonRef}
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-line text-ink"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain">
            <nav aria-label="Mobile" className="container-x py-6">
              <ul className="divide-y divide-line border-y border-line">
                {mainNav.map((item) => {
                  const groupOpen = mobileGroup === item.label;
                  const active = isPathActive(pathname, item.href);

                  return (
                    <li key={item.label}>
                      {item.children ? (
                        <>
                          <button
                            type="button"
                            className="flex w-full items-center justify-between gap-4 py-4 text-left"
                            aria-expanded={groupOpen}
                            onClick={() =>
                              setMobileGroup(groupOpen ? null : item.label)
                            }
                          >
                            <span
                              className={cn(
                                "font-display text-lg font-semibold",
                                active ? "text-ink" : "text-ink-2",
                              )}
                            >
                              {item.label}
                            </span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200",
                                groupOpen && "rotate-180",
                              )}
                              aria-hidden="true"
                            />
                          </button>
                          {groupOpen ? (
                            <ul className="mb-3 space-y-0.5 border-l border-line pl-4">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="block py-2.5 text-[0.95rem] text-ink-2 transition-colors hover:text-ink"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center justify-between py-4 font-display text-lg font-semibold text-ink-2 transition-colors hover:text-ink"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                          <ArrowRight className="h-4 w-4 text-ink-muted" aria-hidden="true" />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 grid gap-3">
                <Link
                  href="/contact"
                  className="btn btn-primary w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Send an inquiry
                </Link>
                <a
                  href={whatsappHref(site.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp us
                </a>
              </div>

              <div className="mt-8 space-y-4 border-t border-line pt-6 pb-16">
                {site.people.map((person) => (
                  <div key={person.phone} className="flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-ink">{person.name}</div>
                      <div className="meta">{person.role}</div>
                    </div>
                    <a
                      href={telHref(person.phone)}
                      className="credential-value text-sm font-semibold text-ink underline decoration-line underline-offset-4"
                    >
                      {displayPhone(person.phone)}
                    </a>
                  </div>
                ))}
                <a href={mailHref(site.email)} className="block break-all text-sm text-ink-2">
                  {site.email}
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
