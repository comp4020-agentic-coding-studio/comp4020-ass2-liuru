# Hand-off

## comp4020-ass2-liuru: fourth work run, found and fixed a real factual error

Fourth run (141h to cutoff at the top --- not the finishing run; job was
plan/build/deepen per doctrine step 4). Prior `now.md` content replaced; see
`git log` in the repo for full history if needed.

Took stock first: `pnpm check` fully green (40 pages, 0 a11y violations, 0
broken links, 3 decks, 5 spec tests), `pnpm check:evidence` failing on
exactly the one known, correctly deferred thing (`PROCESS.md` still
template boilerplate --- needs the final commit history, waits for the
finishing run). The prior hand-off's own conclusion --- content is solid,
"do less" is a legitimate outcome, no fourth deck needed --- held up under
a fresh independent read of the assessments, course-config, and two
lectures/seminars not recently scrutinised.

But independent re-verification found a real problem the prior runs missed:
`week-10.md` (Zhang Daqian) was written in the original bulk content commit
(`a00fe6d`), before the per-week WebSearch discipline the week-9 deck later
established. WebSearching its specific claims turned up a genuine
conflation --- it credited the Museum of Fine Arts, Boston with buying
Zhang's Shitao/Bada Shanren forgeries specifically, but the real record
(Center for Art Law, Smithsonian's own object page) has the Bada Shanren
album forgery at the Smithsonian, and MFA Boston fooled by two *different*
fakes entirely (a spurious Guan Tong and an anonymous sixth-century
painting). Fixed the paragraph to use the real, more specific detail (MFA
Boston's own 2007 retrospective, unironically titled "Zhang Daqian:
Painter, Collector, Forger") rather than the vague, wrong "by its own later
account" framing, and located the 1967 pointing anecdote at its real venue
(University of Michigan, per Marshall Wu's account) rather than leaving it
unplaced. Cross-checked `week-07.md`'s Suzhou-pian/Qing-imperial-collection
claim the same way and found it accurate as written (general framing claim,
not a specific fabricated number) --- left alone. Committed as `afd1deb`.

This matters because the exact failure mode this course's own `CLAUDE.md`
names --- "a connoisseurship course that fabricates its own evidence" --- had
already happened once, silently, and no automated check (`pnpm check`,
`check:evidence`, the a11y/link/deck checkers) would ever catch it, because
none of them check factual accuracy of prose. Only a deliberate WebSearch
spot-check against a specific, checkable claim caught it.

Local commit only (`afd1deb`, on top of `5f9d28e`) --- nothing pushed,
deliberately, same as every prior run: push is a finishing-step action per
doctrine step 7.

## What's still open

- `PROCESS.md`: still template boilerplate. Leave it for the finishing run.
- **New, real lead for the next non-final run**: only 2 of the 12
  lectures/seminars from the original bulk content commit (`a00fe6d`) have
  been WebSearch-verified against their specific checkable claims (week-9's
  deck research counts as a third, but that was decks not the lecture prose
  itself). One out of two spot-checked this run had a real error. That's a
  high enough hit rate to justify a systematic pass over the remaining
  weeks' lecture/seminar bodies (weeks 1--6, 8, 11, 12) for specific named
  claims (dates, institutions, named quotes, attributed numbers) that read
  as checkable rather than as framing, before assuming the rest are clean.
  This is real depth work, not filler --- it directly serves the course's
  own thesis and its `CLAUDE.md`'s explicit rule.
- No live/deployed-URL verification yet --- not required until the
  finishing run per doctrine step 6.
- Nothing pushed to `origin` yet, deliberately.

## The single most important next action

If this run's prompt still isn't the last: read this file, confirm `git
log` shows `afd1deb` on top of `5f9d28e`, then continue the fact-check pass
above over the remaining weeks' lecture/seminar prose --- WebSearch each
specific, named, checkable claim (not vague framing) and fix or soften
anything that doesn't hold up, the same way this run handled `week-10.md`.
That is more valuable right now than a fifth deck or any other new content.
If the prompt names this run as the *last* one: finish the fact-check pass
first if time allows, then run `pnpm check` and `pnpm check:evidence` fresh,
write `PROCESS.md` for real (cite real commits by hash --- `2e8901c`,
`a00fe6d`, `9968cc0`, `f818dfe`, `547c0ad`, `78552eb`, `4c9943f`, `e1a1799`,
`43e7077`, `a9330dc`, `afd1deb` are all mine, in that order; the brief wants
a spine --- what a good course looks like, which decisions became a
`CLAUDE.md` rule or a `spec/` check, which were deliberately left out, not a
commit-by-commit diary), verify live in a real browser at both marking
viewports against the actual GitHub Pages URL once deployed, then commit,
push, and update this file to say it's shipped.
