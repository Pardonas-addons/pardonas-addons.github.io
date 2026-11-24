---
description: "Buff Reminder für Jäger: prüft Aspekt und Aura des Volltreffers, ruft, belebt und füttert dein Tier und warnt, bevor dir die Munition ausgeht."
---

# Jäger

<ClassHeader cls="hunter" />

Jäger holen am meisten aus dem Buff Reminder heraus: Aspekt, Tier und Munition sind abgedeckt – und mitten im Kampf ohne Pfeile dazustehen, ist vorbei.

Funktionen mit <Badge type="warning" text="beta" /> sind experimentell: in Beta-Versionen an, in Releases standardmäßig aus – siehe [Versionen](../#versionen).

## Auf einen Blick
| Erinnerung | Erscheint, wenn | Linksklick | Tab |
|---|---|---|---|
| Aspekt | kein Aspekt aktiv ist | zaubert den zuletzt genutzten | **Klassenbuffs** |
| Aura des Volltreffers | sie dir fehlt (Talent) | zaubert sie | **Klassenbuffs** |
| **Tier fehlt** <Badge type="warning" text="beta" /> | kein Tier draußen ist | Tier rufen | **Tier** |
| **Tier ist tot** <Badge type="warning" text="beta" /> | dein Tier tot ist | Tier wiederbeleben | **Tier** |
| **Tier füttern** <Badge type="warning" text="beta" /> | dein Tier zufrieden oder unglücklich ist | füttert das beste Futter, das es frisst | **Tier** |
| **Munition** <Badge type="warning" text="beta" /> | weniger als **Min.** der angelegten Munition | außerhalb von Städten: in der nächsten Stadt erinnern; beim Händler: auffüllen | **Vorräte** |

## Klassenbuffs
- **Aspekt** umfasst alle Aspekte, die du kennst (Falke, Affe, Gepard, Rudel, Wildnis und mehr). Der Linksklick zaubert den zuletzt genutzten; mit dem **Variantenmenü per Rechtsklick** (beta) wählst du einen anderen.
- Aura des Volltreffers ist ein Talent und erscheint erst, wenn du es gelernt hast.

## Tier <Badge type="warning" text="beta" />
- **Tier fehlt:** Linksklick ruft dein Tier. Rechtsklick bietet Tier rufen und Tier wiederbeleben.
- **Tier ist tot:** Linksklick belebt es wieder.
- **Tier füttern:** erscheint, wenn dein Tier zufrieden oder unglücklich ist; mit **Nur wenn unglücklich** nur bei unglücklich. Linksklick füttert das beste Futter, das dein Tier frisst. Rechtsklick zeigt **Tierfutter in den Taschen** – nur Futter, das dein Tier wirklich frisst – mit ★-Favoriten. Keine Erinnerung, solange dein Tier frisst, im Kampf oder beritten.
- **Kein Tierfutter:** Mit **Warnen, wenn kein Tierfutter da ist** erfährst du, wenn nichts Passendes in den Taschen ist.

## Vorräte <Badge type="warning" text="beta" />
| Vorrat | Gezählt wird | Min. | Kritisch | Auffüllen |
|---|---|---|---|---|
| **Munition** | die angelegten Pfeile oder Kugeln | 200 | 50 | 1000 |
| **Tierfutter** (standardmäßig aus) | alles, was dein Tier frisst | 20 | – | – |

- **Keine Munition angelegt**, wenn der Munitionsplatz leer ist.
- Im Kampf zählt die Munitionszeile live mit. Unter **Kritisch** kommt eine rote Warnung in der Bildschirmmitte.
- **Beim Händler auffüllen** (beta): Öffne einen Händler, der deine Munition verkauft, und das Fenster **Auffüllen** bietet an, bis **Auffüllen** aufzustocken. Klick auf **Kaufen** – automatisch wird nie etwas gekauft.

::: tip Empfohlene Einstellung
Setz **Auffüllen** für Munition auf das, was in deinen Köcher passt, plus einen Stapel, und lass **Kritisch** auf 50, damit du auch im Kampf rechtzeitig gewarnt wirst.
:::

<DocShot src="/shots/br/c02-hunter-pet-ammo.png" alt="Tier füttern und knappe Munition" :width="362" :height="122" />

Siehe auch: [Vorräte](../features#vorrate) · [Erste Schritte](../getting-started)
