import { defineConfig } from 'vitepress'
import { locales, searchLocales } from './locales'

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
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' }
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
