---
title: "Mi setup de desarrollo en 2026"
description: "Omarchy, Neovim, Claude Code y una laptop con 8 GB de RAM: con esto estoy volviendo a aprender a programar con IA."
date: 2026-09-19
tags: ["herramientas", "setup", "ia"]
draft: false
---

Este es el setup con el que estoy volviendo a aprender a programar, ahora con IA de copiloto. No está optimizado ni es el mejor posible. Es lo que tengo instalado hoy y lo que de verdad uso.

<!-- TODO: una o dos líneas sobre de dónde vienes. ¿Qué usabas antes de este setup y por qué cambiaste? -->

## Hardware

- **HP Pavilion Plus 14** con un Intel Core i5-1240P y gráficos Iris Xe integrados.
- **Pantalla de 2240x1400** a 60 Hz. Es la de la laptop, sin monitor externo.
- **8 GB de RAM**, :__(

Lo de la RAM es el punto débil. Mientras escribía esto había 1,1 GB disponibles, con Chromium, un par de sesiones de Claude Code y el servidor de desarrollo de Astro abiertos. Alcanza, pero hay que cerrar pestañas.

<!-- TODO: teclado y mouse, si usas algo externo. -->

## Sistema: Omarchy

Uso [Omarchy](https://omarchy.org) 4.0, una distribución basada en Arch con Hyprland como gestor de ventanas en mosaico. Viene configurada de fábrica: temas, atajos y la mayoría de las herramientas de esta lista ya vienen instaladas.

El tema actual es Gruvbox. Omarchy lo cambia en todo el sistema a la vez, incluidos la terminal, Neovim y VS Code.

<!-- TODO: ¿por qué Omarchy? ¿Qué te costó adaptarte a un tiling window manager? -->

## Terminal

### Emulador: kitty

Es el que abre `xdg-terminal-exec` por defecto. Uso **JetBrains Mono Nerd Font**, que trae los íconos que necesitan el prompt y el explorador de archivos.

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

<!-- TODO: ¿cuándo abres VS Code en vez de Neovim? -->

## IA: Claude Code como herramienta principal

Esta es la parte que más cambió mi forma de trabajar. En mi historial de bash, `claude` aparece 89 veces, `nvim` 29 y `opencode` 11. Paso más tiempo hablando con un agente en la terminal que editando archivos a mano.

Lo que tengo instalado:

- **Claude Code** es el que uso a diario.
- **OpenCode**, **Codex** y **Gemini CLI** los tengo para comparar. Cuando algo no sale con uno, a veces pruebo el mismo pedido en otro.
- **Plugins en Claude Code**: uno que conecta con mi bóveda de Obsidian, para que las notas y decisiones de cada sesión queden guardadas y no empiecen de cero.

<!-- TODO: un problema concreto que hayas tenido con Claude Code. El blog es sobre el reaprendizaje, y este es el lugar para contar algo que no salió bien. -->

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

- **Zen** es el navegador por defecto. **Chromium** lo tengo para probar.
- **Obsidian** para notas. Con el plugin de Claude Code se convirtió en la memoria de mis sesiones.

---

<!-- TODO: cierre. Una pregunta al lector o qué piensas cambiar el próximo año. Sin conclusión con moño. -->
