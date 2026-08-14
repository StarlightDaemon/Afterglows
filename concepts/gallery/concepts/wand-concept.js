// v1 is the archived original; v2 adds the caster's hand and sleeve.
// v3 adds full arcane colorization: midnight velvet robe, carved elder wood wand,
// supernova glowing tip, multicolored celestial sparks, and radiant starlight glints.
const wandStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wand-scene {
    position: relative;
    width: 104px;
    height: 104px;
  }

  .wand {
    position: absolute;
    bottom: 16px;
    left: 12px;
    width: 46px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, #143a1e 0%, #0d2a14 70%, #1e5a2c 100%);
    border: 1px solid rgba(0, 204, 0, 0.35);
    transform: rotate(-38deg);
    transform-origin: left bottom;
    box-sizing: border-box;
    animation: wand-flick 4.6s ease-in-out infinite;
  }

  .wand::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.35);
  }

  .wand-tip {
    position: absolute;
    bottom: 44px;
    left: 46px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d8ffd0;
    box-shadow: 0 0 8px rgba(200, 255, 212, 0.9);
    animation: wand-charge 4.6s ease-in-out infinite;
  }

  /* Sparks launched from the tip along arcing paths. */
  .wand-spark {
    position: absolute;
    bottom: 46px;
    left: 48px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(220, 255, 228, 0.95);
    box-shadow: 0 0 6px rgba(190, 255, 205, 0.9);
    opacity: 0;
  }

  .wand-spark.p1 { animation: wand-arc1 4.6s ease-out infinite; }
  .wand-spark.p2 { animation: wand-arc2 4.6s ease-out infinite; width: 3px; height: 3px; }
  .wand-spark.p3 { animation: wand-arc3 4.6s ease-out infinite; width: 3px; height: 3px; }
  .wand-spark.p4 { animation: wand-arc4 4.6s ease-out infinite; width: 2.5px; height: 2.5px; }

  /* Four-point star glints where sparks land. */
  .wand-star {
    position: absolute;
    width: 10px;
    height: 10px;
    clip-path: polygon(50% 0, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0 50%, 39% 39%);
    background: rgba(220, 255, 228, 0.95);
    opacity: 0;
  }

  .wand-star.t1 { top: 14px; right: 30px; animation: wand-glint 4.6s ease-in-out infinite; }
  .wand-star.t2 { top: 34px; right: 12px; animation: wand-glint 4.6s ease-in-out infinite; animation-delay: 0.25s; }
  .wand-star.t3 { top: 8px; right: 54px; animation: wand-glint 4.6s ease-in-out infinite; animation-delay: 0.5s; width: 7px; height: 7px; }

  @keyframes wand-flick {
    0%, 34% { transform: rotate(-38deg); }
    42% { transform: rotate(-52deg); }
    48% { transform: rotate(-30deg); }
    56%, 100% { transform: rotate(-38deg); }
  }

  @keyframes wand-charge {
    0%, 30% { opacity: 0.6; transform: scale(0.85); box-shadow: 0 0 6px rgba(200, 255, 212, 0.6); }
    44% { opacity: 1; transform: scale(1.6); box-shadow: 0 0 16px rgba(220, 255, 228, 1); }
    52% { opacity: 0.95; transform: scale(1.1); }
    72%, 100% { opacity: 0.65; transform: scale(0.9); box-shadow: 0 0 6px rgba(200, 255, 212, 0.6); }
  }

  @keyframes wand-arc1 {
    0%, 46% { opacity: 0; transform: translate(0, 0); }
    52% { opacity: 1; }
    76% { opacity: 1; transform: translate(26px, -34px); }
    88%, 100% { opacity: 0; transform: translate(34px, -36px); }
  }

  @keyframes wand-arc2 {
    0%, 48% { opacity: 0; transform: translate(0, 0); }
    54% { opacity: 1; }
    78% { opacity: 1; transform: translate(40px, -22px); }
    90%, 100% { opacity: 0; transform: translate(48px, -20px); }
  }

  @keyframes wand-arc3 {
    0%, 50% { opacity: 0; transform: translate(0, 0); }
    56% { opacity: 1; }
    80% { opacity: 1; transform: translate(14px, -44px); }
    92%, 100% { opacity: 0; transform: translate(18px, -48px); }
  }

  @keyframes wand-arc4 {
    0%, 52% { opacity: 0; transform: translate(0, 0); }
    58% { opacity: 1; }
    84% { opacity: 1; transform: translate(32px, -40px); }
    96%, 100% { opacity: 0; transform: translate(38px, -44px); }
  }

  @keyframes wand-glint {
    0%, 74% { opacity: 0; transform: scale(0.2) rotate(0deg); }
    82% { opacity: 1; transform: scale(1.1) rotate(45deg); }
    94%, 100% { opacity: 0; transform: scale(0.3) rotate(90deg); }
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

  .wand-scene {
    position: relative;
    width: 104px;
    height: 104px;
  }

  /* Sleeved wrist gripping the wand's base, so the wand reads as being
     cast by someone rather than floating alone. Shares the wand's own
     flick rotation, pivoting at the same point. */
  .wand-hand {
    position: absolute;
    bottom: 16px;
    left: 12px;
    width: 0;
    height: 0;
    transform-origin: 0 0;
    animation: wand-flick 4.6s ease-in-out infinite;
  }

  .wand-sleeve {
    position: absolute;
    left: -20px;
    top: -12px;
    width: 26px;
    height: 22px;
    border-radius: 40% 20% 20% 60% / 50% 30% 40% 60%;
    background: linear-gradient(135deg, #0d2a14 0%, #071a0c 70%);
    border: 1px solid rgba(0, 204, 0, 0.3);
  }

  .wand-fist {
    position: absolute;
    left: -3px;
    top: -5px;
    width: 12px;
    height: 10px;
    border-radius: 45% 55% 50% 50%;
    background: linear-gradient(135deg, #1e5a2c, #123a1e);
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  .wand {
    position: absolute;
    bottom: 16px;
    left: 12px;
    width: 46px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, #143a1e 0%, #0d2a14 70%, #1e5a2c 100%);
    border: 1px solid rgba(0, 204, 0, 0.35);
    transform: rotate(-38deg);
    transform-origin: left bottom;
    box-sizing: border-box;
    animation: wand-flick 4.6s ease-in-out infinite;
  }

  .wand::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.35);
  }

  .wand-tip {
    position: absolute;
    bottom: 44px;
    left: 46px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d8ffd0;
    box-shadow: 0 0 8px rgba(200, 255, 212, 0.9);
    animation: wand-charge 4.6s ease-in-out infinite;
  }

  /* Sparks launched from the tip along arcing paths. */
  .wand-spark {
    position: absolute;
    bottom: 46px;
    left: 48px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(220, 255, 228, 0.95);
    box-shadow: 0 0 6px rgba(190, 255, 205, 0.9);
    opacity: 0;
  }

  .wand-spark.p1 { animation: wand-arc1 4.6s ease-out infinite; }
  .wand-spark.p2 { animation: wand-arc2 4.6s ease-out infinite; width: 3px; height: 3px; }
  .wand-spark.p3 { animation: wand-arc3 4.6s ease-out infinite; width: 3px; height: 3px; }
  .wand-spark.p4 { animation: wand-arc4 4.6s ease-out infinite; width: 2.5px; height: 2.5px; }

  /* Four-point star glints where sparks land. */
  .wand-star {
    position: absolute;
    width: 10px;
    height: 10px;
    clip-path: polygon(50% 0, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0 50%, 39% 39%);
    background: rgba(220, 255, 228, 0.95);
    opacity: 0;
  }

  .wand-star.t1 { top: 14px; right: 30px; animation: wand-glint 4.6s ease-in-out infinite; }
  .wand-star.t2 { top: 34px; right: 12px; animation: wand-glint 4.6s ease-in-out infinite; animation-delay: 0.25s; }
  .wand-star.t3 { top: 8px; right: 54px; animation: wand-glint 4.6s ease-in-out infinite; animation-delay: 0.5s; width: 7px; height: 7px; }

  @keyframes wand-flick {
    0%, 34% { transform: rotate(-38deg); }
    42% { transform: rotate(-52deg); }
    48% { transform: rotate(-30deg); }
    56%, 100% { transform: rotate(-38deg); }
  }

  @keyframes wand-charge {
    0%, 30% { opacity: 0.6; transform: scale(0.85); box-shadow: 0 0 6px rgba(200, 255, 212, 0.6); }
    44% { opacity: 1; transform: scale(1.6); box-shadow: 0 0 16px rgba(220, 255, 228, 1); }
    52% { opacity: 0.95; transform: scale(1.1); }
    72%, 100% { opacity: 0.65; transform: scale(0.9); box-shadow: 0 0 6px rgba(200, 255, 212, 0.6); }
  }

  @keyframes wand-arc1 {
    0%, 46% { opacity: 0; transform: translate(0, 0); }
    52% { opacity: 1; }
    76% { opacity: 1; transform: translate(26px, -34px); }
    88%, 100% { opacity: 0; transform: translate(34px, -36px); }
  }

  @keyframes wand-arc2 {
    0%, 48% { opacity: 0; transform: translate(0, 0); }
    54% { opacity: 1; }
    78% { opacity: 1; transform: translate(40px, -22px); }
    90%, 100% { opacity: 0; transform: translate(48px, -20px); }
  }

  @keyframes wand-arc3 {
    0%, 50% { opacity: 0; transform: translate(0, 0); }
    56% { opacity: 1; }
    80% { opacity: 1; transform: translate(14px, -44px); }
    92%, 100% { opacity: 0; transform: translate(18px, -48px); }
  }

  @keyframes wand-arc4 {
    0%, 52% { opacity: 0; transform: translate(0, 0); }
    58% { opacity: 1; }
    84% { opacity: 1; transform: translate(32px, -40px); }
    96%, 100% { opacity: 0; transform: translate(38px, -44px); }
  }

  @keyframes wand-glint {
    0%, 74% { opacity: 0; transform: scale(0.2) rotate(0deg); }
    82% { opacity: 1; transform: scale(1.1) rotate(45deg); }
    94%, 100% { opacity: 0; transform: scale(0.3) rotate(90deg); }
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

  /* v3: Arcane spellcaster wand with midnight-blue robe sleeve,
     carved elder wood wand, glowing stellar tip, rainbow sparks, and star glints */
  .wandc-scene {
    position: relative;
    width: 104px;
    height: 104px;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Sleeved wrist in midnight blue velvet with gold trim */
  .wandc-hand {
    position: absolute;
    bottom: 16px;
    left: 12px;
    width: 0;
    height: 0;
    transform-origin: 0 0;
    animation: wandc-flick 4.6s ease-in-out infinite;
  }

  .wandc-sleeve {
    position: absolute;
    left: -20px;
    top: -12px;
    width: 26px;
    height: 22px;
    border-radius: 40% 20% 20% 60% / 50% 30% 40% 60%;
    background: linear-gradient(135deg, #312e81 0%, #1e1b4b 70%, #0f172a 100%);
    border: 1px solid #6366f1;
    box-shadow: inset 0 0 6px #4338ca;
  }

  .wandc-fist {
    position: absolute;
    left: -3px;
    top: -5px;
    width: 12px;
    height: 10px;
    border-radius: 45% 55% 50% 50%;
    background: linear-gradient(135deg, #fde047 0%, #ca8a04 100%);
    border: 1px solid #facc15;
    box-shadow: 0 0 4px rgba(250, 204, 21, 0.6);
  }

  /* Carved Elder Wood Wand */
  .wandc {
    position: absolute;
    bottom: 16px;
    left: 12px;
    width: 46px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, #78350f 0%, #451a03 70%, #b45309 100%);
    border: 1px solid #d97706;
    transform: rotate(-38deg);
    transform-origin: left bottom;
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(217, 119, 6, 0.4);
    animation: wandc-flick 4.6s ease-in-out infinite;
  }

  .wandc::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: #fde047;
    box-shadow: 0 0 3px #facc15;
  }

  /* Incandescent Stellar Wand Tip */
  .wandc-tip {
    position: absolute;
    bottom: 44px;
    left: 46px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 12px #38bdf8, 0 0 20px #c084fc;
    animation: wandc-charge 4.6s ease-in-out infinite;
  }

  /* Multicolored Celestial Sparks */
  .wandc-spark {
    position: absolute;
    bottom: 46px;
    left: 48px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    opacity: 0;
  }

  .wandc-spark.p1 {
    background: #fde047;
    box-shadow: 0 0 8px #facc15;
    animation: wandc-arc1 4.6s ease-out infinite;
  }

  .wandc-spark.p2 {
    width: 3px;
    height: 3px;
    background: #38bdf8;
    box-shadow: 0 0 8px #00f0ff;
    animation: wandc-arc2 4.6s ease-out infinite;
  }

  .wandc-spark.p3 {
    width: 3px;
    height: 3px;
    background: #f43f5e;
    box-shadow: 0 0 8px #fb7185;
    animation: wandc-arc3 4.6s ease-out infinite;
  }

  .wandc-spark.p4 {
    width: 2.5px;
    height: 2.5px;
    background: #4ade80;
    box-shadow: 0 0 6px #22c55e;
    animation: wandc-arc4 4.6s ease-out infinite;
  }

  /* Four-Point Starlight Flare Glints */
  .wandc-star {
    position: absolute;
    width: 10px;
    height: 10px;
    clip-path: polygon(50% 0, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0 50%, 39% 39%);
    background: #ffffff;
    box-shadow: 0 0 10px #fde047, 0 0 16px #38bdf8;
    opacity: 0;
  }

  .wandc-star.t1 { top: 14px; right: 30px; animation: wandc-glint 4.6s ease-in-out infinite; }
  .wandc-star.t2 { top: 34px; right: 12px; animation: wandc-glint 4.6s ease-in-out infinite; animation-delay: 0.25s; }
  .wandc-star.t3 { top: 8px; right: 54px; animation: wandc-glint 4.6s ease-in-out infinite; animation-delay: 0.5s; width: 7px; height: 7px; }

  @keyframes wandc-flick {
    0%, 34% { transform: rotate(-38deg); }
    42% { transform: rotate(-52deg); }
    48% { transform: rotate(-30deg); }
    56%, 100% { transform: rotate(-38deg); }
  }

  @keyframes wandc-charge {
    0%, 30% { opacity: 0.6; transform: scale(0.85); box-shadow: 0 0 8px #38bdf8; }
    44% { opacity: 1; transform: scale(1.7); box-shadow: 0 0 20px #ffffff, 0 0 28px #38bdf8; }
    52% { opacity: 0.95; transform: scale(1.1); }
    72%, 100% { opacity: 0.65; transform: scale(0.9); box-shadow: 0 0 8px #38bdf8; }
  }

  @keyframes wandc-arc1 {
    0%, 46% { opacity: 0; transform: translate(0, 0); }
    52% { opacity: 1; }
    76% { opacity: 1; transform: translate(26px, -34px); }
    88%, 100% { opacity: 0; transform: translate(34px, -36px); }
  }

  @keyframes wandc-arc2 {
    0%, 48% { opacity: 0; transform: translate(0, 0); }
    54% { opacity: 1; }
    78% { opacity: 1; transform: translate(40px, -22px); }
    90%, 100% { opacity: 0; transform: translate(48px, -20px); }
  }

  @keyframes wandc-arc3 {
    0%, 50% { opacity: 0; transform: translate(0, 0); }
    56% { opacity: 1; }
    80% { opacity: 1; transform: translate(14px, -44px); }
    92%, 100% { opacity: 0; transform: translate(18px, -48px); }
  }

  @keyframes wandc-arc4 {
    0%, 52% { opacity: 0; transform: translate(0, 0); }
    58% { opacity: 1; }
    84% { opacity: 1; transform: translate(32px, -40px); }
    96%, 100% { opacity: 0; transform: translate(38px, -44px); }
  }

  @keyframes wandc-glint {
    0%, 74% { opacity: 0; transform: scale(0.2) rotate(0deg); }
    82% { opacity: 1; transform: scale(1.2) rotate(45deg); }
    94%, 100% { opacity: 0; transform: scale(0.3) rotate(90deg); }
  }
  `,
};

const wandMarkup = {
  v1: `
      <div class="wand-scene">
        <div class="wand"></div>
        <div class="wand-tip"></div>
        <div class="wand-spark p1"></div>
        <div class="wand-spark p2"></div>
        <div class="wand-spark p3"></div>
        <div class="wand-spark p4"></div>
        <div class="wand-star t1"></div>
        <div class="wand-star t2"></div>
        <div class="wand-star t3"></div>
      </div>
    `,
  v2: `
      <div class="wand-scene">
        <div class="wand-hand">
          <div class="wand-sleeve"></div>
          <div class="wand-fist"></div>
        </div>
        <div class="wand"></div>
        <div class="wand-tip"></div>
        <div class="wand-spark p1"></div>
        <div class="wand-spark p2"></div>
        <div class="wand-spark p3"></div>
        <div class="wand-spark p4"></div>
        <div class="wand-star t1"></div>
        <div class="wand-star t2"></div>
        <div class="wand-star t3"></div>
      </div>
    `,
  v3: `
      <div class="wandc-scene">
        <div class="wandc-hand">
          <div class="wandc-sleeve"></div>
          <div class="wandc-fist"></div>
        </div>
        <div class="wandc"></div>
        <div class="wandc-tip"></div>
        <div class="wandc-spark p1"></div>
        <div class="wandc-spark p2"></div>
        <div class="wandc-spark p3"></div>
        <div class="wandc-spark p4"></div>
        <div class="wandc-star t1"></div>
        <div class="wandc-star t2"></div>
        <div class="wandc-star t3"></div>
      </div>
    `,
};

class ConceptWand extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${wandStyles[version] || wandStyles.v3}</style>${wandMarkup[version] || wandMarkup.v3}`;
  }
}

if (!customElements.get('concept-wand')) {
  customElements.define('concept-wand', ConceptWand);
}
