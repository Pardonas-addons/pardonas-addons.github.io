<script setup lang="ts">
import { withBase } from 'vitepress'
import { usePardona } from './usePardona'

const { texts } = usePardona()
</script>

<template>
  <div class="mock-minimap" aria-hidden="true">
    <div class="mock-minimap-map">
      <span class="mock-minimap-button">
        <img :src="withBase('/pardona.svg')" alt="" width="26" height="26" />
      </span>
    </div>
    <div class="pd-panel mock-minimap-menu">
      <div class="is-gold">{{ texts.mocks.minimap.buffReminder }}</div>
      <div class="is-sub">{{ texts.mocks.minimap.move }}</div>
      <div class="is-sub">{{ texts.mocks.minimap.demo }}</div>
      <div>{{ texts.mocks.minimap.tooltips }}</div>
      <div>{{ texts.mocks.minimap.ui }}</div>
    </div>
  </div>
</template>

<style scoped>
.mock-minimap {
  position: relative;
  display: flex;
  align-items: center;
  gap: 18px;
}

.mock-minimap-map {
  position: relative;
  flex: none;
  width: 112px;
  height: 112px;
  border: 3px solid #d9ad40;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 50%, #fff 0 2px, transparent 3px),
    radial-gradient(circle at 35% 40%, #5e8c3a, #2f5a22 55%, #183515 100%);
  box-shadow: 0 0 0 3px #7340a6, 0 6px 14px rgba(0, 0, 0, 0.5);
}

.mock-minimap-button {
  position: absolute;
  right: -10px;
  top: 2px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 2px solid #d9ad40;
  border-radius: 50%;
  background: #140821;
  box-shadow: 0 0 12px rgba(255, 209, 64, 0.6);
}

.mock-minimap-button img {
  display: block;
  width: 26px;
  height: 26px;
}

.mock-minimap-menu {
  padding: 8px 12px;
  font-size: 12px;
  line-height: 1.6;
  color: #f2edff;
  white-space: nowrap;
}

.is-gold {
  font-weight: 600;
  color: #ffd140;
}

.is-sub {
  padding-left: 12px;
  color: #a894c2;
}
</style>
