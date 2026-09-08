import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("life-sciences", "ecology-evolution", [
  {
    "id": "natural-selection",
    "label": "Natural Selection",
    "aliases": [
      "differential reproductive success",
      "selection on heritable variation"
    ],
    "definition": "Heritable variants change in frequency when their carriers contribute differently to subsequent generations.",
    "motionThesis": "More conspicuous moths are removed before breeding, and surviving pairs produce an offspring cohort with a higher dark-morph proportion.",
    "distinction": "A simplified heritable two-morph example with new offspring, not individuals changing color to meet a need or a full Mendelian cross.",
    "cycleSeconds": 14,
    "references": [
      "https://openstax.org/books/biology-2e/pages/19-3-adaptive-evolution"
    ],
    "facets": [
      "population-biology"
    ],
    "added": "2026-09-07T13:23:59Z"
  },
  {
    "id": "genetic-drift",
    "label": "Genetic Drift",
    "aliases": [
      "neutral allele-frequency drift",
      "random genetic sampling"
    ],
    "definition": "Finite-population sampling can change allele frequencies between generations even when the alleles have equal fitness.",
    "motionThesis": "Copies of stochastically sampled parental alleles form successive diploid cohorts whose composition changes without a survival advantage.",
    "distinction": "One recorded neutral inheritance realization, not selection, mutation of existing individuals, or a universal direction of change.",
    "cycleSeconds": 16,
    "references": [
      "https://openstax.org/books/biology-2e/pages/19-2-population-genetics"
    ],
    "facets": [
      "population-biology"
    ],
    "added": "2026-09-07T13:23:59Z"
  },
  {
    "id": "allopatric-speciation",
    "label": "Allopatric Speciation",
    "aliases": [
      "geographic speciation",
      "divergence after geographic isolation"
    ],
    "definition": "Geographically separated populations can diverge until reproductive barriers persist even after contact is restored.",
    "motionThesis": "A barrier stops gene flow, isolated generations develop different courtship rhythms, and renewed contact leaves cross-lineage signals unmatched while within-lineage pairs reproduce.",
    "distinction": "An illustrative possible behavioral barrier, not a claim that every isolated population speciates or a historical firefly case.",
    "cycleSeconds": 18,
    "references": [
      "https://openstax.org/books/biology-2e/pages/18-2-formation-of-new-species"
    ],
    "facets": [
      "population-biology"
    ],
    "added": "2026-09-07T13:23:59Z"
  },
  {
    "id": "predator-prey-cycle",
    "label": "Predator-Prey Cycle",
    "aliases": [
      "coupled consumer-resource oscillation",
      "predator population lag"
    ],
    "definition": "Feedback between prey availability and predation can produce population oscillations in which predator abundance follows prey abundance.",
    "motionThesis": "A sampled Lotka-Volterra cycle shows prey growth followed by predator increase, prey depletion, predator decline, and prey recovery.",
    "distinction": "An idealized population model with glyphs representing abundance units, not an individual chase or a claim that every ecosystem oscillates periodically.",
    "cycleSeconds": 14,
    "references": [
      "https://cmp.phys.ufl.edu/PHZ4710/files/unit5/Lotka-Volterra.html",
      "https://openstax.org/books/biology-2e/pages/45-6-community-ecology"
    ],
    "facets": [
      "population-biology"
    ],
    "added": "2026-09-07T13:23:59Z"
  },
{
  "id": "keystone-predator-removal",
  "label": "Keystone Predator Removal",
  "aliases": [
    "keystone predation experiment",
    "predator-mediated coexistence"
  ],
  "definition": "Removing a predator that limits a dominant competitor can allow that competitor to displace other primary space holders.",
  "motionThesis": "Matched rocky-shore patches diverge after one sea star is removed, allowing mussels to cover other sessile organisms in the removal patch.",
  "distinction": "A sea-star and mussel primary-space example, not a claim that all predators are keystones or that community-wide diversity necessarily declines.",
  "cycleSeconds": 14,
  "references": [
    "https://www.usgs.gov/publications/revisiting-paines-1966-sea-star-removal-experiment-most-cited-empirical-article",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC5598783/"
  ],
  "facets": [
    "population-biology"
  ],
  "added": "2026-09-07T13:35:00Z"
},
{
  "id": "ecological-succession",
  "label": "Ecological Succession",
  "aliases": [
    "community succession",
    "primary-succession sequence"
  ],
  "definition": "Community composition changes as organisms colonize and modify a site over time.",
  "motionThesis": "Pioneer growth on exposed substrate contributes to soil development before grasses, shrubs, and woody plants establish and change in dominance.",
  "distinction": "One illustrative primary-succession trajectory rather than a universal fixed sequence or guaranteed permanent climax.",
  "cycleSeconds": 16,
  "references": [
    "https://openstax.org/books/biology-2e/pages/45-6-community-ecology"
  ],
  "facets": [
    "population-biology"
  ],
  "added": "2026-09-07T13:35:00Z"
},
{
  "id": "metapopulation-recolonization",
  "label": "Metapopulation Recolonization",
  "aliases": [
    "patch recolonization",
    "extinction-colonization dynamics"
  ],
  "definition": "Dispersal from occupied habitat patches can re-establish a local population after its extinction.",
  "motionThesis": "One suitable patch loses its resident, remains empty, and then receives a migrant whose reproduction restores occupancy while other patches persist.",
  "distinction": "Local extinction and recolonization rather than resurrection, global extinction, or automatic recolonization of every patch.",
  "cycleSeconds": 14,
  "references": [
    "https://www.nature.com/articles/ncomms14504",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC5321745/"
  ],
  "facets": [
    "population-biology"
  ],
  "added": "2026-09-07T13:35:00Z"
}
]);
