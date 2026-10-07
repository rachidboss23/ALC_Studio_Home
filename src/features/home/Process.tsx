import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/features/services/data/services";

export function Process() {
  return (
    <section id="proceso" className="bg-ink py-20 text-paper lg:py-28">
      <Container>
        <SectionHeading eyebrow="Proceso de trabajo" title="De la idea a la entrega" />
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {processSteps.map((s, i) => (
            <li key={s.title} className="border-t border-paper/30 pt-4">
              <span className="font-serif text-3xl text-accent">0{i + 1}</span>
              <h3 className="mt-2 text-sm font-medium uppercase tracking-[0.1em]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
