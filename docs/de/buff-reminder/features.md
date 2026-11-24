---
title: "Funktionen – Buff Reminder"
description: "Alle Einstellungen des Buff Reminders Tab für Tab: Anzeige, Stile und Sounds, Klassenbuffs, Tier, weitere Buffs, Vorräte mit Auffüllen, Gruppe und Rechtsklick."
---

# Funktionen

## Anzeige
Alle Einstellungen: [Einstellungen › Anzeige](./settings#anzeige)

- **Verschieben** / **Fixieren**, **Test**, **Stumm aufheben**
- **Addon aktiv**, **Linksklick zaubert Buff**
- **Stil:** **Pardona** (Lila und Gold), **Classic** (Stein und Gold) oder **Compact** (schmale Balken, wahlweise **Nur Icons**)
- **Neue Warnungen erscheinen:** **unterhalb** / **oberhalb**
- **Ton:** **Aus**, **Ping**, **Glocke**, **Alarm**, **Bereitschaftscheck**, **Quest abgeschlossen**, **Kartenmarkierung**, **Münzen**, **Gruppeneinladung**, **Wecker**, **Boss-Emote**, dazu LibSharedMedia-Töne, falls installiert; beim Auswählen hörst du eine Vorschau
- **Größe** und **Deckkraft** der Liste
- Die aktuelle Taste für **Oberste Warnung auslösen**
- **Warnung vor Ablauf** (beta): warnt, bevor ein Buff ausläuft. **Schwelle** legt fest, wann (Anteil an der Laufzeit des Buffs), **Deckkraft (relativ)**, wie blass die Warnung im Vergleich zur Liste ist. Läuft der Buff ab, wird die Warnung sofort zur Fehlt-Erinnerung. Gifte laufen auch nach Ladungen ab: Die Warnung erscheint, wenn die Zeit **oder** die Ladungen knapp werden, z. B. „Gift Haupthand läuft ab · 12 Ladungen“.

<DocShotRow>
  <DocShot src="/shots/br-style-pardona.png" alt="Warnliste im Stil Pardona" :width="424" :height="563" caption="Pardona" />
  <DocShot src="/shots/br-style-classic.png" alt="Warnliste im Stil Classic" :width="424" :height="563" caption="Classic" />
  <DocShot src="/shots/br-style-compact.png" alt="Warnliste im Stil Compact" :width="328" :height="321" caption="Compact" />
</DocShotRow>

## Klassenbuffs
Alle Einstellungen: [Einstellungen › Klassenbuffs](./settings#klassenbuffs)

Alle eigenen Buffs deiner Klasse mit je einem Häkchen, z. B. Machtwort: Seelenstärke und Inneres Feuer beim Priester. Noch nicht gelernte Buffs zeigen **nicht erlernt** bzw. **ab Stufe …**, Talent-Buffs **Talent**.

## Tier (nur Jäger und Hexenmeister)
Alle Einstellungen: [Einstellungen › Tier](./settings#tier)

**Tier-Erinnerung** (beta): **Tier fehlt**, **Tier ist tot**, **Tier füttern** (**Nur wenn unglücklich**, **Warnen, wenn kein Tierfutter da ist**) für Jäger; **Dämon fehlt** mit **Dämon beschwören** für Hexenmeister. Details auf den Klassenseiten.

## Weitere Buffs
Alle Einstellungen: [Einstellungen › Weitere Buffs](./settings#weitere-buffs)

- Allgemeine Buffs: Satt, **Fläschchen**, **Ausgeruht (Schlafsack)**
- **Weitere Buffs nur in Instanzen**
- **Steine, Öle, Gifte per Klick** (beta): Wetzsteine, Gewichtssteine, Zauber- und Manaöle, Schurkengifte
- **Elixiere** (beta): Häkchen bei den Elixieren, die aktiv bleiben sollen – Elixiere aus deinen Taschen erscheinen in der Liste
- **Rollen** (beta): Rollen nach Wert wählen; die Erinnerung nimmt den höchsten Rang, den du benutzen kannst, und überspringt Rollen, die ein Klassenbuff schon abdeckt
- **Verfolgungs-Erinnerung** (beta): Häkchen bei jeder Verfolgung, die an bleiben soll (**Fähigkeiten** und **Minimap**) – mehrere gleichzeitig

## Vorräte
Alle Einstellungen: [Einstellungen › Vorräte](./settings#vorrate)

- **Klassen-Verbrauchsgüter** (beta): herbeigezaubertes Essen und Wasser (**Essen/Wasser unter**), Manastein, Gesundheitsstein, Seelenstein
- **Vorratswarnung** (beta): Reagenzien deiner Klassenzauber, **Munition** (Jäger), Seelensplitter (Hexenmeister), **Tierfutter** und **Eigene Items**. Jeder Eintrag hat **Min.** und **Kritisch**.
- Außerhalb von Städten Linksklick auf eine Vorratswarnung: Sie wartet bis zum nächsten Erholungsgebiet (Gasthaus oder Stadt), Händler oder bis zur Bank. Unter **Kritisch** kommt sie nach dem Kampf immer zurück; knappe Munition im Kampf zeigt eine rote Warnung.
- **Item hinzufügen:** ins Feld klicken, dann ein Item per Shift-Klick wählen (Taschen, Bank, Chat-Link) oder auf das Feld ziehen. **Gezählt werden nur Items in den Taschen.**

<!-- screenshot: Tab Vorräte mit eigenen Items -->

### Beim Händler auffüllen <Badge type="warning" text="beta" />
- Jeder Vorrat außer Tierfutter hat neben **Min.** und **Kritisch** eine Menge **Auffüllen** (Standard: doppelte Mindestmenge, Munition 1000).
- Öffnest du einen Händler, der einen deiner knappen Vorräte verkauft, geht neben dem Händler das Fenster **Auffüllen** auf. Je Item eine Zeile: Häkchen, Icon, Name, Bestand und Ziel, Menge und Preis. Die Menge wird auf die Bündelgröße des Händlers aufgerundet.
- Unter der Liste: **Summe** und **Dein Gold**. **Nicht genug Gold** bzw. **Nicht genug Taschenplatz** sagen dir, warum nicht alles geht.
- **Kaufen** kauft genau die angehakten Zeilen; eine Chatzeile **Gekauft: …** bestätigt jedes Item. **Automatisch wird nie etwas gekauft.**
- Schließt du das Fenster, bleibt es für diesen Besuch zu. Solange der Händler offen ist, holt ein Linksklick auf eine Vorratswarnung (**Linksklick: auffüllen**) es zurück.
- **Auch oberhalb der Mindestmenge auffüllen:** aus (Standard) – nur Vorräte unter **Min.** werden angeboten; an – alles unter **Auffüllen** wird bei jedem Händlerbesuch angeboten.
- Angeboten werden nur Items, die der Händler für Gold verkauft. Seelensplitter und Tierfutter werden nie aufgefüllt.

<!-- screenshot: Fenster Restock beim Händler, aus /br demo -->

## Gruppe (Priester, Magier, Druide, Paladin)
Alle Einstellungen: [Einstellungen › Gruppe](./settings#gruppe)

- **Gruppen-Buffs** (beta) mit **Gruppen-Buffs prüfen** und **Prüfen in**: **Immer**, **Nur Dungeon & Raid**, **Nur Raid**
- Eine Gruppen-Erinnerung zeigt, wie vielen Spielern ein Buff fehlt. Linksklick zaubert die Gruppenversion auf einen von ihnen, **Strg+Linksklick** die Einzelversion.
- **Segen des Paladins in Gruppenbuffs** (beta) – **Aus, solange Pally Power geladen ist**

## Rechtsklick-Menü
Ein Fenster mit Icon und Titel der Erinnerung, Items oder Varianten mit Icons und Anzahl (die Zeile, die der Linksklick nehmen würde, ist als **beste Wahl** markiert, ★ markiert Favoriten), den Stumm-Knöpfen und **Anzeige verschieben**. Esc schließt es.
