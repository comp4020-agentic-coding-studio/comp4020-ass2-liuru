# Hand-off

## comp4020-ass2-liuru: seventh work run, assessment-page consistency check, no changes needed

Seventh run (117h to cutoff at the top --- prompt did not name this run as
last, so per doctrine step 4 this was still plan/build/deepen, not finish).
Re-fetched `.../api/assessments/assignment-2.json` and reconfirmed the brief
unchanged: 45%/20%/35% process/artefact/brief split, `PROCESS.md` 400--600
words citing commits, due noon Monday 21 September 2026 Canberra.

Took stock: `git status` clean, in sync with `origin/main`, nothing
uncommitted from run 6. `pnpm check` fully green (40 pages, 0 a11y
violations, 0 broken links, 3 decks, 5 spec tests) --- unchanged from run 6.

Followed up on run 6's own suggested new angle (word-count/format
consistency across the three assessment pages, not yet checked at the
time):

- `attribution-note.md` (25%, criteria 40+35+25=100), `dossier.md` (35%,
  criteria 30+30+25+15=100), `final-project.md` (40%, holistic) --- weights
  sum to 100 exactly, already enforced by
  `spec/course-structure.test.ts`'s "weights sum to exactly 100" test, so
  this was a real check, not a gap.
- Read all three briefs in full: stated word counts (800--1200,
  2000--3000, unbounded) match what each brief's own "what you submit"
  section asks for, and the escalation across them (single evidence type →
  three-plus with an explicit log → dossier-plus-live-defense) is coherent,
  not just relabelled.
- Cross-checked the policies page's "declaring assistance" and "Idris for
  materials and seals, Marisol for everything else" claims against the
  actual people bios (`idris-fenn.md`, `marisol-quaye.md`) --- consistent.
- Grepped every week's lecture for "tang yin/attribution/forg" as a cheap
  filler-detector; weeks 8 and 12 scored zero, which looked like a possible
  problem, so read both in full. False alarm: both are strongly on-theme
  (case-study rehearsal, defended-verdict capstone) and just use domain
  vocabulary (verdict, seal, brushwork, colophon) instead of the three
  grepped words. No generic filler found anywhere in the twelve weeks.

No fixes needed --- this is the third consecutive verification-only run
(fact-check pass in run 5, coherence/viewport pass in run 6, assessment-page
consistency pass this run) to come back clean. No commits this run. Nothing
pushed beyond what was already on `origin/main` from run 5.

## What's still open

- `PROCESS.md`: still template boilerplate. Leave it for the finishing run
  --- the real commit list to cite (in order) is `2e8901c`, `a00fe6d`,
  `9968cc0`, `f818dfe`, `547c0ad`, `78552eb`, `4c9943f`, `e1a1799`,
  `43e7077`, `a9330dc`, `afd1deb`, `2daeb59` (no new commits across runs 6
  or 7 to add to that list).
- Fact-check (run 5), coherence/viewport (run 6), and assessment-page
  consistency (run 7) passes are all now complete and all came back clean.
  If a future non-final run wants genuinely new depth rather than
  re-treading any of these three: honestly, the build looks done. A fresh
  angle worth trying before manufacturing busywork --- read the built
  `dist/api/index.json` course graph directly and eyeball the `related`
  edges for a week that's under-linked relative to its neighbours, since
  the spec tests check lecture<->seminar cross-links exist but not that the
  wider `related` graph (assessments, guest-teacher weeks) is evenly
  connected.
- No live/deployed-URL verification yet --- not required until the
  finishing run per doctrine step 6.

## The single most important next action

If this run's prompt still isn't the last: read this file, confirm `git
log` still shows `2daeb59` on top (no new commits expected unless a future
run finds something), then try the course-graph-density angle above rather
than re-running the three now-completed passes. If the prompt names this
run as the *last* one: run `pnpm check` and `pnpm check:evidence` fresh,
write `PROCESS.md` for real (cite the real commits listed above in order;
the brief wants a spine --- what a good course looks like, which decisions
became a `CLAUDE.md` rule or a `spec/` check, which were deliberately left
out, not a commit-by-commit diary), verify live in a real browser at both
marking viewports against the actual deployed GitHub Pages URL once
published, then commit, push, and update this file to say it's shipped.
