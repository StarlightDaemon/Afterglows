const bessonNephoscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bn-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151a24 0%, #05070c 100%);
    border: 1.5px solid rgba(56, 189, 248, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bn-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bn-svg {
    width: 76px;
    height: 72px;
  }

  /* Rotating comb horizontal bar aligning with cloud drift direction */
  .bn-comb-rod {
    transform-origin: 38px 24px;
    animation: bn-align-drift 5s ease-in-out infinite alternate;
  }

  @keyframes bn-align-drift {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }

  /* Drifting cloud puff passing across comb teeth */
  .bn-cloud-drift {
    animation: bn-cloud-motion 6s linear infinite;
  }

  @keyframes bn-cloud-motion {
    0% { transform: translateX(-20px); opacity: 0.2; }
    30% { opacity: 0.8; }
    70% { opacity: 0.8; }
    100% { transform: translateX(25px); opacity: 0.2; }
  }

  /* Sighting alignment line flash */
  .bn-sight-line {
    animation: bn-sight-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes bn-sight-pulse {
    0% { opacity: 0.3; stroke: #0284c7; }
    100% { opacity: 0.9; stroke: #38bdf8; filter: drop-shadow(0 0 2px #7dd3fc); }
  }

  .bn-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(56, 189, 248, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBessonNephoscope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bessonNephoscopeStyles}</style>
      <div class="bn-box">
        <div class="bn-stage">
          <svg class="bn-svg" viewBox="0 0 76 72">
            <!-- 1902 Louis Besson Comb Nephoscope (Harrow Nephoscope) -->
            <!-- High Altitude Drifting Cirrus Cloud Sheet -->
            <g class="bn-cloud-drift">
              <path d="M 24 12 Q 32 8 40 12 Q 48 10 54 14 Q 48 18 36 17 Q 28 17 24 12 Z" fill="#38bdf8" fill-opacity="0.35" stroke="#bae6fd" stroke-width="0.6" />
            </g>

            <!-- Vertical Observation Mast & Azimuth Compass Dial Base -->
            <line x1="38" y1="24" x2="38" y2="60" stroke="#0369a1" stroke-width="1.6" />
            <!-- Fixed Azimuth Dial Circle at Base -->
            <ellipse cx="38" cy="60" rx="16" ry="5" fill="#0f172a" stroke="#0284c7" stroke-width="0.8" />
            <line x1="38" y1="56" x2="38" y2="64" stroke="#38bdf8" stroke-width="0.6" />
            <line x1="24" y1="60" x2="52" y2="60" stroke="#38bdf8" stroke-width="0.6" />

            <!-- Observer's Upward Sighting Reticle Line -->
            <line class="bn-sight-line" x1="38" y1="60" x2="38" y2="24" stroke-dasharray="2 1.5" stroke-width="0.8" />

            <!-- Rotating Horizontal Comb Bar ("Herse") with 7 Equidistant Vertical Spikes -->
            <g class="bn-comb-rod">
              <!-- Horizontal Crossbar Rod -->
              <line x1="16" y1="24" x2="60" y2="24" stroke="#38bdf8" stroke-width="1.2" />
              <!-- 7 Vertical Equidistant Spikes (Teeth of the Comb) -->
              <line x1="18" y1="24" x2="18" y2="15" stroke="#bae6fd" stroke-width="1" />
              <line x1="25" y1="24" x2="25" y2="15" stroke="#bae6fd" stroke-width="1" />
              <line x1="31" y1="24" x2="31" y2="15" stroke="#bae6fd" stroke-width="1" />
              <line x1="38" y1="24" x2="38" y2="13" stroke="#f0f9ff" stroke-width="1.4" />
              <line x1="45" y1="24" x2="45" y2="15" stroke="#bae6fd" stroke-width="1" />
              <line x1="52" y1="24" x2="52" y2="15" stroke="#bae6fd" stroke-width="1" />
              <line x1="58" y1="24" x2="58" y2="15" stroke="#bae6fd" stroke-width="1" />

              <!-- Endless Control Cords Turning Comb from Ground -->
              <line x1="20" y1="24" x2="36" y2="58" stroke="#0284c7" stroke-width="0.4" stroke-dasharray="2 2" />
              <line x1="56" y1="24" x2="40" y2="58" stroke="#0284c7" stroke-width="0.4" stroke-dasharray="2 2" />
            </g>
          </svg>
        </div>
        <div class="bn-label">BESSON NEPHOSCOPE</div>
      </div>
    `;
  }
}

customElements.define('concept-besson-nephoscope', ConceptBessonNephoscope);
