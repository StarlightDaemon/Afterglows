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
    animation: dr-equatorial-track 5s linear infinite;
    transform-origin: 38px 34px;
  }

  @keyframes dr-equatorial-track {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* 9.6-inch Fraunhofer Achromatic Refractor tube declination slew */
  .dr-telescope-tube {
    transform-origin: 38px 30px;
    animation: dr-tube-slew 3.8s ease-in-out infinite alternate;
  }

  @keyframes dr-tube-slew {
    0% { transform: rotate(-28deg); }
    50% { transform: rotate(5deg); }
    100% { transform: rotate(32deg); }
  }

  /* Centrifugal governor clockwork drive oscillation */
  .dr-clockwork-governor {
    transform-origin: 24px 50px;
    animation: dr-spin-governor 1s linear infinite;
  }

  @keyframes dr-spin-governor {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Starlight ray beam entering flint/crown glass doublet */
  .dr-star-beam {
    stroke-dasharray: 4 2;
    animation: dr-beam-flow 1.2s linear infinite;
  }

  @keyframes dr-beam-flow {
    to { stroke-dashoffset: -12; }
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
          <svg class="dr-svg" viewBox="0 0 76 72">
            <!-- Heavy Mahogany Pedestal & German Polar Axis Casting -->
            <polygon points="38,50 20,68 56,68" fill="#2d1c14" stroke="#5c3826" stroke-width="0.8" />

            <!-- Fraunhofer Centrifugal Friction Governor Clockwork Drive (Tucked in base) -->
            <g class="dr-clockwork-governor">
              <circle cx="24" cy="50" r="3.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />
              <line x1="20" y1="50" x2="28" y2="50" stroke="#ffffff" stroke-width="0.8" />
              <line x1="24" y1="46" x2="24" y2="54" stroke="#ffffff" stroke-width="0.8" />
            </g>

            <!-- Inclined Polar Axis Pier (Aligned to Tartu/Dorpat 58° Latitude) -->
            <line x1="38" y1="50" x2="38" y2="34" stroke="#ffd700" stroke-width="3" stroke-linecap="round" />

            <!-- Graduated Right Ascension Hour Circle (Polar Axis Worm Gear) -->
            <g class="dr-polar-axis">
              <circle cx="38" cy="34" r="7" fill="#1b2938" stroke="#00e5ff" stroke-width="0.8" stroke-dasharray="2 1" />
            </g>

            <!-- Fraunhofer 9.6-Inch Achromatic Refractor Telescope Assembly -->
            <g class="dr-telescope-tube">
              <!-- Declination Axis Hub & Counterweight Bar -->
              <circle cx="38" cy="30" r="3" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />
              <line x1="38" y1="30" x2="48" y2="38" stroke="#ffd700" stroke-width="1.6" />
              <circle cx="48" cy="38" r="2.5" fill="#37474f" stroke="#78909c" stroke-width="0.5" />

              <!-- Mahogany Veneer Main Telescope Tube -->
              <polygon points="14,28.5 62,28.5 62,31.5 14,31.5" fill="#4e342e" stroke="#ffd700" stroke-width="0.8" />

              <!-- 9.6-Inch Crown & Flint Doublet Achromatic Objective Lens Cell (Right) -->
              <rect x="62" y="27" width="5" height="6" rx="1" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />
              <line x1="63" y1="28" x2="63" y2="32" stroke="#00e5ff" stroke-width="1.2" />

              <!-- Sighting Starlight Collimation Ray entering Objective -->
              <line class="dr-star-beam" x1="67" y1="30" x2="76" y2="30" stroke="#80d8ff" stroke-width="0.8" />

              <!-- Eyepiece Drawtube & Micrometer (Left) -->
              <rect x="9" y="29" width="5" height="2" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
            </g>

            <!-- Stellar Parallax Tracking Equation -->
            <text x="38" y="65" font-family="monospace" font-size="3" fill="#80d8ff" text-anchor="middle">FRAUNHOFER CLOCK DRIVE 1824</text>
          </svg>
        </div>
        <div class="dr-label">DORPAT REFRACTOR</div>
      </div>
    `;
  }
}

customElements.define('concept-fraunhofer-dorpat-refractor', ConceptFraunhoferDorpatRefractor);
