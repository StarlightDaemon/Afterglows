const duplexStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #221528 0%, #08040d 100%);
    border: 1.5px solid rgba(224, 64, 251, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(224, 64, 251, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dp-svg {
    width: 76px;
    height: 72px;
  }

  /* Dual-toothed Duplex Escape Wheel Stepping */
  .dp-duplex-wheel {
    transform-origin: 38px 46px;
    animation: dp-wheel-spin 2s steps(8, end) infinite;
  }

  @keyframes dp-wheel-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Balance Staff Ruby Roller Oscillation */
  .dp-balance-roller {
    transform-origin: 38px 18px;
    animation: dp-roller-swing 1s ease-in-out infinite alternate;
  }

  @keyframes dp-roller-swing {
    0% { transform: rotate(-30deg); }
    100% { transform: rotate(30deg); }
  }

  /* Single-beat impulse ruby pallet flash */
  .dp-ruby-pallet {
    fill: #ff1744;
    animation: dp-ruby-glow 1s ease-in-out infinite alternate;
  }

  @keyframes dp-ruby-glow {
    0% { filter: drop-shadow(0 0 1px #ff1744); }
    100% { filter: drop-shadow(0 0 4px #e040fb); }
  }

  .dp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(224, 64, 251, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptDuplexEscapement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${duplexStyles}</style>
      <div class="dp-box">
        <div class="dp-stage">
          <svg class="dp-svg" viewBox="0 0 76 72">
            <!-- Balance Wheel Staff (Top Assembly) -->
            <g class="dp-balance-roller">
              <!-- Balance Arm Crossbar -->
              <line x1="20" y1="18" x2="56" y2="18" stroke="#ba68c8" stroke-width="1.2" />
              <!-- Ruby Locking Roller Cylinder with Slit -->
              <circle cx="38" cy="18" r="4" fill="#311b92" stroke="#e040fb" stroke-width="1" />
              <rect x="37" y="14" width="2" height="4" fill="#150a22" />
              <!-- Ruby Impulse Pallet Finger (Projecting downwards) -->
              <polygon class="dp-ruby-pallet" points="38,22 41,27 35,27" />
            </g>

            <!-- Duplex Double-Toothed Escape Wheel (Bottom Assembly) -->
            <g class="dp-duplex-wheel">
              <!-- Outer Escape Wheel Rim -->
              <circle cx="38" cy="46" r="16" fill="none" stroke="#ba68c8" stroke-width="1" />
              <circle cx="38" cy="46" r="4" fill="#4a148c" stroke="#ffd700" stroke-width="0.8" />

              <!-- Long Radial Locking Teeth (Pointing outwards to ruby roller) -->
              <g stroke="#ffd54f" stroke-width="1.2">
                <line x1="38" y1="30" x2="38" y2="24" />
                <line x1="49.3" y1="34.7" x2="53.5" y2="30.5" />
                <line x1="54" y1="46" x2="60" y2="46" />
                <line x1="49.3" y1="57.3" x2="53.5" y2="61.5" />
                <line x1="38" y1="62" x2="38" y2="68" />
                <line x1="26.7" y1="57.3" x2="22.5" y2="61.5" />
                <line x1="22" y1="46" x2="16" y2="46" />
                <line x1="26.7" y1="34.7" x2="22.5" y2="30.5" />
              </g>

              <!-- Short Upright Triangular Impulse Teeth (Rising perpendicular from rim face) -->
              <g fill="#e040fb">
                <polygon points="38,36 36,40 40,40" />
                <polygon points="45,39 42,42 46,44" />
                <polygon points="48,46 44,48 44,44" />
                <polygon points="45,53 46,49 42,51" />
                <polygon points="38,56 40,52 36,52" />
                <polygon points="31,53 34,51 30,49" />
                <polygon points="28,46 32,44 32,48" />
                <polygon points="31,39 30,44 34,42" />
              </g>
            </g>

            <!-- Center Pivot Pinions -->
            <circle cx="38" cy="18" r="1.2" fill="#ffffff" />
            <circle cx="38" cy="46" r="1.5" fill="#ffffff" />
          </svg>
        </div>
        <div class="dp-label">DUPLEX ESCAPEMENT</div>
      </div>
    `;
  }
}

customElements.define('concept-duplex-escapement', ConceptDuplexEscapement);
