const beakerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A beaker coming to a boil over a burner: bubbles start slow, the
     surface roils, vapor climbs, and the liquid glows hotter - then
     the burner ebbs and it calms. */
  .bk {
    width: 96px;
    height: 100px;
    position: relative;
  }

  /* The beaker: straight walls, spout, graduation marks. */
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

  /* Spout. */
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

  /* Graduations. */
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

  /* Liquid fill, glowing hotter mid-cycle. */
  .bk-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 34px;
    background: linear-gradient(180deg, rgba(0, 160, 32, 0.55), rgba(0, 90, 18, 0.8));
    animation: bk-heat 7s ease-in-out infinite;
  }

  @keyframes bk-heat {
    0%, 100% { filter: brightness(0.8); }
    45%, 60% { filter: brightness(1.5); }
  }

  /* Roiling surface. */
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
    0%, 100% { transform: scaleY(1) translateX(0); }
    50% { transform: scaleY(1.6) translateX(2px); }
  }

  /* Bubbles rising, rate implied by staggered timing. */
  .bk-bubble {
    position: absolute;
    bottom: 2px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 1px solid rgba(190, 255, 205, 0.85);
    animation: bk-bubble ease-in infinite;
  }

  .bk-bubble.b1 { left: 8px; animation-duration: 1.1s; }
  .bk-bubble.b2 { left: 20px; animation-duration: 0.8s; animation-delay: -0.3s; width: 7px; height: 7px; }
  .bk-bubble.b3 { left: 32px; animation-duration: 1s; animation-delay: -0.5s; }
  .bk-bubble.b4 { left: 14px; animation-duration: 0.7s; animation-delay: -0.15s; width: 4px; height: 4px; }
  .bk-bubble.b5 { left: 26px; animation-duration: 0.9s; animation-delay: -0.6s; }

  @keyframes bk-bubble {
    0% { transform: translateY(0) scale(0.5); opacity: 0; }
    20% { opacity: 0.9; }
    90% { transform: translateY(-30px) scale(1.1); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Vapor rising out the top. */
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

  /* Burner flame under the beaker, pulsing with the heat. */
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

  /* Tripod stand legs. */
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
`;

class ConceptBeaker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${beakerStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-beaker')) {
  customElements.define('concept-beaker', ConceptBeaker);
}
