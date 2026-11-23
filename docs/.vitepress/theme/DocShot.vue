<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  /** Image path without base (e.g. '/shots/br-settings-display.png'). */
  src: string
  alt: string
  /** Real pixel size of the image; the image is never shown larger than this. */
  width: number
  height: number
  /** Optional caption below the frame. */
  caption?: string
}>()

// Frame width = image width + 2 × 3px gold border.
const frameStyle = computed(() => ({ '--doc-shot-w': `${props.width + 6}px` }))
</script>

<template>
  <figure class="doc-shot" :style="frameStyle">
    <div class="doc-shot-frame">
      <img
        class="doc-shot-img"
        :src="withBase(src)"
        :alt="alt"
        :width="width"
        :height="height"
        loading="lazy"
        decoding="async"
      />
    </div>
    <figcaption v-if="caption" class="doc-shot-caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.doc-shot {
  width: var(--doc-shot-w);
  max-width: 100%;
  margin: 24px auto;
}

.doc-shot-frame {
  padding: 3px;
  border-radius: 10px;
  background: linear-gradient(145deg, #f3d27a, #a9791f 40%, #f0c75e 60%, #8a5f14);
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.55),
    0 0 28px rgba(115, 64, 166, 0.3);
}

.doc-shot-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  background: #0d1414;
}

.doc-shot-caption {
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  line-height: 1.4;
  color: var(--vp-c-text-2);
}
</style>
