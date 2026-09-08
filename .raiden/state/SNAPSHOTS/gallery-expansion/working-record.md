# Gallery expansion working record

## Baseline

The 2026-09-07 expansion started in `E:\Citadel\Afterglows` on `main` at
`e415700693c075f69eab772aca47680e17282307`. The checkout was clean, the origin
was `StarlightDaemon/Afterglows`, and the local `origin/main` ref matched HEAD.
`npm test` passed with 660 entries, 43 categories, and 9 sections.

The original target was 340 additions and 1,000 entries. The operator has ended
additions and requested close-out of completed work. The approved delivery
outcome is recorded in `delivery.json`; the final review is in
`closeout-report.md`. Historical wave notes below retain their original plans.
Work remains uncommitted and undeployed. `.raiden/writ/` and `_archive/` are excluded.

## Coverage and selection

The complete manifest metadata inventory was inspected before candidate
research. Historical instruments, classical physical science, clockwork,
birds/insects, decorative interfaces, and cultural objects are well represented.
Existing aliases and overlapping visual subjects include two will-o'-the-wisp
entries, multiple interferometers/gratings, several pendulums and optical-media
discs. These historical entries remain intact; the expansion avoids adding
further synonyms or cosmetic variations.

Thin existing territories include oceanography/hydrology, modern spaceflight,
and laboratory chemistry. Absent bodies of knowledge include statistical
inference, modern algorithms, distributed systems, machine learning, human
physiology, immunity, genetics, modern materials processing, robotics, control,
energy infrastructure, and social/cognitive models.

Three read-only research passes cover approximately 510 candidates. The primary
agent is the sole writer and makes final selection and visual-design decisions.

Each candidate must pass all of these gates:

1. A defined subject with a factual reference appropriate to its claims.
2. A mechanism that can be explained through visible causal changes at 140px.
3. Distinct identity and motion from existing entries and the other candidates.
4. Honest primary taxonomy placement and useful searchable metadata.
5. A feasible, self-contained implementation and informative reduced-motion pose.

Aliases, cosmetic variations, label-dependent gauges, generic particle scenes,
unreadable miniature dashboards, and poorly supported claims fail selection.
Canonical definitions and motion theses live only in the expansion manifests;
this record holds rationale, research decisions, and verification evidence.

## Architecture decisions

- Preserve legacy shards and taxonomy overrides. Expansion shards will express
  primary placement directly, without adding migration overrides.
- Derive contributor chips from provenance, just as model/version chips are
  derived. Record the contributor as `codex` and confirmed model identity only.
- Search includes definitions, motion theses, aliases, facets, and taxonomy
  titles. Entering a search from newest mode opens catalog-wide results.
- Native About disclosures expose the canonical definitions and motion theses
  to pointer, touch, and keyboard users.
- Render card shells containing inert templates. Import at most four modules
  concurrently for nearby cards; skip stale queued work and retry failed loads.
  Mount only the current version and disconnect hosts leaving the viewport.
  This invokes component cleanup and prevents cached modules from upgrading
  every off-screen card. Hidden pages disconnect their tile instances too.
- Keep the newest landing cap at 36. Copy reads the selected version even when
  its component is not mounted; source paths and category links remain stable.

## Verification log

2026-09-07, infrastructure stage:

- `npm test`: PASS at the unchanged 660-entry inventory, including new queue
  tests for concurrency, stale cancellation, caching, and failed-load retry.
- `node --check concepts/gallery/index.js`: PASS.
- `npm run build`: PASS, allowlisted artifact generated.
- Local browser at `http://127.0.0.1:3017/concepts/`: newest has 36 shells and
  10 mounted hosts; curated has 660 shells and 10 mounted hosts at the observed
  viewport. All mounted hosts have open Shadow DOM; warning/error log empty.
- Port 3000 was occupied, so preview uses 3017 without disturbing that service.

This is an in-progress record. Final inventory, full required checks, and
per-addition visual review have not yet been completed.

2026-09-07, statistical batches:

- `selection.json` records the researched pool: 340 provisional subjects and
  170 rejected proposals. Final selection is conditional on successful visual
  implementation. Proposed final taxonomy: 13 sections and 66 categories,
  preserving all baseline placements. Computing, Data Science, Human Health,
  and Mind & Society are the four planned additional sections.
- Implemented all 16 statistical selections: M001–M014 and M031–M032.
  Current manifest total is 676, with 44 categories and 9 sections.
- All four requested command checks pass at this stage; see the dated Work Log
  for exact results. New tests protect the historical metadata/source baseline,
  bounded import scheduling, and the Nixie timer's motion-preference lifecycle.
- Both batches reviewed at 25%, 50%, and 75% cycle points; stored contact sheets
  cover phases 25% and 75% for batch 1, phases 25%/50%/75% for batch 2, and both
  reduced-motion poses. Batch 2's static preview reports zero animations on
  all eight hosts. This applies actual media-rule declarations; it is not OS
  preference emulation. Browser-level preference switching remains part of
  final acceptance, alongside the real JS preference lifecycle unit test.
- The contact-sheet server is `node scripts/serve-gallery-qa.js`, serving only
  the allowlisted artifact plus local review tooling at port 3018. It adds no
  review pages to `dist/`. Normal preview is port 3017. Run the build before
  review after component changes. Review batches use manifest expansion order.
- Use `scripts/expansion/component-shell.mjs` only for mechanical lifecycle
  wrapping; every scene and animation must be designed independently. Run
  `python scripts/expansion/format-components.py` to make literal SVG/CSS source
  readable. The current shell refuses overwriting an existing module.
- Read-only researchers remain available for precise metadata/reference
  retrieval: `research_computing` owns M001–M110, `research_life` owns H001–H040,
  B001–B035, C001–C040, and `research_systems` owns S001–S115. Their corrected
  targeted sources supersede initial broad references.

Next: implement computing, health/life/chemistry, engineering/environment/space,
and perception/economics in manageable reviewed batches. There are 236 additions
remaining after 104 implemented and reviewed subjects. Do not treat current passing checks
as final completion; product counts and README/changelog reconciliation are
intentionally left until the catalog reaches the requested final inventory.

2026-09-07, optimization and statistical learning:

- Added five optimization and eleven statistical-learning subjects: 692 concepts,
  46 categories, 10 sections. Data Science & Optimization is now active.
- All required checks passed: test, build, site:check, security:check. The
  artifact contains 776 files; historical preservation and lifecycle checks pass.
- All 32 additions have registered and been visually reviewed at multiple cycle
  phases and static reduced-motion poses. Browser warnings/errors are empty.
  Source hashes and screenshot coverage are in visual-qa/review-ledger.json.
- Read-only mathematical review found and root fixed OLS residual sign-crossing
  interpolation and k-NN static query visibility. Both revised previews checked.
- Exact examples underpin optimization paths, annealing tour costs, least-squares
  fit, PCA covariance/eigenvector, Lloyd assignments/means, single-link distances,
  three-neighbor voting, and ROC conditional-rate increments.

2026-09-07, first algorithms batch:

- Eight additions activate Computing / Algorithms & Data Structures, bringing
  the manifest to 700 concepts / 47 categories / 11 sections. All four required
  checks pass (785 artifact files). No baseline preservation regressions.
- All eight algorithm fixtures passed read-only source review and browser review
  at 25%, 50%, 75%, plus reduced-motion static preview (zero animations).
  Corrected crossing paths in heap and partition swaps; removed animations on
  heap keys that never move. Browser warnings/errors remain empty.
- Visual-QA ledger now covers 40 additions. Continue the remaining 17 algorithm
  selections before the other computing categories.

2026-09-07, structures and search batch:

- Eight further algorithm subjects bring the manifest to 708 concepts,
  47 categories, 11 sections. All required command checks pass at 793
  artifact files. All 48 additions have source-bound visual-review evidence.
- Reviewed adapted radix, AVL, probing, trie, topological, residual-flow, A*,
  and maze fixtures. Corrected AVL edge endpoint identity during rotation
  and the inserted hash-key box width. No remaining read-only review issues.
- `node scripts/validate-visual-qa.js` checks review coverage, source hashes,
  and screenshot existence. It is an acceptance check after reviewed waves,
  not a requirement during authoring of an incomplete wave.
- Remaining algorithms: DFS, knapsack DP, edit distance, finite-state and
  pushdown automata, KMP, Bloom filter, quadtree, convex hull. Researcher
  research_computing is retrieving their precise fixtures and references.

2026-09-07, algorithms category complete:

- All 25 Algorithms & Data Structures selections are implemented. Catalog:
  717 concepts / 47 categories / 11 sections, including 57 additions.
- All requested checks pass: test, build, site:check, security:check (802
  artifact files, 10 HTML files, 4 sitemap URLs). Visual evidence validator
  passes for all 57 current source hashes and stored screenshots.
- Final nine reviewed at 25%, 50%, 75%, and static reduced-motion poses.
  Corrected KMP match timing, Bloom static bit specificity, table font sizes
  and traceback label layering. Removed misleading PDA alias stack automaton.
- Batch 8 currently contains only Convex Hull; later shards will fill its
  remaining seven positions. Ledger entries identify tags, not just batches.
- Next: information-coding9 (Huffman, RLE, LZW, arithmetic coding, Hamming,
  Reed-Solomon erasure recovery, Merkle, entropy, convolutional encoder).
  research_computing is retrieving exact fixtures and authoritative sources.

2026-09-07, information coding complete:

- All nine Information Theory & Coding selections are implemented. Catalog:
  726 concepts / 48 categories / 11 sections, including 66 additions.
- Test/build/site/security pass (812 artifact files, 10 HTML files, 4 sitemap
  URLs). Visual evidence validator covers all 66 source hashes. Browser
  warning/error log is empty. All new reduced-style poses have zero animations.
- Corrected LZW final phrase bracket/reuse arrow and synchronized Hamming
  bit repair with parity/syndrome recomputation. Read-only fixture review
  found no additional coding issues.
- QA harness now includes Cycle percent numeric input for precise inspection.
  Encoder reviewed at 55% (u1, memory10, outputs01) and 59% (memory11,
  transient output hidden, history includes01), confirming compute-before-shift.
- Batch8 is now full (Convex Hull plus first7 coding subjects); batch9 contains
  Entropy and Convolutional Encoder and has six positions for the next shard.
- Next: network-systems15, distributed-computing9, runtime-storage6, then
  health/life/chemistry, engineering/environment/space, perception/economics.

2026-09-07, computer networks complete:

- 15 Computer Networks concepts bring the catalog to 741 / 49 categories /
  11 sections; 81 additions implemented and visually reviewed, 259 remain.
- Required checks pass (828 artifact files, 10 HTML files, 4 sitemap URLs).
  All 81 source hashes have phase/static review evidence; browser logs clean.
- Verified exact protocol fixtures with read-only research review. Corrected
  Reno trace timing and duplicate-ACK text, DNS referral/answer distinction,
  NAPT paths under port labels, fragment static dimming, and STP crown spacing.
- Batch9 now full (entropy, encoder, first6 networks); batch10 full (ARP, LPM,
  NAPT, fragmentation, token bucket, WFQ, jitter, collision backoff); batch11
  begins with STP. All reviewed at 25/50/75 and static reduced style.
- Metadata-only distributed-computing.js has nine researched subjects, not yet
  integrated. Next implement those nine, then runtime/storage six.

2026-09-07, distributed systems complete; runtime/storage review in progress:

- Distributed Systems nine complete: checkpoint750 / 50 categories / 11 sections,
  with 90 reviewed source hashes. Required checks passed (839 artifact files).
- Runtime & Storage six implemented/integrated:756 / 51 categories / 11 sections.
  Test and build pass (845 artifact files); their visual/semantic review remains
  in progress. Do not mark the six as accepted until review evidence is recorded.
- Fixed quorum version-selector class collision, vector digit whitespace,
  log-copy occlusion, exact MQTT subscription label and packet-color interpolation.
- Batch11 full (STP plus first7 distributed), batch12 now full (stream backpressure,
  publish-subscribe, and runtime/storage6). Browser bindings/servers still active.
- research_life supplied H001–H008 exact physiology geometry/references for next
  health wave; research_computing is reviewing runtime/storage semantics.

2026-09-07, runtime/storage complete:

- All six reviewed and accepted. Catalog756 / 51 categories / 11 sections;
  all96 new sources have source-bound visual evidence, 244 additions remain.
- Required checks pass (845 artifact files, 10 HTML files, 4 sitemap URLs),
  browser logs clean, static reduced-style animation counts all zero.
- Corrected early WAL durability label and worker-bay occlusion; pipeline59%
  computed styles confirm loadWB/addEX/bubbleMEM/visible forwarding7.
- Next: Human Health section, Anatomy & Physiology first8 researched concepts.

2026-09-07, first anatomy/physiology wave complete:

- Human Health section and Anatomy & Physiology category active. Catalog764 /
  52 categories /12 sections;104 new subjects reviewed,236 additions remain.
- Test/build/site/security pass (854 artifact files,10 HTML,4 sitemap URLs);
  visual ledger verifies104 source hashes and all static styles stop animation.
- Cardiac volume changes now coincide with open flow paths, including atrial
  kick; venous compression waits for upper-valve opening and refill accompanies
  recoil. RBC/molecule blood endpoints use exact capillary cubics and tangent
  alignment. Bolus fits posterior passage; intestinal rim masks contents.
- Batch13 contains H001–H008. All inspected25/50/75 and static; cardiac/venous
  additionally32/65/85; cilia10/18 avoid aliasing its1.25s beat at quarter cycle.
- Next: H009–H016 (villus, glomerulus, countercurrent loop, micturition, sliding
  filaments, elbow antagonists, bone remodeling, fracture repair). Researcher
  retained exact source/geometry notes and is retrieving H017–H024.

2026-09-07, anatomy complete and sensory mechanisms begun:

- Catalog780 /53 categories /12 sections;120 implemented additions accepted,
  220 remain. Anatomy20 complete, Neuroscience & Senses4 active.
- Batch14 H009–H016 reviewed15/25/50/75/95 and static; batch15 H017–H024
  reviewed18/25/40/50/73/75 and static. All registrations/styles/logs pass.
- Required checks passed (871 artifact files,10 HTML,4 sitemap URLs).
- Root fixed villus route crossing by moving blood loop left of lacteal;
  bladder outline open at neck and ureters attached; relaxed myosin hidden;
  fracture soft growth/opacity now both run. Added villus absorption reference.
- Sensory/nutrient fixes: stable GLUT4 vesicle origin, matched lens Q zonules
  at ellipse boundary and retina x120, no false eye-to-eye neural wire, matched
  cochlear drive periods, normalized sweat route, opposite cupula response.
  Bile coated boundary develops four lobes before separately coated droplets.
- Next: H025–H032; researcher retrieving exact fixtures. Browser qa batch14
  (15th sheet), reduced checked. Existing browser bindings and servers persist.

2026-09-07, reflexes and first immune wave accepted:

- Catalog788 /54 categories /12 sections;128 additions accepted,212 remain.
  Neuroscience10 complete, Immunity & Medicine2 active.
- Required checks pass (880 artifact files,10 HTML,4 sitemap URLs). Ledger128.
  Batch16 H025–H032 reviewed18/25/29/50/65/75/90/static; zero reduced animations,
  clean browser logs. Fixed tendon trajectories, Pacinian center/axon tracking,
  platelet arrival-before-activation, phagocyte external reach-around pose.
- Next H033–H040 completes Human Health; researcher retrieving exact fixtures.
  Browser qa at batch15 (16th sheet) reduced checked; servers/bindings persist.

Final documentation scan also found docs/DEMOS_OVERVIEW.md:14 as a current-count fact needing reconciliation. Preserve CHANGELOG historical 660/43/9 entry; add new unreleased entry instead. Expansion128 standalone source total is1,161,575 bytes; largest bile41,317 and cochlea33,162. Full-scale import/mount acceptance still pending.

2026-09-07, Human Health complete and architecture review fixes:

- Catalog796 /54 categories /12 sections;136 additions accepted,204 remain.
  Anatomy20/neuroscience10/immunity10 all complete and reviewed.
- Test/build/site/security pass (889 artifact files,10 HTML,4 sitemap URLs);
  source-bound ledger136. Batch17 reviewed25/40/50/55/65/75/85/95/static.
- Fixed leukocyte neck at39/58/73/78/83 with sampled wall clearance1.64px
  including easing/opening (both strokes total1.5px). Base cell scaling origins,
  epithelial surface appearance after92%, blood fade before stent cycle reset.
- Added provenance.js matching all fields within one contribution, with new
  test-provenance.js. ModuleQueue counts unique imports and attaches cached or
  inflight waiters even at capacity; regressions added to test-module-queue.js.
- Normal browser tab currently Nixie search, curated, originsGemini+Codex,
  modelAstra/version6:1 result. Gemini-alone combination correctly0. Earlier
  HumanHealth deep link40, Codex/Astra/6 filters40, GLUT4search1/About passed;
  only10 near hosts mounted for40cards, one forsearch1. Logs clean.
- Pending final architecture acceptance: explicit total1000/additions340/selected
  identities assertion, UI filtering while pending, leave/reentry, hide/resume,
  version/copy before load, actual motion preference switching, mobile/fullscale.
- Next B001–B008 Molecular Genetics fixtures held by research_life and root.
  No metadata/modules for these yet. QA tab batch16 (17thsheet), reduced checked.

2026-09-07, first Molecular Genetics wave implemented, review pending:

- Catalog804 /55 categories /12 sections.144 new modules implemented,136
  accepted in ledger. Last8 B001–B008 are not yet accepted; browser/semantic
  review underway. Test/build pass (898 artifact files).
- Direct molecular-genetics shard integrated. Replication, transcription, RNA
  splicing, translation, lac induction, nucleosome packaging, PCR, gel.
- Nucleosome depicts1.50→1.65 turns and slight relaxation, with continuous
  tangent-matched linkers/duplex offsets, rear contours behind8-part core,
  ~316.214px total projected contour at sampled q/Y pairs. Metadata qualified
  partial wrapping (not de novo assembly). Researcher supplied exact geometry.
- RNAsplicing uses two-step donor-to-internal-branch reaction, loop+tail, then
  joining exons aty94 and moving releasedlariatup12px without crossingproduct.
- Current qa batch17 (18thsheet), reduced unchecked afterfreshgoto.
  research_life reviewingB0018 and retrievingB00916; otherscompleted.

2026-09-07, first Molecular Genetics wave accepted:

- Catalog804 /55 categories /12 sections.144 additions accepted;196 remain.
  Test/build/site/security pass (898 artifact files,10 HTML,4 sitemap URLs).
  Ledger144 matches source hashes. Batch18 reviewed25/38/45/50/62/65/75/90/static,
  zero reduced-style animations, clean logs.
- Lac polymerase and RNA share linear growth timing/end85 insideenzyme; CAP
  contact is explicit, repressor paths have matching commands. PCR daughter
  strokes remain hidden until25% extension. Replication right-end parental
  rungs remain after fork stops, and new-strand butt caps expose the repair gap.
- Nucleosome source review: all14 backbone segment joins have zero endpoint
  gaps; contour315.885–315.987px variation~0.03%; core8 and layering correct.
- Next B009–B016, researcher delivering fixtures. B00912 received. No metadata
  or modules for next wave yet. QA batch17 (18thsheet), reduced checked.

2026-09-07, Molecular Genetics completed and cell biology begun:

- Catalog812 /55 categories /12 sections;152 additions accepted,188 remain.
  All14 Molecular Genetics entries now reviewed; existing cellular category+2.
- Test/build/site/security pass (907 artifact files,10 HTML,4 sitemap URLs).
  Ledger152 current hashes. Batch19 reviewed25/50/65/75/90/98/static, all8
  register, all reduced-style animation counts0, clean browser logs.
- Fixed conjugation replacement/donor dash directions so strands partition
  one complete contour; cloning now has true staggered backbone termini,
  four nicks retained until ligation, pairing rungs after docking. Cas9 protein
  moved behind displaced DNA. Enlarged mitotic cell for nuclear containment;
  initial lysosome moved wholly inside the cell. Apoptosis uses a continuous
  connected outline until five closed bodies separate.
- Next B017–B024: four cellular mechanisms and four terrestrial plant systems.
  No next-wave metadata or modules yet. QA batch18 (19thsheet), reduced checked.
  Researcher supplies fixtures; root remains sole writer.

Autophagy final review: retain fused outer union through90% so inner membrane
fully degrades before the outer contour relaxes90–98. Rebuilt/reviewed and
updated current source hash; avoids pre-degradation membrane stroke overlap.

2026-09-07, cellular transport and initial plant systems accepted:

- Catalog820 /55 categories /12 sections;160 additions accepted,180 remain.
  Existing cellular category+6 complete; terrestrial category+4 active.
- Required checks pass (916 artifact files,10 HTML,4 sitemap URLs). Ledger160
  hashes current. Batch20 reviewed10/25/32/50/60/75/82/90/static; all8 register,
  reduced-style animation counts0, clean logs.
- Kinesin alternates one bound head with attached neck/cargo. ATP synthase
  stationary F1 body links three site cycles to rotor/cam/axle rotation. Pump
  ions use staged vertical mouth routes and enlarged alternating pockets.
  Plasmolysis organelles avoid vacuole and reset is concealed. Stomatal
  chloroplasts moved inside closed cells. Phototropic shaded wall grows
 103.83 vs lit93.16 (both70 initially); phloem sugarx88 clears sieve pore.
- Next B025–B032: four plant reproduction/symbiosis and four ecology/evolution.
  No metadata/modules yet. Researcher retrieving fixtures. QA batch19
  (20thsheet), reduced checked. Root remains sole writer.

2026-09-07, next wave authoring started (not accepted):

- Added strict final-only npm run gallery:acceptance command via
  scripts/validate-expansion-complete.js: requires1000 total,340 additions,
  allselected identities/placements,1000 unique canonical modules, fullledger.
  Do not run as an intermediate acceptance target; expected to fail untildone.
- Terrestrial shard now has8metadata entries (B02528 appended), but expected
  categorycount remains26 and only B027 pollen-tube-guidance module authored.
  Therefore npmtest currently will fail for incomplete next-wave integration.
  Lastvalidated build820/916artifactfiles; all160accepted ledgerhashescurrent.
- Remaining modules B025 root-nodule-nitrogen-fixation, B026 mycorrhizal-exchange,
  B028 angiosperm-double-fertilization. Fullfixtures delivered byresearch_life.
  B02932 ecology-evolution metadata/fixtures requested but not yet received.
- Pollen tube uses sampled persistent polyline + matching normalized arc-length
  tip, actual ovule micropylegap(-150..-120degrees), synergid signalbeforegrowth;
  ends beforefertilization. Not built/browserreviewed yet.
- QA remainsbatch19 (20thsheet) reducedchecked. Nextbatch20(21stsheet) willneed
  allB02532integrated before meaningful eight-tile review.

2026-09-07, symbiosis/reproduction/ecology wave implemented, review pending:

- Catalog828 /56categories /12sections;168 modules implemented but ledger160
  remainsaccepted. Test/build pass (925artifactfiles). Newecology-evolution
  shard4 integrated; terrestrialexpansion8 complete.
- AllB02532 nowauthored. Source-bound acceptance forlast8 stillpending final
  semanticreview. QA batch20 (21stsheet) reviewed25/38/50/65/75/84/87/90/static;
  all8register, reduced0, cleanlogs. Photos savedbatch-21-*.png.
- B025 carbon nowfollowsroot34,70→attachment57,70→bacteroid; NH3 exitsvia
  attachmentthenroot34,70 beforedescending. B026 casing+space clippedx>=82
  withhorizontalentry82,81→86,81; lastbranch116,80 clearsplantmembrane.
  B028 spermstarttandem35,90 /24,91.1 andsecondarrives43%; separatefade50–59.
- B029 natural-selection mothinitial4dark4pale, two pale removed at27/39
  afterbeakcontact, threeparentspairsproduce4dark2pale. B030 geneticdrift
  actualallelecopy pathsfromdistinctparents, gen6/6→7/5→10/2. B031 allopatry
  cohortreplacement/river/bridge/singlevdoubleflash/witin-lineageeggs. B032
  RK4sampled101points Lotka-Volterra period9.63493, rabbitsR/2 foxesF/4.
- research_life currentlyreviewingB02932; last8notledgeraccepted yet.
  QA remainsreducedchecked. NextB03335+C0015 researchnotrequested yet.

2026-09-07, symbiosis/reproduction/ecology wave accepted:

- Catalog828 /56categories /12sections;168 additions accepted,172 remain.
  Terrestrialexpansion8 complete; ecology-evolution4 active.
- Test/build/site/security pass (925artifactfiles,10HTML,4sitemapURLs). Ledger168
  hashes current. Batch21 reviewed25/32/38/50/56/65/75/84/87/90/static; all8
  register, allreduced0, cleanlogs.
- Allopatry nowhasvisible eggstages separatingadultcohorts29–34/47–52/64–69;
  firstdivergentflashesonlynewcohort. Pollenmicropyleminclearance5.767 vs4px
  combinedstrokes. Drift24copycolorsvalidated and6/6→7/5→10/2 counts.
  Predatorpreypeaks24%/40%, modelendpointsexactlymatchinroundedframes.
- NextB03335+C0015 requested; research_life retrievingmetadata/fixtures.
  No next-wavemetadata/modules yet. QA batch20(21stsheet), reducedchecked.

2026-09-07, ecology completed and molecular chemistry begun:

- Catalog836 /57categories /12sections;176 additions accepted,164 remain.
  Ecology-evolution7 complete; molecular-chemistry5 active. All35 life science
  additions complete.
- Test/build/site/security pass (934artifactfiles,10HTML,4sitemapURLs). Ledger176
  hashes current. Batch22 reviewed25/40/50/60/75/86/90/static; all8register,
  reducedstylecounts0, cleanlogs.
- Succession soil completes27% beforegrass; recolonization offspring60,104 and
 80,103 clear migrant65,88. Hydrogenation contacts visibleonlystationary35–65;
  conserved2C6H desorbsafterbothadditions. Inhibitor exits20,28 while substrate
  waits97,30. Micelle13intactmolecules with12→11→12 boundmonomerexchange.
  Extraction6persistenttokens→4upper2lower. Softening freshNa usesbrineroute
 18,60/74;Ca exitsvia70,45; dischargedrightNa112,55 clearsCa.
- NextC006–C013 requested fromresearch_life, fixturespending. No next-wave
  metadata/modules yet. QA batch21(22ndsheet), reducedchecked.

Mycorrhizal final phosphate position refined111,48→114,42 to finish entirely
in plantcytoplasm beyond cappedbranch105,48 (casingradius6,tokenradius2.4).
Rebuilt and reviewed25/65/90/static; dedicatedscreensandcurrenthashrecorded.
QA nowbatch20(21stsheet), reducedchecked; nextnewwaveisbatch22(23rdsheet).

2026-09-07, molecular chemistry completed; materials processing begun:

- Catalog844 /58 categories /12 sections;184 additions visually accepted,156 remain.
- C006–C013 integrated. All12 molecular chemistry entries complete; materials-processing1.
- Test/build/site/security passed at844 (943 artifact files,10HTML,4sitemapURLs).
- Batch23 reviewed25/50/52/65/75/77/90/static, all8 register, reduced animation counts0, cleanlogs. Ledger184 current hashes.
- Buffer proton bonds follow transferred H; polymer radical advances without atom loss; crosslinked strand endpoints remain exact; sol-gel conserves9Si/36O/36H with water corridorsx118; dislocation retains51atoms and8unique lower-neighbor bonds, then14px surface step.
- NextC014–C021 requested; not yet authored. QA batch22 reducedchecked.

2026-09-07, materials processing wave completed:

- Catalog852 /58 categories /12 sections;192 additions visually accepted,148 remain.
- C014–C021 integrated; materials-processing9 now. All8 register; final batch24 review25/50/60/80/static, with additional exploratory32/40/55/75/90 before laminate refinement. Reduced animation counts0, cleanlogs.
- Current-source ledger192. Test/build/site/security pass (951 artifact files,10HTML,4sitemapURLs).
- Precipitate line remains pinned outside particles. Circular grain area decreases linearly. Sintering polygon area spread0.00165%, two grain textures retained. Martensitic36sites/bonds remain compatible. Wire neutral-axis length79.9956–80.0005px, heat recovery after unloaded hold. Tempering residual stresses appear after core cooling. Laminate fixed gap1.5 removes all fragment overlaps; all45pairs×101frames clear, exact ribbon attachments. Pit sixionroutes remain inliquid; r2.5glyph32pointcircumferences checked every0.25%.
- Materials deep link, About and Copy success verified at844. Authoring docs updated for directshards, accessible metadata and lifecycle.
- Local QAserver now supports AFTERGLOWS_QA_PORT and AFTERGLOWS_QA_MODULE_DELAY_MS (0–5000) for final pending-import UI tests; syntax checked, delayed mode not yet run. Existing3018server stillprechangeprocess.
- C022–C029 requested; not authored yet. QA batch23 reducedchecked. research_computing retains allM097110 fixtures; research_systems allS00116 fixtures; theirread-onlypreparation complete.

Next wave C022–C029: research_life deliveredall8fixtures andretainsdetails. Aluminum anodizing and electroplating authored/metadataappended, nottaxonomyintegrated; materials expectedCount9 still, manifestnow11. NextauthorC024ALD/C025photolithography/C026injection/C027extrusion/C028blow/C029rolling. Currentdist852 andacceptedledger192. Testwillfailuntilpendingwavecountsupdated.

2026-09-07, surface processing and polymer forming wave completed:

- Catalog: 860 concepts, 58 categories, 12 sections. All 200 additions visually
  accepted; 140 remain. Materials & Processing now contains 17 entries.
- C022–C029 integrated and reviewed in batch 25 at 20/30/40/50/60/70/80/90%
  and reduced-motion style preview. All eight register, all static animation
  counts are zero, and browser logs are clean. Ledger binds 200 current hashes.
- Test/build/site/security pass: 959 artifact files, 10 HTML, 4 sitemap URLs.
- Anodizing ion resets use invisible travel turnaround; ions remain inside oxide.
  ALD second A exposure starts after the B purge. Plating lost/deposited areas
  match; positive-resist apertures remain identical through all process stages.
- Injection shot area 600 equals reservoir loss, valve closes before ejection,
  and the released part clears the open tool. Extrusion uses a fixed screw axis
  and continuous die/profile contact. Blow molding seals before inflation,
  retains flash, and vents before opening. Rolling preserves Q=308 with entry
  and exit speeds 14 and 25.667 and exact roll-contact arcs.
- Next C030–C037 fixtures are ready in research_life context, not authored yet.
  C030 stays materials; C031–C039 are industrial chemistry; C040 returns to
  materials. Final chemistry totals remain molecular 12, materials 19,
  industrial 9. C038–C040 fixtures are being prepared.
- QA is batch 24 (25th sheet), reduced checked. Other researchers retain all
  remaining M097–M110 and first S001–S016 detailed fixtures. No new source
  files beyond C029. No commit, push, release, or deployment.

Current next wave in progress after accepted 860/200:
- C030 Continuous Casting, C031 Catalytic Cracking, C032 Haber-Bosch Synthesis,
  C033 Chlor-Alkali Membrane Cell integrated: last test/build 864 / 59 categories /
  12 sections (964 public artifact files). Preliminary browser four-register
  phases25/45/65/85 looked clear, no formal ledger entries yet.
- C030–33 semantic reviews pass; C031 donor H tether fades45–48, recipient57–60,
  so no false C5 attachment. C032 adsorption stems follow moving N endpoints.
- C034 Basic Oxygen Steelmaking and C035 Froth Flotation now authored and
  appended industrial-chemistry.js, not counted in taxonomy yet (still3 versus5).
  C036 Spray Drying and C037 Freeze Drying next; fixtures retained by research_life.
- C038–C040 fixtures also ready; then remaining M097–M110, then S001–S115.
- QA harness now sorts additions by actual added timestamp, stable for equal
  timestamps. Current order unchanged; this prevents later C040 material entry
  from shifting industrial review batches. Future ledger slice operations must
  use the same chronological sort. Current QA batch25 (26th sheet), normal motion
  paused at85%; C030–33 preliminary screenshots named industrial-initial-four-*.png.

C030–C037 accepted: 868 concepts / 59 categories / 12 sections; 208 source hashes in the visual ledger. Test, build, site, and security pass (968 artifact files). Batch 26 reviewed at 20/35/50/65/80/90 percent plus static reduced-motion styles. Spray drying corrected to keep powder in the outlet until below its walls and finish the fifth collection at 95 percent; dedicated final screenshots bind its updated hash. Next C038–C040 then M097–M110 and S001–S115. No commit or deployment.

Accepted through C040 and M101: 876 / 60 categories / 13 sections, 216 additions reviewed. Chemistry all 40 complete. Test/build/site/security/visual ledger pass, 977 artifact files. Batch 27 phases 15/30/50/70/90 plus reduced. Final fixes: C038 bottom-row cy capped110.1; C039 duct boundaries104/116; C040 pool ry4 clipped to final track footprint; M099 screen travel75 clears round cap. QA batch26 reduced checked. Next M102–M109 then M110 plus S001–S007. Remaining 124 subjects.

M102–M109 accepted: batch 28 phases7/20/45/65/82/94 and static, all8 registered, zero static animations, clean logs. Ledger224 reviewed additions. Catalog885 includes M110 plosive speech release authored but review pending; test/buildpass986 artifacts. M103 uses44px bars to keep caps hidden at r14 and clear at r31. M104 corrected shoulders58/82, forearms14 with forward angle a+.8, radii2: 4,800-phase minimum clearance .1768px; pose bone lengths verified. M108 inset corrected; M109 uses transform for text movement. Next M110 plus S001–S007 batch29. Remaining115 subjects allsystems.

M110 accepted separately before systems: phases15/40/51/57/65 and reduced, one registration, clean logs. Ledger225 current sources; all computing/math110, health40, life35, chemistry40 complete. Only S001–S115 remain. QA currentbatch28 reduced checked; batch29 will include already reviewed M110 plus S001–S007. Do not duplicate its ledger entry.

S001–S007 accepted: 892 concepts /61 categories /13 sections, ledger232current. Allrequiredchecks pass994artifactfiles. Batch29phases2/10/25/45/65/85+static. M110alreadyhasdedicatedledgerentry, notduplicated. S004unitlessheightbugfixedpx; computedstatic17.971px and.0983px matchmodel; allotheradditionsclean. ValidatorguardsnonzeroCSSdimensions. S001arrowheadsignfixed; MPCreducedmidhorizon; IKrigidlinks; differentialtravelcoupled. NextS008–S015, fixturesrequestedresearch_systems. QAcurrentbatch28reducedchecked. 108subjectsremainingallS008–S115.

S008–S015 accepted: 900 /61 categories /13 sections; ledger240current hashes. Allchecks pass1,002artifactfiles. Batch30phases10/30/55/75/90/static. S008ellipseunwrap−90; S009drift<.002px; S010padwithdrawalclear; S011closureattached; S012radiusmapping; S013localminimum; S014normal-force renamed from reservednormal; S015unnecessarycyclefaderemoved. Earliermaxflowreservedreverse renamedreverse-edge, re-reviewed25/56/75/static, hashupdatedandmetadataupdatedtimestamp. Validatorguardsreservedkeyframenamesandunitlessdimensions.
Delayed importbrowserQA on3019passed freshpageversion/copybeforeupgrade andfilteraway/returnv2, onefinalhost/noerrors; evidence loading-race-review.md. Servers3017(session76588),3018(session83709),3019(delay5000,session72412)running. Browserbindingsrace/race2/race3 nowexist inadditionqa/tab. race3FractalTreev2upgraded, race2v1upgraded. QAcurrentbatch29reducedchecked. NextS016–S023, fixturesrequestedresearch_systems. Exactly100subjectsremainS016–S115; finalcategoryadditionsinstrumentation,energy,civil,climate,economicsbring61→66.

S016–S023 accepted: 908 concepts / 62 categories / 13 sections; 248 current source hashes in the ledger. Test/build/site/security/visual evidence pass, 1,011 artifact files. Control completes18, instrumentation starts5. Batch31 final phases25/28/53/65/75/98 plus reduced styles; earlier6/18/35/50/85 shots also inspected. Numeric read-only review passes. Corrected S017 leaf endpoint to(83,100), S020 threshold bracket state at25/75%, S021 rejection before clearing and final static check, and all four reveal-cycle resets. Clipboard fallback cleanup/focus fix now built and regression-tested. QA batch30 reduced checked. Next S024–S031, detailed fixtures pending research_systems. Exactly92 subjects remain S024–S115. No commit or deployment.

Post908 loader correction: real fail-once503 server3016 reproduced cached dynamic-import failures on revisit. Added module-loader.js retry query after rejection only, canonical queue keys/Source URLs unchanged; test-module-retry.js passes shared concurrent recovery/cache/stale cases. Fresh browser retryFixed confirmed initialerror then one upgradedhost/zeroerrors on return, onlyexpectedinitialconsoleerror. Test/buildpass1,012artifacts. Server3016current session15571, browserretryQA(oldbroken) and retryFixed(corrected) exist. Pending full-scale viewport/hidden-page/actualpreference/mobile andfinaldocs.

S024–S031 accepted: 916 concepts /62 categories /13 sections; ledger256 current hashes. Test/build/site/security pass1,020 artifacts; batch32 phases10/25/43/50/58/75/86+static reviewed, all8 registered, cleanlogs. Numerical reviews pass. S026 zerohead collapsed andcallout60,67; S027 rod20–46 attached; S028 exact8breakpoint superposition; S029 risingtrigger aligned; S030 continuousreconnection; S031 fixedperiod/duty correct. QAcurrentbatch31 motionpaused50, staticshotalreadyrecorded. Next S032–S039 last4instrumentation+first4energy; fixturespendingresearch_systems. Exactly84 remain S032–S115. No commit or deployment.

S032–S039 accepted: 924 concepts /63 categories /13 sections, ledger264 current hashes. Allrequiredchecks pass1,029artifactfiles. Instrumentation completes17; Energy Systems starts4. Batch33 final30/38/55/68/90+static recorded, all8 register, cleanlogs. Other15/80 and firstfourpreliminaryshots alsoinspected. PEM finaltransport50px/s, electronbuses44/88 withbranchleads, capturetimes5.5529/6.1757/6.9529/7.5757; matchingprotonsneutralizeonarrival; bonds7.62–7.9, productsexit7.9–10.5; commonwirecorners explicit. Dense rootcheck minimum e/e11.07px and nonmatching e/H6.715px; read-onlyreviewfirstversionfoundovertaking, finalagentrecheckpending. QAcurrentbatch32reducedchecked90. Next S040–S047, fixtures S040–S045 delivered, S046–S047 pendingresearch_systems. CorrectwindtutorialURL https://docs.nlr.gov/docs/fy12osti/54605.pdf . Exactly76 subjectsremain S040–S115; no commit or deployment.

S040–S047 accepted: 932 concepts /63 categories /13 sections; ledger272 current source hashes. Test/build/site/security pass1,037artifactfiles; batch34 phases10/25/46/60/75/90 plus static reviewed, all8 register, cleanlogs. Numerical reviews pass including induction-motor current/torque signs, synchronization closure, frequency response and braking energy. Braking opacity slightly saturates at its maximum as a visual flow cue; distance, rolling angle and stored-energy relation remain exact. Final prior PEM audit also PASS. QAcurrentbatch33reducedchecked90. S048 Reversible Heat Pump now authored but unformatted/unverified; energy count13, expected total933. Next S049–S055 fixtures pending research_systems. Exactly67 subjects remain S049–S115; final-scale browser and productdocs pending. No commit or deployment.

S048–S055 accepted:940 concepts /63 categories /13 sections; ledger280current hashes. Allrequiredchecks pass1,046artifactfiles. Energy Systems completes17; oceanography grows7. Batch35 final15/30/45/60/75/90+static reviewed, all8 register, cleanlogs; preliminary10/25/40/55/70/88 inspected. Numerical reviews pass; corrected S050 lamp returnwire, S051 hidden brine exchangerports, S052 static .35/.65 opacities, S054 tracer radius2.75 avoids minimum6.547px spacing overlap. CorrectedsourcefinalQA complete; agentconfirmationpending. QAcurrentbatch34reducedchecked90. NextS056–S063, S056 fixture received; S057–63 pendingresearch_systems. Exactly60 remain S056–S115. Finaldocs/full1000browser pending. No commit or deployment.

## Operator close-out — 2026-09-07

Stopped additions after S060:945 concepts,285 additions,63 categories,13 sections.
S061–S115 are research-only deferred selections, not unfinished implementation.
Final five tiles reviewed at5/10/25/45/60/75/90percent and reduced-motion styles;
all285 current sources now have reviewed hashes. S057 plume control point raised
3px and final grain clearances verified. Source, inventory, metadata, and runtime
reviews found no remaining actionable defect. Product documentation and scope
acceptance now match delivery.json. See closeout-report.md for exact checks,
browser evidence and the two environment-limited manual checks. LOOP-001 closed.
