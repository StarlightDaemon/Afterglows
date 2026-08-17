const heliographStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 40% 30%, #201a0d 0%, #060502 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hg-svg {
    width: 76px;
    height: 72px;
  }

  /* Articulating Signaling Mirror gimbal tilt */
  .hg-mirror-gimbal {
    transform-origin: 22px 24px;
    animation: hg-mirror-tilt 2.4s ease-in-out infinite alternate;
  }

  @keyframes hg-mirror-tilt {
    0% { transform: rotate(-14deg); }
    100% { transform: rotate(14deg); }
  }

  /* Specular Mirror Glint */
  .hg-mirror-glint {
    fill: #ffffff;
    animation: hg-specular 2.4s ease-in-out infinite alternate;
  }

  @keyframes hg-specular {
    0% { filter: drop-shadow(0 0 2px #ffd700); }
    100% { filter: drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 14px #ffab00); }
  }

  /* Mechanical Telegraph Key click lever */
  .hg-key-lever {
    transform-origin: 32px 36px;
    animation: hg-key-tap 0.8s ease-in-out infinite alternate;
  }

  @keyframes hg-key-tap {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(8deg); }
  }

  /* Expanding Morse Solar Flash Beam Cone */
  .hg-flash-beam {
    fill: url(#hg-beam-grad);
    transform-origin: 38px 24px;
    animation: hg-beam-pulse 1.6s ease-in-out infinite alternate;
  }

  @keyframes hg-beam-pulse {
    0% { transform: scaleX(0.4) scaleY(0.6); opacity: 0.4; }
    100% { transform: scaleX(1.15) scaleY(1.1); opacity: 1; }
  }

  /* Traveling Morse solar photon packet */
  .hg-signal-packet {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #ffd700;
    z-index: 6;
    animation: hg-signal-transmit 1.6s linear infinite;
  }

  .spk1 { animation-delay: 0s; }
  .spk2 { animation-delay: 0.8s; }

  @keyframes hg-signal-transmit {
    0% { transform: translate(-6px, -12px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(38px, -12px) scale(1.3); opacity: 0; }
  }

  .hg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHeliographFlash extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${heliographStyles}</style>
      <div class="hg-box">
        <div class="hg-stage">
          <div class="hg-signal-packet spk1"></div>
          <div class="hg-signal-packet spk2"></div>

          <svg class="hg-svg" viewBox="0 0 76 72">
            <defs>
              <linearGradient id="hg-beam-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
                <stop offset="30%" stop-color="#ffd700" stop-opacity="0.8" />
                <stop offset="100%" stop-color="#ff9100" stop-opacity="0.1" />
              </linearGradient>
            </defs>

            <!-- Surveyor Brass Tripod Stand -->
            <path d="M 22 34 L 10 64 M 22 34 L 22 64 M 22 34 L 34 64" stroke="#8d6e63" stroke-width="1.6" stroke-linecap="round" />
            <circle cx="22" cy="34" r="3.5" fill="#ffd54f" stroke="#ff8f00" stroke-width="1" />

            <!-- Circular Signaling Mirror (Left) with Active Articulating Tilt -->
            <g class="hg-mirror-gimbal">
              <circle cx="22" cy="24" r="10" fill="#cfd8dc" stroke="#ffd700" stroke-width="1.4" />
              <circle class="hg-mirror-glint" cx="22" cy="24" r="7" />
            </g>

            <!-- Morse Signaling Key & Screen Shutter Box -->
            <rect x="32" y="16" width="6" height="16" fill="#3e2723" stroke="#ffb74d" stroke-width="1" />

            <!-- Morse Telegraph Sending Key Lever with Dynamic Tapping -->
            <g class="hg-key-lever">
              <line x1="32" y1="36" x2="42" y2="36" stroke="#cfd8dc" stroke-width="1.6" />
              <circle cx="42" cy="36" r="2" fill="#ffd700" />
            </g>

            <!-- Expanding Solar Morse Flash Beam Cone -->
            <polygon class="hg-flash-beam" points="38,24 72,8 72,40" />

            <!-- Distant Mountain Station Silhouette in Background -->
            <path d="M 48 54 L 58 42 L 72 56 Z" fill="#1b1208" stroke="#3e2723" stroke-width="0.8" />
          </svg>
        </div>
        <div class="hg-label">SOLAR HELIOGRAPH 1869</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-heliograph-flash')) {
  customElements.define('concept-heliograph-flash', ConceptHeliographFlash);
}
