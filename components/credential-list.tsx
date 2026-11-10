import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function CredentialList({
  className,
  columns = 2,
}: {
  className?: string;
  columns?: 1 | 2 | 4;
}) {
  return (
    <dl
      className={cn(
        "grid gap-px overflow-hidden border border-line bg-line",
        columns === 1 && "grid-cols-1",
        columns === 2 && "sm:grid-cols-2",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {site.credentials.map((item) => (
        <div key={item.label} className="bg-paper px-4 py-3">
          <dt className="meta">{item.label}</dt>
          <dd className="credential-value mt-0.5 text-sm font-semibold text-ink">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
