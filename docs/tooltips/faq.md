---
title: "FAQ – ToolTips"
description: "Answers to common ToolTips questions: health shown as a percentage, missing resource bar, prices without TSM, the gear comparison, tooltip position and a reset."
---

# FAQ

## The health bar only shows a percentage

WoW Forever hides many values from addons, even your own current health. ToolTips never guesses:
it shows what the game allows. The exact health text (current / max) is a **(beta)** feature and
only appears while **Experimental features** are on.

## There is no resource bar or spec line

Both are **(beta)** features. Check **Experimental features** in the section **General**: with
**Off**, or with **Automatic (on in beta versions)** in a release version, they are hidden.
The spec line currently works for your own character only. Units without a resource, or whose
maximum the game hides, get no resource bar.

## No prices, no recommendation

**Disenchant value** and **Recommendation** need TradeSkillMaster. Without it the status of
ToolTips on the Pardona minimap button reads **active (no TSM)**. The **Disenchant:** line with
materials and chances works without TSM.

## The comparison only appears with Shift – or not at all

Check **Show comparison** in the section **Items** (**Always**, **Only with Shift**, **Off**).
There is no comparison for items your character cannot wear and for the item you are wearing.

## My tooltips do not move to the chosen position

**Position** only applies to tooltips with the default anchor, for example units in the world.
Tooltips of bag slots, buttons and action bars stay where the game puts them.

## The minimap button is gone

Type `/ptt minimap`, or tick **Show minimap button** in the section **General**. The button is
shared by all Pardona addons, so the setting applies to all of them.

## Everything looks wrong after trying things out

`/ptt reset` (or **Reset settings › Reset**) restores all defaults.

## Reporting a problem

Hover the unit or item in question, then type `/ptt debug` and `/pardona`. `/ptt debug` shows
what the game lets ToolTips read; `/pardona` shows which Pardona addons and which library
version are active. Please add both outputs (screenshot or copied text) to your report.

## Troubleshooting

If something does not work as expected, type `/ptt debug` and `/pardona` in chat and include the output when you report the problem. See [Report a problem](/suite/report-a-problem).
