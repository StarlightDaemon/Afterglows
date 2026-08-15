const aeolipileStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .aeo {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #170d03 0%, #060200 100%);
    border: 1.5px solid rgba(255, 170, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 170, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Lower water boiler basin & brazier fire */
  .aeo-cauldron {
    position: absolute;
    bottom: 12px;
    width: 58px;
    height: 18px;
    background: #381f08;
    border: 1.5px solid #ffaa00;
    border-radius: 0 0 16px 16px;
    box-shadow: inset 0 0 6px rgba(255, 170, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  /* Brazier flame jets under cauldron */
  .aeo-flames {
    position: absolute;
    bottom: 4px;
    width: 44px;
    display: flex;
    justify-content: space-around;
  }

  .aeo-flame {
    width: 4px;
    height: 8px;
    background: linear-gradient(180deg, #ffffff 0%, #ffaa00 40%, #ff3300 100%);
    border-radius: 50% 50% 20% 20%;
    animation: aeo-flame-flicker 0.3s ease-in-out infinite alternate;
  }

  .f1 { animation-delay: 0s; }
  .f2 { animation-delay: 0.1s; height: 11px; }
  .f3 { animation-delay: 0.2s; }

  @keyframes aeo-flame-flicker {
    0% { transform: scaleY(0.9); }
    100% { transform: scaleY(1.15); filter: drop-shadow(0 0 4px #ffaa00); }
  }

  /* Steam delivery riser pipes */
  .aeo-pipes-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  /* Rotating spherical reaction vessel */
  .aeo-sphere-rig {
    position: absolute;
    top: 22px;
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: aeo-spin 0.8s linear infinite;
  }

  @keyframes aeo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .aeo-sphere {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffcc00 0%, #884400 70%, #2b1400 100%);
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 10px rgba(255, 170, 0, 0.4);
  }

  /* Tangential bent steam exhaust nozzles */
  .aeo-nozzle-top {
    position: absolute;
    top: -2px;
    right: 2px;
    width: 8px;
    height: 3px;
    background: #ffffff;
    border-radius: 1px;
  }

  .aeo-nozzle-bot {
    position: absolute;
    bottom: -2px;
    left: 2px;
    width: 8px;
    height: 3px;
    background: #ffffff;
    border-radius: 1px;
  }

  /* Escaping high-velocity steam plumes */
  .aeo-steam-top {
    position: absolute;
    top: -4px;
    right: -12px;
    width: 14px;
    height: 6px;
    background: radial-gradient(ellipse at 0% 50%, rgba(255, 255, 255, 0.8), transparent 70%);
    animation: aeo-steam-puff 0.4s linear infinite;
  }

  .aeo-steam-bot {
    position: absolute;
    bottom: -4px;
    left: -12px;
    width: 14px;
    height: 6px;
    background: radial-gradient(ellipse at 100% 50%, rgba(255, 255, 255, 0.8), transparent 70%);
    animation: aeo-steam-puff 0.4s linear infinite;
  }

  @keyframes aeo-steam-puff {
    0% { opacity: 0.4; transform: scaleX(0.7); }
    100% { opacity: 0.9; transform: scaleX(1.3); }
  }

  .aeo-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAeolipile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${aeolipileStyles}</style>
      <div class="aeo">
        <svg class="aeo-pipes-svg" viewBox="0 0 118 102">
          <!-- Copper steam riser pipes from boiler to sphere pivots -->
          <path d="M 38 72 L 38 43 L 48 43" fill="none" stroke="#ffaa00" stroke-width="2" stroke-linecap="round" />
          <path d="M 80 72 L 80 43 L 70 43" fill="none" stroke="#ffaa00" stroke-width="2" stroke-linecap="round" />
        </svg>

        <div class="aeo-sphere-rig">
          <div class="aeo-sphere"></div>
          <div class="aeo-nozzle-top">
            <div class="aeo-steam-top"></div>
          </div>
          <div class="aeo-nozzle-bot">
            <div class="aeo-steam-bot"></div>
          </div>
        </div>

        <div class="aeo-cauldron">
          <div class="aeo-flames">
            <div class="aeo-flame f1"></div>
            <div class="aeo-flame f2"></div>
            <div class="aeo-flame f3"></div>
          </div>
        </div>

        <div class="aeo-label">HERO'S AEOLIPILE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-aeolipile')) {
  customElements.define('concept-aeolipile', ConceptAeolipile);
}
