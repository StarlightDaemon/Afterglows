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
    gap: 4px;
    width: 80px;
  }

  .sl {
    width: 10px;
    height: 10px;
    background: #333;
    border-radius: 50%;
    animation: blink-light 1s infinite alternate;
  }

  .sl:nth-child(odd) { animation-delay: 0.2s; }
  .sl:nth-child(3n) { animation-delay: 0.5s; }

  @keyframes blink-light {
    to {
      background: var(--accent, #00cc00);
      box-shadow: 0 0 5px var(--accent, #00cc00);
    }
  }

  /* --- v2: a full rack chassis with live units --- */
  .rack {
    position: relative;
    width: 76px;
    height: 96px;
    border: 1px solid rgba(0, 204, 0, 0.5);
    border-radius: 3px;
    background: linear-gradient(180deg, #061206 0%, #030a04 100%);
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.12);
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .rack-unit {
    position: relative;
    flex: 1;
    border: 1px solid rgba(0, 204, 0, 0.3);
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(10, 32, 16, 0.9), rgba(6, 20, 10, 0.9));
    display: flex;
    align-items: center;
    padding: 0 4px;
    gap: 3px;
    box-sizing: border-box;
  }

  .rack-unit::after {
    content: '';
    position: absolute;
    right: 4px;
    top: 25%;
    bottom: 25%;
    width: 14px;
    background: repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.3) 0 1px, transparent 1px 4px);
  }

  .rack-led {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.9);
  }

  .rack-led.ok { animation: rack-ok 2.2s ease-in-out infinite; }
  .rack-led.busy { animation: rack-busy 0.45s steps(2, jump-none) infinite; }
  .rack-led.warn { animation: rack-warn 3.6s ease-in-out infinite; }

  .u2 .rack-led.ok { animation-delay: -0.7s; }
  .u3 .rack-led.ok { animation-delay: -1.3s; }
  .u4 .rack-led.ok { animation-delay: -1.8s; }
  .u2 .rack-led.busy { animation-delay: -0.2s; }
  .u3 .rack-led.busy { animation-delay: -0.33s; }
  .u4 .rack-led.busy { animation-delay: -0.1s; }
  .u2 .rack-led.warn { animation-delay: -1.1s; }
  .u3 .rack-led.warn { animation-delay: -2.4s; }
  .u4 .rack-led.warn { animation-delay: -0.6s; }

  .rack-meter {
    position: relative;
    height: 4px;
    width: 22px;
    border: 1px solid rgba(0, 204, 0, 0.35);
    border-radius: 1px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .rack-meter::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(0, 204, 0, 0.8), rgba(160, 255, 185, 0.9));
    transform-origin: left center;
    animation: rack-load 3.1s ease-in-out infinite;
  }

  .u1 .rack-meter::before { animation-delay: 0s; }
  .u2 .rack-meter::before { animation-delay: -1.2s; }
  .u3 .rack-meter::before { animation-delay: -2.1s; }
  .u4 .rack-meter::before { animation-delay: -0.6s; }

  .rack-rail {
    position: absolute;
    left: -6px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: rgba(0, 204, 0, 0.25);
  }

  .rack-blip {
    position: absolute;
    left: -7.5px;
    top: 8px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #b8ffc4;
    box-shadow: 0 0 6px rgba(160, 255, 185, 0.9);
    animation: rack-blip 2.4s ease-in-out infinite;
  }

  @keyframes rack-ok { 0%, 100% { opacity: 0.35; } 50% { opacity: 1; } }
  @keyframes rack-busy { 0% { opacity: 1; } 100% { opacity: 0.15; } }
  @keyframes rack-warn { 0%, 86%, 100% { opacity: 0.2; } 90%, 94% { opacity: 1; box-shadow: 0 0 5px rgba(200, 255, 210, 0.8); } }
  @keyframes rack-load { 0%, 100% { transform: scaleX(0.25); } 34% { transform: scaleX(0.85); } 58% { transform: scaleX(0.45); } 78% { transform: scaleX(0.95); } }
  @keyframes rack-blip { 0% { top: 6px; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { top: 84px; opacity: 0; } }

  /* --- v3: Enterprise Blade Server Rack Unit ---
     Dark brushed steel chassis, green power link LEDs, flashing amber drive activity,
     red fault status, dynamic load meter, and electric cyan fiber-optic data bus pulse. */
  .srk {
    position: relative;
    width: 76px;
    height: 96px;
    border: 1.5px solid #334155;
    border-radius: 3px;
    background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .srk-unit {
    position: relative;
    flex: 1;
    border: 1px solid #334155;
    border-radius: 2px;
    background: linear-gradient(90deg, #1e293b, #0f172a);
    display: flex;
    align-items: center;
    padding: 0 4px;
    gap: 3px;
    box-sizing: border-box;
  }

  .srk-unit::after {
    content: '';
    position: absolute;
    right: 4px;
    top: 25%;
    bottom: 25%;
    width: 14px;
    background: repeating-linear-gradient(90deg, #475569 0 1px, transparent 1px 4px);
  }

  .srk-led {
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }

  .srk-led.ok {
    background: #22c55e;
    box-shadow: 0 0 4px #4ade80;
    animation: rack-ok 2.2s ease-in-out infinite;
  }

  .srk-led.busy {
    background: #f59e0b;
    box-shadow: 0 0 4px #fbbf24;
    animation: rack-busy 0.45s steps(2, jump-none) infinite;
  }

  .srk-led.warn {
    background: #ef4444;
    box-shadow: 0 0 4px #f87171;
    animation: srk-warn 3.6s ease-in-out infinite;
  }

  @keyframes srk-warn {
    0%, 86%, 100% { opacity: 0.2; }
    90%, 94% { opacity: 1; box-shadow: 0 0 8px #ef4444; }
  }

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
    animation: rack-load 3.1s ease-in-out infinite;
  }

  .u1 .srk-meter::before { animation-delay: 0s; }
  .u2 .srk-meter::before { animation-delay: -1.2s; }
  .u3 .srk-meter::before { animation-delay: -2.1s; }
  .u4 .srk-meter::before { animation-delay: -0.6s; }

  .srk-rail {
    position: absolute;
    left: -6px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: #1e293b;
  }

  .srk-blip {
    position: absolute;
    left: -7.5px;
    top: 8px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00f0ff;
    box-shadow: 0 0 8px #00f0ff, 0 0 12px #38bdf8;
    animation: rack-blip 2.4s ease-in-out infinite;
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
