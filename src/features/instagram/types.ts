export type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export type InstagramSourcePost = {
  id: string | number;
  caption?: string | null;
  prunedCaption?: string | null;
  permalink: string;
  visibility?: string | null;
  mediaType: InstagramMediaType;
  sizes: {
    medium: {
      mediaUrl: string;
    };
  };
};

export type InstagramFeedPost = {
  id: string;
  imageUrl: string;
  alt: string;
  permalink: string;
  mediaType: InstagramMediaType;
};
