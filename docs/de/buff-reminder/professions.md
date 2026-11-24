---
description: "Was der Buff Reminder für jeden Beruf tut: Verfolgung für Sammler, Fläschchen und Elixiere, Buff-Essen, Steine und Öle sowie Reagenzien mit Auffüllen."
---

# Berufe

Den Beruf musst du nicht selbst haben: Der Buff Reminder arbeitet mit den Items in deinen Taschen – egal, ob du sie hergestellt, gekauft oder von jemandem aus der Gilde bekommen hast. Diese Seite zeigt, was er für jeden Beruf tut.

Funktionen mit <Badge type="warning" text="beta" /> sind experimentell: in Beta-Versionen an, in Releases standardmäßig aus – siehe [Versionen](./#versionen).

## Auf einen Blick
| Beruf | Was der Buff Reminder tut | Einstellung | Tab |
|---|---|---|---|
| [Kräuterkunde, Bergbau, Angeln](#sammelberufe-krauterkunde-bergbau-angeln) | hält deine Verfolgung an, mehrere gleichzeitig | **Verfolgungs-Erinnerung** <Badge type="warning" text="beta" /> | **Weitere Buffs** |
| [Alchemie](#alchemie-flaschchen-und-elixiere) | trinkt per Klick das beste Fläschchen oder Elixier | **Fläschchen**, **Elixiere** <Badge type="warning" text="beta" /> | **Weitere Buffs** |
| [Kochkunst](#kochkunst-buff-essen) | isst per Klick das beste Buff-Essen, zählt beim Essen herunter | Satt | **Weitere Buffs** |
| [Schmiedekunst, Verzauberkunst](#schmiedekunst-und-verzauberkunst-steine-und-ole) | trägt per Klick Wetzsteine, Gewichtssteine und Öle auf | **Steine, Öle, Gifte per Klick** <Badge type="warning" text="beta" /> | **Weitere Buffs** |
| [Erste Hilfe](#erste-hilfe-und-handwerks-reagenzien-eigene-items) | warnt, wenn die Verbände knapp werden | **Eigene Items** <Badge type="warning" text="beta" /> | **Vorräte** |
| [Jeder Handwerksberuf](#erste-hilfe-und-handwerks-reagenzien-eigene-items) | warnt, wenn Reagenzien knapp werden, und füllt sie beim Händler auf | **Eigene Items**, **Beim Händler auffüllen** <Badge type="warning" text="beta" /> | **Vorräte** |
| [Schatzsuche (Zwerge)](#sammelberufe-krauterkunde-bergbau-angeln) | hält sie neben deinen anderen Verfolgungen an | **Verfolgungs-Erinnerung** <Badge type="warning" text="beta" /> | **Weitere Buffs** |

## Sammelberufe: Kräuterkunde, Bergbau, Angeln
- Hak unter **Fähigkeiten** und **Minimap** jede Verfolgung an, die an bleiben soll – Kräutersuche, Mineraliensuche, Fischsuche (wenn das Spiel sie kennt), Schatzsuche und Minimap-Verfolgungen wie Flugmeister oder Händler. **Mehrere können gleichzeitig aktiv sein.**
- Mineraliensuche, Kräutersuche und Schatzsuche sind standardmäßig an, sobald du sie gelernt hast.
- Ist eine aus – zum Beispiel nach dem Tod –, zeigt eine einzige Zeile **Verfolgung aus: …** alle, und ein Klick schaltet alle wieder ein.

::: tip Empfohlene Einstellung
Zwergische Bergleute: Mineraliensuche und Schatzsuche zusammen anlassen – ein Klick nach jeder Wiederbelebung holt beide zurück.
:::

<!-- screenshot: Zeile "Verfolgung aus: Kräutersuche, Schatzsuche" -->

## Alchemie: Fläschchen und Elixiere
- **Fläschchen** (Tab **Weitere Buffs**): Der Linksklick trinkt ein Fläschchen aus den Taschen. Favoriten (★) zuerst, dann das zuletzt genutzte, dann die höhere Itemstufe. Jedes Fläschchen zählt, auch neue – das Addon lernt ihre Wirkung.
- **Elixiere** (beta): Hak die Elixiere an, die aktiv bleiben sollen; jedes Elixier aus deinen Taschen erscheint in der Liste. Der Linksklick trinkt das fehlende.
- Mit der **Warnung vor Ablauf** (beta) erneuerst du Fläschchen und Elixiere, bevor sie auslaufen.
- **Weitere Buffs nur in Instanzen** gilt auch für Fläschchen und Elixiere.

## Kochkunst: Buff-Essen
- Hak Satt im Tab **Weitere Buffs** an. Erkannt wird jedes Essen, das „Satt“ gibt.
- Der Linksklick isst das beste Essen: Favoriten zuerst, dann Essen mit Erfahrungsbonus (solange du noch Erfahrung bekommst), dann das Essen, dessen Werte am besten zu deiner Klasse passen, dann der größere Stapel. Angeboten wird nur Essen, für das deine Stufe reicht.
- Rechtsklick zeigt **Essen in den Taschen** mit der Kategorie jedes Essens (z. B. **Ausdauer**, **Willenskraft**, **Beruf**), einem **XP**-Abzeichen für Essen mit Erfahrungsbonus und der Zeile, die der Linksklick nehmen würde, als **beste Wahl**.
- Während du isst, zählt die Erinnerung herunter – **Isst … s**, dann **Gleich satt …** – mit dem Hinweis **Sitzen bleiben**.

<!-- screenshot: Menü "Essen in den Taschen" mit XP-Abzeichen -->

## Schmiedekunst und Verzauberkunst: Steine und Öle
- Mit **Steine, Öle, Gifte per Klick** (beta) erscheinen die Zeilen **Waffe (Haupthand): Stein/Öl** und **Waffe (Nebenhand): Stein/Öl**, wenn eine Waffe keine temporäre Verbesserung hat und du ein passendes Item dabei hast.
- Wetzsteine passen auf Klingenwaffen (Äxte, Schwerter, Stangenwaffen, Dolche), Gewichtssteine auf stumpfe Waffen (Streitkolben, Stäbe). Elementarer und Geweihter Wetzstein passen auf beide. Zauber- und Manaöle passen auf jede Waffe; Faustwaffen nehmen nur Öle. Items über deiner Stufe werden übersprungen.
- Rechtsklick zeigt **Steine & Öle in den Taschen** mit ★-Favoriten.
- Schamanen nutzen stattdessen ihre Waffenverzauberungen; Schurken bekommen diese Zeilen nur, solange ihre Gift-Erinnerung aus ist.

## Erste Hilfe und Handwerks-Reagenzien: Eigene Items
- Trag jedes Item unter **Eigene Items** im Tab **Vorräte** ein: Klick auf **Item hinzufügen:**, dann das Item per Shift-Klick wählen oder auf das Feld ziehen. Bis zu 20 Items pro Charakter, jedes mit **Min.**, **Kritisch** und **Auffüllen**. **Gezählt werden nur Items in den Taschen.**
- Erste Hilfe: Trag deine Verbände ein, dann wirst du gewarnt, bevor der letzte weg ist.
- Handwerker: Trag die Reagenzien ein, die du ständig kaufst – z. B. Kristallphiole (Alchemie), Seidenfaden (Schneiderei, Lederverarbeitung), Starkes Flussmittel (Schmiedekunst), Salz (Lederverarbeitung) oder Scharfe Gewürze (Kochkunst).
- Mit **Beim Händler auffüllen** (beta) geht beim Handwerkswarenhändler das Fenster **Auffüllen** auf und füllt sie mit einem Klick auf **Kaufen** bis **Auffüllen** auf.

::: tip Empfohlene Einstellung
Trag die Reagenzien deines täglichen Handwerks unter **Eigene Items** ein und hak **Auch oberhalb der Mindestmenge auffüllen** an – jeder Besuch beim Handwerkswarenhändler füllt dich auf.
:::

<!-- screenshot: Tab Vorräte mit eigenen Items und Fenster Auffüllen beim Handwerkswarenhändler -->

## Ingenieurskunst, Lederverarbeitung, Schneiderei, Kürschnerei
Für diese Berufe gibt es keine eigene Erinnerung. Für ihre Reagenzien nutzt du **Eigene Items** wie oben beschrieben.

Siehe auch: [Funktionen: Weitere Buffs](./features#weitere-buffs) · [Funktionen: Vorräte](./features#vorrate) · [Klassen](./classes/)
