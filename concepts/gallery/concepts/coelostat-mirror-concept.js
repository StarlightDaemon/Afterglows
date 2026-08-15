const coelostatStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cm-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #261f14 0%, #080603 100%);
    border: 1.5px solid rgba(255, 193, 7, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 193, 7, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cm-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cm-svg {
    width: 76px;
    height: 72px;
  }

  /* Clock-driven primary plane mirror rotating at 1 rev per 48 hours (half solar speed) */
  .cm-primary-mirror {
    transform-origin: 22px 28px;
    animation: cm-track-sun 4s linear infinite;
  }

  @keyframes cm-track-sun {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Stationary direct solar beam into fixed horizontal spectrograph */
  .cm-sun-beam {
    animation: cm-beam-glow 2s ease-in-out infinite alternate;
  }

  @keyframes cm-beam-glow {
    0% { opacity: 0.6; stroke: #ffca28; }
    100% { opacity: 1; stroke: #ffffff; filter: drop-shadow(0 0 3px #ffeb3b); }
  }

  /* Secondary fixed flat mirror directing ray to laboratory */
  .cm-secondary-mirror {
    animation: cm-mirror-glint 1.6s ease-in-out infinite alternate;
  }

  @keyframes cm-mirror-glint {
    0% { stroke: #ffd700; }
    100% { stroke: #fff9c4; filter: drop-shadow(0 0 2px #ffd700); }
  }

  .cm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 193, 7, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCoelostatMirror extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${coelostatStyles}</style>
      <div class="cm-box">
        <div class="cm-stage">
          <svg class="cm-svg" viewBox="0 0 76 72">
            <!-- Massive Concrete / Steel Coelostat Base Pier -->
            <rect x="10" y="56" width="56" height="6" rx="1" fill="#263238" stroke="#455a64" stroke-width="0.8" />

            <!-- Incident Sunlight Rays from Descending Sun (Top Left) -->
            <g stroke="#ffeb3b" stroke-width="1" opacity="0.85" stroke-dasharray="3 1.5">
              <line x1="4" y1="8" x2="22" y2="28" />
              <line x1="8" y1="4" x2="22" y2="28" />
            </g>
            <circle cx="6" cy="6" r="3" fill="#ffeb3b" filter="drop-shadow(0 0 4px #ff9800)" />

            <!-- Primary Clock-Driven Polar-Axis Coelostat Mirror (Rotates 180°/day) -->
            <!-- Polar Axis Fork Mounting Pillar -->
            <line x1="22" y1="56" x2="22" y2="28" stroke="#ffd700" stroke-width="1.8" />
            <g class="cm-primary-mirror">
              <!-- Optical Flat Silvered Glass Primary Mirror (Rotates on axis parallel to Earth's polar axis) -->
              <line x1="14" y1="20" x2="30" y2="36" stroke="#ffffff" stroke-width="3" stroke-linecap="round" />
              <line x1="14" y1="20" x2="30" y2="36" stroke="#90caf9" stroke-width="1.5" stroke-linecap="round" />
              <!-- Polar Worm Wheel Hub -->
              <circle cx="22" cy="28" r="3" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />
            </g>

            <!-- Reflected Solar Beam to Secondary Flat Mirror -->
            <line class="cm-sun-beam" x1="22" y1="28" x2="52" y2="28" stroke-width="1.8" />

            <!-- Secondary Fixed Optical Flat Mirror (Directs beam into fixed solar tower telescope) -->
            <!-- Adjustable Sighting Mounting Pillar -->
            <line x1="52" y1="56" x2="52" y2="28" stroke="#78909c" stroke-width="1.8" />
            <line class="cm-secondary-mirror" x1="46" y1="34" x2="58" y2="22" stroke-width="3" stroke-linecap="round" />
            <circle cx="52" cy="28" r="2.5" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />

            <!-- Non-Rotating Solar Beam Directed Straight into Spectrograph / Lab (Right) -->
            <line class="cm-sun-beam" x1="52" y1="28" x2="74" y2="28" stroke-width="2.2" stroke-dasharray="4 1" />
            <circle cx="72" cy="28" r="2" fill="#ffffff" filter="drop-shadow(0 0 3px #ffca28)" />

            <!-- Zero Field Rotation Solar Annotation -->
            <text x="38" y="65" font-family="monospace" font-size="3" fill="#ffca28" text-anchor="middle">STATIONARY BEAM / NO ROTATION</text>
          </svg>
        </div>
        <div class="cm-label">COELOSTAT MIRROR</div>
      </div>
    `;
  }
}

customElements.define('concept-coelostat-mirror', ConceptCoelostatMirror);
