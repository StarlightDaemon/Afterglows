const filarMicrometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fm-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151a24 0%, #030408 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fm-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fm-svg {
    width: 76px;
    height: 72px;
  }

  /* Movable spiderweb filar wire traversing across field */
  .fm-movable-wire {
    animation: fm-wire-traverse 3.2s ease-in-out infinite alternate;
  }

  @keyframes fm-wire-traverse {
    0% { transform: translateY(-7px); }
    100% { transform: translateY(7px); }
  }

  /* Position angle circle rotation for binary star orbital angle */
  .fm-position-circle {
    transform-origin: 38px 36px;
    animation: fm-rotate-pos 4.8s linear infinite;
  }

  @keyframes fm-rotate-pos {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Binary star pair twinkling in field */
  .fm-binary-primary {
    animation: fm-star-pulse 1.2s ease-in-out infinite alternate;
  }

  .fm-binary-secondary {
    animation: fm-star-pulse 1.2s ease-in-out infinite alternate 0.6s;
  }

  @keyframes fm-star-pulse {
    0% { opacity: 0.6; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1.15); filter: drop-shadow(0 0 3px #00e5ff); }
  }

  .fm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFilarMicrometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${filarMicrometerStyles}</style>
      <div class="fm-box">
        <div class="fm-stage">
          <svg class="fm-svg" viewBox="0 0 76 72">
            <!-- Brass Position Circle Frame & Vernier Angle Dial (360° Position Angle) -->
            <g class="fm-position-circle">
              <circle cx="38" cy="36" r="28" fill="#090d16" stroke="#ffd700" stroke-width="1.2" />
              <!-- Degree Graduations along Rim -->
              <circle cx="38" cy="36" r="25" fill="none" stroke="#ffb300" stroke-width="0.5" stroke-dasharray="1.5 1.5" />
            </g>

            <!-- Circular Illuminated Telescopic Eyepiece Field (Red Lamp Field Illumination) -->
            <circle cx="38" cy="36" r="21" fill="#1b1216" stroke="#00e5ff" stroke-width="1" />

            <!-- Binary Star System Target (Center Field) -->
            <!-- Primary Star A -->
            <circle class="fm-binary-primary" cx="38" cy="36" r="2" fill="#fff59d" filter="drop-shadow(0 0 3px #ffeb3b)" />
            <!-- Companion Star B -->
            <circle class="fm-binary-secondary" cx="44" cy="42" r="1.4" fill="#80d8ff" filter="drop-shadow(0 0 3px #00e5ff)" />

            <!-- Fixed Spiderweb Crosshair Wires (Natural Spider Cocoon Silk) -->
            <g stroke="#ffffff" stroke-width="0.6" opacity="0.85">
              <!-- Fixed Horizontal Center Wire -->
              <line x1="17" y1="36" x2="59" y2="36" />
              <!-- Fixed Vertical Center Wire -->
              <line x1="38" y1="15" x2="38" y2="57" />
            </g>

            <!-- Movable Spiderweb Wire on Micrometer Screw Carriage -->
            <g class="fm-movable-wire">
              <line x1="17" y1="42" x2="59" y2="42" stroke="#00e5ff" stroke-width="0.8" filter="drop-shadow(0 0 1px #00e5ff)" />
            </g>

            <!-- Graduated Micrometer Drum & Thimble Knob at Right -->
            <g transform="translate(60, 32)">
              <rect x="0" y="0" width="10" height="8" rx="1" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />
              <!-- Micrometer 100-Division Scale -->
              <line x1="2" y1="4" x2="8" y2="4" stroke="#212121" stroke-width="0.8" stroke-dasharray="1 1" />
            </g>

            <!-- Binary Star Separation / PA Readout -->
            <text x="38" y="63" font-family="monospace" font-size="3" fill="#80d8ff" text-anchor="middle">SEP = 1.42" θ = 135°</text>
          </svg>
        </div>
        <div class="fm-label">FILAR MICROMETER</div>
      </div>
    `;
  }
}

customElements.define('concept-filar-micrometer', ConceptFilarMicrometer);
