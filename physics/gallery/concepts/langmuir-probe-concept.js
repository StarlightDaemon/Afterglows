const langStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #101622 0%, #030408 100%);
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

  .lang-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .axis {
    stroke: rgba(255, 255, 255, 0.3);
    stroke-width: 1;
  }

  /* Langmuir I-V Characteristic Curve */
  .iv-curve {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  .floating-pot {
    stroke: #ffaa00;
    stroke-width: 0.8;
    stroke-dasharray: 2 2;
  }

  .plasma-pot {
    stroke: #ff5577;
    stroke-width: 0.8;
    stroke-dasharray: 2 2;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-ion { fill: #00e5ff; }
  .lbl-trans { fill: #ffaa00; }
  .lbl-elec { fill: #ff5577; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }
`;

class PhysicsLangmuirProbe extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${langStyles}</style>
      <div class="canvas-box">
        <svg class="lang-svg" viewBox="0 0 130 130">
          <!-- Axes (V_probe vs I_probe) -->
          <line x1="12" y1="65" x2="118" y2="65" class="axis" />
          <line x1="60" y1="18" x2="60" y2="108" class="axis" />
          <text x="114" y="62" class="lbl" fill="#fff">V_p</text>
          <text x="64" y="16" class="lbl" fill="#fff">I_p</text>

          <!-- Characteristic Curve: Ion Saturation -> Exponential -> Electron Saturation -->
          <path d="
            M 15 72
            L 40 70
            Q 58 68 70 45
            L 90 28
            L 115 26
          " class="iv-curve" />

          <!-- Floating Potential V_f (I=0, x=54, y=65) -->
          <circle cx="54" cy="65" r="2" fill="#ffaa00" />
          <line x1="54" y1="65" x2="54" y2="100" class="floating-pot" />
          <text x="46" y="108" class="lbl lbl-trans">V_f (I=0)</text>

          <!-- Plasma Potential V_p (Knee point, x=85, y=32) -->
          <circle cx="85" cy="32" r="2" fill="#ff5577" />
          <line x1="85" y1="32" x2="85" y2="65" class="plasma-pot" />
          <text x="82" y="74" class="lbl lbl-elec">V_plasma</text>

          <!-- Region Labels -->
          <text x="14" y="85" class="lbl lbl-ion">ION SATURATION I_sat</text>
          <text x="76" y="22" class="lbl lbl-elec">ELECTRON SAT</text>
        </svg>

        <div class="hud">
          <span>I = I_is + I_es exp(e(V-V_p)/kT_e)</span>
          <span>Plasma Diagnostics</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-langmuir-probe')) {
  customElements.define('physics-langmuir-probe', PhysicsLangmuirProbe);
}
