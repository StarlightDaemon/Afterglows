const titrationStyles = `
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
`;

class ConceptTitration extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${titrationStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-titration')) {
  customElements.define('concept-titration', ConceptTitration);
}
