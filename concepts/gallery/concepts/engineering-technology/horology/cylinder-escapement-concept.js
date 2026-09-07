const cylinderStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ce-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a2228 0%, #05080c 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ce-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ce-svg {
    width: 76px;
    height: 72px;
  }

  /* Hollow Steel Cylinder Rotation with Balance Oscillation */
  .ce-cylinder-tube {
    transform-origin: 38px 24px;
    animation: ce-cylinder-turn 2s ease-in-out infinite alternate;
  }

  @keyframes ce-cylinder-turn {
    0% { transform: rotate(-45deg); }
    100% { transform: rotate(45deg); }
  }

  /* Cylinder Escape Wheel Step */
  .ce-escape-wheel {
    transform-origin: 38px 52px;
    animation: ce-step-wheel 2s steps(8, end) infinite;
  }

  @keyframes ce-step-wheel {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Polished steel tube glow */
  .ce-tube-shell {
    fill: #263238;
    stroke: #00e5ff;
    stroke-width: 1.2;
  }

  .ce-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCylinderEscapement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cylinderStyles}</style>
      <div class="ce-box">
        <div class="ce-stage">
          <svg class="ce-svg" viewBox="0 0 76 72">
            <!-- Hollow Cylinder Staff Assembly (Top) -->
            <g class="ce-cylinder-tube">
              <!-- Balance Arm Crossbar -->
              <line x1="18" y1="24" x2="58" y2="24" stroke="#78909c" stroke-width="1.2" />
              <!-- Cutaway Hollow Polished Cylinder Shell (C-shape with lip apertures) -->
              <path class="ce-tube-shell" d="M 33 24 A 6 6 0 1 1 43 24" fill="none" stroke-linecap="round" />
              <circle cx="38" cy="24" r="2" fill="#cfd8dc" />
            </g>

            <!-- Cylinder Escape Wheel (Bottom Wheel with Stalked Wedge Teeth) -->
            <g class="ce-escape-wheel">
              <circle cx="38" cy="52" r="15" fill="none" stroke="#546e7a" stroke-width="1" />
              <circle cx="38" cy="52" r="4" fill="#37474f" stroke="#ffd700" stroke-width="0.8" />

              <!-- 8 Triangular Stalked Wedge Teeth rising from pillars -->
              <g fill="#ffd700" stroke="#ffb300" stroke-width="0.5">
                <!-- Top tooth entering cylinder -->
                <polygon points="38,30 36,36 40,36" />
                <polygon points="48.6,34.4 44.4,38.6 47.2,41.4" />
                <polygon points="53,45 47,43 47,47" />
                <polygon points="48.6,55.6 47.2,48.6 44.4,51.4" />
                <polygon points="38,60 40,54 36,54" />
                <polygon points="27.4,55.6 31.6,51.4 28.8,48.6" />
                <polygon points="23,45 29,47 29,43" />
                <polygon points="27.4,34.4 28.8,41.4 31.6,38.6" />
              </g>
            </g>

            <!-- Frictional Rest Impulse Spark -->
            <circle cx="38" cy="30" r="1.5" fill="#00e5ff" filter="drop-shadow(0 0 3px #00e5ff)" />
          </svg>
        </div>
        <div class="ce-label">CYLINDER ESCAPEMENT</div>
      </div>
    `;
  }
}

customElements.define('concept-cylinder-escapement', ConceptCylinderEscapement);
