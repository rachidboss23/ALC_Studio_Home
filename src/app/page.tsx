import { About } from "@/features/home/About";
import { ContactSection } from "@/features/home/ContactSection";
import { CtaBand } from "@/features/home/CtaBand";
import { FeaturedProjects } from "@/features/home/FeaturedProjects";
import { Hero } from "@/features/home/Hero";
import { Process } from "@/features/home/Process";
import { ServicesPreview } from "@/features/home/ServicesPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <FeaturedProjects />
      <Process />
      <CtaBand />
      <ContactSection />
    </>
  );
}
