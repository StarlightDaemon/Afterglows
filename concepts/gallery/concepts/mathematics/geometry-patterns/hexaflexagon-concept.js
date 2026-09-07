const flexagonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hf-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a0b24 0%, #08030c 100%);
    border: 1.5px solid rgba(224, 64, 251, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(224, 64, 251, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hf-stage {
    position: relative;
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: hf-flex-cycle 4s ease-in-out infinite;
  }

  @keyframes hf-flex-cycle {
    0% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(0.6) rotate(60deg); }
    50% { transform: scale(1.05) rotate(120deg); }
    75% { transform: scale(0.6) rotate(180deg); }
    100% { transform: scale(1) rotate(240deg); }
  }

  .hf-hex-svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 6px rgba(224, 64, 251, 0.4));
  }

  /* 6 Triangular Sectors that change color on flex */
  .hf-sector {
    stroke: #ffffff;
    stroke-width: 1;
    transition: fill 0.4s;
  }

  .hf-s1 { fill: #e040fb; }
  .hf-s2 { fill: #ffd600; }
  .hf-s3 { fill: #00e5ff; }
  .hf-s4 { fill: #e040fb; }
  .hf-s5 { fill: #ffd600; }
  .hf-s6 { fill: #00e5ff; }

  /* Central Pinch Crease */
  .hf-crease-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff;
  }

  .hf-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(224, 64, 251, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHexaflexagon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${flexagonStyles}</style>
      <div class="hf-box">
        <div class="hf-stage">
          <svg class="hf-hex-svg" viewBox="-40 -40 80 80">
            <!-- 6 equilateral triangles meeting at center -->
            <polygon class="hf-sector hf-s1" points="0,0 30,0 15,26" />
            <polygon class="hf-sector hf-s2" points="0,0 15,26 -15,26" />
            <polygon class="hf-sector hf-s3" points="0,0 -15,26 -30,0" />
            <polygon class="hf-sector hf-s4" points="0,0 -30,0 -15,-26" />
            <polygon class="hf-sector hf-s5" points="0,0 -15,-26 15,-26" />
            <polygon class="hf-sector hf-s6" points="0,0 15,-26 30,0" />
          </svg>

          <div class="hf-crease-dot"></div>
        </div>

        <div class="hf-label">HEXAFLEXAGON FOLD</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-hexaflexagon')) {
  customElements.define('concept-hexaflexagon', ConceptHexaflexagon);
}
