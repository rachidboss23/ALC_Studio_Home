import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  { title: "Diseño personalizado", text: "Cada proyecto se desarrolla a la medida de tu espacio y tu forma de vivir." },
  { title: "Todo en uno", text: "Diseño, fabricación, instalación y remodelación con un solo equipo responsable." },
  { title: "Acompañamiento completo", text: "Te guiamos desde la idea inicial hasta la entrega final." },
  { title: "Terminaciones de calidad", text: "Cuidamos los detalles para que el resultado se vea y se sienta premium." },
];

export function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28">
      <Container className="grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Nosotros" title="Más que una fábrica de muebles." />
          <p className="mt-8 max-w-lg leading-relaxed text-stone">
            ALC Studio Home nace con el objetivo de transformar espacios mediante diseño, funcionalidad y una ejecución de calidad. Desarrollamos proyectos personalizados, acompañando al cliente desde la idea inicial y el diseño hasta la fabricación, instalación y entrega final.
          </p>
        </div>
        <dl className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="bg-paper p-7">
              <dt className="font-serif text-2xl">{p.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-stone">{p.text}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
