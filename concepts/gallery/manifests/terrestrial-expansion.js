import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("life-sciences", "terrestrial-ecology", [
  {
    "id": "stomatal-turgor",
    "label": "Stomatal Turgor",
    "aliases": [
      "guard-cell opening",
      "turgor-regulated stomatal aperture"
    ],
    "definition": "Changes in guard-cell water status and wall mechanics alter the stomatal pore.",
    "motionThesis": "Water entry expands kidney-shaped guard cells and bows their inner walls apart before water loss closes the aperture.",
    "distinction": "An angiosperm stoma with deforming walls and anchored tips, not two rigid cells translating or a universal response across all plants.",
    "cycleSeconds": 12,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/11607161/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC10095868/"
    ],
    "facets": [
      "plant-physiology"
    ],
    "added": "2026-09-07T13:10:38Z"
  },
  {
    "id": "phototropic-growth",
    "label": "Phototropic Growth",
    "aliases": [
      "shoot phototropism",
      "auxin-mediated curvature"
    ],
    "definition": "Unequal growth across a shoot produces curvature toward directional light.",
    "motionThesis": "Directional light precedes stronger shaded-side elongation, increasing cell lengths and bending the growing shoot toward the source.",
    "distinction": "Distributed differential shoot growth rather than rigid hinge rotation or leaf tracking; root responses need not follow this pattern.",
    "cycleSeconds": 14,
    "references": [
      "https://openstax.org/books/biology-2e/pages/30-6-plant-sensory-systems-and-responses"
    ],
    "facets": [
      "plant-physiology"
    ],
    "added": "2026-09-07T13:10:38Z"
  },
  {
    "id": "xylem-cohesion-tension",
    "label": "Xylem Cohesion-Tension",
    "aliases": [
      "transpiration pull",
      "cohesion-tension transport"
    ],
    "definition": "Evaporation from leaves generates tension transmitted through cohesive xylem water, supporting upward transport.",
    "motionThesis": "Evaporation deepens a leaf-surface meniscus while tracers advance upward within a continuously filled water column.",
    "distinction": "Transpiration-driven tension rather than a root piston or a claim that capillary rise alone supports tall-tree transport.",
    "cycleSeconds": 12,
    "references": [
      "https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants",
      "https://openstax.org/books/college-physics-2e/pages/11-8-cohesion-and-adhesion-in-liquids-surface-tension-and-capillary-action"
    ],
    "facets": [
      "plant-physiology"
    ],
    "added": "2026-09-07T13:10:38Z"
  },
  {
    "id": "phloem-pressure-flow",
    "label": "Phloem Pressure Flow",
    "aliases": [
      "pressure-flow hypothesis",
      "source-to-sink translocation"
    ],
    "definition": "A hydrostatic pressure difference drives bulk phloem flow from a source region toward a sink.",
    "motionThesis": "Source sugar loading recruits water, mixed sap moves through sieve-plate openings, and sink unloading permits water return.",
    "distinction": "A source-above and sink-below example rather than universally downward phloem flow or long-distance sugar diffusion alone.",
    "cycleSeconds": 14,
    "references": [
      "https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants"
    ],
    "facets": [
      "plant-physiology"
    ],
    "added": "2026-09-07T13:10:38Z"
  },
{
  "id": "root-nodule-nitrogen-fixation",
  "label": "Root-Nodule Nitrogen Fixation",
  "aliases": [
    "legume-rhizobium symbiosis",
    "symbiotic nitrogen fixation"
  ],
  "definition": "Rhizobial bacteroids in legume root nodules reduce atmospheric nitrogen to ammonia that supports plant nitrogen nutrition.",
  "motionThesis": "A nitrogen molecule enters a nodule bacteroid, separates into two ammonia products, and supplies the root while plant carbon arrives in the opposite direction.",
  "distinction": "Bacterial nitrogen fixation rather than nitrate uptake or a root splitting nitrogen; ATP, electron supply, and later assimilation are omitted from the schematic.",
  "cycleSeconds": 14,
  "references": [
    "https://openstax.org/books/biology-2e/pages/31-3-nutritional-adaptations-of-plants"
  ],
  "facets": [
    "plant-physiology"
  ],
  "added": "2026-09-07T13:18:48Z"
},
{
  "id": "mycorrhizal-exchange",
  "label": "Mycorrhizal Exchange",
  "aliases": [
    "arbuscular mycorrhizal nutrient exchange",
    "fungus-root symbiosis"
  ],
  "definition": "Mycorrhizal fungi acquire soil nutrients and exchange them for plant-derived carbon across a specialized root interface.",
  "motionThesis": "Phosphate travels through branching hyphae and crosses the arbuscular interface while a separate carbon cargo passes from the plant toward the fungus.",
  "distinction": "Arbuscular nutrient exchange with a host membrane surrounding fungal branches, not bacterial nitrogen fixation or a claim of altruistic root networks.",
  "cycleSeconds": 14,
  "references": [
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC151226/",
    "https://openstax.org/books/biology-2e/pages/31-3-nutritional-adaptations-of-plants"
  ],
  "facets": [
    "plant-physiology"
  ],
  "added": "2026-09-07T13:18:48Z"
},
{
  "id": "pollen-tube-guidance",
  "label": "Pollen Tube Guidance",
  "aliases": [
    "micropylar guidance",
    "synergid-directed pollen tube growth"
  ],
  "definition": "Signals from ovular tissues steer a growing pollen tube toward the embryo sac for sperm delivery.",
  "motionThesis": "A tube lengthens only at its tip, curves toward a local synergid signal, and enters a real micropyle opening while its older shaft stays in place.",
  "distinction": "Guidance and tip growth rather than subsequent double fertilization; local LURE signaling is a species-specific example.",
  "cycleSeconds": 12,
  "references": [
    "https://pubmed.ncbi.nlm.nih.gov/19295610/",
    "https://pubmed.ncbi.nlm.nih.gov/23271953/"
  ],
  "facets": [
    "plant-physiology"
  ],
  "added": "2026-09-07T13:18:48Z"
},
{
  "id": "angiosperm-double-fertilization",
  "label": "Angiosperm Double Fertilization",
  "aliases": [
    "flowering-plant double fertilization",
    "egg and central-cell fertilization"
  ],
  "definition": "Two sperm cells fuse separately with an egg and a central cell, initiating the embryo and endosperm.",
  "motionThesis": "Two delivered sperm follow separate routes and merge with one maternal egg nucleus or the two-nucleus central-cell complement, leaving distinct products.",
  "distinction": "A common angiosperm diploid-zygote and triploid-endosperm pattern, not two sperm fertilizing one egg.",
  "cycleSeconds": 14,
  "references": [
    "https://openstax.org/books/biology-2e/pages/32-2-pollination-and-fertilization"
  ],
  "facets": [
    "plant-physiology"
  ],
  "added": "2026-09-07T13:18:48Z"
}
]);
