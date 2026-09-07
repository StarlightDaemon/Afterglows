const stereographicWulffNetStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wn-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151d28 0%, #05080e 100%);
    border: 1.5px solid rgba(96, 165, 250, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(96, 165, 250, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wn-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wn-svg {
    width: 76px;
    height: 72px;
  }

  /* Rotating stereographic tracing paper overlay */
  .wn-tracing-overlay {
    transform-origin: 38px 36px;
    animation: wn-overlay-spin 8s ease-in-out infinite alternate;
  }

  @keyframes wn-overlay-spin {
    0% { transform: rotate(-35deg); }
    100% { transform: rotate(35deg); }
  }

  /* Crystal face poles and zone great circles flashing in alignment */
  .wn-crystal-poles {
    animation: wn-poles-gleam 2.5s ease-in-out infinite alternate;
  }

  @keyframes wn-poles-gleam {
    0% { opacity: 0.4; filter: drop-shadow(0 0 1px #38bdf8); }
    100% { opacity: 1; filter: drop-shadow(0 0 3px #60a5fa); }
  }

  /* Great circle grid line shimmer */
  .wn-grid-arcs {
    animation: wn-arcs-pulse 3s ease-in-out infinite alternate;
  }

  @keyframes wn-arcs-pulse {
    0% { opacity: 0.35; }
    100% { opacity: 0.7; }
  }

  .wn-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(96, 165, 250, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptStereographicWulffNet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${stereographicWulffNetStyles}</style>
      <div class="wn-box">
        <div class="wn-stage">
          <svg class="wn-svg" viewBox="0 0 76 72">
            <!-- 1902 George V. Wulff Stereographic Projection Net for Crystallography -->
            <!-- Primitive Circle Rim (Stereographic Equatorial Base) -->
            <circle cx="38" cy="36" r="28" fill="#091322" stroke="#2563eb" stroke-width="1.2" />

            <!-- Stereographic Coordinate Grid (Great Circles & Small Circles) -->
            <g class="wn-grid-arcs" fill="none" stroke="#1e40af" stroke-width="0.5">
              <!-- Longitudinal Great Circle Arcs (East-West Curvature) -->
              <path d="M 38 8 A 29 29 0 0 1 38 64" />
              <path d="M 38 8 A 34 34 0 0 1 38 64" />
              <path d="M 38 8 A 44 44 0 0 1 38 64" />
              <path d="M 38 8 A 29 29 0 0 0 38 64" />
              <path d="M 38 8 A 34 34 0 0 0 38 64" />
              <path d="M 38 8 A 44 44 0 0 0 38 64" />
              <!-- Latitudinal Small Circle Arcs (North-South Curvature) -->
              <path d="M 14 22 A 28 28 0 0 1 62 22" />
              <path d="M 11 30 A 28 28 0 0 1 65 30" />
              <path d="M 11 42 A 28 28 0 0 0 65 42" />
              <path d="M 14 50 A 28 28 0 0 0 62 50" />
              <!-- Center Crosshairs (Principal Axes) -->
              <line x1="38" y1="8" x2="38" y2="64" stroke="#3b82f6" stroke-width="0.8" />
              <line x1="10" y1="36" x2="66" y2="36" stroke="#3b82f6" stroke-width="0.8" />
            </g>

            <!-- Rotating Tracing Overlay with Measured Crystal Face Normal Poles -->
            <g class="wn-tracing-overlay">
              <!-- Overlay Perimeter Ticks -->
              <circle cx="38" cy="36" r="27.5" fill="none" stroke="#60a5fa" stroke-width="0.5" stroke-dasharray="2 3" />
              <line x1="38" y1="8.5" x2="38" y2="11.5" stroke="#93c5fd" stroke-width="0.9" />

              <!-- Crystal Zone Arc Great Circle -->
              <path d="M 12 28 A 32 32 0 0 0 64 44" fill="none" stroke="#38bdf8" stroke-width="0.9" stroke-dasharray="2 1.5" />

              <!-- Projected Crystallographic Face Poles (hkl Indices) -->
              <g class="wn-crystal-poles" fill="#38bdf8">
                <!-- (100) Face Pole -->
                <circle cx="38" cy="18" r="1.4" fill="#60a5fa" stroke="#ffffff" stroke-width="0.5" />
                <!-- (010) Face Pole -->
                <circle cx="56" cy="36" r="1.4" fill="#60a5fa" stroke="#ffffff" stroke-width="0.5" />
                <!-- (001) Center Pole -->
                <circle cx="38" cy="36" r="1.6" fill="#f43f5e" stroke="#ffffff" stroke-width="0.6" />
                <!-- (110), (111) Diagonal Crystal Poles -->
                <circle cx="48" cy="26" r="1.3" />
                <circle cx="28" cy="46" r="1.3" />
                <circle cx="28" cy="26" r="1.3" />
                <circle cx="48" cy="46" r="1.3" />
              </g>
            </g>
          </svg>
        </div>
        <div class="wn-label">WULFF NET 1902</div>
      </div>
    `;
  }
}

customElements.define('concept-stereographic-wulff-net', ConceptStereographicWulffNet);
