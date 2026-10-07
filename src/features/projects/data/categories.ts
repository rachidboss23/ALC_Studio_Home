import type { CategoryId } from "../types";

export const categories: ReadonlyArray<{ id: CategoryId; label: string }> = [
  { id: "cocinas", label: "Cocinas" },
  { id: "banos", label: "Baños" },
  { id: "remodelaciones", label: "Remodelaciones" },
  { id: "racks-living", label: "Racks y living" },
  { id: "mobiliario", label: "Mobiliario a medida" },
];
