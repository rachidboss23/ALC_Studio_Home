import manifest from "./manifest.generated.json";
import { categories } from "./categories";
import { projectsMeta } from "./projects";
import type { CategoryId, Project, ProjectImage } from "../types";

type Manifest = Record<string, { after: ProjectImage[]; before: ProjectImage[] }>;

// Capa de acceso a datos: hoy lee archivos locales; mañana puede leer de un CMS o base de datos
// sin tocar los componentes.
const all: Project[] = projectsMeta.flatMap((meta) => {
  const files = (manifest as Manifest)[meta.slug];
  if (!files?.after.length) return [];
  return [{ ...meta, images: files.after, beforeImages: files.before, cover: files.after[0] }];
});

export const getProjects = (): Project[] => all;
export const getFeaturedProjects = (): Project[] => all.filter((p) => p.featured);
export const getProjectBySlug = (slug: string): Project | undefined => all.find((p) => p.slug === slug);
export const getCategories = () => categories.filter((c) => all.some((p) => p.category === c.id));
export const isCategoryId = (value: string | undefined): value is CategoryId => categories.some((c) => c.id === value);
