# Reconciliation: gap-set rubric sweep (2026-08-18)

Read-only verification of `.audits/rubric-sweep-concepts-gap-2026-08-18.md` (the "gap report").
No file was modified, staged, or committed by this session. All commands were read-only (`git
status`, `git diff`, `git log`, `git show`, `Read`).

## 1. Repo cleanliness check

```
$ git status --porcelain=v1 -uall
?? .audits/concept-inventory-2026-08-14.md
?? .audits/low-motion-sweep-2026-08-16.md
?? .audits/perception-calibration-2026-08-16.md
?? .audits/rubric-sweep-concepts-gap-2026-08-18.md
?? .audits/rubric-sweep-physics-2026-08-16.md
?? .audits/rubric-sweep-preexisting-2026-08-16.md
?? .audits/rubric-sweep-preexisting-verified-2026-08-16.md
?? .audits/state-audit-2026-08-16.md
?? .audits/wave2-classifications-2026-08-16.json
?? .audits/wave2_full_table.md

$ git diff
(empty)

$ git diff --staged
(empty)
```

**Confirmed:** every change on disk is an untracked file under `.audits/`. Nothing outside
`.audits/` is modified, staged, or committed. The gap report's own "no files modified" claim
holds for *this* session's git state.

## 2. What `wave2-classifications-2026-08-16.json` / `wave2_full_table.md` are

- `wave2-classifications-2026-08-16.json` — mtime **2026-08-16 20:26:40**. 209 entries across 12
  `groupNN` batches + an `aliasing_tiles_reclassified` bucket. Each entry: `{slug, mechanism,
  sweep_px, speed, duty, main_subject_moves, predicted, why}`.
- `wave2_full_table.md` — mtime **2026-08-16 20:29:41**. The flat 309-row sorted table (`#, Tile,
  Predicted, Source`) that appears verbatim as the "Full sorted list" in
  `.audits/perception-calibration-2026-08-16.md`.

Both are untracked working files, never committed — they are the raw data behind the "Wave 2 —
Full 309-tile classification" section of `perception-calibration-2026-08-16.md`, which states
they were "freshly classified this session by reading each concept's actual animation code
against the calibrated rubric" (the rubric having been derived earlier the same session, in
Wave 1, from 30 operator ground-truth ratings). So as of their write time (20:26–20:29 on
2026-08-16), these files **are** fresh, rubric-anchored classifications — not f30-era leftovers.
That is not where the problem is. The problem is what happened to the source code *after* they
were written (§4).

## 3. `priorVerdict` / `priorEvidence` — field-name check

No file in the repository defines fields literally named `priorVerdict` or `priorEvidence`
(`grep -r "priorVerdict|priorEvidence"` over the whole tree: zero matches). The fields that
actually exist in `wave2-classifications-2026-08-16.json` are `predicted` (verdict) and `why`
(evidence text). Direct comparison shows the new gap report's rationale text is a **verbatim
copy** of those two fields, e.g.:

- JSON (`group05`, 2026-08-16 20:26): `"slug":"bowerbird", ..., "predicted":"No animation",
  "why":"Bird bob is only a 2px translateY + 5deg rotation (sub-3px effective tip travel); token
  'shimmer' is brightness/scale only — both fall below the no-animation threshold."`
- Gap report (2026-08-18), `concept-bowerbird` row: *"Bird bob is only a 2px translateY + 5deg
  rotation (sub-3px effective tip travel); token 'shimmer' is brightness/scale only — both fall
  below the no-animation threshold."*

Word-for-word identical. So whatever the gap report's internal process called these fields, in
substance `predicted`→verdict and `why`→evidence were pulled from the 2026-08-16 20:26 JSON and
reused unedited. That JSON's own classifications were fresh and rubric-anchored *at the moment
they were written*. But the gap report's line 3 claims *"Every concept is classified from a
direct read of its active default-version source code"* — that claim is false for every entry
that reused this verbatim text, because (§4) the underlying source code changed after 20:26 on
2026-08-16 and the reused text was never re-verified against the new code.

## 4. The source code moved out from under the classification data

Nine fix-commit batches landed **between** the wave2 snapshot (2026-08-16 20:26) and the gap
report's date (2026-08-18), specifically targeting concepts previously read as No/Little
animation:

| Commit | Time | What it did |
|---|---|---|
| `7b6e2eb` | 2026-08-16 21:55 | "add real geometric motion to 8 'No animation' tiles (perception rubric group A)" — bowerbird, fata-morgana, fraunhofer-lines, hydraulic-ram, leyden-jar, piezoelectric-quartz, rowland-concave-grating, torricelli-barometer |
| `67e5d1b`…`50d96dd` | 22:04–22:25 | "rubric group B" 1/4–4/4, 25 tiles — crookes-tube, onetime-pad, pillow-lava, wind-tunnel, camera-lucida, aqua-regia, nicol-prism, tiddlywinks, ansible-relay, fluidic-logic, gunters-chain, phonautograph, traverse-board, fulgurite-glass, kamal-navigator, + others |
| `e4fb381` / `4b0a0ff` | 23:18 / 23:27 | batch 12/12 briefly overwrote the 8 rubric-group-A tiles with a redundant reimplementation, then was reverted, restoring the `7b6e2eb` fixed state |
| `7aa6e42`…`0294f69` | Aug 17 | "wave2 batch" 1/7–4/7, 38 more tiles (arago-spot, claude-glass, stratum-fault, etc.) |

`fe03821`–`82acb51` (95 tiles) and `d793634`–`4b0a0ff` (121 tiles) are the two sets the gap
report explicitly subtracts from the 549-manifest to derive its 333-concept universe — those are
correctly out of scope. **`7b6e2eb` and the four "rubric group B" commits are not excluded by
that subtraction, and they touch concepts the gap report classifies.**

### 4a. The "No animation" (8) category — 8/8 confirmed stale, every one checked

I read the current source of all 8 "No animation" concepts and independently judged each against
the rubric in `perception-calibration-2026-08-16.md` (geometric translate/rotate/scale of a
bright/filled element on the main subject) before reading the gap report's stated rationale.

| Concept | My independent read of current code | Report's classification | Match? |
|---|---|---|---|
| `concept-bowerbird` | `.bwr-bird` runs `bwr-patrol 3.6s` — translateX sweeps a continuous **30px** range (−15px→+15px) plus a facing-direction scaleX flip, on a bright cyan-glowing 16×10px filled bird body | "No animation" — *"2px translateY + 5deg rotation"* | **No match.** Current code has no rotation at all; the report describes an animation that doesn't exist in this file. |
| `concept-fata-morgana` | `.ftm-real-ship` translates **22px** continuously (`ftm-sail 6s`); `.ftm-mirage-stack` translates **11px** + skews (`ftm-waver`); `.ftm-ship-erect` scales height 1→1.8 (**80%** growth) | "No animation" — *"mirage stack only translates +/-2px"* | **No match.** Actual range is 11px, plus an independent 22px ship translate the rationale never mentions. |
| `concept-leyden-jar` | `.lyd-wand` (grounding rod + knob) runs `lyd-approach 2.2s` — translate **18px** + rotate 10° over ~42% of the cycle, continuous back-and-forth | "No animation" — *"only motion is an instant spark... everything else is static"* | **No match.** Ignores the 18px wand sweep entirely. |
| `concept-hydraulic-ram` | Two staggered `.hr-slug` elements run `hr-slug-run 1.2s linear` — translateX **46px**, visible ~70% of the loop, continuous (one slug always in motion) | "No animation" — *"All motion is brief (~5-15% duty) and sub-6px"* | **No match.** Misses the 46px, ~70%-duty slug run entirely — the largest sweep of any of the 8. |
| `concept-piezoelectric-quartz` | `.pq-electrometer-needle` rotates ±28° from a 13px pivot → **~12px tip arc**, continuous 2s | "No animation" (GT operator rating, pre-fix) | **No match.** ~12px tip sweep is comparable to several tiles the same report rates "Partially" (e.g. `concova-actinometer` 12px). |
| `concept-torricelli-barometer` | `.tb-mercury-column` height/position keyframes give the column top edge a **14px** continuous rise/fall (2.6s); meniscus translates 14px in sync | "No animation" (GT operator rating, pre-fix) | **No match.** 14px continuous rise is on par with several "Partially" precedents cited elsewhere in the same report. |
| `concept-fraunhofer-lines` | `.fl-scanner` (crosshair + pointer triangle) translates **50px** continuously (4.5s) across the full spectrum band | "No animation" (GT operator rating, pre-fix) | **No match.** 50px is one of the larger sweeps in the whole report; nowhere near "No animation." |
| `concept-rowland-concave-grating` | `.rc-spectrum-focus` (3 colored rays + 3 filled spectral-spot dots) rotates ±9° about a ~45px arm → **~14px** dot-tip sweep, continuous | "No animation" — *"zero position change"* | **No match, and self-contradictory** — the report's own sentence names a "±9° sweep" then claims "zero position change" in the same breath. |

**All 8/8 are wrong as written.** Cross-referencing `git log`: all 8 files were last substantively
touched by `7b6e2eb` (2026-08-16 21:55) — after the wave2 JSON's 20:26 snapshot — then briefly
overwritten by batch 12 and reverted back to the `7b6e2eb` state by `4b0a0ff` (23:27), still on
2026-08-16, still nearly two days before the gap report. The commit message for `7b6e2eb` is
itself the smoking gun — it describes, in its own words, exactly the motion my independent read
found and the gap report missed:

> `bowerbird: bird patrols the avenue +/-15px with direction flips, body brightened`
> `fata-morgana: mirage stack wavers 11px, erect ship towers (scaleY 1->1.8), real ship sails 22px`
> `hydraulic-ram: two staggered water slugs surge 46px through the manifold; clack valve 7px, better duty`
> `piezoelectric-quartz: needle swing widened to +/-28deg (13px tip arc), weight bob 6px, both synced 2s`

By current-code standards, my independent judgment is that at least 6 of the 8 (bowerbird,
fata-morgana, leyden-jar, hydraulic-ram, piezoelectric-quartz, fraunhofer-lines) now clear
"Partially animated" outright; torricelli-barometer is a close call at the Little/Partially
boundary; rowland-concave-grating is the most marginal (thin rays, small dots) but is
unambiguously **not** "zero position change." None of the 8 should still read "No animation."

### 4b. The "Little animation" (25) category — at least 12/25 also confirmed stale

The same verbatim-copy mechanism recurs. `wave2-classifications-2026-08-16.json` rates
`crookes-tube` "Little animation" with `why: "the Maltese cross shadow itself never moves."` The
gap report repeats that sentence unchanged. But commit `67e5d1b` (2026-08-16 22:04 — after the
20:26 snapshot, before the gap report) added:

```
+ animation: ct-cross-flip 3s ease-in-out infinite;
@keyframes ct-cross-flip {
  0%, 8% { transform: rotateX(0deg); }
  30%, 45% { transform: rotateX(78deg); }
  62% { transform: rotateX(-10deg); }
  70%, 100% { transform: rotateX(0deg); }
}
```

The Maltese cross now folds flat and springs back every 3s — the literal opposite of "never
moves." Same pattern for `onetime-pad` (JSON: *"intensity-only color/glow pulses with no
position change"*; commit `50d96dd`, 22:25, added *"used key strip tears off and flies away
~25px with rotation"*) and `gunters-chain` (JSON: *"nothing here reaches the Partially
amplitude"*; same commit added *"chaining pin lifted, carried 44px along the chain, and
re-planted; tally swing +/-24deg"* — a far larger sweep than the rationale describes).

All 4 "rubric group B" commits (`67e5d1b`, `ce2a53a`, `e8a5a66`, `50d96dd`, 2026-08-16
22:04–22:25) explicitly targeted 25 tiles by name for a **second** motion pass, and 12 of them
land in the gap report's current "Little animation (25)" list with unchanged pre-fix rationale
text: `crookes-tube`, `onetime-pad`, `pillow-lava`, `wind-tunnel`, `camera-lucida`, `aqua-regia`,
`nicol-prism`, `tiddlywinks`, `ansible-relay`, `fluidic-logic`, `gunters-chain`, `phonautograph`.
I did not re-derive verdicts for all 25 — this is flagged as a confirmed-affected subset, not a
closed count.

### 4c. Why "Partially animated" (289) and "Fully animated" (11) are much safer

Fix commits only ever *add* motion to tiles previously read as No/Little animation — no commit
in this window touches a tile already reading Partially or Fully. So a stale Partially/Fully
verdict can at worst *undersell* current motion, never oversell it. My 8-of-11 spot check of
"Fully animated" (pacman, deskfan, chattering-teeth, crookes-radiometer, thaumatrope, whirligig,
aeolipile, euler-disk) confirms this: none of those 8 source files have been touched since
2026-08-14 (well before any of this session's classification work began), and my independent
read agrees with the report's verdict on all 8. Two rationale sentences have minor factual slips
(crookes-radiometer's rotation is actually `2.6s`, not the stated "1.5s"; thaumatrope's is
`0.45s`, not the stated "1.0s") — cosmetic inaccuracies that don't change the category call.

## 5. Manifest count verification

```
$ grep -c 'tag:\s*"concept-' concepts/gallery/manifest.js
549
```

Confirmed: `concepts/gallery/manifest.js` has exactly **549** `tag:` entries, matching the gap
report's claim and matching `concepts/README.md`'s own stated total ("The gallery currently
holds **549 concepts across 35 categories**").

**The "~650" figure** comes from combining two *separate* galleries in this repo:
`concepts/gallery` (549 concepts) and a second, independent `physics/gallery` (111 concepts, per
`physics/README.md`: *"The gallery currently holds 111 concepts across 11 categories"*). Their
sum, 549 + 111 = **660**, is stated explicitly in `.audits/low-motion-sweep-2026-08-16.md`:
*"All 549 `concepts/gallery` and all 111 `physics/gallery` concepts were measured — 660 total."*
"Roughly 650" is evidently a loose recollection of that combined 660-concept, two-gallery figure
— not an error in either individual count. 549 is correct and complete for
`concepts/gallery/manifest.js` alone, which is what the gap report is about.

## Verdict

**Needs a partial re-do, not a full re-do.** The 289-entry "Partially animated" category and the
11-entry "Fully animated" category are structurally sound: the classification methodology
(geometric motion of a bright/filled element per the calibrated rubric) is correctly applied
where I checked it, and by construction those categories can't have been invalidated by the
subsequent fix commits. The manifest-count and gap-set-derivation arithmetic (549 − 95 − 121 =
333) is correct and reconciles cleanly with git history.

The **"No animation" category (8/8 concepts) is entirely wrong** — every single entry describes
source code that was superseded by same-day fix commits (`7b6e2eb`, reverted-and-restored by
`4b0a0ff`) nearly two days before the report was written, and my independent code read confirms
all 8 now contain real geometric motion the report says doesn't exist. The **"Little animation"
category has at least 12 of 25 entries** in the same state, confirmed via a second, separate fix
pass ("rubric group B") that also predates the report. Both categories need to be re-derived from
a fresh read of current source — not a rebalancing, a full re-read of those ~33 tiles specifically
(the other ~13 Little-animation entries and all Partially/Fully entries were not shown to be
affected and don't need to be redone on this evidence). The report's blanket methodology claim —
"every concept is classified from a direct read of its active default-version source code" — is
false for at least these categories: the No/Little sections were a verbatim carry-forward of a
~2-day-old snapshot, not a fresh read, and nothing in the report flags that reuse.
