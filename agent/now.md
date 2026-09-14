# Hand-off

## comp4020-ass2-liuru: third deck added, still not finished

Third real work run (146.5h to cutoff at the top --- not the finishing run,
job was still plan/build/deepen per doctrine step 4). Prior `now.md` content
replaced; see `git log` in the repo for the full history if needed.

Took stock first: `pnpm check` was already fully green (39 pages, 0 a11y
violations, 0 broken links, 2 decks, 5 spec tests) and the twelve-week
curriculum read as genuinely coherent on a full re-read (checked every
lecture's title/description for repetition risk --- none found; the
week-by-week arc from method-building through the market, computation, the
forger's own craft, to the six-as-ifs reframing and the defended verdict all
holds together). `check:evidence` failed on exactly the one known, correctly
deferred thing: `PROCESS.md` template boilerplate with placeholder commit
hashes, which needs the *final* commit history and so waits for the
finishing run.

Given that, the prior hand-off's own suggested next pick --- a third deck on
week 9 (`src/decks/week-09.deck.mdx`, wired via `slides: /decks/week-09/` in
`src/content/lectures/week-09.md`) --- was the genuine, non-filler addition
this run made. Grounded it in real research rather than invented numbers:
WebSearched and confirmed both systems the week-09 lecture already names ---
Elgammal, Kang & Den Leeuw's 2017/2018 stroke-level classifier
(arXiv:1711.03536, Picasso/Matisse/Schiele, 70--90% per-stroke, >80%
per-drawing, near-100% catching commissioned forgeries) and Sun et al.'s 2015
Chinese ink-wash brushstroke CNN (95% precision, 93% recall, six painters,
180 paintings) --- then built the deck's argument around a real tension: the
numbers are genuinely good, and neither training set contains anything like
Tang Yin or the Suzhou pian economy, which is the actual point Wren's
lecture and the model-audit seminar are making. One slide's first draft
("fifteen named early-20th-century draughtsmen") overstated the source's own
number; caught it on a second read against the search result and softened it
to "under twenty" before committing. Verified in a real browser
(`agent-browser`, preview server on the deployment base path
`/comp4020-ass2-liuru/`, confirmed via `location.href` per the shared-instance
caution below): title/content/quote/banner slides all render correctly, no
console errors on either the deck route or the lecture page's "Open the
slides" link.

New environment lesson this run, added to `MEMORY.md`: `pnpm preview`
daemonizes itself (prints "running at ... (pid N)" then the wrapping
process exits 0 while the server keeps listening) --- launch it with the
Bash tool's `run_in_background: true` rather than a manual `nohup ... &`,
and stop it with `pnpm exec astro preview stop`, not by hunting for the
process.

Local commit only (`a9330dc`, on top of the prior `61976af`) --- nothing
pushed, deliberately, same as the last two runs: push is a finishing-step
action per doctrine step 7, not something to do early.

`pnpm check` is fully green: 40 pages built (was 39), 0 a11y violations, 0
broken links, 3 decks structurally valid (was 2), 5 spec tests pass.
`pnpm check:evidence` still fails on exactly the one known, correctly
deferred thing: `PROCESS.md` is still template boilerplate with placeholder
commit hashes (`a1b2c3d`, `e4f5a6b`) that don't exist in this repo.

## What's still open

- `PROCESS.md`: still template boilerplate. Leave it for the finishing run.
- Content is now solid across the board: 12 dated weeks, assessments to
  100%, three real decks (week 1, week 9, week 11), own spec tests,
  `CLAUDE.md` with real rules, three people entries including a week-9 guest
  teacher. Checked deliberately for a fourth deck candidate and didn't find
  one that would add anything real rather than pad --- the two other
  strongest visual-argument weeks (week 7's market economy, week 10's
  forger-as-artist) already carry their weight in prose. If a future
  non-final run has room, re-check against `CLAUDE.md`'s own filter (does it
  extend the Tang Yin problem, or is it generic) before adding anything, and
  don't assume more decks is automatically more depth.
- No live/deployed-URL verification yet --- not required until the
  finishing run per doctrine step 6. This run's browser check was against
  the local preview server only.
- Nothing pushed to `origin` yet, deliberately.

## The single most important next action

If this run's prompt still isn't the last: read this file, confirm `git log`
matches (`a9330dc` on top of `61976af`), then keep deepening only if there's
a genuine, non-filler addition to make --- content is now solid enough that
"do less" is a legitimate outcome for a run. If the prompt names this run as
the *last* one: run `pnpm check` and `pnpm check:evidence` fresh, write
`PROCESS.md` for real (cite real commits by hash --- `2e8901c`, `a00fe6d`,
`9968cc0`, `f818dfe`, `547c0ad`, `78552eb`, `4c9943f`, `e1a1799`, `43e7077`,
`a9330dc` are all mine, in that order; the brief wants a spine --- what a
good course looks like, which of those decisions became a `CLAUDE.md` rule
or a `spec/` check, which were deliberately left out, not a commit-by-commit
diary), verify live in a real browser at both marking viewports against the
actual GitHub Pages URL once deployed, then commit, push, and update this
file to say it's shipped.
