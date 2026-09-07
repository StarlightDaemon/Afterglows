const pelorusStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b15 0%, #080705 100%);
    border: 1.5px solid rgba(255, 193, 7, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 193, 7, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pr-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pr-svg {
    width: 76px;
    height: 72px;
  }

  /* Rotating Sighting Vane Alidade Arm */
  .pr-sighting-vane {
    transform-origin: 38px 36px;
    animation: pr-bearing-scan 6s ease-in-out infinite alternate;
  }

  @keyframes pr-bearing-scan {
    0% { transform: rotate(-50deg); }
    100% { transform: rotate(65deg); }
  }

  /* Gimbal Ring Pitch/Roll Stabilization */
  .pr-gimbal-ring {
    animation: pr-gimbal-level 3s ease-in-out infinite alternate;
    transform-origin: 38px 36px;
  }

  @keyframes pr-gimbal-level {
    0% { transform: rotate(3deg); }
    100% { transform: rotate(-3deg); }
  }

  /* Target Sighting Laser/Light Beam */
  .pr-sight-ray {
    stroke: #ff3d00;
    stroke-dasharray: 3 2;
    animation: pr-ray-flow 1.2s linear infinite;
  }

  @keyframes pr-ray-flow {
    to { stroke-dashoffset: -10; }
  }

  .pr-dial-card {
    fill: #2d2417;
    stroke: #ffc107;
    stroke-width: 1.2;
  }

  .pr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 193, 7, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPelorusDial extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pelorusStyles}</style>
      <div class="pr-box">
        <div class="pr-stage">
          <svg class="pr-svg" viewBox="0 0 76 72">
            <!-- Brass Outer Gimbal Bowl Ring Frame -->
            <circle cx="38" cy="36" r="32" fill="none" stroke="#ffb300" stroke-width="1.5" />
            <g class="pr-gimbal-ring">
              <!-- Inner Gimbal Ring Pivots -->
              <circle cx="38" cy="36" r="28" fill="none" stroke="#ffa000" stroke-width="1" />
              <circle cx="10" cy="36" r="1.5" fill="#ffd700" />
              <circle cx="66" cy="36" r="1.5" fill="#ffd700" />
              <circle cx="38" cy="8" r="1.5" fill="#ffd700" />
              <circle cx="38" cy="64" r="1.5" fill="#ffd700" />
            </g>

            <!-- Pelorus Dummy Compass Rose Dial Face (Graduated in 0°-360° & 32 points) -->
            <circle class="pr-dial-card" cx="38" cy="36" r="24" />
            <circle cx="38" cy="36" r="16" fill="#1b150c" stroke="#ffe082" stroke-width="0.6" stroke-dasharray="2 2" />

            <!-- Ship's Head Lubber Line (Fixed Fore-and-Aft Reference Mark) -->
            <line x1="38" y1="10" x2="38" y2="16" stroke="#ff3d00" stroke-width="1.8" stroke-linecap="round" />
            <polygon points="38,8 36,12 40,12" fill="#ff3d00" />

            <!-- Rotating Sighting Vane Assembly (Foresight slit + Backsight wire alidade) -->
            <g class="pr-sighting-vane">
              <!-- Central Alidade Crossbar -->
              <line x1="38" y1="12" x2="38" y2="60" stroke="#cfd8dc" stroke-width="1.4" />

              <!-- Object Vane (Fore-end upright slit frame) -->
              <rect x="36" y="10" width="4" height="6" rx="0.5" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.6" />
              <line x1="38" y1="10" x2="38" y2="16" stroke="#000000" stroke-width="0.6" />

              <!-- Eye Vane (Back-end peep hole bracket) -->
              <rect x="36" y="56" width="4" height="6" rx="0.5" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.6" />
              <circle cx="38" cy="59" r="1" fill="#000000" />

              <!-- Projected Visual Bearing Sight Ray to Distant Landmark -->
              <line x1="38" y1="10" x2="38" y2="0" class="pr-sight-ray" stroke-width="1.2" />
            </g>

            <!-- Center Pivot Pinion Clamping Nut -->
            <circle cx="38" cy="36" r="3.5" fill="#ffd700" stroke="#ff8f00" stroke-width="0.8" />
            <circle cx="38" cy="36" r="1.2" fill="#2d2417" />
          </svg>
        </div>
        <div class="pr-label">PELORUS SIGHTER</div>
      </div>
    `;
  }
}

customElements.define('concept-pelorus-dial', ConceptPelorusDial);
