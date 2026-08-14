const knittingStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .kn {
    width: 116px;
    height: 92px;
    position: relative;
  }

  .kn-fabric {
    position: absolute;
    left: 30px;
    top: 8px;
    width: 56px;
    height: 40px;
    background:
      repeating-linear-gradient(60deg, rgba(140, 255, 170, 0.55) 0 1.5px, transparent 1.5px 7px),
      repeating-linear-gradient(-60deg, rgba(140, 255, 170, 0.55) 0 1.5px, transparent 1.5px 7px),
      linear-gradient(180deg, rgba(0, 120, 24, 0.4), rgba(0, 70, 14, 0.5));
    border: 1px solid rgba(0, 204, 0, 0.4);
    animation: kn-grow 3s linear infinite;
  }

  @keyframes kn-grow {
    to { background-position: 0 8px, 0 8px, 0 0; }
  }

  .kn-livestitch {
    position: absolute;
    left: 30px;
    top: 46px;
    width: 56px;
    height: 6px;
    background:
      radial-gradient(circle 3px at 50% 0, rgba(190, 255, 205, 0.8) 60%, transparent) 0 0 / 8px 6px;
  }

  .kn-needle-l {
    position: absolute;
    left: 8px;
    top: 40px;
    width: 44px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.9), rgba(0, 130, 26, 0.8));
    transform: rotate(-8deg);
    transform-origin: 100% 50%;
  }

  .kn-needle-l::before {
    content: '';
    position: absolute;
    left: -4px;
    top: -1px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.9);
  }

  .kn-needle-r {
    position: absolute;
    right: 6px;
    top: 40px;
    width: 44px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 130, 26, 0.8), rgba(140, 255, 170, 0.9));
    transform-origin: 0% 50%;
    animation: kn-work 3s ease-in-out infinite;
  }

  .kn-needle-r::after {
    content: '';
    position: absolute;
    right: -4px;
    top: -1px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.9);
  }

  @keyframes kn-work {
    0% { transform: rotate(8deg) translateX(0); }
    20% { transform: rotate(2deg) translate(-6px, 3px); }
    40% { transform: rotate(10deg) translate(-2px, -2px); }
    60% { transform: rotate(4deg) translate(-8px, 1px); }
    80% { transform: rotate(8deg) translateX(0); }
    100% { transform: rotate(8deg) translateX(0); }
  }

  .kn-yarn {
    position: absolute;
    left: 18px;
    bottom: 14px;
    width: 60px;
    height: 30px;
    border-bottom: 2px solid rgba(190, 255, 205, 0.7);
    border-right: 2px solid rgba(190, 255, 205, 0.7);
    border-radius: 0 0 40% 0;
    animation: kn-tug 3s ease-in-out infinite;
  }

  @keyframes kn-tug {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.96); }
  }

  .kn-ball {
    position: absolute;
    left: 8px;
    bottom: 6px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background:
      repeating-conic-gradient(from 0deg,
        rgba(190, 255, 205, 0.7) 0 12deg,
        rgba(0, 130, 26, 0.7) 12deg 24deg);
    border: 1px solid rgba(0, 204, 0, 0.5);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    animation: kn-ball 6s linear infinite;
  }

  @keyframes kn-ball {
    to { transform: rotate(360deg); }
  }

  .kn-tail {
    position: absolute;
    left: 20px;
    bottom: 4px;
    width: 8px;
    height: 8px;
    border: 1.5px solid rgba(140, 255, 170, 0.6);
    border-radius: 50%;
    border-top-color: transparent;
    animation: kn-tail 2s ease-in-out infinite;
  }

  @keyframes kn-tail {
    0%, 100% { transform: rotate(-6deg); }
    50% { transform: rotate(8deg); }
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

  /* v2: Rosewood knitting needles with cerulean wool fabric,
     magenta yarn ball, and live-stitch loops */
  .knc {
    width: 116px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Knitted cerulean wool fabric */
  .knc-fabric {
    position: absolute;
    left: 30px;
    top: 8px;
    width: 56px;
    height: 40px;
    background:
      repeating-linear-gradient(60deg, #38bdf8 0 1.5px, transparent 1.5px 7px),
      repeating-linear-gradient(-60deg, #38bdf8 0 1.5px, transparent 1.5px 7px),
      linear-gradient(180deg, #0284c7 0%, #0369a1 100%);
    border: 1.5px solid #0284c7;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    animation: knc-grow 3s linear infinite;
  }

  @keyframes knc-grow {
    to { background-position: 0 8px, 0 8px, 0 0; }
  }

  /* Live-stitch loops along needles */
  .knc-livestitch {
    position: absolute;
    left: 30px;
    top: 46px;
    width: 56px;
    height: 6px;
    background:
      radial-gradient(circle 3px at 50% 0, #bae6fd 60%, transparent) 0 0 / 8px 6px;
  }

  /* Left rosewood needle */
  .knc-needle-l {
    position: absolute;
    left: 8px;
    top: 40px;
    width: 44px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #ca8a04 0%, #78350f 100%);
    border: 0.5px solid #d97706;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    transform: rotate(-8deg);
    transform-origin: 100% 50%;
  }

  .knc-needle-l::before {
    content: '';
    position: absolute;
    left: -4px;
    top: -1px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fef3c7;
    box-shadow: 0 0 2px #ca8a04;
  }

  /* Right rosewood needle */
  .knc-needle-r {
    position: absolute;
    right: 6px;
    top: 40px;
    width: 44px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #78350f 0%, #ca8a04 100%);
    border: 0.5px solid #d97706;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    transform-origin: 0% 50%;
    animation: knc-work 3s ease-in-out infinite;
  }

  .knc-needle-r::after {
    content: '';
    position: absolute;
    right: -4px;
    top: -1px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fef3c7;
    box-shadow: 0 0 2px #ca8a04;
  }

  @keyframes knc-work {
    0% { transform: rotate(8deg) translateX(0); }
    20% { transform: rotate(2deg) translate(-6px, 3px); }
    40% { transform: rotate(10deg) translate(-2px, -2px); }
    60% { transform: rotate(4deg) translate(-8px, 1px); }
    80% { transform: rotate(8deg) translateX(0); }
    100% { transform: rotate(8deg) translateX(0); }
  }

  /* Working yarn strand */
  .knc-yarn {
    position: absolute;
    left: 18px;
    bottom: 14px;
    width: 60px;
    height: 30px;
    border-bottom: 2px solid #ec4899;
    border-right: 2px solid #ec4899;
    box-shadow: 0 0 4px #f43f5e;
    border-radius: 0 0 40% 0;
    animation: knc-tug 3s ease-in-out infinite;
  }

  @keyframes knc-tug {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.96); }
  }

  /* Magenta-violet yarn ball */
  .knc-ball {
    position: absolute;
    left: 8px;
    bottom: 6px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background:
      repeating-conic-gradient(from 0deg,
        #f43f5e 0 12deg,
        #c084fc 12deg 24deg);
    border: 1px solid #e879f9;
    box-shadow: 0 0 8px rgba(236, 72, 153, 0.5);
    animation: knc-ball 6s linear infinite;
  }

  @keyframes knc-ball {
    to { transform: rotate(360deg); }
  }

  /* Wiggling tail yarn */
  .knc-tail {
    position: absolute;
    left: 20px;
    bottom: 4px;
    width: 8px;
    height: 8px;
    border: 1.5px solid #ec4899;
    border-radius: 50%;
    border-top-color: transparent;
    animation: knc-tail 2s ease-in-out infinite;
  }

  @keyframes knc-tail {
    0%, 100% { transform: rotate(-6deg); }
    50% { transform: rotate(8deg); }
  }
  `,
};

const knittingMarkup = {
  v1: `
      <div class="kn">
        <div class="kn-fabric"></div>
        <div class="kn-livestitch"></div>
        <div class="kn-yarn"></div>
        <div class="kn-needle-l"></div>
        <div class="kn-needle-r"></div>
        <div class="kn-ball"></div>
        <div class="kn-tail"></div>
      </div>
    `,
  v2: `
      <div class="knc">
        <div class="knc-fabric"></div>
        <div class="knc-livestitch"></div>
        <div class="knc-yarn"></div>
        <div class="knc-needle-l"></div>
        <div class="knc-needle-r"></div>
        <div class="knc-ball"></div>
        <div class="knc-tail"></div>
      </div>
    `,
};

class ConceptKnitting extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${knittingStyles[version] || knittingStyles.v2}</style>${knittingMarkup[version] || knittingMarkup.v2}`;
  }
}

if (!customElements.get('concept-knitting')) {
  customElements.define('concept-knitting', ConceptKnitting);
}
