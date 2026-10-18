import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getProjectBySlug } from "@/features/projects/data";
import { mosaicSlugs } from "./data/featured-projects";

const featuredServices = [
  {
    title: "Cocinas a medida",
    description: "Diseño funcional, buena iluminación y terminaciones de alto estándar.",
    imageProject: "cocina-concon",
    href: "/proyectos?categoria=cocinas",
  },
  {
    title: "Clósets y walk-in closets",
    description: "Almacenamiento pensado para tu espacio y tu rutina.",
    imageProject: "local-comercial-villa-alemana",
    href: "/proyectos?categoria=mobiliario",
  },
  {
    title: "Muebles de baño",
    description: "Vanitorios y soluciones resistentes a la humedad.",
    imageProject: "bano-penablanca",
    imageIndex: 2,
    href: "/proyectos?categoria=banos",
  },
  {
    title: "Mobiliario a medida",
    description: "Piezas únicas para cada ambiente.",
    imageProject: "tocador-a-medida",
    href: "/proyectos?categoria=mobiliario",
  },
  {
    title: "Racks y muebles de living",
    description: "Almacenamiento, iluminación y diseño integrados.",
    imageProject: "rack-parque-pinares",
    href: "/proyectos?categoria=racks-living",
  },
  {
    title: "Remodelaciones",
    description: "Renovación de espacios con un equipo responsable.",
    imageProject: "remodelacion-interior-concon",
    href: "/proyectos?categoria=remodelaciones",
  },
] as const;

const mosaicCoverSources = new Set(
  mosaicSlugs.flatMap((slug) => {
    const project = getProjectBySlug(slug);
    return project ? [project.cover.src] : [];
  }),
);

function getServiceImageSrc(service: (typeof featuredServices)[number]) {
  const project = getProjectBySlug(service.imageProject);
  if (!project) return undefined;

  const preferredIndex = "imageIndex" in service ? service.imageIndex : 0;
  const preferredImage = project.images[preferredIndex];
  if (preferredImage && !mosaicCoverSources.has(preferredImage.src)) return preferredImage.src;

  return (
    project.images.find((image) => !mosaicCoverSources.has(image.src))?.src ??
    preferredImage?.src ??
    project.cover.src
  );
}

export function ServicesPreview() {
  return (
    <section className="home-section bg-[#f1eee8]">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#71583e]">SERVICIOS</p>
            <h2 className="font-serif text-[clamp(3rem,4vw,5rem)] leading-[0.92] tracking-[-0.04em] text-[#181816]">
              Lo que hacemos.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#595856] sm:text-base">
            Desde cocinas hasta remodelaciones, creamos soluciones a medida para cada espacio, combinando diseño, calidad y funcionalidad.
          </p>

          <Link href="/#contacto" className="inline-flex items-center justify-center gap-2 self-end border border-[#181816] bg-[#181816] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#f7f3ee] transition-colors hover:bg-[#2a2a28] lg:justify-self-end">
            Conversemos tu proyecto
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service, index) => {
            const imageSrc = getServiceImageSrc(service);
            return (
              <li key={service.title} className="group min-w-0">
                <Link href={service.href} className="block h-full min-w-0 overflow-hidden rounded-2xl border border-[#d8d1c7] bg-[#faf8f5] transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none">
                  <div className="relative aspect-[1.5/1] overflow-hidden bg-[#dbd4ca]">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                      />
                    )}
                  </div>
                  <div className="flex gap-4 p-5 sm:p-6">
                    <span className="pt-1 text-xs font-medium uppercase tracking-[0.16em] text-[#71583e]">{String(index + 1).padStart(2, "0")}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="min-w-0 font-serif text-[1.65rem] leading-none text-[#181816] sm:text-[2rem]">{service.title}</h3>
                        <span aria-hidden="true" className="mt-1 text-lg text-[#181816]">↗</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#5c5955]">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
