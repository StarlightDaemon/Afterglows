const siphonRecorderStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #152228 0%, #03080c 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sr-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sr-svg {
    width: 76px;
    height: 72px;
  }

  /* Fine Glass Capillary Siphon Lateral Deflection & Vibration */
  .sr-siphon-tube {
    transform-origin: 38px 20px;
    animation: sr-siphon-vibrate 0.8s ease-in-out infinite alternate;
  }

  @keyframes sr-siphon-vibrate {
    0% { transform: rotate(-8deg); }
    50% { transform: rotate(10deg); }
    100% { transform: rotate(-4deg); }
  }

  /* Advancing Recording Paper Tape Flow */
  .sr-wavy-ink-line path {
    stroke: #00e5ff;
    stroke-width: 1.2;
    fill: none;
    animation: sr-tape-advance 2s linear infinite;
  }

  @keyframes sr-tape-advance {
    to { stroke-dashoffset: -20; }
  }

  /* Moving Coil Galvanometer Suspension */
  .sr-moving-coil {
    stroke: #ffd700;
    animation: sr-coil-twist 2s ease-in-out infinite alternate;
    transform-origin: 38px 18px;
  }

  @keyframes sr-coil-twist {
    0% { transform: rotate(-5deg); }
    100% { transform: rotate(5deg); }
  }

  .sr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSiphonRecorder extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${siphonRecorderStyles}</style>
      <div class="sr-box">
        <div class="sr-stage">
          <svg class="sr-svg" viewBox="0 0 76 72">
            <!-- Transatlantic Galvanometer Powerful Field Magnets (Top Left/Right) -->
            <rect x="14" y="8" width="12" height="20" rx="1" fill="#c62828" stroke="#ef5350" stroke-width="0.8" />
            <text x="20" y="20" font-family="sans-serif" font-size="4" font-weight="bold" fill="#ffffff" text-anchor="middle">N</text>

            <rect x="50" y="8" width="12" height="20" rx="1" fill="#1565c0" stroke="#42a5f5" stroke-width="0.8" />
            <text x="56" y="20" font-family="sans-serif" font-size="4" font-weight="bold" fill="#ffffff" text-anchor="middle">S</text>

            <!-- Suspended Signal Coil & Silk Coupling Threads -->
            <g class="sr-moving-coil">
              <rect x="33" y="10" width="10" height="16" rx="1" fill="#2d1c14" stroke="#ffd700" stroke-width="0.8" />
              <!-- Suspension Cocoon Silk Fiber -->
              <line x1="38" y1="4" x2="38" y2="10" stroke="#ffffff" stroke-width="0.5" />
            </g>

            <!-- Glass Siphon Ink Reservoir Pot (Tiny glass bowl) -->
            <circle cx="28" cy="18" r="3.5" fill="rgba(0, 229, 255, 0.3)" stroke="#00e5ff" stroke-width="0.8" />

            <!-- Ultra-Fine Glass Capillary Siphon Tube (Bent hair-fine glass needle) -->
            <g class="sr-siphon-tube">
              <path d="M 28 18 L 38 18 L 38 46" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" />
              <!-- Squirting Blue Ink Droplet at Tip -->
              <circle cx="38" cy="46" r="1" fill="#00e5ff" filter="drop-shadow(0 0 3px #00e5ff)" />
            </g>

            <!-- Advancing White Paper Telegraph Tape Strip -->
            <rect x="6" y="44" width="64" height="18" fill="#fffde7" stroke="#cfd8dc" stroke-width="0.8" />

            <!-- Siphon Recorder Wavy Undulating Inscribed Signal Line (Positive / Negative Morse cable pulses) -->
            <g class="sr-wavy-ink-line">
              <path d="M 6 53 Q 12 47 18 53 T 30 59 T 42 47 T 54 53 T 66 59 L 70 53" stroke-dasharray="30 0" />
            </g>

            <!-- Tape Drive Pull Rollers at Right -->
            <rect x="66" y="42" width="4" height="22" rx="1" fill="#424242" stroke="#78909c" stroke-width="0.6" />
          </svg>
        </div>
        <div class="sr-label">SIPHON RECORDER</div>
      </div>
    `;
  }
}

customElements.define('concept-siphon-recorder', ConceptSiphonRecorder);
