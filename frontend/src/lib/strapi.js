import qs from "qs";
import { cache } from "react";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const TOKEN = process.env.STRAPI_API_TOKEN;

export function buildQuery(populate) {
  return qs.stringify(
    { populate },
    { encode: false },
  );
}

export const fetchAPI = cache(async function fetchAPI(endpoint, options = {}) {
  try {
    const response = await fetch(`${STRAPI_URL}${endpoint}`, {
      headers: TOKEN
        ? { Authorization: `Bearer ${TOKEN}` }
        : undefined,
      next: { revalidate: 3600 },
      ...options,
    });

    if (!response.ok) {
      console.error(`Strapi fetch failed: ${response.status} for ${endpoint}`);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("Strapi fetch error:", error);
    return null;
  }
});

export function getStrapiMediaUrl(media) {
  if (!media) return "/images/placeholder.jpg";
  const url = typeof media === "string" ? media : media.url;
  if (!url) return "/images/placeholder.jpg";
  if (url.startsWith("http")) return url;
  if (url.startsWith("/") && !url.startsWith("/uploads")) return url;
  return `${STRAPI_URL}${url}`;
}
