const carnotStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #18120d 0%, #080503 100%);
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

  /* P-V Indicator SVG */
  .pv-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  /* Coordinate Axes */
  .axis-line {
    stroke: rgba(255, 204, 0, 0.4);
    stroke-width: 1;
  }

  .isotherm-th {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px rgba(255, 85, 119, 0.5));
  }

  .isotherm-tc {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px rgba(0, 229, 255, 0.5));
  }

  .adiabat {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1.5;
    stroke-dasharray: 3 1;
  }

  .work-area {
    fill: rgba(255, 204, 0, 0.12);
  }

  /* Thermodynamic State Runner. Waypoint translate keyframes rather than
     offset-path: offset-distance was observed frozen in real rendering
     (runner parked at one corner), so the loop is traced explicitly. */
  .state-runner {
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffcc00, 0 0 12px #ffffff;
    animation: carnot-cycle-travel 4s linear infinite;
    z-index: 8;
  }

  /* Heat Exchange Arrows */
  .label-qin {
    position: absolute;
    top: 18px;
    left: 45px;
    font-size: 5.5px;
    font-family: monospace;
    color: #ff5577;
    font-weight: bold;
  }

  .label-qout {
    position: absolute;
    bottom: 24px;
    left: 65px;
    font-size: 5.5px;
    font-family: monospace;
    color: #00e5ff;
    font-weight: bold;
  }

  .axis-p {
    position: absolute;
    top: 14px;
    left: 18px;
    font-size: 6px;
    font-family: monospace;
    color: #ffcc00;
  }

  .axis-v {
    position: absolute;
    bottom: 14px;
    right: 14px;
    font-size: 6px;
    font-family: monospace;
    color: #ffcc00;
  }

  .work-label {
    position: absolute;
    top: 60px;
    left: 62px;
    font-size: 6px;
    font-family: monospace;
    color: #ffcc00;
    opacity: 0.85;
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
    color: rgba(255, 204, 0, 0.85);
    z-index: 10;
  }

  @keyframes carnot-cycle-travel {
    0%   { transform: translate(35px, 30px); }
    12%  { transform: translate(58px, 38px); }
    25%  { transform: translate(80px, 50px); }
    37%  { transform: translate(92px, 72px); }
    45%  { transform: translate(102px, 92px); }
    60%  { transform: translate(77px, 97px); }
    70%  { transform: translate(52px, 92px); }
    85%  { transform: translate(43px, 62px); }
    100% { transform: translate(35px, 30px); }
  }
`;

class PhysicsCarnotCycle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${carnotStyles}</style>
      <div class="canvas-box">
        <svg class="pv-svg" viewBox="0 0 130 130">
          <!-- P-V Axes -->
          <line x1="24" y1="18" x2="24" y2="108" class="axis-line" />
          <line x1="24" y1="108" x2="116" y2="108" class="axis-line" />

          <!-- Enclosed Work Area -->
          <path d="M 35 30 C 50 34, 65 42, 80 50 C 88 65, 96 82, 102 92 C 85 96, 68 98, 52 92 C 45 74, 38 52, 35 30 Z" class="work-area" />

          <!-- Stage 1->2: Isothermal Expansion (T_H) -->
          <path d="M 35 30 C 50 34, 65 42, 80 50" class="isotherm-th" />
          <!-- Stage 2->3: Adiabatic Expansion -->
          <path d="M 80 50 C 88 65, 96 82, 102 92" class="adiabat" />
          <!-- Stage 3->4: Isothermal Compression (T_C) -->
          <path d="M 102 92 C 85 96, 68 98, 52 92" class="isotherm-tc" />
          <!-- Stage 4->1: Adiabatic Compression -->
          <path d="M 52 92 C 45 74, 38 52, 35 30" class="adiabat" />
        </svg>

        <span class="axis-p">P</span>
        <span class="axis-v">V</span>
        <span class="work-label">W_net</span>

        <span class="label-qin">Q_in (T_H)</span>
        <span class="label-qout">Q_out (T_C)</span>

        <div class="state-runner"></div>

        <div class="hud">
          <span>η_max = 1 - T_C/T_H</span>
          <span>W_net = ∮ P dV</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-carnot-cycle')) {
  customElements.define('physics-carnot-cycle', PhysicsCarnotCycle);
}
