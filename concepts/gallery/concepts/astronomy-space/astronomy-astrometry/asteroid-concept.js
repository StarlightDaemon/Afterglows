const asteroidStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ast {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(160deg, #010401 0%, #020a03 100%);
  }

  .ast::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 22% 18%, rgba(210, 255, 215, 0.55) 0 1px, transparent 1.4px),
      radial-gradient(circle at 74% 30%, rgba(210, 255, 215, 0.4) 0 1px, transparent 1.4px),
      radial-gradient(circle at 48% 66%, rgba(210, 255, 215, 0.45) 0 1px, transparent 1.4px),
      radial-gradient(circle at 88% 80%, rgba(210, 255, 215, 0.5) 0 1px, transparent 1.4px),
      radial-gradient(circle at 10% 86%, rgba(210, 255, 215, 0.35) 0 1px, transparent 1.4px);
  }

  .ast-carrier {
    position: absolute;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .ast-rock {
    position: relative;
    background: radial-gradient(circle at 34% 30%, #2f7a44 0%, #123c1e 55%, #0a2411 100%);
    border: 1px solid rgba(140, 255, 170, 0.5);
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.2);
    animation: ast-tumble linear infinite;
  }

  .ast-rock::before,
  .ast-rock::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(5, 18, 7, 0.85);
    box-shadow: inset 0 1px 1px rgba(140, 255, 170, 0.3);
  }

  .ast-carrier.big {
    top: -30px;
    left: -30px;
    animation-name: ast-drift-big;
    animation-duration: 11s;
  }

  .ast-carrier.big .ast-rock {
    width: 30px;
    height: 26px;
    border-radius: 46% 58% 42% 60% / 54% 44% 62% 46%;
    animation-duration: 9s;
  }

  .ast-carrier.big .ast-rock::before { top: 6px; left: 7px; width: 7px; height: 6px; }
  .ast-carrier.big .ast-rock::after { bottom: 5px; right: 6px; width: 5px; height: 5px; }

  .ast-carrier.mid {
    top: 0;
    left: 0;
    animation-name: ast-drift-mid;
    animation-duration: 8s;
    animation-delay: -3s;
  }

  .ast-carrier.mid .ast-rock {
    width: 17px;
    height: 15px;
    border-radius: 60% 42% 56% 44% / 44% 60% 42% 58%;
    animation-duration: 5.5s;
    animation-direction: reverse;
  }

  .ast-carrier.mid .ast-rock::before { top: 3px; left: 4px; width: 4px; height: 4px; }
  .ast-carrier.mid .ast-rock::after { bottom: 2px; right: 3px; width: 3px; height: 3px; }

  .ast-carrier.small {
    top: 0;
    left: 0;
    animation-name: ast-drift-small;
    animation-duration: 6s;
    animation-delay: -1.5s;
  }

  .ast-carrier.small .ast-rock {
    width: 9px;
    height: 8px;
    border-radius: 52% 48% 60% 40% / 46% 58% 42% 54%;
    animation-duration: 3s;
  }

  .ast-carrier.small .ast-rock::before { top: 2px; left: 2px; width: 2px; height: 2px; }
  .ast-carrier.small .ast-rock::after { display: none; }

  .ast-carrier.pebble {
    top: 0;
    left: 0;
    animation-name: ast-drift-pebble;
    animation-duration: 3.6s;
    animation-delay: -0.9s;
  }

  .ast-carrier.pebble .ast-rock {
    width: 4px;
    height: 4px;
    border-radius: 50% 44% 56% 48%;
    border-width: 0;
    animation: none;
  }

  @keyframes ast-tumble {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes ast-drift-big {
    0% { transform: translate(-6px, -8px); }
    100% { transform: translate(96px, 104px); }
  }

  @keyframes ast-drift-mid {
    0% { transform: translate(116px, 24px); }
    100% { transform: translate(-24px, 58px); }
  }

  @keyframes ast-drift-small {
    0% { transform: translate(-12px, 96px); }
    100% { transform: translate(112px, 22px); }
  }

  @keyframes ast-drift-pebble {
    0% { transform: translate(114px, 78px); }
    100% { transform: translate(-8px, 6px); }
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

  /* v2: Deep space asteroid drift with bronze/slate stony asteroids,
     crater relief shadows, solar glint highlights, and multi-color starfield */
  .astc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 40% 40%, #1e1b4b 0%, #0f172a 60%, #020617 100%);
    border-radius: 6px;
  }

  /* Multi-spectral deep space background stars */
  .astc::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 22% 18%, #fde047 0 1px, transparent 1.4px),
      radial-gradient(circle at 74% 30%, #38bdf8 0 1px, transparent 1.4px),
      radial-gradient(circle at 48% 66%, #f43f5e 0 1px, transparent 1.4px),
      radial-gradient(circle at 88% 80%, #ffffff 0 1px, transparent 1.4px),
      radial-gradient(circle at 10% 86%, #a7f3d0 0 1px, transparent 1.4px);
  }

  .astc-carrier {
    position: absolute;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  /* Chondritic bronze-slate asteroid rock */
  .astc-rock {
    position: relative;
    background: radial-gradient(circle at 34% 30%, #d97706 0%, #78350f 45%, #1e293b 80%, #020617 100%);
    border: 1px solid #facc15;
    box-sizing: border-box;
    box-shadow: 0 0 8px rgba(217, 119, 6, 0.4);
    animation: astc-tumble linear infinite;
  }

  .astc-rock::before,
  .astc-rock::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: #09090b;
    box-shadow: inset 0 1px 1px #ca8a04;
  }

  /* Large rock */
  .astc-carrier.big {
    top: -30px;
    left: -30px;
    animation-name: astc-drift-big;
    animation-duration: 11s;
  }

  .astc-carrier.big .astc-rock {
    width: 30px;
    height: 26px;
    border-radius: 46% 58% 42% 60% / 54% 44% 62% 46%;
    animation-duration: 9s;
  }

  .astc-carrier.big .astc-rock::before { top: 6px; left: 7px; width: 7px; height: 6px; }
  .astc-carrier.big .astc-rock::after { bottom: 5px; right: 6px; width: 5px; height: 5px; }

  /* Medium rock */
  .astc-carrier.mid {
    top: 0;
    left: 0;
    animation-name: astc-drift-mid;
    animation-duration: 8s;
    animation-delay: -3s;
  }

  .astc-carrier.mid .astc-rock {
    width: 17px;
    height: 15px;
    border-radius: 60% 42% 56% 44% / 44% 60% 42% 58%;
    animation-duration: 5.5s;
    animation-direction: reverse;
  }

  .astc-carrier.mid .astc-rock::before { top: 3px; left: 4px; width: 4px; height: 4px; }
  .astc-carrier.mid .astc-rock::after { bottom: 2px; right: 3px; width: 3px; height: 3px; }

  /* Small rock */
  .astc-carrier.small {
    top: 0;
    left: 0;
    animation-name: astc-drift-small;
    animation-duration: 6s;
    animation-delay: -1.5s;
  }

  .astc-carrier.small .astc-rock {
    width: 9px;
    height: 8px;
    border-radius: 52% 48% 60% 40% / 46% 58% 42% 54%;
    animation-duration: 3s;
  }

  .astc-carrier.small .astc-rock::before { top: 2px; left: 2px; width: 2px; height: 2px; }
  .astc-carrier.small .astc-rock::after { display: none; }

  /* Tiny micrometeorite pebble */
  .astc-carrier.pebble {
    top: 0;
    left: 0;
    animation-name: astc-drift-pebble;
    animation-duration: 3.6s;
    animation-delay: -0.9s;
  }

  .astc-carrier.pebble .astc-rock {
    width: 4px;
    height: 4px;
    border-radius: 50% 44% 56% 48%;
    border-width: 0;
    background: #facc15;
    box-shadow: 0 0 4px #fde047;
    animation: none;
  }

  @keyframes astc-tumble {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes astc-drift-big {
    0% { transform: translate(-6px, -8px); }
    100% { transform: translate(96px, 104px); }
  }

  @keyframes astc-drift-mid {
    0% { transform: translate(116px, 24px); }
    100% { transform: translate(-24px, 58px); }
  }

  @keyframes astc-drift-small {
    0% { transform: translate(-12px, 96px); }
    100% { transform: translate(112px, 22px); }
  }

  @keyframes astc-drift-pebble {
    0% { transform: translate(114px, 78px); }
    100% { transform: translate(-8px, 6px); }
  }
  `,
};

const asteroidMarkup = {
  v1: `
      <div class="ast">
        <div class="ast-carrier big"><div class="ast-rock"></div></div>
        <div class="ast-carrier mid"><div class="ast-rock"></div></div>
        <div class="ast-carrier small"><div class="ast-rock"></div></div>
        <div class="ast-carrier pebble"><div class="ast-rock"></div></div>
      </div>
    `,
  v2: `
      <div class="astc">
        <div class="astc-carrier big"><div class="astc-rock"></div></div>
        <div class="astc-carrier mid"><div class="astc-rock"></div></div>
        <div class="astc-carrier small"><div class="astc-rock"></div></div>
        <div class="astc-carrier pebble"><div class="astc-rock"></div></div>
      </div>
    `,
};

class ConceptAsteroid extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${asteroidStyles[version] || asteroidStyles.v2}</style>${asteroidMarkup[version] || asteroidMarkup.v2}`;
  }
}

if (!customElements.get('concept-asteroid')) {
  customElements.define('concept-asteroid', ConceptAsteroid);
}
