// Prioridad: variable manual (dominio final) > URL de producción que Vercel entrega sola > localhost.
function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const site = {
  name: "ALC Studio Home",
  legalName: "ALC Construcciones",
  tagline: "Diseño, fabricación e instalación de espacios a medida",
  description:
    "Diseño, fabricación e instalación de cocinas, clósets, muebles de baño y remodelaciones a medida en la V Región. Quilpué, Viña del Mar, Villa Alemana y alrededores.",
  url: siteUrl(),
  phone: "+56940097213",
  phoneDisplay: "+56 9 4009 7213",
  whatsapp: "56940097213",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "alcspaconstrucciones@gmail.com",
  address: { street: "Lago Bertrand 120", city: "Quilpué", region: "Región de Valparaíso", country: "CL" },
  hours: "Lunes a viernes, 08:00 a 18:00",
  area: "V Región",
  serviceAreas: ["Quilpué", "Villa Alemana", "Viña del Mar", "Concón", "Valparaíso", "Peñablanca"],
  instagram: { handle: "@alcstudiohome", url: "https://www.instagram.com/alcstudiohome/" },
} as const;

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/#contacto" },
] as const;
