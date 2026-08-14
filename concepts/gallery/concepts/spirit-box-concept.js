const spiritBoxStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sb {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sb-case {
    position: relative;
    width: 66px;
    height: 88px;
    border-radius: 8px;
    background: linear-gradient(165deg, #0c2c14 0%, #071c0c 60%, #041106 100%);
    border: 1px solid rgba(140, 255, 170, 0.5);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.25);
  }

  .sb-antenna {
    position: absolute;
    top: -14px;
    right: 10px;
    width: 2px;
    height: 16px;
    border-radius: 1px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.9), rgba(90, 220, 130, 0.5));
  }

  .sb-antenna::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -1.5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d8ffbb;
    animation: sb-antenna 1.1s ease-in-out infinite;
  }

  .sb-display {
    position: absolute;
    top: 8px;
    left: 7px;
    right: 7px;
    height: 18px;
    border-radius: 3px;
    background: #010401;
    border: 1px solid rgba(140, 255, 170, 0.45);
    overflow: hidden;
  }

  .sb-strip {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 200%;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.55) 0 1px, transparent 1px 7px,
      rgba(140, 255, 170, 0.8) 7px 8px, transparent 8px 14px);
    animation: sb-sweep 3.4s linear infinite;
  }

  .sb-needle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #eaffd9;
    box-shadow: 0 0 5px rgba(234, 255, 217, 0.9);
    z-index: 2;
  }

  .sb-freq {
    position: absolute;
    top: 3px;
    right: 3px;
    font-family: monospace;
    font-size: 7px;
    color: rgba(216, 255, 187, 0.9);
    z-index: 2;
    animation: sb-freq 3.4s steps(1, end) infinite;
  }

  .sb-freq::after {
    content: '87.9';
    animation: sb-freq-text 3.4s steps(1, end) infinite;
  }

  .sb-grille {
    position: absolute;
    bottom: 8px;
    left: 10px;
    right: 10px;
    height: 26px;
    display: flex;
    align-items: flex-end;
    gap: 3px;
  }

  .sb-bar {
    flex: 1;
    height: 12%;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.8);
    animation: sb-static 3.4s ease-in-out infinite;
  }

  .sb-bar:nth-child(1) { animation-delay: 0s; }
  .sb-bar:nth-child(2) { animation-delay: -0.13s; }
  .sb-bar:nth-child(3) { animation-delay: -0.27s; }
  .sb-bar:nth-child(4) { animation-delay: -0.41s; }
  .sb-bar:nth-child(5) { animation-delay: -0.55s; }
  .sb-bar:nth-child(6) { animation-delay: -0.69s; }
  .sb-bar:nth-child(7) { animation-delay: -0.83s; }

  .sb-word {
    position: absolute;
    top: 32px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: monospace;
    font-size: 9px;
    letter-spacing: 1px;
    color: rgba(234, 255, 217, 0);
    animation: sb-word 3.4s linear infinite;
  }

  .sb-led {
    position: absolute;
    top: 32px;
    left: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(216, 255, 187, 0.4);
    animation: sb-led 3.4s linear infinite;
  }

  @keyframes sb-sweep {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes sb-antenna {
    0%, 100% { opacity: 0.3; box-shadow: none; }
    50% { opacity: 1; box-shadow: 0 0 6px rgba(216, 255, 187, 0.8); }
  }

  @keyframes sb-static {
    0%, 46% { height: 14%; opacity: 0.55; }
    50% { height: 22%; }
    57% { height: 88%; opacity: 1; }
    63% { height: 46%; }
    68% { height: 92%; opacity: 1; }
    74% { height: 30%; }
    80%, 100% { height: 12%; opacity: 0.5; }
  }

  @keyframes sb-word {
    0%, 52% { color: rgba(234, 255, 217, 0); text-shadow: none; }
    57%, 71% { color: rgba(234, 255, 217, 0.95); text-shadow: 0 0 7px rgba(234, 255, 217, 0.7); }
    76%, 100% { color: rgba(234, 255, 217, 0); }
  }

  @keyframes sb-led {
    0%, 52% { background: rgba(216, 255, 187, 0.25); box-shadow: none; }
    55%, 74% { background: #eaffd9; box-shadow: 0 0 6px rgba(234, 255, 217, 0.9); }
    78%, 100% { background: rgba(216, 255, 187, 0.25); }
  }

  @keyframes sb-freq { 0%, 100% { opacity: 1; } }

  @keyframes sb-freq-text {
    0% { content: '87.9'; }
    14% { content: '91.3'; }
    28% { content: '94.7'; }
    42% { content: '98.1'; }
    56% { content: '101.5'; }
    72% { content: '104.9'; }
    86% { content: '106.3'; }
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

  /* v2: Ghost hunter spirit box with dark chassis, amber LCD,
     pulsing red LED, violet/cyan audio spectrum, and glowing EVP voice */
  .sbc {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Dark slate chassis */
  .sbc-case {
    position: relative;
    width: 66px;
    height: 88px;
    border-radius: 8px;
    background: linear-gradient(165deg, #334155 0%, #1e293b 60%, #0f172a 100%);
    border: 1px solid #475569;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9), inset 0 1px 2px #64748b;
  }

  /* Telescoping antenna with red blinking tip */
  .sbc-antenna {
    position: absolute;
    top: -14px;
    right: 10px;
    width: 2px;
    height: 16px;
    border-radius: 1px;
    background: linear-gradient(180deg, #ffffff, #94a3b8);
  }

  .sbc-antenna::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -1.5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 6px #f87171;
    animation: sbc-antenna 1.1s ease-in-out infinite;
  }

  /* Amber backlit LCD screen */
  .sbc-display {
    position: absolute;
    top: 8px;
    left: 7px;
    right: 7px;
    height: 18px;
    border-radius: 3px;
    background: #1c1917;
    border: 1px solid #f59e0b;
    box-shadow: inset 0 0 6px #78350f, 0 0 4px rgba(245, 158, 11, 0.3);
    overflow: hidden;
  }

  /* Scrolling frequency marks */
  .sbc-strip {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 200%;
    background: repeating-linear-gradient(90deg,
      #facc15 0 1px, transparent 1px 7px,
      #f59e0b 7px 8px, transparent 8px 14px);
    animation: sbc-sweep 3.4s linear infinite;
  }

  .sbc-needle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #ef4444;
    box-shadow: 0 0 5px #f87171;
    z-index: 2;
  }

  .sbc-freq {
    position: absolute;
    top: 3px;
    right: 3px;
    font-family: monospace;
    font-size: 8px;
    font-weight: bold;
    color: #fde047;
    text-shadow: 0 0 4px #eab308;
    z-index: 2;
    animation: sbc-freq 3.4s steps(1, end) infinite;
  }

  .sbc-freq::after {
    content: '87.9';
    animation: sbc-freq-text 3.4s steps(1, end) infinite;
  }

  /* Cyan & Violet spectral equalizer bars */
  .sbc-grille {
    position: absolute;
    bottom: 8px;
    left: 10px;
    right: 10px;
    height: 26px;
    display: flex;
    align-items: flex-end;
    gap: 3px;
  }

  .sbc-bar {
    flex: 1;
    height: 12%;
    border-radius: 1px;
    animation: sbc-static 3.4s ease-in-out infinite;
  }

  .sbc-bar:nth-child(1) { background: #38bdf8; box-shadow: 0 0 4px #0284c7; animation-delay: 0s; }
  .sbc-bar:nth-child(2) { background: #06b6d4; box-shadow: 0 0 4px #0891b2; animation-delay: -0.13s; }
  .sbc-bar:nth-child(3) { background: #22c55e; box-shadow: 0 0 4px #16a34a; animation-delay: -0.27s; }
  .sbc-bar:nth-child(4) { background: #facc15; box-shadow: 0 0 4px #ca8a04; animation-delay: -0.41s; }
  .sbc-bar:nth-child(5) { background: #f97316; box-shadow: 0 0 4px #ea580c; animation-delay: -0.55s; }
  .sbc-bar:nth-child(6) { background: #ec4899; box-shadow: 0 0 4px #db2777; animation-delay: -0.69s; }
  .sbc-bar:nth-child(7) { background: #a855f7; box-shadow: 0 0 4px #9333ea; animation-delay: -0.83s; }

  /* EVP Ghost Voice Text */
  .sbc-word {
    position: absolute;
    top: 32px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: monospace;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 2px;
    color: rgba(56, 189, 248, 0);
    animation: sbc-word 3.4s linear infinite;
  }

  /* Green status LED */
  .sbc-led {
    position: absolute;
    top: 32px;
    left: 8px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 6px #4ade80;
    animation: sbc-led 3.4s linear infinite;
  }

  @keyframes sbc-sweep {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes sbc-antenna {
    0%, 100% { opacity: 0.3; box-shadow: none; }
    50% { opacity: 1; box-shadow: 0 0 6px #ef4444; }
  }

  @keyframes sbc-static {
    0%, 46% { height: 14%; opacity: 0.55; }
    50% { height: 22%; }
    57% { height: 88%; opacity: 1; }
    63% { height: 46%; }
    68% { height: 92%; opacity: 1; }
    74% { height: 30%; }
    80%, 100% { height: 12%; opacity: 0.5; }
  }

  @keyframes sbc-word {
    0%, 52% { color: rgba(56, 189, 248, 0); text-shadow: none; }
    57%, 71% { color: #38bdf8; text-shadow: 0 0 8px #00f0ff, 0 0 14px #38bdf8; }
    76%, 100% { color: rgba(56, 189, 248, 0); }
  }

  @keyframes sbc-led {
    0%, 52% { background: #166534; box-shadow: none; }
    55%, 74% { background: #22c55e; box-shadow: 0 0 8px #4ade80; }
    78%, 100% { background: #166534; }
  }

  @keyframes sbc-freq { 0%, 100% { opacity: 1; } }

  @keyframes sbc-freq-text {
    0% { content: '87.9'; }
    14% { content: '91.3'; }
    28% { content: '94.7'; }
    42% { content: '98.1'; }
    56% { content: '101.5'; }
    72% { content: '104.9'; }
    86% { content: '106.3'; }
  }
  `,
};

const spiritBoxMarkup = {
  v1: `
      <div class="sb">
        <div class="sb-case">
          <div class="sb-antenna"></div>
          <div class="sb-display">
            <div class="sb-strip"></div>
            <div class="sb-needle"></div>
            <span class="sb-freq"></span>
          </div>
          <div class="sb-led"></div>
          <div class="sb-word">H E L L O</div>
          <div class="sb-grille">
            <div class="sb-bar"></div>
            <div class="sb-bar"></div>
            <div class="sb-bar"></div>
            <div class="sb-bar"></div>
            <div class="sb-bar"></div>
            <div class="sb-bar"></div>
            <div class="sb-bar"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="sbc">
        <div class="sbc-case">
          <div class="sbc-antenna"></div>
          <div class="sbc-display">
            <div class="sbc-strip"></div>
            <div class="sbc-needle"></div>
            <span class="sbc-freq"></span>
          </div>
          <div class="sbc-led"></div>
          <div class="sbc-word">H E L L O</div>
          <div class="sbc-grille">
            <div class="sbc-bar"></div>
            <div class="sbc-bar"></div>
            <div class="sbc-bar"></div>
            <div class="sbc-bar"></div>
            <div class="sbc-bar"></div>
            <div class="sbc-bar"></div>
            <div class="sbc-bar"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptSpiritBox extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${spiritBoxStyles[version] || spiritBoxStyles.v2}</style>${spiritBoxMarkup[version] || spiritBoxMarkup.v2}`;
  }
}

if (!customElements.get('concept-spirit-box')) {
  customElements.define('concept-spirit-box', ConceptSpiritBox);
}
