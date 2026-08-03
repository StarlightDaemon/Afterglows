// v1 is the archived original (clip-path trumpet, two-blob wing
// strobe); v2 refines the flower and wing beat. Markup is shared.
const hummingbirdStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A hummingbird feeding: it holds a hover with a figure-eight wing
     blur, dips its bill into a trumpet flower to sip, backs off, and
     darts to reposition - the flower nodding each time. */
  .hb {
    width: 116px;
    height: 88px;
    position: relative;
  }

  /* Trumpet flower on the right. */
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
    /* Bows a touch when sipped. */
    40% { transform: rotate(4deg); }
    50% { transform: rotate(1deg); }
    60% { transform: rotate(3deg); }
    70% { transform: rotate(0deg); }
  }

  /* The bird flits between hover positions. */
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
    /* Approach and hover at the flower. */
    28% { transform: translate(52px, 30px); }
    38%, 62% { transform: translate(56px, 30px); }
    /* Back off and reposition. */
    76% { transform: translate(30px, 20px); }
    100% { transform: translate(18px, 44px); }
  }

  /* Micro-hover bob. */
  .hb-hover {
    position: absolute;
    inset: 0;
    animation: hb-bob 0.3s ease-in-out infinite;
  }

  @keyframes hb-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }

  /* Body: iridescent teardrop. */
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

  /* Head + gorget. */
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

  /* Long needle bill. */
  .hb-bill {
    position: absolute;
    left: 23px;
    top: 6px;
    width: 14px;
    height: 1.5px;
    background: rgba(214, 255, 224, 0.9);
  }

  /* Fanned tail. */
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

  /* Wings: a blurred beating arc on each side. */
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

  /* Nectar sparkle at the flower mouth during the sip. */
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

  /* A hummingbird feeding: it holds a hover with a figure-eight wing
     blur, dips its bill into a trumpet flower to sip, backs off, and
     darts to reposition - the flower nodding each time. */
  .hb {
    width: 116px;
    height: 88px;
    position: relative;
  }

  /* Trumpet flower on the right. */
  .hb-flower {
    position: absolute;
    right: 6px;
    top: 30px;
    width: 26px;
    height: 22px;
    transform-origin: 100% 100%;
    animation: hb-nod 4s ease-in-out infinite;
  }

  /* Trumpet bell: dark throat at the left mouth, flaring bright to the
     stem side, with two petal tips curling off the rim. */
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
    /* Bows a touch when sipped. */
    40% { transform: rotate(4deg); }
    50% { transform: rotate(1deg); }
    60% { transform: rotate(3deg); }
    70% { transform: rotate(0deg); }
  }

  /* The bird flits between hover positions. */
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
    /* Approach and hover at the flower. */
    28% { transform: translate(52px, 30px); }
    38%, 62% { transform: translate(56px, 30px); }
    /* Back off and reposition. */
    76% { transform: translate(30px, 20px); }
    100% { transform: translate(18px, 44px); }
  }

  /* Micro-hover bob. */
  .hb-hover {
    position: absolute;
    inset: 0;
    animation: hb-bob 0.3s ease-in-out infinite;
  }

  @keyframes hb-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }

  /* Body: iridescent teardrop. */
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

  /* Head + gorget. */
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

  /* Long needle bill. */
  .hb-bill {
    position: absolute;
    left: 23px;
    top: 6px;
    width: 14px;
    height: 1.5px;
    background: rgba(214, 255, 224, 0.9);
  }

  /* Fanned tail. */
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

  /* Wings: a blurred beating arc on each side. */
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

  /* Full sweep from raised to swept-back — reads as a beat rather than
     the old two-blob strobe. */
  @keyframes hb-wingtop {
    0% { transform: rotate(-62deg) scaleX(0.9); }
    100% { transform: rotate(4deg) scaleX(0.72); }
  }

  @keyframes hb-wingbot {
    0% { transform: rotate(38deg) scaleX(0.85); }
    100% { transform: rotate(-6deg) scaleX(0.7); }
  }

  /* Nectar sparkle at the flower mouth during the sip. */
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
};

const hummingbirdMarkup = `
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
    `;

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
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${hummingbirdStyles[version] || hummingbirdStyles.v2}</style>${hummingbirdMarkup}`;
  }
}

if (!customElements.get('concept-hummingbird')) {
  customElements.define('concept-hummingbird', ConceptHummingbird);
}
