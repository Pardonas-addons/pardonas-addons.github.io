/**
 * Fetches the preview image of a YouTube video once and stores it in the repository,
 * so the site never loads anything from YouTube or Google for visitors.
 *
 * How to run (from the repository root; sharp is installed only temporarily and is
 * not part of package.json):
 *
 *   npm ci
 *   npm i --no-save sharp
 *   node scripts/video-thumb.mjs <youtubeId> <output.jpg>
 *
 * Example: node scripts/video-thumb.mjs -YVPeKhhIGg docs/public/video/br-intro.jpg
 *
 * Behind an HTTPS proxy, run it with NODE_USE_ENV_PROXY=1 (Node 22.21 or newer), because
 * Node's fetch ignores HTTPS_PROXY otherwise.
 *
 * - Tries maxresdefault.jpg; if it is missing (404) or narrower than 1280 px, it takes
 *   sddefault.jpg, then hqdefault.jpg.
 * - Images with black bars above and below (letterbox) are cropped to 16:9, centred:
 *   height = width × 9/16.
 * - Writes a progressive JPEG (quality 82) without metadata (no EXIF, ICC or XMP).
 * - Prints the source and the size. Put width and height into `video.thumb` in addons.ts.
 */
import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import sharp from 'sharp'

const [id, out] = process.argv.slice(2)
if (!id || !out || !/^[A-Za-z0-9_-]{6,20}$/.test(id)) {
  console.error('Usage: node scripts/video-thumb.mjs <youtubeId> <output.jpg>')
  process.exit(1)
}

/** Downloads one thumbnail variant; returns undefined when it does not exist. */
async function download(name) {
  const url = `https://i.ytimg.com/vi/${id}/${name}`
  const res = await fetch(url, { signal: AbortSignal.timeout(15_000) })
  if (res.status === 404) return undefined
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const meta = await sharp(buf).metadata()
  return { url, buf, width: meta.width, height: meta.height }
}

let src = await download('maxresdefault.jpg')
if (!src || src.width < 1280) src = (await download('sddefault.jpg')) ?? (await download('hqdefault.jpg'))
if (!src) throw new Error(`No preview image found for ${id}`)

// Crop letterbox bars: keep the centred 16:9 area.
let img = sharp(src.buf)
let { width, height } = src
const target = Math.round((width * 9) / 16)
if (height > target) {
  const top = Math.floor((height - target) / 2)
  img = img.extract({ left: 0, top, width, height: target })
  height = target
}

const file = resolve(out)
mkdirSync(dirname(file), { recursive: true })
// No withMetadata(): sharp writes only the JFIF header, no EXIF, ICC or XMP.
await img.jpeg({ quality: 82, progressive: true }).toFile(file)

console.log(`Source: ${src.url} (${src.width}x${src.height})`)
console.log(`Wrote ${out}: ${width}x${height}`)
