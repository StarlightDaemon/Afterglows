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
    width: 48px;
    height: 60px;
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
    position: absolute;
    top: 0;
    width: 32px;
    height: 14px;
    background: #190a04;
    border-bottom: 1.5px solid #ff7a29;
    overflow: hidden;
  }

  /* Descending glowing ember lumps down hopper shaft */
  .af-charcoal {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #ff9100;
    border: 1px solid #ffd54f;
    border-radius: 1px;
    box-shadow: 0 0 8px #ff6d00, 0 0 4px #ffd54f;
  }

  .c1 { left: 8px; animation: af-coal-drop 2.6s ease-in infinite; }
  .c2 { left: 18px; animation: af-coal-drop 2.6s ease-in infinite; animation-delay: 1.3s; }

  @keyframes af-coal-drop {
    0% { transform: translateY(0); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(44px); opacity: 0; }
  }

  /* Glass flask digestion vessel in sand bath */
  .af-vessel {
    position: absolute;
    top: 15px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 230, 150, 0.4) 0%, rgba(255, 120, 40, 0.1) 80%);
    border: 1.2px solid #ffe082;
    box-shadow: 0 0 6px #ffa726;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }

  /* Convective circulating elixir essence loop */
  .af-elixir-orbit {
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    animation: af-elixir-circulate 2s linear infinite;
  }

  .af-elixir-drop {
    position: absolute;
    top: -2px;
    left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffd54f;
    box-shadow: 0 0 10px #ff6d00, 0 0 6px #ffffff;
  }

  @keyframes af-elixir-circulate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Hearth fire chamber draft */
  .af-fire {
    position: absolute;
    bottom: 2px;
    width: 32px;
    height: 14px;
    background: radial-gradient(ellipse at 50% 100%, #ffffff 0%, #ff9100 50%, transparent 90%);
    filter: drop-shadow(0 0 4px #ff3d00);
    animation: af-flame 0.4s ease-in-out infinite alternate;
  }

  @keyframes af-flame {
    0% { transform: scaleY(0.8) scaleX(0.9); }
    100% { transform: scaleY(1.25) scaleX(1.1); }
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
            <div class="af-hopper">
              <div class="af-charcoal c1"></div>
              <div class="af-charcoal c2"></div>
            </div>
            <div class="af-vessel">
              <div class="af-elixir-orbit">
                <div class="af-elixir-drop"></div>
              </div>
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
