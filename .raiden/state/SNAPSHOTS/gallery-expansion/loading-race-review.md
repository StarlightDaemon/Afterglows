# Delayed module-loading review

2026-09-07, catalog 892. Local QA server on 127.0.0.1:3019 delays canonical component responses by 5,000 ms.

- A fresh page selected Fractal Tree v1 and copied its embed before upgrade. Observed mounted host had no shadow root and template contained version="v1"; Copy announced success. After import, exactly one upgraded v1 host remained.
- Another fresh page selected v1 before upgrade, filtered to Nixie, and returned to Fractal Tree selecting v2. Filtering removed the earlier host. After pending imports resolved, exactly one upgraded v2 host remained, the active frame was v2, no load-error elements existed, and warning/error logs were empty.
- Normal newest view remained capped at 36.

These were intermediate checks. The operator later ended expansion; final delivered-scope results and limitations follow below.

## Temporary module failure and recovery — 2026-09-07

A loopback QA server on port3016 returned503 once for Sampling Aliasing. The original loader displayed the expected failure message, but filtering away and returning repeated the browser-cached failure and left no host. This reproduced an actual failed-URL module-map issue.

The corrected loader keeps canonical queue keys and first-request URLs, then adds a page-specific retry query only after rejection. A fresh server process and fresh browser tab reproduced the initial503. Filtering to Amplitude Quantization and back to Sampling Aliasing then produced exactly one upgraded Sampling Aliasing host, zero error messages, and the unchanged canonical Source href. The only error log was the intentional first503. The queue regression simulates a browser cache retaining rejected promises and verifies concurrent attempts/revisits share one load, recovery uses a distinct URL, later visits reuse success, and stale requests never import. No automatic retry loop was added.

This intermediate recovery check ran at908 concepts; it is superseded by the delivered-scope checks below.

## Delivered-scope browser review — 2026-09-07 local date

- Landing view:36cards out of945,5nearby mounted hosts. Curated switch produced945cards;10mounted after initial imports,19after scrolling, and the first off-screen card had no host. One observed browse action took330ms including tool overhead; this is not a benchmark.
- Desktop content width1265px equaled scroll width. Mobile390×844viewport (375px content after scrollbar) had no horizontal overflow. Search for `swash` found one matching concept through motion metadata; mobile Copy announced success and Source retained its canonical module path.
- Added-section deep links showed Data Science16, Computing64, Human Health40, Mind&Society14. Codex/Astra/6 showed286:285additions plus the declared Nixie contribution. Nixie with Gemini/Astra/6 showedzero, confirming same-contribution matching. Fractal Tree switched v1→v2 with one host and successful Copy.
- Delayed server3019: a fresh Energy Systems view showed5aria-busy cards and0hosts while imports were pending. Copying the last tile scrolled the first card to−800px with no host; returning before completion ultimately produced one upgraded Pumped Hydroelectric Storage host and0errors. The tool's short wait timed out before the intentional5sresponse; subsequent DOM inspection confirmed recovery.
- Fail-once server3016: Sampling Aliasing displayed the intentional503error. Scrolling to the last card and back, without replacing the card, recovered one upgraded host and removed the error. Source stayedcanonical. Its sole consoleerror was the injected initialfailure. Other final gallery/review logs were clean.
- Actual OS preference switching could not be exercised: Windows Settings did not expose a targetable window, and no setting was changed. Every added tile passed its actual reduced-motion CSS declarations in the labelled style preview; the Nixie live preference-change/remount regression passed.
- The browser's visibility control left document.visibilityState as visible, so an actual hidden-document transition could not be verified with this interface. The source guard and cleanup were reviewed, and viewport departure/re-entry was exercised, but these do not substitute for that manual browser check. These two environment limitations are disclosed in the final report.
