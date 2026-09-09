// Canonical facts for the resumed expansion; standalone sources carry the drawing.
import { expansionEntries } from './expansion-entry.js';
export const CONCEPTS = [
  {
    "key": "S073",
    "id": "seismic-base-isolation",
    "label": "Seismic Base Isolation",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "Seismic isolation bearings lengthen a structure's vibration period and accommodate movement between its foundation and superstructure.",
    "motionThesis": "A shaking foundation shears laminated bearings while the rigid building above moves much less in a consistent steady harmonic response.",
    "distinction": "The chosen forcing frequency is three times the isolated natural frequency; shear geometry follows connected bearing endpoints and does not imply isolation at every frequency.",
    "references": [
      "https://www.fema.gov/sites/default/files/documents/fema_p-749-earthquake-resistant-design-concepts_112022.pdf"
    ],
    "aliases": [],
    "facets": [
      "structural-dynamics",
      "laminated-bearings"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:00:00Z"
  },
  {
    "key": "S074",
    "id": "tuned-mass-damper",
    "label": "Tuned Mass Damper",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "A secondary oscillator can reduce a structure's response near a selected excitation frequency by exchanging energy and dissipating relative motion.",
    "motionThesis": "A guided roof mass moves relative to a swaying building through a visible spring and dashpot, following the coupled two-mass harmonic solution.",
    "distinction": "The primary and absorber use mass ratio 0.1 and tuned stiffness under a single-frequency drive; the relative motion is solved rather than assumed to be exactly opposite.",
    "references": [
      "https://openlearninglibrary.mit.edu/courses/course-v1%3AOCW%2B18.031%2B2019_Spring/courseware/week7/lec12/"
    ],
    "aliases": [],
    "facets": [
      "vibration-control",
      "coupled-oscillators"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:01:00Z"
  },
  {
    "key": "S075",
    "id": "prestressed-concrete",
    "label": "Prestressed Concrete",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "Prestressing introduces deliberate compression into concrete before service loading.",
    "motionThesis": "A jack tensions an eccentric tendon, anchors retain it after the jack retracts, and the later service load partly cancels the beam's upward camber.",
    "distinction": "This post-tensioning sequence uses illustrative elastic camber and retained prestress; it is not a design calculation or a claim that all concrete remains uncracked at every load.",
    "references": [
      "https://www.fhwa.dot.gov/bridge/construction/pubs/hif13026.pdf"
    ],
    "aliases": [],
    "facets": [
      "post-tensioning",
      "anchorage",
      "structural-concrete"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:02:00Z"
  },
  {
    "key": "S076",
    "id": "truss-load-paths",
    "label": "Truss Load Paths",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "A pin-jointed truss carries joint loads through axial tension and compression in connected triangular members.",
    "motionThesis": "Loads transfer between two upper joints while signed member-force colors and widths change with exact joint equilibrium.",
    "distinction": "The determinate five-joint truss assumes pin joints, axial members and loads applied only at joints; deformation is omitted rather than invented.",
    "references": [
      "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_%28Roylance%29/02%3A_Simple_Tensile_and_Shear_Structures/2.01%3A_Trusses"
    ],
    "aliases": [],
    "facets": [
      "structural-equilibrium",
      "tension",
      "compression"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:03:00Z"
  },
  {
    "key": "S077",
    "id": "arch-thrust",
    "label": "Arch Thrust",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "An arch transfers loads to its abutments with horizontal as well as vertical reactions.",
    "motionThesis": "A load traverses a three-hinged arch while springing reactions change, including opposed horizontal thrust at the abutments.",
    "distinction": "For span L and rise f the crown-hinge equation gives H=P min(a,L-a)/(2f); point loading does not make this parabolic arch a pure-compression funicular.",
    "references": [
      "https://eng.libretexts.org/Bookshelves/Civil_Engineering/Structural_Analysis_%28Udoeyo%29/01%3A_Chapters/1.06%3A_Arches_and_Cables"
    ],
    "aliases": [],
    "facets": [
      "three-hinged-arch",
      "abutment-thrust"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:04:00Z"
  },
  {
    "key": "S078",
    "id": "cantilever-deflection",
    "label": "Cantilever Deflection",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "A clamped elastic beam curves under load while its root remains fixed in position and slope.",
    "motionThesis": "An increasing end load bends a constant-thickness cantilever with maximum movement at its free tip and a fixed horizontal root.",
    "distinction": "The small-deflection Euler-Bernoulli shape w=delta xiÂ²(3-xi)/2 is used; displayed displacement is exaggerated and is not an exact large-rotation beam solution.",
    "references": [
      "https://eng.libretexts.org/Bookshelves/Civil_Engineering/Structural_Analysis_%28Udoeyo%29/01%3A_Chapters/1.07%3A_Deflection_of_Beams-_Geometric_Methods"
    ],
    "aliases": [],
    "facets": [
      "elastic-bending",
      "boundary-conditions"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:05:00Z"
  },
  {
    "key": "S079",
    "id": "cable-stayed-load-transfer",
    "label": "Cable-Stayed Load Transfer",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "Cable stays support deck loads in tension and transfer their vertical components into a compression tower.",
    "motionThesis": "Paired deck loads move between stay anchors while the loaded stays brighten and thicken, transferring balanced forces into a fixed tower.",
    "distinction": "An ideal symmetric pin-panel model shares each moving load between adjacent anchors with positive dead load; stays never carry compression and horizontal tower forces balance.",
    "references": [
      "https://www.fhwa.dot.gov/publications/research/infrastructure/bridge/05083/appendh.cfm"
    ],
    "aliases": [],
    "facets": [
      "tension-only-members",
      "bridge-load-path"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:06:00Z"
  },
  {
    "key": "S080",
    "id": "bridge-expansion-joint",
    "label": "Bridge Expansion Joint",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "A bridge expansion joint accommodates deck movement while maintaining a traffic-supporting connection.",
    "motionThesis": "Warming deck ends translate toward each other and their alternating steel fingers interleave more deeply without colliding.",
    "distinction": "The exaggerated thermal motion reduces root gap from 24 to 16 units; 14-unit fingers retain at least two units of clearance from the opposing root.",
    "references": [
      "https://www.scdot.org/content/dam/scdot-legacy/business/pdf/structural-design/SCDOT_Bridge_Design_Manual.pdf"
    ],
    "aliases": [],
    "facets": [
      "thermal-expansion",
      "finger-joint"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:07:00Z"
  },
  {
    "key": "S081",
    "id": "tunnel-boring-advance",
    "label": "Tunnel-Boring Advance",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "A tunnel-boring machine excavates while reacting thrust against installed lining, then installs the next lining ring.",
    "motionThesis": "The cutter and shield advance one ring length against the completed lining; advance pauses while a new ring is assembled behind the shield and the jacks regrip.",
    "distinction": "A side cutaway compresses one excavation-and-lining cycle; ring installation occurs behind the shield, and spoil travels back toward the finished tunnel.",
    "references": [
      "https://learninglegacy.crossrail.co.uk/documents/crossrail-western-running-tunnels-crossing-of-london-underground-victoria-line-and-bakerloo-line-assets/"
    ],
    "aliases": [],
    "facets": [
      "tunneling",
      "segmental-lining",
      "construction-sequence"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:08:00Z"
  },
  {
    "key": "S082",
    "id": "clarifier-sedimentation",
    "label": "Clarifier Sedimentation",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "A clarifier separates settleable suspended solids from water using gravity and removes collected sludge.",
    "motionThesis": "Coarse solids descend through a baffled tank while one fine tracer reaches the overflow; a floor scraper collects settled solids into the hopper.",
    "distinction": "A finite rectangular-tank episode uses prescribed settling velocities and a separate scraper pass; the fine escaping fraction prevents a claim of complete removal.",
    "references": [
      "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101ZSJW.TXT"
    ],
    "aliases": [],
    "facets": [
      "water-treatment",
      "settling",
      "sludge-removal"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:09:00Z"
  },
  {
    "key": "S083",
    "id": "activated-sludge-treatment",
    "label": "Activated-Sludge Treatment",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "Activated sludge uses aerated microbial flocs to consume organic matter, followed by settling and biomass return.",
    "motionThesis": "Organic feed joins aerated flocs, then flocs settle in a second tank; most follow a return pipe to the reactor while one leaves through a waste branch.",
    "distinction": "The process schematic emphasizes biological uptake and retained floc identity through recycle; bubble motion alone is not the cleaning mechanism and no quantitative carbon balance is claimed.",
    "references": [
      "https://www.epa.gov/system/files/documents/2023-06/life-cycle-nutrient-removal-2023-update.pdf"
    ],
    "aliases": [],
    "facets": [
      "biological-treatment",
      "biomass-recycle",
      "aeration"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:10:00Z"
  },
  {
    "key": "S084",
    "id": "roundabout-gap-acceptance",
    "label": "Roundabout Gap Acceptance",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "A roundabout entrant yields until a suitable gap in circulating traffic permits entry.",
    "motionThesis": "An approaching car waits through a short gap, enters tangentially during a longer one and joins counterclockwise traffic before leaving at an exit.",
    "distinction": "A scripted slow-speed example demonstrates rejected and accepted headways, not a universal critical gap or a calibrated traffic-capacity model.",
    "references": [
      "https://highways.dot.gov/sites/fhwa.dot.gov/files/FHWA-RD-00-067.pdf"
    ],
    "aliases": [],
    "facets": [
      "yielding",
      "traffic-headway",
      "circulating-priority"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:11:00Z",
    "reducedMotionPhase": 0.3
  },
  {
    "key": "S085",
    "id": "zipper-merge",
    "label": "Zipper Merge",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "A zipper merge alternates vehicles from two congested approach lanes into one lane at a closure.",
    "motionThesis": "Two queues advance to a taper and release one vehicle from each lane in alternating reserved slots into the shared downstream lane.",
    "distinction": "The example assumes slow congested traffic with slot-based admission; it does not prescribe late merging at arbitrary highway speeds.",
    "references": [
      "https://www.dot.state.mn.us/zippermerge/"
    ],
    "aliases": [],
    "facets": [
      "lane-closure",
      "alternating-admission"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:12:00Z"
  },
  {
    "key": "S086",
    "id": "traffic-shock-wave",
    "label": "Traffic Shock Wave",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "A traffic shock wave is a moving boundary between different traffic-flow states.",
    "motionThesis": "Cars continue forward while their braking boundary travels backward; each car slows only when it reaches that boundary.",
    "distinction": "The piecewise states k1=.04,v1=10 and k2=.1,v2=2 give shock speed -10/3 by vehicle conservation; road length and the finite episode are schematic.",
    "references": [
      "https://ops.fhwa.dot.gov/publications/fhwahop18013/appa.htm"
    ],
    "aliases": [],
    "facets": [
      "kinematic-wave",
      "traffic-flow",
      "conservation"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:13:00Z"
  },
  {
    "key": "S087",
    "id": "railway-track-circuit",
    "label": "Railway Track Circuit",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "A track circuit detects rail occupancy when conductive wheels and axles shunt current away from a relay.",
    "motionThesis": "A train's axles bridge the rails, the relay drops and the signal turns restrictive until the final axle clears the insulated section.",
    "distinction": "The simplified DC circuit shows occupancy shunting and de-energization, not every possible railway signaling failure or a complete operational interlocking.",
    "references": [
      "https://www.networkrail.co.uk/stories/track-circuits-explained/"
    ],
    "aliases": [],
    "facets": [
      "rail-occupancy",
      "electrical-shunt",
      "relay"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:14:00Z",
    "reducedMotionPhase": 0.375
  },
  {
    "key": "S088",
    "id": "ship-to-shore-container-crane",
    "label": "Ship-to-Shore Container Crane",
    "section": "engineering-technology",
    "category": "civil-logistics",
    "definition": "A ship-to-shore crane transfers containers between a vessel and quayside transport using a travelling trolley and hoist.",
    "motionThesis": "A spreader locks onto a shipboard container, raises it clear of the stack, traverses to the quay, lowers it onto a chassis and returns empty.",
    "distinction": "One container retains its identity through lock, lift, traverse, touchdown and release; cycle time and port geometry are compressed.",
    "references": [
      "https://www.konecranes.com/sites/default/files/2021-07/Konecranes_brochure_STS_EN_2018_6199_v8b.pdf"
    ],
    "aliases": [],
    "facets": [
      "port-logistics",
      "spreader",
      "hoist"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T21:15:00Z"
  }
].flatMap(({section,category,...subject}) => expansionEntries(section,category,[subject]));
