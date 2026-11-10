import Image from "next/image";
import { site } from "@/data/site";
import { whatsappHref } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref(site.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Smart Engineering Solution on WhatsApp"
      className="whatsapp-float group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white p-0 shadow-[0_16px_34px_-14px_oklch(0.35_0.1_152/0.7)] transition-transform duration-200 hover:-translate-y-1 hover:scale-105 md:bottom-7 md:right-7"
    >
      <Image
        src="/whatsapp.png"
        alt=""
        width={512}
        height={512}
        className="h-full w-full object-contain"
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-navy-deep px-3 py-2 text-xs font-medium text-on-dark opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
