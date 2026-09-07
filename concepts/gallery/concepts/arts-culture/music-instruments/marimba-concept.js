const marimbaStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mar {
    width: 118px;
    height: 96px;
    position: relative;
  }

  .mar-frame {
    position: absolute;
    left: 10px;
    bottom: 6px;
    width: 98px;
    height: 24px;
    border-bottom: 2px solid var(--accent, #00cc00);
    border-left: 2px solid var(--accent, #00cc00);
    border-right: 2px solid var(--accent, #00cc00);
  }

  .mar-tubes {
    position: absolute;
    left: 14px;
    top: 40px;
    width: 90px;
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .mar-tube {
    width: 10px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.7), rgba(0, 40, 8, 0.95));
    border: 1px solid var(--accent, #00cc00);
    animation: mar-res-glow 2.8s ease-out infinite;
  }

  .mar-tube.t1 { height: 38px; animation-delay: 0s; }
  .mar-tube.t2 { height: 32px; animation-delay: 0.7s; }
  .mar-tube.t3 { height: 26px; animation-delay: 1.4s; }
  .mar-tube.t4 { height: 20px; animation-delay: 2.1s; }

  @keyframes mar-res-glow {
    0%, 15% { box-shadow: inset 0 0 8px rgba(140, 255, 170, 0.9), 0 0 6px rgba(0, 204, 0, 0.8); }
    30%, 100% { box-shadow: inset 0 0 2px rgba(0, 50, 10, 0.4), 0 0 0 transparent; }
  }

  .mar-bars {
    position: absolute;
    left: 10px;
    top: 30px;
    width: 98px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }

  .mar-bar {
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.85), rgba(0, 100, 20, 0.9));
    border: 1px solid var(--accent, #00cc00);
    animation: mar-bar-hit 2.8s ease-in-out infinite;
  }

  .mar-bar.b1 { width: 18px; height: 14px; animation-delay: 0s; }
  .mar-bar.b2 { width: 18px; height: 12px; animation-delay: 0.7s; }
  .mar-bar.b3 { width: 18px; height: 10px; animation-delay: 1.4s; }
  .mar-bar.b4 { width: 18px; height: 8px; animation-delay: 2.1s; }

  @keyframes mar-bar-hit {
    0% { transform: translateY(0); filter: brightness(1); }
    8% { transform: translateY(3px); filter: brightness(1.4); }
    18% { transform: translateY(-1px); }
    28% { transform: translateY(0); filter: brightness(1); }
    100% { transform: translateY(0); }
  }

  .mar-mallet {
    position: absolute;
    width: 20px;
    height: 28px;
    z-index: 5;
    pointer-events: none;
  }

  .mar-mallet-shaft {
    position: absolute;
    right: 2px;
    top: 0;
    width: 2px;
    height: 22px;
    background: rgba(140, 255, 170, 0.9);
  }

  .mar-mallet-head {
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(190, 255, 205, 1), rgba(0, 180, 40, 0.9));
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.9);
  }

  .mar-mallet.m-left {
    animation: mar-run-left 2.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes mar-run-left {
    0% { left: 16px; top: 22px; transform: rotate(10deg); }
    8% { left: 16px; top: 12px; transform: rotate(-5deg); }
    40% { left: 62px; top: 10px; transform: rotate(15deg); }
    50% { left: 62px; top: 22px; transform: rotate(10deg); }
    58% { left: 62px; top: 12px; transform: rotate(-5deg); }
    90% { left: 16px; top: 10px; transform: rotate(15deg); }
    100% { left: 16px; top: 22px; transform: rotate(10deg); }
  }

  .mar-mallet.m-right {
    animation: mar-run-right 2.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes mar-run-right {
    0% { left: 38px; top: 10px; transform: rotate(15deg); }
    25% { left: 38px; top: 22px; transform: rotate(10deg); }
    33% { left: 38px; top: 12px; transform: rotate(-5deg); }
    65% { left: 86px; top: 10px; transform: rotate(15deg); }
    75% { left: 86px; top: 22px; transform: rotate(10deg); }
    83% { left: 86px; top: 12px; transform: rotate(-5deg); }
    100% { left: 38px; top: 10px; transform: rotate(15deg); }
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

  /* v2: Concert rosewood marimba with gold anodized resonator tubes,
     warm mahogany frame, and yarn mallets bouncing on tone bars */
  .marc {
    width: 118px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Studio mahogany frame */
  .marc-frame {
    position: absolute;
    left: 10px;
    bottom: 6px;
    width: 98px;
    height: 24px;
    border-bottom: 2.5px solid #78350f;
    border-left: 2.5px solid #78350f;
    border-right: 2.5px solid #78350f;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  /* Gold anodized resonator tubes */
  .marc-tubes {
    position: absolute;
    left: 14px;
    top: 40px;
    width: 90px;
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .marc-tube {
    width: 10px;
    border-radius: 2px;
    background: linear-gradient(180deg, #fde047 0%, #ca8a04 60%, #78350f 100%);
    border: 1px solid #eab308;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    animation: marc-res-glow 2.8s ease-out infinite;
  }

  .marc-tube.t1 { height: 38px; animation-delay: 0s; }
  .marc-tube.t2 { height: 32px; animation-delay: 0.7s; }
  .marc-tube.t3 { height: 26px; animation-delay: 1.4s; }
  .marc-tube.t4 { height: 20px; animation-delay: 2.1s; }

  @keyframes marc-res-glow {
    0%, 15% { box-shadow: inset 0 0 10px #fef08a, 0 0 10px #facc15; border-color: #ffffff; }
    30%, 100% { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6); border-color: #eab308; }
  }

  /* Rosewood tone bars */
  .marc-bars {
    position: absolute;
    left: 10px;
    top: 30px;
    width: 98px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }

  .marc-bar {
    border-radius: 2px;
    background: linear-gradient(180deg, #b45309 0%, #78350f 60%, #451a03 100%);
    border: 1px solid #d97706;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    animation: marc-bar-hit 2.8s ease-in-out infinite;
  }

  .marc-bar.b1 { width: 18px; height: 14px; animation-delay: 0s; }
  .marc-bar.b2 { width: 18px; height: 12px; animation-delay: 0.7s; }
  .marc-bar.b3 { width: 18px; height: 10px; animation-delay: 1.4s; }
  .marc-bar.b4 { width: 18px; height: 8px; animation-delay: 2.1s; }

  @keyframes marc-bar-hit {
    0% { transform: translateY(0); filter: brightness(1); }
    8% { transform: translateY(3px); filter: brightness(1.4); }
    18% { transform: translateY(-1px); }
    28% { transform: translateY(0); filter: brightness(1); }
    100% { transform: translateY(0); }
  }

  /* Mallet heads */
  .marc-mallet {
    position: absolute;
    width: 20px;
    height: 28px;
    z-index: 5;
    pointer-events: none;
  }

  .marc-mallet-shaft {
    position: absolute;
    right: 2px;
    top: 0;
    width: 2px;
    height: 22px;
    background: #fde047;
  }

  .marc-mallet-head {
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, #38bdf8, #0284c7);
    border: 1px solid #ffffff;
    box-shadow: 0 0 6px #00f0ff;
  }

  .marc-mallet.m-right .marc-mallet-head {
    background: radial-gradient(circle, #ec4899, #be185d);
    box-shadow: 0 0 6px #f43f5e;
  }

  .marc-mallet.m-left {
    animation: marc-run-left 2.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes marc-run-left {
    0% { left: 16px; top: 22px; transform: rotate(10deg); }
    8% { left: 16px; top: 12px; transform: rotate(-5deg); }
    40% { left: 62px; top: 10px; transform: rotate(15deg); }
    50% { left: 62px; top: 22px; transform: rotate(10deg); }
    58% { left: 62px; top: 12px; transform: rotate(-5deg); }
    90% { left: 16px; top: 10px; transform: rotate(15deg); }
    100% { left: 16px; top: 22px; transform: rotate(10deg); }
  }

  .marc-mallet.m-right {
    animation: marc-run-right 2.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes marc-run-right {
    0% { left: 38px; top: 10px; transform: rotate(15deg); }
    25% { left: 38px; top: 22px; transform: rotate(10deg); }
    33% { left: 38px; top: 12px; transform: rotate(-5deg); }
    65% { left: 86px; top: 10px; transform: rotate(15deg); }
    75% { left: 86px; top: 22px; transform: rotate(10deg); }
    83% { left: 86px; top: 12px; transform: rotate(-5deg); }
    100% { left: 38px; top: 10px; transform: rotate(15deg); }
  }
  `,
};

const marimbaMarkup = {
  v1: `
      <div class="mar">
        <div class="mar-frame"></div>
        <div class="mar-tubes">
          <div class="mar-tube t1"></div>
          <div class="mar-tube t2"></div>
          <div class="mar-tube t3"></div>
          <div class="mar-tube t4"></div>
        </div>
        <div class="mar-bars">
          <div class="mar-bar b1"></div>
          <div class="mar-bar b2"></div>
          <div class="mar-bar b3"></div>
          <div class="mar-bar b4"></div>
        </div>
        <div class="mar-mallet m-left">
          <div class="mar-mallet-shaft"></div>
          <div class="mar-mallet-head"></div>
        </div>
        <div class="mar-mallet m-right">
          <div class="mar-mallet-shaft"></div>
          <div class="mar-mallet-head"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="marc">
        <div class="marc-frame"></div>
        <div class="marc-tubes">
          <div class="marc-tube t1"></div>
          <div class="marc-tube t2"></div>
          <div class="marc-tube t3"></div>
          <div class="marc-tube t4"></div>
        </div>
        <div class="marc-bars">
          <div class="marc-bar b1"></div>
          <div class="marc-bar b2"></div>
          <div class="marc-bar b3"></div>
          <div class="marc-bar b4"></div>
        </div>
        <div class="marc-mallet m-left">
          <div class="marc-mallet-shaft"></div>
          <div class="marc-mallet-head"></div>
        </div>
        <div class="marc-mallet m-right">
          <div class="marc-mallet-shaft"></div>
          <div class="marc-mallet-head"></div>
        </div>
      </div>
    `,
};

class ConceptMarimba extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${marimbaStyles[version] || marimbaStyles.v2}</style>${marimbaMarkup[version] || marimbaMarkup.v2}`;
  }
}

if (!customElements.get('concept-marimba')) {
  customElements.define('concept-marimba', ConceptMarimba);
}
