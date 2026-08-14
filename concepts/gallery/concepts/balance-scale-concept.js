const balanceScaleStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ba {
    width: 108px;
    height: 96px;
    position: relative;
  }

  .ba-base {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 40px;
    height: 6px;
    margin-left: -20px;
    border-radius: 50% 50% 3px 3px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.6), rgba(0, 90, 18, 0.8));
  }

  .ba-column {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 5px;
    height: 52px;
    margin-left: -2.5px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.5), rgba(0, 110, 22, 0.7));
  }

  .ba-gauge {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 20px;
    height: 8px;
    margin-left: -10px;
    border-top: 1px solid rgba(0, 204, 0, 0.4);
    border-radius: 50% 50% 0 0;
  }

  .ba-pointer {
    position: absolute;
    left: 50%;
    top: 18px;
    width: 2px;
    height: 12px;
    margin-left: -1px;
    background: #d6ffe0;
    transform-origin: 50% 0;
    animation: ba-tilt 7s ease-in-out infinite;
  }

  .ba-beam {
    position: absolute;
    left: 50%;
    top: 18px;
    width: 84px;
    height: 3px;
    margin-left: -42px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(190, 255, 205, 0.9), rgba(0, 130, 26, 0.8), rgba(190, 255, 205, 0.9));
    transform-origin: 50% 50%;
    animation: ba-tilt-beam 7s ease-in-out infinite;
  }

  @keyframes ba-tilt-beam {
    0%, 8% { transform: rotate(0deg); }
    16% { transform: rotate(-16deg); }
    36% { transform: rotate(-10deg); }
    56% { transform: rotate(-4deg); }
    76%, 100% { transform: rotate(0deg); }
  }

  @keyframes ba-tilt {
    0%, 8% { transform: rotate(0deg); }
    16% { transform: rotate(-16deg); }
    36% { transform: rotate(-10deg); }
    56% { transform: rotate(-4deg); }
    76%, 100% { transform: rotate(0deg); }
  }

  .ba-pan {
    position: absolute;
    top: 20px;
    width: 26px;
    height: 20px;
    animation: ba-pan 7s ease-in-out infinite;
  }

  .ba-pan.left { left: 6px; }
  .ba-pan.right { right: 6px; animation-name: ba-pan-right; }

  .ba-chain {
    position: absolute;
    top: 0;
    width: 1px;
    height: 14px;
    background: rgba(140, 255, 170, 0.6);
  }

  .ba-chain.c1 { left: 4px; }
  .ba-chain.c2 { right: 4px; }

  .ba-dish {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 26px;
    height: 6px;
    border-radius: 0 0 50% 50%;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.7), rgba(0, 120, 24, 0.7));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  @keyframes ba-pan {
    0%, 8% { transform: translateY(0); }
    16% { transform: translateY(14px); }
    36% { transform: translateY(9px); }
    56% { transform: translateY(4px); }
    76%, 100% { transform: translateY(0); }
  }

  @keyframes ba-pan-right {
    0%, 8% { transform: translateY(0); }
    16% { transform: translateY(-14px); }
    36% { transform: translateY(-9px); }
    56% { transform: translateY(-4px); }
    76%, 100% { transform: translateY(0); }
  }

  .ba-weight {
    position: absolute;
    left: 8px;
    bottom: 5px;
    width: 10px;
    height: 8px;
    border-radius: 2px 2px 1px 1px;
    background: radial-gradient(circle at 40% 30%, rgba(214, 255, 224, 0.9), rgba(0, 120, 24, 0.9));
    animation: ba-drop 7s ease-in infinite;
  }

  @keyframes ba-drop {
    0% { transform: translateY(-40px); opacity: 0; }
    6% { opacity: 1; }
    12% { transform: translateY(0); }
    100% { transform: translateY(0); opacity: 1; }
  }

  .ba-measure {
    position: absolute;
    bottom: 5px;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: rgba(190, 255, 205, 0.85);
    opacity: 0;
    animation: ba-measure 7s steps(1) infinite;
  }

  .ba-measure.m1 { left: 6px; }
  .ba-measure.m2 { left: 13px; }
  .ba-measure.m3 { left: 10px; bottom: 11px; }

  @keyframes ba-measure {
    0%, 24% { opacity: 0; }
    30% { opacity: 1; }
    100% { opacity: 1; }
  }

  .ba-measure.m2 { animation-delay: 0.7s; }
  .ba-measure.m3 { animation-delay: 1.4s; }

  .ba-balanced {
    position: absolute;
    left: 0;
    right: 0;
    top: 2px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: #d6ffe0;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    opacity: 0;
    animation: ba-balanced 7s infinite;
  }

  @keyframes ba-balanced {
    0%, 76% { opacity: 0; }
    82%, 94% { opacity: 1; }
    100% { opacity: 0; }
  }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Antique apothecary polished brass balance scale with counter-weighted pans,
     cast iron reference weight, brass metric weights, and glowing green BALANCED confirmation */
  .bac {
    width: 108px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Polished brass pedestal base */
  .bac-base {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 40px;
    height: 6px;
    margin-left: -20px;
    border-radius: 50% 50% 3px 3px;
    background: linear-gradient(180deg, #fef08a 0%, #facc15 50%, #854d0e 100%);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
    border: 1px solid #ca8a04;
  }

  /* Fluted brass vertical column */
  .bac-column {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 5px;
    height: 52px;
    margin-left: -2.5px;
    background: linear-gradient(90deg, #fde047 0%, #facc15 50%, #ca8a04 100%);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  }

  /* Gauge arch */
  .bac-gauge {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 20px;
    height: 8px;
    margin-left: -10px;
    border-top: 1.5px solid #facc15;
    border-radius: 50% 50% 0 0;
  }

  /* Precision indicator pointer needle */
  .bac-pointer {
    position: absolute;
    left: 50%;
    top: 18px;
    width: 2px;
    height: 12px;
    margin-left: -1px;
    background: #f43f5e;
    box-shadow: 0 0 4px #ef4444;
    transform-origin: 50% 0;
    animation: bac-tilt 7s ease-in-out infinite;
  }

  /* Brass pivot beam */
  .bac-beam {
    position: absolute;
    left: 50%;
    top: 18px;
    width: 84px;
    height: 3px;
    margin-left: -42px;
    border-radius: 2px;
    background: linear-gradient(90deg, #fef08a 0%, #facc15 50%, #ca8a04 100%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    transform-origin: 50% 50%;
    animation: bac-tilt-beam 7s ease-in-out infinite;
  }

  @keyframes bac-tilt-beam {
    0%, 8% { transform: rotate(0deg); }
    16% { transform: rotate(-16deg); }
    36% { transform: rotate(-10deg); }
    56% { transform: rotate(-4deg); }
    76%, 100% { transform: rotate(0deg); }
  }

  @keyframes bac-tilt {
    0%, 8% { transform: rotate(0deg); }
    16% { transform: rotate(-16deg); }
    36% { transform: rotate(-10deg); }
    56% { transform: rotate(-4deg); }
    76%, 100% { transform: rotate(0deg); }
  }

  /* Hanging pans */
  .bac-pan {
    position: absolute;
    top: 20px;
    width: 26px;
    height: 20px;
    animation: bac-pan 7s ease-in-out infinite;
  }

  .bac-pan.left { left: 6px; }
  .bac-pan.right { right: 6px; animation-name: bac-pan-right; }

  /* Brass suspension chains */
  .bac-chain {
    position: absolute;
    top: 0;
    width: 1px;
    height: 14px;
    background: #facc15;
  }

  .bac-chain.c1 { left: 4px; }
  .bac-chain.c2 { right: 4px; }

  /* Brass weighing dish */
  .bac-dish {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 26px;
    height: 6px;
    border-radius: 0 0 50% 50%;
    background: linear-gradient(180deg, #fef08a 0%, #facc15 60%, #ca8a04 100%);
    border: 1px solid #eab308;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  @keyframes bac-pan {
    0%, 8% { transform: translateY(0); }
    16% { transform: translateY(14px); }
    36% { transform: translateY(9px); }
    56% { transform: translateY(4px); }
    76%, 100% { transform: translateY(0); }
  }

  @keyframes bac-pan-right {
    0%, 8% { transform: translateY(0); }
    16% { transform: translateY(-14px); }
    36% { transform: translateY(-9px); }
    56% { transform: translateY(-4px); }
    76%, 100% { transform: translateY(0); }
  }

  /* Heavy cast-iron item on left pan */
  .bac-weight {
    position: absolute;
    left: 8px;
    bottom: 5px;
    width: 10px;
    height: 8px;
    border-radius: 2px 2px 1px 1px;
    background: linear-gradient(180deg, #64748b 0%, #334155 60%, #0f172a 100%);
    border: 1px solid #94a3b8;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    animation: bac-drop 7s ease-in infinite;
  }

  @keyframes bac-drop {
    0% { transform: translateY(-40px); opacity: 0; }
    6% { opacity: 1; }
    12% { transform: translateY(0); }
    100% { transform: translateY(0); opacity: 1; }
  }

  /* Polished brass gram weights added to right pan */
  .bac-measure {
    position: absolute;
    bottom: 5px;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: linear-gradient(180deg, #fef08a, #ca8a04);
    border: 1px solid #ffffff;
    box-shadow: 0 0 3px #fde047;
    opacity: 0;
    animation: bac-measure 7s steps(1) infinite;
  }

  .bac-measure.m1 { left: 6px; }
  .bac-measure.m2 { left: 13px; }
  .bac-measure.m3 { left: 10px; bottom: 11px; }

  @keyframes bac-measure {
    0%, 24% { opacity: 0; }
    30% { opacity: 1; }
    100% { opacity: 1; }
  }

  .bac-measure.m2 { animation-delay: 0.7s; }
  .bac-measure.m3 { animation-delay: 1.4s; }

  /* Green BALANCED confirmation banner */
  .bac-balanced {
    position: absolute;
    left: 0;
    right: 0;
    top: 2px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #4ade80;
    text-shadow: 0 0 6px #22c55e;
    opacity: 0;
    animation: bac-balanced 7s infinite;
  }

  @keyframes bac-balanced {
    0%, 76% { opacity: 0; }
    82%, 94% { opacity: 1; }
    100% { opacity: 0; }
  }
  `,
};

const balanceScaleMarkup = {
  v1: `
      <div class="ba">
        <div class="ba-base"></div>
        <div class="ba-column"></div>
        <div class="ba-gauge"></div>
        <div class="ba-beam"></div>
        <div class="ba-pointer"></div>
        <div class="ba-pan left">
          <div class="ba-chain c1"></div>
          <div class="ba-chain c2"></div>
          <div class="ba-dish"></div>
          <div class="ba-weight"></div>
        </div>
        <div class="ba-pan right">
          <div class="ba-chain c1"></div>
          <div class="ba-chain c2"></div>
          <div class="ba-dish"></div>
          <div class="ba-measure m1"></div>
          <div class="ba-measure m2"></div>
          <div class="ba-measure m3"></div>
        </div>
        <div class="ba-balanced">BALANCED</div>
      </div>
    `,
  v2: `
      <div class="bac">
        <div class="bac-base"></div>
        <div class="bac-column"></div>
        <div class="bac-gauge"></div>
        <div class="bac-beam"></div>
        <div class="bac-pointer"></div>
        <div class="bac-pan left">
          <div class="bac-chain c1"></div>
          <div class="bac-chain c2"></div>
          <div class="bac-dish"></div>
          <div class="bac-weight"></div>
        </div>
        <div class="bac-pan right">
          <div class="bac-chain c1"></div>
          <div class="bac-chain c2"></div>
          <div class="bac-dish"></div>
          <div class="bac-measure m1"></div>
          <div class="bac-measure m2"></div>
          <div class="bac-measure m3"></div>
        </div>
        <div class="bac-balanced">BALANCED</div>
      </div>
    `,
};

class ConceptBalanceScale extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${balanceScaleStyles[version] || balanceScaleStyles.v2}</style>${balanceScaleMarkup[version] || balanceScaleMarkup.v2}`;
  }
}

if (!customElements.get('concept-balance-scale')) {
  customElements.define('concept-balance-scale', ConceptBalanceScale);
}
