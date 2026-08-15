const lenzStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #151012 0%, #040203 100%);
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

  .lenz-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Permanent Magnet Poles N/S Gap */
  .pole-n {
    fill: #2a2025;
    stroke: #ff5577;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  .pole-s {
    fill: #202535;
    stroke: #00e5ff;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  /* Copper Pendulum Plate Swinging into B-field Gap */
  .copper-plate {
    fill: rgba(255, 170, 0, 0.3);
    stroke: #ffaa00;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #ffaa00);
    transform-origin: 65px 15px;
    animation: swing-damped 2.8s ease-in-out infinite alternate;
  }

  /* Induced Swirling Eddy Current Loops in Copper (Lenz Opposing EMF) */
  .eddy-swirl {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.2;
    stroke-dasharray: 4 2;
    animation: spin-eddy 1.5s linear infinite;
    transform-origin: 65px 75px;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-cu { fill: #ffaa00; }
  .lbl-eddy { fill: #00ff66; }
  .lbl-b { fill: #ff5577; }

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

  @keyframes swing-damped {
    0% { transform: rotate(-24deg); }
    100% { transform: rotate(24deg); }
  }

  @keyframes spin-eddy {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -16; }
  }
`;

class PhysicsLenzEddyCurrents extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lenzStyles}</style>
      <div class="canvas-box">
        <svg class="lenz-svg" viewBox="0 0 130 130">
          <!-- Pivot Support at (65, 15) -->
          <circle cx="65" cy="15" r="3" fill="#888" />

          <!-- Magnet Pole Gap (N on left, S on right) -->
          <rect x="20" y="60" width="18" height="30" rx="2" class="pole-n" />
          <text x="26" y="77" class="lbl" fill="#ff5577">N</text>

          <rect x="92" y="60" width="18" height="30" rx="2" class="pole-s" />
          <text x="98" y="77" class="lbl" fill="#00e5ff">S</text>

          <!-- Swinging Solid Copper Plate with Eddy Currents -->
          <g class="copper-plate">
            <!-- Pendulum Arm -->
            <line x1="65" y1="15" x2="65" y2="60" stroke="#ffaa00" stroke-width="1.5" />
            <!-- Solid Copper Vane -->
            <rect x="45" y="60" width="40" height="32" rx="2" />

            <!-- Induced Circular Eddy Current Loops -->
            <circle cx="56" cy="76" r="8" class="eddy-swirl" />
            <circle cx="74" cy="76" r="8" class="eddy-swirl" />
          </g>

          <!-- Labels -->
          <text x="12" y="24" class="lbl lbl-b">FIELD B ⊗</text>
          <text x="76" y="24" class="lbl lbl-eddy">EDDY CURRENTS J</text>
          <text x="36" y="104" class="lbl lbl-cu">LENZ BRAKE F_damp ∝ -v</text>
        </svg>

        <div class="hud">
          <span>ℰ = -dΦ_B/dt</span>
          <span>Magnetic Eddy Damping</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-lenz-eddy-currents')) {
  customElements.define('physics-lenz-eddy-currents', PhysicsLenzEddyCurrents);
}
