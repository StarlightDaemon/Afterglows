const muralQuadrantStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mq-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #221c16 0%, #080604 100%);
    border: 1.5px solid rgba(255, 183, 77, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 183, 77, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mq-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mq-svg {
    width: 76px;
    height: 72px;
  }

  /* Sighting alidade arm sliding along 90-degree graduated brass limb */
  .mq-sighting-alidade {
    transform-origin: 16px 14px;
    animation: mq-sweep-quadrant 4.4s ease-in-out infinite alternate;
  }

  @keyframes mq-sweep-quadrant {
    0% { transform: rotate(10deg); }
    50% { transform: rotate(45deg); }
    100% { transform: rotate(80deg); }
  }

  /* Transversal sub-minute graduation diagonal scale shimmer */
  .mq-transversal-scale {
    animation: mq-scale-gleam 2s ease-in-out infinite alternate;
  }

  @keyframes mq-scale-gleam {
    0% { stroke: #ffd54f; opacity: 0.6; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #ffb300); }
  }

  /* Meridian window slit star ray flash */
  .mq-star-transit-beam {
    animation: mq-beam-pulse 1.4s ease-in-out infinite alternate;
  }

  @keyframes mq-beam-pulse {
    0% { stroke: #ffe082; opacity: 0.4; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 3px #ffd54f); }
  }

  .mq-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 183, 77, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptMuralQuadrant extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${muralQuadrantStyles}</style>
      <div class="mq-box">
        <div class="mq-stage">
          <svg class="mq-svg" viewBox="0 0 76 72">
            <!-- Tycho Brahe 1582 Uraniborg Great Mural Quadrant (Quadrantus Muralis) -->
            <!-- North-South Masonry Meridian Wall (Stone block texture) -->
            <rect x="10" y="8" width="58" height="56" fill="#1e1814" stroke="#4e342e" stroke-width="0.8" />

            <!-- Great 9-Foot Radius Graduated Brass Quadrant Arc (Limb on wall) -->
            <path d="M 16 14 L 64 14 A 48 48 0 0 1 16 62 Z" fill="#2d2018" stroke="#ffd700" stroke-width="1.4" />

            <!-- Tycho's Diagonal Transversals Graduation Scale (Sub-arcminute reading) -->
            <g class="mq-transversal-scale" fill="none" stroke-width="0.6">
              <path d="M 61 14 A 45 45 0 0 1 16 59" stroke-dasharray="2 1.5" />
              <path d="M 58 14 A 42 42 0 0 1 16 56" stroke-dasharray="1.5 2" />
            </g>

            <!-- Meridian Wall Sighting Aperture Window (Top Left) -->
            <rect x="14" y="10" width="4" height="8" rx="0.5" fill="#3e2723" stroke="#ffd700" stroke-width="0.8" />
            <line class="mq-star-transit-beam" x1="6" y1="8" x2="16" y2="14" stroke-width="1.2" stroke-dasharray="2 1" />
            <circle cx="6" cy="8" r="1.5" fill="#ffffff" filter="drop-shadow(0 0 2px #ffe082)" />

            <!-- Pivoting Brass Sighting Alidade (Sight Vanes with Pinholes) -->
            <g class="mq-sighting-alidade">
              <!-- Radial Brass Ruler Alidade Arm (From Center Pivot to Graduated Rim) -->
              <line x1="16" y1="14" x2="62" y2="14" stroke="#ffb300" stroke-width="1.8" stroke-linecap="round" />
              <!-- Sighting Vane Pinhole Shutter (At outer limb) -->
              <rect x="58" y="11" width="4" height="6" rx="0.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
              <circle cx="60" cy="14" r="1" fill="#ffffff" />
            </g>

            <!-- Center Fulcrum Sighting Pivot Pin (Top Left) -->
            <circle cx="16" cy="14" r="2.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />

            <!-- Tycho Brahe Uraniborg Inscription -->
            <text x="38" y="66" font-family="monospace" font-size="3" fill="#ffe082" text-anchor="middle">TYCHO MURAL QUADRANT 1582</text>
          </svg>
        </div>
        <div class="mq-label">MURAL QUADRANT</div>
      </div>
    `;
  }
}

customElements.define('concept-mural-quadrant', ConceptMuralQuadrant);
