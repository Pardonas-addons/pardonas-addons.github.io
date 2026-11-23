# Getting started

## Installation

**With the CurseForge app:** search for *Pardona's ToolTips* and install it. Beta versions
are only offered if your release type allows beta.

**By hand:**

1. Download the latest version from CurseForge or GitHub.
2. Extract the folder `PardonasToolTips` into
   `World of Warcraft\_forever_\Interface\AddOns\`.
3. Restart the game, or type `/reload` if it is already running.

The shared library (LibPardona) is included – there is nothing else to install.

### Optional addons

ToolTips works on its own. These addons add something when they are installed:

| Addon | Adds |
| --- | --- |
| TradeSkillMaster | **Disenchant value** and **Recommendation** (prices) |
| LibSharedMedia (through another addon) | more fonts in the **Font** list |
| Titan Panel or another LibDataBroker display | a launcher "Pardona" with the addon status |

## Open the settings

- type `/ptt`,
- left-click the Pardona minimap button (with several Pardona addons: choose **ToolTips** in
  the menu), or
- **Options › AddOns › Pardona's Addons › ToolTips**.

<!-- screenshot: options page ToolTips with the sections Appearance and Players & Mobs -->

All changes apply immediately, without `/reload`. If you type `/ptt` in combat, the options
open as soon as combat ends.

## Chat commands

| Command | What it does |
| --- | --- |
| `/ptt` or `/pardonastooltips` | open the options |
| `/ptt reset` | reset all settings to their defaults |
| `/ptt debug` | show what the game lets the addon read (troubleshooting) |
| `/ptt minimap` | show or hide the shared Pardona minimap button |
| `/ptt help` | list the commands |
