const radarStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .radar {
    --radar-cycle: 3.4s;
    width: 96px;
    height: 96px;
    border: 1px solid rgba(0, 204, 0, 0.45);
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at center, rgba(0, 204, 0, 0.12) 0 10%, transparent 11%),
      radial-gradient(circle at center, rgba(0, 204, 0, 0.08) 0 68%, transparent 69%),
      linear-gradient(180deg, rgba(0, 30, 0, 0.85), rgba(0, 0, 0, 0.98));
    box-shadow: inset 0 0 18px rgba(0, 204, 0, 0.12), 0 0 12px rgba(0, 204, 0, 0.12);
  }

  .radar-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(0, 204, 0, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .radar-ring.r1 {
    width: 28px;
    height: 28px;
  }

  .radar-ring.r2 {
    width: 56px;
    height: 56px;
  }

  .radar-ring.r3 {
    width: 84px;
    height: 84px;
  }

  .radar-axis {
    position: absolute;
    background: rgba(0, 204, 0, 0.18);
  }

  .radar-axis.x {
    top: 50%;
    left: 8px;
    width: calc(100% - 16px);
    height: 1px;
    transform: translateY(-50%);
  }

  .radar-axis.y {
    top: 8px;
    left: 50%;
    width: 1px;
    height: calc(100% - 16px);
    transform: translateX(-50%);
  }

  .radar-beam {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background:
      conic-gradient(from 0deg,
        transparent 0deg,
        transparent 300deg,
        rgba(0, 204, 0, 0.08) 325deg,
        rgba(120, 255, 120, 0.45) 347deg,
        rgba(0, 204, 0, 0.22) 360deg);
    animation: spin var(--radar-cycle) linear infinite;
  }

  .radar-blip {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #a7ff9a;
    box-shadow: 0 0 4px rgba(167, 255, 154, 0.22);
    animation: radar-contact var(--radar-cycle) linear infinite;
    opacity: 0.16;
  }

  .radar-blip.b1 {
    top: 23px;
    left: 60px;
    animation-delay: -3.08s;
  }

  .radar-blip.b2 {
    top: 56px;
    left: 24px;
    animation-delay: -1.11s;
  }

  .radar-blip.b3 {
    top: 36px;
    left: 34px;
    animation-delay: -0.48s;
  }

  .radar-center {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border: 1px solid rgba(167, 255, 154, 0.8);
    border-radius: 50%;
    background: #031603;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.4);
  }

  .radar-basic {
    width: 90px;
    height: 90px;
    border: 1px solid rgba(0, 204, 0, 0.3);
    border-radius: 50%;
    position: relative;
    background: radial-gradient(circle, transparent 70%, rgba(0, 204, 0, 0.2) 71%);
  }

  .radar-basic-sweep {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(from 0deg, transparent 0deg, rgba(0, 204, 0, 0.5) 60deg, transparent 60.1deg);
    animation: spin-basic 2s linear infinite;
    position: absolute;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @keyframes spin-basic {
    to { transform: rotate(360deg); }
  }

  @keyframes radar-contact {
    0% {
      opacity: 1;
      transform: scale(1.18);
      box-shadow: 0 0 12px rgba(167, 255, 154, 0.95);
    }
    8% {
      opacity: 0.6;
      transform: scale(0.96);
      box-shadow: 0 0 8px rgba(167, 255, 154, 0.55);
    }
    22% {
      opacity: 0.28;
      transform: scale(0.82);
      box-shadow: 0 0 5px rgba(167, 255, 154, 0.28);
    }
    100% {
      opacity: 0.12;
      transform: scale(0.72);
      box-shadow: 0 0 3px rgba(167, 255, 154, 0.14);
    }
  }
`;

const radarMarkup = {
  v1: `
    <div class="radar-basic">
      <div class="radar-basic-sweep"></div>
    </div>
  `,
  v2: `
    <div class="radar">
      <div class="radar-ring r1"></div>
      <div class="radar-ring r2"></div>
      <div class="radar-ring r3"></div>
      <div class="radar-axis x"></div>
      <div class="radar-axis y"></div>
      <div class="radar-beam"></div>
      <div class="radar-blip b1"></div>
      <div class="radar-blip b2"></div>
      <div class="radar-blip b3"></div>
      <div class="radar-center"></div>
    </div>
  `,
};

class ConceptRadar extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${radarStyles}</style>${radarMarkup[version] || radarMarkup.v2}`;
  }
}

if (!customElements.get('concept-radar')) {
  customElements.define('concept-radar', ConceptRadar);
}
