<script setup lang="ts">
import { computed } from 'vue'
import { qualityColors, type AddonId } from './addons'
import { data } from './changelog.data'
import { usePardona } from './usePardona'

/**
 * Changelog of one addon, loaded at build time from its CHANGELOG.md (see changelog.data.ts).
 * One h2 per version (id = anchor, e.g. "v1-4-1") with date and a stable/beta pill,
 * one h3 per subsection. Headings stay English in every language, like the file.
 */
const props = defineProps<{ id: AddonId }>()

const { texts } = usePardona()
const changelog = computed(() => data[props.id])
const versions = computed(() => changelog.value?.versions ?? [])
const failed = computed(() => !changelog.value || changelog.value.error)
const permalinkLabel = (version: string) => `Permalink to "${version}"`

const pill = (isBeta: boolean) =>
  isBeta ? { label: 'beta', color: qualityColors.rare } : { label: 'stable', color: qualityColors.epic }
</script>

<template>
  <div class="changelog">
    <div v-if="failed" class="warning custom-block">
      <p>{{ texts.changelog.loadError }}</p>
    </div>
    <template v-for="v in versions" :key="v.anchor">
      <h2 :id="v.anchor" tabindex="-1" class="changelog-version">
        {{ v.version }}
        <span class="changelog-date ignore-header">{{ v.date }}</span>
        <span class="changelog-pill ignore-header" :style="{ '--q': pill(v.isBeta).color }">{{
          pill(v.isBeta).label
        }}</span>
        <a class="header-anchor" :href="`#${v.anchor}`" :aria-label="permalinkLabel(v.version)">&#8203;</a>
      </h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-for="(n, i) in v.notes" :key="`n${i}`" v-html="n" />
      <template v-for="s in v.sections" :key="s.title">
        <!-- No id: the page outline lists the versions only. -->
        <h3 class="changelog-section">{{ s.title }}</h3>
        <ul>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <li v-for="(item, i) in s.items" :key="i" v-html="item" />
        </ul>
      </template>
    </template>
  </div>
</template>

<style scoped>
.changelog-version {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
}

.changelog-date {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  color: #a894c2;
}

/* Same family as the status pill in AddonHeader. */
.changelog-pill {
  align-self: center;
  padding: 0 9px;
  border: 1px solid color-mix(in srgb, var(--q) 70%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--q) 16%, transparent);
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  color: #f2edff;
  white-space: nowrap;
}

.changelog-section {
  margin-top: 20px;
}
</style>
