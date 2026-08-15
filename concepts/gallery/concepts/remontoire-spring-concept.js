const remontoireStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rm-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #15222e 0%, #04080e 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rm-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rm-svg {
    width: 76px;
    height: 72px;
  }

  /* Spiral Constant-Force Remontoire Spring Expansion / Winding Pulse */
  .rm-spiral-spring {
    stroke: #00e5ff;
    stroke-width: 1.2;
    fill: none;
    animation: rm-spring-breathe 2s ease-in-out infinite alternate;
  }

  @keyframes rm-spring-breathe {
    0% { transform: scale(0.9) rotate(-15deg); stroke: #00b0ff; }
    100% { transform: scale(1.1) rotate(15deg); stroke: #ffd700; filter: drop-shadow(0 0 4px #00e5ff); }
  }

  /* Periodic Unlocking Fly / Locking Arm Trigger Release */
  .rm-lock-arm {
    transform-origin: 56px 20px;
    animation: rm-trip 2s steps(2, end) infinite;
  }

  @keyframes rm-trip {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(-18deg); }
    100% { transform: rotate(0deg); }
  }

  /* Constant Force Output Gear Drive */
  .rm-gear-wheel {
    transform-origin: 38px 36px;
    animation: rm-spin 4s linear infinite;
  }

  @keyframes rm-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .rm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptRemontoireSpring extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${remontoireStyles}</style>
      <div class="rm-box">
        <div class="rm-stage">
          <svg class="rm-svg" viewBox="0 0 76 72">
            <!-- Main Gear Train Wheel Outer Cage -->
            <g class="rm-gear-wheel">
              <circle cx="38" cy="36" r="28" fill="none" stroke="rgba(0, 229, 255, 0.3)" stroke-width="1" stroke-dasharray="4 2" />
              <!-- 4 Radial Brass Wheel Cross Spokes -->
              <line x1="38" y1="10" x2="38" y2="62" stroke="#78909c" stroke-width="1" />
              <line x1="12" y1="36" x2="64" y2="36" stroke="#78909c" stroke-width="1" />
            </g>

            <!-- Intermediate Constant-Force Hairspring (Archimedean Spiral Coil) -->
            <g style="transform-origin: 38px 36px;">
              <path class="rm-spiral-spring" d="M 38 36 
                       A 3 3 0 0 1 38 42 
                       A 6 6 0 0 1 38 30 
                       A 9 9 0 0 1 38 48 
                       A 12 12 0 0 1 38 24 
                       A 15 15 0 0 1 38 54" />
            </g>

            <!-- Periodic Rewind Release Trip Arm & Locking Jewel (Top Right) -->
            <g class="rm-lock-arm">
              <rect x="54" y="18" width="4" height="4" fill="#37474f" stroke="#00e5ff" stroke-width="0.8" />
              <line x1="56" y1="20" x2="42" y2="28" stroke="#ffd700" stroke-width="1.4" stroke-linecap="round" />
              <!-- Ruby Stop Locking Pallet -->
              <polygon points="42,28 40,26 44,26" fill="#ff1744" />
            </g>

            <!-- Center Independent Escapement Pinion Hub -->
            <circle cx="38" cy="36" r="5" fill="#263238" stroke="#00e5ff" stroke-width="1.2" />
            <circle cx="38" cy="36" r="2" fill="#ffd700" />

            <!-- Constant Torque Uniformity Indicator Ring -->
            <circle cx="38" cy="36" r="18" fill="none" stroke="rgba(255, 215, 0, 0.4)" stroke-width="0.6" stroke-dasharray="1 3" />
          </svg>
        </div>
        <div class="rm-label">REMONTOIRE D'ÉGALITÉ</div>
      </div>
    `;
  }
}

customElements.define('concept-remontoire-spring', ConceptRemontoireSpring);
