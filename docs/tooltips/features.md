# Features

## Appearance

Section **Appearance** in the options.

- **Position** – where tooltips with the default anchor appear, for example units in the world:
  **Mouse cursor** (default), **Top left**, **Top right**, **Bottom left**, **Bottom right**,
  **Screen center** or **Blizzard default**. Tooltips of bag slots and buttons keep their
  place. **Edge distance** sets the gap to the screen edge for the corner positions.
- **Scale** – 50 % to 200 %, also for the comparison tooltips.
- **Font** – **Friz Quadrata**, **Arial Narrow**, **Skurri** or **Morpheus**, plus the fonts of
  LibSharedMedia if another addon provides it. **Font size: header** for the first line,
  **Font size: text** for all others.

### Tooltip style: Color set

**Color set** decides background, border and text colors of the tooltip:

| Color set | Look |
| --- | --- |
| **Pardona** | the look of the Pardona addons: dark background with a fine golden border (default) |
| **Blizzard** | the game's standard look |
| **Dark** | almost black background, thin gray border |
| **High contrast** | black background, white border, strong text colors |

**Color border** colors the border by content: items in their quality color, players in their
class color, NPCs by reaction (hostile, neutral, friendly).

<!-- screenshot: the same tooltip in the four color sets -->

## Players & Mobs

- **Name in class color**, **Guild color** and **Color class line** for players.
- **Health text** – the health percentage on the health bar below the tooltip.
  *Exact health text (beta):* current and maximum health as well, for example `812 / 1,025 (79%)`.
- **Target** – what the unit is targeting; if it is you: **>> YOU <<**.
- **Speed** – current movement speed in percent of normal run speed, live.
- **Resource (mana, rage, energy …)** (beta) – a second bar below the health bar in the color
  of the resource.
- **Item level (players)** – average item level. Other players are inspected out of combat when
  they are in range.
- **Spec (players)** (beta) – the talent tree with the most points, for example
  **Spec:** Arms (31/20/0). On WoW Forever this currently works for your own character only.
- **Classification (mobs)** – **(Elite)**, **(Rare)**, **(Rare Elite)** or **(Boss)** on the
  level line.

<!-- screenshot: mob tooltip with classification, health text and resource bar -->

## Items

- **Item level on items** – item level of equipment in the title line (**iLvl 25**).
- **Show comparison** – compares equipment you can wear with what you have equipped, below the
  tooltip: **Always**, **Only with Shift** or **Off**. Each equipped item gets a block
  **Instead of …:** with the changed values, or **no change**. Blizzard's own Shift comparison
  stays unchanged.
- **Hide appearance collection hint** – removes the line "You haven't collected this
  appearance".

<!-- screenshot: item tooltip with "Instead of" blocks for two rings -->

## Prices & Disenchanting

For green, blue and purple weapons and armor:

- **Show disenchant chances** – line **Disenchant:** with the possible materials, chances and
  quantities. If your Enchanting skill is too low: **(Enchanting 150 required)**.
- **Show disenchant value** – line **Disenchant value:** from TradeSkillMaster (price source
  Destroy).
- **Show recommendation** – line **Recommendation:** with **Vendor**, **Auction house** or
  **Disenchant**, whichever earns the most.
  - **Auction house fee** is subtracted (default 5 %).
  - Items that rarely sell are marked **(AH: slow seller)** and their auction value is
    ignored. The limits are **Slow seller: minimum sale rate** and
    **Slow seller: minimum sold per day**.

Value and recommendation need TradeSkillMaster. Without it, the options page says
"TradeSkillMaster not found – prices and recommendation are disabled."

## General

- **Show minimap button** – the shared button of all Pardona addons.
- **Reset settings** – button **Reset**, same as `/ptt reset`.

### Experimental features

Features marked **(beta)** are still being tested. The switch **Experimental features** in the
section **General** controls them:

| Setting | Effect |
| --- | --- |
| **Automatic (on in beta versions)** | default: on in beta versions, off in release versions |
| **On** | always on |
| **Off** | always off |

Affected: the spec line, the resource bar and the exact health text. When they are off there is
no spec line and no resource bar, and the health bar shows the percentage only. The options of
these features carry the mark **(experimental)**.
