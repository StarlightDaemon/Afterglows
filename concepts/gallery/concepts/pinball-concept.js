const pinballStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pb {
    width: 96px;
    height: 100px;
    position: relative;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 10px 10px 4px 4px;
    background: linear-gradient(180deg, rgba(0, 40, 8, 0.4), rgba(0, 15, 3, 0.7));
    overflow: hidden;
  }

  .pb-arch {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 4px;
    height: 16px;
    border: 1px solid rgba(0, 204, 0, 0.35);
    border-bottom: none;
    border-radius: 40px 40px 0 0;
  }

  .pb-bumper {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.8);
    background: radial-gradient(circle at 40% 32%, rgba(190, 255, 205, 0.6), rgba(0, 90, 18, 0.9));
    box-sizing: border-box;
  }

  .pb-bumper.b1 { left: 14px; top: 26px; animation: pb-hit 6s steps(1) infinite; }
  .pb-bumper.b2 { left: 62px; top: 22px; animation: pb-hit 6s steps(1) infinite; animation-delay: -4.9s; }
  .pb-bumper.b3 { left: 40px; top: 46px; animation: pb-hit 6s steps(1) infinite; animation-delay: -3.6s; }

  @keyframes pb-hit {
    0%, 16% { box-shadow: none; }
    18%, 22% { box-shadow: 0 0 14px rgba(0, 204, 0, 1), inset 0 0 8px rgba(190, 255, 205, 0.9); }
    24%, 100% { box-shadow: none; }
  }

  .pb-post {
    position: absolute;
    width: 4px;
    height: 12px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.6);
  }

  .pb-post.p1 { left: 16px; bottom: 26px; transform: rotate(28deg); }
  .pb-post.p2 { right: 16px; bottom: 26px; transform: rotate(-28deg); }

  .pb-flipper {
    position: absolute;
    bottom: 12px;
    width: 24px;
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(90deg, #baffc9, rgba(0, 140, 28, 0.9));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
  }

  .pb-flipper.left {
    left: 18px;
    transform-origin: 0% 50%;
    transform: rotate(24deg);
    animation: pb-flip-l 6s infinite;
  }

  .pb-flipper.right {
    right: 18px;
    transform-origin: 100% 50%;
    transform: rotate(-24deg);
    animation: pb-flip-r 6s infinite;
  }

  @keyframes pb-flip-l {
    0%, 60% { transform: rotate(24deg); }
    63%, 65% { transform: rotate(-22deg); }
    68%, 100% { transform: rotate(24deg); }
  }

  @keyframes pb-flip-r {
    0%, 30% { transform: rotate(-24deg); }
    33%, 35% { transform: rotate(22deg); }
    38%, 100% { transform: rotate(-24deg); }
  }

  .pb-drain {
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 20px;
    height: 3px;
    margin-left: -10px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.3);
  }

  .pb-ball {
    position: absolute;
    left: 0;
    top: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #f2ffdd, #baffc9 70%);
    box-shadow: 0 0 7px rgba(0, 204, 0, 0.95);
    animation: pb-ball 6s linear infinite;
  }

  @keyframes pb-ball {
    0% { transform: translate(84px, 92px); }
    8% { transform: translate(86px, 30px); animation-timing-function: ease-out; }
    12% { transform: translate(74px, 12px); animation-timing-function: ease-in; }
    18% { transform: translate(68px, 26px); animation-timing-function: ease-out; }
    28% { transform: translate(50px, 44px); }
    33% { transform: translate(62px, 80px); animation-timing-function: ease-out; }
    40% { transform: translate(38px, 34px); }
    46% { transform: translate(22px, 28px); animation-timing-function: ease-in; }
    54% { transform: translate(16px, 58px); }
    60% { transform: translate(28px, 82px); animation-timing-function: ease-out; }
    66% { transform: translate(46px, 40px); }
    74% { transform: translate(48px, 52px); animation-timing-function: ease-in; }
    84% { transform: translate(58px, 78px); }
    92% { transform: translate(84px, 92px); }
    100% { transform: translate(84px, 92px); }
  }

  .pb-score {
    position: absolute;
    left: 0;
    right: 0;
    top: 6px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
  }

  .pb-score::before {
    content: '001200';
    animation: pb-score 6s steps(1) infinite;
  }

  @keyframes pb-score {
    0% { content: '001200'; }
    19% { content: '003700'; }
    29% { content: '005200'; }
    41% { content: '007900'; }
    61% { content: '008400'; }
    75% { content: '009900'; }
    93% { content: '011500'; }
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

  /* v2: Vibrant retro arcade pinball table with midnight playfield,
     chrome ball, neon magenta/cyan/amber pop bumpers, scarlet flippers, and glowing score ticker. */
  .pbc {
    width: 96px;
    height: 100px;
    position: relative;
    border: 2px solid #e11d48;
    border-radius: 10px 10px 4px 4px;
    background: radial-gradient(ellipse at 50% 30%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    box-shadow: 0 0 12px rgba(225, 29, 72, 0.4), inset 0 0 10px rgba(0, 0, 0, 0.8);
    overflow: hidden;
  }

  /* Top arch lane */
  .pbc-arch {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 4px;
    height: 16px;
    border: 1.5px solid #38bdf8;
    border-bottom: none;
    border-radius: 40px 40px 0 0;
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.4);
  }

  /* Pop bumpers with chromatic neon flashes */
  .pbc-bumper {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-sizing: border-box;
  }

  /* Bumper 1: Hot Magenta */
  .pbc-bumper.b1 {
    left: 14px;
    top: 26px;
    border: 2px solid #fb7185;
    background: radial-gradient(circle at 40% 32%, #fecdd3, #e11d48 70%);
    box-shadow: 0 0 6px rgba(225, 29, 72, 0.6);
    animation: pbc-hit-b1 6s steps(1) infinite;
  }

  /* Bumper 2: Electric Cyan */
  .pbc-bumper.b2 {
    left: 62px;
    top: 22px;
    border: 2px solid #38bdf8;
    background: radial-gradient(circle at 40% 32%, #e0f2fe, #0284c7 70%);
    box-shadow: 0 0 6px rgba(2, 132, 199, 0.6);
    animation: pbc-hit-b2 6s steps(1) infinite;
    animation-delay: -4.9s;
  }

  /* Bumper 3: Solar Amber */
  .pbc-bumper.b3 {
    left: 40px;
    top: 46px;
    border: 2px solid #fde047;
    background: radial-gradient(circle at 40% 32%, #fef9c3, #ca8a04 70%);
    box-shadow: 0 0 6px rgba(202, 138, 4, 0.6);
    animation: pbc-hit-b3 6s steps(1) infinite;
    animation-delay: -3.6s;
  }

  @keyframes pbc-hit-b1 {
    0%, 16% { box-shadow: 0 0 6px rgba(225, 29, 72, 0.6); filter: brightness(1); }
    18%, 22% { box-shadow: 0 0 16px #f43f5e, 0 0 28px #f43f5e; filter: brightness(1.7); }
    24%, 100% { box-shadow: 0 0 6px rgba(225, 29, 72, 0.6); filter: brightness(1); }
  }

  @keyframes pbc-hit-b2 {
    0%, 16% { box-shadow: 0 0 6px rgba(2, 132, 199, 0.6); filter: brightness(1); }
    18%, 22% { box-shadow: 0 0 16px #00f0ff, 0 0 28px #00f0ff; filter: brightness(1.7); }
    24%, 100% { box-shadow: 0 0 6px rgba(2, 132, 199, 0.6); filter: brightness(1); }
  }

  @keyframes pbc-hit-b3 {
    0%, 16% { box-shadow: 0 0 6px rgba(202, 138, 4, 0.6); filter: brightness(1); }
    18%, 22% { box-shadow: 0 0 16px #facc15, 0 0 28px #facc15; filter: brightness(1.7); }
    24%, 100% { box-shadow: 0 0 6px rgba(202, 138, 4, 0.6); filter: brightness(1); }
  }

  /* Slingshot posts */
  .pbc-post {
    position: absolute;
    width: 4px;
    height: 12px;
    border-radius: 2px;
    background: #f59e0b;
    box-shadow: 0 0 5px #f59e0b;
  }

  .pbc-post.p1 { left: 16px; bottom: 26px; transform: rotate(28deg); }
  .pbc-post.p2 { right: 16px; bottom: 26px; transform: rotate(-28deg); }

  /* Flippers with red rubber bats */
  .pbc-flipper {
    position: absolute;
    bottom: 12px;
    width: 24px;
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(90deg, #ffffff 0 4px, #ef4444 4px 100%);
    box-shadow: 0 0 6px rgba(239, 68, 68, 0.8);
  }

  .pbc-flipper.left {
    left: 18px;
    transform-origin: 0% 50%;
    transform: rotate(24deg);
    animation: pbc-flip-l 6s infinite;
  }

  .pbc-flipper.right {
    right: 18px;
    transform-origin: 100% 50%;
    transform: rotate(-24deg);
    background: linear-gradient(270deg, #ffffff 0 4px, #ef4444 4px 100%);
    animation: pbc-flip-r 6s infinite;
  }

  @keyframes pbc-flip-l {
    0%, 60% { transform: rotate(24deg); }
    63%, 65% { transform: rotate(-22deg); }
    68%, 100% { transform: rotate(24deg); }
  }

  @keyframes pbc-flip-r {
    0%, 30% { transform: rotate(-24deg); }
    33%, 35% { transform: rotate(22deg); }
    38%, 100% { transform: rotate(-24deg); }
  }

  .pbc-drain {
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 20px;
    height: 3px;
    margin-left: -10px;
    border-radius: 2px;
    background: rgba(239, 68, 68, 0.4);
  }

  /* Mirrored chrome steel ball */
  .pbc-ball {
    position: absolute;
    left: 0;
    top: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #ffffff 0%, #cbd5e1 50%, #475569 100%);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.9), 0 0 14px rgba(56, 189, 248, 0.5);
    animation: pbc-ball 6s linear infinite;
  }

  @keyframes pbc-ball {
    0% { transform: translate(84px, 92px); }
    8% { transform: translate(86px, 30px); animation-timing-function: ease-out; }
    12% { transform: translate(74px, 12px); animation-timing-function: ease-in; }
    18% { transform: translate(68px, 26px); animation-timing-function: ease-out; }
    28% { transform: translate(50px, 44px); }
    33% { transform: translate(62px, 80px); animation-timing-function: ease-out; }
    40% { transform: translate(38px, 34px); }
    46% { transform: translate(22px, 28px); animation-timing-function: ease-in; }
    54% { transform: translate(16px, 58px); }
    60% { transform: translate(28px, 82px); animation-timing-function: ease-out; }
    66% { transform: translate(46px, 40px); }
    74% { transform: translate(48px, 52px); animation-timing-function: ease-in; }
    84% { transform: translate(58px, 78px); }
    92% { transform: translate(84px, 92px); }
    100% { transform: translate(84px, 92px); }
  }

  /* Digital Score LED Matrix Display */
  .pbc-score {
    position: absolute;
    left: 0;
    right: 0;
    top: 6px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: #facc15;
    text-shadow: 0 0 5px rgba(250, 204, 21, 0.9);
  }

  .pbc-score::before {
    content: '001200';
    animation: pbc-score 6s steps(1) infinite;
  }

  @keyframes pbc-score {
    0% { content: '001200'; }
    19% { content: '003700'; }
    29% { content: '005200'; }
    41% { content: '007900'; }
    61% { content: '008400'; }
    75% { content: '009900'; }
    93% { content: '011500'; }
  }
  `,
};

const pinballMarkup = {
  v1: `
      <div class="pb">
        <div class="pb-arch"></div>
        <div class="pb-score"></div>
        <div class="pb-bumper b1"></div>
        <div class="pb-bumper b2"></div>
        <div class="pb-bumper b3"></div>
        <div class="pb-post p1"></div>
        <div class="pb-post p2"></div>
        <div class="pb-flipper left"></div>
        <div class="pb-flipper right"></div>
        <div class="pb-drain"></div>
        <div class="pb-ball"></div>
      </div>
    `,
  v2: `
      <div class="pbc">
        <div class="pbc-arch"></div>
        <div class="pbc-score"></div>
        <div class="pbc-bumper b1"></div>
        <div class="pbc-bumper b2"></div>
        <div class="pbc-bumper b3"></div>
        <div class="pbc-post p1"></div>
        <div class="pbc-post p2"></div>
        <div class="pbc-flipper left"></div>
        <div class="pbc-flipper right"></div>
        <div class="pbc-drain"></div>
        <div class="pbc-ball"></div>
      </div>
    `,
};

class ConceptPinball extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${pinballStyles[version] || pinballStyles.v2}</style>${pinballMarkup[version] || pinballMarkup.v2}`;
  }
}

if (!customElements.get('concept-pinball')) {
  customElements.define('concept-pinball', ConceptPinball);
}
