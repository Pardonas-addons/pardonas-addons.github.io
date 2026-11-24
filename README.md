# Pardona's Addons – website

This repository contains the handbook and help site for **Pardona's Addons**, a small suite of World of Warcraft addons made for WoW Forever. The site is built with [VitePress](https://vitepress.dev/) and is available in English and German.

## Structure

```
docs/                     English pages (root locale)
docs/de/                  German pages (same paths as English)
docs/public/              Static files served as-is (e.g. pardona.svg)
docs/public/shots/        Screenshots shown on the home page and in the handbook (see "Screenshots")
docs/public/og/           Link-preview image (see "SEO")
docs/public/robots.txt    Crawler rules (see "SEO")
docs/.vitepress/config.ts Site-wide configuration
docs/.vitepress/seo.ts    Head tags, structured data and sitemap alternates (see "SEO")
docs/.vitepress/locales/  One file per language (nav, sidebar, UI texts, search texts)
  en.ts, de.ts            Language files
  index.ts                Combines the language files
  types.ts                Shared types
docs/.vitepress/theme/    Custom "Pardona" theme (extends the default theme)
  index.ts                Theme entry, loads the Cinzel font, registers components
  style.css               Colours and global styles (sub-pages, sidebar, shared panel look)
  addons.ts               Addon data: quality, versions, handbook path, store links, screenshots
  classes.ts              Buff Reminder classes: order and class colours (see "Class pages")
  usePardona.ts           Localized texts and path prefix of the current language
  PardonaFooter.vue       Footer shown on every page (legal notice, privacy, trademark note)
  Home*.vue               Sections of the home page (see "Design")
  Addon*.vue, Mock*.vue,  Building blocks (see "Design")
  ShotFrame.vue, OrnamentDivider.vue,
  DocShot.vue, DocShotRow.vue,
  ClassHeader.vue, ClassCards.vue
.github/workflows/pages.yml  Build and (optional) deployment
scripts/og-image.mjs      Generates the link-preview image (see "SEO")
```

## Editing content

- Pages are Markdown files under `docs/` (English) and `docs/de/` (German).
- The handbook content of each addon comes from the addon's team and is kept here in `docs/` (English) and `docs/de/` (German).
- **Every page has the same path in every language**, e.g. `docs/buff-reminder/getting-started.md` and `docs/de/buff-reminder/getting-started.md`. This way the language switcher always lands on the same page. When you add a page, add it in every language.
- The sidebar and the navigation are defined per language in `docs/.vitepress/locales/<code>.ts`. When you add a page, add it to the sidebar in every language file.
- Texts of the custom components (footer, home page, addon tooltips, mocks) are also in the language files (`themeConfig.pardona`).
- Placeholder pages contain an `::: info` block; replace it with real content.

## Design

The site uses the "Pardona" style: dark violet with a fine gold edge, inspired by in-game item tooltips. The home page is a set of full-width sections (`layout: page` with `<HomePage />`); the sub-pages use the default VitePress layout with a calmer version of the same style.

### Design tokens

| Token | Value |
| --- | --- |
| Background gradient | `#33174C` → `#140821` (home hero: `#2a1240` → `#140821`) |
| Gold border | `#D9AD40` |
| Title gold | `#FFD140` |
| Text | `#F2EDFF` |
| Hint text | `#A894C2` |
| Accent | `#7340A6` |
| Button background | `#472466` |

Item quality colours show the maturity of an addon: **epic** `#a335ee` = stable, **rare** `#2f8fff` = beta, **uncommon** `#1eff00` = alpha. Tooltip text colours follow the in-game convention: white `#ffffff`, green "Equip" lines `#1eff00`, flavour text `#ffd100` (italic), red `#ff2020`, grey/unavailable `#808080`.

### Fonts

- **Cinzel** (display font: home page titles, H1/H2 on sub-pages, sidebar group titles) comes from the npm package `@fontsource/cinzel` (exact version pinned in `package.json`). Weights 400/600/700 are imported in `theme/index.ts` and bundled by Vite, so they are served from this site.
- **Inter** (body text) is bundled by VitePress.

No font or other resource is loaded from a third-party server.

### Components

All components live in `docs/.vitepress/theme/` and are registered globally, so they can be used in any Markdown page.

| Component | Purpose |
| --- | --- |
| `HomePage.vue` | The home page: `HomeHero`, an `OrnamentDivider`, `HomePillars` and `HomeAddons`. |
| `HomeHero.vue` | Hero with title, tagline, buttons and a collage of three framed screenshots (`homeShots`). |
| `HomePillars.vue` | Three cards: "On its own", "Together a suite", "One look". |
| `HomeAddons.vue` | One showcase row per addon (screenshot frame + tooltip) and the quality legend. |
| `ShotFrame.vue` | Gold "screenshot" frame. Shows `src` as an image, or the default slot (a mock) on a dark game-scene background with a "Placeholder screenshot" caption. Props: `src`, `alt`, `width`, `height`, `fit` (`fill`/`center`), `loading` (`lazy`/`eager`), `tilt`, `perspective` (`left`/`right`). |
| `MockBuffList.vue` | Mock of the Buff Reminder list (`variant`: `short` or `full`). |
| `MockItemTooltip.vue` | Mock of an item tooltip (an invented item). |
| `MockMinimap.vue` | Mock of the minimap with the shared Pardona button and its menu. |
| `MockSettings.vue` | Mock of the "Pardona's Addons" settings panel. |
| `AddonTooltip.vue` | An addon shown as an item tooltip (`<AddonTooltip id="buffReminder" />`). |
| `AddonHeader.vue` | Compact strip with icon, name, status and links for the addon index pages (`<AddonHeader id="tooltips" />`). |
| `AddonIcon.vue`, `AddonLinks.vue` | Icon and chat-link style links shared by the two components above. |
| `DocShot.vue` | A screenshot in a handbook page: centred figure in the gold frame, shown at its real size at most (never upscaled), lazy loading, optional caption. Props: `src`, `alt`, `width`, `height`, `caption`. |
| `DocShotRow.vue` | Shows several `DocShot`s side by side; each shrinks in proportion to its width and the row wraps on small screens. |
| `ClassHeader.vue` | Class accent below the H1 of a Buff Reminder class page: a 3px bar fading from the class colour to transparent and the label "<class name> · Buff Reminder" (`<ClassHeader cls="druid" />`). See "Class pages". |
| `ClassCards.vue` | Card grid of the nine classes on `/buff-reminder/classes/` (`<ClassCards />`): 3 columns from 960px, 2 from 640px, 1 below; each card links to its class page. See "Class pages". |
| `OrnamentDivider.vue` | Gold lines with a diamond (`size`: `large`/`small`, `align`: `center`/`start`). A small one is inserted after every H1 by a Markdown plugin in `config.ts`, so pages need no extra markup. |

All motion (hover lift of the tooltips and class cards, button hover) is switched off for visitors who prefer reduced motion.

### Class pages

The Buff Reminder has one page per class under `docs/buff-reminder/classes/` (and `docs/de/…`). Each page has the same structure: H1, `<ClassHeader cls="…" />`, intro, one sentence explaining the beta badge, "At a glance" table, one section per settings tab, supplies table, `::: tip Recommended setup` box, screenshot comment, "See also" line.

- **`docs/.vitepress/theme/classes.ts`** lists the nine classes in sidebar order (druid, hunter, mage, paladin, priest, rogue, shaman, warlock, warrior) with `color` (class colour) and `textColor` (colour for the class name as text; the same as `color` except Shaman, `#4DA3FF` instead of `#0070DD`, which is too dark on the dark background). The class colour is an accent only (bar, card top edge, class name) and never used for body text.
- Class names and the one-line card texts are in the language files under `themeConfig.pardona.classes`; the addon name after the class name in `ClassHeader` is `themeConfig.pardona.classHeaderAddon`.
- The sidebar order of the class pages must match `classes.ts` in every language, so that the "Previous page" / "Next page" links go from class to class.
- No class icons or other Blizzard graphics.

### Beta badge

Beta features are marked with VitePress' built-in badge: `<Badge type="warning" text="beta" />`. Use it where a heading or a table cell ends with "(beta)"; in running text "(beta)" stays as plain text. The badge is orange (`#ff9a2e` text, transparent orange background, thin orange border); the colours are set through the `--vp-badge-warning-*` variables in `theme/style.css`, and the badge always uses the body font, also inside Cinzel headings.

### Tables

Header cells do not wrap (`white-space: nowrap`); on narrow screens VitePress scrolls wide tables sideways. Keep column heads short.

## Addon data and versions

- **`docs/.vitepress/theme/addons.ts`** is the single source of truth for each addon: `id`, `quality` (`epic`/`rare`/`uncommon`), `versions` (`stable`, `beta`, `alpha`), `handbook` path, `stores` (CurseForge/Wago URL, or `'soon'`), `available`, `repo` and an optional `shot` (see "Screenshots"); `homeShots` holds the hero collage images. After a release, update the version numbers there; the tooltips and headers on all pages and in all languages pick them up.
- **GitHub links** come from `repo` in `addons.ts`: the `[GitHub]` link in the addon header and the GitHub icon in the nav bar (`theme/NavGitHub.vue`), which points to the addon's repository inside its handbook section and to the organisation everywhere else.
- **All texts** (tooltip lines, status labels, link labels, home page texts) are in the language files under `themeConfig.pardona` (`docs/.vitepress/locales/<code>.ts`); the types are in `locales/types.ts`.

## Screenshots

The home page and the handbook show real in-game screenshots from `docs/public/shots/`:

| File | Size | Shows | Used in |
| --- | --- | --- | --- |
| `br-list-hero.png` | 424 × 272 | Buff Reminder warning list (5 rows) | Hero collage (`homeShots.buffList`); handbook: `buff-reminder/index.md` |
| `br-list-menu.png` | 798 × 563 | Full Buff Reminder warning list with the right-click food menu | Buff Reminder showcase (`shot`) |
| `tt-tooltip-hero.png` | 486 × 296 | Item tooltip | Hero collage (`homeShots.tooltip`) |
| `tt-tooltip-compare.png` | 796 × 414 | Item tooltip with the equipped-item comparison | Tooltips showcase (`shot`); handbook: `tooltips/index.md` |
| `ui-minimap.png` | 303 × 374 | Minimap in the Pardona style | UI showcase (`shot`) and hero collage (`homeShots.minimap`); handbook: `ui/index.md`, `ui/modules.md` |
| `br-settings-display.png` | 1102 × 878 | Buff Reminder settings, Display tab | Handbook: `buff-reminder/getting-started.md` |
| `br-style-pardona.png` | 424 × 563 | Buff Reminder warning list, Pardona style | Handbook: `buff-reminder/features.md` (style row) |
| `br-style-classic.png` | 424 × 563 | Buff Reminder warning list, Classic style | Handbook: `buff-reminder/features.md` (style row) |
| `br-style-compact.png` | 328 × 321 | Buff Reminder warning list, Compact style | Handbook: `buff-reminder/features.md` (style row) |

A screenshot is described in `docs/.vitepress/theme/addons.ts` as `{ src, width, height, fit? }`:

- `src` is the path below `docs/public/` (e.g. `'/shots/br-list-menu.png'`); the base path is added by `ShotFrame.vue`.
- `width`/`height` are the image's real pixel size. They are set as attributes on the `<img>`, so the image does not cause layout shift.
- `fit: 'fill'` (default): the frame takes the image's aspect ratio and the image fills the frame width. Best for screenshots cropped tightly around the interface.
- `fit: 'center'`: the frame stays 16:10 with the dark "game scene" background and the image is centred at its natural size (scaled down if needed, never up). Best for small or portrait images.

Each addon's `shot` is used in its showcase row on the home page (lazy loading). `homeShots` holds the three images of the hero collage (eager loading). Alt texts are in the language files under `themeConfig.pardona.shotAlt`. Without a screenshot, `ShotFrame` falls back to its mock, captioned "Placeholder screenshot".

### Home page collage

The three tilted screenshots in the hero collage are pre-rendered: `scripts/hero-shots.mjs` draws each gold frame straight at 4x size, rotates it and scales it down, and writes `docs/public/shots/hero/*.png` (1x and @2x) plus their positions in `docs/.vitepress/theme/hero-shots.json`. The browser then shows them 1:1 without scaling or rotating, so thin lines stay sharp. The collage geometry (frame widths, angles, positions) lives at the top of the script. After replacing `br-list-hero.png`, `tt-tooltip-hero.png` or `ui-minimap.png`, or changing the geometry, run

```bash
npm i --no-save sharp && node scripts/hero-shots.mjs
```

and commit the generated PNGs and the JSON.

### Screenshots in handbook pages

Handbook pages use `DocShot` (one image) and `DocShotRow` (several images side by side). Pass the real pixel size; alt text and caption are written in the page's language:

```md
<DocShot src="/shots/br-settings-display.png" alt="Buff Reminder settings, Display tab" :width="1102" :height="878" />

<DocShotRow>
  <DocShot src="/shots/br-style-pardona.png" alt="Warning list in the Pardona style" :width="424" :height="563" caption="Pardona" />
  <DocShot src="/shots/br-style-compact.png" alt="Warning list in the Compact style" :width="328" :height="321" caption="Compact" />
</DocShotRow>
```

Screenshots that do not exist yet are kept in the page as an HTML comment (`<!-- screenshot: … -->`) describing the planned image.

### Adding or replacing a screenshot

1. Put the image into `docs/public/shots/`, e.g. `docs/public/shots/buff-reminder.png`.
2. Strip all metadata before committing, e.g.
   ```bash
   exiftool -all= -overwrite_original docs/public/shots/buff-reminder.png
   ```
   or
   ```bash
   mogrify -strip docs/public/shots/buff-reminder.png
   ```
3. Set `shot: { src: '/shots/buff-reminder.png', width: …, height: …, fit: 'fill' }` for the addon in `docs/.vitepress/theme/addons.ts` (or change the entry in `homeShots`), using the image's real size.
4. Add or adjust the alt text in every language file (`shotAlt`).

Do not use images that contain Blizzard or WoW logos or artwork beyond the in-game interface you are showing.

## SEO

- **Titles:** every page title is `<page title> | Pardona's Addons` (`titleTemplate` in `docs/.vitepress/seo.ts`, used by `config.ts`). The page title is the first `# heading`, or `title` in the page's frontmatter where the heading alone would be ambiguous (e.g. `FAQ – Buff Reminder`). The two home pages set their full title in the frontmatter with `titleTemplate: false`.
- **Descriptions:** every page has a `description` in its frontmatter (120–160 characters, plain and factual). When you add a page, add one in every language. The site-wide `description` in the language files is only the fallback.
- **Head tags:** `transformHead` in `config.ts` calls `seoHead()` in `docs/.vitepress/seo.ts`. Per page it adds the canonical URL (`https://pardonas-addons.de/…`, clean URLs, index pages with trailing slash), `hreflang` alternates (`en`, `de`, `x-default` = English), Open Graph and Twitter card tags (title, description, URL, locale, preview image). `theme-color` is set site-wide in `config.ts`. The 404 page gets none of these.
- **Structured data (JSON-LD):** the home pages get a `WebSite` object; the index pages of released addons (`available: true` with a CurseForge URL in `addons.ts`) get a `SoftwareApplication` object with the addon name from the language file, the page description, the version (`softwareVersion` in `addons.ts`, else `versions.stable`, else `versions.beta`) and the CurseForge URL as `downloadUrl`. Pardona's UI gets none until it is released.
- **Sitemap:** VitePress writes `sitemap.xml` on build (`sitemap` in `config.ts`); `sitemapItems()` in `seo.ts` adds the EN/DE alternates to every URL and leaves out the 404 page.
- **robots.txt:** `docs/public/robots.txt` allows everything and points to the sitemap.
- **Preview image:** `docs/public/og/pardona-og.png` (1200 × 630) is generated by `scripts/og-image.mjs` from `pardona.svg`, two screenshots in `docs/public/shots/` and the Cinzel font. To regenerate it (the two packages are installed only temporarily and are not part of `package.json`):

  ```bash
  npm ci
  ```

  ```bash
  npm i --no-save sharp opentype.js
  ```

  ```bash
  node scripts/og-image.mjs
  ```

  The script writes the PNG without metadata. Check afterwards that the file only contains the PNG chunks `IHDR`, `PLTE`, `tRNS`, `sRGB`, `gAMA`, `cHRM`, `pHYs`, `IDAT` and `IEND`.

## Build locally

Requirements: Node.js (current LTS) and npm.

```bash
npm ci
```

```bash
npm run docs:dev
```

```bash
npm run docs:build
```

```bash
npm run docs:preview
```

- `docs:dev` starts a local development server with live reload.
- `docs:build` builds the static site into `docs/.vitepress/dist/`.
- `docs:preview` serves the built site locally.

## Adding a new language

Example: French (`fr`). The same works for `es`, `ru`, `pt-br`, `it`, …

1. **Pages:** copy `docs/de/` to `docs/fr/` and translate the pages. Keep all file names and paths unchanged.
2. **Language file:** copy `docs/.vitepress/locales/de.ts` to `docs/.vitepress/locales/fr.ts` and
   - set `const p = '/fr'`,
   - set `label` (e.g. `'Français'`), `lang` (e.g. `'fr-FR'`) and `link: '/fr/'`,
   - translate `title`/`description`, the nav and sidebar texts, the UI labels, the `pardona` texts (footer, home page, addon tooltips, mocks) and the `search` texts.
3. **Register it:** add one line to `docs/.vitepress/locales/index.ts`:
   ```ts
   import fr from './fr'
   ```
   and add `fr: fr` to the `all` object in the same file.
4. **SEO:** add the language to `langs` in `docs/.vitepress/seo.ts` (Open Graph locale and image alt text) and extend the path handling and the sitemap alternates there; give every page a `description` in its frontmatter (see "SEO").
5. Run `npm run docs:build` and check that it succeeds.

## Publishing

The workflow `.github/workflows/pages.yml` builds the site on every push and pull request to `main`. It only deploys when **both** of these are set up:

1. GitHub Pages is enabled for the repository with source **"GitHub Actions"** (Settings › Pages).
2. The repository variable **`PAGES_ENABLED`** is set to `true` (Settings › Secrets and variables › Actions › Variables).

Until then the workflow only builds and stays green.

A custom domain can be added later with a `docs/public/CNAME` file containing the domain name.

## Changelogs

The changelog pages of the Buff Reminder and ToolTips (`<addon>/changelog`, EN and DE) are built from the `CHANGELOG.md` on the `develop` branch of each addon's repository; the addon maintains that file, not this site.

- `docs/.vitepress/theme/changelog.data.ts` loads the files **at build time only** (visitors never contact GitHub) and parses them: everything before the first version heading, including `## Unreleased`, is hidden. `Changelog.vue` (`<Changelog id="buffReminder" />`) shows one heading per version with its date and a stable/beta badge; the heading ids are `v` + version with non-alphanumerics as `-` (e.g. `#v1-4-1`, `#v1-5-0-beta4`). The changelog stays English in both languages.
- The workflow `.github/workflows/pages.yml` rebuilds the site **daily at 04:17 UTC**, so new versions appear without a commit here. A rebuild can also be started by hand with **Run workflow** (Actions › Pages).
- In CI (`CI` is set) the build **fails** if a changelog cannot be loaded or has no version heading, so the old site stays online. Local builds show a short note on the page instead.
- GitHub disables scheduled workflows in public repositories after 60 days without repository activity. If that happens, re-enable the workflow under **Actions**.
- To add the changelog of another addon: add the raw URL of its `CHANGELOG.md` to `changelogSources` in `docs/.vitepress/theme/addons.ts` (only the build-time loader reads it, so the URL is not shipped to visitors), add `docs/<addon>/changelog.md` and `docs/de/<addon>/changelog.md` with `<Changelog id="…" />` and add the sidebar entries in every language file.

## Visitor statistics

Page views are counted with **Umami Cloud** (EU region) without loading Umami's script: `docs/.vitepress/theme/analytics.ts` sends one request per page view to Umami's collect API (`https://gateway.umami.is/api/send`), in the same format as Umami's own tracker. The website ID is the constant `WEBSITE_ID` in that file.

- It only runs on `pardonas-addons.de` and `www.pardonas-addons.de` (never in dev, preview or forks) and sends nothing when Do Not Track or Global Privacy Control is on.
- No cookies, no browser storage; the only state is in memory.
- To switch the statistics off, set `WEBSITE_ID` to `''`.
- If anything about the statistics changes (service, data sent, storage region or retention), update the privacy policy in `docs/privacy.md` and `docs/de/privacy.md` (section 4) as well.

## Rules

- **No external resources** on the site: no external fonts (e.g. Google Fonts), no CDNs, no third-party analytics scripts, no embedded videos, no third-party scripts, no cookies, no external images. Fonts only from npm packages bundled by Vite (Cinzel) or VitePress (Inter). The only exception is the first-party module `docs/.vitepress/theme/analytics.ts`, which posts page views to `gateway.umami.is` (see "Visitor statistics"); no third-party script is loaded.
- **No Blizzard or WoW logos or artwork.** The text "Made for WoW Forever" is fine. Plain outgoing hyperlinks (CurseForge, Wago, GitHub) are fine.
- **No tracking** beyond the page view statistics in `analytics.ts`: they only run on pardonas-addons.de, use no cookies or browser storage and respect Do Not Track / Global Privacy Control.
- **Images must be stripped of metadata** before committing (EXIF, XMP, embedded provenance data; for SVG: `<metadata>`, editor namespaces and comments).
- All texts in the repository are in English, except the German pages under `docs/de/`.
