const detentStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cd-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a14 0%, #060503 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cd-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cd-svg {
    width: 76px;
    height: 72px;
  }

  /* Escape Wheel Detached Impulse Step */
  .cd-escape-wheel {
    transform-origin: 30px 44px;
    animation: cd-wheel-step 2s steps(8, end) infinite;
  }

  @keyframes cd-wheel-step {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Balance Staff Large Impulse Roller */
  .cd-balance-roller {
    transform-origin: 52px 24px;
    animation: cd-balance-swing 2s ease-in-out infinite alternate;
  }

  @keyframes cd-balance-swing {
    0% { transform: rotate(-35deg); }
    100% { transform: rotate(35deg); }
  }

  /* Flexible Spring Detent Blade Flick */
  .cd-spring-detent {
    animation: cd-detent-lift 1s ease-in-out infinite alternate;
  }

  @keyframes cd-detent-lift {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(-8deg); }
    100% { transform: rotate(0deg); }
  }

  /* Single-Beat Impulse Flash */
  .cd-impulse-flash {
    fill: #ffd700;
    animation: cd-flash 1s steps(2, end) infinite;
  }

  @keyframes cd-flash {
    0% { opacity: 0; }
    50% { opacity: 1; filter: drop-shadow(0 0 7px #ffd700); }
    100% { opacity: 0; }
  }

  .cd-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptChronometerDetent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${detentStyles}</style>
      <div class="cd-box">
        <div class="cd-stage">
          <svg class="cd-svg" viewBox="0 0 76 72">
            <!-- Earnshaw Marine Chronometer Escape Wheel (Left) -->
            <g class="cd-escape-wheel">
              <circle cx="30" cy="44" r="16" fill="#2d1c14" stroke="#ffb74d" stroke-width="1.2" />
              <circle cx="30" cy="44" r="4" fill="#4e342e" stroke="#ffd700" stroke-width="0.8" />
              <!-- 8 Undercut Pointed Chronometer Teeth -->
              <polygon points="30,28 34,32 30,32" fill="#ffd54f" />
              <polygon points="41.3,32.7 43.5,37.5 40.5,36.5" fill="#ffd54f" />
              <polygon points="46,44 46,48 42,46" fill="#ffd54f" />
              <polygon points="41.3,55.3 37.5,58 37,54" fill="#ffd54f" />
              <polygon points="30,60 26,56 30,56" fill="#ffd54f" />
              <polygon points="18.7,55.3 16.5,50.5 19.5,51.5" fill="#ffd54f" />
              <polygon points="14,44 14,40 18,42" fill="#ffd54f" />
              <polygon points="18.7,32.7 22.5,30 23,34" fill="#ffd54f" />
            </g>

            <!-- Flexible Steel Spring Detent with Ruby Locking Stone (Horizontal arm) -->
            <g class="cd-spring-detent" style="transform-origin: 10px 24px;">
              <!-- Detent Foot Mounting Block -->
              <rect x="8" y="22" width="6" height="6" rx="1" fill="#424242" stroke="#ffb74d" stroke-width="0.8" />
              <!-- Thin Spring Blade & Stiff Arm -->
              <line x1="14" y1="25" x2="44" y2="25" stroke="#cfd8dc" stroke-width="1.2" />
              <!-- Ruby Locking Stone (Locking tooth on wheel) -->
              <rect x="30" y="25" width="2" height="4" fill="#ff1744" stroke="#d500f9" stroke-width="0.5" />
              <!-- Gold Passing Spring (Delicate spring on horn) -->
              <line x1="38" y1="23.5" x2="48" y2="23.5" stroke="#ffd700" stroke-width="0.6" />
            </g>

            <!-- Large Balance Staff Impulse Roller & Discharging Jewel (Right) -->
            <g class="cd-balance-roller">
              <!-- Large Impulse Roller Disk -->
              <circle cx="52" cy="24" r="9" fill="none" stroke="#ba68c8" stroke-width="1.2" />
              <!-- Ruby Impulse Pallet in notch -->
              <polygon points="45,24 43,21 43,27" fill="#ff1744" />
              <!-- Small Discharging Roller & Jewel (Unlocking passing spring) -->
              <circle cx="52" cy="24" r="3" fill="#311b92" stroke="#00e5ff" stroke-width="0.8" />
              <circle cx="49" cy="24" r="0.8" fill="#ffd700" />
            </g>

            <!-- Detached Impulse Impact Flash -->
            <circle class="cd-impulse-flash" cx="44" cy="24" r="2" />
          </svg>
        </div>
        <div class="cd-label">CHRONOMETER DETENT</div>
      </div>
    `;
  }
}

customElements.define('concept-chronometer-detent', ConceptChronometerDetent);
