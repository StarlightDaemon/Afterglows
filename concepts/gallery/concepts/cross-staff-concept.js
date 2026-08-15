const crossStaffStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cs-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 40% 40%, #1a222c 0%, #050a0f 100%);
    border: 1.5px solid rgba(100, 181, 246, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(100, 181, 246, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cs-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cs-svg {
    width: 76px;
    height: 72px;
  }

  /* Sliding Transversal Cross-Vane Along Staff */
  .cs-sliding-vane {
    animation: cs-slide 4s ease-in-out infinite alternate;
  }

  @keyframes cs-slide {
    0% { transform: translateX(-10px); }
    100% { transform: translateX(8px); }
  }

  /* Star Sight Ray (Upper Tip to Celestial Star) */
  .cs-star-ray {
    stroke: #ffd700;
    stroke-dasharray: 4 2;
    animation: cs-ray-flow 1.5s linear infinite;
  }

  /* Horizon Sight Ray (Lower Tip to Sea Horizon) */
  .cs-horizon-ray {
    stroke: #00e5ff;
    stroke-dasharray: 4 2;
    animation: cs-ray-flow 1.5s linear infinite;
  }

  @keyframes cs-ray-flow {
    to { stroke-dashoffset: -12; }
  }

  /* Hardwood Staff Spine */
  .cs-staff-wood {
    fill: #4e342e;
    stroke: #8d6e63;
    stroke-width: 1;
  }

  .cs-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(100, 181, 246, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCrossStaff extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${crossStaffStyles}</style>
      <div class="cs-box">
        <div class="cs-stage">
          <svg class="cs-svg" viewBox="0 0 76 72">
            <!-- Sea Horizon Line on Right -->
            <line x1="40" y1="56" x2="72" y2="56" stroke="#0288d1" stroke-width="1.2" />
            <!-- Celestial Star Target (Top-Right) -->
            <circle cx="68" cy="14" r="2" fill="#ffffff" filter="drop-shadow(0 0 4px #ffd700)" />

            <!-- Long Square Wooden Staff (Held up to eye at left end) -->
            <rect class="cs-staff-wood" x="8" y="34" width="56" height="5" rx="1" />

            <!-- Graduated Scale Ticks along staff length -->
            <g stroke="#ffcc80" stroke-width="0.6">
              <line x1="16" y1="34" x2="16" y2="37" />
              <line x1="22" y1="34" x2="22" y2="37" />
              <line x1="28" y1="34" x2="28" y2="37" />
              <line x1="34" y1="34" x2="34" y2="37" />
              <line x1="40" y1="34" x2="40" y2="37" />
              <line x1="46" y1="34" x2="46" y2="37" />
              <line x1="52" y1="34" x2="52" y2="37" />
              <line x1="58" y1="34" x2="58" y2="37" />
            </g>

            <!-- Eye Peep Rest Notch on Left -->
            <circle cx="8" cy="36.5" r="2" fill="#cfd8dc" stroke="#90a4ae" stroke-width="0.8" />

            <!-- Sliding Perpendicular Transversal Cross-Vane (Cross-piece) -->
            <g transform="translate(38, 36.5)" class="cs-sliding-vane">
              <!-- Wooden Cross-Piece Bar -->
              <rect x="-2.5" y="-20" width="5" height="40" rx="1" fill="#5d4037" stroke="#ffd54f" stroke-width="0.8" />
              <!-- Center Slider Collar -->
              <rect x="-4" y="-4" width="8" height="8" rx="1" fill="#ffb74d" stroke="#ff8f00" stroke-width="0.8" />
              <circle cx="0" cy="0" r="1.5" fill="#3e2723" />

              <!-- Upper Sighting Tip -> Star Ray -->
              <line x1="0" y1="-20" x2="30" y2="-22.5" class="cs-star-ray" stroke-width="1" />
              <!-- Lower Sighting Tip -> Horizon Ray -->
              <line x1="0" y1="20" x2="32" y2="19.5" class="cs-horizon-ray" stroke-width="1" />
            </g>

            <!-- Eye Sight Rays radiating from eye position (8, 36.5) -->
            <line x1="8" y1="36.5" x2="68" y2="14" stroke="rgba(255, 215, 0, 0.4)" stroke-width="0.6" stroke-dasharray="2 2" />
            <line x1="8" y1="36.5" x2="72" y2="56" stroke="rgba(0, 229, 255, 0.4)" stroke-width="0.6" stroke-dasharray="2 2" />
          </svg>
        </div>
        <div class="cs-label">JACOB'S CROSS-STAFF</div>
      </div>
    `;
  }
}

customElements.define('concept-cross-staff', ConceptCrossStaff);
