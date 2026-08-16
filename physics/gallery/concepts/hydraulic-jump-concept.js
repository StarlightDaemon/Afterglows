const hydraulicStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #081620 0%, #03080e 100%);
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

  /* Channel Bed and Sluice Gate */
  .channel-bed {
    position: absolute;
    bottom: 24px;
    left: 10px;
    right: 10px;
    height: 4px;
    background: #203545;
    border-top: 1px solid #00e5ff;
  }

  .sluice-gate {
    position: absolute;
    top: 20px;
    left: 24px;
    width: 4px;
    height: 68px;
    background: #506575;
    border: 1px solid #88aacc;
    z-index: 8;
  }

  /* Fluid Profile SVG */
  .fluid-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
  }

  .supercritical-water {
    fill: rgba(0, 229, 255, 0.25);
    stroke: #00e5ff;
    stroke-width: 1.5;
  }

  .jump-roller {
    fill: none;
    stroke: #ffffff;
    stroke-width: 2.5;
    stroke-dasharray: 3 3;
    filter: drop-shadow(0 0 3px #ffffff);
    animation: turbulence 0.4s linear infinite alternate;
  }

  .subcritical-water {
    fill: rgba(0, 150, 255, 0.35);
    stroke: #00e5ff;
    stroke-width: 1.5;
  }

  /* Streamlines */
  .stream-fast {
    fill: none;
    stroke: rgba(0, 255, 102, 0.85);
    stroke-width: 2.4;
    stroke-dasharray: 6 4;
    animation: flow-fast 0.6s linear infinite;
  }

  .stream-slow {
    fill: none;
    stroke: rgba(0, 229, 255, 0.75);
    stroke-width: 2.4;
    stroke-dasharray: 5 5;
    animation: flow-slow 1.6s linear infinite;
  }

  /* Velocity & Depth Labels */
  .label-fr1 {
    position: absolute;
    bottom: 38px;
    left: 32px;
    font-size: 5.5px;
    font-family: monospace;
    color: #00ff66;
  }

  .label-fr2 {
    position: absolute;
    top: 48px;
    right: 18px;
    font-size: 5.5px;
    font-family: monospace;
    color: #00e5ff;
  }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 6px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    z-index: 10;
  }

  @keyframes turbulence {
    0% { transform: translateY(0.5px) scale(0.95); }
    100% { transform: translateY(-3px) scale(1.06); }
  }

  @keyframes flow-fast {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -18; }
  }

  @keyframes flow-slow {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -16; }
  }
`;

class PhysicsHydraulicJump extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${hydraulicStyles}</style>
      <div class="canvas-box">
        <div class="channel-bed"></div>
        <div class="sluice-gate"></div>

        <svg class="fluid-svg" viewBox="0 0 130 130">
          <!-- Supercritical Shallow Flow (y1 = 12px, x: 28 to 58) -->
          <polygon points="28,102 28,92 58,92 58,102" class="supercritical-water" />
          <line x1="28" y1="96" x2="58" y2="96" class="stream-fast" />

          <!-- Hydraulic Jump Transition & Standing Wave Roller (x: 58 to 78) -->
          <path d="M 58 92 C 64 92, 68 62, 78 62 L 78 102 L 58 102 Z" class="subcritical-water" />
          <path d="M 62 86 C 68 80, 72 65, 76 65" class="jump-roller" />
          <circle cx="68" cy="74" r="4" fill="none" stroke="#ffffff" stroke-width="1" stroke-dasharray="2 2" />

          <!-- Subcritical Deep Flow (y2 = 40px, x: 78 to 120) -->
          <polygon points="78,102 78,62 120,62 120,102" class="subcritical-water" />
          <line x1="78" y1="74" x2="120" y2="74" class="stream-slow" />
          <line x1="78" y1="88" x2="120" y2="88" class="stream-slow" />
        </svg>

        <span class="label-fr1">Fr₁ > 1 (Supercritical)</span>
        <span class="label-fr2">Fr₂ < 1 (Subcritical)</span>

        <div class="hud">
          <span>y₂/y₁ = ½(√(1+8Fr₁²)-1)</span>
          <span>ΔE = (y₂-y₁)³/(4y₁y₂)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-hydraulic-jump')) {
  customElements.define('physics-hydraulic-jump', PhysicsHydraulicJump);
}
