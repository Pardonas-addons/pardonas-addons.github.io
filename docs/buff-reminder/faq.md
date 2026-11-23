# FAQ

## A feature from the description is missing in my settings
It is probably marked **(beta)**: experimental, on in beta builds, off by default in releases. Tick it in the settings to try it.

## A buff shows up as missing right after login or a loading screen
The addon waits about a second before it shows a missing buff, so short gaps after a loading screen do not trigger a warning. If a reminder stays although the buff is active, please report it with `/br auras` (see below).

## Nothing happens when I click a reminder in combat
WoW does not let addons change clickable buttons in combat. Reminders already shown still work; new or changed ones appear after combat. Moving the list and changing settings is not possible in combat.

## The keybinding does nothing
It only acts on missing or expiring buffs, not on supply warnings or while you are eating. Right after using a reminder it skips that one for 1.5 seconds. Check the key under **Options › Keybindings › Pardona's Addons › Buff Reminder**.

## A supply warning disappeared
You probably left-clicked it outside of town: it comes back at the next inn, city, vendor or bank. Below its **Critical** amount it always comes back.

## The Restock window does not open
It opens only with **Restock at vendors** (beta) on, when a supply is below **Min.** (or below **Refill to** with **Also restock above the minimum**) and the vendor sells exactly that item for gold. If you closed it, it stays closed until your next visit – left-click the supply reminder to open it again.

## My food is not offered
Only food that gives Well Fed is offered (plain food and water are not). If a buff food is missing, report it with `/br debug` and the item name.

## Paladin blessings are not checked in my group
With Pally Power loaded the addon leaves blessings to Pally Power (**Off while Pally Power is loaded**).

## Start over
`/br reset` resets position and settings.

## Troubleshooting

If something does not work as expected, type `/br debug` and `/pardona` in chat and include the output when you report the problem. See [Report a problem](/suite/report-a-problem).

For a wrong or missing buff, `/br auras` lists your active buffs with name and spell ID – please include this output and a screenshot.
