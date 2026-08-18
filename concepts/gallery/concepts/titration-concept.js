const titrationStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

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
    background: linear-gradient(180deg, #ffffff, #00ff66 70%);
    box-shadow: 0 0 6px #00ff66;
  }

  .ti-clamp {
    position: absolute;
    left: 14px;
    top: 24px;
    width: 30px;
    height: 4px;
    background: #00ff66;
    border-radius: 1px;
  }

  /* Burette */
  .ti-burette {
    position: absolute;
    left: 40px;
    top: 6px;
    width: 12px;
    height: 54px;
    border: 2px solid #00ff66;
    border-radius: 3px 3px 0 0;
    background: rgba(0, 20, 4, 0.6);
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.3);
    overflow: hidden;
  }

  .ti-titrant {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 44px;
    background: linear-gradient(180deg, #ffffff, #00ff66 70%);
    animation: ti-dispense 1.4s ease-in-out infinite alternate;
  }

  @keyframes ti-dispense {
    0% { height: 46px; }
    100% { height: 18px; }
  }

  /* Graduation ticks. */
  .ti-grad {
    position: absolute;
    left: 40px;
    top: 8px;
    width: 6px;
    height: 48px;
    background: repeating-linear-gradient(180deg,
      #00ff66 0 1px,
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
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
  }

  .ti-tip {
    position: absolute;
    left: 45px;
    top: 66px;
    width: 2px;
    height: 6px;
    background: #00ff66;
  }

  /* Drops falling continuously */
  .ti-drop {
    position: absolute;
    left: 44px;
    top: 72px;
    width: 4px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: ti-drop 0.6s linear infinite;
  }

  @keyframes ti-drop {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(18px); opacity: 0; }
  }

  /* Erlenmeyer flask, swirling dynamically */
  .ti-flask {
    position: absolute;
    left: 30px;
    bottom: 8px;
    width: 40px;
    height: 30px;
    clip-path: polygon(38% 0, 62% 0, 100% 100%, 0 100%);
    background: rgba(0, 20, 4, 0.5);
    border-bottom: 2.5px solid #00ff66;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
    animation: ti-swirl 1.2s ease-in-out infinite alternate;
    transform-origin: 50% 100%;
    overflow: hidden;
  }

  @keyframes ti-swirl {
    0% { transform: rotate(-10deg) translateX(-4px); }
    100% { transform: rotate(10deg) translateX(4px); }
  }

  /* Flask contents: sloshing */
  .ti-contents {
    position: absolute;
    left: -20px;
    right: -20px;
    bottom: 0;
    height: 18px;
    background: linear-gradient(180deg, #ffffff, #00ff66 70%);
    box-shadow: 0 0 8px #00ff66;
    animation: ti-contents-slosh 1.2s ease-in-out infinite alternate;
  }

  @keyframes ti-contents-slosh {
    0% { transform: skewX(-14deg) scaleY(0.85); }
    100% { transform: skewX(14deg) scaleY(1.15); }
  }

  .ti-read {
    position: absolute;
    right: 0;
    top: 40px;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #00ff66;
    text-shadow: 0 0 4px #00ff66;
  }

  .ti-read::before {
    content: 'END 16.8';
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

  /* v2: Analytical chemistry titration */
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
    background: linear-gradient(180deg, rgba(224, 242, 254, 0.8), rgba(186, 230, 253, 0.9));
    animation: tic-dispense 1.4s ease-in-out infinite alternate;
  }

  @keyframes tic-dispense {
    0% { height: 46px; }
    100% { height: 18px; }
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
    left: 44px;
    top: 72px;
    width: 4px;
    height: 6px;
    border-radius: 50%;
    background: #e0f2fe;
    box-shadow: 0 0 6px rgba(186, 230, 253, 0.9);
    animation: tic-drop 0.6s linear infinite;
  }

  @keyframes tic-drop {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(18px); opacity: 0; }
  }

  /* Conical Erlenmeyer flask */
  .tic-flask {
    position: absolute;
    left: 30px;
    bottom: 8px;
    width: 40px;
    height: 30px;
    clip-path: polygon(38% 0, 62% 0, 100% 100%, 0 100%);
    background: rgba(15, 23, 42, 0.5);
    border-bottom: 2.5px solid rgba(200, 230, 255, 0.85);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
    animation: tic-swirl 1.2s ease-in-out infinite alternate;
    transform-origin: 50% 100%;
    overflow: hidden;
  }

  @keyframes tic-swirl {
    0% { transform: rotate(-10deg) translateX(-4px); }
    100% { transform: rotate(10deg) translateX(4px); }
  }

  /* Phenolphthalein pH indicator transition */
  .tic-contents {
    position: absolute;
    left: -20px;
    right: -20px;
    bottom: 0;
    height: 18px;
    background: linear-gradient(180deg, #ff2d87 0%, #e11d48 65%, #9f1239 100%);
    box-shadow: 0 0 12px rgba(255, 45, 135, 0.9);
    animation: tic-contents-slosh 1.2s ease-in-out infinite alternate;
  }

  @keyframes tic-contents-slosh {
    0% { transform: skewX(-14deg) scaleY(0.85); }
    100% { transform: skewX(14deg) scaleY(1.15); }
  }

  /* Titration volume readout */
  .tic-read {
    position: absolute;
    right: 0;
    top: 40px;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #ff66aa;
    text-shadow: 0 0 6px rgba(255, 45, 135, 0.9);
  }

  .tic-read::before {
    content: 'END 16.8';
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
