<script setup lang="ts">
import { withBase } from 'vitepress'
import { homeShots } from './addons'
import { usePardona } from './usePardona'
import ShotFrame from './ShotFrame.vue'
import MockBuffList from './MockBuffList.vue'
import MockItemTooltip from './MockItemTooltip.vue'
import MockMinimap from './MockMinimap.vue'

const { texts, prefix } = usePardona()
</script>

<template>
  <section class="home-hero">
    <div class="home-hero-inner">
      <div class="home-hero-text">
        <p class="home-hero-eyebrow">{{ texts.home.eyebrow }}</p>
        <h1 class="home-hero-title">
          <template v-for="(line, i) in texts.home.title" :key="line"><br v-if="i" />{{ line }}</template>
        </h1>
        <p class="home-hero-tagline">{{ texts.home.tagline }}</p>
        <div class="home-hero-actions">
          <a class="home-btn home-btn--primary" :href="withBase(`${prefix}/buff-reminder/`)">{{ texts.home.primary }}</a>
          <a class="home-btn home-btn--secondary" :href="withBase(`${prefix}/suite/`)">{{ texts.home.secondary }}</a>
        </div>
        <ul class="home-hero-chips">
          <li v-for="chip in texts.home.chips" :key="chip">{{ chip }}</li>
        </ul>
      </div>

      <div class="home-hero-collage">
        <div class="collage-stage">
          <img class="collage-emblem" :src="withBase('/pardona.svg')" alt="" width="420" height="420" />
          <!-- The mocks are the fallback when an entry in homeShots is removed. -->
          <ShotFrame
            class="collage-buffs"
            v-bind="homeShots.buffList"
            :alt="texts.shotAlt.hero.buffList"
            loading="eager"
            :tilt="-5"
          >
            <MockBuffList variant="short" />
          </ShotFrame>
          <ShotFrame
            class="collage-item"
            v-bind="homeShots.tooltip"
            :alt="texts.shotAlt.hero.tooltip"
            loading="eager"
            :tilt="4"
          >
            <MockItemTooltip />
          </ShotFrame>
          <ShotFrame
            class="collage-minimap"
            v-bind="homeShots.minimap"
            :alt="texts.shotAlt.hero.minimap"
            loading="eager"
            :tilt="-2"
          >
            <MockMinimap />
          </ShotFrame>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  position: relative;
  /* No horizontal scrolling from tilted frames; clip keeps the vertical axis untouched. */
  overflow-x: hidden;
  padding: 64px 24px 72px;
  background-image:
    radial-gradient(1px 1px at 12% 18%, rgba(255, 241, 184, 0.8), transparent 60%),
    radial-gradient(1px 1px at 28% 72%, rgba(242, 237, 255, 0.6), transparent 60%),
    radial-gradient(1.5px 1.5px at 46% 12%, rgba(255, 241, 184, 0.7), transparent 60%),
    radial-gradient(1px 1px at 58% 88%, rgba(242, 237, 255, 0.5), transparent 60%),
    radial-gradient(1px 1px at 82% 22%, rgba(242, 237, 255, 0.7), transparent 60%),
    radial-gradient(1.5px 1.5px at 92% 64%, rgba(255, 241, 184, 0.6), transparent 60%),
    radial-gradient(1px 1px at 6% 52%, rgba(242, 237, 255, 0.5), transparent 60%),
    radial-gradient(ellipse 520px 380px at 8% 0%, rgba(217, 173, 64, 0.14), transparent 70%),
    radial-gradient(ellipse 640px 520px at 74% 52%, rgba(115, 64, 166, 0.55), transparent 70%);
}

.home-hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 560px) auto;
  justify-content: center;
  align-items: center;
  gap: 40px;
  max-width: 1240px;
  min-height: 700px;
  margin: 0 auto;
}

/* Text column */
.home-hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 18px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #d9ad40;
}

.home-hero-eyebrow::before {
  content: '';
  flex: none;
  width: 40px;
  height: 1px;
  background: #d9ad40;
}

.home-hero-title {
  margin: 0 0 24px;
  font-family: var(--pardona-font-display);
  font-size: 76px;
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: 0;
  background: linear-gradient(180deg, #fff1b8, #ffd140 45%, #c88f1e);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 2px 14px rgba(255, 209, 64, 0.3));
}

.home-hero-tagline {
  max-width: 520px;
  margin: 0 0 32px;
  font-size: 19px;
  line-height: 1.6;
  color: #d9cfee;
}

.home-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 28px;
}

.home-btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.home-btn--primary {
  background: linear-gradient(180deg, #f0c75e, #b8861f);
  color: #1d0a2b;
  box-shadow: 0 6px 20px rgba(217, 173, 64, 0.35);
}

.home-btn--primary:hover,
.home-btn--primary:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 8px 26px rgba(217, 173, 64, 0.55);
}

.home-btn--secondary {
  border: 1px solid #d9ad40;
  background: rgba(71, 36, 102, 0.5);
  color: #ffd140;
}

.home-btn--secondary:hover,
.home-btn--secondary:focus-visible {
  background: rgba(115, 64, 166, 0.6);
}

.home-btn:focus-visible {
  outline: 2px solid #ffd140;
  outline-offset: 3px;
}

.home-hero-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 22px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 13px;
  color: #a894c2;
}

.home-hero-chips li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.home-hero-chips li::before {
  content: '';
  width: 6px;
  height: 6px;
  border: 1px solid #d9ad40;
  background: rgba(217, 173, 64, 0.45);
  transform: rotate(45deg);
}

/* Collage: a fixed 560 x 580 stage, scaled per breakpoint with --k. */
.home-hero-collage {
  --k: 1;
  position: relative;
  width: calc(560px * var(--k));
  height: calc(580px * var(--k));
  justify-self: center;
}

.collage-stage {
  position: absolute;
  top: 0;
  left: 0;
  width: 560px;
  height: 580px;
  transform: scale(var(--k));
  transform-origin: top left;
}

.collage-emblem {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 420px;
  height: 420px;
  margin: -210px 0 0 -210px;
  opacity: 0.22;
  filter: blur(2px);
  pointer-events: none;
}

.collage-buffs {
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 1;
  width: 360px;
}

/* Sizes follow the screenshots' aspect ratios: buff list ~237px high, tooltip ~201px, minimap ~302px.
   The tooltip sits below the buff list and right of the minimap so no text is covered. */
.collage-item {
  position: absolute;
  top: 245px;
  right: 0;
  z-index: 2;
  width: 320px;
}

.collage-minimap {
  position: absolute;
  bottom: 10px;
  left: 0;
  z-index: 3;
  width: 240px;
}

@supports (overflow: clip) {
  .home-hero {
    overflow-x: clip;
  }
}

@media (max-width: 1099px) {
  .home-hero-inner {
    grid-template-columns: minmax(0, 460px) auto;
    min-height: 600px;
  }

  .home-hero-title {
    font-size: 64px;
  }

  .home-hero-tagline {
    font-size: 17px;
  }

  .home-hero-collage {
    --k: 0.78;
  }
}

@media (max-width: 959px) {
  .home-hero {
    padding: 48px 24px 56px;
  }

  .home-hero-inner {
    grid-template-columns: minmax(0, 1fr);
    min-height: 0;
    gap: 48px;
  }

  .home-hero-collage {
    --k: 0.8;
  }
}

@media (max-width: 639px) {
  .home-hero {
    padding: 36px 16px 48px;
  }

  .home-hero-title {
    font-size: 52px;
  }

  .home-hero-collage {
    width: 100%;
    height: auto;
  }

  .collage-stage {
    position: relative;
    width: 100%;
    height: auto;
    padding: 8px 6px;
    transform: none;
  }

  .collage-emblem,
  .collage-item,
  .collage-minimap {
    display: none;
  }

  .collage-buffs {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-btn {
    transition: none;
  }

  .home-btn--primary:hover,
  .home-btn--primary:focus-visible {
    transform: none;
  }
}
</style>
