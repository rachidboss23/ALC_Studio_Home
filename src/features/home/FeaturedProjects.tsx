import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/features/projects/data";
import { ProjectCard } from "@/features/projects/components/ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Proyectos" title="Trabajos recientes" />
          <Link href="/proyectos" className="text-xs uppercase tracking-[0.14em] underline underline-offset-8">Ver todos los proyectos</Link>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {getFeaturedProjects().map((p) => (
            <Link key={p.slug} href={`/proyectos?ver=${p.slug}`} className="block"><ProjectCard project={p} /></Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
