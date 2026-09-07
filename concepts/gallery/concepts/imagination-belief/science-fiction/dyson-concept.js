const dysonStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dyson {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dyson-star {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    margin: -15px 0 0 -15px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 36%, rgba(245, 255, 246, 0.98) 0 22%, rgba(190, 255, 205, 0.95) 40%, rgba(110, 255, 145, 0.6) 70%, transparent 100%);
    box-shadow: 0 0 22px rgba(170, 255, 190, 0.65);
    animation: dyson-star 3.8s ease-in-out infinite;
  }

  .dyson-orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 1px dashed rgba(0, 204, 0, 0.18);
  }

  .dyson-orbit.ring1 {
    width: 62px;
    height: 62px;
    margin: -31px 0 0 -31px;
    animation: dyson-spin 9s linear infinite;
  }

  .dyson-orbit.ring2 {
    width: 86px;
    height: 86px;
    margin: -43px 0 0 -43px;
    animation: dyson-spin 15s linear infinite reverse;
  }

  .dyson-orbit.ring3 {
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    animation: dyson-spin 23s linear infinite;
  }

  .dyson-panel {
    position: absolute;
    width: 9px;
    height: 5px;
    border-radius: 1px;
    background: linear-gradient(180deg, rgba(170, 255, 190, 0.9), rgba(30, 120, 45, 0.9));
    box-shadow: 0 0 5px rgba(120, 255, 150, 0.5);
  }

  .ring1 .dyson-panel.a { top: -3px; left: 50%; margin-left: -4.5px; }
  .ring1 .dyson-panel.b { bottom: -3px; left: 50%; margin-left: -4.5px; transform: rotate(180deg); }
  .ring1 .dyson-panel.c { top: 50%; left: -5px; margin-top: -2.5px; transform: rotate(-90deg); }

  .ring2 .dyson-panel.a { top: -3px; left: 50%; margin-left: -4.5px; }
  .ring2 .dyson-panel.b { top: 50%; right: -5px; margin-top: -2.5px; transform: rotate(90deg); }
  .ring2 .dyson-panel.c { bottom: 10px; left: 4px; transform: rotate(-135deg); }
  .ring2 .dyson-panel.d { top: 10px; right: 4px; transform: rotate(45deg); }

  .ring3 .dyson-panel.a { top: 50%; left: -5px; margin-top: -2.5px; transform: rotate(-90deg); }
  .ring3 .dyson-panel.b { top: 4px; left: 22px; transform: rotate(-45deg); }
  .ring3 .dyson-panel.c { bottom: -3px; left: 50%; margin-left: -4.5px; transform: rotate(180deg); }
  .ring3 .dyson-panel.d { top: 22px; right: -1px; transform: rotate(65deg); }

  .dyson-shell {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 46px;
    height: 46px;
    margin: -23px 0 0 -23px;
    border-radius: 50%;
    border: 2px solid transparent;
    animation: dyson-shell 7s ease-in-out infinite;
  }

  .dyson-shell.s2 {
    transform: rotate(120deg);
    animation-delay: -2.33s;
  }

  .dyson-shell.s3 {
    transform: rotate(240deg);
    animation-delay: -4.66s;
  }

  @keyframes dyson-star {
    0%, 100% { transform: scale(0.96); }
    50% { transform: scale(1.06); }
  }

  @keyframes dyson-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes dyson-shell {
    0%, 100% { border-top-color: transparent; }
    30% { border-top-color: rgba(140, 255, 170, 0.85); }
    60% { border-top-color: rgba(60, 200, 90, 0.3); }
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

  /* v2: Megastructure Dyson swarm with blazing incandescent golden star,
     cyan Keplerian collector rings, gold solar panels, and assembling magenta megastructure shell */
  .dysonc {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Blazing stellar core */
  .dysonc-star {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    margin: -15px 0 0 -15px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 36%, #ffffff 0 20%, #fef08a 40%, #facc15 65%, #ea580c 100%);
    box-shadow: 0 0 24px #fde047, 0 0 36px #ea580c;
    animation: dysonc-star 3.8s ease-in-out infinite;
  }

  /* Cyan orbital guide rings */
  .dysonc-orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 1px dashed rgba(56, 189, 248, 0.4);
  }

  .dysonc-orbit.ring1 {
    width: 62px;
    height: 62px;
    margin: -31px 0 0 -31px;
    animation: dysonc-spin 9s linear infinite;
  }

  .dysonc-orbit.ring2 {
    width: 86px;
    height: 86px;
    margin: -43px 0 0 -43px;
    animation: dysonc-spin 15s linear infinite reverse;
  }

  .dysonc-orbit.ring3 {
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    animation: dysonc-spin 23s linear infinite;
  }

  /* Gold photovoltaic collector panels */
  .dysonc-panel {
    position: absolute;
    width: 9px;
    height: 5px;
    border-radius: 1px;
    background: linear-gradient(180deg, #fef08a 0%, #facc15 60%, #ca8a04 100%);
    border: 1px solid #ffffff;
    box-shadow: 0 0 6px #fde047;
  }

  .ring1 .dysonc-panel.a { top: -3px; left: 50%; margin-left: -4.5px; }
  .ring1 .dysonc-panel.b { bottom: -3px; left: 50%; margin-left: -4.5px; transform: rotate(180deg); }
  .ring1 .dysonc-panel.c { top: 50%; left: -5px; margin-top: -2.5px; transform: rotate(-90deg); }

  .ring2 .dysonc-panel.a { top: -3px; left: 50%; margin-left: -4.5px; }
  .ring2 .dysonc-panel.b { top: 50%; right: -5px; margin-top: -2.5px; transform: rotate(90deg); }
  .ring2 .dysonc-panel.c { bottom: 10px; left: 4px; transform: rotate(-135deg); }
  .ring2 .dysonc-panel.d { top: 10px; right: 4px; transform: rotate(45deg); }

  .ring3 .dysonc-panel.a { top: 50%; left: -5px; margin-top: -2.5px; transform: rotate(-90deg); }
  .ring3 .dysonc-panel.b { top: 4px; left: 22px; transform: rotate(-45deg); }
  .ring3 .dysonc-panel.c { bottom: -3px; left: 50%; margin-left: -4.5px; transform: rotate(180deg); }
  .ring3 .dysonc-panel.d { top: 22px; right: -1px; transform: rotate(65deg); }

  /* Assembling magenta megastructure shell segments */
  .dysonc-shell {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 46px;
    height: 46px;
    margin: -23px 0 0 -23px;
    border-radius: 50%;
    border: 2px solid transparent;
    animation: dysonc-shell 7s ease-in-out infinite;
  }

  .dysonc-shell.s2 {
    transform: rotate(120deg);
    animation-delay: -2.33s;
  }

  .dysonc-shell.s3 {
    transform: rotate(240deg);
    animation-delay: -4.66s;
  }

  @keyframes dysonc-star {
    0%, 100% { transform: scale(0.96); }
    50% { transform: scale(1.06); }
  }

  @keyframes dysonc-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes dysonc-shell {
    0%, 100% { border-top-color: transparent; }
    30% { border-top-color: #ec4899; filter: drop-shadow(0 0 6px #f43f5e); }
    60% { border-top-color: rgba(192, 132, 252, 0.4); }
  }
  `,
};

const dysonMarkup = {
  v1: `
      <div class="dyson">
        <div class="dyson-star"></div>
        <div class="dyson-shell s1"></div>
        <div class="dyson-shell s2"></div>
        <div class="dyson-shell s3"></div>
        <div class="dyson-orbit ring1">
          <div class="dyson-panel a"></div>
          <div class="dyson-panel b"></div>
          <div class="dyson-panel c"></div>
        </div>
        <div class="dyson-orbit ring2">
          <div class="dyson-panel a"></div>
          <div class="dyson-panel b"></div>
          <div class="dyson-panel c"></div>
          <div class="dyson-panel d"></div>
        </div>
        <div class="dyson-orbit ring3">
          <div class="dyson-panel a"></div>
          <div class="dyson-panel b"></div>
          <div class="dyson-panel c"></div>
          <div class="dyson-panel d"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="dysonc">
        <div class="dysonc-star"></div>
        <div class="dysonc-shell s1"></div>
        <div class="dysonc-shell s2"></div>
        <div class="dysonc-shell s3"></div>
        <div class="dysonc-orbit ring1">
          <div class="dysonc-panel a"></div>
          <div class="dysonc-panel b"></div>
          <div class="dysonc-panel c"></div>
        </div>
        <div class="dysonc-orbit ring2">
          <div class="dysonc-panel a"></div>
          <div class="dysonc-panel b"></div>
          <div class="dysonc-panel c"></div>
          <div class="dysonc-panel d"></div>
        </div>
        <div class="dysonc-orbit ring3">
          <div class="dysonc-panel a"></div>
          <div class="dysonc-panel b"></div>
          <div class="dysonc-panel c"></div>
          <div class="dysonc-panel d"></div>
        </div>
      </div>
    `,
};

class ConceptDyson extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${dysonStyles[version] || dysonStyles.v2}</style>${dysonMarkup[version] || dysonMarkup.v2}`;
  }
}

if (!customElements.get('concept-dyson')) {
  customElements.define('concept-dyson', ConceptDyson);
}
