import type { ProjectMeta } from "../types";

// Para agregar un trabajo: 1) crea content/raw/<slug>/after (y before) con las fotos,
// 2) ejecuta `npm run images`, 3) agrega su ficha aquí con el mismo slug.
export const projectsMeta: ProjectMeta[] = [
  {
    slug: "cocina-villa-alemana",
    title: "Cocina azul marino",
    category: "cocinas",
    location: "Villa Alemana",
    featured: true,
    description:
      "Cocina a medida en azul marino mate con cubierta blanca, vitrinas iluminadas y luz LED bajo los muebles altos, para un resultado moderno y funcional.",
  },
  {
    slug: "cocina-vina-del-mar",
    title: "Cocina con listones de madera",
    category: "cocinas",
    location: "Viña del Mar",
    featured: true,
    description:
      "Renovación completa de cocina: de un espacio en demolición a una cocina con muebles en tono madera, detalles en listones oscuros, cubierta blanca y piso nuevo.",
  },
  {
    slug: "bano-penablanca",
    title: "Remodelación de baño",
    category: "banos",
    location: "Peñablanca",
    featured: true,
    description:
      "Renovación completa de baño con revestimiento tipo mármol, ducha con mampara de perfilería negra, vanitorio flotante en madera, espejo redondo con luz LED y repisas a juego.",
  },
  {
    slug: "rack-recreo-valparaiso",
    title: "Rack de living con listones de madera",
    category: "racks-living",
    location: "Recreo, Valparaíso",
    featured: true,
    description:
      "Rack de TV con panel de listones de madera, repisas iluminadas y mueble flotante gris, integrado al living.",
  },
  {
    slug: "remodelacion-interior-concon",
    title: "Remodelación interior",
    category: "remodelaciones",
    location: "Concón",
    description:
      "Renovación integral de dormitorio, incluyendo reparación y empaste de muros, pintura de muros y cielo, instalación de piso vinílico, guardapolvos, cornisas y terminaciones finales.",
  },
  {
    slug: "reparacion-muros-cielos",
    title: "Reparación y terminación de muros y cielos",
    category: "remodelaciones",
    description:
      "Reparación de superficies, empaste, lijado, preparación y pintura de muros y cielos, logrando terminaciones uniformes y renovadas.",
  },
  {
    slug: "cocina-los-pinos-quilpue",
    title: "Cocina en L con cubierta de madera",
    category: "cocinas",
    location: "Los Pinos, Quilpué",
    description:
      "Cocina en L con muebles blancos de tiradores negros, cubierta de madera y columna de almacenamiento integrada, con piso flotante y terminaciones a juego.",
  },
  {
    slug: "remodelacion-completa-los-pinos",
    title: "Remodelación completa",
    category: "remodelaciones",
    location: "Los Pinos, Quilpué",
    description:
      "Remodelación integral con nueva cocina de muebles blancos e isla con cubierta de madera, piso vinílico y terminaciones renovadas.",
  },
  {
    slug: "cocina-concon",
    title: "Cocina a medida",
    category: "cocinas",
    location: "Concón",
    description:
      "Cocina en línea con muebles en tono madera, cubierta clara, campana, encimera a gas y luz LED bajo los muebles altos, aprovechando cada centímetro del espacio.",
  },
  {
    slug: "cocina-troncos-viejos",
    title: "Cocina Troncos Viejos",
    category: "cocinas",
    location: "Villa Alemana",
    description:
      "Cocina con muebles en tono madera suave y cubierta blanca continua, con amplia superficie de trabajo y revestimiento cerámico.",
  },
  {
    slug: "cocina-troncos-viejos-ds19",
    title: "Cocina Troncos Viejos DS19",
    category: "cocinas",
    location: "Villa Alemana",
    description:
      "Renovación de cocina con muebles claros, cubierta gris y barra que separa el espacio, sumando guardado abierto y cerrado.",
  },
  {
    slug: "local-comercial-villa-alemana",
    title: "Local comercial",
    category: "mobiliario",
    location: "Villa Alemana",
    description:
      "Mobiliario de exhibición a medida para local comercial: estanterías metálicas en negro, panel ranurado, bancas y muebles bajos, espejo con luz LED e iluminación por rieles.",
  },
  {
    slug: "rack-parque-pinares",
    title: "Rack de TV con iluminación",
    category: "racks-living",
    location: "Parque Pinares, Quilpué",
    description: "Mueble de TV flotante con paneles y repisas con luz LED integrada.",
  },
  {
    slug: "tocador-a-medida",
    title: "Tocador a medida",
    category: "mobiliario",
    description:
      "Tocador con espejo, panel de listones de madera con luz LED, cajonera y muebles superiores en blanco.",
  },
];
