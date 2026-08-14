const snellStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1a24 0%, #04080e 100%);
    overflow: hidden;
  }

  .optics-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Medium 2 Glass Block (bottom half) */
  .glass-medium {
    position: absolute;
    bottom: 14px;
    left: 8px;
    right: 8px;
    height: 52px;
    background: rgba(0, 200, 255, 0.08);
    border-top: 1.5px solid #00e5ff;
    box-shadow: inset 0 0 10px rgba(0, 229, 255, 0.15);
  }

  /* Surface Normal line */
  .normal-line {
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 65px;
    width: 1px;
    background: rgba(255, 255, 255, 0.3);
    border-left: 1px dashed rgba(255, 255, 255, 0.5);
  }

  /* Ray tracing SVG */
  .ray-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .incident-ray {
    stroke: #ff3366;
    stroke-width: 2;
    filter: drop-shadow(0 0 4px #ff3366);
  }

  .refracted-ray {
    stroke: #00ffaa;
    stroke-width: 2;
    filter: drop-shadow(0 0 4px #00ffaa);
  }

  .reflected-ray {
    stroke: rgba(255, 51, 102, 0.4);
    stroke-width: 1.2;
    stroke-dasharray: 3 3;
  }

  /* Photon pulse animating along rays. Anchored at the box origin (the flex
     centering would otherwise offset the static position) so the translate
     keyframes land exactly on the ray coordinates. */
  .photon-pulse {
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff;
    animation: photon-path 2.4s linear infinite;
  }

  .medium-label-air {
    position: absolute;
    top: 24px;
    left: 14px;
    font-size: 6px;
    font-family: monospace;
    color: #ff88aa;
  }

  .medium-label-glass {
    position: absolute;
    bottom: 24px;
    left: 14px;
    font-size: 6px;
    font-family: monospace;
    color: #00ffcc;
  }

  .theta1-label {
    position: absolute;
    top: 44px;
    left: 48px;
    font-size: 6px;
    font-family: monospace;
    color: #ff3366;
  }

  .theta2-label {
    position: absolute;
    top: 74px;
    left: 70px;
    font-size: 6px;
    font-family: monospace;
    color: #00ffaa;
  }

  .hud {
    position: absolute;
    bottom: 4px;
    left: 6px;
    right: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.8);
    z-index: 10;
  }

  @keyframes photon-path {
    0% {
      transform: translate(25px, 25px);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    45% {
      transform: translate(65px, 65px);
    }
    90% {
      transform: translate(88px, 114px);
      opacity: 1;
    }
    95%, 100% {
      transform: translate(88px, 114px);
      opacity: 0;
    }
  }
`;

class PhysicsSnellsLawRefraction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${snellStyles}</style>
      <div class="optics-box">
        <div class="glass-medium"></div>
        <div class="normal-line"></div>

        <svg class="ray-svg" viewBox="0 0 130 130">
          <!-- Incident ray: from (25, 25) to interface at (65, 65) -> 45 deg -->
          <line class="incident-ray" x1="25" y1="25" x2="65" y2="65" />
          <!-- Refracted ray: from (65, 65) to (88, 114) -> ~28 deg -->
          <line class="refracted-ray" x1="65" y1="65" x2="88" y2="114" />
          <!-- Partial reflected ray: from (65, 65) to (105, 25) -> 45 deg -->
          <line class="reflected-ray" x1="65" y1="65" x2="105" y2="25" />
          <!-- Angle arc 1 -->
          <path d="M 52 52 A 18 18 0 0 1 65 47" fill="none" stroke="#ff3366" stroke-width="0.8" />
          <!-- Angle arc 2 -->
          <path d="M 65 80 A 15 15 0 0 0 71 78" fill="none" stroke="#00ffaa" stroke-width="0.8" />
        </svg>

        <span class="medium-label-air">AIR n₁=1.0</span>
        <span class="medium-label-glass">GLASS n₂=1.5</span>
        <span class="theta1-label">θ₁=45°</span>
        <span class="theta2-label">θ₂=28°</span>

        <div class="photon-pulse"></div>

        <div class="hud">
          <span>SNELL'S LAW</span>
          <span>n₁ sinθ₁ = n₂ sinθ₂</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-snells-law-refraction')) {
  customElements.define('physics-snells-law-refraction', PhysicsSnellsLawRefraction);
}
