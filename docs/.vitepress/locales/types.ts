import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

/** Texts used by the custom theme components (footer, addon cards). */
export interface PardonaTexts {
  footer: {
    legalNotice: string
    privacy: string
    trademark: string
  }
  cards: {
    handbook: string
    curseforge: string
    wago: string
    comingSoon: string
    notReleased: string
    status: {
      buffReminder: string
      tooltips: string
      ui: string
    }
    description: {
      buffReminder: string
      tooltips: string
      ui: string
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
