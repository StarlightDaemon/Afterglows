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
    animation: mur-flow 7s ease-in-out infinite;
  }

  @keyframes mur-flow {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    25% { transform: translate(8px, -6px) rotate(6deg) scale(0.85); }
    50% { transform: translate(-6px, 8px) rotate(-8deg) scale(1.15); }
    75% { transform: translate(-10px, -4px) rotate(4deg) scale(0.9); }
  }

  .mur-bird {
    position: absolute;
    width: 4px;
    height: 3px;
    border-radius: 50% 50% 0 0;
    background: rgba(190, 255, 205, 0.95);
    box-shadow: 0 0 3px rgba(140, 255, 170, 0.8);
    animation: mur-bird-orbit 3.5s ease-in-out infinite alternate;
  }

  .mur-bird::after {
    content: '';
    position: absolute;
    top: 1px;
    left: -2px;
    width: 8px;
    height: 1px;
    background: rgba(140, 255, 170, 0.9);
    border-radius: 1px;
  }

  .mur-bird.b1 { left: 45px; top: 35px; animation-delay: 0s; }
  .mur-bird.b2 { left: 35px; top: 25px; animation-delay: -0.4s; }
  .mur-bird.b3 { left: 55px; top: 22px; animation-delay: -0.8s; }
  .mur-bird.b4 { left: 25px; top: 40px; animation-delay: -1.2s; }
  .mur-bird.b5 { left: 65px; top: 45px; animation-delay: -1.6s; }
  .mur-bird.b6 { left: 40px; top: 50px; animation-delay: -2.0s; }
  .mur-bird.b7 { left: 52px; top: 55px; animation-delay: -2.4s; }
  .mur-bird.b8 { left: 20px; top: 28px; animation-delay: -0.6s; }
  .mur-bird.b9 { left: 70px; top: 32px; animation-delay: -1.8s; }
  .mur-bird.b10 { left: 48px; top: 15px; animation-delay: -2.8s; }

  @keyframes mur-bird-orbit {
    0% { transform: translate(0, 0) scale(0.9); }
    50% { transform: translate(calc(6px * var(--dx, 1)), calc(6px * var(--dy, -1))) scale(1.15); }
    100% { transform: translate(calc(-8px * var(--dx, 1)), calc(-4px * var(--dy, 1))) scale(0.85); }
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
    inset: 10px;
    border-radius: 50%;
    border: 1px dashed rgba(140, 255, 170, 0.35);
    animation: mur-density-pulse 5s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes mur-density-pulse {
    0%, 100% { transform: scale(0.7) rotate(0deg); opacity: 0.2; }
    50% { transform: scale(1.2) rotate(180deg); opacity: 0.6; border-color: rgba(190, 255, 205, 0.6); }
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

  /* v2: Twilight starling murmuration against rich amethyst-rose sunset sky,
     with iridescent flock silhouettes and lavender density waves */
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
    animation: murc-flow 7s ease-in-out infinite;
  }

  @keyframes murc-flow {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    25% { transform: translate(8px, -6px) rotate(6deg) scale(0.85); }
    50% { transform: translate(-6px, 8px) rotate(-8deg) scale(1.15); }
    75% { transform: translate(-10px, -4px) rotate(4deg) scale(0.9); }
  }

  /* Iridescent starling bird silhouette */
  .murc-bird {
    position: absolute;
    width: 4px;
    height: 3px;
    border-radius: 50% 50% 0 0;
    background: #ffffff;
    box-shadow: 0 0 4px #38bdf8, 0 0 8px #c084fc;
    animation: murc-bird-orbit 3.5s ease-in-out infinite alternate;
  }

  .murc-bird::after {
    content: '';
    position: absolute;
    top: 1px;
    left: -2px;
    width: 8px;
    height: 1px;
    background: #cbd5e1;
    border-radius: 1px;
  }

  .murc-bird.b1 { left: 45px; top: 35px; animation-delay: 0s; }
  .murc-bird.b2 { left: 35px; top: 25px; animation-delay: -0.4s; }
  .murc-bird.b3 { left: 55px; top: 22px; animation-delay: -0.8s; }
  .murc-bird.b4 { left: 25px; top: 40px; animation-delay: -1.2s; }
  .murc-bird.b5 { left: 65px; top: 45px; animation-delay: -1.6s; }
  .murc-bird.b6 { left: 40px; top: 50px; animation-delay: -2.0s; }
  .murc-bird.b7 { left: 52px; top: 55px; animation-delay: -2.4s; }
  .murc-bird.b8 { left: 20px; top: 28px; animation-delay: -0.6s; }
  .murc-bird.b9 { left: 70px; top: 32px; animation-delay: -1.8s; }
  .murc-bird.b10 { left: 48px; top: 15px; animation-delay: -2.8s; }

  @keyframes murc-bird-orbit {
    0% { transform: translate(0, 0) scale(0.9); }
    50% { transform: translate(calc(6px * var(--dx, 1)), calc(6px * var(--dy, -1))) scale(1.15); }
    100% { transform: translate(calc(-8px * var(--dx, 1)), calc(-4px * var(--dy, 1))) scale(0.85); }
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
    inset: 10px;
    border-radius: 50%;
    border: 1px dashed #c084fc;
    box-shadow: 0 0 6px rgba(192, 132, 252, 0.4);
    animation: murc-density-pulse 5s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes murc-density-pulse {
    0%, 100% { transform: scale(0.7) rotate(0deg); opacity: 0.25; }
    50% { transform: scale(1.2) rotate(180deg); opacity: 0.75; border-color: #f43f5e; box-shadow: 0 0 10px #e879f9; }
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
