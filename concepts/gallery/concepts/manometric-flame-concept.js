const manometricFlameStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mf-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #2a120b 0%, #0c0402 100%);
    border: 1.5px solid rgba(255, 87, 34, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 87, 34, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mf-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mf-svg {
    width: 76px;
    height: 72px;
  }

  /* Dancing burner flame height modulation */
  .mf-burner-flame {
    animation: mf-flame-flicker 0.18s ease-in-out infinite alternate;
    transform-origin: 22px 34px;
  }

  @keyframes mf-flame-flicker {
    0% { transform: scaleY(0.7) scaleX(1.1); fill: #ff5722; }
    50% { transform: scaleY(1.2) scaleX(0.85); fill: #ffeb3b; }
    100% { transform: scaleY(0.6) scaleX(1.15); fill: #ff9800; }
  }

  /* Rotating 4-sided stroboscopic mirror apparatus */
  .mf-mirror-drum {
    transform-origin: 52px 36px;
    animation: mf-rotate-mirror 3.2s linear infinite;
  }

  @keyframes mf-rotate-mirror {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }

  /* Serrated sawtooth flame waveform reflection inside spinning mirror */
  .mf-sawtooth-waves path {
    stroke: #ff9800;
    stroke-width: 1.2;
    fill: none;
    animation: mf-sawtooth-scroll 1.2s linear infinite;
  }

  @keyframes mf-sawtooth-scroll {
    to { stroke-dashoffset: -24; }
  }

  /* Acoustic diaphragm pulse */
  .mf-diaphragm {
    animation: mf-diaphragm-vibrate 0.18s ease-in-out infinite alternate;
    transform-origin: 22px 50px;
  }

  @keyframes mf-diaphragm-vibrate {
    0% { transform: scaleX(0.92); }
    100% { transform: scaleX(1.08); }
  }

  .mf-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 87, 34, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptManometricFlame extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${manometricFlameStyles}</style>
      <div class="mf-box">
        <div class="mf-stage">
          <svg class="mf-svg" viewBox="0 0 76 72">
            <!-- Koenig Manometric Capsule (Split Gas/Acoustic Chamber) -->
            <!-- Base Stand -->
            <rect x="12" y="58" width="20" height="4" rx="1" fill="#37474f" stroke="#78909c" stroke-width="0.6" />
            <rect x="20" y="52" width="4" height="6" fill="#455a64" stroke="#90a4ae" stroke-width="0.5" />

            <!-- Capsule Body -->
            <circle cx="22" cy="46" r="8" fill="#1e293b" stroke="#ff5722" stroke-width="1" />
            <!-- Elastic Goldbeater's Skin Membrane Diaphragm -->
            <line class="mf-diaphragm" x1="22" y1="38" x2="22" y2="54" stroke="#ffeb3b" stroke-width="1.2" stroke-dasharray="2 1" />

            <!-- Sound Input Speaking Tube (Left) -->
            <path d="M 6 43 L 14 43 L 14 49 L 6 49 Z" fill="#263238" stroke="#78909c" stroke-width="0.6" />
            <!-- Gas Supply Tube (Bottom Left) -->
            <path d="M 12 55 L 18 49" stroke="#ff9800" stroke-width="0.8" fill="none" />

            <!-- Burner Jet Tube (Top) -->
            <rect x="20.5" y="34" width="3" height="4" fill="#b0bec5" stroke="#eceff1" stroke-width="0.5" />
            <!-- Modulated Gas Jet Dancing Flame -->
            <g class="mf-burner-flame">
              <path d="M 22 34 Q 18 28 22 18 Q 26 28 22 34 Z" fill="#ff9800" filter="drop-shadow(0 0 4px #ff5722)" />
              <path d="M 22 34 Q 20 30 22 23 Q 24 30 22 34 Z" fill="#ffeb3b" />
            </g>

            <!-- Revolving Stroboscopic 4-Sided Mirror Box (Right) -->
            <!-- Mirror Stand & Hand Crank Spindle -->
            <rect x="42" y="60" width="22" height="4" rx="1" fill="#212121" stroke="#616161" stroke-width="0.6" />
            <line x1="53" y1="12" x2="53" y2="60" stroke="#b0bec5" stroke-width="1.2" />

            <!-- 4-Sided Mirror Frame -->
            <g class="mf-mirror-drum">
              <rect x="40" y="16" width="26" height="38" rx="1" fill="#0f172a" stroke="#90caf9" stroke-width="1" />
              <!-- Mirror Surface Glare Lines -->
              <line x1="42" y1="18" x2="42" y2="52" stroke="#ffffff" stroke-width="0.8" opacity="0.7" />
              <line x1="64" y1="18" x2="64" y2="52" stroke="#ffffff" stroke-width="0.8" opacity="0.7" />

              <!-- Inscribed Stroboscopic Tooth/Comb Waveform Stream -->
              <g class="mf-sawtooth-waves">
                <path d="M 40 26 L 43 20 L 46 26 L 49 20 L 52 26 L 55 20 L 58 26 L 61 20 L 64 26 L 66 20" stroke-dasharray="30 0" />
                <path d="M 40 38 L 43 32 L 46 38 L 49 32 L 52 38 L 55 32 L 58 38 L 61 32 L 64 38 L 66 32" stroke-dasharray="30 0" />
                <path d="M 40 48 L 43 42 L 46 48 L 49 42 L 52 48 L 55 42 L 58 48 L 61 42 L 64 48 L 66 42" stroke-dasharray="30 0" />
              </g>
            </g>
          </svg>
        </div>
        <div class="mf-label">MANOMETRIC FLAME</div>
      </div>
    `;
  }
}

customElements.define('concept-manometric-flame', ConceptManometricFlame);
