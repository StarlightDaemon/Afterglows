const radiolarianStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rad {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #03141f 0%, #01060a 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Marine ocean background particle field */
  .rad-water {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 50%, rgba(0, 229, 255, 0.1), transparent 75%);
  }

  /* Rotating silica lattice shell rig */
  .rad-shell-rig {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: rad-rot 14s linear infinite;
  }

  @keyframes rad-rot {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Outer perforated spherical lattice */
  .rad-outer-sphere {
    position: absolute;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1.5px solid #00e5ff;
    background: radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.08), transparent 70%);
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Inner concentric silica core capsule */
  .rad-inner-core {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1.2px solid #ffffff;
    background: #0088cc;
    box-shadow: 0 0 6px #ffffff;
  }

  /* Radiating mineral needle spicules */
  .rad-spicules-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .rad-spine {
    stroke: #ffffff;
    stroke-width: 1.5;
    stroke-linecap: round;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  .rad-lattice-mesh {
    fill: none;
    stroke: rgba(0, 229, 255, 0.6);
    stroke-width: 0.8;
    stroke-dasharray: 2 3;
  }

  /* Pulsing protoplasmic axopodia */
  .rad-axopod-pulse {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0%, #00e5ff 60%, transparent 100%);
    animation: rad-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes rad-pulse {
    0% { transform: scale(0.8); opacity: 0.6; }
    100% { transform: scale(1.3); opacity: 1; filter: drop-shadow(0 0 8px #00e5ff); }
  }

  .rad-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptRadiolarian extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${radiolarianStyles}</style>
      <div class="rad">
        <div class="rad-water"></div>

        <div class="rad-shell-rig">
          <svg class="rad-spicules-svg" viewBox="0 0 80 80">
            <!-- 8 Primary radiating octahedral spicules -->
            <line class="rad-spine" x1="40" y1="4" x2="40" y2="76" />
            <line class="rad-spine" x1="4" y1="40" x2="76" y2="40" />
            <line class="rad-spine" x1="14" y1="14" x2="66" y2="66" />
            <line class="rad-spine" x1="14" y1="66" x2="66" y2="14" />

            <!-- Hexagonal geodesic porous lattice ribs -->
            <polygon class="rad-lattice-mesh" points="40,16 60,28 60,52 40,64 20,52 20,28" />
            <circle cx="40" cy="40" r="18" fill="none" stroke="rgba(255, 255, 255, 0.4)" stroke-width="1" stroke-dasharray="3 2" />
          </svg>

          <div class="rad-outer-sphere">
            <div class="rad-inner-core"></div>
            <div class="rad-axopod-pulse"></div>
          </div>
        </div>

        <div class="rad-label">RADIOLARIAN SKELETON</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-radiolarian')) {
  customElements.define('concept-radiolarian', ConceptRadiolarian);
}
