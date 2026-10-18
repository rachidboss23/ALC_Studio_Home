import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";
import { getInstagramPosts } from "./getInstagramPosts";
import { InstagramCarousel } from "./InstagramCarousel";

export async function InstagramFeed() {
  const posts = await getInstagramPosts();
  if (posts.length === 0) return null;

  return (
    <section className="home-section-compact bg-[#f5f1e9]">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#71583e]">{site.instagram.handle}</p>
            <h2 className="font-serif text-4xl leading-[1.05] text-[#1b1b1a] sm:text-5xl">Inspiración en cada detalle</h2>
            <p className="mt-4 text-sm text-[#1b1b1a]/70">Mira nuestros trabajos más recientes.</p>
          </div>
        </div>

        <InstagramCarousel posts={posts} />
        <div className="mt-8 flex justify-center">
          <Button href={site.instagram.url} external className="h-12">
            Ver más en Instagram
            <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
              <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </Button>
        </div>
      </Container>
    </section>
  );
}
