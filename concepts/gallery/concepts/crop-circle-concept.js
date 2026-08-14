const cropCircleStyles = {
  v1: `
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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Aerial view of golden ripe wheat field with precision flattened
     crop circle geometry, cyan plasma tracer orb, and twilight shadow relief */
  .cropc {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background:
      repeating-linear-gradient(90deg, rgba(202, 138, 4, 0.4) 0 2px, transparent 2px 7px),
      radial-gradient(circle at 50% 50%, #78350f 0%, #451a03 70%, #1e1b4b 100%);
    border: 2px solid #ca8a04;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
  }

  .cropc-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Golden etched geometric rings */
  .cropc-ring {
    fill: none;
    stroke: #fde047;
    stroke-width: 2.2;
    stroke-linecap: round;
    filter: drop-shadow(0 0 5px #facc15);
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: cropc-draw 9s ease-in-out infinite;
  }

  .cropc-ring.r1 { animation-delay: 0s; stroke: #fef08a; }
  .cropc-ring.r2 { animation-delay: 0.9s; stroke: #fde047; }
  .cropc-ring.r3 { animation-delay: 1.8s; stroke: #facc15; }
  .cropc-ring.r4 { animation-delay: 2.5s; stroke: #38bdf8; }
  .cropc-ring.r5 { animation-delay: 3.1s; stroke: #4ade80; }

  /* Connecting pathways */
  .cropc-link {
    fill: none;
    stroke: #facc15;
    stroke-width: 1.8;
    stroke-dasharray: 60;
    stroke-dashoffset: 60;
    filter: drop-shadow(0 0 4px #eab308);
    animation: cropc-draw-link 9s ease-in-out infinite;
    animation-delay: 3.7s;
  }

  /* Mysterious twilight luminescence flare */
  .cropc-flare {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 46%, rgba(250, 204, 21, 0.35), transparent 62%);
    box-shadow: inset 0 0 14px rgba(56, 189, 248, 0.3);
    opacity: 0;
    animation: cropc-flare 9s ease-in-out infinite;
  }

  /* Plasma survey tracer orb */
  .cropc-scan {
    position: absolute;
    top: 46%;
    left: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #00f0ff, 0 0 16px #38bdf8;
    animation: cropc-orb 9s ease-in-out infinite;
  }

  @keyframes cropc-draw {
    0% { stroke-dashoffset: 400; opacity: 0.95; }
    38%, 78% { stroke-dashoffset: 0; opacity: 0.95; }
    92%, 100% { stroke-dashoffset: 400; opacity: 0; }
  }

  @keyframes cropc-draw-link {
    0% { stroke-dashoffset: 60; opacity: 0.9; }
    22%, 46% { stroke-dashoffset: 0; opacity: 0.9; }
    58%, 100% { stroke-dashoffset: 60; opacity: 0; }
  }

  @keyframes cropc-flare {
    0%, 44% { opacity: 0; }
    52%, 66% { opacity: 1; }
    80%, 100% { opacity: 0; }
  }

  @keyframes cropc-orb {
    0% { transform: translate(-2px, -2px); opacity: 0; }
    6% { opacity: 1; }
    20% { transform: translate(-34px, -26px); }
    38% { transform: translate(28px, -30px); }
    56% { transform: translate(30px, 26px); }
    72% { transform: translate(-28px, 24px); }
    84% { transform: translate(-2px, -2px); opacity: 1; }
    92%, 100% { transform: translate(-2px, -2px); opacity: 0; }
  }
  `,
};

const cropCircleMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="cropc">
        <div class="cropc-flare"></div>
        <svg class="cropc-svg" viewBox="0 0 104 104" aria-hidden="true">
          <circle class="cropc-ring r1" cx="52" cy="48" r="30"></circle>
          <circle class="cropc-ring r2" cx="52" cy="48" r="20"></circle>
          <circle class="cropc-ring r3" cx="52" cy="48" r="9"></circle>
          <circle class="cropc-ring r4" cx="24" cy="84" r="8"></circle>
          <circle class="cropc-ring r5" cx="82" cy="86" r="6"></circle>
          <path class="cropc-link" d="M31 74 L45 62"></path>
          <path class="cropc-link" d="M76 81 L62 66"></path>
        </svg>
        <div class="cropc-scan"></div>
      </div>
    `,
};

class ConceptCropCircle extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${cropCircleStyles[version] || cropCircleStyles.v2}</style>${cropCircleMarkup[version] || cropCircleMarkup.v2}`;
  }
}

if (!customElements.get('concept-crop-circle')) {
  customElements.define('concept-crop-circle', ConceptCropCircle);
}
