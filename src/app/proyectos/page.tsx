import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGallery } from "@/features/projects/components/ProjectGallery";
import { getCategories, getProjects, isCategoryId } from "@/features/projects/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Proyectos", "Trabajos realizados de cocinas, baños, racks, remodelaciones y mobiliario a medida en la V Región, con fotos del antes y después.", "/proyectos");

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ categoria?: string; ver?: string }> }) {
  const { categoria, ver } = await searchParams;
  return (
    <Container className="py-16 lg:py-24">
      <SectionHeading eyebrow="Proyectos" title="Trabajos realizados" />
      <p className="mt-6 mb-10 max-w-xl text-stone">Una muestra de nuestros últimos proyectos. En los que corresponde, puedes ver cómo era el espacio antes de la intervención.</p>
      <ProjectGallery projects={getProjects()} categories={getCategories()} initialCategory={isCategoryId(categoria) ? categoria : undefined} initialOpen={ver} />
    </Container>
  );
}
