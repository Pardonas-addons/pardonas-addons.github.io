import { defineConfig, type MarkdownRenderer } from 'vitepress'
import { locales, searchLocales } from './locales'

/** Puts a small <OrnamentDivider> right after every H1 of the Markdown pages. */
function ornamentAfterH1(md: MarkdownRenderer) {
  md.core.ruler.push('pardona_ornament_after_h1', (state) => {
    const tokens = state.tokens
    for (let i = tokens.length - 1; i >= 0; i--) {
      const t = tokens[i]
      if (t.type === 'heading_close' && t.tag === 'h1' && t.level === 0) {
        const divider = new state.Token('html_block', '', 0)
        divider.content = '<OrnamentDivider size="small" align="start" class="h1-ornament" />\n'
        tokens.splice(i + 1, 0, divider)
      }
    }
  })
}

// Site-wide settings. Everything language-specific lives in ./locales/<code>.ts.
export default defineConfig({
  srcDir: '.',
  base: '/',
  cleanUrls: true,
  lastUpdated: false,
  appearance: 'force-dark',

  title: "Pardona's Addons",

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/pardona.svg' }]],

  locales,

  markdown: {
    // External links in Markdown open in a new tab.
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
    config: (md) => {
      md.use(ornamentAfterH1)
    }
  },

  themeConfig: {
    logo: { src: '/pardona.svg', alt: "Pardona's Addons" },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Pardonas-addons' }],
    search: {
      provider: 'local',
      options: { locales: searchLocales }
    }
    // No `footer` here on purpose: the footer is rendered by
    // theme/PardonaFooter.vue on every page (the default one only shows on
    // pages without a sidebar).
  }
})
