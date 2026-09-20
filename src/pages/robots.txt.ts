import type { APIContext } from "astro";
import { siteConfig } from "../config";

// Se genera desde el config para que siga a siteUrl, igual que el sitemap
export async function GET(context: APIContext) {
  const site = context.site?.href ?? `${siteConfig.siteUrl}/`;

  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", site).href}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
