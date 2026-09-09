// Operator-directed fresh consolidations; older catalog records remain preserved.
export const CONCEPTS = [
  {
    "source": "curation",
    "badge": "Refined v1",
    "badgeCls": "meta-status-refined",
    "versioned": false,
    "origin": {
      "contributions": [
        {
          "agent": "codex",
          "model": "astra",
          "version": "6"
        }
      ]
    },
    "added": "2026-09-09T09:00:00Z",
    "updated": "2026-09-09T09:00:00Z",
    "medium": "SVG/CSS",
    "tag": "concept-rotary-pulse-dial",
    "label": "Rotary Pulse Dial",
    "section": "engineering-technology",
    "category": "telecommunications",
    "module": "./concepts/engineering-technology/telecommunications/rotary-pulse-dial-concept.js",
    "definition": "A rotary telephone dial converts a selected digit into a train of loop interruptions during its spring-driven, governed return.",
    "motionThesis": "A highlighted finger selects 5 and winds the perforated plate clockwise to a fixed stop. On release, the plate returns while a contact indicator, five marks and a trace count five interruptions.",
    "distinction": "Fresh consolidated dial replaces both old dial and phone scenes. Numerals and finger stop stay fixed; pulse emission occurs only during return. The nominal 10-pulse-per-second return is shown eight times slower; this is a mechanism study, not real-time signaling.",
    "aliases": [
      "rotary telephone",
      "pulse dialing",
      "rotary dial"
    ],
    "facets": [
      "telecommunications",
      "governor",
      "pulse-train"
    ],
    "cycleSeconds": 10,
    "references": [
      "https://www.britishtelephones.com/dials/pdf/b1003.pdf",
      "https://www.britishtelephones.com/howdial.htm"
    ],
    "replaces": [
      "concept-rotary-dial",
      "concept-rotary-phone"
    ]
  },
  {
    "source": "curation",
    "badge": "Refined v1",
    "badgeCls": "meta-status-refined",
    "versioned": false,
    "origin": {
      "contributions": [
        {
          "agent": "codex",
          "model": "astra",
          "version": "6"
        }
      ]
    },
    "added": "2026-09-09T09:00:00Z",
    "updated": "2026-09-09T09:00:00Z",
    "medium": "SVG/CSS",
    "tag": "concept-spirit-board",
    "label": "Spirit Board & Planchette",
    "section": "imagination-belief",
    "category": "supernatural-folklore",
    "module": "./concepts/imagination-belief/supernatural-folklore/spirit-board-concept.js",
    "definition": "A talking-board game pairs a lettered surface with a movable planchette whose clear window selects letters and responses.",
    "motionThesis": "One planchette moves from YES through H, E, L, a second L, and O, pausing with its clear window centered on each letter before closing at GOODBYE.",
    "distinction": "Fresh consolidated scene replaces the two older board/pointer studies. Geometry aligns the actual aperture with fixed glyph centers; a small excursion makes the repeated L explicit. This is a staged illustration of game equipment, not a claim of supernatural agency.",
    "aliases": [
      "ouija",
      "planchette",
      "talking board",
      "spirit board"
    ],
    "facets": [
      "folklore",
      "board-game",
      "letter-selection"
    ],
    "cycleSeconds": 16,
    "references": [
      "https://www.hasbro.com/common/instruct/Ouija.PDF"
    ],
    "replaces": [
      "concept-planchette",
      "concept-ouija"
    ]
  }
];
