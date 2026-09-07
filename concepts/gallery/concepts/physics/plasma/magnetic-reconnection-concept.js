const reconStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #1c1210 0%, #060302 100%);
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

  .rec-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Inflow Magnetic Field Lines (Anti-parallel: Blue / Orange) */
  .field-in-top {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  .field-in-bot {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  /* Central Sweet-Parker Current Sheet (Dissipation / Reconnection Zone) */
  .current-sheet {
    fill: #ff3344;
    filter: drop-shadow(0 0 6px #ff3344);
    animation: pulse-sheet 1.4s ease-in-out infinite alternate;
  }

  /* High-velocity Reconnected Plasma Outflow Jets (Left & Right) */
  .jet-arrow {
    fill: none;
    stroke: #00ff66;
    stroke-width: 2.4;
    stroke-dasharray: 8 6;
    filter: drop-shadow(0 0 4px #00ff66);
    animation: jet-pulse 1.8s linear infinite;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-inflow { fill: #00e5ff; }
  .lbl-sheet { fill: #ff3344; }
  .lbl-jet { fill: #00ff66; }

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

  @keyframes pulse-sheet {
    0% { opacity: 0.35; transform: scaleX(0.8); transform-origin: 65px 65px; }
    100% { opacity: 1.0; transform: scaleX(1.3); transform-origin: 65px 65px; }
  }

  @keyframes jet-pulse {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -20; }
  }

  /* Plasma parcels: inflow feeds the X-point from above and below, and
     reconnected plasmoids are ejected left and right at v_A. */
  .plasmoid { fill: #9dffc4; filter: drop-shadow(0 0 4px #00ff66); }
  .inflow-parcel { fill: #8ef2ff; filter: drop-shadow(0 0 4px #00e5ff); }

  .pl-l { animation: rec-eject-l 1.6s linear infinite; }
  .pl-r { animation: rec-eject-r 1.6s linear infinite; animation-delay: -0.8s; }
  .in-t { animation: rec-in-t 1.6s linear infinite; }
  .in-b { animation: rec-in-b 1.6s linear infinite; animation-delay: -0.8s; }

  @keyframes rec-eject-l {
    0%   { transform: translate(62px, 65px); opacity: 0; }
    12%  { opacity: 1; }
    88%  { transform: translate(22px, 65px); opacity: 1; }
    100% { transform: translate(17px, 65px); opacity: 0; }
  }
  @keyframes rec-eject-r {
    0%   { transform: translate(68px, 65px); opacity: 0; }
    12%  { opacity: 1; }
    88%  { transform: translate(108px, 65px); opacity: 1; }
    100% { transform: translate(113px, 65px); opacity: 0; }
  }
  @keyframes rec-in-t {
    0%   { transform: translate(65px, 32px); opacity: 0; }
    12%  { opacity: 1; }
    88%  { transform: translate(65px, 58px); opacity: 1; }
    100% { transform: translate(65px, 61px); opacity: 0; }
  }
  @keyframes rec-in-b {
    0%   { transform: translate(65px, 98px); opacity: 0; }
    12%  { opacity: 1; }
    88%  { transform: translate(65px, 72px); opacity: 1; }
    100% { transform: translate(65px, 69px); opacity: 0; }
  }
`;

class PhysicsMagneticReconnection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${reconStyles}</style>
      <div class="canvas-box">
        <svg class="rec-svg" viewBox="0 0 130 130">
          <!-- Reconnected Separatrix Magnetic Field Lines -->
          <!-- Top Inflow Arch -->
          <path d="M 15 25 Q 65 52 115 25" class="field-in-top" />
          <path d="M 15 38 Q 65 56 115 38" class="field-in-top" />

          <!-- Bottom Inflow Arch -->
          <path d="M 15 105 Q 65 78 115 105" class="field-in-bot" />
          <path d="M 15 92 Q 65 74 115 92" class="field-in-bot" />

          <!-- Left Outflow Reconnected Loop -->
          <path class="jet-arrow" d="M 15 25 C 45 45, 45 85, 15 105" />

          <!-- Right Outflow Reconnected Loop -->
          <path class="jet-arrow" d="M 115 25 C 85 45, 85 85, 115 105" />

          <!-- Sweet-Parker Current Sheet (X-Point) -->
          <ellipse cx="65" cy="65" rx="8" ry="3" class="current-sheet" />

          <!-- Inflow parcels and ejected plasmoids -->
          <circle cx="0" cy="0" r="2.4" class="inflow-parcel in-t" />
          <circle cx="0" cy="0" r="2.4" class="inflow-parcel in-b" />
          <circle cx="0" cy="0" r="2.6" class="plasmoid pl-l" />
          <circle cx="0" cy="0" r="2.6" class="plasmoid pl-r" />
          <text x="44" y="60" class="lbl lbl-sheet">X-POINT</text>

          <!-- Inflow & Outflow Velocity Vectors -->
          <text x="48" y="18" class="lbl lbl-inflow">v_in ↓</text>
          <text x="48" y="118" class="lbl lbl-inflow">v_in ↑</text>
          <text x="12" y="68" class="lbl lbl-jet">← JET v_A</text>
          <text x="88" y="68" class="lbl lbl-jet">JET v_A →</text>
        </svg>

        <div class="hud">
          <span>E_rec = η J_z = -v_in × B</span>
          <span>Magnetic Energy Release</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-magnetic-reconnection')) {
  customElements.define('physics-magnetic-reconnection', PhysicsMagneticReconnection);
}
