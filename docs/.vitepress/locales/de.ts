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
        { text: 'Berufe', link: `${p}/buff-reminder/professions` },
        { text: 'FAQ', link: `${p}/buff-reminder/faq` }
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
        { text: 'FAQ', link: `${p}/tooltips/faq` }
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
        cards: {
          handbook: 'Handbuch',
          curseforge: 'CurseForge',
          wago: 'Wago',
          comingSoon: 'folgt',
          notReleased: 'noch nicht veröffentlicht',
          status: {
            buffReminder: 'Stabil + Beta',
            tooltips: 'Beta',
            ui: 'Alpha / in Entwicklung'
          },
          description: {
            buffReminder: 'Erinnert dich an fehlende Buffs und Verbrauchsgüter.',
            tooltips: 'Verbesserte Tooltips im Pardona-Stil.',
            ui: 'Gestaltet Teile der Blizzard-Oberfläche im Pardona-Look um, rein optisch.'
          }
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
