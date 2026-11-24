<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { addons, changelogPath, qualityColors } from './addons'
import { data as changelogs } from './changelog.data'
import { usePardona } from './usePardona'

/**
 * "Latest updates": the two newest versions across all addons, from the changelog data
 * loaded at build time (changelog.data.ts). Sorted by date, newest first; on the same date
 * the changelog file order (newer entry first) and then the order of `addons` decide.
 * Addons whose changelog could not be loaded are skipped; without entries nothing renders.
 */
const SHOWN = 2
const LIST_ITEMS = 3

const { texts, prefix } = usePardona()
const news = computed(() => texts.value.home.news)

const cards = computed(() => {
  const entries = addons.flatMap((addon) => {
    const log = changelogs[addon.id]
    if (!log || log.error) return []
    return log.versions.map((v) => ({ addon, v }))
  })
  // Array.prototype.sort is stable: equal dates keep addon order, then file order.
  entries.sort((a, b) => (a.v.date < b.v.date ? 1 : a.v.date > b.v.date ? -1 : 0))
  return entries.slice(0, SHOWN).map(({ addon, v }) => ({
    key: `${addon.id}-${v.anchor}`,
    name: texts.value.addons[addon.id].name,
    color: qualityColors[addon.quality],
    version: v.version,
    pill: v.isBeta ? { label: 'beta', color: qualityColors.rare } : { label: 'stable', color: qualityColors.epic },
    date: formatDate(v.date),
    items: v.summary.slice(0, LIST_ITEMS),
    more: v.total > LIST_ITEMS ? news.value.more.replace('{n}', String(v.total - LIST_ITEMS)) : '',
    href: withBase(`${prefix.value}${changelogPath(addon)}#${v.anchor}`)
  }))
})

function formatDate(iso: string): string {
  if (news.value.dateFormat !== 'dmy') return iso
  const [y, m, d] = iso.split('-')
  return `${d}.${m}.${y}`
}
</script>

<template>
  <section v-if="cards.length" class="home-news">
    <h2 class="home-news-title">{{ news.title }}</h2>
    <p class="home-news-subline">{{ news.subline }}</p>

    <div class="home-news-grid">
      <article v-for="c in cards" :key="c.key" class="news-card" :style="{ '--q': c.color }">
        <div class="news-head">
          <img class="news-logo" :src="withBase('/pardona.svg')" alt="" aria-hidden="true" width="30" height="30" />
          <span class="news-name">{{ c.name }}</span>
        </div>
        <div class="news-meta">
          <span class="news-version">{{ c.version }}</span>
          <span class="news-pill" :style="{ '--p': c.pill.color }">{{ c.pill.label }}</span>
          <span class="news-date">{{ c.date }}</span>
        </div>
        <!-- Summary entries are English in every language, like the changelogs. -->
        <ul class="news-list">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <li v-for="(item, i) in c.items" :key="i" lang="en" v-html="item" />
          <li v-if="c.more" class="news-more">{{ c.more }}</li>
        </ul>
        <a class="news-link" :href="c.href">{{ news.fullChangelog }}</a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.home-news {
  max-width: 1180px;
  margin: 0 auto 72px;
  padding: 56px 24px 0;
}

/* Same as the "The Addons" heading in HomeAddons.vue. */
.home-news-title {
  margin: 0 0 10px;
  font-family: var(--pardona-font-display);
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  color: #ffd140;
}

.home-news-subline {
  margin: 0 0 40px;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  color: #a894c2;
}

.home-news-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;
}

@media (min-width: 768px) {
  .home-news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.news-card {
  display: flex;
  flex-direction: column;
  padding: 18px 20px 16px;
  border: 1px solid rgba(217, 173, 64, 0.55);
  border-top: 3px solid var(--q);
  border-radius: 10px;
  background: linear-gradient(rgba(51, 23, 76, 0.85), rgba(20, 8, 33, 0.9));
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
}

.news-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.news-logo {
  flex: none;
  width: 30px;
  height: 30px;
  padding: 2px;
  border: 1px solid var(--q);
  border-radius: 6px;
  background: #1a0b2a;
}

.news-name {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--q);
}

.news-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 10px;
  margin-bottom: 12px;
}

.news-version {
  font-size: 15px;
  font-weight: 600;
  color: #f2edff;
}

/* Same as the pills on the changelog pages (Changelog.vue). */
.news-pill {
  padding: 0 9px;
  border: 1px solid color-mix(in srgb, var(--p) 70%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--p) 16%, transparent);
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: #f2edff;
  white-space: nowrap;
}

.news-date {
  margin-left: auto;
  font-size: 13px;
  color: #a894c2;
}

.news-list {
  flex: 1;
  margin: 0 0 14px;
  padding-left: 18px;
  font-size: 14.5px;
  line-height: 1.55;
  color: #f2edff;
}

.news-list li + li {
  margin-top: 4px;
}

.news-list li::marker {
  color: #d9ad40;
}

.news-list :deep(code) {
  padding: 1px 5px;
  border-radius: 4px;
  background: rgba(115, 64, 166, 0.35);
  font-size: 0.9em;
}

.news-more {
  color: #a894c2;
}

.news-link {
  align-self: flex-start;
  font-size: 14px;
  font-weight: 600;
  color: #d9ad40;
  text-decoration: none;
}

.news-link:hover,
.news-link:focus-visible {
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 639px) {
  .home-news {
    margin-bottom: 56px;
    padding: 40px 16px 0;
  }

  .home-news-title {
    font-size: 32px;
  }
}
</style>
