# Hand-off

## comp4020-ass2-liuru: tenth run, verification only --- the "marker's ten minutes" pass, also clean

Tenth run (93h to cutoff at the top --- prompt did not name this run as
last, so per doctrine step 4 this was still plan/build/deepen). Re-fetched
`.../api/assessments/assignment-2.json`: brief unchanged (45/20/35
process/artefact/brief split, `PROCESS.md` 400--600 words citing commits,
due noon Monday 21 September 2026 Canberra, marks back 2 October).

Took stock: `git status` clean, in sync with `origin/main` (`git fetch`
confirmed), nothing uncommitted from run 9. `pnpm check` fully green (40
pages, 0 a11y violations, 0 broken links, 3 decks, 5 spec tests) --- same
as run 9 left it. `pnpm check:evidence` fails only on the two things
already known and deliberately deferred: `PROCESS.md` still template
boilerplate, and its two placeholder commit shas --- no starter-content or
starter-image failures, confirming those were fully resolved in earlier
runs.

Ran the fresh angle run 9's hand-off flagged as the one genuinely untried
pass: read the site the way the brief says a marker actually will ("the
home page, a few non-adjacent weeks, an assessment, the deck and the
policies page ... for about ten minutes"). Read, cold, rather than assumed:

- Homepage (`src/pages/index.astro`) --- distinct voice, states the whole
  course's stakes in one paragraph (Tang Yin forgeries "nobody --- not the
  dealers, not the collectors, not always the museums --- could fully
  untangle"), no generic LMS boilerplate.
- Three non-adjacent weeks, lecture + seminar each: week 3 (materials,
  taught first because it's independent of connoisseurial judgement),
  week 7 (the Suzhou pian market, reframes the whole toolkit as instruments
  a market that size made necessary), week 12 (closes the loop back to
  week 1's "two piles" sort and week 11's argument about what "authentic"
  is asking for). These aren't swapped-noun repeats of each other --- each
  builds on and changes what the previous weeks taught, which is exactly
  what the brief's "twelve weeks that repeat one another" warning is
  checking for.
- All three assessments (`attribution-note`, `dossier`, `final-project`):
  weights sum to 100 (25/35/40), each explicitly scoped against what's
  been taught by its due week (attribution-note is barred from using
  seals/colophons because they aren't taught until weeks 5--6), and the
  dossier/final-project explicitly reward showing contradicting evidence
  rather than hiding it.
- Policies page: late-work/extension rules distinguish the two seminar-fed
  assessments from the final project (which can't be extended because it's
  tied to a live defense), and the "declare your assistance" rule is tied
  back to the course's own subject matter (undeclared AI use "is exactly
  the failure mode the whole course studies, just moved from a scroll to a
  paragraph") rather than a generic academic-integrity boilerplate
  paragraph.
- `spec/course-structure.test.ts`: already encodes real course-design
  decisions as checks --- every week 1--12 has both a lecture and a seminar
  cross-linked to each other (not just present), assessment weights sum to
  100, at least one lecture's deck actually built. This is good PROCESS.md
  material for the finishing run (a genuine "what I decided had to stay
  true, encoded as a spec check" example).

No defect found anywhere in this pass. No code changes this run --- same
as run 9, this run's value was confirming rather than fixing. `git status`
stayed clean throughout.

## What's still open

- `PROCESS.md`: still template boilerplate, for the finishing run. Real
  commit list to cite (in order): `2e8901c`, `a00fe6d`, `9968cc0`,
  `f818dfe`, `547c0ad`, `78552eb`, `4c9943f`, `e1a1799`, `43e7077`,
  `a9330dc`, `afd1deb`, `2daeb59`, `ae7b3a1` (no new commits since run 8,
  since runs 9 and 10 both made none).
- Every verification/deepening angle tried so far --- fact-check (run 5),
  coherence/viewport (run 6), assessment-page consistency (run 7),
  graph-connectivity (run 8, found and fixed one real gap), deck rendering
  at both viewports (run 9), axe "incomplete" results (run 9), and now the
  marker's-eye ten-minute read across homepage/weeks/assessments/policies
  (run 10) --- has come back clean. I don't have a further fresh angle to
  suggest beyond what's already been checked; if a future non-final run
  wants new ground rather than re-treading these seven passes, the honest
  option may be to accept the content is in good shape and use the time on
  the finishing-run tasks early (a PROCESS.md draft, say) rather than
  inventing a check for its own sake --- but see the note below on why that
  wasn't done here.
- No live/deployed-URL verification yet --- not required until the
  finishing run per doctrine step 6.

## The single most important next action

If this run's prompt still isn't the last: read this file, confirm `git
log` still shows `ae7b3a1` as the last content commit (no run-10 commit,
since none was needed), and consider whether it's worth drafting
`PROCESS.md` early given how thoroughly verified the content now is ---
prior runs deliberately reserved it for the finishing run, but with seven
clean verification passes and no fresh angle left, there may be more value
in an early draft than in an eighth pass. If drafting early, keep the
placeholder commit shas out until the finishing run's real final commit
list is known. If the prompt names this run as the *last* one: run
`pnpm check` and `pnpm check:evidence` fresh, write `PROCESS.md` for real
(cite the commit list above in order; the brief wants a spine --- what a
good course looks like, which decisions became a `CLAUDE.md` rule or a
`spec/` check, which were deliberately left out, not a commit-by-commit
diary --- `spec/course-structure.test.ts`'s lecture/seminar cross-link
check and the graph-connectivity fix from run 8 are both good examples:
one encoded as a rule, one a one-off content fix deliberately left as
such), verify live in a real browser at both marking viewports against the
actual deployed GitHub Pages URL once published, then commit, push, and
update this file to say it's shipped.
