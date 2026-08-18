const crystalBallStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cball {
    position: relative;
    width: 84px;
    height: 104px;
    display: flex;
    justify-content: center;
  }

  .cball-stand {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 44px;
    height: 14px;
    margin-left: -22px;
    clip-path: polygon(12% 0, 88% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, #12351b, #081a0d);
    border-radius: 2px;
  }

  .cball-stand::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 8px;
    right: 8px;
    height: 2px;
    background: rgba(140, 255, 170, 0.35);
  }

  .cball-glass {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 62px;
    height: 62px;
    margin-left: -31px;
    border-radius: 50%;
    background: radial-gradient(circle at 32% 26%, rgba(220, 255, 228, 0.3) 0 12%, rgba(30, 90, 45, 0.3) 40%, rgba(6, 18, 10, 0.9) 100%);
    border: 1.5px solid rgba(140, 255, 170, 0.7);
    box-shadow:
      inset 0 0 18px rgba(0, 204, 0, 0.4),
      0 0 16px rgba(0, 204, 0, 0.4);
    overflow: hidden;
    box-sizing: border-box;
    animation: cball-levitate 3s ease-in-out infinite alternate;
  }

  @keyframes cball-levitate {
    0% { transform: translateY(0) rotate(-3deg); }
    100% { transform: translateY(-7px) rotate(3deg); }
  }

  .cball-mist {
    position: absolute;
    width: 44px;
    height: 36px;
    border-radius: 50%;
    filter: blur(2.5px);
  }

  .cball-mist.m1 {
    top: 10px;
    left: 8px;
    background: rgba(140, 255, 170, 0.75);
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.8);
    animation: cball-mist1 3.2s linear infinite;
  }

  .cball-mist.m2 {
    top: 16px;
    left: 10px;
    background: rgba(40, 220, 100, 0.65);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.6);
    animation: cball-mist2 3.8s linear infinite;
  }

  .cball-glimpse {
    position: absolute;
    top: 24px;
    left: 50%;
    width: 24px;
    height: 14px;
    margin-left: -12px;
    border-radius: 50%;
    background: radial-gradient(circle at center, #041006 0 24%, rgba(220, 255, 228, 0.95) 30% 50%, transparent 72%);
    box-shadow: 0 0 8px rgba(180, 255, 200, 0.8);
    opacity: 0.9;
    animation: cball-glimpse 2.6s ease-in-out infinite alternate;
  }

  .cball-shine {
    position: absolute;
    top: 8px;
    left: 12px;
    width: 14px;
    height: 8px;
    border-radius: 50%;
    background: rgba(235, 255, 240, 0.7);
    transform: rotate(-24deg);
    filter: blur(0.8px);
  }

  .cball-spark {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(220, 255, 228, 0.95);
    box-shadow: 0 0 4px #00ff66;
    animation: cball-spark 2.4s ease-in-out infinite alternate;
  }

  .cball-spark.k1 { top: 38px; left: 16px; animation-delay: 0s; }
  .cball-spark.k2 { top: 20px; left: 42px; animation-delay: -0.8s; }
  .cball-spark.k3 { top: 44px; left: 36px; animation-delay: -1.6s; }

  @keyframes cball-mist1 {
    0% { transform: rotate(0deg) translateX(12px) rotate(0deg) scale(0.9); }
    100% { transform: rotate(360deg) translateX(12px) rotate(-360deg) scale(1.15); }
  }

  @keyframes cball-mist2 {
    0% { transform: rotate(0deg) translateX(-12px) rotate(0deg) scale(1.15); }
    100% { transform: rotate(-360deg) translateX(-12px) rotate(360deg) scale(0.85); }
  }

  @keyframes cball-glimpse {
    0% { transform: translateY(-4px) scale(0.7); opacity: 0.4; }
    100% { transform: translateY(4px) scale(1.35); opacity: 1; }
  }

  @keyframes cball-spark {
    0% { transform: translate(-6px, -4px) scale(0.5); opacity: 0.3; }
    100% { transform: translate(6px, 4px) scale(1.4); opacity: 1; }
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

  /* v2: Mystical crystal ball with cosmic magenta/cyan nebula mist,
     brass pedestal stand, golden divination glimpse, and stellar sparkles */
  .cballc {
    position: relative;
    width: 84px;
    height: 104px;
    display: flex;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Polished brass pedestal stand */
  .cballc-stand {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 44px;
    height: 14px;
    margin-left: -22px;
    clip-path: polygon(12% 0, 88% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, #fde047 0%, #ca8a04 50%, #78350f 100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    border-radius: 2px;
  }

  .cballc-stand::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 8px;
    right: 8px;
    height: 2px;
    background: #fef08a;
  }

  /* Prismatic crystal orb */
  .cballc-glass {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 62px;
    height: 62px;
    margin-left: -31px;
    border-radius: 50%;
    background: radial-gradient(circle at 32% 26%, rgba(255, 255, 255, 0.7) 0 12%, rgba(147, 51, 234, 0.4) 40%, rgba(15, 23, 42, 0.95) 100%);
    border: 1.5px solid rgba(216, 180, 254, 0.9);
    box-shadow:
      inset 0 0 20px rgba(168, 85, 247, 0.7),
      0 0 18px rgba(147, 51, 234, 0.8);
    overflow: hidden;
    box-sizing: border-box;
    animation: cballc-levitate 3s ease-in-out infinite alternate;
  }

  @keyframes cballc-levitate {
    0% { transform: translateY(0) rotate(-3deg); }
    100% { transform: translateY(-7px) rotate(3deg); }
  }

  /* Cosmic nebula mist blobs */
  .cballc-mist {
    position: absolute;
    width: 44px;
    height: 36px;
    border-radius: 50%;
    filter: blur(2.5px);
  }

  .cballc-mist.m1 {
    top: 10px;
    left: 8px;
    background: rgba(236, 72, 153, 0.85);
    box-shadow: 0 0 12px #ec4899;
    animation: cballc-mist1 3.2s linear infinite;
  }

  .cballc-mist.m2 {
    top: 16px;
    left: 10px;
    background: rgba(6, 182, 212, 0.85);
    box-shadow: 0 0 12px #06b6d4;
    animation: cballc-mist2 3.8s linear infinite;
  }

  /* Golden divination eye glimpse */
  .cballc-glimpse {
    position: absolute;
    top: 24px;
    left: 50%;
    width: 24px;
    height: 14px;
    margin-left: -12px;
    border-radius: 50%;
    background: radial-gradient(circle at center, #020617 0 24%, #fde047 30% 50%, transparent 72%);
    box-shadow: 0 0 12px #facc15;
    opacity: 0.9;
    animation: cballc-glimpse 2.6s ease-in-out infinite alternate;
  }

  /* Glass reflection shine */
  .cballc-shine {
    position: absolute;
    top: 8px;
    left: 12px;
    width: 14px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    transform: rotate(-24deg);
    filter: blur(0.8px);
  }

  /* Stellar sparkles */
  .cballc-spark {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #38bdf8;
    animation: cballc-spark 2.4s ease-in-out infinite alternate;
  }

  .cballc-spark.k1 { top: 38px; left: 16px; animation-delay: 0s; }
  .cballc-spark.k2 { top: 20px; left: 42px; background: #fde047; box-shadow: 0 0 6px #facc15; animation-delay: -0.8s; }
  .cballc-spark.k3 { top: 44px; left: 36px; animation-delay: -1.6s; }

  @keyframes cballc-mist1 {
    0% { transform: rotate(0deg) translateX(12px) rotate(0deg) scale(0.9); }
    100% { transform: rotate(360deg) translateX(12px) rotate(-360deg) scale(1.15); }
  }

  @keyframes cballc-mist2 {
    0% { transform: rotate(0deg) translateX(-12px) rotate(0deg) scale(1.15); }
    100% { transform: rotate(-360deg) translateX(-12px) rotate(360deg) scale(0.85); }
  }

  @keyframes cballc-glimpse {
    0% { transform: translateY(-4px) scale(0.7); opacity: 0.4; }
    100% { transform: translateY(4px) scale(1.35); opacity: 1; }
  }

  @keyframes cballc-spark {
    0% { transform: translate(-6px, -4px) scale(0.5); opacity: 0.3; }
    100% { transform: translate(6px, 4px) scale(1.4); opacity: 1; }
  }
  `,
};

const crystalBallMarkup = {
  v1: `
      <div class="cball">
        <div class="cball-glass">
          <div class="cball-mist m1"></div>
          <div class="cball-mist m2"></div>
          <div class="cball-glimpse"></div>
          <div class="cball-shine"></div>
          <div class="cball-spark k1"></div>
          <div class="cball-spark k2"></div>
          <div class="cball-spark k3"></div>
        </div>
        <div class="cball-stand"></div>
      </div>
    `,
  v2: `
      <div class="cballc">
        <div class="cballc-glass">
          <div class="cballc-mist m1"></div>
          <div class="cballc-mist m2"></div>
          <div class="cballc-glimpse"></div>
          <div class="cballc-shine"></div>
          <div class="cballc-spark k1"></div>
          <div class="cballc-spark k2"></div>
          <div class="cballc-spark k3"></div>
        </div>
        <div class="cballc-stand"></div>
      </div>
    `,
};

class ConceptCrystalBall extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${crystalBallStyles[version] || crystalBallStyles.v2}</style>${crystalBallMarkup[version] || crystalBallMarkup.v2}`;
  }
}

if (!customElements.get('concept-crystal-ball')) {
  customElements.define('concept-crystal-ball', ConceptCrystalBall);
}
