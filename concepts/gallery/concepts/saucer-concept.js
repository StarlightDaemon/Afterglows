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
      radial-gradient(circle at 12% 18%, rgba(215, 255, 220, 0.75) 0 1px, transparent 1.5px),
      radial-gradient(circle at 84% 12%, rgba(215, 255, 220, 0.6) 0 1px, transparent 1.5px),
      radial-gradient(circle at 68% 30%, rgba(215, 255, 220, 0.45) 0 1px, transparent 1.4px),
      radial-gradient(circle at 26% 40%, rgba(215, 255, 220, 0.4) 0 1px, transparent 1.4px),
      radial-gradient(circle at 92% 46%, rgba(215, 255, 220, 0.35) 0 1px, transparent 1.4px);
    pointer-events: none;
  }

  .saucer {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 72px;
    height: 30px;
    margin-left: -36px;
    animation: saucer-hover 3.6s ease-in-out infinite;
  }

  .saucer-dome {
    position: absolute;
    top: 0;
    left: 50%;
    width: 30px;
    height: 15px;
    margin-left: -15px;
    border-radius: 15px 15px 0 0;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.55), rgba(0, 204, 0, 0.18));
    box-shadow: inset 0 2px 4px rgba(230, 255, 235, 0.35);
  }

  .saucer-body {
    position: absolute;
    top: 12px;
    left: 0;
    width: 72px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(120, 220, 130, 0.85) 0%, rgba(20, 80, 25, 0.95) 55%, rgba(5, 25, 8, 1) 100%);
    box-shadow: 0 2px 8px rgba(0, 204, 0, 0.3);
  }

  .saucer-light {
    position: absolute;
    top: 18px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d8ffd0;
    opacity: 0.2;
    animation: saucer-blink 1.5s linear infinite;
  }

  .saucer-light.l1 { left: 9px; animation-delay: 0s; }
  .saucer-light.l2 { left: 24px; animation-delay: 0.3s; }
  .saucer-light.l3 { left: 39px; animation-delay: 0.6s; }
  .saucer-light.l4 { left: 54px; animation-delay: 0.9s; }

  .saucer-glow {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 56px;
    height: 12px;
    margin-left: -28px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0, 204, 0, 0.35), transparent 70%);
    animation: saucer-ground 3.6s ease-in-out infinite;
  }

  .saucer-trail {
    position: absolute;
    top: 44px;
    left: 50%;
    width: 2px;
    height: 14px;
    margin-left: -1px;
    background: linear-gradient(180deg, rgba(160, 255, 170, 0.5), transparent);
    filter: blur(1px);
    animation: saucer-trail 3.6s ease-in-out infinite;
  }

  @keyframes saucer-hover {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    30% { transform: translateY(7px) rotate(1.5deg); }
    65% { transform: translateY(2px) rotate(-1deg); }
  }

  @keyframes saucer-blink {
    0%, 100% { opacity: 0.15; box-shadow: none; }
    12% { opacity: 1; box-shadow: 0 0 6px rgba(216, 255, 208, 0.9); }
    30% { opacity: 0.15; }
  }

  @keyframes saucer-ground {
    0%, 100% { opacity: 0.35; transform: scaleX(0.85); }
    30% { opacity: 0.85; transform: scaleX(1.1); }
    65% { opacity: 0.5; transform: scaleX(0.95); }
  }

  @keyframes saucer-trail {
    0%, 100% { opacity: 0.15; transform: scaleY(0.6); }
    30% { opacity: 0.7; transform: scaleY(1.15); }
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

  /* v2: Extraterrestrial titanium flying saucer with chromatic perimeter beacon lights,
     translucent cyan cockpit dome, and glowing anti-gravity repulsion core */
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
    animation: saucerc-hover 3.6s ease-in-out infinite;
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
    background: linear-gradient(180deg, rgba(56, 189, 248, 0.75), rgba(14, 165, 233, 0.25));
    border: 1px solid #38bdf8;
    box-shadow: inset 0 2px 6px #ffffff, 0 0 10px #00f0ff;
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
    border: 1px solid #94a3b8;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8), inset 0 1px 2px #ffffff;
  }

  /* Chromatic perimeter lights */
  .saucerc-light {
    position: absolute;
    top: 18px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    opacity: 0.2;
    animation: saucerc-blink 1.5s linear infinite;
  }

  .saucerc-light.l1 { left: 9px; background: #ef4444; box-shadow: 0 0 6px #dc2626; animation-delay: 0s; }
  .saucerc-light.l2 { left: 24px; background: #facc15; box-shadow: 0 0 6px #eab308; animation-delay: 0.3s; }
  .saucerc-light.l3 { left: 39px; background: #38bdf8; box-shadow: 0 0 6px #0284c7; animation-delay: 0.6s; }
  .saucerc-light.l4 { left: 54px; background: #22c55e; box-shadow: 0 0 6px #16a34a; animation-delay: 0.9s; }

  /* Anti-gravity cyan ground glow */
  .saucerc-glow {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 56px;
    height: 12px;
    margin-left: -28px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(56, 189, 248, 0.6), transparent 70%);
    box-shadow: 0 0 14px rgba(0, 240, 255, 0.5);
    animation: saucerc-ground 3.6s ease-in-out infinite;
  }

  .saucerc-trail {
    position: absolute;
    top: 44px;
    left: 50%;
    width: 2px;
    height: 14px;
    margin-left: -1px;
    background: linear-gradient(180deg, #38bdf8, transparent);
    filter: blur(1px);
    animation: saucerc-trail 3.6s ease-in-out infinite;
  }

  @keyframes saucerc-hover {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    30% { transform: translateY(7px) rotate(1.5deg); }
    65% { transform: translateY(2px) rotate(-1deg); }
  }

  @keyframes saucerc-blink {
    0%, 100% { opacity: 0.2; }
    12% { opacity: 1; }
    30% { opacity: 0.2; }
  }

  @keyframes saucerc-ground {
    0%, 100% { opacity: 0.4; transform: scaleX(0.85); }
    30% { opacity: 0.95; transform: scaleX(1.1); }
    65% { opacity: 0.6; transform: scaleX(0.95); }
  }

  @keyframes saucerc-trail {
    0%, 100% { opacity: 0.2; transform: scaleY(0.6); }
    30% { opacity: 0.85; transform: scaleY(1.15); }
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
