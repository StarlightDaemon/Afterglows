const coriolisStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cor {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #03140a 0%, #000502 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rotating carousel platform */
  .cor-platform {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, #021a0c 0%, #000a04 100%);
    border: 1.5px solid #00cc00;
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: cor-rot-platform 6s linear infinite;
  }

  @keyframes cor-rot-platform {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Inertial vs Rotating trajectory paths SVG */
  .cor-paths-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  /* Apparent curved Coriolis trajectory */
  .cor-curved-track {
    fill: none;
    stroke: #ffffff;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-dasharray: 4 2;
    filter: drop-shadow(0 0 4px #8cffaa);
    animation: cor-flow-track 1.5s linear infinite;
  }

  @keyframes cor-flow-track {
    to { stroke-dashoffset: -12; }
  }

  /* Straight inertial path line */
  .cor-straight-line {
    fill: none;
    stroke: rgba(0, 255, 100, 0.4);
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Rolling projectile particle */
  .cor-puck {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 12px #00ff66;
    animation: cor-roll-anim 3s ease-in-out infinite;
  }

  @keyframes cor-roll-anim {
    0% { top: 70px; left: 40px; }
    50% { top: 40px; left: 56px; }
    100% { top: 12px; left: 66px; }
  }

  /* Central rotation axle pivot */
  .cor-center-pivot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00cc00;
    border: 1px solid #ffffff;
    box-shadow: 0 0 4px #00ff66;
    z-index: 6;
  }

  .cor-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCoriolisCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${coriolisStyles}</style>
      <div class="cor">
        <div class="cor-platform">
          <svg class="cor-paths-svg" viewBox="0 0 80 80">
            <!-- Straight radial baseline -->
            <line class="cor-straight-line" x1="40" y1="72" x2="40" y2="8" />
            <!-- Apparent Coriolis deflection curve (turning right) -->
            <path class="cor-curved-track" d="M 40 72 Q 54 42 66 14" />
          </svg>

          <div class="cor-puck"></div>
          <div class="cor-center-pivot"></div>
        </div>

        <div class="cor-label">CORIOLIS DEFLECTION</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-coriolis-carousel')) {
  customElements.define('concept-coriolis-carousel', ConceptCoriolisCarousel);
}
