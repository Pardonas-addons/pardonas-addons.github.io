<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

/**
 * One pre-rendered, already tilted screenshot of the home page collage
 * (see scripts/hero-shots.mjs and hero-shots.json). Shown at its natural 1x
 * size without any transform, so the browser neither scales nor rotates it.
 */
const props = defineProps<{
  src: string
  src2x: string
  width: number
  height: number
  left: number
  top: number
  z: number
  alt: string
}>()

const srcset = computed(() => `${withBase(props.src)} 1x, ${withBase(props.src2x)} 2x`)
</script>

<template>
  <img
    class="hero-shot"
    :src="withBase(src)"
    :srcset="srcset"
    :width="width"
    :height="height"
    :alt="alt"
    loading="eager"
    decoding="async"
    :style="{ left: `${left}px`, top: `${top}px`, zIndex: z }"
  />
</template>

<style scoped>
.hero-shot {
  position: absolute;
  display: block;
  max-width: none;
  /* drop-shadow follows the rotated shape (a box-shadow would be a straight box). */
  filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 40px rgba(115, 64, 166, 0.35));
}
</style>
