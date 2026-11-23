<script setup lang="ts">
import { computed } from 'vue'
import { getClass, type ClassId } from './classes'
import { usePardona } from './usePardona'

const props = defineProps<{ cls: ClassId }>()
const { texts } = usePardona()
const wowClass = computed(() => getClass(props.cls))
</script>

<template>
  <div
    class="class-header"
    :style="{ '--class-color': wowClass.color, '--class-text': wowClass.textColor }"
  >
    <span class="class-header-bar" aria-hidden="true" />
    <p class="class-header-label">
      <span class="class-header-name">{{ texts.classes[cls].name }}</span>
      <span class="class-header-addon"> · {{ texts.classHeaderAddon }}</span>
    </p>
  </div>
</template>

<style scoped>
.class-header {
  margin: 4px 0 20px;
}

/* Thin accent: class colour fading out to the right. */
.class-header-bar {
  display: block;
  width: 240px;
  max-width: 100%;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--class-color), transparent);
}

.class-header-label {
  margin: 8px 0 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.04em;
}

.class-header-name {
  color: var(--class-text);
}

.class-header-addon {
  font-weight: 500;
  color: #a894c2;
}
</style>
