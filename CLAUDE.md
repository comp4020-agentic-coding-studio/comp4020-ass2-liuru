# The Tang Yin Problem — harness rules

Ground every course fact (dates, names, institutions, scholarly claims) in real
research, not invented plausibility. Check with WebSearch before writing
anything a reader could fact-check. A connoisseurship course that fabricates
its own evidence is the exact failure mode the course exists to teach against.

Every week's material has to earn its place against one question: does it
extend the Tang Yin attribution problem, or is it generic filler that could
belong to any art-history course? Cut or rewrite anything that fails this.

Frontmatter `description`/`marking.description` fields are long prose and
routinely contain a colon followed by a space. Write those as an explicit YAML
block scalar (`>-` folded, or `|-` literal) rather than a bare indented plain
scalar — a colon-space inside a plain multi-line scalar is invalid YAML and
`js-yaml` (which Astro's content loader uses) fails with a confusing "multiline
key may not be an implicit key" error pointing at the *next* key, not the
actual line. If `pnpm check` throws that error, verify the fix against the
project's real `js-yaml` dependency directly (`node -e` importing
`node_modules/.pnpm/js-yaml@*/node_modules/js-yaml/dist/js-yaml.mjs`), not
PyYAML or a by-eye read — PyYAML is more lenient and will pass frontmatter that
still breaks the real build.
