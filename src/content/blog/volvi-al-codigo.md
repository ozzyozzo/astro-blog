---
title: "Volví al código, ahora con canas y una IA de copiloto"
description: "Dejé la oficina, trabajé con madera y metal, recorrí el país en moto. Ahora vuelvo a programar con Claude Code y este blog es la bitácora."
date: 2026-09-19
tags: ["presentación", "ia", "claude-code"]
draft: true
---

Me llamo Peter Castro, vivo en Viña del Mar y hace menos de 20 días que programo con Claude Code. En ese tiempo armé cuatro o cinco proyectos. Un par están terminados y los demás siguen dando vueltas. Hace unos años eso no me lo hubiera creído nadie, empezando por mí.

Este blog es para anotar ese proceso: lo que pruebo, lo que falla y lo que termina funcionando.

## De dónde vengo

Empecé en computación con Visual Basic, PHP y JavaScript. Con los años me fui moviendo hacia la administración de sistemas Linux, casi sin darme cuenta, y fue a lo que más me dediqué en mi vida profesional como empleado.

Un día me aburrí de todo eso. Del mundo corporativo, de trabajar para otros y de vivir en la gran ciudad. Renuncié, vendí todo y volví a mi ciudad natal.

Pasé un tiempo lejos del teclado. Trabajé con madera y metal, aprendí a andar en moto y recorrí buena parte de mi ciudad y del país. Nada de eso tenía que ver con programar, y justamente por eso me hizo bien.

## Por qué ahora

Hace poco mi sobrino me preguntó cómo era programar antes y cómo es ahora. Le respondí algo que se me ocurrió en el momento y que sigo repitiendo:

> Antes era una hoja de requerimientos y un cuaderno de código. Hoy es un cuaderno de requerimientos y una hoja de código.

No sé si es del todo correcto. Lo que sí noto es que el trabajo pesado se movió de lugar. Ya no me paso la tarde peleando con la sintaxis. Me la paso escribiendo bien lo que quiero, con precisión suficiente para que la IA me devuelva lo mismo si le pido lo mismo dos veces.

Para alguien que viene de administrar sistemas, eso tiene sentido. Un buen runbook y un buen prompt se parecen bastante: si otra persona no puede seguirlo sin preguntarte nada, está mal escrito.

## En qué estoy trabajando

Estos son los proyectos que salieron de estas primeras semanas:

- **Foco Web**: una agencia de landing pages para oficios. Plomeros, electricistas, carpinteros, gente que trabaja bien pero que en internet casi no existe.
- **Foco Web Leads**: la parte que encuentra a esos clientes. Uso datos de Google para detectar emprendedores que tienen presencia en internet pero no tienen página web.
- **Petermarket**: mi catálogo de productos usados.
- **Dash Usados**: un dashboard para organizar lo que publico en Facebook. Tengo muchos artículos y estoy en muchos grupos, así que lo uso para llegar a más gente sin publicar tanto que Facebook me banee.

<!-- TODO: enlaces a Foco Web y Petermarket si ya están en línea. -->

Petermarket y Dash Usados nacieron de un problema mío, no de una idea de negocio. Dash Usados existe porque publicar a mano en tantos grupos era insoportable.

## Qué vas a encontrar aquí

Un sysadmin que vuelve a programar y documenta lo que le pasa en el camino. Voy a escribir sobre los proyectos, sobre cómo trabajo con Claude Code y sobre mi setup, que ya tiene [su propio post](/blog/mi-setup-2026).

Sobre todo voy a escribir sobre lo que no sale. Llevo menos de tres semanas en esto y ya tengo una lista.

## Lo que me está costando

La primera piedra es la cantidad de herramientas. Cada semana aparece un agente nuevo, un plugin nuevo, un CLI nuevo que promete cambiarlo todo, y es muy fácil perderse en el bosque probando cosas en vez de construir.

La segunda son los conceptos. Contexto, agentes, skills, MCP, hooks, subagentes, memoria. Al principio quise aprenderme todo de una vez, y fue una locura. Así que bajé un par de marchas. Ahora voy a paso tranquilo pero constante, y eso me está funcionando mejor que el atracón.

La tercera es el contexto, y es la que más me cansa. Qué fastidio tener que repetirle a la IA lo mismo en cada sesión: quién soy, en qué estoy, cómo me gusta que escriba. Encontré algunas cosas que ayudan. Uso la memoria de Claude Code para guardar lo que más repito, y aparte estoy usando Obsidian.

Bueno, *intentando* usar Obsidian de una forma que me sirva de verdad. Ya pasé por la etapa de armar dashboards nucleares ahí, y fue pura pérdida de tiempo. Dashboard nuclear, cero notas. Ahora voy más tranquilo: tomo notas y trato de seguir mis proyectos desde ahí.

Hace poco instalé [obsidian-second-brain](https://github.com/eugeniughelbur/obsidian-second-brain), un plugin que conecta Claude Code con Obsidian y que es una bestia. Y desde hoy estoy usando [AI Foundation Framework](https://github.com/PJBoyle1/ai-foundation-framework) para que la IA sepa desde el primer mensaje para quién escribo y cómo. Los dos van a tener su propio post.

No soy un experto en IA y no voy a prometerte que vas a programar diez veces más rápido. Si tú también vienes de otra época del desarrollo y estás tratando de entender dónde encaja la IA en tu forma de trabajar, probablemente nos estemos haciendo las mismas preguntas.

Estoy en X como [@\_ozzy_ozzo](https://x.com/_ozzy_ozzo). Si algo de lo que escribo te sirve, o crees que lo estoy haciendo mal, cuéntamelo ahí.
