# Fieldbook redesign — Test one

Implemented locally on `redesign/fieldbook-v1`. Baseline: `639133cc6ae6b9c02628eb4cfd2da4748da3109a`. No push or deployment was performed. The original implementation remains in Git history; the working changes can be reviewed with `git diff`.

## Direction

This implements the research plan’s **Engineering Fieldbook** recommendation, with the clearer technical hierarchy of **Precision Instrument**. The alternatives in the planning document are choices, not competing themes to combine into one page.

The professional emphasis is embedded software, firmware, and systems programming. Security is complementary evidence, with automotive work, games, and music retained as part of the person behind the work.

- Warm paper `#F3F0E8`, dark green ink `#202925`, muted green `#58645C`, accent `#2D624F`, and restrained rust `#96462E`.
- Dark alternative: `#171D1A` paper, `#E9ECE5` ink, `#A1CBB0` accent.
- Georgia headings, system sans-serif reading text, and occasional monospace labels. No remote font requests.
- Real project photographs and existing technical diagrams. Large editorial headings, ruled rows, asymmetrical featured work, quiet navigation, and small figure labels.
- The homepage features MachineGuard, DragonShell, and the Dremel controller rebuild. Project role, context, and limitations are stated without inventing outcomes.

## What changed

The homepage, navigation, footer, project archive, category pages, achievements, leadership page, résumé page, project shell, security writeup template, and challenge presentation have been rebuilt. Every project has a common reading layout and a single page title. The résumé includes readable project context and retains both original PDF variants.

The old gradient/glow background, repetitive dashboard-style homepage tiles, forced dark mode, and automatic loading of embedded demos have been removed. Security writeup styles no longer inject broad global selectors into unrelated pages. The social cards and favicon use the new identity.

A single registry drives project discovery and homepage selection. All 35 project routes and six discipline routes remain. The Dremel controller rebuild is cross-listed under Embedded & Systems and Mechatronics; this creates 36 discipline memberships, not a duplicate project. Plastic Mind is included in navigation and the sitemap. The nonexistent blog route was removed from the sitemap.

The archive provides Gallery, Index, and History views; local text search; collection filters where useful; vehicle filtering for Automotive; and independent date order. History also includes the 11 existing community/achievement records when no project filter is active. Search replaces the current URL; deliberate filter/view changes create history entries. Invalid values fall back to defaults. The old Cybersecurity `?category=WiCyS%20CTF` links still work.

Examples:

- `/projects/?view=history`
- `/projects/?q=firmware`
- `/projects/embedded-systems/?collection=CMPUT+379%3A+Operating+Systems`
- `/projects/auto/?vehicle=2002+Toyota+Tacoma`
- `/projects/?view=list&order=oldest`
- `/resume/?focus=cybersecurity`

## Preserved functionality

- All detailed project writeups, original photo collections, technical diagrams, and videos.
- Six playable game/simulation embeds, now behind a launch control, with separate-tab links and close controls.
- The robotics simulator and its numerical-method controls, loaded on demand.
- Three MusicXML scores, rendered on demand with play/pause/stop and download links. Score/audio errors have visible messages; Stop remains available after pausing.
- CTF challenge downloads, local flag checks, and spoiler-controlled solutions. Upcoming challenges remain labeled unavailable. The Bunny Tracker download now points to the existing `glitch.png`; challenge bytes were not modified.
- Both résumé PDFs and optional PDF preview.
- Five achievement records, six leadership/event records, existing deep-link fragments, and certificate/photo enlargement.
- Email, GitHub, LinkedIn, and light/dark preference persistence.

## Performance and accessibility

Responsive derivatives were generated for 187 referenced presentation images. They are static assets, so the site keeps its GitHub Pages export architecture. The 568 variants together are about 40.8 MiB; that is the complete derivative collection, not a page download. A 1,200 px MachineGuard feature image is about 121 KiB. Originals remain available. Below-fold images are lazy; the lead feature image is prioritized.

The archive registry, shared components, conditional bundle analysis, and deferred score/simulator imports reduce duplication and avoid initializing expensive interactive code on ordinary reading pages.

The redesign includes a focusable skip destination, one main landmark per page, visible keyboard focus, labeled controls, result and flag feedback announcements, reduced-motion handling, and mobile navigation with Escape/outside-click dismissal. Image enlargement uses a native modal dialog with focus containment, Escape dismissal, restored trigger focus, and background scroll locking. These measures do not constitute a formal accessibility certification.

## Content judgment

`who_i_am.txt` guided positioning and tone. It was not treated as a verified résumé. Conflicting student/graduation claims, uncorroborated job details, STM32 proficiency, and new project-performance metrics were not promoted into public claims. Existing coursework, roles, team boundaries, and known project limitations were retained. Missing projects such as profile-only software work were not fabricated to fill a layout.

Sort keys are implementation metadata, not claims of exact publication dates. Visible dates preserve the established project records; known month mismatches from the old timeline were corrected.

## Review this version

Start with `/`, then `/projects/`, MachineGuard, the Dremel rebuild, one challenge, a game, a score, and `/resume/`. Try the same pages in the dark theme and on a narrow viewport. The most useful feedback is about the overall identity, the density of the archive, the featured work selection, and whether the writing sounds like you.

Local preview and build commands are in the README. This is a complete first design direction to evaluate, not a publication decision.

## Validation

- Production `npm run build` passed, including Next.js TypeScript checks and static generation.
- All 46 content routes were visited in Chromium at 1,440 px and 390 px. Each had one main landmark and one H1, with no page errors or broken visible images. One overflow in a security writeup was identified and corrected.
- The repaired writeup, homepage, archive, and all three score pages were rechecked at 1,440 px and 360 px: no layout findings.
- All 31 final interaction checks passed: searching, clearing, invalid filter defaults, legacy query mapping, independent sorting, browser history, both flag outcomes, solution disclosure, dialog focus and scroll behavior, theme persistence, mobile navigation, and interactive loading/teardown.
- Representative interactive checks exercised UFO, Beethoven Virus score rendering and play/pause/stop, and the robotics canvas. The remaining original games/scores were preserved and their local links were checked; this was not a full gameplay or numerical-correctness audit.
- The static export contained 1,869 local resource/link references with no missing targets. External destinations were not audited.
- The image pipeline rerun reused all 187 originals and generated no unnecessary replacements. `git diff --check` passed.
- Original games, scores, downloadable challenge artifacts, and résumé PDFs have no Git changes.

Chromium checks cover this implementation on the tested layouts; Safari/Firefox, screen-reader review, and formal performance scoring were not part of this pass. No development or test server remains running.

Review artifacts: [desktop](docs/redesign/home-desktop.png), [mobile](docs/redesign/home-mobile.png), [dark theme](docs/redesign/home-dark.png), and [check results](docs/redesign/qa-results.json).
