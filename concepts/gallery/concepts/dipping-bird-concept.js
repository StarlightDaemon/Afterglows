const dippingBirdStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dpb {
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

  /* Support stand pivot fulcrum */
  .dpb-stand {
    position: absolute;
    bottom: 8px;
    left: 48px;
    width: 22px;
    height: 48px;
    border-left: 2px solid var(--accent, #00cc00);
    border-right: 2px solid var(--accent, #00cc00);
    border-top: 2px solid #ffffff;
    z-index: 2;
  }

  .dpb-base {
    position: absolute;
    bottom: 8px;
    left: 40px;
    width: 38px;
    height: 6px;
    background: #008818;
    border: 1px solid #ffffff;
    border-radius: 2px;
    z-index: 2;
  }

  /* Water glass tumbler at left */
  .dpb-glass {
    position: absolute;
    bottom: 12px;
    left: 14px;
    width: 24px;
    height: 32px;
    border: 1.5px solid rgba(140, 255, 170, 0.7);
    border-top: none;
    border-radius: 0 0 4px 4px;
    background: linear-gradient(180deg, rgba(0, 40, 10, 0.2) 0% 30%, rgba(140, 255, 170, 0.4) 30% 100%);
    box-shadow: inset 0 0 6px rgba(0, 204, 0, 0.3);
    z-index: 2;
  }

  /* Pivoting Drinking Bird Body Assembly */
  .dpb-bird-rig {
    position: absolute;
    bottom: 30px;
    left: 52px;
    width: 14px;
    height: 68px;
    transform-origin: 7px 38px; /* Pivot fulcrum */
    z-index: 4;
    animation: dpb-drink-cycle 5s ease-in-out infinite;
  }

  @keyframes dpb-drink-cycle {
    0%, 20% { transform: rotate(12deg); } /* Bobbing upright while fluid climbs */
    30% { transform: rotate(-8deg); }
    45% { transform: rotate(14deg); }
    60% { transform: rotate(-55deg); } /* Full forward dip into water glass! */
    70% { transform: rotate(-55deg); } /* Drinking / pressure equalizing */
    82% { transform: rotate(18deg); } /* Bobbing back upright */
    90%, 100% { transform: rotate(12deg); }
  }

  /* Glass tube neck */
  .dpb-tube {
    position: absolute;
    top: 14px;
    left: 4px;
    width: 6px;
    height: 44px;
    border-left: 1px solid rgba(255, 255, 255, 0.8);
    border-right: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(0, 50, 15, 0.3);
  }

  /* Climbing volatile liquid column inside neck */
  .dpb-liquid-neck {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(180deg, #ffffff, #8cffaa);
    box-shadow: 0 0 4px #8cffaa;
    animation: dpb-liquid-rise 5s ease-in-out infinite;
  }

  @keyframes dpb-liquid-rise {
    0%, 25% { height: 8px; }
    55% { height: 38px; } /* Heavy liquid rises to top bulb */
    68% { height: 4px; } /* Dumps back into bottom */
    100% { height: 8px; }
  }

  /* Bottom reservoir glass bulb */
  .dpb-bottom-bulb {
    position: absolute;
    bottom: 0;
    left: -2px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1.5px solid #ffffff;
    background: radial-gradient(circle at 40% 40%, #8cffaa 0%, #008818 60%, #011405 100%);
    box-shadow: 0 0 6px #8cffaa;
  }

  /* Felt-covered head bulb & beak */
  .dpb-head {
    position: absolute;
    top: 0;
    left: -1px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.5px solid #d6ffe0;
    background: radial-gradient(circle at 40% 40%, #ffffff 0%, #00aa22 70%);
    box-shadow: 0 0 6px #ffffff;
  }

  /* Beak pointing toward glass */
  .dpb-beak {
    position: absolute;
    top: 6px;
    left: -10px;
    width: 10px;
    height: 4px;
    background: #ffffff;
    clip-path: polygon(100% 0, 100% 100%, 0 50%);
  }

  /* Top hat accessory */
  .dpb-hat {
    position: absolute;
    top: -6px;
    left: 2px;
    width: 12px;
    height: 6px;
    background: #011205;
    border: 1px solid var(--accent, #00cc00);
    border-radius: 1px;
  }

  /* Thermodynamic readout */
  .dpb-label {
    position: absolute;
    top: 6px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptDippingBird extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dippingBirdStyles}</style>
      <div class="dpb">
        <div class="dpb-label">HEAT ENGINE η > 0</div>

        <div class="dpb-glass"></div>
        <div class="dpb-stand"></div>
        <div class="dpb-base"></div>

        <div class="dpb-bird-rig">
          <div class="dpb-hat"></div>
          <div class="dpb-head">
            <div class="dpb-beak"></div>
          </div>
          <div class="dpb-tube">
            <div class="dpb-liquid-neck"></div>
          </div>
          <div class="dpb-bottom-bulb"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-dipping-bird')) {
  customElements.define('concept-dipping-bird', ConceptDippingBird);
}
