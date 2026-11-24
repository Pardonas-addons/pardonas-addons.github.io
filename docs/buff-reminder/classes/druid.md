---
description: "Buff Reminder for Druids: keeps Mark of the Wild and Thorns up, casts Gift of the Wild on your group and warns when the reagents for your group buff run low."
---

# Druid

<ClassHeader cls="druid" />

As a Druid you keep Mark of the Wild up on yourself and, in a group, Gift of the Wild on everyone. The Buff Reminder watches both and tells you when the reagents run low.

Features marked <Badge type="warning" text="beta" /> are experimental: on in beta versions, off by default in releases – see [Versions](../#versions).

## At a glance
| Reminder | Shows when | Left-click | Tab |
|---|---|---|---|
| Mark of the Wild | you don't have it | casts it (highest rank) | **Class Buffs** |
| Thorns | you don't have it (off by default) | casts it | **Class Buffs** |
| Gift of the Wild <Badge type="warning" text="beta" /> | party or raid members miss it | group version on one of them | **Group** |
| Reagents <Badge type="warning" text="beta" /> | fewer than **Min.** in your bags | outside of towns: remind me in the next town; at a vendor: restock | **Supplies** |

## Class Buffs
- Mark of the Wild from level 1, Thorns from level 6. Thorns is situational and therefore off by default – tick it if you tank.
- Left-click always casts the single-target version on yourself, never Gift of the Wild.

## Group <Badge type="warning" text="beta" />
Tick **Group buffs** and choose **Check in**: **Always**, **Dungeons & raids only** or **Raids only**. A group line shows how many players miss Mark of the Wild. Left-click casts Gift of the Wild on one of them, **Ctrl+Left-click** the single version.

## Supplies <Badge type="warning" text="beta" />
Only the reagent of your highest learned rank is checked.

| Reagent | For | From level | Min. | Refill to |
|---|---|---|---|---|
| Wild Berries | Gift of the Wild (rank 1) | 50 | 10 | 20 |
| Wild Thornroot | Gift of the Wild (rank 2) | 60 | 10 | 20 |
| Maple Seed … Ironwood Seed | Rebirth (one seed per rank) | 20–60 | 1 | 2 |

::: tip Recommended setup
Tick **Group buffs** with **Dungeons & raids only**, and raise **Min.** for your Rebirth seed to 2 or 3 before a raid.
:::

<DocShot src="/shots/br/c01-druid-group.png" alt="Group reminder for Mark of the Wild" :width="362" :height="87" />

See also: [Supplies](../features#supplies) · [Group buffs](../features#group-priest-mage-druid-paladin)
