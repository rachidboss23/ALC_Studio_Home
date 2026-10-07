"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import type { Project } from "../types";

type Props = { project: Project | null; onClose: () => void };

export function ProjectDialog({ project, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [mode, setMode] = useState<"after" | "before">("after");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  useEffect(() => {
    setMode("after");
    setIndex(0);
  }, [project?.slug]);

  const images = project ? (mode === "after" ? project.images : project.beforeImages) : [];
  const step = useCallback((d: number) => setIndex((i) => (images.length ? (i + d + images.length) % images.length : 0)), [images.length]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, step]);

  const current = images[index];

  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => e.target === ref.current && onClose()} className="m-auto h-[92vh] w-[min(1100px,94vw)] overflow-hidden bg-paper p-0 text-ink backdrop:bg-black/70">
      {project && current && (
        <div className="grid h-full md:grid-cols-[1.3fr_1fr]">
          <div className="relative min-h-0 bg-ink">
            <Image key={current.src} src={current.src} alt={`${project.title}, foto ${index + 1}`} fill sizes="(min-width: 768px) 60vw, 94vw" className="object-contain" />
            {images.length > 1 && (
              <>
                <button type="button" aria-label="Foto anterior" onClick={() => step(-1)} className="absolute top-1/2 left-2 -translate-y-1/2 bg-paper/90 px-3 py-2 text-lg">‹</button>
                <button type="button" aria-label="Foto siguiente" onClick={() => step(1)} className="absolute top-1/2 right-2 -translate-y-1/2 bg-paper/90 px-3 py-2 text-lg">›</button>
                <span className="absolute bottom-3 left-3 bg-paper/90 px-3 py-1 text-xs">{index + 1} / {images.length}</span>
              </>
            )}
          </div>
          <div className="flex min-h-0 flex-col overflow-y-auto p-6 sm:p-8">
            <button type="button" onClick={onClose} className="self-end text-xs uppercase tracking-[0.14em] text-stone hover:text-ink">Cerrar ✕</button>
            {project.location && <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-accent">{project.location}</p>}
            <h3 className="mt-1 font-serif text-3xl leading-tight">{project.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-stone">{project.description}</p>
            {project.beforeImages.length > 0 && (
              <div className="mt-6 flex border border-line text-xs uppercase tracking-[0.14em]" role="group" aria-label="Ver antes o después">
                {(["after", "before"] as const).map((m) => (
                  <button key={m} type="button" aria-pressed={mode === m} onClick={() => { setMode(m); setIndex(0); }} className={cn("flex-1 py-3 transition-colors", mode === m ? "bg-ink text-paper" : "hover:bg-sand")}>
                    {m === "after" ? "Después" : "Antes"}
                  </button>
                ))}
              </div>
            )}
            <div className="mt-auto pt-8">
              <Button href={whatsappUrl(`Hola, vi el proyecto "${project.title}" y quiero cotizar algo similar.`)} external className="w-full">Cotizar algo similar</Button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
