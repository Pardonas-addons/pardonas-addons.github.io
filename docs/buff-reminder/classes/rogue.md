---
description: "Buff Reminder for Rogues: warns when a weapon has no poison, applies the best poison from your bags with one click and alerts you before the charges run out."
---

# Rogue

<ClassHeader cls="rogue" />

Rogues live by their poisons. The Buff Reminder tells you when a weapon has none, applies the best poison with one click and warns you before the charges run out.

Features marked <Badge type="warning" text="beta" /> are experimental: on in beta versions, off by default in releases – see [Versions](../#versions).

## At a glance
| Reminder | Shows when | Left-click | Tab |
|---|---|---|---|
| **Main-hand poison** | your main-hand weapon has no poison | applies the best poison from your bags <Badge type="warning" text="beta" /> | **Class Buffs** |
| **Off-hand poison** | your off-hand weapon has no poison | applies the best poison from your bags <Badge type="warning" text="beta" /> | **Class Buffs** |
| Poison expires <Badge type="warning" text="beta" /> | little time **or** few charges left | applies a new poison | **Display** |
| Powders <Badge type="warning" text="beta" /> | fewer than **Min.** in your bags | outside of towns: remind me in the next town; at a vendor: restock | **Supplies** |

## Poisons
- **Main-hand poison** and **Off-hand poison** from level 20. The off-hand line only appears with a weapon in your off hand.
- With **Stones, oils, poisons by click** (beta) left-click applies the best poison from your bags; right-click shows **Poisons in your bags** (**Instant poison**, **Deadly poison**, **Wound poison**, **Crippling poison**, **Mind-numbing poison**) with ★ favorites.

## Expiry warning <Badge type="warning" text="beta" />
Poisons run out by time and by charges. The warning appears when either one reaches the **Threshold** – whichever runs low first decides the text, e.g. "Main-hand poison expires · 12 charges". The charge count updates live, also in combat.

## Supplies <Badge type="warning" text="beta" />
| Reagent | For | From level | Min. | Refill to |
|---|---|---|---|---|
| Flash Powder | Vanish | 22 | 10 | 20 |
| Blinding Powder | Blind | 34 | 5 | 10 |

Add your poisons under **Your items** as well: you are warned before your last stack is gone, and the **Restock** window refills them at a poison vendor.

::: tip Recommended setup
Turn on the **Expiry warning** and bind **Use top warning** to a key – one press renews the poison that runs out first.
:::

<DocShot src="/shots/br/c06-rogue-poison-charges.png" alt="Missing off-hand poison and a poison running out of charges" :width="362" :height="122" />

See also: [Display: Expiry warning](../features#display) · [Supplies](../features#supplies)
