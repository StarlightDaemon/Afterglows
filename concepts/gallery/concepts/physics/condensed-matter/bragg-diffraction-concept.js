const braggStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0e121c 0%, #030408 100%);
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

  .bragg-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Crystal Atomic Lattice Planes (d spacing) */
  .lattice-atom {
    fill: #00e5ff;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  .plane-guide {
    stroke: rgba(0, 229, 255, 0.25);
    stroke-width: 0.8;
    stroke-dasharray: 2 2;
  }

  /* Incident & Reflected X-Ray Beams */
  .xray-ray {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  .path-diff {
    stroke: #ffaa00;
    stroke-width: 1.5;
    stroke-dasharray: 2 2;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-d { fill: #00e5ff; }
  .lbl-theta { fill: #ffaa00; }
  .lbl-ray { fill: #ff5577; }

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

  /* Motion pass */
  /* X-ray wavefronts stream along both reflected paths */
  .xray-ray { stroke-dasharray: 6 3; animation: bragg-run 1.1s linear infinite; }
  .path-diff { animation: bragg-diffp 1.8s ease-in-out infinite alternate; }
  .lattice-atom { animation: bragg-atom 2.4s ease-in-out infinite alternate; }
  @keyframes bragg-run { to { stroke-dashoffset: -18; } }
  @keyframes bragg-diffp { from { opacity: 0.5; } to { opacity: 1; filter: drop-shadow(0 0 3px currentColor); } }
  @keyframes bragg-atom { from { opacity: 0.75; } to { opacity: 1; } }

  /* X-ray photons riding both reflected beam paths. */
  .xray-photon { fill: #ffb3c2; filter: drop-shadow(0 0 5px #ff5577); }
  .xp-1 { animation: bragg-fly-1 2s linear infinite; }
  .xp-2 { animation: bragg-fly-2 2s linear infinite; animation-delay: -1s; }

  @keyframes bragg-fly-1 {
    0%   { transform: translate(15px, 25px); opacity: 0; }
    8%   { opacity: 1; }
    50%  { transform: translate(50px, 55px); }
    94%  { transform: translate(85px, 25px); opacity: 1; }
    100% { transform: translate(88px, 23px); opacity: 0; }
  }
  @keyframes bragg-fly-2 {
    0%   { transform: translate(40px, 25px); opacity: 0; }
    8%   { opacity: 1; }
    50%  { transform: translate(75px, 85px); }
    94%  { transform: translate(110px, 25px); opacity: 1; }
    100% { transform: translate(113px, 23px); opacity: 0; }
  }

`;

class PhysicsBraggDiffraction extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${braggStyles}</style>
      <div class="canvas-box">
        <svg class="bragg-svg" viewBox="0 0 130 130">
          <!-- Top Lattice Plane (y = 55) -->
          <line x1="15" y1="55" x2="115" y2="55" class="plane-guide" />
          <circle cx="25" cy="55" r="2.5" class="lattice-atom" />
          <circle cx="50" cy="55" r="2.5" class="lattice-atom" />
          <circle cx="75" cy="55" r="2.5" class="lattice-atom" />
          <circle cx="100" cy="55" r="2.5" class="lattice-atom" />

          <!-- Bottom Lattice Plane (y = 85) -->
          <line x1="15" y1="85" x2="115" y2="85" class="plane-guide" />
          <circle cx="25" cy="85" r="2.5" class="lattice-atom" />
          <circle cx="50" cy="85" r="2.5" class="lattice-atom" />
          <circle cx="75" cy="85" r="2.5" class="lattice-atom" />
          <circle cx="100" cy="85" r="2.5" class="lattice-atom" />

          <!-- Interplanar Spacing Dimension d -->
          <line x1="110" y1="55" x2="110" y2="85" stroke="#00e5ff" stroke-width="0.8" />
          <text x="114" y="72" class="lbl lbl-d">d</text>

          <!-- Ray 1: Reflecting from top plane atom (x=50, y=55) -->
          <polyline points="15,25 50,55 85,25" class="xray-ray" />

          <!-- Ray 2: Reflecting from bottom plane atom (x=75, y=85) -->
          <polyline points="40,25 75,85 110,25" class="xray-ray" />

          <!-- Extra Path Length Difference 2d sin θ -->
          <line x1="50" y1="55" x2="62.5" y2="70" class="path-diff" />
          <line x1="62.5" y1="70" x2="75" y2="85" class="path-diff" />

          <!-- Travelling X-ray photons -->
          <circle cx="0" cy="0" r="2.6" class="xray-photon xp-1" />
          <circle cx="0" cy="0" r="2.6" class="xray-photon xp-2" />

          <!-- Labels -->
          <text x="12" y="18" class="lbl lbl-ray">X-RAY BEAM (λ)</text>
          <text x="56" y="48" class="lbl lbl-theta">θ</text>
          <text x="66" y="102" class="lbl lbl-theta">Δ = 2d sin θ = nλ</text>
        </svg>

        <div class="hud">
          <span>2d sin θ = nλ</span>
          <span>Bragg Crystal Diffraction</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-bragg-diffraction')) {
  customElements.define('physics-bragg-diffraction', PhysicsBraggDiffraction);
}
