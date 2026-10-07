import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function CtaBand() {
  return (
    <section className="bg-sand py-20 text-center">
      <Container>
        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">¿Tienes un proyecto en mente?</h2>
        <div className="mt-8"><Button href="/#contacto">Cotiza tu proyecto</Button></div>
      </Container>
    </section>
  );
}
