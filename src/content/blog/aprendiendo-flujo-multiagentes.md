---
title: "Aprendiendo a trabajar con varios agentes"
description: "Mis primeras pruebas con un flujo de varios agentes: qué delegué, qué corrigió la revisión y dónde sigo necesitando criterio propio."
date: 2026-10-12
tags: ["ia", "agentes", "aprendizaje"]
draft: true
---

Hace poco escribí que intenté aprender de golpe qué eran los agentes, las skills, los subagentes y la memoria. Terminé con más pestañas abiertas que ideas claras. Ahora estoy probando algo más pequeño: tomar una tarea real, dejar que un agente haga una parte y pedirle a otro que revise el resultado. Así puedo ver dónde ayuda el flujo y dónde me toca seguir pensando a mí.

Mi primera intuición era bastante ingenua: si un agente puede avanzar en una tarea, tres deberían avanzar tres veces más rápido. En la práctica, antes de repartir trabajo tengo que saber qué encargo le corresponde a cada uno. Si no puedo explicar el resultado que espero de una tarea, agregar otro agente solo me da otra respuesta que revisar.

## Un ejemplo pequeño en este blog

Estoy preparando un procedimiento para publicar entradas en este sitio. Quiero poder entregar un texto que escribí yo, o solo un tema, y recibir una propuesta de cambio con sus chequeos y una vista previa. Para que ese procedimiento sea reutilizable, lo guardé como una skill del proyecto: un archivo de instrucciones que Codex puede leer cuando le pido preparar una entrada.

El trabajo tenía dos partes distinguibles. Una era escribir las instrucciones: dónde va el Markdown, qué metadatos necesita, cómo se registra el estado de borrador y qué debe aparecer en el PR. La otra era revisar si esas instrucciones cumplían la especificación. Pedí a un agente que hiciera la implementación y a otro que la revisara. El segundo leyó el resultado y encontró que la rama para generar un borrador desde un tema no incluía la guía editorial que ya habíamos acordado: primera persona, tono reflexivo, ejemplos concretos y una extensión orientativa.

La corrección parecía sencilla. Añadí esa guía y pedí una segunda revisión. Ahí apareció otro detalle: una frase sobre consultar fuentes había quedado fuera de la condición «si redactas desde un tema». Leída literalmente, también obligaba a investigar cuando yo aportara un texto propio. La ajustamos para que cada caso tuviera su regla. Son dos errores pequeños, pero son justamente los que se escapan cuando uno lee sus propias instrucciones sabiendo lo que quiso decir.

Ese ejemplo me ayudó a entender para qué quiero otro agente. El revisor no necesitaba escribir el archivo ni compartir la misma conversación de implementación. Necesitaba el objetivo, la especificación, los cambios y los resultados de los chequeos. Con eso podía comparar lo pedido con lo entregado y devolver observaciones concretas. Yo seguía decidiendo qué corregir y qué hacer con el resultado.

## Lo que estoy aprendiendo a delegar

Un flujo de varios agentes no empieza con una lista de personajes: «arquitecto», «programador», «crítico». Empieza con un trabajo que puedo dividir sin que dos personas tengan que editar el mismo archivo al mismo tiempo. En este caso, escribir y revisar eran tareas consecutivas. La revisión tenía una salida clara: hallazgos con ubicación y consecuencia, o una confirmación de que no había problemas detectados.

También estoy aprendiendo a entregar contexto sin convertir cada encargo en una novela. Al revisor le di la especificación, el cambio exacto y los chequeos ejecutados. No hacía falta repetirle toda la conversación que llevó a escribir la skill. Esa separación tuvo una ventaja: pudo leer las instrucciones como las leería otro agente en el futuro, sin completar mentalmente las partes que yo daba por obvias.

Hay un costo. Preparar el encargo, esperar la respuesta y comprobar el hallazgo toma tiempo. Si el cambio es una frase evidente, probablemente resuelva más rápido leyéndola yo. Si hay requisitos repartidos entre una incidencia, documentación y código, una segunda lectura independiente empieza a tener sentido. Por ahora no estoy midiendo cuánto tiempo ahorro. Estoy mirando si la revisión encuentra algo que yo habría dejado pasar.

He encontrado una regla útil para este experimento: los subagentes sirven para trabajos independientes con una pregunta y un resultado claros; las tareas cortas o dependientes suelen quedarse con el agente principal. Mi caso fue más modesto que un equipo trabajando en paralelo. Era una secuencia: implementar, revisar, corregir. Me sirvió precisamente porque pude reconocer qué aportó cada paso.

## La parte que no puedo delegar

El revisor puede señalar que falta una regla editorial. No puede decidir por mí si el texto suena como algo que yo escribiría. Esa diferencia se vuelve más importante cuando el resultado es una entrada de blog. Puedo usar agentes para preparar Markdown, buscar fuentes, revisar metadatos y comprobar que el sitio construye bien. La última lectura del artículo sigue siendo mía.

Por eso también quiero mantener la publicación detrás de un PR. Un borrador marcado como `draft: true` puede aparecer en la vista previa para revisarlo, pero no queda publicado en el sitio de producción al integrar ese estado. Antes de publicar tendré que cambiarlo a `draft: false`, revisar otra vista previa y decidir si hago el merge. La automatización me ahorra pasos repetidos; la decisión editorial queda en mis manos.

Todavía estoy al comienzo. No tengo una receta universal ni un equipo de agentes para cada tarea. Tengo una prueba concreta, dos observaciones útiles de una revisión y una pregunta que quiero seguir haciéndome: ¿qué parte del trabajo gana con una mirada independiente y qué parte solo necesita que yo me siente a leer con calma? Por ahora, esa pregunta me sirve más que agregar otro agente por entusiasmo.
