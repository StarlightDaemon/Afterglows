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

  /* Miniature Link Chain Wrapping / Unwrapping Flow */
  .fc-chain-stream {
    stroke: #ffecb3;
    stroke-dasharray: 3 2;
    animation: fc-chain-draw 1.5s linear infinite;
  }

  @keyframes fc-chain-draw {
    to { stroke-dashoffset: -10; }
  }

  /* Mainspring Barrel Slow Clockwise Rotation */
  .fc-barrel-rotation {
    transform-origin: 20px 36px;
    animation: fc-spin-barrel 8s linear infinite;
  }

  @keyframes fc-spin-barrel {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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
          <svg class="fc-svg" viewBox="0 0 76 72">
            <!-- Left Cylindrical Mainspring Barrel Housing -->
            <g class="fc-barrel-rotation">
              <circle cx="20" cy="36" r="14" fill="#2d1c14" stroke="#ffb74d" stroke-width="1.2" />
              <circle cx="20" cy="36" r="6" fill="#1b100a" stroke="#ffd54f" stroke-width="0.8" />
              <circle cx="20" cy="36" r="2" fill="#ff8f00" />
              <!-- Internal Mainspring Spiral Silhouette -->
              <path d="M 20 36 A 3 3 0 0 1 20 40 A 6 6 0 0 1 20 32 A 9 9 0 0 1 20 46" fill="none" stroke="rgba(255, 183, 77, 0.4)" stroke-width="0.6" />
            </g>

            <!-- Right Conical Grooved Fusee Frustum (Truncated hyperboloid cone) -->
            <g transform="translate(42, 18)">
              <!-- Cone Profile Silhouette (Narrow top, broad base) -->
              <path class="fc-cone-body" d="M 8 0 L 16 0 L 22 36 L 2 36 Z" />

              <!-- Helical Chain Grooves (Spiral steps up the cone) -->
              <g stroke="#ffd54f" stroke-width="0.8" opacity="0.8">
                <line x1="7.5" y1="5" x2="16.5" y2="5" />
                <line x1="6.5" y1="11" x2="17.5" y2="11" />
                <line x1="5.5" y1="17" x2="18.5" y2="17" />
                <line x1="4.5" y1="23" x2="19.5" y2="23" />
                <line x1="3.5" y1="29" x2="20.5" y2="29" />
              </g>

              <!-- Fusee Base Great Wheel Gear Teeth -->
              <rect x="0" y="34" width="24" height="3" fill="#ffb300" stroke="#ff8f00" stroke-width="0.5" />
              <!-- Winding Square Arbor at Top of Cone -->
              <rect x="10" y="-3" width="4" height="3" fill="#cfd8dc" stroke="#90a4ae" stroke-width="0.5" />
            </g>

            <!-- Miniature Steel Fusee Link Chain (Connecting barrel to cone groove) -->
            <path d="M 20 22 C 30 20, 42 22, 50 24" fill="none" stroke="#ffe082" stroke-width="1.4" class="fc-chain-stream" />

            <!-- Tangent Chain Link Nodes -->
            <circle cx="20" cy="22" r="1.2" fill="#ffd700" />
            <circle cx="50" cy="24" r="1.2" fill="#ffd700" />
          </svg>
        </div>
        <div class="fc-label">FUSEE & CHAIN</div>
      </div>
    `;
  }
}

customElements.define('concept-fusee-chain', ConceptFuseeChain);
