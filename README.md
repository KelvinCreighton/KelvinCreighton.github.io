# Kelvin Creighton — Portfolio

A personal fieldbook of embedded software, systems programming, security investigations, repair projects, games, and music.

This repository uses Next.js 16, React 19, TypeScript, Tailwind CSS, and a static export for GitHub Pages at `kelvincreighton.ca`. It does not require a production Node server.

## Local preview

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. For a production export:

```sh
npm run build
python3 -m http.server 8080 --directory out
```

Open `http://localhost:8080`. `next start` does not serve the static export. Publication is a separate step; building or previewing does not deploy anything.

## Content and components

- `src/data/projects.ts`: the 35-project registry, six disciplines, cross-listings, dates, summaries, source/demo/score links, and homepage selection.
- `src/data/community.ts`: leadership records and achievements.
- `src/app/projects/**/page.tsx`: detailed project content, with existing URLs preserved.
- `src/components/CaseStudyLayout.tsx`: common project header, contribution/outcome summaries, contents navigation, and related work.
- `src/components/ProjectArchive.tsx`: search, collection and vehicle filters, gallery/index/history views, and URL state.
- `src/components/DemoFrame.tsx` and `InteractiveProject.tsx`: on-demand games, robotics simulation, and sheet music.
- `src/app/globals.css`: the Fieldbook palette, typography, responsive layouts, and light/dark themes.
- `public/games`, `public/scores`, `public/downloads`: original interactive artifacts and challenge files.

## Updating images

Keep originals under `public/images` and reference their original paths in source or project data. Then run:

```sh
npm run optimize-images
```

The script creates responsive WebP derivatives at up to 480, 800, 1,200, and 1,600 px, without enlarging originals. It writes `src/data/image-manifest.json`; `BlurImage` uses this for static `srcset` output. Originals, forensic challenge files, games, scores, and PDFs are never rewritten by this pipeline. Its cache and generated images live under `public/images/responsive`.

The social preview cards are also reproducible:

```sh
node scripts/generate-social-card.js
```

Use `ANALYZE=true npm run build` when a bundle report is wanted. It is disabled during ordinary builds.

See [REDESIGN_NOTES.md](REDESIGN_NOTES.md) for the first redesign’s scope, review routes, and validation notes.
