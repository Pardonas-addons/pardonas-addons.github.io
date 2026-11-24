<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { usePardona } from './usePardona'

const props = withDefaults(
  defineProps<{
    /** Screenshot path without base (e.g. '/shots/br-list-menu.png'). Without it the default slot (a mock) is shown. */
    src?: string
    alt?: string
    /** Intrinsic image size; avoids layout shift. Defaults to 16:10. */
    width?: number
    height?: number
    /**
     * 'fill': the frame takes the image's aspect ratio and the image fills its width.
     * 'center': the frame stays 16:10 with the dark scene; the image is centred, never upscaled.
     */
    fit?: 'fill' | 'center'
    /** 'eager' for images visible on first paint (hero), 'lazy' elsewhere. */
    loading?: 'lazy' | 'eager'
    /** Rotation in degrees. */
    tilt?: number
    /** Turn the frame slightly towards one side. */
    perspective?: 'left' | 'right'
  }>(),
  { alt: '', width: 1600, height: 1000, fit: 'fill', loading: 'lazy', tilt: 0 }
)

const { texts } = usePardona()

const imgAttrs = computed(() => ({
  src: withBase(props.src ?? ''),
  alt: props.alt,
  width: props.width,
  height: props.height,
  loading: props.loading,
  decoding: 'async' as const
}))

const transform = computed(() => {
  const parts: string[] = []
  if (props.perspective) parts.push(`perspective(1200px) rotateY(${props.perspective === 'right' ? 6 : -6}deg)`)
  if (props.tilt) parts.push(`rotate(${props.tilt}deg)`)
  // translateZ(0) gives the rotated frame its own anti-aliased compositing layer
  // (without it, GPU-composited browsers can draw stair-step edges).
  if (parts.length) parts.push('translateZ(0)')
  return parts.length ? parts.join(' ') : undefined
})
</script>

<template>
  <figure class="shot-frame" :class="{ 'shot-frame--transformed': transform }" :style="{ transform }">
    <div class="shot-inner">
      <img v-if="src && fit === 'fill'" class="shot-img" v-bind="imgAttrs" />
      <div v-else-if="src" class="shot-scene shot-scene--center">
        <img class="shot-img-center" v-bind="imgAttrs" />
      </div>
      <div v-else class="shot-scene">
        <div class="shot-mock"><slot /></div>
        <span class="shot-caption">{{ texts.placeholderShot }}</span>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.shot-frame {
  margin: 0;
  padding: 3px;
  border-radius: 10px;
  background: linear-gradient(145deg, #f3d27a, #a9791f 40%, #f0c75e 60%, #8a5f14);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.6),
    0 0 40px rgba(115, 64, 166, 0.35);
}

/* Tilted / turned frames: own layer, smooth edges. The transparent outline keeps the
   visible gold edge inside the layer instead of on its border, where it would alias. */
.shot-frame--transformed {
  backface-visibility: hidden;
  will-change: transform;
  outline: 1px solid transparent;
}

.shot-inner {
  overflow: hidden;
  border-radius: 8px;
  background: #0d1414;
}

.shot-img {
  display: block;
  image-rendering: auto;
  width: 100%;
  height: auto;
}

.shot-scene {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  padding: 26px 22px 34px;
}

/* Dark "game scene" behind the mock. */
.shot-scene::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 15% 90%, rgba(46, 92, 52, 0.55), transparent 55%),
    radial-gradient(ellipse at 85% 10%, rgba(115, 64, 166, 0.45), transparent 55%),
    linear-gradient(160deg, #1c2a2a 0%, #0d1414 55%, #1a1022 100%);
}

/* fit="center": fixed 16:10 scene, image centred at natural size (scaled down only). */
.shot-scene--center {
  display: block;
  min-height: 0;
  padding: 0;
  aspect-ratio: 16 / 10;
}

.shot-img-center {
  position: absolute;
  image-rendering: auto;
  inset: 0;
  margin: auto;
  width: auto;
  height: auto;
  max-width: calc(100% - 24px);
  max-height: calc(100% - 24px);
}

.shot-mock {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.shot-caption {
  position: absolute;
  right: 10px;
  bottom: 7px;
  font-size: 10px;
  line-height: 1.2;
  color: rgba(242, 237, 255, 0.45);
}
</style>
