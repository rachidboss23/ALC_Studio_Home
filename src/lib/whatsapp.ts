import { site } from "@/config/site";

export function whatsappUrl(message = "Hola, quiero cotizar un proyecto con ALC Studio Home.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
