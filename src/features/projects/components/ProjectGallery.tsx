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

  const chip = (active: boolean) => cn("border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors", active ? "border-ink bg-ink text-paper" : "border-line hover:border-ink");

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
        <button type="button" className={chip(category === "all")} aria-pressed={category === "all"} onClick={() => setCategory("all")}>Todos</button>
        {categories.map((c) => (
          <button key={c.id} type="button" className={chip(category === c.id)} aria-pressed={category === c.id} onClick={() => setCategory(c.id)}>{c.label}</button>
        ))}
      </div>
      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <button key={p.slug} type="button" onClick={() => setOpenSlug(p.slug)} className="block w-full text-left"><ProjectCard project={p} priority={i < 3} /></button>
        ))}
      </div>
      <ProjectDialog project={opened} onClose={() => setOpenSlug(null)} />
    </>
  );
}
