import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("chemistry", "materials-processing", [
  {
    "id": "edge-dislocation-glide",
    "label": "Edge Dislocation Glide",
    "aliases": [
      "edge-dislocation slip",
      "glide of an extra half-plane"
    ],
    "definition": "An edge dislocation moves along its slip plane through local atomic rearrangements, leaving a permanent relative lattice displacement behind it.",
    "motionThesis": "Local neighbor bonds switch around an advancing extra-half-plane tip, and the defect exits at a surface that retains a one-spacing slip step.",
    "distinction": "An atom-preserving kinematic construction of conservative glide, not vacancy-mediated climb, a crack, or a measured elastic-field solution.",
    "cycleSeconds": 16,
    "references": [
      "https://eng.libretexts.org/Bookshelves/Materials_Science/TLP_Library_I/22%3A_Introduction_to_Dislocations/22.6%3A_Dislocation_in_3D",
      "https://eng.libretexts.org/Bookshelves/Materials_Science/TLP_Library_I/22%3A_Introduction_to_Dislocations/22.5%3A_Dislocation_Motion"
    ],
    "facets": [
      "material-deformation"
    ],
    "added": "2026-09-07T13:57:08Z"
  },
{
  "id": "precipitation-strengthening",
  "label": "Precipitation Strengthening",
  "aliases": [
    "precipitate hardening",
    "particle resistance to dislocation motion"
  ],
  "definition": "Fine second-phase particles increase the stress required for dislocations to move through a material.",
  "motionThesis": "An advancing dislocation meets two precipitates, remains pinned at them, and bows between them under continued shear.",
  "distinction": "A pinning and bowing example before bypass, without claiming that all precipitates are impenetrable or that larger particles always strengthen a material.",
  "cycleSeconds": 14,
  "references": [
    "https://ocw.mit.edu/courses/3-40j-physical-metallurgy-fall-2009/d5c8cf6303cce79bedcdb66175cf51ff_MIT3_40JF09_lec08.pdf"
  ],
  "facets": [
    "material-deformation"
  ],
  "added": "2026-09-07T14:16:38Z"
},
{
  "id": "curvature-driven-grain-growth",
  "label": "Curvature-Driven Grain Growth",
  "aliases": [
    "capillarity-driven boundary migration",
    "isotropic grain-boundary shrinkage"
  ],
  "definition": "In an ideal curvature-driven model, grain boundaries migrate to reduce interfacial energy, allowing one crystal orientation to replace another.",
  "motionThesis": "A circular grain shrinks as its boundary migrates inward, while the surrounding grain occupies the swept region.",
  "distinction": "An isolated isotropic two-dimensional model with area decreasing linearly, not a universal kinetic law for real polycrystals or loss of material.",
  "cycleSeconds": 14,
  "references": [
    "https://www.math.cmu.edu/CNA/Publications/publications2001/001abs/001abs.htm",
    "https://www.andrew.cmu.edu/user/suter/SFLi_Thesis_2011_web.pdf"
  ],
  "facets": [
    "microstructure-evolution"
  ],
  "added": "2026-09-07T14:17:41Z"
},
{
  "id": "solid-state-sintering",
  "label": "Solid-State Sintering",
  "aliases": [
    "diffusion-driven powder consolidation",
    "solid-state neck growth"
  ],
  "definition": "Diffusional mass transport bonds solid particles through growing necks and, for densifying transport routes, reduces pore space.",
  "motionThesis": "Two contacting solid particles develop a neck while material redistribution and center approach consolidate the pair.",
  "distinction": "A densifying route below melting with conserved schematic cross-sectional area, rather than an exact three-dimensional volume model; surface diffusion alone need not densify particles.",
  "cycleSeconds": 16,
  "references": [
    "https://eng.libretexts.org/Bookshelves/Materials_Science/TLP_Library_II/17%3A_Powder_Processing/17.8%3A_Powder_Consolidation_by_Cold_PRessing_and_Sintering",
    "https://www.nist.gov/publications/solid-state-sintering"
  ],
  "facets": [
    "microstructure-evolution"
  ],
  "added": "2026-09-07T14:18:43Z"
},
{
  "id": "martensitic-transformation",
  "label": "Martensitic Transformation",
  "aliases": [
    "diffusionless displacive transformation",
    "coordinated martensite formation"
  ],
  "definition": "A martensitic transformation changes crystal structure through coordinated atomic displacements without long-range diffusion, producing a shape strain.",
  "motionThesis": "A planar transformation front sweeps through persistent lattice sites, leaving a differently sheared product lattice and retained shape change.",
  "distinction": "A compatible schematic displacive lattice transformation, not the exact crystallography of a specific steel or a quantitative Bain-strain model.",
  "cycleSeconds": 14,
  "references": [
    "https://www.phase-trans.msm.cam.ac.uk/2008/Steel_Microstructure/SM.html"
  ],
  "facets": [
    "microstructure-evolution"
  ],
  "added": "2026-09-07T14:19:33Z"
},
{
  "id": "shape-memory-recovery",
  "label": "Shape-Memory Recovery",
  "aliases": [
    "one-way shape-memory effect",
    "thermally activated shape recovery"
  ],
  "definition": "A suitably processed shape-memory alloy can retain a low-temperature deformation and recover its trained shape when heating reverses its martensitic transformation.",
  "motionThesis": "A thin straight wire bends under load, stays bent after the load withdraws, and straightens only when heat arrives.",
  "distinction": "A one-way trained-alloy example within its recoverable strain range, preserving schematic neutral-axis length; cooling alone does not bend the wire again.",
  "cycleSeconds": 16,
  "references": [
    "https://www.nasa.gov/?p=38367",
    "https://www.phase-trans.msm.cam.ac.uk/2002/martensite.html"
  ],
  "facets": [
    "material-deformation"
  ],
  "added": "2026-09-07T14:22:44Z"
},
{
  "id": "glass-tempering",
  "label": "Glass Tempering",
  "aliases": [
    "thermal glass tempering",
    "residual surface compression"
  ],
  "definition": "Rapid surface cooling of hot glass followed by core cooling leaves compressive surface layers balanced by a tensile interior.",
  "motionThesis": "The outside cools first, the core cools later, and opposing residual stress directions remain after temperature becomes uniform.",
  "distinction": "Thermal prestressing before failure, with final surface compression appearing after core cooling; the glass remains brittle.",
  "cycleSeconds": 16,
  "references": [
    "https://ocw.mit.edu/courses/3-35-fracture-and-fatigue-fall-2003/308d771dcfc727dc11307cc1717e8d8a_ps2_soln.pdf"
  ],
  "facets": [
    "microstructure-evolution"
  ],
  "added": "2026-09-07T14:23:17Z"
},
{
  "id": "laminated-glass-retention",
  "label": "Laminated Glass Retention",
  "aliases": [
    "polymer-interlayer fragment retention",
    "post-fracture laminated glass"
  ],
  "definition": "In laminated glass, a bonded polymer interlayer can remain continuous after glass plies fracture and retain many of their fragments.",
  "motionThesis": "Impact creates separate rigid glass pieces while a continuous flexible middle layer stretches between them and holds the fractured span.",
  "distinction": "A schematic example of fragment adhesion and polymer bridging, without implying that all fragments remain attached or that the broken panel retains its original strength.",
  "cycleSeconds": 14,
  "references": [
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC10976227/"
  ],
  "facets": [
    "material-deformation"
  ],
  "added": "2026-09-07T14:25:00Z"
},
{
  "id": "pitting-corrosion",
  "label": "Pitting Corrosion",
  "aliases": [
    "localized passive-film corrosion",
    "chloride-assisted pit propagation"
  ],
  "definition": "Local breakdown of a passive surface film can permit concentrated anodic metal dissolution, producing a growing cavity whose local solution chemistry sustains attack.",
  "motionThesis": "A small film opening leads to an undercut liquid-filled cavity as metal ions leave its receding wall and chloride enrichment and acidity develop inside.",
  "distinction": "A schematic stable-pit example with persistent damage, not a universal growth law; chloride remains an ion, and many film defects can repassivate.",
  "cycleSeconds": 16,
  "references": [
    "https://libraetd.lib.virginia.edu/public_view/gq67jr16q"
  ],
  "facets": [
    "microstructure-evolution"
  ],
  "added": "2026-09-07T14:26:32Z"
},
{
  "id": "aluminum-anodizing",
  "label": "Aluminum Anodizing",
  "aliases": [
    "anodic aluminum oxidation",
    "anodic oxide growth"
  ],
  "definition": "An applied anodic potential converts surface aluminum into a thicker adherent oxide through ionic transport across the film.",
  "motionThesis": "The metal-oxide boundary recedes into aluminum while a compact oxide layer grows outward and inward under applied positive polarity.",
  "distinction": "A compact barrier-film example grown from the substrate, with schematic thickness and metal-consumption ratios; no porous or dyed coating is implied.",
  "cycleSeconds": 16,
  "references": [
    "https://knowledge.electrochem.org/encycl/art-a02-anodizing.htm"
  ],
  "facets": [
    "surface-engineering"
  ],
  "added": "2026-09-07T14:33:38Z"
},
{
  "id": "electroplating",
  "label": "Electroplating",
  "aliases": [
    "electrodeposition",
    "cathodic metal coating"
  ],
  "definition": "Electric current reduces dissolved metal ions onto a conductive workpiece, building a metal coating at the cathode.",
  "motionThesis": "Copper leaves a soluble positive anode as ions and joins the negative workpiece as neutral metal, thickening its coating.",
  "distinction": "A one-sided soluble copper-anode example with equal schematic lost and deposited areas, not substrate oxidation or liquid paint application.",
  "cycleSeconds": 16,
  "references": [
    "https://www.open.edu/openlearn/science-maths-technology/engineering-technology/electroplating",
    "https://www2.chem.wisc.edu/deptfiles/genchem/netorial/rottosen/tutorial/modules/electrochemistry/07electrolysis/18_71.htm"
  ],
  "facets": [
    "surface-engineering"
  ],
  "added": "2026-09-07T14:35:14Z"
},
{
  "id": "atomic-layer-deposition",
  "label": "Atomic Layer Deposition",
  "aliases": [
    "ALD",
    "sequential self-limiting deposition"
  ],
  "definition": "Alternating, separated precursor exposures build a thin film through surface reactions that stop when available reactive sites are consumed.",
  "motionThesis": "One precursor saturates finite sites, excess vapor clears, a second precursor reacts with the bound groups, and the sequence repeats to coat a trench conformally.",
  "distinction": "Abstract precursor and functional-group symbols illustrate two separated self-limiting exposures and purges; one cycle need not form a complete crystallographic monolayer.",
  "cycleSeconds": 18,
  "references": [
    "https://www.aps.anl.gov/files/APS-Uploads/ASDSeminars/2015/2015-04-15_Mane.pdf",
    "https://www.anl.gov/sites/www/files/2018-06/ALDbrochure2014.pdf"
  ],
  "facets": [
    "surface-engineering"
  ],
  "added": "2026-09-07T14:37:57Z"
},
{
  "id": "photolithographic-pattern-transfer",
  "label": "Photolithographic Pattern Transfer",
  "aliases": [
    "masked positive-resist lithography",
    "resist-defined etch transfer"
  ],
  "definition": "Patterned light changes a resist’s solubility so development creates a mask that transfers selected openings into an underlying film by etching.",
  "motionThesis": "Light reaches two apertures, exposed positive resist dissolves, the uncovered film is etched, and remaining resist strips away to reveal matching gaps.",
  "distinction": "A positive-resist process with separate exposure, development, schematic directional selective etching, and stripping; the substrate remains intact.",
  "cycleSeconds": 18,
  "references": [
    "https://imse.washu.edu/facilities/fabrication-techniques.html",
    "https://scif.ucmerced.edu/sites/g/files/ufvvjh1611/f/page/documents/micron-fabrication-intro-to-photolithography-presentation.pdf"
  ],
  "facets": [
    "microfabrication"
  ],
  "added": "2026-09-07T14:39:04Z"
},
{
  "id": "injection-molding",
  "label": "Injection Molding",
  "aliases": [
    "thermoplastic injection molding",
    "shot-fill-cool-eject cycle"
  ],
  "definition": "A measured shot of molten polymer is forced into a closed mold, cooled into a discrete part, and ejected after the mold opens.",
  "motionThesis": "A reciprocating screw advances to fill a shaped cavity, the filled part cools in place, and ejector pins release it only after the mold separates.",
  "distinction": "A hot-runner schematic with a closed gate before ejection and matched reservoir loss and cavity-plus-runner fill; the real packing and cooling stages are simplified.",
  "cycleSeconds": 18,
  "references": [
    "https://dozuki.umd.edu/Wiki/Injection_molding_process"
  ],
  "facets": [
    "polymer-processing"
  ],
  "added": "2026-09-07T14:43:13Z"
},
{
  "id": "polymer-extrusion",
  "label": "Polymer Extrusion",
  "aliases": [
    "screw extrusion of polymers",
    "continuous thermoplastic profile extrusion"
  ],
  "definition": "A rotating screw conveys and plasticizes polymer, building pressure that drives a continuous melt stream through a shaping die.",
  "motionThesis": "Pellets enter screw channels, merge into melt, and emerge through a fixed opening as a continuous profile that swells slightly and cools downstream.",
  "distinction": "A continuous side-view profile with a stationary screw axis and die, schematic swell, and approximately constant cross-sectional material flux; screw heating is not attributed solely to external heaters.",
  "cycleSeconds": 12,
  "references": [
    "https://www.unsw.edu.au/science/our-schools/materials/engage-with-us/high-school-students-and-teachers/online-tutorials/polymers/forming-methods",
    "https://archive.nptel.ac.in/content/storage2/courses/112101005/modules/lec3-7/1.6.html",
    "https://content.ces.ncsu.edu/screw-functionality-and-screw-profile-design-for-extrusion-processing"
  ],
  "facets": [
    "polymer-processing"
  ],
  "added": "2026-09-07T14:45:56Z"
},
{
  "id": "extrusion-blow-molding",
  "label": "Extrusion Blow Molding",
  "aliases": [
    "EBM",
    "parison inflation molding"
  ],
  "definition": "An extruded hollow polymer tube is enclosed and pinched in a split mold, inflated against the cavity, cooled, and released as a hollow part.",
  "motionThesis": "A hanging tube seals at its base before air enters its lumen and expands its thinning walls into a bottle-shaped cavity.",
  "distinction": "A schematic thinning hollow shell with a retained pinch-off flash, not an exact volume simulation; the captured parison separates at the neck before inflation and retains its shape after venting.",
  "cycleSeconds": 18,
  "references": [
    "https://www.open.edu/openlearn/science-maths-technology/engineering-technology/manupedia/blow-moulding",
    "https://escholarship.mcgill.ca/concern/theses/7p88ch14w"
  ],
  "facets": [
    "polymer-processing"
  ],
  "added": "2026-09-07T14:49:49Z"
},
{
  "id": "hot-rolling-reduction",
  "label": "Hot Rolling Reduction",
  "aliases": [
    "hot flat rolling",
    "roll-gap thickness reduction"
  ],
  "definition": "Opposing rolls plastically compress a hot solid workpiece, reducing thickness while increasing its length and exit speed.",
  "motionThesis": "A marked strip enters the roll bite thick and slow, compresses along the roll surfaces, and exits thinner with larger spacing between the same material markers.",
  "distinction": "A constant-width, approximately constant-density plane-strain schematic with material flux conserved; width spread, elastic recovery, and recrystallization kinetics are omitted.",
  "cycleSeconds": 12,
  "references": [
    "https://archive.nptel.ac.in/content/storage2/courses/112101005/modules/lec3-3/1.5.html",
    "https://www.me.iitb.ac.in/~ramesh/courses/ME649/Rolling.pdf"
  ],
  "facets": [
    "material-deformation"
  ],
  "added": "2026-09-07T14:51:45Z"
},
{
  "id": "continuous-casting",
  "label": "Continuous Casting",
  "aliases": [
    "strand casting",
    "continuous metal casting"
  ],
  "definition": "Molten metal continuously enters a water-cooled bottomless mold, develops a supporting solid shell, and is withdrawn while secondary cooling solidifies its core.",
  "motionThesis": "A stationary shell-and-core profile surrounds steadily descending material while mold oscillation and withdrawal rolls separate solidification from transport.",
  "distinction": "A steady illustrative thermal profile, not a universal heat-transfer law; the strand has a supporting shell before withdrawal and no cutoff is shown above core closure.",
  "cycleSeconds": 12,
  "references": [
    "https://ccc.illinois.edu/introduction/overview.html"
  ],
  "facets": [
    "metal-processing"
  ],
  "added": "2026-09-07T14:55:55Z"
},
{
  "id": "laser-powder-bed-fusion",
  "label": "Laser Powder Bed Fusion",
  "aliases": [
    "LPBF",
    "laser beam powder bed fusion",
    "selective laser melting"
  ],
  "definition": "A laser selectively melts successive thin powder layers so solidified tracks bond to the underlying part and build a three-dimensional object.",
  "motionThesis": "A recoater spreads powder, a scanning laser leaves a fused track, the build descends one layer, and a second narrower track creates a stepped section.",
  "distinction": "A two-layer cross-section with a moving local melt pool and unfused surrounding powder; powder, track, and platform motions are schematic rather than process-scale measurements.",
  "cycleSeconds": 20,
  "references": [
    "https://www.nist.gov/additive-manufacturing/research-areas/technologies/powder-bed-fusion",
    "https://www.nist.gov/publications/measurement-melt-pool-length-during-single-scan-tracks-commercial-laser-powder-bed"
  ],
  "facets": [
    "additive-manufacturing"
  ],
  "added": "2026-09-07T15:28:26Z"
}
]);
