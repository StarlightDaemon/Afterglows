const athanorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .af-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 60%, #200f07 0%, #080301 100%);
    border: 1.5px solid rgba(255, 120, 40, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 120, 40, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .af-stage {
    position: relative;
    width: 90px;
    height: 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Brick masonry furnace tower */
  .af-tower {
    position: absolute;
    bottom: 6px;
    width: 44px;
    height: 58px;
    background: #2b1208;
    border: 1.5px solid #ff7a29;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 100, 20, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  /* Fuel tower hopper on top */
  .af-hopper {
    width: 28px;
    height: 12px;
    background: #190a04;
    border-bottom: 1.5px solid #ff7a29;
  }

  /* Glass flask digestion vessel in sand bath */
  .af-vessel {
    position: absolute;
    top: 16px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 230, 150, 0.4) 0%, rgba(255, 120, 40, 0.1) 80%);
    border: 1.2px solid #ffe082;
    box-shadow: 0 0 6px #ffa726;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .af-elixir {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ff3d00;
    box-shadow: 0 0 8px #ffab00;
    animation: af-brew 2s ease-in-out infinite alternate;
  }

  @keyframes af-brew {
    0% { transform: scale(0.8); opacity: 0.7; }
    100% { transform: scale(1.15); opacity: 1; }
  }

  /* Hearth fire chamber draft */
  .af-fire {
    position: absolute;
    bottom: 2px;
    width: 26px;
    height: 12px;
    background: radial-gradient(ellipse at 50% 100%, #ffffff 0%, #ff9100 60%, transparent 100%);
    filter: drop-shadow(0 0 4px #ff3d00);
    animation: af-flame 0.2s infinite alternate;
  }

  @keyframes af-flame {
    0% { transform: scaleY(0.9) skewX(-2deg); }
    100% { transform: scaleY(1.1) skewX(2deg); }
  }

  .af-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 150, 60, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAthanorFurnace extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${athanorStyles}</style>
      <div class="af-box">
        <div class="af-stage">
          <div class="af-tower">
            <div class="af-hopper"></div>
            <div class="af-vessel">
              <div class="af-elixir"></div>
            </div>
            <div class="af-fire"></div>
          </div>
        </div>

        <div class="af-label">ALCHEMICAL ATHANOR</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-athanor-furnace')) {
  customElements.define('concept-athanor-furnace', ConceptAthanorFurnace);
}
