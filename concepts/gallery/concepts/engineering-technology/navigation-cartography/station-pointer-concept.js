const stationPointerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1e1a 0%, #080806 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sp-svg {
    width: 76px;
    height: 72px;
  }

  /* Left Movable Vernier Arm Angular Scan */
  .sp-left-arm {
    transform-origin: 38px 36px;
    animation: sp-left-scan 4s ease-in-out infinite alternate;
  }

  @keyframes sp-left-scan {
    0% { transform: rotate(-45deg); }
    100% { transform: rotate(-15deg); }
  }

  /* Right Movable Vernier Arm Angular Scan */
  .sp-right-arm {
    transform-origin: 38px 36px;
    animation: sp-right-scan 4s ease-in-out infinite alternate;
  }

  @keyframes sp-right-scan {
    0% { transform: rotate(20deg); }
    100% { transform: rotate(55deg); }
  }

  /* Resection Fix Center Pinpoint Pulse */
  .sp-fix-point {
    fill: #ff3d00;
    animation: sp-fix-glow 2s ease-in-out infinite alternate;
  }

  @keyframes sp-fix-glow {
    0% { transform: scale(0.8); }
    100% { transform: scale(1.3); filter: drop-shadow(0 0 4px #ff3d00); }
  }

  .sp-brass-ring {
    fill: #2d2616;
    stroke: #ffc107;
    stroke-width: 1.2;
  }

  .sp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptStationPointer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${stationPointerStyles}</style>
      <div class="sp-box">
        <div class="sp-stage">
          <svg class="sp-svg" viewBox="0 0 76 72">
            <!-- Background Nautical Chart Compass Rose & Sounding Depths Grid -->
            <g stroke="rgba(255, 255, 255, 0.15)" stroke-width="0.5">
              <circle cx="38" cy="36" r="32" fill="none" stroke-dasharray="2 2" />
              <line x1="6" y1="36" x2="70" y2="36" />
              <line x1="38" y1="6" x2="38" y2="66" />
            </g>

            <!-- Three Distant Coastal Landmarks on Chart (Triangulation Fix Targets) -->
            <g fill="#00e5ff">
              <circle cx="16" cy="10" r="1.5" />
              <circle cx="38" cy="8" r="1.5" />
              <circle cx="64" cy="14" r="1.5" />
            </g>

            <!-- Central Graduated Brass Circular Protractor Ring (0° - 360° scale) -->
            <circle class="sp-brass-ring" cx="38" cy="36" r="20" />
            <circle cx="38" cy="36" r="13" fill="#1b170e" stroke="#ffd54f" stroke-width="0.8" />

            <!-- Protractor Degree Division Ticks -->
            <g stroke="#ffb74d" stroke-width="0.5">
              <line x1="38" y1="16" x2="38" y2="20" />
              <line x1="52.1" y1="21.9" x2="49.3" y2="24.7" />
              <line x1="58" y1="36" x2="54" y2="36" />
              <line x1="52.1" y1="50.1" x2="49.3" y2="47.3" />
              <line x1="38" y1="56" x2="38" y2="52" />
              <line x1="23.9" y1="50.1" x2="26.7" y2="47.3" />
              <line x1="18" y1="36" x2="22" y2="36" />
              <line x1="23.9" y1="21.9" x2="26.7" y2="24.7" />
            </g>

            <!-- Arm 1: Fixed Center Brass Index Arm (Pointing straight north 0°) -->
            <line x1="38" y1="36" x2="38" y2="8" stroke="#ffd700" stroke-width="1.8" stroke-linecap="round" />
            <line x1="38" y1="8" x2="38" y2="4" stroke="#ff3d00" stroke-width="0.8" />

            <!-- Arm 2: Rotating Left Vernier Arm (Plotting horizontal left sextant angle) -->
            <g class="sp-left-arm">
              <line x1="38" y1="36" x2="38" y2="8" stroke="#ffb300" stroke-width="1.4" stroke-linecap="round" />
              <!-- Vernier Micrometer Clamping Slide Block -->
              <rect x="36" y="16" width="4" height="4" fill="#ffd700" stroke="#ff8f00" stroke-width="0.5" />
            </g>

            <!-- Arm 3: Rotating Right Vernier Arm (Plotting horizontal right sextant angle) -->
            <g class="sp-right-arm">
              <line x1="38" y1="36" x2="38" y2="8" stroke="#ffb300" stroke-width="1.4" stroke-linecap="round" />
              <!-- Vernier Micrometer Clamping Slide Block -->
              <rect x="36" y="16" width="4" height="4" fill="#ffd700" stroke="#ff8f00" stroke-width="0.5" />
            </g>

            <!-- Central Position Fix Pinpoint (The Chart Resection Fix Origin) -->
            <circle cx="38" cy="36" r="3.5" fill="#ffd700" stroke="#ff6f00" stroke-width="0.8" />
            <g transform="translate(38, 36)">
              <circle class="sp-fix-point" cx="0" cy="0" r="1.2" />
            </g>
          </svg>
        </div>
        <div class="sp-label">STATION POINTER</div>
      </div>
    `;
  }
}

customElements.define('concept-station-pointer', ConceptStationPointer);
