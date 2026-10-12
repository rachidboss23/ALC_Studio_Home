import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "behold.pictures" },
      { protocol: "https", hostname: "cdn2.behold.pictures" },
    ],
  },
  poweredByHeader: false,
};

export default nextConfig;
