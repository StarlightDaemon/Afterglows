const spiritOrbsStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .orbs {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: radial-gradient(circle at 50% 62%, #041006 0%, #010401 55%, #000 100%);
  }

  .orbs-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 26px;
    background: linear-gradient(0deg, rgba(0, 204, 0, 0.1), transparent);
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 34%, rgba(235, 255, 240, 0.95) 0 18%, rgba(160, 255, 185, 0.65) 42%, rgba(60, 220, 100, 0.18) 72%, transparent 100%);
    filter: blur(0.4px);
  }

  .orb::after {
    content: '';
    position: absolute;
    inset: -60%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(140, 255, 170, 0.28), transparent 65%);
  }

  .orb.o1 {
    width: 15px;
    height: 15px;
    left: 16px;
    top: 62px;
    animation: orb-path1 7.5s ease-in-out infinite, orb-flare 5s ease-in-out infinite;
  }

  .orb.o2 {
    width: 10px;
    height: 10px;
    left: 66px;
    top: 70px;
    animation: orb-path2 9s ease-in-out infinite, orb-flare 6.4s ease-in-out infinite -2.1s;
  }

  .orb.o3 {
    width: 7px;
    height: 7px;
    left: 44px;
    top: 40px;
    animation: orb-path3 11s ease-in-out infinite, orb-flare 4.4s ease-in-out infinite -1.3s;
  }

  .orb.o4 {
    width: 5px;
    height: 5px;
    left: 80px;
    top: 30px;
    animation: orb-path4 8.2s ease-in-out infinite, orb-flare 5.8s ease-in-out infinite -3.4s;
  }

  .orb-trail {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.5);
    opacity: 0;
    animation: orb-dust 3.2s linear infinite;
  }

  .orb-trail.t1 { left: 30px; top: 74px; animation-delay: 0s; }
  .orb-trail.t2 { left: 58px; top: 52px; animation-delay: -1.1s; }
  .orb-trail.t3 { left: 78px; top: 78px; animation-delay: -2.2s; }

  @keyframes orb-path1 {
    0%, 100% { transform: translate(0, 0); }
    28% { transform: translate(26px, -22px); }
    55% { transform: translate(52px, -6px); }
    80% { transform: translate(18px, 10px); }
  }

  @keyframes orb-path2 {
    0%, 100% { transform: translate(0, 0); }
    30% { transform: translate(-24px, -30px); }
    58% { transform: translate(-40px, -4px); }
    82% { transform: translate(-10px, -16px); }
  }

  @keyframes orb-path3 {
    0%, 100% { transform: translate(0, 0); }
    26% { transform: translate(18px, 22px); }
    50% { transform: translate(-14px, 34px); }
    76% { transform: translate(-22px, 8px); }
  }

  @keyframes orb-path4 {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(-16px, 26px); }
    66% { transform: translate(-34px, 44px); }
  }

  @keyframes orb-flare {
    0%, 100% { opacity: 0.45; }
    12% { opacity: 1; }
    22% { opacity: 0.55; }
    60% { opacity: 0.85; }
  }

  @keyframes orb-dust {
    0% { opacity: 0; transform: translateY(0); }
    20% { opacity: 0.7; }
    100% { opacity: 0; transform: translateY(-18px); }
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

  /* v2: Chromatic paranormal spirit orbs with amethyst, cyan, amber,
     and emerald glowing auras drifting through midnight gloom */
  .orbsc {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: radial-gradient(circle at 50% 62%, #1e1b4b 0%, #0f172a 60%, #020617 100%);
    border-radius: 6px;
  }

  .orbsc-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 26px;
    background: linear-gradient(0deg, rgba(56, 189, 248, 0.15), transparent);
  }

  .orbc {
    position: absolute;
    border-radius: 50%;
    filter: blur(0.4px);
  }

  /* Amethyst orb */
  .orbc.o1 {
    width: 15px;
    height: 15px;
    left: 16px;
    top: 62px;
    background: radial-gradient(circle at 38% 34%, #ffffff 0 18%, #c084fc 45%, #9333ea 75%, transparent 100%);
    box-shadow: 0 0 16px #a855f7;
    animation: orbc-path1 7.5s ease-in-out infinite, orbc-flare 5s ease-in-out infinite;
  }

  /* Cyan orb */
  .orbc.o2 {
    width: 10px;
    height: 10px;
    left: 66px;
    top: 70px;
    background: radial-gradient(circle at 38% 34%, #ffffff 0 18%, #38bdf8 45%, #0284c7 75%, transparent 100%);
    box-shadow: 0 0 14px #00f0ff;
    animation: orbc-path2 9s ease-in-out infinite, orbc-flare 6.4s ease-in-out infinite -2.1s;
  }

  /* Amber gold orb */
  .orbc.o3 {
    width: 8px;
    height: 8px;
    left: 44px;
    top: 40px;
    background: radial-gradient(circle at 38% 34%, #ffffff 0 18%, #fde047 45%, #eab308 75%, transparent 100%);
    box-shadow: 0 0 12px #facc15;
    animation: orbc-path3 11s ease-in-out infinite, orbc-flare 4.4s ease-in-out infinite -1.3s;
  }

  /* Emerald faerie orb */
  .orbc.o4 {
    width: 6px;
    height: 6px;
    left: 80px;
    top: 30px;
    background: radial-gradient(circle at 38% 34%, #ffffff 0 18%, #4ade80 45%, #16a34a 75%, transparent 100%);
    box-shadow: 0 0 10px #22c55e;
    animation: orbc-path4 8.2s ease-in-out infinite, orbc-flare 5.8s ease-in-out infinite -3.4s;
  }

  /* Floating spectral dust */
  .orbsc-trail {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #e0f2fe;
    box-shadow: 0 0 4px #38bdf8;
    opacity: 0;
    animation: orbc-dust 3.2s linear infinite;
  }

  .orbsc-trail.t1 { left: 30px; top: 74px; background: #fde047; box-shadow: 0 0 4px #facc15; animation-delay: 0s; }
  .orbsc-trail.t2 { left: 58px; top: 52px; animation-delay: -1.1s; }
  .orbsc-trail.t3 { left: 78px; top: 78px; background: #c084fc; box-shadow: 0 0 4px #a855f7; animation-delay: -2.2s; }

  @keyframes orbc-path1 {
    0%, 100% { transform: translate(0, 0); }
    28% { transform: translate(26px, -22px); }
    55% { transform: translate(52px, -6px); }
    80% { transform: translate(18px, 10px); }
  }

  @keyframes orbc-path2 {
    0%, 100% { transform: translate(0, 0); }
    30% { transform: translate(-24px, -30px); }
    58% { transform: translate(-40px, -4px); }
    82% { transform: translate(-10px, -16px); }
  }

  @keyframes orbc-path3 {
    0%, 100% { transform: translate(0, 0); }
    26% { transform: translate(18px, 22px); }
    50% { transform: translate(-14px, 34px); }
    76% { transform: translate(-22px, 8px); }
  }

  @keyframes orbc-path4 {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(-16px, 26px); }
    66% { transform: translate(-34px, 44px); }
  }

  @keyframes orbc-flare {
    0%, 100% { opacity: 0.5; }
    12% { opacity: 1; }
    22% { opacity: 0.6; }
    60% { opacity: 0.95; }
  }

  @keyframes orbc-dust {
    0% { opacity: 0; transform: translateY(0); }
    20% { opacity: 0.85; }
    100% { opacity: 0; transform: translateY(-18px); }
  }
  `,
};

const spiritOrbsMarkup = {
  v1: `
      <div class="orbs">
        <div class="orbs-floor"></div>
        <div class="orb o1"></div>
        <div class="orb o2"></div>
        <div class="orb o3"></div>
        <div class="orb o4"></div>
        <div class="orb-trail t1"></div>
        <div class="orb-trail t2"></div>
        <div class="orb-trail t3"></div>
      </div>
    `,
  v2: `
      <div class="orbsc">
        <div class="orbsc-floor"></div>
        <div class="orbc o1"></div>
        <div class="orbc o2"></div>
        <div class="orbc o3"></div>
        <div class="orbc o4"></div>
        <div class="orbsc-trail t1"></div>
        <div class="orbsc-trail t2"></div>
        <div class="orbsc-trail t3"></div>
      </div>
    `,
};

class ConceptSpiritOrbs extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${spiritOrbsStyles[version] || spiritOrbsStyles.v2}</style>${spiritOrbsMarkup[version] || spiritOrbsMarkup.v2}`;
  }
}

if (!customElements.get('concept-spirit-orbs')) {
  customElements.define('concept-spirit-orbs', ConceptSpiritOrbs);
}
