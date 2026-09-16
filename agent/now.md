# Hand-off

## comp4020-ass2-liuru: ninth run, verification only --- both remaining fresh angles now clean

Ninth run (100h to cutoff at the top --- prompt did not name this run as
last, so per doctrine step 4 this was still plan/build/deepen). Re-fetched
`.../api/assessments/assignment-2.json`: brief unchanged (45/20/35
process/artefact/brief split, `PROCESS.md` 400--600 words citing commits,
due noon Monday 21 September 2026 Canberra, marks back 2 October).

Took stock: `git status` clean, in sync with `origin/main` (confirmed with
`git fetch`), nothing uncommitted from run 8. `pnpm check` fully green (40
pages, 0 a11y violations, 0 broken links, 3 decks, 5 spec tests) --- same
as run 8 left it.

Ran the two fresh angles run 8's hand-off flagged as untried. Both came
back clean --- no defect found, but both genuinely checked rather than
assumed:

- **Deck rendering at both viewports.** Started `pnpm preview` (port 4323
  this time --- always read the server's own printed port, not last run's),
  opened all three decks (`week-01`, `week-09`, `week-11`) in
  `agent-browser` at 1920x1080 and 390x844. Checked title slides, the
  densest bullet list in each deck, a blockquote slide, and week-11's
  six-item list (`a dream` / `an illusion` / `a bubble` / `a shadow` /
  `dew` / `lightning` --- the highest overflow risk in the whole site,
  being the longest list on the smallest deck-relative text). Everything
  fits at both sizes: reveal.js's own scale-to-fit letterboxes the deck
  inside the phone's portrait aspect ratio (expected behaviour, not a
  bug), text stays legible, nothing clips. CJK glyphs (week-11's own 六如
  title slide) render correctly too --- the theme's body font has real
  CJK fallback coverage. No fix needed.
- **axe-core "incomplete" (needs-manual-review) results across all 40
  pages**, not just the pass/fail count `pnpm check` reports. Every
  non-deck page (37 of them) flags the same `color-contrast` "incomplete"
  on nav links, the homepage's `.course-tags` pills, and the hero `h1`;
  the 3 deck pages flag nothing. Traced the cause instead of dismissing
  it (memory's own axe-core note explicitly warns against trusting
  "incomplete" at face value either way): axe can't rule out
  `astro-theme-university`'s own `body::after` (a 1px decorative vertical
  guideline, `styles/base.css`) as an occluding background layer when it
  walks the ancestor chain, so it flags every link/pill on every page
  conservatively rather than compute a real ratio. Verified by hand on
  the representative case (`a[href$="lectures/"]` in the nav): read the
  actual computed `oklch` text/background colours, converted to sRGB via
  a 1x1 canvas fillStyle round-trip (ground truth, not a guessed
  conversion), alpha-composited the text's 78%-opacity black over the
  near-white page background, then ran the real WCAG relative-luminance
  formula by hand --- **8.9:1**, well past both AA (4.5:1) and AAA (7:1).
  This is the same false-positive family as assignment-1's gradient
  background (memory's own axe-core note): a real check, not a reflexive
  dismissal, and it came back genuinely fine. This is starter-template
  chrome (`body::after`), not anything in this repo's own content, so
  there's nothing here to fix even if it weren't fine.

No code changes this run --- both checks confirmed existing work is
correct rather than finding something to fix. `git status` stayed clean
throughout; nothing to commit.

## What's still open

- `PROCESS.md`: still template boilerplate, for the finishing run. Real
  commit list to cite (in order): `2e8901c`, `a00fe6d`, `9968cc0`,
  `f818dfe`, `547c0ad`, `78552eb`, `4c9943f`, `e1a1799`, `43e7077`,
  `a9330dc`, `afd1deb`, `2daeb59`, `ae7b3a1` (no new commits since run 8,
  since this run made none).
- All known verification/deepening angles are now exhausted and clean:
  fact-check (run 5), coherence/viewport (run 6), assessment-page
  consistency (run 7), graph-connectivity (run 8, found and fixed one
  real gap), deck rendering at both viewports (run 9), axe "incomplete"
  results (run 9). If a future non-final run wants genuinely fresh
  ground rather than re-treading these six passes: re-read the brief's
  own "twelve weeks that repeat one another" warning and re-read two or
  three non-adjacent session pages back to back as a marker would in
  their ten-minute pass, watching specifically for structural repetition
  across weeks (not fact accuracy, not a11y, not links --- pure "does
  this feel like a swapped-nouns template" the way `pnpm check` cannot
  detect). Not yet tried as its own deliberate pass.
- No live/deployed-URL verification yet --- not required until the
  finishing run per doctrine step 6.

## The single most important next action

If this run's prompt still isn't the last: read this file, confirm `git
log` still shows `ae7b3a1` on top (no run-9 commit since none was needed),
then try the "does this feel templated" re-read above rather than
re-running any of the six now-completed passes. If the prompt names this
run as the *last* one: run `pnpm check` and `pnpm check:evidence` fresh,
write `PROCESS.md` for real (cite the commit list above in order; the
brief wants a spine --- what a good course looks like, which decisions
became a `CLAUDE.md` rule or a `spec/` check, which were deliberately left
out, not a commit-by-commit diary --- the graph-connectivity fix from run
8 is a good example of a decision *not* encoded as a rule, since it was a
one-off content fix, not a recurring pattern worth a spec check), verify
live in a real browser at both marking viewports against the actual
deployed GitHub Pages URL once published, then commit, push, and update
this file to say it's shipped.
