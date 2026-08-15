const helmholtzResonatorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #241d15 0%, #0a0705 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.4);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hr-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hr-svg {
    width: 76px;
    height: 72px;
  }

  /* Air cavity internal standing acoustic pressure oscillation */
  .hr-pressure-core {
    animation: hr-pressure-pulse 1.4s ease-in-out infinite alternate;
    transform-origin: 38px 36px;
  }

  @keyframes hr-pressure-pulse {
    0% { transform: scale(0.7); opacity: 0.2; fill: #ffd700; }
    50% { transform: scale(1); opacity: 0.65; fill: #ff9100; }
    100% { transform: scale(1.15); opacity: 0.85; fill: #ffea00; }
  }

  /* Neck acoustic mass air oscillation */
  .hr-neck-airflow {
    animation: hr-neck-surge 0.7s ease-in-out infinite alternate;
  }

  @keyframes hr-neck-surge {
    0% { transform: translateY(-2px); stroke-dashoffset: 0; }
    100% { transform: translateY(2px); stroke-dashoffset: 6; }
  }

  /* Sound wave entering main aperture */
  .hr-incoming-waves path {
    animation: hr-wave-drift 1.4s linear infinite;
    stroke: #ffd54f;
    stroke-width: 1;
    fill: none;
  }

  @keyframes hr-wave-drift {
    0% { transform: translateX(0); opacity: 0; }
    30% { opacity: 0.8; }
    100% { transform: translateX(10px); opacity: 0; }
  }

  .hr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHelmholtzResonator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${helmholtzResonatorStyles}</style>
      <div class="hr-box">
        <div class="hr-stage">
          <svg class="hr-svg" viewBox="0 0 76 72">
            <!-- Polished Walnut Base & Brass Pillar -->
            <rect x="22" y="60" width="32" height="5" rx="1" fill="#3e2723" stroke="#5d4037" stroke-width="0.8" />
            <rect x="36" y="52" width="4" height="8" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />

            <!-- Incoming Ambient Acoustic Frequency Wave Trains (Left) -->
            <g class="hr-incoming-waves">
              <path d="M 6 30 Q 10 36 6 42" />
              <path d="M 11 28 Q 15 36 11 44" />
              <path d="M 16 26 Q 20 36 16 46" />
            </g>

            <!-- Resonator Spherical Brass Bulb Cavity -->
            <!-- Background interior glow -->
            <circle cx="38" cy="36" r="18" fill="#1b1208" stroke="#ffb300" stroke-width="1.2" />

            <!-- Internal Acoustic Standing Pressure Wave Core -->
            <ellipse class="hr-pressure-core" cx="38" cy="36" rx="13" ry="13" filter="drop-shadow(0 0 4px #ffd700)" />

            <!-- Wide Wide-Aperture Sound Entry Neck (Left) -->
            <path d="M 21 31 L 14 30 L 14 42 L 21 41" fill="#3e2723" stroke="#ffd700" stroke-width="1.2" />
            <!-- Oscillating acoustic slug in neck -->
            <g class="hr-neck-airflow">
              <line x1="15" y1="33" x2="20" y2="33" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="2 1" />
              <line x1="15" y1="36" x2="20" y2="36" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="2 1" />
              <line x1="15" y1="39" x2="20" y2="39" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="2 1" />
            </g>

            <!-- Tapered Ear-Nipple Acoustic Port (Right) -->
            <path d="M 55 34 L 64 34.5 L 64 37.5 L 55 38 Z" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />
            <!-- Isolated Pure Harmonic Resonance Pulse Exiting Ear Port -->
            <circle cx="67" cy="36" r="1.5" fill="#ffea00" filter="drop-shadow(0 0 3px #ffea00)" />

            <!-- Calibrated Tuning Engraving Ring -->
            <path d="M 32 20 A 18 18 0 0 1 44 20" fill="none" stroke="#ffe082" stroke-width="0.6" stroke-dasharray="1 1" />
            <text x="38" y="24" font-family="monospace" font-size="3.2" fill="#ffd54f" text-anchor="middle">UT3 256Hz</text>
          </svg>
        </div>
        <div class="hr-label">HELMHOLTZ RESONATOR</div>
      </div>
    `;
  }
}

customElements.define('concept-helmholtz-resonator', ConceptHelmholtzResonator);
