const pongStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pong {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pong-court {
    position: relative;
    width: 94px;
    height: 74px;
    border: 1px solid rgba(140, 255, 170, 0.6);
    background: rgba(2, 10, 3, 0.7);
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.18);
  }

  .pong-net {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 0;
    border-left: 1px dashed rgba(0, 204, 0, 0.35);
  }

  .pong-score {
    position: absolute;
    top: 4px;
    font-family: monospace;
    font-size: 10px;
    color: rgba(140, 255, 170, 0.75);
  }

  .pong-score.left { left: 30px; }
  .pong-score.right { right: 30px; }

  .pong-ball {
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 5px;
    background: #d8ffbb;
    box-shadow: 0 0 6px rgba(216, 255, 187, 0.8);
    animation: pong-ball 4s linear infinite;
  }

  .pong-paddle {
    position: absolute;
    width: 4px;
    height: 20px;
    background: rgba(160, 255, 185, 0.9);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.45);
  }

  .pong-paddle.left {
    left: 4px;
    animation: pong-paddle-left 4s ease-in-out infinite;
  }

  .pong-paddle.right {
    right: 4px;
    animation: pong-paddle-right 4s ease-in-out infinite;
  }

  .pong-hit {
    position: absolute;
    top: 0;
    width: 10px;
    height: 26px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(216, 255, 187, 0.55), transparent 70%);
    opacity: 0;
    animation: pong-hit 4s linear infinite;
  }

  .pong-hit.left { left: 1px; }
  .pong-hit.right { right: 1px; animation-name: pong-hit-right; animation-delay: -2s; }

  @keyframes pong-ball {
    0%   { transform: translate(6px, 20px); }
    22%  { transform: translate(32px, 0px); }
    50%  { transform: translate(84px, 40px); }
    76%  { transform: translate(56px, 69px); }
    100% { transform: translate(6px, 20px); }
  }

  @keyframes pong-paddle-left {
    0%   { transform: translateY(13px); }
    30%  { transform: translateY(34px); }
    62%  { transform: translateY(48px); }
    100% { transform: translateY(13px); }
  }

  @keyframes pong-paddle-right {
    0%   { transform: translateY(40px); }
    50%  { transform: translateY(33px); }
    80%  { transform: translateY(12px); }
    100% { transform: translateY(40px); }
  }

  @keyframes pong-hit {
    0%, 1.5% { opacity: 0.9; transform: translateY(12px); }
    8% { opacity: 0; }
    97% { opacity: 0; }
    100% { opacity: 0.9; transform: translateY(12px); }
  }

  @keyframes pong-hit-right {
    0%, 1.5% { opacity: 0.9; transform: translateY(33px); }
    8% { opacity: 0; }
    97% { opacity: 0; }
    100% { opacity: 0.9; transform: translateY(33px); }
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

  /* v2: Neon retro arcade Pong with cyan & magenta paddles,
     phosphor scanline court, glowing digital score, and kinetic collision sparks */
  .pongc {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .pongc-court {
    position: relative;
    width: 94px;
    height: 74px;
    border: 1.5px solid #6366f1;
    background: #09090b;
    overflow: hidden;
    box-shadow: inset 0 0 10px rgba(99, 102, 241, 0.3), 0 0 10px rgba(0, 0, 0, 0.8);
    border-radius: 4px;
  }

  /* Dashed center court divider net */
  .pongc-net {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 0;
    border-left: 1.5px dashed rgba(168, 85, 247, 0.6);
  }

  /* Digital scores */
  .pongc-score {
    position: absolute;
    top: 4px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    font-weight: bold;
  }

  .pongc-score.left { left: 28px; color: #38bdf8; text-shadow: 0 0 6px #00f0ff; }
  .pongc-score.right { right: 28px; color: #f43f5e; text-shadow: 0 0 6px #fb7185; }

  /* Glowing square ball */
  .pongc-ball {
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 5px;
    background: #fde047;
    box-shadow: 0 0 8px #facc15, 0 0 14px #ffffff;
    animation: pongc-ball 4s linear infinite;
  }

  /* Left Player 1 Cyan Paddle */
  .pongc-paddle.left {
    position: absolute;
    left: 4px;
    width: 4px;
    height: 20px;
    border-radius: 1px;
    background: #38bdf8;
    box-shadow: 0 0 8px #00f0ff;
    animation: pongc-paddle-left 4s ease-in-out infinite;
  }

  /* Right Player 2 Magenta Paddle */
  .pongc-paddle.right {
    position: absolute;
    right: 4px;
    width: 4px;
    height: 20px;
    border-radius: 1px;
    background: #f43f5e;
    box-shadow: 0 0 8px #fb7185;
    animation: pongc-paddle-right 4s ease-in-out infinite;
  }

  /* Left collision spark */
  .pongc-hit.left {
    position: absolute;
    left: 1px;
    top: 0;
    width: 10px;
    height: 26px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(56, 189, 248, 0.9), transparent 70%);
    box-shadow: 0 0 10px #00f0ff;
    opacity: 0;
    animation: pongc-hit 4s linear infinite;
  }

  /* Right collision spark */
  .pongc-hit.right {
    position: absolute;
    right: 1px;
    top: 0;
    width: 10px;
    height: 26px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(244, 63, 94, 0.9), transparent 70%);
    box-shadow: 0 0 10px #fb7185;
    opacity: 0;
    animation: pongc-hit-right 4s linear infinite;
    animation-delay: -2s;
  }

  @keyframes pongc-ball {
    0%   { transform: translate(6px, 20px); }
    22%  { transform: translate(32px, 0px); }
    50%  { transform: translate(84px, 40px); }
    76%  { transform: translate(56px, 69px); }
    100% { transform: translate(6px, 20px); }
  }

  @keyframes pongc-paddle-left {
    0%   { transform: translateY(13px); }
    30%  { transform: translateY(34px); }
    62%  { transform: translateY(48px); }
    100% { transform: translateY(13px); }
  }

  @keyframes pongc-paddle-right {
    0%   { transform: translateY(40px); }
    50%  { transform: translateY(33px); }
    80%  { transform: translateY(12px); }
    100% { transform: translateY(40px); }
  }

  @keyframes pongc-hit {
    0%, 1.5% { opacity: 0.95; transform: translateY(12px); }
    8% { opacity: 0; }
    97% { opacity: 0; }
    100% { opacity: 0.95; transform: translateY(12px); }
  }

  @keyframes pongc-hit-right {
    0%, 1.5% { opacity: 0.95; transform: translateY(33px); }
    8% { opacity: 0; }
    97% { opacity: 0; }
    100% { opacity: 0.95; transform: translateY(33px); }
  }
  `,
};

const pongMarkup = {
  v1: `
      <div class="pong">
        <div class="pong-court">
          <div class="pong-net"></div>
          <span class="pong-score left">2</span>
          <span class="pong-score right">1</span>
          <div class="pong-paddle left"></div>
          <div class="pong-paddle right"></div>
          <div class="pong-hit left"></div>
          <div class="pong-hit right"></div>
          <div class="pong-ball"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="pongc">
        <div class="pongc-court">
          <div class="pongc-net"></div>
          <span class="pongc-score left">2</span>
          <span class="pongc-score right">1</span>
          <div class="pongc-paddle left"></div>
          <div class="pongc-paddle right"></div>
          <div class="pongc-hit left"></div>
          <div class="pongc-hit right"></div>
          <div class="pongc-ball"></div>
        </div>
      </div>
    `,
};

class ConceptPong extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${pongStyles[version] || pongStyles.v2}</style>${pongMarkup[version] || pongMarkup.v2}`;
  }
}

if (!customElements.get('concept-pong')) {
  customElements.define('concept-pong', ConceptPong);
}
