const rouletteStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rlt {
    width: 104px;
    height: 96px;
    position: relative;
  }

  .rlt-bowl {
    position: absolute;
    left: 50%;
    top: 6px;
    width: 84px;
    height: 84px;
    margin-left: -42px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 40, 8, 0.5), rgba(0, 15, 3, 0.85));
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.25);
  }

  .rlt-wheel {
    position: absolute;
    left: 50%;
    top: 13px;
    width: 70px;
    height: 70px;
    margin-left: -35px;
    border-radius: 50%;
    background:
      repeating-conic-gradient(
        rgba(0, 204, 0, 0.55) 0 15deg,
        rgba(0, 60, 12, 0.6) 15deg 30deg);
    border: 1px solid rgba(140, 255, 170, 0.6);
    animation: rlt-wheel 8s cubic-bezier(0.16, 0.84, 0.44, 1) infinite;
  }

  .rlt-wheel::after {
    content: '';
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.5);
    background: radial-gradient(circle, rgba(0, 70, 14, 0.9) 0 52%, transparent 54%);
  }

  @keyframes rlt-wheel {
    0% { transform: rotate(0deg); }
    72%, 100% { transform: rotate(1170deg); }
  }

  .rlt-orbit {
    position: absolute;
    left: 50%;
    top: 48px;
    width: 0;
    height: 0;
    animation: rlt-orbit 8s cubic-bezier(0.2, 0.8, 0.5, 1) infinite;
  }

  @keyframes rlt-orbit {
    0% { transform: rotate(360deg); }
    62% { transform: rotate(-560deg); }
    72%, 100% { transform: rotate(-585deg); }
  }

  .rlt-ball {
    position: absolute;
    top: -3px;
    left: 0;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #f2ffdd, #baffc9 70%);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    animation: rlt-ball 8s ease-in-out infinite;
  }

  @keyframes rlt-ball {
    0%, 40% { transform: translateX(36px); }
    52% { transform: translateX(33px); }
    58% { transform: translateX(26px); }
    61% { transform: translateX(29px); }
    64% { transform: translateX(24px); }
    67% { transform: translateX(26px); }
    70%, 100% { transform: translateX(24px); }
  }

  .rlt-turret {
    position: absolute;
    left: 50%;
    top: 48px;
    width: 14px;
    height: 14px;
    margin: -7px 0 0 -7px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
    box-shadow: 0 0 7px rgba(0, 204, 0, 0.7);
  }

  .rlt-turret::before,
  .rlt-turret::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 3px;
    margin: -1.5px 0 0 -12px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .rlt-turret::after { transform: rotate(90deg); }

  .rlt-marker {
    position: absolute;
    left: 50%;
    top: 0;
    width: 7px;
    height: 7px;
    margin-left: -3.5px;
    border-radius: 50%;
    background: var(--accent, #00cc00);
    animation: rlt-marker 8s infinite;
  }

  @keyframes rlt-marker {
    0%, 8% { opacity: 0.3; box-shadow: none; }
    12% { opacity: 1; box-shadow: 0 0 6px rgba(0, 204, 0, 0.8); }
    18% { opacity: 0.3; }
    26% { opacity: 1; box-shadow: 0 0 6px rgba(0, 204, 0, 0.8); }
    34% { opacity: 0.3; }
    44% { opacity: 1; }
    54% { opacity: 0.3; }
    72%, 92% { opacity: 1; box-shadow: 0 0 12px rgba(0, 204, 0, 1); }
    96%, 100% { opacity: 0.3; box-shadow: none; }
  }

  .rlt-call {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
  }

  .rlt-call::before {
    content: 'SPINNING';
    animation: rlt-call 8s steps(1) infinite;
  }

  @keyframes rlt-call {
    0% { content: 'SPINNING'; }
    30% { content: 'NO MORE BETS'; }
    72% { content: '17 \\2022 ODD'; }
    97% { content: 'SPINNING'; }
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

  /* v2: Casino Monte Carlo roulette wheel with rich mahogany bowl,
     alternating crimson/obsidian pockets, brass turret, ivory ball, and call ticker */
  .rltc {
    width: 104px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Polished mahogany outer bowl */
  .rltc-bowl {
    position: absolute;
    left: 50%;
    top: 6px;
    width: 84px;
    height: 84px;
    margin-left: -42px;
    border: 2.5px solid #ca8a04;
    border-radius: 50%;
    background: radial-gradient(circle, #78350f 0%, #451a03 70%, #290e02 100%);
    box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.9), 0 4px 10px rgba(0, 0, 0, 0.8);
  }

  /* Alternating red and black number pockets */
  .rltc-wheel {
    position: absolute;
    left: 50%;
    top: 13px;
    width: 70px;
    height: 70px;
    margin-left: -35px;
    border-radius: 50%;
    background:
      repeating-conic-gradient(
        #dc2626 0 15deg,
        #18181b 15deg 30deg);
    border: 1.5px solid #facc15;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    animation: rltc-wheel 8s cubic-bezier(0.16, 0.84, 0.44, 1) infinite;
  }

  /* Gold pocket separator ring */
  .rltc-wheel::after {
    content: '';
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    border: 1.5px solid #facc15;
    background: radial-gradient(circle, #15803d 0 52%, transparent 54%);
  }

  @keyframes rltc-wheel {
    0% { transform: rotate(0deg); }
    72%, 100% { transform: rotate(1170deg); }
  }

  /* Ivory ball orbit */
  .rltc-orbit {
    position: absolute;
    left: 50%;
    top: 48px;
    width: 0;
    height: 0;
    animation: rltc-orbit 8s cubic-bezier(0.2, 0.8, 0.5, 1) infinite;
  }

  @keyframes rltc-orbit {
    0% { transform: rotate(360deg); }
    62% { transform: rotate(-560deg); }
    72%, 100% { transform: rotate(-585deg); }
  }

  .rltc-ball {
    position: absolute;
    top: -3px;
    left: 0;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #ffffff, #f1f5f9 70%, #cbd5e1 100%);
    box-shadow: 0 0 6px #ffffff, 0 1px 3px rgba(0, 0, 0, 0.8);
    animation: rltc-ball 8s ease-in-out infinite;
  }

  @keyframes rltc-ball {
    0%, 40% { transform: translateX(36px); }
    52% { transform: translateX(33px); }
    58% { transform: translateX(26px); }
    61% { transform: translateX(29px); }
    64% { transform: translateX(24px); }
    67% { transform: translateX(26px); }
    70%, 100% { transform: translateX(24px); }
  }

  /* Four-arm solid brass turret */
  .rltc-turret {
    position: absolute;
    left: 50%;
    top: 48px;
    width: 14px;
    height: 14px;
    margin: -7px 0 0 -7px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #fef08a, #ca8a04 80%);
    box-shadow: 0 0 8px #facc15;
  }

  .rltc-turret::before,
  .rltc-turret::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 3px;
    margin: -1.5px 0 0 -12px;
    border-radius: 2px;
    background: #facc15;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  .rltc-turret::after { transform: rotate(90deg); }

  /* Winning beacon marker */
  .rltc-marker {
    position: absolute;
    left: 50%;
    top: 0;
    width: 7px;
    height: 7px;
    margin-left: -3.5px;
    border-radius: 50%;
    background: #facc15;
    animation: rltc-marker 8s infinite;
  }

  @keyframes rltc-marker {
    0%, 8% { opacity: 0.3; box-shadow: none; }
    12% { opacity: 1; box-shadow: 0 0 6px #facc15; }
    18% { opacity: 0.3; }
    26% { opacity: 1; box-shadow: 0 0 6px #facc15; }
    34% { opacity: 0.3; }
    44% { opacity: 1; }
    54% { opacity: 0.3; }
    72%, 92% { opacity: 1; box-shadow: 0 0 14px #fde047; }
    96%, 100% { opacity: 0.3; box-shadow: none; }
  }

  /* Casino call ticker */
  .rltc-call {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fde047;
    text-shadow: 0 0 6px #facc15;
  }

  .rltc-call::before {
    content: 'SPINNING';
    animation: rltc-call 8s steps(1) infinite;
  }

  @keyframes rltc-call {
    0% { content: 'SPINNING'; }
    30% { content: 'NO MORE BETS'; }
    72% { content: '17 • BLACK'; }
    97% { content: 'SPINNING'; }
  }
  `,
};

const rouletteMarkup = {
  v1: `
      <div class="rlt">
        <div class="rlt-bowl"></div>
        <div class="rlt-wheel"></div>
        <div class="rlt-orbit"><div class="rlt-ball"></div></div>
        <div class="rlt-turret"></div>
        <div class="rlt-marker"></div>
        <div class="rlt-call"></div>
      </div>
    `,
  v2: `
      <div class="rltc">
        <div class="rltc-bowl"></div>
        <div class="rltc-wheel"></div>
        <div class="rltc-orbit"><div class="rltc-ball"></div></div>
        <div class="rltc-turret"></div>
        <div class="rltc-marker"></div>
        <div class="rltc-call"></div>
      </div>
    `,
};

class ConceptRoulette extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${rouletteStyles[version] || rouletteStyles.v2}</style>${rouletteMarkup[version] || rouletteMarkup.v2}`;
  }
}

if (!customElements.get('concept-roulette')) {
  customElements.define('concept-roulette', ConceptRoulette);
}
