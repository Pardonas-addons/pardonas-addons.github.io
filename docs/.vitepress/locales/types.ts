import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import type { ClassId } from '../theme/classes'

type AddonId = 'buffReminder' | 'tooltips' | 'ui'

/** Tooltip lines of one addon, shown as a WoW item tooltip (AddonTooltip.vue). */
export interface AddonTexts {
  name: string
  /** Bind line, e.g. "Binds when installed". */
  bind: string
  /** Left column of the type line, e.g. "Addon". */
  type: string
  /** Right column of the type line, e.g. "Interface". */
  slot: string
  /** Lines starting with "+". */
  stats: string[]
  /** Green "Equip:" line. */
  equip: string
  /** Flavour quote, including quotation marks. */
  flavour: string
  /** Requirement line (shown in red when the addon is not available). */
  requirement: string
  /** Sell price line; leave out to hide it. */
  price?: string
}

/** Texts used by the custom theme components. */
export interface PardonaTexts {
  footer: {
    legalNotice: string
    privacy: string
    trademark: string
  }
  /** Caption of a ShotFrame that shows a mock instead of a screenshot. */
  placeholderShot: string
  /** Alt texts of the screenshots (see `shot` and `homeShots` in theme/addons.ts). */
  shotAlt: {
    /** Showcase screenshot of each addon. */
    addons: Record<AddonId, string>
    /** Hero collage. */
    hero: {
      buffList: string
      tooltip: string
      minimap: string
    }
  }
  /** Changelog pages (Changelog.vue). */
  changelog: {
    /** Shown when the changelog could not be loaded during a local build. */
    loadError: string
  }
  /** aria-label of the GitHub icon in the nav bar. */
  githubAria: string
  /** Alt text of the Pardona emblem. */
  emblemAlt: string
  links: {
    handbook: string
    curseforge: string
    wago: string
    github: string
    changelog: string
    comingSoon: string
  }
  versions: {
    stable: string
    beta: string
    alpha: string
  }
  /** Status pill on the addon index pages. */
  status: Record<AddonId, string>
  /** Quality legend on the home page. */
  quality: {
    epic: string
    rare: string
    uncommon: string
  }
  addons: Record<AddonId, AddonTexts>
  /** Buff Reminder class pages: localized class name and one-line card text (ClassCards.vue). */
  classes: Record<ClassId, { name: string; text: string }>
  /** Addon name after the class name in ClassHeader.vue ("Druid · Buff Reminder"). */
  classHeaderAddon: string
  mocks: {
    buffList: {
      title: string
      hintShort: string
      hintFull: string
      missing: string
      expiring: string
      inBags: string
      arcaneIntellect: string
      wellFed: string
      markOfTheWild: string
      sharpeningStone: string
      wizardOil: string
      manaStone: string
      ammunition: string
    }
    itemTooltip: {
      name: string
      bind: string
      slot: string
      stats: string
      equip: string
      sellPrice: string
    }
    minimap: {
      buffReminder: string
      move: string
      demo: string
      tooltips: string
      ui: string
    }
    settings: {
      suite: string
      buffReminder: string
      tooltips: string
      ui: string
      tabModules: string
      tabLook: string
      minimap: string
      buffs: string
      loot: string
      roll: string
      trade: string
      beta: string
    }
  }
  home: {
    eyebrow: string
    /** Hero title, one entry per line. */
    title: string[]
    tagline: string
    primary: string
    secondary: string
    chips: string[]
    pillars: { title: string; text: string }[]
    addonsTitle: string
    addonsSubline: string
    /** "Latest updates" box (HomeNews.vue); the entries themselves stay English. */
    news: {
      title: string
      subline: string
      /** Last list entry when a version has more changes; {n} is replaced by the number. */
      more: string
      /** Link to the full changelog of the version. */
      fullChangelog: string
      /** Date format of the cards: 'iso' (2026-11-23) or 'dmy' (23.11.2026). */
      dateFormat: 'iso' | 'dmy'
    }
  }
}

export type PardonaThemeConfig = DefaultTheme.Config & { pardona: PardonaTexts }

/** Everything one language needs. One file per language in this folder. */
export interface PardonaLocale {
  /** Locale config as used by VitePress (`label`, `lang`, `link`, `title`, `description`, `themeConfig`). */
  config: LocaleSpecificConfig<PardonaThemeConfig> & { label: string; link?: string }
  /** Translations for the built-in local search UI. */
  search: Partial<DefaultTheme.LocalSearchOptions['translations']>
}
