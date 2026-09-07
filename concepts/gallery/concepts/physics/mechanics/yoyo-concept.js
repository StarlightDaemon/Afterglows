const yoyoStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .yy {
    width: 96px;
    height: 100px;
    position: relative;
  }

  .yy-hand {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 22px;
    height: 12px;
    margin-left: -11px;
    border-radius: 8px 8px 4px 4px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.85), rgba(0, 120, 24, 0.85));
    animation: yy-hand 4.5s ease-in-out infinite;
  }

  .yy-hand::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 5px;
    height: 7px;
    margin-left: -2.5px;
    border-radius: 0 0 3px 3px;
    background: rgba(140, 255, 170, 0.85);
  }

  @keyframes yy-hand {
    0%, 4% { transform: translateY(0); }
    8% { transform: translateY(4px); }
    14% { transform: translateY(0); }
    86% { transform: translateY(0); }
    92% { transform: translateY(3px); }
    96%, 100% { transform: translateY(0); }
  }

  .yy-string {
    position: absolute;
    left: 50%;
    top: 16px;
    width: 1.5px;
    height: 62px;
    margin-left: -0.75px;
    background: rgba(190, 255, 205, 0.75);
    transform-origin: top center;
    animation: yy-string 4.5s infinite;
  }

  @keyframes yy-string {
    0%, 6% { transform: scaleY(0.06); animation-timing-function: ease-in; }
    20% { transform: scaleY(1); }
    30% { transform: scaleY(0.985); }
    40% { transform: scaleY(1); }
    50% { transform: scaleY(0.985); }
    60% { transform: scaleY(1); animation-timing-function: cubic-bezier(0.2, 0.7, 0.4, 1); }
    78% { transform: scaleY(0.06); }
    100% { transform: scaleY(0.06); }
  }

  .yy-carrier {
    position: absolute;
    left: 50%;
    top: 16px;
    width: 0;
    height: 0;
    animation: yy-carrier 4.5s infinite;
  }

  @keyframes yy-carrier {
    0%, 6% { transform: translateY(4px); animation-timing-function: ease-in; }
    20% { transform: translateY(62px); }
    60% { transform: translateY(62px); animation-timing-function: cubic-bezier(0.2, 0.7, 0.4, 1); }
    78% { transform: translateY(4px); }
    82% { transform: translateY(8px); }
    86%, 100% { transform: translateY(4px); }
  }

  .yy-disc {
    position: absolute;
    left: -14px;
    top: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background:
      repeating-conic-gradient(rgba(190, 255, 205, 0.85) 0 20deg, rgba(0, 90, 18, 0.85) 20deg 45deg);
    box-sizing: border-box;
    box-shadow: 0 0 9px rgba(0, 204, 0, 0.5);
    animation: yy-spin 0.5s linear infinite, yy-blur 4.5s infinite;
  }

  .yy-disc::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #f2ffdd, #2a8a3e 80%);
  }

  @keyframes yy-spin {
    to { transform: rotate(360deg); }
  }

  @keyframes yy-blur {
    0%, 8% { filter: blur(0); }
    22%, 58% { filter: blur(1.2px); }
    72%, 100% { filter: blur(0); }
  }

  .yy-streak {
    position: absolute;
    top: 72px;
    width: 10px;
    height: 1.5px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.6);
    opacity: 0;
    animation: yy-streak 4.5s infinite;
  }

  .yy-streak.s1 { left: 16px; }
  .yy-streak.s2 { right: 16px; animation-delay: 0.15s; }

  @keyframes yy-streak {
    0%, 20% { opacity: 0; transform: translateX(0); }
    26% { opacity: 0.8; }
    34% { opacity: 0; transform: translateX(-5px); }
    40% { opacity: 0.8; transform: translateX(0); }
    48% { opacity: 0; transform: translateX(-5px); }
    54% { opacity: 0.8; transform: translateX(0); }
    60%, 100% { opacity: 0; }
  }

  .yy-trick {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: rgba(140, 255, 170, 0.8);
    opacity: 0;
    animation: yy-trick 4.5s steps(1) infinite;
  }

  @keyframes yy-trick {
    0%, 24% { opacity: 0; }
    28%, 56% { opacity: 1; }
    60%, 100% { opacity: 0; }
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

  /* v2: Imperial red & blue yo-yo with golden axle, cotton string,
     and glowing spin streaks */
  .yyc {
    width: 96px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Player's hand */
  .yyc-hand {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 22px;
    height: 12px;
    margin-left: -11px;
    border-radius: 8px 8px 4px 4px;
    background: linear-gradient(180deg, #fcd34d, #f59e0b);
    border: 1px solid #fbbf24;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    animation: yyc-hand 4.5s ease-in-out infinite;
  }

  .yyc-hand::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 5px;
    height: 7px;
    margin-left: -2.5px;
    border-radius: 0 0 3px 3px;
    background: #f59e0b;
  }

  @keyframes yyc-hand {
    0%, 4% { transform: translateY(0); }
    8% { transform: translateY(4px); }
    14% { transform: translateY(0); }
    86% { transform: translateY(0); }
    92% { transform: translateY(3px); }
    96%, 100% { transform: translateY(0); }
  }

  /* Cotton string */
  .yyc-string {
    position: absolute;
    left: 50%;
    top: 16px;
    width: 1.5px;
    height: 62px;
    margin-left: -0.75px;
    background: #fef3c7;
    box-shadow: 0 0 3px #fde047;
    transform-origin: top center;
    animation: yyc-string 4.5s infinite;
  }

  @keyframes yyc-string {
    0%, 6% { transform: scaleY(0.06); animation-timing-function: ease-in; }
    20% { transform: scaleY(1); }
    30% { transform: scaleY(0.985); }
    40% { transform: scaleY(1); }
    50% { transform: scaleY(0.985); }
    60% { transform: scaleY(1); animation-timing-function: cubic-bezier(0.2, 0.7, 0.4, 1); }
    78% { transform: scaleY(0.06); }
    100% { transform: scaleY(0.06); }
  }

  /* Carrier */
  .yyc-carrier {
    position: absolute;
    left: 50%;
    top: 16px;
    width: 0;
    height: 0;
    animation: yyc-carrier 4.5s infinite;
  }

  @keyframes yyc-carrier {
    0%, 6% { transform: translateY(4px); animation-timing-function: ease-in; }
    20% { transform: translateY(62px); }
    60% { transform: translateY(62px); animation-timing-function: cubic-bezier(0.2, 0.7, 0.4, 1); }
    78% { transform: translateY(4px); }
    82% { transform: translateY(8px); }
    86%, 100% { transform: translateY(4px); }
  }

  /* Red and blue butterfly yo-yo disc */
  .yyc-disc {
    position: absolute;
    left: -14px;
    top: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #facc15;
    background:
      repeating-conic-gradient(#ef4444 0 20deg, #3b82f6 20deg 45deg);
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.6), 0 0 6px #3b82f6;
    animation: yyc-spin 0.5s linear infinite, yyc-blur 4.5s infinite;
  }

  /* Golden axle */
  .yyc-disc::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #fef08a, #ca8a04 80%);
    border: 0.5px solid #eab308;
  }

  @keyframes yyc-spin {
    to { transform: rotate(360deg); }
  }

  @keyframes yyc-blur {
    0%, 8% { filter: blur(0); }
    22%, 58% { filter: blur(1.2px); }
    72%, 100% { filter: blur(0); }
  }

  /* Yellow speed streaks */
  .yyc-streak {
    position: absolute;
    top: 72px;
    width: 10px;
    height: 1.5px;
    border-radius: 1px;
    background: #facc15;
    box-shadow: 0 0 4px #fde047;
    opacity: 0;
    animation: yyc-streak 4.5s infinite;
  }

  .yyc-streak.s1 { left: 16px; }
  .yyc-streak.s2 { right: 16px; animation-delay: 0.15s; }

  @keyframes yyc-streak {
    0%, 20% { opacity: 0; transform: translateX(0); }
    26% { opacity: 0.9; }
    34% { opacity: 0; transform: translateX(-5px); }
    40% { opacity: 0.9; transform: translateX(0); }
    48% { opacity: 0; transform: translateX(-5px); }
    54% { opacity: 0.9; transform: translateX(0); }
    60%, 100% { opacity: 0; }
  }

  /* Trick callout */
  .yyc-trick {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fde047;
    text-shadow: 0 0 6px #facc15;
    opacity: 0;
    animation: yyc-trick 4.5s steps(1) infinite;
  }

  @keyframes yyc-trick {
    0%, 24% { opacity: 0; }
    28%, 56% { opacity: 1; }
    60%, 100% { opacity: 0; }
  }
  `,
};

const yoyoMarkup = {
  v1: `
      <div class="yy">
        <div class="yy-string"></div>
        <div class="yy-carrier"><div class="yy-disc"></div></div>
        <div class="yy-hand"></div>
        <div class="yy-streak s1"></div>
        <div class="yy-streak s2"></div>
        <div class="yy-trick">SLEEPER</div>
      </div>
    `,
  v2: `
      <div class="yyc">
        <div class="yyc-string"></div>
        <div class="yyc-carrier"><div class="yyc-disc"></div></div>
        <div class="yyc-hand"></div>
        <div class="yyc-streak s1"></div>
        <div class="yyc-streak s2"></div>
        <div class="yyc-trick">SLEEPER</div>
      </div>
    `,
};

class ConceptYoyo extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${yoyoStyles[version] || yoyoStyles.v2}</style>${yoyoMarkup[version] || yoyoMarkup.v2}`;
  }
}

if (!customElements.get('concept-yoyo')) {
  customElements.define('concept-yoyo', ConceptYoyo);
}
