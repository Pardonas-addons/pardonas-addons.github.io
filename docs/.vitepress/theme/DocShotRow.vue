<script setup lang="ts">
// Shows several <DocShot> side by side. On wider screens the images stay in one
// row and shrink in proportion to their real width; on small screens they wrap,
// each at most its real width and centred.
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
  flex: 0 1 auto;
  width: min(100%, var(--doc-shot-w));
  max-width: var(--doc-shot-w);
  min-width: 0;
  margin: 0;
}

@media (min-width: 640px) {
  .doc-shot-row {
    flex-wrap: nowrap;
  }

  .doc-shot-row > :deep(.doc-shot) {
    flex: 0 1 var(--doc-shot-w);
    width: auto;
  }
}
</style>
