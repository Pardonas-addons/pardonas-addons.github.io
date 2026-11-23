<script setup lang="ts">
withDefaults(defineProps<{ size?: 'large' | 'small'; align?: 'center' | 'start' }>(), {
  size: 'large',
  align: 'center'
})
</script>

<template>
  <div class="ornament" :class="[`ornament--${size}`, `ornament--${align}`]" role="presentation" aria-hidden="true">
    <span class="ornament-line" />
    <span class="ornament-diamond" />
    <span class="ornament-line ornament-line--right" />
  </div>
</template>

<style scoped>
.ornament {
  --line: 220px;
  --diamond: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 0 auto;
}

.ornament--small {
  --line: 80px;
  --diamond: 7px;
  gap: 9px;
}

.ornament--start {
  justify-content: flex-start;
}

.ornament-line {
  flex: 0 1 var(--line);
  height: 1px;
  background: linear-gradient(90deg, transparent, #d9ad40);
}

.ornament-line--right {
  background: linear-gradient(270deg, transparent, #d9ad40);
}

.ornament-diamond {
  flex: none;
  width: var(--diamond);
  height: var(--diamond);
  border: 1px solid #d9ad40;
  background: rgba(217, 173, 64, 0.25);
  box-shadow: 0 0 8px rgba(255, 209, 64, 0.7);
  transform: rotate(45deg);
}
</style>
