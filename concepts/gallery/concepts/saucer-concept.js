const saucerStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .saucer-scene {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: linear-gradient(180deg, #000 0%, #010401 70%, #021002 100%);
  }

  .saucer-scene::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 12% 18%, #ffffff 0 1px, transparent 1.5px),
      radial-gradient(circle at 84% 12%, #00ff66 0 1px, transparent 1.5px),
      radial-gradient(circle at 68% 30%, #ffffff 0 1px, transparent 1.4px),
      radial-gradient(circle at 26% 40%, #00ff66 0 1px, transparent 1.4px),
      radial-gradient(circle at 92% 46%, #ffffff 0 1px, transparent 1.4px);
    pointer-events: none;
  }

  .saucer {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 72px;
    height: 30px;
    margin-left: -36px;
    animation: saucer-hover 1.8s ease-in-out infinite alternate;
  }

  .saucer-dome {
    position: absolute;
    top: 0;
    left: 50%;
    width: 30px;
    height: 15px;
    margin-left: -15px;
    border-radius: 15px 15px 0 0;
    background: linear-gradient(180deg, #ffffff, rgba(0, 204, 0, 0.4));
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 10px #00ff66;
  }

  .saucer-body {
    position: absolute;
    top: 12px;
    left: 0;
    width: 72px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(120, 220, 130, 0.95) 0%, rgba(20, 80, 25, 0.95) 55%, rgba(5, 25, 8, 1) 100%);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 12px rgba(0, 255, 100, 0.6);
  }

  .saucer-light {
    position: absolute;
    top: 18px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: saucer-blink 0.8s linear infinite alternate;
  }

  .saucer-light.l1 { left: 9px; animation-delay: 0s; }
  .saucer-light.l2 { left: 24px; animation-delay: -0.2s; }
  .saucer-light.l3 { left: 39px; animation-delay: -0.4s; }
  .saucer-light.l4 { left: 54px; animation-delay: -0.6s; }

  .saucer-glow {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 64px;
    height: 16px;
    margin-left: -32px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0, 255, 100, 0.6), transparent 70%);
    animation: saucer-ground 1.8s ease-in-out infinite alternate;
  }

  .saucer-trail {
    position: absolute;
    top: 44px;
    left: 50%;
    width: 24px;
    height: 36px;
    margin-left: -12px;
    clip-path: polygon(30% 0, 70% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, rgba(0, 255, 100, 0.5), transparent);
    animation: saucer-trail 1.8s ease-in-out infinite alternate;
  }

  @keyframes saucer-hover {
    0% { transform: translate(-18px, -10px) rotate(-14deg); }
    100% { transform: translate(18px, 10px) rotate(14deg); }
  }

  @keyframes saucer-blink {
    0% { transform: scale(0.6); opacity: 0.3; }
    100% { transform: scale(1.3); opacity: 1; }
  }

  @keyframes saucer-ground {
    0% { transform: translateX(-16px) scale(0.8); opacity: 0.4; }
    100% { transform: translateX(16px) scale(1.2); opacity: 0.9; }
  }

  @keyframes saucer-trail {
    0% { transform: translateX(-14px) skewX(-14deg) scaleY(0.8); }
    100% { transform: translateX(14px) skewX(14deg) scaleY(1.2); }
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

  /* v2: Extraterrestrial titanium flying saucer */
  .saucerc-scene {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Starfield */
  .saucerc-scene::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 12% 18%, #ffffff 0 1px, transparent 1.5px),
      radial-gradient(circle at 84% 12%, #38bdf8 0 1px, transparent 1.5px),
      radial-gradient(circle at 68% 30%, #fde047 0 1px, transparent 1.4px),
      radial-gradient(circle at 26% 40%, #ffffff 0 1px, transparent 1.4px),
      radial-gradient(circle at 92% 46%, #c084fc 0 1px, transparent 1.4px);
    pointer-events: none;
  }

  .saucerc {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 72px;
    height: 30px;
    margin-left: -36px;
    animation: saucerc-hover 1.8s ease-in-out infinite alternate;
  }

  /* Translucent cyan cockpit dome */
  .saucerc-dome {
    position: absolute;
    top: 0;
    left: 50%;
    width: 30px;
    height: 15px;
    margin-left: -15px;
    border-radius: 15px 15px 0 0;
    background: linear-gradient(180deg, #ffffff, rgba(14, 165, 233, 0.4));
    border: 1.5px solid #38bdf8;
    box-shadow: inset 0 2px 6px #ffffff, 0 0 12px #00f0ff;
  }

  /* Titanium metallic disc body */
  .saucerc-body {
    position: absolute;
    top: 12px;
    left: 0;
    width: 72px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(180deg, #e2e8f0 0%, #64748b 55%, #1e293b 100%);
    border: 1.5px solid #38bdf8;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8), 0 0 10px rgba(56, 189, 248, 0.5);
  }

  /* Chromatic perimeter lights */
  .saucerc-light {
    position: absolute;
    top: 18px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    animation: saucerc-blink 0.8s linear infinite alternate;
  }

  .saucerc-light.l1 { left: 9px; background: #ef4444; box-shadow: 0 0 8px #dc2626; animation-delay: 0s; }
  .saucerc-light.l2 { left: 24px; background: #facc15; box-shadow: 0 0 8px #eab308; animation-delay: -0.2s; }
  .saucerc-light.l3 { left: 39px; background: #38bdf8; box-shadow: 0 0 8px #0284c7; animation-delay: -0.4s; }
  .saucerc-light.l4 { left: 54px; background: #22c55e; box-shadow: 0 0 8px #16a34a; animation-delay: -0.6s; }

  /* Anti-gravity cyan ground glow */
  .saucerc-glow {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 64px;
    height: 16px;
    margin-left: -32px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(56, 189, 248, 0.8), transparent 70%);
    box-shadow: 0 0 16px rgba(0, 240, 255, 0.7);
    animation: saucerc-ground 1.8s ease-in-out infinite alternate;
  }

  .saucerc-trail {
    position: absolute;
    top: 44px;
    left: 50%;
    width: 24px;
    height: 36px;
    margin-left: -12px;
    clip-path: polygon(30% 0, 70% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, rgba(56, 189, 248, 0.6), transparent);
    animation: saucerc-trail 1.8s ease-in-out infinite alternate;
  }

  @keyframes saucerc-hover {
    0% { transform: translate(-18px, -10px) rotate(-14deg); }
    100% { transform: translate(18px, 10px) rotate(14deg); }
  }

  @keyframes saucerc-blink {
    0% { transform: scale(0.6); opacity: 0.3; }
    100% { transform: scale(1.3); opacity: 1; }
  }

  @keyframes saucerc-ground {
    0% { transform: translateX(-16px) scale(0.8); opacity: 0.4; }
    100% { transform: translateX(16px) scale(1.2); opacity: 0.9; }
  }

  @keyframes saucerc-trail {
    0% { transform: translateX(-14px) skewX(-14deg) scaleY(0.8); }
    100% { transform: translateX(14px) skewX(14deg) scaleY(1.2); }
  }
  `,
};

const saucerMarkup = {
  v1: `
      <div class="saucer-scene">
        <div class="saucer-glow"></div>
        <div class="saucer-trail"></div>
        <div class="saucer">
          <div class="saucer-dome"></div>
          <div class="saucer-body"></div>
          <div class="saucer-light l1"></div>
          <div class="saucer-light l2"></div>
          <div class="saucer-light l3"></div>
          <div class="saucer-light l4"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="saucerc-scene">
        <div class="saucerc-glow"></div>
        <div class="saucerc-trail"></div>
        <div class="saucerc">
          <div class="saucerc-dome"></div>
          <div class="saucerc-body"></div>
          <div class="saucerc-light l1"></div>
          <div class="saucerc-light l2"></div>
          <div class="saucerc-light l3"></div>
          <div class="saucerc-light l4"></div>
        </div>
      </div>
    `,
};

class ConceptSaucer extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${saucerStyles[version] || saucerStyles.v2}</style>${saucerMarkup[version] || saucerMarkup.v2}`;
  }
}

if (!customElements.get('concept-saucer')) {
  customElements.define('concept-saucer', ConceptSaucer);
}
