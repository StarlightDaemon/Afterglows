const schlierenStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .so-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #102328 0%, #030a0d 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .so-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .so-svg {
    width: 76px;
    height: 72px;
  }

  /* Ascending thermal turbulent density plume */
  .so-thermal-plume {
    animation: so-plume-rise 2.4s ease-in-out infinite;
  }

  @keyframes so-plume-rise {
    0% { transform: translateY(12px) scale(0.7); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(-20px) scale(1.3); opacity: 0; }
  }

  /* High-speed supersonic bullet translating across test section */
  .so-bullet-group {
    animation: so-bullet-fly 2s linear infinite;
  }

  @keyframes so-bullet-fly {
    0% { transform: translateX(-34px); opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { transform: translateX(34px); opacity: 0; }
  }

  /* Expanding supersonic shock wave Mach cones */
  .so-shock-waves path {
    fill: none;
    stroke: #ff4081;
    stroke-width: 1.5;
    animation: so-shock-expand 1.4s ease-out infinite;
  }

  @keyframes so-shock-expand {
    0% { opacity: 0.3; transform: scale(0.6); }
    50% { opacity: 1; }
    100% { opacity: 0.2; transform: scale(1.4); }
  }

  /* Knife Edge Filter Blade */
  .so-knife-edge {
    fill: #cfd8dc;
    stroke: #ffffff;
    stroke-width: 0.8;
  }

  .so-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSchlierenAirflow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${schlierenStyles}</style>
      <div class="so-box">
        <div class="so-stage">
          <svg class="so-svg" viewBox="0 0 76 72">
            <!-- Circular Schlieren Collimator Mirror Field -->
            <circle cx="38" cy="36" r="30" fill="rgba(0, 229, 255, 0.08)" stroke="#00e5ff" stroke-width="1.4" />

            <!-- Collimated Light Ray Grid Background -->
            <g stroke="rgba(0, 229, 255, 0.2)" stroke-width="0.6">
              <line x1="12" y1="20" x2="64" y2="20" />
              <line x1="10" y1="28" x2="66" y2="28" />
              <line x1="8" y1="36" x2="68" y2="36" />
              <line x1="10" y1="44" x2="66" y2="44" />
              <line x1="12" y1="52" x2="64" y2="52" />
            </g>

            <!-- Test Object: Heat Source (Candle Tip) -->
            <rect x="36" y="44" width="4" height="14" fill="#ff7043" stroke="#d84315" stroke-width="0.8" rx="1" />
            <circle cx="38" cy="42" r="2" fill="#ffd700" filter="drop-shadow(0 0 4px #ff3d00)" />

            <!-- Thermal Convection Density Plume Rising -->
            <g class="so-thermal-plume" stroke-width="1.4">
              <path d="M 38 40 Q 34 32 36 24 Q 38 16 34 10" fill="none" stroke="#00e5ff" />
              <path d="M 38 40 Q 42 32 40 24 Q 38 16 42 10" fill="none" stroke="#ffd700" />
              <path d="M 38 40 Q 30 30 32 20 Q 34 14 30 10" fill="none" stroke="rgba(0, 229, 255, 0.6)" stroke-width="0.9" />
              <path d="M 38 40 Q 46 30 44 20 Q 42 14 46 10" fill="none" stroke="rgba(255, 215, 0, 0.6)" stroke-width="0.9" />
            </g>

            <!-- Supersonic Projectile & Mach Cones -->
            <g class="so-bullet-group">
              <polygon points="42,28 34,26 34,30" fill="#ffd700" stroke="#ffffff" stroke-width="0.8" />
              <g class="so-shock-waves" transform="translate(38, 28)">
                <path d="M 0 0 L -18 -18 M 0 0 L -18 18" />
                <path d="M -4 0 L -22 -14 M -4 0 L -22 14" stroke="#ff80ab" />
              </g>
            </g>

            <!-- Toepler Knife-Edge Aperture Block on Right -->
            <polygon class="so-knife-edge" points="66,20 68,20 68,52 66,52 65,36" />
          </svg>
        </div>
        <div class="so-label">SCHLIEREN OPTICS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-schlieren-airflow')) {
  customElements.define('concept-schlieren-airflow', ConceptSchlierenAirflow);
}
