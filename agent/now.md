# Hand-off

## comp4020-ass2-liuru: twelfth run --- reverified green, PROCESS.md holds up

Twelfth run (76h to cutoff at the top --- prompt did not name this run as
last, so per doctrine step 4 this stays plan/build/deepen). Re-fetched
`.../api/assessments/assignment-2.json`: brief unchanged (45/20/35
process/artefact/brief split, due noon Monday 21 September 2026 Canberra,
marks back 2 October). `git status`/`git log origin/main` both confirmed
clean and in sync --- notably, run 11's own hand-off had said its
`0b48f6f` (the real `PROCESS.md` commit) was local-only pending the
finishing run, but it's now on `origin/main` under a later memory-tick
commit (`dbe455f`). Didn't chase why (harness's own sync, most likely, same
as the pattern the "verify, don't trust a prior hand-off's push claim" note
in `MEMORY.md` already covers) --- just confirmed via `git log origin/main`
before doing anything else, per that existing lesson.

Followed run 11's own suggested next step rather than inventing a fresh
content-verification pass: ran `pnpm check` (40 pages, 0 a11y violations, 0
broken links, 3 decks, 5 spec tests, all clean) and `pnpm check:evidence`
(12/12 cited commits resolve) fresh, then gave `PROCESS.md` a genuinely
critical re-read rather than a rubber-stamp:

- word count: 549 rendered words (link text counted, markup stripped) ---
  comfortably inside the 400--600 brief range
- spot-checked all 13 cited commit hashes against `git show -s --format`
  individually and confirmed each subject line actually matches what the
  prose claims it did (e.g. `2e8901c` really is the SLOP6779 course-config
  commit, `2daeb59` really is the Liuru-sobriquet-timing fix) --- not just
  that they resolve as valid shas, which `check:evidence` already confirmed,
  but that the citation is honest about what's in the commit
- the brief's required spine (what a good course looks like → which
  decisions became a `CLAUDE.md` rule or a `spec/` check → which stayed
  one-off content judgement → how the fact-check habit answers "how did you
  know it was right") is genuinely present, not retrofitted

Found nothing to fix. No commits made this run.

## What's still open

- Content and process are both now thoroughly checked across twelve runs
  (nine content-verification angles run 5--11, plus this run's PROCESS.md
  citation audit). No fresh angle has presented itself; the next run
  shouldn't invent an eleventh check for its own sake if nothing's actually
  suspicious.
- No live/deployed-URL verification yet --- correctly deferred to the
  finishing run per doctrine step 6.
- 76h to cutoff at this run's start means roughly one more day of runway
  before the finishing run becomes likely. Watch for the prompt actually
  calling a run "last" --- don't infer it from the hours number alone
  (doctrine step 4: "the hours to cutoff are context, not the gate").

## The single most important next action

If this run's prompt still isn't the last: read this file, re-verify
`pnpm check`/`pnpm check:evidence` are still green (cheap, ~2 commands), and
otherwise hold --- there's no known defect left to chase, so don't force a
new one. If the prompt names this run as the *last* one: run `pnpm check`
and `pnpm check:evidence` fresh one more time, verify every page and link
locally in a real browser at both marking viewports (1920×1080 desktop +
390×844 phone per the repo's own convention), commit anything outstanding,
**push**, then verify the live GitHub Pages URL --- not the local build ---
serves the pushed commit, and update both memory files to say it's shipped.
