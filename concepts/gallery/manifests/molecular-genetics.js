import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("life-sciences", "molecular-genetics", [
  {
    "id": "replication-fork",
    "label": "Replication Fork",
    "aliases": [
      "DNA replication fork",
      "leading and lagging strand synthesis"
    ],
    "definition": "DNA unwinding exposes parental templates for continuous leading-strand and discontinuous lagging-strand synthesis.",
    "motionThesis": "A fork advances as one new strand extends toward it while successive fragments extend away from it before primer replacement and nick sealing.",
    "distinction": "Both new strands grow five-prime to three-prime; the parental strands stay continuous, and ligase seals a nick after gap filling.",
    "cycleSeconds": 12,
    "references": [
      "https://openstax.org/books/biology-2e/pages/14-4-dna-replication-in-prokaryotes"
    ],
    "facets": [
      "molecular-biology"
    ],
    "added": "2026-09-07T12:33:07Z"
  },
  {
    "id": "dna-transcription",
    "label": "DNA Transcription",
    "aliases": [
      "RNA synthesis",
      "transcription elongation"
    ],
    "definition": "RNA polymerase builds an RNA strand complementary to one DNA template strand.",
    "motionThesis": "A moving polymerase opens a local DNA bubble, elongates a trailing RNA at its bound three-prime end, and releases it as the DNA reanneals.",
    "distinction": "One RNA product from one template rather than two daughter DNA molecules; a bacterial schematic omits eukaryotic processing.",
    "cycleSeconds": 10,
    "references": [
      "https://openstax.org/books/biology-2e/pages/15-2-prokaryotic-transcription"
    ],
    "facets": [
      "molecular-biology"
    ],
    "added": "2026-09-07T12:33:07Z"
  },
  {
    "id": "rna-splicing",
    "label": "RNA Splicing",
    "aliases": [
      "pre-mRNA splicing",
      "spliceosomal intron removal"
    ],
    "definition": "Spliceosomal processing removes an intron and joins its flanking exons.",
    "motionThesis": "An intron folds into a branched lariat after the first cleavage, then exon ligation releases the loop-and-tail intron and leaves a joined RNA chain.",
    "distinction": "Two ordered RNA reactions rather than DNA excision or removal of all noncoding sequence; retained exons need not all encode protein.",
    "cycleSeconds": 12,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/6206566/",
      "https://www.ncbi.nlm.nih.gov/books/NBK9864/"
    ],
    "facets": [
      "molecular-biology"
    ],
    "added": "2026-09-07T12:33:07Z"
  },
  {
    "id": "ribosomal-translation",
    "label": "Ribosomal Translation",
    "aliases": [
      "translation elongation",
      "peptide elongation"
    ],
    "definition": "A ribosome decodes messenger RNA through transfer RNAs and extends a polypeptide.",
    "motionThesis": "A charged A-site tRNA accepts the P-site peptide, then tRNAs and intact mRNA translocate by one codon as the empty E-site tRNA exits.",
    "distinction": "One elongation cycle with peptide transfer before translocation, rather than a whole protein being completed or free amino acids attaching directly.",
    "cycleSeconds": 12,
    "references": [
      "https://openstax.org/books/biology-2e/pages/15-5-ribosomes-and-protein-synthesis"
    ],
    "facets": [
      "molecular-biology"
    ],
    "added": "2026-09-07T12:33:07Z"
  },
  {
    "id": "lac-operon-induction",
    "label": "Lac Operon Induction",
    "aliases": [
      "lac repressor induction",
      "allolactose derepression"
    ],
    "definition": "Allolactose binding reduces the lac repressor’s operator affinity, permitting increased transcription under appropriate regulatory conditions.",
    "motionThesis": "An inducer changes repressor binding geometry and releases the operator, allowing polymerase to advance while an upstream activation cue remains present.",
    "distinction": "A specified low-glucose activating context; derepression alone is not maximal activation, and basal expression can occur before induction.",
    "cycleSeconds": 12,
    "references": [
      "https://openstax.org/books/biology-2e/pages/16-2-prokaryotic-gene-regulation"
    ],
    "facets": [
      "molecular-biology"
    ],
    "added": "2026-09-07T12:33:07Z"
  },
  {
    "id": "nucleosome-packaging",
    "label": "Nucleosome Packaging",
    "aliases": [
      "nucleosomal DNA wrapping",
      "histone-core packaging"
    ],
    "definition": "A DNA duplex wraps around a histone core to form a repeating unit of chromatin.",
    "motionThesis": "Exposed linker contour feeds into partial turns around an existing eight-part histone core, then relaxes slightly while both DNA backbones remain continuous.",
    "distinction": "A nucleosome with approximately one and two-thirds turns rather than a generic single-strand spool; linker histone H1 is not part of the core octamer.",
    "cycleSeconds": 12,
    "references": [
      "https://www.genome.gov/genetics-glossary/Nucleosome",
      "https://www.ncbi.nlm.nih.gov/books/NBK26834/"
    ],
    "facets": [
      "molecular-biology"
    ],
    "added": "2026-09-07T12:33:07Z"
  },
  {
    "id": "polymerase-chain-reaction",
    "label": "Polymerase Chain Reaction",
    "aliases": [
      "PCR",
      "thermal DNA amplification"
    ],
    "definition": "Repeated denaturation, primer annealing, and primer extension amplify a selected DNA segment.",
    "motionThesis": "A bounded duplex separates into templates, primers bind opposite ends, and five-prime-to-three-prime extension produces two duplexes before a repeat produces four.",
    "distinction": "Idealized amplification beginning with an already bounded product, rather than a claim of exact target-length products in the first genomic-template cycle.",
    "cycleSeconds": 16,
    "references": [
      "https://www.neb.com/en/applications/dna-amplification-pcr-and-qpcr/pcr",
      "https://www.genome.gov/genetics-glossary/Polymerase-Chain-Reaction-PCR"
    ],
    "facets": [
      "molecular-biology"
    ],
    "added": "2026-09-07T12:33:07Z"
  },
  {
    "id": "dna-gel-electrophoresis",
    "label": "DNA Gel Electrophoresis",
    "aliases": [
      "agarose DNA separation"
    ],
    "definition": "An electric field separates DNA fragments through a porous gel, with shorter linear fragments usually migrating farther during the same run.",
    "motionThesis": "Populations leave shared wells toward the positive electrode and separate into sample and reference-ladder bands at different distances.",
    "distinction": "Visible bands contain many stained molecules; distance rather than band width encodes size, and co-migration does not establish sequence identity.",
    "cycleSeconds": 12,
    "references": [
      "https://www.addgene.org/protocols/gel-electrophoresis/",
      "https://www.genome.gov/genetics-glossary/Electrophoresis"
    ],
    "facets": [
      "molecular-biology"
    ],
    "added": "2026-09-07T12:33:07Z"
  },
{
  "id": "restriction-ligation-cloning",
  "label": "Restriction-Ligation Cloning",
  "aliases": [
    "restriction cloning",
    "cohesive-end ligation"
  ],
  "definition": "Compatible restriction-generated DNA ends are joined by ligase to assemble recombinant DNA.",
  "motionThesis": "Two staggered cuts release a plasmid segment, a contrasting insert pairs with the exposed ends, and sealing both strands completes the recombinant circle.",
  "distinction": "Compatible-end annealing precedes covalent ligation; the result alone does not demonstrate transformation or gene expression.",
  "cycleSeconds": 12,
  "references": [
    "https://www.addgene.org/protocols/dna-ligation/",
    "https://www.addgene.org/protocols/subcloning/"
  ],
  "facets": [
    "molecular-biology"
  ],
  "added": "2026-09-07T12:47:18Z"
},
{
  "id": "crispr-cas9-targeting",
  "label": "CRISPR-Cas9 Targeting",
  "aliases": [
    "guide-RNA-directed Cas9 cleavage",
    "SpCas9 targeting"
  ],
  "definition": "A guide RNA directs Cas9 to a compatible DNA target adjacent to a PAM, where the complex can cleave both DNA strands.",
  "motionThesis": "PAM engagement precedes an expanding guide-DNA hybrid and displaced strand, followed by two cuts whose ends remain clamped until enzyme withdrawal.",
  "distinction": "Targeted cleavage rather than guaranteed precise repair; the PAM is in the DNA, and the unlettered diagram does not assert an exact nucleotide offset.",
  "cycleSeconds": 12,
  "references": [
    "https://www.addgene.org/guides/crispr/",
    "https://blog.addgene.org/crispr-cas9-faqs-answered"
  ],
  "facets": [
    "molecular-biology"
  ],
  "added": "2026-09-07T12:47:18Z"
},
{
  "id": "mitotic-chromosome-segregation",
  "label": "Mitotic Chromosome Segregation",
  "aliases": [
    "sister-chromatid segregation",
    "mitotic anaphase"
  ],
  "definition": "Sister chromatids separate and move toward opposite spindle poles during mitosis.",
  "motionThesis": "Three bioriented chromosomes split into continuous sister chromatids whose pole-facing centromeres lead while attached spindle fibers shorten.",
  "distinction": "Each destination receives one copy of each represented chromosome; separating chromatids is distinct from cytokinesis.",
  "cycleSeconds": 10,
  "references": [
    "https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle"
  ],
  "facets": [
    "molecular-biology"
  ],
  "added": "2026-09-07T12:47:18Z"
},
{
  "id": "meiotic-reduction",
  "label": "Meiotic Reduction",
  "aliases": [
    "meiosis I",
    "reductional division"
  ],
  "definition": "Homolog separation in meiosis I reduces chromosome-set number while sister chromatids remain paired.",
  "motionThesis": "Two homolog pairs segregate as intact duplicated chromosomes, giving each nascent nucleus one long and one short chromosome with sister chromatids still joined.",
  "distinction": "The unit separated is a homolog rather than a sister chromatid; only meiosis I is shown, with no intervening replication or four-gamete result.",
  "cycleSeconds": 12,
  "references": [
    "https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis"
  ],
  "facets": [
    "molecular-biology"
  ],
  "added": "2026-09-07T12:47:18Z"
},
{
  "id": "meiotic-crossing-over",
  "label": "Meiotic Crossing Over",
  "aliases": [
    "homologous recombination in prophase I",
    "nonsister chromatid exchange"
  ],
  "definition": "Homologous nonsister chromatids exchange corresponding DNA segments during meiotic prophase I.",
  "motionThesis": "The inner two chromatids of a tetrad form an exchange junction and resolve into reciprocal combinations while the outer sisters retain their original segments.",
  "distinction": "One illustrated reciprocal crossover produces two recombinant and two nonrecombinant chromatids rather than whole-chromosome exchange.",
  "cycleSeconds": 12,
  "references": [
    "https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis"
  ],
  "facets": [
    "molecular-biology"
  ],
  "added": "2026-09-07T12:47:18Z"
},
{
  "id": "bacterial-conjugation",
  "label": "Bacterial Conjugation",
  "aliases": [
    "conjugative plasmid transfer",
    "F-plasmid transfer"
  ],
  "definition": "Direct contact allows a donor bacterium to transfer DNA to a recipient through conjugation machinery.",
  "motionThesis": "A pilus establishes contact, a plasmid strand threads through a bridge, and replacement and complementary synthesis leave a duplex plasmid in each cell.",
  "distinction": "An F-plasmid example with both chromosomes retained and donor copy maintained, rather than binary fission or transfer of an intact rigid ring.",
  "cycleSeconds": 14,
  "references": [
    "https://openstax.org/books/microbiology/pages/11-6-how-asexual-prokaryotes-achieve-genetic-diversity",
    "https://openstax.org/books/microbiology/pages/11-2-dna-replication"
  ],
  "facets": [
    "molecular-biology"
  ],
  "added": "2026-09-07T12:47:18Z"
}
]);
