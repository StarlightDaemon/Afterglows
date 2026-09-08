import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("engineering-technology", "instrumentation-signals", [
  {
    "id": "sampling-aliasing",
    "label": "Sampling Aliasing",
    "aliases": [
      "temporal aliasing",
      "undersampling"
    ],
    "definition": "Insufficient temporal sampling can make distinct continuous signals produce identical sampled values.",
    "motionThesis": "Nine equally spaced samples on a seven-cycle sinusoid also lie on a one-cycle ghost curve, exposing the ambiguity of eight samples per interval.",
    "distinction": "A fixed seven-cycle signal and negative one-cycle alias agree at all nine shown sample positions; the illustration reveals reconstruction ambiguity without claiming the input changes frequency.",
    "cycleSeconds": 10,
    "references": [
      "https://www.analog.com/en/resources/analog-dialogue/articles/ac-and-dc-data-acquisition-signal-chains-made-easy.html"
    ],
    "facets": [
      "signal-processing",
      "data-acquisition"
    ],
    "added": "2026-09-07T16:25:46Z"
  },
  {
    "id": "amplitude-quantization",
    "label": "Amplitude Quantization",
    "aliases": [
      "uniform quantization",
      "finite-resolution amplitude encoding"
    ],
    "definition": "Amplitude quantization maps a continuous input to one of a finite set of representative levels.",
    "motionThesis": "A continuously moving input crosses eight bands while the output jumps between their midpoints and a bracket shows the bounded rounding error.",
    "distinction": "Uniform midpoint quantization without overload; the deterministic amplitude error is not depicted as random noise or temporal sampling.",
    "cycleSeconds": 8,
    "references": [
      "https://wiki.analog.com/university/courses/electronics/text/chapter-20"
    ],
    "facets": [
      "signal-processing",
      "data-acquisition"
    ],
    "added": "2026-09-07T16:25:46Z"
  }
,
{
  "id": "successive-approximation-adc",
  "label": "Successive-Approximation ADC",
  "aliases": [
    "SAR ADC",
    "binary-search ADC"
  ],
  "definition": "A successive-approximation converter holds an input voltage and resolves its binary code by testing DAC bits from most to least significant.",
  "motionThesis": "Four weighted DAC contributions are tried in order, keeping those below a held input and clearing overshoots to retain the four-bit code 1010.",
  "distinction": "A logical four-weight DAC and ordinary input-minus-DAC comparator show four comparisons for an input of 0.68; this is not a physical capacitor-array diagram.",
  "cycleSeconds": 12,
  "references": [
    "https://www.analog.com/en/resources/technical-articles/successive-approximation-registers-sar-and-flash-adcs.html"
  ],
  "facets": [
    "data-acquisition",
    "signal-conversion"
  ],
  "added": "2026-09-07T16:28:15Z"
},
{
  "id": "sigma-delta-modulation",
  "label": "Sigma-Delta Modulation",
  "aliases": [
    "delta-sigma modulation",
    "one-bit noise shaping"
  ],
  "definition": "A sigma-delta modulator integrates conversion error and feeds back a coarse quantized output to produce a rapidly varying bitstream.",
  "motionThesis": "An accumulator adds each input, emits a bit at its threshold, and subtracts feedback so eight clocks at one-quarter input produce two ones while three-quarter input produces six.",
  "distinction": "A first-order unipolar accumulator example shows pulse density and residual error feedback; sixteen displayed clocks are not a complete high-resolution ADC or decimation filter.",
  "cycleSeconds": 12,
  "references": [
    "https://www.analog.com/en/resources/technical-articles/behind-the-sigma-delta-adc-topology.html",
    "https://www.analog.com/en/resources/analog-dialogue/articles/ac-and-dc-data-acquisition-signal-chains-made-easy.html"
  ],
  "facets": [
    "signal-processing",
    "feedback",
    "signal-conversion"
  ],
  "added": "2026-09-07T16:28:15Z"
}
,
{
  "id": "lock-in-detection",
  "label": "Lock-In Detection",
  "aliases": [
    "synchronous detection",
    "phase-sensitive detection"
  ],
  "definition": "Lock-in detection multiplies a measurement by a synchronized reference and averages the product to extract its coherent component.",
  "motionThesis": "A chopped optical measurement is AC-coupled and multiplied by a sign reference, making paired interference lobes cancel over a complete window while the coherent mean remains.",
  "distinction": "A deterministic two-frequency interference example uses a square-wave reference; it does not imply that arbitrary noise or the reference’s odd harmonics always cancel.",
  "cycleSeconds": 10,
  "references": [
    "https://www.analog.com/en/resources/analog-dialogue/articles/synchronous-detectors-facilitate-precision.html"
  ],
  "facets": [
    "signal-processing",
    "optical-instrumentation"
  ],
  "added": "2026-09-07T16:29:28Z"
}
,
{
  "id": "phase-locked-loop",
  "label": "Phase-Locked Loop",
  "aliases": [
    "PLL",
    "phase synchronization loop"
  ],
  "definition": "A phase-locked loop feeds oscillator timing error back to adjust its frequency toward a reference.",
  "motionThesis": "A delayed oscillator’s edges arrive progressively earlier as shrinking phase-detector correction pulses bring them close to reference edges.",
  "distinction": "An illustrative discrete timing correction reduces delay by a factor of 0.55 per comparison; it depicts active edge synchronization rather than amplitude demodulation or an exact analog filter response.",
  "cycleSeconds": 12,
  "references": [
    "https://www.analog.com/en/resources/analog-dialogue/articles/pll-for-high-frequency-receivers-and-transmitters-1.html"
  ],
  "facets": [
    "timing-synchronization",
    "feedback-control"
  ],
  "added": "2026-09-07T16:38:39Z"
},
{
  "id": "quadrature-encoder",
  "label": "Quadrature Encoder",
  "aliases": [
    "incremental quadrature encoder",
    "A/B position encoder"
  ],
  "definition": "Two cyclic sensor channels offset by a quarter cycle encode incremental position and direction.",
  "motionThesis": "Two patterned disk tracks produce staggered sensor transitions, and reversing rotation reverses both their order and the accumulated count.",
  "distinction": "Optical channel transduction and edge decoding are shown directly, with clockwise rotation defined as positive count; the sensor signals derive from the same moving pattern.",
  "cycleSeconds": 10,
  "references": [
    "https://www.ni.com/en/support/documentation/supplemental/21/using-quadrature-encoders-with-e-series-daq-boards.html"
  ],
  "facets": [
    "position-sensing",
    "digital-transduction"
  ],
  "added": "2026-09-07T16:38:39Z"
}
,
{
  "id": "strain-gauge-wheatstone-bridge",
  "label": "Strain-Gauge Wheatstone Bridge",
  "aliases": [
    "strain-gage bridge",
    "quarter-bridge strain measurement"
  ],
  "definition": "A Wheatstone bridge converts a strain-induced resistance change into a differential voltage.",
  "motionThesis": "A bonded foil meander lengthens and contracts, changing one bridge arm while a signed differential output crosses zero with the strain.",
  "distinction": "A quarter-bridge model uses gauge factor two and strain of plus or minus 0.002, with foil deformation exaggerated fiftyfold; tension in the upper-left arm produces a negative left-minus-right voltage.",
  "cycleSeconds": 8,
  "references": [
    "https://www.analog.com/en/resources/technical-articles/resistive-bridge-basics-part-one--maxim-integrated.html",
    "https://www.ni.com/en/shop/data-acquisition/sensor-fundamentals/measuring-strain-with-strain-gages.html"
  ],
  "facets": [
    "strain-sensing",
    "bridge-circuits"
  ],
  "added": "2026-09-07T16:40:17Z"
},
{
  "id": "lvdt-displacement-sensor",
  "label": "LVDT Displacement Sensor",
  "aliases": [
    "linear variable differential transformer",
    "inductive displacement transducer"
  ],
  "definition": "An LVDT measures a movable magnetic core’s position through the difference between two transformer secondary outputs.",
  "motionThesis": "A sliding core strengthens one secondary coupling and weakens the other, making their opposed output pass through a central null and reverse phase.",
  "distinction": "An ideal balanced linear-range model shows simultaneous schematic AC waveforms and exact cancellation at center; real leakage, mismatch, and demodulator details are omitted.",
  "cycleSeconds": 10,
  "references": [
    "https://www.analog.com/en/resources/analog-dialogue/articles/linear-variable-differential-transformers.html"
  ],
  "facets": [
    "position-sensing",
    "inductive-transduction"
  ],
  "added": "2026-09-07T16:40:17Z"
}
,
{
  "id": "time-domain-reflectometry",
  "label": "Time-Domain Reflectometry",
  "aliases": [
    "TDR",
    "cable reflection measurement"
  ],
  "definition": "Time-domain reflectometry locates impedance changes by measuring the delay and polarity of a reflected electrical signal.",
  "motionThesis": "Identical voltage pulses enter open-ended and shorted lines, returning with preserved and inverted polarity after the same round-trip delay.",
  "distinction": "An ideal lossless line with a matched source shows summed incident and reflected voltages, boundary doubling or cancellation, and round-trip distance inference; geometric units are illustrative.",
  "cycleSeconds": 7,
  "references": [
    "https://www.tek.com/en/documents/primer/tdr-test"
  ],
  "facets": [
    "transmission-lines",
    "fault-location"
  ],
  "added": "2026-09-07T16:43:11Z"
},
{
  "id": "oscilloscope-triggering",
  "label": "Oscilloscope Triggering",
  "aliases": [
    "edge triggering",
    "triggered waveform acquisition"
  ],
  "definition": "An oscilloscope trigger aligns waveform records to a specified signal event such as a rising threshold crossing.",
  "motionThesis": "Free-running records start at different signal phases while triggered records keep the same rising threshold crossing at a fixed pretrigger position.",
  "distinction": "Five acquisitions demonstrate a chosen time origin with twenty percent pretrigger data; the signal frequency stays constant and falling crossings do not initiate these records.",
  "cycleSeconds": 12,
  "references": [
    "https://www.tek.com/en/documents/poster/oscilloscope-fundamentals-capturing-your-signal",
    "https://www.tek.com/en/video/how-to/how-to-set-up-oscilloscope-triggering-part-1-edge-triggering"
  ],
  "facets": [
    "waveform-acquisition",
    "timing-reference"
  ],
  "added": "2026-09-07T16:43:11Z"
}
,
{
  "id": "sample-and-hold",
  "label": "Sample-and-Hold",
  "aliases": [
    "track-and-hold",
    "analog sample storage"
  ],
  "definition": "A sample-and-hold circuit tracks an analog input while a switch is closed and stores its voltage on a capacitor when the switch opens.",
  "motionThesis": "The switch opens while the capacitor and output retain a captured voltage despite the continuing input waveform, then closes to resume tracking.",
  "distinction": "An ideal zero-leakage analog memory holds continuous voltages without quantization; equal input and stored voltage at reconnection avoid an unmodeled acquisition transient.",
  "cycleSeconds": 8,
  "references": [
    "https://www.analog.com/en/resources/app-notes/an-1515.html"
  ],
  "facets": [
    "analog-memory",
    "data-acquisition"
  ],
  "added": "2026-09-07T16:44:46Z"
},
{
  "id": "pulse-width-modulation",
  "label": "Pulse-Width Modulation",
  "aliases": [
    "PWM",
    "variable-duty pulse modulation"
  ],
  "definition": "Pulse-width modulation varies the on-time fraction of repeated fixed-period pulses to control their average value.",
  "motionThesis": "Equal-period sawtooth ramps cross successively higher thresholds, extending each output pulse’s width while its period and amplitude stay fixed.",
  "distinction": "A shared ramp-comparison model generates quarter-, half-, and three-quarter-duty pulses; this changes duration within each period rather than pulse density through error feedback.",
  "cycleSeconds": 10,
  "references": [
    "https://www.ti.com/download/trng/docs/seminar/Topic3BL.pdf",
    "https://www.ti.com/lit/pdf/slyy211"
  ],
  "facets": [
    "duty-cycle-control",
    "signal-generation"
  ],
  "added": "2026-09-07T16:44:46Z"
}
,
{
  "id": "heterodyne-frequency-mixing",
  "label": "Heterodyne Frequency Mixing",
  "aliases": [
    "heterodyning",
    "RF frequency conversion"
  ],
  "definition": "A nonlinear mixer combines a signal and local oscillator to create components at their sum and difference frequencies.",
  "motionThesis": "Two unequal-frequency inputs meet at a multiplier, produce sum and difference components, and a filter retains the lower intermediate frequency.",
  "distinction": "Ideal multiplication of five-cycle and four-cycle cosines produces equal half-amplitude components at one and nine cycles; this is continuous frequency conversion rather than aliasing or a zero-frequency lock-in result.",
  "cycleSeconds": 10,
  "references": [
    "https://www.analog.com/media/en/training-seminars/tutorials/mt-080.pdf"
  ],
  "facets": [
    "radio-frequency",
    "signal-conversion"
  ],
  "added": "2026-09-07T16:53:17Z"
},
{
  "id": "phased-array-beam-steering",
  "label": "Phased-Array Beam Steering",
  "aliases": [
    "electronic beam steering",
    "phased antenna array"
  ],
  "definition": "A phased array steers its radiation pattern by controlling relative phases across stationary antenna elements.",
  "motionThesis": "Progressive feed phases change together and the computed main radiation lobe turns while all five physical antenna elements remain fixed.",
  "distinction": "The drawing shows the normalized far-field power array factor for five equally weighted half-wavelength-spaced elements, including sidelobes; it is not a near-field map or a rotating antenna.",
  "cycleSeconds": 12,
  "references": [
    "https://www.analog.com/en/resources/analog-dialogue/articles/phased-array-antenna-patterns-part1.html"
  ],
  "facets": [
    "antenna-arrays",
    "coherent-interference"
  ],
  "added": "2026-09-07T16:53:17Z"
}
,
{
  "id": "capacitive-touch-sensing",
  "label": "Capacitive Touch Sensing",
  "aliases": [
    "self-capacitance touch",
    "capacitive proximity sensing"
  ],
  "definition": "A capacitive touch sensor detects the increase in electrode-to-ground capacitance produced by a nearby finger.",
  "motionThesis": "A finger approaches an insulated electrode, adds a capacitive path through the body, and makes a charge-to-threshold measurement take longer.",
  "distinction": "An illustrative self-capacitance RC readout compares normalized capacitances of seven-sixths and two; it is not mutual-capacitance sensing, a literal whole-finger plate model, or a specific commercial controller implementation.",
  "cycleSeconds": 12,
  "references": [
    "https://onlinedocs.microchip.com/oxy/GUID-A8A0085D-58D1-4E41-A07D-B93BFDE11AFE-en-US-4/GUID-057D7429-BF1E-4084-A4BA-296ABD29CE00.html",
    "https://www.microchip.com/en-us/application-notes/an2934"
  ],
  "facets": [
    "touch-sensing",
    "capacitance-measurement"
  ],
  "added": "2026-09-07T16:56:16Z"
},
{
  "id": "mems-capacitive-accelerometer",
  "label": "MEMS Capacitive Accelerometer",
  "aliases": [
    "differential capacitive accelerometer",
    "MEMS proof-mass sensor"
  ],
  "definition": "A MEMS accelerometer senses inertial proof-mass displacement through changes in opposing capacitances.",
  "motionThesis": "An accelerating housing moves around a spring-suspended mass, narrowing one electrode gap and widening the other to produce a signed differential signal.",
  "distinction": "Magnified steady-state motion follows an ideal damped base-excited oscillator; the phase-lagged displacement and normalized capacitance difference are not labeled as instantaneous acceleration without dynamic calibration.",
  "cycleSeconds": 10,
  "references": [
    "https://www.analog.com/en/resources/technical-articles/accelerometer-and-gyroscopes-sensors-operation-sensing-and-applications.html"
  ],
  "facets": [
    "inertial-sensing",
    "microelectromechanical-systems"
  ],
  "added": "2026-09-07T16:56:16Z"
}
]);
