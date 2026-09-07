const violinBowStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vb {
    width: 116px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  .vb-board {
    position: absolute;
    left: 8px;
    top: 50px;
    width: 100px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 70, 15, 0.8), rgba(0, 25, 5, 0.95));
    border: 1px solid var(--accent, #00cc00);
  }

  .vb-bridge {
    position: absolute;
    right: 14px;
    top: 38px;
    width: 6px;
    height: 24px;
    border-radius: 2px;
    background: rgba(0, 150, 30, 0.9);
    border: 1px solid var(--accent, #00cc00);
  }

  .vb-nut {
    position: absolute;
    left: 10px;
    top: 42px;
    width: 4px;
    height: 18px;
    border-radius: 1px;
    background: rgba(0, 150, 30, 0.9);
    border: 1px solid var(--accent, #00cc00);
  }

  .vb-string-env {
    position: absolute;
    left: 14px;
    top: 45px;
    width: 88px;
    height: 8px;
  }

  .vb-string-core {
    position: absolute;
    left: 0;
    top: 3px;
    width: 100%;
    height: 2px;
    background: rgba(190, 255, 205, 0.95);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.9);
    animation: vb-string-vibe 0.08s ease-in-out infinite alternate;
  }

  @keyframes vb-string-vibe {
    0% { transform: scaleY(1.8) translateY(-1px); }
    100% { transform: scaleY(0.6) translateY(1px); }
  }

  .vb-node {
    position: absolute;
    top: 1px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 1);
    animation: vb-node-glow 0.8s ease-in-out infinite alternate;
  }

  .vb-node.n1 { left: 24px; }
  .vb-node.n2 { left: 44px; }
  .vb-node.n3 { left: 64px; }

  @keyframes vb-node-glow {
    0% { transform: scale(0.8); opacity: 0.6; }
    100% { transform: scale(1.3); opacity: 1; }
  }

  .vb-bow {
    position: absolute;
    left: 20px;
    top: 22px;
    width: 68px;
    height: 52px;
    animation: vb-bow-stroke 2.6s ease-in-out infinite;
    z-index: 4;
  }

  @keyframes vb-bow-stroke {
    0%, 100% { transform: translate(-18px, -10px) rotate(-1deg); }
    50% { transform: translate(18px, 12px) rotate(1deg); }
  }

  .vb-stick {
    position: absolute;
    left: 42px;
    top: 0;
    width: 4px;
    height: 52px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 160, 35, 0.9), rgba(0, 70, 14, 0.95));
    border: 1px solid var(--accent, #00cc00);
  }

  .vb-hair {
    position: absolute;
    left: 36px;
    top: 0;
    width: 2px;
    height: 52px;
    background: rgba(190, 255, 205, 0.85);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.7);
  }

  .vb-rosin {
    position: absolute;
    left: 54px;
    top: 44px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.9);
    animation: vb-rosin-puff 1.3s ease-out infinite;
    pointer-events: none;
  }

  .vb-rosin.r1 { animation-delay: 0s; }
  .vb-rosin.r2 { animation-delay: -0.4s; }
  .vb-rosin.r3 { animation-delay: -0.9s; }

  @keyframes vb-rosin-puff {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(calc(6px * var(--rx, 1)), -14px) scale(0.3); }
  }

  .vb-rosin.r1 { --rx: 1.2; }
  .vb-rosin.r2 { --rx: -1; }
  .vb-rosin.r3 { --rx: 0.5; }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Pernambuco violin bow drawing across vibrating string with golden harmonic nodes,
     ebony fingerboard, maple bridge, and amber rosin dust puffs */
  .vbc {
    width: 116px;
    height: 96px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Ebony fingerboard */
  .vbc-board {
    position: absolute;
    left: 8px;
    top: 50px;
    width: 100px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(180deg, #334155 0%, #1e293b 50%, #09090b 100%);
    border: 1px solid #475569;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  /* Carved maple bridge */
  .vbc-bridge {
    position: absolute;
    right: 14px;
    top: 38px;
    width: 6px;
    height: 24px;
    border-radius: 2px;
    background: linear-gradient(180deg, #fef08a 0%, #ca8a04 100%);
    border: 1px solid #eab308;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }

  /* Ebony pegbox nut */
  .vbc-nut {
    position: absolute;
    left: 10px;
    top: 42px;
    width: 4px;
    height: 18px;
    border-radius: 1px;
    background: #09090b;
    border: 1px solid #64748b;
  }

  /* String envelope */
  .vbc-string-env {
    position: absolute;
    left: 14px;
    top: 45px;
    width: 88px;
    height: 8px;
  }

  /* Vibrating steel string core */
  .vbc-string-core {
    position: absolute;
    left: 0;
    top: 3px;
    width: 100%;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 0 8px #00f0ff, 0 0 12px #38bdf8;
    animation: vbc-string-vibe 0.08s ease-in-out infinite alternate;
  }

  @keyframes vbc-string-vibe {
    0% { transform: scaleY(1.8) translateY(-1px); }
    100% { transform: scaleY(0.6) translateY(1px); }
  }

  /* Golden stationary harmonic nodes */
  .vbc-node {
    position: absolute;
    top: 1px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #facc15;
    box-shadow: 0 0 8px #fde047;
    animation: vbc-node-glow 0.8s ease-in-out infinite alternate;
  }

  .vbc-node.n1 { left: 24px; }
  .vbc-node.n2 { left: 44px; }
  .vbc-node.n3 { left: 64px; }

  @keyframes vbc-node-glow {
    0% { transform: scale(0.8); opacity: 0.7; }
    100% { transform: scale(1.3); opacity: 1; filter: drop-shadow(0 0 4px #facc15); }
  }

  /* Bow stroke animation */
  .vbc-bow {
    position: absolute;
    left: 20px;
    top: 22px;
    width: 68px;
    height: 52px;
    animation: vbc-bow-stroke 2.6s ease-in-out infinite;
    z-index: 4;
  }

  @keyframes vbc-bow-stroke {
    0%, 100% { transform: translate(-18px, -10px) rotate(-1deg); }
    50% { transform: translate(18px, 12px) rotate(1deg); }
  }

  /* Pernambuco amber wooden stick */
  .vbc-stick {
    position: absolute;
    left: 42px;
    top: 0;
    width: 4px;
    height: 52px;
    border-radius: 2px;
    background: linear-gradient(180deg, #f59e0b 0%, #b45309 50%, #78350f 100%);
    border: 1px solid #d97706;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  }

  /* Natural white horsehair ribbon */
  .vbc-hair {
    position: absolute;
    left: 36px;
    top: 0;
    width: 2px;
    height: 52px;
    background: #fef3c7;
    box-shadow: 0 0 4px rgba(254, 243, 199, 0.8);
  }

  /* Amber rosin dust motes */
  .vbc-rosin {
    position: absolute;
    left: 54px;
    top: 44px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 0 0 4px #eab308;
    animation: vbc-rosin-puff 1.3s ease-out infinite;
    pointer-events: none;
  }

  .vbc-rosin.r1 { animation-delay: 0s; }
  .vbc-rosin.r2 { animation-delay: -0.4s; }
  .vbc-rosin.r3 { animation-delay: -0.9s; }

  @keyframes vbc-rosin-puff {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(calc(6px * var(--rx, 1)), -14px) scale(0.3); }
  }

  .vbc-rosin.r1 { --rx: 1.2; }
  .vbc-rosin.r2 { --rx: -1; }
  .vbc-rosin.r3 { --rx: 0.5; }
  `,
};

const violinBowMarkup = {
  v1: `
      <div class="vb">
        <div class="vb-board"></div>
        <div class="vb-bridge"></div>
        <div class="vb-nut"></div>
        <div class="vb-string-env">
          <div class="vb-string-core"></div>
          <div class="vb-node n1"></div>
          <div class="vb-node n2"></div>
          <div class="vb-node n3"></div>
        </div>
        <div class="vb-bow">
          <div class="vb-stick"></div>
          <div class="vb-hair"></div>
        </div>
        <div class="vb-rosin r1"></div>
        <div class="vb-rosin r2"></div>
        <div class="vb-rosin r3"></div>
      </div>
    `,
  v2: `
      <div class="vbc">
        <div class="vbc-board"></div>
        <div class="vbc-bridge"></div>
        <div class="vbc-nut"></div>
        <div class="vbc-string-env">
          <div class="vbc-string-core"></div>
          <div class="vbc-node n1"></div>
          <div class="vbc-node n2"></div>
          <div class="vbc-node n3"></div>
        </div>
        <div class="vbc-bow">
          <div class="vbc-stick"></div>
          <div class="vbc-hair"></div>
        </div>
        <div class="vbc-rosin r1"></div>
        <div class="vbc-rosin r2"></div>
        <div class="vbc-rosin r3"></div>
      </div>
    `,
};

class ConceptViolinBow extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${violinBowStyles[version] || violinBowStyles.v2}</style>${violinBowMarkup[version] || violinBowMarkup.v2}`;
  }
}

if (!customElements.get('concept-violin-bow')) {
  customElements.define('concept-violin-bow', ConceptViolinBow);
}
