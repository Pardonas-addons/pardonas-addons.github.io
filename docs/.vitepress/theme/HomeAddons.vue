<script setup lang="ts">
import { withBase } from 'vitepress'
import { addons, qualityColors, type AddonId, type Quality } from './addons'
import { usePardona } from './usePardona'
import ShotFrame from './ShotFrame.vue'
import AddonTooltip from './AddonTooltip.vue'
import MockBuffList from './MockBuffList.vue'
import MockItemTooltip from './MockItemTooltip.vue'
import MockSettings from './MockSettings.vue'

const { texts } = usePardona()

/** Mock shown while an addon has no screenshot (`shot` in addons.ts). */
const mocks: Record<AddonId, { component: unknown; props?: Record<string, unknown> }> = {
  buffReminder: { component: MockBuffList, props: { variant: 'full' } },
  tooltips: { component: MockItemTooltip },
  ui: { component: MockSettings }
}

const legend: Quality[] = ['epic', 'rare', 'uncommon']
</script>

<template>
  <section class="home-addons">
    <div class="home-addons-seal" aria-hidden="true">
      <span class="home-addons-seal-line home-addons-seal-line--left" />
      <img :src="withBase('/pardona.svg')" alt="" width="84" height="84" />
      <span class="home-addons-seal-line home-addons-seal-line--right" />
    </div>
    <h2 class="home-addons-title">{{ texts.home.addonsTitle }}</h2>
    <p class="home-addons-subline">{{ texts.home.addonsSubline }}</p>

    <div
      v-for="(a, i) in addons"
      :key="a.id"
      class="showcase-row"
      :class="{ 'showcase-row--flip': i % 2 === 1 }"
    >
      <ShotFrame
        class="showcase-shot"
        :src="a.shot?.src"
        :width="a.shot?.width"
        :height="a.shot?.height"
        :fit="a.shot?.fit"
        :alt="texts.shotAlt.addons[a.id]"
      >
        <component :is="mocks[a.id].component" v-bind="mocks[a.id].props" />
      </ShotFrame>
      <div class="showcase-tooltip">
        <AddonTooltip :id="a.id" />
      </div>
    </div>

    <ul class="home-addons-legend">
      <li v-for="q in legend" :key="q">
        <span class="legend-swatch" :style="{ background: qualityColors[q] }" aria-hidden="true" />{{ texts.quality[q] }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.home-addons {
  max-width: 1180px;
  margin: 0 auto;
  padding: 72px 24px 88px;
}

/* Pardona logo between two gold lines, above the heading. */
.home-addons-seal {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  max-width: 520px;
  margin: -8px auto 28px;
}

.home-addons-seal-line {
  flex: 1;
  height: 1px;
}

.home-addons-seal-line--left {
  background: linear-gradient(90deg, transparent, #d9ad40);
}

.home-addons-seal-line--right {
  background: linear-gradient(90deg, #d9ad40, transparent);
}

.home-addons-seal img {
  flex: none;
  width: 84px;
  height: 84px;
  filter: drop-shadow(0 0 20px rgba(255, 209, 64, 0.35));
}

.home-addons-title {
  margin: 0 0 10px;
  font-family: var(--pardona-font-display);
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  color: #ffd140;
}

.home-addons-subline {
  margin: 0 0 56px;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  color: #a894c2;
}

.showcase-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 70px;
  margin-bottom: 80px;
}

.showcase-row--flip .showcase-shot {
  order: 2;
}

.showcase-tooltip {
  display: flex;
  justify-content: flex-start;
}

.showcase-row--flip .showcase-tooltip {
  justify-content: flex-end;
}

.home-addons-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 28px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 13px;
  color: #a894c2;
}

.home-addons-legend li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-swatch {
  width: 11px;
  height: 11px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 2px;
}

@media (max-width: 1099px) {
  .showcase-row {
    gap: 40px;
  }
}

@media (max-width: 959px) {
  .showcase-row {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
    max-width: 560px;
    margin: 0 auto 64px;
  }

  .showcase-row--flip .showcase-shot {
    order: 0;
  }

  .showcase-tooltip,
  .showcase-row--flip .showcase-tooltip {
    justify-content: center;
  }
}

@media (max-width: 639px) {
  .home-addons-seal {
    gap: 16px;
  }

  .home-addons-seal img {
    width: 64px;
    height: 64px;
  }

  .home-addons {
    padding: 56px 16px 64px;
  }

  .home-addons-title {
    font-size: 32px;
  }
}
</style>
