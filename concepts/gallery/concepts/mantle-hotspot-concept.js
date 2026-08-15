const mantleHotspotStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mh-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 60% 70%, #291206 0%, #0a0401 100%);
    border: 1.5px solid rgba(255, 112, 67, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 112, 67, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mh-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mh-svg {
    width: 76px;
    height: 72px;
  }

  /* Mantle plume thermal conduit flow */
  .mh-plume-stem {
    stroke: #ff3d00;
    stroke-dasharray: 4 3;
    animation: mh-plume-rise 1.5s linear infinite;
  }

  @keyframes mh-plume-rise {
    to { stroke-dashoffset: -14; }
  }

  /* Plate drifting to the left */
  .mh-plate-drift {
    stroke-dasharray: 3 3;
    animation: mh-drift 3s linear infinite;
  }

  @keyframes mh-drift {
    to { stroke-dashoffset: 12; }
  }

  /* Active young volcanic island over hotspot */
  .mh-active-volcano {
    fill: #ff5722;
    animation: mh-active-glow 2s ease-in-out infinite alternate;
  }

  @keyframes mh-active-glow {
    0% { filter: drop-shadow(0 0 2px #d84315); }
    100% { filter: drop-shadow(0 0 7px #ffab40); }
  }

  /* Deep thermal core-mantle boundary anomaly */
  .mh-core-head {
    fill: #ffd54f;
    animation: mh-core-pulse 2.2s ease-in-out infinite alternate;
  }

  @keyframes mh-core-pulse {
    0% { transform: scale(0.9); }
    100% { transform: scale(1.1); filter: drop-shadow(0 0 6px #ff6d00); }
  }

  .mh-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 112, 67, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptMantleHotspot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${mantleHotspotStyles}</style>
      <div class="mh-box">
        <div class="mh-stage">
          <svg class="mh-svg" viewBox="0 0 76 72">
            <!-- Deep Mantle Background -->
            <rect x="8" y="32" width="60" height="34" fill="#301509" stroke="#ff7043" stroke-width="0.8" />

            <!-- Ocean Water Surface Layer -->
            <rect x="8" y="24" width="60" height="8" fill="#01579b" opacity="0.6" />

            <!-- Moving Oceanic Tectonic Plate -->
            <rect x="8" y="30" width="60" height="6" fill="#37474f" stroke="#546e7a" stroke-width="0.8" />
            <line x1="64" y1="33" x2="12" y2="33" class="mh-plate-drift" stroke="#b0bec5" stroke-width="0.8" />

            <!-- Island Chain Sequence (Oldest/Eroded left -> Youngest/Active right) -->
            <!-- Old Guyot / Submerged Seamount (Left) -->
            <path d="M 12 30 L 16 27 L 20 30 Z" fill="#455a64" />

            <!-- Dormant Shield Volcano Island (Middle) -->
            <path d="M 28 30 L 36 21 L 44 30 Z" fill="#546e7a" stroke="#78909c" stroke-width="0.8" />

            <!-- Active Young Shield Volcano Island directly over plume (Right) -->
            <path d="M 48 30 L 56 16 L 64 30 Z" fill="#6d4c41" stroke="#ff7043" stroke-width="1" />
            <polygon class="mh-active-volcano" points="55,16 57,16 56,12" />

            <!-- Deep Mantle Plume Conduit Stem (Stationary hot upwelling) -->
            <path d="M 56 64 C 54 52, 58 44, 56 36" fill="none" class="mh-plume-stem" stroke-width="2" />

            <!-- Core-Mantle Boundary Thermal Diapir Bulb -->
            <g transform="translate(56, 62)">
              <circle class="mh-core-head" cx="0" cy="0" r="4" />
            </g>
          </svg>
        </div>
        <div class="mh-label">MANTLE HOTSPOT</div>
      </div>
    `;
  }
}

customElements.define('concept-mantle-hotspot', ConceptMantleHotspot);
