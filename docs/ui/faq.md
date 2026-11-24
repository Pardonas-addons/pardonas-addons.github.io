---
title: "FAQ – Pardona's UI"
description: "Answers to common questions about Pardona's UI: conflicts with other addons, \"frame not found\", changes during combat, minimap buttons and reporting a bug."
---

# FAQ

::: warning
Pardona's UI is in development and not released yet.
:::

## A part of the interface looks wrong or two addons fight over it

Another addon probably restyles the same part. Switch the matching module off in the settings (`/pui`). Pardona's UI does not detect other addons on its own.

## A module shows "frame not found"

The game interface does not offer this part in the expected form. The module stays inactive and changes nothing. Please report it with the frame analysis (see below).

## Nothing changes after switching a module during combat

Changes made during combat are applied when combat ends; the module shows **after combat** until then.

## My minimap buttons are in the wrong place

Buttons that follow the minimap shape move to the square edge automatically. Buttons of addons that place themselves differently are not moved by Pardona's UI. Switching the **Minimap (square)** module off restores the round minimap.

## Reporting a bug

1. Type `/pardona` and note the lines it shows (Pardona suite and library versions).
2. Open the affected window if possible and type `/pui frames` – or e.g. `/pui frames loot` for one module only.
3. Type `/reload`. The analysis is saved in `WTF\Account\<ACCOUNT>\SavedVariables\PardonasUI.lua`.
4. Attach this file and the output of `/pardona` to your report.

## Troubleshooting

If something does not work as expected, type `/pui` and `/pardona` in chat and include the output when you report the problem. See [Report a problem](/suite/report-a-problem).
