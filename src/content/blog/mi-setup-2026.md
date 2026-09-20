---
title: "Mi setup de desarrollo en 2026"
description: "Omarchy, Neovim, Claude Code y una laptop con 8 GB de RAM: con esto estoy volviendo a aprender a programar con IA."
date: 2026-09-19
tags: ["herramientas", "setup", "ia"]
draft: false
---

Este es el setup con el que estoy volviendo a aprender a programar, ahora con IA de copiloto. No está optimizado ni es el mejor posible. Es lo que tengo instalado hoy y lo que de verdad uso.

A este setup llegué distrohopeando, como casi todos. Estuve en CachyOS y probé Fedora, donde me terminé dando cuenta de que hay algo en todo el entorno de GNOME que no me acomoda. Lo que me cansó no fue ninguna distro en particular. Fue pasar las tardes configurando cosas visuales en vez de usar la máquina.

## Hardware

- **HP Pavilion Plus 14** con un Intel Core i5-1240P y gráficos Iris Xe integrados.
- **Pantalla de 2240x1400** a 60 Hz. Es la de la laptop, sin monitor externo.
- **8 GB de RAM**, :__(

Lo de la RAM es el punto débil. Mientras escribía esto había 1,1 GB disponibles, con Chromium, un par de sesiones de Claude Code y el servidor de desarrollo de Astro abiertos. Alcanza, pero hay que cerrar pestañas.

Teclado externo no uso, solo el de la laptop. Lo único que cambié fue el capslock: si lo toco es escape, si lo mantengo es control. El escape de arriba quedó convertido en capslock, que no uso nunca.

Antes tenía varios remapeos más y los saqué todos. Entre los atajos de Hyprland y los de Neovim ya tenía bastante que memorizar. Este me lo quedé porque se me acostumbró el dedo chico y dejé de pensarlo.

## Sistema: Omarchy

Uso [Omarchy](https://omarchy.org) 4.0, una distribución basada en Arch con Hyprland como gestor de ventanas en mosaico. Viene configurada de fábrica: temas, atajos y la mayoría de las herramientas de esta lista ya vienen instaladas.

El tema actual es Gruvbox. Omarchy lo cambia en todo el sistema a la vez, incluidos la terminal, Neovim y VS Code.

Llegué aquí por lo mismo que me cansó de las otras: la instalé y todo andaba. No tuve que pasarme una semana dejándola presentable.

El gestor de ventanas en mosaico fue la parte que no venía buscando. Después de trabajar así no se me ocurre cómo volver a las ventanas flotantes. Es cómodo, rinde, y además se ve bien, que no es poco cuando te pasas el día mirándolo.

Lo que cuesta son los atajos. Todo se hace con el teclado y los primeros días no te sabes ninguno, así que eres más lento que antes de cambiarte.

## Terminal

### Emulador: kitty

Es el que abre `xdg-terminal-exec` por defecto y me quedé con él. Es rápido y muestra imágenes de forma nativa, sin plugins ni trucos, así que puedo ver una captura sin salir de la terminal. Uso **JetBrains Mono Nerd Font**, que trae los íconos que necesitan el prompt y el explorador de archivos.

### Shell: bash con Starship

Uso bash y no zsh. Omarchy trae bash configurado y no he tenido una razón concreta para cambiarlo. El prompt es Starship.

### Herramientas de línea de comandos

- **zoxide** para saltar a directorios frecuentes.
- **eza** en vez de `ls`.
- **bat** en vez de `cat`.
- **ripgrep** y **fd** para buscar texto y archivos.
- **fzf** para buscar en todo lo anterior.
- **btop** para ver qué se está comiendo la RAM, que en esta máquina es algo que reviso seguido.
- **jq** para leer JSON.
- **gh**, el CLI de GitHub.

## Editor: Neovim con LazyVim

Mi editor es Neovim con la distribución LazyVim. Tengo activados estos extras:

- `lang.astro` y `lang.typescript` para este blog y casi todo lo demás.
- `formatting.prettier`.
- `editor.neo-tree` para tener un árbol de archivos a la izquierda.

Además uso `diffview.nvim` para revisar diffs, que con IA en el flujo es lo que más hago: leer cambios que no escribí yo.

VS Code también está instalado, con la extensión de Claude Code y un puñado de temas. Casi no lo uso.

Lo abro cuando me hago la pregunta que se hace todo el que empieza con las vim motions: ¿le sigo metiendo tiempo a esto o no? Las dos o tres veces que abrí VS Code estaba justo en esa duda, con la frustración de no saberme un millón de atajos.

Se me pasa al rato y vuelvo a Neovim. Lo que cambió es que ya no me exijo aprendérmelos todos de una vez. Aprendo el atajo cuando me hace falta y no antes.

## IA: Claude Code como herramienta principal

Esta es la parte que más cambió mi forma de trabajar. En mi historial de bash, `claude` aparece 89 veces, `nvim` 29 y `opencode` 11. Paso más tiempo hablando con un agente en la terminal que editando archivos a mano.

Lo que tengo instalado:

- **Claude Code** es el que uso a diario.
- **OpenCode**, **Codex** y **Gemini CLI** los tengo para comparar. Cuando algo no sale con uno, a veces pruebo el mismo pedido en otro.
- **Plugins en Claude Code**: uno que conecta con mi bóveda de Obsidian, para que las notas y decisiones de cada sesión queden guardadas y no empiecen de cero.

Mi mayor problema con Claude Code es que es demasiado verboso. Le pido un cambio chico y antes de responder se pone a husmear: lee la memoria, abre archivos que no tienen nada que ver, revisa medio proyecto. Después vuelve con el cambio hecho y con tres sugerencias más.

Las sugerencias casi siempre son buenas. El asunto es que son para otro momento, y ahora tengo que anotarlas en alguna parte si no quiero perderlas. Eso es trabajo administrativo mío. La alternativa es volver a preguntarle más adelante, que significa gastar los tokens otra vez. Así que me quedo explicándole que lo deje para después, no que lo descarte, y esa conversación también cuesta.

Ahí es donde una tarea de dos minutos se convierte en una sesión larga, y la sesión larga se come el contexto y los tokens. Con el plan Pro eso se nota rápido: llegas al límite del día por una tontera.

## Versiones: mise

Todas las versiones las maneja **mise** desde `~/.config/mise/config.toml`: Node 26.7, y también los CLI de Claude, Codex, OpenCode, GitHub, Supabase y EAS. Un solo archivo reemplaza a nvm y a los instaladores sueltos de cada herramienta.

Aparte tengo **uv** para Python, **Deno** y **Go**.

## Contenedores y Git

- **Docker**, y **lazydocker** para verlo en la terminal.
- **lazygit** para commits y ramas cuando no se los dejo a la IA.

Mis alias de Git son los clásicos:

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

## Navegador y notas

- **Zen** es mi navegador por defecto. **Chromium** lo tengo para probar.
- **Obsidian** para notas. Con el plugin de Claude Code se convirtió en la memoria de mis sesiones.

## Lo que le falta

Todo lo de arriba corre en 8 GB, y esa restricción ordena el resto del setup. Con más RAM levantaría contenedores sin pensarlo tanto: entornos de desarrollo aislados en Docker, y un par de cosas de utilidad como FreshRSS o Navidrome corriendo en la misma máquina. También dejaría Zen más tuneado, que me gusta pero se come lo suyo. Y sobre todo podría tener varios programas abiertos sin andar cerrando cosas para que me alcance.

El escritorio ya lo armé hace unos días. Lo que falta es el monitor. Estoy juntando para uno de 27 pulgadas en 2K vendiendo mis cosas usadas en [Petermarket](https://petermarket.vercel.app), que es uno de los proyectos que salieron de todo esto. Más adelante la laptop se cambia por un desktop decente, pero eso va por partes.
