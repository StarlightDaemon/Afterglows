# Handoff: Animation Concepts — Category Balance & Physics Audit

**For:** Google Gemini agent, full repository access
**Date:** 2026-08-06
**Repo:** Afterglows (`https://afterglows.starlightdaemon.dev/`)

## Scope

You have full read access to this repository. Your job is **audit and propose only** —
produce one markdown report. Do **not** edit `concepts/gallery/manifest.js`, do **not**
add or edit files under `concepts/gallery/concepts/`, and do **not** touch any other
repo file. Implementation of anything you propose happens later, in a separate pass,
after a human (and likely a second agent) verifies your claims against the actual
source — see "Why this scope" below before you start.

Write your single output file to:

```
.audits/gemini-concepts-expansion-2026-08-06.md
```

## What you're auditing

`concepts/` is a manifest-driven gallery of self-contained animation web components
("concepts"). Start here:

- `concepts/README.md` — describes the gallery, the category table, and status-badge
  meaning (Original v1 / Refined vN / New v1).
- `concepts/gallery/manifest.js` — single source of truth. `CATEGORIES` (20 entries)
  and `CONCEPTS` (200 entries, each with `tag`, `label`, `category`, version history).
  This is ground truth for counts — don't trust any number below without re-checking
  it against this file, since it changes over time.
- `concepts/gallery/concepts/*.js` — one file per concept, e.g. `ember-concept.js`
  defines `<concept-ember>`. Dependency-free custom elements, CSS animations mostly
  driven by keyframes/transforms in the shadow DOM.

Categories were consolidated from 29 → 20 on 2026-08-03 (see the comment at the top
of `manifest.js`). **Do not propose new categories.** Work only within the existing 20.

## Current category sizes (re-verify against manifest.js — this table is a snapshot)

| Category (id) | Title | Count | Priority |
| --- | --- | --- | --- |
| `ocean` | Ocean & Deep | 5 | **highest** |
| `music` | Music & Sound | 6 | **highest** |
| `birds` | Birds & Aviary | 6 | **highest** |
| `textile` | Textiles & Craft | 6 | **highest** |
| `toys` | Toys & Playthings | 6 | **highest** |
| `arcane` | Magic & Arcane | 7 | high |
| `mech` | Mechanisms & Tools | 9 | high |
| `home` | Home & Office | 10 | medium |
| `occult` | Supernatural & Occult | 10 | medium |
| `games` | Games & Sport | 10 | medium |
| `geometry` | Geometry & Pattern | 11 | medium |
| `city` | City & Commerce | 11 | medium |
| `lab` | Lab & Optics | 12 | low |
| `space` | Space & Spatial | 12 | low |
| `retro` | Retro & Symbolic | 12 | low |
| `garden` | Garden & Insects | 12 | low |
| `bio` | Science & Bio | 13 | low |
| `scifi` | Sci-Fi & Encounters | 13 | low |
| `systems` | Systems & Scanning | 14 | avoid unless exceptional |
| `nature` | Nature & Weather | 15 | avoid unless exceptional |

## The task, in two parts

### Part 1 — Movement/physics catalog

Before proposing anything new, read enough of `concepts/gallery/concepts/*.js` (don't
sample — read broadly, especially across the categories in the table above) to build
a catalog of the **animation mechanics already in use** across the gallery: things like
procedural flicker, spring/elastic easing, orbital rotation, particle emit-and-fade,
sine-wave/noise-driven drift, stagger/cascade timing, morphing SVG paths, parallax
layering, squash-and-stretch, physics-based bounce/gravity, etc.

The goal is a second axis of novelty, separate from subject matter: a new concept
should ideally bring either a **subject** not covered in its category, a **mechanic**
not overused in its category, or both. List mechanics you see recurring often (so new
proposals can avoid just re-skinning them) and mechanics that are rare or absent
gallery-wide (so new proposals can reach for them).

### Part 2 — Per-category expansion proposals

For each of the 20 categories, propose new concepts, weighted by the priority column
above — propose more for `ocean`/`music`/`birds`/`textile`/`toys`, fewer for `arcane`/
`mech`, fewer still for the medium tier, and skip the low/avoid tier entirely unless
you find something so mechanically distinct it would be a shame to leave out (rare;
justify explicitly if you do this). The aim is to move the gallery toward more even
category sizes, not to pad every category equally.

For each proposed concept, give:

- **Name** and target category.
- **What it shows** — concrete visual/mechanical description, not just a label.
- **The mechanic** — which movement/physics idea from Part 1 it uses (call out if it's
  one you flagged as rare/absent).
- **Why it's distinct** — name the specific existing concept(s) in that category (or
  elsewhere, if there's a risk of overlap) it could be confused with, and say exactly
  what differentiates it. This must be based on having actually read that concept's
  source file, not its label — see the next section for why this matters.

## Why this scope (read before you start)

A prior Gemini review of this gallery (`.audits/gemini-concepts-review-2026-07-29.md`)
proposed a "Campfire" concept as mechanically distinct from the existing "Ember"
concept, describing Ember as "a static, glowing singular" flame. A follow-up
verification pass that actually read `ember-concept.js`
(`.audits/gemini-review-verification-2026-08-01.md`) found Ember already has three
flickering flame layers plus rising, drifting, fading sparks — i.e. the proposed gap
didn't exist; it was a description of Ember guessed from its name/thumbnail rather
than its code. The same pass found a second claim (about which `constellation-concept.js`
versions render connecting lines) was half-right and half-wrong for the same reason.

Two things follow for you:

1. **Read the actual source before claiming a gap or a distinction.** If you assert an
   existing concept doesn't do X, or that your proposal differs from an existing one
   in a specific way, that claim should be traceable to lines you read in that
   concept's `.js` file, not inferred from its `label` in the manifest.
2. **This is why the deliverable is a proposal document, not code.** Your report will
   itself be checked against source before anything gets built, same as the 07-29
   review was. Keep claims falsifiable — cite the concept file and what it actually
   does, so that check is fast rather than another full re-read.

## Also check for duplicate/near-duplicate labels

Cross-reference proposed names against every existing `label`/`tag` in
`manifest.js` (200 entries) so you don't suggest something that's effectively already
there under a different name.

## Output

One file: `.audits/gemini-concepts-expansion-2026-08-06.md`, containing the Part 1
catalog and the Part 2 per-category proposals as described above. No other files
changed.
