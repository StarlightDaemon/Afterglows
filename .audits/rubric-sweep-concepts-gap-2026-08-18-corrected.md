# Rubric sweep: Concepts gallery gap inventory — CORRECTED (2026-08-18)

Corrected version of `.audits/rubric-sweep-concepts-gap-2026-08-18.md` (the "gap report"),
produced after `.audits/reconciliation-gap-sweep-2026-08-18.md` found that the gap report's
"No animation" and part of its "Little animation" sections were a verbatim carry-forward of
`wave2-classifications-2026-08-16.json` (written 2026-08-16 20:26–20:29) whose rationale text
predates same-day fix commits that added real motion to those exact tiles.

This report closes the two things the reconciliation left open: (1) it enumerates, by git log
over the precise staleness window, **every** commit and **every** concept file touched between
the wave2 snapshot and the gap report's writing, cross-referenced against **all 333** gap-set
entries in every category — not just No/Little animation; and (2) it independently
re-classifies, from a fresh read of current source, every gap-set entry that window touched.

No concept file, manifest entry, or render code was modified, staged, or committed by this
session. This is a read-only audit report; only this new file was written.

## Step 1 — Precise staleness window and full cross-reference

**Window:** commits from `2026-08-16 20:26:00` (wave2 JSON write time) through
`2026-08-18 23:59:59` (inclusive of the gap report's writing day).

```
$ git log --since="2026-08-16 20:26:00" --until="2026-08-18 23:59:59" --date=iso \
    --pretty=format:'%H|%ad|%s' --reverse
```

returned **34 commits**. Of those, two ranges are the sets the gap report's own derivation
already subtracts from the 549-manifest to build its 333-concept universe, confirmed against
`CHANGELOG.md`'s `[1.9.0]` entry (added by `c6a3ebc`, 2026-08-17 12:17):

| Range | Commits | What CHANGELOG calls it | In scope for this report? |
|---|---|---|---|
| `fe03821`…`82acb51` | batch 1/9–9/9, 2026-08-18 00:04–00:39 | *not* the 121-tile pass — this is the "95-tile pre-existing fix assignment" the gap report separately subtracts | No — already excluded from the 333 gap-set universe |
| `d793634`…`4b0a0ff` | batch 1/11–12/12 + revert, 2026-08-16 22:45–23:27 | "Perception-rubric correction pass — 121 tiles" | No — already excluded from the 333 gap-set universe |
| `7aa6e42`…`0294f69` | wave2 batch 1/7–4/7, 2026-08-17 00:51–12:03 | "Verification pass on the 121-tile batch (38 of those tiles re-touched)" | No — verified below: all 38 files these commits touch are a subset of the already-excluded 121-tile set; zero overlap with the 333 gap set |
| `7b6e2eb` | 2026-08-16 21:55 | "Perception-rubric correction pass — 33 tiles" (the No-animation half) | **Yes** |
| `67e5d1b`, `ce2a53a`, `e8a5a66`, `50d96dd` | "rubric group B" 1/4–4/4, 2026-08-16 22:04–22:25 | "Perception-rubric correction pass — 33 tiles" (the Little-animation half) | **Yes** |
| `e4fb381` / `4b0a0ff` | batch 12/12 (23:18) / revert (23:27) | briefly overwrote the 8 rubric-group-A tiles with a redundant reimplementation, then reverted back to the `7b6e2eb` state | Net effect already captured by `7b6e2eb`; `4b0a0ff` is simply the file's last-touched commit for those 8 tiles |

**Verification that the wave2 batches are a subset of the excluded 121-tile set:**

```
$ git log --name-only --format="" d793634^..4b0a0ff -- concepts/gallery/concepts \
    | grep '^concepts/gallery/concepts/' | sed -E 's#.../([a-z0-9-]+)-concept\.js#concept-\1#' \
    | sort -u > set121_tags.txt        # 129 tags (121-tile batch + reverted detour)

$ git log --name-only --format="" 7aa6e42 f837299 c9691f69 0294f69 -- concepts/gallery/concepts \
    | grep '^concepts/gallery/concepts/' | sed -E 's#.../([a-z0-9-]+)-concept\.js#concept-\1#' \
    | sort -u > wave2_tags.txt          # 38 tags

$ comm -23 wave2_tags.txt set121_tags.txt   # tags in wave2 but NOT in the 121-set
(empty)
```

Confirmed: **zero** of the 38 wave2-batch tags fall outside the already-excluded 121-tile set,
and **zero** of them match any of the 333 gap-set tags. So the only in-scope, not-already-excluded
commits are `7b6e2eb` and the four "rubric group B" commits — five commits, touching **33 unique
concept files**.

**Full cross-reference against all 333 gap-set entries, every category:**

```
$ git show --name-only --format="" 7b6e2eb 67e5d1b ce2a53a e8a5a66 50d96dd \
    | grep '^concepts/gallery/concepts/' | sed -E 's#.../([a-z0-9-]+)-concept\.js#concept-\1#' \
    | sort -u > touched.txt             # 33 tags

$ join -t'|' gapset_all333.txt <(sed 's/$/|X/' touched.txt | sort)
```

Result: **exactly 33 matches — all 8 "No animation" entries and all 25 "Little animation"
entries. Zero matches in "Partially animated" (289) or "Fully animated" (11).**

This settles the open question from the reconciliation report precisely: the reconciliation
had confirmed 8/8 No-animation and only 12/25 Little-animation as touched, leaving 13
Little-animation entries and the entire Partially/Fully population unchecked. Git log now shows
**all 25** Little-animation entries were touched (not just 12), and **no entry outside the
No/Little categories** was touched by any commit in this window — the Partially (289) and Fully
(11) categories are fully unaffected by the staleness the reconciliation identified.

## Step 2 — Fresh classification of all 33 touched entries

Each of the 33 files was read directly (current on-disk source, not the report's stored
rationale) against the calibrated rubric in `.audits/perception-calibration-2026-08-16.md`:
genuine geometric motion (translate/rotate/scale) of a discrete bright-or-filled element on the
concept's main subject, with real amplitude and a duty cycle covering a meaningful fraction of
the loop; opacity/glow/color-cycling/dash-marching discounted regardless of amplitude.

**Result: 32 of 33 entries move to Partially animated. 1 of 33 (`concept-telegraph-sounder`)
is confirmed to remain Little animation** — its only geometric-motion candidate (a 16° lever
rotation) is real but gated by a duty cycle of roughly 32% of the loop, under the ~40% threshold
that separates "Little" from "Partially," so per the rubric it does not clear the bar despite
having a plausible amplitude.

### No animation (8) → all 8 corrected to Partially animated

| Concept | Original (2026-08-18 gap report) | Corrected | Rationale |
|---|---|---|---|
| `concept-bowerbird` | No animation — "2px translateY + 5deg rotation" | **Partially animated** | `.bwr-bird` (filled cyan-glowing body) runs `translateX` −15px↔15px (30px sweep) + facing-flip scaleX, ~100% duty, 3.6s. No rotation exists in current code at all — the old rationale describes motion that isn't there. |
| `concept-fata-morgana` | No animation — "mirage stack only translates +/-2px" | **Partially animated** | `.ftm-mirage-stack` translateY 11px + skewX, and `.ftm-ship-erect` scaleY 1→1.8 (~8px height growth), both continuous full-duty at 3.2s. Borderline case (moderate amplitude, semi-translucent fill) but clears the threshold. |
| `concept-leyden-jar` | No animation — "only motion is an instant spark... everything else is static" | **Partially animated** | `.lyd-wand` (bright glowing knob) translates 18px + rotates 10°, visible ~86% of the 2.2s loop — the old rationale ignores the wand sweep entirely. |
| `concept-hydraulic-ram` | No animation — "All motion is brief (~5-15% duty) and sub-6px" | **Partially animated** | Two staggered `.hr-slug` elements (bright filled cyan capsules) translateX 46px, ~70% visible duty, 1.2s — the largest sweep of the eight; old rationale misses it entirely. |
| `concept-piezoelectric-quartz` | No animation — "Weight bobs only 2px... needle swings ~5px tip arc" (GT rating pre-fix) | **Partially animated** | `.pq-electrometer-needle` (bright gold) rotates ±28° (56° total, ~13px tip arc), 100% duty, 2s. |
| `concept-torricelli-barometer` | No animation — "Mercury meniscus... creeps only 6px" (GT rating pre-fix) | **Partially animated** | `.tb-mercury-column` (filled, main subject) rises/grows 14px in sync with a 14px meniscus translate, full duty, 2.6s. |
| `concept-fraunhofer-lines` | No animation — "zero geometric translation" (GT rating pre-fix) | **Partially animated** | `.fl-scanner` (filled amber triangle marker) translateX 50px sweep — one of the largest sweeps in the whole gallery — full duty, 4.5s. |
| `concept-rowland-concave-grating` | No animation — "zero position change" (GT rating pre-fix) | **Partially animated** | `.rc-spectrum-focus` (colored rays + filled endpoint dots) rotates ±9° (18° total, ~12-13px tip arc), full duty, 3.2s. Most marginal of the eight (thin ray strokes) but not a no-op. |

### Little animation (25) → 24 corrected to Partially animated, 1 confirmed unchanged

| Concept | Original (2026-08-18 gap report) | Corrected | Rationale |
|---|---|---|---|
| `concept-fluidic-logic` | Little — "zero geometric travel of channel walls" | **Partially animated** | Filled glowing slug dots translate along a real ~65px offset-path, 1.1s, ~80% duty; complementary L/R branch switching keeps a slug moving almost continuously. |
| `concept-wind-tunnel` | Little — "Aerofoil pitches only ±4°" | **Partially animated** | `.wnd-airfoil` actually rotates −4°→−17° (13° amplitude, not ±4°), ~100% duty, 2.4s; `.wnd-puff`×3 also translateX 72px at ~75% duty. |
| `concept-kelvin-dropper` | Little — "droplets are only 5x8px... tiny-mover" | **Partially animated** | `.klv-drop`×6 continuously translateY 0→38px (86% of the container's travel), ~100% duty, staggered fall — large amplitude, not a tiny-mover case. |
| `concept-crookes-tube` | Little — "Maltese cross shadow itself never moves" | **Partially animated** | `.ct-cross`/`.ct-shadow` rotateX 0°→78°→−10°→0°, 3s — a real 78° swing on the filled, glowing cross (the concept's namesake), ~47% duty, just clearing the threshold. The old rationale is the literal opposite of current code. |
| `concept-synaptic-vesicle` | Little — "vesicle only grows ~3-4px... modest" | **Partially animated** | `.sv-fusing-vesicle` (main "active zone" subject) scaleY 0.5→1.35 (170% height change), 100% duty, 2s; `.sv-transport-vesicle` also translates ~30px at ~72% duty. |
| `concept-camera-lucida` | Little — "ghost sketch only fades... prism, rod, paper are static" | **Partially animated** | `.cl-pencil` continuously traces a 24×18px rectangle path with rotation, 100% duty, 3.2s, no static hold. |
| `concept-fulgurite-glass` | Little — "glass tube branches only pulse... brief ~4%-duty blip" | **Partially animated** | `.fg-surge`×2 (bright filled ellipses) translate ~48px along an offset-path, ~78% duty, 1.8s, staggered for near-continuous coverage. |
| `concept-tiddlywinks` | Little — "visible travel spans only ~35%... just under the 40% duty cap" | **Partially animated** | `.tw-flying-wink`×2 (the concept's main subject) arcs ~40px total displacement plus a full 360° rotation, ~58% duty per wink — larger amplitude and higher duty than the original rationale states. |
| `concept-ansible-relay` | Little — "no positional sweep... reads as a small flickering coin" | **Partially animated** | `.ar-qubit`×2 (filled, glowing, deliberately asymmetric disks) rotate a full continuous 360°, 100% duty, 2s linear, no static hold — genuine unambiguous rotation, not a flicker. |
| `concept-aqua-regia` | Little — "acid meniscus is an intensity-only glow pulse" | **Partially animated** | Gold ingot scales Δ8.4px (~100% duty); bubbles translateY 30px (~90% duty); fume puffs travel ~44px along an offset-path (~70% duty) — three independent geometric movers, not just the meniscus glow the rationale focused on. |
| `concept-spagyric-calcination` | Little — "stays small in absolute size (max ~14px)" | **Partially animated** | Central quintessence orb (main subject) scales Δ~9px diameter continuously at 100% duty; three droplets separately translate ~24px toward it at ~65% duty. |
| `concept-subduction-zone` | Little — "slab motion and magma plume are discounted dash-marches" | **Partially animated** | Crust blocks travel a genuine ~45px offset-path at ~78% duty; magma blob translates 14px; fluid bubbles translate 22px — all real translations distinct from the discounted dash elements the rationale names. |
| `concept-pillow-lava` | Little — "~4px radius change... low-contrast" | **Partially animated** | The main active lobe (largest on-screen shape) continuously scales ~11px diameter at 100% duty, 3s; a second breakout bud translates ~13.6px — larger and more continuous than the original 4px estimate. |
| `concept-onetime-pad` | Little — "burning embers are only 0.8-1.2px dots... key-group text intensity-only" | **Partially animated** | The torn key strip translates ~34px and rotates 14° (above the 10° discount threshold) for ~66% of its cycle; embers separately translate ~29px — a real staged translate+rotate the rationale omitted. |
| `concept-playfair-matrix` | Little — "no element ever translates" | **Partially animated (borderline)** | The four corner "swap" nodes translate a full 20px horizontally, clearly visible for ~43% of the loop — just over the duty threshold, and directly contradicting "no element ever translates." |
| `concept-kamal-navigator` | Little — "kamal card only floats 5px with a tiny 2.5deg tilt" | **Partially animated (borderline)** | The card (largest shape in the tile) translates ~9.2px diagonally, continuous/eased 100% duty, 2.75s — smallest amplitude of the 32 moved entries, just above the rubric's 6px "weigh toward Little" cutoff, but unbroken and on the tile's most prominent element. |
| `concept-traverse-board` | Little — "no element translates" | **Partially animated** | The single "watch peg" runner walks a 4-leg path (individual legs 9–14px), in motion ~58% of the loop — the rationale's "no element translates" is incorrect for current code. |
| `concept-davis-backstaff` | Little — "sighting vanes/arcs are entirely static despite being labeled 'sliding'" | **Partially animated** | `.db-shadow-vane` rotates 36° and `.db-sight-vane` rotates 22°, both ~100% duty at 2.8s, no static holds — the vanes do move; the rationale is stale. |
| `concept-telegraph-sounder` | Little — "neither individually clears the Partially bar clearly" | **Little animation (confirmed, unchanged)** | `.ts-lever-arm` rotates 16° (real, ~8.7px tip arc) but the keyframes hold static for ~68% of the 1.6s loop — visible motion only ~32% of the loop, under the ~40% duty threshold. The sound-ring is a stroke-only opacity/scale shockwave, correctly discounted. This is the one entry of the 33 where the original "Little" call still holds against current source. |
| `concept-phonautograph` | Little — "nothing here reaches the Partially amplitude" | **Partially animated** | `.pa-cylinder` translateX 10px total sweep continuously; `.pa-crank` completes a full continuous 360° rotation every 2s (~49px arc) — the crank alone clears the bar and was omitted from the original rationale. |
| `concept-bell-graphophone` | Little — "nothing clears the Partially threshold" | **Partially animated** | `.bg-carriage` (reproducer head + listening tubes group) translates 18px total sweep continuously at 3.6s, full duty — a sizeable group motion the rationale missed (it focused only on the smaller cylinder/sapphire-head/tube effects, which are indeed minor). |
| `concept-tuning-fork-chronograph` | Little — "sine-wave trace is... discounted" | **Partially animated** | `.tc-chrono-drum` (large timing-cylinder rect) translateY 12px total sweep continuously at 3.2s, full duty — a real translation of a large element that the rationale did not mention. |
| `concept-gunters-chain` | Little — "nothing here reaches the Partially amplitude" | **Partially animated** | `.gc-pin-runner` translates up to 44px (visible ~50% of the loop) and `.gc-tally-tag` swings 48° (~8.4px) continuously — matches the fix commit's own message ("chaining pin lifted, carried 44px... tally swing +/-24deg"), far larger than the rationale states. |
| `concept-nicol-prism` | Little — "zero positional deflection of prism facets or split ray paths occurs" (GT rating) | **Partially animated** | `.np-photon` (bright glowing dot) travels along an offset-path spanning ~64px — nearly the full tile width — at ~78% duty, 1.6s. The prism facets themselves are static as the GT rationale says, but the photon dot is a real, large, continuous translation the rationale doesn't account for. |
| `concept-assmann-psychrometer` | Little — "thin stroke and dash-marching airflow dominate; thermometer column is static" (GT rating) | **Partially animated** | `.ap-fan-spin` rotates a full continuous 360° every 1.2s; `.ap-air-puff` circles (bright filled dots) translateY 38px at ~73% duty — two independent geometric movers beyond the dash-marching airflow the rationale focused on. |

### Partially animated (289) and Fully animated (11) — unaffected, carried forward unchanged

Confirmed by the Step 1 cross-reference: **zero** entries in these two categories were touched
by any commit in the staleness window. Their classifications, evidence text, and counts from
the original gap report stand as written and are not reproduced here — see
`.audits/rubric-sweep-concepts-gap-2026-08-18.md` for the full 289-row and 11-row tables.

## Corrected category tally

| Category | Original count | Corrected count | Change |
|---|---:|---:|---:|
| No animation | 8 | **0** | −8 |
| Little animation | 25 | **1** | −24 |
| Partially animated | 289 | **321** | +32 |
| Fully animated | 11 | **11** | 0 |
| **Total** | **333** | **333** | 0 |

## Summary of movement

- **33 of 333** gap-set entries were touched by a fix commit after the wave2 classification
  snapshot and before the gap report was written — this is the complete set; no gap-set entry
  outside these 33 was touched by any commit in the window.
- **32 of those 33** move category, all in the same direction: 8 from No animation and 24 from
  Little animation, all landing in Partially animated. No entry moved into or out of Fully
  animated, and no entry moved *out* of Partially animated.
- **1 of the 33** (`concept-telegraph-sounder`) was independently re-verified against current
  source and confirmed to remain Little animation — its rotation is real but duty-gated below
  the ~40% threshold.
- **0** gap-set entries outside the No animation / Little animation categories were found to be
  affected by the staleness window.

---
*Method: Step 1 (git log over the precise `2026-08-16 20:26`–`2026-08-18` window,
cross-referenced against all 333 gap-set tags) run directly by this session. Step 2 (fresh
source-code classification of the 33 touched entries) delegated to four parallel read-only
agents, each given the full calibrated rubric text and a disjoint slice of the 33 files, with
explicit instructions to classify from current source without anchoring on prior rationale.
No browser automation or Playwright tooling used. No files modified outside this report.*
