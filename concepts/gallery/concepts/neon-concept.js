const neonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor neon sign --- */
  .neon {
    width: 112px;
    height: 88px;
    position: relative;
  }

  .neon-chain {
    position: absolute;
    top: 0;
    width: 1.5px;
    height: 14px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.8) 0 2px,
      transparent 2px 4px);
  }

  .neon-chain.c1 { left: 26px; }
  .neon-chain.c2 { right: 26px; }

  .neon-frame {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 14px;
    height: 44px;
    border: 2px solid rgba(0, 204, 0, 0.6);
    border-radius: 8px;
    background: rgba(0, 18, 4, 0.85);
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.15);
    animation: neon-splash 5.5s infinite;
  }

  @keyframes neon-splash {
    0%, 34% { box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.3); }
    38%, 55% { box-shadow: inset 0 0 7px rgba(0, 204, 0, 0.12); }
    62%, 100% { box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.3); }
  }

  .neon-word {
    position: absolute;
    left: 0;
    right: 0;
    top: 24px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 5px;
    color: #baffc9;
  }

  .neon-letter {
    text-shadow:
      0 0 6px rgba(0, 204, 0, 0.95),
      0 0 14px rgba(0, 204, 0, 0.55),
      0 0 26px rgba(0, 204, 0, 0.3);
    animation: neon-hum 2.2s ease-in-out infinite;
  }

  .neon-letter.l2 { animation-delay: -0.7s; }
  .neon-letter.l3 { animation-delay: -1.3s; }
  .neon-letter.l4 { animation-delay: -1.8s; }

  @keyframes neon-hum {
    0%, 100% { opacity: 0.92; }
    50% { opacity: 1; }
  }

  .neon-letter.flicker {
    animation: neon-flicker 5.5s steps(1) infinite;
  }

  @keyframes neon-flicker {
    0%, 33% { opacity: 1; }
    34% { opacity: 0.25; }
    35% { opacity: 1; }
    36% { opacity: 0.15; }
    38% { opacity: 0.6; }
    39%, 54% { opacity: 0.12; text-shadow: none; }
    55% { opacity: 0.7; }
    56% { opacity: 0.2; }
    58% { opacity: 0.9; }
    59% { opacity: 0.3; }
    61%, 100% { opacity: 1; }
  }

  .neon-cable {
    position: absolute;
    right: 18px;
    top: 58px;
    width: 22px;
    height: 22px;
    border: 1.5px solid rgba(0, 204, 0, 0.5);
    border-top: none;
    border-left: none;
    border-radius: 0 0 14px 0;
  }

  .neon-moth-orbit {
    position: absolute;
    left: 50%;
    top: 36px;
    width: 0;
    height: 0;
    animation: neon-moth-orbit 4.2s linear infinite;
  }

  @keyframes neon-moth-orbit {
    to { transform: rotate(-360deg); }
  }

  .neon-moth {
    position: absolute;
    left: 46px;
    top: 0;
    width: 6px;
    height: 4px;
    animation: neon-moth 0.24s steps(2) infinite;
  }

  .neon-moth::before,
  .neon-moth::after {
    content: '';
    position: absolute;
    top: 0;
    width: 3px;
    height: 4px;
    border-radius: 50% 50% 40% 40%;
    background: rgba(214, 255, 224, 0.85);
  }

  .neon-moth::before { left: 0; transform-origin: right center; transform: rotate(24deg); }
  .neon-moth::after { right: 0; transform-origin: left center; transform: rotate(-24deg); }

  @keyframes neon-moth {
    0% { transform: scaleX(1); }
    100% { transform: scaleX(0.55); }
  }

  .neon-legend {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 7px;
    letter-spacing: 3px;
    color: rgba(140, 255, 170, 0.55);
  }

  /* --- v2: Multi-gas dual neon (Hot Pink letters + Electric Cyan border) --- */
  .neonc {
    width: 112px;
    height: 88px;
    position: relative;
  }

  .neonc-chain {
    position: absolute;
    top: 0;
    width: 1.5px;
    height: 14px;
    background: repeating-linear-gradient(180deg,
      #94a3b8 0 2px,
      transparent 2px 4px);
  }

  .neonc-chain.c1 { left: 26px; }
  .neonc-chain.c2 { right: 26px; }

  .neonc-frame {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 14px;
    height: 44px;
    border: 2px solid #00e5ff;
    border-radius: 8px;
    background: rgba(10, 12, 22, 0.9);
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.7), inset 0 0 14px rgba(0, 229, 255, 0.25);
    animation: neonc-splash 5.5s infinite;
  }

  @keyframes neonc-splash {
    0%, 34% { box-shadow: 0 0 12px rgba(0, 229, 255, 0.8), inset 0 0 14px rgba(255, 20, 147, 0.4); }
    38%, 55% { box-shadow: 0 0 8px rgba(0, 229, 255, 0.5), inset 0 0 8px rgba(255, 20, 147, 0.15); }
    62%, 100% { box-shadow: 0 0 12px rgba(0, 229, 255, 0.8), inset 0 0 14px rgba(255, 20, 147, 0.4); }
  }

  .neonc-word {
    position: absolute;
    left: 0;
    right: 0;
    top: 24px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 5px;
    color: #fff0f6;
  }

  .neonc-letter {
    color: #ffffff;
    text-shadow:
      0 0 4px #ffffff,
      0 0 10px #ff2a8d,
      0 0 20px #ff0055,
      0 0 32px rgba(255, 0, 85, 0.7);
    animation: neonc-hum 2.2s ease-in-out infinite;
  }

  .neonc-letter.l2 { animation-delay: -0.7s; }
  .neonc-letter.l3 { animation-delay: -1.3s; }
  .neonc-letter.l4 { animation-delay: -1.8s; }

  @keyframes neonc-hum {
    0%, 100% { opacity: 0.95; }
    50% { opacity: 1; text-shadow: 0 0 4px #ffffff, 0 0 12px #ff2a8d, 0 0 24px #ff0055, 0 0 36px rgba(255, 0, 85, 0.8); }
  }

  .neonc-letter.flicker {
    animation: neonc-flicker 5.5s steps(1) infinite;
  }

  @keyframes neonc-flicker {
    0%, 33% { opacity: 1; text-shadow: 0 0 4px #ffffff, 0 0 10px #ff2a8d, 0 0 20px #ff0055; }
    34% { opacity: 0.3; text-shadow: none; color: #5a2035; }
    35% { opacity: 1; text-shadow: 0 0 4px #ffffff, 0 0 10px #ff2a8d; }
    36% { opacity: 0.2; text-shadow: none; color: #5a2035; }
    38% { opacity: 0.7; text-shadow: 0 0 8px #ff2a8d; }
    39%, 54% { opacity: 0.15; text-shadow: none; color: #401525; }
    55% { opacity: 0.8; text-shadow: 0 0 8px #ff2a8d; }
    56% { opacity: 0.25; text-shadow: none; }
    58% { opacity: 0.95; text-shadow: 0 0 10px #ff2a8d; }
    59% { opacity: 0.35; text-shadow: none; }
    61%, 100% { opacity: 1; text-shadow: 0 0 4px #ffffff, 0 0 10px #ff2a8d, 0 0 20px #ff0055; }
  }

  .neonc-cable {
    position: absolute;
    right: 18px;
    top: 58px;
    width: 22px;
    height: 22px;
    border: 1.5px solid #475569;
    border-top: none;
    border-left: none;
    border-radius: 0 0 14px 0;
  }

  .neonc-moth-orbit {
    position: absolute;
    left: 50%;
    top: 36px;
    width: 0;
    height: 0;
    animation: neonc-moth-orbit 4.2s linear infinite;
  }

  @keyframes neonc-moth-orbit {
    to { transform: rotate(-360deg); }
  }

  .neonc-moth {
    position: absolute;
    left: 46px;
    top: 0;
    width: 6px;
    height: 4px;
    animation: neonc-moth 0.24s steps(2) infinite;
  }

  .neonc-moth::before,
  .neonc-moth::after {
    content: '';
    position: absolute;
    top: 0;
    width: 3px;
    height: 4px;
    border-radius: 50% 50% 40% 40%;
    background: #ffd699;
    box-shadow: 0 0 4px rgba(255, 214, 153, 0.8);
  }

  .neonc-moth::before { left: 0; transform-origin: right center; transform: rotate(24deg); }
  .neonc-moth::after { right: 0; transform-origin: left center; transform: rotate(-24deg); }

  @keyframes neonc-moth {
    0% { transform: scaleX(1); }
    100% { transform: scaleX(0.55); }
  }

  .neonc-legend {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 7px;
    letter-spacing: 3px;
    color: #94a3b8;
  }
`;

const neonMarkup = {
  v1: `
    <div class="neon">
      <div class="neon-chain c1"></div>
      <div class="neon-chain c2"></div>
      <div class="neon-frame"></div>
      <div class="neon-word">
        <span class="neon-letter l1">O</span><span class="neon-letter l2">P</span><span class="neon-letter l3 flicker">E</span><span class="neon-letter l4">N</span>
      </div>
      <div class="neon-cable"></div>
      <div class="neon-moth-orbit"><div class="neon-moth"></div></div>
      <div class="neon-legend">COME IN WE'RE</div>
    </div>
  `,
  v2: `
    <div class="neonc">
      <div class="neonc-chain c1"></div>
      <div class="neonc-chain c2"></div>
      <div class="neonc-frame"></div>
      <div class="neonc-word">
        <span class="neonc-letter l1">O</span><span class="neonc-letter l2">P</span><span class="neonc-letter l3 flicker">E</span><span class="neonc-letter l4">N</span>
      </div>
      <div class="neonc-cable"></div>
      <div class="neonc-moth-orbit"><div class="neonc-moth"></div></div>
      <div class="neonc-legend">COME IN WE'RE</div>
    </div>
  `,
};

class ConceptNeon extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${neonStyles}</style>${neonMarkup[version] || neonMarkup.v2}`;
  }
}

if (!customElements.get('concept-neon')) {
  customElements.define('concept-neon', ConceptNeon);
}
