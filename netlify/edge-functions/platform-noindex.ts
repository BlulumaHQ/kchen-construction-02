// Adds X-Robots-Tag: noindex only for platform hostnames (never custom domains).
const PLATFORM_SUFFIXES = [".netlify.app", ".lovable.app", ".workers.dev", ".pages.dev"];

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const response = await context.next();
  const host = new URL(request.url).hostname.toLowerCase();
  const isPlatform = PLATFORM_SUFFIXES.some((s) => host.endsWith(s));
  const isHtml = (response.headers.get("content-type") || "").includes("text/html");
  if (!isPlatform || !isHtml) return response;
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};

export const config = { path: "/*" };
