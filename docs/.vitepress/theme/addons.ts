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

/**
 * A screenshot under docs/public/shots/. `src` is given without base path;
 * ShotFrame.vue resolves it with withBase.
 */
export interface Shot {
  /** Path below docs/public/, e.g. '/shots/br-list-menu.png'. */
  src: string
  /** Intrinsic size in pixels; sets the aspect ratio and avoids layout shift. */
  width: number
  height: number
  /**
   * 'fill' (default): the frame takes the image's aspect ratio and the image fills it.
   * 'center': the frame stays 16:10 and the image sits centred at natural size on the dark scene.
   */
  fit?: 'fill' | 'center'
}

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
  /**
   * Full version string of the current download for structured data (SEO),
   * e.g. '0.2.0-beta1'. Defaults to `versions.stable`, then `versions.beta`.
   */
  softwareVersion?: string
  /** Handbook path without language prefix. */
  handbook: string
  /** GitHub repository of the addon (AddonHeader link and the GitHub icon in the nav bar). */
  repo: string
  /** Store links. Leave a store out when nothing is planned there yet. */
  stores: {
    curseforge?: StoreLink
    wago?: StoreLink
  }
  /** False while the addon cannot be downloaded anywhere. */
  available: boolean
  /** Screenshot for the home page showcase. Unset = mock placeholder. */
  shot?: Shot
  /**
   * Video on YouTube. The site only links to it (AddonVideo.vue, [Video] link) and never
   * embeds anything: the preview image is a local copy made with scripts/video-thumb.mjs.
   */
  video?: { youtubeId: string; thumb: Shot }
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
    versions: { stable: '1.4.1', beta: '1.5.0' },
    handbook: '/buff-reminder/',
    repo: 'https://github.com/Pardonas-addons/pardonas-buff-reminder',
    stores: {
      curseforge: 'https://www.curseforge.com/wow/addons/pardonas-buff-reminder',
      wago: 'https://addons.wago.io/addons/pardonas-buff-reminder'
    },
    available: true,
    video: { youtubeId: '-YVPeKhhIGg', thumb: { src: '/video/br-intro.jpg', width: 1280, height: 720 } },
    shot: { src: '/shots/br-list-menu.png', width: 798, height: 563, fit: 'fill' }
  },
  {
    id: 'tooltips',
    quality: 'rare',
    versions: { beta: '0.2.0' },
    softwareVersion: '0.2.0-beta1',
    handbook: '/tooltips/',
    repo: 'https://github.com/Pardonas-addons/pardonas-tooltip',
    stores: {
      curseforge: 'https://www.curseforge.com/wow/addons/pardonas-tooltips'
    },
    available: true,
    shot: { src: '/shots/tt-tooltip-compare.png', width: 796, height: 414, fit: 'fill' }
  },
  {
    id: 'ui',
    quality: 'uncommon',
    versions: { alpha: true },
    handbook: '/ui/',
    repo: 'https://github.com/Pardonas-addons/pardonas-ui',
    stores: {
      curseforge: 'soon'
    },
    available: false,
    shot: { src: '/shots/ui-minimap.png', width: 303, height: 374, fit: 'center' }
  }
]

/** Screenshots of the hero collage on the home page. */
export const homeShots = {
  buffList: { src: '/shots/br-list-hero.png', width: 424, height: 272, fit: 'fill' },
  tooltip: { src: '/shots/tt-tooltip-hero.png', width: 486, height: 296, fit: 'fill' },
  minimap: { src: '/shots/ui-minimap.png', width: 303, height: 374, fit: 'fill' }
} satisfies Record<string, Shot>

/** GitHub organisation; the nav bar icon links here outside of the addon sections. */
export const githubOrg = 'https://github.com/Pardonas-addons'

/** YouTube channel of Pardona's Addons (footer link). */
export const youtubeChannel = 'https://www.youtube.com/channel/UCWCFr4SUO5nJZWhA7UDi97A'

/** Watch page of a YouTube video (a plain link; nothing is embedded). */
export function youtubeUrl(id: string): string {
  return 'https://www.youtube.com/watch?v=' + id
}

/**
 * GitHub link for a route path (with or without language prefix): the addon's
 * repository inside its handbook section, otherwise the organisation.
 */
export function githubLinkForPath(path: string, localePrefix: string): string {
  const p = localePrefix && path.startsWith(`${localePrefix}/`) ? path.slice(localePrefix.length) : path
  return addons.find((a) => p.startsWith(a.handbook))?.repo ?? githubOrg
}

/**
 * Raw URL of each addon's CHANGELOG.md (branch develop), loaded at build time by
 * changelog.data.ts for the changelog page. Leave an addon out while it has none.
 * Kept apart from `addons` on purpose: only the build-time loader imports it, so the
 * URLs are not part of the JavaScript sent to visitors. The pages and links check
 * the loader's data instead.
 */
export const changelogSources: Partial<Record<AddonId, string>> = {
  buffReminder: 'https://raw.githubusercontent.com/Pardonas-addons/pardonas-buff-reminder/develop/CHANGELOG.md',
  tooltips: 'https://raw.githubusercontent.com/Pardonas-addons/pardonas-tooltip/develop/CHANGELOG.md'
}

/** Heading id of a version on the changelog page: "v" + version, non-alphanumerics as "-" (1.5.0-beta4 → v1-5-0-beta4). */
export function changelogAnchor(version: string): string {
  return 'v' + version.replace(/[^A-Za-z0-9]/g, '-')
}

/** Path of the addon's changelog page without language prefix and base. */
export function changelogPath(addon: Addon): string {
  return `${addon.handbook}changelog`
}

export function getAddon(id: AddonId): Addon {
  const addon = addons.find((a) => a.id === id)
  if (!addon) throw new Error(`Unknown addon id: ${id}`)
  return addon
}
