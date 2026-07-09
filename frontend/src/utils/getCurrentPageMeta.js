"use client";

/**
 * Extracts metadata from the current browser window and URL.
 * Automatically deduces the page_type and slug from the pathname.
 * 
 * @returns {{ page_url: string, page_title: string, slug: string, page_type: string }}
 */
export function getCurrentPageMeta() {
  if (typeof window === "undefined") {
    return {
      page_url: "",
      page_title: "",
      slug: "",
      page_type: "",
    };
  }

  const pathname = window.location.pathname;
  let page_type = "general";
  let slug = "";

  // Split pathname into segments, e.g., "/programs/weight-loss" -> ["", "programs", "weight-loss"]
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0) {
    const firstSegment = segments[0].toLowerCase();
    
    // Map URL segments to page types
    if (firstSegment === "programs" || firstSegment === "program") {
      page_type = "program";
    } else if (firstSegment === "treatments" || firstSegment === "treatment") {
      page_type = "treatment";
    } else if (firstSegment === "conditions" || firstSegment === "condition") {
      page_type = "condition";
    } else if (firstSegment === "packages" || firstSegment === "package") {
      page_type = "package";
    } else if (firstSegment === "blogs" || firstSegment === "blog") {
      page_type = "blog";
    }

    // Usually the last segment is the slug, unless it's just the root type (e.g. "/programs")
    if (segments.length > 1) {
      slug = segments[segments.length - 1];
    }
  }

  return {
    page_url: window.location.href,
    page_title: document.title,
    slug: slug,
    page_type: page_type,
  };
}
