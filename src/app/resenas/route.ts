import { GOOGLE_REVIEW_URL } from "@/config/site";

export function GET() {
  return new Response(null, {
    status: 307,
    headers: {
      Location: GOOGLE_REVIEW_URL,
      "X-Robots-Tag": "noindex",
    },
  });
}
