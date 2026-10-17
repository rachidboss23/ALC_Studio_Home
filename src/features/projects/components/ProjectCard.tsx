import Image from "next/image";
import { categories } from "../data/categories";
import type { Project } from "../types";

type Props = { project: Project; priority?: boolean; variant?: "standard" | "editorial" };

export function ProjectCard({ project, priority, variant = "standard" }: Props) {
  const label = categories.find((c) => c.id === project.category)?.label;

  if (variant === "editorial") {
    return (
      <div className="group block h-full w-full text-left">
        <div className="relative h-full min-h-[16rem] overflow-hidden bg-sand">
          <Image
            src={project.cover.src}
            alt={`${project.title}${project.location ? `, ${project.location}` : ""}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04] group-focus-visible:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          {project.beforeImages.length > 0 && (
            <span className="absolute top-3 left-3 bg-paper/95 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-ink">Antes y después</span>
          )}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-4 py-4 text-paper sm:px-5 sm:py-5">
            <div className="min-w-0">
              <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-paper/80 sm:text-[11px]">
                {project.location ?? label}
              </p>
              <h3 className="font-serif text-xl leading-tight sm:text-2xl">{project.title}</h3>
            </div>
            <svg aria-hidden="true" className="mb-1 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

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
