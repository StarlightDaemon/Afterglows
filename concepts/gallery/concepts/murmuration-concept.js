const murmurationStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mur {
    width: 114px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  .mur-cloud {
    position: absolute;
    left: 12px;
    top: 10px;
    width: 90px;
    height: 76px;
    transform-origin: 50% 50%;
    animation: mur-flow 2.2s ease-in-out infinite alternate;
  }

  @keyframes mur-flow {
    0% { transform: translate(-16px, -10px) rotate(-18deg) scale(0.8); }
    100% { transform: translate(16px, 10px) rotate(18deg) scale(1.25); }
  }

  .mur-bird {
    position: absolute;
    width: 5px;
    height: 4px;
    border-radius: 50% 50% 0 0;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: mur-bird-orbit 1.4s ease-in-out infinite alternate;
  }

  .mur-bird::after {
    content: '';
    position: absolute;
    top: 1px;
    left: -3px;
    width: 11px;
    height: 1.5px;
    background: rgba(140, 255, 170, 0.95);
    border-radius: 1px;
  }

  .mur-bird.b1 { left: 45px; top: 35px; animation-delay: 0s; }
  .mur-bird.b2 { left: 35px; top: 25px; animation-delay: -0.2s; }
  .mur-bird.b3 { left: 55px; top: 22px; animation-delay: -0.4s; }
  .mur-bird.b4 { left: 25px; top: 40px; animation-delay: -0.6s; }
  .mur-bird.b5 { left: 65px; top: 45px; animation-delay: -0.8s; }
  .mur-bird.b6 { left: 40px; top: 50px; animation-delay: -1.0s; }
  .mur-bird.b7 { left: 52px; top: 55px; animation-delay: -1.2s; }
  .mur-bird.b8 { left: 20px; top: 28px; animation-delay: -0.3s; }
  .mur-bird.b9 { left: 70px; top: 32px; animation-delay: -0.9s; }
  .mur-bird.b10 { left: 48px; top: 15px; animation-delay: -1.3s; }

  @keyframes mur-bird-orbit {
    0% { transform: translate(0, 0) scale(0.85); }
    100% { transform: translate(calc(18px * var(--dx, 1)), calc(14px * var(--dy, -1))) scale(1.3); }
  }

  .mur-bird.b1 { --dx: 1; --dy: 1; }
  .mur-bird.b2 { --dx: -1.2; --dy: 0.8; }
  .mur-bird.b3 { --dx: 0.9; --dy: -1.1; }
  .mur-bird.b4 { --dx: -1.5; --dy: -0.7; }
  .mur-bird.b5 { --dx: 1.3; --dy: 1.2; }
  .mur-bird.b6 { --dx: -0.7; --dy: 1.4; }
  .mur-bird.b7 { --dx: 0.8; --dy: -1.3; }
  .mur-bird.b8 { --dx: -1.1; --dy: -1.0; }
  .mur-bird.b9 { --dx: 1.4; --dy: -0.5; }
  .mur-bird.b10 { --dx: 0.5; --dy: 1.5; }

  .mur-wave {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1.5px dashed rgba(0, 255, 100, 0.6);
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
    animation: mur-density-pulse 1.6s ease-in-out infinite alternate;
    pointer-events: none;
  }

  @keyframes mur-density-pulse {
    0% { transform: scale(0.65) rotate(-30deg); opacity: 0.3; }
    100% { transform: scale(1.3) rotate(30deg); opacity: 0.9; }
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

  /* v2: Twilight starling murmuration against rich amethyst-rose sunset sky */
  .murc {
    width: 114px;
    height: 96px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 60% 80%, #be185d 0%, #581c87 40%, #1e1b4b 75%, #020617 100%);
    border-radius: 6px;
  }

  /* Swarm cloud container */
  .murc-cloud {
    position: absolute;
    left: 12px;
    top: 10px;
    width: 90px;
    height: 76px;
    transform-origin: 50% 50%;
    animation: murc-flow 2.2s ease-in-out infinite alternate;
  }

  @keyframes murc-flow {
    0% { transform: translate(-16px, -10px) rotate(-18deg) scale(0.8); }
    100% { transform: translate(16px, 10px) rotate(18deg) scale(1.25); }
  }

  /* Iridescent starling bird silhouette */
  .murc-bird {
    position: absolute;
    width: 5px;
    height: 4px;
    border-radius: 50% 50% 0 0;
    background: #ffffff;
    box-shadow: 0 0 6px #38bdf8, 0 0 12px #c084fc;
    animation: murc-bird-orbit 1.4s ease-in-out infinite alternate;
  }

  .murc-bird::after {
    content: '';
    position: absolute;
    top: 1px;
    left: -3px;
    width: 11px;
    height: 1.5px;
    background: #f1f5f9;
    border-radius: 1px;
  }

  .murc-bird.b1 { left: 45px; top: 35px; animation-delay: 0s; }
  .murc-bird.b2 { left: 35px; top: 25px; animation-delay: -0.2s; }
  .murc-bird.b3 { left: 55px; top: 22px; animation-delay: -0.4s; }
  .murc-bird.b4 { left: 25px; top: 40px; animation-delay: -0.6s; }
  .murc-bird.b5 { left: 65px; top: 45px; animation-delay: -0.8s; }
  .murc-bird.b6 { left: 40px; top: 50px; animation-delay: -1.0s; }
  .murc-bird.b7 { left: 52px; top: 55px; animation-delay: -1.2s; }
  .murc-bird.b8 { left: 20px; top: 28px; animation-delay: -0.3s; }
  .murc-bird.b9 { left: 70px; top: 32px; animation-delay: -0.9s; }
  .murc-bird.b10 { left: 48px; top: 15px; animation-delay: -1.3s; }

  @keyframes murc-bird-orbit {
    0% { transform: translate(0, 0) scale(0.85); }
    100% { transform: translate(calc(18px * var(--dx, 1)), calc(14px * var(--dy, -1))) scale(1.3); }
  }

  .murc-bird.b1 { --dx: 1; --dy: 1; }
  .murc-bird.b2 { --dx: -1.2; --dy: 0.8; }
  .murc-bird.b3 { --dx: 0.9; --dy: -1.1; }
  .murc-bird.b4 { --dx: -1.5; --dy: -0.7; }
  .murc-bird.b5 { --dx: 1.3; --dy: 1.2; }
  .murc-bird.b6 { --dx: -0.7; --dy: 1.4; }
  .murc-bird.b7 { --dx: 0.8; --dy: -1.3; }
  .murc-bird.b8 { --dx: -1.1; --dy: -1.0; }
  .murc-bird.b9 { --dx: 1.4; --dy: -0.5; }
  .murc-bird.b10 { --dx: 0.5; --dy: 1.5; }

  /* Pulsing lavender density contours */
  .murc-wave {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1.5px dashed #c084fc;
    box-shadow: 0 0 10px rgba(192, 132, 252, 0.6);
    animation: murc-density-pulse 1.6s ease-in-out infinite alternate;
    pointer-events: none;
  }

  @keyframes murc-density-pulse {
    0% { transform: scale(0.65) rotate(-30deg); opacity: 0.3; }
    100% { transform: scale(1.3) rotate(30deg); opacity: 0.9; border-color: #f43f5e; box-shadow: 0 0 14px #e879f9; }
  }
  `,
};

const murmurationMarkup = {
  v1: `
      <div class="mur">
        <div class="mur-cloud">
          <div class="mur-wave"></div>
          <div class="mur-bird b1"></div>
          <div class="mur-bird b2"></div>
          <div class="mur-bird b3"></div>
          <div class="mur-bird b4"></div>
          <div class="mur-bird b5"></div>
          <div class="mur-bird b6"></div>
          <div class="mur-bird b7"></div>
          <div class="mur-bird b8"></div>
          <div class="mur-bird b9"></div>
          <div class="mur-bird b10"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="murc">
        <div class="murc-cloud">
          <div class="murc-wave"></div>
          <div class="murc-bird b1"></div>
          <div class="murc-bird b2"></div>
          <div class="murc-bird b3"></div>
          <div class="murc-bird b4"></div>
          <div class="murc-bird b5"></div>
          <div class="murc-bird b6"></div>
          <div class="murc-bird b7"></div>
          <div class="murc-bird b8"></div>
          <div class="murc-bird b9"></div>
          <div class="murc-bird b10"></div>
        </div>
      </div>
    `,
};

class ConceptMurmuration extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${murmurationStyles[version] || murmurationStyles.v2}</style>${murmurationMarkup[version] || murmurationMarkup.v2}`;
  }
}

if (!customElements.get('concept-murmuration')) {
  customElements.define('concept-murmuration', ConceptMurmuration);
}
