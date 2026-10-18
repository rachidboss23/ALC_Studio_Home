import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function About() {
  return (
    <section id="nosotros" className="home-section bg-[#f5f1ea]">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
        <div className="min-w-0 pr-0 lg:pr-8">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#71583e]">SOBRE NOSOTROS</p>
          <h2 className="max-w-full font-serif text-[clamp(2.5rem,4vw,5.4rem)] leading-[0.9] tracking-[-0.04em] text-[#181816] sm:max-w-[12ch]">
            Más que una fábrica
            <br />
            de muebles.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5d5b58] lg:mt-8 lg:text-lg">
            Transformamos espacios mediante diseño, funcionalidad y una ejecución de calidad. Te acompañamos desde la idea inicial hasta la fabricación, instalación y entrega final.
          </p>
        </div>

        <div className="relative h-[25rem] w-full overflow-hidden sm:h-[29rem] lg:h-[35rem]">
          <div className="absolute left-0 top-0 h-[72%] w-[64%] overflow-hidden rounded-2xl border border-[#d8d1c7] bg-[#d9d4cc] shadow-[0_18px_40px_rgba(23,18,14,0.08)]">
            <Image src="/projects/cocina-villa-alemana/after/01.webp" alt="Cocina a medida de ALC Studio Home" fill sizes="(min-width: 1024px) 34vw, 64vw" className="object-cover" priority />
          </div>

          <div className="absolute bottom-8 left-[20%] h-[38%] w-[42%] overflow-hidden rounded-2xl border border-[#d8d1c7] bg-[#d9d4cc] shadow-[0_18px_40px_rgba(23,18,14,0.08)]">
            <Image src="/projects/rack-recreo-valparaiso/after/01.webp" alt="Detalle de mobiliario a medida" fill sizes="(min-width: 1024px) 24vw, 42vw" className="object-cover" />
          </div>

          <div className="absolute right-0 top-[12%] h-[78%] w-[34%] overflow-hidden rounded-2xl border border-[#d8d1c7] bg-[#d9d4cc] shadow-[0_18px_40px_rgba(23,18,14,0.08)]">
            <Image src="/projects/bano-penablanca/after/01.webp" alt="Baño con mobiliario a medida" fill sizes="(min-width: 1024px) 18vw, 34vw" className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
