import type { CategoryId } from "@/features/projects/types";

export type Service = { title: string; description: string; category?: CategoryId };

export const services: Service[] = [
  { title: "Cocinas a medida", description: "Diseño funcional, buena iluminación y terminaciones de alto estándar, pensadas para cómo cocinas y vives.", category: "cocinas" },
  { title: "Clósets y walk-in closets", description: "Orden y almacenamiento a la medida de tu espacio, con distribución pensada para tu rutina." },
  { title: "Muebles de baño", description: "Vanitorios y soluciones a medida, resistentes a la humedad y con diseño.", category: "banos" },
  { title: "Mobiliario a medida", description: "Piezas únicas para cada ambiente, desde tocadores hasta mobiliario comercial.", category: "mobiliario" },
  { title: "Racks y muebles de living", description: "Muebles de TV y living que combinan almacenamiento, iluminación y diseño.", category: "racks-living" },
  { title: "Recibidores", description: "La primera impresión de tu hogar, funcional y bien resuelta." },
  { title: "Quinchos", description: "Espacios de encuentro pensados para disfrutar durante todo el año." },
  { title: "Remodelaciones", description: "Renovación de espacios completos, con una sola empresa a cargo de todo.", category: "remodelaciones" },
  { title: "Terminaciones interiores", description: "Reparación de muros y cielos, pintura, pisos, guardapolvos y cornisas.", category: "remodelaciones" },
  { title: "Diseño y renders 3D", description: "Visualiza tu proyecto antes de fabricarlo, con propuestas claras y a tu medida." },
];

export const processSteps = [
  { title: "Idea y levantamiento", text: "Conversamos tu necesidad y medimos el espacio." },
  { title: "Diseño", text: "Definimos distribución, materiales y estilo." },
  { title: "Render / propuesta", text: "Te mostramos cómo quedará antes de fabricar." },
  { title: "Fabricación", text: "Producimos tu proyecto con control de calidad." },
  { title: "Instalación", text: "Instalamos y dejamos todo listo en tu espacio." },
  { title: "Entrega", text: "Revisamos juntos cada detalle y entregamos." },
] as const;
