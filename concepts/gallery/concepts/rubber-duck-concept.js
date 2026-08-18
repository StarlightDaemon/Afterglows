const rubberDuckStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rd {
    width: 108px;
    height: 92px;
    position: relative;
    overflow: hidden;
  }

  .rd-water {
    position: absolute;
    left: 0;
    right: 0;
    top: 52px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 110, 22, 0.45), rgba(0, 55, 11, 0.75));
    border-top: 1.5px solid #00ff66;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
  }

  .rd-shimmer {
    position: absolute;
    left: 0;
    right: 0;
    top: 54px;
    height: 30px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.3) 0 1px,
      transparent 1px 7px);
    animation: rd-shimmer 1.4s ease-in-out infinite alternate;
  }

  @keyframes rd-shimmer {
    0% { transform: translateX(-8px); opacity: 0.6; }
    100% { transform: translateX(8px); opacity: 1; }
  }

  .rd-ring {
    position: absolute;
    left: 50%;
    top: 52px;
    width: 30px;
    height: 8px;
    margin-left: -15px;
    border: 1.5px solid #00ff66;
    border-radius: 50%;
    animation: rd-ring 1.4s ease-out infinite;
  }

  .rd-ring.r2 { animation-delay: 0.7s; }

  @keyframes rd-ring {
    0% { transform: scale(0.4); opacity: 1; }
    100% { transform: scale(2.8); opacity: 0; }
  }

  .rd-duck {
    position: absolute;
    left: 50%;
    top: 20px;
    width: 48px;
    height: 40px;
    margin-left: -24px;
    transform-origin: 50% 80%;
    animation: rd-bob 1.4s ease-in-out infinite alternate;
  }

  @keyframes rd-bob {
    0% { transform: translateY(-8px) rotate(-16deg); }
    100% { transform: translateY(8px) rotate(16deg); }
  }

  .rd-body {
    position: absolute;
    left: 4px;
    top: 16px;
    width: 40px;
    height: 22px;
    border-radius: 60% 50% 50% 60% / 70% 60% 60% 80%;
    background: radial-gradient(ellipse at 35% 30%,
      #ffffff,
      rgba(154, 222, 90, 0.95) 55%,
      rgba(0, 150, 30, 0.95));
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
  }

  .rd-body::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 2px;
    width: 10px;
    height: 8px;
    clip-path: polygon(100% 50%, 0 0, 0 100%);
    background: #00ff66;
  }

  .rd-head {
    position: absolute;
    left: 26px;
    top: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #ffffff, #00cc44 75%);
    border: 1.5px solid #00ff66;
  }

  .rd-head::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 5px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #041a0a;
  }

  .rd-bill {
    position: absolute;
    left: 40px;
    top: 8px;
    width: 12px;
    height: 6px;
    border-radius: 40% 60% 60% 40%;
    background: #ffffff;
    border: 1px solid #00ff66;
  }

  .rd-bubble {
    position: absolute;
    border-radius: 50%;
    border: 1px solid #00ff66;
    background: radial-gradient(circle at 35% 30%, #ffffff, transparent 60%);
    box-shadow: 0 0 6px #00ff66;
    animation: rd-bubble 1.2s ease-in infinite;
  }

  .rd-bubble.b1 { left: 16px; top: 64px; width: 6px; height: 6px; animation-delay: 0s; }
  .rd-bubble.b2 { left: 80px; top: 68px; width: 8px; height: 8px; animation-delay: -0.4s; }
  .rd-bubble.b3 { left: 66px; top: 72px; width: 5px; height: 5px; animation-delay: -0.8s; }

  @keyframes rd-bubble {
    0% { transform: translateY(0) scale(0.6); opacity: 1; }
    100% { transform: translateY(-46px) scale(1.4); opacity: 0; }
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

  /* v2: Classic canary-yellow rubber bath duck bobbing on clear azure bath water */
  .rdc {
    width: 108px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 30%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Azure/cyan bathwater */
  .rdc-water {
    position: absolute;
    left: 0;
    right: 0;
    top: 52px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(2, 132, 199, 0.7) 0%, rgba(3, 105, 161, 0.85) 50%, rgba(7, 89, 133, 0.98) 100%);
    border-top: 1.5px solid #38bdf8;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
  }

  .rdc-shimmer {
    position: absolute;
    left: 0;
    right: 0;
    top: 54px;
    height: 30px;
    background: repeating-linear-gradient(180deg,
      rgba(224, 242, 254, 0.35) 0 1px,
      transparent 1px 7px);
    animation: rdc-shimmer 1.4s ease-in-out infinite alternate;
  }

  @keyframes rdc-shimmer {
    0% { transform: translateX(-8px); opacity: 0.6; }
    100% { transform: translateX(8px); opacity: 1; }
  }

  /* Water ripple rings */
  .rdc-ring {
    position: absolute;
    left: 50%;
    top: 52px;
    width: 30px;
    height: 8px;
    margin-left: -15px;
    border: 1.5px solid #38bdf8;
    border-radius: 50%;
    animation: rdc-ring 1.4s ease-out infinite;
  }

  .rdc-ring.r2 { animation-delay: 0.7s; }

  @keyframes rdc-ring {
    0% { transform: scale(0.4); opacity: 1; }
    100% { transform: scale(2.8); opacity: 0; }
  }

  /* Rubber duck carrier */
  .rdc-duck {
    position: absolute;
    left: 50%;
    top: 20px;
    width: 48px;
    height: 40px;
    margin-left: -24px;
    transform-origin: 50% 80%;
    animation: rdc-bob 1.4s ease-in-out infinite alternate;
  }

  @keyframes rdc-bob {
    0% { transform: translateY(-8px) rotate(-16deg); }
    100% { transform: translateY(8px) rotate(16deg); }
  }

  /* Canary-yellow duck body */
  .rdc-body {
    position: absolute;
    left: 4px;
    top: 16px;
    width: 40px;
    height: 22px;
    border-radius: 60% 50% 50% 60% / 70% 60% 60% 80%;
    background: radial-gradient(ellipse at 35% 30%, #ffffff 0%, #facc15 50%, #eab308 85%, #ca8a04 100%);
    border: 1.5px solid #fde047;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.8);
  }

  /* Tail flip */
  .rdc-body::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 2px;
    width: 10px;
    height: 8px;
    clip-path: polygon(100% 50%, 0 0, 0 100%);
    background: #facc15;
  }

  /* Duck head */
  .rdc-head {
    position: absolute;
    left: 26px;
    top: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #ffffff 0%, #fef08a 25%, #facc15 70%, #ca8a04 100%);
    border: 1.5px solid #fde047;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }

  /* Glossy button eye with white glint */
  .rdc-head::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 5px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #09090b;
    box-shadow: 0 0 0 0.5px #ffffff;
  }

  /* Tangerine orange bill */
  .rdc-bill {
    position: absolute;
    left: 40px;
    top: 8px;
    width: 12px;
    height: 6px;
    border-radius: 40% 60% 60% 40%;
    background: linear-gradient(180deg, #fb923c 0%, #f97316 60%, #ea580c 100%);
    border: 1px solid #f97316;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  }

  /* Iridescent soap bubbles with rainbow edge */
  .rdc-bubble {
    position: absolute;
    border-radius: 50%;
    border: 1.5px solid rgba(255, 255, 255, 0.9);
    background: radial-gradient(circle at 35% 30%, #ffffff 0%, rgba(186, 230, 253, 0.6) 40%, rgba(244, 114, 182, 0.5) 80%, transparent 100%);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
    animation: rdc-bubble 1.2s ease-in infinite;
  }

  .rdc-bubble.b1 { left: 16px; top: 64px; width: 6px; height: 6px; animation-delay: 0s; }
  .rdc-bubble.b2 { left: 80px; top: 68px; width: 8px; height: 8px; animation-delay: -0.4s; }
  .rdc-bubble.b3 { left: 66px; top: 72px; width: 5px; height: 5px; animation-delay: -0.8s; }

  @keyframes rdc-bubble {
    0% { transform: translateY(0) scale(0.6); opacity: 1; }
    100% { transform: translateY(-46px) scale(1.4); opacity: 0; }
  }
  `,
};

const rubberDuckMarkup = {
  v1: `
      <div class="rd">
        <div class="rd-water"></div>
        <div class="rd-shimmer"></div>
        <div class="rd-ring"></div>
        <div class="rd-ring r2"></div>
        <div class="rd-bubble b1"></div>
        <div class="rd-bubble b2"></div>
        <div class="rd-bubble b3"></div>
        <div class="rd-duck">
          <div class="rd-body"></div>
          <div class="rd-head"></div>
          <div class="rd-bill"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="rdc">
        <div class="rdc-water"></div>
        <div class="rdc-shimmer"></div>
        <div class="rdc-ring"></div>
        <div class="rdc-ring r2"></div>
        <div class="rdc-bubble b1"></div>
        <div class="rdc-bubble b2"></div>
        <div class="rdc-bubble b3"></div>
        <div class="rdc-duck">
          <div class="rdc-body"></div>
          <div class="rdc-head"></div>
          <div class="rdc-bill"></div>
        </div>
      </div>
    `,
};

class ConceptRubberDuck extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${rubberDuckStyles[version] || rubberDuckStyles.v2}</style>${rubberDuckMarkup[version] || rubberDuckMarkup.v2}`;
  }
}

if (!customElements.get('concept-rubber-duck')) {
  customElements.define('concept-rubber-duck', ConceptRubberDuck);
}
