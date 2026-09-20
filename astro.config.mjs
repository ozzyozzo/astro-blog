// @ts-check
import { defineConfig } from "astro/config";
import { passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { siteConfig } from "./src/config.ts";

// https://astro.build/config
export default defineConfig({
  // Single source of truth: edit siteUrl in src/config.ts
  site: siteConfig.siteUrl,
  trailingSlash: "never",
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    mdx(),
    sitemap({
      // /temas es la pagina de demo del tema original: sigue accesible,
      // pero no tiene por que aparecer en el sitemap.
      filter: (page) => !page.startsWith(`${siteConfig.siteUrl}/temas`),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
