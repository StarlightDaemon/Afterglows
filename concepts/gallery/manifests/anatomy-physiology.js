import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("human-health", "anatomy-physiology", [
  {
    "id": "cardiac-valve-cycle",
    "label": "Cardiac Valve Cycle",
    "aliases": [
      "heart valve cycle",
      "cardiac cycle"
    ],
    "definition": "Pressure-operated cardiac valves coordinate with chamber contraction to direct blood through the pulmonary and systemic circuits.",
    "motionThesis": "Atrial filling and contraction precede ventricular contraction, with inlet closure, an all-closed interval, outlet opening, and relaxation shown in order.",
    "distinction": "Four chamber-specific valves and pressure-dependent flow phases; inlet and outlet valves do not open together on one side.",
    "cycleSeconds": 8,
    "references": [
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/19-3-cardiac-cycle"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:15:49Z"
  },
  {
    "id": "venous-muscle-pump",
    "label": "Venous Muscle Pump",
    "aliases": [
      "skeletal-muscle pump",
      "venous pump"
    ],
    "definition": "Skeletal-muscle contraction compresses veins while one-way valves help direct blood toward the heart.",
    "motionThesis": "Muscles narrow a venous segment, closing its lower valve and opening its upper valve to expel blood upward, then relax as it refills from below.",
    "distinction": "An externally compressed vein with passive one-way valves rather than an independently contracting heart.",
    "cycleSeconds": 7,
    "references": [
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/20-2-blood-flow-blood-pressure-and-resistance"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:15:49Z"
  },
  {
    "id": "diaphragmatic-ventilation",
    "label": "Diaphragmatic Ventilation",
    "aliases": [
      "diaphragmatic breathing",
      "quiet ventilation"
    ],
    "definition": "Diaphragm contraction enlarges the thoracic cavity and helps draw air into the lungs.",
    "motionThesis": "The diaphragm descends and flattens as the lungs expand and air enters, then rises during passive recoil and expiration.",
    "distinction": "Coupled thoracic volume change and airflow; quiet expiration is not an active downward squeeze.",
    "cycleSeconds": 6,
    "references": [
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:15:49Z"
  },
  {
    "id": "alveolar-gas-exchange",
    "label": "Alveolar Gas Exchange",
    "aliases": [
      "pulmonary gas exchange"
    ],
    "definition": "Oxygen and carbon dioxide diffuse in opposite directions across the thin barrier between alveolar air and pulmonary blood.",
    "motionThesis": "Oxygen pairs leave the air sac as carbon-dioxide triads enter it, while a blood cell remains inside the adjacent capillary and becomes oxygenated.",
    "distinction": "Opposed molecular diffusion across two intact thin boundaries, rather than blood cells or gas bubbles crossing the barrier.",
    "cycleSeconds": 9,
    "references": [
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:15:49Z"
  },
  {
    "id": "alveolar-surfactant",
    "label": "Alveolar Surfactant",
    "aliases": [
      "pulmonary surfactant"
    ],
    "definition": "Pulmonary surfactant lowers surface tension and helps maintain alveolar stability as lung volume changes.",
    "motionThesis": "Two schematic air sacs experience inward compression, while surfactant molecules crowd a shrinking interface whose lumen stays wider than the comparison sac.",
    "distinction": "A qualitative surface-tension comparison, not a quantitative lung simulation or a rigid scaffold that guarantees prevention of collapse.",
    "cycleSeconds": 8,
    "references": [
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:15:49Z"
  },
  {
    "id": "mucociliary-escalator",
    "label": "Mucociliary Escalator",
    "aliases": [
      "mucociliary clearance"
    ],
    "definition": "Coordinated airway cilia move mucus and trapped material toward the throat.",
    "motionThesis": "Cilia execute strong contacting strokes and bent recovery strokes in sequence, carrying a mucus layer and its trapped specks in one direction.",
    "distinction": "Asymmetric metachronal ciliary transport rather than symmetric pendulum motion or rotation of rigid propellers.",
    "cycleSeconds": 5,
    "references": [
      "https://openstax.org/books/microbiology/pages/17-1-physical-defenses"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:15:49Z"
  },
  {
    "id": "swallowing-airway-protection",
    "label": "Swallowing Airway Protection",
    "aliases": [
      "deglutition airway protection"
    ],
    "definition": "Swallowing coordinates throat structures to guide a food bolus into the esophagus while protecting the airway.",
    "motionThesis": "The tongue advances a bolus as the larynx elevates and closes, the epiglottis folds, and the bolus passes behind the protected airway before breathing resumes.",
    "distinction": "Coordinated airway closure and posterior esophageal passage; the epiglottis is not the only protective structure.",
    "cycleSeconds": 9,
    "references": [
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-3-the-mouth-pharynx-and-esophagus"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:15:49Z"
  },
  {
    "id": "intestinal-segmentation",
    "label": "Intestinal Segmentation",
    "aliases": [
      "segmentation contractions"
    ],
    "definition": "Alternating intestinal contractions mix contents locally and increase their contact with the absorptive lining.",
    "motionThesis": "Paired constrictions alternate with a central constriction, redistributing substantial content patches in both directions with little net progression.",
    "distinction": "Local alternating mixing rather than a single downstream-traveling peristaltic wave.",
    "cycleSeconds": 8,
    "references": [
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-5-the-small-and-large-intestines"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:15:49Z"
  }
,{
  "id": "villus-nutrient-absorption",
  "label": "Villus Nutrient Absorption",
  "aliases": [
    "intestinal villus absorption"
  ],
  "definition": "Intestinal villi transfer absorbed nutrients toward blood capillaries and lymphatic lacteals.",
  "motionThesis": "Small absorbed nutrients enter a capillary loop while lipid-derived material is packaged in epithelial cells and enters the separate blind-ended lacteal.",
  "distinction": "Two anatomically separate transport routes with epithelial packaging, rather than whole dietary fat globules entering blood directly.",
  "cycleSeconds": 10,
  "references": [
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-5-the-small-and-large-intestines",
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-7-chemical-digestion-and-absorption-a-closer-look"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:36:20Z"
},
{
  "id": "glomerular-filtration",
  "label": "Glomerular Filtration",
  "aliases": [
    "renal filtration"
  ],
  "definition": "Glomerular capillaries filter water and small solutes into the nephron while retaining blood cells and most proteins.",
  "motionThesis": "Small solutes cross the capillary barrier into capsule space and leave through a tubule while larger blood components remain in the vascular route.",
  "distinction": "Size-selective filtration with separate vascular and urinary exits; useful substances are also filtered and can be reabsorbed later.",
  "cycleSeconds": 9,
  "references": [
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/25-4-microscopic-anatomy-of-the-kidney"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:36:20Z"
},
{
  "id": "nephron-countercurrent-multiplier",
  "label": "Nephron Countercurrent Multiplier",
  "aliases": [
    "loop of Henle countercurrent multiplication"
  ],
  "definition": "Different transport properties along the loop of Henle help establish a concentration gradient in the kidney medulla.",
  "motionThesis": "Opposed tubular flows accompany water loss from the descending limb and salt transport from a thick ascending segment as the surrounding gradient strengthens.",
  "distinction": "A simplified permeability-and-transport mechanism; the thick ascending limb does not release water and flow direction alone cannot create the gradient.",
  "cycleSeconds": 12,
  "references": [
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/25-6-tubular-reabsorption"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:36:20Z"
},
{
  "id": "micturition-reflex",
  "label": "Micturition Reflex",
  "aliases": [
    "urination reflex",
    "bladder emptying reflex"
  ],
  "definition": "Bladder stretch contributes to neural coordination of bladder contraction and outlet relaxation during urination, subject to higher and voluntary control.",
  "motionThesis": "Filling stretches the bladder wall, a neural loop precedes outlet relaxation, and coordinated wall contraction empties the sac before the outlet closes.",
  "distinction": "Coordinated neural and muscular emptying rather than a passive overflow valve; stretch is not the sole determinant of urination.",
  "cycleSeconds": 10,
  "references": [
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/25-2-gross-anatomy-of-urine-transport"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:36:20Z"
},
{
  "id": "sliding-filament-contraction",
  "label": "Sliding Filament Contraction",
  "aliases": [
    "sliding filament model",
    "sarcomere contraction"
  ],
  "definition": "Muscle shortens when myosin cross-bridges pull actin filaments past thick filaments.",
  "motionThesis": "Staggered attaching and pivoting heads draw fixed-length thin filaments inward as Z-discs approach while the thick filament keeps its length.",
  "distinction": "Relative filament sliding rather than shortening either filament or shrinking the A-band; cross-bridge cycling includes detachment.",
  "cycleSeconds": 8,
  "references": [
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/10-3-muscle-fiber-contraction-and-relaxation"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:36:20Z"
},
{
  "id": "antagonistic-elbow-muscles",
  "label": "Antagonistic Elbow Muscles",
  "aliases": [
    "elbow flexor-extensor pair",
    "biceps-triceps antagonism"
  ],
  "definition": "Opposing muscle groups alternately flex and extend the elbow through tension transmitted by tendons.",
  "motionThesis": "The forearm pivots about a fixed elbow while one muscle shortens and thickens, its antagonist lengthens, and both tendon insertions stay attached to the moving bone.",
  "distinction": "A simplified antagonistic pair with fixed attachment geometry; muscles exert pulling force rather than pushing bones.",
  "cycleSeconds": 8,
  "references": [
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/11-1-interactions-of-skeletal-muscles-their-fascicle-arrangement-and-their-lever-systems"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:36:20Z"
},
{
  "id": "bone-remodeling",
  "label": "Bone Remodeling",
  "aliases": [
    "bone resorption and deposition"
  ],
  "definition": "Coordinated bone resorption and deposition continually replace existing bone tissue.",
  "motionThesis": "A multinucleated osteoclast excavates a pit and departs, then separate osteoblasts refill that same site with matrix that mineralizes progressively.",
  "distinction": "Localized tissue turnover without a fracture; osteoclasts do not transform into osteoblasts and newly secreted matrix is not instantly mineralized.",
  "cycleSeconds": 12,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK279149/"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:36:20Z"
},
{
  "id": "fracture-repair",
  "label": "Fracture Repair",
  "aliases": [
    "bone fracture healing",
    "callus formation"
  ],
  "definition": "Fractured bone repairs through overlapping hematoma, callus, mineralization, and remodeling processes.",
  "motionThesis": "A jagged gap gains a hematoma and soft bridge, develops mineralized callus, and regains cortical continuity as excess callus recedes.",
  "distinction": "Healing tissue bridges a fixed fracture gap rather than bone ends sliding together or welding instantly; the stages overlap.",
  "cycleSeconds": 14,
  "references": [
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/6-5-fractures-bone-repair"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:36:20Z"
},
{
  "id": "evaporative-thermoregulation",
  "label": "Evaporative Thermoregulation",
  "aliases": [
    "sweat evaporation"
  ],
  "definition": "Evaporation of sweat transfers heat from the skin to the environment.",
  "motionThesis": "A coiled gland delivers sweat to the surface, where escaping vapor accompanies a local cooling change.",
  "distinction": "Cooling follows evaporation rather than sweat production alone; the scene assumes conditions that permit evaporation.",
  "cycleSeconds": 10,
  "references": [
    "https://openstax.org/books/anatomy-and-physiology/pages/24-6-energy-and-heat-balance"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:51:55Z"
},
{
  "id": "insulin-mediated-glucose-uptake",
  "label": "Insulin-Mediated Glucose Uptake",
  "aliases": [
    "GLUT4 translocation"
  ],
  "definition": "Insulin signaling increases surface GLUT4 transporters in muscle and adipose cells, supporting glucose uptake.",
  "motionThesis": "Insulin binds a receptor, an intracellular vesicle fuses with the membrane, and glucose then crosses through the inserted transporters.",
  "distinction": "The insulin receptor and GLUT4 carrier are separate proteins; this regulated route does not represent every tissue or all glucose uptake.",
  "cycleSeconds": 12,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK537322/",
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/17-9-the-endocrine-pancreas"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:51:55Z"
},
{
  "id": "hemoglobin-oxygen-loading",
  "label": "Hemoglobin Oxygen Loading",
  "aliases": [
    "hemoglobin oxygen binding"
  ],
  "definition": "Hemoglobin reversibly binds up to four oxygen molecules and supports oxygen delivery from lungs to tissues.",
  "motionThesis": "Four heme sites fill in an oxygen-rich setting, then two release intact oxygen molecules as the surrounding availability decreases.",
  "distinction": "A schematic occupancy cycle inside a red cell rather than free hemoglobin, oxygen splitting, or a quantitative binding curve.",
  "cycleSeconds": 10,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK54103/"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:51:55Z"
},
{
  "id": "bile-emulsification",
  "label": "Bile Emulsification",
  "aliases": [
    "fat emulsification"
  ],
  "definition": "Bile components help disperse dietary fat into smaller droplets that expose more surface to digestive enzymes.",
  "motionThesis": "Amphipathic surface symbols surround a large fat globule as mixing stretches it into several separately coated droplets.",
  "distinction": "Physical dispersion preserves the depicted fat area; it does not cut chemical bonds or depict lipase digestion, and the symbols abstract bile components.",
  "cycleSeconds": 10,
  "references": [
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6-accessory-organs-in-digestion-the-liver-pancreas-and-gallbladder"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T11:51:55Z"
}
]);
