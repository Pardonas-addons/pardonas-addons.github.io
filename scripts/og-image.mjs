/**
 * Generates the link-preview image docs/public/og/pardona-og.png (1200 x 630).
 *
 * How to run (from the repository root; the two packages are installed only
 * temporarily and are not part of package.json):
 *
 *   npm ci
 *   npm i --no-save sharp opentype.js
 *   node scripts/og-image.mjs
 *
 * The rasteriser has no Cinzel font installed, so every text is converted to
 * SVG paths with opentype.js from the @fontsource/cinzel files (a dev
 * dependency of the site). The PNG is written without metadata.
 */
import { readFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import opentype from 'opentype.js'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const at = (p) => resolve(root, p)

const W = 1200
const H = 630
const out = at('docs/public/og/pardona-og.png')

const fontFile = (weight) => at(`node_modules/@fontsource/cinzel/files/cinzel-latin-${weight}-normal.woff`)
const toArrayBuffer = (buf) => buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
const cinzel400 = opentype.parse(toArrayBuffer(readFileSync(fontFile(400))))
const cinzel700 = opentype.parse(toArrayBuffer(readFileSync(fontFile(700))))

/** SVG path data of an opentype.js path (its own toPathData rounding can emit NaN). */
function pathData(path) {
  const n = (v) => (Math.round(v * 100) / 100).toString()
  return path.commands
    .map((c) => {
      switch (c.type) {
        case 'M':
        case 'L':
          return `${c.type}${n(c.x)} ${n(c.y)}`
        case 'Q':
          return `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`
        case 'C':
          return `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`
        default:
          return 'Z'
      }
    })
    .join('')
}

/** Text as one SVG path. `spacing` is extra space between letters in em. Returns path data and width. */
function textPath(font, text, x, baseline, size, spacing = 0) {
  const scale = size / font.unitsPerEm
  // One glyph per character: the web font subsets lack some ligature glyphs (e.g. "ff").
  const glyphs = [...text].map((ch) => font.charToGlyph(ch))
  let cursor = x
  let d = ''
  glyphs.forEach((glyph, i) => {
    d += pathData(glyph.getPath(cursor, baseline, size))
    cursor += glyph.advanceWidth * scale + spacing * size
    if (i < glyphs.length - 1) cursor += font.getKerningValue(glyph, glyphs[i + 1]) * scale
  })
  if (glyphs.length) cursor -= spacing * size
  return { d, width: cursor - x }
}

const dataUri = (file, type) => `data:${type};base64,${readFileSync(at(file)).toString('base64')}`

/** A screenshot in a 3px gold frame (radius 10px) with a dark drop shadow. */
function shot(file, x, y, w, h) {
  const b = 3
  const id = file.replace(/\W/g, '')
  return `
  <g>
    <rect x="${x - b}" y="${y - b + 14}" width="${w + 2 * b}" height="${h + 2 * b}" rx="10" fill="#000" opacity="0.7" filter="url(#shadow)"/>
    <rect x="${x - b}" y="${y - b}" width="${w + 2 * b}" height="${h + 2 * b}" rx="10" fill="#D9AD40"/>
    <clipPath id="clip-${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7"/></clipPath>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#0d1414"/>
    <image href="${dataUri(file, 'image/png')}" x="${x}" y="${y}" width="${w}" height="${h}" clip-path="url(#clip-${id})" preserveAspectRatio="none"/>
  </g>`
}

// Left column
const left = 80
const emblemSize = 120
const emblemY = 92
const eyebrow = textPath(cinzel700, 'MADE FOR WOW FOREVER', left, emblemY + emblemSize + 54, 22, 0.22)
// The name is set on two lines (as in the hero of the home page) so it fits next to the screenshots.
const titleLine1 = textPath(cinzel700, "Pardona's", left, emblemY + emblemSize + 140, 84)
const titleLine2 = textPath(cinzel700, 'Addons', left, emblemY + emblemSize + 228, 84)
const subtitle = textPath(cinzel400, 'Buff Reminder · ToolTips · UI', left, emblemY + emblemSize + 290, 28)

// Right column: two screenshots, slightly overlapping, not rotated.
const buffs = { file: 'docs/public/shots/br-list-hero.png', w: 424, h: 272 }
const tip = { file: 'docs/public/shots/tt-tooltip-hero.png', w: 437, h: 266 } // 486 x 296 scaled to 90 %
const textRight = Math.max(titleLine1.width, titleLine2.width, subtitle.width, eyebrow.width) + left
const buffsX = Math.max(640, Math.round(textRight + 40))

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#33174C"/>
      <stop offset="1" stop-color="#140821"/>
    </linearGradient>
    <radialGradient id="glow" cx="${W * 0.74}" cy="${H * 0.5}" r="${W * 0.42}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="rgb(115,64,166)" stop-opacity="0.5"/>
      <stop offset="1" stop-color="rgb(115,64,166)" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feGaussianBlur stdDeviation="16"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <image href="${dataUri('docs/public/pardona.svg', 'image/svg+xml')}" x="${left}" y="${emblemY}" width="${emblemSize}" height="${emblemSize}"/>
  <path d="${eyebrow.d}" fill="#D9AD40"/>
  <path d="${titleLine1.d}${titleLine2.d}" fill="#FFD140"/>
  <path d="${subtitle.d}" fill="#F2EDFF"/>
  ${shot(buffs.file, buffsX, 84, buffs.w, buffs.h)}
  ${shot(tip.file, Math.min(buffsX + 70, W - 60 - tip.w), 300, tip.w, tip.h)}
</svg>`

mkdirSync(dirname(out), { recursive: true })
// No withMetadata(): sharp then writes no EXIF/XMP/ICC chunks.
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out)
console.log(`Wrote ${out} (text column ends at x=${Math.round(textRight)})`)
