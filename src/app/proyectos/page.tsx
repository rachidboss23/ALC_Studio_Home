import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGallery } from "@/features/projects/components/ProjectGallery";
import { getCategories, getProjects, isCategoryId } from "@/features/projects/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Proyectos", "Trabajos realizados de cocinas, baños, racks, remodelaciones y mobiliario a medida en la V Región, con fotos del antes y después.", "/proyectos");

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ categoria?: string; ver?: string }> }) {
  const { categoria, ver } = await searchParams;
  return (
    <section className="bg-[#f2eee6]">
      <Container className="py-12 lg:py-16">
        <div className="mb-10 grid gap-6 sm:mb-12 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-10">
          <SectionHeading eyebrow="Proyectos" title="Trabajos realizados" className="[&_h2]:max-w-xl [&_h2]:text-5xl [&_h2]:leading-[1.02] [&_h2]:tracking-[-0.025em] sm:[&_h2]:text-6xl" />
          <p className="mb-1 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
            Una muestra de nuestros proyectos de cocinas, baños y mobiliario a medida. En los que corresponde, puedes ver cómo era el espacio antes de la intervención.
          </p>
        </div>
        <ProjectGallery projects={getProjects()} categories={getCategories()} initialCategory={isCategoryId(categoria) ? categoria : undefined} initialOpen={ver} />
      </Container>
    </section>
  );
}
