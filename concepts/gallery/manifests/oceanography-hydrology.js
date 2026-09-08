import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("earth-sciences", "oceanography-hydrology", [
{
  "id": "thermohaline-overturning",
  "label": "Thermohaline Overturning",
  "aliases": [
    "density-driven overturning",
    "thermohaline circulation"
  ],
  "definition": "Thermohaline overturning is large-scale ocean circulation associated with seawater-density differences caused by temperature and salinity.",
  "motionThesis": "Surface parcels cool and receive rejected salt beneath polar ice, sink into a cold deep return, then warm and freshen through a broad mixing return.",
  "distinction": "A schematic overturning cell combines density formation with mixing and upwelling; it is neither a geographic map nor a claim that the global circulation has a single cause.",
  "cycleSeconds": 16,
  "references": [
    "https://oceanservice.noaa.gov/education/tutorial_currents/05conveyor1.html"
  ],
  "facets": [
    "ocean-circulation",
    "climate-system"
  ],
  "added": "2026-09-07T17:47:04Z"
},
{
  "id": "coastal-upwelling",
  "label": "Coastal Upwelling",
  "aliases": [
    "wind-driven coastal upwelling",
    "eastern-boundary upwelling"
  ],
  "definition": "Coastal upwelling replaces offshore-moving surface water with colder water rising from below.",
  "motionThesis": "Equatorward wind drives offshore surface transport while deep water curves upward along the coast carrying nutrients into a lifted thermocline.",
  "distinction": "A steady Northern Hemisphere west-coast section uses a divergence-free schematic flow; the out-of-page wind is distinct from the leftward surface transport and tracers remain on open water streamlines.",
  "cycleSeconds": 16,
  "references": [
    "https://www.psl.noaa.gov/news/2021/060821.html",
    "https://oceanservice.noaa.gov/facts/upwelling.html"
  ],
  "facets": [
    "ocean-circulation",
    "coastal-ecology"
  ],
  "added": "2026-09-07T17:48:15Z"
},
{
  "id": "ekman-spiral",
  "label": "Ekman Spiral",
  "aliases": [
    "classical Ekman layer",
    "wind-driven current spiral"
  ],
  "definition": "The classical Ekman spiral describes a wind-driven current that weakens and rotates with depth under friction and Coriolis acceleration.",
  "motionThesis": "Water markers remain at fixed depths while moving in progressively turned and weaker horizontal currents, with a plan-view key showing surface flow and integrated transport to the wind’s right.",
  "distinction": "The Northern Hemisphere constant-eddy-viscosity, deep homogeneous-water model separates the velocity profile from parcel trajectories; the exact infinite-depth transport is not inferred from the seven displayed samples.",
  "cycleSeconds": 12,
  "references": [
    "https://oceanservice.noaa.gov/education/tutorial_currents/04currents4.html",
    "https://uhslc.soest.hawaii.edu/ocn620/notes/ekman.html"
  ],
  "facets": [
    "ocean-circulation",
    "rotating-fluid-dynamics"
  ],
  "added": "2026-09-07T17:49:05Z"
},
{
  "id": "estuarine-salt-wedge",
  "label": "Estuarine Salt Wedge",
  "aliases": [
    "salt-wedge estuary",
    "saline intrusion"
  ],
  "definition": "A salt-wedge estuary holds dense seawater beneath a strongly stratified, seaward-flowing layer of river water.",
  "motionThesis": "A stronger river-flow cue accompanies seaward retreat of a sharply bounded saline wedge, whose water parcels move with its changing volume before returning inland as the flow relaxes.",
  "distinction": "An illustrative quasi-static intrusion law uses an area-preserving saline material map and exchange through the open ocean boundary; it is not a solved hydraulic estuary or a deep-ocean overturning cell.",
  "cycleSeconds": 12,
  "references": [
    "https://oceanservice.noaa.gov/education/tutorial_estuaries/est05_circulation.html"
  ],
  "facets": [
    "estuaries",
    "density-stratification"
  ],
  "added": "2026-09-07T17:54:50Z"
},
{
  "id": "turbidity-current",
  "label": "Turbidity Current",
  "aliases": [
    "sediment density current",
    "submarine turbidity flow"
  ],
  "definition": "A turbidity current is a downslope gravity flow made denser than surrounding water by transported sediment.",
  "motionThesis": "A bottom-hugging sediment pulse advances down a submarine slope while coarse grains settle first and finer grains remain suspended farther downstream.",
  "distinction": "An illustrative dilute pulse preserves twelve grains as they change from suspension to stationary deposits; it does not imply that all observed turbidity currents lack dense basal layers.",
  "cycleSeconds": 12,
  "references": [
    "https://www.mbari.org/news/measuring-the-maelstrom/",
    "https://www.mbari.org/know-your-ocean/monterey-canyon/"
  ],
  "facets": [
    "marine-sediment",
    "gravity-currents"
  ],
  "added": "2026-09-07T17:56:01Z"
},
{
  "id": "rip-current-circulation",
  "label": "Rip-Current Circulation",
  "aliases": [
    "rip current",
    "feeder-current circulation"
  ],
  "definition": "A rip current is a narrow seaward flow that returns wave-delivered nearshore water through the surf zone, often through a gap in a sandbar.",
  "motionThesis": "Shoreward transport over two bars feeds converging alongshore currents, which accelerate through a central gap and spread into two horizontal return cells.",
  "distinction": "An illustrative divergence-free plan-view field resolves feeders, a seaward jet and outer returns; it represents horizontal circulation rather than a vertical undertow or a radiation-stress calculation.",
  "cycleSeconds": 16,
  "references": [
    "https://www.nhc.noaa.gov/rip-currents/overview.html"
  ],
  "facets": [
    "coastal-circulation",
    "surface-waves"
  ],
  "added": "2026-09-07T17:57:35Z"
},
{
  "id": "longshore-sediment-transport",
  "label": "Longshore Sediment Transport",
  "aliases": [
    "littoral drift",
    "beach drift",
    "longshore drift"
  ],
  "definition": "Longshore sediment transport is the net movement of coastal sediment along a shoreline under obliquely arriving waves and associated nearshore flow.",
  "motionThesis": "Grains move diagonally up a beach in swash and straight downslope in backwash, leaving growing zigzag histories and a cumulative alongshore displacement.",
  "distinction": "A kinematic beach-drift sequence preserves each grain through three swash/backwash cycles; it shows sediment movement along the shore rather than a rip-current return or a sediment-flux prediction.",
  "cycleSeconds": 14,
  "references": [
    "https://gsi.ie/education/water/offshore-water-coastal-processes/",
    "https://oceanservice.noaa.gov/education/tutorial_currents/03coastal2.html"
  ],
  "facets": [
    "coastal-sediment",
    "surface-waves"
  ],
  "added": "2026-09-07T18:00:29Z"
},
{
  "id": "tsunami-shoaling",
  "label": "Tsunami Shoaling",
  "aliases": [
    "long-wave shoaling"
  ],
  "definition": "Tsunami shoaling is the slowing, wavelength shortening and amplitude increase of a long wave entering shallower water.",
  "motionThesis": "Identifiable crests slow and crowd together across a rising shelf while their amplitude grows with the changing water depth.",
  "distinction": "A linear long-wave and Green-law shelf transformation conserves amplitude-squared times phase speed; surface displacement is visually exaggerated and the field stops before run-up or breaking.",
  "cycleSeconds": 12,
  "references": [
    "https://www.tsunami.gov/?page=tsunamiFAQ",
    "https://os.copernicus.org/articles/19/517/2023/"
  ],
  "facets": [
    "ocean-waves",
    "bathymetric-transformation"
  ],
  "added": "2026-09-07T18:01:38Z"
}
]);
