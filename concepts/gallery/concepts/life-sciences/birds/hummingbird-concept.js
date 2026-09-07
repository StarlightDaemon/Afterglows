// Hummingbird: v1 and v2 preserved.
// v3 adds authentic Ruby-throated Hummingbird colorization:
// iridescent emerald back, radiant ruby throat gorget, needle bill,
// gossamer wings with sky-blue sheen, and vivid scarlet-fuchsia trumpet flower with golden nectar sparkle.
const hummingbirdStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hb {
    width: 116px;
    height: 88px;
    position: relative;
  }

  .hb-flower {
    position: absolute;
    right: 6px;
    top: 30px;
    width: 26px;
    height: 22px;
    transform-origin: 100% 100%;
    animation: hb-nod 4s ease-in-out infinite;
  }

  .hb-trumpet {
    position: absolute;
    left: 0;
    top: 0;
    width: 26px;
    height: 18px;
    clip-path: polygon(0 30%, 60% 0, 100% 20%, 100% 80%, 60% 100%, 0 70%);
    background: radial-gradient(ellipse at 20% 50%,
      rgba(0, 40, 8, 0.9),
      rgba(0, 150, 30, 0.6) 55%,
      rgba(190, 255, 205, 0.7));
    border: 1px solid rgba(140, 255, 170, 0.6);
  }

  .hb-flower-stem {
    position: absolute;
    left: 22px;
    top: 14px;
    width: 2px;
    height: 30px;
    background: rgba(0, 110, 22, 0.75);
  }

  @keyframes hb-nod {
    0%, 30%, 100% { transform: rotate(0deg); }
    40% { transform: rotate(4deg); }
    50% { transform: rotate(1deg); }
    60% { transform: rotate(3deg); }
    70% { transform: rotate(0deg); }
  }

  .hb-bird {
    position: absolute;
    left: 0;
    top: 0;
    width: 34px;
    height: 20px;
    animation: hb-flit 4s ease-in-out infinite;
  }

  @keyframes hb-flit {
    0% { transform: translate(18px, 44px); }
    28% { transform: translate(52px, 30px); }
    38%, 62% { transform: translate(56px, 30px); }
    76% { transform: translate(30px, 20px); }
    100% { transform: translate(18px, 44px); }
  }

  .hb-hover {
    position: absolute;
    inset: 0;
    animation: hb-bob 0.3s ease-in-out infinite;
  }

  @keyframes hb-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }

  .hb-body {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 18px;
    height: 12px;
    border-radius: 60% 40% 50% 50%;
    background: radial-gradient(circle at 40% 35%,
      rgba(214, 255, 224, 0.9),
      rgba(0, 170, 34, 0.8) 55%,
      rgba(0, 90, 18, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .hb-head {
    position: absolute;
    left: 16px;
    top: 3px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.85), rgba(0, 120, 24, 0.9));
  }

  .hb-head::after {
    content: '';
    position: absolute;
    left: 1px;
    top: 2px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #041a0a;
  }

  .hb-bill {
    position: absolute;
    left: 23px;
    top: 6px;
    width: 14px;
    height: 1.5px;
    background: rgba(214, 255, 224, 0.9);
  }

  .hb-tail {
    position: absolute;
    left: -4px;
    top: 6px;
    width: 10px;
    height: 8px;
    clip-path: polygon(100% 0, 0 30%, 40% 50%, 0 70%, 100% 100%);
    background: rgba(0, 140, 28, 0.75);
    animation: hb-tail 0.6s ease-in-out infinite;
    transform-origin: 100% 50%;
  }

  @keyframes hb-tail {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(4deg); }
  }

  .hb-wing {
    position: absolute;
    top: -2px;
    width: 22px;
    height: 16px;
    border-radius: 50% 50% 60% 40%;
    background: rgba(140, 255, 170, 0.28);
    border: 1px solid rgba(140, 255, 170, 0.45);
    filter: blur(0.6px);
    transform-origin: 10% 60%;
  }

  .hb-wing.top { left: 6px; animation: hb-wingtop 0.09s steps(2) infinite; }
  .hb-wing.bot { left: 6px; top: 6px; animation: hb-wingbot 0.09s steps(2) infinite; }

  @keyframes hb-wingtop {
    0% { transform: rotate(-28deg) scaleX(1); }
    100% { transform: rotate(-6deg) scaleX(0.7); }
  }

  @keyframes hb-wingbot {
    0% { transform: rotate(28deg) scaleX(1); }
    100% { transform: rotate(6deg) scaleX(0.7); }
  }

  .hb-sip {
    position: absolute;
    right: 26px;
    top: 38px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.9);
    opacity: 0;
    animation: hb-sip 4s infinite;
  }

  @keyframes hb-sip {
    0%, 36% { opacity: 0; transform: scale(0.5); }
    44% { opacity: 1; transform: scale(1.3); }
    56% { opacity: 0.5; }
    64%, 100% { opacity: 0; }
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

  .hb {
    width: 116px;
    height: 88px;
    position: relative;
  }

  .hb-flower {
    position: absolute;
    right: 6px;
    top: 30px;
    width: 26px;
    height: 22px;
    transform-origin: 100% 100%;
    animation: hb-nod 4s ease-in-out infinite;
  }

  .hb-trumpet {
    position: absolute;
    left: 0;
    top: 0;
    width: 26px;
    height: 18px;
    border-radius: 45% 60% 60% 45% / 50% 60% 60% 50%;
    background: radial-gradient(ellipse at 12% 50%,
      rgba(0, 30, 6, 0.95) 0 22%,
      rgba(0, 150, 30, 0.7) 55%,
      rgba(190, 255, 205, 0.8));
    border: 1px solid rgba(140, 255, 170, 0.7);
  }

  .hb-trumpet::before,
  .hb-trumpet::after {
    content: '';
    position: absolute;
    left: -3px;
    width: 8px;
    height: 6px;
    border-radius: 60% 40% 50% 50%;
    background: rgba(160, 255, 185, 0.85);
  }

  .hb-trumpet::before { top: -2px; transform: rotate(-30deg); }
  .hb-trumpet::after { bottom: -2px; transform: rotate(30deg); }

  .hb-flower-stem {
    position: absolute;
    left: 22px;
    top: 14px;
    width: 2px;
    height: 46px;
    background: rgba(0, 110, 22, 0.75);
  }

  @keyframes hb-nod {
    0%, 30%, 100% { transform: rotate(0deg); }
    40% { transform: rotate(4deg); }
    50% { transform: rotate(1deg); }
    60% { transform: rotate(3deg); }
    70% { transform: rotate(0deg); }
  }

  .hb-bird {
    position: absolute;
    left: 0;
    top: 0;
    width: 34px;
    height: 20px;
    animation: hb-flit 4s ease-in-out infinite;
  }

  @keyframes hb-flit {
    0% { transform: translate(18px, 44px); }
    28% { transform: translate(52px, 30px); }
    38%, 62% { transform: translate(56px, 30px); }
    76% { transform: translate(30px, 20px); }
    100% { transform: translate(18px, 44px); }
  }

  .hb-hover {
    position: absolute;
    inset: 0;
    animation: hb-bob 0.3s ease-in-out infinite;
  }

  @keyframes hb-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }

  .hb-body {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 18px;
    height: 12px;
    border-radius: 60% 40% 50% 50%;
    background: radial-gradient(circle at 40% 35%,
      rgba(214, 255, 224, 0.9),
      rgba(0, 170, 34, 0.8) 55%,
      rgba(0, 90, 18, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .hb-head {
    position: absolute;
    left: 16px;
    top: 3px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.85), rgba(0, 120, 24, 0.9));
  }

  .hb-head::after {
    content: '';
    position: absolute;
    left: 1px;
    top: 2px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #041a0a;
  }

  .hb-bill {
    position: absolute;
    left: 23px;
    top: 6px;
    width: 14px;
    height: 1.5px;
    background: rgba(214, 255, 224, 0.9);
  }

  .hb-tail {
    position: absolute;
    left: -4px;
    top: 6px;
    width: 10px;
    height: 8px;
    clip-path: polygon(100% 0, 0 30%, 40% 50%, 0 70%, 100% 100%);
    background: rgba(0, 140, 28, 0.75);
    animation: hb-tail 0.6s ease-in-out infinite;
    transform-origin: 100% 50%;
  }

  @keyframes hb-tail {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(4deg); }
  }

  .hb-wing {
    position: absolute;
    top: -2px;
    width: 22px;
    height: 16px;
    border-radius: 50% 50% 60% 40%;
    background: rgba(140, 255, 170, 0.28);
    border: 1px solid rgba(140, 255, 170, 0.45);
    filter: blur(0.6px);
    transform-origin: 10% 60%;
  }

  .hb-wing.top {
    left: 7px;
    top: -8px;
    animation: hb-wingtop 0.14s ease-in-out infinite alternate;
  }

  .hb-wing.bot {
    left: 7px;
    top: 2px;
    opacity: 0.45;
    animation: hb-wingbot 0.14s ease-in-out infinite alternate-reverse;
  }

  @keyframes hb-wingtop {
    0% { transform: rotate(-62deg) scaleX(0.9); }
    100% { transform: rotate(4deg) scaleX(0.72); }
  }

  @keyframes hb-wingbot {
    0% { transform: rotate(38deg) scaleX(0.85); }
    100% { transform: rotate(-6deg) scaleX(0.7); }
  }

  .hb-sip {
    position: absolute;
    right: 26px;
    top: 38px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.9);
    opacity: 0;
    animation: hb-sip 4s infinite;
  }

  @keyframes hb-sip {
    0%, 36% { opacity: 0; transform: scale(0.5); }
    44% { opacity: 1; transform: scale(1.3); }
    56% { opacity: 0.5; }
    64%, 100% { opacity: 0; }
  }
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Ruby-throated Hummingbird with iridescent emerald green body,
     flashing ruby gorget, sky-blue gossamer wings, and vivid scarlet-fuchsia trumpet flower. */
  .hbc {
    width: 116px;
    height: 88px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Scarlet-fuchsia trumpet flower */
  .hbc-flower {
    position: absolute;
    right: 6px;
    top: 30px;
    width: 26px;
    height: 22px;
    transform-origin: 100% 100%;
    animation: hbc-nod 4s ease-in-out infinite;
  }

  .hbc-trumpet {
    position: absolute;
    left: 0;
    top: 0;
    width: 26px;
    height: 18px;
    border-radius: 45% 60% 60% 45% / 50% 60% 60% 50%;
    background: radial-gradient(ellipse at 12% 50%,
      #831843 0 22%,
      #db2777 55%,
      #f43f5e 100%);
    border: 1px solid #fda4af;
    box-shadow: 0 0 10px rgba(244, 63, 94, 0.5);
  }

  .hbc-trumpet::before,
  .hbc-trumpet::after {
    content: '';
    position: absolute;
    left: -3px;
    width: 8px;
    height: 6px;
    border-radius: 60% 40% 50% 50%;
    background: #fb7185;
  }

  .hbc-trumpet::before { top: -2px; transform: rotate(-30deg); }
  .hbc-trumpet::after { bottom: -2px; transform: rotate(30deg); }

  .hbc-flower-stem {
    position: absolute;
    left: 22px;
    top: 14px;
    width: 2.5px;
    height: 46px;
    background: linear-gradient(180deg, #15803d 0%, #14532d 100%);
  }

  @keyframes hbc-nod {
    0%, 30%, 100% { transform: rotate(0deg); }
    40% { transform: rotate(4deg); }
    50% { transform: rotate(1deg); }
    60% { transform: rotate(3deg); }
    70% { transform: rotate(0deg); }
  }

  /* Hummingbird flight path */
  .hbc-bird {
    position: absolute;
    left: 0;
    top: 0;
    width: 34px;
    height: 20px;
    animation: hbc-flit 4s ease-in-out infinite;
  }

  @keyframes hbc-flit {
    0% { transform: translate(18px, 44px); }
    28% { transform: translate(52px, 30px); }
    38%, 62% { transform: translate(56px, 30px); }
    76% { transform: translate(30px, 20px); }
    100% { transform: translate(18px, 44px); }
  }

  .hbc-hover {
    position: absolute;
    inset: 0;
    animation: hbc-bob 0.3s ease-in-out infinite;
  }

  @keyframes hbc-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }

  /* Iridescent emerald body */
  .hbc-body {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 18px;
    height: 12px;
    border-radius: 60% 40% 50% 50%;
    background: radial-gradient(circle at 40% 35%, #86efac 0%, #16a34a 55%, #064e3b 100%);
    border: 1px solid #4ade80;
    box-shadow: 0 0 6px rgba(74, 222, 128, 0.4);
  }

  /* Crown and glowing ruby gorget */
  .hbc-head {
    position: absolute;
    left: 16px;
    top: 3px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #86efac 0%, #15803d 70%);
  }

  /* Ruby Gorget throat bib */
  .hbc-head::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 4px;
    width: 5px;
    height: 4px;
    border-radius: 40% 60% 60% 40%;
    background: #e11d48;
    box-shadow: 0 0 8px #ff0055, 0 0 14px rgba(255, 0, 85, 0.6);
  }

  /* Eye */
  .hbc-head::after {
    content: '';
    position: absolute;
    left: 1px;
    top: 2px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #09090b;
  }

  /* Jet-black needle bill */
  .hbc-bill {
    position: absolute;
    left: 23px;
    top: 6px;
    width: 14px;
    height: 1.5px;
    background: #18181b;
  }

  /* Dark tail */
  .hbc-tail {
    position: absolute;
    left: -4px;
    top: 6px;
    width: 10px;
    height: 8px;
    clip-path: polygon(100% 0, 0 30%, 40% 50%, 0 70%, 100% 100%);
    background: #064e3b;
    animation: hbc-tail 0.6s ease-in-out infinite;
    transform-origin: 100% 50%;
  }

  @keyframes hbc-tail {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(4deg); }
  }

  /* Gossamer wings with iridescent sky-blue highlight blur */
  .hbc-wing {
    position: absolute;
    top: -2px;
    width: 22px;
    height: 16px;
    border-radius: 50% 50% 60% 40%;
    background: rgba(186, 230, 253, 0.4);
    border: 1px solid rgba(125, 211, 252, 0.6);
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.5);
    filter: blur(0.6px);
    transform-origin: 10% 60%;
  }

  .hbc-wing.top {
    left: 7px;
    top: -8px;
    animation: hbc-wingtop 0.14s ease-in-out infinite alternate;
  }

  .hbc-wing.bot {
    left: 7px;
    top: 2px;
    opacity: 0.5;
    animation: hbc-wingbot 0.14s ease-in-out infinite alternate-reverse;
  }

  @keyframes hbc-wingtop {
    0% { transform: rotate(-62deg) scaleX(0.9); }
    100% { transform: rotate(4deg) scaleX(0.72); }
  }

  @keyframes hbc-wingbot {
    0% { transform: rotate(38deg) scaleX(0.85); }
    100% { transform: rotate(-6deg) scaleX(0.7); }
  }

  /* Golden nectar sparkle */
  .hbc-sip {
    position: absolute;
    right: 26px;
    top: 38px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 0 0 8px #facc15, 0 0 14px #fbbf24;
    opacity: 0;
    animation: hbc-sip 4s infinite;
  }

  @keyframes hbc-sip {
    0%, 36% { opacity: 0; transform: scale(0.5); }
    44% { opacity: 1; transform: scale(1.3); }
    56% { opacity: 0.6; }
    64%, 100% { opacity: 0; }
  }
  `,
};

const hummingbirdMarkup = {
  v1: `
      <div class="hb">
        <div class="hb-flower">
          <div class="hb-trumpet"></div>
          <div class="hb-flower-stem"></div>
        </div>
        <div class="hb-sip"></div>
        <div class="hb-bird">
          <div class="hb-hover">
            <div class="hb-tail"></div>
            <div class="hb-body"></div>
            <div class="hb-head"></div>
            <div class="hb-bill"></div>
            <div class="hb-wing bot"></div>
            <div class="hb-wing top"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="hb">
        <div class="hb-flower">
          <div class="hb-trumpet"></div>
          <div class="hb-flower-stem"></div>
        </div>
        <div class="hb-sip"></div>
        <div class="hb-bird">
          <div class="hb-hover">
            <div class="hb-tail"></div>
            <div class="hb-body"></div>
            <div class="hb-head"></div>
            <div class="hb-bill"></div>
            <div class="hb-wing bot"></div>
            <div class="hb-wing top"></div>
          </div>
        </div>
      </div>
    `,
  v3: `
      <div class="hbc">
        <div class="hbc-flower">
          <div class="hbc-trumpet"></div>
          <div class="hbc-flower-stem"></div>
        </div>
        <div class="hbc-sip"></div>
        <div class="hbc-bird">
          <div class="hbc-hover">
            <div class="hbc-tail"></div>
            <div class="hbc-body"></div>
            <div class="hbc-head"></div>
            <div class="hbc-bill"></div>
            <div class="hbc-wing bot"></div>
            <div class="hbc-wing top"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptHummingbird extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${hummingbirdStyles[version] || hummingbirdStyles.v3}</style>${hummingbirdMarkup[version] || hummingbirdMarkup.v3}`;
  }
}

if (!customElements.get('concept-hummingbird')) {
  customElements.define('concept-hummingbird', ConceptHummingbird);
}
