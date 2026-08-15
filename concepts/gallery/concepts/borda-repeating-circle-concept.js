const bordaRepeatingCircleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #172422 0%, #030807 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bc-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bc-svg {
    width: 76px;
    height: 72px;
  }

  /* Independent Primary Telescope Rotation (Upper Alidade) */
  .bc-upper-scope {
    transform-origin: 38px 34px;
    animation: bc-rotate-upper 4s ease-in-out infinite alternate;
  }

  @keyframes bc-rotate-upper {
    0% { transform: rotate(-25deg); }
    100% { transform: rotate(35deg); }
  }

  /* Independent Secondary Reference Telescope Rotation (Lower Alidade) */
  .bc-lower-scope {
    transform-origin: 38px 34px;
    animation: bc-rotate-lower 4s ease-in-out infinite alternate;
  }

  @keyframes bc-rotate-lower {
    0% { transform: rotate(15deg); }
    100% { transform: rotate(-20deg); }
  }

  /* Multiplied Geodetic Angle Accumulation Arc Glow */
  .bc-repeating-arc {
    animation: bc-arc-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes bc-arc-pulse {
    0% { stroke: #00e676; opacity: 0.6; }
    100% { stroke: #b9f6ca; opacity: 1; filter: drop-shadow(0 0 3px #00e676); }
  }

  .bc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBordaRepeatingCircle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bordaRepeatingCircleStyles}</style>
      <div class="bc-box">
        <div class="bc-stage">
          <svg class="bc-svg" viewBox="0 0 76 72">
            <!-- Brass Column Base & Leveling Screws -->
            <polygon points="38,58 24,68 52,68" fill="#2e382e" stroke="#4e5d4e" stroke-width="0.6" />
            <rect x="36" y="52" width="4" height="6" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />

            <!-- Main Graduated Brass Full Circle Limb (French Metric Meridian Expedition) -->
            <circle cx="38" cy="34" r="20" fill="#0f1f1a" stroke="#ffd700" stroke-width="1.2" />
            <circle cx="38" cy="34" r="17" fill="none" stroke="#81c784" stroke-width="0.5" stroke-dasharray="1.5 1.5" />

            <!-- Accumulated Repeated Sub-Angle Arc Sector -->
            <path class="bc-repeating-arc" d="M 38 14 A 20 20 0 0 1 54 22" fill="none" stroke-width="2" />

            <!-- Secondary Reference Telescope (Back / Lower Axis) -->
            <g class="bc-lower-scope">
              <rect x="18" y="32.5" width="40" height="3" rx="1" fill="#37474f" stroke="#78909c" stroke-width="0.6" />
              <rect x="54" y="31.5" width="4" height="5" rx="0.5" fill="#90a4ae" />
              <!-- Vernier index arm -->
              <line x1="38" y1="34" x2="38" y2="14" stroke="#78909c" stroke-width="0.8" />
            </g>

            <!-- Primary Sight Telescope (Front / Upper Axis with Vernier Microscopes) -->
            <g class="bc-upper-scope">
              <rect x="14" y="32.5" width="48" height="3" rx="1" fill="#4e342e" stroke="#ffd700" stroke-width="0.8" />
              <!-- Objective lens dew hood -->
              <rect x="58" y="31" width="5" height="6" rx="1" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
              <!-- Eyepiece -->
              <rect x="10" y="32" width="4" height="4" rx="0.5" fill="#ffd700" />
              <!-- Cross Alidade 4-Vernier Reading Arms -->
              <line x1="38" y1="14" x2="38" y2="54" stroke="#ffd700" stroke-width="1" />
              <line x1="18" y1="34" x2="58" y2="34" stroke="#ffd700" stroke-width="1" />
              <!-- Micro-Vernier Magnifiers -->
              <circle cx="38" cy="14" r="1.5" fill="#00e676" />
              <circle cx="38" cy="54" r="1.5" fill="#00e676" />
            </g>

            <!-- Central Concentric Double-Axis Clamping Pivot -->
            <circle cx="38" cy="34" r="3.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />
          </svg>
        </div>
        <div class="bc-label">BORDA REPEATING CIRCLE</div>
      </div>
    `;
  }
}

customElements.define('concept-borda-repeating-circle', ConceptBordaRepeatingCircle);
