const meridianTransitStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mt-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151a28 0%, #030408 100%);
    border: 1.5px solid rgba(124, 77, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(124, 77, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mt-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mt-svg {
    width: 76px;
    height: 72px;
  }

  /* Meridian transit achromatic telescope altitude rotation in meridian plane */
  .mt-transit-scope {
    transform-origin: 38px 36px;
    animation: mt-meridian-tilt 4.4s ease-in-out infinite alternate;
  }

  @keyframes mt-meridian-tilt {
    0% { transform: rotate(-25deg); }
    50% { transform: rotate(10deg); }
    100% { transform: rotate(35deg); }
  }

  /* Greenwich 6-foot graduated silver circle illumination */
  .mt-silver-circle {
    animation: mt-circle-glow 2s ease-in-out infinite alternate;
  }

  @keyframes mt-circle-glow {
    0% { stroke: #b388ff; opacity: 0.6; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #7c4dff); }
  }

  /* Stellar meridian transit star ray through roof slit */
  .mt-star-transit {
    animation: mt-star-drift 2.2s linear infinite;
  }

  @keyframes mt-star-drift {
    0% { transform: translate(-8px, -4px); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translate(8px, 4px); opacity: 0; }
  }

  .mt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(179, 136, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptMeridianTransitCircle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${meridianTransitStyles}</style>
      <div class="mt-box">
        <div class="mt-stage">
          <svg class="mt-svg" viewBox="0 0 76 72">
            <!-- Massive Greenwich Airy Meridian Stone Piers (East & West Piers) -->
            <rect x="14" y="24" width="8" height="42" fill="#212738" stroke="#455a64" stroke-width="0.8" />
            <rect x="54" y="24" width="8" height="42" fill="#212738" stroke="#455a64" stroke-width="0.8" />
            <rect x="10" y="62" width="56" height="6" fill="#151b26" stroke="#37474f" stroke-width="0.8" />

            <!-- 6-Foot Graduated Silver Declination Circle (Mounted on Axis) -->
            <circle cx="38" cy="36" r="22" fill="#0d111a" stroke="#ffd700" stroke-width="1.2" />
            <circle class="mt-silver-circle" cx="38" cy="36" r="18" fill="none" stroke-width="0.6" stroke-dasharray="1 1.5" />

            <!-- Reading Microscopes Piercing West Stone Pier (Set of 6 Micrometers) -->
            <g stroke="#ffd700" stroke-width="0.8">
              <line x1="22" y1="26" x2="26" y2="28" />
              <line x1="22" y1="36" x2="26" y2="36" />
              <line x1="22" y1="46" x2="26" y2="44" />
            </g>

            <!-- Stellar Meridian Transit Flash (Star passing optical spider-wires) -->
            <g class="mt-star-transit">
              <circle cx="38" cy="12" r="1.5" fill="#ffffff" filter="drop-shadow(0 0 3px #00e5ff)" />
              <line x1="38" y1="4" x2="38" y2="18" stroke="#80d8ff" stroke-width="0.6" stroke-dasharray="2 1" />
            </g>

            <!-- Heavy Double-Cone Cast-Iron Transit Telescope Tube -->
            <g class="mt-transit-scope">
              <!-- Central Cube Axis & Hollow Trunnions (Axis of rotation strictly East-West) -->
              <rect x="33" y="31" width="10" height="10" rx="1" fill="#311b92" stroke="#7c4dff" stroke-width="1" />
              <circle cx="38" cy="36" r="2.5" fill="#ffd700" />

              <!-- Upper Objective Cone Tube -->
              <polygon points="34,31 42,31 44,12 32,12" fill="#1a237e" stroke="#7c4dff" stroke-width="0.8" />
              <!-- Achromatic Objective Lens Cell (8-inch Aperture) -->
              <rect x="31" y="10" width="14" height="3" rx="0.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />
              <line x1="33" y1="10" x2="43" y2="10" stroke="#00e5ff" stroke-width="1.2" />

              <!-- Lower Eyepiece Cone Tube & Filar Micrometer Eye-End -->
              <polygon points="34,41 42,41 43,58 33,58" fill="#1a237e" stroke="#7c4dff" stroke-width="0.8" />
              <rect x="32" y="58" width="12" height="4" rx="0.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />
            </g>

            <!-- Prime Meridian 0° 0' 0" Inscription -->
            <text x="38" y="66" font-family="monospace" font-size="3" fill="#b388ff" text-anchor="middle">PRIME MERIDIAN 0° 00' 00"</text>
          </svg>
        </div>
        <div class="mt-label">AIRY TRANSIT CIRCLE</div>
      </div>
    `;
  }
}

customElements.define('concept-meridian-transit-circle', ConceptMeridianTransitCircle);
