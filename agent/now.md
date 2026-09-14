# Hand-off

## comp4020-ass2-liuru: built and deepened, not finished

First real work run on this deliverable (165h to cutoff at the top, so not
the finishing run --- job was plan/build/deepen, per doctrine step 4). Prior
`now.md` content here was crit-5's, a different, already-shipped repo; this
entry replaces it.

Built "The Tang Yin Problem" (`SLOP6779`), a postgraduate connoisseurship
seminar using six centuries of disputed/forged paintings attributed to Ming
painter Tang Yin (1470--1524, my own namesake) to teach how attribution
actually gets decided. One idea held all semester, per the brief's own
examples. All content grounded in real research (WebSearch), not invented:
Suzhou pian forgery workshops, James Cahill's verbal/visual method,
Zhang Daqian's documented forgeries, stroke-level ML attribution work.

Local commits only (nothing pushed --- pushing is a finishing-step action):

- `2e8901c` course-config: SLOP6779, level 6, dates, description, tags
- `a00fe6d` all 12 weeks of lectures + seminars, 3 assessments (25/35/40,
  weights sum to 100)
- `9968cc0` people bios rewritten; two stock portraits deliberately dropped
  (no-photo is a legitimate design choice, per `check-evidence.ts`'s own
  comment); added a week-9 guest teacher
- `f818dfe` replaced both gated starter images (`card.png`, `hero-home.avif`)
  with original PIL-drawn brushstroke/seal art
- `547c0ad` homepage + policies page rewritten for the theme
- `78552eb` real week-1 slide deck (8 slides) --- satisfies the "at least one
  real deck" spec minimum
- `4c9943f` `spec/course-structure.test.ts`: twelve-week pairing, assessment
  weights sum to 100, the one deck actually builds and its lecture links to it
- `e1a1799` `CLAUDE.md` rules: ground facts in real research, cut anything
  that isn't Tang-Yin-specific, and a YAML block-scalar footgun (see below)

`pnpm check` is fully green: typecheck 0 errors, build 0 a11y violations, 0
broken links, deck structurally valid, all 5 spec tests (data-integrity +
course-structure) pass. `pnpm check:evidence` fails on exactly one thing:
`PROCESS.md` is still the template with placeholder commit hashes ---
correctly deferred, since it's a finishing-step deliverable (doctrine
step 2 under "Finishing steps") and needs real commits to cite, which now
exist.

A real bug worth remembering if it recurs: a multi-line frontmatter prose
field (`description`, `marking.description`) containing a colon+space breaks
`js-yaml` (used by Astro's content sync) with a misleading "multiline key"
error pointing at the *next* key. Fix is a block scalar (`>-`/`|-`), not
quoting. Diagnosed by running the repo's actual `js-yaml` directly, not
PyYAML (too lenient) or eyeballing. Written up in this repo's own
`CLAUDE.md` now.

## What's still open

- `PROCESS.md`: still template boilerplate. Leave it for the finishing run
  (needs the *final* commit history to cite, and doctrine gates it there).
- Could go further on content depth (more decks beyond week-1, more `people`
  entries, richer per-seminar reading lists) if a future non-final run has
  room --- but everything the brief structurally requires is already in
  place: 12 dated weeks, assessments to 100%, one real deck, own spec tests,
  CLAUDE.md with real rules.
- No browser/live verification done this run (not required until the
  finishing run per doctrine step 6); `pnpm build`'s own a11y/broken-link
  checker is the only check that's run so far.
- Nothing pushed to `origin` yet, deliberately --- push is a finishing-step
  action.

## The single most important next action

If this run's prompt still isn't the last: read this file, confirm `git log`
matches what's above, then keep deepening (more decks / richer seminar
content) rather than starting the finishing steps early. If the prompt names
this run as the *last* one: run `pnpm check` and `pnpm check:evidence` fresh,
write `PROCESS.md` for real (cite the commits listed above by hash, they're
all mine), verify live in a real browser at both marking viewports, then
commit, push, and update this file to say it's shipped.
