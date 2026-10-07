"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/config/site";
import { Container } from "./Container";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label={`${site.name}, inicio`}>
          <Image src="/brand/mark.png" alt="" width={40} height={31} className="h-7 w-auto" priority />
          <span className="font-serif text-xl tracking-[0.12em] uppercase">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs uppercase tracking-[0.14em] text-stone transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <button type="button" className="p-2 md:hidden" aria-expanded={open} aria-label="Abrir menú" onClick={() => setOpen((v) => !v)}>
          <span className="block h-px w-6 bg-ink" />
          <span className="mt-1.5 block h-px w-6 bg-ink" />
          <span className="mt-1.5 block h-px w-6 bg-ink" />
        </button>
      </Container>
      {open && (
        <nav className="border-t border-line bg-paper md:hidden" aria-label="Móvil">
          <Container className="flex flex-col py-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-line py-4 text-sm uppercase tracking-[0.14em] last:border-0">
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
