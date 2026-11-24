---
description: "So meldest du ein Problem mit einem Pardona-Addon auf GitHub: der richtige Issue-Tracker und was hinein gehört – Version, /pardona, Debug-Ausgabe, Lua-Fehler."
---

# Problem melden

Bitte melde Probleme als GitHub-Issue beim betroffenen Addon:

| Addon | Issues |
| --- | --- |
| Buff Reminder | [pardonas-buff-reminder/issues](https://github.com/Pardonas-addons/pardonas-buff-reminder/issues) |
| ToolTips | [pardonas-tooltip/issues](https://github.com/Pardonas-addons/pardonas-tooltip/issues) |
| UI | [pardonas-ui/issues](https://github.com/Pardonas-addons/pardonas-ui/issues) |
| Bibliothek | [lib-pardona/issues](https://github.com/Pardonas-addons/lib-pardona/issues) |

Wenn du nicht sicher bist, ob das Problem in der Bibliothek liegt, nutze die Issues des Addons.

## Was du angeben solltest

- die **Version** des Addons,
- die Ausgabe von **`/pardona`** (siehe [Diagnose](./diagnostics)),
- die Ausgabe des **Debug-Befehls** des Addons: `/br debug` (Buff Reminder), `/ptt debug` (ToolTips) oder `/pui` (UI),
- den **vollständigen Lua-Fehlertext**, falls es einen gibt,
- welche **anderen Addons** aktiv sind,
- die **Schritte, um das Problem nachzustellen**.

Damit Lua-Fehler angezeigt werden, gib einmal `/console scriptErrors 1` ein oder nutze ein Fehler-Addon wie BugSack.
