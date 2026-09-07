const pinkingShearsStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pnk {
    width: 116px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  .pnk-cloth {
    position: absolute;
    left: 8px;
    top: 20px;
    width: 52px;
    height: 56px;
    background:
      repeating-linear-gradient(45deg, rgba(0, 140, 30, 0.7) 0 2px, rgba(0, 50, 10, 0.9) 2px 5px),
      linear-gradient(180deg, rgba(0, 90, 20, 0.8), rgba(0, 30, 6, 0.95));
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
    z-index: 2;
  }

  .pnk-edge {
    position: absolute;
    right: -4px;
    top: 0;
    width: 8px;
    height: 100%;
    background: repeating-linear-gradient(135deg, transparent 0 4px, rgba(140, 255, 170, 0.9) 4px 6px, transparent 6px 10px);
  }

  .pnk-thread {
    position: absolute;
    width: 4px;
    height: 2px;
    background: rgba(190, 255, 205, 0.9);
    border-radius: 1px;
    animation: pnk-fall 1.8s ease-in infinite;
  }

  .pnk-thread.t1 { left: 54px; top: 38px; animation-delay: 0s; }
  .pnk-thread.t2 { left: 56px; top: 48px; animation-delay: -0.6s; }
  .pnk-thread.t3 { left: 52px; top: 58px; animation-delay: -1.2s; }

  @keyframes pnk-fall {
    0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
    100% { opacity: 0; transform: translate(6px, 24px) rotate(90deg); }
  }

  .pnk-shears {
    position: absolute;
    right: 8px;
    top: 14px;
    width: 60px;
    height: 68px;
    z-index: 4;
  }

  .pnk-rivet {
    position: absolute;
    left: 24px;
    top: 32px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.9);
    z-index: 6;
  }

  .pnk-blade-top {
    position: absolute;
    left: 0;
    top: 10px;
    width: 58px;
    height: 24px;
    transform-origin: 28px 36px;
    animation: pnk-cut-top 1.8s ease-in-out infinite;
  }

  .pnk-blade-top-steel {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 32px;
    height: 12px;
    clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.95), rgba(0, 130, 26, 0.85));
    border-bottom: 2px dashed var(--accent, #00cc00);
  }

  .pnk-handle-top {
    position: absolute;
    right: 0;
    top: 0;
    width: 26px;
    height: 22px;
    border: 3px solid var(--accent, #00cc00);
    border-radius: 12px 14px 4px 10px;
    background: rgba(0, 60, 12, 0.85);
  }

  .pnk-blade-bot {
    position: absolute;
    left: 0;
    top: 34px;
    width: 58px;
    height: 24px;
    transform-origin: 28px 2px;
    animation: pnk-cut-bot 1.8s ease-in-out infinite;
  }

  .pnk-blade-bot-steel {
    position: absolute;
    left: 0;
    top: 0;
    width: 32px;
    height: 12px;
    clip-path: polygon(0 60%, 100% 100%, 100% 0, 0 0%);
    background: linear-gradient(0deg, rgba(190, 255, 205, 0.95), rgba(0, 130, 26, 0.85));
    border-top: 2px dashed var(--accent, #00cc00);
  }

  .pnk-handle-bot {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 26px;
    height: 22px;
    border: 3px solid var(--accent, #00cc00);
    border-radius: 4px 10px 14px 12px;
    background: rgba(0, 60, 12, 0.85);
  }

  @keyframes pnk-cut-top {
    0%, 100% { transform: rotate(-16deg); }
    50% { transform: rotate(4deg); }
  }

  @keyframes pnk-cut-bot {
    0%, 100% { transform: rotate(16deg); }
    50% { transform: rotate(-4deg); }
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

  /* v2: Forged steel pinking shears with black handles, brass rivet,
     Scottish tartan cloth, and zig-zag sawteeth */
  .pnkc {
    width: 116px;
    height: 96px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Red & green Scottish tartan wool fabric */
  .pnkc-cloth {
    position: absolute;
    left: 8px;
    top: 20px;
    width: 52px;
    height: 56px;
    background:
      repeating-linear-gradient(45deg, #15803d 0 2px, #facc15 2px 3px, transparent 3px 6px),
      repeating-linear-gradient(-45deg, #15803d 0 2px, #facc15 2px 3px, transparent 3px 6px),
      linear-gradient(180deg, #dc2626 0%, #991b1b 100%);
    border: 1px solid #ef4444;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    border-radius: 2px;
    z-index: 2;
  }

  /* Zig-zag pinked edge */
  .pnkc-edge {
    position: absolute;
    right: -4px;
    top: 0;
    width: 8px;
    height: 100%;
    background: repeating-linear-gradient(135deg, transparent 0 4px, #fde047 4px 6px, transparent 6px 10px);
  }

  /* Falling clipped threads */
  .pnkc-thread {
    position: absolute;
    width: 4px;
    height: 2px;
    background: #f43f5e;
    box-shadow: 0 0 2px #ef4444;
    border-radius: 1px;
    animation: pnkc-fall 1.8s ease-in infinite;
  }

  .pnkc-thread.t1 { left: 54px; top: 38px; animation-delay: 0s; }
  .pnkc-thread.t2 { left: 56px; top: 48px; animation-delay: -0.6s; }
  .pnkc-thread.t3 { left: 52px; top: 58px; animation-delay: -1.2s; }

  @keyframes pnkc-fall {
    0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
    100% { opacity: 0; transform: translate(6px, 24px) rotate(90deg); }
  }

  /* Shears assembly */
  .pnkc-shears {
    position: absolute;
    right: 8px;
    top: 14px;
    width: 60px;
    height: 68px;
    z-index: 4;
  }

  /* Fulcrum brass rivet */
  .pnkc-rivet {
    position: absolute;
    left: 24px;
    top: 32px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #facc15;
    border: 1px solid #ca8a04;
    box-shadow: 0 0 6px #fde047;
    z-index: 6;
  }

  /* Top blade */
  .pnkc-blade-top {
    position: absolute;
    left: 0;
    top: 10px;
    width: 58px;
    height: 24px;
    transform-origin: 28px 36px;
    animation: pnkc-cut-top 1.8s ease-in-out infinite;
  }

  .pnkc-blade-top-steel {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 32px;
    height: 12px;
    clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%);
    border-bottom: 2.5px dashed #09090b;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }

  .pnkc-handle-top {
    position: absolute;
    right: 0;
    top: 0;
    width: 26px;
    height: 22px;
    border: 3.5px solid #09090b;
    border-radius: 12px 14px 4px 10px;
    background: linear-gradient(180deg, #334155, #0f172a);
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3);
  }

  /* Bottom blade */
  .pnkc-blade-bot {
    position: absolute;
    left: 0;
    top: 34px;
    width: 58px;
    height: 24px;
    transform-origin: 28px 2px;
    animation: pnkc-cut-bot 1.8s ease-in-out infinite;
  }

  .pnkc-blade-bot-steel {
    position: absolute;
    left: 0;
    top: 0;
    width: 32px;
    height: 12px;
    clip-path: polygon(0 60%, 100% 100%, 100% 0, 0 0%);
    background: linear-gradient(0deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%);
    border-top: 2.5px dashed #09090b;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }

  .pnkc-handle-bot {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 26px;
    height: 22px;
    border: 3.5px solid #09090b;
    border-radius: 4px 10px 14px 12px;
    background: linear-gradient(180deg, #334155, #0f172a);
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3);
  }

  @keyframes pnkc-cut-top {
    0%, 100% { transform: rotate(-16deg); }
    50% { transform: rotate(4deg); }
  }

  @keyframes pnkc-cut-bot {
    0%, 100% { transform: rotate(16deg); }
    50% { transform: rotate(-4deg); }
  }
  `,
};

const pinkingShearsMarkup = {
  v1: `
      <div class="pnk">
        <div class="pnk-cloth">
          <div class="pnk-edge"></div>
        </div>
        <div class="pnk-thread t1"></div>
        <div class="pnk-thread t2"></div>
        <div class="pnk-thread t3"></div>
        <div class="pnk-shears">
          <div class="pnk-rivet"></div>
          <div class="pnk-blade-top">
            <div class="pnk-blade-top-steel"></div>
            <div class="pnk-handle-top"></div>
          </div>
          <div class="pnk-blade-bot">
            <div class="pnk-blade-bot-steel"></div>
            <div class="pnk-handle-bot"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="pnkc">
        <div class="pnkc-cloth">
          <div class="pnkc-edge"></div>
        </div>
        <div class="pnkc-thread t1"></div>
        <div class="pnkc-thread t2"></div>
        <div class="pnkc-thread t3"></div>
        <div class="pnkc-shears">
          <div class="pnkc-rivet"></div>
          <div class="pnkc-blade-top">
            <div class="pnkc-blade-top-steel"></div>
            <div class="pnkc-handle-top"></div>
          </div>
          <div class="pnkc-blade-bot">
            <div class="pnkc-blade-bot-steel"></div>
            <div class="pnkc-handle-bot"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptPinkingShears extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${pinkingShearsStyles[version] || pinkingShearsStyles.v2}</style>${pinkingShearsMarkup[version] || pinkingShearsMarkup.v2}`;
  }
}

if (!customElements.get('concept-pinking-shears')) {
  customElements.define('concept-pinking-shears', ConceptPinkingShears);
}
