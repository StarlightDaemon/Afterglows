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
    animation: rad-rot 3.8s linear infinite;
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

  /* Counter-rotating inner concentric silica core capsule */
  .rad-inner-core {
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1.5px solid #ffffff;
    background: #0088cc;
    box-shadow: 0 0 8px #ffffff;
    animation: rad-core-spin 2.6s linear infinite;
  }

  @keyframes rad-core-spin {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
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
    stroke-width: 1.8;
    stroke-linecap: round;
    filter: drop-shadow(0 0 4px #00e5ff);
  }

  .rad-lattice-mesh {
    fill: none;
    stroke: rgba(0, 229, 255, 0.7);
    stroke-width: 1;
  }

  /* Mineral nutrient transport spark traveling along radial spicule */
  .rad-mineral-spark {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #00e5ff;
    z-index: 7;
    animation: rad-spark-traverse 2.4s linear infinite;
  }

  @keyframes rad-spark-traverse {
    0% { transform: rotate(45deg) translate(8px) rotate(-45deg); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: rotate(45deg) translate(36px) rotate(-45deg); opacity: 0; }
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
          <div class="rad-mineral-spark"></div>

          <svg class="rad-spicules-svg" viewBox="0 0 80 80">
            <!-- 8 Primary radiating octahedral spicules -->
            <line class="rad-spine" x1="40" y1="4" x2="40" y2="76" />
            <line class="rad-spine" x1="4" y1="40" x2="76" y2="40" />
            <line class="rad-spine" x1="14" y1="14" x2="66" y2="66" />
            <line class="rad-spine" x1="14" y1="66" x2="66" y2="14" />

            <!-- Hexagonal geodesic porous lattice ribs -->
            <polygon class="rad-lattice-mesh" points="40,16 60,28 60,52 40,64 20,52 20,28" />
            <circle cx="40" cy="40" r="18" fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1.2" />
          </svg>

          <div class="rad-outer-sphere">
            <div class="rad-inner-core"></div>
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
