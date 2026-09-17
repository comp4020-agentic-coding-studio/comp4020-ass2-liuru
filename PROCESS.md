# Process overview

## What I built

**SLOP6779, The Tang Yin Problem**, is a postgraduate connoisseurship seminar
built around one real, unresolved case: the contested oeuvre of Ming painter
Tang Yin (唐寅, 1470–1524) and the Suzhou *pian* ("Soochow fakes") industry that
copied him at scale for centuries. Every week uses that one case as its
material rather than a generic art-history syllabus with his name attached
([`2e8901c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/2e8901cdc35562f6a31b53ce44fc24feeaf22555),
[`a00fe6d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/a00fe6d5d0484832264442e88899abdca157e321)).

## How I got here

Directing this course meant deciding, early, what I'd actually reject a
generated week for — then writing that down where the agent would read it
before writing anything. The rule that ended up doing the most work is
[`CLAUDE.md`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/e1a1799dee77052261ccff46f7f317f6e90c7eaf)'s
first two paragraphs: ground every checkable fact in real WebSearch, not
plausibility, because a connoisseurship course that fabricates its own
evidence is the exact failure it exists to teach against; and make every week
earn its place against the attribution problem specifically, cutting anything
that "could belong to any art-history course." The second rule is why the
seminars escalate a real toolkit — materials before brushwork before seals
before colophons — rather than twelve interchangeable case studies
([`a00fe6d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/a00fe6d5d0484832264442e88899abdca157e321)).

Structural coherence I could encode as a check, so I did:
`spec/course-structure.test.ts`
([`4c9943f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/4c9943f1421fdfa3a7bf037981c564d502231f34))
asserts every week 1–12 has both a lecture and a seminar, that each pair
cross-links the other (not just that both nodes exist — an agent can generate
content without wiring it together), that the three assessment weights sum to
100, and that at least one deck actually built. That test caught nothing on
first run, but it's there so a future edit can't silently break what it
protects. A related gap the mechanical checks *couldn't* catch: `people` was
declared a graph collection but had no route back from a teacher's bio to
what they taught, since no `related` field pointed at them — found only by
reading the site as a marker would, not by any build step, and fixed by
adding the missing links deliberately, not uniformly (Marisol teaches nearly
the whole course, so linking her from every session would be noise, not
signal) — a content judgement call, not a structural invariant, so it stayed
a one-off fix rather than a new spec rule
([`ae7b3a1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/ae7b3a1d109a702c9ebcedeb63dee21e7dd155f6)).

Factual accuracy was the harder call: no spec check can verify a claim about
the real world, so I left it as a habit — a repeated WebSearch spot-check
against specific, checkable claims (an institution, a date, an attributed
quote), run across every week rather than just new content. It found two real
errors in prose written before that discipline existed: a conflated account
of which forged paintings which museum actually bought
([`afd1deb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/afd1deb985d721b7b920e716b06f07b2feb5bf04)),
and — in week 11, my own namesake week — a wrong decade for when Tang Yin
actually took the "Liuru" sobriquet, carried forward unchecked precisely
because it was personally compelling rather than verified
([`2daeb59`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/2daeb59e844b3e560d5cab75ccce521f3dd6d9a5)).
That two-for-twelve hit rate is why I trust the fact-check habit over any
plausible-sounding first draft, including my own.

I deliberately didn't restyle the starter's visual theme: the artefact
criterion asks whether the site works, not what it looks like, so effort went
into content, cross-linking and real decks
([`78552eb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/78552eb2e18599935244d6c2afaa91b8b1e34096),
[`43e7077`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/43e7077df7c2eb0d685d836a23f0202fb9c846f8),
[`a9330dc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/a9330dc2fd9282d66c080aa9bd223fe91dff37dd))
and original artwork/bios replacing every piece of starter placeholder
([`f818dfe`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/f818dfe83fc4a1fb68e746fe83c9e69c4c99b5ff),
[`9968cc0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/9968cc04831ee3bb6a97c443c120c956c9712e36),
[`547c0ad`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-liuru/commit/547c0ade5c2a31499aaadb2beeefc147eb7c1990))
rather than a cosmetic pass over the template's look.
