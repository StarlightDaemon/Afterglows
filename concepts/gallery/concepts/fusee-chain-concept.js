const fuseeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #291e10 0%, #0c0803 100%);
    border: 1.5px solid rgba(255, 179, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 179, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fc-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fc-svg {
    width: 76px;
    height: 72px;
  }

  /* Mainspring Barrel Continuous Clockwise Rotation */
  .fc-barrel-rotation {
    transform-origin: 20px 36px;
    animation: fc-spin-barrel 3.2s linear infinite;
  }

  @keyframes fc-spin-barrel {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Conical Fusee Frustum Counter-Rotation */
  .fc-cone-rotation {
    transform-origin: 54px 36px;
    animation: fc-spin-cone 3.2s linear infinite reverse;
  }

  @keyframes fc-spin-cone {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Discrete steel chain link packets traveling horizontally */
  .fc-chain-link {
    position: absolute;
    width: 5px;
    height: 3px;
    background: #ffecb3;
    border: 1px solid #ffd54f;
    border-radius: 1px;
    box-shadow: 0 0 4px #ffd54f;
    z-index: 5;
    animation: fc-link-travel 1.6s linear infinite;
  }

  .cl1 { animation-delay: 0s; }
  .cl2 { animation-delay: 0.53s; }
  .cl3 { animation-delay: 1.06s; }

  @keyframes fc-link-travel {
    0% { transform: translate(-14px, -14px) scale(0.8); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(16px, -12px) scale(1.1); opacity: 0; }
  }

  /* Conical Fusee Brass Frustum */
  .fc-cone-body {
    fill: #3e2723;
    stroke: #ffb300;
    stroke-width: 1.2;
  }

  .fc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 179, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFuseeChain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fuseeStyles}</style>
      <div class="fc-box">
        <div class="fc-stage">
          <div class="fc-chain-link cl1"></div>
          <div class="fc-chain-link cl2"></div>
          <div class="fc-chain-link cl3"></div>

          <svg class="fc-svg" viewBox="0 0 76 72">
            <!-- Left Cylindrical Mainspring Barrel Housing -->
            <g class="fc-barrel-rotation">
              <circle cx="20" cy="36" r="14" fill="#2d1c14" stroke="#ffb74d" stroke-width="1.2" />
              <circle cx="20" cy="36" r="6" fill="#1b100a" stroke="#ffd54f" stroke-width="0.8" />
              <circle cx="20" cy="36" r="2" fill="#ff8f00" />
              <!-- Radial spoke gear teeth -->
              <line x1="6" y1="36" x2="34" y2="36" stroke="#ffb74d" stroke-width="0.8" />
              <line x1="20" y1="22" x2="20" y2="50" stroke="#ffb74d" stroke-width="0.8" />
            </g>

            <!-- Right Conical Grooved Fusee Frustum with Rotation -->
            <g class="fc-cone-rotation">
              <circle cx="54" cy="36" r="13" fill="#3e2723" stroke="#ffb300" stroke-width="1.2" />
              <circle cx="54" cy="36" r="8" fill="#2d1c14" stroke="#ffd54f" stroke-width="0.8" />
              <circle cx="54" cy="36" r="3" fill="#ffd700" />
              <!-- Helical winding grooves -->
              <line x1="41" y1="36" x2="67" y2="36" stroke="#ffd54f" stroke-width="0.8" />
              <line x1="54" y1="23" x2="54" y2="49" stroke="#ffd54f" stroke-width="0.8" />
            </g>

            <!-- Miniature Steel Fusee Link Chain (Connecting barrel to cone groove) -->
            <line x1="20" y1="22" x2="54" y2="23" stroke="#ffe082" stroke-width="1.6" stroke-dasharray="3 2" />

            <!-- Tangent Chain Link Nodes -->
            <circle cx="20" cy="22" r="1.6" fill="#ffd700" />
            <circle cx="54" cy="23" r="1.6" fill="#ffd700" />
          </svg>
        </div>
        <div class="fc-label">FUSEE & CHAIN</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-fusee-chain')) {
  customElements.define('concept-fusee-chain', ConceptFuseeChain);
}
