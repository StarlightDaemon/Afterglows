const wrightWarpStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ww-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #221c16 0%, #080604 100%);
    border: 1.5px solid rgba(255, 179, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 179, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ww-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ww-flyer-bank 2.2s ease-in-out infinite alternate;
  }

  @keyframes ww-flyer-bank {
    0% { transform: rotate(-8deg) translateY(-2px); }
    100% { transform: rotate(8deg) translateY(2px); }
  }

  .ww-svg {
    width: 76px;
    height: 72px;
  }

  /* Biplane helical wing warping twist oscillation */
  .ww-left-wing-tip {
    transform-origin: 38px 32px;
    animation: ww-warp-left 2.2s ease-in-out infinite alternate;
  }

  .ww-right-wing-tip {
    transform-origin: 38px 32px;
    animation: ww-warp-right 2.2s ease-in-out infinite alternate;
  }

  @keyframes ww-warp-left {
    0% { transform: skewY(-14deg) translateY(-6px); }
    100% { transform: skewY(14deg) translateY(6px); }
  }

  @keyframes ww-warp-right {
    0% { transform: skewY(14deg) translateY(6px); }
    100% { transform: skewY(-14deg) translateY(-6px); }
  }

  /* Interconnected vertical twin rudder yaw deflection */
  .ww-rudder-yaw {
    transform-origin: 66px 32px;
    animation: ww-yaw-turn 2.2s ease-in-out infinite alternate;
  }

  @keyframes ww-yaw-turn {
    0% { transform: rotate(-22deg); }
    100% { transform: rotate(22deg); }
  }

  /* Prone pilot sliding hip cradle */
  .ww-pilot-cradle {
    animation: ww-cradle-slide 2.2s ease-in-out infinite alternate;
  }

  @keyframes ww-cradle-slide {
    0% { transform: translateX(-5px); }
    100% { transform: translateX(5px); }
  }

  /* Hip-cradle actuator control cable tension */
  .ww-warp-cables {
    animation: ww-cable-tension 1.1s ease-in-out infinite alternate;
  }

  @keyframes ww-cable-tension {
    0% { stroke: #ffd700; opacity: 0.6; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #ffd700); }
  }

  .ww-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 179, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptWrightWingWarp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${wrightWarpStyles}</style>
      <div class="ww-box">
        <div class="ww-stage">
          <svg class="ww-svg" viewBox="0 0 76 72">
            <!-- 1903 Wright Flyer Aerodynamic Wing Warping Mechanism -->
            <!-- Central Center-Section Biplane Truss & Engine Platform -->
            <line x1="34" y1="22" x2="34" y2="42" stroke="#8d6e63" stroke-width="1.2" />
            <line x1="42" y1="22" x2="42" y2="42" stroke="#8d6e63" stroke-width="1.2" />
            <!-- Prone Pilot Hip-Cradle -->
            <rect class="ww-pilot-cradle" x="35" y="38" width="6" height="3" fill="#ffb300" stroke="#ffd700" stroke-width="0.5" />

            <!-- Warping Left Wing Panel -->
            <g class="ww-left-wing-tip">
              <!-- Upper Left Wing Spar -->
              <line x1="8" y1="22" x2="34" y2="22" stroke="#ffecb3" stroke-width="2" />
              <!-- Lower Left Wing Spar -->
              <line x1="8" y1="42" x2="34" y2="42" stroke="#ffecb3" stroke-width="2" />
              <!-- Outer Upright Struts -->
              <line x1="12" y1="22" x2="12" y2="42" stroke="#8d6e63" stroke-width="1" />
              <line x1="22" y1="22" x2="22" y2="42" stroke="#8d6e63" stroke-width="1" />
              <!-- Diagonal Warping Pull Wires -->
              <g class="ww-warp-cables">
                <line x1="12" y1="22" x2="22" y2="42" stroke-width="0.6" />
                <line x1="12" y1="42" x2="22" y2="22" stroke-width="0.6" />
              </g>
            </g>

            <!-- Warping Right Wing Panel -->
            <g class="ww-right-wing-tip">
              <!-- Upper Right Wing Spar -->
              <line x1="42" y1="22" x2="68" y2="22" stroke="#ffecb3" stroke-width="2" />
              <!-- Lower Right Wing Spar -->
              <line x1="42" y1="42" x2="68" y2="42" stroke="#ffecb3" stroke-width="2" />
              <!-- Outer Upright Struts -->
              <line x1="54" y1="22" x2="54" y2="42" stroke="#8d6e63" stroke-width="1" />
              <line x1="64" y1="22" x2="64" y2="42" stroke="#8d6e63" stroke-width="1" />
              <!-- Diagonal Warping Pull Wires -->
              <g class="ww-warp-cables">
                <line x1="54" y1="22" x2="64" y2="42" stroke-width="0.6" />
                <line x1="54" y1="42" x2="64" y2="22" stroke-width="0.6" />
              </g>
            </g>

            <!-- Interconnected Vertical Twin Rudder -->
            <g class="ww-rudder-yaw">
              <rect x="65" y="24" width="2" height="16" fill="#ffe082" stroke="#ffb300" stroke-width="0.6" />
              <rect x="69" y="24" width="2" height="16" fill="#ffe082" stroke="#ffb300" stroke-width="0.6" />
              <!-- Tail Outrigger Booms -->
              <line x1="42" y1="32" x2="65" y2="32" stroke="#8d6e63" stroke-width="0.8" stroke-dasharray="2 1" />
            </g>

            <!-- Roll-Yaw 3-Axis Control Patent Annotation -->
            <text x="38" y="58" font-family="monospace" font-size="3.2" fill="#ffe082" text-anchor="middle">HELICAL TWIST ↔ YAW RUDDER</text>
          </svg>
        </div>
        <div class="ww-label">WRIGHT WING WARPING</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-wright-wing-warp')) {
  customElements.define('concept-wright-wing-warp', ConceptWrightWingWarp);
}
