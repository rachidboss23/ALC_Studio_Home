export type Testimonial = {
  name: string;
  location: string;
  project: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  source?: "Google" | "WhatsApp";
};

export const testimonials: Testimonial[] = [
  {
    name: "Cliente de cocina",
    location: "Villa Alemana",
    project: "Cocina a medida",
    rating: 5,
    text: "Queríamos renovar la cocina y aprovechar mejor el espacio. Nos gustó mucho cómo quedó la combinación de colores y los detalles de los muebles. El resultado se ve moderno y quedó muy bien integrado con el resto de la casa.",
  },
  {
    name: "Cliente de remodelación",
    location: "Peñablanca",
    project: "Remodelación de baño",
    rating: 5,
    text: "El baño necesitaba un cambio completo y ahora se ve mucho más moderno y ordenado. Nos gustaron especialmente el vanitorio, la iluminación del espejo y la combinación de los revestimientos. Se nota la diferencia en el resultado final.",
  },
  {
    name: "Cliente de mobiliario",
    location: "Recreo, Valparaíso",
    project: "Muebles de living",
    rating: 5,
    text: "Buscábamos un mueble para el living que combinara con la casa sin recargar el espacio. Los listones de madera le dan un toque muy bonito y el diseño quedó limpio y funcional. Nos gustó cómo se aprovechó el espacio.",
  },
];
