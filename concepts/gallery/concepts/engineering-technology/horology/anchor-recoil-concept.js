const anchorRecoilStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ar-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #291e14 0%, #0c0804 100%);
    border: 1.5px solid rgba(255, 167, 38, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 167, 38, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ar-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ar-svg {
    width: 76px;
    height: 72px;
  }

  /* Anchor Pallet Frame Rocking */
  .ar-anchor-frame {
    transform-origin: 38px 18px;
    animation: ar-anchor-swing 2s ease-in-out infinite alternate;
  }

  @keyframes ar-anchor-swing {
    0% { transform: rotate(-16deg); }
    100% { transform: rotate(16deg); }
  }

  /* Escape Wheel Recoil Motion (Stepping forward with slight backward recoil jerk) */
  .ar-recoil-wheel {
    transform-origin: 38px 46px;
    animation: ar-wheel-recoil 2s ease-in-out infinite;
  }

  @keyframes ar-wheel-recoil {
    0% { transform: rotate(0deg); }
    40% { transform: rotate(26deg); }
    50% { transform: rotate(22deg); } /* Recoil back-kick */
    90% { transform: rotate(48deg); }
    100% { transform: rotate(45deg); } /* Recoil back-kick */
  }

  /* Pallet impulse click flash */
  .ar-impulse-glow {
    fill: #ffd700;
    animation: ar-flash 1s steps(2, end) infinite;
  }

  @keyframes ar-flash {
    0% { opacity: 0; }
    50% { opacity: 1; filter: drop-shadow(0 0 4px #ff9800); }
    100% { opacity: 0; }
  }

  .ar-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 167, 38, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAnchorRecoil extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${anchorRecoilStyles}</style>
      <div class="ar-box">
        <div class="ar-stage">
          <svg class="ar-svg" viewBox="0 0 76 72">
            <!-- Anchor Pallet Frame with Entry & Exit Curved Claws (Top Pivot) -->
            <g class="ar-anchor-frame">
              <!-- Central Arbor Pivot Boss & Pendulum Crutch -->
              <circle cx="38" cy="18" r="3" fill="#ffb74d" stroke="#ff8f00" stroke-width="0.8" />
              <line x1="38" y1="18" x2="38" y2="8" stroke="#ffb74d" stroke-width="1.5" />

              <!-- Curved Anchor Arms (Span across 7.5 escape teeth) -->
              <!-- Left Entry Pallet Claw -->
              <path d="M 38 18 Q 26 22 22 36 L 24 38 L 27 34" fill="none" stroke="#ffd54f" stroke-width="1.8" stroke-linecap="round" />
              <polygon points="22,36 24,38 27,34" fill="#ffd700" />

              <!-- Right Exit Pallet Claw -->
              <path d="M 38 18 Q 50 22 54 36 L 52 38 L 49 34" fill="none" stroke="#ffd54f" stroke-width="1.8" stroke-linecap="round" />
              <polygon points="54,36 52,38 49,34" fill="#ffd700" />
            </g>

            <!-- Recoil Escape Wheel (Pointed Forward Sloping Teeth) -->
            <g class="ar-recoil-wheel">
              <circle cx="38" cy="46" r="16" fill="#2d1c14" stroke="#ffb74d" stroke-width="1.2" />
              <circle cx="38" cy="46" r="4" fill="#4e342e" stroke="#ffd700" stroke-width="0.8" />

              <!-- Pointed Sawtooth Teeth around Rim -->
              <polygon points="38,30 41,34 38,34" fill="#ffd54f" />
              <polygon points="49.3,34.7 51.5,39.5 48.5,38.5" fill="#ffd54f" />
              <polygon points="54,46 54,50 50,48" fill="#ffd54f" />
              <polygon points="49.3,57.3 45.5,60 45,56" fill="#ffd54f" />
              <polygon points="38,62 34,58 38,58" fill="#ffd54f" />
              <polygon points="26.7,57.3 24.5,52.5 27.5,53.5" fill="#ffd54f" />
              <polygon points="22,46 22,42 26,44" fill="#ffd54f" />
              <polygon points="26.7,34.7 30.5,32 31,36" fill="#ffd54f" />
            </g>

            <!-- Impulse Impact Flash Glow -->
            <circle class="ar-impulse-glow" cx="24" cy="36" r="2" />
            <circle class="ar-impulse-glow" cx="52" cy="36" r="2" />
          </svg>
        </div>
        <div class="ar-label">ANCHOR RECOIL ESCAPEMENT</div>
      </div>
    `;
  }
}

customElements.define('concept-anchor-recoil', ConceptAnchorRecoil);
