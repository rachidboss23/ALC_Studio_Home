import type {
  InstagramFeedPost,
  InstagramMediaType,
  InstagramSourcePost,
} from "./types";

const FALLBACK_ALT = "Publicación de ALC Studio Home en Instagram";

function isInstagramMediaType(value: unknown): value is InstagramMediaType {
  return value === "IMAGE" || value === "VIDEO" || value === "CAROUSEL_ALBUM";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isInstagramSourcePost(value: unknown): value is InstagramSourcePost {
  if (!isRecord(value) || !isRecord(value.sizes) || !isRecord(value.sizes.medium)) {
    return false;
  }

  return (
    ((typeof value.id === "string" && value.id.trim().length > 0) ||
      (typeof value.id === "number" && Number.isFinite(value.id))) &&
    (value.caption === undefined || value.caption === null || typeof value.caption === "string") &&
    (value.prunedCaption === undefined ||
      value.prunedCaption === null ||
      typeof value.prunedCaption === "string") &&
    typeof value.permalink === "string" &&
    value.permalink.trim().length > 0 &&
    (value.visibility === undefined ||
      value.visibility === null ||
      typeof value.visibility === "string") &&
    isInstagramMediaType(value.mediaType) &&
    typeof value.sizes.medium.mediaUrl === "string" &&
    value.sizes.medium.mediaUrl.trim().length > 0
  );
}

function getAlt(post: InstagramSourcePost): string {
  const caption = post.prunedCaption?.trim() || post.caption?.trim();
  const firstLine = caption?.split(/\r?\n/, 1)[0];
  const cleaned = firstLine
    ?.replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) return FALLBACK_ALT;
  return cleaned.length > 100 ? `${cleaned.slice(0, 97).trimEnd()}...` : cleaned;
}

export async function getInstagramPosts(): Promise<InstagramFeedPost[]> {
  const feedUrl = process.env.BEHOLD_FEED_URL;
  if (!feedUrl) return [];

  try {
    const response = await fetch(feedUrl, { next: { revalidate: 3600 } });
    if (!response.ok) return [];

    const data: unknown = await response.json();
    if (!isRecord(data) || !Array.isArray(data.posts)) return [];

    return data.posts
      .filter(isInstagramSourcePost)
      .filter((post) => post.visibility !== "hidden")
      .slice(0, 6)
      .map((post) => ({
        id: String(post.id).trim(),
        imageUrl: post.sizes.medium.mediaUrl.trim(),
        alt: getAlt(post),
        permalink: post.permalink.trim(),
        mediaType: post.mediaType,
      }));
  } catch {
    return [];
  }
}
