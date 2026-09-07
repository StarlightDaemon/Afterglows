const grasshopperStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gh-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a12 0%, #080604 100%);
    border: 1.5px solid rgba(255, 179, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 179, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gh-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gh-svg {
    width: 76px;
    height: 72px;
  }

  /* Escape Wheel rotation step */
  .gh-escape-wheel {
    transform-origin: 38px 46px;
    animation: gh-wheel-step 2s steps(8, end) infinite;
  }

  @keyframes gh-wheel-step {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Left Articulated Grasshopper Leg Pallet Arm */
  .gh-leg-left {
    transform-origin: 30px 18px;
    animation: gh-left-hop 2s ease-in-out infinite alternate;
  }

  @keyframes gh-left-hop {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(10deg); }
  }

  /* Right Articulated Grasshopper Leg Pallet Arm */
  .gh-leg-right {
    transform-origin: 46px 18px;
    animation: gh-right-hop 2s ease-in-out infinite alternate;
  }

  @keyframes gh-right-hop {
    0% { transform: rotate(10deg); }
    100% { transform: rotate(-8deg); }
  }

  /* Zero-friction contact impulse spark */
  .gh-impulse-spark {
    fill: #ffd700;
    animation: gh-spark-flash 1s steps(2, end) infinite;
  }

  @keyframes gh-spark-flash {
    0% { opacity: 0; }
    50% { opacity: 1; filter: drop-shadow(0 0 4px #ff9100); }
    100% { opacity: 0; }
  }

  .gh-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 179, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGrasshopperEscapement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${grasshopperStyles}</style>
      <div class="gh-box">
        <div class="gh-stage">
          <svg class="gh-svg" viewBox="0 0 76 72">
            <!-- Oak/Lignum Vitae Harrison Crutch Arbor (Top Pivot) -->
            <rect x="24" y="14" width="28" height="6" rx="1.5" fill="#4e342e" stroke="#ffb300" stroke-width="0.8" />
            <circle cx="30" cy="17" r="1.5" fill="#ffd700" />
            <circle cx="46" cy="17" r="1.5" fill="#ffd700" />

            <!-- Left Articulated Grasshopper Leg Pallet (Entry Pallet) -->
            <g class="gh-leg-left">
              <path d="M 30 17 L 22 34 L 26 40 L 30 38" fill="none" stroke="#ffb74d" stroke-width="1.4" stroke-linecap="round" />
              <!-- Counterweight Bead -->
              <circle cx="20" cy="30" r="2" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.6" />
            </g>

            <!-- Right Articulated Grasshopper Leg Pallet (Exit Pallet) -->
            <g class="gh-leg-right">
              <path d="M 46 17 L 54 34 L 50 40 L 46 38" fill="none" stroke="#ffb74d" stroke-width="1.4" stroke-linecap="round" />
              <!-- Counterweight Bead -->
              <circle cx="56" cy="30" r="2" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.6" />
            </g>

            <!-- Rotating Escape Wheel (Harrison forward-curved ratchet teeth) -->
            <g class="gh-escape-wheel">
              <circle cx="38" cy="46" r="16" fill="none" stroke="#ff8f00" stroke-width="1.2" />
              <circle cx="38" cy="46" r="4" fill="#3e2723" stroke="#ffb300" stroke-width="0.8" />
              <!-- 8 Curved Ratchet Teeth Points -->
              <path d="M 38 30 L 42 34 L 38 34" fill="#ffd54f" />
              <path d="M 50 34 L 52 39 L 48 38" fill="#ffd54f" />
              <path d="M 54 46 L 54 50 L 50 48" fill="#ffd54f" />
              <path d="M 50 58 L 46 60 L 45 56" fill="#ffd54f" />
              <path d="M 38 62 L 34 58 L 38 58" fill="#ffd54f" />
              <path d="M 26 58 L 24 53 L 28 54" fill="#ffd54f" />
              <path d="M 22 46 L 22 42 L 26 44" fill="#ffd54f" />
              <path d="M 26 34 L 30 32 L 31 36" fill="#ffd54f" />
            </g>

            <!-- Frictionless Tooth Push Impulse Flash -->
            <circle class="gh-impulse-spark" cx="26" cy="40" r="2" />
            <circle class="gh-impulse-spark" cx="50" cy="40" r="2" />
          </svg>
        </div>
        <div class="gh-label">GRASSHOPPER ESCAPEMENT</div>
      </div>
    `;
  }
}

customElements.define('concept-grasshopper-escapement', ConceptGrasshopperEscapement);
