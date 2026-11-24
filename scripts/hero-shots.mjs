/**
 * Pre-renders the three tilted screenshots of the home page collage
 * (docs/public/shots/hero/*.png and *@2x.png) and writes their positions to
 * docs/.vitepress/theme/hero-shots.json, which HeroShot.vue / HomeHero.vue use.
 *
 * Browsers scale and rotate images on the GPU, which makes the thin 1px lines
 * inside the screenshots look jagged. Here every frame is drawn straight at
 * 4x size, rotated, then scaled down with lanczos3, so the browser only has
 * to show the result 1:1.
 *
 * How to run (from the repository root; sharp is installed only temporarily
 * and is not part of package.json):
 *
 *   npm ci
 *   npm i --no-save sharp
 *   node scripts/hero-shots.mjs
 *
 * Run it again after replacing one of the source screenshots or changing the
 * geometry below, and commit the generated PNGs and the JSON.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

// ---------------------------------------------------------------------------
// Collage geometry (CSS px). Single source of truth for the hero collage.
// ---------------------------------------------------------------------------
const STAGE = { width: 560, height: 580 }

const SHOTS = [
  // left/top or right/bottom place the straight frame box on the stage, as the old CSS did.
  { name: 'buff-list', key: 'buffList', src: 'docs/public/shots/br-list-hero.png', width: 360, angle: -5, left: 0, top: 10, z: 1 },
  { name: 'tooltip', key: 'tooltip', src: 'docs/public/shots/tt-tooltip-hero.png', width: 320, angle: 4, right: 0, top: 245, z: 2 },
  { name: 'minimap', key: 'minimap', src: 'docs/public/shots/ui-minimap.png', width: 240, angle: -2, left: 0, bottom: 10, z: 3 }
]

// Frame look, as in ShotFrame.vue.
const FRAME = {
  padding: 3,
  radius: 10,
  innerRadius: 8,
  innerBackground: '#0d1414',
  gradientAngle: 145,
  gradientStops: [
    [0, '#f3d27a'],
    [0.4, '#a9791f'],
    [0.6, '#f0c75e'],
    [1, '#8a5f14']
  ]
}

const SUPERSAMPLE = 4
const SCALES = [1, 2]
const OUT_DIR = 'docs/public/shots/hero'
const JSON_OUT = 'docs/.vitepress/theme/hero-shots.json'
// ---------------------------------------------------------------------------

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const at = (p) => resolve(root, p)

/** SVG gradient that matches CSS linear-gradient(<angle>deg, ...) on a w x h box. */
function cssGradient(id, w, h) {
  const a = (FRAME.gradientAngle * Math.PI) / 180
  const dx = Math.sin(a)
  const dy = -Math.cos(a)
  const len = Math.abs(w * dx) + Math.abs(h * dy)
  const cx = w / 2
  const cy = h / 2
  const stops = FRAME.gradientStops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')
  return `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${cx - (dx * len) / 2}" y1="${cy - (dy * len) / 2}" x2="${cx + (dx * len) / 2}" y2="${cy + (dy * len) / 2}">${stops}</linearGradient>`
}

/** Straight frame as PNG buffer, drawn at `k` device pixels per CSS px. */
async function straightFrame(src, frameW, innerH, k) {
  const p = FRAME.padding
  const innerW = frameW - 2 * p
  const frameH = innerH + 2 * p
  const shot = await sharp(at(src))
    .resize(innerW * k, innerH * k, { fit: 'fill', kernel: 'lanczos3' })
    .png()
    .toBuffer()
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${frameW * k}" height="${frameH * k}" viewBox="0 0 ${frameW} ${frameH}">
  <defs>
    ${cssGradient('gold', frameW, frameH)}
    <clipPath id="inner"><rect x="${p}" y="${p}" width="${innerW}" height="${innerH}" rx="${FRAME.innerRadius}"/></clipPath>
  </defs>
  <rect width="${frameW}" height="${frameH}" rx="${FRAME.radius}" fill="url(#gold)"/>
  <rect x="${p}" y="${p}" width="${innerW}" height="${innerH}" rx="${FRAME.innerRadius}" fill="${FRAME.innerBackground}"/>
  <image href="data:image/png;base64,${shot.toString('base64')}" x="${p}" y="${p}" width="${innerW}" height="${innerH}" clip-path="url(#inner)" preserveAspectRatio="none"/>
</svg>`
  return sharp(Buffer.from(svg)).png().toBuffer()
}

/** Size (CSS px) of the bounding box of a w x h box rotated by `deg`. */
function rotatedBox(w, h, deg) {
  const a = (Math.abs(deg) * Math.PI) / 180
  return { w: w * Math.cos(a) + h * Math.sin(a), h: w * Math.sin(a) + h * Math.cos(a) }
}

mkdirSync(at(OUT_DIR), { recursive: true })
const result = {}

for (const s of SHOTS) {
  const meta = await sharp(at(s.src)).metadata()
  const frameW = s.width
  const innerH = Math.round(((frameW - 2 * FRAME.padding) * meta.height) / meta.width)
  const frameH = innerH + 2 * FRAME.padding

  // 1x canvas: rotated bounding box plus 1px of transparent margin on each side for the anti-aliased edge.
  const box = rotatedBox(frameW, frameH, s.angle)
  const width = Math.ceil(box.w) + 2
  const height = Math.ceil(box.h) + 2

  for (const scale of SCALES) {
    const k = scale * SUPERSAMPLE
    const straight = await straightFrame(s.src, frameW, innerH, k)
    const rotated = await sharp(straight)
      .rotate(s.angle, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer({ resolveWithObject: true })
    // Pad the rotated image to exactly (canvas x scale x 4), centred, then scale down by 4.
    const targetW = width * k
    const targetH = height * k
    const padX = targetW - rotated.info.width
    const padY = targetH - rotated.info.height
    if (padX < 0 || padY < 0) throw new Error(`${s.name}: rotated image larger than canvas`)
    const padded = await sharp(rotated.data)
      .extend({
        left: Math.floor(padX / 2),
        right: Math.ceil(padX / 2),
        top: Math.floor(padY / 2),
        bottom: Math.ceil(padY / 2),
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer()
    const file = `${OUT_DIR}/${s.name}${scale === 1 ? '' : `@${scale}x`}.png`
    // No withMetadata(): only IHDR, pHYs, IDAT and IEND are written.
    await sharp(padded)
      .resize(width * scale, height * scale, { kernel: 'lanczos3' })
      .png({ compressionLevel: 9 })
      .toFile(at(file))
  }

  // Straight frame box on the stage; CSS rotate turned it around its centre.
  const boxLeft = s.left ?? STAGE.width - (s.right ?? 0) - frameW
  const boxTop = s.top ?? STAGE.height - (s.bottom ?? 0) - frameH
  const cx = boxLeft + frameW / 2
  const cy = boxTop + frameH / 2

  result[s.key] = {
    src: `/shots/hero/${s.name}.png`,
    src2x: `/shots/hero/${s.name}@2x.png`,
    width,
    height,
    left: Math.round(cx - width / 2),
    top: Math.round(cy - height / 2),
    z: s.z
  }
  const r = result[s.key]
  console.log(
    `${s.name.padEnd(10)} frame ${frameW}x${frameH} @ ${s.angle}deg -> ${width}x${height} (+@2x ${width * 2}x${height * 2}) at ${r.left},${r.top} z${r.z}`
  )
}

writeFileSync(at(JSON_OUT), JSON.stringify(result, null, 2) + '\n')
console.log(`Wrote ${JSON_OUT}`)
