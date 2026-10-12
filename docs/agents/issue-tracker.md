# Gestor de incidencias: GitHub Issues

Las incidencias y especificaciones de este proyecto se publican en `ozzyozzo/astro-blog` mediante GitHub CLI (`gh`). El repositorio remoto es la referencia para inferir el proyecto cuando se trabaja desde su raíz.

## Operaciones habituales

- Crear una incidencia: `gh issue create --repo ozzyozzo/astro-blog --title "..." --body-file <archivo>`. Prepara el cuerpo en un archivo para conservar los saltos de línea.
- Leer una incidencia: `gh issue view <número> --repo ozzyozzo/astro-blog --json number,title,body,labels,comments`.
- Listar incidencias: `gh issue list --repo ozzyozzo/astro-blog --state open --json number,title,body,labels,comments`; agrega filtros de estado o etiqueta según la tarea.
- Etiquetar una incidencia: `gh issue edit <número> --repo ozzyozzo/astro-blog --add-label <etiqueta>` o `--remove-label <etiqueta>`.
- Comentar: `gh issue comment <número> --repo ozzyozzo/astro-blog --body-file <archivo>`.
- Cerrar: `gh issue close <número> --repo ozzyozzo/astro-blog`.

Cuando una skill indique «publicar en el gestor de incidencias», crea una incidencia de GitHub. Cuando indique «leer el ticket relevante», consulta la incidencia correspondiente. Las solicitudes de cambio (PR) no entran en la clasificación de incidencias por defecto.

## Relaciones entre incidencias

- Usa subincidencias nativas de GitHub cuando estén disponibles. Si la instalación de `gh` no admite esa operación, enlaza el trabajo desde la incidencia principal y escribe `Parte de #<número>` en la secundaria.
- Usa dependencias nativas de GitHub cuando estén disponibles. Si no lo están, registra `Bloqueada por: #<número>` en el cuerpo de la incidencia dependiente.
- Al usar skills de planificación que crean un mapa de trabajo, conserva sus etiquetas y relaciones nativas según sus instrucciones.
