import type { DefaultTheme } from 'vitepress'
import type { PardonaLocale } from './types'

// Path prefix of this language ('' for the root locale, '/de' for German, ...).
const p = ''

const sidebar: DefaultTheme.Sidebar = {
  [`${p}/buff-reminder/`]: [
    {
      text: 'Buff Reminder',
      items: [
        { text: 'Overview', link: `${p}/buff-reminder/` },
        { text: 'Getting started', link: `${p}/buff-reminder/getting-started` },
        { text: 'Features', link: `${p}/buff-reminder/features` },
        { text: 'Professions', link: `${p}/buff-reminder/professions` },
        { text: 'FAQ', link: `${p}/buff-reminder/faq` }
      ]
    },
    {
      text: 'Classes',
      collapsed: false,
      items: [
        { text: 'Overview', link: `${p}/buff-reminder/classes/` },
        { text: 'Druid', link: `${p}/buff-reminder/classes/druid` },
        { text: 'Hunter', link: `${p}/buff-reminder/classes/hunter` },
        { text: 'Mage', link: `${p}/buff-reminder/classes/mage` },
        { text: 'Paladin', link: `${p}/buff-reminder/classes/paladin` },
        { text: 'Priest', link: `${p}/buff-reminder/classes/priest` },
        { text: 'Rogue', link: `${p}/buff-reminder/classes/rogue` },
        { text: 'Shaman', link: `${p}/buff-reminder/classes/shaman` },
        { text: 'Warlock', link: `${p}/buff-reminder/classes/warlock` },
        { text: 'Warrior', link: `${p}/buff-reminder/classes/warrior` }
      ]
    }
  ],
  [`${p}/tooltips/`]: [
    {
      text: 'ToolTips (beta)',
      items: [
        { text: 'Overview', link: `${p}/tooltips/` },
        { text: 'Getting started', link: `${p}/tooltips/getting-started` },
        { text: 'Features', link: `${p}/tooltips/features` },
        { text: 'FAQ', link: `${p}/tooltips/faq` }
      ]
    }
  ],
  [`${p}/ui/`]: [
    {
      text: 'UI (in development)',
      items: [
        { text: 'Overview', link: `${p}/ui/` },
        { text: 'Getting started', link: `${p}/ui/getting-started` },
        { text: 'Modules', link: `${p}/ui/modules` },
        { text: 'FAQ', link: `${p}/ui/faq` }
      ]
    }
  ],
  [`${p}/suite/`]: [
    {
      text: 'Suite',
      items: [
        { text: 'Overview', link: `${p}/suite/` },
        { text: 'Minimap button', link: `${p}/suite/minimap-button` },
        { text: 'Settings', link: `${p}/suite/settings` },
        { text: 'Diagnostics', link: `${p}/suite/diagnostics` },
        { text: 'Report a problem', link: `${p}/suite/report-a-problem` }
      ]
    }
  ]
}

const en: PardonaLocale = {
  config: {
    label: 'English',
    lang: 'en-US',
    title: "Pardona's Addons",
    description: "Handbook and help for Pardona's Addons, made for WoW Forever.",
    themeConfig: {
      nav: [
        { text: 'Buff Reminder', link: `${p}/buff-reminder/`, activeMatch: `^${p}/buff-reminder/` },
        { text: 'ToolTips', link: `${p}/tooltips/`, activeMatch: `^${p}/tooltips/` },
        { text: 'UI', link: `${p}/ui/`, activeMatch: `^${p}/ui/` },
        { text: 'Suite', link: `${p}/suite/`, activeMatch: `^${p}/suite/` }
      ],
      sidebar,
      outline: { level: [2, 3], label: 'On this page' },
      docFooter: { prev: 'Previous page', next: 'Next page' },
      lastUpdated: { text: 'Last updated' },
      langMenuLabel: 'Change language',
      returnToTopLabel: 'Return to top',
      sidebarMenuLabel: 'Menu',
      darkModeSwitchLabel: 'Appearance',
      skipToContentLabel: 'Skip to content',
      notFound: {
        title: 'PAGE NOT FOUND',
        quote: 'This page does not exist (yet).',
        linkLabel: 'Go to home',
        linkText: 'Take me home'
      },
      pardona: {
        footer: {
          legalNotice: 'Legal notice',
          privacy: 'Privacy',
          trademark:
            "World of Warcraft is a trademark of Blizzard Entertainment. Pardona's Addons are not affiliated with Blizzard."
        },
        cards: {
          handbook: 'Handbook',
          curseforge: 'CurseForge',
          wago: 'Wago',
          comingSoon: 'coming soon',
          notReleased: 'not yet released',
          status: {
            buffReminder: 'Stable + beta',
            tooltips: 'Beta',
            ui: 'Alpha / in development'
          },
          description: {
            buffReminder: 'Reminds you of missing buffs and supplies.',
            tooltips: 'Tooltip improvements in the Pardona style.',
            ui: 'Restyles parts of the Blizzard interface in the Pardona look, visual only.'
          }
        }
      }
    }
  },
  search: {
    button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
    modal: {
      displayDetails: 'Display detailed list',
      resetButtonTitle: 'Reset search',
      backButtonTitle: 'Close search',
      noResultsText: 'No results for',
      footer: {
        selectText: 'to select',
        selectKeyAriaLabel: 'enter',
        navigateText: 'to navigate',
        navigateUpKeyAriaLabel: 'up arrow',
        navigateDownKeyAriaLabel: 'down arrow',
        closeText: 'to close',
        closeKeyAriaLabel: 'escape'
      }
    }
  }
}

export default en
