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
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 12px rgba(0, 255, 100, 0.4);
    animation: sb-jitter 0.8s ease-in-out infinite alternate;
  }

  @keyframes sb-jitter {
    0% { transform: translate(-3px, -2px) rotate(-3deg); }
    100% { transform: translate(3px, 2px) rotate(3deg); }
  }

  .sb-antenna {
    position: absolute;
    top: -14px;
    right: 10px;
    width: 2.5px;
    height: 16px;
    border-radius: 1px;
    background: linear-gradient(180deg, #ffffff, #00ff66);
    box-shadow: 0 0 6px #00ff66;
    transform-origin: bottom center;
    animation: sb-antenna-flex 0.8s ease-in-out infinite alternate;
  }

  @keyframes sb-antenna-flex {
    0% { transform: rotate(-12deg); }
    100% { transform: rotate(12deg); }
  }

  .sb-antenna::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
  }

  .sb-display {
    position: absolute;
    top: 8px;
    left: 7px;
    right: 7px;
    height: 18px;
    border-radius: 3px;
    background: #010401;
    border: 1px solid #00ff66;
    box-shadow: inset 0 0 6px rgba(0, 255, 100, 0.3);
    overflow: hidden;
  }

  .sb-strip {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 200%;
    background: repeating-linear-gradient(90deg,
      #00ff66 0 1px, transparent 1px 7px,
      #ffffff 7px 8px, transparent 8px 14px);
    animation: sb-sweep 1.2s linear infinite;
  }

  .sb-needle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
    z-index: 2;
    animation: sb-needle-sweep 1.0s ease-in-out infinite alternate;
  }

  @keyframes sb-needle-sweep {
    0% { transform: translateX(-14px); }
    100% { transform: translateX(14px); }
  }

  .sb-freq {
    position: absolute;
    top: 2px;
    right: 3px;
    font-family: monospace;
    font-size: 8px;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 0 4px #00ff66;
    z-index: 2;
  }

  .sb-freq::after {
    content: '98.1';
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
    background: #00ff66;
    box-shadow: 0 0 4px #00ff66;
    animation: sb-static 0.8s ease-in-out infinite alternate;
  }

  .sb-bar:nth-child(1) { animation-delay: 0s; }
  .sb-bar:nth-child(2) { animation-delay: -0.11s; }
  .sb-bar:nth-child(3) { animation-delay: -0.22s; }
  .sb-bar:nth-child(4) { animation-delay: -0.33s; }
  .sb-bar:nth-child(5) { animation-delay: -0.44s; }
  .sb-bar:nth-child(6) { animation-delay: -0.55s; }
  .sb-bar:nth-child(7) { animation-delay: -0.66s; }

  .sb-word {
    position: absolute;
    top: 32px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: monospace;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #ffffff;
    text-shadow: 0 0 8px #00ff66;
  }

  .sb-led {
    position: absolute;
    top: 32px;
    left: 8px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
  }

  @keyframes sb-sweep {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes sb-static {
    0% { height: 16%; }
    100% { height: 95%; }
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

  /* v2: Ghost hunter spirit box with dark chassis */
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
    border: 1.5px solid #38bdf8;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.9), 0 0 10px rgba(56, 189, 248, 0.4);
    animation: sbc-jitter 0.8s ease-in-out infinite alternate;
  }

  @keyframes sbc-jitter {
    0% { transform: translate(-3px, -2px) rotate(-3deg); }
    100% { transform: translate(3px, 2px) rotate(3deg); }
  }

  /* Telescoping antenna with red blinking tip */
  .sbc-antenna {
    position: absolute;
    top: -14px;
    right: 10px;
    width: 2.5px;
    height: 16px;
    border-radius: 1px;
    background: linear-gradient(180deg, #ffffff, #94a3b8);
    transform-origin: bottom center;
    animation: sbc-antenna-flex 0.8s ease-in-out infinite alternate;
  }

  @keyframes sbc-antenna-flex {
    0% { transform: rotate(-12deg); }
    100% { transform: rotate(12deg); }
  }

  .sbc-antenna::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 8px #ef4444;
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
    box-shadow: inset 0 0 6px #78350f, 0 0 6px rgba(245, 158, 11, 0.5);
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
    animation: sbc-sweep 1.2s linear infinite;
  }

  .sbc-needle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #ef4444;
    box-shadow: 0 0 8px #f87171;
    z-index: 2;
    animation: sbc-needle-sweep 1.0s ease-in-out infinite alternate;
  }

  @keyframes sbc-needle-sweep {
    0% { transform: translateX(-14px); }
    100% { transform: translateX(14px); }
  }

  .sbc-freq {
    position: absolute;
    top: 2px;
    right: 3px;
    font-family: monospace;
    font-size: 8px;
    font-weight: bold;
    color: #fde047;
    text-shadow: 0 0 4px #eab308;
    z-index: 2;
  }

  .sbc-freq::after {
    content: '98.1';
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
    animation: sbc-static 0.8s ease-in-out infinite alternate;
  }

  .sbc-bar:nth-child(1) { background: #38bdf8; box-shadow: 0 0 4px #0284c7; animation-delay: 0s; }
  .sbc-bar:nth-child(2) { background: #06b6d4; box-shadow: 0 0 4px #0891b2; animation-delay: -0.11s; }
  .sbc-bar:nth-child(3) { background: #22c55e; box-shadow: 0 0 4px #16a34a; animation-delay: -0.22s; }
  .sbc-bar:nth-child(4) { background: #facc15; box-shadow: 0 0 4px #ca8a04; animation-delay: -0.33s; }
  .sbc-bar:nth-child(5) { background: #f97316; box-shadow: 0 0 4px #ea580c; animation-delay: -0.44s; }
  .sbc-bar:nth-child(6) { background: #ec4899; box-shadow: 0 0 4px #db2777; animation-delay: -0.55s; }
  .sbc-bar:nth-child(7) { background: #a855f7; box-shadow: 0 0 4px #9333ea; animation-delay: -0.66s; }

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
    color: #38bdf8;
    text-shadow: 0 0 8px #00f0ff, 0 0 14px #38bdf8;
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
    box-shadow: 0 0 8px #4ade80;
  }

  @keyframes sbc-sweep {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes sbc-static {
    0% { height: 16%; }
    100% { height: 95%; }
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
