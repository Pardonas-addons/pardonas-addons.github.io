<script setup lang="ts">
import { withBase } from 'vitepress'
import { classes, classPath } from './classes'
import { usePardona } from './usePardona'

const { texts, prefix } = usePardona()
</script>

<template>
  <ul class="class-cards">
    <li v-for="c in classes" :key="c.id" class="class-cards-item">
      <a
        class="class-card"
        :href="withBase(`${prefix}${classPath(c.id)}`)"
        :style="{ '--class-color': c.color, '--class-text': c.textColor }"
      >
        <span class="class-card-name">{{ texts.classes[c.id].name }}</span>
        <span class="class-card-text">{{ texts.classes[c.id].text }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.class-cards {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  margin: 24px 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 640px) {
  .class-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 960px) {
  .class-cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.class-cards-item {
  margin: 0;
}

/* Card look of the home page pillars, with a 3px top edge in the class colour. */
.class-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  padding: 18px 20px 20px;
  border: 1px solid rgba(217, 173, 64, 0.35);
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(51, 23, 76, 0.7), rgba(20, 8, 33, 0.7));
  box-shadow: inset 0 3px 0 var(--class-color);
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.class-card:hover,
.class-card:focus-visible {
  border-color: #ffd140;
  transform: translateY(-2px);
}

.class-card:focus-visible {
  outline: 2px solid #ffd140;
  outline-offset: 2px;
}

.class-card-name {
  font-family: var(--pardona-font-display);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--class-text);
}

.class-card-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.55;
  color: #a894c2;
}

@media (prefers-reduced-motion: reduce) {
  .class-card {
    transition: none;
  }

  .class-card:hover,
  .class-card:focus-visible {
    transform: none;
  }
}
</style>
