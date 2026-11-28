---
description: "What the Buff Reminder does for each profession: tracking for gatherers, flasks and elixirs, buff food, stones and oils, and reagent warnings with restock."
---

# Professions

You don't need the profession yourself: the Buff Reminder works with the items in your bags – whether you made them, bought them or got them from a guildmate. This page shows what it does for each profession.

## At a glance
| Profession | What the Buff Reminder does | Setting | Tab |
|---|---|---|---|
| [Herbalism, Mining, Fishing](#gathering-herbalism-mining-fishing) | keeps your tracking on, several at once | **Tracking reminder** | **Other Buffs** |
| [Alchemy](#alchemy-flasks-and-elixirs) | drinks the best flask or elixir with one click | **Flask**, **Elixirs** | **Other Buffs** |
| [Cooking](#cooking-buff-food) | eats the best buff food with one click, counts down while you eat | Well Fed | **Other Buffs** |
| [Blacksmithing, Enchanting](#blacksmithing-and-enchanting-stones-and-oils) | applies sharpening stones, weightstones and oils with one click | **Stones, oils, poisons by click** | **Other Buffs** |
| [First Aid](#first-aid-and-crafting-reagents-your-items) | warns when your bandages run low | **Your items** | **Supplies** |
| [Every crafting profession](#first-aid-and-crafting-reagents-your-items) | warns when crafting reagents run low and refills them at the vendor | **Your items**, **Restock at vendors** | **Supplies** |
| [Find Treasure (Dwarves)](#gathering-herbalism-mining-fishing) | keeps it on next to your other trackings | **Tracking reminder** | **Other Buffs** |

## Gathering: Herbalism, Mining, Fishing
- Tick every tracking you want to keep on under **Abilities** and **Minimap** – Find Herbs, Find Minerals, Find Fish (if the game has it), Find Treasure and minimap trackings like flight masters or vendors. **Several can be active at once.**
- Find Minerals, Find Herbs and Find Treasure are on by default once you have learned them.
- When one is off – after dying, for example – a single line **Tracking off: …** lists all of them, and one click turns them all back on.

::: tip Recommended setup
Dwarven miners: keep Find Minerals and Find Treasure on together – one click after every resurrection brings both back.
:::

<DocShot src="/shots/br/s11-tracking-off.png" alt="Tracking off: one line for all missing trackings" :width="362" :height="71" />

## Alchemy: flasks and elixirs
- **Flask** (on the **Other Buffs** tab): left-click drinks a flask from your bags. Favorites (★) come first, then the flask you used last, then the higher item level. Any flask counts, including new ones – the addon learns their effect.
- **Elixirs**: tick the elixirs you want to keep active; every elixir you carry appears in the list. Left-click drinks the one that is missing.
- With the **Expiry warning** you renew a flask or elixir before it runs out.
- **Other buffs only in instances** applies to flasks and elixirs as well.

## Cooking: buff food
- Tick Well Fed on the **Other Buffs** tab. Any food that gives Well Fed is recognized.
- Left-click eats the best food: favorites first, then food with an experience bonus (while you can still gain experience), then the food whose stats suit your class best, then the bigger stack. Only food you are high enough level for is offered.
- Right-click shows **Food in your bags** with each food's category (e.g. **Stamina**, **Spirit**, **Profession**), an **XP** badge for food with an experience bonus and the line left-click would use marked **best choice**.
- While you eat, the reminder counts down – **Eating … s**, then **Almost well fed …** – with the hint **Stay seated**.

<DocShot src="/shots/br/s12-food-menu.png" alt="Right-click menu: food in your bags with XP badge and best choice" :width="360" :height="429" />

<DocShot src="/shots/br/s13-eating.png" alt="Countdown while eating" :width="362" :height="71" />

## Blacksmithing and Enchanting: stones and oils
- With **Stones, oils, poisons by click** the lines **Main hand: weapon enhancement** and **Off hand: weapon enhancement** appear when a weapon has no temporary enhancement and you carry a matching item.
- Sharpening stones fit edged weapons (axes, swords, polearms, daggers), weightstones blunt weapons (maces, staves). Elemental and Consecrated Sharpening Stones fit both. Wizard oils and mana oils fit every weapon; fist weapons only take oils. Items above your level are skipped.
- Right-click shows **Stones & oils in your bags** with ★ favorites.
- Shamans use their own imbues instead; rogues get these lines only while their poison reminder is off.

<DocShot src="/shots/br/s05-stones-oils-menu.png" alt="Right-click menu: stones and oils in your bags" :width="360" :height="378" />

## First Aid and crafting reagents: Your items
- Add any item under **Your items** on the **Supplies** tab: click **Add item:**, then Shift-click the item or drag it onto the field. Up to 20 items per character, each with **Min.**, **Critical** and **Refill to**. **Only items in your bags are counted.**
- First Aid: add your bandages to be warned before the last one is gone.
- Crafters: add the reagents you buy all the time – e.g. Crystal Vial (Alchemy), Silken Thread (Tailoring, Leatherworking), Strong Flux (Blacksmithing), Salt (Leatherworking) or Hot Spices (Cooking).
- With **Restock at vendors** the **Restock** window opens at the trade supplies vendor and refills them up to **Refill to** with one click on **Buy**.

::: tip Recommended setup
Put the reagents of your daily crafting under **Your items** and tick **Also restock above the minimum** – every visit to the trade supplies vendor tops you up.
:::

<DocShot src="/shots/br/s08-restock-trade.png" alt="Restock window at a trade supplies vendor" :width="495" :height="245" />

## Engineering, Leatherworking, Tailoring, Skinning
These professions have no reminder of their own. Use **Your items** for their reagents, as described above.

See also: [Features: Other Buffs](./features#other-buffs) · [Features: Supplies](./features#supplies) · [Classes](./classes/)
