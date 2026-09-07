const jjStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1522 0%, #030408 100%);
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

  .jj-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Superconductor Electrodes (S1, S2) */
  .sc-electrode {
    fill: #152230;
    stroke: #00e5ff;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px rgba(0, 229, 255, 0.4));
  }

  /* Insulating Barrier (I) */
  .barrier-layer {
    fill: #ffaa00;
    stroke: #ffaa00;
    stroke-width: 1;
    filter: drop-shadow(0 0 4px #ffaa00);
  }

  /* Cooper Pair Wavefunction Phase Tunneling ψ₁ -> ψ₂ */
  .cooper-pair {
    fill: #00ff66;
    filter: drop-shadow(0 0 4px #00ff66);
    animation: tunnel-pair 2s ease-in-out infinite;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-sc { fill: #00e5ff; }
  .lbl-phase { fill: #00ff66; }
  .lbl-barrier { fill: #ffaa00; }

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

  @keyframes tunnel-pair {
    0% { transform: translateX(-24px); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(24px); opacity: 0; }
  }
`;

class PhysicsJosephsonJunction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${jjStyles}</style>
      <div class="canvas-box">
        <svg class="jj-svg" viewBox="0 0 130 130">
          <!-- Superconductor S1 (Left) -->
          <rect x="15" y="35" width="46" height="55" rx="2" class="sc-electrode" />
          <text x="24" y="28" class="lbl lbl-sc">SC 1 (θ₁)</text>

          <!-- Nanoscale Insulating Tunnel Barrier (~1 nm) -->
          <rect x="62" y="32" width="6" height="61" rx="1" class="barrier-layer" />
          <text x="54" y="24" class="lbl lbl-barrier">BARRIER</text>

          <!-- Superconductor S2 (Right) -->
          <rect x="69" y="35" width="46" height="55" rx="2" class="sc-electrode" />
          <text x="76" y="28" class="lbl lbl-sc">SC 2 (θ₂)</text>

          <!-- Macroscopic Quantum Phase Tunneling (Cooper Pairs 2e) -->
          <g class="cooper-pair" style="transform-origin: 65px 65px;">
            <circle cx="60" cy="58" r="2.5" />
            <circle cx="68" cy="58" r="2.5" />
            <line x1="60" y1="58" x2="68" y2="58" stroke="#00ff66" stroke-width="1" />
          </g>

          <g class="cooper-pair" style="transform-origin: 65px 65px; animation-delay: 1s;">
            <circle cx="60" cy="72" r="2.5" />
            <circle cx="68" cy="72" r="2.5" />
            <line x1="60" y1="72" x2="68" y2="72" stroke="#00ff66" stroke-width="1" />
          </g>

          <!-- Phase Difference Label -->
          <text x="32" y="104" class="lbl lbl-phase">Δθ = θ₂ - θ₁ (MACRO PHASE)</text>
        </svg>

        <div class="hud">
          <span>I_s = I_c sin(Δθ)</span>
          <span>d(Δθ)/dt = 2eV/ℏ (AC Effect)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-josephson-junction')) {
  customElements.define('physics-josephson-junction', PhysicsJosephsonJunction);
}
