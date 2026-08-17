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

  /* Oceanic lithospheric plate drifting horizontally */
  .mh-plate-group {
    animation: mh-plate-drift-motion 4.2s linear infinite;
  }

  @keyframes mh-plate-drift-motion {
    0% { transform: translateX(10px); }
    100% { transform: translateX(-14px); }
  }

  /* Mantle plume thermal conduit flow */
  .mh-plume-stem {
    stroke: #ff3d00;
    stroke-width: 2.2;
  }

  /* Ascending magma diapir packets surging up the plume */
  .mh-magma-diapir {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ff3d00, 0 0 10px #ffd54f;
    z-index: 6;
    animation: mh-diapir-rise 1.6s linear infinite;
  }

  .dp1 { left: 54px; animation-delay: 0s; }
  .dp2 { left: 54px; animation-delay: 0.8s; }

  @keyframes mh-diapir-rise {
    0% { transform: translateY(22px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(-8px) scale(1.3); opacity: 0; }
  }

  /* Active young volcanic island erupting over hotspot */
  .mh-active-volcano {
    fill: #ff5722;
    animation: mh-active-glow 1.2s ease-in-out infinite alternate;
  }

  @keyframes mh-active-glow {
    0% { filter: drop-shadow(0 0 2px #d84315); }
    100% { filter: drop-shadow(0 0 8px #ffab40); }
  }

  /* Deep thermal core-mantle boundary anomaly */
  .mh-core-head {
    fill: #ffd54f;
    animation: mh-core-pulse 2.2s ease-in-out infinite alternate;
  }

  @keyframes mh-core-pulse {
    0% { transform: scale(0.85); }
    100% { transform: scale(1.25); filter: drop-shadow(0 0 8px #ff6d00); }
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
          <div class="mh-magma-diapir dp1"></div>
          <div class="mh-magma-diapir dp2"></div>

          <svg class="mh-svg" viewBox="0 0 76 72">
            <!-- Deep Mantle Background -->
            <rect x="8" y="32" width="60" height="34" fill="#301509" stroke="#ff7043" stroke-width="1" />

            <!-- Ocean Water Surface Layer -->
            <rect x="8" y="24" width="60" height="8" fill="#01579b" opacity="0.6" />

            <!-- Moving Oceanic Tectonic Plate and Island Chain -->
            <g class="mh-plate-group">
              <rect x="0" y="30" width="86" height="6" fill="#37474f" stroke="#546e7a" stroke-width="0.8" />
              <!-- Old Guyot / Submerged Seamount (Left) -->
              <path d="M 12 30 L 16 27 L 20 30 Z" fill="#455a64" />
              <!-- Dormant Shield Volcano Island (Middle) -->
              <path d="M 28 30 L 36 21 L 44 30 Z" fill="#546e7a" stroke="#78909c" stroke-width="0.8" />
              <!-- Active Young Shield Volcano Island directly over plume -->
              <path d="M 48 30 L 56 16 L 64 30 Z" fill="#6d4c41" stroke="#ff7043" stroke-width="1" />
              <polygon class="mh-active-volcano" points="55,16 57,16 56,12" />
            </g>

            <!-- Stationary Deep Mantle Plume Conduit Stem -->
            <path d="M 56 64 C 54 52, 58 44, 56 36" fill="none" class="mh-plume-stem" />

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

if (!customElements.get('concept-mantle-hotspot')) {
  customElements.define('concept-mantle-hotspot', ConceptMantleHotspot);
}
