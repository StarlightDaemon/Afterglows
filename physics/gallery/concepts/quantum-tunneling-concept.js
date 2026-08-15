const tunnelingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1622 0%, #03060a 100%);
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

  .tunnel-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Potential Barrier V_0 */
  .barrier {
    fill: rgba(255, 85, 119, 0.2);
    stroke: #ff5577;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 4px rgba(255, 85, 119, 0.4));
  }

  .energy-line {
    stroke: #ffaa00;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Incident & Reflected wave (Interference pattern) */
  .wave-incident {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00e5ff);
    animation: wave-prop-in 1.8s linear infinite;
  }

  /* Exponentially decaying evanescent wavefunction in barrier */
  .wave-decay {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1.5;
    stroke-dasharray: 2 1;
  }

  /* Transmitted wave packet (reduced amplitude) */
  .wave-transmitted {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #00ff66);
    animation: wave-prop-out 1.8s linear infinite;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-e { fill: #ffaa00; }
  .lbl-v0 { fill: #ff5577; }
  .lbl-psi { fill: #00e5ff; }
  .lbl-trans { fill: #00ff66; }

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

  @keyframes wave-prop-in {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -20; }
  }

  @keyframes wave-prop-out {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -20; }
  }
`;

class PhysicsQuantumTunneling extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tunnelingStyles}</style>
      <div class="canvas-box">
        <svg class="tunnel-svg" viewBox="0 0 130 130">
          <!-- Potential Barrier V_0 -->
          <rect x="52" y="32" width="26" height="66" class="barrier" />
          <text x="56" y="28" class="lbl lbl-v0">V₀ = 5.0 eV</text>

          <!-- Particle Energy Level E < V_0 -->
          <line x1="12" y1="62" x2="118" y2="62" class="energy-line" />
          <text x="14" y="58" class="lbl lbl-e">E = 3.2 eV (E &lt; V₀)</text>

          <!-- Incident Wavefunction (x < 0) -->
          <path d="M 12 62 Q 17 46 22 62 T 32 62 T 42 62 T 52 62" class="wave-incident" stroke-dasharray="10 10" />

          <!-- Evanescent Exponential Decay Inside Barrier (0 < x < a) -->
          <path d="M 52 62 Q 60 70 78 74" class="wave-decay" />

          <!-- Transmitted Wavefunction (x > a) -->
          <path d="M 78 74 Q 83 67 88 74 T 98 74 T 108 74 T 118 74" class="wave-transmitted" stroke-dasharray="10 10" />

          <!-- Labels -->
          <text x="14" y="85" class="lbl lbl-psi">ψ_inc + ψ_refl</text>
          <text x="82" y="92" class="lbl lbl-trans">T ~ e⁻²κᵃ</text>
          <text x="55" y="106" class="lbl lbl-v0">a = 0.8 nm</text>
        </svg>

        <div class="hud">
          <span>κ = √(2m(V₀-E))/ℏ</span>
          <span>Tunneling Prob T &gt; 0</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-quantum-tunneling')) {
  customElements.define('physics-quantum-tunneling', PhysicsQuantumTunneling);
}
