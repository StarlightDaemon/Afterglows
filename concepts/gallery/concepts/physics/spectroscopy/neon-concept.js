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
    transform-origin: 50% 0;
    animation: neon-swing 1.8s ease-in-out infinite alternate;
  }

  @keyframes neon-swing {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
  }

  .neon-chain {
    position: absolute;
    top: 0;
    width: 2px;
    height: 14px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.9) 0 2px,
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
    border: 2px solid #00ff66;
    border-radius: 8px;
    background: rgba(0, 18, 4, 0.9);
    box-shadow: 0 0 12px rgba(0, 255, 100, 0.5), inset 0 0 14px rgba(0, 255, 100, 0.3);
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
    color: #ffffff;
  }

  .neon-letter {
    text-shadow:
      0 0 4px #ffffff,
      0 0 10px #00ff66,
      0 0 20px #00ff66;
    animation: neon-hum 1.2s ease-in-out infinite alternate;
  }

  .neon-letter.l2 { animation-delay: -0.3s; }
  .neon-letter.l3 { animation-delay: -0.6s; }
  .neon-letter.l4 { animation-delay: -0.9s; }

  @keyframes neon-hum {
    0% { transform: scale(0.95); opacity: 0.9; }
    100% { transform: scale(1.05); opacity: 1; }
  }

  .neon-letter.flicker {
    animation: neon-hum 1.2s ease-in-out infinite alternate;
  }

  .neon-cable {
    position: absolute;
    right: 18px;
    top: 58px;
    width: 22px;
    height: 22px;
    border: 2px solid rgba(0, 255, 100, 0.7);
    border-top: none;
    border-left: none;
    border-radius: 0 0 14px 0;
    animation: neon-cable-vibe 0.8s ease-in-out infinite alternate;
  }

  @keyframes neon-cable-vibe {
    0% { transform: translateY(0); }
    100% { transform: translateY(2px); }
  }

  .neon-moth-orbit {
    position: absolute;
    left: 50%;
    top: 36px;
    width: 0;
    height: 0;
    animation: neon-moth-orbit 2.4s linear infinite;
  }

  @keyframes neon-moth-orbit {
    0% { transform: rotate(0deg) scale(0.9); }
    50% { transform: rotate(180deg) scale(1.15); }
    100% { transform: rotate(360deg) scale(0.9); }
  }

  .neon-moth {
    position: absolute;
    left: 42px;
    top: 0;
    width: 7px;
    height: 5px;
    animation: neon-moth 0.15s steps(2) infinite;
  }

  .neon-moth::before,
  .neon-moth::after {
    content: '';
    position: absolute;
    top: 0;
    width: 4px;
    height: 5px;
    border-radius: 50% 50% 40% 40%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
  }

  .neon-moth::before { left: 0; transform-origin: right center; transform: rotate(24deg); }
  .neon-moth::after { right: 0; transform-origin: left center; transform: rotate(-24deg); }

  @keyframes neon-moth {
    0% { transform: scaleX(1); }
    100% { transform: scaleX(0.5); }
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
    color: #00ff66;
  }

  /* --- v2: Multi-gas dual neon (Hot Pink letters + Electric Cyan border) --- */
  .neonc {
    width: 112px;
    height: 88px;
    position: relative;
    transform-origin: 50% 0;
    animation: neonc-swing 1.8s ease-in-out infinite alternate;
  }

  @keyframes neonc-swing {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
  }

  .neonc-chain {
    position: absolute;
    top: 0;
    width: 2px;
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
    box-shadow: 0 0 14px rgba(0, 229, 255, 0.8), inset 0 0 14px rgba(255, 20, 147, 0.4);
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
    color: #ffffff;
  }

  .neonc-letter {
    color: #ffffff;
    text-shadow:
      0 0 4px #ffffff,
      0 0 10px #ff2a8d,
      0 0 20px #ff0055;
    animation: neonc-hum 1.2s ease-in-out infinite alternate;
  }

  .neonc-letter.l2 { animation-delay: -0.3s; }
  .neonc-letter.l3 { animation-delay: -0.6s; }
  .neonc-letter.l4 { animation-delay: -0.9s; }

  @keyframes neonc-hum {
    0% { transform: scale(0.95); opacity: 0.95; }
    100% { transform: scale(1.05); opacity: 1; }
  }

  .neonc-letter.flicker {
    animation: neonc-hum 1.2s ease-in-out infinite alternate;
  }

  .neonc-cable {
    position: absolute;
    right: 18px;
    top: 58px;
    width: 22px;
    height: 22px;
    border: 2px solid #38bdf8;
    border-top: none;
    border-left: none;
    border-radius: 0 0 14px 0;
    animation: neon-cable-vibe 0.8s ease-in-out infinite alternate;
  }

  .neonc-moth-orbit {
    position: absolute;
    left: 50%;
    top: 36px;
    width: 0;
    height: 0;
    animation: neonc-moth-orbit 2.4s linear infinite;
  }

  @keyframes neonc-moth-orbit {
    0% { transform: rotate(0deg) scale(0.9); }
    50% { transform: rotate(180deg) scale(1.15); }
    100% { transform: rotate(360deg) scale(0.9); }
  }

  .neonc-moth {
    position: absolute;
    left: 42px;
    top: 0;
    width: 7px;
    height: 5px;
    animation: neonc-moth 0.15s steps(2) infinite;
  }

  .neonc-moth::before,
  .neonc-moth::after {
    content: '';
    position: absolute;
    top: 0;
    width: 4px;
    height: 5px;
    border-radius: 50% 50% 40% 40%;
    background: #ffd699;
    box-shadow: 0 0 8px rgba(255, 214, 153, 0.9);
  }

  .neonc-moth::before { left: 0; transform-origin: right center; transform: rotate(24deg); }
  .neonc-moth::after { right: 0; transform-origin: left center; transform: rotate(-24deg); }

  @keyframes neonc-moth {
    0% { transform: scaleX(1); }
    100% { transform: scaleX(0.5); }
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
    color: #38bdf8;
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
