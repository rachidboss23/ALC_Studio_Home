import Image from "next/image";
import { categories } from "../data/categories";
import type { Project } from "../types";

type Props = { project: Project; priority?: boolean };

export function ProjectCard({ project, priority }: Props) {
  const label = categories.find((c) => c.id === project.category)?.label;
  return (
    <div className="group block w-full text-left">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <Image
          src={project.cover.src}
          alt={`${project.title}${project.location ? `, ${project.location}` : ""}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {project.beforeImages.length > 0 && (
          <span className="absolute top-3 left-3 bg-paper px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em]">Antes y después</span>
        )}
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-accent">{label}{project.location ? ` · ${project.location}` : ""}</p>
      <h3 className="mt-1 font-serif text-2xl leading-tight">{project.title}</h3>
    </div>
  );
}
