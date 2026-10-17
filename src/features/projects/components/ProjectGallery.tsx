"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import type { CategoryId, Project } from "../types";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog } from "./ProjectDialog";

type Props = {
  projects: Project[];
  categories: ReadonlyArray<{ id: CategoryId; label: string }>;
  initialCategory?: CategoryId;
  initialOpen?: string;
};

export function ProjectGallery({ projects, categories, initialCategory, initialOpen }: Props) {
  const [category, setCategory] = useState<CategoryId | "all">(initialCategory ?? "all");
  const [openSlug, setOpenSlug] = useState<string | null>(initialOpen ?? null);
  const visible = useMemo(() => (category === "all" ? projects : projects.filter((p) => p.category === category)), [projects, category]);
  const opened = projects.find((p) => p.slug === openSlug) ?? null;
  const mosaics = useMemo(() => {
    const groups: Project[][] = [];
    for (let index = 0; index < visible.length; index += 6) {
      groups.push(visible.slice(index, index + 6));
    }
    return groups;
  }, [visible]);

  const chip = (active: boolean) => cn("border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors", active ? "border-ink bg-ink text-paper" : "border-line hover:border-ink");

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
        <button type="button" className={chip(category === "all")} aria-pressed={category === "all"} onClick={() => setCategory("all")}>Todos</button>
        {categories.map((c) => (
          <button key={c.id} type="button" className={chip(category === c.id)} aria-pressed={category === c.id} onClick={() => setCategory(c.id)}>{c.label}</button>
        ))}
      </div>
      <div className="mt-10 space-y-4">
        {mosaics.map((mosaic, mosaicIndex) => (
          <div
            key={mosaic[0].slug}
            className={cn(
              "grid grid-cols-1 gap-3 sm:grid-cols-2",
              mosaic.length === 1
                ? "lg:grid-cols-1 lg:grid-rows-[minmax(20rem,38vw)]"
                : mosaic.length <= 3
                  ? "lg:grid-cols-8 lg:grid-rows-[minmax(18rem,27vw)]"
                  : "lg:grid-cols-8 lg:grid-rows-[minmax(12rem,18vw)_minmax(12rem,18vw)_minmax(10rem,14vw)]",
            )}
          >
            {mosaic.map((project, index) => {
              const priority = mosaicIndex === 0 && index < 3;
              const layout = mosaic.length === 1
                ? "aspect-[4/3] sm:col-span-2 sm:aspect-[2/1] lg:col-span-1 lg:aspect-[16/7]"
                : mosaic.length === 2
                  ? "aspect-[4/3] sm:aspect-[3/2] lg:col-span-4 lg:aspect-auto"
                  : mosaic.length === 3
                    ? [
                        "aspect-[4/3] sm:col-span-2 sm:aspect-[2/1] lg:col-span-3 lg:aspect-auto",
                        "aspect-[4/3] sm:aspect-[3/2] lg:col-span-2 lg:aspect-auto",
                        "aspect-[4/3] sm:aspect-[3/2] lg:col-span-3 lg:aspect-auto",
                      ][index]
                    : mosaic.length === 4
                      ? [
                          "aspect-[4/3] sm:col-span-2 sm:aspect-[2/1] lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-2 lg:aspect-auto",
                          "aspect-[4/5] sm:aspect-[3/4] lg:col-start-5 lg:col-span-2 lg:row-start-1 lg:row-span-2 lg:aspect-auto",
                          "aspect-[4/5] sm:aspect-[3/4] lg:col-start-7 lg:col-span-2 lg:row-start-1 lg:row-span-2 lg:aspect-auto",
                          "aspect-[4/3] sm:col-span-2 sm:aspect-[2/1] lg:col-start-1 lg:col-span-8 lg:row-start-3 lg:aspect-auto",
                        ][index]
                      : mosaic.length === 5
                        ? [
                            "aspect-[4/3] sm:col-span-2 sm:aspect-[2/1] lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-2 lg:aspect-auto",
                            "aspect-[4/5] sm:aspect-[3/4] lg:col-start-5 lg:col-span-2 lg:row-start-1 lg:row-span-2 lg:aspect-auto",
                            "aspect-[4/5] sm:aspect-[3/4] lg:col-start-7 lg:col-span-2 lg:row-start-1 lg:row-span-2 lg:aspect-auto",
                            "aspect-[4/3] sm:aspect-[3/2] lg:col-start-1 lg:col-span-4 lg:row-start-3 lg:aspect-auto",
                            "aspect-[4/3] sm:aspect-[3/2] lg:col-start-5 lg:col-span-4 lg:row-start-3 lg:aspect-auto",
                          ][index]
                        : [
                            "aspect-[4/3] sm:col-span-2 sm:aspect-[2/1] lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-2 lg:aspect-auto",
                            "aspect-[4/5] sm:aspect-[3/4] lg:col-start-5 lg:col-span-2 lg:row-start-1 lg:row-span-2 lg:aspect-auto",
                            "aspect-[4/5] sm:aspect-[3/4] lg:col-start-7 lg:col-span-2 lg:row-start-1 lg:row-span-2 lg:aspect-auto",
                            "aspect-[4/3] sm:aspect-[3/2] lg:col-start-1 lg:col-span-3 lg:row-start-3 lg:aspect-auto",
                            "aspect-[4/3] sm:aspect-[3/2] lg:col-start-4 lg:col-span-2 lg:row-start-3 lg:aspect-auto",
                            "aspect-[4/3] sm:aspect-[3/2] lg:col-start-6 lg:col-span-3 lg:row-start-3 lg:aspect-auto",
                          ][index];

              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setOpenSlug(project.slug)}
                  className={cn("block h-full w-full text-left focus-visible:outline-offset-4", layout)}
                >
                  <ProjectCard project={project} priority={priority} variant="editorial" />
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <ProjectDialog project={opened} onClose={() => setOpenSlug(null)} />
    </>
  );
}
