import { API_BASE_URL } from "./constants";

export async function getHeaderData() {
  try {
    const params = new URLSearchParams({
      "populate[Logo]": "*",
      "populate[Favicon]": "*",
      "populate[Navigation]": "*",
      "populate[CtaButton][populate][Icon]": "*",
    });

    const res = await fetch(`${API_BASE_URL}/api/header?${params.toString()}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch header: ${res.status}`);
      return null;
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching header data:", error);
    return null;
  }
}

export function getStrapiMediaUrl(url) {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${API_BASE_URL}${url}`;
}
