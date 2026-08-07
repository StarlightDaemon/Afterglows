const murmurationStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A starling murmuration flocking across the twilight sky: individual avian
     silhouette nodes pulse in coordinated spatial density waves, contracting
     into a dense swirling nucleus and shearing into broad sweeping ribbons. */
  .mur {
    width: 114px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  /* Swarm cloud container running continuous organic flocking trajectory */
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

  /* Individual flocking bird silhouette nodes */
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

  /* Shimmering density wave contours */
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
`;

class ConceptMurmuration extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${murmurationStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-murmuration')) {
  customElements.define('concept-murmuration', ConceptMurmuration);
}
