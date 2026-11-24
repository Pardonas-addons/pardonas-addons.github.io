<script setup lang="ts">
import { computed } from 'vue'
import { qualityColors } from './addons'

/**
 * "stable" / "beta" pill of a version (changelog pages and the home page box).
 * Sets its own font so it looks the same everywhere, whatever it sits in.
 */
const props = defineProps<{ beta: boolean }>()

const pill = computed(() =>
  props.beta ? { label: 'beta', color: qualityColors.rare } : { label: 'stable', color: qualityColors.epic }
)
</script>

<template>
  <span class="version-pill" :style="{ '--pill': pill.color }">{{ pill.label }}</span>
</template>

<style scoped>
/* Same family as the status pill in AddonHeader. Cinzel draws the lowercase label as small capitals. */
.version-pill {
  align-self: center;
  padding: 0 9px;
  border: 1px solid color-mix(in srgb, var(--pill) 70%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--pill) 16%, transparent);
  font-family: var(--pardona-font-display);
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0;
  text-transform: none;
  color: #f2edff;
  white-space: nowrap;
}
</style>
