# Getting started

## Install
Install **Pardona's Buff Reminder** with the CurseForge app or from Wago, or extract the download into `Interface\AddOns`. For beta versions, set the addon to "Beta" in the CurseForge app.

## First start
After login the reminder list appears in the middle of the screen. Missing buffs of your class are switched on by default; general buffs like food or flasks are off until you tick them.

Open the settings with `/br` or via **Options › AddOns › Pardona's Addons › Buff Reminder**.

<DocShot src="/shots/br-settings-display.png" alt="Buff Reminder settings, Display tab" :width="1102" :height="878" />

## Move the list
- Click **Move** in the **Display** tab (or type `/br move`), drag the list, then click **Lock** (or `/br lock`).
- Or right-click any reminder and choose **Move display**.
- Or left-click the Pardona minimap button and choose **Move display** / **Lock display**.

**New warnings appear** **below** or **above** decides in which direction the list grows.

## Clicking reminders
| Reminder | Left-click | Right-click |
|---|---|---|
| Missing or expiring buff | casts the buff | mute, or pick a variant (aura, seal, armor …) |
| Food, flask, elixir, scroll, weapon item | uses the best item from your bags | choose an item, mark favorites (★), mute |
| Tracking off | turns on all missing trackings | mute |
| Group buff | group version on the player who misses it; **Ctrl+Left-click**: single version | mute |
| Pet (Hunter) / Demon (Warlock) | call, revive, feed or summon | choose the spell or food, mute |
| Supplies low | outside of towns: **remind me in the next town** | mute |

The small hint line under each reminder always tells you what a click does. Left-click needs **Left-click casts buff** to be on (default).

**Mute:** right-click → **5 min**, **15 min**, **60 min** or **Session**. `/br unmute` or **Unmute all** clears every mute.

In combat the list cannot change (WoW protects clickable buttons in combat). Reminders already shown can still be clicked; new ones appear after combat.

## One key for everything
Bind **Use top warning** under **Options › Keybindings › Pardona's Addons › Buff Reminder**. The key does the most urgent thing: first the topmost missing reminder, then the topmost buff that is about to expire. Supply warnings and the eating line are skipped. A reminder you just used is skipped for 1.5 seconds, so no item is used twice by accident. In combat, items work once per fight; spells as often as you like.

Macro alternative: `/click PardonasBuffReminderKeyButton`

## Chat commands
| Command | What it does |
|---|---|
| `/br` | open the settings |
| `/br move` / `/br lock` | unlock / lock the list for moving |
| `/br test` | show a test reminder |
| `/br unmute` | clear all mutes |
| `/br minimap` | show or hide the shared Pardona minimap button |
| `/br auras` | list your active buffs with name and spell ID |
| `/br debug` | information for bug reports, including all Pardona addons |
| `/br reset` | reset position and settings |
| `/pardona` | which Pardona addons and library version are loaded |
