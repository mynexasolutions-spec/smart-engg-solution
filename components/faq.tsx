import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { site } from "@/data/site";
import { displayPhone, telHref } from "@/lib/utils";

export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.question} className="disclosure">
          <summary>
            <span>{item.question}</span>
            <Plus className="disclosure-mark h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />
          </summary>
          <div className="disclosure-body max-w-[68ch] text-sm leading-relaxed">
            {item.answer}
          </div>
        </details>
      ))}
      <div className="border-b border-line py-5 text-sm text-ink-2">
        Another question?{" "}
        <a
          href={telHref(site.people[0].phone)}
          className="link-quiet font-semibold text-ink"
        >
          Call {displayPhone(site.people[0].phone)}
        </a>
      </div>
    </div>
  );
}
