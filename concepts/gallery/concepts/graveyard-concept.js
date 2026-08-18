const graveyardStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gy {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #010401 0%, #020a05 75%, #041106 100%);
  }

  .gy-ground {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 14px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.4), transparent);
  }

  .gy-stone {
    position: absolute;
    bottom: 16px;
    background: linear-gradient(180deg, #123c1e 0%, #0a2411 70%);
    border: 1px solid rgba(140, 255, 170, 0.45);
    box-sizing: border-box;
  }

  .gy-stone.round {
    left: 14px;
    width: 20px;
    height: 26px;
    border-radius: 10px 10px 0 0;
  }

  .gy-stone.round::after {
    content: 'R I P';
    position: absolute;
    top: 7px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: monospace;
    font-size: 6px;
    color: rgba(140, 255, 170, 0.6);
  }

  .gy-stone.slab {
    right: 16px;
    width: 16px;
    height: 22px;
    border-radius: 3px 3px 0 0;
    transform: rotate(7deg);
    transform-origin: bottom center;
  }

  .gy-cross {
    position: absolute;
    bottom: 16px;
    left: 48px;
    width: 4px;
    height: 30px;
    background: linear-gradient(180deg, #164722, #0a2411);
    border: 1px solid rgba(140, 255, 170, 0.4);
    box-sizing: border-box;
  }

  .gy-cross::after {
    content: '';
    position: absolute;
    top: 7px;
    left: -6px;
    width: 14px;
    height: 4px;
    background: #123c1e;
    border: 1px solid rgba(140, 255, 170, 0.4);
    box-sizing: border-box;
  }

  .gy-fog {
    position: absolute;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(140, 230, 160, 0.3), transparent 70%);
    filter: blur(3px);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .gy-fog.f1 {
    bottom: 12px;
    left: 0;
    width: 60px;
    animation-name: gy-fog-a;
    animation-duration: 9s;
  }

  .gy-fog.f2 {
    bottom: 20px;
    left: 0;
    width: 44px;
    opacity: 0.7;
    animation-name: gy-fog-b;
    animation-duration: 13s;
    animation-delay: -5s;
  }

  .gy-fog.f3 {
    bottom: 28px;
    left: 0;
    width: 34px;
    opacity: 0.45;
    animation-name: gy-fog-a;
    animation-duration: 17s;
    animation-delay: -11s;
  }

  .gy-bat {
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 8px;
    animation: gy-bat 2.8s ease-in-out infinite;
  }

  .gy-bat::before,
  .gy-bat::after {
    content: '';
    position: absolute;
    top: 0;
    width: 9px;
    height: 8px;
    background: #00ff66;
    box-shadow: 0 0 6px #00ff66;
    animation: gy-flap 0.22s ease-in-out infinite alternate;
  }

  .gy-bat::before {
    left: 0;
    border-radius: 80% 20% 0 60%;
    transform-origin: right center;
  }

  .gy-bat::after {
    right: 0;
    border-radius: 20% 80% 60% 0;
    transform-origin: left center;
    animation-name: gy-flap-r;
  }

  .gy-moon {
    position: absolute;
    top: 10px;
    right: 14px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: radial-gradient(circle at 42% 36%, #ffffff 0%, #a7f3d0 75%);
    box-shadow: 0 0 16px rgba(0, 255, 100, 0.6);
    animation: gy-moon 3.2s ease-in-out infinite alternate;
  }

  @keyframes gy-fog-a {
    0% { transform: translate(-40px, 0); }
    100% { transform: translate(110px, -4px); }
  }

  @keyframes gy-fog-b {
    0% { transform: translate(100px, 0); }
    100% { transform: translate(-40px, -5px); }
  }

  @keyframes gy-bat {
    0% { transform: translate(-20px, 14px) rotate(15deg); }
    30% { transform: translate(24px, 40px) rotate(-10deg) scale(1.2); }
    60% { transform: translate(68px, 10px) rotate(18deg) scale(0.9); }
    100% { transform: translate(118px, 28px) rotate(-12deg); }
  }

  @keyframes gy-flap {
    from { transform: rotate(-35deg); }
    to { transform: rotate(38deg); }
  }

  @keyframes gy-flap-r {
    from { transform: rotate(35deg); }
    to { transform: rotate(-38deg); }
  }

  @keyframes gy-moon {
    0% { transform: translateY(-2px) scale(0.95); }
    100% { transform: translateY(2px) scale(1.1); }
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

  /* v2: Midnight graveyard mist with golden Harvest Moon, granite tombstones,
     lavender fog, and flying bat */
  .gyc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Earth ground line */
  .gyc-ground {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 14px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #15803d 30%, #166534 70%, transparent);
    box-shadow: 0 0 6px #15803d;
  }

  /* Granite headstones */
  .gyc-stone {
    position: absolute;
    bottom: 16px;
    background: linear-gradient(180deg, #64748b 0%, #334155 70%, #1e293b 100%);
    border: 1px solid #94a3b8;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
  }

  .gyc-stone.round {
    left: 14px;
    width: 20px;
    height: 26px;
    border-radius: 10px 10px 0 0;
  }

  .gyc-stone.round::after {
    content: 'R I P';
    position: absolute;
    top: 7px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: monospace;
    font-size: 6px;
    font-weight: bold;
    color: #cbd5e1;
  }

  .gyc-stone.slab {
    right: 16px;
    width: 16px;
    height: 22px;
    border-radius: 3px 3px 0 0;
    transform: rotate(7deg);
    transform-origin: bottom center;
  }

  /* Stone cross */
  .gyc-cross {
    position: absolute;
    bottom: 16px;
    left: 48px;
    width: 4px;
    height: 30px;
    background: linear-gradient(180deg, #94a3b8, #475569);
    border: 1px solid #cbd5e1;
    box-sizing: border-box;
  }

  .gyc-cross::after {
    content: '';
    position: absolute;
    top: 7px;
    left: -6px;
    width: 14px;
    height: 4px;
    background: #64748b;
    border: 1px solid #cbd5e1;
    box-sizing: border-box;
  }

  /* Lavender & turquoise ground mist */
  .gyc-fog {
    position: absolute;
    height: 14px;
    border-radius: 50%;
    filter: blur(3px);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .gyc-fog.f1 {
    bottom: 12px;
    left: 0;
    width: 60px;
    background: radial-gradient(ellipse, rgba(192, 132, 252, 0.4), transparent 70%);
    animation-name: gyc-fog-a;
    animation-duration: 9s;
  }

  .gyc-fog.f2 {
    bottom: 20px;
    left: 0;
    width: 44px;
    background: radial-gradient(ellipse, rgba(56, 189, 248, 0.35), transparent 70%);
    opacity: 0.8;
    animation-name: gyc-fog-b;
    animation-duration: 13s;
    animation-delay: -5s;
  }

  .gyc-fog.f3 {
    bottom: 28px;
    left: 0;
    width: 34px;
    background: radial-gradient(ellipse, rgba(168, 85, 247, 0.3), transparent 70%);
    opacity: 0.5;
    animation-name: gyc-fog-a;
    animation-duration: 17s;
    animation-delay: -11s;
  }

  /* Obsidian bat */
  .gyc-bat {
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 8px;
    animation: gyc-bat 2.8s ease-in-out infinite;
  }

  .gyc-bat::before,
  .gyc-bat::after {
    content: '';
    position: absolute;
    top: 0;
    width: 9px;
    height: 8px;
    background: #00f0ff;
    box-shadow: 0 0 8px #00f0ff;
    animation: gyc-flap 0.22s ease-in-out infinite alternate;
  }

  .gyc-bat::before {
    left: 0;
    border-radius: 80% 20% 0 60%;
    transform-origin: right center;
  }

  .gyc-bat::after {
    right: 0;
    border-radius: 20% 80% 60% 0;
    transform-origin: left center;
    animation-name: gyc-flap-r;
  }

  /* Glowing golden Harvest Moon */
  .gyc-moon {
    position: absolute;
    top: 10px;
    right: 14px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: radial-gradient(circle at 42% 36%, #fffbeb 0%, #fde047 50%, #eab308 100%);
    box-shadow: 0 0 16px #facc15, 0 0 24px #eab308;
    animation: gyc-moon 3.2s ease-in-out infinite alternate;
  }

  @keyframes gyc-fog-a {
    0% { transform: translate(-40px, 0); }
    100% { transform: translate(110px, -4px); }
  }

  @keyframes gyc-fog-b {
    0% { transform: translate(100px, 0); }
    100% { transform: translate(-40px, -5px); }
  }

  @keyframes gyc-bat {
    0% { transform: translate(-20px, 14px) rotate(15deg); }
    30% { transform: translate(24px, 40px) rotate(-10deg) scale(1.2); }
    60% { transform: translate(68px, 10px) rotate(18deg) scale(0.9); }
    100% { transform: translate(118px, 28px) rotate(-12deg); }
  }

  @keyframes gyc-flap {
    from { transform: rotate(-35deg); }
    to { transform: rotate(38deg); }
  }

  @keyframes gyc-flap-r {
    from { transform: rotate(35deg); }
    to { transform: rotate(-38deg); }
  }

  @keyframes gyc-moon {
    0% { transform: translateY(-2px) scale(0.95); }
    100% { transform: translateY(2px) scale(1.1); }
  }
  `,
};

const graveyardMarkup = {
  v1: `
      <div class="gy">
        <div class="gy-moon"></div>
        <div class="gy-bat"></div>
        <div class="gy-stone round"></div>
        <div class="gy-cross"></div>
        <div class="gy-stone slab"></div>
        <div class="gy-ground"></div>
        <div class="gy-fog f1"></div>
        <div class="gy-fog f2"></div>
        <div class="gy-fog f3"></div>
      </div>
    `,
  v2: `
      <div class="gyc">
        <div class="gyc-moon"></div>
        <div class="gyc-bat"></div>
        <div class="gyc-stone round"></div>
        <div class="gyc-cross"></div>
        <div class="gyc-stone slab"></div>
        <div class="gyc-ground"></div>
        <div class="gyc-fog f1"></div>
        <div class="gyc-fog f2"></div>
        <div class="gyc-fog f3"></div>
      </div>
    `,
};

class ConceptGraveyard extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${graveyardStyles[version] || graveyardStyles.v2}</style>${graveyardMarkup[version] || graveyardMarkup.v2}`;
  }
}

if (!customElements.get('concept-graveyard')) {
  customElements.define('concept-graveyard', ConceptGraveyard);
}
