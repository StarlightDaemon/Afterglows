const cubeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cube-scene {
    width: 96px;
    height: 96px;
    perspective: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cube {
    position: relative;
    width: 46px;
    height: 46px;
    transform-style: preserve-3d;
    animation: cube-turn 7s linear infinite;
  }

  .cube-face {
    position: absolute;
    inset: 0;
    border: 1px solid rgba(0, 204, 0, 0.85);
    background: rgba(0, 204, 0, 0.05);
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.14);
  }

  .cube-face::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: rgba(170, 255, 170, 0.5);
    box-shadow: 0 0 5px rgba(170, 255, 170, 0.4);
  }

  .cube-face.front  { transform: translateZ(23px); }
  .cube-face.back   { transform: rotateY(180deg) translateZ(23px); }
  .cube-face.right  { transform: rotateY(90deg) translateZ(23px); }
  .cube-face.left   { transform: rotateY(-90deg) translateZ(23px); }
  .cube-face.top    { transform: rotateX(90deg) translateZ(23px); }
  .cube-face.bottom { transform: rotateX(-90deg) translateZ(23px); }

  @keyframes cube-turn {
    0% { transform: rotateX(-22deg) rotateY(0deg); }
    50% { transform: rotateX(-32deg) rotateY(180deg); }
    100% { transform: rotateX(-22deg) rotateY(360deg); }
  }
`;

class ConceptCube extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cubeStyles}</style>
      <div class="cube-scene">
        <div class="cube">
          <div class="cube-face front"></div>
          <div class="cube-face back"></div>
          <div class="cube-face right"></div>
          <div class="cube-face left"></div>
          <div class="cube-face top"></div>
          <div class="cube-face bottom"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cube')) {
  customElements.define('concept-cube', ConceptCube);
}
