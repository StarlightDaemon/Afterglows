const cropCircleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .crop {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.1) 0 2px, transparent 2px 7px),
      linear-gradient(180deg, #010801 0%, #020c02 100%);
  }

  .crop-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .crop-ring {
    fill: none;
    stroke: rgba(150, 255, 170, 0.75);
    stroke-width: 2;
    stroke-linecap: round;
    filter: drop-shadow(0 0 3px rgba(0, 204, 0, 0.5));
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: crop-draw 9s ease-in-out infinite;
  }

  .crop-ring.r1 { animation-delay: 0s; }
  .crop-ring.r2 { animation-delay: 0.9s; }
  .crop-ring.r3 { animation-delay: 1.8s; }
  .crop-ring.r4 { animation-delay: 2.5s; }
  .crop-ring.r5 { animation-delay: 3.1s; }

  .crop-link {
    fill: none;
    stroke: rgba(110, 255, 140, 0.5);
    stroke-width: 1.4;
    stroke-dasharray: 60;
    stroke-dashoffset: 60;
    animation: crop-draw-link 9s ease-in-out infinite;
    animation-delay: 3.7s;
  }

  .crop-flare {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 46%, rgba(140, 255, 165, 0.22), transparent 62%);
    opacity: 0;
    animation: crop-flare 9s ease-in-out infinite;
  }

  .crop-scan {
    position: absolute;
    top: 46%;
    left: 50%;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #e0ffe4;
    box-shadow: 0 0 8px 2px rgba(190, 255, 205, 0.8);
    animation: crop-orb 9s ease-in-out infinite;
  }

  @keyframes crop-draw {
    0% { stroke-dashoffset: 400; opacity: 0.9; }
    38%, 78% { stroke-dashoffset: 0; opacity: 0.9; }
    92%, 100% { stroke-dashoffset: 400; opacity: 0; }
  }

  @keyframes crop-draw-link {
    0% { stroke-dashoffset: 60; opacity: 0.8; }
    22%, 46% { stroke-dashoffset: 0; opacity: 0.8; }
    58%, 100% { stroke-dashoffset: 60; opacity: 0; }
  }

  @keyframes crop-flare {
    0%, 44% { opacity: 0; }
    52%, 66% { opacity: 1; }
    80%, 100% { opacity: 0; }
  }

  @keyframes crop-orb {
    0% { transform: translate(-2px, -2px); opacity: 0; }
    6% { opacity: 1; }
    20% { transform: translate(-34px, -26px); }
    38% { transform: translate(28px, -30px); }
    56% { transform: translate(30px, 26px); }
    72% { transform: translate(-28px, 24px); }
    84% { transform: translate(-2px, -2px); opacity: 1; }
    92%, 100% { transform: translate(-2px, -2px); opacity: 0; }
  }
`;

class ConceptCropCircle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cropCircleStyles}</style>
      <div class="crop">
        <div class="crop-flare"></div>
        <svg class="crop-svg" viewBox="0 0 104 104" aria-hidden="true">
          <circle class="crop-ring r1" cx="52" cy="48" r="30"></circle>
          <circle class="crop-ring r2" cx="52" cy="48" r="20"></circle>
          <circle class="crop-ring r3" cx="52" cy="48" r="9"></circle>
          <circle class="crop-ring r4" cx="24" cy="84" r="8"></circle>
          <circle class="crop-ring r5" cx="82" cy="86" r="6"></circle>
          <path class="crop-link" d="M31 74 L45 62"></path>
          <path class="crop-link" d="M76 81 L62 66"></path>
        </svg>
        <div class="crop-scan"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-crop-circle')) {
  customElements.define('concept-crop-circle', ConceptCropCircle);
}
