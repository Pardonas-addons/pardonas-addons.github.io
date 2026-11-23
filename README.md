# Pardona's Addons – website

This repository contains the handbook and help site for **Pardona's Addons**, a small suite of World of Warcraft addons made for WoW Forever. The site is built with [VitePress](https://vitepress.dev/) and is available in English and German.

## Structure

```
docs/                     English pages (root locale)
docs/de/                  German pages (same paths as English)
docs/public/              Static files served as-is (e.g. pardona.svg)
docs/public/shots/        Screenshots shown on the home page (see "Screenshots")
docs/.vitepress/config.ts Site-wide configuration
docs/.vitepress/locales/  One file per language (nav, sidebar, UI texts, search texts)
  en.ts, de.ts            Language files
  index.ts                Combines the language files
  types.ts                Shared types
docs/.vitepress/theme/    Custom "Pardona" theme (extends the default theme)
  index.ts                Theme entry, loads the Cinzel font, registers components
  style.css               Colours and global styles (sub-pages, sidebar, shared panel look)
  addons.ts               Addon data: quality, versions, handbook path, store links, screenshots
  usePardona.ts           Localized texts and path prefix of the current language
  PardonaFooter.vue       Footer shown on every page (legal notice, privacy, trademark note)
  Home*.vue               Sections of the home page (see "Design")
  Addon*.vue, Mock*.vue,  Building blocks (see "Design")
  ShotFrame.vue, OrnamentDivider.vue
.github/workflows/pages.yml  Build and (optional) deployment
```

## Editing content

- Pages are Markdown files under `docs/` (English) and `docs/de/` (German).
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
| `OrnamentDivider.vue` | Gold lines with a diamond (`size`: `large`/`small`, `align`: `center`/`start`). A small one is inserted after every H1 by a Markdown plugin in `config.ts`, so pages need no extra markup. |

All motion (hover lift of the tooltips, button hover) is switched off for visitors who prefer reduced motion.

## Addon data and versions

- **`docs/.vitepress/theme/addons.ts`** is the single source of truth for each addon: `id`, `quality` (`epic`/`rare`/`uncommon`), `versions` (`stable`, `beta`, `alpha`), `handbook` path, `stores` (CurseForge/Wago URL, or `'soon'`), `available` and an optional `shot` (see "Screenshots"); `homeShots` holds the hero collage images. After a release, update the version numbers there; the tooltips and headers on all pages and in all languages pick them up.
- **All texts** (tooltip lines, status labels, link labels, home page texts) are in the language files under `themeConfig.pardona` (`docs/.vitepress/locales/<code>.ts`); the types are in `locales/types.ts`.

## Screenshots

The home page shows real in-game screenshots from `docs/public/shots/`:

| File | Size | Shows | Used in |
| --- | --- | --- | --- |
| `br-list-hero.png` | 424 × 272 | Buff Reminder warning list (5 rows) | Hero collage (`homeShots.buffList`) |
| `br-list-menu.png` | 798 × 563 | Full Buff Reminder warning list with the right-click food menu | Buff Reminder showcase (`shot`) |
| `tt-tooltip-hero.png` | 486 × 296 | Item tooltip | Hero collage (`homeShots.tooltip`) |
| `tt-tooltip-compare.png` | 796 × 414 | Item tooltip with the equipped-item comparison | Tooltips showcase (`shot`) |
| `ui-minimap.png` | 303 × 374 | Minimap in the Pardona style | UI showcase (`shot`) and hero collage (`homeShots.minimap`) |

A screenshot is described in `docs/.vitepress/theme/addons.ts` as `{ src, width, height, fit? }`:

- `src` is the path below `docs/public/` (e.g. `'/shots/br-list-menu.png'`); the base path is added by `ShotFrame.vue`.
- `width`/`height` are the image's real pixel size. They are set as attributes on the `<img>`, so the image does not cause layout shift.
- `fit: 'fill'` (default): the frame takes the image's aspect ratio and the image fills the frame width. Best for screenshots cropped tightly around the interface.
- `fit: 'center'`: the frame stays 16:10 with the dark "game scene" background and the image is centred at its natural size (scaled down if needed, never up). Best for small or portrait images.

Each addon's `shot` is used in its showcase row on the home page (lazy loading). `homeShots` holds the three images of the hero collage (eager loading). Alt texts are in the language files under `themeConfig.pardona.shotAlt`. Without a screenshot, `ShotFrame` falls back to its mock, captioned "Placeholder screenshot".

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
4. Run `npm run docs:build` and check that it succeeds.

## Publishing

The workflow `.github/workflows/pages.yml` builds the site on every push and pull request to `main`. It only deploys when **both** of these are set up:

1. GitHub Pages is enabled for the repository with source **"GitHub Actions"** (Settings › Pages).
2. The repository variable **`PAGES_ENABLED`** is set to `true` (Settings › Secrets and variables › Actions › Variables).

Until then the workflow only builds and stays green.

A custom domain can be added later with a `docs/public/CNAME` file containing the domain name.

## Rules

- **No external resources** on the site: no external fonts (e.g. Google Fonts), no CDNs, no analytics, no embedded videos, no third-party scripts, no cookies, no external images. Fonts only from npm packages bundled by Vite (Cinzel) or VitePress (Inter).
- **No Blizzard or WoW logos or artwork.** The text "Made for WoW Forever" is fine. Plain outgoing hyperlinks (CurseForge, Wago, GitHub) are fine.
- **No tracking** of any kind.
- **Images must be stripped of metadata** before committing (EXIF, XMP, embedded provenance data; for SVG: `<metadata>`, editor namespaces and comments).
- All texts in the repository are in English, except the German pages under `docs/de/`.
