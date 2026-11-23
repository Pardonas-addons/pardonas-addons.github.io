<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { getAddon, type AddonId } from './addons'
import { usePardona } from './usePardona'

/** Handbook and store links of one addon in WoW chat-link style ("[Handbook]"). */
const props = defineProps<{ id: AddonId }>()

const { texts, prefix } = usePardona()
const addon = computed(() => getAddon(props.id))

interface Link {
  label: string
  href?: string
  external?: boolean
}

const links = computed<Link[]>(() => {
  const t = texts.value.links
  const list: Link[] = [{ label: t.handbook, href: withBase(`${prefix.value}${addon.value.handbook}`) }]
  const stores = [
    ['curseforge', t.curseforge],
    ['wago', t.wago]
  ] as const
  for (const [key, label] of stores) {
    const link = addon.value.stores[key]
    if (!link) continue
    list.push(link === 'soon' ? { label: `${label}: ${t.comingSoon}` } : { label, href: link, external: true })
  }
  return list
})
</script>

<template>
  <span class="addon-links">
    <template v-for="l in links" :key="l.label">
      <a
        v-if="l.href"
        class="addon-chat-link"
        :href="l.href"
        :target="l.external ? '_blank' : undefined"
        :rel="l.external ? 'noopener noreferrer' : undefined"
        >[{{ l.label }}]</a
      >
      <span v-else class="addon-chat-off">{{ l.label }}</span>
    </template>
  </span>
</template>

<style scoped>
.addon-links {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 14px;
  font-size: 14px;
  line-height: 1.5;
}

.addon-links a.addon-chat-link {
  font-weight: 600;
  color: var(--q, #ffd140);
  text-decoration: none;
}

.addon-links a.addon-chat-link:hover,
.addon-links a.addon-chat-link:focus-visible {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.addon-chat-off {
  color: #808080;
}
</style>
