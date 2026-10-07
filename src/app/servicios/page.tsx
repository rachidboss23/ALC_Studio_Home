import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/features/services/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Servicios", "Cocinas, clósets, muebles de baño, racks, quinchos, remodelaciones y terminaciones a medida en la V Región.", "/servicios");

export default function ServicesPage() {
  return (
    <Container className="py-16 lg:py-24">
      <SectionHeading eyebrow="Servicios" title="Diseño y ejecución integral" />
      <ul className="mt-14">
        {services.map((s, i) => (
          <li key={s.title} className="grid gap-3 border-t border-line py-8 md:grid-cols-[4rem_1fr_1.2fr_auto] md:items-baseline md:gap-8">
            <span className="font-serif text-xl text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="font-serif text-3xl">{s.title}</h2>
            <p className="text-sm leading-relaxed text-stone">{s.description}</p>
            {s.category ? <Link href={`/proyectos?categoria=${s.category}`} className="text-xs uppercase tracking-[0.14em] underline underline-offset-8">Ver trabajos</Link> : <span />}
          </li>
        ))}
      </ul>
      <div className="mt-14 flex flex-wrap gap-3">
        <Button href="/#contacto">Cotiza tu proyecto</Button>
        <Button href="/proyectos" variant="outline">Ver proyectos</Button>
      </div>
    </Container>
  );
}
