const torquetumEquatorialStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tq-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a26 0%, #060408 100%);
    border: 1.5px solid rgba(171, 71, 188, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(171, 71, 188, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tq-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tq-svg {
    width: 76px;
    height: 72px;
  }

  /* Inclined Equatorial Plate (Tabula Equinoctialis) Coordinate Rotation */
  .tq-equatorial-plate {
    transform-origin: 38px 36px;
    animation: tq-rotate-eq 4.8s linear infinite;
  }

  @keyframes tq-rotate-eq {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Upper Zodiacal Ecliptic Crista Arm & Sighting Semicircle */
  .tq-crista-arm {
    transform-origin: 38px 24px;
    animation: tq-swivel-crista 3.2s ease-in-out infinite alternate;
  }

  @keyframes tq-swivel-crista {
    0% { transform: rotate(-20deg); }
    100% { transform: rotate(20deg); }
  }

  /* Meridian Plummet String Pendulum Oscillation */
  .tq-plumb-bob {
    transform-origin: 22px 24px;
    animation: tq-plumb-swing 2s ease-in-out infinite alternate;
  }

  @keyframes tq-plumb-swing {
    0% { transform: rotate(-3deg); }
    100% { transform: rotate(3deg); }
  }

  .tq-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(186, 104, 200, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptTorquetumEquatorial extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${torquetumEquatorialStyles}</style>
      <div class="tq-box">
        <div class="tq-stage">
          <svg class="tq-svg" viewBox="0 0 76 72">
            <!-- Solid Brass Base Table (Tabula Horizontalis) -->
            <ellipse cx="38" cy="56" rx="24" ry="6" fill="#1b1222" stroke="#ffd700" stroke-width="1" />
            <ellipse cx="38" cy="56" rx="20" ry="4.5" fill="none" stroke="#ab47bc" stroke-width="0.5" stroke-dasharray="1.5 1.5" />

            <!-- Latitude Wedge Hinge (Angled to Observer's Co-Latitude) -->
            <polygon points="18,56 58,56 58,40" fill="#2d1c38" stroke="#ba68c8" stroke-width="0.6" />

            <!-- Inclined Equatorial Plate Disc (Tabula Equinoctialis) -->
            <g transform="translate(0, -4) rotate(-23.5, 38, 42)">
              <g class="tq-equatorial-plate">
                <ellipse cx="38" cy="42" rx="18" ry="6" fill="#381c4a" stroke="#ffd700" stroke-width="1.2" />
                <line x1="20" y1="42" x2="56" y2="42" stroke="#ffeb3b" stroke-width="0.6" />
                <line x1="38" y1="36" x2="38" y2="48" stroke="#ffeb3b" stroke-width="0.6" />
              </g>
            </g>

            <!-- Upper Zodiacal Ecliptic Plate & Sighting Crista (Tabula Orbis Signorum) -->
            <g class="tq-crista-arm">
              <!-- Semicircular vertical sighting arch (Crista) -->
              <path d="M 26 24 A 12 12 0 0 1 50 24" fill="none" stroke="#ffd700" stroke-width="1.2" />
              <!-- Sighting pinhole alidade arm -->
              <line x1="38" y1="24" x2="54" y2="12" stroke="#e1bee7" stroke-width="1" />
              <circle cx="54" cy="12" r="1.2" fill="#00e5ff" filter="drop-shadow(0 0 2px #00e5ff)" />
            </g>

            <!-- Latitude Plumb-Line & Brass Bob (Plummet) -->
            <g class="tq-plumb-bob">
              <line x1="22" y1="24" x2="22" y2="52" stroke="#ffffff" stroke-width="0.6" stroke-dasharray="2 1" />
              <polygon points="20,52 24,52 22,56" fill="#ffd700" />
            </g>

            <!-- Coordinate Transformation Arc Label -->
            <text x="38" y="16" font-family="monospace" font-size="3" fill="#ba68c8" text-anchor="middle">HORIZON ➔ EQUATOR ➔ ECLIPTIC</text>
          </svg>
        </div>
        <div class="tq-label">TORQUETUM EQUATORIAL</div>
      </div>
    `;
  }
}

customElements.define('concept-torquetum-equatorial', ConceptTorquetumEquatorial);
