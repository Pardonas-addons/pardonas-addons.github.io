<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { usePardona } from './usePardona'

const props = withDefaults(
  defineProps<{
    /** Screenshot path (e.g. '/shots/buff-reminder.png'). Without it the default slot (a mock) is shown. */
    src?: string
    alt?: string
    /** Intrinsic image size; avoids layout shift. Defaults to a 16:10 box. */
    width?: number
    height?: number
    /** Rotation in degrees. */
    tilt?: number
    /** Turn the frame slightly towards one side. */
    perspective?: 'left' | 'right'
  }>(),
  { alt: '', tilt: 0 }
)

const { texts } = usePardona()

const transform = computed(() => {
  const parts: string[] = []
  if (props.perspective) parts.push(`perspective(1200px) rotateY(${props.perspective === 'right' ? 6 : -6}deg)`)
  if (props.tilt) parts.push(`rotate(${props.tilt}deg)`)
  return parts.length ? parts.join(' ') : undefined
})
</script>

<template>
  <figure class="shot-frame" :style="{ transform }">
    <div class="shot-inner">
      <img
        v-if="src"
        class="shot-img"
        :src="withBase(src)"
        :alt="alt"
        :width="width ?? 1600"
        :height="height ?? 1000"
        loading="lazy"
        decoding="async"
      />
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

.shot-inner {
  overflow: hidden;
  border-radius: 8px;
  background: #0d1414;
}

.shot-img {
  display: block;
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
