<script setup lang="ts">
import { usePardona } from './usePardona'

const { texts } = usePardona()
</script>

<template>
  <div class="pd-panel mock-item" aria-hidden="true">
    <div class="mock-item-name">{{ texts.mocks.itemTooltip.name }}</div>
    <div>{{ texts.mocks.itemTooltip.bind }}</div>
    <div>{{ texts.mocks.itemTooltip.slot }}</div>
    <div>{{ texts.mocks.itemTooltip.stats }}</div>
    <div class="mock-item-equip">{{ texts.mocks.itemTooltip.equip }}</div>
    <div class="mock-item-sell">{{ texts.mocks.itemTooltip.sellPrice }}</div>
    <div class="mock-item-bar"><span /></div>
  </div>
</template>

<style scoped>
.mock-item {
  width: 100%;
  max-width: 300px;
  padding: 10px 12px 12px;
  font-size: 12.5px;
  line-height: 1.45;
  color: #ffffff;
}

.mock-item-name {
  font-size: 14px;
  font-weight: 600;
  color: #a335ee;
}

.mock-item-equip {
  color: #1eff00;
}

.mock-item-sell {
  color: #808080;
}

.mock-item-bar {
  height: 7px;
  margin-top: 8px;
  border: 1px solid #d9ad40;
  border-radius: 2px;
  background: #0b0412;
}

.mock-item-bar span {
  display: block;
  width: 72%;
  height: 100%;
  background: linear-gradient(180deg, #3cff3c, #12a800);
}
</style>
