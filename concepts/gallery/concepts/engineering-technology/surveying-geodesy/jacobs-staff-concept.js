const jacobsStaffStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .js-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #221a14 0%, #080503 100%);
    border: 1.5px solid rgba(255, 167, 38, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 167, 38, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .js-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .js-svg {
    width: 76px;
    height: 72px;
  }

  /* Sliding cross-piece (transom / vane) along graduated main staff */
  .js-transom {
    animation: js-slide-transom 3s ease-in-out infinite alternate;
  }

  @keyframes js-slide-transom {
    0% { transform: translateX(-14px); }
    100% { transform: translateX(14px); }
  }

  /* Sighting ray vectors to horizon and celestial star */
  .js-sight-lines {
    animation: js-sight-glow 2s ease-in-out infinite alternate;
  }

  @keyframes js-sight-glow {
    0% { opacity: 0.4; stroke: #ffb74d; }
    100% { opacity: 0.9; stroke: #ffffff; filter: drop-shadow(0 0 2px #ffa726); }
  }

  /* Target altitude star twinkle */
  .js-target-star {
    animation: js-star-twinkle 1s ease-in-out infinite alternate;
  }

  @keyframes js-star-twinkle {
    0% { transform: scale(0.8); opacity: 0.5; }
    100% { transform: scale(1.3); opacity: 1; filter: drop-shadow(0 0 3px #ffe082); }
  }

  .js-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 167, 38, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptJacobsStaff extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${jacobsStaffStyles}</style>
      <div class="js-box">
        <div class="js-stage">
          <svg class="js-svg" viewBox="0 0 76 72">
            <!-- Surveyor / Navigator Eye Position at Left -->
            <!-- Eye pupil / brass sight vane -->
            <path d="M 6 36 Q 10 32 14 36 Q 10 40 6 36 Z" fill="#3e2723" stroke="#ffd700" stroke-width="0.8" />
            <circle cx="10" cy="36" r="1.5" fill="#00e5ff" />

            <!-- Main Graduated Hardwood Staff (Cross-Staff Shaft) -->
            <rect x="14" y="34.5" width="56" height="3" rx="0.5" fill="#5d4037" stroke="#8d6e63" stroke-width="0.6" />
            <!-- Tangent / Degree Graduation Scale Hash Marks -->
            <line x1="20" y1="34.5" x2="20" y2="37.5" stroke="#ffd54f" stroke-width="0.6" />
            <line x1="26" y1="34.5" x2="26" y2="37.5" stroke="#ffd54f" stroke-width="0.6" />
            <line x1="32" y1="34.5" x2="32" y2="37.5" stroke="#ffd54f" stroke-width="0.6" />
            <line x1="38" y1="34.5" x2="38" y2="37.5" stroke="#ffd54f" stroke-width="0.6" />
            <line x1="44" y1="34.5" x2="44" y2="37.5" stroke="#ffd54f" stroke-width="0.6" />
            <line x1="50" y1="34.5" x2="50" y2="37.5" stroke="#ffd54f" stroke-width="0.6" />
            <line x1="56" y1="34.5" x2="56" y2="37.5" stroke="#ffd54f" stroke-width="0.6" />
            <line x1="62" y1="34.5" x2="62" y2="37.5" stroke="#ffd54f" stroke-width="0.6" />

            <!-- Sliding Wooden Transom (Cross-Piece / Vane) -->
            <g class="js-transom">
              <!-- Transom vertical bar -->
              <rect x="42" y="16" width="3.5" height="40" rx="1" fill="#4e342e" stroke="#ffb74d" stroke-width="0.8" />
              <!-- Sighting pinholes / slits at tips -->
              <circle cx="43.7" cy="18" r="1" fill="#ffffff" />
              <circle cx="43.7" cy="54" r="1" fill="#ffffff" />
              <!-- Brass friction collar -->
              <rect x="41" y="33" width="5.5" height="6" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
            </g>

            <!-- Sighting Geometry Triangulation Rays (Eye to Transom Tips) -->
            <g class="js-sight-lines" fill="none" stroke-width="0.8" stroke-dasharray="2 1.5">
              <!-- Top sight ray to star / peak -->
              <line x1="10" y1="36" x2="72" y2="12" />
              <!-- Bottom sight ray to horizon / landmark base -->
              <line x1="10" y1="36" x2="72" y2="60" />
            </g>

            <!-- Celestial Target Star (Top Right) -->
            <g class="js-target-star" transform="translate(68, 12)">
              <circle cx="0" cy="0" r="2" fill="#ffe082" />
              <polygon points="0,-4 1,-1 4,0 1,1 0,4 -1,1 -4,0 -1,-1" fill="#ffffff" />
            </g>

            <!-- Horizon Reference Line (Bottom Right) -->
            <line x1="56" y1="60" x2="74" y2="60" stroke="#00e5ff" stroke-width="0.8" stroke-dasharray="1 1" />
          </svg>
        </div>
        <div class="js-label">JACOB'S STAFF</div>
      </div>
    `;
  }
}

customElements.define('concept-jacobs-staff', ConceptJacobsStaff);
