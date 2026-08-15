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
    background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.4) 50%, transparent);
    animation: ftm-shimmer 3s ease-in-out infinite alternate;
  }

  .ftm-layer-line:nth-child(2) { animation-delay: 1s; }
  .ftm-layer-line:nth-child(3) { animation-delay: 2s; }

  @keyframes ftm-shimmer {
    0% { transform: scaleY(0.8) translateY(-1px); opacity: 0.3; }
    100% { transform: scaleY(1.2) translateY(1px); opacity: 0.8; }
  }

  /* Real distant ship below horizon */
  .ftm-real-ship {
    position: absolute;
    bottom: 26px;
    left: 20px;
    width: 18px;
    height: 6px;
    background: #021a24;
    border: 1px solid #0088aa;
    opacity: 0.6;
  }

  /* Hovering superior mirage (inverted image + erect top image) */
  .ftm-mirage-stack {
    position: absolute;
    top: 24px;
    right: 28px;
    width: 32px;
    height: 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    animation: ftm-waver 4s ease-in-out infinite alternate;
  }

  @keyframes ftm-waver {
    0% { transform: translateY(-2px) skewX(-2deg); }
    100% { transform: translateY(2px) skewX(2deg); filter: drop-shadow(0 0 6px #00e5ff); }
  }

  /* Erect towering upper mirage ship */
  .ftm-ship-erect {
    width: 28px;
    height: 10px;
    background: rgba(0, 229, 255, 0.2);
    border: 1.2px solid #ffffff;
    border-radius: 2px 2px 0 0;
    box-shadow: 0 0 8px #00e5ff;
    display: flex;
    justify-content: space-around;
  }

  /* Inverted middle mirage ship */
  .ftm-ship-inverted {
    width: 26px;
    height: 10px;
    background: rgba(0, 229, 255, 0.15);
    border: 1.2px solid #8cffff;
    border-radius: 0 0 2px 2px;
    transform: scaleY(-1);
  }

  .ftm-mast {
    width: 1px;
    height: 8px;
    background: #ffffff;
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

        <svg class="ftm-rays-svg" viewBox="0 0 118 102">
          <!-- Refracted curved light paths over thermal duct -->
          <path d="M 28 72 Q 52 28 74 32" fill="none" stroke="rgba(0, 229, 255, 0.7)" stroke-width="1.2" stroke-dasharray="3 1.5" />
          <path d="M 28 72 Q 52 38 74 48" fill="none" stroke="rgba(0, 229, 255, 0.5)" stroke-width="1" stroke-dasharray="2 2" />
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
