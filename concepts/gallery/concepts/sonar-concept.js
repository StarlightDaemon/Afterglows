const sonarStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .sonar {
    width: 96px;
    height: 96px;
    position: relative;
    border-radius: 50%;
    background:
      radial-gradient(circle at center, rgba(0, 204, 0, 0.1) 0 8%, transparent 9%),
      linear-gradient(180deg, rgba(0, 22, 10, 0.85), rgba(0, 0, 0, 0.98));
    box-shadow: inset 0 0 18px rgba(0, 204, 0, 0.08), 0 0 10px rgba(0, 204, 0, 0.08);
  }

  .sonar-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid rgba(120, 255, 120, 0.75);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 8px rgba(120, 255, 120, 0.18);
    opacity: 0;
    animation: sonar-ping 2.8s ease-out infinite;
  }

  .sonar-ring.r2 {
    animation-delay: 0.7s;
  }

  .sonar-ring.r3 {
    animation-delay: 1.4s;
  }

  .sonar-axis {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 1px;
    height: calc(100% - 20px);
    transform: translateX(-50%);
    background: linear-gradient(180deg, transparent, rgba(0, 204, 0, 0.2), transparent);
  }

  .sonar-source {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid rgba(170, 255, 170, 0.85);
    background: #021702;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(120, 255, 120, 0.45);
  }

  .sonar-source::before,
  .sonar-source::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(170, 255, 170, 0.95), transparent);
  }

  .sonar-source::before {
    bottom: 100%;
    height: 20px;
    margin-bottom: 4px;
  }

  .sonar-source::after {
    top: 100%;
    height: 12px;
    margin-top: 4px;
    opacity: 0.4;
  }

  @keyframes sonar-ping {
    0% {
      width: 18px;
      height: 18px;
      opacity: 0.95;
      border-width: 1.5px;
    }
    100% {
      width: 94px;
      height: 94px;
      opacity: 0;
      border-width: 1px;
    }
  }

  .sonar-basic-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid #00cc00;
    border-radius: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    animation: ping-basic 2s infinite;
  }

  .sonar-basic {
    position: relative;
    width: 100px;
    height: 100px;
  }

  @keyframes ping-basic {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 100px;
      height: 100px;
      opacity: 0;
    }
  }
`;

const sonarMarkup = {
  v1: `
    <div class="sonar-basic">
      <div class="sonar-basic-ring"></div>
      <div class="sonar-basic-ring" style="animation-delay:1s"></div>
    </div>
  `,
  v2: `
    <div class="sonar">
      <div class="sonar-axis"></div>
      <div class="sonar-ring r1"></div>
      <div class="sonar-ring r2"></div>
      <div class="sonar-ring r3"></div>
      <div class="sonar-source"></div>
    </div>
  `,
};

class ConceptSonar extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${sonarStyles}</style>${sonarMarkup[version] || sonarMarkup.v2}`;
  }
}

if (!customElements.get('concept-sonar')) {
  customElements.define('concept-sonar', ConceptSonar);
}
