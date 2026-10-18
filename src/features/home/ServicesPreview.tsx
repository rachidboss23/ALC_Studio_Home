import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

const featuredServices = [
  {
    title: "Cocinas a medida",
    description: "Diseño funcional, buena iluminación y terminaciones de alto estándar.",
    image: "/projects/cocina-villa-alemana/after/01.webp",
    href: "/proyectos?categoria=cocinas",
  },
  {
    title: "Clósets y walk-in closets",
    description: "Almacenamiento pensado para tu espacio y tu rutina.",
    image: "/projects/rack-recreo-valparaiso/after/01.webp",
    href: "/proyectos?categoria=mobiliario",
  },
  {
    title: "Muebles de baño",
    description: "Vanitorios y soluciones resistentes a la humedad.",
    image: "/projects/bano-penablanca/after/01.webp",
    href: "/proyectos?categoria=banos",
  },
  {
    title: "Mobiliario a medida",
    description: "Piezas únicas para cada ambiente.",
    image: "/projects/tocador-a-medida/after/01.webp",
    href: "/proyectos?categoria=mobiliario",
  },
  {
    title: "Racks y muebles de living",
    description: "Almacenamiento, iluminación y diseño integrados.",
    image: "/projects/rack-parque-pinares/after/01.webp",
    href: "/proyectos?categoria=racks-living",
  },
  {
    title: "Remodelaciones",
    description: "Renovación de espacios con un equipo responsable.",
    image: "/projects/remodelacion-completa-los-pinos/after/01.webp",
    href: "/proyectos?categoria=remodelaciones",
  },
] as const;

export function ServicesPreview() {
  return (
    <section className="bg-[#f1eee8] py-20 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a6f4d]">SERVICIOS</p>
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
          {featuredServices.map((service, index) => (
            <li key={service.title} className="group">
              <Link href={service.href} className="block min-w-0 overflow-hidden border border-[#d8d1c7] bg-[#faf8f5] transition-transform duration-200 hover:-translate-y-0.5">
                <div className="relative aspect-[1.5/1] overflow-hidden bg-[#dbd4ca]">
                  <Image src={service.image} alt={service.title} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="flex gap-4 p-5 sm:p-6">
                  <span className="pt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8a6f4d]">{String(index + 1).padStart(2, "0")}</span>
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
          ))}
        </ul>
      </Container>
    </section>
  );
}
