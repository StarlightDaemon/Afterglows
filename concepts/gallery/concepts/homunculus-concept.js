const homunculusStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hmc {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Athanor furnace base with glowing coals */
  .hmc-furnace {
    position: absolute;
    bottom: 4px;
    width: 58px;
    height: 14px;
    background: linear-gradient(180deg, #008818, #011405);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.4);
    z-index: 2;
  }

  /* Glass Retort Flask (Cucurbit) */
  .hmc-flask {
    position: relative;
    top: -4px;
    width: 54px;
    height: 64px;
    border-radius: 27px 27px 18px 18px / 36px 36px 24px 24px;
    border: 1.5px solid #d6ffe0;
    background: radial-gradient(circle at 40% 40%, rgba(140, 255, 170, 0.25) 0%, rgba(0, 40, 10, 0.6) 60%, rgba(0, 15, 4, 0.9) 100%);
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.3), 0 0 10px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }

  /* Flask neck & wax seal cork at top */
  .hmc-neck {
    position: absolute;
    top: 6px;
    width: 14px;
    height: 14px;
    border-left: 1.5px solid #d6ffe0;
    border-right: 1.5px solid #d6ffe0;
    background: rgba(0, 40, 10, 0.4);
    z-index: 4;
  }

  .hmc-cork {
    position: absolute;
    top: 2px;
    width: 18px;
    height: 6px;
    background: #ffffff;
    border: 1px solid #00aa22;
    border-radius: 2px;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 5;
  }

  /* Miniature floating glowing Homunculus entity */
  .hmc-entity-rig {
    position: relative;
    width: 26px;
    height: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: hmc-float 3s ease-in-out infinite alternate;
    z-index: 6;
  }

  @keyframes hmc-float {
    0% { transform: translateY(-4px) rotate(-3deg); }
    100% { transform: translateY(4px) rotate(3deg); }
  }

  .hmc-head {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #ffffff, 0 0 16px #8cffaa;
  }

  .hmc-body {
    width: 8px;
    height: 14px;
    background: linear-gradient(180deg, #ffffff, #8cffaa);
    border-radius: 4px;
    box-shadow: 0 0 8px #8cffaa;
    margin-top: 1px;
  }

  /* Liquid elixir bubbles rising */
  .hmc-bubble {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
    animation: hmc-bubble-rise 2s linear infinite;
  }

  .hmc-bubble.b1 { left: 14px; bottom: 8px; animation-delay: 0.2s; }
  .hmc-bubble.b2 { right: 14px; bottom: 12px; animation-delay: 0.9s; }

  @keyframes hmc-bubble-rise {
    0% { transform: translateY(0); opacity: 0.4; }
    80% { opacity: 1; }
    100% { transform: translateY(-42px); opacity: 0; }
  }

  /* Swirling transmutation arcane glyph ring */
  .hmc-glyph-ring {
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px dotted rgba(214, 255, 224, 0.45);
    animation: hmc-ring-spin 8s linear infinite;
  }

  @keyframes hmc-ring-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Caption */
  .hmc-label {
    position: absolute;
    top: 6px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptHomunculus extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${homunculusStyles}</style>
      <div class="hmc">
        <div class="hmc-label">HOMUNCULUS ANIMATUS</div>

        <div class="hmc-cork"></div>
        <div class="hmc-neck"></div>

        <div class="hmc-flask">
          <div class="hmc-glyph-ring"></div>
          <div class="hmc-bubble b1"></div>
          <div class="hmc-bubble b2"></div>

          <div class="hmc-entity-rig">
            <div class="hmc-head"></div>
            <div class="hmc-body"></div>
          </div>
        </div>

        <div class="hmc-furnace"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-homunculus')) {
  customElements.define('concept-homunculus', ConceptHomunculus);
}
