const barycenterStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bry {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #050a16 0%, #010206 100%);
    border: 1.5px solid rgba(0, 180, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 180, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Gravitational Roche lobe equipotential contours */
  .bry-roche-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  /* Rotating orbital armature around barycenter */
  .bry-orbit-arm {
    position: absolute;
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: bry-revolve 4s linear infinite;
  }

  @keyframes bry-revolve {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Central Barycenter crosshair mark (Center of Mass) */
  .bry-center-mark {
    position: absolute;
    width: 8px;
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6;
  }

  .bry-cross-h {
    position: absolute;
    width: 8px;
    height: 1px;
    background: #ffffff;
  }

  .bry-cross-v {
    position: absolute;
    width: 1px;
    height: 8px;
    background: #ffffff;
  }

  .bry-cross-ring {
    position: absolute;
    width: 4px;
    height: 4px;
    border: 1px solid #00e5ff;
    border-radius: 50%;
  }

  /* Primary massive Blue Giant star (tight inner orbit) */
  .bry-star-primary {
    position: absolute;
    left: 20px;
    top: 50%;
    width: 14px;
    height: 14px;
    margin-top: -7px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #00e5ff, 0 0 20px #0088ff;
    animation: bry-pulse-blue 1.5s ease-in-out infinite alternate;
  }

  @keyframes bry-pulse-blue {
    0% { transform: scale(0.92); }
    100% { transform: scale(1.08); filter: drop-shadow(0 0 6px #ffffff); }
  }

  /* Secondary Orange Dwarf companion (wide outer orbit) */
  .bry-star-secondary {
    position: absolute;
    right: 4px;
    top: 50%;
    width: 9px;
    height: 9px;
    margin-top: -4.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffaa00, 0 0 16px #ff5500;
    animation: bry-pulse-orange 1.2s ease-in-out infinite alternate;
  }

  @keyframes bry-pulse-orange {
    0% { transform: scale(0.9); }
    100% { transform: scale(1.1); }
  }

  /* Connecting gravitational barycentric tie line */
  .bry-tie-line {
    position: absolute;
    left: 26px;
    right: 8px;
    top: 50%;
    height: 1px;
    background: linear-gradient(90deg, #00e5ff 0%, rgba(255, 255, 255, 0.4) 50%, #ffaa00 100%);
    opacity: 0.5;
  }

  .bry-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBarycenterBinary extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${barycenterStyles}</style>
      <div class="bry">
        <svg class="bry-roche-svg" viewBox="0 0 118 102">
          <!-- Figure-8 Roche equipotential gravitational contour lobes -->
          <path d="M 59 51 C 45 32, 22 32, 22 51 C 22 70, 45 70, 59 51 C 73 32, 96 32, 96 51 C 96 70, 73 70, 59 51 Z" 
                fill="none" stroke="rgba(0, 229, 255, 0.25)" stroke-width="1.2" stroke-dasharray="2 3" />
          <circle cx="44" cy="51" r="16" fill="none" stroke="rgba(0, 229, 255, 0.15)" stroke-width="1" />
          <circle cx="78" cy="51" r="16" fill="none" stroke="rgba(255, 170, 0, 0.15)" stroke-width="1" />
        </svg>

        <div class="bry-orbit-arm">
          <div class="bry-tie-line"></div>
          <div class="bry-star-primary"></div>
          <div class="bry-star-secondary"></div>
        </div>

        <div class="bry-center-mark">
          <div class="bry-cross-h"></div>
          <div class="bry-cross-v"></div>
          <div class="bry-cross-ring"></div>
        </div>

        <div class="bry-label">BINARY STAR BARYCENTER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-barycenter-binary')) {
  customElements.define('concept-barycenter-binary', ConceptBarycenterBinary);
}
