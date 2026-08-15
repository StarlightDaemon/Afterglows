const dipoleStyles = `
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

  .dip-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Dipole 1 (m1) */
  .bar-n1 { fill: #ff5577; }
  .bar-s1 { fill: #00e5ff; }

  /* Dipole 2 (m2) */
  .bar-n2 { fill: #ff5577; }
  .bar-s2 { fill: #00e5ff; }

  /* Magnetic Dipole-Dipole Flux Loops */
  .flux-loop {
    fill: none;
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 1;
    stroke-dasharray: 3 2;
  }

  /* Attractive / Torque Force Vector */
  .force-vec {
    stroke: #ffaa00;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-m1 { fill: #ff5577; }
  .lbl-m2 { fill: #00e5ff; }
  .lbl-f { fill: #ffaa00; }

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
  /* Flux threads the pair while the attraction vectors surge */
  .flux-loop { stroke-dasharray: 5 4; animation: dip-flux 1.8s linear infinite; }
  .force-vec { animation: dip-surge 1.4s ease-in-out infinite alternate; }
  @keyframes dip-flux { to { stroke-dashoffset: -18; } }
  @keyframes dip-surge { from { opacity: 0.6; transform: translateX(0); } to { opacity: 1; transform: translateX(2px); filter: drop-shadow(0 0 3px currentColor); } }

`;

class PhysicsMagneticDipoleForce extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dipoleStyles}</style>
      <div class="canvas-box">
        <svg class="dip-svg" viewBox="0 0 130 130">
          <!-- Magnetic Dipole 1 at (x=35, y=65) -->
          <rect x="25" y="58" width="10" height="14" rx="1" class="bar-n1" />
          <rect x="35" y="58" width="10" height="14" rx="1" class="bar-s1" />
          <text x="27" y="67" class="lbl" fill="#fff">N</text>
          <text x="37" y="67" class="lbl" fill="#fff">S</text>
          <text x="26" y="50" class="lbl lbl-m1">DIPOLE m₁</text>

          <!-- Magnetic Dipole 2 at (x=95, y=65) -->
          <rect x="85" y="58" width="10" height="14" rx="1" class="bar-n2" />
          <rect x="95" y="58" width="10" height="14" rx="1" class="bar-s2" />
          <text x="87" y="67" class="lbl" fill="#fff">N</text>
          <text x="97" y="67" class="lbl" fill="#fff">S</text>
          <text x="86" y="50" class="lbl lbl-m2">DIPOLE m₂</text>

          <!-- Connecting Dipole Flux Loops (Attraction) -->
          <path d="M 45 65 Q 65 42 85 65" class="flux-loop" />
          <path d="M 45 65 Q 65 88 85 65" class="flux-loop" />
          <path d="M 25 58 C 15 20, 115 20, 105 58" class="flux-loop" />
          <path d="M 25 72 C 15 110, 115 110, 105 72" class="flux-loop" />

          <!-- Attractive Force Vector F = ∇(m·B) -->
          <line x1="48" y1="65" x2="60" y2="65" class="force-vec" />
          <polygon points="63,65 58,62 58,68" fill="#ffaa00" />

          <line x1="82" y1="65" x2="70" y2="65" class="force-vec" />
          <polygon points="67,65 72,62 72,68" fill="#ffaa00" />

          <!-- Force Law Readout -->
          <text x="44" y="104" class="lbl lbl-f">F ∝ 3μ₀m₁m₂ / (4π r⁴)</text>
        </svg>

        <div class="hud">
          <span>F = ∇(m₂ · B₁)</span>
          <span>Dipole-Dipole Interaction</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-magnetic-dipole-force')) {
  customElements.define('physics-magnetic-dipole-force', PhysicsMagneticDipoleForce);
}
