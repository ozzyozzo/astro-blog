# ozzyozzo.dev

Mi blog personal, en [www.ozzyozzo.dev](https://www.ozzyozzo.dev). Hecho con Astro 5,
Tailwind v4 y contenido en markdown.

## Correr el proyecto

```bash
npm install
npm run dev
```

El sitio queda en `localhost:4321`.

## Configuración

Todo lo configurable vive en un solo archivo, `src/config.ts`: título, descripción, autor,
`siteUrl`, navegación, tema por defecto, proyectos y las opciones de lectura.

## Escribir contenido

### Posts

Archivos markdown en `src/content/blog/`:

```markdown
---
title: "Mi primer post"
description: "De qué se trata"
date: "2026-01-15"
tags: ["web", "astro"]
---

El contenido aquí.
```

### Páginas

Markdown o MDX en `src/content/pages/`. Aparecen en la navegación automáticamente; para
ocultar una, `hideFromNav: true` en su frontmatter.

### Terminal

En archivos MDX, `<Terminal>` envuelve contenido en una ventana de terminal. No hace falta
importarlo:

```mdx
<Terminal title="~/.profile">
  **Nombre** Peter Castro **Rol** Full Stack Dev
</Terminal>
```

Adentro el markdown funciona normal.

## Estructura

```text
src/
├── config.ts          # Configuración del sitio
├── content/
│   ├── blog/          # Posts
│   └── pages/         # Páginas
├── components/        # Componentes
├── pages/             # Rutas
└── styles/
    └── globals.css    # Colores y estilos de los temas
```

## Comandos

| Comando           | Qué hace                                   |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Build de producción                        |
| `npm run preview` | Previsualiza el build                      |
| `npm run check`   | Chequeo de tipos de Astro                  |
| `npm run format`  | Prettier sobre todo el repo                |
| `npm run lint:md` | markdownlint sobre los `.md`               |

## Deploy

Vercel, conectado al repo. El dominio `ozzyozzo.dev` redirige a `www.ozzyozzo.dev`, que es
el host canónico y el que debe coincidir con `siteUrl` en `src/config.ts`.

## Créditos

Este sitio parte del tema **Dotfiles** de
[Nabeel Siddiqui](https://nabeelsiddiqui.net), publicado bajo licencia MIT — ver
[LICENSE](LICENSE), que conserva su copyright. El tema a su vez toma patrones de CSS de
[AstroDeck](https://github.com/holger1411/astrodeck), de Holger Koenemann, también MIT.

Construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).
