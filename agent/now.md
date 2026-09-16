# Hand-off

## comp4020-ass2-liuru: eighth work run, closed a real graph-connectivity gap

Eighth run (111h to cutoff at the top --- prompt did not name this run as
last, so per doctrine step 4 this was still plan/build/deepen). Re-fetched
`.../api/assessments/assignment-2.json`: brief unchanged (45/20/35
process/artefact/brief split, `PROCESS.md` 400--600 words citing commits,
due noon Monday 21 September 2026 Canberra, marks back 2 October).

Took stock: `git status` clean, in sync with `origin/main`, nothing
uncommitted from run 7. `pnpm check` fully green (40 pages, 0 a11y
violations, 0 broken links, 3 decks, 5 spec tests).

Followed run 7's own suggested next angle --- read the built
`dist/api/index.json` course graph directly rather than re-running the
three now-completed verification passes (fact-check, coherence/viewport,
assessment-page consistency). Found a real, fixable gap, not a false
alarm this time:

- `graphCollections` in `src/site-config.ts` lists `people` as a
  graph-participating collection, but all three people nodes had degree 0
  in the actual built graph. Root cause, traced through the template
  source (`astro-course-university`'s `content-helpers.ts`,
  `RelatedContent.astro`, `schemas.ts`) and this repo's own
  `src/content.config.ts`: (1) `src/pages/people/[slug].astro` never
  rendered a `<RelatedContent>` block at all, unlike the sessions/lectures/
  assessments pages, which all have one; (2) no session or lecture ever
  declared a `related:` link pointing at a person (the separate `teachers:`
  ref field, used by the `TeachingTeam` component, is not part of the
  undirected `related` graph --- confirmed by reading
  `getRelatedEntries`/`refsOf`, which only reads `entry.data.related`);
  (3) this repo's local `people` zod schema (in `content.config.ts`, not
  extending `courseNodeSchema` the way sessions/lectures/assessments do)
  doesn't even define a `related` field, so declaring one directly on a
  person file would be silently stripped by zod's default strip-unknown-
  keys behaviour.
- Net effect before the fix: a marker clicking from a session into its
  teacher's bio (via the working `TeachingTeam` link) hit a dead end on
  the person page --- no way back to what that person teaches, despite
  `people` being declared as graph-connected.
- Fix (commit `ae7b3a1`): added `<RelatedContent entry={person}
  collections={graphCollections} />` to the people detail page, and added
  `people/idris-fenn` / `people/wren-okafor` to the `related:` lists of
  their specific sessions (`03-materials-lab`, `05-seal-clinic`,
  `09-model-audit`) and Wren's lecture (`week-09`). Verified in the built
  HTML: Idris's and Wren's bio pages now show a real "Related" block
  linking to their specialist teaching; Marisol's page correctly shows
  none (`grep -c` returned 0). `pnpm check` still fully green afterwards
  (edges 38 → 42, still 0 a11y violations, 0 broken links).
- Deliberate scope decision, not an oversight: did **not** add Marisol to
  any `related:` list. She teaches 9 of 12 sessions and 11 of 12 lectures
  --- a related-content link from her page to nearly the whole course
  would be noise, not the curated signal `related` is meant to carry
  (confirmed via the package's own schema-comment docstring: `related`
  drives "the undirected graph edges," distinct from `tags` and `links`).
  Her page correctly still shows no Related block; that's fine, not a gap.
- Known, accepted cosmetic side effect: because `related` is undirected
  and rendered on both connected pages by this template's own design
  (confirmed against existing content --- e.g. `sessions/04-brushwork`
  and `lectures/week-04` already double-list each other and the shared
  assessment), Idris's and Wren's session/lecture pages now show the same
  person link twice on one page: once under the pre-existing "Teaching
  team" section, once under the new "Related" block. This is consistent
  with the template's established pattern everywhere else in the site
  (nothing new), just slightly more visible for these 4 pages since
  "Teaching team" sits directly above "Related." Not worth engineering
  around --- doing so would mean either extending the local `people`
  schema or threading a second, restricted `collections` list through
  just these pages, more complexity than the cosmetic overlap justifies.

No other changes this run. `PROCESS.md` deliberately left as template
boilerplate --- confirmed still failing `pnpm check:evidence` exactly as
expected (2 fake cited commits, template comment still present); that's
correct for a non-final run, not a regression.

## What's still open

- `PROCESS.md`: still template boilerplate, for the finishing run. Real
  commit list to cite (in order): `2e8901c`, `a00fe6d`, `9968cc0`,
  `f818dfe`, `547c0ad`, `78552eb`, `4c9943f`, `e1a1799`, `43e7077`,
  `a9330dc`, `afd1deb`, `2daeb59`, `ae7b3a1` (this run's commit added to
  the end of run 7's list).
- Four verification/deepening passes are now done and clean: fact-check
  (run 5), coherence/viewport (run 6), assessment-page consistency (run
  7), graph-connectivity (run 8, found and fixed one real gap). If a
  future non-final run wants a genuinely fresh angle rather than
  re-treading these: the build looks solid. Two ideas not yet tried ---
  (a) read the three decks' actual rendered slide content in a browser at
  both viewports (checked structurally by astromotion's own check, but
  never eyeballed for the Slop palette/typography actually looking right
  on a real slide, only on ordinary pages); (b) re-run the axe-core
  "incomplete" (needs-manual-review) results specifically, not just the
  pass/fail count `pnpm check` reports, since those are worth a real look
  per `MEMORY.md`'s own axe-core note.
- No live/deployed-URL verification yet --- not required until the
  finishing run per doctrine step 6.

## The single most important next action

If this run's prompt still isn't the last: read this file, confirm `git
log` shows `ae7b3a1` on top, then try one of the two fresh angles above
(deck rendering at both viewports, or axe "incomplete" results) rather
than re-running any of the four now-completed passes. If the prompt names
this run as the *last* one: run `pnpm check` and `pnpm check:evidence`
fresh, write `PROCESS.md` for real (cite the commit list above in order;
the brief wants a spine --- what a good course looks like, which decisions
became a `CLAUDE.md` rule or a `spec/` check, which were deliberately left
out, not a commit-by-commit diary --- the graph-connectivity fix this run
is a good example of a decision *not* encoded as a rule, since it was a
one-off content fix, not a recurring pattern worth a spec check), verify
live in a real browser at both marking viewports against the actual
deployed GitHub Pages URL once published, then commit, push, and update
this file to say it's shipped.
