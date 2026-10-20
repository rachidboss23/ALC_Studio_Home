"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { getProjectBySlug } from "@/features/projects/data";
import { mosaicSlugs } from "./data/featured-projects";

const featuredServices = [
  {
    title: "Cocinas a medida",
    description: "Diseño funcional, buena iluminación y terminaciones de alto estándar.",
    imageProject: "cocina-concon",
    href: "/proyectos?categoria=cocinas",
  },
  {
    title: "Clósets y walk-in closets",
    description: "Almacenamiento pensado para tu espacio y tu rutina.",
    imageProject: "local-comercial-villa-alemana",
    href: "/proyectos?categoria=mobiliario",
  },
  {
    title: "Muebles de baño",
    description: "Vanitorios y soluciones resistentes a la humedad.",
    imageProject: "bano-penablanca",
    imageIndex: 2,
    href: "/proyectos?categoria=banos",
  },
  {
    title: "Mobiliario a medida",
    description: "Piezas únicas para cada ambiente.",
    imageProject: "tocador-a-medida",
    href: "/proyectos?categoria=mobiliario",
  },
  {
    title: "Racks y muebles de living",
    description: "Almacenamiento, iluminación y diseño integrados.",
    imageProject: "rack-parque-pinares",
    href: "/proyectos?categoria=racks-living",
  },
  {
    title: "Remodelaciones",
    description: "Renovación de espacios con un equipo responsable.",
    imageProject: "remodelacion-interior-concon",
    href: "/proyectos?categoria=remodelaciones",
  },
] as const;

const mosaicCoverSources = new Set(
  mosaicSlugs.flatMap((slug) => {
    const project = getProjectBySlug(slug);
    return project ? [project.cover.src] : [];
  }),
);

function getServiceImageSrc(service: (typeof featuredServices)[number]) {
  const project = getProjectBySlug(service.imageProject);
  if (!project) return undefined;

  const preferredIndex = "imageIndex" in service ? service.imageIndex : 0;
  const preferredImage = project.images[preferredIndex];
  if (preferredImage && !mosaicCoverSources.has(preferredImage.src)) return preferredImage.src;

  return (
    project.images.find((image) => !mosaicCoverSources.has(image.src))?.src ??
    preferredImage?.src ??
    project.cover.src
  );
}

export function ServicesPreview() {
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const cardInnerRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const motionMql = window.matchMedia("(prefers-reduced-motion: reduce)");

    let rafId: number | null = null;
    const baseTop = 82;
    const step = 14;

    const resetStyles = () => {
      cardInnerRefs.current.forEach((el) => {
        if (el) {
          el.style.transform = "";
          el.style.filter = "";
          el.style.opacity = "";
        }
      });
    };

    const updateTransforms = () => {
      rafId = null;
      if (!mql.matches || motionMql.matches) {
        resetStyles();
        return;
      }

      const count = cardRefs.current.length;
      const overlaps: number[] = new Array(count).fill(0);

      // 1. Calcular el progreso del solapamiento de la card (i + 1) sobre la card (i)
      for (let i = 0; i < count - 1; i++) {
        const curr = cardRefs.current[i];
        const next = cardRefs.current[i + 1];
        if (!curr || !next) continue;

        const currRect = curr.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();
        const nextTargetTop = baseTop + (i + 1) * step;

        const totalOverlap = currRect.bottom - nextTargetTop;
        const currentOverlap = currRect.bottom - nextRect.top;

        if (totalOverlap > 0) {
          const raw = currentOverlap / totalOverlap;
          overlaps[i] = Math.max(0, Math.min(1, raw));
        }
      }

      // 2. Aplicar escala, brillo y opacidad según el solapamiento
      for (let i = 0; i < count; i++) {
        const inner = cardInnerRefs.current[i];
        if (!inner) continue;

        if (i === count - 1) {
          inner.style.transform = "scale(1)";
          inner.style.filter = "none";
          inner.style.opacity = "1";
          continue;
        }

        const p1 = overlaps[i];
        const p2 = i + 1 < count - 1 ? overlaps[i + 1] : 0;

        // Interpolación smoothstep para suavidad máxima
        const ease1 = p1 * p1 * (3 - 2 * p1);
        const ease2 = p2 * p2 * (3 - 2 * p2);

        const scale = 1 - ease1 * 0.08 - ease2 * 0.03;
        const brightness = 1 - ease1 * 0.1 - ease2 * 0.06;
        const opacity = 1 - ease1 * 0.08 - ease2 * 0.04;

        inner.style.transform = `scale(${scale.toFixed(4)})`;
        inner.style.filter = `brightness(${brightness.toFixed(4)})`;
        inner.style.opacity = opacity.toFixed(4);
      }
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateTransforms);
      }
    };

    const handleMediaOrResize = () => {
      if (!mql.matches || motionMql.matches) {
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        resetStyles();
        return;
      }
      updateTransforms();
    };

    if (mql.matches && !motionMql.matches) {
      updateTransforms();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleMediaOrResize, { passive: true });
    mql.addEventListener("change", handleMediaOrResize);
    motionMql.addEventListener("change", handleMediaOrResize);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleMediaOrResize);
      mql.removeEventListener("change", handleMediaOrResize);
      motionMql.removeEventListener("change", handleMediaOrResize);
      resetStyles();
    };
  }, []);

  return (
    <section id="servicios" className="home-section bg-[#f1eee8]">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#71583e]">SERVICIOS</p>
            <h2 className="font-serif text-[clamp(3rem,4vw,5rem)] leading-[0.92] tracking-[-0.04em] text-[#181816]">
              Lo que hacemos.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#595856] sm:text-base">
            Desde cocinas hasta remodelaciones, creamos soluciones a medida para cada espacio, combinando diseño, calidad y funcionalidad.
          </p>

          <Link href="/#contacto" className="inline-flex items-center justify-center gap-2 self-end border border-[#181816] bg-[#181816] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#f7f3ee] transition-colors hover:bg-[#2a2a28] lg:justify-self-end">
            Conversemos tu proyecto
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <ul className="mt-12 flex flex-col gap-6 pb-20 md:grid md:grid-cols-2 md:gap-5 md:pb-0 xl:grid-cols-3">
          {featuredServices.map((service, index) => {
            const imageSrc = getServiceImageSrc(service);
            return (
              <li
                key={service.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                style={{ "--card-index": index } as React.CSSProperties}
                className="service-card-sticky-wrapper group min-w-0"
              >
                <Link
                  ref={(el) => {
                    cardInnerRefs.current[index] = el;
                  }}
                  href={service.href}
                  className="service-card-inner block h-full min-w-0 overflow-hidden rounded-2xl border border-[#d8d1c7] bg-[#faf8f5] md:transition-transform md:duration-200 md:hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <div className="relative aspect-[1.5/1] overflow-hidden bg-[#dbd4ca]">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                      />
                    )}
                  </div>
                  <div className="flex gap-4 p-5 sm:p-6">
                    <span className="pt-1 text-xs font-medium uppercase tracking-[0.16em] text-[#71583e]">{String(index + 1).padStart(2, "0")}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="min-w-0 font-serif text-[1.65rem] leading-none text-[#181816] sm:text-[2rem]">{service.title}</h3>
                        <span aria-hidden="true" className="mt-1 text-lg text-[#181816]">↗</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#5c5955]">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
