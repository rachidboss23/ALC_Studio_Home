import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";
import { getInstagramPosts } from "./getInstagramPosts";
import type { InstagramMediaType } from "./types";

function MediaTypeIcon({ mediaType }: { mediaType: InstagramMediaType }) {
  if (mediaType === "VIDEO") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M8 5.5v13l10-6.5z" />
      </svg>
    );
  }

  if (mediaType === "CAROUSEL_ALBUM") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-current"
        strokeWidth="1.7"
      >
        <rect x="7" y="7" width="13" height="13" rx="2" />
        <path d="M4 16V5a1 1 0 0 1 1-1h11" />
      </svg>
    );
  }

  return null;
}

export async function InstagramFeed() {
  const posts = await getInstagramPosts();
  if (posts.length === 0) return null;

  return (
    <section className="bg-paper py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading eyebrow={site.instagram.handle} title="Síguenos en Instagram" />
            <p className="mt-4 text-sm text-stone">Mira nuestros trabajos más recientes.</p>
          </div>
          <Button
            href={site.instagram.url}
            external
            className="self-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:self-auto"
          >
            Ver más en Instagram
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver publicación en Instagram: ${post.alt}`}
              className="group relative aspect-square overflow-hidden border border-ink/15 bg-sand focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <Image
                src={post.imageUrl}
                alt={post.alt}
                fill
                sizes="(min-width: 1280px) 390px, (min-width: 1024px) calc((100vw - 6.5rem) / 3), (min-width: 640px) calc((100vw - 5rem) / 2), calc((100vw - 3.5rem) / 2)"
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-paper opacity-0 transition duration-300 group-hover:bg-ink/35 group-hover:opacity-100 group-focus-visible:bg-ink/35 group-focus-visible:opacity-100">
                <InstagramIcon className="h-8 w-8" />
              </span>
              {post.mediaType !== "IMAGE" && (
                <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center bg-ink/75 text-paper">
                  <MediaTypeIcon mediaType={post.mediaType} />
                </span>
              )}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
