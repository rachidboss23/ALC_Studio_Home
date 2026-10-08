"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";

export type TransformationItem = {
  slug: string;
  label: string;
  title: string;
  location?: string;
  description: string;
  before: { src: string; width: number; height: number };
  after: { src: string; width: number; height: number };
};

export function BeforeAfterSlider({ items }: { items: TransformationItem[] }) {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const item = items[active];

  const select = (i: number) => { setActive(i); setPos(50); };

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <div>
        <div
          className="relative mx-auto aspect-[4/5] max-h-[620px] w-full max-w-[500px] overflow-hidden bg-ink lg:mx-0"
          style={{ ["--p" as string]: `${pos}%` }}
        >
          <Image key={item.after.src} src={item.after.src} alt={`${item.title}: después`} fill sizes="(min-width: 1024px) 500px, 92vw" className="object-cover" />
          <Image key={item.before.src} src={item.before.src} alt={`${item.title}: antes`} fill sizes="(min-width: 1024px) 500px, 92vw" className="object-cover [clip-path:inset(0_calc(100%-var(--p))_0_0)]" />
          <span className="absolute bottom-3 left-3 bg-ink/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-paper">Antes</span>
          <span className="absolute right-3 bottom-3 bg-ink/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-paper">Después</span>
          <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-paper shadow-[0_0_0_1px_rgb(0_0_0/0.25)]" style={{ left: "var(--p)" }} />
          <div className="pointer-events-none absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-sm shadow-lg" style={{ left: "var(--p)" }} aria-hidden="true">↔</div>
          <input
            type="range" min={0} max={100} value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label={`Comparar antes y después: ${item.title}`}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 [touch-action:pan-y]"
          />
        </div>
        <div className="mx-auto mt-4 flex max-w-[500px] items-center justify-between gap-3 lg:mx-0">
          <div className="flex border border-line text-[11px] uppercase tracking-[0.14em]" role="group" aria-label="Ir al antes o al después">
            <button type="button" onClick={() => setPos(100)} className="px-4 py-2.5 hover:bg-sand">Antes</button>
            <button type="button" onClick={() => setPos(0)} className="border-l border-line px-4 py-2.5 hover:bg-sand">Después</button>
          </div>
          <p className="text-xs text-stone"><span className="lg:hidden">Desliza para comparar</span><span className="hidden lg:inline">Arrastra o usa las flechas del teclado</span></p>
        </div>
      </div>

      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">Antes y después</p>
        <h2 className="font-serif text-4xl leading-[1.1] sm:text-5xl">Mira cómo cambia un espacio.</h2>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Elegir trabajo">
          {items.map((it, i) => (
            <button key={it.slug} type="button" aria-pressed={i === active} onClick={() => select(i)} className={cn("border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors", i === active ? "border-ink bg-ink text-paper" : "border-line hover:border-ink")}>
              {it.label}
            </button>
          ))}
        </div>
        <h3 className="mt-8 font-serif text-2xl">{item.title}{item.location ? ` · ${item.location}` : ""}</h3>
        <p className="mt-3 max-w-md leading-relaxed text-stone">{item.description}</p>
        <Link href={`/proyectos?ver=${item.slug}`} className="mt-6 inline-block text-xs uppercase tracking-[0.14em] underline underline-offset-8">Ver el proyecto completo</Link>
      </div>
    </div>
  );
}
