import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// Display font, self-hosted via npm (bundled by Vite).
import '@fontsource/cinzel/400.css'
import '@fontsource/cinzel/600.css'
import '@fontsource/cinzel/700.css'
import PardonaFooter from './PardonaFooter.vue'
import HomePage from './HomePage.vue'
import ShotFrame from './ShotFrame.vue'
import OrnamentDivider from './OrnamentDivider.vue'
import AddonTooltip from './AddonTooltip.vue'
import AddonHeader from './AddonHeader.vue'
import MockBuffList from './MockBuffList.vue'
import MockItemTooltip from './MockItemTooltip.vue'
import MockMinimap from './MockMinimap.vue'
import MockSettings from './MockSettings.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(PardonaFooter)
    })
  },
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('ShotFrame', ShotFrame)
    app.component('OrnamentDivider', OrnamentDivider)
    app.component('AddonTooltip', AddonTooltip)
    app.component('AddonHeader', AddonHeader)
    app.component('MockBuffList', MockBuffList)
    app.component('MockItemTooltip', MockItemTooltip)
    app.component('MockMinimap', MockMinimap)
    app.component('MockSettings', MockSettings)
  }
} satisfies Theme
