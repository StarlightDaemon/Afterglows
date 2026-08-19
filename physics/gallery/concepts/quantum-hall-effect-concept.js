const qheStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d121c 0%, #030408 100%);
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

  .qhe-svg {
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

  /* Quantized Hall Resistance Plateaus R_xy = h / ν e² */
  .hall-staircase {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.8;
    filter: drop-shadow(0 0 4px #00ff66);
  }

  /* Longitudinal Resistivity ρ_xx (Oscillating Shubnikov-de Haas peaks + zero plateaus) */
  .sdh-peaks {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-rxy { fill: #00ff66; }
  .lbl-rxx { fill: #ff5577; }
  .lbl-nu { fill: #00e5ff; }

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

  /* Motion pass */
  /* Field sweep: the Hall staircase carries current while R_xx oscillates */
  .hall-staircase { stroke-dasharray: 6 4; animation: qhe-step 2.2s linear infinite; }
  .sdh-peaks { animation: qhe-sdh 1.8s ease-in-out infinite alternate; }
  @keyframes qhe-step { to { stroke-dashoffset: -20; } }
  @keyframes qhe-sdh { from { opacity: 0.6; } to { opacity: 1; filter: drop-shadow(0 0 3px currentColor); } }

  /* Field-sweep operating point climbing the quantized staircase. */
  .sweep-dot {
    fill: #ffffff;
    filter: drop-shadow(0 0 5px #00ff66);
    animation: qhe-sweep 2.8s ease-in-out infinite alternate;
  }

  @keyframes qhe-sweep {
    0%   { transform: translate(20px, 95px); }
    13%  { transform: translate(38px, 95px); }
    25%  { transform: translate(46px, 80px); }
    35%  { transform: translate(60px, 80px); }
    54%  { transform: translate(70px, 56px); }
    65%  { transform: translate(86px, 56px); }
    86%  { transform: translate(96px, 28px); }
    100% { transform: translate(115px, 28px); }
  }

`;

class PhysicsQuantumHallEffect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${qheStyles}</style>
      <div class="canvas-box">
        <svg class="qhe-svg" viewBox="0 0 130 130">
          <!-- Axes (R_xy & ρ_xx vs Magnetic Field B) -->
          <line x1="20" y1="18" x2="20" y2="108" class="axis" />
          <line x1="20" y1="108" x2="118" y2="108" class="axis" />
          <text x="12" y="16" class="lbl lbl-rxy">R_xy</text>
          <text x="114" y="116" class="lbl" fill="#fff">B</text>

          <!-- Quantized Hall Resistance Plateaus (ν = 4, 3, 2, 1) -->
          <path d="
            M 20 95
            L 38 95
            L 46 80
            L 60 80
            L 70 56
            L 86 56
            L 96 28
            L 115 28
          " class="hall-staircase" />

          <!-- Shubnikov-de Haas Peaks (ρ_xx) -->
          <path d="
            M 20 106
            Q 42 70 46 106
            Q 65 72 70 106
            Q 91 60 96 106
            L 115 106
          " class="sdh-peaks" />

          <!-- Field-sweep operating point -->
          <circle cx="0" cy="0" r="2.8" class="sweep-dot" />

          <!-- Plateau Filling Factor Labels -->
          <text x="24" y="90" class="lbl lbl-nu">ν=4 (h/4e²)</text>
          <text x="48" y="74" class="lbl lbl-nu">ν=3</text>
          <text x="72" y="50" class="lbl lbl-nu">ν=2 (h/2e²)</text>
          <text x="96" y="24" class="lbl lbl-nu">ν=1 (R_K)</text>

          <!-- Label for ρ_xx -->
          <text x="32" y="116" class="lbl lbl-rxx">ρ_xx → 0 (DISSIPATIONLESS)</text>
        </svg>

        <div class="hud">
          <span>R_K = h / e² ≈ 25812.8 Ω</span>
          <span>von Klitzing Constant</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-quantum-hall-effect')) {
  customElements.define('physics-quantum-hall-effect', PhysicsQuantumHallEffect);
}
