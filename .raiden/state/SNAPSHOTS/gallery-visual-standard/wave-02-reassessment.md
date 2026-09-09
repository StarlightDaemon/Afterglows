# Wave 02 — operator feedback and agreed recalibration

Update: the operator subsequently expanded the trial to five (adding wind rose
and kamal), explicitly resumed it, and requested a sweep and report. This work
is complete; see `wave-02-rebuild/report.md`. The discussion below is retained
as the historical rationale, superseded where it describes an unstarted trial.

The operator returned 12 approvals and eight revision requests, then questioned
whether to hold or change how work scales. Exact decisions, ratings and comments
are preserved in `wave-02-operator-review.json` and applied to `wave-02.json`.
The operator approved the refinement plan and explicitly requested a hold on
2026-09-08, citing rapid consumption of the weekly token allotment. Resume only
on explicit operator instruction; no automatic continuation or scheduled work.
This is a voluntary resource-conservation hold, not a claim that a limit was reached.

## Assessment

Wave 01's authoring source constructs new scenes with coordinated motion and
explicit geometry. Wave 02 mostly adds CSS and targeted DOM changes to existing
scenes. Several fixes hold parts still to preserve alignment or change a static
pose without making the live study substantially better. The globe, wind rose,
kamal and octant illustrate this failure. The operator also could not understand
the chip log and semaphore. Those require clearer staging and explanation through
motion, beyond timing adjustments.

The internal groups were already five concepts each. Simply making operator
reviews more frequent would not address the change in implementation depth.
Technical verification remains useful, but passing it did not establish visual
quality. The assistant's assessment admitted too many marginal refinements.

## Agreed next step — deferred until explicit resume

- Preserve all 12 approvals and leave those sources alone.
- Rebuild three rejected studies first: globe (obvious visual improvement),
  chip log (a legible process), semaphore (a legible communication sequence).
  These are three different failure modes, not an arbitrary mini-batch.
- Give each a short visual brief before implementation: what the viewer should
  understand, what visibly changes over a loop, and why it improves the previous
  version. Judge at actual tile size and native playback speed.
- Require a clear live improvement in composition, purposeful motion and
  immediate readability. A bug fix, smaller glow or motion suppression alone
  does not justify calling a study visually refined. Preserve meaningful static
  poses and mechanical correctness as separate requirements.
- Use one focused calibration review for those three. If successful, apply the
  approach to the remaining five revision requests, then resume larger operator
  checkpoints when enough worthwhile changes are ready. Twenty is a ceiling or
  review convenience, never a target that reduces effort per concept.
- If chip log or semaphore cannot become readable at tile size, present removal
  or retirement as a concrete decision. Neither has been deleted or reverted.

No visual corrections, removals, new wave or commit were made in this feedback
pass. Standing local checkpoint authorization remains recorded, but automatic
implementation is held until explicit operator resumption. Push, release
and deployment remain separate decisions.
