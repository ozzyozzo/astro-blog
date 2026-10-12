import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const draft = "memoria-claude-code-carpetas-vacias";
const published = "mi-setup-2026";
const pages = [
  "index.html",
  "blog/index.html",
  "archivo/index.html",
  "buscar/index.html",
  "rss.xml",
  "sitemap-0.xml",
];

for (const environment of ["preview", "production"]) {
  execFileSync("npm", ["run", "build"], {
    stdio: "inherit",
    env: { ...process.env, VERCEL_ENV: environment },
  });

  const dist = join(process.cwd(), "dist");
  assert.equal(
    existsSync(join(dist, "blog", draft, "index.html")),
    environment === "preview",
    `${environment}: URL directa del borrador`,
  );
  assert.ok(existsSync(join(dist, "blog", published, "index.html")));
  assert.equal(
    existsSync(join(dist, "etiquetas", "memoria", "index.html")),
    environment === "preview",
    `${environment}: etiqueta exclusiva del borrador`,
  );
  if (environment === "preview") {
    assert.ok(
      readFileSync(join(dist, "etiquetas", "memoria", "index.html"), "utf8")
        .includes(draft),
    );
  }

  for (const page of pages) {
    const content = readFileSync(join(dist, page), "utf8");
    assert.equal(
      content.includes(draft),
      environment === "preview",
      `${environment}: ${page}`,
    );
  }
}
