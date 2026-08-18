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
      repeating-linear-gradient(60deg, rgba(140, 255, 170, 0.75) 0 1.5px, transparent 1.5px 7px),
      repeating-linear-gradient(-60deg, rgba(140, 255, 170, 0.75) 0 1.5px, transparent 1.5px 7px),
      linear-gradient(180deg, rgba(0, 120, 24, 0.6), rgba(0, 70, 14, 0.8));
    border: 1.5px solid rgba(0, 255, 100, 0.6);
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.2);
    transform-origin: top center;
    animation: kn-flex 0.8s ease-in-out infinite alternate;
  }

  @keyframes kn-flex {
    0% { transform: scaleY(0.92) rotate(-2deg); }
    100% { transform: scaleY(1.14) rotate(2deg); }
  }

  .kn-livestitch {
    position: absolute;
    left: 30px;
    top: 46px;
    width: 56px;
    height: 6px;
    background:
      radial-gradient(circle 3px at 50% 0, rgba(190, 255, 205, 0.95) 60%, transparent) 0 0 / 8px 6px;
    animation: kn-stitch-vibe 0.4s ease-in-out infinite alternate;
  }

  @keyframes kn-stitch-vibe {
    0% { transform: translateY(0); }
    100% { transform: translateY(2px); }
  }

  .kn-needle-l {
    position: absolute;
    left: 8px;
    top: 40px;
    width: 44px;
    height: 3.5px;
    border-radius: 2px;
    background: linear-gradient(90deg, #ffffff, rgba(0, 255, 100, 0.9));
    box-shadow: 0 0 8px #00ff66;
    transform-origin: 100% 50%;
    animation: kn-needle-l-work 0.8s ease-in-out infinite alternate;
  }

  .kn-needle-l::before {
    content: '';
    position: absolute;
    left: -4px;
    top: -1px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
  }

  .kn-needle-r {
    position: absolute;
    right: 6px;
    top: 40px;
    width: 44px;
    height: 3.5px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 255, 100, 0.9), #ffffff);
    box-shadow: 0 0 8px #00ff66;
    transform-origin: 0% 50%;
    animation: kn-needle-r-work 0.8s ease-in-out infinite alternate;
  }

  .kn-needle-r::after {
    content: '';
    position: absolute;
    right: -4px;
    top: -1px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
  }

  @keyframes kn-needle-l-work {
    0% { transform: rotate(-18deg) translate(0, 0); }
    50% { transform: rotate(4deg) translate(6px, -4px); }
    100% { transform: rotate(-8deg) translate(2px, 3px); }
  }

  @keyframes kn-needle-r-work {
    0% { transform: rotate(18deg) translate(0, 0); }
    50% { transform: rotate(-4deg) translate(-8px, -6px); }
    100% { transform: rotate(10deg) translate(-2px, 4px); }
  }

  .kn-yarn {
    position: absolute;
    left: 18px;
    bottom: 14px;
    width: 60px;
    height: 30px;
    border-bottom: 2.5px solid rgba(190, 255, 205, 0.9);
    border-right: 2.5px solid rgba(190, 255, 205, 0.9);
    border-radius: 0 0 40% 0;
    animation: kn-tug 0.8s ease-in-out infinite alternate;
  }

  @keyframes kn-tug {
    0% { transform: scale(1) translateY(0); }
    100% { transform: scale(0.9, 1.1) translateY(-4px); }
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
        rgba(190, 255, 205, 0.9) 0 15deg,
        rgba(0, 180, 40, 0.9) 15deg 30deg);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.6);
    animation: kn-ball-roll 1.6s ease-in-out infinite alternate;
  }

  @keyframes kn-ball-roll {
    0% { transform: translateX(0) rotate(0deg); }
    100% { transform: translateX(18px) rotate(360deg); }
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
    border: 1.5px solid #38bdf8;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8), 0 0 10px rgba(56, 189, 248, 0.4);
    transform-origin: top center;
    animation: knc-flex 0.8s ease-in-out infinite alternate;
  }

  @keyframes knc-flex {
    0% { transform: scaleY(0.92) rotate(-2deg); }
    100% { transform: scaleY(1.14) rotate(2deg); }
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
    animation: knc-stitch-vibe 0.4s ease-in-out infinite alternate;
  }

  @keyframes knc-stitch-vibe {
    0% { transform: translateY(0); }
    100% { transform: translateY(2px); }
  }

  /* Left rosewood needle */
  .knc-needle-l {
    position: absolute;
    left: 8px;
    top: 40px;
    width: 44px;
    height: 3.5px;
    border-radius: 2px;
    background: linear-gradient(90deg, #fef08a 0%, #ca8a04 50%, #78350f 100%);
    box-shadow: 0 0 8px #ca8a04;
    transform-origin: 100% 50%;
    animation: knc-needle-l-work 0.8s ease-in-out infinite alternate;
  }

  .knc-needle-l::before {
    content: '';
    position: absolute;
    left: -4px;
    top: -1px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fef3c7;
    box-shadow: 0 0 4px #ca8a04;
  }

  /* Right rosewood needle */
  .knc-needle-r {
    position: absolute;
    right: 6px;
    top: 40px;
    width: 44px;
    height: 3.5px;
    border-radius: 2px;
    background: linear-gradient(90deg, #78350f 0%, #ca8a04 50%, #fef08a 100%);
    box-shadow: 0 0 8px #ca8a04;
    transform-origin: 0% 50%;
    animation: knc-needle-r-work 0.8s ease-in-out infinite alternate;
  }

  .knc-needle-r::after {
    content: '';
    position: absolute;
    right: -4px;
    top: -1px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fef3c7;
    box-shadow: 0 0 4px #ca8a04;
  }

  @keyframes knc-needle-l-work {
    0% { transform: rotate(-18deg) translate(0, 0); }
    50% { transform: rotate(4deg) translate(6px, -4px); }
    100% { transform: rotate(-8deg) translate(2px, 3px); }
  }

  @keyframes knc-needle-r-work {
    0% { transform: rotate(18deg) translate(0, 0); }
    50% { transform: rotate(-4deg) translate(-8px, -6px); }
    100% { transform: rotate(10deg) translate(-2px, 4px); }
  }

  /* Working yarn strand */
  .knc-yarn {
    position: absolute;
    left: 18px;
    bottom: 14px;
    width: 60px;
    height: 30px;
    border-bottom: 2.5px solid #ec4899;
    border-right: 2.5px solid #ec4899;
    box-shadow: 0 0 6px #f43f5e;
    border-radius: 0 0 40% 0;
    animation: knc-tug 0.8s ease-in-out infinite alternate;
  }

  @keyframes knc-tug {
    0% { transform: scale(1) translateY(0); }
    100% { transform: scale(0.9, 1.1) translateY(-4px); }
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
        #f43f5e 0 15deg,
        #c084fc 15deg 30deg);
    border: 1.5px solid #e879f9;
    box-shadow: 0 0 10px rgba(236, 72, 153, 0.7);
    animation: knc-ball-roll 1.6s ease-in-out infinite alternate;
  }

  @keyframes knc-ball-roll {
    0% { transform: translateX(0) rotate(0deg); }
    100% { transform: translateX(18px) rotate(360deg); }
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
