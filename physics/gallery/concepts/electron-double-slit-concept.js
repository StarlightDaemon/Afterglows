const electronDoubleSlitStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0a141e 0%, #020406 100%);
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

  .slit-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Double Slit Barrier Mask */
  .slit-wall {
    stroke: #556677;
    stroke-width: 2.5;
  }

  /* Electron Gun */
  .electron-gun {
    fill: #223344;
    stroke: #00e5ff;
    stroke-width: 1;
  }

  /* Quantum wave fronts emerging from slits */
  .wave-ripple {
    fill: none;
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 1;
    animation: expand-waves 2.4s linear infinite;
  }

  /* Detector Screen & Interference Fringes */
  .screen {
    stroke: rgba(255, 255, 255, 0.4);
    stroke-width: 1.5;
  }

  .fringe-band {
    fill: #00ff66;
    filter: drop-shadow(0 0 4px #00ff66);
  }

  .fringe-sub {
    fill: rgba(0, 255, 102, 0.4);
  }

  .single-electron {
    fill: #ffcc55;
    filter: drop-shadow(0 0 5px #ffaa00);
    animation: emit-electron 2.4s linear infinite;
  }

  .single-electron-b {
    fill: #ffcc55;
    filter: drop-shadow(0 0 5px #ffaa00);
    animation: emit-electron-b 2.4s linear infinite;
    animation-delay: -1.2s;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-fringes { fill: #00ff66; }
  .lbl-slits { fill: #00e5ff; }

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

  @keyframes expand-waves {
    0% { r: 4; opacity: 0.8; }
    100% { r: 45; opacity: 0; }
  }

  @keyframes emit-electron {
    0%   { transform: translate(20px, 65px); opacity: 1; }
    42%  { transform: translate(48px, 65px); opacity: 1; }
    54%  { transform: translate(53px, 52px); opacity: 1; }
    90%  { transform: translate(107px, 58px); opacity: 1; }
    100% { transform: translate(110px, 58px); opacity: 0; }
  }

  @keyframes emit-electron-b {
    0%   { transform: translate(20px, 65px); opacity: 1; }
    42%  { transform: translate(48px, 65px); opacity: 1; }
    54%  { transform: translate(53px, 78px); opacity: 1; }
    90%  { transform: translate(107px, 73px); opacity: 1; }
    100% { transform: translate(110px, 73px); opacity: 0; }
  }
`;

class PhysicsElectronDoubleSlit extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${electronDoubleSlitStyles}</style>
      <div class="canvas-box">
        <svg class="slit-svg" viewBox="0 0 130 130">
          <!-- Electron Source -->
          <rect x="10" y="58" width="12" height="14" rx="2" class="electron-gun" />
          <circle cx="0" cy="0" r="3.2" class="single-electron" />
          <circle cx="0" cy="0" r="3.2" class="single-electron-b" />

          <!-- Double Slit Barrier at x = 50 -->
          <line x1="50" y1="15" x2="50" y2="48" class="slit-wall" />
          <line x1="50" y1="56" x2="50" y2="74" class="slit-wall" />
          <line x1="50" y1="82" x2="50" y2="115" class="slit-wall" />

          <!-- Huygens Wavefronts from Slits (y=52, y=78) -->
          <circle cx="50" cy="52" class="wave-ripple" />
          <circle cx="50" cy="78" class="wave-ripple" />

          <!-- Detector Screen at x = 110 -->
          <line x1="110" y1="15" x2="110" y2="115" class="screen" />

          <!-- Accumulated Probability Density Fringes |ψ₁ + ψ₂|² -->
          <!-- Central Maxima (y=65) -->
          <rect x="111" y="60" width="10" height="10" rx="1" class="fringe-band" />
          <!-- 1st Order Side Maxima (y=44, y=86) -->
          <rect x="111" y="42" width="7" height="6" rx="1" class="fringe-band" />
          <rect x="111" y="82" width="7" height="6" rx="1" class="fringe-band" />
          <!-- 2nd Order Side Maxima (y=26, y=104) -->
          <rect x="111" y="25" width="4" height="4" rx="1" class="fringe-sub" />
          <rect x="111" y="101" width="4" height="4" rx="1" class="fringe-sub" />

          <!-- Labels -->
          <text x="32" y="118" class="lbl lbl-slits">d sin θ = mλ</text>
          <text x="80" y="24" class="lbl lbl-fringes">|ψ₁+ψ₂|²</text>
        </svg>

        <div class="hud">
          <span>λ_dB = h / p</span>
          <span>Wave-Particle Duality</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-electron-double-slit')) {
  customElements.define('physics-electron-double-slit', PhysicsElectronDoubleSlit);
}
