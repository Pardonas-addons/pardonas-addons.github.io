import { nextTick } from 'vue'
import { inBrowser, type Router } from 'vitepress'

// Umami Cloud (EU region). Set WEBSITE_ID to '' to switch the statistics off.
// Any change here must be reflected in the privacy policy (docs/privacy.md, docs/de/privacy.md).
const WEBSITE_ID = 'd3e5070c-7500-46b2-b904-ad8a3c4fefa4'
const ENDPOINT = 'https://gateway.umami.is/api/send'
const HOSTS = ['pardonas-addons.de', 'www.pardonas-addons.de']

/** True when the visitor asked not to be tracked (Do Not Track or Global Privacy Control). */
function optedOut(): boolean {
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean }
  const win = window as Window & { doNotTrack?: string }
  return nav.doNotTrack === '1' || win.doNotTrack === '1' || nav.globalPrivacyControl === true
}

/**
 * First-party page view statistics for Umami Cloud, without loading Umami's script.
 *
 * - Runs only in the browser and only on HOSTS, so dev, preview and forks never send anything.
 *   Sends nothing when Do Not Track or Global Privacy Control is on, or when WEBSITE_ID is empty.
 * - No cookies and no browser storage of any kind; nothing stored is read. The only state lives
 *   in memory: the last sent URL and the `cache` token Umami returns (sent back as `x-umami-cache`).
 * - Posts the same request as Umami's own tracker (`type: 'event'` with website, hostname, screen,
 *   language, title, url, referrer) to ENDPOINT with `keepalive` and without credentials.
 * - One page view on the initial load and one after every client-side route change (both come
 *   from the router's `onAfterRouteChange`, which VitePress also calls for the first page).
 *   `url` is path + query: hash changes alone do not count and the same URL is never sent twice
 *   in a row. The view is sent after `nextTick` plus a macrotask, so `title` is the new page's.
 * - `referrer` is `document.referrer` on the first view (empty when it is this site itself) and
 *   empty on later client-side navigations.
 * - If Umami answers `disabled: true`, nothing more is sent until the page is reloaded.
 *   All errors are swallowed silently; the page never breaks and nothing is logged.
 *
 * Call it once from `enhanceApp({ router })`. An existing route-change handler is kept and runs first.
 */
export function setupAnalytics(router: Router): void {
  if (!inBrowser || !WEBSITE_ID) return

  let lastUrl: string | undefined
  let cache: string | undefined
  let disabled = false
  let firstView = true

  function initialReferrer(): string {
    try {
      const ref = document.referrer
      if (!ref || new URL(ref).origin === location.origin) return ''
      return ref
    } catch {
      return ''
    }
  }

  async function send(): Promise<void> {
    try {
      if (disabled || !HOSTS.includes(location.hostname) || optedOut()) return

      const url = location.pathname + location.search
      if (url === lastUrl) return
      lastUrl = url

      const referrer = firstView ? initialReferrer() : ''
      firstView = false

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'x-umami-website-id': WEBSITE_ID,
        'x-umami-hostname': location.hostname
      }
      if (cache) headers['x-umami-cache'] = cache

      const res = await fetch(ENDPOINT, {
        method: 'POST',
        keepalive: true,
        credentials: 'omit',
        headers,
        body: JSON.stringify({
          type: 'event',
          payload: {
            website: WEBSITE_ID,
            hostname: location.hostname,
            screen: `${screen.width}x${screen.height}`,
            language: navigator.language,
            title: document.title,
            url,
            referrer
          }
        })
      })

      const data: unknown = await res.json().catch(() => undefined)
      if (data && typeof data === 'object') {
        const d = data as { cache?: unknown; disabled?: unknown }
        if (typeof d.cache === 'string' && d.cache) cache = d.cache
        if (d.disabled === true) disabled = true
      }
    } catch {
      // Statistics must never affect the page.
    }
  }

  /** Waits until VitePress has rendered the new page and updated document.title. */
  function sendAfterRender(): void {
    nextTick(() => setTimeout(() => void send(), 0)).catch(() => {})
  }

  // VitePress calls onAfterRouteChange ?? onAfterRouteChanged (deprecated); keep whichever is set.
  const previous = router.onAfterRouteChange ?? router.onAfterRouteChanged
  router.onAfterRouteChange = async (to: string) => {
    try {
      await previous?.(to)
    } finally {
      sendAfterRender()
    }
  }
}
