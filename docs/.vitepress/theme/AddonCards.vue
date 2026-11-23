<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { usePardona } from './usePardona'

type Key = 'buffReminder' | 'tooltips' | 'ui'
type Stage = 'stable' | 'beta' | 'alpha'
/** A store link: a URL, 'soon' (coming soon) or 'none' (not yet released). */
type StoreLink = string | 'soon' | 'none'

interface Addon {
  key: Key
  name: string
  stage: Stage
  handbook: string
  curseforge: StoreLink
  wago: StoreLink
}

const addons: Addon[] = [
  {
    key: 'buffReminder',
    name: "Pardona's Buff Reminder",
    stage: 'stable',
    handbook: '/buff-reminder/',
    curseforge: 'https://www.curseforge.com/wow/addons/pardonas-buff-reminder',
    wago: 'https://addons.wago.io/addons/pardonas-buff-reminder'
  },
  {
    key: 'tooltips',
    name: "Pardona's ToolTips",
    stage: 'beta',
    handbook: '/tooltips/',
    curseforge: 'https://www.curseforge.com/wow/addons/pardonas-tooltips',
    wago: 'soon'
  },
  {
    key: 'ui',
    name: "Pardona's UI",
    stage: 'alpha',
    handbook: '/ui/',
    curseforge: 'none',
    wago: 'none'
  }
]

const { texts, prefix } = usePardona()
const t = computed(() => texts.value.cards)

function storeLabel(link: StoreLink): string {
  return link === 'soon' ? t.value.comingSoon : t.value.notReleased
}

function isUrl(link: StoreLink): boolean {
  return link !== 'soon' && link !== 'none'
}
</script>

<template>
  <div class="addon-cards">
    <article v-for="a in addons" :key="a.key" class="addon-card">
      <header class="addon-card-head">
        <h3 class="addon-card-name">{{ a.name }}</h3>
        <span class="addon-badge" :class="`addon-badge--${a.stage}`">{{ t.status[a.key] }}</span>
      </header>
      <p class="addon-card-desc">{{ t.description[a.key] }}</p>
      <ul class="addon-card-links">
        <li>
          <a class="addon-link addon-link--primary" :href="withBase(`${prefix}${a.handbook}`)">{{ t.handbook }}</a>
        </li>
        <li>
          <a v-if="isUrl(a.curseforge)" class="addon-link" :href="a.curseforge" target="_blank" rel="noopener">{{ t.curseforge }}</a>
          <span v-else class="addon-link addon-link--off">{{ t.curseforge }}: {{ storeLabel(a.curseforge) }}</span>
        </li>
        <li>
          <a v-if="isUrl(a.wago)" class="addon-link" :href="a.wago" target="_blank" rel="noopener">{{ t.wago }}</a>
          <span v-else class="addon-link addon-link--off">{{ t.wago }}: {{ storeLabel(a.wago) }}</span>
        </li>
      </ul>
    </article>
  </div>
</template>

<style scoped>
.addon-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.addon-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background-color: var(--pardona-card-bg);
  padding: 20px;
}

.addon-card-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.addon-card-name {
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  font-size: 18px;
  line-height: 1.4;
  color: var(--vp-c-brand-2);
}

.addon-badge {
  display: inline-block;
  border-radius: 8px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
  white-space: nowrap;
}

.addon-badge--stable {
  border: 1px solid var(--vp-c-brand-1);
  background-color: rgba(217, 173, 64, 0.18);
  color: var(--vp-c-brand-2);
}

.addon-badge--beta {
  border: 1px solid #9a6ad0;
  background-color: rgba(115, 64, 166, 0.45);
  color: var(--vp-c-text-1);
}

.addon-badge--alpha {
  border: 1px solid var(--vp-c-text-3);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.addon-card-desc {
  flex-grow: 1;
  margin: 0 0 16px !important;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
}

.addon-card-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
}

.addon-card-links li {
  margin: 0 !important;
}

.addon-link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background-color: var(--vp-button-brand-bg);
  padding: 2px 12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vp-button-brand-text) !important;
  text-decoration: none !important;
  transition: background-color 0.25s, border-color 0.25s;
}

a.addon-link:hover {
  border-color: var(--vp-c-brand-2);
  background-color: var(--vp-button-brand-hover-bg);
}

.addon-link--primary {
  background-color: rgba(217, 173, 64, 0.18);
}

.addon-link--off {
  border-style: dashed;
  border-color: var(--vp-c-divider);
  background-color: transparent;
  color: var(--vp-c-text-3) !important;
  cursor: default;
}
</style>
