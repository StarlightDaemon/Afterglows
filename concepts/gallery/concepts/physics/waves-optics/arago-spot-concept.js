const aragoStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .arg {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 255, 100, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Projection screen target area */
  .arg-screen {
    position: relative;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, #000602 0%, #021a08 80%, #000502 100%);
    border: 1.5px solid #00cc00;
    box-shadow: inset 0 0 10px rgba(0, 255, 100, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Outward propagating Fresnel diffraction wave rings */
  .arg-diffraction-ring {
    position: absolute;
    border-radius: 50%;
    border: 1.5px solid rgba(0, 255, 100, 0.7);
    pointer-events: none;
  }

  .r1 { animation: arg-wave-expand 3s linear infinite; }
  .r2 { animation: arg-wave-expand 3s linear infinite; animation-delay: 1s; }
  .r3 { animation: arg-wave-expand 3s linear infinite; animation-delay: 2s; }

  @keyframes arg-wave-expand {
    0% { width: 34px; height: 34px; transform: scale(1); opacity: 1; }
    100% { width: 34px; height: 34px; transform: scale(2.4); opacity: 0; }
  }

  /* Circular opaque shadow disc */
  .arg-shadow-disc {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #010602;
    border: 1.5px solid #005c1b;
    box-shadow: inset 0 0 8px #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }

  /* Converging diffraction photon rays from obstacle edge to center */
  .arg-converge-ray {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 4;
  }

  .arg-diffract-beam {
    stroke: #8cffaa;
    stroke-width: 1.2;
    stroke-dasharray: 6 4;
    animation: arg-dash-flow 1.2s linear infinite;
  }

  @keyframes arg-dash-flow {
    to { stroke-dashoffset: -20; }
  }

  /* Constructive interference Poisson-Arago pinpoint spot at dead center */
  .arg-central-spot {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 16px #00ff66, 0 0 24px #aaffaa;
    z-index: 6;
    animation: arg-spot-glow 1.2s ease-in-out infinite alternate;
  }

  @keyframes arg-spot-glow {
    0% { transform: scale(0.8); filter: brightness(1); }
    100% { transform: scale(1.35); filter: brightness(1.6); }
  }

  /* Traveling diffracted photon packet racing in along the rim-to-center ray */
  .arg-photon-packet {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 12px #00ff66;
    z-index: 5;
    offset-path: path("M 23 41 L 41 41");
    animation: arg-photon-travel 1.2s linear infinite;
  }

  .arg-photon-packet.p2 {
    offset-path: path("M 59 41 L 41 41");
    animation-delay: 0.3s;
  }

  @keyframes arg-photon-travel {
    0% { offset-distance: 0%; opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  .arg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAragoSpot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${aragoStyles}</style>
      <div class="arg">
        <div class="arg-screen">
          <div class="arg-diffraction-ring r1"></div>
          <div class="arg-diffraction-ring r2"></div>
          <div class="arg-diffraction-ring r3"></div>

          <div class="arg-shadow-disc"></div>

          <svg class="arg-converge-ray" viewBox="0 0 82 82">
            <!-- 4 Converging wave rays from obstacle rim into center (41,41) -->
            <line class="arg-diffract-beam" x1="23" y1="41" x2="41" y2="41" />
            <line class="arg-diffract-beam" x1="59" y1="41" x2="41" y2="41" />
            <line class="arg-diffract-beam" x1="41" y1="23" x2="41" y2="41" />
            <line class="arg-diffract-beam" x1="41" y1="59" x2="41" y2="41" />
          </svg>

          <div class="arg-central-spot"></div>
          <div class="arg-photon-packet"></div>
          <div class="arg-photon-packet p2"></div>
        </div>

        <div class="arg-label">POISSON-ARAGO SPOT</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-arago-spot')) {
  customElements.define('concept-arago-spot', ConceptAragoSpot);
}
