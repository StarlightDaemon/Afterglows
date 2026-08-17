const dorpatRefractorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a1e28 0%, #04050a 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dr-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dr-svg {
    width: 76px;
    height: 72px;
  }

  /* German equatorial mount polar axis tracking rotation */
  .dr-polar-axis {
    animation: dr-equatorial-track 4s linear infinite;
    transform-origin: 38px 34px;
  }

  @keyframes dr-equatorial-track {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* 9.6-inch Fraunhofer Achromatic Refractor tube bold equatorial slew */
  .dr-telescope-tube {
    transform-origin: 38px 30px;
    animation: dr-tube-slew 3.6s ease-in-out infinite alternate;
  }

  @keyframes dr-tube-slew {
    0% { transform: rotate(-35deg); }
    50% { transform: rotate(4deg); }
    100% { transform: rotate(35deg); }
  }

  /* Centrifugal governor clockwork drive oscillation */
  .dr-clockwork-governor {
    transform-origin: 24px 50px;
    animation: dr-spin-governor 1.2s linear infinite;
  }

  @keyframes dr-spin-governor {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Starlight photon packet entering telescope objective */
  .dr-star-photon {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00e5ff, 0 0 10px #ffffff;
    z-index: 6;
    animation: dr-photon-travel 1.8s linear infinite;
  }

  @keyframes dr-photon-travel {
    0% { transform: translate(32px, -18px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(-4px, 4px) scale(1.2); opacity: 0; }
  }

  .dr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFraunhoferDorpatRefractor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dorpatRefractorStyles}</style>
      <div class="dr-box">
        <div class="dr-stage">
          <div class="dr-star-photon"></div>

          <svg class="dr-svg" viewBox="0 0 76 72">
            <!-- Heavy Mahogany Pedestal & German Polar Axis Casting -->
            <polygon points="38,50 18,68 58,68" fill="#2d1c14" stroke="#ffb300" stroke-width="1" />

            <!-- Fraunhofer Centrifugal Friction Governor Clockwork Drive -->
            <g class="dr-clockwork-governor">
              <circle cx="24" cy="50" r="4" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />
              <line x1="20" y1="50" x2="28" y2="50" stroke="#ffffff" stroke-width="1" />
              <line x1="24" y1="46" x2="24" y2="54" stroke="#ffffff" stroke-width="1" />
            </g>

            <!-- Inclined Polar Axis Pier (Aligned to Tartu/Dorpat 58° Latitude) -->
            <line x1="38" y1="50" x2="38" y2="34" stroke="#ffd700" stroke-width="3.5" stroke-linecap="round" />

            <!-- Graduated Right Ascension Hour Circle (Polar Axis Worm Gear) -->
            <g class="dr-polar-axis">
              <circle cx="38" cy="34" r="8" fill="#1b2938" stroke="#00e5ff" stroke-width="1.2" stroke-dasharray="3 1" />
              <line x1="30" y1="34" x2="46" y2="34" stroke="#ffd700" stroke-width="1" />
              <line x1="38" y1="26" x2="38" y2="42" stroke="#ffd700" stroke-width="1" />
            </g>

            <!-- Fraunhofer 9.6-Inch Achromatic Refractor Telescope Assembly (Bold & Bright) -->
            <g class="dr-telescope-tube">
              <!-- Declination Axis Hub & Counterweight Bar -->
              <circle cx="38" cy="30" r="4" fill="#ffd700" stroke="#ffb300" stroke-width="1" />
              <line x1="38" y1="30" x2="48" y2="40" stroke="#ffd700" stroke-width="2.2" />
              <circle cx="48" cy="40" r="3.5" fill="#37474f" stroke="#ffd700" stroke-width="0.8" />

              <!-- Bold Mahogany & Polished Brass Main Telescope Barrel -->
              <polygon points="12,27 64,27 64,33 12,33" fill="#6d4c41" stroke="#ffd700" stroke-width="1.2" />
              <line x1="12" y1="30" x2="64" y2="30" stroke="#ffecb3" stroke-width="0.8" />

              <!-- 9.6-Inch Crown & Flint Doublet Achromatic Objective Lens Cell (Right) -->
              <rect x="64" y="25" width="6" height="10" rx="1.5" fill="#ffd700" stroke="#ffb300" stroke-width="1" />
              <line x1="66" y1="26" x2="66" y2="34" stroke="#00e5ff" stroke-width="2" />

              <!-- Eyepiece Drawtube & Micrometer (Left) -->
              <rect x="6" y="28" width="6" height="4" rx="1" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />
              <circle cx="6" cy="30" r="1.5" fill="#00e5ff" />
            </g>

            <!-- Inscription -->
            <text x="38" y="66" font-family="monospace" font-size="3" fill="#80d8ff" text-anchor="middle">FRAUNHOFER CLOCK DRIVE</text>
          </svg>
        </div>
        <div class="dr-label">DORPAT REFRACTOR</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-fraunhofer-dorpat-refractor')) {
  customElements.define('concept-fraunhofer-dorpat-refractor', ConceptFraunhoferDorpatRefractor);
}
