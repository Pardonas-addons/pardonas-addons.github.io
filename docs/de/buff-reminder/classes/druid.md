---
description: "Buff Reminder für Druiden: hält Mal der Wildnis und Dornen aufrecht, zaubert Gabe der Wildnis auf die Gruppe und warnt, wenn die Reagenzien dafür knapp werden."
---

# Druide

<ClassHeader cls="druid" />

Als Druide hältst du Mal der Wildnis auf dir und in der Gruppe Gabe der Wildnis auf allen. Der Buff Reminder prüft beides und sagt dir, wenn die Reagenzien knapp werden.

Funktionen mit <Badge type="warning" text="beta" /> sind experimentell: in Beta-Versionen an, in Releases standardmäßig aus – siehe [Versionen](../#versionen).

## Auf einen Blick
| Erinnerung | Erscheint, wenn | Linksklick | Tab |
|---|---|---|---|
| Mal der Wildnis | er dir fehlt | zaubert ihn (höchster Rang) | **Klassenbuffs** |
| Dornen | er dir fehlt (standardmäßig aus) | zaubert ihn | **Klassenbuffs** |
| Gabe der Wildnis <Badge type="warning" text="beta" /> | Gruppen- oder Schlachtzugsmitgliedern fehlt er | Gruppenversion auf einen von ihnen | **Gruppe** |
| Reagenzien | weniger als **Min.** in den Taschen | außerhalb von Städten: in der nächsten Stadt erinnern; beim Händler: auffüllen | **Vorräte** |

## Klassenbuffs
- Mal der Wildnis ab Stufe 1, Dornen ab Stufe 6. Dornen ist situativ und deshalb standardmäßig aus – hak es an, wenn du tankst.
- Der Linksklick zaubert immer die Einzelversion auf dich, nie Gabe der Wildnis.

## Gruppe <Badge type="warning" text="beta" />
Hak **Gruppen-Buffs** an und wähle **Prüfen in**: **Immer**, **Nur Dungeon & Raid** oder **Nur Raid**. Eine Gruppenzeile zeigt, wie vielen Spielern Mal der Wildnis fehlt. Linksklick zaubert Gabe der Wildnis auf einen von ihnen, **Strg+Linksklick** die Einzelversion.

## Vorräte
Geprüft wird nur das Reagenz deines höchsten erlernten Rangs.

| Reagenz | Wofür | Ab Stufe | Min. | Auffüllen |
|---|---|---|---|---|
| Wilde Beeren | Gabe der Wildnis (Rang 1) | 50 | 10 | 20 |
| Wilde Dornwurzel | Gabe der Wildnis (Rang 2) | 60 | 10 | 20 |
| Ahornsamen … Eisenholzsamen | Wiedergeburt (ein Samen je Rang) | 20–60 | 1 | 2 |

::: tip Empfohlene Einstellung
Hak **Gruppen-Buffs** mit **Nur Dungeon & Raid** an und setz **Min.** für deinen Wiedergeburts-Samen vor einem Raid auf 2 oder 3.
:::

<DocShot src="/shots/br/c01-druid-group.png" alt="Gruppen-Erinnerung für Mal der Wildnis" :width="362" :height="87" />

Siehe auch: [Vorräte](../features#vorrate) · [Gruppen-Buffs](../features#gruppe-priester-magier-druide-paladin)
