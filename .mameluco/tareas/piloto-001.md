# Candidata para el piloto: ignorar espacios exteriores al buscar

Estado: elegida por el usuario para ejecutar el piloto. Identificador local
`piloto-001`; no sustituye ni consume numeración de otro sistema de tareas.

## Problema observado

En `src/pages/buscar.astro`, se usa `query.trim()` para decidir si la consulta está
vacía, pero el filtrado utiliza `query.toLowerCase()` sin quitar espacios
exteriores. El resaltado también utiliza la consulta original.

Al ejecutar el fragmento de filtrado extraído del código con un fixture:

- `setup` encuentra el artículo de setup.
- `"  setup  "` no lo encuentra.
- El título completo encuentra el artículo.
- El mismo título con un espacio a cada lado no lo encuentra.

Un único espacio alrededor de `setup` sí puede coincidir porque el título contiene
esos espacios. El defecto depende del texto y de los espacios introducidos.
El usuario confirmó en navegador que un espacio funciona y desde dos deja de
encontrar el resultado en su prueba.

La revisión inicial reprodujo el fallo en el fragmento de filtrado. La ejecución
del piloto debe añadir evidencia en navegador antes y después del cambio.

## Objetivo

Que añadir espacios al principio o al final de una búsqueda no cambie sus
resultados ni el término resaltado.

## Aceptación

- A1. `setup`, `setup`, `"  setup  "`, `"   setup   "` y `SETUP` devuelven los mismos artículos.
- A2. Un título completo y el mismo título con espacios exteriores devuelven el
  mismo artículo.
- A3. Una consulta vacía o compuesta solo por espacios muestra las etiquetas y
  oculta resultados anteriores y el mensaje de ausencia de resultados.
- A4. El resaltado usa el término sin espacios exteriores y conserva el texto del
  artículo; los caracteres especiales siguen tratándose literalmente.
- A5. Una consulta inexistente muestra el mensaje correspondiente; al borrarla se
  restaura el estado inicial.
- A6. El flujo se puede usar con teclado y funciona a 390 y 1440 px de ancho sin
  introducir desbordamientos.
- A7. `check`, build, comprobación del build local y validación del flujo en Preview
  corresponden al candidato final y están aprobados.

## Alcance

Normalizar la consulta para filtrado y resaltado en el buscador existente. Agregar
una comprobación reproducible pequeña para la regresión si hace falta; no montar
una suite general de E2E como prerrequisito.

Fuera de alcance: tolerancia a tildes, búsqueda aproximada, búsqueda en el cuerpo
completo, persistencia en URL, rediseño, cambios editoriales, publicación de
borradores, actualizaciones de dependencias e integración o despliegue a producción.

## Evidencia esperada

Registrar el fallo antes del cambio, resultados de A1–A5, capturas del estado con
resultados en ambos tamaños, resultado de teclado, checks, SHA final y URL del
deployment Preview. No basta una captura para probar la interacción.

## Por qué sirve para el piloto

Es un defecto acotado con un resultado observable y ya existe contenido para
reproducirlo. Permite probar implementación, verificación funcional y visual,
build, Git y Preview sin añadir funcionalidad grande ni cambiar el diseño del blog.
