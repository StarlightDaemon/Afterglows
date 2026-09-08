import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("engineering-technology", "energy-systems", [
  {
    "id": "pumped-hydroelectric-storage",
    "label": "Pumped Hydroelectric Storage",
    "aliases": [
      "pumped-storage hydropower",
      "reversible hydro storage"
    ],
    "definition": "Pumped hydroelectric storage uses electricity to lift water to an upper reservoir and releases electricity as the water returns through a turbine.",
    "motionThesis": "A conserved water inventory transfers between two reservoirs while pipe flow and electrical power reverse between pumping and generation.",
    "distinction": "Two equal-area reservoirs and a reversible machine show closed-inventory energy storage, with changing hydraulic head and ideal illustrative power rather than a continuously supplied hydroelectric dam.",
    "cycleSeconds": 12,
    "references": [
      "https://www.energy.gov/cmei/water/pumped-storage-hydropower"
    ],
    "facets": [
      "energy-storage",
      "hydropower"
    ],
    "added": "2026-09-07T17:00:17Z"
  },
  {
    "id": "flywheel-energy-storage",
    "label": "Flywheel Energy Storage",
    "aliases": [
      "rotational kinetic storage",
      "kinetic battery"
    ],
    "definition": "A motor-generator stores electrical energy as rotor kinetic energy and recovers it by decelerating the rotor.",
    "motionThesis": "A rotor spins in one direction, accelerates while electrical power enters, and slows while power flows back out through the same motor-generator.",
    "distinction": "Integrated angular motion and energy proportional to squared speed show ideal reversible storage; discharge never reverses the rotor and no real-system efficiency is claimed.",
    "cycleSeconds": 12,
    "references": [
      "https://www.energy.gov/oe/articles/arra-sdgp-amber-kinetics-inc-flywheel-energy-storage-demonstration",
      "https://www.sandia.gov/files/ess/docs/pr_conferences/2015/PR%201/4-Boyle.pdf"
    ],
    "facets": [
      "energy-storage",
      "electromechanical-conversion"
    ],
    "added": "2026-09-07T17:00:17Z"
  }
,
{
  "id": "pem-fuel-cell",
  "label": "PEM Fuel Cell",
  "aliases": [
    "proton-exchange membrane fuel cell",
    "polymer-electrolyte membrane fuel cell"
  ],
  "definition": "A PEM fuel cell routes hydrogen-derived protons through an ion-conducting membrane and electrons through an external load, then combines them with oxygen to form water.",
  "motionThesis": "Two hydrogen molecules yield four protons and four externally routed electrons, which join one split oxygen molecule to release two water molecules.",
  "distinction": "Separated ion and electron routes and conserved hydrogen/oxygen atoms show continuously supplied fuel conversion; the staged cycle is not an electrolysis reversal or a measured transport rate.",
  "cycleSeconds": 12,
  "references": [
    "https://www.energy.gov/cmei/fuels/fuel-cell-animation-text-version"
  ],
  "facets": [
    "electrochemical-conversion",
    "hydrogen-energy"
  ],
  "added": "2026-09-07T17:04:54Z"
}
,
{
  "id": "redox-flow-battery",
  "label": "Redox Flow Battery",
  "aliases": [
    "vanadium flow battery",
    "circulating-electrolyte battery"
  ],
  "definition": "A redox flow battery stores rechargeable energy in the oxidation states of two separately tanked, circulating electrolytes.",
  "motionThesis": "Two isolated liquid loops keep circulating at constant volume while electrical current, membrane ion compensation, and electrode redox conversion reverse.",
  "distinction": "An ideal well-mixed acidic vanadium schematic uses left V(III)/V(II) and right V(IV)/V(V) oxidation-state mixtures; bulk vanadium electrolyte never crosses the membrane and colored fractions do not represent changing liquid levels.",
  "cycleSeconds": 12,
  "references": [
    "https://www.pnnl.gov/sites/default/files/media/file/at/publications/333_926201145351.pdf",
    "https://www.pnnl.gov/available-technologies/all-vanadium-redox-flow-battery-based-supporting-solutions-containing"
  ],
  "facets": [
    "electrochemical-storage",
    "circulating-electrolytes"
  ],
  "added": "2026-09-07T17:07:06Z"
}
,
{
  "id": "wind-turbine-pitch-regulation",
  "label": "Wind-Turbine Pitch Regulation",
  "aliases": [
    "collective pitch control",
    "pitch-to-feather regulation"
  ],
  "definition": "Wind-turbine pitch regulation changes blade pitch to control rotor speed or power in strong wind.",
  "motionThesis": "All three blades twist together as a gust varies, reducing their projected chord and aerodynamic torque while a feedback response bounds rotor-speed deviation.",
  "distinction": "An illustrative periodic linearized controller couples gust, pitch, and integrated rotor speed; a magnified blade section turns toward its relative wind as pitch-to-feather increases, without claiming calibrated turbine aerodynamics.",
  "cycleSeconds": 12,
  "references": [
    "https://research-hub.nlr.gov/en/publications/chapter-6-wind-turbine-control-design/",
    "https://docs.nlr.gov/docs/fy12osti/54605.pdf"
  ],
  "facets": [
    "wind-energy",
    "feedback-control"
  ],
  "added": "2026-09-07T17:21:08Z"
},
{
  "id": "h-bridge-inverter",
  "label": "H-Bridge Inverter",
  "aliases": [
    "full-bridge inverter",
    "bipolar bridge converter"
  ],
  "definition": "An H-bridge inverter uses four controlled switches to reverse the polarity applied from a DC source to a load.",
  "motionThesis": "Alternating diagonal switch pairs create opposite current paths through one resistor, separated by visible all-open dead intervals.",
  "distinction": "An ideal purely resistive load has zero current during dead time; the displayed bipolar output is not sinusoidal and requires no omitted inductive freewheel path.",
  "cycleSeconds": 8,
  "references": [
    "https://training-dev.ti.com/lit/ug/tiduf64/tiduf64.pdf?ts=1705716144250",
    "https://www.ti.com/document-viewer/lit/html/SSZTC74"
  ],
  "facets": [
    "power-electronics",
    "electrical-conversion"
  ],
  "added": "2026-09-07T17:21:08Z"
}
,
{
  "id": "buck-converter",
  "label": "Buck Converter",
  "aliases": [
    "step-down switching converter",
    "nonsynchronous buck regulator"
  ],
  "definition": "A buck converter uses a switched inductor and freewheel diode to provide a lower DC voltage while load current continues between switch pulses.",
  "motionThesis": "Source-fed and diode-recirculation paths alternate while inductor current rises during switch-on and falls without reversing during switch-off.",
  "distinction": "An exact ideal continuous-conduction solution couples inductor current and capacitor voltage for a half-duty circuit; capacitor ripple is retained and an open switch never interrupts the positive inductor current.",
  "cycleSeconds": 8,
  "references": [
    "https://www.ti.com/document-viewer/lit/html/SLVAFJ5"
  ],
  "facets": [
    "power-electronics",
    "dc-conversion"
  ],
  "added": "2026-09-07T17:25:11Z"
},
{
  "id": "transformer-mutual-induction",
  "label": "Transformer Mutual Induction",
  "aliases": [
    "transformer action",
    "coupled-winding induction"
  ],
  "definition": "Changing magnetic flux shared by transformer windings induces terminal voltages proportional to their turn counts.",
  "motionThesis": "Four primary turns and eight secondary turns share reversing core flux while the secondary voltage stays twice the primary and both vanish at flux extrema.",
  "distinction": "Matched dotted-terminal voltage conventions and a resistive secondary load show ideal step-up transformer action; flux magnitude itself is not treated as voltage and the windings have no conducting connection.",
  "cycleSeconds": 10,
  "references": [
    "https://openstax.org/books/college-physics-2e/pages/23-7-transformers"
  ],
  "facets": [
    "electromagnetic-conversion",
    "ac-power"
  ],
  "added": "2026-09-07T17:25:11Z"
}
,
{
  "id": "three-phase-induction-motor",
  "label": "Three-Phase Induction Motor",
  "aliases": [
    "squirrel-cage motor",
    "asynchronous AC motor"
  ],
  "definition": "Phase-shifted stator currents create a rotating magnetic field that induces rotor currents and torque through relative motion.",
  "motionThesis": "Three stator phases create a constant-magnitude rotating field that outruns a conducting cage, while each moving bar’s induced current follows its angle relative to the field.",
  "distinction": "A two-pole resistance-dominated steady-state schematic uses twenty percent slip, five field turns and four cage turns per cycle; the rotor is neither permanently magnetized nor synchronized to the field.",
  "cycleSeconds": 10,
  "references": [
    "https://ocw.mit.edu/courses/6-622-power-electronics-spring-2023/1Nj2YmtOLT_RHHvlc-Jfwe6GCOuVva4HN_transcript.pdf",
    "https://ocw.mit.edu/courses/2-154-maneuvering-and-control-of-surface-and-underwater-vehicles-13-49-fall-2004/2609f8b1bdebe4566891080afe007f51_1349_notes.pdf"
  ],
  "facets": [
    "electrical-machines",
    "asynchronous-drive"
  ],
  "added": "2026-09-07T17:29:15Z"
},
{
  "id": "generator-synchronization",
  "label": "Generator Synchronization",
  "aliases": [
    "generator paralleling",
    "synchronism checking"
  ],
  "definition": "Generator synchronization matches an incoming generator’s voltage magnitude, frequency, and phase to a live bus before its connecting breaker closes.",
  "motionThesis": "An incoming voltage vector converges on the live-bus vector, and a physically drawn breaker closes only after their magnitude, phase, and frequency match.",
  "distinction": "A single-phase equivalent assumes the same phase sequence; connection continuity after synchronization does not imply a particular real-power load or replace full three-phase synchronism checks.",
  "cycleSeconds": 12,
  "references": [
    "https://selinc.com/engineering-services/synchronization/",
    "https://selinc.com/api/download/5798/?lang=en"
  ],
  "facets": [
    "electrical-machines",
    "grid-connection"
  ],
  "added": "2026-09-07T17:29:15Z"
},
{
  "id": "grid-frequency-response",
  "label": "Grid Frequency Response",
  "aliases": [
    "primary frequency response",
    "inertial frequency response"
  ],
  "definition": "A power imbalance changes synchronous-grid frequency while stored rotor energy and governor action limit the departure.",
  "motionThesis": "A new electrical load connects, the coupled turbine-generator slows, and delayed mechanical input produces a frequency nadir followed by partial recovery.",
  "distinction": "An illustrative swing-equation and first-order governor response retains primary-control frequency offset and frequency-sensitive load relief; secondary restoration is not implied.",
  "cycleSeconds": 12,
  "references": [
    "https://docs.nlr.gov/docs/fy20osti/73856.pdf"
  ],
  "facets": [
    "power-systems",
    "feedback-control"
  ],
  "added": "2026-09-07T17:33:31Z"
},
{
  "id": "regenerative-braking",
  "label": "Regenerative Braking",
  "aliases": [
    "recuperative braking",
    "motor-generator braking"
  ],
  "definition": "Regenerative braking operates a traction machine as a generator to transfer vehicle kinetic energy into electrical storage.",
  "motionThesis": "A car decelerates with correctly rolling wheels while opposing generator torque transfers part of the lost kinetic energy into a battery.",
  "distinction": "Wheel angle follows distance, battery charge follows lost squared speed, and a separate heat route accounts for an illustrative twenty percent loss rather than claiming a product efficiency.",
  "cycleSeconds": 12,
  "references": [
    "https://afdc.energy.gov/fueleconomy/animations/hybrids/fullhybrid/fullhybridbraking.html"
  ],
  "facets": [
    "transportation-energy",
    "electromechanical-conversion"
  ],
  "added": "2026-09-07T17:33:31Z"
},
{
  "id": "reversible-heat-pump",
  "label": "Reversible Heat Pump",
  "aliases": [
    "reverse-cycle heat pump",
    "four-way reversing heat pump"
  ],
  "definition": "A reversible vapor-compression heat pump uses a reversing valve to swap the indoor and outdoor coils’ heating and cooling roles.",
  "motionThesis": "A four-port valve reconnects the refrigerant circuit so the indoor coil changes from heat delivery to heat absorption while compressor flow keeps the same direction.",
  "distinction": "Explicit valve passages and a bidirectional expansion device show circuit reversal; crossed valve passages remain isolated and heat transfer includes absorbed environmental heat as well as compressor work.",
  "cycleSeconds": 12,
  "references": [
    "https://www.carrier.com/us/en/residential/hvac-resources/heat-pumps/reversing-valve/"
  ],
  "facets": [
    "thermal-energy",
    "refrigeration"
  ],
  "added": "2026-09-07T17:38:38Z"
},
{
  "id": "compressed-air-energy-storage",
  "label": "Compressed-Air Energy Storage",
  "aliases": [
    "CAES",
    "pneumatic energy storage"
  ],
  "definition": "Compressed-air energy storage compresses air into a reservoir and later expands the stored air through a generator.",
  "motionThesis": "A shrinking compressor gas space delivers air into a rigid reservoir, then a separate expander releases the stored mass and generates electricity.",
  "distinction": "An ideal isothermal mass balance links piston volume, pressure and valve thresholds; visible heat exchange distinguishes the schematic from real diabatic or adiabatic storage designs.",
  "cycleSeconds": 12,
  "references": [
    "https://www.energy.gov/sites/default/files/2023-07/Technology%20Strategy%20Assessment%20-%20Compressed%20Air%20Energy%20Storage_0.pdf"
  ],
  "facets": [
    "energy-storage",
    "gas-thermodynamics"
  ],
  "added": "2026-09-07T17:40:50Z"
},
{
  "id": "point-absorber-wave-generator",
  "label": "Point-Absorber Wave Generator",
  "aliases": [
    "heaving point absorber",
    "buoy wave-energy converter"
  ],
  "definition": "A point-absorber wave generator extracts energy from a buoy’s vertical motion relative to a reaction structure.",
  "motionThesis": "A buoy heaves out of phase with the water surface, driving a fixed linear generator whose resisting force opposes velocity and whose power peaks between stroke endpoints.",
  "distinction": "An illustrative damped harmonic response keeps buoy displacement distinct from wave elevation and extracts power on both stroke directions without claiming one-way electrical current.",
  "cycleSeconds": 12,
  "references": [
    "https://www.energy.gov/cmei/water/marine-energy-glossary"
  ],
  "facets": [
    "marine-energy",
    "electromechanical-conversion"
  ],
  "added": "2026-09-07T17:42:07Z"
},
{
  "id": "binary-geothermal-power",
  "label": "Binary Geothermal Power",
  "aliases": [
    "binary-cycle geothermal plant",
    "geothermal organic Rankine cycle"
  ],
  "definition": "Binary geothermal power transfers heat from geothermal water to a separate low-boiling working fluid that drives a closed-cycle turbine.",
  "motionThesis": "Liquid geothermal water heats an isolated secondary fluid, which vaporizes, expands through a turbine, condenses and is pumped back to the heat exchanger.",
  "distinction": "Separate heater channels keep geothermal water out of the turbine; heat rejection and pump demand accompany net electrical output in an illustrative steady-flow Rankine cycle.",
  "cycleSeconds": 12,
  "references": [
    "https://www.eia.gov/todayinenergy/detail.php?id=44576"
  ],
  "facets": [
    "geothermal-energy",
    "thermal-power"
  ],
  "added": "2026-09-07T17:43:35Z"
},
{
  "id": "molten-salt-thermal-storage",
  "label": "Molten-Salt Thermal Storage",
  "aliases": [
    "two-tank sensible-heat storage",
    "molten-salt CSP storage"
  ],
  "definition": "Molten-salt thermal storage retains useful heat in hot liquid salt and later supplies it to a power block.",
  "motionThesis": "Sunlight transfers a conserved salt inventory from a cold tank through a receiver into a hot tank, then electricity continues after sunset as the hot salt returns through a heat exchanger.",
  "distinction": "Equal-height tanks store sensible heat rather than gravitational head; both salt states stay liquid and separate charging and discharge circuits follow the changing tank inventories.",
  "cycleSeconds": 12,
  "references": [
    "https://www.energy.gov/cmei/systems/thermal-storage-system-concentrating-solar-thermal-power-basics"
  ],
  "facets": [
    "thermal-energy-storage",
    "concentrated-solar-power"
  ],
  "added": "2026-09-07T17:45:09Z"
}
]);
