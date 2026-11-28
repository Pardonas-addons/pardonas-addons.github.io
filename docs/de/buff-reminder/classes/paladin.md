---
description: "Buff Reminder für Paladine: prüft Aura, Siegel und Segen, zaubert per Klick den zuletzt genutzten und hilft im Schlachtzug mit den Großen Segen."
---

# Paladin

<ClassHeader cls="paladin" />

Paladine jonglieren mit Aura, Siegel und Segen – und im Schlachtzug mit Großen Segen für alle. Der Buff Reminder behält alle drei im Blick und zaubert mit einem Klick den, den du nutzt.

Funktionen mit <Badge type="warning" text="beta" /> sind experimentell: in Beta-Versionen an, in Releases standardmäßig aus – siehe [Versionen](../#versionen).

## Auf einen Blick
| Erinnerung | Erscheint, wenn | Linksklick | Tab |
|---|---|---|---|
| **Aura** | keine Aura aktiv ist | zaubert die zuletzt genutzte | **Klassenbuffs** |
| **Siegel** | kein Siegel aktiv ist | zaubert das zuletzt genutzte | **Klassenbuffs** |
| **Segen** | kein Segen auf dir liegt | zaubert den zuletzt genutzten | **Klassenbuffs** |
| Zorn der Gerechtigkeit | er dir fehlt (standardmäßig aus) | zaubert ihn | **Klassenbuffs** |
| Großer Segen <Badge type="warning" text="beta" /> | Gruppen- oder Schlachtzugsmitgliedern fehlt dein Segen | Großer Segen auf einen von ihnen | **Gruppe** |
| Symbole | weniger als **Min.** in den Taschen | außerhalb von Städten: in der nächsten Stadt erinnern; beim Händler: auffüllen | **Vorräte** |

## Klassenbuffs
- **Aura:** Andacht, Vergeltung, Konzentration, Schatten-, Frost- und Feuerwiderstand, Kreuzfahrer.
- **Siegel:** Rechtschaffenheit, Befehl, Licht, Weisheit, Gerechtigkeit, Kreuzfahrer (spätere Siegel nur, wenn das Spiel sie kennt).
- **Segen:** Macht, Weisheit, Könige, Refugium. Ein Großer Segen zählt ebenfalls.
- Der Linksklick zaubert die zuletzt genutzte Variante – das Addon merkt sie sich pro Charakter, sobald du eine selbst zauberst. Mit dem **Variantenmenü per Rechtsklick** wählst du eine andere; die aktuelle ist als **zuletzt genutzt** markiert.
- Zorn der Gerechtigkeit ist zum Tanken da und deshalb standardmäßig aus.

## Gruppe <Badge type="warning" text="beta" />
Mit **Segen des Paladins in Gruppenbuffs** prüft das Addon deinen Segen auf allen Gruppen- und Schlachtzugsmitgliedern und zaubert den passenden Großen Segen auf jemanden, dem er fehlt. **Aus, solange Pally Power geladen ist** – dann übernimmt Pally Power die Segen.

## Vorräte
| Reagenz | Wofür | Ab Stufe | Min. | Auffüllen |
|---|---|---|---|---|
| Symbol der Könige | Große Segen | 52 | 10 | 20 |
| Symbol der Göttlichkeit | Göttliches Eingreifen | 30 | 10 | 20 |

::: tip Empfohlene Einstellung
Zauber nach dem Einloggen einmal deine übliche Aura, dein Siegel und deinen Segen – ab dann wissen Linksklick und Taste, was du willst. Im Schlachtzug setz **Min.** für Symbol der Könige auf einen Stapel.
:::

<DocShot src="/shots/br/c04-paladin-aura-menu.png" alt="Rechtsklick-Menü mit allen Auren" :width="360" :height="448" />

Siehe auch: [Rechtsklick-Menü](../features#rechtsklick-menu) · [Gruppen-Buffs](../features#gruppe-priester-magier-druide-paladin)
