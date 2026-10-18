"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import type { InstagramFeedPost, InstagramMediaType } from "./types";

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
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.7">
        <rect x="7" y="7" width="13" height="13" rx="2" />
        <path d="M4 16V5a1 1 0 0 1 1-1h11" />
      </svg>
    );
  }

  return null;
}

function CarouselArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      {direction === "previous" ? (
        <path d="m15 18-6-6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      ) : (
        <path d="m9 18 6-6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      )}
    </svg>
  );
}

export function InstagramCarousel({ posts }: { posts: InstagramFeedPost[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    setHasOverflow(maxScroll > 1);
    setCanScrollPrevious(track.scrollLeft > 1);
    setCanScrollNext(track.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(track);
    return () => observer.disconnect();
  }, [posts.length, updateScrollState]);

  function scroll(direction: "previous" | "next") {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({ left: (direction === "next" ? 1 : -1) * track.clientWidth * 0.8 });
  }

  return (
    <div className="relative mt-8">
      {hasOverflow && (
        <button
          type="button"
          aria-label="Ver publicaciones anteriores"
          disabled={!canScrollPrevious}
          onClick={() => scroll("previous")}
          className="absolute left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#1b1b1a]/20 bg-[#f5f1e9] text-[#1b1b1a] shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71583e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45 motion-reduce:transition-none"
        >
          <CarouselArrow direction="previous" />
        </button>
      )}
      {hasOverflow && (
        <button
          type="button"
          aria-label="Ver publicaciones siguientes"
          disabled={!canScrollNext}
          onClick={() => scroll("next")}
          className="absolute right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#1b1b1a]/20 bg-[#f5f1e9] text-[#1b1b1a] shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71583e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45 motion-reduce:transition-none"
        >
          <CarouselArrow direction="next" />
        </button>
      )}
      <div
        ref={trackRef}
        onScroll={updateScrollState}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
      >
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver publicación en Instagram: ${post.alt}`}
            className="group relative block aspect-square w-[64%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#1b1b1a]/15 bg-[#f0ede7] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71583e] focus-visible:ring-offset-2 md:w-[38%] lg:w-[27%] motion-reduce:transform-none motion-reduce:transition-none"
          >
            <Image
              src={post.imageUrl}
              alt={post.alt}
              fill
              sizes="(min-width: 1024px) 27vw, (min-width: 768px) 38vw, 64vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[#1b1b1a]/0 text-[#f5f1e9] opacity-0 transition duration-300 group-hover:bg-[#1b1b1a]/35 group-hover:opacity-100 group-focus-visible:bg-[#1b1b1a]/35 group-focus-visible:opacity-100 motion-reduce:transition-none">
              <InstagramIcon className="h-7 w-7" />
            </span>
            {post.mediaType !== "IMAGE" && (
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1b1b1a]/85 text-[#f5f1e9]">
                <MediaTypeIcon mediaType={post.mediaType} />
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}