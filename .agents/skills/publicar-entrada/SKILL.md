---
name: publicar-entrada
description: Prepara bajo demanda una entrada escrita por el autor o un borrador a partir de un tema, para revisarla localmente y publicarla en este blog tras su aprobación.
---

# Preparar y publicar una entrada

Trabaja desde la raíz de este repositorio. Lee `docs/publicacion.md`, `src/content/config.ts` y una entrada existente antes de preparar el archivo. Recibe un texto Markdown del autor o un tema. Si falta el texto o el tema, solicítalo. Si recibes un texto del autor, conserva su redacción y estructura; limita los cambios al frontmatter y a ajustes que el autor pida expresamente. Conserva también sus enlaces. Si redactas desde un tema, usa español, primera persona, tono reflexivo y ejemplos concretos; toma 700–1.300 palabras como referencia flexible, según lo que pida el tema. En ese caso, consulta fuentes públicas para las afirmaciones verificables y conserva sus URL para informar al autor; no agregues citas al artículo sin acordarlo con él.

1. Registra rama, `HEAD`, estado del índice y árbol de trabajo. Prepara la entrada en una rama separada desde el `main` remoto, sin incorporar cambios locales ajenos. Si el árbol de trabajo impide aislarla con seguridad, usa un worktree limpio o resuelve el aislamiento antes de editar. Mantén el trabajo previo intacto.
2. Crea un archivo `.md` en `src/content/blog/` con un slug libre y frontmatter válido para la colección: `title`, `description`, `date`, `tags` y `draft`. Propón los metadatos a partir del contenido. Usa por defecto la fecha local del día de preparación en formato `YYYY-MM-DD`; el autor puede cambiarla antes de publicar. Escribe siempre `draft: true` o `draft: false` según su intención. Las imágenes quedan fuera de este flujo.
3. Presenta la entrada en el entorno de desarrollo local, como `blog-astro-dev.home`, para que el autor revise texto y metadatos. Espera su aprobación editorial antes de publicarla. Tras la aprobación, escribe `draft: false`; `draft: true` permanece oculto en Production.
4. Ejecuta los chequeos existentes (`npm run check`, `npm run lint:md` y `npm run build`; también `npm run test:drafts` si el script está disponible). Corrige fallos causados por la entrada y comunica los fallos pendientes antes de publicar.
5. Revisa el diff y prepara el commit con rutas explícitas de esta solicitud. Verifica `git diff --cached` y que los commits por encima del `main` remoto incluyan solo esta entrada. Tras la aprobación y los chequeos, publica con un push normal a `main`, sin forzar ni incorporar otros cambios locales. Si el remoto avanzó, vuelve a aislar y validar la entrada antes de reintentar. Comprueba la URL pública después del despliegue e informa los resultados y las fuentes al autor.
