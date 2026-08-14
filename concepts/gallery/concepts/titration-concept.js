const titrationStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A titration to the endpoint: titrant drips from the burette, the
     swirled flask stays clear through most of the run, then flushes
     to a held colour at the endpoint - the drip stops and the level
     mark is read. */
  .ti {
    width: 100px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Stand rod + clamp. */
  .ti-rod {
    position: absolute;
    left: 14px;
    top: 6px;
    width: 3px;
    height: 84px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.6), rgba(0, 90, 18, 0.7));
  }

  .ti-clamp {
    position: absolute;
    left: 14px;
    top: 24px;
    width: 30px;
    height: 4px;
    background: rgba(140, 255, 170, 0.8);
  }

  /* Burette: tall graduated tube; the titrant level falls as it
     dispenses. */
  .ti-burette {
    position: absolute;
    left: 40px;
    top: 6px;
    width: 12px;
    height: 54px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 3px 3px 0 0;
    background: rgba(0, 20, 4, 0.4);
    overflow: hidden;
  }

  .ti-titrant {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 44px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.5), rgba(0, 130, 26, 0.65));
    animation: ti-dispense 8s linear infinite;
  }

  @keyframes ti-dispense {
    0% { height: 46px; }
    /* Falls steadily until the endpoint at ~66%. */
    66% { height: 20px; }
    72%, 92% { height: 20px; }
    96%, 100% { height: 46px; }
  }

  /* Graduation ticks. */
  .ti-grad {
    position: absolute;
    left: 40px;
    top: 8px;
    width: 6px;
    height: 48px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.6) 0 1px,
      transparent 1px 5px);
    z-index: 2;
  }

  /* Stopcock. */
  .ti-stopcock {
    position: absolute;
    left: 42px;
    top: 60px;
    width: 8px;
    height: 6px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .ti-tip {
    position: absolute;
    left: 45px;
    top: 66px;
    width: 2px;
    height: 6px;
    background: rgba(0, 204, 0, 0.7);
  }

  /* Drops falling until the endpoint. */
  .ti-drop {
    position: absolute;
    left: 45px;
    top: 72px;
    width: 3px;
    height: 5px;
    border-radius: 0 0 50% 50%;
    background: rgba(190, 255, 205, 0.9);
    animation: ti-drop 0.9s ease-in infinite, ti-dropgate 8s steps(1) infinite;
  }

  @keyframes ti-drop {
    0% { transform: translateY(0); opacity: 0; }
    15% { opacity: 1; }
    100% { transform: translateY(12px); opacity: 0.3; }
  }

  @keyframes ti-dropgate {
    0%, 66% { visibility: visible; }
    68%, 100% { visibility: hidden; }
  }

  /* Erlenmeyer flask, swirling. */
  .ti-flask {
    position: absolute;
    left: 30px;
    bottom: 8px;
    width: 40px;
    height: 30px;
    clip-path: polygon(38% 0, 62% 0, 100% 100%, 0 100%);
    background: rgba(0, 20, 4, 0.3);
    border-bottom: 2px solid var(--accent, #00cc00);
    animation: ti-swirl 1.4s ease-in-out infinite;
    transform-origin: 50% 100%;
    overflow: hidden;
  }

  @keyframes ti-swirl {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
  }

  /* Flask contents: clear -> endpoint colour. */
  .ti-contents {
    position: absolute;
    left: -20px;
    right: -20px;
    bottom: 0;
    height: 16px;
    animation: ti-color 8s steps(1) infinite;
  }

  @keyframes ti-color {
    0%, 60% { background: linear-gradient(180deg, rgba(0, 90, 18, 0.35), rgba(0, 60, 12, 0.55)); }
    /* Flashes of pink at each near-endpoint drop, then holds. */
    62% { background: linear-gradient(180deg, rgba(190, 255, 205, 0.4), rgba(0, 120, 24, 0.6)); }
    64% { background: linear-gradient(180deg, rgba(0, 90, 18, 0.35), rgba(0, 60, 12, 0.55)); }
    66%, 92% { background: linear-gradient(180deg, rgba(214, 255, 224, 0.6), rgba(0, 150, 30, 0.75)); }
    96%, 100% { background: linear-gradient(180deg, rgba(0, 90, 18, 0.35), rgba(0, 60, 12, 0.55)); }
  }

  /* Endpoint label. */
  .ti-read {
    position: absolute;
    right: 0;
    top: 40px;
    font-size: 8px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 4px rgba(0, 204, 0, 0.7);
  }

  .ti-read::before {
    content: '24.0 mL';
    animation: ti-read 8s steps(1) infinite;
  }

  @keyframes ti-read {
    0% { content: '24.0 mL'; }
    33% { content: '19.5 mL'; }
    55% { content: '17.2 mL'; }
    66% { content: 'END 16.8'; }
    92% { content: 'END 16.8'; }
    96% { content: '24.0 mL'; }
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

  /* v2: Analytical chemistry titration: clear alkaline titrant dispensing from
     a precision graduated borosilicate burette into a swirled Erlenmeyer flask,
     triggering a classic phenolphthalein colorimetric shift to vivid hot pink/magenta
     at the equivalence endpoint. */
  .tic {
    width: 100px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Stainless steel support stand */
  .tic-rod {
    position: absolute;
    left: 14px;
    top: 6px;
    width: 3px;
    height: 84px;
    background: linear-gradient(90deg, #64748b, #cbd5e1 50%, #475569 100%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .tic-clamp {
    position: absolute;
    left: 14px;
    top: 24px;
    width: 30px;
    height: 4px;
    background: #334155;
    border-radius: 1px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  }

  /* Clear borosilicate glass burette */
  .tic-burette {
    position: absolute;
    left: 40px;
    top: 6px;
    width: 12px;
    height: 54px;
    border: 2px solid rgba(200, 230, 255, 0.85);
    border-radius: 3px 3px 0 0;
    background: rgba(15, 23, 42, 0.5);
    box-shadow: inset 0 0 6px rgba(0, 180, 255, 0.2);
    overflow: hidden;
  }

  .tic-titrant {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 44px;
    background: linear-gradient(180deg, rgba(224, 242, 254, 0.6), rgba(186, 230, 253, 0.75));
    animation: tic-dispense 8s linear infinite;
  }

  @keyframes tic-dispense {
    0% { height: 46px; }
    66% { height: 20px; }
    72%, 92% { height: 20px; }
    96%, 100% { height: 46px; }
  }

  /* Enamel graduation scale */
  .tic-grad {
    position: absolute;
    left: 40px;
    top: 8px;
    width: 6px;
    height: 48px;
    background: repeating-linear-gradient(180deg,
      #ffffff 0 1px,
      transparent 1px 5px);
    z-index: 2;
    opacity: 0.8;
  }

  /* Chemical-resistant amber PTFE stopcock */
  .tic-stopcock {
    position: absolute;
    left: 42px;
    top: 60px;
    width: 8px;
    height: 6px;
    border-radius: 2px;
    background: linear-gradient(135deg, #f97316, #c2410c);
    box-shadow: 0 0 4px rgba(249, 115, 22, 0.5);
  }

  .tic-tip {
    position: absolute;
    left: 45px;
    top: 66px;
    width: 2px;
    height: 6px;
    background: rgba(200, 230, 255, 0.85);
  }

  /* Titrant droplet delivery */
  .tic-drop {
    position: absolute;
    left: 45px;
    top: 72px;
    width: 3px;
    height: 5px;
    border-radius: 0 0 50% 50%;
    background: #e0f2fe;
    box-shadow: 0 0 4px rgba(186, 230, 253, 0.8);
    animation: tic-drop 0.9s ease-in infinite, tic-dropgate 8s steps(1) infinite;
  }

  @keyframes tic-drop {
    0% { transform: translateY(0); opacity: 0; }
    15% { opacity: 1; }
    100% { transform: translateY(12px); opacity: 0.3; }
  }

  @keyframes tic-dropgate {
    0%, 66% { visibility: visible; }
    68%, 100% { visibility: hidden; }
  }

  /* Conical Erlenmeyer flask */
  .tic-flask {
    position: absolute;
    left: 30px;
    bottom: 8px;
    width: 40px;
    height: 30px;
    clip-path: polygon(38% 0, 62% 0, 100% 100%, 0 100%);
    background: rgba(15, 23, 42, 0.4);
    border-bottom: 2px solid rgba(200, 230, 255, 0.85);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    animation: tic-swirl 1.4s ease-in-out infinite;
    transform-origin: 50% 100%;
    overflow: hidden;
  }

  @keyframes tic-swirl {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
  }

  /* Phenolphthalein pH indicator transition */
  .tic-contents {
    position: absolute;
    left: -20px;
    right: -20px;
    bottom: 0;
    height: 16px;
    animation: tic-color 8s steps(1) infinite;
  }

  @keyframes tic-color {
    0%, 60% {
      background: linear-gradient(180deg, rgba(224, 242, 254, 0.35), rgba(186, 230, 253, 0.5));
      box-shadow: none;
    }
    62% {
      background: linear-gradient(180deg, rgba(251, 113, 133, 0.6), rgba(244, 63, 94, 0.7));
      box-shadow: 0 0 6px rgba(244, 63, 94, 0.4);
    }
    64% {
      background: linear-gradient(180deg, rgba(224, 242, 254, 0.35), rgba(186, 230, 253, 0.5));
      box-shadow: none;
    }
    66%, 92% {
      background: linear-gradient(180deg, #ff2d87 0%, #e11d48 65%, #9f1239 100%);
      box-shadow: 0 0 12px rgba(255, 45, 135, 0.85);
    }
    96%, 100% {
      background: linear-gradient(180deg, rgba(224, 242, 254, 0.35), rgba(186, 230, 253, 0.5));
      box-shadow: none;
    }
  }

  /* Titration volume readout */
  .tic-read {
    position: absolute;
    right: 0;
    top: 40px;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    animation: tic-read-col 8s steps(1) infinite;
  }

  .tic-read::before {
    content: '24.0 mL';
    animation: tic-read-txt 8s steps(1) infinite;
  }

  @keyframes tic-read-txt {
    0% { content: '24.0 mL'; }
    33% { content: '19.5 mL'; }
    55% { content: '17.2 mL'; }
    66% { content: 'END 16.8'; }
    92% { content: 'END 16.8'; }
    96% { content: '24.0 mL'; }
  }

  @keyframes tic-read-col {
    0%, 65% { color: #bae6fd; text-shadow: 0 0 4px rgba(56, 189, 248, 0.8); }
    66%, 92% { color: #ff66aa; text-shadow: 0 0 6px rgba(255, 45, 135, 0.9); }
    96%, 100% { color: #bae6fd; text-shadow: 0 0 4px rgba(56, 189, 248, 0.8); }
  }
  `,
};

const titrationMarkup = {
  v1: `
    <div class="ti">
      <div class="ti-rod"></div>
      <div class="ti-clamp"></div>
      <div class="ti-burette"><div class="ti-titrant"></div></div>
      <div class="ti-grad"></div>
      <div class="ti-stopcock"></div>
      <div class="ti-tip"></div>
      <div class="ti-drop"></div>
      <div class="ti-flask"><div class="ti-contents"></div></div>
      <div class="ti-read"></div>
    </div>
  `,
  v2: `
    <div class="tic">
      <div class="tic-rod"></div>
      <div class="tic-clamp"></div>
      <div class="tic-burette"><div class="tic-titrant"></div></div>
      <div class="tic-grad"></div>
      <div class="tic-stopcock"></div>
      <div class="tic-tip"></div>
      <div class="tic-drop"></div>
      <div class="tic-flask"><div class="tic-contents"></div></div>
      <div class="tic-read"></div>
    </div>
  `,
};

class ConceptTitration extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${titrationStyles[version] || titrationStyles.v2}</style>${titrationMarkup[version] || titrationMarkup.v2}`;
  }
}

if (!customElements.get('concept-titration')) {
  customElements.define('concept-titration', ConceptTitration);
}
