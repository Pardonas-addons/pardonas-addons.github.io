import type { DefaultTheme, LocaleConfig } from 'vitepress'
import type { PardonaLocale, PardonaThemeConfig } from './types'
import en from './en'
import de from './de'

// One line per language. The key is the folder name under docs/
// ('root' = English at the site root).
const all: Record<string, PardonaLocale> = {
  root: en,
  de: de
}

export const locales: LocaleConfig<PardonaThemeConfig> = Object.fromEntries(
  Object.entries(all).map(([key, l]) => [key, l.config])
)

export const searchLocales: Record<string, Partial<Omit<DefaultTheme.LocalSearchOptions, 'locales'>>> =
  Object.fromEntries(Object.entries(all).map(([key, l]) => [key, { translations: l.search }]))
