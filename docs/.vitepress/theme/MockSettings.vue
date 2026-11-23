<script setup lang="ts">
import { computed } from 'vue'
import { usePardona } from './usePardona'

const { texts } = usePardona()

const options = computed(() => {
  const t = texts.value.mocks.settings
  return [
    { label: t.minimap, on: true },
    { label: t.buffs, on: true },
    { label: t.loot, on: true },
    { label: t.roll, on: false, beta: true },
    { label: t.trade, on: true }
  ]
})
</script>

<template>
  <div class="pd-panel mock-settings" aria-hidden="true">
    <div class="mock-settings-list">
      <div class="is-gold">{{ texts.mocks.settings.suite }}</div>
      <div>{{ texts.mocks.settings.buffReminder }}</div>
      <div>{{ texts.mocks.settings.tooltips }}</div>
      <div>{{ texts.mocks.settings.ui }}</div>
    </div>
    <div class="mock-settings-main">
      <div class="mock-settings-tabs">
        <span class="is-active">{{ texts.mocks.settings.tabModules }}</span>
        <span>{{ texts.mocks.settings.tabLook }}</span>
      </div>
      <div v-for="o in options" :key="o.label" class="mock-settings-option">
        <span class="mock-check" :class="{ 'is-on': o.on }" />
        <span>{{ o.label }}</span>
        <span v-if="o.beta" class="is-beta">{{ texts.mocks.settings.beta }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock-settings {
  display: flex;
  width: 100%;
  max-width: 440px;
  font-size: 12.5px;
  line-height: 1.4;
  color: #f2edff;
}

.mock-settings-list {
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 38%;
  padding: 10px 10px;
  border-right: 1px solid rgba(217, 173, 64, 0.35);
  color: #a894c2;
}

.mock-settings-list .is-gold {
  font-weight: 600;
  color: #ffd140;
}

.mock-settings-list > div:not(.is-gold) {
  padding-left: 10px;
}


.mock-settings-main {
  flex: 1;
  min-width: 0;
  padding: 10px 12px 12px;
}

.mock-settings-tabs {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
}

.mock-settings-tabs span {
  padding: 2px 10px;
  border: 1px solid rgba(217, 173, 64, 0.35);
  border-radius: 5px;
  color: #a894c2;
}

.mock-settings-tabs .is-active {
  border-color: #d9ad40;
  background: #472466;
  color: #ffd140;
}

.mock-settings-option {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
  padding: 3px 0;
}

.mock-check {
  position: relative;
  flex: none;
  width: 13px;
  height: 13px;
  border: 1px solid #d9ad40;
  border-radius: 2px;
  background: #140821;
}

.mock-check.is-on::after {
  content: '';
  position: absolute;
  left: 3px;
  top: 0;
  width: 4px;
  height: 8px;
  border: solid #ffd140;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.is-beta {
  color: #ff9a2e;
}
</style>
