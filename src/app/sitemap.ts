import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/servicios", "/proyectos"].map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.8 }));
}
