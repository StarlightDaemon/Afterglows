# State Audit — 2026-08-16

Read-only diagnostic session. No manifest, concept file, or render code was touched or will be.
Purpose: verify repo state, confirm the actual completeness of `perception-calibration-2026-08-16.md`,
and search for any surviving Wave-2 (309-tile) classification data from the two interrupted sessions.

Note: a near-complete draft of this exact report already existed at this path (untracked) when this
session started — apparently written by a prior session that itself stalled before finishing. Every
factual claim in that draft was independently re-derived and verified in this session before being
folded in below; nothing here is taken from it on trust.

## Wave 0 — Repository state

- `git status`: clean except four untracked audit files (`concept-inventory-2026-08-14.md`,
  `low-motion-sweep-2026-08-16.md`, `perception-calibration-2026-08-16.md`, and this file). No
  staged changes, no modifications to tracked files.
- HEAD: `c7d538f` ("fix: repair 9 genuine animation defects from low-motion sweep (batch 7)").
  `origin/main` is also at `c7d538f` — local matches remote exactly, no drift, branch reports
  "up to date with origin/main."
- Neither interrupted session left any commit or tracked-file change behind.
- **Leftover processes:** none related to this work. All running `node.exe`/`python.exe`
  processes are Serena MCP infrastructure (TypeScript language server, typings installer,
  dashboard tray, MCP stdio servers), all started 19:42–19:44 tonight — normal session tooling,
  not artifacts of the calibration work. No headless Chrome process, no `http-server` process,
  and no listening ports tied to the concept galleries (checked all listening TCP ports; the
  only non-system entries are Serena's own python processes). The calibration report's own
  Wave-0 section claims it killed two headless Chrome instances (ports 9460/9461) and two
  `http-server` instances (ports 3100/3199) during its own startup — consistent with what's
  observed now: that cleanup already happened, nothing of that kind remains.

## Wave 1 — Actual completeness of the calibration report

`.audits/perception-calibration-2026-08-16.md` is **123 lines** and ends mid-structure, not
mid-sentence. The literal last line is a bare placeholder comment:

```
<!-- WAVE2_RESULTS -->
```

Nothing follows it — no partial heading, no partial row, no trailing prose. Everything before it
is fully written and internally coherent, in four complete sections:

- **Session salvage (Wave 0 triage)** — the recovery table from the first interrupted session's
  scratchpad, including the process-cleanup note above.
- **The 30-tile ground-truth comparison** — the complete 30-row table (operator rating vs. fresh
  f30 vs. blind code-judge prediction vs. code-derived animation description).
- **What predicts human perception (Wave 1)** — the Spearman correlation finding (f30 vs.
  operator rating: 0.045, ~zero), the over-prediction asymmetry (23 over / 0 under across 30
  blind-judge calls), the geometric-motion rubric summary, and explicit confidence caveats
  (directional finding: high confidence; exact px/duty-cycle thresholds: low-to-moderate,
  fit in-sample on n=30).
- **The fix-commit discrepancy (Wave 0.5)** — corrects the interrupted predecessor's claim that
  none of the 30 rated tiles had been fixed; 4 actually were (`assmann-psychrometer`,
  `laue-diffraction`, `nicol-prism`, `langley-bolometer`), and identifies the real gap: 5
  `low-amplitude-candidate` tiles flagged by the sweep but never touched by any fix commit —
  `concept-stratum-fault`, `concept-geode-banding`, `concept-fibonacci`,
  `concept-angstrom-spectrum`, `concept-piano`.

The "Wave 2" section (309-tile reclassification against the calibrated rubric) was never written
into the file at all — not a heading, not a single row. The placeholder marks exactly where it
would have gone.

## Wave 2 — Surviving Wave-2 classification data

Searched every session scratchpad directory under `%TEMP%\claude\E--Citadel-Afterglows\*\scratchpad\`
(sequentially — repo-relevant Aug 16 sessions checked individually, then a filename sweep across
the entire directory tree to rule out stray locations). Confirmed by exhaustive filename search:
**exactly four files anywhere match the Wave-2 classification schema** (a `"predicted"` field per
tile), across two session directories.

**Session `89d810ae-…`** (writes 18:41–18:51 — the session that actually attempted the Wave-2
redo described in the calibration report's salvage note):
- `classify_g01.json`, `classify_g02.json`, `classify_g03.json` — **60 tiles fully classified**
  (20 each), each row carrying `mechanism`, `sweep_px`, `speed`, `duty`, `main_subject_moves`,
  `predicted`, `why`, per the calibrated rubric.
- `group01.txt` … `group14.txt` — the full 14-group tile-assignment plan covering all 279
  not-yet-rated tiles (309 total − the 30 already rated for ground truth in Wave 1). This
  confirms the intended scope and matches the report's own description: 14 groups, run in
  "waves of 3 concurrent agents."
- Groups 4–13 (10 of 14 groups) have **no output file anywhere** — confirmed by the directory
  listing and the filename sweep above. Either they never ran, or they ran and the results died
  with the session before being written to disk (return-message-only, same failure mode the
  calibration report documents for the *first* interrupted session's 13-agent attempt).

**Session `69b73679-…`** (the first interrupted session's own scratchpad — otherwise fully
salvaged already, per the calibration report):
- `class_g12.json` — 15 rows, same classification schema, mtime **18:48** — i.e. written *during*
  the second session's active window (18:41–18:51), not the first session's original run (whose
  own files in this directory are all dated 15:31–16:07, before the usage-limit interruption).
- Verified directly against `group14.txt`: `group14.txt` has **19 entries**, and `class_g12.json`'s
  15 slugs are an exact match to entries 5–19 (`monotype-caster` through `mural-quadrant`). This
  is session two's group-14 output, written under a mismatched filename (`class_g12` vs. the
  `classify_g0N` pattern used by its own three completed groups) into the *other* session's
  directory rather than its own — consistent with a subagent that inherited or hardcoded the
  recovered-session's path while reading Wave-0 salvage material for reference, rather than a
  data problem.
- **Group 14 is partial**: its first 4 entries — `zeppelin-lattice-girder`, `sikorsky-grand-four`,
  `gutenberg-press`, `linotype-elevator` — have no classification output anywhere (confirmed by
  the same exhaustive filename sweep; none of the four `class*g*.json` files anywhere contain
  them).
- `batch_f30.json` in this same directory (mtime 18:49) was opened and checked directly: 309
  entries, each `{tag, label, category, f30}` — a plain f30 re-measurement of the same 309 tiles
  as `sweep309.json`, with no `predicted` field and no new classification content.

**Total recovered Wave-2 coverage: 75 of 279 remaining tiles (27%)** — groups 1–3 complete (60
tiles) + group 14 partial (15 of 19; missing its first 4 entries). Groups 4–13 have zero coverage
(10 of 14 groups, on the order of 130–150 tiles by the ~20-per-group pattern). This recovered data
is real, schema-consistent, and usable, but it was never consolidated, summarized, or written into
the calibration report before that session stalled — no aggregate stats or synthesis of the 75
classified tiles exists anywhere on disk. No attempt was made in this session to classify the
missing tiles or groups; that is explicitly out of scope here.

## Wave 3 — Done vs. open

**Fully done and verified — no open questions:**
- The 137-tile low-motion sweep and its categorization (`low-motion-sweep-2026-08-16.md`).
- The fix campaign: 68 files touched across 7 commits (`c9e0d02`…`c7d538f`), confirmed pushed to
  `origin/main`, confirmed clean working tree with HEAD exactly at `c7d538f`.
- The 30-tile operator/f30/blind-judge ground-truth comparison and its Wave-1 finding: f30
  (pixel-diff area) does not predict human perception (Spearman ≈ 0.045); geometric motion of a
  visible, bright-or-filled element on the main subject does, with a documented over-prediction
  bias in naive code-reading judges (23/30 misses, all over-predictions).
- The fix-commit discrepancy correction: 4 of the 30 rated tiles were in fact fixed, contradicting
  the interrupted predecessor's blanket claim; the real, narrower gap is the 5 named tiles below.

**Still genuinely open:**
- The 5 never-fixed `low-amplitude-candidate` tiles: `concept-stratum-fault`,
  `concept-geode-banding`, `concept-fibonacci`, `concept-angstrom-spectrum`, `concept-piano`.
- The full 309-tile Wave-2 reclassification: **75/279 recovered** (groups 1–3 complete, group 14
  missing its first 4 entries), **204/279 never classified** (groups 4–13 entirely, plus 4 tiles
  of group 14). Recovered data has not been synthesized or written up anywhere.
- The calibration rubric itself is explicitly flagged in its own report as fit in-sample on n=30,
  with untested out-of-sample validity — any Wave-2 classification (recovered or future)
  inherits that caveat and should be read as provisional, not confirmed.

**Discrepancies found (stated plainly, not adjudicated):**
- The calibration report's Wave-0 salvage table says the *first* interrupted session's 13-agent
  Wave-2 fan-out left "nothing survived… no batch group wrote any output file before the limit
  hit." That claim holds for the first session specifically — none of its own files (all dated
  15:31–16:07) match the Wave-2 schema. `class_g12.json`, found in that session's directory, does
  not contradict this claim: its 18:48 mtime and exact-match content against session two's
  `group14.txt` show it's a second-session file that landed in the wrong folder, not a survivor
  of the first session's original run.
- The second session's own output-file naming is inconsistent between the two locations it wrote
  to: `classify_g01/02/03.json` in its own scratchpad (correct convention, correct group numbers)
  vs. `class_g12.json` in the *other* session's scratchpad (different naming convention, and the
  number 12 doesn't correspond to any real group index — the content is actually group 14's).
  This points to a path/filename bug in whatever produced the per-group output, not a
  data-integrity problem with the classifications themselves — the 75 recovered rows are
  internally consistent and schema-valid regardless of where or what they were named.
