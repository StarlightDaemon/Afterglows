const piezoStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #151016 0%, #040205 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pz-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Quartz Crystal Unit Cell / Non-centrosymmetric lattice */
  .crystal-block {
    fill: rgba(0, 229, 255, 0.12);
    stroke: #00e5ff;
    stroke-width: 1.5;
    animation: compress-crystal 2.4s ease-in-out infinite alternate;
    transform-origin: 65px 65px;
  }

  /* Applied Mechanical Stress Force Arrows (F_stress) */
  .force-arrow {
    stroke: #ff5577;
    stroke-width: 2;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  /* Induced Bound Surface Charges (Piezo Voltage) */
  .charge-pos {
    fill: #ffaa00;
    font-size: 8px;
    font-family: monospace;
    font-weight: bold;
  }

  .charge-neg {
    fill: #00ff66;
    font-size: 8px;
    font-family: monospace;
    font-weight: bold;
  }

  .voltmeter {
    fill: #101520;
    stroke: #00ff66;
    stroke-width: 1;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-stress { fill: #ff5577; }
  .lbl-pol { fill: #ffaa00; }
  .lbl-v { fill: #00ff66; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 170, 0, 0.9);
    z-index: 10;
  }

  @keyframes compress-crystal {
    0% { transform: scale(1.0, 1.0); }
    100% { transform: scale(1.15, 0.85); }
  }
`;

class PhysicsPiezoelectricEffect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${piezoStyles}</style>
      <div class="canvas-box">
        <svg class="pz-svg" viewBox="0 0 130 130">
          <!-- Quartz Crystal Slab undergoing stress -->
          <rect x="35" y="45" width="60" height="40" rx="3" class="crystal-block" />

          <!-- Applied Compressive Stress Arrows -->
          <line x1="65" y1="20" x2="65" y2="40" class="force-arrow" />
          <polygon points="65,44 61,38 69,38" fill="#ff5577" />
          <text x="68" y="28" class="lbl lbl-stress">STRESS σ ↓</text>

          <line x1="65" y1="110" x2="65" y2="90" class="force-arrow" />
          <polygon points="65,86 61,92 69,92" fill="#ff5577" />
          <text x="68" y="106" class="lbl lbl-stress">STRESS σ ↑</text>

          <!-- Top Bound Positive Surface Charge (+) -->
          <text x="42" y="52" class="charge-pos">⊕</text>
          <text x="61" y="52" class="charge-pos">⊕</text>
          <text x="80" y="52" class="charge-pos">⊕</text>

          <!-- Bottom Bound Negative Surface Charge (-) -->
          <text x="42" y="82" class="charge-neg">⊖</text>
          <text x="61" y="82" class="charge-neg">⊖</text>
          <text x="80" y="82" class="charge-neg">⊖</text>

          <!-- Electric Dipole Polarization Vector P -->
          <line x1="18" y1="75" x2="18" y2="55" stroke="#ffaa00" stroke-width="1.5" />
          <polygon points="18,50 15,56 21,56" fill="#ffaa00" />
          <text x="12" y="44" class="lbl lbl-pol">POLARIZATION P</text>

          <!-- External Voltmeter Reading -->
          <text x="100" y="66" class="lbl lbl-v">V = g·σ·t</text>
        </svg>

        <div class="hud">
          <span>P_i = d_ijk · σ_jk</span>
          <span>Piezo Crystal Transduction</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-piezoelectric-effect')) {
  customElements.define('physics-piezoelectric-effect', PhysicsPiezoelectricEffect);
}
