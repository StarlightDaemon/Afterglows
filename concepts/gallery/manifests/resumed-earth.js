// Canonical facts for the resumed expansion; standalone sources carry the drawing.
import { expansionEntries } from './expansion-entry.js';
export const CONCEPTS = [
  {
    "key": "S061",
    "id": "ocean-internal-wave",
    "label": "Ocean Internal Wave",
    "section": "earth-sciences",
    "category": "oceanography-hydrology",
    "definition": "An ocean internal wave propagates along a density boundary inside stratified water.",
    "motionThesis": "A travelling density interface passes through nearly stationary water while tracers above and below execute oppositely directed horizontal oscillations.",
    "distinction": "A small-amplitude two-layer rigid-lid mode uses linear velocity potentials; no surface storm or parcel riding along the crest is implied.",
    "references": [
      "https://www.whoi.edu/science/aope/people/tduda/isww/text/evans/node1.html"
    ],
    "aliases": [],
    "facets": [
      "stratification",
      "internal-gravity-waves"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:00:00Z"
  },
  {
    "key": "S062",
    "id": "groundwater-cone-of-depression",
    "label": "Groundwater Cone of Depression",
    "section": "earth-sciences",
    "category": "oceanography-hydrology",
    "definition": "Pumping lowers groundwater head around a well, forming a cone-shaped drawdown surface.",
    "motionThesis": "A screened well extracts water as the surrounding water table falls most strongly near the pump and a nearby observation well follows the local head.",
    "distinction": "This is an illustrative unconfined cross-section with a prescribed drawdown and recovery, not a hollow underground bowl or a calibrated pumping test.",
    "references": [
      "https://www.usgs.gov/water-science-school/science/aquifers-and-groundwater"
    ],
    "aliases": [],
    "facets": [
      "groundwater",
      "pumping",
      "drawdown"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:01:00Z"
  },
  {
    "key": "S063",
    "id": "artesian-aquifer",
    "label": "Artesian Aquifer",
    "section": "earth-sciences",
    "category": "oceanography-hydrology",
    "definition": "An artesian aquifer is a confined permeable layer whose pressure raises water in a penetrating well above the aquifer top.",
    "motionThesis": "Recharge on high ground drives confined seepage downslope while water rises in a standpipe to a marked pressure head below its rim.",
    "distinction": "The nonflowing artesian example distinguishes pressure head from aquifer elevation; porous layers are not open subterranean rivers.",
    "references": [
      "https://www.usgs.gov/water-science-school/science/aquifers-and-groundwater"
    ],
    "aliases": [],
    "facets": [
      "confined-groundwater",
      "hydraulic-head"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:02:00Z"
  },
  {
    "key": "S064",
    "id": "meander-cutoff",
    "label": "Meander Cutoff",
    "section": "earth-sciences",
    "category": "oceanography-hydrology",
    "definition": "A meander cutoff creates a shorter river route across a bend and can isolate the abandoned loop as an oxbow lake.",
    "motionThesis": "A narrow neck opens into a shortcut before sediment plugs disconnect the old loop, leaving an oxbow beside the through-flowing river.",
    "distinction": "A staged plan-view neck cutoff separates channel connection, flow diversion and deposition; erosion and geological time are compressed.",
    "references": [
      "https://pubs.usgs.gov/ha/ha730/ch_f/F-text2.html"
    ],
    "aliases": [],
    "facets": [
      "fluvial-geomorphology",
      "oxbow-lake"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:03:00Z"
  },
  {
    "key": "S065",
    "id": "watershed-divide",
    "label": "Watershed Divide",
    "section": "earth-sciences",
    "category": "oceanography-hydrology",
    "definition": "A watershed divide is a topographic boundary separating surface runoff that drains to different outlets.",
    "motionThesis": "Rain lands on opposite flanks of a central ridge and follows branching channels into two separate outlet streams.",
    "distinction": "The divide is fixed topography; the schematic follows surface drainage and does not assert an identical groundwater divide.",
    "references": [
      "https://water.usgs.gov/themes/hydrofabric/drainage-area/"
    ],
    "aliases": [],
    "facets": [
      "drainage-basin",
      "surface-runoff"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:04:00Z"
  },
  {
    "key": "S066",
    "id": "impervious-runoff",
    "label": "Impervious Runoff",
    "section": "earth-sciences",
    "category": "oceanography-hydrology",
    "definition": "Impervious surfaces reduce infiltration and commonly increase rapid surface runoff during rainfall.",
    "motionThesis": "Equal rain inputs reach two slopes: five of eight water tokens enter soil on the pervious side, while seven of eight reach the paved-side surface outlet.",
    "distinction": "Eight equal-volume tokens per side illustrate a chosen budget, not field-calibrated runoff fractions; retained subsurface water remains visible after the storm.",
    "references": [
      "https://www.usgs.gov/water-science-school/science/impervious-surfaces-and-flooding"
    ],
    "aliases": [],
    "facets": [
      "stormwater",
      "infiltration",
      "urban-hydrology"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:05:00Z"
  },
  {
    "key": "S067",
    "id": "ice-albedo-feedback",
    "label": "Ice-Albedo Feedback",
    "section": "earth-sciences",
    "category": "climate-systems",
    "definition": "Loss of reflective ice can increase absorbed sunlight and promote further warming and ice loss.",
    "motionThesis": "The same incoming solar rays meet a retreating ice edge: more rays terminate as heat in dark water and fewer return upward as reflection.",
    "distinction": "Six equal incoming energy packets use illustrative ice and water reflection choices; a staged forced retreat explains positive feedback without a climate-rate prediction.",
    "references": [
      "https://nsidc.org/sea-ice-today/analyses/melt-onset-earlier-normal"
    ],
    "aliases": [],
    "facets": [
      "sea-ice",
      "reflectivity",
      "positive-feedback"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:06:00Z"
  },
  {
    "key": "S068",
    "id": "ice-shelf-buttressing",
    "label": "Ice-Shelf Buttressing",
    "section": "earth-sciences",
    "category": "climate-systems",
    "definition": "A floating ice shelf can restrain grounded ice flow through lateral contact and other resistive stresses.",
    "motionThesis": "A confined shelf loses its margin-contacting front section; upstream ice markers then advance faster past the grounding line into the remaining shelf.",
    "distinction": "A plan-view pinned-shelf example shows removal of lateral restraint, not direct sea-level rise from melting floating ice or a universal response of every shelf.",
    "references": [
      "https://www.bas.ac.uk/data/our-data/publication/ice-shelf-buttressing-and-the-stability-of-marine-ice-sheets/"
    ],
    "aliases": [],
    "facets": [
      "ice-dynamics",
      "grounding-line",
      "lateral-restraint"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:07:00Z"
  },
  {
    "key": "S069",
    "id": "thermokarst-thaw-slump",
    "label": "Thermokarst Thaw Slump",
    "section": "earth-sciences",
    "category": "climate-systems",
    "definition": "Melting ground ice can undermine an ice-rich slope and cause a retreating thaw headwall and downslope sediment movement.",
    "motionThesis": "Three turf blocks lose support after their underlying ice lenses thin, then descend onto a muddy apron as the exposed headwall retreats upslope.",
    "distinction": "A finite thaw episode tracks the same soil blocks and exported meltwater; this differs from a dry landslide and does not conserve soil volume by replacing melted ice.",
    "references": [
      "https://pubs.usgs.gov/of/2013/1161/pdf/ofr20131161.pdf"
    ],
    "aliases": [],
    "facets": [
      "permafrost",
      "ground-ice",
      "slope-failure"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:08:00Z"
  },
  {
    "key": "S070",
    "id": "el-nino-southern-oscillation",
    "label": "El Nino-Southern Oscillation",
    "section": "earth-sciences",
    "category": "climate-systems",
    "definition": "ENSO is coupled tropical Pacific variability involving trade winds, ocean temperatures and atmospheric convection.",
    "motionThesis": "Westward trades weaken before the eastern thermocline deepens, warm water expands eastward and convection shifts from the western Pacific.",
    "distinction": "This normal-to-warm-phase explanatory transition exaggerates subsurface depth changes; its repeating presentation is not an ENSO forecast or a regular climate clock.",
    "references": [
      "https://www.pmel.noaa.gov/elnino/what-is-el-nino"
    ],
    "aliases": [],
    "facets": [
      "tropical-pacific",
      "ocean-atmosphere-coupling"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:09:00Z"
  },
  {
    "key": "S071",
    "id": "atmospheric-river",
    "label": "Atmospheric River",
    "section": "earth-sciences",
    "category": "climate-systems",
    "definition": "An atmospheric river is a long narrow corridor of concentrated water-vapor transport.",
    "motionThesis": "A coherent moisture corridor crosses the ocean toward a coastline, where landfall and coastal mountains concentrate precipitation.",
    "distinction": "An illustrative map separates horizontal vapor transport from landfall rain; the corridor is gaseous moisture, not a liquid channel or a complete storm forecast.",
    "references": [
      "https://www.nesdis.noaa.gov/about/k-12-education/atmosphere/what-atmospheric-river"
    ],
    "aliases": [],
    "facets": [
      "integrated-vapor-transport",
      "landfall",
      "precipitation"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:10:00Z"
  },
  {
    "key": "S072",
    "id": "orographic-rain-shadow",
    "label": "Orographic Rain Shadow",
    "section": "earth-sciences",
    "category": "climate-systems",
    "definition": "A mountain can promote precipitation on its windward side while descending air warms and dries on its lee side.",
    "motionThesis": "One moist air parcel rises and expands over a mountain, forms cloud and loses water as rain, then descends smaller and clearer on the lee side.",
    "distinction": "The parcel radius varies schematically with elevation, and cloud opacity follows condensation then evaporation; lee air retains vapor and need not be universally rainless.",
    "references": [
      "https://www.weather.gov/media/ctp/AdvancedWinterWeatherCourse.pdf"
    ],
    "aliases": [],
    "facets": [
      "adiabatic-lifting",
      "condensation",
      "lee-warming"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:11:00Z"
  },
  {
    "key": "S116",
    "id": "frost-heave-ice-lens",
    "label": "Frost Heave by Ice-Lens Growth",
    "section": "earth-sciences",
    "category": "geology",
    "definition": "Frost heave can result when migrating groundwater freezes into subsurface ice lenses that lift overlying soil.",
    "motionThesis": "Water rises through pores into a growing ice lens while the supported turf layer lifts by the added lens thickness and the lower water store falls.",
    "distinction": "The illustrative frost-susceptible soil is fed by external water migration; heave is not attributed merely to local water expanding on freezing.",
    "references": [
      "https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-1-1905.pdf"
    ],
    "aliases": [],
    "facets": [
      "ice-segregation",
      "frost-susceptible-soil",
      "groundwater"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T20:55:00Z"
  }
].flatMap(({section,category,...subject}) => expansionEntries(section,category,[subject]));
