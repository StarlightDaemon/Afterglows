const gratingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1220 0%, #030408 100%);
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

  .grat-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Transmission Diffraction Grating Mask (Slit Period d) */
  .grating-ruler {
    stroke: #00e5ff;
    stroke-width: 2;
  }

  .grating-slit {
    stroke: #101520;
    stroke-width: 2;
  }

  /* Incident White / Polychromatic Light Beam */
  .incident-beam {
    stroke: #ffffff;
    stroke-width: 2;
    filter: drop-shadow(0 0 3px #ffffff);
  }

  /* Zero-order undispersed beam (m = 0) */
  .order-zero {
    stroke: #ffffff;
    stroke-width: 1.5;
  }

  /* First-order dispersed rainbow spectrum (m = +1) */
  .spectrum-red-pos { stroke: #ff3344; stroke-width: 1.2; }
  .spectrum-green-pos { stroke: #00ff66; stroke-width: 1.2; }
  .spectrum-blue-pos { stroke: #aa00ff; stroke-width: 1.2; }

  /* First-order dispersed rainbow spectrum (m = -1) */
  .spectrum-red-neg { stroke: #ff3344; stroke-width: 1.2; }
  .spectrum-green-neg { stroke: #00ff66; stroke-width: 1.2; }
  .spectrum-blue-neg { stroke: #aa00ff; stroke-width: 1.2; }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-grat { fill: #00e5ff; }
  .lbl-m0 { fill: #ffffff; }
  .lbl-m1 { fill: #ffaa00; }

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
`;

class PhysicsDiffractionGratingOrders extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${gratingStyles}</style>
      <div class="canvas-box">
        <svg class="grat-svg" viewBox="0 0 130 130">
          <!-- Transmission Grating at x=50 -->
          <line x1="50" y1="20" x2="50" y2="110" class="grating-ruler" />
          <line x1="50" y1="30" x2="50" y2="34" class="grating-slit" />
          <line x1="50" y1="42" x2="50" y2="46" class="grating-slit" />
          <line x1="50" y1="54" x2="50" y2="58" class="grating-slit" />
          <line x1="50" y1="66" x2="50" y2="70" class="grating-slit" />
          <line x1="50" y1="78" x2="50" y2="82" class="grating-slit" />
          <line x1="50" y1="90" x2="50" y2="94" class="grating-slit" />
          <text x="32" y="18" class="lbl lbl-grat">GRATING (d)</text>

          <!-- Incident Collimated Beam from Left -->
          <line x1="10" y1="65" x2="50" y2="65" class="incident-beam" />
          <text x="12" y="58" class="lbl" fill="#fff">INCIDENT</text>

          <!-- m = +1 Dispersed Order -->
          <line x1="50" y1="65" x2="115" y2="28" class="spectrum-red-pos" />
          <line x1="50" y1="65" x2="115" y2="35" class="spectrum-green-pos" />
          <line x1="50" y1="65" x2="115" y2="42" class="spectrum-blue-pos" />
          <text x="96" y="24" class="lbl lbl-m1">m = +1</text>

          <!-- m = 0 Undispersed Zero-Order -->
          <line x1="50" y1="65" x2="115" y2="65" class="order-zero" />
          <text x="96" y="62" class="lbl lbl-m0">m = 0</text>

          <!-- m = -1 Dispersed Order -->
          <line x1="50" y1="65" x2="115" y2="88" class="spectrum-blue-neg" />
          <line x1="50" y1="65" x2="115" y2="95" class="spectrum-green-neg" />
          <line x1="50" y1="65" x2="115" y2="102" class="spectrum-red-neg" />
          <text x="96" y="110" class="lbl lbl-m1">m = -1</text>
        </svg>

        <div class="hud">
          <span>d sin θ = m λ</span>
          <span>Angular Dispersion dθ/dλ</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-diffraction-grating-orders')) {
  customElements.define('physics-diffraction-grating-orders', PhysicsDiffractionGratingOrders);
}
