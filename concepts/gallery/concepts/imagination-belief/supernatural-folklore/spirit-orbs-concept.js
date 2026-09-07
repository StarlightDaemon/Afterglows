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
    background: linear-gradient(0deg, rgba(0, 255, 100, 0.25), transparent);
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 34%, #ffffff 0 20%, #00ff66 50%, rgba(0, 255, 100, 0.2) 75%, transparent 100%);
    box-shadow: 0 0 14px #00ff66;
  }

  .orb.o1 {
    width: 18px;
    height: 18px;
    left: 20px;
    top: 55px;
    animation: orb-flight1 1.6s ease-in-out infinite alternate;
  }

  .orb.o2 {
    width: 14px;
    height: 14px;
    left: 60px;
    top: 60px;
    animation: orb-flight2 1.8s ease-in-out infinite alternate;
  }

  .orb.o3 {
    width: 12px;
    height: 12px;
    left: 45px;
    top: 40px;
    animation: orb-flight3 1.4s ease-in-out infinite alternate;
  }

  .orb.o4 {
    width: 10px;
    height: 10px;
    left: 75px;
    top: 30px;
    animation: orb-flight4 1.5s ease-in-out infinite alternate;
  }

  @keyframes orb-flight1 {
    0% { transform: translate(-28px, -24px) scale(0.8); }
    50% { transform: translate(20px, 10px) scale(1.3); }
    100% { transform: translate(40px, -30px) scale(1.0); }
  }

  @keyframes orb-flight2 {
    0% { transform: translate(30px, -32px) scale(1.2); }
    50% { transform: translate(-16px, 12px) scale(0.7); }
    100% { transform: translate(-34px, -14px) scale(1.1); }
  }

  @keyframes orb-flight3 {
    0% { transform: translate(-18px, 24px) scale(0.7); }
    100% { transform: translate(26px, -22px) scale(1.3); }
  }

  @keyframes orb-flight4 {
    0% { transform: translate(22px, 18px) scale(1.1); }
    100% { transform: translate(-26px, -24px) scale(0.8); }
  }

  .orb-trail {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: orb-dust 1.2s linear infinite;
  }

  .orb-trail.t1 { left: 30px; top: 74px; animation-delay: 0s; }
  .orb-trail.t2 { left: 58px; top: 52px; animation-delay: -0.4s; }
  .orb-trail.t3 { left: 78px; top: 78px; animation-delay: -0.8s; }

  @keyframes orb-dust {
    0% { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(-28px) scale(0.3); }
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

  /* v2: Chromatic paranormal spirit orbs */
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
    background: linear-gradient(0deg, rgba(56, 189, 248, 0.25), transparent);
  }

  .orbc {
    position: absolute;
    border-radius: 50%;
  }

  /* Amethyst orb */
  .orbc.o1 {
    width: 18px;
    height: 18px;
    left: 20px;
    top: 55px;
    background: radial-gradient(circle at 38% 34%, #ffffff 0 20%, #c084fc 45%, #9333ea 75%, transparent 100%);
    box-shadow: 0 0 16px #c084fc, 0 0 24px #a855f7;
    animation: orbc-flight1 1.6s ease-in-out infinite alternate;
  }

  /* Cyan orb */
  .orbc.o2 {
    width: 14px;
    height: 14px;
    left: 60px;
    top: 60px;
    background: radial-gradient(circle at 38% 34%, #ffffff 0 20%, #38bdf8 45%, #0284c7 75%, transparent 100%);
    box-shadow: 0 0 14px #00f0ff, 0 0 20px #38bdf8;
    animation: orbc-flight2 1.8s ease-in-out infinite alternate;
  }

  /* Amber gold orb */
  .orbc.o3 {
    width: 12px;
    height: 12px;
    left: 45px;
    top: 40px;
    background: radial-gradient(circle at 38% 34%, #ffffff 0 20%, #fde047 45%, #eab308 75%, transparent 100%);
    box-shadow: 0 0 14px #facc15, 0 0 18px #eab308;
    animation: orbc-flight3 1.4s ease-in-out infinite alternate;
  }

  /* Emerald faerie orb */
  .orbc.o4 {
    width: 10px;
    height: 10px;
    left: 75px;
    top: 30px;
    background: radial-gradient(circle at 38% 34%, #ffffff 0 20%, #4ade80 45%, #16a34a 75%, transparent 100%);
    box-shadow: 0 0 12px #22c55e, 0 0 16px #16a34a;
    animation: orbc-flight4 1.5s ease-in-out infinite alternate;
  }

  @keyframes orbc-flight1 {
    0% { transform: translate(-28px, -24px) scale(0.8); }
    50% { transform: translate(20px, 10px) scale(1.3); }
    100% { transform: translate(40px, -30px) scale(1.0); }
  }

  @keyframes orbc-flight2 {
    0% { transform: translate(30px, -32px) scale(1.2); }
    50% { transform: translate(-16px, 12px) scale(0.7); }
    100% { transform: translate(-34px, -14px) scale(1.1); }
  }

  @keyframes orbc-flight3 {
    0% { transform: translate(-18px, 24px) scale(0.7); }
    100% { transform: translate(26px, -22px) scale(1.3); }
  }

  @keyframes orbc-flight4 {
    0% { transform: translate(22px, 18px) scale(1.1); }
    100% { transform: translate(-26px, -24px) scale(0.8); }
  }

  /* Floating spectral dust */
  .orbsc-trail {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #38bdf8;
    animation: orbc-dust 1.2s linear infinite;
  }

  .orbsc-trail.t1 { left: 30px; top: 74px; background: #fde047; box-shadow: 0 0 6px #facc15; animation-delay: 0s; }
  .orbsc-trail.t2 { left: 58px; top: 52px; animation-delay: -0.4s; }
  .orbsc-trail.t3 { left: 78px; top: 78px; background: #c084fc; box-shadow: 0 0 6px #a855f7; animation-delay: -0.8s; }

  @keyframes orbc-dust {
    0% { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(-28px) scale(0.3); }
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
