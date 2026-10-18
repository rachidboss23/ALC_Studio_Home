import Link from "next/link";
import { getProjects } from "@/features/projects/data";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { mosaicSlugs } from "./data/featured-projects";

const mosaicLayout = [
  "col-span-1 aspect-[4/3] sm:col-span-2 sm:aspect-[2/1] lg:col-span-4 lg:row-span-1 lg:aspect-auto",
  "col-span-1 aspect-[4/5] sm:aspect-[3/4] lg:col-span-2 lg:aspect-auto",
  "col-span-1 aspect-[4/5] sm:aspect-[3/4] lg:col-span-2 lg:aspect-auto",
  "col-span-1 aspect-[4/3] sm:col-span-2 sm:aspect-[2/1] lg:col-span-3 lg:aspect-auto",
  "col-span-1 aspect-[4/3] sm:aspect-[3/4] lg:col-span-2 lg:aspect-auto",
  "col-span-1 aspect-[4/3] sm:aspect-[3/4] lg:col-span-3 lg:aspect-auto",
] as const;

export function FeaturedProjects() {
  const bySlug = new Map(getProjects().map((project) => [project.slug, project]));
  const projects = mosaicSlugs.flatMap((slug) => {
    const project = bySlug.get(slug);
    return project ? [project] : [];
  });

  return (
    <section className="home-section bg-[#f2eee6]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mb-9 grid gap-6 sm:mb-11 lg:grid-cols-[1.2fr_1fr_auto] lg:items-end lg:gap-10">
          <div>
            <p className="mb-4 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.18em] text-[#565650]">
              Proyectos
              <span aria-hidden="true" className="text-sm">→</span>
            </p>
            <h2 className="max-w-xl font-serif text-4xl leading-[1.02] tracking-[-0.025em] text-[#292b29] sm:text-5xl lg:text-6xl">
              Espacios hechos<br className="hidden sm:block" /> a medida.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#565650] sm:text-base">
            Cada proyecto es único. Diseñamos, fabricamos e instalamos soluciones que se adaptan a tu espacio, tu estilo y tus necesidades.
          </p>
          <Link href="/proyectos" className="inline-flex min-h-11 items-center gap-3 self-end text-[10px] font-medium uppercase tracking-[0.16em] text-[#292b29] transition-colors hover:text-[#8a6f4d] focus-visible:outline-offset-4 lg:mb-1">
            Ver todos los proyectos
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-8 lg:grid-rows-[minmax(24rem,34vw)_minmax(17rem,24vw)]">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/proyectos?ver=${project.slug}`}
              className={`block h-full w-full text-left focus-visible:outline-offset-4 ${mosaicLayout[index]}`}
            >
              <ProjectCard project={project} priority={index < 3} variant="editorial" />
            </Link>
          ))}
        </div>
        <div className="mt-9 flex justify-center sm:mt-11">
          <Link
            href="/proyectos"
            className="inline-flex h-11 items-center justify-center gap-3 rounded-full border border-[#292b29]/25 bg-transparent px-6 text-[10px] font-medium uppercase tracking-[0.16em] text-[#292b29] transition-all duration-200 ease-out hover:border-[#292b29] hover:bg-[#292b29] hover:text-[#f5f1e9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6f4d] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Ver todos los proyectos
            <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
              <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
