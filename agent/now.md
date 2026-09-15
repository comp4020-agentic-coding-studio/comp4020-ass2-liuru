# Hand-off

## comp4020-ass2-liuru: fifth work run, completed the fact-check pass, found a second real error

Fifth run (135h to cutoff at the top --- not the finishing run; job was
plan/build/deepen per doctrine step 4, same as last run). Prior `now.md`
content replaced; see `git log` in the repo for full history.

Took stock first: `pnpm check` fully green (40 pages, 0 a11y violations, 0
broken links, 3 decks, 5 spec tests), `pnpm check:evidence` failing on
exactly the same known, correctly deferred thing (`PROCESS.md` still
template boilerplate --- needs the final commit history, waits for the
finishing run). Re-fetched the course source
(`.../api/assessments/assignment-2.json`) and reconfirmed the brief and
marking weights match what's built (45/20/35 process/artefact/brief; the
repo's own assessment weights sum to 100).

Did the fact-check pass the prior hand-off called out as the single most
important next action: WebSearched the specific, named, checkable claims
in the remaining un-verified lecture/seminar prose (weeks 1--6, 8, 11, 12
--- the ones from the original bulk content commit `a00fe6d` that predate
the per-week WebSearch discipline). Checked:

- week 2: Cahill's verbal/visual authentication split, and Dong Qichang as
  an example of the "visual archive in memory" method --- holds up, matches
  Cahill's own 2005 Maryland symposium paper and Freer Medal lecture notes.
- week 5: Xiang Yuanbian and the Qianlong emperor as the two collectors
  whose seals form a visible provenance chain --- holds up, this is a
  well-documented, named pattern (Freer Gallery's own object pages give
  concrete examples of exactly this chain).
- week 6: Cahill situating painting authentication (jianding) as an
  analogue of kaozheng textual criticism --- holds up, directly sourced to
  his own 1986 unpublished paper "Some Observations on the Practice and
  Problems of Art History in China."
- weeks 1, 3, 4, 8, 12: read closely; no specific named claims (dates,
  institutions, quoted anecdotes) to check, only framing --- left alone,
  correctly, same standard as the week-10 fix's "left week-07 alone"
  precedent.
- **week 11 (the six as-ifs, my own namesake): found a real error.**
  `week-11.md` and `week-11.deck.mdx` both opened with "late in life ...
  Tang Yin took the Buddhist name Liuru Jushi." WebSearching the actual
  biography (multiple Chinese-language sources on the 1499 exam-fraud
  scandal and the 1503--1505 Peach Blossom Hermitage period) places the
  sobriquet's adoption in his early thirties, within about six years of the
  scandal --- not late in life. He lived another two decades under that
  name before dying at 54. Fixed both files to say "in his early thirties"
  and note he carried the name for the two decades left to him, rather than
  softening it into vague "past his scandal" language. Committed as
  `2daeb59`.

This closes out the fact-check thread the prior two hand-offs opened: every
week's lecture/seminar body has now had its specific, checkable claims
WebSearched at least once (week-07 and week-10 in run 4, week-9 via its own
deck research, weeks 1--6/8/11/12 this run). Two real errors found across
twelve weeks, both fixed (`afd1deb`, `2daeb59`) --- a high enough hit rate
that this was clearly worth doing, not busywork, but the pass itself is now
done; don't re-run it from scratch on a future run without a specific new
suspicion.

Local commits only, on top of `c3d5350` --- nothing pushed, deliberately,
same as every prior run: push is a finishing-step action per doctrine
step 7.

## What's still open

- `PROCESS.md`: still template boilerplate. Leave it for the finishing run.
- The fact-check pass over lecture/seminar prose is now complete (see
  above). If a future non-final run wants a new depth-work lead, the
  un-scrutinised remainder is: the three assessment pages (read this run,
  no external claims to check --- they're course-design prose, not history),
  the people bios and policies/homepage (rewritten in `9968cc0`/`547c0ad`,
  fictional Slop University persona content, not real historical claims, so
  not really fact-checkable the same way), and whether a fourth deck is
  worth writing (prior runs' conclusion --- three decks is enough, "do less"
  is legitimate --- still holds; don't add one just to add one).
- No live/deployed-URL verification yet --- not required until the
  finishing run per doctrine step 6.
- Nothing pushed to `origin` yet, deliberately.

## The single most important next action

If this run's prompt still isn't the last: read this file, confirm `git
log` shows `2daeb59` on top of `c3d5350`, then look for genuinely new depth
work rather than re-treading the now-complete fact-check pass --- there
isn't an obvious next lead the way there was last run, so a careful reread
of the brief against the built site (does every marking-sweep touchpoint --
home page, several non-adjacent weeks, an assessment, the deck, the
policies page -- actually hold up at both viewports) is a reasonable next
check, or genuinely nothing further is needed and confirming that is itself
useful. If the prompt names this run as the *last* one: run `pnpm check`
and `pnpm check:evidence` fresh, write `PROCESS.md` for real (cite real
commits by hash --- `2e8901c`, `a00fe6d`, `9968cc0`, `f818dfe`, `547c0ad`,
`78552eb`, `4c9943f`, `e1a1799`, `43e7077`, `a9330dc`, `afd1deb`, `2daeb59`
are all mine, in that order; the brief wants a spine --- what a good course
looks like, which decisions became a `CLAUDE.md` rule or a `spec/` check,
which were deliberately left out, not a commit-by-commit diary), verify
live in a real browser at both marking viewports against the actual GitHub
Pages URL once deployed, then commit, push, and update this file to say
it's shipped.
