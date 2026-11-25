<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { getAddon, youtubeUrl, type AddonId } from './addons'
import { usePardona } from './usePardona'

/**
 * Video card of an addon: the local preview image (scripts/video-thumb.mjs) with a play
 * button, linking to the video on YouTube in a new tab. Nothing from YouTube is embedded
 * or loaded. Renders nothing when the addon has no `video` in addons.ts.
 */
const props = defineProps<{ id: AddonId }>()

const { texts } = usePardona()
const video = computed(() => getAddon(props.id).video)
const t = computed(() => texts.value.video)
</script>

<template>
  <figure v-if="video" class="addon-video">
    <a
      class="addon-video-link"
      :href="youtubeUrl(video.youtubeId)"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="t.aria"
    >
      <span class="addon-video-frame">
        <img
          class="addon-video-img"
          :src="withBase(video.thumb.src)"
          :width="video.thumb.width"
          :height="video.thumb.height"
          :alt="t.alt"
          loading="lazy"
          decoding="async"
        />
        <svg class="addon-video-play" viewBox="0 0 72 72" width="72" height="72" aria-hidden="true" focusable="false">
          <circle class="addon-video-play-disc" cx="36" cy="36" r="34" />
          <path class="addon-video-play-arrow" d="M29 22.5v27a1.5 1.5 0 0 0 2.3 1.27l21.2-13.5a1.5 1.5 0 0 0 0-2.54L31.3 21.23A1.5 1.5 0 0 0 29 22.5z" />
        </svg>
      </span>
    </a>
    <!-- The link's ::after covers the caption too, so one link serves the whole card. -->
    <figcaption class="addon-video-caption">
      <span class="addon-video-watch">{{ t.watch }}</span>
      <span class="addon-video-note">{{ t.note }}</span>
    </figcaption>
  </figure>
</template>

<style scoped>
/* Sits inside .vp-doc: spacing, font and link styles are set here on purpose. */
.addon-video {
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 24px 0 28px;
  padding: 0;
}

.addon-video-link,
.addon-video-link:hover {
  display: block;
  color: inherit;
  text-decoration: none;
}

.addon-video-link:focus-visible {
  outline: none;
}

/* Click area over the whole card, caption included. */
.addon-video-link::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

/* Like the screenshots: gold border, rounded corners, dark shadow. */
.addon-video-frame {
  position: relative;
  display: block;
  overflow: hidden;
  border: 2px solid #d9ad40;
  border-radius: 10px;
  background: #140821;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.addon-video-img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  border-radius: 0;
}

.addon-video-play {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 72px;
  height: 72px;
  margin: -36px 0 0 -36px;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.55));
  transition: transform 0.2s ease;
}

.addon-video-play-disc {
  fill: #d9ad40;
  stroke: rgba(29, 10, 43, 0.35);
  stroke-width: 2;
  transition: fill 0.2s ease;
}

.addon-video-play-arrow {
  fill: #1d0a2b;
}

.addon-video-caption {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 12px;
  font-family: var(--vp-font-family-base);
  line-height: 1.4;
}

.addon-video-watch {
  font-size: 15px;
  font-weight: 600;
  color: #ffd140;
}

.addon-video-note {
  font-size: 13px;
  color: #a894c2;
}

/* Hover / focus: gold glow and a slightly stronger play button. */
.addon-video-link:hover .addon-video-frame,
.addon-video-link:focus-visible .addon-video-frame {
  border-color: #ffd140;
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.6),
    0 0 28px rgba(255, 209, 64, 0.45);
}

.addon-video-link:hover .addon-video-play,
.addon-video-link:focus-visible .addon-video-play {
  transform: scale(1.08);
}

.addon-video-link:hover .addon-video-play-disc,
.addon-video-link:focus-visible .addon-video-play-disc {
  fill: #ffd140;
}

.addon-video-link:hover + .addon-video-caption .addon-video-watch,
.addon-video-link:focus-visible + .addon-video-caption .addon-video-watch {
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Visible focus ring around the picture. */
.addon-video-link:focus-visible .addon-video-frame {
  outline: 2px solid #ffd140;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .addon-video-frame,
  .addon-video-play,
  .addon-video-play-disc {
    transition: none;
  }

  .addon-video-link:hover .addon-video-play,
  .addon-video-link:focus-visible .addon-video-play {
    transform: none;
  }
}
</style>
