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

  /* Outer concentric Fresnel diffraction rings */
  .arg-diffraction-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(0, 255, 100, 0.4);
    animation: arg-shimmer-ring 3s ease-in-out infinite alternate;
  }

  .r-outer1 { width: 72px; height: 72px; border-style: dashed; }
  .r-outer2 { width: 60px; height: 60px; border-color: rgba(140, 255, 170, 0.6); }
  .r-outer3 { width: 48px; height: 48px; border-color: rgba(0, 255, 100, 0.8); }

  @keyframes arg-shimmer-ring {
    0% { transform: scale(0.98); opacity: 0.6; }
    100% { transform: scale(1.02); opacity: 1; filter: drop-shadow(0 0 4px #00ff66); }
  }

  /* Circular opaque shadow disc */
  .arg-shadow-disc {
    position: absolute;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #010602;
    border: 1.5px solid #004414;
    box-shadow: inset 0 0 8px #000000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Constructive interference Poisson-Arago pinpoint spot at dead center */
  .arg-central-spot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 16px #00ff66, 0 0 24px #aaffaa;
    z-index: 6;
    animation: arg-spot-glow 1.5s ease-in-out infinite alternate;
  }

  @keyframes arg-spot-glow {
    0% { transform: scale(0.85); filter: brightness(1); }
    100% { transform: scale(1.2); filter: brightness(1.5); }
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
          <div class="arg-diffraction-ring r-outer1"></div>
          <div class="arg-diffraction-ring r-outer2"></div>
          <div class="arg-diffraction-ring r-outer3"></div>

          <div class="arg-shadow-disc">
            <div class="arg-central-spot"></div>
          </div>
        </div>

        <div class="arg-label">POISSON-ARAGO SPOT</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-arago-spot')) {
  customElements.define('concept-arago-spot', ConceptAragoSpot);
}
