import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/config/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image src="/brand/logo-white.png" alt={site.legalName} width={140} height={160} className="h-32 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">{site.tagline}.</p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-paper/50">Navegación</p>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-accent">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-paper/50">Contacto</p>
          <address className="space-y-2 text-sm not-italic text-paper/80">
            <p><a href={`tel:${site.phone}`} className="hover:text-accent">{site.phoneDisplay}</a></p>
            <p><a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a></p>
            <p>{site.address.street}, {site.address.city}<br /><span className="text-paper/50">Oficina. Trabajamos en la {site.area}.</span></p>
            <p>{site.hours}</p>
            <p><a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Instagram {site.instagram.handle}</a></p>
          </address>
        </div>
      </Container>
      <div className="border-t border-paper/10 py-6 text-center text-xs text-paper/40">
        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
