const anemometerStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .an {
    width: 104px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  .an-mast {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 4px;
    height: 40px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.7), rgba(0, 90, 18, 0.7));
  }

  .an-hub {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.7);
    z-index: 2;
  }

  .an-rotor {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 0;
    height: 0;
    animation: an-spin 2.6s linear infinite;
  }

  @keyframes an-spin {
    to { transform: rotate(360deg); }
  }

  .an-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 30px;
    height: 2px;
    background: rgba(140, 255, 170, 0.8);
    transform-origin: 0% 50%;
  }

  .an-arm.a1 { transform: rotate(0deg); }
  .an-arm.a2 { transform: rotate(120deg); }
  .an-arm.a3 { transform: rotate(240deg); }

  .an-cup {
    position: absolute;
    right: -8px;
    top: -6px;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(190, 255, 205, 0.9);
    border-radius: 50%;
    border-right-color: transparent;
    background: radial-gradient(circle at 30% 40%, rgba(140, 255, 170, 0.5), transparent 70%);
    box-sizing: border-box;
  }

  .an-blur {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 68px;
    height: 68px;
    margin: -34px 0 0 -34px;
    border-radius: 50%;
    border: 6px solid rgba(140, 255, 170, 0.18);
    box-sizing: border-box;
    animation: an-blur 6.5s ease-in-out infinite;
    opacity: 0;
  }

  @keyframes an-blur {
    0%, 100% { opacity: 0; }
    40%, 55% { opacity: 1; }
  }

  .an-dial {
    position: absolute;
    left: 4px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: rgba(0, 30, 6, 0.7);
  }

  .an-dial-needle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2px;
    height: 12px;
    margin: -12px 0 0 -1px;
    background: #d6ffe0;
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.8);
    transform-origin: 50% 100%;
    animation: an-dial 6.5s ease-in-out infinite;
  }

  @keyframes an-dial {
    0%, 100% { transform: rotate(-70deg); }
    40%, 55% { transform: rotate(70deg); }
  }

  .an-gust {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.6), transparent);
    opacity: 0;
    animation: an-gust 3.2s ease-in infinite;
  }

  .an-gust.g1 { top: 26px; left: 0; width: 30px; }
  .an-gust.g2 { top: 52px; left: 8px; width: 40px; animation-delay: -1.6s; }

  @keyframes an-gust {
    0%, 16% { transform: translateX(-24px); opacity: 0; }
    26% { opacity: 0.85; }
    54% { transform: translateX(90px); opacity: 0; }
    100% { opacity: 0; }
  }

  .an-read {
    position: absolute;
    right: 4px;
    bottom: 4px;
    font-size: 8px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 4px rgba(0, 204, 0, 0.6);
  }

  .an-read::before {
    content: '4 m/s';
    animation: an-read 6.5s steps(1) infinite;
  }

  @keyframes an-read {
    0% { content: '4 m/s'; }
    30% { content: '11 m/s'; }
    45% { content: '17 m/s'; }
    62% { content: '12 m/s'; }
    85% { content: '4 m/s'; }
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

  /* v2: Meteorological cup anemometer with aviation orange wind cups,
     brushed steel mast, speed gauge dial with red needle, and cyan wind gusts */
  .anc {
    width: 104px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Weather station steel mast */
  .anc-mast {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 4px;
    height: 40px;
    margin-left: -2px;
    background: linear-gradient(180deg, #cbd5e1 0%, #64748b 50%, #334155 100%);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
  }

  /* Central bearing hub */
  .anc-hub {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #ffffff, #64748b 75%);
    border: 1px solid #94a3b8;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
    z-index: 2;
  }

  /* Rotating rotor assembly */
  .anc-rotor {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 0;
    height: 0;
    animation: anc-spin 2.6s linear infinite;
  }

  @keyframes anc-spin {
    to { transform: rotate(360deg); }
  }

  /* Rotor arms */
  .anc-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 30px;
    height: 2px;
    background: #cbd5e1;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    transform-origin: 0% 50%;
  }

  .anc-arm.a1 { transform: rotate(0deg); }
  .anc-arm.a2 { transform: rotate(120deg); }
  .anc-arm.a3 { transform: rotate(240deg); }

  /* Safety orange hemispherical wind cups */
  .anc-cup {
    position: absolute;
    right: -8px;
    top: -6px;
    width: 12px;
    height: 12px;
    border: 2px solid #ea580c;
    border-radius: 50%;
    border-right-color: transparent;
    background: radial-gradient(circle at 30% 40%, #fdba74 0%, #ea580c 70%);
    box-shadow: 0 0 4px #f97316;
    box-sizing: border-box;
  }

  /* Motion blur ring */
  .anc-blur {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 68px;
    height: 68px;
    margin: -34px 0 0 -34px;
    border-radius: 50%;
    border: 6px solid rgba(249, 115, 22, 0.25);
    box-sizing: border-box;
    animation: anc-blur 6.5s ease-in-out infinite;
    opacity: 0;
  }

  @keyframes anc-blur {
    0%, 100% { opacity: 0; }
    40%, 55% { opacity: 1; filter: drop-shadow(0 0 6px rgba(249, 115, 22, 0.6)); }
  }

  /* Speed gauge dial */
  .anc-dial {
    position: absolute;
    left: 4px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #38bdf8;
    background: #09090b;
    box-shadow: inset 0 0 6px rgba(56, 189, 248, 0.4);
  }

  /* Red indicator gauge needle */
  .anc-dial-needle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2px;
    height: 12px;
    margin: -12px 0 0 -1px;
    background: #f43f5e;
    box-shadow: 0 0 4px #ef4444;
    transform-origin: 50% 100%;
    animation: anc-dial 6.5s ease-in-out infinite;
  }

  @keyframes anc-dial {
    0%, 100% { transform: rotate(-70deg); }
    40%, 55% { transform: rotate(70deg); }
  }

  /* Cyan wind gusts */
  .anc-gust {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, #38bdf8 50%, transparent);
    box-shadow: 0 0 4px #00f0ff;
    opacity: 0;
    animation: anc-gust 3.2s ease-in infinite;
  }

  .anc-gust.g1 { top: 26px; left: 0; width: 30px; }
  .anc-gust.g2 { top: 52px; left: 8px; width: 40px; animation-delay: -1.6s; }

  @keyframes anc-gust {
    0%, 16% { transform: translateX(-24px); opacity: 0; }
    26% { opacity: 0.9; }
    54% { transform: translateX(90px); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Digital wind speed readout */
  .anc-read {
    position: absolute;
    right: 4px;
    bottom: 4px;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #38bdf8;
    text-shadow: 0 0 5px #00f0ff;
  }

  .anc-read::before {
    content: '4 m/s';
    animation: anc-read 6.5s steps(1) infinite;
  }

  @keyframes anc-read {
    0% { content: '4 m/s'; }
    30% { content: '11 m/s'; }
    45% { content: '17 m/s'; color: #f43f5e; text-shadow: 0 0 5px #ef4444; }
    62% { content: '12 m/s'; }
    85% { content: '4 m/s'; color: #38bdf8; text-shadow: 0 0 5px #00f0ff; }
  }
  `,
};

const anemometerMarkup = {
  v1: `
      <div class="an">
        <div class="an-gust g1"></div>
        <div class="an-gust g2"></div>
        <div class="an-mast"></div>
        <div class="an-blur"></div>
        <div class="an-rotor">
          <div class="an-arm a1"><div class="an-cup"></div></div>
          <div class="an-arm a2"><div class="an-cup"></div></div>
          <div class="an-arm a3"><div class="an-cup"></div></div>
        </div>
        <div class="an-hub"></div>
        <div class="an-dial"><div class="an-dial-needle"></div></div>
        <div class="an-read"></div>
      </div>
    `,
  v2: `
      <div class="anc">
        <div class="anc-gust g1"></div>
        <div class="anc-gust g2"></div>
        <div class="anc-mast"></div>
        <div class="anc-blur"></div>
        <div class="anc-rotor">
          <div class="anc-arm a1"><div class="anc-cup"></div></div>
          <div class="anc-arm a2"><div class="anc-cup"></div></div>
          <div class="anc-arm a3"><div class="anc-cup"></div></div>
        </div>
        <div class="anc-hub"></div>
        <div class="anc-dial"><div class="anc-dial-needle"></div></div>
        <div class="anc-read"></div>
      </div>
    `,
};

class ConceptAnemometer extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${anemometerStyles[version] || anemometerStyles.v2}</style>${anemometerMarkup[version] || anemometerMarkup.v2}`;
  }
}

if (!customElements.get('concept-anemometer')) {
  customElements.define('concept-anemometer', ConceptAnemometer);
}
