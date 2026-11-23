/**
 * Single source of truth for the addons shown on the site.
 * Versions, store links and screenshots are maintained here; all texts
 * (names, tooltip lines, status labels) live in the locale files under
 * `themeConfig.pardona`.
 */

export type AddonId = 'buffReminder' | 'tooltips' | 'ui'

/** WoW item quality, used to show maturity: epic = stable, rare = beta, uncommon = alpha. */
export type Quality = 'epic' | 'rare' | 'uncommon'

/** A store link: a URL, or 'soon' when a release there is planned but not live yet. */
export type StoreLink = string | 'soon'

export interface Addon {
  id: AddonId
  quality: Quality
  versions: {
    /** Current stable release, if any. */
    stable?: string
    /** Current beta release, if any. */
    beta?: string
    /** True while the addon is in alpha (no public version yet). */
    alpha?: boolean
  }
  /** Handbook path without language prefix. */
  handbook: string
  /** Store links. Leave a store out when nothing is planned there yet. */
  stores: {
    curseforge?: StoreLink
    wago?: StoreLink
  }
  /** False while the addon cannot be downloaded anywhere. */
  available: boolean
  /** Screenshot under docs/public/shots/, e.g. '/shots/buff-reminder.png'. Unset = mock placeholder. */
  shot?: string
}

export const qualityColors: Record<Quality, string> = {
  epic: '#a335ee',
  rare: '#2f8fff',
  uncommon: '#1eff00'
}

export const addons: Addon[] = [
  {
    id: 'buffReminder',
    quality: 'epic',
    versions: { stable: '1.4.0', beta: '1.5.0' },
    handbook: '/buff-reminder/',
    stores: {
      curseforge: 'https://www.curseforge.com/wow/addons/pardonas-buff-reminder',
      wago: 'https://addons.wago.io/addons/pardonas-buff-reminder'
    },
    available: true
  },
  {
    id: 'tooltips',
    quality: 'rare',
    versions: { beta: '0.2.0' },
    handbook: '/tooltips/',
    stores: {
      curseforge: 'https://www.curseforge.com/wow/addons/pardonas-tooltips',
      wago: 'soon'
    },
    available: true
  },
  {
    id: 'ui',
    quality: 'uncommon',
    versions: { alpha: true },
    handbook: '/ui/',
    stores: {
      curseforge: 'soon'
    },
    available: false
  }
]

export function getAddon(id: AddonId): Addon {
  const addon = addons.find((a) => a.id === id)
  if (!addon) throw new Error(`Unknown addon id: ${id}`)
  return addon
}
