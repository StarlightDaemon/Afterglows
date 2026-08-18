const serverLightsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original 8-dot blink grid --- */
  .server-rack-v1 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    width: 84px;
  }

  .sl {
    width: 12px;
    height: 12px;
    background: #00ff66;
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 8px #00ff66;
    border-radius: 50%;
    animation: blink-light 1.0s ease-in-out infinite alternate;
  }

  .sl:nth-child(odd) { animation-delay: -0.25s; }
  .sl:nth-child(3n) { animation-delay: -0.5s; }

  @keyframes blink-light {
    0% { transform: scale(0.6) translateY(-4px); }
    100% { transform: scale(1.3) translateY(4px); }
  }

  /* --- v2: a full rack chassis with live units --- */
  .rack {
    position: relative;
    width: 76px;
    height: 96px;
    border: 1.5px solid #00ff66;
    border-radius: 3px;
    background: linear-gradient(180deg, #061206 0%, #030a04 100%);
    box-shadow: inset 0 0 10px rgba(0, 255, 100, 0.3), 0 0 10px rgba(0, 255, 100, 0.3);
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .rack-unit {
    position: relative;
    flex: 1;
    border: 1px solid #00ff66;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(10, 32, 16, 0.95), rgba(6, 20, 10, 0.95));
    display: flex;
    align-items: center;
    padding: 0 4px;
    gap: 3px;
    box-sizing: border-box;
    animation: blade-slide 1.6s ease-in-out infinite alternate;
  }

  .u1 { animation-delay: 0s; }
  .u2 { animation-delay: -0.4s; }
  .u3 { animation-delay: -0.8s; }
  .u4 { animation-delay: -1.2s; }

  @keyframes blade-slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-10px); }
  }

  .rack-unit::after {
    content: '';
    position: absolute;
    right: 4px;
    top: 25%;
    bottom: 25%;
    width: 14px;
    background: repeating-linear-gradient(90deg, #00ff66 0 1px, transparent 1px 4px);
  }

  .rack-led {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #00ff66;
  }

  .rack-meter {
    position: relative;
    height: 4px;
    width: 22px;
    border: 1px solid #00ff66;
    border-radius: 1px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .rack-meter::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #00ff66, #ffffff);
    transform-origin: left center;
    animation: rack-load 1.2s ease-in-out infinite alternate;
  }

  .u1 .rack-meter::before { animation-delay: 0s; }
  .u2 .rack-meter::before { animation-delay: -0.3s; }
  .u3 .rack-meter::before { animation-delay: -0.6s; }
  .u4 .rack-meter::before { animation-delay: -0.9s; }

  .rack-rail {
    position: absolute;
    left: -6px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: #00ff66;
    box-shadow: 0 0 4px #00ff66;
  }

  .rack-blip {
    position: absolute;
    left: -8.5px;
    top: 8px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
    animation: rack-blip 1.0s linear infinite;
  }

  @keyframes rack-load {
    0% { transform: scaleX(0.2); }
    100% { transform: scaleX(1); }
  }

  @keyframes rack-blip {
    0% { transform: translateY(0); }
    100% { transform: translateY(74px); }
  }

  /* --- v3: Enterprise Blade Server Rack Unit --- */
  .srk {
    position: relative;
    width: 76px;
    height: 96px;
    border: 1.5px solid #38bdf8;
    border-radius: 3px;
    background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 12px rgba(56, 189, 248, 0.4);
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .srk-unit {
    position: relative;
    flex: 1;
    border: 1px solid #475569;
    border-radius: 2px;
    background: linear-gradient(90deg, #1e293b, #0f172a);
    display: flex;
    align-items: center;
    padding: 0 4px;
    gap: 3px;
    box-sizing: border-box;
    animation: blade-slide 1.6s ease-in-out infinite alternate;
  }

  .srk-unit::after {
    content: '';
    position: absolute;
    right: 4px;
    top: 25%;
    bottom: 25%;
    width: 14px;
    background: repeating-linear-gradient(90deg, #38bdf8 0 1px, transparent 1px 4px);
  }

  .srk-led {
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }

  .srk-led.ok { background: #22c55e; box-shadow: 0 0 4px #4ade80; }
  .srk-led.busy { background: #f59e0b; box-shadow: 0 0 4px #fbbf24; }
  .srk-led.warn { background: #ef4444; box-shadow: 0 0 4px #f87171; }

  .srk-meter {
    position: relative;
    height: 4px;
    width: 22px;
    border: 1px solid #475569;
    border-radius: 1px;
    overflow: hidden;
    box-sizing: border-box;
    background: #020617;
  }

  .srk-meter::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #22c55e, #facc15 60%, #ef4444);
    transform-origin: left center;
    animation: rack-load 1.2s ease-in-out infinite alternate;
  }

  .u1 .srk-meter::before { animation-delay: 0s; }
  .u2 .srk-meter::before { animation-delay: -0.3s; }
  .u3 .srk-meter::before { animation-delay: -0.6s; }
  .u4 .srk-meter::before { animation-delay: -0.9s; }

  .srk-rail {
    position: absolute;
    left: -6px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: #38bdf8;
    box-shadow: 0 0 6px #38bdf8;
  }

  .srk-blip {
    position: absolute;
    left: -8.5px;
    top: 8px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00f0ff, 0 0 14px #38bdf8;
    animation: rack-blip 1.0s linear infinite;
  }
`;

const rackUnitV2 = (cls) => `
  <div class="rack-unit ${cls}">
    <span class="rack-led ok"></span>
    <span class="rack-led busy"></span>
    <span class="rack-led warn"></span>
    <span class="rack-meter"></span>
  </div>
`;

const rackUnitV3 = (cls) => `
  <div class="srk-unit ${cls}">
    <span class="srk-led ok"></span>
    <span class="srk-led busy"></span>
    <span class="srk-led warn"></span>
    <span class="srk-meter"></span>
  </div>
`;

const serverLightsMarkup = {
  v1: `
    <div class="server-rack-v1">
      <div class="sl"></div><div class="sl"></div><div class="sl"></div><div class="sl"></div>
      <div class="sl"></div><div class="sl"></div><div class="sl"></div><div class="sl"></div>
    </div>
  `,
  v2: `
    <div class="rack">
      <div class="rack-rail"></div>
      <div class="rack-blip"></div>
      ${rackUnitV2('u1')}
      ${rackUnitV2('u2')}
      ${rackUnitV2('u3')}
      ${rackUnitV2('u4')}
    </div>
  `,
  v3: `
    <div class="srk">
      <div class="srk-rail"></div>
      <div class="srk-blip"></div>
      ${rackUnitV3('u1')}
      ${rackUnitV3('u2')}
      ${rackUnitV3('u3')}
      ${rackUnitV3('u4')}
    </div>
  `,
};

class ConceptServerLights extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${serverLightsStyles}</style>${serverLightsMarkup[version] || serverLightsMarkup.v3}`;
  }
}

if (!customElements.get('concept-server-lights')) {
  customElements.define('concept-server-lights', ConceptServerLights);
}
