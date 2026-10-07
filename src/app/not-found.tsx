import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <h1 className="font-serif text-5xl">Página no encontrada</h1>
      <div className="mt-8"><Button href="/">Volver al inicio</Button></div>
    </Container>
  );
}
