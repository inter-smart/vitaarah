import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const url = searchParams.get("url");

  // Validate the preview secret
  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response("Invalid secret token", { status: 401 });
  }

  // Enable Draft Mode in Next.js
  const draft = await draftMode();
  draft.enable();

  // Redirect to the target page URL
  redirect(url || "/");
}
