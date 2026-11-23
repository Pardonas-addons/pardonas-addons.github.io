<script setup lang="ts">
// Shows several <DocShot> side by side. Each image shrinks in proportion to its
// real width and the row wraps when an image would become too small.
</script>

<template>
  <div class="doc-shot-row">
    <slot />
  </div>
</template>

<style scoped>
.doc-shot-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin: 24px 0;
}

.doc-shot-row > :deep(.doc-shot) {
  flex: 1 1 var(--doc-shot-w);
  min-width: 160px;
  margin: 0;
}
</style>
