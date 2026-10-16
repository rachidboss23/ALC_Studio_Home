import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GOOGLE_REVIEW_URL } from "@/config/site";
import { testimonials } from "./data";

function Star({ filled, className = "h-4 w-4" }: { filled: boolean; className?: string }) {
  return (
    <svg aria-hidden="true" className={`${className} ${filled ? "fill-accent text-accent" : "fill-transparent text-stone"}`} viewBox="0 0 24 24">
      <path d="m12 2.75 2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.31l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93L12 2.75Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <Container>
        {testimonials.length > 0 && (
          <>
            <div className="mb-10 max-w-2xl sm:mb-12">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">Experiencias reales</p>
              <h2 className="font-serif text-4xl leading-[1.1] sm:text-5xl">Lo que dicen nuestros clientes</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.project} className="flex flex-col border border-accent/40 bg-white px-6 py-7 sm:px-7 sm:py-8">
                  <div aria-hidden="true" className="mb-6 flex gap-0.5">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} filled className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="flex-1 font-serif text-xl leading-[1.55] text-ink sm:text-[1.35rem]">“{testimonial.text}”</p>
                  <div className="mt-7 pt-5">
                    {testimonial.source === "Google" && (
                      <span className="mb-2 block text-[10px] tracking-[0.04em] text-stone">Reseña en Google</span>
                    )}
                    <p className="text-[10px] uppercase leading-relaxed tracking-[0.12em] text-stone">{testimonial.name} · {testimonial.location} · {testimonial.project}</p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
        <div className="mt-12 grid gap-7 bg-sand px-6 py-8 sm:px-10 sm:py-10 lg:mt-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:px-12">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="Tu opinión" title="¿Te gustó cómo quedó tu espacio?" />
            <p className="mt-3 text-sm leading-relaxed text-stone sm:text-base">
              Tu reseña en Google ayuda a otras familias de la V Región a elegir con confianza. Nos encantaría saber cómo fue tu experiencia.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-center">
            <Button
              href={GOOGLE_REVIEW_URL}
              external
              className="min-h-14 w-full max-w-md normal-case text-xs font-semibold tracking-[0.04em] transition-colors hover:bg-accent hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none sm:w-auto sm:px-8 sm:text-sm"
            >
              <span>Dejar mi reseña en Google</span>
              <svg aria-hidden="true" className="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </Button>
            <p className="mt-3 text-xs leading-relaxed text-stone sm:text-sm lg:text-center">
              Toma menos de 1 minuto. Necesitas una cuenta de Google.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
