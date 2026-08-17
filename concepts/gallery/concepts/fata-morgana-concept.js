const fataMorganaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ftm {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #061824 0%, #01060a 100%);
    border: 1.5px solid rgba(0, 204, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Sea horizon water base */
  .ftm-sea {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 28px;
    background: linear-gradient(180deg, #043644 0%, #01171f 100%);
    border-top: 1px solid #00e5ff;
  }

  /* Atmospheric temperature inversion ducts */
  .ftm-thermal-layers {
    position: absolute;
    top: 14px;
    bottom: 28px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    pointer-events: none;
  }

  .ftm-layer-line {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.5) 50%, transparent);
    animation: ftm-shimmer 2.2s ease-in-out infinite alternate;
  }

  .ftm-layer-line:nth-child(2) { animation-delay: 0.7s; }
  .ftm-layer-line:nth-child(3) { animation-delay: 1.4s; }

  @keyframes ftm-shimmer {
    0% { transform: scaleY(0.8) translateY(-2px); opacity: 0.3; }
    100% { transform: scaleY(1.4) translateY(2px); opacity: 0.9; }
  }

  /* Real distant ship steaming across the sea horizon */
  .ftm-real-ship {
    position: absolute;
    bottom: 26px;
    left: 14px;
    width: 18px;
    height: 6px;
    background: #021a24;
    border: 1px solid #00c8e8;
    opacity: 0.85;
    animation: ftm-sail 3.2s ease-in-out infinite alternate;
  }

  @keyframes ftm-sail {
    0% { transform: translateX(0); }
    100% { transform: translateX(36px); }
  }

  /* Hovering superior mirage (inverted image + erect top image) */
  .ftm-mirage-stack {
    position: absolute;
    top: 20px;
    right: 24px;
    width: 34px;
    height: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    animation: ftm-waver 2.8s ease-in-out infinite alternate;
  }

  @keyframes ftm-waver {
    0% { transform: translateY(-10px) skewX(-4deg); }
    100% { transform: translateY(8px) skewX(4deg); filter: drop-shadow(0 0 8px #00e5ff); }
  }

  /* Erect towering upper mirage ship */
  .ftm-ship-erect {
    width: 28px;
    height: 10px;
    background: rgba(0, 229, 255, 0.25);
    border: 1.2px solid #ffffff;
    border-radius: 2px 2px 0 0;
    box-shadow: 0 0 8px #00e5ff;
    display: flex;
    justify-content: space-around;
    transform-origin: 50% 100%;
    animation: ftm-tower 2.8s ease-in-out infinite alternate;
  }

  @keyframes ftm-tower {
    0% { transform: scaleY(0.8); }
    100% { transform: scaleY(2.2); }
  }

  /* Inverted middle mirage ship */
  .ftm-ship-inverted {
    width: 26px;
    height: 10px;
    background: rgba(0, 229, 255, 0.2);
    border: 1.2px solid #8cffff;
    border-radius: 0 0 2px 2px;
    transform: scaleY(-1);
  }

  .ftm-mast {
    width: 1.2px;
    height: 8px;
    background: #ffffff;
  }

  /* Refracted atmospheric photon packet traversing curved duct path */
  .ftm-photon-spark {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #00e5ff;
    z-index: 6;
    offset-path: path("M 28 72 Q 52 28 74 32");
    animation: ftm-photon-travel 1.8s linear infinite;
  }

  @keyframes ftm-photon-travel {
    0% { offset-distance: 0%; opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  /* Light ray curvature path SVG */
  .ftm-rays-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .ftm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFataMorgana extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fataMorganaStyles}</style>
      <div class="ftm">
        <div class="ftm-thermal-layers">
          <div class="ftm-layer-line"></div>
          <div class="ftm-layer-line"></div>
          <div class="ftm-layer-line"></div>
        </div>

        <div class="ftm-photon-spark"></div>

        <svg class="ftm-rays-svg" viewBox="0 0 118 102">
          <!-- Refracted curved light paths over thermal duct -->
          <path d="M 28 72 Q 52 28 74 32" fill="none" stroke="rgba(0, 229, 255, 0.7)" stroke-width="1.4" stroke-dasharray="3 1.5" />
          <path d="M 28 72 Q 52 38 74 48" fill="none" stroke="rgba(0, 229, 255, 0.5)" stroke-width="1.2" stroke-dasharray="2 2" />
        </svg>

        <div class="ftm-mirage-stack">
          <div class="ftm-ship-erect">
            <div class="ftm-mast"></div>
            <div class="ftm-mast"></div>
          </div>
          <div class="ftm-ship-inverted"></div>
        </div>

        <div class="ftm-sea">
          <div class="ftm-real-ship"></div>
        </div>

        <div class="ftm-label">FATA MORGANA MIRAGE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-fata-morgana')) {
  customElements.define('concept-fata-morgana', ConceptFataMorgana);
}
