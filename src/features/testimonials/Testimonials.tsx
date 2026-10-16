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
            <h2 className="text-center font-serif text-3xl lg:text-4xl">Lo que dicen nuestros clientes</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.project} className="flex flex-col border border-ink/15 bg-sand p-6">
                  {testimonial.rating && (
                    <div className="mb-5 flex gap-1" role="img" aria-label={`Calificación: ${testimonial.rating} de 5`}>
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} filled={index < (testimonial.rating ?? 0)} />
                      ))}
                    </div>
                  )}
                  <p className="flex-1 font-serif text-xl leading-relaxed">“{testimonial.text}”</p>
                  <div className="mt-6 border-t border-ink/10 pt-4">
                    {testimonial.source === "Google" && (
                      <span className="mb-2 inline-block text-[10px] uppercase tracking-[0.14em] text-stone">Reseña en Google</span>
                    )}
                    <p className="text-sm font-medium text-ink">{testimonial.name}</p>
                    <p className="mt-1 text-xs text-stone">{testimonial.location} · {testimonial.project}</p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
        <div className="mt-12 border border-ink/15 bg-sand px-6 py-10 text-center sm:px-10 sm:py-14 lg:mt-16">
          <SectionHeading eyebrow="Tu opinión" title="¿Te gustó cómo quedó tu espacio?" className="mx-auto max-w-3xl" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            Tu reseña en Google ayuda a otras familias de la V Región a elegir con confianza. Nos encantaría saber cómo fue tu experiencia.
          </p>
          <div className="mt-6 flex justify-center gap-1.5" role="img" aria-label="Cinco estrellas">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} filled className="h-8 w-8 sm:h-9 sm:w-9" />
            ))}
          </div>
          <Button
            href={GOOGLE_REVIEW_URL}
            external
            className="mt-8 min-h-14 w-full max-w-md normal-case text-sm tracking-normal motion-reduce:transition-none sm:w-auto sm:px-10 sm:text-base"
          >
            Dejar mi reseña en Google
          </Button>
          <p className="mt-4 text-xs leading-relaxed text-stone sm:text-sm">
            Toma menos de 1 minuto. Necesitas una cuenta de Google.
          </p>
        </div>
      </Container>
    </section>
  );
}
