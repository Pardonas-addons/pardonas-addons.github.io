---
title: "Settings – Buff Reminder"
description: "Every Buff Reminder setting explained tab by tab: display, class buffs, pet, other buffs, ranks, supplies and group – what each option does and its default."
---

# Settings

Open the settings with `/br` or via **Options › AddOns › Pardona's Addons › Buff Reminder**. `/br` opens the tab you used last.

The settings are split into up to seven tabs: **Display**, **Class Buffs**, **Pet** (Hunters and Warlocks), **Other Buffs**, **Ranks**, **Supplies** and **Group** (Priests, Mages, Druids and Paladins). **Other Buffs** holds everything you want to keep active as a buff, **Supplies** everything you should carry enough of.

Changes apply immediately – in combat, as soon as the fight is over. Buff choices, supplies, elixirs, scrolls, trackings and accepted ranks are saved per character; look, sound and the beta switches apply to all your characters.

Switches marked <Badge type="warning" text="beta" /> are experimental: on in beta versions, off by default in releases. The settings below a switch are greyed out or folded away while it is off. Once you tick or untick a switch yourself, your choice is kept.

## Display
<DocShot src="/shots/br/e01-settings-display.png" alt="Settings, Display tab" :width="821" :height="708" />

| Setting | What it does | Default |
|---|---|---|
| **Move** / **Lock** | **Move** unlocks the list so you can drag it; **Lock** fixes it again. Same as `/br move` and `/br lock`. Not possible in combat. | locked |
| **Test** | Shows a test reminder for 5 seconds – handy after changing style, size or position. | – |
| **Unmute all** | Lifts every mute at once (same as `/br unmute`). | – |
| **Addon enabled** | Turns all reminders off without disabling the addon. | on |
| **Left-click casts buff** | Left-click casts the buff or uses the item. Off: left-click does nothing, right-click only mutes. | on |
| **Style** | Look of the list and the menu: **Pardona**, **Classic** or **Compact**. | Pardona |
| **Icons only** | Only with **Compact**: icons side by side, names in the tooltip. | off |
| **New warnings appear** | **below** or **above** the first reminder – the direction the list grows. | below |
| **Sound** | Plays once when a buff goes missing; you hear a preview when you pick one. Sounds from LibSharedMedia appear if another addon provides them. **Off** for silence. | Ping |
| **Size** | 50–200 % of the normal size. | 100 % |
| **Opacity** | 30–100 %. | 100 % |
| Key line | Shows the key bound to **Use top warning**, or **not bound**, and where to set it. | – |
| **Expiry warning** | Warns shortly before a buff runs out, as a faint line under the missing reminders. | on |
| **Threshold** | The warning appears when the remaining time – for poisons also the charges – drops to this share. 5–50 %. | 10 % |
| **Opacity (relative)** | How faint the expiry line is compared to the list. 20–100 %. | 50 % |

<DocShot src="/shots/br/e09-dropdown-sound.png" alt="Sound list opened" :width="230" :height="672" />

::: tip
Change **Style**, **Size** or **Opacity**, then click **Test** – the test reminder shows up right where your list sits.
:::

## Class Buffs
<DocShot src="/shots/br/e02-settings-class-buffs.png" alt="Settings, Class Buffs tab" :width="821" :height="708" />

- One checkbox per self-buff of your class. Buffs you have not learned yet are greyed out with **not learned**, **from level …** or **Talent (level …+)**.
- Situational buffs are off by default: Thorns, Righteous Fury, Vampiric Embrace, Shadowform and the warrior shouts.
- Mages and Warlocks also find their conjured items here (with **Class consumables**, see **Supplies**), Rogues their poisons, Shamans their shield and weapon imbues.

| Setting | What it does | Default |
|---|---|---|
| **Variant menu on right-click** | Right-click on a reminder with variants – aura, seal, blessing, aspect, armor, shield, imbue, shout – lists every variant you know. A click casts it and makes it the one left-click uses. | on |

What each class gets in detail: see [Classes](./classes/).

## Pet
<ClassTags :ids="['hunter', 'warlock']" />

For Hunters and Warlocks only; other classes don't see this tab.

<!-- screenshot: E07 Settings, Pet tab (Hunter) -->
<!-- screenshot: E08 Settings, Pet tab (Warlock) -->

| Setting | What it does | Default |
|---|---|---|
| **Pet reminder** <Badge type="warning" text="beta" /> | Main switch for everything below. | on in beta |
| **Pet missing** (Hunter) | Reminder when no pet is out; left-click calls it. | on |
| **Pet dead** (Hunter) | Reminder when your pet is dead; left-click revives it. | on |
| **Feed pet** (Hunter) | Reminder when your pet is content or unhappy; left-click feeds it. | on |
| **Only when unhappy** | **Feed pet** only when your pet is unhappy. | off |
| **Warn when no pet food** | Shows **No pet food** when nothing in your bags fits. | on |
| **Demon missing** (Warlock) | Reminder when no demon is out; left-click summons one. | on |
| **Demon to summon** | Which demon left-click summons: **Last summoned** or a specific demon. | Last summoned |

<!-- screenshot: E10 Auswahlliste Demon to summon aufgeklappt -->

## Other Buffs
<DocShot src="/shots/br/e03-settings-other-top.png" alt="Settings, Other Buffs tab, top" :width="821" :height="708" />

| Setting | What it does | Default |
|---|---|---|
| Well Fed, **Flask**, **Well-Rested (sleeping bag)** | Reminders for food, flask and the sleeping-bag buff. | off |
| **Main hand: weapon enhancement**, **Off hand: weapon enhancement** | Reminders for stones and oils (need **Stones, oils, poisons by click**). | on |
| **Other buffs only in instances** | Food, flask, stones, oils, elixirs and scrolls only in dungeons and raids. **Also applies to stones, oils, poisons, elixirs and scrolls; not to the tracking reminder.** | on |
| **Stones, oils, poisons by click** | Applies sharpening stones, weightstones, oils and rogue poisons with one click. | on |
| **Elixirs** | Every elixir you have carried appears in the list (**Elixirs you carry appear here.**); tick the ones to keep active. | none ticked |
| **Scrolls** | Six scroll types – Agility, Strength, Intellect, Spirit, Stamina, **Protection** – with the count in your bags. Uses the highest rank you can read and skips a scroll when a class buff already gives as much. | types that suit your class |
| **Tracking reminder** | One checkbox per tracking, grouped into **Abilities** and **Minimap**. Several can be on at once. | Find Minerals, Find Herbs, Find Treasure (once learned) |

<DocShot src="/shots/br/e04-settings-other-bottom.png" alt="Settings, Other Buffs tab, bottom" :width="821" :height="708" />

::: tip
Leave **Other buffs only in instances** on while levelling – food and flask reminders then only show up where they matter.
:::

## Ranks
<DocShot src="/shots/br/e12-settings-ranks.png" alt="Settings, Ranks tab" :width="821" :height="708" />

| Setting | What it does | Default |
|---|---|---|
| **Low spell rank warning** <Badge type="warning" text="beta" /> | Warns after a fight when you cast a lower rank of a spell than the highest one you know. | on in beta |
| **Accepted ranks** | Spells whose low rank you accepted by right-click: icon, name, **Rank N** or **all ranks**. The **x** removes an entry. Empty: **No accepted ranks yet.** Saved per character. | empty |

## Supplies
<DocShot src="/shots/br/e05-settings-supplies.png" alt="Settings, Supplies tab" :width="821" :height="708" />

| Setting | What it does | Default |
|---|---|---|
| **Class consumables** | Mages: conjured water, food and mana gem. Warlocks: healthstone and soulstone. The entries themselves are on **Class Buffs**. | on |
| **Food/water below** | Mages: warn when conjured food or water drops below this number. 0–60, 0 = off. | 20 |
| **Supplies warning** | Warns when reagents, ammunition, soul shards, pet food or your own items run low. | on |
| **Restock at vendors** | Opens the **Restock** window at a vendor who sells a low supply. Nothing is bought without your click. | on |
| **Also restock above the minimum** | Off: only supplies below **Min.** are offered. On: everything below **Refill to**, at every vendor visit. | off |

Below the switches: **Left-click a supply warning outside of towns to be reminded in the next rested area.**

**The supply list** – your class reagents, **Ammunition** (Hunters), soul shards (Warlocks) and **Pet food** (Hunters), each with a checkbox and three numbers:

| Column | Meaning |
|---|---|
| **Min.** | Warn when you carry fewer. |
| **Critical** | Below this amount a warning you postponed to the next town comes back after combat; ammunition gets a red warning during a fight. Always below **Min.**; 0 = off. |
| **Refill to** | Target amount for **Restock** (not for pet food). At least **Min.** |

Defaults: reagents see [Classes](./classes/); **Ammunition** 200 / 50 / 1000; soul shards 5 / 1; **Pet food** 20 (off by default); your own items 10 / 0 / 20.

**Your items** – **Add item:** click the field, then shift-click an item (bags, bank, chat link) or drag it onto the field. Up to 20 items per character; **Remove** deletes one. **Only items in your bags are counted.**

::: tip
Put the reagents of your profession under **Your items** and tick **Also restock above the minimum** – every vendor visit fills you up. More in [Professions](./professions).
:::

## Group
<ClassTags :ids="['priest', 'mage', 'druid', 'paladin']" />

For Priests, Mages, Druids and Paladins only.

<DocShot src="/shots/br/e06-settings-group.png" alt="Settings, Group tab" :width="821" :height="708" />

| Setting | What it does | Default |
|---|---|---|
| **Group buffs** <Badge type="warning" text="beta" /> | Checks your party or raid for your group buffs, out of combat. | on in beta |
| **Check group buffs** | Turns the check on or off without touching the beta switch. | on |
| **Check in** | **Always**, **Dungeons & raids only** or **Raids only**. | Always |
| **Paladin blessings in group buffs** <Badge type="warning" text="beta" /> | Paladins: your blessing on every member, cast as Greater Blessing. **Off while Pally Power is loaded.** | on in beta |

<DocShot src="/shots/br/e11-dropdown-check-in.png" alt="Check in list opened" :width="240" :height="126" />

## Start over
`/br reset` resets position and settings; the beta switches go back to the default of your version.

See also: [Features](./features) · [Getting started](./getting-started) · [Classes](./classes/)
