const glitchStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original continuous RGB split --- */
  .glitch {
    font-weight: bold;
    font-size: 20px;
    position: relative;
    color: var(--accent, #00cc00);
    animation: glitch-body-shake 0.8s ease-in-out infinite;
  }

  @keyframes glitch-body-shake {
    0% { transform: translate(0, 0) skewX(0deg); }
    20% { transform: translate(-4px, 2px) skewX(-4deg); }
    40% { transform: translate(5px, -2px) skewX(5deg); }
    60% { transform: translate(-6px, 1px) skewX(-5deg); }
    80% { transform: translate(4px, -1px) skewX(3deg); }
    100% { transform: translate(0, 0) skewX(0deg); }
  }

  .glitch::before,
  .glitch::after {
    content: 'SYSTEM';
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.85;
  }

  .glitch::before {
    color: #0ff;
    animation: glitch-1 0.8s linear infinite;
  }

  .glitch::after {
    color: #f0f;
    animation: glitch-2 0.7s linear infinite;
  }

  @keyframes glitch-1 {
    0% { transform: translate(-6px, 1px); clip-path: inset(10% 0 70% 0); }
    25% { transform: translate(8px, -2px); clip-path: inset(40% 0 30% 0); }
    50% { transform: translate(-10px, 2px); clip-path: inset(70% 0 10% 0); }
    75% { transform: translate(6px, -1px); clip-path: inset(20% 0 60% 0); }
    100% { transform: translate(-6px, 1px); clip-path: inset(10% 0 70% 0); }
  }

  @keyframes glitch-2 {
    0% { transform: translate(6px, -1px); clip-path: inset(60% 0 20% 0); }
    25% { transform: translate(-8px, 2px); clip-path: inset(20% 0 60% 0); }
    50% { transform: translate(10px, -2px); clip-path: inset(10% 0 70% 0); }
    75% { transform: translate(-6px, 1px); clip-path: inset(50% 0 30% 0); }
    100% { transform: translate(6px, -1px); clip-path: inset(60% 0 20% 0); }
  }

  /* --- v2: continuous high-frequency distortion --- */
  .g2 {
    position: relative;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 2px;
    color: var(--accent, #00cc00);
    animation: g2-body-shake 0.9s ease-in-out infinite;
  }

  @keyframes g2-body-shake {
    0% { transform: translate(0, 0) skewX(0deg); }
    15% { transform: translate(-5px, 2px) skewX(-4deg); }
    30% { transform: translate(6px, -2px) skewX(5deg); }
    45% { transform: translate(-8px, -1px) skewX(-6deg); }
    60% { transform: translate(7px, 3px) skewX(4deg); }
    75% { transform: translate(-4px, -3px) skewX(-3deg); }
    90% { transform: translate(5px, 1px) skewX(3deg); }
    100% { transform: translate(0, 0) skewX(0deg); }
  }

  .g2-base {
    text-shadow: 0 0 8px rgba(0, 204, 0, 0.7);
  }

  .g2-alt {
    position: absolute;
    top: 0;
    left: 0;
    color: #d6ffe0;
    text-shadow: 0 0 10px rgba(0, 204, 0, 0.9);
    animation: g2-alt-move 1.2s ease-in-out infinite;
  }

  .g2-alt::before {
    content: 'SY5T3M';
  }

  @keyframes g2-alt-move {
    0% { opacity: 0; transform: translate(0, 0); }
    25% { opacity: 0.9; transform: translate(6px, -3px); }
    50% { opacity: 0; transform: translate(0, 0); }
    75% { opacity: 0.9; transform: translate(-6px, 3px); }
    100% { opacity: 0; transform: translate(0, 0); }
  }

  /* Chromatic ghost layers */
  .g2-r,
  .g2-b {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.9;
  }

  .g2-r {
    color: #ff5b8f;
    animation: g2-split-r 0.9s linear infinite;
  }

  .g2-b {
    color: #45e0ff;
    animation: g2-split-b 0.8s linear infinite;
  }

  @keyframes g2-split-r {
    0% { transform: translate(6px, -2px); clip-path: inset(10% 0 45% 0); }
    25% { transform: translate(-8px, 2px); clip-path: inset(55% 0 8% 0); }
    50% { transform: translate(10px, -3px); clip-path: inset(20% 0 60% 0); }
    75% { transform: translate(-7px, 1px); clip-path: inset(70% 0 10% 0); }
    100% { transform: translate(6px, -2px); clip-path: inset(10% 0 45% 0); }
  }

  @keyframes g2-split-b {
    0% { transform: translate(-6px, 2px); clip-path: inset(48% 0 12% 0); }
    25% { transform: translate(8px, -2px); clip-path: inset(4% 0 66% 0); }
    50% { transform: translate(-10px, 3px); clip-path: inset(58% 0 6% 0); }
    75% { transform: translate(7px, -1px); clip-path: inset(20% 0 42% 0); }
    100% { transform: translate(-6px, 2px); clip-path: inset(48% 0 12% 0); }
  }

  /* Displaced horizontal slice */
  .g2-slice {
    position: absolute;
    top: 0;
    left: 0;
    color: #ffffff;
    text-shadow: 0 0 8px #00ff66;
    animation: g2-slice 0.9s linear infinite;
  }

  @keyframes g2-slice {
    0% { transform: translateX(-16px); clip-path: inset(25% 0 50% 0); }
    30% { transform: translateX(18px); clip-path: inset(45% 0 30% 0); }
    60% { transform: translateX(-14px); clip-path: inset(65% 0 10% 0); }
    100% { transform: translateX(-16px); clip-path: inset(25% 0 50% 0); }
  }

  .g2-flash {
    position: absolute;
    inset: -6px -8px;
    background: rgba(140, 255, 170, 0.2);
    animation: g2-flash 0.9s steps(1) infinite;
  }

  @keyframes g2-flash {
    0%, 50% { opacity: 0; }
    20%, 70% { opacity: 1; }
  }
`;

const glitchMarkup = {
  v1: `<div class="glitch">SYSTEM</div>`,
  v2: `
    <div class="g2">
      <div class="g2-flash"></div>
      <div class="g2-base">SYSTEM</div>
      <div class="g2-r">SYSTEM</div>
      <div class="g2-b">SYSTEM</div>
      <div class="g2-slice">SYSTEM</div>
      <div class="g2-alt"></div>
    </div>
  `,
};

class ConceptGlitch extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${glitchStyles}</style>${glitchMarkup[version] || glitchMarkup.v2}`;
  }
}

if (!customElements.get('concept-glitch')) {
  customElements.define('concept-glitch', ConceptGlitch);
}
