# Portfolio redesign — illustrated fieldbook

Implemented locally on `redesign/fieldbook-v1`. This revision follows the user's chosen reference, [Maggie Appleton's website](https://maggieappleton.com/), while retaining Kelvin's existing portfolio functionality. No push or deployment was performed.

The first redesign is available in commit `dbb8084` (rough draft). The pre-redesign baseline is `639133cc6ae6b9c02628eb4cfd2da4748da3109a`. Review this revision with `git diff`, including the new untracked artwork, stylesheet, and font files.

## What the reference contributed

The reference was inspected in a browser at desktop and phone widths, alongside its [Garden](https://maggieappleton.com/garden), article layout, and [colophon](https://maggieappleton.com/colophon).

The adopted ideas are a large serif introduction, a dark charcoal surface, bright pink and cyan accents, illustrated cards beside simpler lists, generous gaps between collections, and a quiet footer. These are adapted to engineering projects, security investigations, games, and music.

The reference's essays/notes/patterns/library organization becomes selected builds, investigations, discipline links, and an interactive shelf. Project states remain factual: completed, prototype, in progress, or release pending. The site does not relabel engineering work with botanical growth stages or invent a stream of essays to fill the layout.

The reference uses commercial Canela and supporting Lato type. This implementation uses locally served, open-license **Newsreader** for the serif voice and **Lato** for supporting text. No reference illustrations, font files, logo, or source code were copied.

## Visual system

| Purpose | Fixed palette |
| --- | --- |
| Background | `#1C1B18` |
| Cards | `#252420` |
| Primary text | `#D4D1CC` |
| Supporting text | `#AAA7A2` |
| Pink links | `#F078B8` |
| Cyan details and focus | `#34BAC6` |

The site now uses only the reference's dark appearance. The light palette and visitor theme switch were removed. Colour comes from links, small ornaments, original illustrations, and actual project imagery.

Four original SVG covers depict a sensor board, shell windows, a printer rebuild, and gearbox parts. They are conceptual illustrations, not technical diagrams. Actual project photographs and diagrams remain in the archive and detailed pages. The SVGs are rendered directly without an illustration library, image service, or animation dependency.

The transparent MachineGuard wiring diagram contains both white labels and black wires. Its image container now uses a medium neutral grey to keep both visible; the source image bytes are unchanged.

## Homepage

1. A large personal introduction establishes software, hardware, and curiosity. The supporting copy retains the embedded/systems emphasis and links to the existing résumé.
2. **The Fieldbook** introduces the collection and links to all 35 projects.
3. **Selected builds** pairs four illustrated stories with short descriptions: MachineGuard, DragonShell, the Dremel controller rebuild, and the manual transmission rebuild.
4. **Investigations & writeups** offers a quieter list of existing security material. It includes only available projects.
5. **Follow a thread** exposes all six disciplines and their registry-derived counts.
6. **Things to play with** presents the robotics simulator, UFO, a piano arrangement, and an original composition. Direct links go to their existing interactive sections.
7. A real BSides group photograph and brief community introduction retain the people and leadership side of the portfolio.

The former separate approach pitch, oversized project colour panels, and repeated recent-work rows have been removed from the homepage. Their underlying projects and history remain accessible. The mobile page stacks the featured cards and keeps the interactive shelf in two columns.

## Archive and reading pages

The archive keeps its two-column desktop gallery, single-column phone gallery, Index, and History. Cards use restrained charcoal borders, serif titles, and room around their summaries. Original photos remain the main archive imagery.

Existing search, collection filtering, Automotive vehicle filtering, independent date ordering, query parameters, and browser-history behavior are unchanged. History includes 11 community/achievement records when no project filter is active. The old Cybersecurity `?category=WiCyS%20CTF` links still work.

Project pages retain their breadcrumb, factual project state, contribution, source links, overview, contents navigation, and related work. Serif prose, clearer headings, softer callouts, and the new palette extend the reading experience throughout the site. Interface controls and technical code keep appropriate sans-serif and monospace fonts.

Useful review routes:

- `/`
- `/projects/`
- `/projects/?view=history`
- `/projects/?q=firmware`
- `/projects/auto/?vehicle=2002+Toyota+Tacoma`
- `/projects/embedded-systems/machineguard/`
- `/projects/cybersecurity/wicys-ctf-01/`
- `/projects/game-dev/ufo/`
- `/projects/music/beethoven-virus/`
- `/projects/engineering/robotic-arm-simulation/`
- `/resume/?focus=cybersecurity`

## Preserved content and features

- All 35 project routes, six category routes, detailed writeups, original photographs, and technical material.
- Dremel's cross-listing under Embedded & Systems and Mechatronics: 36 category memberships, 35 unique projects.
- Six playable game/simulation embeds with launch, close, and separate-tab controls.
- The robotics simulator and its numerical-method controls, loaded on demand.
- Three MusicXML scores, score rendering, play/pause/stop, and downloads.
- CTF downloads, local flag checks, and spoiler-controlled solutions. Upcoming challenges remain unavailable.
- Both résumé PDFs and optional preview.
- Five achievements, six event/leadership records, existing fragments, and image enlargement.
- Email, GitHub, LinkedIn, mobile navigation, keyboard focus, and reduced-motion support.

No project registry facts, source links, challenge binaries, game files, scores, or résumé PDFs were rewritten in this visual pass. Existing context and limitations are retained. `who_i_am.txt` remains guidance rather than an independently verified résumé.

## Implementation and maintenance

- `src/app/page.tsx` selects homepage project IDs and provides the short introductory wording.
- `src/components/ProjectArtwork.tsx` owns the original SVG covers and small ornament.
- `src/app/globals.css` contains theme tokens, shared page layouts, and preserved interactive styling. Obsolete homepage rules were removed.
- `src/app/fieldbook.css` contains the new editorial composition and responsive refinements.
- `src/app/font-faces.css` loads font files from `public/fonts`; both SIL Open Font Licenses are included.
- `src/app/layout.tsx` provides the simplified wordmark and footer.
- `scripts/generate-social-card.js` regenerates the matching static social images.
- The existing Next.js static-export architecture, image derivatives, lazy loading, and deferred interactive components remain intact. No new package dependencies were added.

## Verification of this revision

- Production `npm run build` passed, including TypeScript and all 53 generated routes/assets.
- The final dark palette was checked on six representative routes at 1,440, 768, and 360 px. Checks covered horizontal overflow, visible image loading, font loading, one H1, one main landmark, and removal of the theme switch. No findings or page errors.
- The earlier 31 interaction checks passed, including archive search/reset/empty states, invalid and legacy queries, vehicle filtering, sorting and browser history, image-dialog focus/scroll locking, both CTF flag outcomes, spoilers, demo launch/teardown, music rendering and playback controls, robotics rendering, résumé selection, and the mobile menu.
- The static export's 2,031 local link/resource references resolved with no missing targets.
- The technical wiring diagram's contrasting background was visually reviewed.
- `git diff --check` passed.

This was a Chromium review of representative layouts and interactions, not a full Safari/Firefox audit, screen-reader certification, or validation of game and numerical-model correctness. Local test servers are stopped after each check. Nothing was published.

## Saved previews

Current revision:

- [Desktop homepage](docs/redesign/reference/home-desktop.png)
- [Phone homepage](docs/redesign/reference/home-mobile.png)
- [Project archive](docs/redesign/reference/archive.png)
- [MachineGuard reading page](docs/redesign/reference/case-study.png)
- [Layout check results](docs/redesign/reference/layout-checks.json)
- [Earlier interaction check results](docs/redesign/reference/interaction-checks.json)

The original first-pass preview files in `docs/redesign/` remain for comparison.
