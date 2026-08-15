const debyeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0e1520 0%, #030408 100%);
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

  .deb-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Central Test Ion Charge (+q) */
  .ion-charge {
    fill: #ff5577;
    filter: drop-shadow(0 0 6px #ff5577);
  }

  /* Debye Screening Sphere Boundary r = lambda_D */
  .debye-sphere {
    fill: rgba(0, 229, 255, 0.12);
    stroke: #00e5ff;
    stroke-width: 1.2;
    stroke-dasharray: 3 2;
    filter: drop-shadow(0 0 4px rgba(0, 229, 255, 0.4));
  }

  /* Surrounding mobile electron cloud (Screening charges) */
  .electron {
    fill: #00ff66;
    filter: drop-shadow(0 0 3px #00ff66);
    animation: orbit-e 3s ease-in-out infinite alternate;
  }

  .e1 { transform-origin: 65px 65px; animation-delay: 0s; }
  .e2 { transform-origin: 65px 65px; animation-delay: 0.5s; }
  .e3 { transform-origin: 65px 65px; animation-delay: 1.0s; }
  .e4 { transform-origin: 65px 65px; animation-delay: 1.5s; }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-deb { fill: #00e5ff; }
  .lbl-ion { fill: #ff5577; }
  .lbl-e { fill: #00ff66; }

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

  @keyframes orbit-e {
    0% { transform: rotate(0deg) scale(0.95); }
    100% { transform: rotate(45deg) scale(1.05); }
  }
`;

class PhysicsDebyeShielding extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${debyeStyles}</style>
      <div class="canvas-box">
        <svg class="deb-svg" viewBox="0 0 130 130">
          <!-- Debye Sphere Envelope (r = λ_D) -->
          <circle cx="65" cy="65" r="36" class="debye-sphere" />
          <text x="44" y="24" class="lbl lbl-deb">DEBYE SPHERE λ_D</text>

          <!-- Central Unscreened Test Ion (+Q) -->
          <circle cx="65" cy="65" r="6" class="ion-charge" />
          <text x="63" y="67" class="lbl" fill="#fff">+</text>

          <!-- Mobile Electron Screening Cloud inside Debye Sphere -->
          <g class="electron e1">
            <circle cx="48" cy="52" r="2.5" />
            <circle cx="82" cy="78" r="2.5" />
          </g>
          <g class="electron e2">
            <circle cx="78" cy="48" r="2.5" />
            <circle cx="52" cy="82" r="2.5" />
          </g>
          <g class="electron e3">
            <circle cx="65" cy="42" r="2.5" />
            <circle cx="65" cy="88" r="2.5" />
          </g>
          <g class="electron e4">
            <circle cx="42" cy="65" r="2.5" />
            <circle cx="88" cy="65" r="2.5" />
          </g>

          <!-- Outside Quasi-Neutral Field (Φ ~ 0) -->
          <text x="10" y="112" class="lbl lbl-e">Φ(r) = (q/4πε₀r) e^(-r/λ_D)</text>
          <text x="14" y="38" class="lbl lbl-ion">TEST CHARGE +q</text>
        </svg>

        <div class="hud">
          <span>λ_D = √(ε₀k_BT_e / n_e·e²)</span>
          <span>Plasma Quasi-Neutrality</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-debye-shielding')) {
  customElements.define('physics-debye-shielding', PhysicsDebyeShielding);
}
