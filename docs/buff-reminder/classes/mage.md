---
description: "Buff Reminder for Mages: keeps Arcane Intellect and your armor up, reminds you to conjure food, water and a mana gem, and watches your runes and powder."
---

# Mage

<ClassHeader cls="mage" />

Mages buff, conjure and teleport. The Buff Reminder keeps Arcane Intellect and your armor up, reminds you to conjure food, water and a mana gem, and watches your runes and powder.

Features marked <Badge type="warning" text="beta" /> are experimental: on in beta versions, off by default in releases – see [Versions](../#versions).

## At a glance
| Reminder | Shows when | Left-click | Tab |
|---|---|---|---|
| Arcane Intellect | you don't have it | casts it (highest rank) | **Class Buffs** |
| **Armor** | no armor is active | casts the armor you used last | **Class Buffs** |
| Conjured water / food | fewer than **Food/water below** in your bags | conjures the highest rank | **Class Buffs** |
| Mana gem | no mana gem in your bags | conjures it | **Class Buffs** |
| Arcane Brilliance <Badge type="warning" text="beta" /> | party or raid members with mana miss it | group version on one of them | **Group** |
| Runes, powder, feathers | fewer than **Min.** in your bags | outside of towns: remind me in the next town; at a vendor: restock | **Supplies** |

## Class Buffs
- Arcane Intellect from level 1; left-click casts the single-target version.
- **Armor** – Frost, Ice, Mage or Molten. Left-click casts the one you used last; with the **Variant menu on right-click** you pick another one.

## Class consumables
- Conjured water from level 4, conjured food from level 6: the line appears when the total of all ranks in your bags drops below **Food/water below** (0–60, default 20; 0 turns it off), e.g. "Conjured Crystal Water: 5".
- Mana gem from level 28: appears when you carry no mana gem of any rank.
- Left-click conjures the highest rank you know. These reminders work everywhere, also outside of instances.

## Group <Badge type="warning" text="beta" />
Arcane Brilliance for everyone in your party or raid who uses mana. **Check in**: **Always**, **Dungeons & raids only** or **Raids only**. Left-click casts the group version, **Ctrl+Left-click** Arcane Intellect.

## Supplies
| Reagent | For | From level | Min. | Refill to |
|---|---|---|---|---|
| Arcane Powder | Arcane Brilliance | 56 | 10 | 20 |
| Rune of Teleportation | teleports | 20 | 5 | 10 |
| Rune of Portals | portals | 40 | 5 | 10 |
| Light Feather | Slow Fall | 12 | 10 | 20 |

A reagent is only checked once you know a spell that uses it. Reagent vendors sell all of them, so one click in the **Restock** window fills everything up.

::: tip Recommended setup
Raise **Min.** for Rune of Portals before you offer portals in a city, and keep **Food/water below** at about one stack so you never start a dungeon with empty bags.
:::

<DocShot src="/shots/br/c03-mage-consumables.png" alt="Conjured water, mana gem and Arcane Intellect" :width="362" :height="173" />

See also: [Supplies](../features#supplies) · [Group buffs](../features#group-priest-mage-druid-paladin)
