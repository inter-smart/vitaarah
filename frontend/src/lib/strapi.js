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
    let finalEndpoint = endpoint;
    const fetchOptions = { ...options };

    let isDraft = false;
    try {
      const { draftMode } = await import("next/headers");
      const draft = await draftMode();
      isDraft = draft?.isEnabled;
    } catch (e) {
      // Ignore error outside request context (e.g. build/static rendering time or client side)
    }

    if (isDraft) {
      // Bypass cache for preview requests
      fetchOptions.cache = "no-store";
      if (fetchOptions.next) {
        delete fetchOptions.next;
      }

      // Query draft and published content in Strapi 5
      const separator = finalEndpoint.includes("?") ? "&" : "?";
      if (!finalEndpoint.includes("status=")) {
        finalEndpoint = `${finalEndpoint}${separator}status=draft`;
      }
    }

    const response = await fetch(`${STRAPI_URL}${finalEndpoint}`, {
      headers: TOKEN
        ? { Authorization: `Bearer ${TOKEN}` }
        : undefined,
      next: isDraft ? undefined : { revalidate: 60 },
      ...fetchOptions,
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
