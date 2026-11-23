# Erste Schritte

::: warning Hinweis
Pardona's UI ist in Entwicklung und noch nicht veröffentlicht.
:::

## Installation

Installiere **Pardona's UI** mit der CurseForge-App oder kopiere den Ordner `PardonasUI` nach `World of Warcraft\_forever_\Interface\AddOns`. Starte danach das Spiel neu.

Die gemeinsame Bibliothek LibPardona ist enthalten; sonst muss nichts installiert werden.

## Einstellungen

Die Einstellungen öffnest du auf einem dieser Wege:

- `/pui`
- **Esc** › **Optionen** › **Addons** › **Pardona's Addons** › **UI**
- über den Pardona-Minimap-Button oder den Addons-Knopf an der Minimap

<!-- screenshot: Einstellungsseite „UI“ unter „Pardona's Addons“ -->

Die Seite zeigt eine Zeile je Modul: ein Häkchen, eine kurze Beschreibung und den aktuellen Zustand – **aktiv**, **aus**, **Frame nicht gefunden** oder **nach Kampfende**. Module mit dem Vermerk **experimentell** sind neu und werden noch getestet.

## Module ein- und ausschalten

- Änderungen wirken sofort, `/reload` ist nicht nötig.
- Im Kampf wird eine Änderung erst nach Kampfende übernommen (Zustand **nach Kampfende**).
- In Beta-Versionen sind alle Module standardmäßig an. In Release-Versionen sind nur Module an, die im Spiel getestet wurden; deine eigene Wahl gilt immer.

## Chat-Befehle

| Befehl | Wirkung |
| --- | --- |
| `/pui` | Öffnet die Einstellungen |
| `/pui help` | Listet die Befehle auf |
| `/pui frames` | Frame-Analyse für Fehlermeldungen (siehe [FAQ](./faq)) |
| `/pardona` | Diagnose der ganzen Pardona-Suite |
