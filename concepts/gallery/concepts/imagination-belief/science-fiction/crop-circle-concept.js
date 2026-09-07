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
    transform-origin: 50% 50%;
    animation: crop-rotate 14s linear infinite;
  }

  @keyframes crop-rotate {
    0% { transform: rotate(0deg) scale(0.95); }
    50% { transform: rotate(180deg) scale(1.06); }
    100% { transform: rotate(360deg) scale(0.95); }
  }

  .crop-ring {
    fill: none;
    stroke: rgba(150, 255, 170, 0.85);
    stroke-width: 2.2;
    stroke-linecap: round;
    filter: drop-shadow(0 0 4px rgba(0, 204, 0, 0.7));
  }

  .crop-link {
    fill: none;
    stroke: rgba(110, 255, 140, 0.75);
    stroke-width: 1.6;
    filter: drop-shadow(0 0 3px rgba(0, 204, 0, 0.5));
  }

  .crop-flare {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 46%, rgba(140, 255, 165, 0.35), transparent 62%);
    opacity: 0.8;
    animation: crop-flare 3.4s ease-in-out infinite alternate;
  }

  .crop-scan {
    position: absolute;
    top: 46%;
    left: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: #e0ffe4;
    box-shadow: 0 0 12px 3px rgba(190, 255, 205, 0.95);
    animation: crop-orb 5.2s ease-in-out infinite;
  }

  @keyframes crop-flare {
    0% { opacity: 0.4; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1.15); }
  }

  @keyframes crop-orb {
    0% { transform: translate(-34px, -26px) scale(0.9); opacity: 1; }
    25% { transform: translate(32px, -28px) scale(1.25); }
    50% { transform: translate(30px, 30px) scale(0.95); }
    75% { transform: translate(-32px, 28px) scale(1.3); }
    100% { transform: translate(-34px, -26px) scale(0.9); opacity: 1; }
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
    transform-origin: 50% 50%;
    animation: cropc-rotate 14s linear infinite;
  }

  @keyframes cropc-rotate {
    0% { transform: rotate(0deg) scale(0.95); }
    50% { transform: rotate(180deg) scale(1.06); }
    100% { transform: rotate(360deg) scale(0.95); }
  }

  /* Golden etched geometric rings */
  .cropc-ring {
    fill: none;
    stroke: #fde047;
    stroke-width: 2.2;
    stroke-linecap: round;
    filter: drop-shadow(0 0 6px #facc15);
  }

  .cropc-ring.r1 { stroke: #fef08a; }
  .cropc-ring.r2 { stroke: #fde047; }
  .cropc-ring.r3 { stroke: #facc15; }
  .cropc-ring.r4 { stroke: #38bdf8; }
  .cropc-ring.r5 { stroke: #4ade80; }

  /* Connecting pathways */
  .cropc-link {
    fill: none;
    stroke: #facc15;
    stroke-width: 1.8;
    filter: drop-shadow(0 0 4px #eab308);
  }

  /* Mysterious twilight luminescence flare */
  .cropc-flare {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 46%, rgba(250, 204, 21, 0.45), transparent 62%);
    box-shadow: inset 0 0 14px rgba(56, 189, 248, 0.3);
    opacity: 0.8;
    animation: cropc-flare 3.4s ease-in-out infinite alternate;
  }

  /* Plasma survey tracer orb */
  .cropc-scan {
    position: absolute;
    top: 46%;
    left: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 12px #00f0ff, 0 0 18px #38bdf8;
    animation: cropc-orb 5.2s ease-in-out infinite;
  }

  @keyframes cropc-flare {
    0% { opacity: 0.4; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1.15); }
  }

  @keyframes cropc-orb {
    0% { transform: translate(-34px, -26px) scale(0.9); opacity: 1; }
    25% { transform: translate(32px, -28px) scale(1.25); }
    50% { transform: translate(30px, 30px) scale(0.95); }
    75% { transform: translate(-32px, 28px) scale(1.3); }
    100% { transform: translate(-34px, -26px) scale(0.9); opacity: 1; }
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
