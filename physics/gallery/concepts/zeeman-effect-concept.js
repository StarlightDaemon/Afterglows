const zeemanStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1520 0%, #020406 100%);
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

  .zeeman-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Single Spectral Line (B = 0) */
  .line-unsplit {
    stroke: #00e5ff;
    stroke-width: 2.5;
    filter: drop-shadow(0 0 4px #00e5ff);
  }

  /* Split Zeeman Triplet Lines (B > 0) */
  .line-pi {
    stroke: #00ff66;
    stroke-width: 2;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  .line-sigma-minus {
    stroke: #ffaa00;
    stroke-width: 2;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  .line-sigma-plus {
    stroke: #ff5577;
    stroke-width: 2;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  .field-indicator {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-b0 { fill: #00e5ff; }
  .lbl-pi { fill: #00ff66; }
  .lbl-sigma { fill: #ff5577; }
  .lbl-mag { fill: #ffaa00; }

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

  /* Motion pass */
  /* Field ramps on: the split components shimmer around the parent line */
  .line-pi { animation: zee-split 2.8s ease-in-out infinite; }
  .line-sigma-minus { animation: zee-split 2.8s ease-in-out infinite; animation-delay: -0.9s; }
  .line-sigma-plus { animation: zee-split 2.8s ease-in-out infinite; animation-delay: -1.8s; }
  .field-indicator { animation: zee-field 2.8s ease-in-out infinite alternate; }
  @keyframes zee-split { 0%, 100% { opacity: 0.65; } 50% { opacity: 1; filter: drop-shadow(0 0 4px currentColor); } }
  @keyframes zee-field { from { opacity: 0.6; } to { opacity: 1; } }

`;

class PhysicsZeemanEffect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${zeemanStyles}</style>
      <div class="canvas-box">
        <svg class="zeeman-svg" viewBox="0 0 130 130">
          <!-- B = 0 Regime (Single Line ν₀) -->
          <text x="12" y="20" class="lbl lbl-b0">FIELD B = 0 (DEGENERATE)</text>
          <line x1="65" y1="26" x2="65" y2="48" class="line-unsplit" />
          <text x="61" y="55" class="lbl" fill="#00e5ff">ν₀</text>

          <!-- Divider -->
          <line x1="10" y1="62" x2="120" y2="62" stroke="#223344" stroke-width="1" />

          <!-- B > 0 Regime (Zeeman Triplet Splitting) -->
          <text x="12" y="74" class="lbl lbl-mag">FIELD B_z &gt; 0 (NORMAL ZEEMAN)</text>

          <!-- σ- component (Δm_j = -1) -->
          <line x1="40" y1="80" x2="40" y2="102" class="line-sigma-minus" />
          <text x="32" y="109" class="lbl" fill="#ffaa00">σ⁻ (ν₀-Δν)</text>

          <!-- π component (Δm_j = 0) -->
          <line x1="65" y1="80" x2="65" y2="102" class="line-pi" />
          <text x="60" y="109" class="lbl" fill="#00ff66">π (ν₀)</text>

          <!-- σ+ component (Δm_j = +1) -->
          <line x1="90" y1="80" x2="90" y2="102" class="line-sigma-plus" />
          <text x="82" y="109" class="lbl" fill="#ff5577">σ⁺ (ν₀+Δν)</text>
        </svg>

        <div class="hud">
          <span>ΔE = g_L μ_B B m_l</span>
          <span>Δν = eB / (4π m_e)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-zeeman-effect')) {
  customElements.define('physics-zeeman-effect', PhysicsZeemanEffect);
}
