# Publicación mediante revisión local y PR

La rama `main` es la rama de producción. Prepara la entrada en otra rama y revísala
en el entorno de desarrollo local, por ejemplo `blog-astro-dev.home`. Allí puedes ver
también las entradas con `draft: true`. Aprueba el texto y los metadatos antes de
marcar como publicable la entrada con `draft: false`.

Abre un PR contra `main` con el cambio aislado, las fuentes consultadas y los resultados
de los chequeos. La Preview de Vercel puede aparecer, pero no es necesaria para la
revisión editorial. La protección actual de `main` sí exige el estado técnico `Vercel`
correcto; si falta o falla, el PR queda bloqueado hasta resolverlo. Integra el PR
manualmente cuando estés conforme y se cumplan los requisitos técnicos. La integración
activa el despliegue de Production. Comprueba el resultado en
<https://www.ozzyozzo.dev/>.

## Configuración comprobada

Comprobada el 12 de octubre de 2026 para la [incidencia #3](https://github.com/ozzyozzo/astro-blog/issues/3):

| Ajuste                        | Valor efectivo                                                                                      |
| ----------------------------- | --------------------------------------------------------------------------------------------------- |
| Proyecto de Vercel            | [`ozzyozzo`](https://vercel.com/ozzyozzos-projects/ozzyozzo), ID `prj_nIjqkpg5QEqdSECFTvoRflp42XBy` |
| Repositorio conectado         | `ozzyozzo/astro-blog` (`repoId` 1348123792)                                                         |
| Rama de Production            | `main`                                                                                              |
| Comentarios de Preview en PR  | Activados                                                                                           |
| Protección SSO de despliegues | Desactivada; las URL de Preview se abren sin iniciar sesión                                         |
| Protección por contraseña     | Desactivada                                                                                         |
| Protección de PR desde forks  | Activada; Vercel requiere autorización para desplegarlos                                            |
| Integración automática de PR  | Desactivada en GitHub                                                                               |

La [protección de `main`](https://github.com/ozzyozzo/astro-blog/settings/branches)
exige un PR y el estado `Vercel` correcto. El estado debe corresponder a la versión
actual de `main` (`strict: true`). La regla también se aplica a administradores, no
permite pushes forzados ni eliminar la rama y exige **cero aprobaciones de otra
persona**. El autor decide cuándo integrar el PR; un push directo a `main` no cumple
la regla.

La URL de Preview, cuando se genera, es pública para quien la conozca. Los cambios de
un PR pueden verse antes de la integración.
La protección de forks permanece activa. Vercel conserva un secreto de excepción
para automatizaciones ya existente; este procedimiento no lo utiliza.

## Comprobaciones de la configuración

- El [PR #1](https://github.com/ozzyozzo/astro-blog/pull/1) recibió un comentario con
  [su Preview](https://ozzyozzo-git-chore-configurar-gestor-1e0839-ozzyozzos-projects.vercel.app/)
  y el estado `Vercel` correcto. La URL respondió HTTP 200 sin autenticación después
  de desactivar SSO.
- La integración del PR #1 produjo un despliegue de Production correcto para el
  commit `0d66dce61a55568988e49fce5b1b57f3bc971811`. El dominio público respondió
  HTTP 200. Esto confirma el recorrido de publicación ya realizado.
- El [PR #7](https://github.com/ozzyozzo/astro-blog/pull/7) se abrió después de activar
  la regla de `main`. Su estado `Vercel` pasó y la
  [Preview del PR](https://ozzyozzo-git-chore-publicacion-pr-pre-941a91-ozzyozzos-projects.vercel.app/)
  respondió HTTP 200 sin autenticación.
- La API de GitHub confirmó la regla activa en `main`, con `Vercel` como estado
  obligatorio, cero aprobaciones y aplicación a administradores. La API de Vercel
  confirmó la conexión, la rama de Production y las opciones de protección indicadas
  arriba.

La regla de protección se configuró después del PR #1. El PR #7 confirma la Preview
y el check con la regla activa; su despliegue de Production solo podrá comprobarse
tras una integración manual. La protección de GitHub controla los cambios que llegan
por el repositorio. Quienes tengan permisos para desplegar directamente en Vercel
pueden iniciar un despliegue manual fuera de este procedimiento.
