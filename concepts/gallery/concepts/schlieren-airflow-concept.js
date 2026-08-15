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

  /* Thermal Convection Plume Density Gradient */
  .so-thermal-plume path {
    fill: none;
    stroke-linecap: round;
    animation: so-plume-rise 2s ease-in-out infinite alternate;
  }

  @keyframes so-plume-rise {
    0% { transform: scaleX(0.9) translateY(0); filter: drop-shadow(0 0 2px #00e5ff); }
    100% { transform: scaleX(1.15) translateY(-3px); filter: drop-shadow(0 0 6px #ffd700); }
  }

  /* Supersonic Shock Wave Mach Cones */
  .so-shock-waves path {
    fill: none;
    stroke: #ff4081;
    stroke-width: 1;
    animation: so-shock-pulse 1.2s ease-out infinite;
  }

  @keyframes so-shock-pulse {
    0% { opacity: 0.3; transform: scale(0.85); }
    50% { opacity: 1; }
    100% { opacity: 0.4; transform: scale(1.15); }
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
            <circle cx="38" cy="36" r="30" fill="rgba(0, 229, 255, 0.08)" stroke="#00e5ff" stroke-width="1.2" />

            <!-- Collimated Light Ray Grid Background (Subtle refractive backdrop) -->
            <g stroke="rgba(0, 229, 255, 0.15)" stroke-width="0.5">
              <line x1="12" y1="20" x2="64" y2="20" />
              <line x1="10" y1="28" x2="66" y2="28" />
              <line x1="8" y1="36" x2="68" y2="36" />
              <line x1="10" y1="44" x2="66" y2="44" />
              <line x1="12" y1="52" x2="64" y2="52" />
            </g>

            <!-- Test Object: Heat Source (Candle Tip / Needle Projectile at Center) -->
            <rect x="36" y="44" width="4" height="14" fill="#ff7043" stroke="#d84315" stroke-width="0.8" rx="1" />
            <circle cx="38" cy="42" r="2" fill="#ffd700" filter="drop-shadow(0 0 4px #ff3d00)" />

            <!-- Thermal Convection Density Plume (Refractive index disturbance) -->
            <g class="so-thermal-plume" stroke-width="1.2">
              <path d="M 38 40 Q 34 32 36 24 Q 38 16 34 10" stroke="#00e5ff" />
              <path d="M 38 40 Q 42 32 40 24 Q 38 16 42 10" stroke="#ffd700" />
              <path d="M 38 40 Q 30 30 32 20 Q 34 14 30 10" stroke="rgba(0, 229, 255, 0.6)" stroke-width="0.8" />
              <path d="M 38 40 Q 46 30 44 20 Q 42 14 46 10" stroke="rgba(255, 215, 0, 0.6)" stroke-width="0.8" />
            </g>

            <!-- Mach Cone Shockwave V-Arcs -->
            <g class="so-shock-waves" transform="translate(38, 36)">
              <path d="M 0 0 L -18 -18 M 0 0 L 18 -18" />
              <path d="M 0 4 L -22 -14 M 0 4 L 22 -14" stroke="#ff80ab" />
            </g>

            <!-- Toepler Knife-Edge Aperture Block on Right (Cutting half the focal spot) -->
            <polygon class="so-knife-edge" points="66,20 68,20 68,52 66,52 65,36" />
          </svg>
        </div>
        <div class="so-label">SCHLIEREN OPTICS</div>
      </div>
    `;
  }
}

customElements.define('concept-schlieren-airflow', ConceptSchlierenAirflow);
