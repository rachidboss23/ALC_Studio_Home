import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GOOGLE_REVIEW_URL } from "@/config/site";
import { testimonials } from "./data";

function Star() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 fill-accent text-accent" viewBox="0 0 24 24">
      <path d="m12 2.75 2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.31l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93L12 2.75Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section id="resenas" className="home-section-compact bg-paper">
      <Container>
        {testimonials.length > 0 && (
          <>
            <div className="mb-10 max-w-2xl sm:mb-12">
              <SectionHeading eyebrow="Experiencias reales" title="Lo que dicen nuestros clientes" />
            </div>
            <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0">
              {testimonials.map((testimonial) => (
                <article key={testimonial.project} className="flex h-full w-[88%] shrink-0 snap-start flex-col rounded-2xl border border-accent/40 bg-white px-6 py-7 sm:px-7 sm:py-8 md:w-auto">
                  <div role="img" aria-label={`Calificación: ${testimonial.rating} de 5`} className="mb-5 flex gap-0.5">
                    {Array.from({ length: testimonial.rating }, (_, index) => <Star key={index} />)}
                  </div>
                  <p className="flex-1 font-serif text-xl leading-[1.5] text-ink sm:text-[1.35rem]">“{testimonial.text}”</p>
                  <div className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                    <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sand font-serif text-lg text-ink">
                      {testimonial.name.trim().charAt(0).toLocaleUpperCase()}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">{testimonial.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-stone">{testimonial.location} · {testimonial.project}</p>
                      {testimonial.source === "Google" && (
                        <p className="mt-1 text-xs text-stone">Reseña en Google</p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
        <div className={`grid gap-7 bg-sand px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:px-12 ${testimonials.length > 0 ? "mt-12" : ""}`}>
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