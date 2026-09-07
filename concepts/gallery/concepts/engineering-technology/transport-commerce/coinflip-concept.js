// Coin flip: thumb flicks coin high into air, tumbles through H/T, lands flat.
// v1 and v2 are preserved.
// v3 adds full color: 24k mirror gold coin with milled edge, skin-tone thumb,
// gold air streaks, impact dust puff, and glowing gold HEADS callout.
const coinflipStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cn {
    width: 96px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

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
    92% { transform: rotate(6deg); }
    100% { transform: rotate(0deg); }
  }

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
    40% { transform: translateY(-58px); animation-timing-function: ease-in; }
    80% { transform: translateY(0); }
    100% { transform: translateY(0); }
  }

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
    animation: cn-flip-v1 0.32s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes cn-flip-v1 {
    0% { transform: scaleY(1); }
    50% { transform: scaleY(0.08); }
    100% { transform: scaleY(1); }
  }

  .cn-face {
    font-size: 12px;
    font-weight: bold;
    color: #041a0a;
  }

  .cn-face::before {
    content: 'H';
    animation: cn-faceletter-v1 0.64s steps(1) infinite;
  }

  @keyframes cn-faceletter-v1 {
    0% { content: 'H'; }
    50% { content: 'T'; }
  }

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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cn {
    width: 96px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

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
    92% { transform: rotate(6deg); }
    100% { transform: rotate(0deg); }
  }

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
    40% { transform: translateY(-58px); animation-timing-function: ease-in; }
    80% { transform: translateY(0); }
    100% { transform: translateY(0); }
  }

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
    76% { transform: scaleY(1.06); }
    80%, 100% { transform: scaleY(1); }
  }

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
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Radiant 24k Gold Coin toss with realistic skin-tone thumb,
     mirror specular gleams, golden air streaks, and landing dust puff */
  .cnc {
    width: 96px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Skin-Tone Hand/Thumb */
  .cnc-hand {
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 26px;
    height: 12px;
    margin-left: -13px;
    border-radius: 8px 8px 4px 4px;
    background: linear-gradient(180deg, #fbcfe8 0%, #f472b6 40%, #ca8a04 100%);
    border: 1px solid #f472b6;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
    animation: cnc-flick 4s ease-in-out infinite;
  }

  @keyframes cnc-flick {
    0% { transform: rotate(0deg); }
    6% { transform: rotate(-14deg); }
    12% { transform: rotate(0deg); }
    88% { transform: rotate(0deg); }
    92% { transform: rotate(6deg); }
    100% { transform: rotate(0deg); }
  }

  /* Vertical Toss Carrier */
  .cnc-toss {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 0;
    height: 0;
    animation: cnc-toss 4s cubic-bezier(0.3, 0, 0.4, 1) infinite;
  }

  @keyframes cnc-toss {
    0%, 8% { transform: translateY(0); }
    40% { transform: translateY(-58px); animation-timing-function: ease-in; }
    80% { transform: translateY(0); }
    100% { transform: translateY(0); }
  }

  /* 24k Gold Coin with Milled Edge */
  .cnc-coin {
    position: absolute;
    left: -13px;
    top: -13px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid #fde047;
    background: radial-gradient(circle at 40% 35%, #ffffff 0%, #facc15 45%, #ca8a04 80%, #854d0e 100%);
    box-shadow: 0 0 10px rgba(250, 204, 21, 0.8), 0 2px 4px rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    animation: cnc-flip 4s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Embossed Coin Face Typography */
  .cnc-face {
    font-size: 13px;
    font-weight: 900;
    color: #713f12;
    text-shadow: 0 1px 1px #fef08a;
  }

  .cnc-face::before {
    content: 'H';
    animation: cnc-faceletter 4s steps(1) infinite;
  }

  @keyframes cnc-faceletter {
    0%, 14% { content: 'H'; }
    22% { content: 'T'; }
    30% { content: 'H'; }
    38% { content: 'T'; }
    46% { content: 'H'; }
    54% { content: 'T'; }
    62% { content: 'H'; }
    70%, 100% { content: 'H'; }
  }

  @keyframes cnc-flip {
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
    76% { transform: scaleY(1.06); }
    80%, 100% { transform: scaleY(1); }
  }

  /* Golden Air Motion Streaks */
  .cnc-streak {
    position: absolute;
    top: 30px;
    width: 3px;
    height: 14px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(253, 224, 71, 0.8), transparent);
    opacity: 0;
    animation: cnc-streak 4s ease-in-out infinite;
  }

  .cnc-streak.s1 { left: 30px; }
  .cnc-streak.s2 { right: 30px; animation-delay: 0.1s; }

  @keyframes cnc-streak {
    0%, 12% { opacity: 0; }
    24%, 60% { opacity: 0.85; }
    72%, 100% { opacity: 0; }
  }

  /* Landing Dust Puff Flare */
  .cnc-puff {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 30px;
    height: 6px;
    margin-left: -15px;
    border-radius: 50%;
    background: radial-gradient(ellipse, #38bdf8 0%, rgba(250, 204, 21, 0.6) 50%, transparent 75%);
    box-shadow: 0 0 8px #38bdf8;
    opacity: 0;
    animation: cnc-puff 4s infinite;
  }

  @keyframes cnc-puff {
    0%, 76% { transform: scale(0.4); opacity: 0; }
    82% { opacity: 1; }
    92% { transform: scale(1.6); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Glowing Golden HEADS Readout */
  .cnc-call {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fde047;
    text-shadow: 0 0 8px #facc15;
    opacity: 0;
    animation: cnc-call 4s infinite;
  }

  @keyframes cnc-call {
    0%, 84% { opacity: 0; }
    88%, 96% { opacity: 1; }
    100% { opacity: 0; }
  }
  `,
};

const coinflipMarkup = {
  v1: `
      <div class="cn">
        <div class="cn-streak s1"></div>
        <div class="cn-streak s2"></div>
        <div class="cn-toss">
          <div class="cn-coin"><span class="cn-face"></span></div>
        </div>
        <div class="cn-hand"></div>
        <div class="cn-puff"></div>
        <div class="cn-call">HEADS</div>
      </div>
    `,
  v2: `
      <div class="cn">
        <div class="cn-streak s1"></div>
        <div class="cn-streak s2"></div>
        <div class="cn-toss">
          <div class="cn-coin"><span class="cn-face"></span></div>
        </div>
        <div class="cn-hand"></div>
        <div class="cn-puff"></div>
        <div class="cn-call">HEADS</div>
      </div>
    `,
  v3: `
      <div class="cnc">
        <div class="cnc-streak s1"></div>
        <div class="cnc-streak s2"></div>
        <div class="cnc-toss">
          <div class="cnc-coin"><span class="cnc-face"></span></div>
        </div>
        <div class="cnc-hand"></div>
        <div class="cnc-puff"></div>
        <div class="cnc-call">HEADS</div>
      </div>
    `,
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${coinflipStyles[version] || coinflipStyles.v3}</style>${coinflipMarkup[version] || coinflipMarkup.v3}`;
  }
}

if (!customElements.get('concept-coinflip')) {
  customElements.define('concept-coinflip', ConceptCoinflip);
}
