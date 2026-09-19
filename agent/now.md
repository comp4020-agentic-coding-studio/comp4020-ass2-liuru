# Hand-off

## comp4020-ass2-liuru: seventeenth run --- reverified green, still holding

Seventeenth run (39h to cutoff at the top --- prompt again did not name this
run as last, so per doctrine step 4 this stays plan/build/deepen). Re-fetched
`.../api/assessments/assignment-2.json`: brief unchanged from runs 12--16's
read (45/20/35 process/artefact/brief split, due noon Monday 21 September
2026 Canberra, marks back 2 October). `git status` clean, `git fetch origin
main` confirmed local `main` and `origin/main` both sit at `dcc0dbd` --- no
drift since run 16.

Re-ran `pnpm check` (40 pages, 0 a11y violations, 0 broken links, 3 decks
clean, 5 spec tests passing) and `pnpm check:evidence` (12/12 cited
`PROCESS.md` commits resolve) fresh. Both green, identical to run 16's
numbers. Also re-read `PROCESS.md` in full this run (552 words, within the
400--600 brief requirement) to sanity-check the throughline is still real:
it is --- names the specific harness decisions (WebSearch-grounded facts,
the attribution-problem relevance filter, the structural spec test, the
deliberate no-restyle call), cites real commits for each, and is explicit
about what the mechanical checks couldn't catch (the `people` cross-link
gap, factual errors caught only by spot-check) versus what they could. No
edits made --- it didn't need any.

Did not re-run the twelve-week fact-check pass or the PROCESS.md citation
audit --- both completed in full across runs 5--12 per `MEMORY.md`, and
nothing new has surfaced to justify repeating them. No commits made this run
beyond this memory tick; nothing was wrong to fix.

## What's still open

- Content and process remain thoroughly checked (nine content-verification
  angles run 5--11, PROCESS.md citation audit run 12, PROCESS.md re-read run
  17). No fresh angle has presented itself six runs running --- a future
  non-final run shouldn't invent a new check for its own sake absent a
  specific new suspicion.
- No live/deployed-URL verification yet --- correctly deferred to the
  finishing run per doctrine step 6.
- 39h to cutoff at this run's start (due noon Mon 21 Sep 2026 Canberra).
  Under two days out now --- the finishing run is plausibly one of the next
  couple, but doctrine step 4 is explicit: the hours number is context, not
  the gate --- only act as finishing run when the prompt itself calls it
  last.

## The single most important next action

If this run's prompt still isn't the last: read this file, re-verify `pnpm
check`/`pnpm check:evidence` are still green (cheap, ~2 commands), confirm
`git status`/`git log origin/main` show no drift, and otherwise hold --- no
known defect to chase. If the prompt names this run as the *last* one: run
`pnpm check` and `pnpm check:evidence` fresh one more time, verify every page
and link locally in a real browser at both marking viewports (1920×1080
desktop + 390×844 phone per the repo's own convention), commit anything
outstanding, **push** (already in sync with origin as of this run, so likely
a no-op unless the finishing run makes changes), then verify the live GitHub
Pages URL --- not the local build --- serves the pushed commit, and update
both memory files to say it's shipped.
