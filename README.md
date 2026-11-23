# Pardona's Addons – website

This repository contains the handbook and help site for **Pardona's Addons**, a small suite of World of Warcraft addons made for WoW Forever. The site is built with [VitePress](https://vitepress.dev/) and is available in English and German.

## Structure

```
docs/                     English pages (root locale)
docs/de/                  German pages (same paths as English)
docs/public/              Static files served as-is (e.g. pardona.svg)
docs/.vitepress/config.ts Site-wide configuration
docs/.vitepress/locales/  One file per language (nav, sidebar, UI texts, search texts)
  en.ts, de.ts            Language files
  index.ts                Combines the language files
  types.ts                Shared types
docs/.vitepress/theme/    Custom "Pardona" theme (extends the default theme)
  index.ts                Theme entry, registers components
  style.css               Colours and styles
  PardonaFooter.vue       Footer shown on every page (legal notice, privacy, trademark note)
  AddonCards.vue          Addon cards on the home page
.github/workflows/pages.yml  Build and (optional) deployment
```

## Editing content

- Pages are Markdown files under `docs/` (English) and `docs/de/` (German).
- **Every page has the same path in every language**, e.g. `docs/buff-reminder/getting-started.md` and `docs/de/buff-reminder/getting-started.md`. This way the language switcher always lands on the same page. When you add a page, add it in every language.
- The sidebar and the navigation are defined per language in `docs/.vitepress/locales/<code>.ts`. When you add a page, add it to the sidebar in every language file.
- Texts of the custom components (footer, addon cards) are also in the language files (`themeConfig.pardona`).
- Placeholder pages contain an `::: info` block; replace it with real content.

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
   - translate `title`/`description`, the nav and sidebar texts, the UI labels, the `pardona` texts (footer, addon cards) and the `search` texts.
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

- **No external resources** on the site: no external fonts (e.g. Google Fonts), no CDNs, no analytics, no embedded videos, no third-party scripts, no cookies. Only system fonts or fonts bundled locally by VitePress. Plain outgoing hyperlinks (CurseForge, Wago, GitHub) are fine.
- **No tracking** of any kind.
- **Images must be stripped of metadata** before committing (EXIF, XMP, embedded provenance data; for SVG: `<metadata>`, editor namespaces and comments).
- All texts in the repository are in English, except the German pages under `docs/de/`.
