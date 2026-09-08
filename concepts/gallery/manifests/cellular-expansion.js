import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("life-sciences", "cellular-microbiology", [
  {
    "id": "apoptotic-fragmentation",
    "label": "Apoptotic Fragmentation",
    "aliases": [
      "apoptotic-body formation",
      "apoptotic blebbing"
    ],
    "definition": "During apoptosis a cell condenses and can partition into membrane-enclosed bodies for clearance.",
    "motionThesis": "A shrinking cell condenses chromatin, develops connected blebs with narrowing necks, and separates into closed bodies that retain their contents.",
    "distinction": "A common morphological sequence rather than lytic bursting; bodies need not all contain nuclear material and clearance can begin earlier.",
    "cycleSeconds": 12,
    "references": [
      "https://www.ncbi.nlm.nih.gov/books/NBK26873/",
      "https://www.ncbi.nlm.nih.gov/books/NBK499821/"
    ],
    "facets": [
      "molecular-biology"
    ],
    "added": "2026-09-07T12:47:18Z"
  },
  {
    "id": "macroautophagy",
    "label": "Macroautophagy",
    "aliases": [
      "autophagosome formation",
      "autophagic sequestration"
    ],
    "definition": "A double-membrane autophagosome encloses cytoplasmic material and delivers it for lysosomal degradation.",
    "motionThesis": "A cup closes around internal cargo, its outer membrane fuses with a lysosome, and the retained inner membrane and cargo are subsequently degraded.",
    "distinction": "Intracellular sequestration rather than extracellular phagocytosis, with outer-membrane fusion preceding inner-membrane breakdown.",
    "cycleSeconds": 14,
    "references": [
      "https://www.nobelprize.org/prizes/medicine/2016/advanced-information/",
      "https://www.ncbi.nlm.nih.gov/mesh/2016410"
    ],
    "facets": [
      "molecular-biology"
    ],
    "added": "2026-09-07T12:47:18Z"
  },
{
  "id": "kinesin-cargo-transport",
  "label": "Kinesin Cargo Transport",
  "aliases": [
    "kinesin-1 stepping",
    "microtubule cargo transport"
  ],
  "definition": "A processive kinesin dimer uses ATP-linked head coordination to carry cargo along a microtubule.",
  "motionThesis": "Alternating rear heads pass the bound leading head, advancing a continuously tethered vesicle along a polar track.",
  "distinction": "Conventional plus-end-directed kinesin rather than a claim about every kinesin or two heads sliding together.",
  "cycleSeconds": 12,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK26888/",
    "https://pubmed.ncbi.nlm.nih.gov/18004302/"
  ],
  "facets": [
    "molecular-biology"
  ],
  "added": "2026-09-07T13:06:42Z"
},
{
  "id": "atp-synthase-rotary-catalysis",
  "label": "ATP Synthase Rotary Catalysis",
  "aliases": [
    "F-type ATP synthase",
    "chemiosmotic rotary catalysis"
  ],
  "definition": "Ion-gradient-driven rotor motion couples to catalytic conformational changes that synthesize ATP.",
  "motionThesis": "Proton translocation turns a membrane rotor and central shaft while stationary catalytic sites cycle through binding, synthesis, and release.",
  "distinction": "The rotor turns inside a stator; protons power conformational change rather than becoming ATP, and no fixed ion-to-ATP ratio is asserted.",
  "cycleSeconds": 12,
  "references": [
    "https://pdb101.rcsb.org/motm/72"
  ],
  "facets": [
    "molecular-biology"
  ],
  "added": "2026-09-07T13:06:42Z"
},
{
  "id": "sodium-potassium-pump",
  "label": "Sodium-Potassium Pump",
  "aliases": [
    "Na+/K+-ATPase",
    "sodium-potassium ATPase"
  ],
  "definition": "ATP-linked conformational changes typically export three sodium ions and import two potassium ions per transport cycle.",
  "motionThesis": "An inward-facing pocket binds three sodium ions, switches access to release them outside, and returns two potassium ions to the cytoplasm.",
  "distinction": "Alternating access rather than an open channel or simultaneous five-ion crossing; phosphorylation is shown on the cytoplasmic domain.",
  "cycleSeconds": 14,
  "references": [
    "https://openstax.org/books/biology-2e/pages/5-3-active-transport"
  ],
  "facets": [
    "molecular-biology"
  ],
  "added": "2026-09-07T13:06:42Z"
},
{
  "id": "plant-cell-plasmolysis",
  "label": "Plant Cell Plasmolysis",
  "aliases": [
    "osmotic protoplast withdrawal",
    "plant plasmolysis"
  ],
  "definition": "Water loss in a hypertonic environment can shrink a plant protoplast away from its cell wall.",
  "motionThesis": "Net outward water movement reduces vacuole and protoplast size while the wall stays fixed and organelles remain inside the withdrawing membrane.",
  "distinction": "The extracellular solution occupies the wall-membrane gap; external solute remains outside and the wall does not shrink.",
  "cycleSeconds": 12,
  "references": [
    "https://openstax.org/books/biology-2e/pages/5-2-passive-transport"
  ],
  "facets": [
    "molecular-biology"
  ],
  "added": "2026-09-07T13:06:42Z"
}
]);
