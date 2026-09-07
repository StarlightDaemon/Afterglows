const azothSealStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .az-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #150928 0%, #05020a 100%);
    border: 1.5px solid rgba(186, 104, 200, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(186, 104, 200, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .az-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .az-svg {
    width: 76px;
    height: 72px;
  }

  /* Rotating 7-pointed heptagram star */
  .az-heptagram {
    transform-origin: 38px 36px;
    animation: az-spin 4s linear infinite;
  }

  @keyframes az-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Counter-rotating planetary vertex nodes */
  .az-outer-ring {
    transform-origin: 38px 36px;
    animation: az-counter-spin 6s linear infinite;
  }

  @keyframes az-counter-spin {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  /* Counter-rotating triangle of principles */
  .az-triangle {
    transform-origin: 38px 36px;
    animation: az-tri-spin 3s linear infinite reverse;
  }

  @keyframes az-tri-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Orbiting transmutation spark packet */
  .az-spark-orbiter {
    transform-origin: 38px 36px;
    animation: az-spark-orbit 2.2s linear infinite;
  }

  @keyframes az-spark-orbit {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Central glowing spiritus core */
  .az-core {
    fill: #ffd700;
    animation: az-core-pulse 1.8s ease-in-out infinite alternate;
  }

  @keyframes az-core-pulse {
    0% { transform: scale(0.85); filter: drop-shadow(0 0 2px #e040fb); }
    100% { transform: scale(1.25); filter: drop-shadow(0 0 8px #ffd700); }
  }

  .az-vertices circle {
    animation: az-node-flash 1.5s ease-in-out infinite alternate;
  }

  .az-vertices circle:nth-child(odd) {
    animation-delay: 0.75s;
  }

  @keyframes az-node-flash {
    0% { fill: #ab47bc; filter: drop-shadow(0 0 1px #ba68c8); }
    100% { fill: #00e5ff; filter: drop-shadow(0 0 5px #00e5ff); }
  }

  .az-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(186, 104, 200, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAzothSeal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${azothSealStyles}</style>
      <div class="az-box">
        <div class="az-stage">
          <svg class="az-svg" viewBox="0 0 76 72">
            <!-- Concentric Mandala Boundary Rings -->
            <circle cx="38" cy="36" r="33" fill="none" stroke="rgba(186, 104, 200, 0.25)" stroke-width="1" />
            <circle cx="38" cy="36" r="30" fill="rgba(186, 104, 200, 0.05)" stroke="rgba(186, 104, 200, 0.4)" stroke-width="0.8" stroke-dasharray="3 3" />

            <!-- Outer Inscribed Orbit with Planetary Nodes -->
            <g class="az-outer-ring">
              <!-- 7 Outer Ring Markers -->
              <circle cx="38" cy="6" r="1.5" fill="#e040fb" />
              <circle cx="61.4" cy="17.3" r="1.5" fill="#00e5ff" />
              <circle cx="67.2" cy="42.5" r="1.5" fill="#ffd700" />
              <circle cx="51.2" cy="64.2" r="1.5" fill="#ff5252" />
              <circle cx="24.8" cy="64.2" r="1.5" fill="#69f0ae" />
              <circle cx="8.8" cy="42.5" r="1.5" fill="#ffab00" />
              <circle cx="14.6" cy="17.3" r="1.5" fill="#e0e0e0" />
            </g>

            <!-- 7-Pointed Heptagram / Star of Azoth -->
            <g class="az-heptagram">
              <!-- Regular 7/3 Heptagram Path -->
              <path d="M 38 8 
                       L 51.2 64.2 
                       L 14.6 17.3 
                       L 67.2 42.5 
                       L 8.8 42.5 
                       L 61.4 17.3 
                       L 24.8 64.2 Z" 
                    fill="none" stroke="#ba68c8" stroke-width="1.2" />

              <!-- Vertex Accent Nodes -->
              <g class="az-vertices">
                <circle cx="38" cy="8" r="2" />
                <circle cx="61.4" cy="17.3" r="2" />
                <circle cx="67.2" cy="42.5" r="2" />
                <circle cx="51.2" cy="64.2" r="2" />
                <circle cx="24.8" cy="64.2" r="2" />
                <circle cx="8.8" cy="42.5" r="2" />
                <circle cx="14.6" cy="17.3" r="2" />
              </g>
            </g>

            <!-- Central Counter-Rotating Equilateral Triangle of Principles -->
            <g class="az-triangle">
              <polygon points="38,20 52,44 24,44" fill="none" stroke="#ffd700" stroke-width="1.2" />
            </g>

            <!-- Orbiting Transmutation Spark -->
            <g class="az-spark-orbiter">
              <circle cx="38" cy="10" r="2.5" fill="#ffffff" filter="drop-shadow(0 0 4px #00e5ff)" />
            </g>

            <!-- Glowing Core (transform center) -->
            <g transform="translate(38,36)">
              <circle class="az-core" cx="0" cy="0" r="3.5" />
            </g>
          </svg>
        </div>
        <div class="az-label">AZOTH MANDALA</div>
      </div>
    `;
  }
}

customElements.define('concept-azoth-seal', ConceptAzothSeal);
