const auroraStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor aurora --- */
  .aurora {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #010401 0%, #000 78%, #020a02 100%);
  }

  .aurora::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 14% 22%, rgba(210, 255, 215, 0.8) 0 1px, transparent 1.5px),
      radial-gradient(circle at 78% 14%, rgba(210, 255, 215, 0.65) 0 1px, transparent 1.5px),
      radial-gradient(circle at 52% 30%, rgba(210, 255, 215, 0.5) 0 1px, transparent 1.4px),
      radial-gradient(circle at 30% 10%, rgba(210, 255, 215, 0.45) 0 1px, transparent 1.4px),
      radial-gradient(circle at 90% 40%, rgba(210, 255, 215, 0.4) 0 1px, transparent 1.4px);
    pointer-events: none;
  }

  .aurora::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 22px;
    background: linear-gradient(0deg, rgba(0, 204, 0, 0.14), transparent);
  }

  .aurora-band {
    position: absolute;
    bottom: 16px;
    width: 16px;
    height: 66px;
    filter: blur(2px);
    transform-origin: bottom center;
    animation: aurora-sway 5.5s ease-in-out infinite;
  }

  .aurora-band.b1 {
    left: 8px;
    background: linear-gradient(180deg, rgba(120, 255, 190, 0.55), rgba(0, 204, 0, 0.14) 70%, transparent);
  }

  .aurora-band.b2 {
    left: 32px;
    height: 76px;
    background: linear-gradient(180deg, rgba(0, 255, 200, 0.5), rgba(0, 204, 100, 0.12) 72%, transparent);
    animation-delay: -1.6s;
  }

  .aurora-band.b3 {
    left: 56px;
    height: 60px;
    background: linear-gradient(180deg, rgba(180, 255, 200, 0.6), rgba(60, 220, 60, 0.14) 68%, transparent);
    animation-delay: -3.1s;
  }

  .aurora-band.b4 {
    left: 80px;
    height: 70px;
    background: linear-gradient(180deg, rgba(90, 255, 170, 0.5), rgba(0, 204, 0, 0.12) 70%, transparent);
    animation-delay: -4.4s;
  }

  @keyframes aurora-sway {
    0%, 100% {
      transform: skewX(-9deg) translateX(0) scaleY(1);
      opacity: 0.55;
    }
    50% {
      transform: skewX(11deg) translateX(7px) scaleY(1.07);
      opacity: 1;
    }
  }

  /* --- v2: Atmospheric ionization emission spectrum ---
     557.7nm emerald atomic oxygen green curtain base,
     violet/magenta high-altitude nitrogen rays, and starry Arctic horizon. */
  .arc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #020617 0%, #030712 65%, #051410 100%);
  }

  .arc::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 14% 22%, #ffffff 0 1px, transparent 1.5px),
      radial-gradient(circle at 78% 14%, #ffffff 0 1px, transparent 1.5px),
      radial-gradient(circle at 52% 30%, #7dd3fc 0 1px, transparent 1.4px),
      radial-gradient(circle at 30% 10%, #ffffff 0 1px, transparent 1.4px),
      radial-gradient(circle at 90% 40%, #fbcfe8 0 1px, transparent 1.4px);
    pointer-events: none;
  }

  .arc::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 20px;
    background: linear-gradient(0deg, #022c22, transparent);
  }

  .arc-band {
    position: absolute;
    bottom: 14px;
    width: 18px;
    height: 72px;
    filter: blur(2.5px);
    transform-origin: bottom center;
    animation: aurora-sway 5.5s ease-in-out infinite;
  }

  /* Atomic oxygen green transitioning to nitrogen violet/magenta crowns */
  .arc-band.b1 {
    left: 6px;
    background: linear-gradient(180deg, rgba(192, 132, 252, 0.7) 0%, rgba(34, 197, 94, 0.7) 45%, rgba(16, 185, 129, 0.1) 85%, transparent);
  }

  .arc-band.b2 {
    left: 30px;
    height: 82px;
    background: linear-gradient(180deg, rgba(244, 63, 94, 0.75) 0%, rgba(56, 189, 248, 0.6) 35%, rgba(34, 197, 94, 0.75) 60%, transparent);
    animation-delay: -1.6s;
  }

  .arc-band.b3 {
    left: 54px;
    height: 68px;
    background: linear-gradient(180deg, rgba(168, 85, 247, 0.7) 0%, rgba(34, 197, 94, 0.8) 50%, transparent);
    animation-delay: -3.1s;
  }

  .arc-band.b4 {
    left: 78px;
    height: 76px;
    background: linear-gradient(180deg, rgba(236, 72, 153, 0.65) 0%, rgba(34, 197, 94, 0.7) 50%, transparent);
    animation-delay: -4.4s;
  }
`;

const auroraMarkup = {
  v1: `
    <div class="aurora">
      <div class="aurora-band b1"></div>
      <div class="aurora-band b2"></div>
      <div class="aurora-band b3"></div>
      <div class="aurora-band b4"></div>
    </div>
  `,
  v2: `
    <div class="arc">
      <div class="arc-band b1"></div>
      <div class="arc-band b2"></div>
      <div class="arc-band b3"></div>
      <div class="arc-band b4"></div>
    </div>
  `,
};

class ConceptAurora extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${auroraStyles}</style>${auroraMarkup[version] || auroraMarkup.v2}`;
  }
}

if (!customElements.get('concept-aurora')) {
  customElements.define('concept-aurora', ConceptAurora);
}
