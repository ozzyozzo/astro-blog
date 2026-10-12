---
name: publicar-entrada
description: Prepara bajo demanda una entrada escrita por el autor o un borrador a partir de un tema, y la lleva a un PR revisable con Preview de Vercel en este blog.
---

# Preparar una entrada para revisión

Trabaja desde la raíz de este repositorio. Lee `docs/publicacion.md`, `src/content/config.ts` y una entrada existente antes de preparar el archivo. Recibe un texto Markdown del autor o un tema. Si falta el texto o el tema, solicítalo. Si recibes un texto del autor, conserva su redacción y estructura; limita los cambios al frontmatter y a ajustes que el autor pida expresamente. Conserva también sus enlaces. Si redactas desde un tema, usa español, primera persona, tono reflexivo y ejemplos concretos; toma 700–1.300 palabras como referencia flexible, según lo que pida el tema. En ese caso, consulta fuentes públicas para las afirmaciones verificables y registra sus URL para el PR; no agregues citas al artículo sin acordarlo con el autor.

1. Registra rama, `HEAD`, estado del índice y árbol de trabajo. Crea una rama nueva desde `main` para esta entrada, sin incorporar cambios locales ajenos. Si el árbol de trabajo impide aislarla con seguridad, usa un worktree limpio o resuelve el aislamiento antes de editar. Mantén el trabajo previo intacto.
2. Crea un único archivo `.md` en `src/content/blog/` con un slug libre y frontmatter válido para la colección: `title`, `description`, `date`, `tags` y `draft`. Propón los metadatos a partir del contenido. Usa por defecto la fecha local del día de preparación en formato `YYYY-MM-DD`; déjala editable en el PR. Escribe siempre `draft: true` o `draft: false` según la intención del autor. Si no está clara, aclárala antes del PR: integrar `draft: false` publica la entrada y `draft: true` la mantiene oculta en Production. Las imágenes quedan fuera de este flujo.
3. Ejecuta los chequeos existentes (`npm run check`, `npm run lint:md`, `npm run test:drafts` y `npm run build`). Corrige fallos causados por la entrada. Si persiste algún fallo o no puedes ejecutar un chequeo, consigna el comando, resultado y motivo en el PR y no lo presentes como listo.
4. Revisa el diff y prepara el commit con rutas explícitas de esta solicitud. Verifica el contenido preparado con `git diff --cached` antes de confirmar que el commit excluye archivos ajenos. Publica la rama y abre un PR contra `main`, con resumen, estado de `draft`, resultados de los chequeos y enlaces de fuentes aportadas o consultadas, si existen. Indica si no hubo fuentes externas.
5. Espera el estado de Vercel y agrega al PR la URL de la Preview correspondiente al commit actual. Comprueba que abra la ruta de la entrada y que el estado sea correcto. Si falla, actualiza el PR con el fallo y deja claro que requiere corrección. Entrega al autor el PR y la Preview para revisión; conserva los ajustes posteriores en el mismo PR y verifica de nuevo los chequeos afectados y la nueva Preview.

El autor decide cuándo integrar el PR. Cuando un borrador vaya a publicarse, cambia `draft` a `false` dentro del PR y vuelve a comprobar la Preview antes de la integración manual.
