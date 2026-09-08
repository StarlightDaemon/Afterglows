import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("chemistry", "molecular-chemistry", [
  {
    "id": "heterogeneous-hydrogenation",
    "label": "Heterogeneous Hydrogenation",
    "aliases": [
      "surface-catalyzed alkene hydrogenation",
      "catalytic addition of hydrogen"
    ],
    "definition": "A solid catalyst surface promotes hydrogen addition across an unsaturated bond while the saturated product subsequently desorbs.",
    "motionThesis": "Adsorbed hydrogen separates, ethene binds nearby, two new carbon-hydrogen bonds form as the double bond becomes single, and ethane leaves the unchanged surface.",
    "distinction": "Adsorption, reaction, and desorption on a reusable solid catalyst; a schematic sequence rather than a resolved atomistic trajectory.",
    "cycleSeconds": 14,
    "references": [
      "https://openstax.org/books/organic-chemistry/pages/8-6-reduction-of-alkenes-hydrogenation"
    ],
    "facets": [
      "catalysis"
    ],
    "added": "2026-09-07T13:35:00Z"
  },
{
  "id": "competitive-enzyme-inhibition",
  "label": "Competitive Enzyme Inhibition",
  "aliases": [
    "reversible competitive inhibition",
    "mutually exclusive substrate binding"
  ],
  "definition": "Competitive inhibitor binding excludes substrate binding to an enzyme, reducing substrate turnover at a given substrate concentration.",
  "motionThesis": "An unchanged inhibitor occupies a pocket while substrate waits, then leaves so substrate can bind, convert, and release products.",
  "distinction": "A reversible same-pocket example; competitive inhibition more generally means mutually exclusive binding and need not involve exactly the same physical site.",
  "cycleSeconds": 14,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK92001/"
  ],
  "facets": [
    "molecular-processes"
  ],
  "added": "2026-09-07T13:39:42Z"
},
{
  "id": "micelle-self-assembly",
  "label": "Micelle Self-Assembly",
  "aliases": [
    "surfactant aggregation",
    "aqueous micellization"
  ],
  "definition": "Amphiphilic molecules can form dynamic aggregates with hydrophobic interiors and hydrophilic surfaces in water.",
  "motionThesis": "Intact head-and-tail molecules assemble with tails inward, then exchange a monomer while retaining a micellar aggregate.",
  "distinction": "A single-layer aqueous micelle rather than a bilayer vesicle or covalent polymer, with no universal aggregation number or critical concentration asserted.",
  "cycleSeconds": 14,
  "references": [
    "https://www.ncbi.nlm.nih.gov/books/NBK26871/",
    "https://goldbook.iupac.org/terms/view/M03889"
  ],
  "facets": [
    "molecular-processes"
  ],
  "added": "2026-09-07T13:39:42Z"
},
{
  "id": "liquid-liquid-extraction",
  "label": "Liquid-Liquid Extraction",
  "aliases": [
    "solvent extraction",
    "liquid-liquid distribution"
  ],
  "definition": "A solute distributes between two immiscible liquid phases, allowing transfer into a selected extraction phase.",
  "motionThesis": "Mixing expands liquid contact, four of six persistent solute tokens transfer to the upper phase, and settling restores two separated layers.",
  "distinction": "Solute partition rather than sedimentation or chemical destruction; the organic layer is not universally upper and extraction need not be complete.",
  "cycleSeconds": 14,
  "references": [
    "https://www.chem.rochester.edu/notvoodoo/pages/solvents/extraction.php",
    "https://goldbook.iupac.org/terms/view/L03587/pdf"
  ],
  "facets": [
    "molecular-processes"
  ],
  "added": "2026-09-07T13:39:42Z"
},
{
  "id": "ion-exchange-softening",
  "label": "Ion-Exchange Softening",
  "aliases": [
    "cation-exchange water softening",
    "hardness-ion exchange"
  ],
  "definition": "A cation-exchange resin removes dissolved hardness ions by exchanging its counterions, commonly sodium, for calcium or magnesium.",
  "motionThesis": "One divalent calcium ion replaces two sodium counterions at fixed negative sites, then a brine step restores the sodium form and removes calcium.",
  "distinction": "Charge-balanced exchange and regeneration rather than sieving, complete deionization, or calcium becoming sodium; bulk solvent and counter-anions are omitted.",
  "cycleSeconds": 14,
  "references": [
    "https://www.epa.gov/watersense/cation-exchange-water-softeners",
    "https://www.epa.gov/sdwa/overview-drinking-water-treatment-technologies"
  ],
  "facets": [
    "molecular-processes"
  ],
  "added": "2026-09-07T13:39:42Z"
},
{
  "id": "adsorption-breakthrough",
  "label": "Adsorption Breakthrough",
  "aliases": [
    "fixed-bed breakthrough",
    "advancing adsorption zone"
  ],
  "definition": "As adsorption capacity is progressively used along a fixed bed, contaminant begins appearing in its effluent.",
  "motionThesis": "Inlet molecules bind progressively farther down a bed, and later molecules escape before the last illustrated site fills.",
  "distinction": "Finite surface uptake rather than sieving; significant breakthrough can precede complete saturation.",
  "cycleSeconds": 18,
  "references": [
    "https://www.epa.gov/air-emissions-monitoring-knowledge-base/monitoring-control-technique-activated-carbon-adsorber"
  ],
  "facets": [
    "molecular-processes"
  ],
  "added": "2026-09-07T13:50:12Z"
},
{
  "id": "buffer-action",
  "label": "Buffer Action",
  "aliases": [
    "acid-base buffering",
    "conjugate-pair buffering"
  ],
  "definition": "A weak conjugate acid-base pair consumes modest added acid or base, limiting the resulting pH change.",
  "motionThesis": "Hydronium protonates a conjugate-base unit, then hydroxide removes a proton from a weak-acid unit, forming water in both challenges.",
  "distinction": "Finite chemical buffering rather than perfect pH constancy or unlimited acid absorption; bulk solvent and spectator ions are omitted.",
  "cycleSeconds": 16,
  "references": [
    "https://openstax.org/books/chemistry-atoms-first-2e/pages/14-6-buffers"
  ],
  "facets": [
    "molecular-processes"
  ],
  "added": "2026-09-07T13:50:12Z"
},
{
  "id": "sn2-inversion",
  "label": "SN2 Inversion",
  "aliases": [
    "Walden inversion in SN2",
    "backside nucleophilic substitution"
  ],
  "definition": "A concerted backside substitution replaces a leaving group while inverting the tetrahedral arrangement at the reacting carbon.",
  "motionThesis": "A nucleophile approaches opposite a departing group while three identity-preserving substituents sweep through a planar transition geometry into the inverted arrangement.",
  "distinction": "One concerted event with no carbocation intermediate; inversion need not change an R descriptor into S.",
  "cycleSeconds": 14,
  "references": [
    "https://openstax.org/books/organic-chemistry/pages/11-2-the-sn2-reaction"
  ],
  "facets": [
    "molecular-processes"
  ],
  "added": "2026-09-07T13:50:12Z"
},
{
  "id": "fischer-esterification",
  "label": "Fischer Esterification",
  "aliases": [
    "acid-catalyzed ester formation",
    "Fischer-Speier esterification"
  ],
  "definition": "Acid-catalyzed reaction of a carboxylic acid with an alcohol forms an ester and water through reversible addition and elimination steps.",
  "motionThesis": "Protonation enables alcohol addition, proton transfer creates a water leaving group, and carbonyl re-formation precedes release of the acid catalyst.",
  "distinction": "The alcohol oxygen remains in the ester and the acid hydroxyl oxygen leaves in water in this forward sequence; solvent proton shuttles are omitted.",
  "cycleSeconds": 18,
  "references": [
    "https://openstax.org/books/organic-chemistry/pages/21-3-reactions-of-carboxylic-acids"
  ],
  "facets": [
    "molecular-processes"
  ],
  "added": "2026-09-07T13:50:12Z"
},
{
  "id": "chain-growth-polymerization",
  "label": "Chain-Growth Polymerization",
  "aliases": [
    "active-center polymer growth",
    "vinyl-chain propagation"
  ],
  "definition": "Successive monomers add at a reactive chain center, transferring that center to the newly extended chain.",
  "motionThesis": "An initiating radical captures three intact carbon pairs as their double bonds become single, leaving a growing zigzag chain with the radical at its new end.",
  "distinction": "A radical example rather than all chain-growth mechanisms; hydrogens are implicit, incorporated atoms persist, and termination is not shown.",
  "cycleSeconds": 16,
  "references": [
    "https://openstax.org/books/organic-chemistry/pages/31-1-chain-growth-polymers"
  ],
  "facets": [
    "molecular-processes"
  ],
  "added": "2026-09-07T13:57:08Z"
},
{
  "id": "elastomer-crosslinking",
  "label": "Elastomer Crosslinking",
  "aliases": [
    "rubber crosslink network",
    "elastomer vulcanization"
  ],
  "definition": "Sparse links between flexible polymer chains form a network that limits chain sliding and supports recovery after deformation.",
  "motionThesis": "Crosslinks join separate chains, and the connected network extends and recoils by changing strand conformation while every link remains attached.",
  "distinction": "Coarse-grained strands retain contour length, rather than chemical bonds stretching by the macroscopic strain; no universal sulfur-only mechanism is asserted.",
  "cycleSeconds": 16,
  "references": [
    "https://openstax.org/books/organic-chemistry/pages/14-6-diene-polymers-natural-and-synthetic-rubbers"
  ],
  "facets": [
    "molecular-processes"
  ],
  "added": "2026-09-07T13:57:08Z"
},
{
  "id": "sol-gel-network-formation",
  "label": "Sol-Gel Network Formation",
  "aliases": [
    "silica gelation by condensation",
    "sol-to-gel network formation"
  ],
  "definition": "Reactive precursors or sol species join into an extended network that immobilizes liquid within a gel.",
  "motionThesis": "Silanol-bearing units form oxygen bridges and release water until separate species connect into one solvent-filled network.",
  "distinction": "A silica condensation stage after hydrolysis, with solvent retained rather than instantly evaporated or converted into a dense crystal.",
  "cycleSeconds": 18,
  "references": [
    "https://www.nist.gov/publications/mass-spectrometry-spin-glass-low-k-dielectric-precursors",
    "https://goldbook.iupac.org/terms/view/ST07151"
  ],
  "facets": [
    "molecular-processes"
  ],
  "added": "2026-09-07T13:57:08Z"
}
]);
