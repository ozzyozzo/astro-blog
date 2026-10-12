# Publicación tras revisión local

## Preparación

La rama `main` es la rama de producción. Prepara cada entrada en una rama separada
desde el `main` remoto para mantener fuera los cambios locales ajenos. Revísala en
el entorno de desarrollo local, por ejemplo `blog-astro-dev.home`. Allí puedes ver
también las entradas con `draft: true`. Aprueba el texto y los metadatos antes de
marcar como publicable la entrada con `draft: false`.

Ejecuta los chequeos del proyecto y revisa el diff del commit. Si algún chequeo
falla, resuélvelo o deja claro el problema antes de publicar. Confirma que los
commits que enviarás a `main` contienen solo los cambios de esta entrada.

## Publicación

Tras la aprobación del autor, envía la rama a `main` con un push normal. Vercel
despliega Production desde `main`. Comprueba la entrada en
<https://www.ozzyozzo.dev/> y comunica el resultado. Si el remoto avanzó, integra
los cambios y vuelve a validar antes de enviar la entrada. No se requiere un PR
ni una Preview de Vercel para la revisión editorial.

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
permite el push directo tras la revisión local. No exige PR ni el estado `Vercel`;
sí impide los pushes forzados y la eliminación de la rama y se aplica a
administradores. La aprobación editorial ocurre antes del push.

La URL de Preview, cuando se genera para una rama, es pública para quien la conozca.
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

La regla que exigía PR y el check `Vercel` se configuró después del PR #1 y se
retiró al adoptar la revisión local. El PR #7 confirmó el funcionamiento de esa
regla mientras estuvo activa. Quienes tengan permisos para desplegar directamente
en Vercel pueden iniciar un despliegue manual fuera de este procedimiento.
