const planckStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #1a100d 0%, #060302 100%);
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

  .bb-svg {
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

  /* Hot Blackbody Curve (T = 5500 K: Visible solar peak) */
  .curve-5500 {
    fill: rgba(255, 170, 0, 0.15);
    stroke: #ffaa00;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #ffaa00);
  }

  /* Moderate Blackbody Curve (T = 4000 K) */
  .curve-4000 {
    fill: rgba(255, 85, 119, 0.1);
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  /* Cool Blackbody Curve (T = 3000 K) */
  .curve-3000 {
    fill: rgba(170, 0, 255, 0.08);
    stroke: #aa00ff;
    stroke-width: 1.5;
  }

  /* Wien's Displacement Law Locus */
  .wien-locus {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1;
    stroke-dasharray: 2 2;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-5500 { fill: #ffaa00; }
  .lbl-4000 { fill: #ff5577; }
  .lbl-wien { fill: #00e5ff; }
  .lbl-axis { fill: rgba(255, 255, 255, 0.6); }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 170, 0, 0.85);
    z-index: 10;
  }
`;

class PhysicsBlackbodyPlanck extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${planckStyles}</style>
      <div class="canvas-box">
        <svg class="bb-svg" viewBox="0 0 130 130">
          <!-- Axes -->
          <line x1="18" y1="18" x2="18" y2="108" class="axis" />
          <line x1="18" y1="108" x2="120" y2="108" class="axis" />
          <text x="12" y="16" class="lbl lbl-axis">B_λ</text>
          <text x="114" y="116" class="lbl lbl-axis">λ</text>

          <!-- Cool Curve (3000K) -->
          <path d="M 18,108 Q 30,108 55,88 T 72,82 Q 95,95 120,108 L 120,108 Z" class="curve-3000" />

          <!-- Medium Curve (4000K) -->
          <path d="M 18,108 Q 28,105 45,58 T 60,54 Q 85,80 120,108 L 120,108 Z" class="curve-4000" />

          <!-- Hot Curve (5500K Solar) -->
          <path d="M 18,108 Q 24,90 35,28 T 48,25 Q 75,70 120,108 L 120,108 Z" class="curve-5500" />

          <!-- Wien Peak Locus Curve (λ_max · T = b) -->
          <path d="M 38 25 Q 52 50 68 82" class="wien-locus" />

          <!-- Labels -->
          <text x="44" y="22" class="lbl lbl-5500">5500 K (Sun)</text>
          <text x="56" y="50" class="lbl lbl-4000">4000 K</text>
          <text x="66" y="76" class="lbl" fill="#aa00ff">3000 K</text>
          <text x="74" y="38" class="lbl lbl-wien">λ_max T = b</text>
        </svg>

        <div class="hud">
          <span>B_λ = (2hc²/λ⁵)/(e^(hc/λkT)-1)</span>
          <span>b = 2.898×10⁻³ m·K</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-blackbody-planck')) {
  customElements.define('physics-blackbody-planck', PhysicsBlackbodyPlanck);
}
