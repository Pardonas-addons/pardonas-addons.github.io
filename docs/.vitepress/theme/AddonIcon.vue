<script setup lang="ts">
import { withBase } from 'vitepress'

/** 54px addon icon with a border and glow in the quality colour (set `--q` on a parent). */
</script>

<template>
  <span class="addon-icon" aria-hidden="true">
    <img :src="withBase('/pardona.svg')" alt="" width="48" height="48" />
  </span>
</template>

<style scoped>
.addon-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border: 2px solid var(--q, #d9ad40);
  border-radius: 6px;
  background: #140821;
  box-shadow: 0 0 18px color-mix(in srgb, var(--q, #d9ad40) 55%, transparent);
}

.addon-icon img {
  display: block;
  width: 88%;
  height: 88%;
}
</style>
