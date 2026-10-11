import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { testimonials } from "./data";

function Star({ filled }: { filled: boolean }) {
  return (
    <svg aria-hidden="true" className={`h-4 w-4 ${filled ? "fill-accent text-accent" : "fill-transparent text-stone"}`} viewBox="0 0 24 24">
      <path d="m12 2.75 2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.31l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93L12 2.75Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <Container>
        {testimonials.length > 0 ? (
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
        ) : (
          <div className="flex flex-col items-start gap-5 border border-ink/15 bg-sand p-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-stone">
              ¿Trabajaste con nosotros? Tu opinión ayuda a otras familias a elegir con confianza.
            </p>
            <Button href={site.googleReviewUrl} external>Dejar tu reseña en Google</Button>
          </div>
        )}
        {testimonials.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Button href={site.googleReviewUrl} external>Dejar tu reseña en Google</Button>
          </div>
        )}
      </Container>
    </section>
  );
}
