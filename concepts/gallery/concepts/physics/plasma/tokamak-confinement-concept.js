const tokaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #161024 0%, #04020a 100%);
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

  .toka-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Toroidal Vacuum Chamber Vessel */
  .torus-vessel {
    fill: none;
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 1.2;
    stroke-dasharray: 2 2;
  }

  .central-solenoid {
    fill: #2a203a;
    stroke: #ffaa00;
    stroke-width: 1.2;
  }

  /* Helical Confined Plasma Ribbon Core */
  .plasma-core {
    fill: none;
    stroke: #ff33bb;
    stroke-width: 2.5;
    filter: drop-shadow(0 0 6px #ff33bb);
  }

  .field-helical {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1;
    stroke-dasharray: 4 2;
    animation: flow-helical 2.4s linear infinite;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-plasma { fill: #ff33bb; }
  .lbl-b { fill: #00ff66; }
  .lbl-sol { fill: #ffaa00; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 51, 187, 0.9);
    z-index: 10;
  }

  @keyframes flow-helical {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -24; }
  }

  /* Confined plasma bunch circulating the toroidal core. */
  .plasma-bunch {
    fill: #ff8fd9;
    filter: drop-shadow(0 0 6px #ff33bb);
    animation: toka-circulate 2.2s linear infinite;
  }

  @keyframes toka-circulate {
    0%    { transform: translate(100px, 65px); }
    12.5% { transform: translate(90px, 82px); }
    25%   { transform: translate(65px, 89px); }
    37.5% { transform: translate(40px, 82px); }
    50%   { transform: translate(30px, 65px); }
    62.5% { transform: translate(40px, 48px); }
    75%   { transform: translate(65px, 41px); }
    87.5% { transform: translate(90px, 48px); }
    100%  { transform: translate(100px, 65px); }
  }
`;

class PhysicsTokamakConfinement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tokaStyles}</style>
      <div class="canvas-box">
        <svg class="toka-svg" viewBox="0 0 130 130">
          <!-- Outer Torus Projection Ring -->
          <ellipse cx="65" cy="65" rx="50" ry="34" class="torus-vessel" />
          <ellipse cx="65" cy="65" rx="20" ry="14" class="torus-vessel" />

          <!-- Central Solenoid Transformer Core -->
          <rect x="58" y="44" width="14" height="42" rx="2" class="central-solenoid" />
          <text x="59" y="40" class="lbl lbl-sol">OHMIC</text>

          <!-- Helical Magnetic Flux Line B = B_phi + B_theta -->
          <path d="
            M 20 65
            C 20 40, 65 34, 110 65
            C 110 90, 65 96, 20 65
          " class="field-helical" />

          <!-- High-Temperature Confined Fusion Plasma Core (100M K) -->
          <ellipse cx="65" cy="65" rx="35" ry="24" class="plasma-core" />

          <!-- Circulating plasma bunch -->
          <circle cx="0" cy="0" r="3" class="plasma-bunch" />

          <!-- Toroidal & Poloidal field vectors -->
          <text x="14" y="24" class="lbl lbl-b">B_tot = B_φ + B_θ</text>
          <text x="76" y="104" class="lbl lbl-plasma">150M °C PLASMA</text>
        </svg>

        <div class="hud">
          <span>q = r B_φ / (R B_θ) &gt; 1</span>
          <span>Tokamak Magnetic Trap</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-tokamak-confinement')) {
  customElements.define('physics-tokamak-confinement', PhysicsTokamakConfinement);
}
