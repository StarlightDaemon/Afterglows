const eyeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original wandering dot --- */
  .eye-v1 {
    width: 20px;
    height: 20px;
    background: var(--accent, #00cc00);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent, #00cc00);
    animation: look 4s infinite;
  }

  @keyframes look {
    0%, 100% { transform: translate(0, 0) }
    20% { transform: translate(-20px, 0) }
    50% { transform: translate(20px, 0) }
    80% { transform: translate(0, -10px) }
  }

  /* --- v2: a full eye with iris, saccades, and blinking lids --- */
  .eye {
    position: relative;
    width: 96px;
    height: 54px;
    overflow: hidden;
    /* Almond silhouette via two circle masks */
    clip-path: polygon(0 50%, 14% 22%, 34% 5%, 50% 0, 66% 5%, 86% 22%, 100% 50%, 86% 78%, 66% 95%, 50% 100%, 34% 95%, 14% 78%);
    background: radial-gradient(ellipse at center, rgba(200, 255, 212, 0.22) 0 58%, rgba(60, 160, 85, 0.14) 78%, rgba(10, 30, 16, 0.6) 100%);
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.25);
  }

  .eye-outline {
    position: absolute;
    inset: 0;
    clip-path: inherit;
    border: 1px solid rgba(140, 255, 170, 0.5);
    box-sizing: border-box;
    pointer-events: none;
  }

  .eye-iris {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 34px;
    height: 34px;
    margin: -17px 0 0 -17px;
    border-radius: 50%;
    background:
      repeating-conic-gradient(rgba(120, 255, 150, 0.5) 0 6deg, rgba(20, 90, 40, 0.6) 6deg 12deg),
      radial-gradient(circle, #062a10, #041a0a);
    border: 1.5px solid rgba(160, 255, 185, 0.75);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.55);
    box-sizing: border-box;
    animation: eye-saccade 5.5s ease-in-out infinite;
  }

  .eye-pupil {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 13px;
    height: 13px;
    margin: -6.5px 0 0 -6.5px;
    border-radius: 50%;
    background: #010803;
    box-shadow: inset 0 0 4px rgba(0, 204, 0, 0.6);
    animation: eye-dilate 5.5s ease-in-out infinite;
  }

  .eye-glint {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(240, 255, 244, 0.9);
    filter: blur(0.4px);
  }

  .eye-lid {
    position: absolute;
    left: -4%;
    width: 108%;
    height: 56%;
    background: linear-gradient(180deg, #071a0c, #0a2411);
    z-index: 2;
  }

  .eye-lid.top {
    top: -56%;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    border-bottom: 1px solid rgba(140, 255, 170, 0.55);
    animation: eye-blink-top 5.5s ease-in-out infinite;
  }

  .eye-lid.bottom {
    bottom: -56%;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    border-top: 1px solid rgba(140, 255, 170, 0.45);
    animation: eye-blink-bottom 5.5s ease-in-out infinite;
  }

  @keyframes eye-saccade {
    0%, 18%, 100% { transform: translate(0, 0); }
    24%, 38% { transform: translate(-17px, 2px); }
    44%, 60% { transform: translate(15px, -2px); }
    66%, 90% { transform: translate(0, 0); }
  }

  @keyframes eye-dilate {
    0%, 20%, 100% { transform: scale(1); }
    30%, 44% { transform: scale(0.7); }
    58%, 74% { transform: scale(1.25); }
  }

  @keyframes eye-blink-top {
    0%, 74%, 84%, 100% { transform: translateY(0); }
    78%, 80% { transform: translateY(100%); }
  }

  @keyframes eye-blink-bottom {
    0%, 74%, 84%, 100% { transform: translateY(0); }
    78%, 80% { transform: translateY(-100%); }
  }
`;

const eyeMarkup = {
  v1: `<div class="eye-v1"></div>`,
  v2: `
    <div class="eye">
      <div class="eye-iris">
        <div class="eye-pupil"></div>
        <div class="eye-glint"></div>
      </div>
      <div class="eye-lid top"></div>
      <div class="eye-lid bottom"></div>
      <div class="eye-outline"></div>
    </div>
  `,
};

class ConceptEye extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${eyeStyles}</style>${eyeMarkup[version] || eyeMarkup.v2}`;
  }
}

if (!customElements.get('concept-eye')) {
  customElements.define('concept-eye', ConceptEye);
}
