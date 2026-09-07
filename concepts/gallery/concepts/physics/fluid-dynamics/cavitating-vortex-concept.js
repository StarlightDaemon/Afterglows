const cavVortexStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #101c24 0%, #03060a 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cv-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Rapidly rotating fluid streamline vortex spirals */
  .vortex-streamlines {
    animation: cv-spin-vortex 2.5s linear infinite;
    transform-origin: 65px 65px;
  }

  @keyframes cv-spin-vortex {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Low-pressure vapor cavity core (P < P_vapor) */
  .cavity-core {
    animation: cv-cavity-pulse 1.8s ease-in-out infinite alternate;
  }

  @keyframes cv-cavity-pulse {
    0% { r: 6px; opacity: 0.6; fill: #0284c7; }
    100% { r: 9px; opacity: 1; fill: #ffffff; filter: drop-shadow(0 0 5px #38bdf8); }
  }

  /* Shed cavitation vapor microbubbles */
  .cavity-bubbles {
    animation: cv-bubble-drift 2s ease-in-out infinite alternate;
  }

  @keyframes cv-bubble-drift {
    0% { opacity: 0.3; }
    100% { opacity: 0.9; filter: drop-shadow(0 0 2px #bae6fd); }
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-core { fill: #38bdf8; }
  .lbl-press { fill: #94a3b8; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(56, 189, 248, 0.9);
    z-index: 10;
  }
`;

class PhysicsCavitatingVortex extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cavVortexStyles}</style>
      <div class="canvas-box">
        <svg class="cv-svg" viewBox="0 0 130 130">
          <!-- Fluid Surrounding High-Pressure Far Field P_infinity -->
          <circle cx="65" cy="65" r="54" fill="#0c4a6e" fill-opacity="0.2" stroke="#0284c7" stroke-width="0.8" stroke-dasharray="2 3" />
          <text x="82" y="22" class="lbl lbl-press">P = P_∞</text>

          <!-- Rankine Vortex Swirling Velocity Streamlines v_theta(r) -->
          <g class="vortex-streamlines" fill="none" stroke-linecap="round">
            <!-- Outer Potential Flow Free Vortex streamlines (v ~ 1/r) -->
            <path d="M 65 18 A 47 47 0 0 1 112 65" stroke="#0284c7" stroke-width="1.4" opacity="0.6" />
            <path d="M 112 65 A 47 47 0 0 1 65 112" stroke="#0284c7" stroke-width="1.4" opacity="0.6" />
            <path d="M 65 112 A 47 47 0 0 1 18 65" stroke="#0284c7" stroke-width="1.4" opacity="0.6" />
            <path d="M 18 65 A 47 47 0 0 1 65 18" stroke="#0284c7" stroke-width="1.4" opacity="0.6" />

            <!-- Middle Streamlines -->
            <circle cx="65" cy="65" r="32" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="8 6" opacity="0.8" />

            <!-- Inner High-Shear Boundary Streamlines -->
            <circle cx="65" cy="65" r="18" stroke="#7dd3fc" stroke-width="1.4" stroke-dasharray="5 3" />
          </g>

          <!-- Centrifugal Pressure Depression Well P(r) < P_v -->
          <circle cx="65" cy="65" r="14" fill="#0369a1" fill-opacity="0.4" stroke="#e0f2fe" stroke-width="0.8" />

          <!-- Hollow Vapor Phase Cavitation Core (Phase change to gas) -->
          <circle class="cavity-core" cx="65" cy="65" r="7" />
          <text x="50" y="80" class="lbl lbl-core">P &lt; P_vap</text>

          <!-- Microbubbles shedding and collapsing: placed inside the rotating
               streamline frame so they visibly orbit the cavity core (the
               streamline circles themselves are rotation-invariant). -->
          <g class="vortex-streamlines">
            <g class="cavity-bubbles" fill="#ffffff">
              <circle cx="54" cy="56" r="2" />
              <circle cx="76" cy="58" r="2.3" />
              <circle cx="60" cy="74" r="1.8" />
              <circle cx="71" cy="72" r="2.1" />
              <circle cx="88" cy="70" r="1.8" />
              <circle cx="42" cy="62" r="1.7" />
            </g>
          </g>
        </svg>
        <div class="hud">
          <span>dP/dr = ρ v_θ² / r</span>
          <span>VORTEX CAVITATION</span>
        </div>
      </div>
    `;
  }
}

customElements.define('physics-cavitating-vortex', PhysicsCavitatingVortex);
