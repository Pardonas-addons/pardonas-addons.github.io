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
        placeholderShot: 'Placeholder screenshot',
        shotAlt: {
          addons: {
            buffReminder: 'Buff Reminder warning list with the food menu',
            tooltips: 'Item tooltip with comparison to the equipped item',
            ui: 'Minimap in the Pardona style'
          },
          hero: {
            buffList: 'Buff Reminder warning list',
            tooltip: 'Item tooltip',
            minimap: 'Minimap in the Pardona style'
          }
        },
        emblemAlt: 'Pardona emblem',
        links: {
          handbook: 'Handbook',
          curseforge: 'CurseForge',
          wago: 'Wago',
          comingSoon: 'coming soon'
        },
        versions: { stable: 'Version', beta: 'Beta', alpha: 'Alpha' },
        status: {
          buffReminder: 'Stable + beta',
          tooltips: 'Beta',
          ui: 'Alpha – in development'
        },
        quality: {
          epic: 'Epic = stable',
          rare: 'Rare = beta',
          uncommon: 'Uncommon = alpha'
        },
        addons: {
          buffReminder: {
            name: "Pardona's Buff Reminder",
            bind: 'Binds when installed',
            type: 'Addon',
            slot: 'Interface',
            stats: ['+3 styles', '+1 click to buff', '+Expiry warning'],
            equip: 'Equip: Reminds you of missing buffs, consumables and supplies before the pull starts.',
            flavour: '“Nobody pulls without Well Fed.”',
            requirement: 'Requires WoW Forever',
            price: 'Sell Price: free'
          },
          tooltips: {
            name: "Pardona's ToolTips",
            bind: 'Binds when installed',
            type: 'Addon',
            slot: 'Interface',
            stats: ['+4 color sets', '+Gear comparison, always visible', '+Disenchant info'],
            equip: 'Equip: Shows tooltips tidy and in the Pardona look.',
            flavour: '“Finally readable.”',
            requirement: 'Requires WoW Forever',
            price: 'Sell Price: free'
          },
          ui: {
            name: "Pardona's UI",
            bind: 'Unique',
            type: 'Addon',
            slot: 'Interface',
            stats: ['+Square minimap', '+Buffs & debuffs', '+Loot, roll and trade windows (in development)'],
            equip: 'Equip: Dresses parts of the Blizzard interface in the Pardona look, visual only.',
            flavour: '“Still in the forge.”',
            requirement: 'Not yet available'
          }
        },
        mocks: {
          buffList: {
            title: 'Buff Reminder',
            hintShort: '3 missing',
            hintFull: 'Pardona style',
            missing: 'missing',
            expiring: 'expiring',
            inBags: 'in bags',
            arcaneIntellect: 'Arcane Intellect',
            wellFed: 'Well Fed',
            markOfTheWild: 'Mark of the Wild',
            sharpeningStone: 'Sharpening Stone (weapon)',
            wizardOil: 'Brilliant Wizard Oil',
            manaStone: 'Mana Stone',
            ammunition: 'Ammunition'
          },
          itemTooltip: {
            name: 'Staff of the Void Caller',
            bind: 'Binds when picked up',
            slot: 'Two-Hand · Staff',
            stats: '+18 Intellect · +12 Stamina',
            equip: 'Equip: Increases damage done by spells by up to 21.',
            sellPrice: 'Sell Price: 4 g 12 s'
          },
          minimap: {
            buffReminder: 'Buff Reminder',
            move: 'Move',
            demo: 'Demo',
            tooltips: 'ToolTips',
            ui: 'UI'
          },
          settings: {
            suite: "Pardona's Addons",
            buffReminder: 'Buff Reminder',
            tooltips: 'ToolTips',
            ui: 'UI',
            tabModules: 'Modules',
            tabLook: 'Look',
            minimap: 'Minimap',
            buffs: 'Buffs & debuffs',
            loot: 'Loot window',
            roll: 'Roll window',
            trade: 'Trade window',
            beta: '(beta)'
          }
        },
        home: {
          eyebrow: 'Made for WoW Forever',
          title: ["Pardona's", 'Addons'],
          tagline:
            'A small suite of addons that tidies up your interface – useful on their own, seamless together.',
          primary: 'Go to Buff Reminder',
          secondary: 'Discover the suite',
          chips: ['One minimap button', 'One settings group', 'One look'],
          pillars: [
            {
              title: 'On its own',
              text: 'Install only what you need. Every addon brings everything it needs and runs alone.'
            },
            {
              title: 'Together a suite',
              text: "One shared minimap button, one settings group “Pardona's Addons” – nothing twice."
            },
            {
              title: 'One look',
              text: 'Dark violet and a fine gold edge: everything feels like it comes from one hand.'
            }
          ],
          addonsTitle: 'The Addons',
          addonsSubline: 'Hover over an addon – just like an item in your bags.'
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
