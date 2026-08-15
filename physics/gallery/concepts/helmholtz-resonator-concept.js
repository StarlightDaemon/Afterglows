const helmStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #151812 0%, #030502 100%);
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

  .helm-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Cavity Bottle Vessel */
  .cavity-wall {
    fill: rgba(0, 229, 255, 0.08);
    stroke: #00e5ff;
    stroke-width: 1.5;
  }

  /* Oscillating Air Slug in Neck (Inertial Mass m_air) */
  .air-plug {
    fill: rgba(255, 85, 119, 0.4);
    stroke: #ff5577;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 4px #ff5577);
    animation: bounce-plug 1.8s ease-in-out infinite alternate;
  }

  /* Compressing Air Spring in Cavity Volume V_0 */
  .spring-wave {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.2;
    stroke-dasharray: 3 2;
    animation: pulse-cavity 1.8s ease-in-out infinite alternate;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-neck { fill: #ff5577; }
  .lbl-vol { fill: #00ff66; }
  .lbl-res { fill: #ffaa00; }

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

  @keyframes bounce-plug {
    0% { transform: translateY(-4px); }
    100% { transform: translateY(4px); }
  }

  @keyframes pulse-cavity {
    0% { transform: scale(0.9); transform-origin: 65px 75px; opacity: 0.4; }
    100% { transform: scale(1.1); transform-origin: 65px 75px; opacity: 1; }
  }
`;

class PhysicsHelmholtzResonator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${helmStyles}</style>
      <div class="canvas-box">
        <svg class="helm-svg" viewBox="0 0 130 130">
          <!-- Helmholtz Resonator Bottle Geometry: Neck + Cavity Sphere -->
          <path d="
            M 56 18
            L 56 38
            C 30 45, 24 95, 65 106
            C 106 95, 100 45, 74 38
            L 74 18
            Z
          " class="cavity-wall" />

          <!-- Oscillating Air Slug (Acoustic Mass) -->
          <rect x="57" y="24" width="16" height="12" rx="1" class="air-plug" />

          <!-- Internal Cavity Acoustic Compliance (Spring) -->
          <circle cx="65" cy="72" r="18" class="spring-wave" />

          <!-- Labels -->
          <text x="78" y="26" class="lbl lbl-neck">NECK (A, L)</text>
          <text x="52" y="74" class="lbl lbl-vol">VOLUME V</text>
          <text x="14" y="16" class="lbl lbl-res">f₀ = (v/2π)√(A/VL)</text>
        </svg>

        <div class="hud">
          <span>ω₀ = v · √(A / V·L_eq)</span>
          <span>Acoustic Cavity Resonance</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-helmholtz-resonator')) {
  customElements.define('physics-helmholtz-resonator', PhysicsHelmholtzResonator);
}
