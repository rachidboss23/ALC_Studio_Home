import { Container } from "@/components/layout/Container";
import { getProjectBySlug } from "@/features/projects/data";
import { BeforeAfterSlider, type TransformationItem } from "./BeforeAfterSlider";
import { transformations } from "./data/transformations";

export function BeforeAfter() {
  const items = transformations.flatMap((t): TransformationItem[] => {
    const p = getProjectBySlug(t.slug);
    const before = p?.beforeImages[t.before];
    const after = p?.images[t.after];
    return p && before && after ? [{ slug: p.slug, label: t.label, title: p.title, location: p.location, description: p.description, before, after }] : [];
  });
  if (items.length === 0) return null;
  return (
    <section className="bg-sand py-20 lg:py-28">
      <Container><BeforeAfterSlider items={items} /></Container>
    </section>
  );
}
