const mbStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #161210 0%, #050302 100%);
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

  .mb-svg {
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

  /* Cold Distribution Curve (T1 = 100 K: Sharp, high peak at low v) */
  .curve-cold {
    fill: rgba(0, 229, 255, 0.12);
    stroke: #00e5ff;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  /* Medium Distribution Curve (T2 = 300 K: Broadened) */
  .curve-med {
    fill: rgba(0, 255, 102, 0.1);
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  /* Hot Distribution Curve (T3 = 900 K: Flattened, high tail) */
  .curve-hot {
    fill: rgba(255, 85, 119, 0.08);
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  .peak-marker {
    stroke-dasharray: 2 2;
    stroke-width: 0.8;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-cold { fill: #00e5ff; }
  .lbl-med { fill: #00ff66; }
  .lbl-hot { fill: #ff5577; }
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

  /* Motion pass */
  /* The three temperature curves shimmer in turn; v_mp marker pulses */
  .curve-cold { animation: mb-glow 3.9s ease-in-out infinite; }
  .curve-med { animation: mb-glow 3.9s ease-in-out infinite; animation-delay: -1.3s; }
  .curve-hot { animation: mb-glow 3.9s ease-in-out infinite; animation-delay: -2.6s; }
  .peak-marker { animation: mb-peak 2s ease-in-out infinite alternate; }
  @keyframes mb-glow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; filter: drop-shadow(0 0 4px currentColor); } }
  @keyframes mb-peak { from { opacity: 0.55; } to { opacity: 1; } }

`;

class PhysicsMaxwellBoltzmann extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${mbStyles}</style>
      <div class="canvas-box">
        <svg class="mb-svg" viewBox="0 0 130 130">
          <!-- Axes -->
          <line x1="18" y1="18" x2="18" y2="108" class="axis" />
          <line x1="18" y1="108" x2="120" y2="108" class="axis" />
          <text x="12" y="16" class="lbl lbl-axis">f(v)</text>
          <text x="114" y="116" class="lbl lbl-axis">v</text>

          <!-- Hot Distribution (T=900K) -->
          <path d="M 18,108 Q 35,108 55,85 T 80,72 Q 95,78 120,105 L 120,108 Z" class="curve-hot" />

          <!-- Med Distribution (T=300K) -->
          <path d="M 18,108 Q 28,105 45,50 T 60,50 Q 80,75 110,108 L 110,108 Z" class="curve-med" />

          <!-- Cold Distribution (T=100K) -->
          <path d="M 18,108 Q 24,95 32,25 T 42,28 Q 55,75 80,108 L 80,108 Z" class="curve-cold" />

          <!-- Peak indicators -->
          <line x1="32" y1="25" x2="32" y2="108" stroke="#00e5ff" class="peak-marker" />
          <line x1="52" y1="50" x2="52" y2="108" stroke="#00ff66" class="peak-marker" />
          <line x1="75" y1="72" x2="75" y2="108" stroke="#ff5577" class="peak-marker" />

          <!-- Curve Labels -->
          <text x="36" y="24" class="lbl lbl-cold">T₁ = 100 K</text>
          <text x="58" y="46" class="lbl lbl-med">T₂ = 300 K</text>
          <text x="82" y="68" class="lbl lbl-hot">T₃ = 900 K</text>
        </svg>

        <div class="hud">
          <span>f(v) ∝ v² exp(-mv²/2k_BT)</span>
          <span>v_mp = √(2k_BT/m)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-maxwell-boltzmann')) {
  customElements.define('physics-maxwell-boltzmann', PhysicsMaxwellBoltzmann);
}
