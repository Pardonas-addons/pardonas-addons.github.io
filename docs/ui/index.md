---
title: "Pardona's UI – WoW Forever addon"
titleTemplate: false
description: "Pardona's UI, in development for WoW Forever, gives parts of the default interface the purple-gold Pardona look – visual changes only, one switch per module."
---

# UI

<AddonHeader id="ui" />

::: warning
Pardona's UI is in development and not released yet.
:::

## What Pardona's UI does

**Pardona's UI** gives parts of the default World of Warcraft Forever interface the purple-gold Pardona look: dark purple backgrounds and a fine gold border.

- **Visual changes only.** Positions, sizes and scale stay with **Edit Mode**. Pardona's UI never moves a frame.
- **One switch per module.** Every part of the interface is a separate module that you can switch on and off at any time, without `/reload`.
- **Runs on its own.** Pardona's UI does not need any other Pardona addon. Together with Pardona's Buff Reminder or Pardona's ToolTips it appears as part of the suite: one minimap button and one settings group **Pardona's Addons**.

<DocShot src="/shots/ui-minimap.png" alt="Square minimap in the Pardona style" :width="303" :height="374" />

## What it does not do

- **Tooltips** are not touched – they belong to **Pardona's ToolTips**.
- No unit frames of its own, and no restyling of every Blizzard window.
- Pardona's UI does not replace other interface addons and does not detect them (see [Modules](./modules)).

## Modules

| Module | Status |
| --- | --- |
| **Minimap (square)** | beta |
| **Buffs & debuffs** | beta |
| **Loot window** | in development |
| **Group loot rolls** | in development |
| **Trade window** | in development |
