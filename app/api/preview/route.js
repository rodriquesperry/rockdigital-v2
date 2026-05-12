import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

const getSafeRedirectPath = (url) => {
  if (!url || !url.startsWith("/") || url.startsWith("//")) {
    return "/";
  }

  return url;
};

export async function GET(request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const url = searchParams.get("url");
  const status = searchParams.get("status");

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const draft = await draftMode();

  // Enable Draft Mode by setting the cookie
  if (status === "published") {
    draft.disable();
  } else {
    draft.enable();
  }

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  return NextResponse.redirect(new URL(getSafeRedirectPath(url), request.url));
}
