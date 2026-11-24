---
title: "Einstellungen – Buff Reminder"
description: "Alle Einstellungen des Buff Reminders Tab für Tab erklärt: Anzeige, Klassenbuffs, Tier, weitere Buffs, Vorräte und Gruppe – Wirkung und Standardwert."
---

# Einstellungen

Die Einstellungen öffnest du mit `/br` oder über **Optionen › Addons › Pardona's Addons › Buff Reminder**. `/br` öffnet den zuletzt genutzten Tab.

Die Einstellungen haben bis zu sechs Tabs: **Anzeige**, **Klassenbuffs**, **Tier** (Jäger und Hexenmeister), **Weitere Buffs**, **Vorräte** und **Gruppe** (Priester, Magier, Druiden und Paladine). **Weitere Buffs** enthält alles, was als Buff aktiv bleiben soll, **Vorräte** alles, wovon du genug dabeihaben solltest.

Änderungen gelten sofort – im Kampf, sobald er vorbei ist. Buff-Auswahl, Vorräte, Elixiere, Rollen und Verfolgungen gelten pro Charakter; Aussehen, Ton und die Beta-Schalter für alle deine Charaktere.

Schalter mit <Badge type="warning" text="beta" /> sind experimentell: in Beta-Versionen an, in Releases standardmäßig aus. Die Einstellungen unter einem Schalter sind ausgegraut oder eingeklappt, solange er aus ist. Sobald du einen Schalter selbst an- oder abhakst, bleibt deine Wahl erhalten.

## Anzeige
<!-- screenshot: E01 Einstellungen, Tab Anzeige -->

| Einstellung | Wirkung | Standard |
|---|---|---|
| **Verschieben** / **Fixieren** | **Verschieben** entsperrt die Liste, dann kannst du sie ziehen; **Fixieren** sperrt sie wieder. Wie `/br move` und `/br lock`. Im Kampf nicht möglich. | fixiert |
| **Test** | Zeigt 5 Sekunden lang eine Test-Erinnerung – praktisch nach Änderungen an Stil, Größe oder Position. | – |
| **Stumm aufheben** | Hebt alle Stummschaltungen auf einmal auf (wie `/br unmute`). | – |
| **Addon aktiv** | Schaltet alle Erinnerungen ab, ohne das Addon zu deaktivieren. | an |
| **Linksklick zaubert Buff** | Linksklick zaubert den Buff oder benutzt das Item. Aus: Linksklick tut nichts, Rechtsklick schaltet nur stumm. | an |
| **Stil** | Aussehen von Liste und Menü: **Pardona**, **Classic** oder **Compact**. | Pardona |
| **Nur Icons** | Nur mit **Compact**: Icons nebeneinander, Namen im Tooltip. | aus |
| **Neue Warnungen erscheinen** | **unterhalb** oder **oberhalb** der ersten Erinnerung – die Richtung, in die die Liste wächst. | unterhalb |
| **Ton** | Spielt einmal, wenn ein Buff fehlt; beim Auswählen hörst du eine Vorschau. Töne aus LibSharedMedia erscheinen, wenn ein anderes Addon sie mitbringt. **Aus** für Stille. | Ping |
| **Größe** | 50–200 % der normalen Größe. | 100 % |
| **Deckkraft** | 30–100 %. | 100 % |
| Tastenzeile | Zeigt die Taste für **Oberste Warnung auslösen** oder **nicht belegt** und wo du sie belegst. | – |
| **Warnung vor Ablauf** <Badge type="warning" text="beta" /> | Warnt kurz bevor ein Buff ausläuft, als blasse Zeile unter den fehlenden Buffs. | an in Beta |
| **Schwelle** | Die Warnung erscheint, wenn die Restzeit – bei Giften auch die Ladungen – auf diesen Anteil fällt. 5–50 %. | 10 % |
| **Deckkraft (relativ)** | Wie blass die Ablauf-Zeile im Vergleich zur Liste ist. 20–100 %. | 50 % |

<!-- screenshot: E09 Auswahlliste Ton aufgeklappt -->

::: tip Tipp
Ändere **Stil**, **Größe** oder **Deckkraft** und klick dann auf **Test** – die Test-Erinnerung erscheint genau dort, wo deine Liste sitzt.
:::

## Klassenbuffs
<!-- screenshot: E02 Einstellungen, Tab Klassenbuffs -->

- Ein Häkchen je eigenem Buff deiner Klasse. Noch nicht gelernte Buffs sind ausgegraut mit **nicht erlernt**, **ab Stufe …** oder **Talent (ab Stufe …)**.
- Situative Buffs sind standardmäßig aus: Dornen, Zorn der Gerechtigkeit, Vampirumarmung, Schattengestalt und die Kriegerrufe.
- Magier und Hexenmeister finden hier auch ihre herbeigezauberten Items (mit **Klassen-Verbrauchsgüter**, siehe **Vorräte**), Schurken ihre Gifte, Schamanen Schild und Waffenverzauberungen.

| Einstellung | Wirkung | Standard |
|---|---|---|
| **Variantenmenü per Rechtsklick** <Badge type="warning" text="beta" /> | Rechtsklick auf eine Erinnerung mit Varianten – Aura, Siegel, Segen, Aspekt, Rüstung, Schild, Waffenverzauberung, Ruf – listet alle Varianten, die du kennst. Ein Klick zaubert sie und macht sie zur Variante des Linksklicks. | an in Beta |

Was jede Klasse im Einzelnen bekommt: siehe [Klassen](./classes/).

## Tier
<ClassTags :ids="['hunter', 'warlock']" />

Nur für Jäger und Hexenmeister; andere Klassen sehen diesen Tab nicht.

<!-- screenshot: E07 Einstellungen, Tab Tier (Jäger) -->
<!-- screenshot: E08 Einstellungen, Tab Tier (Hexenmeister) -->

| Einstellung | Wirkung | Standard |
|---|---|---|
| **Tier-Erinnerung** <Badge type="warning" text="beta" /> | Hauptschalter für alles darunter. | an in Beta |
| **Tier fehlt** (Jäger) | Erinnerung, wenn kein Tier draußen ist; Linksklick ruft es. | an |
| **Tier ist tot** (Jäger) | Erinnerung, wenn dein Tier tot ist; Linksklick belebt es wieder. | an |
| **Tier füttern** (Jäger) | Erinnerung, wenn dein Tier zufrieden oder unglücklich ist; Linksklick füttert es. | an |
| **Nur wenn unglücklich** | **Tier füttern** nur, wenn dein Tier unglücklich ist. | aus |
| **Warnen, wenn kein Tierfutter da ist** | Zeigt **Kein Tierfutter**, wenn nichts Passendes in den Taschen ist. | an |
| **Dämon fehlt** (Hexenmeister) | Erinnerung, wenn kein Dämon draußen ist; Linksklick beschwört einen. | an |
| **Dämon beschwören** | Welchen Dämon der Linksklick beschwört: **Zuletzt beschworen** oder einen bestimmten. | Zuletzt beschworen |

<!-- screenshot: E10 Auswahlliste Dämon beschwören aufgeklappt -->

## Weitere Buffs
<!-- screenshot: E03 Einstellungen, Tab Weitere Buffs, oben -->

| Einstellung | Wirkung | Standard |
|---|---|---|
| Satt, **Fläschchen**, **Ausgeruht (Schlafsack)** | Erinnerungen für Essen, Fläschchen und den Schlafsack-Buff. | aus |
| **Waffe (Haupthand): Stein/Öl**, **Waffe (Nebenhand): Stein/Öl** | Erinnerungen für Steine und Öle (brauchen **Steine, Öle, Gifte per Klick**). | an |
| **Weitere Buffs nur in Instanzen** | Essen, Fläschchen, Steine, Öle, Elixiere und Rollen nur in Dungeons und Raids. **Gilt auch für Steine, Öle, Gifte, Elixiere und Rollen; nicht für die Verfolgungs-Erinnerung.** | an |
| **Steine, Öle, Gifte per Klick** <Badge type="warning" text="beta" /> | Trägt Wetzsteine, Gewichtssteine, Öle und Schurkengifte per Klick auf. | an in Beta |
| **Elixiere** <Badge type="warning" text="beta" /> | Jedes Elixier, das du dabeihattest, erscheint in der Liste (**Elixiere aus deinen Taschen erscheinen hier.**); hak die an, die aktiv bleiben sollen. | keins angehakt |
| **Rollen** <Badge type="warning" text="beta" /> | Sechs Rollen-Arten – Beweglichkeit, Stärke, Intelligenz, Willenskraft, Ausdauer, **Schutz** – mit der Anzahl in den Taschen. Nimmt den höchsten Rang, den du lesen kannst, und überspringt eine Rolle, wenn ein Klassenbuff schon so viel gibt. | die Arten, die zu deiner Klasse passen |
| **Verfolgungs-Erinnerung** <Badge type="warning" text="beta" /> | Ein Häkchen je Verfolgung, gruppiert in **Fähigkeiten** und **Minimap**. Mehrere können gleichzeitig an sein. | Mineraliensuche, Kräutersuche, Schatzsuche (sobald gelernt) |

<!-- screenshot: E04 Einstellungen, Tab Weitere Buffs, unten (Elixiere, Rollen, Verfolgung) -->

::: tip Tipp
Lass **Weitere Buffs nur in Instanzen** beim Leveln an – Essen und Fläschchen melden sich dann nur dort, wo es zählt.
:::

## Vorräte
<!-- screenshot: E05 Einstellungen, Tab Vorräte mit eigenen Items -->

| Einstellung | Wirkung | Standard |
|---|---|---|
| **Klassen-Verbrauchsgüter** <Badge type="warning" text="beta" /> | Magier: herbeigezaubertes Wasser, Essen und Manastein. Hexenmeister: Gesundheitsstein und Seelenstein. Die Einträge selbst stehen unter **Klassenbuffs**. | an in Beta |
| **Essen/Wasser unter** | Magier: warnt, wenn herbeigezaubertes Essen oder Wasser unter diese Zahl fällt. 0–60, 0 = aus. | 20 |
| **Vorratswarnung** <Badge type="warning" text="beta" /> | Warnt, wenn Reagenzien, Munition, Seelensplitter, Tierfutter oder eigene Items knapp werden. | an in Beta |
| **Beim Händler auffüllen** <Badge type="warning" text="beta" /> | Öffnet das Fenster **Auffüllen** bei einem Händler, der einen knappen Vorrat verkauft. Ohne deinen Klick wird nichts gekauft. | an in Beta |
| **Auch oberhalb der Mindestmenge auffüllen** | Aus: nur Vorräte unter **Min.** werden angeboten. An: alles unter **Auffüllen**, bei jedem Händlerbesuch. | aus |

Unter den Schaltern: **Klicke außerhalb von Städten links auf eine Vorratswarnung, um im nächsten Erholungsgebiet erinnert zu werden.**

**Die Vorratsliste** – die Reagenzien deiner Klasse, **Munition** (Jäger), Seelensplitter (Hexenmeister) und **Tierfutter** (Jäger), jeweils mit Häkchen und drei Zahlen:

| Spalte | Bedeutung |
|---|---|
| **Min.** | Warnen, wenn du weniger dabeihast. |
| **Kritisch** | Unter dieser Menge kommt eine auf die nächste Stadt verschobene Warnung nach dem Kampf zurück; bei Munition gibt es im Kampf eine rote Warnung. Immer kleiner als **Min.**; 0 = aus. |
| **Auffüllen** | Zielmenge für das Fenster **Auffüllen** (nicht für Tierfutter). Mindestens **Min.** |

Standardwerte: Reagenzien siehe [Klassen](./classes/); **Munition** 200 / 50 / 1000; Seelensplitter 5 / 1; **Tierfutter** 20 (standardmäßig aus); eigene Items 10 / 0 / 20.

**Eigene Items** – **Item hinzufügen:** ins Feld klicken, dann ein Item per Shift-Klick wählen (Taschen, Bank, Chat-Link) oder aufs Feld ziehen. Bis zu 20 Items pro Charakter; **Entfernen** löscht eins. **Gezählt werden nur Items in den Taschen.**

::: tip Tipp
Trag die Reagenzien deines Berufs unter **Eigene Items** ein und hak **Auch oberhalb der Mindestmenge auffüllen** an – jeder Händlerbesuch füllt dich auf. Mehr unter [Berufe](./professions).
:::

## Gruppe
<ClassTags :ids="['priest', 'mage', 'druid', 'paladin']" />

Nur für Priester, Magier, Druiden und Paladine.

<!-- screenshot: E06 Einstellungen, Tab Gruppe (Priester) -->

| Einstellung | Wirkung | Standard |
|---|---|---|
| **Gruppen-Buffs** <Badge type="warning" text="beta" /> | Prüft außerhalb des Kampfes deine Gruppe oder deinen Schlachtzug auf deine Gruppenbuffs. | an in Beta |
| **Gruppen-Buffs prüfen** | Schaltet die Prüfung an oder aus, ohne den Beta-Schalter anzufassen. | an |
| **Prüfen in** | **Immer**, **Nur Dungeon & Raid** oder **Nur Raid**. | Immer |
| **Segen des Paladins in Gruppenbuffs** <Badge type="warning" text="beta" /> | Paladine: dein Segen auf jedem Mitglied, gezaubert als Großer Segen. **Aus, solange Pally Power geladen ist.** | an in Beta |

<!-- screenshot: E11 Auswahlliste Prüfen in aufgeklappt -->

## Neu anfangen
`/br reset` setzt Position und Einstellungen zurück; die Beta-Schalter gehen auf den Standard deiner Version.

Siehe auch: [Funktionen](./features) · [Erste Schritte](./getting-started) · [Klassen](./classes/)
