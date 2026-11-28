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
- **Warnung vor Ablauf**: warnt, bevor ein Buff ausläuft. **Schwelle** legt fest, wann (Anteil an der Laufzeit des Buffs), **Deckkraft (relativ)**, wie blass die Warnung im Vergleich zur Liste ist. Läuft der Buff ab, wird die Warnung sofort zur Fehlt-Erinnerung. Gifte laufen auch nach Ladungen ab: Die Warnung erscheint, wenn die Zeit **oder** die Ladungen knapp werden, z. B. „Gift Haupthand läuft ab · 12 Ladungen“.

<DocShotRow>
  <DocShot src="/shots/br-style-pardona.png" alt="Warnliste im Stil Pardona" :width="424" :height="563" caption="Pardona" />
  <DocShot src="/shots/br-style-classic.png" alt="Warnliste im Stil Classic" :width="424" :height="563" caption="Classic" />
  <DocShot src="/shots/br-style-compact.png" alt="Warnliste im Stil Compact" :width="328" :height="321" caption="Compact" />
  <DocShot src="/shots/br/s04-compact-icons.png" alt="Warnliste im Stil Compact, nur Icons" :width="174" :height="49" caption="Compact · Nur Icons" />
</DocShotRow>

<DocShot src="/shots/br/s03-expiry-warning.png" alt="Warnung vor Ablauf: blasse Zeile unter den fehlenden Erinnerungen" :width="362" :height="224" />

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
- **Steine, Öle, Gifte per Klick**: Wetzsteine, Gewichtssteine, Zauber- und Manaöle, Schurkengifte
- **Elixiere**: Häkchen bei den Elixieren, die aktiv bleiben sollen – Elixiere aus deinen Taschen erscheinen in der Liste
- **Rollen**: Rollen nach Wert wählen; die Erinnerung nimmt den höchsten Rang, den du benutzen kannst, und überspringt Rollen, die ein Klassenbuff schon abdeckt
- **Verfolgungs-Erinnerung**: Häkchen bei jeder Verfolgung, die an bleiben soll (**Fähigkeiten** und **Minimap**) – mehrere gleichzeitig

<DocShotRow>
  <DocShot src="/shots/br/s06-elixir-scroll.png" alt="Erinnerungen für ein Elixier und eine Rolle" :width="362" :height="122" />
  <DocShot src="/shots/br/s05-stones-oils-menu.png" alt="Rechtsklick-Menü: Steine und Öle in den Taschen" :width="360" :height="378" />
</DocShotRow>

## Ränge <Badge type="warning" text="beta" />
Alle Einstellungen: [Einstellungen › Ränge](./settings#range)

**Warnung bei niedrigen Zauberrängen** (beta): Nach einem Kampf meldet das Addon, wenn du einen niedrigeren Rang eines Zaubers gewirkt hast als den höchsten erlernten – bei allen Zaubern, nicht nur Buffs, auch bei Heil- und Schadenszaubern. Je Zauber erscheint eine Zeile, z. B. **Geringes Heilen: Rang 1 gewirkt - Rang 3 erlernt (2x)**.

- Linksklick schließt die Zeile. Wirkst du den niedrigen Rang wieder, kommt sie nach dem nächsten Kampf zurück.
- Rechtsklick öffnet ein Menü: **Rang N von &lt;Zauber&gt; akzeptieren** behält den Rang bewusst, **Alle Ränge von &lt;Zauber&gt; akzeptieren** beendet die Warnung für diesen Zauber, **Auf Aktionsleisten durch Rang M ersetzen** tauscht den Zauber auf allen Aktionstasten (nur außerhalb des Kampfes; Makros bleiben unverändert). Dazu kommen die üblichen Stummschalt-Knöpfe.
- Akzeptierte Ränge gelten pro Charakter und stehen im Tab **Ränge**; das **X** entfernt einen wieder.
- Die Taste **Oberste Warnung auslösen** überspringt diese Zeilen.

## Vorräte
Alle Einstellungen: [Einstellungen › Vorräte](./settings#vorrate)

- **Klassen-Verbrauchsgüter**: herbeigezaubertes Essen und Wasser (**Essen/Wasser unter**), Manastein, Gesundheitsstein, Seelenstein
- **Vorratswarnung**: Reagenzien deiner Klassenzauber, **Munition** (Jäger), Seelensplitter (Hexenmeister), **Tierfutter** und **Eigene Items**. Jeder Eintrag hat **Min.** und **Kritisch**.
- Außerhalb von Städten Linksklick auf eine Vorratswarnung: Sie wartet bis zum nächsten Erholungsgebiet (Gasthaus oder Stadt), Händler oder bis zur Bank. Unter **Kritisch** kommt sie nach dem Kampf immer zurück; knappe Munition im Kampf zeigt eine rote Warnung.
- **Item hinzufügen:** ins Feld klicken, dann ein Item per Shift-Klick wählen (Taschen, Bank, Chat-Link) oder auf das Feld ziehen. **Gezählt werden nur Items in den Taschen.**

<DocShot src="/shots/br/e05-settings-supplies.png" alt="Tab Vorräte mit eigenen Items" :width="821" :height="708" />

### Beim Händler auffüllen
- Jeder Vorrat außer Tierfutter hat neben **Min.** und **Kritisch** eine Menge **Auffüllen** (Standard: doppelte Mindestmenge, Munition 1000).
- Öffnest du einen Händler, der einen deiner knappen Vorräte verkauft, geht neben dem Händler das Fenster **Auffüllen** auf. Je Item eine Zeile: Häkchen, Icon, Name, Bestand und Ziel, Menge und Preis. Die Menge wird auf die Bündelgröße des Händlers aufgerundet.
- Unter der Liste: **Summe** und **Dein Gold**. **Nicht genug Gold** bzw. **Nicht genug Taschenplatz** sagen dir, warum nicht alles geht.
- **Kaufen** kauft genau die angehakten Zeilen; eine Chatzeile **Gekauft: …** bestätigt jedes Item. **Automatisch wird nie etwas gekauft.**
- Schließt du das Fenster, bleibt es für diesen Besuch zu. Solange der Händler offen ist, holt ein Linksklick auf eine Vorratswarnung (**Linksklick: auffüllen**) es zurück.
- **Auch oberhalb der Mindestmenge auffüllen:** aus (Standard) – nur Vorräte unter **Min.** werden angeboten; an – alles unter **Auffüllen** wird bei jedem Händlerbesuch angeboten.
- Angeboten werden nur Items, die der Händler für Gold verkauft. Seelensplitter und Tierfutter werden nie aufgefüllt.

<DocShot src="/shots/br/s08-restock-trade.png" alt="Fenster Auffüllen beim Handwerkswarenhändler" :width="495" :height="245" />

<DocShot src="/shots/br/s09-restock-no-gold.png" alt="Fenster Auffüllen mit zu wenig Gold" :width="495" :height="263" caption="Nicht genug Gold" />

## Gruppe (Priester, Magier, Druide, Paladin)
Alle Einstellungen: [Einstellungen › Gruppe](./settings#gruppe)

- **Gruppen-Buffs** (beta) mit **Gruppen-Buffs prüfen** und **Prüfen in**: **Immer**, **Nur Dungeon & Raid**, **Nur Raid**
- Eine Gruppen-Erinnerung zeigt, wie vielen Spielern ein Buff fehlt. Linksklick zaubert die Gruppenversion auf einen von ihnen, **Strg+Linksklick** die Einzelversion.
- **Segen des Paladins in Gruppenbuffs** (beta) – **Aus, solange Pally Power geladen ist**

<DocShot src="/shots/br/s10-group-line.png" alt="Gruppenbuff-Zeile mit den Mitgliedern, denen er fehlt" :width="362" :height="87" />

## Rechtsklick-Menü
Ein Fenster mit Icon und Titel der Erinnerung, Items oder Varianten mit Icons und Anzahl (die Zeile, die der Linksklick nehmen würde, ist als **beste Wahl** markiert, ★ markiert Favoriten), den Stumm-Knöpfen und **Anzeige verschieben**. Esc schließt es.
