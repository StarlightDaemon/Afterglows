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
    width: 48px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, #143a1e 0%, #0d2a14 70%, #1e5a2c 100%);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.4);
    transform-origin: left bottom;
    box-sizing: border-box;
    animation: wand-flick 1.2s ease-in-out infinite alternate;
  }

  .wand::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: #00ff66;
  }

  .wand-tip {
    position: absolute;
    bottom: 44px;
    left: 46px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 12px #00ff66;
    animation: wand-charge 1.2s ease-in-out infinite alternate;
  }

  /* Sparks launched from the tip along arcing paths */
  .wand-spark {
    position: absolute;
    bottom: 46px;
    left: 48px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
    animation: wand-arc1 0.8s ease-out infinite;
  }

  .wand-spark.p1 { animation: wand-arc1 0.8s ease-out infinite; animation-delay: 0s; }
  .wand-spark.p2 { animation: wand-arc2 0.8s ease-out infinite; animation-delay: -0.2s; width: 5px; height: 5px; }
  .wand-spark.p3 { animation: wand-arc3 0.8s ease-out infinite; animation-delay: -0.4s; width: 5px; height: 5px; }
  .wand-spark.p4 { animation: wand-arc4 0.8s ease-out infinite; animation-delay: -0.6s; width: 4px; height: 4px; }

  /* Four-point star glints where sparks land */
  .wand-star {
    position: absolute;
    width: 12px;
    height: 12px;
    clip-path: polygon(50% 0, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0 50%, 39% 39%);
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
  }

  .wand-star.t1 { top: 14px; right: 26px; animation: wand-glint 0.8s ease-in-out infinite alternate; }
  .wand-star.t2 { top: 34px; right: 10px; animation: wand-glint 0.8s ease-in-out infinite alternate; animation-delay: -0.25s; }
  .wand-star.t3 { top: 8px; right: 50px; animation: wand-glint 0.8s ease-in-out infinite alternate; animation-delay: -0.5s; width: 9px; height: 9px; }

  @keyframes wand-flick {
    0% { transform: rotate(-55deg) translate(-2px, 2px); }
    100% { transform: rotate(-22deg) translate(4px, -4px); }
  }

  @keyframes wand-charge {
    0% { transform: scale(0.8) translate(-6px, 8px); }
    100% { transform: scale(1.6) translate(6px, -8px); }
  }

  @keyframes wand-arc1 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(28px, -36px) scale(0.3); }
  }

  @keyframes wand-arc2 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(42px, -24px) scale(0.3); }
  }

  @keyframes wand-arc3 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(16px, -46px) scale(0.3); }
  }

  @keyframes wand-arc4 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(34px, -42px) scale(0.3); }
  }

  @keyframes wand-glint {
    0% { transform: scale(0.3) rotate(0deg); opacity: 0.3; }
    100% { transform: scale(1.3) rotate(90deg); opacity: 1; }
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

  .wand-hand {
    position: absolute;
    bottom: 16px;
    left: 12px;
    width: 0;
    height: 0;
    transform-origin: 0 0;
    animation: wand-flick 1.2s ease-in-out infinite alternate;
  }

  .wand-sleeve {
    position: absolute;
    left: -20px;
    top: -12px;
    width: 26px;
    height: 22px;
    border-radius: 40% 20% 20% 60% / 50% 30% 40% 60%;
    background: linear-gradient(135deg, #0d2a14 0%, #071a0c 70%);
    border: 1px solid #00ff66;
  }

  .wand-fist {
    position: absolute;
    left: -3px;
    top: -5px;
    width: 12px;
    height: 10px;
    border-radius: 45% 55% 50% 50%;
    background: linear-gradient(135deg, #1e5a2c, #123a1e);
    border: 1px solid #00ff66;
  }

  .wand {
    position: absolute;
    bottom: 16px;
    left: 12px;
    width: 48px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, #143a1e 0%, #0d2a14 70%, #1e5a2c 100%);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.4);
    transform-origin: left bottom;
    box-sizing: border-box;
    animation: wand-flick 1.2s ease-in-out infinite alternate;
  }

  .wand::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: #00ff66;
  }

  .wand-tip {
    position: absolute;
    bottom: 44px;
    left: 46px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 12px #00ff66;
    animation: wand-charge 1.2s ease-in-out infinite alternate;
  }

  /* Sparks launched from the tip along arcing paths */
  .wand-spark {
    position: absolute;
    bottom: 46px;
    left: 48px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
  }

  .wand-spark.p1 { animation: wand-arc1 0.8s ease-out infinite; animation-delay: 0s; }
  .wand-spark.p2 { animation: wand-arc2 0.8s ease-out infinite; animation-delay: -0.2s; width: 5px; height: 5px; }
  .wand-spark.p3 { animation: wand-arc3 0.8s ease-out infinite; animation-delay: -0.4s; width: 5px; height: 5px; }
  .wand-spark.p4 { animation: wand-arc4 0.8s ease-out infinite; animation-delay: -0.6s; width: 4px; height: 4px; }

  /* Four-point star glints where sparks land */
  .wand-star {
    position: absolute;
    width: 12px;
    height: 12px;
    clip-path: polygon(50% 0, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0 50%, 39% 39%);
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
  }

  .wand-star.t1 { top: 14px; right: 26px; animation: wand-glint 0.8s ease-in-out infinite alternate; }
  .wand-star.t2 { top: 34px; right: 10px; animation: wand-glint 0.8s ease-in-out infinite alternate; animation-delay: -0.25s; }
  .wand-star.t3 { top: 8px; right: 50px; animation: wand-glint 0.8s ease-in-out infinite alternate; animation-delay: -0.5s; width: 9px; height: 9px; }

  @keyframes wand-flick {
    0% { transform: rotate(-55deg) translate(-2px, 2px); }
    100% { transform: rotate(-22deg) translate(4px, -4px); }
  }

  @keyframes wand-charge {
    0% { transform: scale(0.8) translate(-6px, 8px); }
    100% { transform: scale(1.6) translate(6px, -8px); }
  }

  @keyframes wand-arc1 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(28px, -36px) scale(0.3); }
  }

  @keyframes wand-arc2 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(42px, -24px) scale(0.3); }
  }

  @keyframes wand-arc3 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(16px, -46px) scale(0.3); }
  }

  @keyframes wand-arc4 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(34px, -42px) scale(0.3); }
  }

  @keyframes wand-glint {
    0% { transform: scale(0.3) rotate(0deg); opacity: 0.3; }
    100% { transform: scale(1.3) rotate(90deg); opacity: 1; }
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

  /* v3: Arcane spellcaster wand */
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
    animation: wandc-flick 1.2s ease-in-out infinite alternate;
  }

  .wandc-sleeve {
    position: absolute;
    left: -20px;
    top: -12px;
    width: 26px;
    height: 22px;
    border-radius: 40% 20% 20% 60% / 50% 30% 40% 60%;
    background: linear-gradient(135deg, #312e81 0%, #1e1b4b 70%, #0f172a 100%);
    border: 1.5px solid #6366f1;
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
    box-shadow: 0 0 6px rgba(250, 204, 21, 0.8);
  }

  /* Carved Elder Wood Wand */
  .wandc {
    position: absolute;
    bottom: 16px;
    left: 12px;
    width: 48px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, #78350f 0%, #451a03 70%, #b45309 100%);
    border: 1.5px solid #d97706;
    transform-origin: left bottom;
    box-sizing: border-box;
    box-shadow: 0 0 8px rgba(217, 119, 6, 0.6);
    animation: wandc-flick 1.2s ease-in-out infinite alternate;
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
    box-shadow: 0 0 4px #facc15;
  }

  /* Incandescent Stellar Wand Tip */
  .wandc-tip {
    position: absolute;
    bottom: 44px;
    left: 46px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 14px #38bdf8, 0 0 24px #c084fc;
    animation: wandc-charge 1.2s ease-in-out infinite alternate;
  }

  /* Multicolored Celestial Sparks */
  .wandc-spark {
    position: absolute;
    bottom: 46px;
    left: 48px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .wandc-spark.p1 {
    background: #fde047;
    box-shadow: 0 0 10px #facc15;
    animation: wandc-arc1 0.8s ease-out infinite;
    animation-delay: 0s;
  }

  .wandc-spark.p2 {
    width: 5px;
    height: 5px;
    background: #38bdf8;
    box-shadow: 0 0 10px #00f0ff;
    animation: wandc-arc2 0.8s ease-out infinite;
    animation-delay: -0.2s;
  }

  .wandc-spark.p3 {
    width: 5px;
    height: 5px;
    background: #f43f5e;
    box-shadow: 0 0 10px #fb7185;
    animation: wandc-arc3 0.8s ease-out infinite;
    animation-delay: -0.4s;
  }

  .wandc-spark.p4 {
    width: 4px;
    height: 4px;
    background: #4ade80;
    box-shadow: 0 0 8px #22c55e;
    animation: wandc-arc4 0.8s ease-out infinite;
    animation-delay: -0.6s;
  }

  /* Four-Point Starlight Flare Glints */
  .wandc-star {
    position: absolute;
    width: 12px;
    height: 12px;
    clip-path: polygon(50% 0, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0 50%, 39% 39%);
    background: #ffffff;
    box-shadow: 0 0 10px #fde047, 0 0 18px #38bdf8;
  }

  .wandc-star.t1 { top: 14px; right: 26px; animation: wandc-glint 0.8s ease-in-out infinite alternate; }
  .wandc-star.t2 { top: 34px; right: 10px; animation: wandc-glint 0.8s ease-in-out infinite alternate; animation-delay: -0.25s; }
  .wandc-star.t3 { top: 8px; right: 50px; animation: wandc-glint 0.8s ease-in-out infinite alternate; animation-delay: -0.5s; width: 9px; height: 9px; }

  @keyframes wandc-flick {
    0% { transform: rotate(-55deg) translate(-2px, 2px); }
    100% { transform: rotate(-22deg) translate(4px, -4px); }
  }

  @keyframes wandc-charge {
    0% { transform: scale(0.8) translate(-6px, 8px); }
    100% { transform: scale(1.6) translate(6px, -8px); }
  }

  @keyframes wandc-arc1 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(28px, -36px) scale(0.3); }
  }

  @keyframes wandc-arc2 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(42px, -24px) scale(0.3); }
  }

  @keyframes wandc-arc3 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(16px, -46px) scale(0.3); }
  }

  @keyframes wandc-arc4 {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(34px, -42px) scale(0.3); }
  }

  @keyframes wandc-glint {
    0% { transform: scale(0.3) rotate(0deg); opacity: 0.3; }
    100% { transform: scale(1.3) rotate(90deg); opacity: 1; }
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
