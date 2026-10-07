import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { getProjectBySlug } from "@/features/projects/data";

const mosaic = ["cocina-villa-alemana", "bano-penablanca", "rack-recreo-valparaiso"] as const;

export function Hero() {
  const items = mosaic.map(getProjectBySlug).filter((p) => p !== undefined);
  return (
    <section className="border-b border-line">
      <Container className="grid items-center gap-12 py-14 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent">Diseño · Fabricación · Instalación</p>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">Espacios diseñados para vivirse.</h1>
          <p className="mt-6 max-w-md leading-relaxed text-stone">
            Diseño y ejecución integral de cocinas, clósets, muebles a medida y remodelaciones en la V Región. De la idea a la entrega final.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/#contacto">Cotiza tu proyecto</Button>
            <Button href="/proyectos" variant="outline">Ver proyectos</Button>
          </div>
        </div>
        <div className="grid grid-cols-[1.15fr_1fr] gap-3 sm:gap-4">
          {items[0] && (
            <div className="relative row-span-2 aspect-[3/4.4] overflow-hidden bg-sand">
              <Image src={items[0].cover.src} alt={items[0].title} fill priority sizes="(min-width:1024px) 30vw, 55vw" className="object-cover" />
            </div>
          )}
          {items.slice(1).map((p) => (
            <div key={p.slug} className="relative aspect-[4/3] overflow-hidden bg-sand">
              <Image src={p.cover.src} alt={p.title} fill sizes="(min-width:1024px) 25vw, 40vw" className="object-cover" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
