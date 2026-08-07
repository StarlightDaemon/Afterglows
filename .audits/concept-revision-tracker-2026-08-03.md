# Concept Revision Tracker (2026-08-03)

Master list from the dictated revision pass. Kept up to date as items are
picked off one at a time. See CHANGELOG.md for the release-facing summary
once a batch ships.

## Iteration rule (added 2026-08-03)

Every refinement in this pass is major, so each one must get a new manifest
iteration: old version preserved on the tile's cycler, badge bumped (e.g.
"New v1" → "Refined v2"). The first/second-pass items below were refined
in place without this — retrofitting one at a time.

**Retrofit complete (2026-08-03):** all 34 refined-in-place concepts now
carry versioned tiles. 32 went "New v1" → "Refined v2" with the original
preserved as v1 (Jump Shot, Bowling Strike, Bunsen Burner, Cash Register,
Caterpillar, Cell Cluster, Coin Flip, Desk Fan, Dice Roll, Venus Flytrap,
Fractal Tree, Hummingbird, Jack-in-the-Box, Joystick, Ladybug, Praying
Mantis, Molecule Chain, Piggy Bank, Planet Rings, Scissors, Pencil
Sharpener, Slinky, Soccer Goal, Spider, Stapler, Swan, Tape Reels,
Typewriter, Wand Cast, Weather Vane, Windsock, Wind-up Robot, Woodpecker);
Pacman and Circuit were already versioned and got the refinement appended
as "Refined v3" with their old v2 restored. Verified in the live gallery:
all versions render, defaults resolve to the newest, badges/cyclers
correct, console clean. Knee Joint, Virus, Microbial Field and Star Chart
are genuinely new (or already versioned by the 08-01 split) and needed no
retrofit; the four removed concepts left no dangling manifest entries.

## Done & verified (34 concepts)

**First pass:** Knee Joint*, Spider, Caterpillar, Praying Mantis,
Jack-in-the-Box, Slinky, Wind-up Robot, Cash Register, Coin Flip, Piggy
Bank, Scissors, Hummingbird, Woodpecker, Swan, Jump Shot*, Bowling Strike,
Bunsen Burner, Soccer Goal*, Typewriter, Pencil Sharpener, Stapler, Desk
Fan, Ladybug, Venus Flytrap, Weather Vane, Windsock

\* Knee Joint, Jump Shot, and Soccer Goal were later removed in the
2026-08-03 library-trim pass below — kept here as a historical record of
what this pass covered, not as current gallery state.

**Second pass:** Tape Reels, Joystick, Pacman, Planet Rings, Cell Cluster,
Molecule Chain, Circuit, Wand Cast, Fractal Tree, Dice Roll

**Third pass:** Music Box — New v1 → Refined v2, original preserved as v1.
The mechanism-view identity (pinned cylinder + comb + winding key, not the
cliché spinning ballerina) was sound, but the layout had two real bugs: the
winding key collided with the rightmost comb teeth (same x/y range), and the
open lid's `skewX` from a bottom-left origin pushed it past the tile's right
edge. v2 fixes both — key moved to its own circular mount in the case's clear
end-cap, lid re-skewed from a centered origin so both top corners stay
inside the 112x92 tile — and reworks the comb into a graduated bank mounted
above the cylinder (bass-to-treble taper) instead of a cramped stack beside
it. Verified in the live gallery: cycler shows both versions, badges
correct, no console errors, nothing collides or bleeds past the tile edge
at either 1x or 4x scale.


**Fourth pass (automated, 2026-08-03):** the 8 backlog concepts below,
each "New v1" → "Refined v2" with the original preserved on the cycler.
Verified in the live gallery (frozen-frame geometry measurements + CDP
screenshots at the key moments; console clean, badges/cyclers correct,
defaults resolve to v2):

- **Anglerfish** — illicium's posterior end floated ~20px above the body
  outline (now a dome arc rooted on the head, coming down at the lure);
  lower-jaw teeth pointed down, now up; eye straddled the outline, moved
  inside; prey motes outlived the snap, now all eaten by it.
- **Hot Air Balloon** — burner flame floated at the skirt and scaled from
  its middle; now anchored to a new burner frame between the suspension
  lines, flaring up into the envelope mouth (skirt catches the blast
  light). Sandbag no longer overlaps the basket border — hangs off the
  outer rim on a cord. Drift re-centered so the basket stops riding the
  tile's clipped bottom edge.
- **Ferris Wheel** — the marquee-bulb ring was entirely invisible: its
  mask's radial gradient defaulted to farthest-corner (~56px), putting
  the whole visible ring outside the element's clipped 40px circle.
  closest-side sizing restores it. Hub and leg apex sat 2px below the
  wheel's true center; gondola pivots lifted 1px to clear the ground.
- **Traffic Light** — stop phase ended at 92%, leaving 0.64s of
  all-three-dark before green; now holds to the wrap. The car finally
  queues as promised: rolls up during red, waits at the line, pulls away
  on green (offscreen teleports hidden by stepped segments — seamless
  loop). Housing and hoods re-centered on the pole.
- **Wind Chimes** — tubes swayed +/-7deg on five unrelated periods,
  letting 10px-apart neighbors visibly cross; now one 5.2s breeze as a
  +/-4deg traveling wave. Striker swing widened so the disc actually
  touches tube 2 at the 32% extreme and tube 4 at the 82% one (both ring
  flares already sat at 34%/84%).
- **Soldering Iron** — working the rod's -38deg rotation through, the tip
  landed ~14px right of the pad and never touched the joint; the iron
  assembly shifts so the tip meets the bead during the molten phase. Pad
  2 now carries a static cooled bead ("one done, one in progress").
- **Wrench & Bolt** — the nut was "ratcheted home" but stopped 24px short
  of the flange (shaft shortened, flange raised onto a new hatched
  workpiece plate; the nut seats with a glow pulse); descend steps lagged
  the power strokes by 6% of the cycle (synced to stroke ends, 3 strokes
  / 3 steps); the loop-reset teleport is now a fade on the seated nut
  while the wrench visibly lifts back to the top of a fresh bolt.
- **Claw Machine** — the claw's centerline hung 5px right of the prize
  and fingertips stopped 1px above it (left finger landed inside the
  prize outline); grab now centered, drop deepened, fingers set wide
  enough to wrap it. The slip tumbles the prize back onto its starting
  spot through a full -360 backspin — seamless loop instead of the prize
  teleporting 30px at the wrap.

**Fifth pass (2026-08-03): Anglerfish → Refined v3.** Picked from the
fourth-pass batch for a full rebuild on top of the v2 bug fixes (which
stay on the cycler). v3 re-stages the concept as a three-act ambush:
the lure now casts an actual light field (a blooming radial behind the
fish, so the body reads as a silhouette rim-lit by its own lure; idle
halo in the dark phase, full bloom for the reveal, flash at the snap);
the mouth gains an upper jaw so the snap closes teeth-on-teeth instead
of one bar waving in space; the strike is physical — the entire fish
(lure, stalk, jaws, fins) lunges 8px forward on a violent cubic-bezier
as the jaws slam, eating the prey motes at the point of contact; and
the fish gets anatomy that survives the bloom: dorsal spines fitted to
the crown of the back's curved outline (x60–88, where the edge runs
y26–28 — wider and they float), a flicking pectoral fin, and four
flank photophores that keep glimmering through the dark phase.
Verified frozen-frame: jaws close on the prey mote at the 53% strike
(prey opacity 0 at contact), dark-phase body opacity 0.1, light field
clipped by the terminal-box (no bleed onto neighboring cards), badges/
cycler correct (v1/v2/v3, default v3), console clean.

**Sixth pass (2026-08-03): Wind Chimes → Refined v3.** Second full
rebuild picked from the fourth-pass batch (v1/v2 stay on the cycler).
v2 fixed the physics but left the concept a uniform, weatherless loop;
v3 makes the wind the protagonist on a 7s cycle: calm micro-sway
(±1.5deg, desynced per tube), then a visible gust front — four
staggered streaks sweeping left-to-right — that heels the whole rig
-5deg on its hanger pivot (new .wc-rig pendulum wrapper), kicks each
tube -12deg in a left-to-right cascade (one shared keyframe set,
0.15s/tube stagger; every tube now rings as the front reaches it, with
a second flicker on the -8.5deg buffet), and whips the striker -17deg
clattering through the rack; then an underdamped settle (-4.5 → -2 →
-1deg) back to calm. Verified frozen-frame at 36.5%: u1 recoiling
(-5.6deg), u2 at kick peak (-11.9deg), u3 rising, u4/u5 still calm,
rings lit on u1/u2/u3 only — the traveling wave reads exactly; calm
phase ±1.3deg with zero rings; longest tube's swept extreme stays
inside the tile (x76.4/y81.8 of 104x100); cycler v1/v2/v3 with correct
badges, default v3, console clean.

**Cycler fix (2026-08-03), prompted by operator report** that Anglerfish
and Wind Chimes "show only the latest version for all versions." Root
cause was not the tiles: light-DOM frames, badges, shadow content and
opacity switching were all correct (verified per-dot in compositing
headless Chrome). The real defect was that hidden frames keep animating,
so tabbing to an older version lands at an arbitrary mid-cycle phase —
and these two concepts spend most of their cycle in idle/dark states
where all versions look identical (the v3 rebuilds made this worse by
design: staged narratives = long quiet stretches). Fix in
concepts/gallery/index.js: the cycler rewinds the incoming frame's
shadow-root animations to currentTime 0 on every switch (walking INTO
the shadow root — subtree getAnimations doesn't cross the boundary), so
each version replays its full cycle from the start. Verified: restartT0
= 0 on every switch; fixed-delay screenshots after each dot click land
on each version's signature moment (v1 flare / v2 flare / v3 bloom;
chimes v3 mid-gust) instead of near-black idle. Two probe artifacts
noted for future sessions: the non-compositing Browser pane freezes
CSS transitions at their start values (class toggles apply, crossfades
never advance — looks exactly like this bug but isn't), and the CDP
harness's frame-activation shots need to outwait the 120ms crossfade
or the outgoing frame contaminates the capture.

**Seventh pass (2026-08-03): Traffic Light → Refined v3** (picked at
random from the six remaining fourth-pass v2s, per operator request;
v1/v2 stay on the cycler). v2 gave the signal correct logic and one
queuing car; v3 makes it govern actual flow on the same 8s cycle: an
explicit road band with stop line and zebra crossing; a three-car queue
that drains as a staggered chain on green (launch offsets 4/8/12%, each
car moving only after the one ahead clears — verified no-overlap
throughout), holds an empty road through amber, rebuilds nose-to-tail
through the red (arrivals 58/68/78%, decelerating ease-out to queue
positions 36/21/6), and a pedestrian who crosses at the zebra during
62–88% of the red, gone before the green wraps. Lamps/housing/spill
carried from v2 (luminance semantics preserved). Two catches fixed
during verification: cars "parked offscreen" at translateX(130) left a
glowing sliver visible at the terminal box's edge (the box shows ~17px
of overflow past the 104px tile per side; exits now park at 140), and
the pedestrian lacked contrast against the zebra dashes (head glow
added, zebra dimmed). Verified frozen-frame: chain stagger at 12%
(noses 65.6/31.2/6), red at 75% (leader parked, second arriving, ped
mid-zebra at y86–95, stop lamp lit), seamless wrap (99.9% state ==
0%), and per-dot cycling in compositing Chrome (restartT0=0, correct
badge/frame per dot, v1/v2/v3 visually distinct at the same post-click
moment). Console clean.

**Eighth pass (2026-08-03): Traffic Light → Refined v4, per explicit
operator direction** ("remove the road portion and the vehicles - just
the traffic light - and in color: red, yellow, green, standard US").
v1-v3 stay on the cycler. v4 is the signal alone, and the gallery's
first deliberate color break: lamps run true US colors (red #ff4136,
yellow #ffb700, green #2ecc40) on the same 8s cycle and proportions,
each with a colored halo flare behind the housing and a color-matched
ground spill; unlit lenses stay faintly tinted the way real dark
lenses hold their color. The housing/hoods/pole keep the gallery's
green chrome so the tile belongs while the light pops. Verified
frozen-frame: exactly one lamp lit per phase with its own halo
(green at 20%, yellow at 48%, red at 75%), red still lit at 99.9%
(no dead gap at the wrap), no stray road/car/pedestrian elements in
the v4 shadow root; 4-dot cycling in compositing Chrome shows four
distinct renders with correct badges and restartT0=0. Console clean.

**Ninth pass (2026-08-03): Traffic Light retcon + Refined v5, per
explicit operator direction.** Two parts. (1) *Predictive refinement of
the previous generations*: the road, vehicles and pedestrian were
removed from v1–v3 in place so the whole lineage reads as if there was
never a road — v1/v2 lose their car glyph, v3 loses the road band, stop
line, zebra, three-car queue and pedestrian (its pole now planted at
the tile base), and all version comments were rewritten to match the
fiction. This deliberately breaks the preserve-the-original convention
on operator instruction; the road-era versions remain recoverable in
git at 4d985bf (v4 commit — all roadful versions present). CHANGELOG
[Unreleased] entries were rewritten to the same narrative (unreleased,
so fair game). (2) *Refined v5*: v4's colored signal on a slower,
re-proportioned 12s cycle — green longest (50% = 6s), red the middle
share (37.5% = 4.5s), yellow a brief intermediate (12.5% = 1.5s), red
handing straight to green at the wrap. Verified: no road/car/ped
element in any of the five shadow roots, v3 pole bottom at y100, v5
duration 12s with green/yellow/red lit at 25%/55%/80% and red still
lit at 99.9%; 5-dot cycling in compositing Chrome shows five one-hot
frames, correct badges, restartT0=0. Console clean.

## Removed (per explicit request)

Topographic Map, Tape Dispenser, Depth Gauge, Power Drill

Weave Grid (2026-08-03) — a loom rebuild was attempted first, but the
fabric identity clashed with the geometry category and the original
never read as more than two sliding line-grids; cut instead. The
rebuild exists only in this chat's history; v1 remains in git.

### Library-trim pass (2026-08-03)

Not a quality judgment on any single concept — a deliberate cut aimed at
~200 total, made concept-by-concept rather than an arbitrary quota, on
the read that each of these was unlikely to reach a positive outcome
without substantial rework. Each is a **potential concept**: worth
resurrecting from git history if a genuinely different take on the
subject comes up, not a verdict that the idea itself is bad.

- Jump Shot (`concept-basketball`, sport) — was mid-retrofit (Refined v2,
  original preserved as v1) from this session's earlier iteration pass.
- Soccer Goal (`concept-soccer`, sport) — same retrofit history as above.
- Barometer (`concept-barometer`, weather)
- Hammer & Nail (`concept-hammer`, workshop) — previously reviewed and
  judged solid; cut anyway in this trim.
- Handsaw (`concept-saw`, workshop)
- Windshield Wipers (`concept-wipers`, street) — previously reviewed and
  judged solid; cut anyway in this trim.
- Mothership (`concept-mothership`, ufo) — previously reviewed and
  judged solid; cut anyway in this trim. **Re-added the same day as a
  completely new build** (Independence Day-style city-scale hull with
  charge/beam cycle), restarting at New v1; the old build stays in git
  history only.
- Knee Joint (`concept-knee-joint`, bio) — one of the 2026-08-01 new
  additions; never committed to git, so no history to recover it from —
  the module as it existed is gone.
- Lungs (`concept-lungs`, bio)

**Second wave (same day):**

- Laser Scan (`concept-laser-scan`, scanning) — was versioned (Original
  v1 / Refined v2); previously reviewed and judged solid; cut in the trim.
- Portal (`concept-portal`, space) — was versioned (Original v1 / Refined
  v2); previously judged solid. **Explicitly earmarked to return later**:
  the subject is wanted, this iteration just isn't the take. Both versions
  remain in git history as reference for the future rebuild.
- Skull (`concept-skull`, occult)
- Popcorn (`concept-popcorn`, kitchen) — previously reviewed and judged
  solid; cut anyway in the trim.

Gallery total: 212 → 203 → 199.

## Reviewed, judged already solid — not changed

Checked source and multiple animation frames for each; the complaint
didn't hold up under inspection. Worth a second look together if the live
render still bothers you.

- Hourglass
- Portal*
- Digital Noise
- Laser Scan*
- Lightning
- Aurora
- Rainfall
- Crystal Ball
- Ghost
- Hologram
- Mothership*
- Fireflies
- Volcano
- Tornado
- Rocket Launch
- Graveyard Mist
- Raven
- Haunted Mirror
- Toaster
- Kettle
- Popcorn*
- Windshield Wipers*
- Piano Keys
- Hammer & Nail*
- Yo-Yo

\* Mothership, Windshield Wipers, Hammer & Nail, Laser Scan, Portal, and
Popcorn were judged solid here but cut anyway in the 2026-08-03
library-trim pass below — that was a trim-target decision, not a
reversal of this judgment. Portal in particular is expected to return
in a future take.

## Category consolidation (2026-08-03)

Reorganized 29 → 20 categories (user chose the 20-category option over a
10-category alternative; occult and arcane deliberately stay divided).
Merges: scanning→systems, optics+labwork→lab, weather→nature, ufo→scifi,
workshop+clockwork→mech, kitchen+office→home, street+money→city,
play+sport→games, insects→garden. All 200 concepts remapped; per-category
counts verified against the manifest.

## Not yet reviewed at all (backlog)

*(empty — the final 8 were refined in the fourth pass above on
2026-08-03; every concept in this cycle's dictated list is now
reviewed, refined, or deliberately cut.)*
