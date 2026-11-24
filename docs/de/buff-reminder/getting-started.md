---
title: "Erste Schritte – Buff Reminder"
description: "Pardona's Buff Reminder installieren, die Einstellungen mit /br öffnen, die Liste verschieben und Erinnerungen per Linksklick, Rechtsklick und Taste nutzen."
---

# Erste Schritte

## Installieren
Installiere **Pardona's Buff Reminder** mit der CurseForge-App oder über Wago, oder entpacke den Download nach `Interface\AddOns`. Für Beta-Versionen stellst du das Addon in der CurseForge-App auf „Beta“.

## Erster Start
Nach dem Einloggen erscheint die Warnliste in der Bildschirmmitte. Die Buffs deiner Klasse sind standardmäßig an; allgemeine Buffs wie Essen oder Fläschchen sind aus, bis du sie anhakst.

Die Einstellungen öffnest du mit `/br` oder über **Optionen › Addons › Pardona's Addons › Buff Reminder**.

<DocShot src="/shots/br-settings-display.png" alt="Einstellungen des Buff Reminders, Tab Anzeige" :width="1102" :height="878" />

## Liste verschieben
- Im Tab **Anzeige** auf **Verschieben** klicken (oder `/br move`), die Liste ziehen, dann **Fixieren** (oder `/br lock`).
- Oder Rechtsklick auf eine Erinnerung → **Anzeige verschieben**.
- Oder Linksklick auf den Pardona-Minimap-Button → **Anzeige verschieben** / **Anzeige sperren**.

Mit **Neue Warnungen erscheinen** **unterhalb** oder **oberhalb** legst du fest, in welche Richtung die Liste wächst.

## Erinnerungen anklicken
| Erinnerung | Linksklick | Rechtsklick |
|---|---|---|
| Fehlender oder ablaufender Buff | zaubert den Buff | stummschalten oder Variante wählen (Aura, Siegel, Rüstung …) |
| Essen, Fläschchen, Elixier, Rolle, Waffen-Item | benutzt das beste Item aus den Taschen | Item wählen, Favoriten markieren (★), stummschalten |
| Verfolgung aus | schaltet alle fehlenden Verfolgungen ein | stummschalten |
| Gruppenbuff | Gruppenversion auf den Spieler, dem er fehlt; **Strg+Linksklick**: Einzelversion | stummschalten |
| Tier (Jäger) / Dämon (Hexenmeister) | rufen, wiederbeleben, füttern oder beschwören | Zauber oder Futter wählen, stummschalten |
| Vorrat knapp | außerhalb von Städten: **in der nächsten Stadt erinnern**; bei offenem Händler: **auffüllen** | stummschalten |

Die kleine Hinweiszeile unter jeder Erinnerung sagt dir immer, was ein Klick tut. Der Linksklick braucht **Linksklick zaubert Buff** (standardmäßig an).

**Stummschalten:** Rechtsklick → **5 Min**, **15 Min**, **60 Min** oder **Sitzung**. `/br unmute` oder **Stumm aufheben** hebt alle Stummschaltungen auf.

Im Kampf kann sich die Liste nicht ändern (WoW schützt anklickbare Knöpfe im Kampf). Schon angezeigte Erinnerungen lassen sich weiter anklicken; neue erscheinen nach dem Kampf.

## Eine Taste für alles
Belege **Oberste Warnung auslösen** unter **Optionen › Tastaturbelegung › Pardona's Addons › Buff Reminder**. Die Taste erledigt das Dringendste: zuerst die oberste fehlende Erinnerung, dann den obersten Buff, der gleich abläuft. Vorratswarnungen und die Zeile „Isst …“ überspringt sie. Eine eben benutzte Erinnerung wird 1,5 Sekunden übersprungen, damit kein Item versehentlich doppelt verbraucht wird. Im Kampf gehen Items einmal pro Kampf, Zauber beliebig oft.

Makro-Alternative: `/click PardonasBuffReminderKeyButton`

## Chat-Befehle
| Befehl | Wirkung |
|---|---|
| `/br` | Einstellungen öffnen |
| `/br move` / `/br lock` | Liste zum Verschieben entsperren / fixieren |
| `/br test` | Test-Erinnerung anzeigen |
| `/br unmute` | alle Stummschaltungen aufheben |
| `/br minimap` | gemeinsamen Pardona-Minimap-Button ein/aus |
| `/br auras` | aktive Buffs mit Namen und Spell-ID auflisten |
| `/br debug` | Angaben für Fehlermeldungen, inkl. aller Pardona-Addons |
| `/br reset` | Position und Einstellungen zurücksetzen |
| `/pardona` | welche Pardona-Addons und welche Lib-Version geladen sind |
