const coinflipStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A coin toss: it flips off a thumb, tumbles high spinning edge-on
     through heads and tails, arcs back down, lands and rocks flat -
     HEADS called. */
  .cn {
    width: 96px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Hand / thumb at the bottom that flicks it. */
  .cn-hand {
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 26px;
    height: 12px;
    margin-left: -13px;
    border-radius: 8px 8px 4px 4px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.7), rgba(0, 110, 22, 0.8));
    animation: cn-flick 4s ease-in-out infinite;
  }

  @keyframes cn-flick {
    0% { transform: rotate(0deg); }
    6% { transform: rotate(-14deg); }
    12% { transform: rotate(0deg); }
    88% { transform: rotate(0deg); }
    /* Catch nudge. */
    92% { transform: rotate(6deg); }
    100% { transform: rotate(0deg); }
  }

  /* Vertical toss carrier. */
  .cn-toss {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 0;
    height: 0;
    animation: cn-toss 4s cubic-bezier(0.3, 0, 0.4, 1) infinite;
  }

  @keyframes cn-toss {
    0%, 8% { transform: translateY(0); }
    /* Up. */
    40% { transform: translateY(-58px); animation-timing-function: ease-in; }
    /* Down. */
    80% { transform: translateY(0); }
    100% { transform: translateY(0); }
  }

  /* The coin: flips via scaleY through the edge (thin) many times. */
  .cn-coin {
    position: absolute;
    left: -13px;
    top: -13px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 40% 35%, rgba(214, 255, 224, 0.9), rgba(0, 160, 32, 0.8) 60%, rgba(0, 100, 20, 0.9));
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.5);
    box-sizing: border-box;
    animation: cn-flip 4s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* v1 (archived original): constant strobe flip that never lands. */
  .cn.v1 .cn-coin {
    animation: cn-flip-v1 0.32s linear infinite;
  }

  .cn.v1 .cn-face::before {
    animation: cn-faceletter-v1 0.64s steps(1) infinite;
  }

  @keyframes cn-flip-v1 {
    0% { transform: scaleY(1); }
    50% { transform: scaleY(0.08); }
    100% { transform: scaleY(1); }
  }

  @keyframes cn-faceletter-v1 {
    0% { content: 'H'; }
    50% { content: 'T'; }
  }

  /* Face letter swaps H/T once per tumble, ending on the called HEADS. */
  .cn-face {
    font-size: 12px;
    font-weight: bold;
    color: #041a0a;
  }

  .cn-face::before {
    content: 'H';
    animation: cn-faceletter 4s steps(1) infinite;
  }

  @keyframes cn-faceletter {
    0%, 14% { content: 'H'; }
    22% { content: 'T'; }
    30% { content: 'H'; }
    38% { content: 'T'; }
    46% { content: 'H'; }
    54% { content: 'T'; }
    62% { content: 'H'; }
    70%, 100% { content: 'H'; }
  }

  /* One timeline of discrete tumbles synced to the toss: seven squashes
     through the edge during flight, then it lands and STAYS flat —
     the old constant 0.32s flip strobed the coin invisible forever. */
  @keyframes cn-flip {
    0%, 8% { transform: scaleY(1); }
    12% { transform: scaleY(0.1); }
    16% { transform: scaleY(1); }
    20% { transform: scaleY(0.1); }
    24% { transform: scaleY(1); }
    28% { transform: scaleY(0.1); }
    32% { transform: scaleY(1); }
    36% { transform: scaleY(0.1); }
    40% { transform: scaleY(1); }
    46% { transform: scaleY(0.1); }
    52% { transform: scaleY(1); }
    58% { transform: scaleY(0.1); }
    64% { transform: scaleY(1); }
    70% { transform: scaleY(0.14); }
    /* Landed: face up, a settle bounce, then hold. */
    76% { transform: scaleY(1.06); }
    80%, 100% { transform: scaleY(1); }
  }

  /* Motion streaks beside the spinning coin. */
  .cn-streak {
    position: absolute;
    top: 30px;
    width: 3px;
    height: 12px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.4);
    opacity: 0;
    animation: cn-streak 4s ease-in-out infinite;
  }

  .cn-streak.s1 { left: 30px; }
  .cn-streak.s2 { right: 30px; animation-delay: 0.1s; }

  @keyframes cn-streak {
    0%, 12% { opacity: 0; }
    24%, 60% { opacity: 0.7; }
    72%, 100% { opacity: 0; }
  }

  /* Landing puff. */
  .cn-puff {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 30px;
    height: 5px;
    margin-left: -15px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.5);
    opacity: 0;
    animation: cn-puff 4s infinite;
  }

  @keyframes cn-puff {
    0%, 76% { transform: scale(0.4); opacity: 0; }
    82% { opacity: 0.8; }
    92% { transform: scale(1.5); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Call readout. */
  .cn-call {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 9px;
    letter-spacing: 2px;
    color: #d6ffe0;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    opacity: 0;
    animation: cn-call 4s infinite;
  }

  @keyframes cn-call {
    0%, 84% { opacity: 0; }
    88%, 96% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

/* Same scene in both versions; only the coin/face animations differ. */
const coinflipScene = `
  <div class="cn-streak s1"></div>
  <div class="cn-streak s2"></div>
  <div class="cn-toss">
    <div class="cn-coin"><span class="cn-face"></span></div>
  </div>
  <div class="cn-hand"></div>
  <div class="cn-puff"></div>
  <div class="cn-call">HEADS</div>
`;

const coinflipMarkup = {
  v1: `<div class="cn v1">${coinflipScene}</div>`,
  v2: `<div class="cn">${coinflipScene}</div>`,
};

class ConceptCoinflip extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${coinflipStyles}</style>${coinflipMarkup[version] || coinflipMarkup.v2}`;
  }
}

if (!customElements.get('concept-coinflip')) {
  customElements.define('concept-coinflip', ConceptCoinflip);
}
