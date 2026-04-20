const compassStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .compass {
    width: 88px;
    height: 88px;
    border: 1px solid rgba(0, 204, 0, 0.7);
    border-radius: 50%;
    position: relative;
    background:
      radial-gradient(circle at center, rgba(0, 204, 0, 0.12) 0 18%, transparent 19%),
      radial-gradient(circle at center, transparent 0 33px, rgba(0, 204, 0, 0.12) 33px 34px, transparent 35px),
      linear-gradient(180deg, rgba(0, 204, 0, 0.04), rgba(0, 0, 0, 0.8));
    box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.14), 0 0 10px rgba(0, 204, 0, 0.22);
  }

  .compass::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 1px;
    height: calc(100% - 16px);
    transform: translateX(-50%);
    background: linear-gradient(180deg, transparent, rgba(0, 204, 0, 0.28), transparent);
  }

  .compass::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 8px;
    width: calc(100% - 16px);
    height: 1px;
    transform: translateY(-50%);
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.28), transparent);
  }

  .compass-label {
    position: absolute;
    color: rgba(170, 255, 170, 0.8);
    font-size: 9px;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 0 0 4px rgba(0, 204, 0, 0.45);
  }

  .compass-label.north {
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
  }

  .compass-label.east {
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }

  .compass-label.south {
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
  }

  .compass-label.west {
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
  }

  .compass-needle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 54px;
    border-radius: 999px;
    background: linear-gradient(180deg, #ff4d4d 0 50%, #d9f7d9 50% 100%);
    transform: translate(-50%, -50%) rotate(-18deg);
    transform-origin: center center;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.18);
    animation: compass-spin 5s ease-in-out infinite;
  }

  .compass-needle::before,
  .compass-needle::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
  }

  .compass-needle::before {
    top: -8px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 16px solid #ff4d4d;
    filter: drop-shadow(0 0 4px rgba(255, 77, 77, 0.45));
  }

  .compass-needle::after {
    bottom: -8px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 13px solid #d9f7d9;
  }

  .compass-hub {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border: 1px solid rgba(170, 255, 170, 0.7);
    border-radius: 50%;
    background: #021702;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.35);
  }

  @keyframes compass-spin {
    0% { transform: translate(-50%, -50%) rotate(-18deg); }
    25% { transform: translate(-50%, -50%) rotate(12deg); }
    50% { transform: translate(-50%, -50%) rotate(-8deg); }
    75% { transform: translate(-50%, -50%) rotate(7deg); }
    100% { transform: translate(-50%, -50%) rotate(-18deg); }
  }

  .compass-basic {
    width: 80px;
    height: 80px;
    border: 2px solid #00cc00;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.3);
  }

  .compass-basic::before {
    content: 'N';
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: #00cc00;
    font-size: 10px;
    font-weight: bold;
  }

  .compass-basic-arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 50px;
    transform-origin: bottom center;
    transform: translate(-50%, -100%);
    animation: compass-basic-spin 4s ease-in-out infinite;
  }

  .compass-basic-arrow::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 20px solid #ff3333;
    filter: drop-shadow(0 0 3px #ff3333);
  }

  .compass-basic-arrow::after {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 15px solid #fff;
  }

  @keyframes compass-basic-spin {
    0% { transform: translate(-50%, -100%) rotate(-20deg); }
    25% { transform: translate(-50%, -100%) rotate(15deg); }
    50% { transform: translate(-50%, -100%) rotate(-10deg); }
    75% { transform: translate(-50%, -100%) rotate(25deg); }
    100% { transform: translate(-50%, -100%) rotate(-20deg); }
  }
`;

const compassMarkup = {
  v1: `
    <div class="compass-basic">
      <div class="compass-basic-arrow"></div>
    </div>
  `,
  v2: `
    <div class="compass">
      <span class="compass-label north">N</span>
      <span class="compass-label east">E</span>
      <span class="compass-label south">S</span>
      <span class="compass-label west">W</span>
      <div class="compass-needle"></div>
      <div class="compass-hub"></div>
    </div>
  `,
};

class ConceptCompass extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${compassStyles}</style>${compassMarkup[version] || compassMarkup.v2}`;
  }
}

if (!customElements.get('concept-compass')) {
  customElements.define('concept-compass', ConceptCompass);
}
