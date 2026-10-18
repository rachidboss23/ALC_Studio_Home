"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { nav, site } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[#292b29]/10 bg-[#f5f1e9]">
      <div className="mx-auto flex h-[4.75rem] w-full max-w-none items-center justify-between px-5 sm:px-8 xl:px-[5vw]">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)} aria-label={`${site.name}, inicio`}>
          <Image src="/brand/mark.png" alt="" width={40} height={31} className="h-8 w-auto" loading="eager" />
          <span className="font-serif text-sm tracking-[0.1em] text-[#292b29] uppercase sm:text-xl">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Principal">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="font-serif text-[15px] text-[#292b29] transition-colors hover:text-[#8a6f4d] xl:text-base">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/#contacto" className="h-11 shrink-0">
            Solicita una cotización
            <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
              <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full text-[#292b29] focus-visible:outline-offset-2 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-6 bg-current" />
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="border-t border-[#292b29]/10 bg-[#f5f1e9] lg:hidden" aria-label="Móvil">
          <div className="mx-auto flex w-full max-w-none flex-col px-5 py-3 sm:px-8">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-[#292b29]/10 py-3.5 font-serif text-base text-[#292b29] last:border-0">
                {item.label}
              </Link>
            ))}
            <Button href="/#contacto" onClick={() => setOpen(false)} className="mt-4 h-12 justify-center sm:self-start">
              Solicita una cotización
              <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
