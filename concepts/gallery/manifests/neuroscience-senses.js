import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("human-health", "neuroscience-senses", [
  {
    "id": "pupillary-light-reflex",
    "label": "Pupillary Light Reflex",
    "aliases": [
      "consensual pupil response"
    ],
    "definition": "Light entering one eye normally produces constriction of both pupils through bilateral neural pathways.",
    "motionThesis": "A beam enters one eye, then both dark pupil apertures narrow after a short delay while the outer eyes and irises stay fixed.",
    "distinction": "Bilateral direct and consensual responses to unilateral light, with no claim that the dark aperture is itself a muscle.",
    "cycleSeconds": 8,
    "references": [
      "https://www.ncbi.nlm.nih.gov/books/NBK553169/"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:51:55Z"
  },
  {
    "id": "lens-accommodation",
    "label": "Lens Accommodation",
    "aliases": [
      "near accommodation"
    ],
    "definition": "Ciliary muscle contraction reduces zonular tension so the lens becomes more convex for near vision.",
    "motionThesis": "An approaching object sends more divergent rays, ciliary supports move inward, and a thicker lens redirects the rays to the same retinal point.",
    "distinction": "The retina stays fixed and the lens changes curvature as tension falls; the drawing simplifies ray optics and omits convergence.",
    "cycleSeconds": 10,
    "references": [
      "https://www.ncbi.nlm.nih.gov/books/NBK482132/"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:51:55Z"
  },
  {
    "id": "cochlear-tonotopy",
    "label": "Cochlear Tonotopy",
    "aliases": [
      "basilar membrane frequency mapping"
    ],
    "definition": "Different sound frequencies produce traveling-wave peaks at different positions along the cochlear basilar membrane.",
    "motionThesis": "Waves progress from the narrow base toward the wider apex, with a high-frequency peak near the base and a lower-frequency peak farther along.",
    "distinction": "A spatially delayed traveling wave with a growing and then decaying envelope rather than a standing string or a scanning isolated peak.",
    "cycleSeconds": 12,
    "references": [
      "https://www.ncbi.nlm.nih.gov/books/NBK10946/"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:51:55Z"
  },
  {
    "id": "semicircular-canal-sensing",
    "label": "Semicircular Canal Sensing",
    "aliases": [
      "vestibular angular acceleration sensing"
    ],
    "definition": "Semicircular canals sense head rotation through transient endolymph-driven cupula deflection and associated hair-bundle bending.",
    "motionThesis": "Head rotation begins, fluid briefly lags and bends the cupula, adaptation reduces the bend during steady rotation, and stopping reverses it transiently.",
    "distinction": "A time-compressed transient angular-motion response rather than sustained counterrotation or gravity sensing.",
    "cycleSeconds": 12,
    "references": [
      "https://www.ncbi.nlm.nih.gov/books/NBK10863/",
      "https://www.ncbi.nlm.nih.gov/books/NBK11135/"
    ],
    "facets": [
      "physiology"
    ],
    "added": "2026-09-07T11:51:55Z"
  },
{
  "id": "patellar-stretch-reflex",
  "label": "Patellar Stretch Reflex",
  "aliases": [
    "knee-jerk reflex",
    "patellar reflex"
  ],
  "definition": "A brief tendon-induced stretch activates quadriceps muscle spindles and spinal circuitry that contracts quadriceps to extend the knee.",
  "motionThesis": "A tap below the kneecap stretches a spindle in the thigh, a sensory signal reaches the spinal cord, and a motor return precedes knee extension.",
  "distinction": "The illustrated excitatory reflex path is monosynaptic; the spindle is in muscle and the fuller reflex includes antagonist inhibition.",
  "cycleSeconds": 9,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK531502/"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:04:26Z"
},
{
  "id": "saltatory-conduction",
  "label": "Saltatory Conduction",
  "aliases": [
    "node-to-node conduction"
  ],
  "definition": "Electrical current spreads under myelin while action potentials regenerate at exposed nodes of Ranvier.",
  "motionThesis": "A node activates, subdued current spreads along a continuous axon under the next myelin sleeve, and the following node activates as its predecessor becomes refractory.",
  "distinction": "Axial current and local regeneration rather than sparks crossing empty gaps or individual ions traveling the length of the axon.",
  "cycleSeconds": 8,
  "references": [
    "https://openstax.org/books/introduction-behavioral-neuroscience/pages/2-4-mechanisms-of-neural-signaling"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:04:26Z"
},
{
  "id": "crossed-extensor-reflex",
  "label": "Crossed Extensor Reflex",
  "aliases": [
    "crossed extension reflex"
  ],
  "definition": "Spinal pathways coordinate withdrawal from a painful limb stimulus with contralateral extension that supports posture.",
  "motionThesis": "Contact beneath one foot precedes sensory and crossed spinal signals, after which that leg flexes while the opposite extensor activates over a planted foot.",
  "distinction": "A simplified polysynaptic bilateral response rather than the monosynaptic stretch reflex or simultaneous withdrawal of both legs.",
  "cycleSeconds": 10,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK11091/"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:04:26Z"
},
{
  "id": "pacinian-adaptation",
  "label": "Pacinian Adaptation",
  "aliases": [
    "lamellar corpuscle adaptation"
  ],
  "definition": "Pacinian corpuscles respond strongly to changing deformation and adapt rapidly during a sustained stimulus.",
  "motionThesis": "A pad depresses nested lamellae, a brief axonal burst subsides during the held indentation, and pad release produces another brief response.",
  "distinction": "Qualitative mechanical filtering with onset and offset responses rather than sustained firing or nerve exhaustion.",
  "cycleSeconds": 10,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK10895/",
    "https://pubmed.ncbi.nlm.nih.gov/14194104/"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:04:26Z"
},
{
  "id": "retinal-center-surround-response",
  "label": "Retinal Center-Surround Response",
  "aliases": [
    "ON-center receptive field"
  ],
  "definition": "In a classic ON-center retinal ganglion cell, central light increases firing while illumination of the surrounding region opposes that response.",
  "motionThesis": "The same axon shows baseline, increased, suppressed, and modest firing during darkness, central illumination, annular illumination, and uniform illumination.",
  "distinction": "A functional receptive-field diagram rather than a cell membrane; the selected ON-center response does not describe every ganglion cell.",
  "cycleSeconds": 12,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK11550/"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:04:26Z"
},
{
  "id": "vestibulo-ocular-reflex",
  "label": "Vestibulo-Ocular Reflex",
  "aliases": [
    "VOR",
    "gaze stabilization reflex"
  ],
  "definition": "Vestibular reflex pathways produce compensatory eye movements that help stabilize gaze during head movement.",
  "motionThesis": "A head oscillates beneath a fixed target while both eyes rotate relative to it so their world-space gaze lines remain aimed at that target.",
  "distinction": "Compensatory eye rotation rather than pupil translation or a sustained nystagmus reset; the diagram omits pathway detail.",
  "cycleSeconds": 8,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK10987/"
  ],
  "facets": [
    "physiology"
  ],
  "added": "2026-09-07T12:04:26Z"
}
]);
