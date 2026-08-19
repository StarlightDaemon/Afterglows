const heatStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #1c1012 0%, #060203 100%);
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

  .heat-svg {
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

  /* Initial sharp delta temperature distribution (t=0) */
  .profile-t0 {
    fill: none;
    stroke: #ff3344;
    stroke-width: 1.5;
    stroke-dasharray: 2 2;
  }

  /* Intermediate diffused profile (t1) */
  .profile-t1 {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  /* Late broad flattened profile (t2) */
  .profile-t2 {
    fill: rgba(0, 229, 255, 0.12);
    stroke: #00e5ff;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  .thermal-rod {
    fill: #202530;
    stroke: #445566;
    stroke-width: 1;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-t0 { fill: #ff3344; }
  .lbl-t1 { fill: #ffaa00; }
  .lbl-t2 { fill: #00e5ff; }

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
  /* Time evolution: the profile relaxes t0 -> t1 -> t2 in sequence */
  .profile-t0 { animation: heat-seq 5.4s ease-in-out infinite; }
  .profile-t1 { animation: heat-seq 5.4s ease-in-out infinite; animation-delay: -3.6s; }
  .profile-t2 { animation: heat-seq 5.4s ease-in-out infinite; animation-delay: -1.8s; }
  .thermal-rod { animation: heat-rod 2.7s ease-in-out infinite alternate; }
  @keyframes heat-seq { 0%, 28% { opacity: 1; filter: drop-shadow(0 0 4px currentColor); } 38%, 90% { opacity: 0.35; filter: none; } 100% { opacity: 1; } }
  @keyframes heat-rod { from { opacity: 0.7; } to { opacity: 1; } }

  /* Heat packets conducted outward along the rod from the hot spot. */
  .heat-packet {
    fill: #ffcf80;
    filter: drop-shadow(0 0 4px #ffaa00);
  }

  .hpk-l { animation: heat-spread-l 2.7s ease-out infinite; }
  .hpk-r { animation: heat-spread-r 2.7s ease-out infinite; animation-delay: -1.35s; }

  @keyframes heat-spread-l {
    0%   { transform: translate(65px, 104px); opacity: 0; }
    10%  { opacity: 1; }
    88%  { transform: translate(22px, 104px); opacity: 1; }
    100% { transform: translate(17px, 104px); opacity: 0; }
  }

  @keyframes heat-spread-r {
    0%   { transform: translate(65px, 104px); opacity: 0; }
    10%  { opacity: 1; }
    88%  { transform: translate(108px, 104px); opacity: 1; }
    100% { transform: translate(113px, 104px); opacity: 0; }
  }

`;

class PhysicsHeatDiffusion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${heatStyles}</style>
      <div class="canvas-box">
        <svg class="heat-svg" viewBox="0 0 130 130">
          <!-- Physical Conduction Rod -->
          <rect x="15" y="100" width="100" height="8" rx="1" class="thermal-rod" />

          <!-- Axes -->
          <line x1="15" y1="20" x2="15" y2="100" class="axis" />
          <line x1="15" y1="100" x2="115" y2="100" class="axis" />
          <text x="12" y="16" class="lbl" fill="#fff">T(x,t)</text>
          <text x="112" y="114" class="lbl" fill="#fff">x</text>

          <!-- Late Broad Profile (t=t₂) -->
          <path d="M 15,100 Q 40,98 65,70 Q 90,98 115,100 Z" class="profile-t2" />

          <!-- Intermediate Profile (t=t₁) -->
          <path d="M 25,100 Q 48,95 65,48 Q 82,95 105,100" class="profile-t1" />

          <!-- Initial Sharp Hot Spot Profile (t=0) -->
          <path d="M 45,100 Q 58,95 65,24 Q 72,95 85,100" class="profile-t0" />

          <!-- Heat packets spreading along the rod -->
          <circle cx="0" cy="0" r="2.6" class="heat-packet hpk-l" />
          <circle cx="0" cy="0" r="2.6" class="heat-packet hpk-r" />

          <!-- Labels -->
          <text x="70" y="26" class="lbl lbl-t0">t = 0 (HOT SPOT)</text>
          <text x="70" y="48" class="lbl lbl-t1">t = t₁</text>
          <text x="70" y="70" class="lbl lbl-t2">t = t₂ (DIFFUSED)</text>
        </svg>

        <div class="hud">
          <span>∂T/∂t = α (∂²T/∂x²)</span>
          <span>Gaussian Spread σ ~ √(2αt)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-heat-diffusion')) {
  customElements.define('physics-heat-diffusion', PhysicsHeatDiffusion);
}
