const alfvenStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1822 0%, #03060a 100%);
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

  .alf-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Magnetic Field Tension Lines (Plucked guitar string analog) */
  .field-line {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  /* Plasma ions frozen into magnetic field lines (Alfvén Frozen-in Flux) */
  .plasma-ion {
    fill: #ffaa00;
    filter: drop-shadow(0 0 4px #ffaa00);
  }

  /* Magnetic Perturbation Arrow */
  .b-pert {
    stroke: #ff5577;
    stroke-width: 1.2;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-b0 { fill: #00e5ff; }
  .lbl-mhd { fill: #ffaa00; }
  .lbl-va { fill: #00ff66; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    z-index: 10;
  }

  /* Motion pass */
  /* Transverse MHD oscillation: frozen-in ions ride the field-line wave */
  .plasma-ion { animation: alf-bob 1.5s ease-in-out infinite alternate; }
  .b-pert { animation: alf-pert 1.5s ease-in-out infinite alternate; }
  .field-line { animation: alf-sway 3s ease-in-out infinite alternate; }
  @keyframes alf-bob { from { transform: translateY(-3px); } to { transform: translateY(3px); } }
  @keyframes alf-pert { from { opacity: 0.5; } to { opacity: 1; } }
  @keyframes alf-sway { from { transform: translateY(-1.5px); } to { transform: translateY(1.5px); } }

`;

class PhysicsAlfvenWaves extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${alfvenStyles}</style>
      <div class="canvas-box">
        <svg class="alf-svg" viewBox="0 0 130 130">
          <!-- Baseline Background Magnetic Field B₀ -->
          <text x="12" y="18" class="lbl lbl-b0">FIELD B₀ →</text>

          <!-- Upper Transverse Shear Alfvén Wave (Frozen-in Flux) -->
          <path d="M 12 38 Q 38 18 65 38 T 118 38" class="field-line" />
          <circle cx="38" cy="28" r="2.5" class="plasma-ion" />
          <circle cx="65" cy="38" r="2.5" class="plasma-ion" />
          <circle cx="92" cy="48" r="2.5" class="plasma-ion" />

          <!-- Center Transverse Shear Wave -->
          <path d="M 12 65 Q 38 45 65 65 T 118 65" class="field-line" />
          <circle cx="38" cy="55" r="2.5" class="plasma-ion" />
          <circle cx="65" cy="65" r="2.5" class="plasma-ion" />
          <circle cx="92" cy="75" r="2.5" class="plasma-ion" />

          <!-- Lower Transverse Shear Wave -->
          <path d="M 12 92 Q 38 72 65 92 T 118 92" class="field-line" />
          <circle cx="38" cy="82" r="2.5" class="plasma-ion" />
          <circle cx="65" cy="92" r="2.5" class="plasma-ion" />
          <circle cx="92" cy="102" r="2.5" class="plasma-ion" />

          <!-- Magnetic Tension & Propagation Vector -->
          <text x="12" y="112" class="lbl lbl-mhd">FROZEN-IN ION MASS ρ</text>
          <text x="76" y="112" class="lbl lbl-va">v_A = B/√(μ₀ρ)</text>
        </svg>

        <div class="hud">
          <span>v_A = B₀ / √(μ₀ ρ₀)</span>
          <span>MHD Shear Alfvén Wave</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-alfven-waves')) {
  customElements.define('physics-alfven-waves', PhysicsAlfvenWaves);
}
