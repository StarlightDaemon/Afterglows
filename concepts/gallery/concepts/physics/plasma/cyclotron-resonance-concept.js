const cycloStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0e1220 0%, #030408 100%);
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

  .cyclo-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Two Semi-Circular D-Electrodes (Dees) */
  .dee {
    fill: rgba(0, 229, 255, 0.08);
    stroke: #00e5ff;
    stroke-width: 1.5;
  }

  /* Accelerating RF Gap Electric Field */
  .rf-gap {
    stroke: #ffaa00;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Expanding Spiral Ion Trajectory */
  .spiral-orbit {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #00ff66);
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
    animation: draw-spiral 3.2s linear infinite;
  }

  /* Ion physically riding the expanding spiral, then extracted. */
  .accelerating-ion {
    fill: #ff5577;
    filter: drop-shadow(0 0 5px #ff5577);
    animation: ion-spiral 3.2s linear infinite;
  }

  @keyframes ion-spiral {
    0%   { transform: translate(65px, 65px); opacity: 1; }
    5%   { transform: translate(71px, 59px); }
    9%   { transform: translate(65px, 53px); }
    16%  { transform: translate(53px, 65px); }
    22%  { transform: translate(65px, 77px); }
    29%  { transform: translate(83px, 59px); }
    35%  { transform: translate(65px, 41px); }
    43%  { transform: translate(41px, 65px); }
    50%  { transform: translate(65px, 89px); }
    58%  { transform: translate(95px, 59px); }
    65%  { transform: translate(65px, 29px); }
    74%  { transform: translate(29px, 65px); }
    82%  { transform: translate(65px, 101px); }
    96%  { transform: translate(115px, 101px); opacity: 1; }
    100% { transform: translate(119px, 101px); opacity: 0; }
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-dee { fill: #00e5ff; }
  .lbl-rf { fill: #ffaa00; }
  .lbl-ion { fill: #00ff66; }

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

  @keyframes draw-spiral {
    0% { stroke-dashoffset: 250; }
    100% { stroke-dashoffset: 0; }
  }
`;

class PhysicsCyclotronResonance extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cycloStyles}</style>
      <div class="canvas-box">
        <svg class="cyclo-svg" viewBox="0 0 130 130">
          <!-- Left Dee D1 -->
          <path d="M 61 20 A 45 45 0 0 0 61 110 Z" class="dee" />
          <text x="32" y="24" class="lbl lbl-dee">DEE 1</text>

          <!-- Right Dee D2 -->
          <path d="M 69 20 A 45 45 0 0 1 69 110 Z" class="dee" />
          <text x="82" y="24" class="lbl lbl-dee">DEE 2</text>

          <!-- RF Accelerating Gap -->
          <line x1="65" y1="20" x2="65" y2="110" class="rf-gap" />
          <text x="56" y="16" class="lbl lbl-rf">V_RF ~ sin(ω_c t)</text>

          <!-- Archimedean-like Relativistic Spiral Orbit in Uniform B_z -->
          <path d="
            M 65 65
            A 6 6 0 0 1 65 53
            A 12 12 0 0 0 65 77
            A 18 18 0 0 1 65 41
            A 24 24 0 0 0 65 89
            A 30 30 0 0 1 65 29
            A 36 36 0 0 0 65 101
            L 115 101
          " class="spiral-orbit" />

          <!-- Accelerating ion riding the spiral to extraction -->
          <circle cx="0" cy="0" r="2.8" class="accelerating-ion" />
          <text x="82" y="112" class="lbl lbl-ion">EXTRACTED BEAM</text>
        </svg>

        <div class="hud">
          <span>ω_c = qB / m (Isochronous)</span>
          <span>Cyclotron RF Resonance</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-cyclotron-resonance')) {
  customElements.define('physics-cyclotron-resonance', PhysicsCyclotronResonance);
}
