const lorentzContractionStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #101218 0%, #030406 100%);
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

  .contraction-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Rest frame rod (v = 0) */
  .rod-rest {
    fill: rgba(0, 229, 255, 0.15);
    stroke: #00e5ff;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px rgba(0, 229, 255, 0.5));
  }

  /* Relativistic moving rod (v = 0.866c, γ = 2, L = L₀/2) */
  .rod-contracted {
    fill: rgba(255, 85, 119, 0.25);
    stroke: #ff5577;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 4px rgba(255, 85, 119, 0.6));
    animation: move-contracted 2.6s linear infinite;
  }

  .dimension-line {
    stroke: #ffaa00;
    stroke-width: 0.8;
    stroke-dasharray: 2 2;
  }

  .lbl {
    font-size: 5.5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-rest { fill: #00e5ff; }
  .lbl-rel { fill: #ff5577; }
  .lbl-dim { fill: #ffaa00; }
  .lbl-sub { fill: rgba(255, 255, 255, 0.5); font-size: 4.5px; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 85, 119, 0.9);
    z-index: 10;
  }

  @keyframes move-contracted {
    0% { transform: translateX(-40px); }
    100% { transform: translateX(40px); }
  }
`;

class PhysicsLorentzContraction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lorentzContractionStyles}</style>
      <div class="canvas-box">
        <svg class="contraction-svg" viewBox="0 0 130 130">
          <!-- Frame S (Rest Frame) -->
          <text x="12" y="24" class="lbl lbl-rest">FRAME S (v = 0)</text>
          <rect x="25" y="30" width="80" height="14" rx="2" class="rod-rest" />
          <line x1="25" y1="48" x2="105" y2="48" class="dimension-line" />
          <line x1="25" y1="46" x2="25" y2="50" class="dimension-line" />
          <line x1="105" y1="46" x2="105" y2="50" class="dimension-line" />
          <text x="56" y="55" class="lbl lbl-dim">L₀ = 80 m</text>

          <!-- Divider -->
          <line x1="10" y1="64" x2="120" y2="64" stroke="#222" stroke-width="1" />

          <!-- Frame S' (Relativistic v = 0.866c, γ = 2) -->
          <text x="12" y="76" class="lbl lbl-rel">FRAME S' (v = 0.866c, γ = 2.0)</text>
          <g class="rod-contracted">
            <rect x="45" y="82" width="40" height="14" rx="2" />
            <text x="52" y="91" class="lbl" fill="#fff">L = L₀/γ</text>
          </g>

          <line x1="45" y1="100" x2="85" y2="100" class="dimension-line" />
          <line x1="45" y1="98" x2="45" y2="102" class="dimension-line" />
          <line x1="85" y1="98" x2="85" y2="102" class="dimension-line" />
          <text x="56" y="107" class="lbl lbl-dim">L = 40 m</text>
        </svg>

        <div class="hud">
          <span>L = L₀ √(1 - v²/c²)</span>
          <span>γ = 1/√(1-β²)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-lorentz-contraction')) {
  customElements.define('physics-lorentz-contraction', PhysicsLorentzContraction);
}
