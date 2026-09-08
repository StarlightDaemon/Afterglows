import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("human-health", "immunity-medicine", [
  {
    "id": "hemostatic-plug",
    "label": "Hemostatic Plug",
    "aliases": [
      "platelet plug formation",
      "primary hemostasis"
    ],
    "definition": "Platelet adhesion and aggregation at vascular injury form a plug that is reinforced by coagulation-generated fibrin.",
    "motionThesis": "A wall defect leaks, arriving platelets activate and accumulate, and a separate fibrin mesh reinforces the local seal while the lumen stays open.",
    "distinction": "Platelets and fibrin retain separate identities, with overlapping stages and continued passage through the vessel.",
    "cycleSeconds": 12,
    "references": [
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/18-5-hemostasis"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T12:04:26Z"
  },
  {
    "id": "phagocytosis",
    "label": "Phagocytosis",
    "aliases": [
      "phagocytic engulfment",
      "phagolysosome formation"
    ],
    "definition": "A phagocyte encloses a particle in a phagosome that can interact with lysosomal compartments for degradation.",
    "motionThesis": "Pseudopods surround a microbe, enclosure produces a distinct phagosome, and subsequent lysosome fusion precedes fragmentation inside it.",
    "distinction": "The membrane changes topology and the cargo stays outside the nucleus; the illustrated successful degradation is not guaranteed for all microbes.",
    "cycleSeconds": 12,
    "references": [
      "https://openstax.org/books/microbiology/pages/17-4-pathogen-recognition-and-phagocytosis"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T12:04:26Z"
  },
{
  "id": "antibody-neutralization",
  "label": "Antibody Neutralization",
  "aliases": [
    "neutralizing antibody binding"
  ],
  "definition": "Antibodies that bind particular pathogen or toxin epitopes can block attachment to target cells.",
  "motionThesis": "A Fab tip docks on a viral attachment spike, and the bound antibody obstructs that interface as the intact complex approaches a cellular receptor.",
  "distinction": "Specific attachment blockade rather than agglutination, phagocytosis, or universal protection by any antibody.",
  "cycleSeconds": 10,
  "references": [
    "https://openstax.org/books/microbiology/pages/18-1-overview-of-specific-adaptive-immunity"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:16:10Z"
},
{
  "id": "leukocyte-diapedesis",
  "label": "Leukocyte Diapedesis",
  "aliases": [
    "leukocyte transmigration",
    "inflammatory extravasation"
  ],
  "definition": "Leukocytes adhere to vascular endothelium and cross it to enter surrounding tissue.",
  "motionThesis": "A rolling cell arrests at a junction, extends through it, draws its deforming nucleus and cell body across, and leaves the junction to close behind it.",
  "distinction": "A paracellular example with continued red-cell flow above; not every transmigration route passes between endothelial cells.",
  "cycleSeconds": 12,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK57148/"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:16:10Z"
},
{
  "id": "clonal-selection",
  "label": "Clonal Selection",
  "aliases": [
    "antigen-specific lymphocyte selection",
    "clonal expansion"
  ],
  "definition": "Appropriate activation selects lymphocytes with matching antigen specificity and promotes expansion of that population.",
  "motionThesis": "An antigen fits one of three receptor motifs, a separate activation cue follows, and only the matching cell divides into descendants with the same motif.",
  "distinction": "Selection of an existing specificity rather than antigen-directed receptor redesign; supporting activation signals are abbreviated.",
  "cycleSeconds": 12,
  "references": [
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/21-4-the-adaptive-immune-response-b-lymphocytes-and-antibodies"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:16:10Z"
},
{
  "id": "immunological-memory",
  "label": "Immunological Memory",
  "aliases": [
    "secondary immune response",
    "memory B-cell response"
  ],
  "definition": "Persistent antigen-specific memory cells support a faster, often stronger response to subsequent exposure to the same antigen.",
  "motionThesis": "A first encounter produces a delayed small effector group and a surviving memory cell, then the same antigen returns and a shorter delay precedes a larger secretory response.",
  "distinction": "Persistence across two encounters rather than selection among receptor types; duration and protection vary, and the second response is not instantaneous.",
  "cycleSeconds": 16,
  "references": [
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/21-4-the-adaptive-immune-response-b-lymphocytes-and-antibodies"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:16:10Z"
},
{
  "id": "balloon-expanded-stent",
  "label": "Balloon-Expanded Stent",
  "aliases": [
    "balloon-expandable stent deployment"
  ],
  "definition": "Inflation of a balloon catheter expands a mounted stent against an arterial narrowing, leaving the stent in place after catheter removal.",
  "motionThesis": "A compressed mesh reaches a narrowed lumen, expands with the balloon as plaque deforms, and remains expanded while the balloon deflates and withdraws.",
  "distinction": "A retained open mesh rather than a solid sleeve; plaque remains present and blood does not traverse the inflated balloon.",
  "cycleSeconds": 12,
  "references": [
    "https://www.medtronic.com/en-ca/l/your-health/treatments-therapies/coronary-artery-disease/therapy.html"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:16:10Z"
},
{
  "id": "hemodialysis-membrane-exchange",
  "label": "Hemodialysis Membrane Exchange",
  "aliases": [
    "hemodialysis",
    "hollow-fiber dialysis"
  ],
  "definition": "A dialyzer allows selected small solutes to exchange between blood and dialysis solution across a separating membrane.",
  "motionThesis": "Blood and dialysis solution flow oppositely along a hollow fiber while illustrated waste solutes diffuse outward and red cells remain within the blood route.",
  "distinction": "A solute-diffusion example, not fluid mixing or pressure-driven ultrafiltration; other solutes can have different gradients.",
  "cycleSeconds": 10,
  "references": [
    "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:16:10Z"
},
{
  "id": "re-epithelialization",
  "label": "Re-Epithelialization",
  "aliases": [
    "epithelial wound closure",
    "epidermal resurfacing"
  ],
  "definition": "Epithelial cells migrate and proliferate to restore coverage of an injured surface.",
  "motionThesis": "Leading cells flatten and advance from both epithelial margins across a wound bed, followers replenish the sheet, and the meeting surface gains thickness.",
  "distinction": "Surface coverage rather than whole-wound contraction, teleporting cells, or a depiction of all deeper tissue repair.",
  "cycleSeconds": 14,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK532977/",
    "https://www.ncbi.nlm.nih.gov/books/NBK3938/"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:16:10Z"
},
{
  "id": "sprouting-angiogenesis",
  "label": "Sprouting Angiogenesis",
  "aliases": [
    "capillary sprouting",
    "angiogenic vessel formation"
  ],
  "definition": "Endothelial sprouts extend from existing vessels and can connect to establish new vascular pathways.",
  "motionThesis": "Attached tips extend filopodia as stalks grow, the two sprouts meet, a continuous lumen forms, and only then does a red cell cross the connection.",
  "distinction": "Sprouting and anastomosis rather than an isolated vessel appearing or blood flowing through a blind tip; vascular growth has other forms.",
  "cycleSeconds": 14,
  "references": [
    "https://pubmed.ncbi.nlm.nih.gov/12810700/",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC5866357/"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:16:10Z"
}
]);
