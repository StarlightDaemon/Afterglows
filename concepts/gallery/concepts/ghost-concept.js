const ghostStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ghost-scene {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ghost {
    position: relative;
    width: 46px;
    height: 58px;
    animation: ghost-float 2.4s ease-in-out infinite;
  }

  .ghost-body {
    position: absolute;
    inset: 0;
    border-radius: 23px 23px 0 0;
    background: linear-gradient(180deg, rgba(210, 255, 220, 0.7) 0%, rgba(140, 255, 170, 0.45) 70%, rgba(120, 255, 150, 0.25) 100%);
    box-shadow: inset 0 0 12px rgba(220, 255, 228, 0.5), 0 0 18px rgba(0, 255, 100, 0.45);
    filter: blur(0.4px);
  }

  .ghost-tail {
    position: absolute;
    bottom: -9px;
    width: 15px;
    height: 14px;
    border-radius: 0 0 50% 50%;
    background: rgba(140, 255, 170, 0.4);
    transform-origin: top center;
    animation: ghost-tail 1.4s ease-in-out infinite alternate;
  }

  .ghost-tail.t1 { left: 0; animation-delay: 0s; }
  .ghost-tail.t2 { left: 15px; animation-delay: -0.4s; height: 17px; }
  .ghost-tail.t3 { left: 31px; animation-delay: -0.8s; }

  .ghost-eye {
    position: absolute;
    top: 20px;
    width: 7px;
    height: 10px;
    border-radius: 50%;
    background: #020a04;
    box-shadow: inset 0 0 3px rgba(0, 204, 0, 0.6);
    animation: ghost-eyes 2.4s ease-in-out infinite;
  }

  .ghost-eye.left { left: 11px; }
  .ghost-eye.right { right: 11px; }

  .ghost-mouth {
    position: absolute;
    top: 36px;
    left: 50%;
    width: 6px;
    height: 8px;
    margin-left: -3px;
    border-radius: 50%;
    background: #020a04;
    animation: ghost-mouth 2.4s ease-in-out infinite alternate;
  }

  .ghost-wisp {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.9);
    box-shadow: 0 0 8px #00ff66;
    opacity: 0;
    animation: ghost-wisp 2.2s ease-out infinite;
  }

  .ghost-wisp.w1 { left: 22px; bottom: 30px; animation-delay: 0s; }
  .ghost-wisp.w2 { left: 74px; bottom: 40px; animation-delay: -0.7s; }
  .ghost-wisp.w3 { left: 50px; bottom: 22px; animation-delay: -1.4s; }

  @keyframes ghost-float {
    0% { transform: translate(-14px, 12px) rotate(-8deg) scale(0.95); }
    25% { transform: translate(12px, -14px) rotate(6deg) scale(1.08); }
    50% { transform: translate(16px, 8px) rotate(-6deg) scale(0.98); }
    75% { transform: translate(-10px, -12px) rotate(8deg) scale(1.05); }
    100% { transform: translate(-14px, 12px) rotate(-8deg) scale(0.95); }
  }

  @keyframes ghost-tail {
    0% { transform: skewX(-24deg) scaleY(0.85); }
    100% { transform: skewX(24deg) scaleY(1.4); }
  }

  @keyframes ghost-eyes {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-3px); }
    50% { transform: translateX(3px); }
    75% { transform: scaleY(0.2); }
  }

  @keyframes ghost-mouth {
    0% { transform: scaleY(0.6); }
    100% { transform: scaleY(1.4); }
  }

  @keyframes ghost-wisp {
    0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
    20% { opacity: 1; transform: translate(2px, -8px) scale(1.2); }
    100% { opacity: 0; transform: translate(8px, -36px) scale(0.4); }
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

  /* v2: Spectral midnight apparition with luminous cyan/mint ectoplasm,
     glowing phantom aura, shifting translucency, and eerie spirit wisps */
  .ghostc-scene {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .ghostc {
    position: relative;
    width: 46px;
    height: 58px;
    animation: ghostc-float 2.4s ease-in-out infinite;
  }

  /* Ectoplasmic glowing body */
  .ghostc-body {
    position: absolute;
    inset: 0;
    border-radius: 23px 23px 0 0;
    background: linear-gradient(180deg, rgba(224, 242, 254, 0.85) 0%, rgba(103, 232, 249, 0.6) 60%, rgba(94, 234, 212, 0.2) 100%);
    box-shadow: inset 0 0 12px #ffffff, 0 0 20px #38bdf8, 0 0 35px #00f0ff;
    filter: blur(0.4px);
  }

  /* Swaying ghostly tails */
  .ghostc-tail {
    position: absolute;
    bottom: -9px;
    width: 15px;
    height: 14px;
    border-radius: 0 0 50% 50%;
    background: rgba(103, 232, 249, 0.4);
    box-shadow: 0 0 8px #38bdf8;
    transform-origin: top center;
    animation: ghostc-tail 1.4s ease-in-out infinite alternate;
  }

  .ghostc-tail.t1 { left: 0; animation-delay: 0s; }
  .ghostc-tail.t2 { left: 15px; animation-delay: -0.4s; height: 17px; }
  .ghostc-tail.t3 { left: 31px; animation-delay: -0.8s; }

  /* Dark hollow eyes with glowing cyan rims */
  .ghostc-eye {
    position: absolute;
    top: 20px;
    width: 7px;
    height: 10px;
    border-radius: 50%;
    background: #020617;
    box-shadow: inset 0 0 4px #00f0ff, 0 0 6px #38bdf8;
    animation: ghostc-eyes 2.4s ease-in-out infinite;
  }

  .ghostc-eye.left { left: 11px; }
  .ghostc-eye.right { right: 11px; }

  /* O-shaped ghostly mouth */
  .ghostc-mouth {
    position: absolute;
    top: 36px;
    left: 50%;
    width: 6px;
    height: 8px;
    margin-left: -3px;
    border-radius: 50%;
    background: #020617;
    box-shadow: inset 0 0 3px #00f0ff;
    animation: ghostc-mouth 2.4s ease-in-out infinite alternate;
  }

  /* Drifting spirit dust wisps */
  .ghostc-wisp {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #67e8f9;
    box-shadow: 0 0 10px #00f0ff, 0 0 16px #38bdf8;
    opacity: 0;
    animation: ghostc-wisp 2.2s ease-out infinite;
  }

  .ghostc-wisp.w1 { left: 22px; bottom: 30px; animation-delay: 0s; }
  .ghostc-wisp.w2 { left: 74px; bottom: 40px; animation-delay: -0.7s; }
  .ghostc-wisp.w3 { left: 50px; bottom: 22px; animation-delay: -1.4s; }

  @keyframes ghostc-float {
    0% { transform: translate(-14px, 12px) rotate(-8deg) scale(0.95); }
    25% { transform: translate(12px, -14px) rotate(6deg) scale(1.08); }
    50% { transform: translate(16px, 8px) rotate(-6deg) scale(0.98); }
    75% { transform: translate(-10px, -12px) rotate(8deg) scale(1.05); }
    100% { transform: translate(-14px, 12px) rotate(-8deg) scale(0.95); }
  }

  @keyframes ghostc-tail {
    0% { transform: skewX(-24deg) scaleY(0.85); }
    100% { transform: skewX(24deg) scaleY(1.4); }
  }

  @keyframes ghostc-eyes {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-3px); }
    50% { transform: translateX(3px); }
    75% { transform: scaleY(0.2); }
  }

  @keyframes ghostc-mouth {
    0% { transform: scaleY(0.6); }
    100% { transform: scaleY(1.4); }
  }

  @keyframes ghostc-wisp {
    0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
    20% { opacity: 1; transform: translate(2px, -8px) scale(1.2); }
    100% { opacity: 0; transform: translate(8px, -36px) scale(0.4); }
  }
  `,
};

const ghostMarkup = {
  v1: `
      <div class="ghost-scene">
        <div class="ghost">
          <div class="ghost-body"></div>
          <div class="ghost-tail t1"></div>
          <div class="ghost-tail t2"></div>
          <div class="ghost-tail t3"></div>
          <div class="ghost-eye left"></div>
          <div class="ghost-eye right"></div>
          <div class="ghost-mouth"></div>
        </div>
        <div class="ghost-wisp w1"></div>
        <div class="ghost-wisp w2"></div>
        <div class="ghost-wisp w3"></div>
      </div>
    `,
  v2: `
      <div class="ghostc-scene">
        <div class="ghostc">
          <div class="ghostc-body"></div>
          <div class="ghostc-tail t1"></div>
          <div class="ghostc-tail t2"></div>
          <div class="ghostc-tail t3"></div>
          <div class="ghostc-eye left"></div>
          <div class="ghostc-eye right"></div>
          <div class="ghostc-mouth"></div>
        </div>
        <div class="ghostc-wisp w1"></div>
        <div class="ghostc-wisp w2"></div>
        <div class="ghostc-wisp w3"></div>
      </div>
    `,
};

class ConceptGhost extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${ghostStyles[version] || ghostStyles.v2}</style>${ghostMarkup[version] || ghostMarkup.v2}`;
  }
}

if (!customElements.get('concept-ghost')) {
  customElements.define('concept-ghost', ConceptGhost);
}
