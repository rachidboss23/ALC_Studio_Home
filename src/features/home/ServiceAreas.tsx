import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/config/site";

export function ServiceAreas() {
  return (
    <section className="bg-sand py-16 lg:py-20">
      <Container className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Cobertura" title={`Trabajamos en la ${site.area}.`} />
          <p className="mt-5 text-sm text-stone">
            Nuestros proyectos más recientes están en estas comunas.
          </p>
        </div>
        <ul className="flex flex-wrap gap-2.5">
          {site.serviceAreas.map((area) => (
            <li key={area} className="border border-ink/20 px-5 py-2.5 font-serif text-xl">{area}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
