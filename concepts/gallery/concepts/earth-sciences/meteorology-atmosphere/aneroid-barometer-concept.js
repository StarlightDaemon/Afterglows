const barometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bar {
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

  /* Dial Bezel & Case */
  .bar-dial {
    position: relative;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    background: #011206;
    border: 2px solid var(--accent, #00cc00);
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Dial scale arc markings */
  .bar-scale-svg {
    position: absolute;
    inset: 4px;
    width: 74px;
    height: 74px;
  }

  /* Corrugated aneroid vacuum capsule bellows inside */
  .bar-capsule {
    position: absolute;
    bottom: 18px;
    width: 38px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(180deg, #d6ffe0, #008818 60%, #011405 100%);
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 6px #8cffaa;
    animation: bar-capsule-breath 5s ease-in-out infinite alternate;
  }

  @keyframes bar-capsule-breath {
    0% { transform: scaleY(0.75); }
    100% { transform: scaleY(1.25); }
  }

  /* Mechanical lever linking capsule to center pinion */
  .bar-lever {
    position: absolute;
    bottom: 26px;
    left: 40px;
    width: 2px;
    height: 16px;
    background: #8cffaa;
    transform-origin: bottom center;
    animation: bar-lever-tilt 5s ease-in-out infinite alternate;
  }

  @keyframes bar-lever-tilt {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }

  /* Pointer indicator needle */
  .bar-needle {
    position: absolute;
    top: 14px;
    left: 40px;
    width: 2px;
    height: 32px;
    background: linear-gradient(180deg, #ffffff, #8cffaa);
    transform-origin: bottom center;
    box-shadow: 0 0 6px #ffffff;
    z-index: 6;
    animation: bar-needle-swing 5s ease-in-out infinite alternate;
  }

  @keyframes bar-needle-swing {
    0% { transform: rotate(-42deg); } /* Low pressure: Storm */
    50% { transform: rotate(5deg); }  /* Change */
    100% { transform: rotate(45deg); } /* High pressure: Fair */
  }

  .bar-needle::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -2px;
    width: 6px;
    height: 6px;
    background: #ffffff;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }

  /* Center pivot cap */
  .bar-pivot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #00aa22;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 7;
  }

  /* Atmospheric hPa pressure readout */
  .bar-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptAneroidBarometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${barometerStyles}</style>
      <div class="bar">
        <div class="bar-dial">
          <svg class="bar-scale-svg" viewBox="0 0 74 74">
            <!-- Calibrated dial arc & weather zones -->
            <path d="M 12 48 A 30 30 0 1 1 62 48" stroke="#d6ffe0" stroke-width="2" fill="none" stroke-linecap="round" />
            <path d="M 12 48 A 30 30 0 1 1 62 48" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="2,3" fill="none" />
            <text x="10" y="32" font-size="5" fill="#8cffaa" font-family="monospace">RAIN</text>
            <text x="30" y="16" font-size="5" fill="#ffffff" font-family="monospace">CHANGE</text>
            <text x="50" y="32" font-size="5" fill="#8cffaa" font-family="monospace">FAIR</text>
          </svg>

          <div class="bar-capsule"></div>
          <div class="bar-lever"></div>
          <div class="bar-needle"></div>
          <div class="bar-pivot"></div>
        </div>

        <div class="bar-label">1013.2 hPa • FAIR</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-aneroid-barometer')) {
  customElements.define('concept-aneroid-barometer', ConceptAneroidBarometer);
}
