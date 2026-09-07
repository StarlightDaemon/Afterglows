const chappeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cs-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 30%, #1a2332 0%, #050a12 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cs-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cs-svg {
    width: 76px;
    height: 72px;
  }

  /* Central Regulator Arm (Main Crossbar) continuous signaling rotation */
  .cs-regulator-beam {
    transform-origin: 38px 24px;
    animation: cs-reg-rotate 3.2s ease-in-out infinite alternate;
  }

  @keyframes cs-reg-rotate {
    0% { transform: rotate(-55deg); }
    50% { transform: rotate(45deg); }
    100% { transform: rotate(-10deg); }
  }

  /* Left Indicator Wing (Flipper arm) articulating signaling */
  .cs-wing-left {
    transform-origin: -14px 0px;
    animation: cs-wing-l-flip 1.6s ease-in-out infinite alternate;
  }

  @keyframes cs-wing-l-flip {
    0% { transform: rotate(45deg); }
    100% { transform: rotate(-110deg); }
  }

  /* Right Indicator Wing (Flipper arm) articulating signaling */
  .cs-wing-right {
    transform-origin: 14px 0px;
    animation: cs-wing-r-flip 1.6s ease-in-out infinite alternate;
    animation-delay: 0.8s;
  }

  @keyframes cs-wing-r-flip {
    0% { transform: rotate(-45deg); }
    100% { transform: rotate(120deg); }
  }

  /* Traveling optical signal packet passing across relay tower */
  .cs-signal-packet {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00e5ff, 0 0 14px #ffd700;
    z-index: 6;
    animation: cs-packet-flight 2.4s ease-in-out infinite;
  }

  @keyframes cs-packet-flight {
    0% { transform: translate(-36px, -18px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(36px, -18px) scale(0.6); opacity: 0; }
  }

  /* Semaphore Lantern Beacon Glow */
  .cs-signal-beacon {
    fill: #ffd700;
    animation: cs-beacon-pulse 1s ease-in-out infinite alternate;
  }

  @keyframes cs-beacon-pulse {
    0% { filter: drop-shadow(0 0 2px #ff9100); opacity: 0.7; }
    100% { filter: drop-shadow(0 0 8px #00e5ff); opacity: 1; }
  }

  .cs-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptChappeSemaphore extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${chappeStyles}</style>
      <div class="cs-box">
        <div class="cs-stage">
          <div class="cs-signal-packet"></div>

          <svg class="cs-svg" viewBox="0 0 76 72">
            <!-- Stone Relay Tower Roof & Balcony (Bottom Base) -->
            <path d="M 20 66 L 56 66 L 52 48 L 24 48 Z" fill="#263238" stroke="#455a64" stroke-width="1" />
            <rect x="22" y="44" width="32" height="4" rx="1" fill="#37474f" stroke="#78909c" stroke-width="0.8" />

            <!-- Vertical Timber Mast Pole -->
            <line x1="38" y1="44" x2="38" y2="24" stroke="#cfd8dc" stroke-width="2" stroke-linecap="round" />
            <!-- Guy Wires -->
            <line x1="38" y1="28" x2="24" y2="44" stroke="#546e7a" stroke-width="0.6" stroke-dasharray="1 1" />
            <line x1="38" y1="28" x2="52" y2="44" stroke="#546e7a" stroke-width="0.6" stroke-dasharray="1 1" />

            <!-- Articulated Semaphore Mechanism (Pivoting at top of mast 38, 24) -->
            <g class="cs-regulator-beam">
              <!-- Central Black Slatted Wooden Regulator Beam (14 units each side) -->
              <line x1="-14" y1="0" x2="14" y2="0" stroke="#ffd700" stroke-width="2.5" stroke-linecap="round" transform="translate(38, 24)" />
              <circle cx="38" cy="24" r="2.2" fill="#ff3d00" />

              <!-- Left Indicator Wing Arm (Indicateur) -->
              <g transform="translate(38, 24)">
                <g class="cs-wing-left">
                  <line x1="-14" y1="0" x2="-24" y2="0" stroke="#00e5ff" stroke-width="2.2" stroke-linecap="round" />
                  <circle cx="-14" cy="0" r="1.4" fill="#ffd700" />
                </g>
              </g>

              <!-- Right Indicator Wing Arm (Indicateur) -->
              <g transform="translate(38, 24)">
                <g class="cs-wing-right">
                  <line x1="14" y1="0" x2="24" y2="0" stroke="#00e5ff" stroke-width="2.2" stroke-linecap="round" />
                  <circle cx="14" cy="0" r="1.4" fill="#ffd700" />
                </g>
              </g>
            </g>

            <!-- Lantern Beacon Signal Indicator for Night Telegraphy -->
            <circle class="cs-signal-beacon" cx="38" cy="10" r="2.2" />
          </svg>
        </div>
        <div class="cs-label">CHAPPE SEMAPHORE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-chappe-semaphore')) {
  customElements.define('concept-chappe-semaphore', ConceptChappeSemaphore);
}
