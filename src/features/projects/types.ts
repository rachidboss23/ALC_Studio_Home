export type CategoryId = "cocinas" | "banos" | "remodelaciones" | "racks-living" | "mobiliario";

export type ProjectImage = { src: string; width: number; height: number };

export type ProjectMeta = {
  slug: string;
  title: string;
  category: CategoryId;
  location?: string;
  description: string;
  featured?: boolean;
};

export type Project = ProjectMeta & {
  images: ProjectImage[]; // trabajo terminado (la primera es la portada)
  beforeImages: ProjectImage[]; // fotos del "antes" (opcional)
  cover: ProjectImage;
};
