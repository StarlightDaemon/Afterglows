// Unified Animation Concepts catalog.
//
// Historical provenance and direct canonical expansion shards remain separate;
// this module exposes one definitive taxonomy and one collection to the UI.

import {
  CATEGORIES,
  SECTIONS,
  placementFor,
} from "./taxonomy.js";
import { CONCEPTS as legacyConcepts } from "./manifests/concepts.js";
import { CONCEPTS as legacyPhysics } from "./manifests/physics.js";
import { CONCEPTS as statistics } from "./manifests/statistics.js";
import { CONCEPTS as optimization } from "./manifests/optimization.js";
import { CONCEPTS as statisticalLearning } from "./manifests/statistical-learning.js";
import { CONCEPTS as algorithms } from "./manifests/algorithms.js";
import { CONCEPTS as informationCoding } from "./manifests/information-coding.js";

import { CONCEPTS as networkSystems } from "./manifests/network-systems.js";

import { CONCEPTS as distributedComputing } from "./manifests/distributed-computing.js";

import { CONCEPTS as runtimeStorage } from "./manifests/runtime-storage.js";

import { CONCEPTS as anatomyPhysiology } from "./manifests/anatomy-physiology.js";

import { CONCEPTS as neuroscienceSenses } from "./manifests/neuroscience-senses.js";

import { CONCEPTS as immunityMedicine } from "./manifests/immunity-medicine.js";

import { CONCEPTS as molecularGenetics } from "./manifests/molecular-genetics.js";
import { CONCEPTS as cellularExpansion } from "./manifests/cellular-expansion.js";
import { CONCEPTS as terrestrialExpansion } from "./manifests/terrestrial-expansion.js";
import { CONCEPTS as ecologyEvolution } from "./manifests/ecology-evolution.js";
import { CONCEPTS as molecularChemistry } from "./manifests/molecular-chemistry.js";
import { CONCEPTS as materialsProcessing } from "./manifests/materials-processing.js";
import { CONCEPTS as industrialChemistry } from "./manifests/industrial-chemistry.js";

import { CONCEPTS as perceptionCommunication } from "./manifests/perception-communication.js";

import { CONCEPTS as controlRobotics } from "./manifests/control-robotics.js";

import { CONCEPTS as instrumentationSignals } from "./manifests/instrumentation-signals.js";

import { CONCEPTS as energySystems } from "./manifests/energy-systems.js";

import { CONCEPTS as oceanographyHydrology } from "./manifests/oceanography-hydrology.js";

function canonicalEntry(source, concept) {
  const placement = placementFor(source, concept);
  const stem = concept.tag.replace(/^(?:concept|physics)-/, "");
  return {
    ...concept,
    source,
    section: placement.section,
    category: placement.category,
    module: `./concepts/${placement.section}/${placement.category}/${stem}-concept.js`,
  };
}

const unifiedConcepts = [
  ...legacyConcepts.map((concept) => canonicalEntry("concepts", concept)),
  ...legacyPhysics.map((concept) => canonicalEntry("physics", concept)),
  ...statistics,
  ...optimization,
  ...statisticalLearning,
  ...algorithms,
  ...informationCoding,
  ...networkSystems,
  ...distributedComputing,
  ...runtimeStorage,
  ...anatomyPhysiology,
  ...neuroscienceSenses,
  ...immunityMedicine,
  ...molecularGenetics,
  ...cellularExpansion,
  ...terrestrialExpansion,
  ...ecologyEvolution,
  ...molecularChemistry,
  ...materialsProcessing,
  ...industrialChemistry,
  ...perceptionCommunication,
  ...controlRobotics,
  ...instrumentationSignals,
  ...energySystems,
  ...oceanographyHydrology,
];

export { CATEGORIES, SECTIONS };
export const CONCEPTS = unifiedConcepts;
