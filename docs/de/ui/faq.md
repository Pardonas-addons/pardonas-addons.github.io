---
title: "FAQ – Pardona's UI"
description: "Antworten zu Pardona's UI: Konflikte mit anderen Addons, „Frame nicht gefunden“, Umschalten im Kampf, Minimap-Buttons an der falschen Stelle und Fehler melden."
---

# FAQ

::: warning Hinweis
Pardona's UI ist in Entwicklung und noch nicht veröffentlicht.
:::

## Ein Teil der Oberfläche sieht falsch aus oder zwei Addons streiten sich darum

Wahrscheinlich gestaltet ein anderes Addon denselben Bereich. Schalte das passende Modul in den Einstellungen aus (`/pui`). Pardona's UI erkennt andere Addons nicht von selbst.

## Ein Modul zeigt „Frame nicht gefunden“

Die Spieloberfläche bietet diesen Bereich nicht in der erwarteten Form an. Das Modul bleibt inaktiv und ändert nichts. Bitte melde es mit der Frame-Analyse (siehe unten).

## Nach dem Umschalten im Kampf passiert nichts

Änderungen im Kampf werden nach Kampfende übernommen; bis dahin zeigt das Modul **nach Kampfende**.

## Meine Minimap-Buttons sitzen an der falschen Stelle

Buttons, die sich nach der Form der Minimap richten, wandern automatisch an den eckigen Rand. Buttons von Addons, die sich selbst anders platzieren, verschiebt Pardona's UI nicht. Schaltest du das Modul **Minimap (eckig)** aus, ist die Minimap wieder rund.

## Einen Fehler melden

1. Gib `/pardona` ein und notiere die angezeigten Zeilen (Versionen der Pardona-Suite und der Bibliothek).
2. Öffne nach Möglichkeit das betroffene Fenster und gib `/pui frames` ein – oder z. B. `/pui frames loot` nur für ein Modul.
3. Gib `/reload` ein. Die Analyse steht dann in `WTF\Account\<KONTO>\SavedVariables\PardonasUI.lua`.
4. Hänge diese Datei und die Ausgabe von `/pardona` an deine Meldung.

## Fehlerbehebung

Wenn etwas nicht wie erwartet funktioniert, gib `/pui` und `/pardona` im Chat ein und füge die Ausgabe deiner Meldung bei. Siehe [Problem melden](/de/suite/report-a-problem).
