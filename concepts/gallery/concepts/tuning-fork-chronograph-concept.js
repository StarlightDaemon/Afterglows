const tuningForkChronographStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #152220 0%, #030807 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tc-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tc-svg {
    width: 76px;
    height: 72px;
  }

  /* Steel tuning fork tine acoustic vibration */
  .tc-fork-tines {
    animation: tc-tine-vibrate 0.08s ease-in-out infinite alternate;
    transform-origin: 30px 48px;
  }

  @keyframes tc-tine-vibrate {
    0% { transform: scaleX(0.9); }
    100% { transform: scaleX(1.1); }
  }

  /* Rotating smoked chronograph drum: the side-on drum reads as revolving
     through its scrolling inscribed waveform plus a slight runout wobble */
  .tc-chrono-drum {
    animation: tc-drum-advance 2.5s ease-in-out infinite;
    transform-origin: 56px 36px;
  }

  @keyframes tc-drum-advance {
    0% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
    100% { transform: translateY(0); }
  }

  /* Inscribed millisecond sinusoidal timing wave */
  .tc-sine-wave path {
    stroke: #00e5ff;
    stroke-width: 1.8;
    fill: none;
    /* Real dash gaps: the markup's old "20 0" solid pattern made this
       scroll animation a rendered no-op */
    stroke-dasharray: 16 5;
    animation: tc-sine-scroll 1.2s linear infinite;
    filter: drop-shadow(0 0 2px #00e5ff);
  }

  @keyframes tc-sine-scroll {
    to { stroke-dashoffset: -20; }
  }

  /* Electromagnetic sustain coil pulse */
  .tc-coil-pulse {
    animation: tc-coil-glow 0.4s ease-in-out infinite alternate;
  }

  @keyframes tc-coil-glow {
    0% { opacity: 0.4; }
    100% { opacity: 1; stroke: #ffd700; }
  }

  .tc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptTuningForkChronograph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tuningForkChronographStyles}</style>
      <div class="tc-box">
        <div class="tc-stage">
          <svg class="tc-svg" viewBox="0 0 76 72">
            <!-- Cast Heavy Foundation Bed -->
            <rect x="8" y="56" width="60" height="5" rx="1" fill="#1b2828" stroke="#37474f" stroke-width="0.8" />

            <!-- Calibrated 100 Hz Steel Tuning Fork (Left) -->
            <g class="tc-fork-tines">
              <!-- Stem & Base Block -->
              <rect x="23" y="44" width="4" height="12" fill="#cfd8dc" stroke="#90a4ae" stroke-width="0.6" />
              <!-- Fork U-Bend Base -->
              <path d="M 18 44 Q 25 47 32 44" fill="none" stroke="#eceff1" stroke-width="2.5" />
              <!-- Left Prong Tine -->
              <rect x="17" y="14" width="2.5" height="30" rx="1" fill="#cfd8dc" stroke="#ffffff" stroke-width="0.5" />
              <!-- Right Prong Tine with Flexible Gold Writing Stylus Pen -->
              <rect x="30.5" y="14" width="2.5" height="30" rx="1" fill="#cfd8dc" stroke="#ffffff" stroke-width="0.5" />
              <!-- Flexible Stylus Needle reaching drum -->
              <line x1="33" y1="28" x2="43" y2="28" stroke="#ffd700" stroke-width="0.8" />
              <circle cx="43" cy="28" r="0.8" fill="#ffd700" />
            </g>

            <!-- Electromagnetic Sustaining Coils (Between Tines) -->
            <g class="tc-coil-pulse">
              <rect x="22" y="24" width="6" height="12" rx="1" fill="#2d1c14" stroke="#ffb300" stroke-width="0.6" />
              <!-- Coil Windings -->
              <line x1="22" y1="27" x2="28" y2="27" stroke="#ffd700" stroke-width="0.5" />
              <line x1="22" y1="30" x2="28" y2="30" stroke="#ffd700" stroke-width="0.5" />
              <line x1="22" y1="33" x2="28" y2="33" stroke="#ffd700" stroke-width="0.5" />
            </g>

            <!-- Revolving Smoked Glazed Paper Timing Cylinder Drum (Right) -->
            <g class="tc-chrono-drum">
              <!-- Precision Clockwork Spindle Shaft -->
              <line x1="56" y1="12" x2="56" y2="56" stroke="#b0bec5" stroke-width="1.4" />
              <!-- Cylinder Drum Body -->
              <rect x="43" y="16" width="26" height="36" rx="2" fill="#0d1b1e" stroke="#455a64" stroke-width="0.8" />

              <!-- Scratched Continuous 100 Hz Sine Wave / Time-Base Waveform -->
              <g class="tc-sine-wave">
                <path d="M 43 24 Q 45.5 21 48 24 T 53 24 T 58 24 T 63 24 T 68 24 L 69 24" />
                <path d="M 43 28 Q 45.5 25 48 28 T 53 28 T 58 28 T 63 28 T 68 28 L 69 28" />
                <path d="M 43 32 Q 45.5 29 48 32 T 53 32 T 58 32 T 63 32 T 68 32 L 69 32" />
                <path d="M 43 42 Q 45.5 39 48 42 T 53 42 T 58 42 T 63 42 T 68 42 L 69 42" />
              </g>
            </g>

            <!-- Millisecond Calibrated Scale Indicator -->
            <text x="56" y="50" font-family="monospace" font-size="3" fill="#00e5ff" text-anchor="middle">100Hz = 10ms</text>
          </svg>
        </div>
        <div class="tc-label">FORK CHRONOGRAPH</div>
      </div>
    `;
  }
}

customElements.define('concept-tuning-fork-chronograph', ConceptTuningForkChronograph);
