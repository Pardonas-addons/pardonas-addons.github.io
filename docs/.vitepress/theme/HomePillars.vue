<script setup lang="ts">
import { usePardona } from './usePardona'

const numerals = ['I', 'II', 'III']
const { texts } = usePardona()
</script>

<template>
  <section class="home-pillars">
    <article v-for="(p, i) in texts.home.pillars" :key="p.title" class="pillar">
      <span class="pillar-badge" aria-hidden="true">{{ numerals[i] }}</span>
      <h2 class="pillar-title">{{ p.title }}</h2>
      <p class="pillar-text">{{ p.text }}</p>
    </article>
  </section>
</template>

<style scoped>
.home-pillars {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px 24px 24px;
}

.pillar {
  padding: 28px;
  border: 1px solid rgba(217, 173, 64, 0.35);
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(51, 23, 76, 0.7), rgba(20, 8, 33, 0.7));
}

.pillar-badge {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-bottom: 18px;
  border: 1px solid #d9ad40;
  border-radius: 50%;
  background: #472466;
  font-family: var(--pardona-font-display);
  font-size: 16px;
  font-weight: 700;
  color: #ffd140;
}

.pillar-title {
  margin: 0 0 10px;
  font-family: var(--pardona-font-display);
  font-size: 22px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffd140;
}

.pillar-text {
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: #a894c2;
}

@media (max-width: 959px) {
  .home-pillars {
    grid-template-columns: minmax(0, 1fr);
    max-width: 640px;
    gap: 16px;
  }
}

@media (max-width: 639px) {
  .home-pillars {
    padding: 40px 16px 16px;
  }

  .pillar {
    padding: 22px;
  }
}
</style>
