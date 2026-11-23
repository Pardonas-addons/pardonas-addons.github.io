<script setup lang="ts">
import { computed } from 'vue'
import { usePardona } from './usePardona'

const props = withDefaults(defineProps<{ variant?: 'short' | 'full' }>(), { variant: 'short' })

type State = 'missing' | 'timer' | 'ok'
interface Row {
  name: string
  status: string
  state: State
  /** Icon gradient colours. */
  icon: [string, string]
}

const { texts } = usePardona()

const rows = computed<Row[]>(() => {
  const t = texts.value.mocks.buffList
  if (props.variant === 'full') {
    return [
      { name: t.arcaneIntellect, status: t.missing, state: 'missing', icon: ['#7fb8ff', '#2a4f9e'] },
      { name: t.wellFed, status: `${t.expiring} · 2:41`, state: 'timer', icon: ['#f0b46a', '#8a4a1c'] },
      { name: t.wizardOil, status: t.missing, state: 'missing', icon: ['#c9a6f0', '#4f2a85'] },
      { name: t.manaStone, status: t.inBags, state: 'ok', icon: ['#7fe0c9', '#1f6b5c'] },
      { name: t.ammunition, status: '143 / 200', state: 'timer', icon: ['#d8d2c4', '#6b5f48'] }
    ]
  }
  return [
    { name: t.arcaneIntellect, status: t.missing, state: 'missing', icon: ['#7fb8ff', '#2a4f9e'] },
    { name: t.wellFed, status: '2:41', state: 'timer', icon: ['#f0b46a', '#8a4a1c'] },
    { name: t.markOfTheWild, status: t.missing, state: 'missing', icon: ['#e79ad8', '#7a2a6b'] },
    { name: t.sharpeningStone, status: '28 min', state: 'ok', icon: ['#c8ccd4', '#55606e'] }
  ]
})

const hint = computed(() =>
  props.variant === 'full' ? texts.value.mocks.buffList.hintFull : texts.value.mocks.buffList.hintShort
)
</script>

<template>
  <div class="pd-panel mock-buffs" aria-hidden="true">
    <div class="mock-buffs-head">
      <span class="mock-buffs-title">{{ texts.mocks.buffList.title }}</span>
      <span class="mock-buffs-hint">{{ hint }}</span>
    </div>
    <div v-for="row in rows" :key="row.name" class="mock-buffs-row">
      <span class="mock-buffs-icon" :style="{ background: `linear-gradient(135deg, ${row.icon[0]}, ${row.icon[1]})` }" />
      <span class="mock-buffs-name">{{ row.name }}</span>
      <span class="mock-buffs-status" :class="`is-${row.state}`">{{ row.status }}</span>
    </div>
  </div>
</template>

<style scoped>
.mock-buffs {
  width: 100%;
  max-width: 340px;
  padding: 10px 12px 8px;
  font-size: 13px;
  line-height: 1.3;
}

.mock-buffs-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(217, 173, 64, 0.35);
}

.mock-buffs-title {
  font-weight: 600;
  color: #ffd140;
}

.mock-buffs-hint {
  font-size: 11px;
  color: #a894c2;
}

.mock-buffs-row {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 4px 0;
}

.mock-buffs-icon {
  flex: none;
  width: 22px;
  height: 22px;
  border: 1px solid #d9ad40;
  border-radius: 3px;
}

.mock-buffs-name {
  flex: 1;
  min-width: 0;
  color: #f2edff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mock-buffs-status {
  flex: none;
  font-size: 12px;
  font-weight: 600;
}

.is-missing {
  color: #ff2020;
}

.is-timer {
  color: #ffb340;
}

.is-ok {
  color: #1eff00;
}
</style>
