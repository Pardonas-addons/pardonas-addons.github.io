<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { changelogAnchor, changelogPath, getAddon, qualityColors, type AddonId } from './addons'
import { usePardona } from './usePardona'
import { data as changelogs } from './changelog.data'
import AddonIcon from './AddonIcon.vue'
import AddonLinks from './AddonLinks.vue'

/** An addon shown as a WoW item tooltip. */
const props = defineProps<{ id: AddonId }>()

const { texts, prefix } = usePardona()
const addon = computed(() => getAddon(props.id))
const t = computed(() => texts.value.addons[props.id])
const color = computed(() => qualityColors[addon.value.quality])

interface VersionPart {
  text: string
  /** Link to the changelog: the stable version to its anchor, the beta to the page (newest beta on top). */
  href?: string
}

/** Version line: [left, right]. With only one entry it sits on the left. */
const versionLine = computed<[VersionPart, VersionPart?]>(() => {
  const a = addon.value
  const v = a.versions
  const l = texts.value.versions
  const page = changelogs[a.id] ? withBase(`${prefix.value}${changelogPath(a)}`) : undefined
  const parts: VersionPart[] = []
  if (v.stable) parts.push({ text: `${l.stable} ${v.stable}`, href: page && `${page}#${changelogAnchor(v.stable)}` })
  if (v.beta) parts.push({ text: `${l.beta} ${v.beta}`, href: page })
  if (v.alpha) parts.push({ text: l.alpha })
  return [parts[0] ?? { text: '' }, parts[1]]
})
</script>

<template>
  <div class="addon-tooltip" :style="{ '--q': color }">
    <AddonIcon />
    <div class="tt-box">
      <h3 class="tt-name">{{ t.name }}</h3>
      <div class="tt-white">{{ t.bind }}</div>
      <div class="tt-white tt-cols">
        <span>{{ t.type }}</span><span>{{ t.slot }}</span>
      </div>
      <div class="tt-white tt-cols">
        <template v-for="(part, i) in versionLine" :key="i">
          <a v-if="part?.href" class="tt-version-link" :href="part.href">{{ part.text }}</a>
          <span v-else-if="part">{{ part.text }}</span>
        </template>
      </div>
      <div class="tt-stats">
        <div v-for="s in t.stats" :key="s" class="tt-white">{{ s }}</div>
      </div>
      <div class="tt-equip">{{ t.equip }}</div>
      <div class="tt-flavour">{{ t.flavour }}</div>
      <div :class="addon.available ? 'tt-white' : 'tt-red'">{{ t.requirement }}</div>
      <div v-if="t.price" class="tt-white tt-price">{{ t.price }} <span class="tt-coin" aria-hidden="true" /></div>
      <div class="tt-sep" />
      <AddonLinks :id="id" />
    </div>
  </div>
</template>

<style scoped>
.addon-tooltip {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  max-width: 446px;
}

.tt-box {
  flex: 0 1 380px;
  min-width: 0;
  max-width: 100%;
  padding: 14px 16px 16px;
  border: 2px solid #d9ad40;
  border-radius: 9px;
  background: linear-gradient(rgba(51, 23, 76, 0.97), rgba(20, 8, 33, 0.97));
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.55),
    0 0 34px color-mix(in srgb, var(--q) 28%, transparent);
  font-family: var(--vp-font-family-base);
  font-size: 14px;
  line-height: 1.5;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.addon-tooltip:hover .tt-box,
.addon-tooltip:focus-within .tt-box {
  transform: translateY(-4px);
  border-color: #ffd140;
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.55),
    0 0 46px color-mix(in srgb, var(--q) 55%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .tt-box {
    transition: none;
  }

  .addon-tooltip:hover .tt-box,
  .addon-tooltip:focus-within .tt-box {
    transform: none;
  }
}

.tt-name {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: var(--vp-font-family-base);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--q);
}

.tt-white {
  color: #ffffff;
}

.tt-cols {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

/* Version linked to the changelog: same colour as the line, underline on hover only. */
.tt-version-link {
  color: inherit;
  text-decoration: none;
}

.tt-version-link:hover,
.tt-version-link:focus-visible {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.tt-stats {
  margin-top: 6px;
}

.tt-equip {
  margin-top: 6px;
  color: #1eff00;
}

.tt-flavour {
  margin-top: 6px;
  font-style: italic;
  color: #ffd100;
}

.tt-red {
  color: #ff2020;
}

.tt-price {
  display: flex;
  align-items: center;
  gap: 5px;
}

.tt-coin {
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fff2a8, #d4a017 55%, #8a6a00);
}

.tt-sep {
  height: 1px;
  margin: 10px 0 8px;
  background: rgba(217, 173, 64, 0.35);
}
</style>
