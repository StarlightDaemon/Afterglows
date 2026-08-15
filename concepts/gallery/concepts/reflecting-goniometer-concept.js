const goniometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a10 0%, #0a0804 100%);
    border: 1.5px solid rgba(255, 193, 7, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 193, 7, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rg-svg {
    width: 76px;
    height: 72px;
  }

  /* Incident & Reflected Collimated Light Beams */
  .rg-beam-incident {
    stroke: #00e5ff;
    stroke-dasharray: 4 2;
    animation: rg-beam-flow 1.5s linear infinite;
  }

  @keyframes rg-beam-flow {
    to { stroke-dashoffset: -12; }
  }

  .rg-beam-reflected {
    stroke: #ffd700;
    stroke-dasharray: 4 2;
    animation: rg-beam-flow-rev 1.5s linear infinite;
  }

  @keyframes rg-beam-flow-rev {
    to { stroke-dashoffset: 12; }
  }

  /* Rotating Crystal Mount Spindle */
  .rg-crystal-mount {
    transform-origin: 38px 36px;
    animation: rg-crystal-rock 4s ease-in-out infinite alternate;
  }

  @keyframes rg-crystal-rock {
    0% { transform: rotate(-25deg); }
    100% { transform: rotate(35deg); }
  }

  /* Vernier Protractor Graduations */
  .rg-vernier-dial {
    fill: #2d2012;
    stroke: #ffc107;
    stroke-width: 1.2;
  }

  .rg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 193, 7, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptReflectingGoniometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${goniometerStyles}</style>
      <div class="rg-box">
        <div class="rg-stage">
          <svg class="rg-svg" viewBox="0 0 76 72">
            <!-- Brass Heavy Tripod Base Stand -->
            <path d="M 26 64 L 50 64 L 42 54 L 34 54 Z" fill="#4e342e" stroke="#ffc107" stroke-width="0.8" />
            <rect x="36" y="44" width="4" height="12" fill="#3e2723" stroke="#ffc107" stroke-width="0.8" />

            <!-- Circular Vernier Graduated Degree Dial (360° Scale) -->
            <circle class="rg-vernier-dial" cx="38" cy="36" r="28" />
            <circle cx="38" cy="36" r="22" fill="#1b120a" stroke="#ffa000" stroke-width="0.8" />

            <!-- Degree Ticks around Dial -->
            <g stroke="#ffd54f" stroke-width="0.5">
              <line x1="38" y1="8" x2="38" y2="14" />
              <line x1="57.8" y1="16.2" x2="53.5" y2="20.5" />
              <line x1="66" y1="36" x2="60" y2="36" />
              <line x1="57.8" y1="55.8" x2="53.5" y2="51.5" />
              <line x1="38" y1="64" x2="38" y2="58" />
              <line x1="18.2" y1="55.8" x2="22.5" y2="51.5" />
              <line x1="10" y1="36" x2="16" y2="36" />
              <line x1="18.2" y1="16.2" x2="22.5" y2="20.5" />
            </g>

            <!-- Vernier Index Micrometer Lens at Top -->
            <rect x="34" y="6" width="8" height="4" rx="1" fill="#ffd700" stroke="#ff8f00" stroke-width="0.6" />

            <!-- Rotating Spindle with Precision Mineral Crystal Specimen (Quartz Rhombohedron) -->
            <g class="rg-crystal-mount">
              <!-- Specimen Carrier Wax Pin -->
              <line x1="38" y1="36" x2="38" y2="28" stroke="#cfd8dc" stroke-width="1.2" />
              <!-- Faceted Crystal Prism -->
              <polygon points="38,22 44,26 38,30 32,26" fill="#e0f7fa" stroke="#00e5ff" stroke-width="0.8" />
              <polygon points="38,22 44,26 42,32 38,30" fill="#b2ebf2" />
              <!-- Vernier Pointer Bar -->
              <line x1="38" y1="36" x2="38" y2="10" stroke="#ff3d00" stroke-width="1" />
            </g>

            <!-- Collimated Light Source Ray (Incident from left slit) -->
            <line x1="6" y1="26" x2="38" y2="26" class="rg-beam-incident" stroke-width="1.2" />
            <!-- Specular Reflection Ray (Reflected to right telescope eyepiece) -->
            <line x1="38" y1="26" x2="70" y2="14" class="rg-beam-reflected" stroke-width="1.2" />

            <!-- Center Pivot Thumbscrew -->
            <circle cx="38" cy="36" r="3" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.8" />
          </svg>
        </div>
        <div class="rg-label">REFLECTING GONIOMETER</div>
      </div>
    `;
  }
}

customElements.define('concept-reflecting-goniometer', ConceptReflectingGoniometer);
