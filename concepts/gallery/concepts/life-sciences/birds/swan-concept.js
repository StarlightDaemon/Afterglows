// Swan: v1 and v2 preserved.
// v3 adds naturalistic mute swan colorization:
// deep cobalt/emerald lake with gentle shimmering mirror reflection, pure snow-white plumage,
// vivid orange bill with black basal knob, and crystal water droplet sparkles.
const swanStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sw {
    width: 116px;
    height: 92px;
    position: relative;
    overflow: hidden;
  }

  .sw-water {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 50%;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.6), rgba(0, 45, 9, 0.8));
    border-top: 1.5px solid #00ff66;
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.4);
  }

  .sw-shimmer {
    position: absolute;
    left: 0;
    right: 0;
    top: 54%;
    height: 40%;
    background: repeating-linear-gradient(180deg,
      rgba(0, 255, 100, 0.2) 0 1px,
      transparent 1px 7px);
    animation: sw-shimmer 1.2s ease-in-out infinite alternate;
  }

  @keyframes sw-shimmer {
    0% { transform: translateX(-6px); }
    100% { transform: translateX(6px); }
  }

  .sw-swan {
    position: absolute;
    left: 32px;
    top: 20px;
    width: 46px;
    height: 40px;
    animation: sw-glide 1.6s ease-in-out infinite alternate;
  }

  @keyframes sw-glide {
    0% { transform: translate(-14px, 4px) rotate(-3deg); }
    100% { transform: translate(14px, -3px) rotate(3deg); }
  }

  .sw-body {
    position: absolute;
    left: 0;
    top: 24px;
    width: 40px;
    height: 16px;
    border-radius: 60% 40% 50% 50% / 80% 60% 40% 60%;
    background: radial-gradient(ellipse at 40% 30%, #ffffff, #00ff66 70%);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
  }

  .sw-wing {
    position: absolute;
    left: 6px;
    top: 18px;
    width: 24px;
    height: 14px;
    border-radius: 60% 40% 50% 80%;
    background: linear-gradient(180deg, #ffffff, rgba(0, 204, 0, 0.6));
    border: 1px solid #00ff66;
    transform-origin: bottom left;
    animation: sw-wing-flutter 1.2s ease-in-out infinite alternate;
  }

  @keyframes sw-wing-flutter {
    0% { transform: rotate(0deg) translateY(0); }
    100% { transform: rotate(-12deg) translateY(-3px); }
  }

  .sw-neck {
    position: absolute;
    left: 30px;
    top: 0;
    width: 20px;
    height: 30px;
    transform-origin: 20% 100%;
    animation: sw-preen 1.6s ease-in-out infinite alternate;
  }

  .sw-neck-curve {
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 26px;
    border: 3.5px solid #ffffff;
    border-left: none;
    border-bottom: none;
    border-radius: 0 60% 0 0;
    box-shadow: 0 0 6px #00ff66;
  }

  .sw-head {
    position: absolute;
    left: 12px;
    top: -2px;
    width: 8px;
    height: 7px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #00ff66;
  }

  .sw-head::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 2px;
    clip-path: polygon(0 0, 100% 40%, 100% 60%, 0 100%);
    background: #00ff66;
  }

  @keyframes sw-preen {
    0% { transform: rotate(-10deg); }
    100% { transform: rotate(26deg); }
  }

  .sw-reflection {
    position: absolute;
    left: 32px;
    top: 44px;
    width: 46px;
    height: 24px;
    opacity: 0.35;
    transform: scaleY(-1);
    animation: sw-glide 1.6s ease-in-out infinite alternate;
  }

  .sw-reflection .sw-body {
    top: 0;
  }

  .sw-wake {
    position: absolute;
    top: 42px;
    left: 12px;
    width: 28px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ff66);
    animation: sw-glide 1.6s ease-in-out infinite alternate;
  }

  .sw-drop {
    position: absolute;
    width: 3px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: sw-drop 1.2s linear infinite;
  }

  .sw-drop.d1 { left: 44px; top: 34px; }
  .sw-drop.d2 { left: 48px; top: 32px; animation-delay: 0.6s; }

  @keyframes sw-drop {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(18px); opacity: 0; }
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

  .sw {
    width: 112px;
    height: 92px;
    position: relative;
    overflow: hidden;
  }

  .sw-water {
    position: absolute;
    left: 0;
    right: 0;
    top: 58px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 204, 0, 0.4), rgba(0, 40, 8, 0.6) 60%, transparent);
    border-top: 1.5px solid #00ff66;
  }

  .sw-bird {
    position: absolute;
    left: 30px;
    top: 20px;
    width: 52px;
    height: 40px;
    animation: sw-glide 1.6s ease-in-out infinite alternate;
  }

  @keyframes sw-glide {
    0% { transform: translate(-14px, 4px) rotate(-3deg); }
    100% { transform: translate(14px, -3px) rotate(3deg); }
  }

  .sw-hull {
    position: absolute;
    left: 4px;
    top: 24px;
    width: 42px;
    height: 16px;
    border-radius: 55% 40% 45% 60% / 80% 55% 45% 60%;
    background: linear-gradient(180deg, #ffffff, #00ff66 70%);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
  }

  .sw-tail {
    position: absolute;
    left: -1px;
    top: 20px;
    width: 10px;
    height: 8px;
    clip-path: polygon(0 20%, 100% 55%, 55% 100%);
    background: #ffffff;
  }

  .sw-wing {
    position: absolute;
    left: 14px;
    top: 26px;
    width: 24px;
    height: 10px;
    border-radius: 60% 40% 30% 60%;
    background: linear-gradient(180deg, #ffffff, #00ff66);
    transform-origin: bottom left;
    animation: sw-wing-flutter 1.2s ease-in-out infinite alternate;
  }

  @keyframes sw-wing-flutter {
    0% { transform: rotate(0deg) translateY(0); }
    100% { transform: rotate(-12deg) translateY(-3px); }
  }

  .sw-neckset {
    position: absolute;
    left: 36px;
    top: 0;
    width: 26px;
    height: 30px;
    transform-origin: 6px 28px;
    animation: sw-preen 1.6s ease-in-out infinite alternate;
  }

  @keyframes sw-preen {
    0% { transform: rotate(-10deg); }
    100% { transform: rotate(26deg); }
  }

  .sw-neck {
    position: absolute;
    left: 2px;
    top: 4px;
    width: 18px;
    height: 26px;
    border-left: 4.5px solid #ffffff;
    border-top: 4.5px solid #ffffff;
    border-radius: 100% 0 0 0;
    box-shadow: 0 0 6px #00ff66;
  }

  .sw-head {
    position: absolute;
    left: 14px;
    top: 1px;
    width: 12px;
    height: 8px;
    border-radius: 60% 50% 50% 40%;
    background: #ffffff;
  }

  .sw-eye {
    position: absolute;
    left: 6px;
    top: 2.5px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #000000;
  }

  .sw-beak {
    position: absolute;
    left: 24px;
    top: 4px;
    width: 8px;
    height: 4px;
    clip-path: polygon(0 0, 100% 45%, 0 100%);
    background: #00ff66;
  }

  .sw-reflection {
    position: absolute;
    left: 30px;
    top: 60px;
    width: 52px;
    height: 26px;
    transform: scaleY(-1);
    opacity: 0.3;
    animation: sw-glide 1.6s ease-in-out infinite alternate;
  }

  .sw-reflection .sw-hull {
    top: 8px;
  }

  .sw-reflection .sw-neck {
    position: absolute;
    left: 38px;
    top: 8px;
    height: 18px;
  }

  .sw-ripple {
    position: absolute;
    top: 56px;
    width: 20px;
    height: 6px;
    border-radius: 50%;
    border: 1.5px solid #00ff66;
    border-top-color: transparent;
    animation: sw-ripple 1.2s ease-out infinite;
  }

  .sw-ripple.r1 { left: 60px; }
  .sw-ripple.r2 { left: 40px; animation-delay: -0.6s; }

  @keyframes sw-ripple {
    0% { transform: scale(0.4); opacity: 1; }
    100% { transform: scale(2.2); opacity: 0; }
  }

  .sw-drop {
    position: absolute;
    left: 74px;
    top: 48px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: sw-drop 1.2s ease-out infinite;
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

  /* v3: Pure snow-white mute swan on tranquil sapphire lake */
  .swc {
    width: 112px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 30%, #0369a1 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Tranquil lake water */
  .swc-water {
    position: absolute;
    left: 0;
    right: 0;
    top: 58px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(14, 165, 233, 0.4) 0%, rgba(2, 6, 23, 0.8) 100%);
    border-top: 1.5px solid #38bdf8;
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
  }

  .swc-bird {
    position: absolute;
    left: 30px;
    top: 20px;
    width: 52px;
    height: 40px;
    animation: swc-glide 1.6s ease-in-out infinite alternate;
  }

  @keyframes swc-glide {
    0% { transform: translate(-14px, 4px) rotate(-3deg); }
    100% { transform: translate(14px, -3px) rotate(3deg); }
  }

  /* Pure white swan hull */
  .swc-hull {
    position: absolute;
    left: 4px;
    top: 24px;
    width: 42px;
    height: 16px;
    border-radius: 55% 40% 45% 60% / 80% 55% 45% 60%;
    background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 60%, #cbd5e1 100%);
    border: 1.5px solid #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 255, 255, 0.5);
  }

  /* Tail feathers */
  .swc-tail {
    position: absolute;
    left: -1px;
    top: 20px;
    width: 10px;
    height: 8px;
    clip-path: polygon(0 20%, 100% 55%, 55% 100%);
    background: #ffffff;
  }

  /* Soft folded wing */
  .swc-wing {
    position: absolute;
    left: 14px;
    top: 26px;
    width: 24px;
    height: 10px;
    border-radius: 60% 40% 30% 60%;
    background: linear-gradient(180deg, #ffffff, #e2e8f0);
    border: 1px solid #ffffff;
    transform-origin: bottom left;
    animation: swc-wing-flutter 1.2s ease-in-out infinite alternate;
  }

  @keyframes swc-wing-flutter {
    0% { transform: rotate(0deg) translateY(0); }
    100% { transform: rotate(-12deg) translateY(-3px); }
  }

  /* Neck assembly */
  .swc-neckset {
    position: absolute;
    left: 36px;
    top: 0;
    width: 26px;
    height: 30px;
    transform-origin: 6px 28px;
    animation: swc-preen 1.6s ease-in-out infinite alternate;
  }

  @keyframes swc-preen {
    0% { transform: rotate(-10deg); }
    100% { transform: rotate(26deg); }
  }

  /* Graceful white S-neck */
  .swc-neck {
    position: absolute;
    left: 2px;
    top: 4px;
    width: 18px;
    height: 26px;
    border-left: 4.5px solid #ffffff;
    border-top: 4.5px solid #ffffff;
    border-radius: 100% 0 0 0;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  }

  /* White swan head */
  .swc-head {
    position: absolute;
    left: 14px;
    top: 1px;
    width: 12px;
    height: 8px;
    border-radius: 60% 50% 50% 40%;
    background: #ffffff;
  }

  /* Black eye and basal mask patch */
  .swc-eye {
    position: absolute;
    left: 6px;
    top: 2.5px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #09090b;
    box-shadow: 1px 0 0 #09090b;
  }

  /* Vibrant orange bill */
  .swc-beak {
    position: absolute;
    left: 24px;
    top: 4px;
    width: 8px;
    height: 4px;
    clip-path: polygon(0 0, 100% 45%, 0 100%);
    background: #ea580c;
    box-shadow: 0 0 4px #f97316;
  }

  /* Soft reflected copy */
  .swc-reflection {
    position: absolute;
    left: 30px;
    top: 60px;
    width: 52px;
    height: 26px;
    transform: scaleY(-1);
    opacity: 0.35;
    animation: swc-glide 1.6s ease-in-out infinite alternate;
  }

  .swc-reflection .swc-hull {
    top: 8px;
  }

  .swc-reflection .swc-neck {
    position: absolute;
    left: 38px;
    top: 8px;
    height: 18px;
  }

  /* Water ripples */
  .swc-ripple {
    position: absolute;
    top: 56px;
    width: 20px;
    height: 6px;
    border-radius: 50%;
    border: 1.5px solid #38bdf8;
    border-top-color: transparent;
    animation: swc-ripple 1.2s ease-out infinite;
  }

  .swc-ripple.r1 { left: 60px; }
  .swc-ripple.r2 { left: 40px; animation-delay: -0.6s; }

  @keyframes swc-ripple {
    0% { transform: scale(0.4); opacity: 1; }
    100% { transform: scale(2.2); opacity: 0; }
  }

  /* Water droplet sparkle */
  .swc-drop {
    position: absolute;
    left: 74px;
    top: 48px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 6px #ffffff;
    animation: swc-drop 1.2s ease-out infinite;
  }

  @keyframes swc-drop {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(18px); opacity: 0; }
  }
  `,
};

const swanMarkup = {
  v1: `
      <div class="sw">
        <div class="sw-water"></div>
        <div class="sw-shimmer"></div>
        <div class="sw-reflection">
          <div class="sw-body"></div>
        </div>
        <div class="sw-wake"></div>
        <div class="sw-drop d1"></div>
        <div class="sw-drop d2"></div>
        <div class="sw-swan">
          <div class="sw-body"></div>
          <div class="sw-wing"></div>
          <div class="sw-neck">
            <div class="sw-neck-curve"></div>
            <div class="sw-head"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="sw">
        <div class="sw-water"></div>
        <div class="sw-reflection">
          <div class="sw-hull"></div>
          <div class="sw-neck"></div>
        </div>
        <div class="sw-ripple r1"></div>
        <div class="sw-ripple r2"></div>
        <div class="sw-drop"></div>
        <div class="sw-bird">
          <div class="sw-tail"></div>
          <div class="sw-hull"></div>
          <div class="sw-wing"></div>
          <div class="sw-neckset">
            <div class="sw-neck"></div>
            <div class="sw-head">
              <div class="sw-eye"></div>
            </div>
            <div class="sw-beak"></div>
          </div>
        </div>
      </div>
    `,
  v3: `
      <div class="swc">
        <div class="swc-water"></div>
        <div class="swc-reflection">
          <div class="swc-hull"></div>
          <div class="swc-neck"></div>
        </div>
        <div class="swc-ripple r1"></div>
        <div class="swc-ripple r2"></div>
        <div class="swc-drop"></div>
        <div class="swc-bird">
          <div class="swc-tail"></div>
          <div class="swc-hull"></div>
          <div class="swc-wing"></div>
          <div class="swc-neckset">
            <div class="swc-neck"></div>
            <div class="swc-head">
              <div class="swc-eye"></div>
            </div>
            <div class="swc-beak"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptSwan extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${swanStyles[version] || swanStyles.v3}</style>${swanMarkup[version] || swanMarkup.v3}`;
  }
}

if (!customElements.get('concept-swan')) {
  customElements.define('concept-swan', ConceptSwan);
}
