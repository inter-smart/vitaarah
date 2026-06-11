export function parseOtherMeta(htmlString) {
  if (!htmlString || htmlString.trim() === "") {
    return { other: {}, scripts: [] };
  }

  const other = {};
  const scripts = [];

  const metaRegex = /<meta\s+([^>]+)>/gi;
  let match;

  while ((match = metaRegex.exec(htmlString)) !== null) {
    const attributes = match[1];
    const nameMatch = attributes.match(/name=["']([^"']+)["']/);
    const propertyMatch = attributes.match(/property=["']([^"']+)["']/);
    const httpEquivMatch = attributes.match(/http-equiv=["']([^"']+)["']/);
    const contentMatch = attributes.match(/content=["']([^"']+)["']/);
    const content = contentMatch ? contentMatch[1] : "";

    if (nameMatch) {
      other[nameMatch[1]] = content;
    } else if (propertyMatch) {
      other[propertyMatch[1]] = content;
    } else if (httpEquivMatch) {
      other[httpEquivMatch[1]] = content;
    }
  }

  const scriptRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let scriptMatch;

  while ((scriptMatch = scriptRegex.exec(htmlString)) !== null) {
    try {
      const jsonContent = scriptMatch[1].trim();
      scripts.push(JSON.parse(jsonContent));
    } catch (e) {
      console.error("Failed to parse JSON-LD:", e);
    }
  }

  return { other, scripts };
}
