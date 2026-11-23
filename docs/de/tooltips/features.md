# Funktionen

## Erscheinungsbild

Abschnitt **Erscheinungsbild** in den Optionen.

- **Position** – wo Tooltips mit Standardanker erscheinen, zum Beispiel Einheiten in der
  Spielwelt: **Mauszeiger** (Standard), **Oben links**, **Oben rechts**, **Unten links**,
  **Unten rechts**, **Bildschirmmitte** oder **Blizzard-Standard**. Tooltips von
  Taschenplätzen und Buttons bleiben an ihrem Platz. **Randabstand** legt für die
  Eck-Positionen den Abstand zum Bildschirmrand fest.
- **Skalierung** – 50 % bis 200 %, auch für die Vergleichs-Tooltips.
- **Schrift** – **Friz Quadrata**, **Arial Narrow**, **Skurri** oder **Morpheus**, dazu die
  Schriften von LibSharedMedia, wenn ein anderes Addon sie mitbringt.
  **Schriftgröße: Kopfzeile** für die erste Zeile, **Schriftgröße: Text** für alle übrigen.

### Tooltip-Stil: Farb-Set

Das **Farb-Set** bestimmt Hintergrund-, Rahmen- und Textfarben des Tooltips:

| Farb-Set | Aussehen |
| --- | --- |
| **Pardona** | der Look der Pardona-Addons: dunkler Hintergrund mit feinem Goldrand (Standard) |
| **Blizzard** | das Standardaussehen des Spiels |
| **Dunkel** | fast schwarzer Hintergrund, dünner grauer Rahmen |
| **Hoher Kontrast** | schwarzer Hintergrund, weißer Rahmen, kräftige Textfarben |

**Rahmen einfärben** färbt den Rahmen nach Inhalt: Gegenstände nach Qualität, Spieler nach
Klasse, NPCs nach Reaktion (feindlich, neutral, freundlich).

<!-- screenshot: derselbe Tooltip in den vier Farb-Sets -->

## Spieler & Mobs

- **Name in Klassenfarbe**, **Gildenfarbe** und **Klassenzeile einfärben** für Spieler.
- **Lebens-Text** – der Prozentwert des Lebens auf dem Lebensbalken unter dem Tooltip.
  *Genauer Lebens-Text (beta):* zusätzlich aktuelles und maximales Leben, zum Beispiel
  `812 / 1.025 (79 %)`.
- **Ziel** – worauf die Einheit zielt; bist du es: **>> DU <<**.
- **Tempo** – aktuelles Bewegungstempo in Prozent des normalen Lauftempos, laufend aktualisiert.
- **Ressource (Mana, Wut, Energie …)** (beta) – ein zweiter Balken unter dem Lebensbalken in der
  Farbe der Ressource.
- **Itemlevel (Spieler)** – durchschnittliches Itemlevel. Andere Spieler werden außerhalb des
  Kampfes in Reichweite betrachtet.
- **Skillung (Spieler)** (beta) – der Talentbaum mit den meisten Punkten, zum Beispiel
  **Skillung:** Waffen (31/20/0). In WoW Forever derzeit nur für deinen eigenen Charakter.
- **Einstufung (Mobs)** – **(Elite)**, **(Rar)**, **(Rar-Elite)** oder **(Boss)** in der
  Stufenzeile.

<!-- screenshot: Mob-Tooltip mit Einstufung, Lebens-Text und Ressourcenbalken -->

## Items

- **Itemlevel bei Items** – Itemlevel von Ausrüstung in der Titelzeile (**iLvl 25**).
- **Vergleich anzeigen** – vergleicht tragbare Ausrüstung unter dem Tooltip mit der angelegten:
  **Immer**, **Nur mit Shift** oder **Aus**. Jeder angelegte Gegenstand bekommt einen Block
  **Statt …:** mit den veränderten Werten oder **keine Veränderung**. Blizzards eigener
  Shift-Vergleich bleibt unverändert.
- **Sammel-Hinweis für Aussehen ausblenden** – entfernt den Hinweis, dass du dieses Aussehen
  noch nicht gesammelt hast.

<!-- screenshot: Item-Tooltip mit „Statt“-Blöcken für zwei Ringe -->

## Preise & Entzauberung

Für grüne, blaue und lila Waffen und Rüstung:

- **Entzauberungs-Chancen anzeigen** – Zeile **Entzaubern:** mit den möglichen Materialien,
  Chancen und Mengen. Reicht deine Verzauberkunst nicht: **(Verzauberkunst 150 benötigt)**.
- **Wert Entzaubern anzeigen** – Zeile **Wert Entzaubern:** aus TradeSkillMaster (Preisquelle
  Destroy).
- **Empfehlung anzeigen** – Zeile **Empfehlung:** mit **Händler**, **Auktionshaus** oder
  **Entzaubern**, je nachdem, was am meisten bringt.
  - Die **AH-Gebühr** wird abgezogen (Standard 5 %).
  - Gegenstände, die sich selten verkaufen, erhalten **(AH: Ladenhüter)**; ihr
    Auktionshauswert zählt dann nicht. Die Grenzen sind **Ladenhüter: Mindest-Sale-Rate** und
    **Ladenhüter: Mindest-Verkäufe pro Tag**.

Wert und Empfehlung brauchen TradeSkillMaster. Ohne TSM steht auf der Optionsseite
„TradeSkillMaster nicht gefunden – Preise und Empfehlung sind deaktiviert.“

## Allgemein

- **Minimap-Button anzeigen** – der gemeinsame Button aller Pardona-Addons.
- **Einstellungen zurücksetzen** – Button **Zurücksetzen**, wie `/ptt reset`.

### Experimentelle Funktionen

Funktionen mit **(beta)** werden noch erprobt. Der Schalter **Experimentelle Funktionen** im
Abschnitt **Allgemein** steuert sie:

| Einstellung | Wirkung |
| --- | --- |
| **Automatisch (in Beta-Versionen an)** | Standard: in Beta-Versionen an, in Release-Versionen aus |
| **An** | immer an |
| **Aus** | immer aus |

Betroffen sind die Zeile **Skillung:**, der Ressourcenbalken und der genaue Lebens-Text. Sind
sie aus, gibt es keine Skillungs-Zeile und keinen Ressourcenbalken, und der Lebensbalken zeigt
nur den Prozentwert. Die Optionen dieser Funktionen tragen den Zusatz **(experimentell)**.
