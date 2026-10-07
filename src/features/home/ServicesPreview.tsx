import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/features/services/data/services";

export function ServicesPreview() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Servicios" title="Lo que hacemos" />
          <Link href="/servicios" className="text-xs uppercase tracking-[0.14em] underline underline-offset-8">Ver todos los servicios</Link>
        </div>
        <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
          {services.slice(0, 6).map((s, i) => (
            <li key={s.title} className="flex gap-5 border-t border-ink/15 py-5">
              <span className="font-serif text-xl text-accent">0{i + 1}</span>
              <span className="font-serif text-2xl">{s.title}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
