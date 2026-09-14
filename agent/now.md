# Hand-off

## comp4020-ass2-liuru: deepened again, still not finished

Second real work run (159h to cutoff at the top --- not the finishing run,
job was still plan/build/deepen per doctrine step 4). Prior `now.md` content
replaced; see `git log` in the repo for the full history if needed.

This run added one thing deliberately, rather than padding for the sake of
using the time budget: a second real slide deck, week 11's "The six as-ifs"
(`src/decks/week-11.deck.mdx`, wired via `slides: /decks/week-11/` in
`src/content/lectures/week-11.md`). It's built directly from the existing
week-11 lecture/session content (Tang Yin's own Buddhist name Liuru, the
Diamond Sutra gatha, and what it does to the course's central attribution
question) --- the most thematically load-bearing week in the whole course,
and my own namesake material besides. Verified in a real browser
(`agent-browser`, preview server on the deployment base path
`/comp4020-ass2-liuru/`): six-character title slide renders correctly, the
quote/list/banner slide classes all display as expected, no console errors
on either the deck route or the lecture page that links to it.

Considered and deliberately skipped: padding session files with generic
reading lists. The existing sessions (see `02-verbal-visual.md` for a good
example) are activity-based --- before/in/afterwards structure, specific
exercises --- not reading-list-shaped, and this repo's own `CLAUDE.md` says
to cut anything that's generic filler rather than Tang-Yin-specific. Adding
a bolted-on "readings" section would have been exactly that filler, not real
depth.

Local commit only (`43e7077`, on top of the prior `626309b`) --- nothing
pushed, deliberately, same as last run: push is a finishing-step action per
doctrine step 7, not something to do early.

`pnpm check` is fully green: 39 pages built (was 38), 0 a11y violations, 0
broken links, 2 decks structurally valid (was 1), 5 spec tests pass.
`pnpm check:evidence` still fails on exactly the one known, correctly
deferred thing: `PROCESS.md` is still template boilerplate with placeholder
commit hashes (`a1b2c3d`, `e4f5a6b`) that don't exist in this repo --- needs
the *final* commit history to cite, which doesn't exist until the finishing
run.

## What's still open

- `PROCESS.md`: still template boilerplate. Leave it for the finishing run.
- Content is now solid across the board: 12 dated weeks, assessments to
  100%, two real decks (week 1, week 11), own spec tests, `CLAUDE.md` with
  real rules, three people entries including a week-9 guest teacher. If a
  future non-final run has room, a third deck on the model-audit week
  (week 9, computational attribution) would be the next natural pick ---
  but don't add content just to fill time; keep checking against
  `CLAUDE.md`'s own filter (does it extend the Tang Yin problem, or is it
  generic).
- No live/deployed-URL verification yet --- not required until the
  finishing run per doctrine step 6. This run's browser check was against
  the local preview server only.
- Nothing pushed to `origin` yet, deliberately.

## The single most important next action

If this run's prompt still isn't the last: read this file, confirm `git log`
matches (`43e7077` on top of `626309b`), then keep deepening only if there's
a genuine, non-filler addition to make --- otherwise it's fine for a run to
do less than "add a whole new deck" if the brief is already structurally
satisfied. If the prompt names this run as the *last* one: run `pnpm check`
and `pnpm check:evidence` fresh, write `PROCESS.md` for real (cite real
commits by hash --- `2e8901c`, `a00fe6d`, `9968cc0`, `f818dfe`, `547c0ad`,
`78552eb`, `4c9943f`, `e1a1799`, `43e7077` are all mine, in that order),
verify live in a real browser at both marking viewports against the actual
GitHub Pages URL once deployed, then commit, push, and update this file to
say it's shipped.
