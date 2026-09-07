const beakerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Monochrome phosphor boiling beaker --- */
  .bk {
    width: 96px;
    height: 100px;
    position: relative;
  }

  .bk-glass {
    position: absolute;
    left: 50%;
    top: 20px;
    width: 46px;
    height: 52px;
    margin-left: -23px;
    border: 2px solid var(--accent, #00cc00);
    border-top: none;
    border-radius: 0 0 6px 6px;
    overflow: hidden;
  }

  .bk-spout {
    position: absolute;
    left: 50%;
    top: 18px;
    width: 8px;
    height: 5px;
    margin-left: 18px;
    border-top: 2px solid var(--accent, #00cc00);
    border-right: 2px solid var(--accent, #00cc00);
    border-radius: 0 4px 0 0;
    transform: rotate(20deg);
  }

  .bk-grad {
    position: absolute;
    left: 4px;
    top: 8px;
    width: 8px;
    height: 36px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.5) 0 1px,
      transparent 1px 8px);
    z-index: 2;
  }

  .bk-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 34px;
    background: linear-gradient(180deg, rgba(0, 160, 32, 0.55), rgba(0, 90, 18, 0.8));
    animation: bk-heat 7s ease-in-out infinite, bk-liquid-boil 1.2s ease-in-out infinite;
  }

  @keyframes bk-heat {
    0%, 100% { filter: brightness(0.8); }
    45%, 60% { filter: brightness(1.5); }
  }

  @keyframes bk-liquid-boil {
    0%, 100% { transform: scaleY(0.92) skewY(-2deg); }
    50% { transform: scaleY(1.12) skewY(2deg); }
  }

  .bk-surface {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 4px;
    background: rgba(190, 255, 205, 0.7);
    animation: bk-roil 0.4s ease-in-out infinite;
  }

  @keyframes bk-roil {
    0%, 100% { transform: translateY(-3px) scaleY(1.6) rotate(-3deg); }
    50% { transform: translateY(2px) scaleY(2.2) rotate(3deg); }
  }

  .bk-bubble {
    position: absolute;
    bottom: 2px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1.5px solid rgba(190, 255, 205, 0.85);
    background: rgba(190, 255, 205, 0.35);
    animation: bk-bubble ease-in infinite;
  }

  .bk-bubble.b1 { left: 8px; animation-duration: 1.1s; width: 8px; height: 8px; }
  .bk-bubble.b2 { left: 18px; animation-duration: 0.8s; animation-delay: -0.3s; width: 11px; height: 11px; }
  .bk-bubble.b3 { left: 30px; animation-duration: 1s; animation-delay: -0.5s; width: 9px; height: 9px; }
  .bk-bubble.b4 { left: 12px; animation-duration: 0.7s; animation-delay: -0.15s; width: 7px; height: 7px; }
  .bk-bubble.b5 { left: 24px; animation-duration: 0.9s; animation-delay: -0.6s; width: 10px; height: 10px; }

  @keyframes bk-bubble {
    0% { transform: translateY(0) scale(0.5); opacity: 0; }
    20% { opacity: 0.95; }
    90% { transform: translateY(-34px) scale(1.25); opacity: 0.95; }
    100% { transform: translateY(-38px) scale(1.5); opacity: 0; }
  }

  .bk-vapor {
    position: absolute;
    top: 6px;
    width: 4px;
    height: 18px;
    border-radius: 2px;
    background: linear-gradient(180deg, transparent, rgba(140, 255, 170, 0.4) 60%, transparent);
    filter: blur(1px);
    opacity: 0;
    animation: bk-vapor 2.4s ease-out infinite, bk-vaporgate 7s ease-in-out infinite;
  }

  .bk-vapor.v1 { left: 32px; }
  .bk-vapor.v2 { left: 44px; animation-delay: -0.9s, 0s; }
  .bk-vapor.v3 { left: 52px; animation-delay: -1.6s, 0s; }

  @keyframes bk-vapor {
    0% { transform: translateY(4px) skewX(0deg); opacity: 0; }
    25% { opacity: 0.7; }
    100% { transform: translateY(-16px) skewX(10deg); opacity: 0; }
  }

  @keyframes bk-vaporgate {
    0%, 25% { visibility: hidden; }
    35%, 70% { visibility: visible; }
    80%, 100% { visibility: hidden; }
  }

  .bk-flame {
    position: absolute;
    left: 50%;
    top: 72px;
    width: 14px;
    height: 16px;
    margin-left: -7px;
    border-radius: 50% 50% 40% 40% / 70% 70% 30% 30%;
    background: radial-gradient(ellipse at 50% 80%, #f2ffdd, rgba(140, 255, 170, 0.6) 55%, transparent);
    transform-origin: 50% 100%;
    animation: bk-flame 7s ease-in-out infinite, bk-flick 0.16s steps(2) infinite;
  }

  @keyframes bk-flame {
    0%, 100% { transform: scaleY(0.7); opacity: 0.7; }
    45%, 60% { transform: scaleY(1.2); opacity: 1; }
  }

  @keyframes bk-flick {
    0% { transform: scaleX(1); }
    100% { transform: scaleX(0.85); }
  }

  .bk-stand {
    position: absolute;
    left: 50%;
    top: 70px;
    width: 46px;
    height: 2px;
    margin-left: -23px;
    background: rgba(0, 204, 0, 0.6);
  }

  .bk-stand::before,
  .bk-stand::after {
    content: '';
    position: absolute;
    top: 0;
    width: 2px;
    height: 20px;
    background: rgba(0, 204, 0, 0.55);
  }

  .bk-stand::before { left: 4px; transform: skewX(-16deg); }
  .bk-stand::after { right: 4px; transform: skewX(16deg); }

  /* --- v2: Borosilicate glass & thermal chemical solution --- */
  .bkc {
    width: 96px;
    height: 100px;
    position: relative;
  }

  .bkc-glass {
    position: absolute;
    left: 50%;
    top: 20px;
    width: 46px;
    height: 52px;
    margin-left: -23px;
    border: 2px solid rgba(210, 240, 255, 0.85);
    border-top: none;
    border-radius: 0 0 6px 6px;
    overflow: hidden;
    background: rgba(200, 235, 255, 0.04);
    box-shadow: inset 0 0 8px rgba(180, 230, 255, 0.15);
  }

  .bkc-spout {
    position: absolute;
    left: 50%;
    top: 18px;
    width: 8px;
    height: 5px;
    margin-left: 18px;
    border-top: 2px solid rgba(210, 240, 255, 0.85);
    border-right: 2px solid rgba(210, 240, 255, 0.85);
    border-radius: 0 4px 0 0;
    transform: rotate(20deg);
  }

  .bkc-grad {
    position: absolute;
    left: 4px;
    top: 8px;
    width: 8px;
    height: 36px;
    background: repeating-linear-gradient(180deg,
      rgba(255, 255, 255, 0.75) 0 1px,
      transparent 1px 8px);
    z-index: 2;
  }

  .bkc-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 34px;
    background: linear-gradient(180deg, #ff7a18, #d63031);
    animation: bkc-heat 7s ease-in-out infinite, bkc-liquid-boil 1.2s ease-in-out infinite;
  }

  @keyframes bkc-heat {
    0%, 100% {
      background: linear-gradient(180deg, rgba(235, 90, 20, 0.75), rgba(180, 25, 25, 0.9));
      filter: brightness(0.85);
    }
    45%, 60% {
      background: linear-gradient(180deg, #ffaa00, #ff3838);
      filter: brightness(1.3) drop-shadow(0 0 8px rgba(255, 120, 0, 0.7));
    }
  }

  @keyframes bkc-liquid-boil {
    0%, 100% { transform: scaleY(0.92) skewY(-2deg); }
    50% { transform: scaleY(1.12) skewY(2deg); }
  }

  .bkc-surface {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 4px;
    background: rgba(255, 230, 160, 0.85);
    animation: bkc-roil 0.4s ease-in-out infinite;
  }

  @keyframes bkc-roil {
    0%, 100% { transform: translateY(-3px) scaleY(1.6) rotate(-3deg); }
    50% { transform: translateY(2px) scaleY(2.2) rotate(3deg); }
  }

  .bkc-bubble {
    position: absolute;
    bottom: 2px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1.5px solid rgba(255, 255, 255, 0.95);
    background: rgba(255, 235, 180, 0.5);
    box-shadow: 0 0 4px #ffa500;
    animation: bkc-bubble ease-in infinite;
  }

  .bkc-bubble.b1 { left: 8px; animation-duration: 1.1s; width: 8px; height: 8px; }
  .bkc-bubble.b2 { left: 18px; animation-duration: 0.8s; animation-delay: -0.3s; width: 11px; height: 11px; }
  .bkc-bubble.b3 { left: 30px; animation-duration: 1s; animation-delay: -0.5s; width: 9px; height: 9px; }
  .bkc-bubble.b4 { left: 12px; animation-duration: 0.7s; animation-delay: -0.15s; width: 7px; height: 7px; }
  .bkc-bubble.b5 { left: 24px; animation-duration: 0.9s; animation-delay: -0.6s; width: 10px; height: 10px; }

  @keyframes bkc-bubble {
    0% { transform: translateY(0) scale(0.5); opacity: 0; }
    20% { opacity: 0.95; }
    90% { transform: translateY(-34px) scale(1.25); opacity: 0.95; }
    100% { transform: translateY(-38px) scale(1.5); opacity: 0; }
  }

  .bkc-vapor {
    position: absolute;
    top: 6px;
    width: 4px;
    height: 18px;
    border-radius: 2px;
    background: linear-gradient(180deg, transparent, rgba(230, 245, 255, 0.5) 60%, transparent);
    filter: blur(1px);
    opacity: 0;
    animation: bkc-vapor 2.4s ease-out infinite, bkc-vaporgate 7s ease-in-out infinite;
  }

  .bkc-vapor.v1 { left: 32px; }
  .bkc-vapor.v2 { left: 44px; animation-delay: -0.9s, 0s; }
  .bkc-vapor.v3 { left: 52px; animation-delay: -1.6s, 0s; }

  @keyframes bkc-vapor {
    0% { transform: translateY(4px) skewX(0deg); opacity: 0; }
    25% { opacity: 0.8; }
    100% { transform: translateY(-16px) skewX(10deg); opacity: 0; }
  }

  @keyframes bkc-vaporgate {
    0%, 25% { visibility: hidden; }
    35%, 70% { visibility: visible; }
    80%, 100% { visibility: hidden; }
  }

  /* Gas burner flame underneath */
  .bkc-flame {
    position: absolute;
    left: 50%;
    top: 72px;
    width: 14px;
    height: 16px;
    margin-left: -7px;
    border-radius: 50% 50% 40% 40% / 70% 70% 30% 30%;
    background: radial-gradient(ellipse at 50% 80%, #ffffff, #00d2ff 45%, rgba(0, 80, 255, 0.8) 75%, transparent);
    transform-origin: 50% 100%;
    animation: bkc-flame 7s ease-in-out infinite, bkc-flick 0.16s steps(2) infinite;
  }

  @keyframes bkc-flame {
    0%, 100% { transform: scaleY(0.7); box-shadow: 0 0 8px rgba(0, 150, 255, 0.6); opacity: 0.75; }
    45%, 60% { transform: scaleY(1.25); box-shadow: 0 0 14px rgba(0, 200, 255, 0.9); opacity: 1; }
  }

  @keyframes bkc-flick {
    0% { transform: scaleX(1); }
    100% { transform: scaleX(0.85); }
  }

  /* Tripod stand */
  .bkc-stand {
    position: absolute;
    left: 50%;
    top: 70px;
    width: 46px;
    height: 2px;
    margin-left: -23px;
    background: #647082;
  }

  .bkc-stand::before,
  .bkc-stand::after {
    content: '';
    position: absolute;
    top: 0;
    width: 2px;
    height: 20px;
    background: #4b5563;
  }

  .bkc-stand::before { left: 4px; transform: skewX(-16deg); }
  .bkc-stand::after { right: 4px; transform: skewX(16deg); }
`;

const beakerMarkup = {
  v1: `
    <div class="bk">
      <div class="bk-vapor v1"></div>
      <div class="bk-vapor v2"></div>
      <div class="bk-vapor v3"></div>
      <div class="bk-spout"></div>
      <div class="bk-glass">
        <div class="bk-liquid"></div>
        <div class="bk-surface"></div>
        <div class="bk-bubble b1"></div>
        <div class="bk-bubble b2"></div>
        <div class="bk-bubble b3"></div>
        <div class="bk-bubble b4"></div>
        <div class="bk-bubble b5"></div>
        <div class="bk-grad"></div>
      </div>
      <div class="bk-stand"></div>
      <div class="bk-flame"></div>
    </div>
  `,
  v2: `
    <div class="bkc">
      <div class="bkc-vapor v1"></div>
      <div class="bkc-vapor v2"></div>
      <div class="bkc-vapor v3"></div>
      <div class="bkc-spout"></div>
      <div class="bkc-glass">
        <div class="bkc-liquid"></div>
        <div class="bkc-surface"></div>
        <div class="bkc-bubble b1"></div>
        <div class="bkc-bubble b2"></div>
        <div class="bkc-bubble b3"></div>
        <div class="bkc-bubble b4"></div>
        <div class="bkc-bubble b5"></div>
        <div class="bkc-grad"></div>
      </div>
      <div class="bkc-stand"></div>
      <div class="bkc-flame"></div>
    </div>
  `,
};

class ConceptBeaker extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${beakerStyles}</style>${beakerMarkup[version] || beakerMarkup.v2}`;
  }
}

if (!customElements.get('concept-beaker')) {
  customElements.define('concept-beaker', ConceptBeaker);
}
