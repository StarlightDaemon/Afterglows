# Handoff: Implement 40 New Animation Concepts (Sequestered)

**For:** Google Gemini agent, full repository access
**Date:** 2026-08-06
**Source of truth:** `.audits/gemini-concepts-expansion-2026-08-06.md` — a verified 40-proposal
report (32 proposals + an 8-proposal addendum; a follow-up pass checked every proposal's
source citations against the actual code and corrected six minor errors found — see that
file's "Verification Pass" section). Read it in full before starting; it's where every
concept's design comes from. Do not redesign — implement what it specifies.

## Scope: this pass is sequestered

You may **only**:

1. **Create 40 new files** under `concepts/gallery/concepts/`, one per proposed concept.
2. **Append 40 new entries** to the `CONCEPTS` array in `concepts/gallery/manifest.js`.
   No other change to that file.
3. **Update the marketed concept-count copy** in exactly these places (per the standing
   policy that the count only moves in clean batches): `index.html` (card description,
   tech-tag, meta description, `og:description`), `concepts/README.md` (the intro line
   and the category-count table), `docs/DEMOS_OVERVIEW.md`. Change "200 concepts across
   20 categories" to "**240 concepts across 20 categories**" everywhere it appears live.
   Do **not** touch `.audits/*` or any changelog — those are point-in-time records.

You may **not** touch: any existing file under `concepts/gallery/concepts/`, `concepts/gallery/index.js`,
`concepts/gallery/reduced-motion.js`, any CSS/JS under `assets/`, `header-animation-concepts.html`,
or anything outside the three items above. If you think one of those needs a change to make
this work, stop and describe why instead of making the change — that's a signal something in
this handoff is wrong, not a green light to expand scope.

Nothing else needs to change for a new concept to appear in the live gallery: `concepts/gallery/index.js`
derives each concept's import path straight from its manifest `tag` (`concept-foo-bar` →
`./concepts/foo-bar-concept.js`, see `index.js` line ~26), and `reduced-motion.js` patches
`attachShadow` globally for any element whose tag starts with `CONCEPT-`, so `prefers-reduced-motion`
support is automatic — don't add per-concept handling for it.

## The component pattern (match this exactly)

Every existing concept file follows this shape — read 3-4 existing files in the target
category before writing each new one, to match its house style. A minimal template:

```js
const fooStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* One-line WHY comment: the mechanic in a sentence, the way bell-concept.js's
     top comment reads "the bell rocks on its yoke, the clapper lags a beat
     behind and strikes at each extreme, throwing a sound ring from the rim." */
  .foo {
    width: 104px;   /* internal composition sized ~90-120px in each axis — */
    height: 96px;   /* it renders centered inside a 140x140px gallery tile */
    position: relative;
  }

  /* ...elements, @keyframes... */
`;

class ConceptFoo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fooStyles}</style>
      <div class="foo">
        <!-- markup -->
      </div>
    `;
  }
}

if (!customElements.get('concept-foo')) {
  customElements.define('concept-foo', ConceptFoo);
}
```

Conventions to hold to, all confirmed by reading multiple existing files:
- No build step, no imports, no external dependencies — pure browser ESM + CSS.
- File name is `{name}-concept.js` where the manifest tag is `concept-{name}` (e.g.
  tag `concept-hydrothermal-vent` → file `hydrothermal-vent-concept.js`).
- Class-name prefixes are short and concept-specific (`.sub-*` for submarine, `.jelly-*`
  for jellyfish, `.bell-*` for bell) — pick a short prefix per new concept and use it
  consistently; shadow DOM isolates styles so there's no collision risk, this is purely
  for readability.
- Colors/glows lean on the site's green phosphor palette conventions already visible in
  every file you'll read (`rgba(0, 204, 0, ...)`, `rgba(140, 255, 170, ...)` accents) —
  match what you see in the 3-4 reference files per category, don't invent a new palette.
- `if (!customElements.get(...))` upgrade guard on every file, no exceptions.
- Every proposal in the audit already specifies the mechanic and the visual description
  in enough detail to build from — if a detail is genuinely ambiguous, make the smallest
  reasonable choice and move on; this doesn't need a round-trip.

## Manifest entries

Append each new concept as an entry in this shape (this is the exact field set every
unversioned "New v1" entry in the manifest already uses):

```js
{
  tag: "concept-foo",
  label: "Foo",
  category: "ocean",
  added: "2026-08-06T00:00:00Z",
  updated: "2026-08-06T00:00:00Z",
  versioned: false,
  badge: "New v1",
  badgeCls: "meta-status-new",
  default: null,
  versions: [],
},
```

Use one consistent `added`/`updated` timestamp for the whole batch (existing batches in
the manifest do this — e.g. the whole `ocean` category shares `"2026-07-23T12:21:00Z"`).
Pick a single ISO-UTC timestamp for 2026-08-06 and stamp all 40 entries with it for both
fields, since they're all new.

**Insert each entry at the end of its category's existing block**, not at the end of the
whole array — `CONCEPTS` order is display order (grouped by category), and the README
documents this. Use `grep -n 'category: "ocean"' concepts/gallery/manifest.js` (etc. per
category) to find where each block currently ends before inserting.

## The 40 concepts (tag / label / category — from the verified audit)

**ocean** (6): `concept-bathysphere` Bathysphere · `concept-nautilus` Nautilus ·
`concept-manta` Manta Ray · `concept-hydrothermal-vent` Hydrothermal Vent ·
`concept-tidepool` Tide Pool · `concept-octopus` Octopus Camouflage

**music** (6): `concept-gramophone` Gramophone Horn · `concept-accordion` Accordion ·
`concept-violin-bow` Violin Bow · `concept-tympani` Tympani · `concept-marimba` Marimba Run ·
`concept-theremin` Theremin

**birds** (6): `concept-murmuration` Murmuration · `concept-falcon-stoop` Falcon Stoop ·
`concept-flamingos` Flamingo Balance · `concept-weaverbird` Weaverbird Nest ·
`concept-ostrich` Ostrich Sprint · `concept-albatross` Albatross Dynamic Soar

**textile** (5): `concept-embroidery-hoop` Embroidery Hoop · `concept-pinking-shears` Pinking Shears ·
`concept-drop-spindle` Drop Spindle · `concept-tatting-shuttle` Tatting Shuttle ·
`concept-macrame` Macramé Knotting

**toys** (5): `concept-newtons-cradle` Newton's Cradle · `concept-marbles-run` Marbles Run ·
`concept-kaleidoscope` Kaleidoscope · `concept-chattering-teeth` Chattering Teeth ·
`concept-etch-a-sketch` Etch A Sketch

**arcane** (4): `concept-astral-projection` Astral Projection · `concept-scrying-pool` Scrying Pool ·
`concept-alchemical-transmutation` Alchemical Transmutation · `concept-broom` Witch's Broom

**mech** (3): `concept-geneva-drive` Geneva Drive · `concept-vise-anvil` Vise & Anvil ·
`concept-centrifugal-governor` Centrifugal Governor

**home** (1): `concept-vacuum-radio` Vacuum Tube Radio
**occult** (1): `concept-poppet-doll` Poppet Doll
**games** (1): `concept-foosball` Foosball Table
**geometry** (1): `concept-tesseract` Tesseract
**city** (1): `concept-drawbridge` Bascule Drawbridge

Total: 40. Full design detail (what it shows, the mechanic, why it's distinct from
neighboring concepts) for each is in the audit report — use those descriptions as your
spec; don't re-derive them.

## Output

- 40 new files under `concepts/gallery/concepts/`.
- 40 new entries appended into `manifest.js`'s `CONCEPTS` array, grouped into their
  categories' existing blocks.
- Count copy updated in the three files listed above, 200 → 240.
- Nothing else changed. When done, a `git status` / `git diff --stat` should show exactly:
  40 new files + `manifest.js` + `index.html` + `concepts/README.md` + `docs/DEMOS_OVERVIEW.md`.

This implementation will be re-reviewed on the other side afterward for standardization
and consistency with the rest of the archive before it's considered final — build
carefully, but don't block on getting every stylistic nuance perfect.
