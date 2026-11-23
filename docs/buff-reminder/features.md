# Features

## Display
- **Move** / **Lock**, **Test**, **Unmute all**
- **Addon enabled**, **Left-click casts buff**
- **Style:** **Pardona** (purple and gold), **Classic** (stone and gold) or **Compact** (slim bars, optionally **Icons only**)
- **New warnings appear:** **below** / **above**
- **Sound:** **Off**, **Ping**, **Bell**, **Alarm**, **Ready check**, **Quest complete**, **Map ping**, **Coins**, **Group invite**, **Alarm clock**, **Boss emote**, plus LibSharedMedia sounds if installed; you hear a preview when you pick one
- **Size** and **Opacity** of the list
- The current key for **Use top warning**
- **Expiry warning** (beta): warns before a buff runs out. **Threshold** sets when (share of the buff's duration), **Opacity (relative)** how faint the warning is compared to the list. When the buff runs out, the warning turns into a missing reminder right away.

<DocShotRow>
  <DocShot src="/shots/br-style-pardona.png" alt="Warning list in the Pardona style" :width="424" :height="563" caption="Pardona" />
  <DocShot src="/shots/br-style-classic.png" alt="Warning list in the Classic style" :width="424" :height="563" caption="Classic" />
  <DocShot src="/shots/br-style-compact.png" alt="Warning list in the Compact style" :width="328" :height="321" caption="Compact" />
</DocShotRow>

## Class Buffs
All self-buffs of your class with a tick box each, e.g. Power Word: Fortitude and Inner Fire for Priests. Buffs you have not learned yet show **not learned** or **from level …**; talent buffs show **Talent**.

## Pet (Hunters and Warlocks only)
**Pet reminder** (beta): **Pet missing**, **Pet dead**, **Feed pet** (**Only when unhappy**, **Warn when no pet food**) for Hunters; **Demon missing** with **Demon to summon** for Warlocks. See the class pages.

## Other Buffs
- General buffs: Well Fed, **Flask**, **Well-Rested (sleeping bag)**
- **Other buffs only in instances**
- **Stones, oils, poisons by click** (beta): sharpening stones, weightstones, wizard and mana oils, rogue poisons
- **Elixirs** (beta): tick the elixirs you want to keep active – elixirs you carry appear in the list
- **Scrolls** (beta): pick scrolls by stat; the reminder uses the highest rank you can use and skips scrolls a class buff already covers
- **Tracking reminder** (beta): tick every tracking you want to keep on (**Abilities** and **Minimap**) – several at once

## Supplies
- **Class consumables** (beta): conjured food and water (**Food/water below**), mana gem, healthstone, soulstone
- **Supplies warning** (beta): reagents of your class spells, **Ammunition** (Hunter), soul shards (Warlock), **Pet food** and **Your items**. Each has **Min.** and **Critical**.
- Outside of towns, left-click a supply warning: it waits until the next rested area (inn or city), vendor or bank. Below **Critical** it always comes back after combat; low ammo during a fight shows a red warning.
- **Add item:** click the field, then Shift-click an item (bags, bank, chat link) or drag it onto the field. **Only items in your bags are counted.**

<!-- screenshot: Tab Supplies mit eigenen Items -->

## Group (Priest, Mage, Druid, Paladin)
- **Group buffs** (beta) with **Check group buffs** and **Check in**: **Always**, **Dungeons & raids only**, **Raids only**
- A group reminder shows how many players miss a buff. Left-click casts the group version on one of them, **Ctrl+Left-click** the single version.
- **Paladin blessings in group buffs** (beta) – **Off while Pally Power is loaded**

## Right-click menu
One window with the reminder's icon and title, items or variants with icons and counts (the line left-click would use is marked **best choice**, ★ marks favorites), the mute buttons and **Move display**. Esc closes it.
