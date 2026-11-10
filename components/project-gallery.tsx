"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import {
  projectFilters,
  projects,
  projectSectorLabels,
  type ProjectSector,
} from "@/data/projects";
import { cn } from "@/lib/utils";

const shapeClass: Record<string, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  regular: "aspect-[4/3]",
};

export function ProjectGallery() {
  const [filter, setFilter] = useState<"all" | ProjectSector>("all");
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.sector === filter)),
    [filter],
  );

  const active = selected !== null ? filtered[selected] : null;

  function open(index: number) {
    setSelected(index);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function step(direction: 1 | -1) {
    if (selected === null) return;
    setSelected((selected + direction + filtered.length) % filtered.length);
  }

  return (
    <>
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
        {projectFilters.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={filter === item.value}
            onClick={() => {
              setFilter(item.value);
              if (dialogRef.current?.open) close();
            }}
            className={cn(
              "btn min-h-10 shrink-0 border px-4 text-sm",
              filter === item.value
                ? "border-ink bg-ink text-paper"
                : "border-line bg-transparent text-ink-2 hover:border-ink hover:text-ink",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-8 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((project, index) => (
          <figure key={project.id} className="reveal mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => open(index)}
              className="group interactive-surface relative block w-full overflow-hidden rounded-[var(--radius)] border border-line bg-paper-3 text-left hover:border-ink"
              aria-label={`Open image: ${project.title}`}
            >
              <span className={cn("relative block w-full", shapeClass[project.shape])}>
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </span>
              <span className="pointer-events-none absolute inset-0 bg-navy-deep/0 transition-colors duration-200 group-hover:bg-navy-deep/25" />
              <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-paper/95 text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
            <figcaption className="mt-3 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-1 max-w-[40ch] text-base leading-relaxed text-ink-muted">
                  {project.caption}
                </p>
              </div>
              <span className="shrink-0 text-xs text-ink-muted">
                {projectSectorLabels[project.sector]}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setSelected(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
      >
        {active ? (
          <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-line-dark px-4 py-3">
              <div>
                <div className="text-sm font-semibold text-on-dark">{active.title}</div>
                <div className="text-xs text-on-dark-muted">
                  {projectSectorLabels[active.sector]}
                </div>
              </div>
              <button
                type="button"
                onClick={close}
                className="btn min-h-10 border border-line-dark px-3 text-on-dark"
                aria-label="Close image viewer"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                Close
              </button>
            </div>
            <div className="relative h-[min(64dvh,660px)] w-full bg-navy-deep">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(max-width: 1100px) 100vw, 1100px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-3 border-t border-line-dark px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[60ch] text-sm leading-relaxed text-on-dark-muted">
                {active.caption}
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="btn min-h-10 border border-line-dark px-3 text-on-dark"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="btn min-h-10 border border-line-dark px-3 text-on-dark"
                >
                  Next
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
