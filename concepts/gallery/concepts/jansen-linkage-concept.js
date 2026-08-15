const jansenStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .jan {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ground plane line at bottom */
  .jan-ground {
    position: absolute;
    bottom: 12px;
    width: 100%;
    height: 2px;
    background: #8cffaa;
    box-shadow: 0 0 4px #8cffaa;
  }

  /* Central rotating drive crank */
  .jan-crank-rig {
    position: absolute;
    top: 24px;
    left: 54px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px #ffffff;
    z-index: 5;
  }

  /* Theo Jansen 11-Bar Linkage leg SVG assembly */
  .jan-linkage-svg {
    position: absolute;
    inset: 0;
    width: 118px;
    height: 102px;
    filter: drop-shadow(0 0 3px #8cffaa);
  }

  /* Stepping foot locus path curve */
  .jan-foot-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 12px #8cffaa;
    z-index: 6;
    offset-path: path("M 38 86 L 76 86 C 84 86 86 68 72 62 C 58 56 34 68 38 86");
    animation: jan-step-cycle 2.4s linear infinite;
  }

  @keyframes jan-step-cycle {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }

  /* Leg linkage oscillation animations */
  .jan-link-arm-1 {
    animation: jan-sway-1 2.4s ease-in-out infinite alternate;
    transform-origin: 59px 30px;
  }

  .jan-link-arm-2 {
    animation: jan-sway-2 2.4s ease-in-out infinite alternate;
    transform-origin: 59px 50px;
  }

  @keyframes jan-sway-1 {
    0% { transform: rotate(-14deg); }
    100% { transform: rotate(14deg); }
  }

  @keyframes jan-sway-2 {
    0% { transform: rotate(12deg); }
    100% { transform: rotate(-12deg); }
  }

  /* Mechanical linkage label */
  .jan-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptJansenLinkage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${jansenStyles}</style>
      <div class="jan">
        <div class="jan-ground"></div>
        <div class="jan-crank-rig"></div>

        <svg class="jan-linkage-svg" viewBox="0 0 118 102">
          <!-- Jansen holy numbers 11-bar kinematic leg struts -->
          <g class="jan-link-arm-1">
            <!-- Upper triangular truss (bars d, e, f) -->
            <polygon points="59,30 36,46 54,64" stroke="#d6ffe0" stroke-width="1.6" fill="rgba(0, 60, 15, 0.4)" />
            <line x1="59" y1="30" x2="82" y2="44" stroke="#8cffaa" stroke-width="1.5" />
          </g>

          <g class="jan-link-arm-2">
            <!-- Lower leg triangular stepping bar (bars i, j, k) -->
            <polygon points="54,64 36,46 48,86" stroke="#ffffff" stroke-width="1.8" fill="rgba(0, 120, 25, 0.3)" />
            <line x1="82" y1="44" x2="54" y2="64" stroke="#8cffaa" stroke-width="1.5" />
          </g>

          <!-- Stepping locus path trace -->
          <path d="M 38 86 L 76 86 C 84 86 86 68 72 62 C 58 56 34 68 38 86" stroke="rgba(140, 255, 170, 0.4)" stroke-width="1" stroke-dasharray="2,2" fill="none" />
        </svg>

        <div class="jan-foot-dot"></div>

        <div class="jan-label">JANSEN LINKAGE (11-BAR)</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-jansen-linkage')) {
  customElements.define('concept-jansen-linkage', ConceptJansenLinkage);
}
