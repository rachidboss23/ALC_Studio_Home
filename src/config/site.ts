export const site = {
  name: "ALC Studio Home",
  legalName: "ALC Construcciones",
  tagline: "Diseño, fabricación e instalación de espacios a medida",
  description:
    "Diseño, fabricación e instalación de cocinas, clósets, muebles de baño y remodelaciones a medida en la V Región. Quilpué, Viña del Mar, Villa Alemana y alrededores.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: "+56940097213",
  phoneDisplay: "+56 9 4009 7213",
  whatsapp: "56940097213",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "alcspaconstrucciones@gmail.com",
  address: { street: "Lago Bertrand 120", city: "Quilpué", region: "Región de Valparaíso", country: "CL" },
  hours: "Lunes a viernes, 08:00 a 18:00",
  area: "V Región",
  instagram: { handle: "@alcstudiohome", url: "https://www.instagram.com/alcstudiohome/" },
} as const;

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/#contacto" },
] as const;
