import type { DefaultTheme } from 'vitepress'
import type { PardonaLocale } from './types'

// Pfad-Präfix dieser Sprache.
const p = '/de'

const sidebar: DefaultTheme.Sidebar = {
  [`${p}/buff-reminder/`]: [
    {
      text: 'Buff Reminder',
      items: [
        { text: 'Überblick', link: `${p}/buff-reminder/` },
        { text: 'Erste Schritte', link: `${p}/buff-reminder/getting-started` },
        { text: 'Funktionen', link: `${p}/buff-reminder/features` },
        { text: 'Einstellungen', link: `${p}/buff-reminder/settings` },
        { text: 'Berufe', link: `${p}/buff-reminder/professions` },
        { text: 'FAQ', link: `${p}/buff-reminder/faq` },
        { text: 'Changelog', link: `${p}/buff-reminder/changelog` }
      ]
    },
    {
      text: 'Klassen',
      collapsed: false,
      items: [
        { text: 'Überblick', link: `${p}/buff-reminder/classes/` },
        { text: 'Druide', link: `${p}/buff-reminder/classes/druid` },
        { text: 'Jäger', link: `${p}/buff-reminder/classes/hunter` },
        { text: 'Magier', link: `${p}/buff-reminder/classes/mage` },
        { text: 'Paladin', link: `${p}/buff-reminder/classes/paladin` },
        { text: 'Priester', link: `${p}/buff-reminder/classes/priest` },
        { text: 'Schurke', link: `${p}/buff-reminder/classes/rogue` },
        { text: 'Schamane', link: `${p}/buff-reminder/classes/shaman` },
        { text: 'Hexenmeister', link: `${p}/buff-reminder/classes/warlock` },
        { text: 'Krieger', link: `${p}/buff-reminder/classes/warrior` }
      ]
    }
  ],
  [`${p}/tooltips/`]: [
    {
      text: 'ToolTips (Beta)',
      items: [
        { text: 'Überblick', link: `${p}/tooltips/` },
        { text: 'Erste Schritte', link: `${p}/tooltips/getting-started` },
        { text: 'Funktionen', link: `${p}/tooltips/features` },
        { text: 'FAQ', link: `${p}/tooltips/faq` },
        { text: 'Changelog', link: `${p}/tooltips/changelog` }
      ]
    }
  ],
  [`${p}/ui/`]: [
    {
      text: 'UI (in Entwicklung)',
      items: [
        { text: 'Überblick', link: `${p}/ui/` },
        { text: 'Erste Schritte', link: `${p}/ui/getting-started` },
        { text: 'Module', link: `${p}/ui/modules` },
        { text: 'FAQ', link: `${p}/ui/faq` }
      ]
    }
  ],
  [`${p}/suite/`]: [
    {
      text: 'Suite',
      items: [
        { text: 'Überblick', link: `${p}/suite/` },
        { text: 'Minimap-Button', link: `${p}/suite/minimap-button` },
        { text: 'Einstellungen', link: `${p}/suite/settings` },
        { text: 'Diagnose', link: `${p}/suite/diagnostics` },
        { text: 'Problem melden', link: `${p}/suite/report-a-problem` }
      ]
    }
  ]
}

const de: PardonaLocale = {
  config: {
    label: 'Deutsch',
    lang: 'de-DE',
    link: '/de/',
    title: "Pardona's Addons",
    description: "Handbuch und Hilfe zu Pardona's Addons, gemacht für WoW Forever.",
    themeConfig: {
      nav: [
        { text: 'Buff Reminder', link: `${p}/buff-reminder/`, activeMatch: `^${p}/buff-reminder/` },
        { text: 'ToolTips', link: `${p}/tooltips/`, activeMatch: `^${p}/tooltips/` },
        { text: 'UI', link: `${p}/ui/`, activeMatch: `^${p}/ui/` },
        { text: 'Suite', link: `${p}/suite/`, activeMatch: `^${p}/suite/` }
      ],
      sidebar,
      outline: { level: [2, 3], label: 'Auf dieser Seite' },
      docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
      lastUpdated: { text: 'Zuletzt aktualisiert' },
      langMenuLabel: 'Sprache wechseln',
      returnToTopLabel: 'Nach oben',
      sidebarMenuLabel: 'Menü',
      darkModeSwitchLabel: 'Darstellung',
      skipToContentLabel: 'Zum Inhalt springen',
      notFound: {
        title: 'SEITE NICHT GEFUNDEN',
        quote: 'Diese Seite gibt es (noch) nicht.',
        linkLabel: 'Zur Startseite',
        linkText: 'Zur Startseite'
      },
      pardona: {
        footer: {
          legalNotice: 'Impressum',
          privacy: 'Datenschutz',
          trademark:
            "World of Warcraft ist eine Marke von Blizzard Entertainment. Pardona's Addons stehen in keiner Verbindung zu Blizzard."
        },
        placeholderShot: 'Platzhalter-Screenshot',
        shotAlt: {
          addons: {
            buffReminder: 'Warnliste des Buff Reminders mit dem Essensmenü',
            tooltips: 'Item-Tooltip mit Vergleich zum angelegten Gegenstand',
            ui: 'Minimap im Pardona-Stil'
          },
          hero: {
            buffList: 'Warnliste des Buff Reminders',
            tooltip: 'Item-Tooltip',
            minimap: 'Minimap im Pardona-Stil'
          }
        },
        changelog: { loadError: 'Der Changelog konnte beim Bauen nicht geladen werden.' },
        githubAria: 'GitHub-Repository',
        emblemAlt: 'Pardona-Emblem',
        links: {
          handbook: 'Handbuch',
          curseforge: 'CurseForge',
          wago: 'Wago',
          github: 'GitHub',
          changelog: 'Changelog',
          comingSoon: 'folgt'
        },
        versions: { stable: 'Version', beta: 'Beta', alpha: 'Alpha' },
        status: {
          buffReminder: 'Stabil + Beta',
          tooltips: 'Beta',
          ui: 'Alpha – in Entwicklung'
        },
        quality: {
          epic: 'Episch = stabil',
          rare: 'Selten = Beta',
          uncommon: 'Ungewöhnlich = Alpha'
        },
        addons: {
          buffReminder: {
            name: "Pardona's Buff Reminder",
            bind: 'Beim Installieren gebunden',
            type: 'Addon',
            slot: 'Oberfläche',
            stats: ['+3 Stile', '+1 Klick bis zum Buff', '+Ablaufwarnung'],
            equip:
              'Anlegen: Erinnert dich an fehlende Buffs, Verbrauchsgüter und Vorräte, bevor der Pull beginnt.',
            flavour: '„Niemand pullt ohne Wohlgenährt.“',
            requirement: 'Benötigt WoW Forever',
            price: 'Verkaufspreis: kostenlos'
          },
          tooltips: {
            name: "Pardona's ToolTips",
            bind: 'Beim Installieren gebunden',
            type: 'Addon',
            slot: 'Oberfläche',
            stats: ['+4 Farb-Sets', '+Ständiger Ausrüstungsvergleich', '+Entzauberungs-Infos'],
            equip: 'Anlegen: Zeigt Tooltips aufgeräumt und im Pardona-Look.',
            flavour: '„Endlich lesbar.“',
            requirement: 'Benötigt WoW Forever',
            price: 'Verkaufspreis: kostenlos'
          },
          ui: {
            name: "Pardona's UI",
            bind: 'Einzigartig',
            type: 'Addon',
            slot: 'Oberfläche',
            stats: ['+Eckige Minimap', '+Buffs & Debuffs', '+Beute-, Würfel- und Handelsfenster (in Entwicklung)'],
            equip: 'Anlegen: Kleidet Teile der Blizzard-Oberfläche im Pardona-Look ein, rein optisch.',
            flavour: '„Noch in der Schmiede.“',
            requirement: 'Noch nicht verfügbar'
          }
        },
        classes: {
          druid: {
            name: 'Druide',
            text: 'Mal der Wildnis, Dornen, Gabe der Wildnis für die Gruppe, Samen für Wiedergeburt.'
          },
          hunter: {
            name: 'Jäger',
            text: 'Aspekte, dein Tier (rufen, wiederbeleben, füttern) und Munition mit Auffüllen per Klick.'
          },
          mage: {
            name: 'Magier',
            text: 'Arkane Intelligenz, Rüstung, herbeigezaubertes Essen, Wasser und Manastein, Runen und Pulver.'
          },
          paladin: {
            name: 'Paladin',
            text: 'Aura, Siegel und Segen per Klick, Große Segen für den Schlachtzug.'
          },
          priest: {
            name: 'Priester',
            text: 'Seelenstärke, Inneres Feuer, Gebete für die Gruppe und ihre Kerzen.'
          },
          rogue: {
            name: 'Schurke',
            text: 'Gifte auf beiden Waffen, Warnung nach Zeit und Ladungen, Pulver für Verschwinden und Blenden.'
          },
          shaman: {
            name: 'Schamane',
            text: 'Schilde und Waffenverzauberungen, Ankh und Reagenzien.'
          },
          warlock: {
            name: 'Hexenmeister',
            text: 'Rüstung, Gesundheitsstein, Seelenstein, dein Dämon und Seelensplitter.'
          },
          warrior: {
            name: 'Krieger',
            text: 'Rufe, Wetz- und Gewichtssteine, Essen, Fläschchen und Tränke.'
          }
        },
        classHeaderAddon: 'Buff Reminder',
        mocks: {
          buffList: {
            title: 'Buff Reminder',
            hintShort: '3 fehlen',
            hintFull: 'Pardona-Stil',
            missing: 'fehlt',
            expiring: 'läuft ab',
            inBags: 'in der Tasche',
            arcaneIntellect: 'Arkane Intelligenz',
            wellFed: 'Wohlgenährt',
            markOfTheWild: 'Mal der Wildnis',
            sharpeningStone: 'Wetzstein (Waffe)',
            wizardOil: 'Zaubererleuchtöl',
            manaStone: 'Manastein',
            ammunition: 'Munition'
          },
          itemTooltip: {
            name: 'Stab des Leerenrufers',
            bind: 'Wird beim Aufheben gebunden',
            slot: 'Zweihand · Stab',
            stats: '+18 Intelligenz · +12 Ausdauer',
            equip: 'Anlegen: Erhöht Zauberschaden um bis zu 21.',
            sellPrice: 'Verkaufspreis: 4 g 12 s'
          },
          minimap: {
            buffReminder: 'Buff Reminder',
            move: 'Verschieben',
            demo: 'Demo',
            tooltips: 'ToolTips',
            ui: 'UI'
          },
          settings: {
            suite: "Pardona's Addons",
            buffReminder: 'Buff Reminder',
            tooltips: 'ToolTips',
            ui: 'UI',
            tabModules: 'Module',
            tabLook: 'Optik',
            minimap: 'Minimap',
            buffs: 'Buffs & Debuffs',
            loot: 'Beutefenster',
            roll: 'Würfelfenster',
            trade: 'Handelsfenster',
            beta: '(beta)'
          }
        },
        home: {
          eyebrow: 'Made for WoW Forever',
          title: ["Pardona's", 'Addons'],
          tagline:
            'Eine kleine Suite von Addons, die deine Oberfläche ordnen – jedes für sich nützlich, zusammen aus einem Guss.',
          primary: 'Zum Buff Reminder',
          secondary: 'Die Suite entdecken',
          chips: ['Ein Minimap-Button', 'Eine Einstellungsgruppe', 'Ein Look'],
          pillars: [
            {
              title: 'Jedes Addon für sich',
              text: 'Installiere nur, was du brauchst. Jedes Addon bringt alles mit und läuft allein.'
            },
            {
              title: 'Zusammen eine Suite',
              text: 'Ein gemeinsamer Minimap-Button, eine Einstellungsgruppe „Pardona\'s Addons“ – nichts doppelt.'
            },
            {
              title: 'Ein Look',
              text: 'Dunkles Violett, feiner Goldrand: Alles fühlt sich an wie aus einer Hand.'
            }
          ],
          addonsTitle: 'Die Addons',
          addonsSubline: 'Fahr mit der Maus über ein Addon – wie über ein Item in der Tasche.'
        }
      }
    }
  },
  search: {
    button: { buttonText: 'Suchen', buttonAriaLabel: 'Suchen' },
    modal: {
      displayDetails: 'Detaillierte Liste anzeigen',
      resetButtonTitle: 'Suche zurücksetzen',
      backButtonTitle: 'Suche schließen',
      noResultsText: 'Keine Ergebnisse für',
      footer: {
        selectText: 'auswählen',
        selectKeyAriaLabel: 'Eingabetaste',
        navigateText: 'navigieren',
        navigateUpKeyAriaLabel: 'Pfeil nach oben',
        navigateDownKeyAriaLabel: 'Pfeil nach unten',
        closeText: 'schließen',
        closeKeyAriaLabel: 'Escape'
      }
    }
  }
}

export default de
