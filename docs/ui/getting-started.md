---
title: "Getting started – Pardona's UI"
description: "Install Pardona's UI, open its settings with /pui, switch modules on and off and read their status. Pardona's UI is in development and not released yet."
---

# Getting started

::: warning
Pardona's UI is in development and not released yet.
:::

## Installation

Install **Pardona's UI** with the CurseForge app, or copy the folder `PardonasUI` into `World of Warcraft\_forever_\Interface\AddOns`. Then restart the game.

The shared library LibPardona is included; nothing else needs to be installed.

## Settings

Open the settings in one of these ways:

- `/pui`
- **Esc** › **Options** › **AddOns** › **Pardona's Addons** › **UI**
- the Pardona minimap button or the addon compartment (the Addons button at the minimap)

<!-- screenshot: Settings page "UI" under "Pardona's Addons" -->

The page shows one line per module: a checkbox, a short description and the current status – **active**, **off**, **frame not found** or **after combat**. Modules marked **experimental** are new and still being tested.

## Switching modules on and off

- Changes apply immediately, no `/reload` needed.
- During combat, a change is applied when combat ends (status **after combat**).
- In beta versions all modules are on by default. In release versions only modules that have been tested in the game are on by default; your own choice always wins.

## Chat commands

| Command | What it does |
| --- | --- |
| `/pui` | Opens the settings |
| `/pui help` | Lists the commands |
| `/pui frames` | Frame analysis for bug reports (see [FAQ](./faq)) |
| `/pardona` | Diagnosis of the whole Pardona suite |
