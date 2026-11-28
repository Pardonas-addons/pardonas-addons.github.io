---
description: "Buff Reminder for Paladins: watches your aura, seal and blessing, casts the one you used last with one click and helps with Greater Blessings in the raid."
---

# Paladin

<ClassHeader cls="paladin" />

Paladins juggle an aura, a seal and a blessing – and in a raid, Greater Blessings for everyone. The Buff Reminder watches all three and casts the one you use with a single click.

Features marked <Badge type="warning" text="beta" /> are experimental: on in beta versions, off by default in releases – see [Versions](../#versions).

## At a glance
| Reminder | Shows when | Left-click | Tab |
|---|---|---|---|
| **Aura** | no aura is active | casts the aura you used last | **Class Buffs** |
| **Seal** | no seal is active | casts the seal you used last | **Class Buffs** |
| **Blessing** | no blessing is on you | casts the blessing you used last | **Class Buffs** |
| Righteous Fury | you don't have it (off by default) | casts it | **Class Buffs** |
| Greater Blessing <Badge type="warning" text="beta" /> | party or raid members miss your blessing | Greater Blessing on one of them | **Group** |
| Symbols | fewer than **Min.** in your bags | outside of towns: remind me in the next town; at a vendor: restock | **Supplies** |

## Class Buffs
- **Aura:** Devotion, Retribution, Concentration, Shadow, Frost and Fire Resistance, Crusader.
- **Seal:** Righteousness, Command, Light, Wisdom, Justice, Crusader (later seals only if the game has them).
- **Blessing:** Might, Wisdom, Kings, Sanctuary. A Greater Blessing counts as well.
- Left-click casts the variant you used last – the addon remembers it per character as soon as you cast one yourself. With the **Variant menu on right-click** you pick a different one; the current one is marked **last used**.
- Righteous Fury is for tanking and therefore off by default.

## Group <Badge type="warning" text="beta" />
With **Paladin blessings in group buffs** the addon checks your blessing on every party or raid member and casts the matching Greater Blessing on one who misses it. **Off while Pally Power is loaded** – then Pally Power handles the blessings.

## Supplies
| Reagent | For | From level | Min. | Refill to |
|---|---|---|---|---|
| Symbol of Kings | Greater Blessings | 52 | 10 | 20 |
| Symbol of Divinity | Divine Intervention | 30 | 10 | 20 |

::: tip Recommended setup
Cast your usual aura, seal and blessing once after login – from then on left-click and the keybinding know what you want. In raids, raise **Min.** for Symbol of Kings to one stack.
:::

<DocShot src="/shots/br/c04-paladin-aura-menu.png" alt="Right-click menu with all your auras" :width="360" :height="448" />

See also: [Right-click menu](../features#right-click-menu) · [Group buffs](../features#group-priest-mage-druid-paladin)
