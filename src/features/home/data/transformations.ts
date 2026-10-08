// Pares "antes / después" que se muestran en el inicio. Los índices apuntan a las fotos
// del proyecto (before[i] / images[i]); elige la pareja con ángulos más parecidos.
export const transformations = [
  { slug: "bano-penablanca", label: "Baño", before: 0, after: 1 },
  { slug: "cocina-vina-del-mar", label: "Cocina", before: 0, after: 0 },
  { slug: "reparacion-muros-cielos", label: "Muros y cielos", before: 0, after: 0 },
] as const;
