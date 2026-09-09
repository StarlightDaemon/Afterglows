// Canonical facts for the resumed expansion; standalone sources carry the drawing.
import { expansionEntries } from './expansion-entry.js';
export const CONCEPTS = [
  {
    "key": "S089",
    "id": "rocket-stage-separation",
    "label": "Rocket Stage Separation",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "Rocket staging releases spent propulsion hardware so a continuing vehicle no longer carries its mass.",
    "motionThesis": "After engine cutoff and a short coast, a visible joint opens and the spent stage recedes before the upper engine ignites.",
    "distinction": "A cold-staging example uses a frame moving with the upper vehicle; receding hardware is not shown falling in a ground-fixed frame and the sequence is not universal to hot staging.",
    "references": [
      "https://www.nasa.gov/blogs/spacestation/2024/09/28/falcon-9-max-q-main-engine-cutoff-stage-separation/"
    ],
    "aliases": [],
    "facets": [
      "staging",
      "mass-shedding",
      "cold-staging"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:00:00Z"
  },
  {
    "key": "S090",
    "id": "reaction-wheel-attitude-control",
    "label": "Reaction-Wheel Attitude Control",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "A reaction wheel exchanges angular momentum with its spacecraft to change attitude without expelling propellant.",
    "motionThesis": "An internal wheel turns relative to the spacecraft while the bus rotates in the opposite direction, then both reverse smoothly to close the demonstration.",
    "distinction": "Bus inertia 9 and wheel inertia 1 give bus angle minus one tenth of relative wheel angle, conserving zero initial angular momentum; no external desaturation torque is modeled.",
    "references": [
      "https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/"
    ],
    "aliases": [],
    "facets": [
      "angular-momentum",
      "attitude-control"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:01:00Z"
  },
  {
    "key": "S091",
    "id": "thruster-docking",
    "label": "Thruster Docking",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "Attitude-control thrusters adjust relative spacecraft motion for low-speed aligned docking.",
    "motionThesis": "Symmetric aft jets accelerate a chaser, a flame-free coast follows, and forward-facing jets brake it before the capture collar closes.",
    "distinction": "The local station-frame translation uses matched force pairs and a piecewise acceleration/coast/braking trajectory; orbital rendezvous and attitude errors are outside the fixture.",
    "references": [
      "https://ntrs.nasa.gov/api/citations/20230005922/downloads/20230005922.pdf"
    ],
    "aliases": [],
    "facets": [
      "reaction-control",
      "relative-motion",
      "docking"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:02:00Z"
  },
  {
    "key": "S092",
    "id": "gridded-ion-thruster",
    "label": "Gridded Ion Thruster",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "A gridded ion thruster ionizes propellant and electrostatically accelerates positive ions through grids while neutralizing the outgoing beam.",
    "motionThesis": "Atoms enter an ionization chamber, positive ions accelerate through aligned grid apertures, and a separate external cathode supplies electrons downstream.",
    "distinction": "The cutaway tracks charge states and distinguishes ion optics from Hall propulsion; neutralization denotes beam charge balance rather than universal immediate recombination.",
    "references": [
      "https://www.nasa.gov/smallsat-institute/sst-soa/in-space_propulsion/"
    ],
    "aliases": [],
    "facets": [
      "electrostatic-propulsion",
      "ion-optics",
      "neutralizer"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:03:00Z"
  },
  {
    "key": "S093",
    "id": "aerobraking",
    "label": "Aerobraking",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "Aerobraking uses repeated upper-atmosphere drag passes to reduce orbital energy and lower apoapsis.",
    "motionThesis": "A spacecraft passes through a thin atmospheric shell near a shared periapsis and continues onto successively smaller-apoapsis orbits.",
    "distinction": "Three idealized osculating ellipses share a focus and periapsis, with changes confined to that point; Kepler timing is used within each ellipse and finite drag passes are compressed.",
    "references": [
      "https://science.nasa.gov/missions/maven/nasas-maven-uses-red-planets-atmosphere-to-change-orbit/"
    ],
    "aliases": [],
    "facets": [
      "atmospheric-drag",
      "apoapsis-lowering"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:04:00Z",
    "reducedMotionPhase": 0.667
  },
  {
    "key": "S094",
    "id": "ablative-heat-shield",
    "label": "Ablative Heat Shield",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "An ablative heat shield protects a vehicle through material decomposition, gas release and sacrificial surface loss.",
    "motionThesis": "The hot exposed face recedes into the material while the char boundary advances, gases leave outward and the backing remains comparatively cool.",
    "distinction": "The planar cutaway compresses a finite heating episode and separates recession from internal pyrolysis; no thermal certification or flight heat flux is implied.",
    "references": [
      "https://www.nasa.gov/general/thermal-protection-materials-branch-low-density-ablators/"
    ],
    "aliases": [],
    "facets": [
      "thermal-protection",
      "pyrolysis",
      "recession"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:05:00Z"
  },
  {
    "key": "S095",
    "id": "sky-crane-landing",
    "label": "Sky-Crane Landing",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "A sky-crane descent stage lowers a rover on bridles and departs after the rover reaches the surface.",
    "motionThesis": "Three taut bridles lower the rover until its wheels contact terrain; the lines release only after touchdown and the powered stage flies away.",
    "distinction": "The sequence depicts the Mars rover landing architecture with exaggerated distances; bridles remain attached throughout lowering and no suspended rover is released early.",
    "references": [
      "https://www.jpl.nasa.gov/news/press_kits/mars_2020/landing/mission/spacecraft/getting_to_mars/"
    ],
    "aliases": [],
    "facets": [
      "powered-descent",
      "bridle-release",
      "rover-touchdown"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:06:00Z",
    "reducedMotionPhase": 0.625
  },
  {
    "key": "S096",
    "id": "webb-sunshield-deployment",
    "label": "Webb Sunshield Deployment",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "Webb deploys and tensions five separated sunshield membranes to protect its cold telescope from solar heating.",
    "motionThesis": "Support pallets open, opposed booms draw out folded membranes, and five distinct layers separate and become taut beneath the telescope.",
    "distinction": "The oblique schematic focuses on sunshield hardware rather than mirror-wing deployment; it compresses the multi-day sequence and does not model membrane stress.",
    "references": [
      "https://science.nasa.gov/blogs/webb/2021/12/28/forward-pallet-structure-lowered-beginning-multiple-day-sunshield-deployment/"
    ],
    "aliases": [],
    "facets": [
      "deployable-structures",
      "five-layer-sunshield"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:07:00Z"
  },
  {
    "key": "S097",
    "id": "rocker-bogie-suspension",
    "label": "Rocker-Bogie Suspension",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "Rocker-bogie linkages allow rover wheels to articulate over uneven ground while supporting the vehicle.",
    "motionThesis": "Three wheels maintain terrain contact as a rigid bogie and rocker change angle across a rounded obstacle.",
    "distinction": "The kinematic one-side model solves wheel-normal contact and fixed link lengths; the body locates the rocker pivot but does not claim a solved opposite-side differential or equal wheel loads.",
    "references": [
      "https://github.com/nasa-jpl/open-source-rover/blob/master/mechanical/rocker_bogie/README.md"
    ],
    "aliases": [],
    "facets": [
      "rover-mobility",
      "articulated-suspension",
      "terrain-contact"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:08:00Z"
  },
  {
    "key": "S098",
    "id": "exoplanet-transit-photometry",
    "label": "Exoplanet Transit Photometry",
    "section": "astronomy-space",
    "category": "astronomy-astrometry",
    "definition": "Transit photometry measures the loss of unresolved stellar light when a planet crosses the visible stellar disc.",
    "motionThesis": "A planet crosses a bright star while a synchronized flux cursor traces curved ingress, a flat full-transit interval and egress.",
    "distinction": "A central transit across a uniformly bright star uses exact overlapping-circle area; radius ratio one quarter gives a 6.25 percent full-transit depth, with no limb darkening.",
    "references": [
      "https://science.nasa.gov/exoplanets/whats-a-transit/"
    ],
    "aliases": [],
    "facets": [
      "light-curve",
      "exoplanet-detection",
      "occulted-area"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:09:00Z"
  },
  {
    "key": "S099",
    "id": "radial-velocity-planet-detection",
    "label": "Radial-Velocity Planet Detection",
    "section": "astronomy-space",
    "category": "astronomy-astrometry",
    "definition": "Periodic Doppler shifts in stellar spectral lines can reveal the star's reflex motion caused by an orbiting companion.",
    "motionThesis": "A small stellar wobble is measured as a coherent shift of absorption lines and a signed radial-velocity trace, with zero shift at maximum displacement.",
    "distinction": "The observer lies to the left; v is proportional to minus sine of orbital phase and all lines have the same fractional wavelength shift, exaggerated for legibility.",
    "references": [
      "https://www.eso.org/public/videos/eso1035g/"
    ],
    "aliases": [],
    "facets": [
      "stellar-spectroscopy",
      "reflex-motion",
      "doppler-shift"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:10:00Z"
  },
  {
    "key": "S100",
    "id": "astronomical-aperture-synthesis",
    "label": "Astronomical Aperture Synthesis",
    "section": "astronomy-space",
    "category": "astronomy-astrometry",
    "definition": "An interferometer combines measurements from antenna pairs to sample spatial frequencies and reconstruct sky brightness.",
    "motionThesis": "Three fixed antennas provide three baselines whose positive and negative spatial-frequency samples sweep conjugate arcs as the projected geometry rotates.",
    "distinction": "The pole-source idealization rotates projected baselines through a quarter turn; sparse arc coverage is not a filled physical dish or a complete reconstructed image.",
    "references": [
      "https://casa.nrao.edu/aips2_docs/glossary/a.html"
    ],
    "aliases": [],
    "facets": [
      "radio-interferometry",
      "uv-coverage",
      "earth-rotation-synthesis"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:11:00Z"
  },
  {
    "key": "S101",
    "id": "adaptive-optics",
    "label": "Adaptive Optics",
    "section": "astronomy-space",
    "category": "astronomy-astrometry",
    "definition": "Adaptive optics measures wavefront errors and adjusts a deformable mirror to reduce optical aberration.",
    "motionThesis": "A sensor detects a distorted wavefront, a feedback path drives mirror actuators, and residual wavefront corrugation decreases after the mirror responds.",
    "distinction": "Separate input, sensor and output views form an explanatory optical schematic; mirror height is minus half the corrected path error, and no full-system ray trace or perfect atmospheric correction is claimed.",
    "references": [
      "https://elt.eso.org/telescope/adaptiveoptics/"
    ],
    "aliases": [],
    "facets": [
      "wavefront-sensing",
      "deformable-mirror",
      "feedback"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:12:00Z"
  },
  {
    "key": "S102",
    "id": "segmented-mirror-phasing",
    "label": "Segmented-Mirror Phasing",
    "section": "astronomy-space",
    "category": "astronomy-astrometry",
    "definition": "Segmented-mirror phasing adjusts optical path differences so separate mirror segments act coherently.",
    "motionThesis": "Three rigid segments remove their piston offsets, their reflected wavefront pieces align, and the on-axis coherence indicator increases.",
    "distinction": "The three equal segments start at reflected phases minus pi/2, zero and plus pi/2; the shown indicator is the squared magnitude of their mean complex field, not simply stacked image spots.",
    "references": [
      "https://svs.gsfc.nasa.gov/20358/"
    ],
    "aliases": [],
    "facets": [
      "optical-path-difference",
      "piston-correction",
      "coherent-aperture"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:13:00Z"
  },
  {
    "key": "S103",
    "id": "touch-and-go-asteroid-sampling",
    "label": "Touch-and-Go Asteroid Sampling",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "A gas-driven touch-and-go sampler briefly contacts an asteroid and mobilizes regolith into a collection head.",
    "motionThesis": "A fixed-length sampling arm descends with its spacecraft, a gas pulse follows contact, and captured grains stay inside the head as it lifts away.",
    "distinction": "This OSIRIS-REx-style collection episode uses gas mobilization rather than drilling or vacuum suction; the vehicle body never lands on the surface.",
    "references": [
      "https://ntrs.nasa.gov/citations/20180007115"
    ],
    "aliases": [],
    "facets": [
      "TAGSAM",
      "regolith-collection",
      "contact-sampling"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:14:00Z"
  },
  {
    "key": "S104",
    "id": "star-tracker-attitude-determination",
    "label": "Star-Tracker Attitude Determination",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "A star tracker estimates spacecraft orientation by matching observed star directions to a catalog.",
    "motionThesis": "A fixed observed star pattern is matched to a rotated catalog pattern, then an attitude-axis readout reports the inferred roll.",
    "distinction": "The camera pattern rotated plus 25 degrees corresponds to minus 25 degrees of camera roll; this two-dimensional example illustrates correspondence; the output glyph is a measurement display, not a spacecraft being torqued by its sensor.",
    "references": [
      "https://science.nasa.gov/missions/europa-clipper/mission-dispatch-tracking-the-stars/"
    ],
    "aliases": [],
    "facets": [
      "star-pattern-matching",
      "attitude-estimation",
      "roll"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:15:00Z"
  },
  {
    "key": "S105",
    "id": "aerogel-dust-capture",
    "label": "Aerogel Dust Capture",
    "section": "astronomy-space",
    "category": "astronautics",
    "definition": "Aerogel can decelerate incoming dust grains while preserving terminal material and penetration tracks for study.",
    "motionThesis": "A grain enters a translucent collector, slows along an increasingly long tapered track, and remains at the track's tip.",
    "distinction": "A cubic penetration history monotonically decreases speed inside the aerogel; one simple track is shown without implying that real grains never fragment.",
    "references": [
      "https://science.nasa.gov/photojournal/particle-tracks-in-aerogel/"
    ],
    "aliases": [],
    "facets": [
      "hypervelocity-capture",
      "Stardust",
      "porous-collector"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T22:16:00Z"
  }
].flatMap(({section,category,...subject}) => expansionEntries(section,category,[subject]));
