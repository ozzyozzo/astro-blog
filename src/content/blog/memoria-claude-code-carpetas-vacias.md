---
title: "Mi sistema de memoria para Claude Code no existía"
description: "Dije en público que manejaba el contexto con memory banks, la memoria de Claude Code y Obsidian. Fui a revisar y encontré catorce carpetas vacías."
date: 2026-09-20
tags: ["ia", "claude-code", "obsidian", "memoria"]
draft: true
---

Hace unos días escribí que lo que más me cansa de trabajar con una IA es repetirle el contexto en cada sesión. En el mismo post dije que ya tenía algunas cosas andando para resolverlo: un memory bank en los proyectos, la memoria de Claude Code y Obsidian.

Hoy fui a revisar qué tenía de verdad.

## El memory bank no era mío

Empecé por ahí, que era de lo que estaba más seguro.

No existe. Busqué carpetas `memory-bank/` en todos mis proyectos y no hay ninguna. La única que existió fue la de este blog, y venía heredada de la plantilla de Astro que cloné. Estuvo ahí desde el primer commit, alcancé a escribir un archivo adentro, y después la borré yo mismo. El commit dice "Limpia la herencia del tema original".

Estuve semanas creyendo que tenía un sistema que en realidad era basura de una plantilla ajena, y cuando la borré ni siquiera noté lo que estaba borrando.

## Catorce carpetas vacías

Claude Code guarda memoria por proyecto. Tengo diecinueve carpetas de esas. Catorce están vacías.

De las cinco que tienen algo, la más completa no es un proyecto de código. Es `~/desk`, la sesión que uso para cosas del escritorio, con quince notas adentro: cómo tengo mapeado el teclado, por qué respaldo con restic contra B2, el criterio con el que elijo prospectos para Foco Web, que estoy aprendiendo nvim de a poco y que apurarme no me sirve.

Las escribió Claude, pero las escribió porque se lo pedí. Cada una salió de que yo dijera "anota esto".

Mis proyectos reales: este blog tiene dos notas. Dash Usados, Petermarket y Foco Web Leads no tienen ninguna.

## Un CLAUDE.md de 210 líneas y otro de una

De ocho proyectos, tres tienen `CLAUDE.md`.

El de Foco Web tiene 210 líneas. Es el proyecto al que más horas le he metido y se nota: ahí está el modelo de negocio, cómo se arma cada sitio y qué no hay que tocar.

El de Dash Usados tiene una línea. Dice `@AGENTS.md` y apunta a un archivo de nueve.

No fue una decisión. Es dónde estuve trabajando.

## Un baúl de siete días

Instalé obsidian-second-brain hace poco y el script me armó la estructura completa: 23 carpetas, 71 notas, todas modificadas dentro de la última semana.

De las 21 notas que hay en Knowledge, cinco son recetas de cocina.

Notas diarias escritas por mí: tres.

## Lo que dicen estos números

Miré la lista un rato antes de darme cuenta de qué tenían en común.

Todo lo que tiene contenido lo puse yo a propósito. Las quince notas de `~/desk` existen porque las pedí una por una. Las 210 líneas de Foco Web existen porque me senté a escribirlas. Y todo lo que esperaba que se llenara solo está vacío: las catorce carpetas de memoria, los proyectos sin `CLAUDE.md`, las notas diarias que no escribí.

El baúl es el caso más claro. Veintitrés carpetas, 71 notas generadas por un script y tres días de registro míos. La estructura impecable y casi nada adentro.

En el post con el que abrí este blog escribí que ya había pasado por la etapa de armar dashboards nucleares en Obsidian y que había sido pura pérdida de tiempo. Dashboard nuclear, cero notas, lo puse con esas palabras.

Y aquí estoy con veintitrés carpetas y tres notas diarias. El mismo error con otro nombre, tres días después de escribir que ya lo había cometido.

## Qué voy a hacer

Nada muy elaborado, porque lo elaborado es justamente lo que se me queda vacío.

Voy a escribir el `CLAUDE.md` de los proyectos que estoy tocando ahora, que son dos y no ocho. Estoy rehaciendo Foco Web desde cero y ese es el que lo necesita de verdad.

Y voy a dejar de esperar que la memoria se llene sola. Ninguna de estas herramientas guarda algo que tú no le dijiste que guardara. Te dan dónde ponerlo. Ponerlo sigue siendo tuyo.

Dentro de un mes vuelvo a contar las carpetas vacías.
