const antlionStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .al-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #1e160a 0%, #080602 100%);
    border: 1.5px solid rgba(255, 167, 38, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 167, 38, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .al-stage {
    position: relative;
    width: 90px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Conical sand funnel pit (inverted cone) */
  .al-pit {
    position: absolute;
    top: 14px;
    width: 78px;
    height: 48px;
    background: radial-gradient(ellipse at 50% 100%, #110903 0%, #3e2723 60%, #5d4037 100%);
    border-radius: 50% / 100% 100% 0% 0%;
    border-top: 1.5px dashed #ffa726;
    box-shadow: inset 0 -4px 10px rgba(0, 0, 0, 0.9);
    overflow: hidden;
  }

  /* Avalanching sand grains streaming to center */
  .al-sand-grain {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #ffe082;
    border-radius: 50%;
    animation: al-avalanche 1.5s linear infinite;
  }

  @keyframes al-avalanche {
    0% { top: 4px; left: 16px; opacity: 1; }
    100% { top: 40px; left: 39px; opacity: 0; }
  }

  /* Antlion sickle mandibles at bottom */
  .al-mandibles {
    position: absolute;
    bottom: 12px;
    left: 36px;
    width: 18px;
    height: 12px;
  }

  .al-mandible-l {
    position: absolute;
    left: 0;
    width: 6px;
    height: 10px;
    border-right: 2px solid #ffffff;
    border-radius: 0 50% 50% 0;
    animation: al-snap 2s ease-in-out infinite;
  }

  .al-mandible-r {
    position: absolute;
    right: 0;
    width: 6px;
    height: 10px;
    border-left: 2px solid #ffffff;
    border-radius: 50% 0 0 50%;
    animation: al-snap 2s ease-in-out infinite;
  }

  @keyframes al-snap {
    0%, 70% { transform: scaleX(1); }
    80% { transform: scaleX(0.4); }
    90%, 100% { transform: scaleX(1); }
  }

  /* Slipping prey ant slipping down the cone */
  .al-ant {
    position: absolute;
    top: 20px;
    left: 26px;
    width: 6px;
    height: 4px;
    background: #ff7043;
    border-radius: 50%;
    box-shadow: 0 0 4px #ff7043;
    animation: al-prey-slip 3s ease-in-out infinite;
  }

  @keyframes al-prey-slip {
    0% { top: 18px; left: 20px; }
    60% { top: 38px; left: 36px; }
    80%, 100% { top: 44px; left: 39px; opacity: 0; }
  }

  .al-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 167, 38, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAntlionPit extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${antlionStyles}</style>
      <div class="al-box">
        <div class="al-stage">
          <div class="al-pit">
            <div class="al-sand-grain" style="top: 4px; left: 16px; animation-delay: 0s;"></div>
            <div class="al-sand-grain" style="top: 8px; right: 18px; animation-delay: 0.5s;"></div>
            <div class="al-sand-grain" style="top: 6px; left: 50px; animation-delay: 0.9s;"></div>
          </div>

          <div class="al-ant"></div>

          <div class="al-mandibles">
            <div class="al-mandible-l"></div>
            <div class="al-mandible-r"></div>
          </div>
        </div>

        <div class="al-label">ANTLION PITFALL</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-antlion-pit')) {
  customElements.define('concept-antlion-pit', ConceptAntlionPit);
}
