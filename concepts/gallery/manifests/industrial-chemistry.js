import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("chemistry", "industrial-chemistry", [
{
  "id": "catalytic-cracking",
  "label": "Catalytic Cracking",
  "aliases": [
    "zeolite cracking",
    "catalytic hydrocarbon cracking"
  ],
  "definition": "Hot hydrocarbons contact a catalyst and undergo carbon-carbon bond cleavage and related reactions, producing smaller hydrocarbon molecules.",
  "motionThesis": "One persistent eight-carbon backbone adsorbs at a catalyst and separates into four-carbon alkane and alkene backbones before both products depart.",
  "distinction": "An atom-balanced net C8H18 to C4H10 plus C4H8 example with one tracked hydrogen transfer and other hydrogens implicit; intermediates and alternative products are omitted rather than implying an elementary concerted scissor reaction.",
  "cycleSeconds": 14,
  "references": [
    "https://www.eia.gov/todayinenergy/detail.php?id=9150",
    "https://www.sciencedirect.com/science/article/pii/0021951787903095"
  ],
  "facets": [
    "catalysis"
  ],
  "added": "2026-09-07T14:58:02Z"
},
{
  "id": "haber-bosch-synthesis",
  "label": "Haber-Bosch Synthesis",
  "aliases": [
    "Haber process",
    "catalytic ammonia synthesis"
  ],
  "definition": "Industrial ammonia synthesis reacts nitrogen with hydrogen over a catalyst at elevated temperature and pressure; on iron, adsorbed reactants dissociate and nitrogen is hydrogenated before ammonia desorbs.",
  "motionThesis": "One nitrogen molecule and three hydrogen pairs dissociate on iron, then three staged additions per nitrogen yield two departing ammonia molecules with all eight atoms retained.",
  "distinction": "An iron-surface mechanism schematic with staged hydrogenation, not complete conversion per industrial pass or the entire industrial recycle plant.",
  "cycleSeconds": 16,
  "references": [
    "https://www.nobelprize.org/uploads/2018/06/popular-chemistryprize2007.pdf",
    "https://www.nobelprize.org/prizes/chemistry/2007/8923-nitrogen-becomes-artificial-fertilizer/",
    "https://www.fertilizer.org/wp-content/uploads/2023/01/HABER.pdf"
  ],
  "facets": [
    "catalysis"
  ],
  "added": "2026-09-07T14:59:58Z"
},
{
  "id": "chlor-alkali-membrane-cell",
  "label": "Chlor-Alkali Membrane Cell",
  "aliases": [
    "membrane chlor-alkali electrolysis",
    "brine electrolysis"
  ],
  "definition": "A cation-selective membrane separates brine electrolysis compartments, yielding chlorine at the anode and hydrogen plus aqueous sodium hydroxide at the cathode.",
  "motionThesis": "Chloride pairs discharge on the positive side, water supplies hydrogen on the negative side, and sodium ions cross the divider while both gas products remain separated.",
  "distinction": "The balanced net two sodium chlorides plus two waters yield chlorine, hydrogen, and two aqueous sodium hydroxides; membrane transport is predominantly sodium ions with water, and dissolved ions are not drawn as bonded sodium hydroxide molecules.",
  "cycleSeconds": 16,
  "references": [
    "https://www.chlorineinstitute.org/chlorine-manufacture",
    "https://eurochlor.org/app/uploads/2026/01/eco-profile-study-update-september-2022.pdf"
  ],
  "facets": [
    "electrochemistry"
  ],
  "added": "2026-09-07T15:03:54Z"
},
{
  "id": "basic-oxygen-steelmaking",
  "label": "Basic Oxygen Steelmaking",
  "aliases": [
    "basic oxygen furnace",
    "BOF",
    "Linz-Donawitz process",
    "oxygen converter"
  ],
  "definition": "Oxygen blown into carbon-rich molten iron oxidizes excess carbon and other constituents; carbon leaves largely in carbon-monoxide-rich off-gas while oxide products enter a basic slag, refining the melt into steel.",
  "motionThesis": "An oxygen jet meets a liquid-metal bath, and six tracked dissolved-carbon marks become rising carbon-monoxide pairs while slag remains a distinct layer and some carbon stays dissolved.",
  "distinction": "A balanced carbon-removal example within liquid-metal refining, not ore reduction, whole-bath oxidation, or a quantitative carbon-content model.",
  "cycleSeconds": 16,
  "references": [
    "https://hub.steeluniversity.org/catalog/module/217",
    "https://magazine.primetals.com/app/uploads/2022/06/2009_Metals-Mining-Magazine_1_Environment.pdf",
    "https://magazine.primetals.com/2015/05/01/estad-presentations-on-steelmaking/"
  ],
  "facets": [
    "metal-refining"
  ],
  "added": "2026-09-07T15:08:37Z"
},
{
  "id": "froth-flotation",
  "label": "Froth Flotation",
  "aliases": [
    "mineral flotation",
    "bubble flotation"
  ],
  "definition": "Selectively hydrophobic mineral surfaces attach to air bubbles in a slurry and rise into a recoverable froth, while predominantly wetted gangue remains in the pulp.",
  "motionThesis": "Selected grains pin to bubble interfaces and ride into an overflowing froth, while unselected grains remain submerged or deflect around passing bubbles.",
  "distinction": "An idealized interfacial-wettability separation with persistent grains, not density-only sorting or guaranteed complete recovery; entrainment and detachment are omitted.",
  "cycleSeconds": 12,
  "references": [
    "https://www.metso.com/globalassets/insights/ebooks/mo-basics-in-mineral-processing-handbook_lowres.pdf",
    "https://www.metso.com/insights/blog/mining-and-metals/high-intensity-air-injection-spargers---the-fundamental-technology-in-column-flotation/"
  ],
  "facets": [
    "mineral-processing"
  ],
  "added": "2026-09-07T15:11:28Z"
},
{
  "id": "spray-drying",
  "label": "Spray Drying",
  "aliases": [
    "atomization drying",
    "spray dryer"
  ],
  "definition": "A liquid feed is atomized into droplets that contact hot drying gas; solvent evaporates and the retained nonvolatile material becomes collectable dry particles.",
  "motionThesis": "A liquid jet divides into descending droplets whose solvent envelopes shrink around persistent solid contents, while vapor exits with the gas and dry particles fall into a collector.",
  "distinction": "A compact-particle example of solvent removal from liquid feed, not spray congealing or a universal final-particle morphology; material glyphs and rates are schematic.",
  "cycleSeconds": 12,
  "references": [
    "https://www.gea.com/assets/drying-spray-atomizer-fluid-bed-particle-formation-chemical-gea-170518.pdf",
    "https://www.gea.com/assets/170517/"
  ],
  "facets": [
    "particle-processing"
  ],
  "added": "2026-09-07T15:14:59Z"
},
{
  "id": "freeze-drying",
  "label": "Freeze Drying",
  "aliases": [
    "lyophilization",
    "sublimation drying"
  ],
  "definition": "A frozen product loses ice by sublimation under reduced pressure during primary drying, then secondary drying removes residual bound moisture and leaves a porous solid matrix.",
  "motionThesis": "A sublimation front retreats through a fixed scaffold as vapor deposits as ice on a colder condenser, followed by a smaller release of bound moisture.",
  "distinction": "The product starts already frozen and retains its solid scaffold; the depicted mechanism is not liquid boiling, matrix shrinkage, or current regulatory guidance from the historical source.",
  "cycleSeconds": 18,
  "references": [
    "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/lyophilization-parenteral-793"
  ],
  "facets": [
    "drying"
  ],
  "added": "2026-09-07T15:17:41Z"
},
{
  "id": "gas-solid-fluidization",
  "label": "Gas-Solid Fluidization",
  "aliases": [
    "fluidized particle bed",
    "incipient gas fluidization"
  ],
  "definition": "Upward gas flow supports and expands a bed of solid particles when drag balances their effective weight.",
  "motionThesis": "Thirty-six persistent grains expand into an individually moving bed under upward gas flow and resettle as the flow subsides.",
  "distinction": "An illustrative gas-solid bed with conserved grains and no liquid; particle paths demonstrate expansion rather than a quantitative hydrodynamic simulation.",
  "cycleSeconds": 14,
  "references": [
    "https://archive.nptel.ac.in/content/storage2/courses/103104043/lecture32/32_2.htm",
    "https://archive.nptel.ac.in/content/storage2/courses/103107096/module6/lecture4/lecture4.pdf"
  ],
  "facets": [
    "particle-processing"
  ],
  "added": "2026-09-07T15:26:20Z"
},
{
  "id": "vacuum-degassing-of-steel",
  "label": "Vacuum Degassing of Steel",
  "aliases": [
    "ladle vacuum degassing",
    "vacuum tank degassing",
    "VD"
  ],
  "definition": "Reduced pressure promotes removal of dissolved gases from molten steel, while argon stirring renews the liquid-gas interface and assists transport.",
  "motionThesis": "Six of eight dissolved hydrogen markers collect into three hydrogen pairs inside rising argon bubbles and leave through a vacuum duct, while two remain in the melt.",
  "distinction": "A hydrogen-removal example with persistent material identities, not oxygen blowing, steel boiling, or complete elimination of dissolved gas.",
  "cycleSeconds": 16,
  "references": [
    "https://archive.nptel.ac.in/content/storage2/courses/113104059/lecture25/25_6.htm",
    "https://archive.nptel.ac.in/content/storage2/courses/113104059/lecture25/25_2.htm",
    "https://tenova.com/technologies/vacuum-degasser-vdvtdvod"
  ],
  "facets": [
    "metal-refining"
  ],
  "added": "2026-09-07T15:27:14Z"
}
]);
