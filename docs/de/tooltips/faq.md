---
title: "FAQ – ToolTips"
description: "Antworten zu ToolTips: Lebensbalken nur in Prozent, fehlender Ressourcenbalken, Preise ohne TSM, der Ausrüstungsvergleich, die Tooltip-Position, Zurücksetzen."
---

# FAQ

## Der Lebensbalken zeigt nur einen Prozentwert

WoW Forever verbirgt viele Werte vor Addons, sogar dein eigenes aktuelles Leben. ToolTips rät
nie: Es zeigt, was das Spiel erlaubt. Der genaue Lebens-Text (aktuell / max) ist eine
**(beta)**-Funktion und erscheint nur, solange **Experimentelle Funktionen** an sind.

## Es gibt keinen Ressourcenbalken und keine Skillungs-Zeile

Beides sind **(beta)**-Funktionen. Prüfe **Experimentelle Funktionen** im Abschnitt
**Allgemein**: Bei **Aus** – oder bei **Automatisch (in Beta-Versionen an)** in einer
Release-Version – sind sie ausgeblendet. Die Skillungs-Zeile funktioniert derzeit nur für deinen
eigenen Charakter. Einheiten ohne Ressource oder mit vom Spiel verborgenem Maximalwert bekommen
keinen Ressourcenbalken.

## Keine Preise, keine Empfehlung

**Wert Entzaubern** und **Empfehlung** brauchen TradeSkillMaster. Ohne TSM steht beim Status von
ToolTips am Pardona-Minimap-Button **aktiv (ohne TSM)**. Die Zeile **Entzaubern:** mit
Materialien und Chancen funktioniert auch ohne TSM.

## Der Vergleich erscheint nur mit Shift – oder gar nicht

Prüfe **Vergleich anzeigen** im Abschnitt **Items** (**Immer**, **Nur mit Shift**, **Aus**).
Für Gegenstände, die dein Charakter nicht tragen kann, und für den gerade getragenen Gegenstand
gibt es keinen Vergleich.

## Meine Tooltips erscheinen nicht an der gewählten Position

**Position** gilt nur für Tooltips mit Standardanker, zum Beispiel Einheiten in der Spielwelt.
Tooltips von Taschenplätzen, Buttons und Aktionsleisten bleiben dort, wo das Spiel sie anzeigt.

## Der Minimap-Button ist weg

`/ptt minimap` eingeben oder **Minimap-Button anzeigen** im Abschnitt **Allgemein** anhaken. Der
Button gehört allen Pardona-Addons gemeinsam; die Einstellung gilt deshalb für alle.

## Nach dem Ausprobieren sieht alles falsch aus

`/ptt reset` (oder **Einstellungen zurücksetzen › Zurücksetzen**) stellt alle Standardwerte
wieder her.

## Ein Problem melden

Fahre mit der Maus über die betroffene Einheit oder den Gegenstand und gib dann `/ptt debug` und
`/pardona` ein. `/ptt debug` zeigt, was das Spiel ToolTips lesen lässt; `/pardona` zeigt, welche
Pardona-Addons und welche Bibliotheksversion aktiv sind. Bitte beide Ausgaben (Screenshot oder
kopierter Text) der Meldung beifügen.

## Fehlerbehebung

Wenn etwas nicht wie erwartet funktioniert, gib `/ptt debug` und `/pardona` im Chat ein und füge die Ausgabe deiner Meldung bei. Siehe [Problem melden](/de/suite/report-a-problem).
