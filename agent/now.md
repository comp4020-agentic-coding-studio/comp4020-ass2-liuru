# Hand-off

## comp4020-ass2-liuru: eleventh run --- wrote the real PROCESS.md early

Eleventh run (87h to cutoff at the top --- prompt did not name this run as
last, so per doctrine step 4 this was still plan/build/deepen). Re-fetched
`.../api/assessments/assignment-2.json`: brief unchanged (45/20/35
process/artefact/brief split, due noon Monday 21 September 2026 Canberra,
marks back 2 October). Took stock: `git status` clean, in sync with
`origin/main`, nothing uncommitted from run 10.

Run 10's hand-off had exhausted every verification angle it could find
(seven clean passes across runs 5--10) and explicitly suggested drafting
`PROCESS.md` for real now rather than inventing an eighth check for its own
sake. Took that suggestion: `pnpm check` confirmed still fully green (40
pages, 0 a11y violations, 0 broken links, 3 decks, 5 spec tests) before
writing anything, then wrote the real `PROCESS.md` (540 rendered words,
within the 400--600 brief range) with a real spine --- what I decided a good
course looks like, which decisions became a `CLAUDE.md` rule or a `spec/`
check, which stayed one-off content fixes deliberately:

- the fabricate-nothing/earn-its-place rules in `CLAUDE.md` (`e1a1799`)
- `spec/course-structure.test.ts`'s lecture/seminar cross-link and weight-sum
  checks (`4c9943f`) as the structural promise that *is* mechanically
  checkable
- the people/`related` graph-connectivity gap (`ae7b3a1`) as the contrasting
  case --- a real gap no spec check caught, fixed as content judgement
  (Marisol deliberately left unlinked) rather than promoted to a new rule
- the two real fact-check catches (`afd1deb` MFA/Shitao/Bada Shanren,
  `2daeb59` the Liuru sobriquet timing) as the answer to "how did you know
  the result was right" --- a two-for-twelve hit rate on a spot-check
  discipline, not a mechanical guarantee
- the deliberate non-restyle (artefact criterion asks whether it works, not
  what it looks like) as what got left out

`pnpm check:evidence` now passes cleanly: previously it failed only on the
template boilerplate comment and the two placeholder commit shas in
`PROCESS.md`; both are gone, all 12 cited commits resolve. Committed as
[`0b48f6f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/0b48f6f)
"PROCESS.md: write the real process account". Did **not** push --- doctrine's
finishing steps put "push" on the *last* run specifically; this run wasn't
named last, so the commit stays local pending that run. (The periodic
"memory: tick snapshot" commits already on `origin/main` at the start of
this run are the harness's own separate sync, not evidence that non-final
content commits should be pushed too.)

## What's still open

- `PROCESS.md` is now real and passes `check:evidence`, but re-read it once
  more on the finishing run with fresh eyes before treating it as final ---
  it hasn't had a second pair of eyes yet, only the one drafting pass.
- No live/deployed-URL verification yet --- not required until the finishing
  run per doctrine step 6, and nothing has been pushed for the harness to
  publish since run 8's content (`ae7b3a1`) plus now this PROCESS.md commit,
  both still local-only as of this run's end... actually `ae7b3a1` and
  everything before it *was* already on `origin/main` at this run's start
  (confirmed via `git status`); only this run's `0b48f6f` is unpushed.
- Content itself: eight verification passes (fact-check, coherence/viewport,
  assessment-page consistency, graph-connectivity, deck rendering, axe
  "incomplete" results, marker's-eye ten-minute read, this run's PROCESS.md
  write) have all come back clean or been fixed. No fresh angle identified
  for a twelfth pass; if a future non-final run wants something to do beyond
  re-treading these, reading `PROCESS.md` itself with a critical eye (does
  the narrative actually cohere, would a marker believe the "how did you
  know it was right" section) is more valuable than another content sweep.

## The single most important next action

If this run's prompt still isn't the last: read this file, re-verify
`pnpm check` and `pnpm check:evidence` are still green, and consider a
critical re-read of `PROCESS.md` rather than another content-verification
pass --- the content side is thoroughly checked and the process account is
now the newer, less-scrutinised piece. If the prompt names this run as the
*last* one: run `pnpm check` and `pnpm check:evidence` fresh one more time,
give `PROCESS.md` a final critical read (word count, does the spine actually
hold, do all citations still resolve after any last edits), verify every
page and link locally in a real browser at both marking viewports, commit
anything outstanding, **push** (this is the first run where push is actually
required by doctrine), then verify the live GitHub Pages URL --- not the
local build --- serves the pushed commit, and update both memory files to
say it's shipped.
