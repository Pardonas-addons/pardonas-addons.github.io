<script setup lang="ts">
import { computed } from 'vue'
import { getAddon, qualityColors, type AddonId } from './addons'
import { usePardona } from './usePardona'
import AddonIcon from './AddonIcon.vue'
import AddonLinks from './AddonLinks.vue'

/** Compact addon strip for the addon index pages (no handbook link: the reader is already on it). */
const props = defineProps<{ id: AddonId }>()

const { texts } = usePardona()
const addon = computed(() => getAddon(props.id))
const color = computed(() => qualityColors[addon.value.quality])
</script>

<template>
  <div class="addon-header" :style="{ '--q': color }">
    <AddonIcon />
    <div class="addon-header-body">
      <div class="addon-header-top">
        <span class="addon-header-name">{{ texts.addons[id].name }}</span>
        <span class="addon-header-pill">{{ texts.status[id] }}</span>
      </div>
      <AddonLinks :id="id" hide-handbook />
    </div>
  </div>
</template>

<style scoped>
.addon-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 20px 0 24px;
  padding: 0 0 16px;
  border-bottom: 1px solid #d9ad40;
}

.addon-header-body {
  min-width: 0;
}

.addon-header-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 12px;
  margin-bottom: 2px;
}

.addon-header-name {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--q);
}

.addon-header-pill {
  padding: 0 9px;
  border: 1px solid color-mix(in srgb, var(--q) 70%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--q) 16%, transparent);
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: #f2edff;
  white-space: nowrap;
}
</style>
