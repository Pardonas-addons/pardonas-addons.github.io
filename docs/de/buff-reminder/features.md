# Funktionen

## Anzeige
- **Verschieben** / **Fixieren**, **Test**, **Stumm aufheben**
- **Addon aktiv**, **Linksklick zaubert Buff**
- **Stil:** **Pardona** (Lila und Gold), **Classic** (Stein und Gold) oder **Compact** (schmale Balken, wahlweise **Nur Icons**)
- **Neue Warnungen erscheinen:** **unterhalb** / **oberhalb**
- **Ton:** **Aus**, **Ping**, **Glocke**, **Alarm**, **Bereitschaftscheck**, **Quest abgeschlossen**, **Kartenmarkierung**, **Münzen**, **Gruppeneinladung**, **Wecker**, **Boss-Emote**, dazu LibSharedMedia-Töne, falls installiert; beim Auswählen hörst du eine Vorschau
- **Größe** und **Deckkraft** der Liste
- Die aktuelle Taste für **Oberste Warnung auslösen**
- **Warnung vor Ablauf** (beta): warnt, bevor ein Buff ausläuft. **Schwelle** legt fest, wann (Anteil an der Laufzeit des Buffs), **Deckkraft (relativ)**, wie blass die Warnung im Vergleich zur Liste ist. Läuft der Buff ab, wird die Warnung sofort zur Fehlt-Erinnerung.

<DocShotRow>
  <DocShot src="/shots/br-style-pardona.png" alt="Warnliste im Stil Pardona" :width="424" :height="563" caption="Pardona" />
  <DocShot src="/shots/br-style-classic.png" alt="Warnliste im Stil Classic" :width="424" :height="563" caption="Classic" />
  <DocShot src="/shots/br-style-compact.png" alt="Warnliste im Stil Compact" :width="328" :height="321" caption="Compact" />
</DocShotRow>

## Klassenbuffs
Alle eigenen Buffs deiner Klasse mit je einem Häkchen, z. B. Machtwort: Seelenstärke und Inneres Feuer beim Priester. Noch nicht gelernte Buffs zeigen **nicht erlernt** bzw. **ab Stufe …**, Talent-Buffs **Talent**.

## Tier (nur Jäger und Hexenmeister)
**Tier-Erinnerung** (beta): **Tier fehlt**, **Tier ist tot**, **Tier füttern** (**Nur wenn unglücklich**, **Warnen, wenn kein Tierfutter da ist**) für Jäger; **Dämon fehlt** mit **Dämon beschwören** für Hexenmeister. Details auf den Klassenseiten.

## Weitere Buffs
- Allgemeine Buffs: Satt, **Fläschchen**, **Ausgeruht (Schlafsack)**
- **Weitere Buffs nur in Instanzen**
- **Steine, Öle, Gifte per Klick** (beta): Wetzsteine, Gewichtssteine, Zauber- und Manaöle, Schurkengifte
- **Elixiere** (beta): Häkchen bei den Elixieren, die aktiv bleiben sollen – Elixiere aus deinen Taschen erscheinen in der Liste
- **Rollen** (beta): Rollen nach Wert wählen; die Erinnerung nimmt den höchsten Rang, den du benutzen kannst, und überspringt Rollen, die ein Klassenbuff schon abdeckt
- **Verfolgungs-Erinnerung** (beta): Häkchen bei jeder Verfolgung, die an bleiben soll (**Fähigkeiten** und **Minimap**) – mehrere gleichzeitig

## Vorräte
- **Klassen-Verbrauchsgüter** (beta): herbeigezaubertes Essen und Wasser (**Essen/Wasser unter**), Manastein, Gesundheitsstein, Seelenstein
- **Vorratswarnung** (beta): Reagenzien deiner Klassenzauber, **Munition** (Jäger), Seelensplitter (Hexenmeister), **Tierfutter** und **Eigene Items**. Jeder Eintrag hat **Min.** und **Kritisch**.
- Außerhalb von Städten Linksklick auf eine Vorratswarnung: Sie wartet bis zum nächsten Erholungsgebiet (Gasthaus oder Stadt), Händler oder bis zur Bank. Unter **Kritisch** kommt sie nach dem Kampf immer zurück; knappe Munition im Kampf zeigt eine rote Warnung.
- **Item hinzufügen:** ins Feld klicken, dann ein Item per Shift-Klick wählen (Taschen, Bank, Chat-Link) oder auf das Feld ziehen. **Gezählt werden nur Items in den Taschen.**

<!-- screenshot: Tab Vorräte mit eigenen Items -->

## Gruppe (Priester, Magier, Druide, Paladin)
- **Gruppen-Buffs** (beta) mit **Gruppen-Buffs prüfen** und **Prüfen in**: **Immer**, **Nur Dungeon & Raid**, **Nur Raid**
- Eine Gruppen-Erinnerung zeigt, wie vielen Spielern ein Buff fehlt. Linksklick zaubert die Gruppenversion auf einen von ihnen, **Strg+Linksklick** die Einzelversion.
- **Segen des Paladins in Gruppenbuffs** (beta) – **Aus, solange Pally Power geladen ist**

## Rechtsklick-Menü
Ein Fenster mit Icon und Titel der Erinnerung, Items oder Varianten mit Icons und Anzahl (die Zeile, die der Linksklick nehmen würde, ist als **beste Wahl** markiert, ★ markiert Favoriten), den Stumm-Knöpfen und **Anzeige verschieben**. Esc schließt es.
