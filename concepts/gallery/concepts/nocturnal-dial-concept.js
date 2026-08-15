const nocturnalStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .nt-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #151b28 0%, #04070d 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nt-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nt-svg {
    width: 76px;
    height: 72px;
  }

  /* Rotating Long Index Alidade Arm pointing to Pointer Star */
  .nt-alidade-arm {
    transform-origin: 38px 32px;
    animation: nt-sweep 6s ease-in-out infinite alternate;
  }

  @keyframes nt-sweep {
    0% { transform: rotate(-45deg); }
    100% { transform: rotate(70deg); }
  }

  /* Polaris central star sight pulsing */
  .nt-polaris {
    fill: #ffffff;
    animation: nt-polaris-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes nt-polaris-pulse {
    0% { transform: scale(0.8); filter: drop-shadow(0 0 2px #80d8ff); }
    100% { transform: scale(1.3); filter: drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 10px #ffd700); }
  }

  /* Brass Main Plate & Month Disc */
  .nt-main-dial {
    fill: #2d1c14;
    stroke: #ffd54f;
    stroke-width: 1.2;
  }

  .nt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptNocturnalDial extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${nocturnalStyles}</style>
      <div class="nt-box">
        <div class="nt-stage">
          <svg class="nt-svg" viewBox="0 0 76 72">
            <!-- Brass Pierced Handle Grip extending downwards -->
            <path d="M 35 56 L 41 56 L 40 68 L 36 68 Z" fill="#4e342e" stroke="#ffb300" stroke-width="0.8" />
            <circle cx="38" cy="64" r="1.5" fill="#151b28" stroke="#ffb300" stroke-width="0.6" />

            <!-- Main Brass Calendar Ring Plate (Month scale) -->
            <circle class="nt-main-dial" cx="38" cy="32" r="26" />
            <circle cx="38" cy="32" r="20" fill="#3e2723" stroke="#ffa000" stroke-width="0.8" />

            <!-- Middle Hour Ring Disc (24 tooth notched hour index) -->
            <circle cx="38" cy="32" r="14" fill="#1b120c" stroke="#ffd54f" stroke-width="0.8" stroke-dasharray="3 2" />

            <!-- Month / Hour Calibration Ticks -->
            <g stroke="#ffb74d" stroke-width="0.5">
              <line x1="38" y1="6" x2="38" y2="12" />
              <line x1="56.4" y1="13.6" x2="52.1" y2="17.9" />
              <line x1="64" y1="32" x2="58" y2="32" />
              <line x1="56.4" y1="50.4" x2="52.1" y2="46.1" />
              <line x1="38" y1="58" x2="38" y2="52" />
              <line x1="19.6" y1="50.4" x2="23.9" y2="46.1" />
              <line x1="12" y1="32" x2="18" y2="32" />
              <line x1="19.6" y1="13.6" x2="23.9" y2="17.9" />
            </g>

            <!-- Rotating Long Alidade Pointer Arm (Sighting the pointer star of Ursa Major) -->
            <g class="nt-alidade-arm">
              <polygon points="38,32 40,8 38,4 36,8" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.8" />
              <line x1="38" y1="32" x2="38" y2="4" stroke="#ff3d00" stroke-width="0.6" />
            </g>

            <!-- Central Sighting Tube Hole (Peep hole to center Polaris / North Star) -->
            <circle cx="38" cy="32" r="4.5" fill="#04070d" stroke="#ffd700" stroke-width="1.2" />
            <g transform="translate(38, 32)">
              <circle class="nt-polaris" cx="0" cy="0" r="1.5" />
            </g>

            <!-- Sighted Stars Constellation Pointers (Dubhe & Merak) -->
            <g fill="#80d8ff" opacity="0.8">
              <circle cx="58" cy="10" r="1.2" />
              <circle cx="64" cy="16" r="1.2" />
              <line x1="58" y1="10" x2="64" y2="16" stroke="#80d8ff" stroke-width="0.5" stroke-dasharray="1 1" />
            </g>
          </svg>
        </div>
        <div class="nt-label">NOCTURNAL STAR CLOCK</div>
      </div>
    `;
  }
}

customElements.define('concept-nocturnal-dial', ConceptNocturnalDial);
