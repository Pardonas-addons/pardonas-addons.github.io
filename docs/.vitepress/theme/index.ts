import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PardonaFooter from './PardonaFooter.vue'
import AddonCards from './AddonCards.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(PardonaFooter)
    })
  },
  enhanceApp({ app }) {
    app.component('AddonCards', AddonCards)
  }
} satisfies Theme
