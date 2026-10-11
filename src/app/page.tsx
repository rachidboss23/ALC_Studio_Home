import { About } from "@/features/home/About";
import { ContactSection } from "@/features/home/ContactSection";
import { BeforeAfter } from "@/features/home/BeforeAfter";
import { FeaturedProjects } from "@/features/home/FeaturedProjects";
import { Hero } from "@/features/home/Hero";
import { Process } from "@/features/home/Process";
import { ServiceAreas } from "@/features/home/ServiceAreas";
import { ServicesPreview } from "@/features/home/ServicesPreview";
import { InstagramCta } from "@/features/social/InstagramCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <FeaturedProjects />
      <BeforeAfter />
      <Process />
      <ServiceAreas />
      <InstagramCta />
      <ContactSection />
    </>
  );
}
