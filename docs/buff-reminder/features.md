---
title: "Features – Buff Reminder"
description: "All Buff Reminder settings tab by tab: display, styles and sounds, class buffs, pet, other buffs, supplies with vendor restock, group and the right-click menu."
---

# Features

## Display
All settings: [Settings › Display](./settings#display)

- **Move** / **Lock**, **Test**, **Unmute all**
- **Addon enabled**, **Left-click casts buff**
- **Style:** **Pardona** (purple and gold), **Classic** (stone and gold) or **Compact** (slim bars, optionally **Icons only**)
- **New warnings appear:** **below** / **above**
- **Sound:** **Off**, **Ping**, **Bell**, **Alarm**, **Ready check**, **Quest complete**, **Map ping**, **Coins**, **Group invite**, **Alarm clock**, **Boss emote**, plus LibSharedMedia sounds if installed; you hear a preview when you pick one
- **Size** and **Opacity** of the list
- The current key for **Use top warning**
- **Expiry warning** (beta): warns before a buff runs out. **Threshold** sets when (share of the buff's duration), **Opacity (relative)** how faint the warning is compared to the list. When the buff runs out, the warning turns into a missing reminder right away. Poisons also run out of charges: the warning appears when the time **or** the charges run low, e.g. "Main-hand poison expires · 12 charges".

<DocShotRow>
  <DocShot src="/shots/br-style-pardona.png" alt="Warning list in the Pardona style" :width="424" :height="563" caption="Pardona" />
  <DocShot src="/shots/br-style-classic.png" alt="Warning list in the Classic style" :width="424" :height="563" caption="Classic" />
  <DocShot src="/shots/br-style-compact.png" alt="Warning list in the Compact style" :width="328" :height="321" caption="Compact" />
  <DocShot src="/shots/br/s04-compact-icons.png" alt="Warning list in the Compact style, icons only" :width="174" :height="49" caption="Compact · Icons only" />
</DocShotRow>

<DocShot src="/shots/br/s03-expiry-warning.png" alt="Expiry warning: faint line below the missing reminders" :width="362" :height="224" />

## Class Buffs
All settings: [Settings › Class Buffs](./settings#class-buffs)

All self-buffs of your class with a tick box each, e.g. Power Word: Fortitude and Inner Fire for Priests. Buffs you have not learned yet show **not learned** or **from level …**; talent buffs show **Talent**.

## Pet (Hunters and Warlocks only)
All settings: [Settings › Pet](./settings#pet)

**Pet reminder** (beta): **Pet missing**, **Pet dead**, **Feed pet** (**Only when unhappy**, **Warn when no pet food**) for Hunters; **Demon missing** with **Demon to summon** for Warlocks. See the class pages.

## Other Buffs
All settings: [Settings › Other Buffs](./settings#other-buffs)

- General buffs: Well Fed, **Flask**, **Well-Rested (sleeping bag)**
- **Other buffs only in instances**
- **Stones, oils, poisons by click** (beta): sharpening stones, weightstones, wizard and mana oils, rogue poisons
- **Elixirs** (beta): tick the elixirs you want to keep active – elixirs you carry appear in the list
- **Scrolls** (beta): pick scrolls by stat; the reminder uses the highest rank you can use and skips scrolls a class buff already covers
- **Tracking reminder** (beta): tick every tracking you want to keep on (**Abilities** and **Minimap**) – several at once

<DocShotRow>
  <DocShot src="/shots/br/s06-elixir-scroll.png" alt="Reminders for an elixir and a scroll" :width="362" :height="122" />
  <DocShot src="/shots/br/s05-stones-oils-menu.png" alt="Right-click menu: stones and oils in your bags" :width="360" :height="378" />
</DocShotRow>

## Supplies
All settings: [Settings › Supplies](./settings#supplies)

- **Class consumables** (beta): conjured food and water (**Food/water below**), mana gem, healthstone, soulstone
- **Supplies warning** (beta): reagents of your class spells, **Ammunition** (Hunter), soul shards (Warlock), **Pet food** and **Your items**. Each has **Min.** and **Critical**.
- Outside of towns, left-click a supply warning: it waits until the next rested area (inn or city), vendor or bank. Below **Critical** it always comes back after combat; low ammo during a fight shows a red warning.
- **Add item:** click the field, then Shift-click an item (bags, bank, chat link) or drag it onto the field. **Only items in your bags are counted.**

<DocShot src="/shots/br/e05-settings-supplies.png" alt="Supplies tab with your own items" :width="782" :height="668" />

### Restock at vendors <Badge type="warning" text="beta" />
- Every supply except pet food has a **Refill to** amount next to **Min.** and **Critical** (default: twice the Min., ammunition 1000).
- When you open a vendor who sells one of your low supplies, the **Restock** window opens next to the vendor. One line per item: tick box, icon, name, count and target, amount and price. The amount is rounded up to the vendor's bundle size.
- Below the list: **Total** and **Your gold**. **Not enough gold** or **Not enough bag space** tell you why you can't buy everything.
- **Buy** buys exactly the ticked lines; a chat line **Bought: …** confirms each item. **Nothing is ever bought automatically.**
- Close the window and it stays closed for this visit. While the vendor is open, left-click a supply reminder (**Left-click: restock**) to bring it back.
- **Also restock above the minimum:** off (default) – only supplies below **Min.** are offered; on – everything below **Refill to** is offered at every vendor visit.
- Only items the vendor sells for gold are offered. Soul shards and pet food are never restocked.

<DocShot src="/shots/br/s08-restock-trade.png" alt="Restock window at a trade supplies vendor" :width="495" :height="245" />

<DocShot src="/shots/br/s09-restock-no-gold.png" alt="Restock window with not enough gold" :width="495" :height="263" caption="Not enough gold" />

## Group (Priest, Mage, Druid, Paladin)
All settings: [Settings › Group](./settings#group)

- **Group buffs** (beta) with **Check group buffs** and **Check in**: **Always**, **Dungeons & raids only**, **Raids only**
- A group reminder shows how many players miss a buff. Left-click casts the group version on one of them, **Ctrl+Left-click** the single version.
- **Paladin blessings in group buffs** (beta) – **Off while Pally Power is loaded**

<DocShot src="/shots/br/s10-group-line.png" alt="Group buff line with the members who miss it" :width="362" :height="87" />

## Right-click menu
One window with the reminder's icon and title, items or variants with icons and counts (the line left-click would use is marked **best choice**, ★ marks favorites), the mute buttons and **Move display**. Esc closes it.
