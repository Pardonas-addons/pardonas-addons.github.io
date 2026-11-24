import { createMarkdownRenderer, defineLoader, type SiteConfig } from 'vitepress'
import { addons, changelogAnchor, changelogSources, type AddonId } from './addons'

// Build-time data loader for the changelog pages (<Changelog id="..." />).
// Runs in Node only: fetches each addon's CHANGELOG.md (branch develop) and parses it.
// Visitors never contact GitHub; the result is baked into the built pages.

export interface ChangelogSection {
  /** "Added", "Changed", "Fixed", "Removed" (as written in the file). */
  title: string
  /** List items, rendered as inline HTML by VitePress' markdown renderer. */
  items: string[]
}

export interface ChangelogVersion {
  version: string
  /** YYYY-MM-DD */
  date: string
  isBeta: boolean
  /** Heading id, e.g. "v1-5-0-beta4". */
  anchor: string
  /** Paragraphs between the version heading and its first subsection, rendered inline. */
  notes: string[]
  sections: ChangelogSection[]
}

export interface Changelog {
  /** GitHub page of the file. (The raw URL it was loaded from stays out of the data on purpose.) */
  viewUrl: string
  versions: ChangelogVersion[]
  /** True when loading failed (local builds only; CI builds fail instead). */
  error: boolean
}

export type ChangelogData = Partial<Record<AddonId, Changelog>>

declare const data: ChangelogData
export { data }

const TIMEOUT_MS = 15_000

/** "## 1.5.0-beta4 – 2026-11-23" (en dash; a plain hyphen is accepted as well). */
const VERSION_RE = /^##\s+(\S+)\s+[–-]\s+(\d{4}-\d{2}-\d{2})\s*$/
const SECTION_RE = /^###\s+(.+?)\s*$/
const ITEM_RE = /^\s*[-*]\s+(.*)$/

type Renderer = (src: string) => string

/**
 * Parses a CHANGELOG.md. Everything before the first version heading (title, intro,
 * "## Unreleased") is dropped; so is any other "##" section without a version and date.
 * Indented lines continue the previous list item.
 */
export function parseChangelog(text: string, render: Renderer): ChangelogVersion[] {
  const versions: ChangelogVersion[] = []
  let version: ChangelogVersion | undefined
  let section: ChangelogSection | undefined
  let items: string[] = [] // raw markdown of the current section's items
  let notes: string[] = [] // raw markdown of the current version's notes

  const flushSection = () => {
    if (section) section.items = items.map(render)
    section = undefined
    items = []
  }
  const flushVersion = () => {
    flushSection()
    if (version) version.notes = notes.map(render)
    version = undefined
    notes = []
  }

  for (const line of text.replace(/\r\n?/g, '\n').split('\n')) {
    const v = VERSION_RE.exec(line)
    if (v) {
      flushVersion()
      version = {
        version: v[1],
        date: v[2],
        isBeta: /-(beta|alpha)/i.test(v[1]),
        anchor: changelogAnchor(v[1]),
        notes: [],
        sections: []
      }
      versions.push(version)
      continue
    }
    if (/^#{1,2}\s/.test(line)) {
      // Another top-level heading ("## Unreleased" or the title): skip until the next version.
      flushVersion()
      continue
    }
    if (!version) continue

    const s = SECTION_RE.exec(line)
    if (s) {
      flushSection()
      section = { title: s[1], items: [] }
      version.sections.push(section)
      continue
    }
    const item = ITEM_RE.exec(line)
    if (item && section) {
      items.push(item[1])
      continue
    }
    const textLine = line.trim()
    if (!textLine) continue
    if (section && items.length && /^\s/.test(line)) {
      items[items.length - 1] += ' ' + textLine // continuation of a list item
    } else if (!section) {
      notes.push(textLine)
    }
  }
  flushVersion()
  return versions
}

async function fetchText(url: string): Promise<string> {
  let lastError: unknown
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return await res.text()
    } catch (e) {
      lastError = e
    }
  }
  throw new Error(`${url}: ${lastError instanceof Error ? lastError.message : String(lastError)}`)
}

function viewUrlOf(repo: string): string {
  return `${repo}/blob/develop/CHANGELOG.md`
}

export default defineLoader({
  async load(): Promise<ChangelogData> {
    const config = (globalThis as { VITEPRESS_CONFIG?: SiteConfig }).VITEPRESS_CONFIG
    // Same renderer as the pages (links, code, external link target), but without raw HTML.
    const md = await createMarkdownRenderer(
      config?.srcDir ?? process.cwd(),
      { ...config?.markdown, html: false },
      config?.site.base ?? '/',
      config?.logger
    )
    const render: Renderer = (src) => md.renderInline(src, {})
    const inCI = Boolean(process.env.CI)

    const result: ChangelogData = {}
    for (const addon of addons) {
      const source = changelogSources[addon.id]
      if (!source) continue
      const entry: Changelog = {
        viewUrl: viewUrlOf(addon.repo),
        versions: [],
        error: false
      }
      try {
        const versions = parseChangelog(await fetchText(source), render)
        if (!versions.length) throw new Error(`${source}: no version heading found`)
        entry.versions = versions
      } catch (e) {
        // In CI a broken changelog must fail the build, so the old site stays online.
        if (inCI) throw new Error(`Changelog of ${addon.id} could not be loaded: ${(e as Error).message}`)
        console.warn(`[changelog] ${addon.id}: ${(e as Error).message}`)
        entry.error = true
      }
      result[addon.id] = entry
    }
    return result
  }
})
