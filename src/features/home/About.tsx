import Image from "next/image";
import { Container } from "@/components/layout/Container";

const pillars = [
  { number: "01", title: "Diseño personalizado", text: "Cada proyecto, a la medida de tu espacio." },
  { number: "02", title: "Todo en uno", text: "Diseño, fabricación e instalación." },
  { number: "03", title: "Terminaciones de calidad", text: "Cuidamos cada detalle." },
  { number: "04", title: "Acompañamiento completo", text: "De la idea a la entrega." },
] as const;

export function About() {
  return (
    <section id="nosotros" className="bg-[#f5f1ea] py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="min-w-0 pr-0 lg:pr-8">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#8a6f4d]">SOBRE NOSOTROS</p>
          <h2 className="max-w-full font-serif text-[clamp(2.5rem,4vw,5.4rem)] leading-[0.9] tracking-[-0.04em] text-[#181816] sm:max-w-[12ch]">
            Más que una fábrica
            <br />
            de muebles.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#5d5b58] lg:text-lg">
            Transformamos espacios mediante diseño, funcionalidad y una ejecución de calidad. Te acompañamos desde la idea inicial hasta la fabricación, instalación y entrega final.
          </p>

          <dl className="mt-11 grid grid-cols-1 gap-0 overflow-hidden border border-[#d8d1c7] bg-[#d8d1c7] sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="border-b border-r border-[#d8d1c7] bg-[#f9f7f3] p-5 sm:p-6 lg:p-7">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8a6f4d]">{pillar.number}</span>
                  <svg aria-hidden="true" viewBox="0 0 18 18" className="h-4 w-4 text-[#8a6f4d]" fill="none">
                    <path d="M4 9.5h10M9.5 4v10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                </div>
                <dt className="font-serif text-[2rem] leading-none text-[#181816]">{pillar.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#5d5b58]">{pillar.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative h-[560px] w-full overflow-hidden lg:h-[620px]">
          <div className="absolute left-0 top-0 h-[72%] w-[64%] overflow-hidden border border-[#d8d1c7] bg-[#d9d4cc] shadow-[0_18px_40px_rgba(23,18,14,0.08)]">
            <Image src="/projects/cocina-villa-alemana/after/01.webp" alt="Cocina a medida de ALC Studio Home" fill sizes="(min-width: 1024px) 34vw, 64vw" className="object-cover" priority />
          </div>

          <div className="absolute bottom-8 left-[20%] h-[38%] w-[42%] overflow-hidden border border-[#d8d1c7] bg-[#d9d4cc] shadow-[0_18px_40px_rgba(23,18,14,0.08)]">
            <Image src="/projects/rack-recreo-valparaiso/after/01.webp" alt="Detalle de mobiliario a medida" fill sizes="(min-width: 1024px) 24vw, 42vw" className="object-cover" />
          </div>

          <div className="absolute right-0 top-[12%] h-[78%] w-[34%] overflow-hidden border border-[#d8d1c7] bg-[#d9d4cc] shadow-[0_18px_40px_rgba(23,18,14,0.08)]">
            <Image src="/projects/bano-penablanca/after/01.webp" alt="Baño con mobiliario a medida" fill sizes="(min-width: 1024px) 18vw, 34vw" className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
