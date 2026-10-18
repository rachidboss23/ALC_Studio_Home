import { Container } from "@/components/layout/Container";
import { processSteps } from "@/features/services/data/services";

export function Process() {
  return (
    <section id="proceso" className="home-section bg-ink text-paper">
      <Container>
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#d8c2a6]">Proceso de trabajo</p>
          <h2 className="font-serif text-4xl leading-[1.1] sm:text-5xl">De la idea a la entrega</h2>
        </div>
        <ol className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-6">
          {processSteps.map((s, i) => (
            <li key={s.title} className="border-t border-paper/30 pt-4">
              <span className="font-serif text-3xl text-accent">0{i + 1}</span>
              <h3 className="mt-2 text-sm font-medium uppercase tracking-[0.1em]">{s.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-paper/90">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
