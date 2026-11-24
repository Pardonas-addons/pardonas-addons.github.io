import type { HeadConfig, PageData, SiteConfig } from 'vitepress'
import { addons, type AddonId } from './theme/addons'
import en from './locales/en'
import de from './locales/de'

// Search-engine and link-preview tags: canonical URL, hreflang alternates,
// Open Graph / Twitter cards and JSON-LD. Used by transformHead and the
// sitemap in config.ts. Page descriptions come from each page's frontmatter.

export const hostname = 'https://pardonas-addons.de'
export const siteName = "Pardona's Addons"
export const titleTemplate = `:title | ${siteName}`

const ogImage = `${hostname}/og/pardona-og.png`

type Lang = 'en' | 'de'

const langs: Record<Lang, { ogLocale: string; htmlLang: string; imageAlt: string; texts: typeof en }> = {
  en: {
    ogLocale: 'en_US',
    htmlLang: en.config.lang ?? 'en-US',
    imageAlt: "Pardona's Addons – Buff Reminder, ToolTips and UI for WoW Forever",
    texts: en
  },
  de: {
    ogLocale: 'de_DE',
    htmlLang: de.config.lang ?? 'de-DE',
    imageAlt: "Pardona's Addons – Buff Reminder, ToolTips und UI für WoW Forever",
    texts: de
  }
}

/**
 * Turns a source path ('buff-reminder/index.md', 'de/faq.md') into the URL path
 * as served with cleanUrls ('/buff-reminder/', '/de/faq'), without language prefix.
 */
function splitPath(relativePath: string): { lang: Lang; path: string } {
  let p = relativePath.replace(/\\/g, '/').replace(/\.md$/, '')
  let lang: Lang = 'en'
  if (p === 'de/index' || p.startsWith('de/')) {
    lang = 'de'
    p = p.slice(3)
  }
  if (p === 'index') p = ''
  else if (p.endsWith('/index')) p = p.slice(0, -'index'.length)
  return { lang, path: `/${p}` }
}

const urlFor = (lang: Lang, path: string) => `${hostname}${lang === 'de' ? '/de' : ''}${path}`

/** Sitemap: EN/DE alternates for every item, 404 left out. */
export function sitemapItems<T extends { url: string; links?: { lang: string; url: string }[] }>(items: T[]): T[] {
  return items
    .filter((item) => !/(^|\/)404(\.html)?$/.test(item.url))
    .map((item) => {
      const url = item.url.replace(/^\//, '')
      const path = '/' + (url.startsWith('de/') ? url.slice(3) : url === 'de' ? '' : url)
      return {
        ...item,
        links: [
          { lang: 'en', url: urlFor('en', path) },
          { lang: 'de', url: urlFor('de', path) },
          { lang: 'x-default', url: urlFor('en', path) }
        ]
      }
    })
}

/** Handbook path of an addon page that gets SoftwareApplication data, if any. */
function addonForPath(path: string): AddonId | undefined {
  // Only released addons (Pardona's UI is not released yet).
  return addons.find((a) => a.available && a.handbook === path && a.stores.curseforge?.startsWith('https://'))?.id
}

export function seoHead(pageData: PageData, site: SiteConfig): HeadConfig[] {
  if (pageData.isNotFound || pageData.relativePath === '404.md') return []

  const { lang, path } = splitPath(pageData.relativePath)
  const other: Lang = lang === 'en' ? 'de' : 'en'
  const l = langs[lang]
  const canonical = urlFor(lang, path)

  const fm = pageData.frontmatter
  const rawTitle = fm.title ?? pageData.title ?? siteName
  const title = fm.titleTemplate === false ? rawTitle : titleTemplate.replace(':title', rawTitle)
  const description: string =
    fm.description ?? pageData.description ?? l.texts.config.description ?? site.site.description

  const head: HeadConfig[] = [
    ['link', { rel: 'canonical', href: canonical }],
    ['link', { rel: 'alternate', hreflang: 'en', href: urlFor('en', path) }],
    ['link', { rel: 'alternate', hreflang: 'de', href: urlFor('de', path) }],
    ['link', { rel: 'alternate', hreflang: 'x-default', href: urlFor('en', path) }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: siteName }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: canonical }],
    ['meta', { property: 'og:locale', content: l.ogLocale }],
    ['meta', { property: 'og:locale:alternate', content: langs[other].ogLocale }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: l.imageAlt }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: ogImage }]
  ]

  let jsonLd: Record<string, unknown> | undefined
  if (path === '/') {
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: canonical,
      inLanguage: l.htmlLang
    }
  } else {
    const id = addonForPath(path)
    if (id) {
      const addon = addons.find((a) => a.id === id)!
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: l.texts.config.themeConfig?.pardona.addons[id].name,
        description,
        applicationCategory: 'GameApplication',
        operatingSystem: 'Windows, macOS',
        softwareVersion: addon.softwareVersion ?? addon.versions.stable ?? addon.versions.beta,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
        url: canonical,
        downloadUrl: addon.stores.curseforge,
        author: { '@type': 'Person', name: 'Pardona' },
        inLanguage: l.htmlLang
      }
    }
  }
  if (jsonLd) head.push(['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)])

  return head
}
