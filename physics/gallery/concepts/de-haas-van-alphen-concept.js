const dhvaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #181424 0%, #050308 100%);
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

  .dhva-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Quantized Landau level cylindrical tubes expanding in k-space */
  .landau-tube {
    animation: dhva-tube-expand 3s ease-in-out infinite alternate;
  }

  @keyframes dhva-tube-expand {
    0% { r: 16px; opacity: 0.5; stroke: #818cf8; }
    50% { opacity: 0.95; stroke: #c084fc; filter: drop-shadow(0 0 3px #a855f7); }
    100% { r: 28px; opacity: 0.3; stroke: #e879f9; }
  }

  /* Magnetic susceptibility dM/dB de Haas-van Alphen oscillatory waveform */
  .oscillation-wave {
    animation: dhva-wave-drift 4s linear infinite;
  }

  @keyframes dhva-wave-drift {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 40; }
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-fermi { fill: #38bdf8; }
  .lbl-landau { fill: #c084fc; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(192, 132, 252, 0.9);
    z-index: 10;
  }
`;

class PhysicsDeHaasVanAlphen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dhvaStyles}</style>
      <div class="canvas-box">
        <svg class="dhva-svg" viewBox="0 0 130 130">
          <!-- Fermi Surface Envelope (Top View in k-space k_x, k_y) -->
          <circle cx="65" cy="46" r="28" fill="#0c4a6e" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.2" />
          <text x="50" y="24" class="lbl lbl-fermi">FERMI SURFACE</text>

          <!-- Concentric Quantized Landau Tubes Passing Through Fermi Surface Extremal Orbit -->
          <circle class="landau-tube" cx="65" cy="46" r="22" fill="none" stroke-width="1.4" stroke-dasharray="3 1.5" />
          <circle cx="65" cy="46" r="14" fill="none" stroke="#a855f7" stroke-width="1" stroke-dasharray="2 2" opacity="0.8" />
          <circle cx="65" cy="46" r="6" fill="none" stroke="#c084fc" stroke-width="0.8" />
          <text x="66" y="48" class="lbl lbl-landau">LANDAU TUBE</text>

          <!-- k-space Coordinate Axes -->
          <line x1="30" y1="46" x2="100" y2="46" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 2" />
          <line x1="65" y1="12" x2="65" y2="80" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 2" />

          <!-- Magnetic Susceptibility Oscillation vs 1/B Graph (Bottom) -->
          <rect x="15" y="88" width="100" height="28" rx="2" fill="#0f172a" stroke="#334155" stroke-width="0.8" />
          <!-- Baseline zero line -->
          <line x1="18" y1="102" x2="112" y2="102" stroke="#64748b" stroke-width="0.6" />

          <!-- Periodic dM/dB de Haas-van Alphen Oscillation Curve -->
          <path class="oscillation-wave" d="
            M 20 102
            Q 25 90 30 102
            T 40 102
            T 50 102
            T 60 102
            T 70 102
            T 80 102
            T 90 102
            T 100 102
            T 110 102
          " fill="none" stroke="#e879f9" stroke-width="1.2" stroke-dasharray="60 40" />

          <text x="20" y="96" class="lbl" fill="#e879f9">ΔM ~ cos(2π F / B)</text>
          <text x="94" y="112" class="lbl" fill="#94a3b8">1/B →</text>
        </svg>
        <div class="hud">
          <span>A_ext = 2πe F / ℏ</span>
          <span>dHvA EFFECT</span>
        </div>
      </div>
    `;
  }
}

customElements.define('physics-de-haas-van-alphen', PhysicsDeHaasVanAlphen);
