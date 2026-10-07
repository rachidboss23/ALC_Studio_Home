import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/features/contact/ContactForm";
import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 lg:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contacto" title="Cotiza tu proyecto" />
          <p className="mt-6 max-w-md leading-relaxed text-stone">Cuéntanos qué quieres transformar y te contactamos para coordinar el levantamiento.</p>
          <address className="mt-8 space-y-2 text-sm not-italic">
            <p><a href={`tel:${site.phone}`} className="hover:text-accent">{site.phoneDisplay}</a></p>
            <p><a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a></p>
            <p>{site.address.street}, {site.address.city} (oficina)</p>
            <p>{site.hours}</p>
          </address>
          <Button href={whatsappUrl()} external variant="outline" className="mt-8">Escribir por WhatsApp</Button>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
