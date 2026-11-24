<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { classPath, getClass, type ClassId } from './classes'
import { usePardona } from './usePardona'

/** Small inline row of class names, each linking to its class page (e.g. "Hunter · Warlock" under a heading). */
const props = defineProps<{ ids: ClassId[] }>()
const { texts, prefix } = usePardona()

const tags = computed(() =>
  props.ids.map((id) => {
    const cls = getClass(id)
    return {
      id,
      name: texts.value.classes[id].name,
      href: withBase(`${prefix.value}${classPath(id)}`),
      color: cls.color,
      textColor: cls.textColor
    }
  })
)
</script>

<template>
  <p class="class-tags">
    <a
      v-for="t in tags"
      :key="t.id"
      class="class-tag"
      :href="t.href"
      :style="{ '--class-color': t.color, '--class-text': t.textColor }"
      >{{ t.name }}</a
    >
  </p>
</template>

<style scoped>
.class-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  margin: 4px 0 12px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
}

/* Scoped selectors (class + data attribute) beat `.vp-doc a` and `.vp-doc a:hover`. */
.class-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--class-text);
  text-decoration: none;
}

/* Short accent bar in the class colour, like ClassHeader's bar but small. */
.class-tag::before {
  content: '';
  flex: none;
  width: 3px;
  height: 14px;
  border-radius: 2px;
  background: var(--class-color);
}

.class-tag:hover,
.class-tag:focus-visible {
  color: var(--class-text);
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
