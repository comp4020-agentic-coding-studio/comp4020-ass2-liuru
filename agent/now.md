# Hand-off

## comp4020-ass2-liuru: sixth work run, coherence/viewport pass, no changes needed

Sixth run (124h to cutoff at the top --- prompt did not name this run as
last, so per doctrine step 4 this was still plan/build/deepen, not finish).
Due date confirmed against the course source: noon Monday 21 September
2026 Canberra time, so 124h roughly lines up with ~5 days out --- but per
doctrine that arithmetic is context, not the gate, and doesn't change what
this run does.

Took stock: `git status` clean, already in sync with `origin/main`, nothing
uncommitted from the prior run. Re-fetched
`.../api/assessments/assignment-2.json` and reconfirmed the brief: 45%
process / 20% artefact / 35% brief marking split, `PROCESS.md` 400--600
words citing commits, the "ten minutes as a prospective student, checking
coherence across weeks" marking stance. `pnpm check` fully green (40 pages,
0 a11y violations, 0 broken links, 3 decks, 5 spec tests). `pnpm
check:evidence` fails on exactly the same known, correctly deferred thing
as every prior run (`PROCESS.md` still template boilerplate, citing
placeholder commit hashes `a1b2c3d`/`e4f5a6b`) --- untouched, waits for the
finishing run same as always.

The prior hand-off's own suggested next check, since the fact-check pass
over lecture/seminar prose is complete (see run 5's hand-off): a fresh read
of the built site as a prospective student would see it, at both marking
viewports (1920x1080 desktop, 390x844 phone --- no viewport override named
in this repo's own CLAUDE.md, so used the standard pair from other crits).
Built and served with `pnpm preview` (base path `/comp4020-ass2-liuru/`,
confirmed with `curl` before trusting the URL, per the port-fallback/base-
path traps already in `MEMORY.md`), walked with `agent-browser`:

- home page (both viewports) --- renders clean, no console errors
- lectures/week-03 (a non-adjacent week from the two already fixed in
  weeks 10/11) --- coherent, no errors
- decks/week-01 --- title slide renders correctly
- assessments/attribution-note, assessments/dossier (mobile, including
  scrolling to and screenshotting the marking-weight table --- renders
  without overflow), assessments/final-project --- all clean, and the
  final-project brief's "week 11's reframing of what authentic is even
  asking for" line confirms the six-as-ifs week is doing real thematic work
  in the capstone, not just sitting there
- policies --- the "declaring assistance" section explicitly ties academic-
  integrity declarations back to the course's own attribution theme ("an
  attribution note that quietly took its central claim from a chatbot ...
  is exactly the failure mode the whole course studies"), which is exactly
  the kind of course-specific integration the brief's "not generic filler"
  test asks for
- people --- three bios render, no broken portraits

`agent-browser errors`/`console` came back clean on every page checked.
No fixes needed --- this was a verification pass that found nothing wrong,
which is itself the useful result: the coherence-across-touchpoints
question the prior hand-off raised is now answered, not just fact-checking.
Preview server stopped cleanly with `astro preview stop` afterwards.

No commits this run (nothing needed changing). Nothing pushed beyond what
was already on `origin/main` from run 5.

**Process note for future runs:** the repo's own `agent/` directory
(`agent/now.md`, `agent/MEMORY.md`, `agent/doctrine.md`) is a harness-
synced mirror of this actual memory directory
(`/home/ben/projects/comp4020/agents/liuru/memory/`), landing via the
periodic "memory: tick snapshot" commits already in `git log` --- it is
not the write target itself. Doctrine step 5's "`agent/` is harness-owned:
never edit it" means exactly this file (`../memory/now.md`, outside the
repo), not `<repo>/agent/now.md`. This run started to write the hand-off
straight into `<repo>/agent/now.md` before catching the mistake via the
"file changed on disk" warning on `git checkout --`; reverted that edit
before it could be committed. Always write the hand-off here, in
`memory/now.md`, and let the harness's own tick process mirror it into the
repo's `agent/` --- never touch `<repo>/agent/` directly.

## What's still open

- `PROCESS.md`: still template boilerplate. Leave it for the finishing run
  --- the real commit list to cite (in order) is `2e8901c`, `a00fe6d`,
  `9968cc0`, `f818dfe`, `547c0ad`, `78552eb`, `4c9943f`, `e1a1799`,
  `43e7077`, `a9330dc`, `afd1deb`, `2daeb59` (no new commits this run to add
  to that list).
- Fact-check pass (run 5) and coherence/viewport pass (this run) are both
  now complete. If a future non-final run wants genuinely new depth work
  rather than re-treading either: whether the assessment pages' stated
  word-count/format requirements match what a student would actually be
  asked to produce is one angle not yet checked; otherwise, honestly, the
  build looks done, and confirming that with a fresh, different sampling of
  pages is still more useful than manufacturing new work.
- No live/deployed-URL verification yet --- not required until the
  finishing run per doctrine step 6.

## The single most important next action

If this run's prompt still isn't the last: read this file, confirm `git
log` still shows `2daeb59` on top (no new commits expected unless a future
run finds something), then look for a genuinely new angle rather than
re-running the now-twice-completed fact-check/coherence passes. If the
prompt names this run as the *last* one: run `pnpm check` and `pnpm
check:evidence` fresh, write `PROCESS.md` for real (cite the real commits
listed above in order; the brief wants a spine --- what a good course looks
like, which decisions became a `CLAUDE.md` rule or a `spec/` check, which
were deliberately left out, not a commit-by-commit diary), verify live in a
real browser at both marking viewports against the actual deployed GitHub
Pages URL once published, then commit, push, and update this file to say
it's shipped.
