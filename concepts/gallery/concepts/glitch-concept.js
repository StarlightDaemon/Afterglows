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
  }

  .glitch::before,
  .glitch::after {
    content: 'SYSTEM';
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
  }

  .glitch::before {
    color: #0ff;
    transform: translate(-2px, 0);
    animation: glitch-1 2s infinite;
  }

  .glitch::after {
    color: #f0f;
    transform: translate(2px, 0);
    animation: glitch-2 1.5s infinite;
  }

  @keyframes glitch-1 {
    0% { clip-path: inset(20% 0 80% 0) }
    100% { clip-path: inset(80% 0 10% 0) }
  }

  @keyframes glitch-2 {
    0% { clip-path: inset(10% 0 60% 0) }
    100% { clip-path: inset(60% 0 20% 0) }
  }

  /* --- v2: calm-then-burst corruption ---
     The text sits stable most of the cycle, then tears twice: RGB
     layers jump apart, a horizontal slice displaces, and the string
     itself corrupts for a few frames before snapping back. */
  .g2 {
    position: relative;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 2px;
    color: var(--accent, #00cc00);
  }

  .g2-base {
    text-shadow: 0 0 8px rgba(0, 204, 0, 0.55);
    animation: g2-base 4.2s steps(1) infinite;
  }

  /* The base string corrupts only inside the burst windows. */
  @keyframes g2-base {
    0%, 29% { opacity: 1; }
    30% { opacity: 0.85; }
    31%, 36% { opacity: 1; }
    66% { opacity: 0.7; }
    68%, 100% { opacity: 1; }
  }

  .g2-alt {
    position: absolute;
    top: 0;
    left: 0;
    color: #d6ffe0;
    text-shadow: 0 0 8px rgba(0, 204, 0, 0.8);
    opacity: 0;
    animation: g2-alt 4.2s steps(1) infinite;
  }

  .g2-alt::before {
    content: 'SY5T3M';
    animation: g2-alt-str 4.2s steps(1) infinite;
  }

  @keyframes g2-alt {
    0%, 29% { opacity: 0; }
    30%, 33% { opacity: 1; }
    34%, 65% { opacity: 0; }
    66%, 71% { opacity: 1; }
    72%, 100% { opacity: 0; }
  }

  @keyframes g2-alt-str {
    0% { content: 'SY5T3M'; }
    31% { content: 'S\\2593 ST\\2591 M'; }
    32% { content: '5YST&M'; }
    66% { content: 'SYS7EM'; }
    68% { content: '\\2588 YSTE\\2588'; }
    70% { content: 'SY5T3M'; }
  }

  /* Chromatic ghost layers: parked on the base except during bursts. */
  .g2-r,
  .g2-b {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .g2-r { color: #ff5b8f; animation: g2-split-r 4.2s steps(1) infinite; }
  .g2-b { color: #45e0ff; animation: g2-split-b 4.2s steps(1) infinite; }

  @keyframes g2-split-r {
    0%, 29% { opacity: 0; transform: translate(0, 0); clip-path: inset(0 0 0 0); }
    30% { opacity: 0.9; transform: translate(4px, -2px); clip-path: inset(10% 0 45% 0); }
    32% { opacity: 0.9; transform: translate(-5px, 1px); clip-path: inset(55% 0 8% 0); }
    34%, 65% { opacity: 0; transform: translate(0, 0); }
    66% { opacity: 0.9; transform: translate(6px, 2px); clip-path: inset(30% 0 30% 0); }
    69% { opacity: 0.9; transform: translate(-4px, -1px); clip-path: inset(0 0 62% 0); }
    72%, 100% { opacity: 0; transform: translate(0, 0); }
  }

  @keyframes g2-split-b {
    0%, 29% { opacity: 0; transform: translate(0, 0); clip-path: inset(0 0 0 0); }
    30% { opacity: 0.9; transform: translate(-4px, 2px); clip-path: inset(48% 0 12% 0); }
    32% { opacity: 0.9; transform: translate(5px, -1px); clip-path: inset(4% 0 66% 0); }
    34%, 65% { opacity: 0; transform: translate(0, 0); }
    66% { opacity: 0.9; transform: translate(-6px, -2px); clip-path: inset(58% 0 6% 0); }
    69% { opacity: 0.9; transform: translate(4px, 1px); clip-path: inset(20% 0 42% 0); }
    72%, 100% { opacity: 0; transform: translate(0, 0); }
  }

  /* A displaced slice of the text, one band tall. */
  .g2-slice {
    position: absolute;
    top: 0;
    left: 0;
    color: #baffc9;
    opacity: 0;
    animation: g2-slice 4.2s steps(1) infinite;
  }

  @keyframes g2-slice {
    0%, 29% { opacity: 0; transform: translateX(0); clip-path: inset(38% 0 38% 0); }
    30%, 33% { opacity: 1; transform: translateX(-9px); clip-path: inset(38% 0 44% 0); }
    34%, 65% { opacity: 0; transform: translateX(0); }
    66%, 70% { opacity: 1; transform: translateX(11px); clip-path: inset(52% 0 26% 0); }
    71%, 100% { opacity: 0; transform: translateX(0); }
  }

  /* Full-block flash right at each tear. */
  .g2-flash {
    position: absolute;
    inset: -6px -8px;
    background: rgba(140, 255, 170, 0.16);
    opacity: 0;
    animation: g2-flash 4.2s steps(1) infinite;
  }

  @keyframes g2-flash {
    0%, 29% { opacity: 0; }
    30% { opacity: 1; }
    31%, 65% { opacity: 0; }
    66% { opacity: 1; }
    67%, 100% { opacity: 0; }
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
