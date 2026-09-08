import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("mind-society", "perception-communication", [
  {
    "id": "gestalt-proximity",
    "label": "Gestalt Proximity",
    "aliases": [
      "proximity grouping",
      "law of proximity"
    ],
    "definition": "Nearby visual elements tend to be perceived as belonging to a group.",
    "motionThesis": "Sixteen identical dots change their relative horizontal and vertical spacing so perceived columns reorganize into rows.",
    "distinction": "Grouping by spatial distance, without color, connecting lines, or shared-motion membership cues; a perceptual tendency rather than a guaranteed response.",
    "cycleSeconds": 9,
    "references": [
      "https://journals.sagepub.com/doi/10.1111/j.1467-9280.1995.tb00597.x",
      "https://vcl.salk.edu/~gepshtein/papers/Kubovy_dot_lattices1994.pdf",
      "https://www.yorku.ca/pclassic/Wertheimer/Forms/forms.htm"
    ],
    "facets": [
      "visual-grouping"
    ],
    "added": "2026-09-07T15:29:53Z"
  },
  {
    "id": "gestalt-common-fate",
    "label": "Gestalt Common Fate",
    "aliases": [
      "common-fate grouping",
      "grouping by common motion"
    ],
    "definition": "Visual elements moving together tend to be perceived as a group.",
    "motionThesis": "Twelve identical interleaved dots form two groups through opposite synchronized vertical motion.",
    "distinction": "Appearance stays identical while common velocity groups spatially interleaved elements; unlike proximity grouping, membership is specified by motion.",
    "cycleSeconds": 9,
    "references": [
      "https://www.yorku.ca/pclassic/Wertheimer/Forms/forms.htm",
      "https://arxiv.org/abs/1908.00661",
      "https://www.scholarpedia.org/article/Gestalt_principles"
    ],
    "facets": [
      "visual-grouping"
    ],
    "added": "2026-09-07T15:29:53Z"
  },
  {
    "id": "amodal-completion",
    "label": "Amodal Completion",
    "aliases": [
      "occlusion completion",
      "amodal shape completion"
    ],
    "definition": "A partly occluded object is perceived as continuing behind an occluder even though its hidden portion is not directly visible.",
    "motionThesis": "An opaque screen covers the middle of a continuous diagonal bar, slides aside to reveal its continuity, and returns.",
    "distinction": "Completion behind an actual occluding surface, without drawing or exposing a hidden segment; distinct from an illusory contour in an unoccluded region.",
    "cycleSeconds": 10,
    "references": [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC6117868/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC7466902/"
    ],
    "facets": [
      "object-perception"
    ],
    "added": "2026-09-07T15:29:53Z"
  },
  {
    "id": "kanizsa-illusory-contour",
    "label": "Kanizsa Illusory Contour",
    "aliases": [
      "Kanizsa triangle",
      "subjective contour"
    ],
    "definition": "Aligned inducing fragments can evoke an apparent contour where no physical luminance edge defines the implied sides.",
    "motionThesis": "Three cutout disks rotate into inward alignment and hold, suggesting a triangle whose sides are never drawn.",
    "distinction": "Only the actual inducers are rendered; the apparent triangle has no stroke, fill, glow, or luminance difference from the surrounding background.",
    "cycleSeconds": 10,
    "references": [
      "https://www.scientificamerican.com/article/subjective-contours/",
      "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0026154"
    ],
    "facets": [
      "visual-grouping"
    ],
    "added": "2026-09-07T15:29:53Z"
  },
  {
    "id": "motion-parallax",
    "label": "Motion Parallax",
    "aliases": [
      "monocular motion parallax",
      "movement parallax"
    ],
    "definition": "Observer translation produces depth-dependent relative image motion in a stationary scene.",
    "motionThesis": "One translating viewpoint produces progressively smaller opposite image displacements for landmarks at one, two, and four relative depths.",
    "distinction": "A fixed-orientation pinhole projection with identical stationary world landmarks, not object motion or two simultaneous binocular views; row spacing separates depth examples schematically.",
    "cycleSeconds": 8,
    "references": [
      "https://www.cns.nyu.edu/~msl/courses/0022X/lecturenotes/depth/depth-size.html",
      "https://pubmed.ncbi.nlm.nih.gov/2943861/"
    ],
    "facets": [
      "depth-perception"
    ],
    "added": "2026-09-07T15:29:53Z"
  },
{
  "id": "binocular-disparity",
  "label": "Binocular Disparity",
  "aliases": [
    "retinal disparity",
    "binocular parallax"
  ],
  "definition": "Corresponding scene features occupy different relative positions in the two eyes’ images, providing a depth cue relative to fixation.",
  "motionThesis": "A target changing depth makes matched left and right image markers separate, coincide at a reference, and reverse their relative offsets.",
  "distinction": "A rectified pinhole diagram of relative image positions, not eyeball rotation or a claim that the two panels themselves produce stereoscopic fusion.",
  "cycleSeconds": 10,
  "references": [
    "https://www.cns.nyu.edu/~david/courses/perception/outlines/outline-depth.html"
  ],
  "facets": [
    "depth-perception"
  ],
  "added": "2026-09-07T15:34:19Z"
},
{
  "id": "aperture-problem",
  "label": "Aperture Problem",
  "aliases": [
    "motion aperture ambiguity",
    "local motion ambiguity"
  ],
  "definition": "A straight edge viewed through a small aperture specifies its perpendicular motion but leaves tangential motion ambiguous.",
  "motionThesis": "Two diagonal bars moving in different directions look identical through small windows until expanding apertures reveal their different endpoint trajectories.",
  "distinction": "Both local line equations remain identical while one whole bar translates horizontally and the other vertically; the windows reveal correspondence information that was initially hidden.",
  "cycleSeconds": 10,
  "references": [
    "https://web.mit.edu/jhm/www/Pubs/McDermott_Adelson_2004_motion_form_midlevel_vision_chapter.pdf"
  ],
  "facets": [
    "motion-perception"
  ],
  "added": "2026-09-07T15:34:19Z"
},
{
  "id": "biological-motion",
  "label": "Biological Motion",
  "aliases": [
    "point-light biological motion",
    "point-light walker"
  ],
  "definition": "Coordinated motion of sparse body landmarks supports perception of an animate figure and its action.",
  "motionThesis": "Thirteen isolated lights follow articulated shoulder, elbow, wrist, hip, knee, ankle, and head positions through a coordinated walking cycle.",
  "distinction": "A stylized kinematic gait with fixed limb lengths at sampled poses, not recorded motion capture, diagnostic classification, or a rigid common-motion group.",
  "cycleSeconds": 3,
  "references": [
    "https://www.biomotionlab.ca/Experiments/BMLstimuli/documentation/index.html",
    "https://www.biomotionlab.ca/walking/"
  ],
  "facets": [
    "motion-perception"
  ],
  "added": "2026-09-07T15:34:19Z"
},
{
  "id": "visual-pop-out",
  "label": "Visual Pop-Out",
  "aliases": [
    "feature pop-out",
    "feature-singleton search"
  ],
  "definition": "A target sufficiently different from surrounding items in a salient basic feature can be found efficiently.",
  "motionThesis": "Complete arrays appear together, each with one tilted bar among vertical bars, and target location changes only between presentations.",
  "distinction": "An orientation feature singleton without target-only flashes, color, scanning, or locator cues; efficient search is a tendency, not an instantaneous or attention-free guarantee.",
  "cycleSeconds": 9,
  "references": [
    "https://facultypsy.hope.edu/psychlabs/exp/visualsearch/readings/TreismanGelade_1980.pdf"
  ],
  "facets": [
    "visual-attention"
  ],
  "added": "2026-09-07T15:36:30Z"
},
{
  "id": "mental-rotation",
  "label": "Mental Rotation",
  "aliases": [
    "mental image rotation",
    "imagined spatial rotation"
  ],
  "definition": "Comparison of differently oriented objects can involve mentally transforming one orientation into another.",
  "motionThesis": "A rigidly rotating pentomino aligns with a reference, followed by a mirror foil that remains different after the same in-plane rotation.",
  "distinction": "A displayed illustration of spatial comparison, not direct observation of a mental image or a reaction-time measurement; shapes do not morph during alignment.",
  "cycleSeconds": 12,
  "references": [
    "https://web.stanford.edu/class/psych205/papers/Shepard-Metzler-1971.pdf"
  ],
  "facets": [
    "spatial-cognition"
  ],
  "added": "2026-09-07T15:36:30Z"
},
{
  "id": "necker-cube",
  "label": "Necker Cube",
  "aliases": [
    "Necker cube reversal",
    "bistable wireframe cube"
  ],
  "definition": "An unchanged ambiguous wireframe cube supports competing depth interpretations.",
  "motionThesis": "The central wireframe remains identical while external annotation frames alternate between two possible front-face readings.",
  "distinction": "Only explanatory cues alternate; the ambiguous stimulus never changes, and cue timing neither measures nor prescribes a viewer’s perceptual reversals.",
  "cycleSeconds": 10,
  "references": [
    "https://elifesciences.org/articles/78108"
  ],
  "facets": [
    "bistable-perception"
  ],
  "added": "2026-09-07T15:36:30Z"
},
{
  "id": "change-blindness",
  "label": "Change Blindness",
  "aliases": [
    "flicker change blindness",
    "interrupted-change detection"
  ],
  "definition": "Observers may fail to notice a scene change when an interruption removes its localized transient cue.",
  "motionThesis": "Two nearly identical arrays alternate through whole-field blanks, then uninterrupted transitions and a delayed locator reveal one orientation change.",
  "distinction": "A temporal change demonstration with no unique target orientation or locator in the masked phase; visibility depends on viewing conditions and the observer.",
  "cycleSeconds": 12,
  "references": [
    "https://www.cs.ubc.ca/~rensink/publications/download/PsychSci.rr.pdf"
  ],
  "facets": [
    "visual-attention"
  ],
  "added": "2026-09-07T15:36:30Z"
},
{
  "id": "visual-crowding",
  "label": "Visual Crowding",
  "aliases": [
    "peripheral crowding",
    "crowding effect"
  ],
  "definition": "Nearby flankers can impair identification of a peripheral target that is identifiable in isolation.",
  "motionThesis": "A sharp target remains fixed relative to fixation while neighboring letters move apart, reducing crowding without changing the target’s size or contrast.",
  "distinction": "An illustrative peripheral identification task, not image blur or feature search; spacing and eccentricity are not calibrated universal thresholds.",
  "cycleSeconds": 10,
  "references": [
    "https://people.cas.sc.edu/palomare/about_me_files/palomares_jov_2004.pdf",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC3624758/"
  ],
  "facets": [
    "visual-attention"
  ],
  "added": "2026-09-07T15:36:30Z"
},
{
  "id": "plosive-speech-release",
  "label": "Plosive Speech Release",
  "aliases": [
    "stop release burst",
    "oral stop release"
  ],
  "definition": "Releasing a complete oral closure can produce a brief acoustic burst as built-up air pressure escapes.",
  "motionThesis": "A side-view bilabial closure traps oral pressure, then the lips part and a brief escaping-air burst coincides with an acoustic transient.",
  "distinction": "An audibly released voiceless bilabial [p] schematic, not every stop realization, recorded speech, or a claim about aspiration duration; no nasal tract or vowel is depicted.",
  "cycleSeconds": 10,
  "references": [
    "https://www.internationalphoneticassociation.org/IPAcharts/common_files/pdfs/pdfs_IPA_charts_archive/IPA_unitipa_2020.pdf",
    "https://linguistics.ucla.edu/people/keating/TRANSCR.pdf",
    "https://www.seeingspeech.ac.uk/ipa-charts/"
  ],
  "facets": [
    "speech-production"
  ],
  "added": "2026-09-07T15:39:09Z"
}
]);
