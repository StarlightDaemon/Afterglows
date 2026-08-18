const visitorStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .visitor {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .visitor-aura {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(0, 255, 100, 0.25) 0 40%, transparent 70%);
    box-shadow: 0 0 16px rgba(0, 255, 100, 0.4);
    animation: visitor-aura 1.2s ease-in-out infinite alternate;
  }

  @keyframes visitor-aura {
    0% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.85); }
    100% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
  }

  .visitor-head {
    position: relative;
    width: 58px;
    height: 70px;
    border-radius: 50% 50% 46% 46% / 62% 62% 38% 38%;
    background: linear-gradient(180deg, #0c2410 0%, #071a0b 55%, #041106 100%);
    border: 2px solid #00ff66;
    box-shadow:
      inset 0 6px 10px rgba(0, 255, 100, 0.4),
      0 0 16px rgba(0, 255, 100, 0.4);
    transform-origin: center 80%;
    animation: visitor-hover 1.4s ease-in-out infinite alternate;
  }

  @keyframes visitor-hover {
    0% { transform: translateY(-8px) rotate(-10deg) scale(0.94); }
    100% { transform: translateY(8px) rotate(10deg) scale(1.06); }
  }

  .visitor-eye {
    position: absolute;
    top: 26px;
    width: 20px;
    height: 30px;
    border-radius: 52% 48% 50% 50% / 68% 68% 32% 32%;
    background: radial-gradient(circle at 34% 28%, #ffffff 0 15%, #00ff66 35%, #041106 70%);
    box-shadow: inset 0 0 5px #00ff66, 0 0 8px #00ff66;
    animation: visitor-eye-scan 1.0s ease-in-out infinite alternate;
  }

  .visitor-eye.left {
    left: 5px;
    --eye-rot: 24deg;
  }

  .visitor-eye.right {
    right: 5px;
    --eye-rot: -24deg;
  }

  @keyframes visitor-eye-scan {
    0% { transform: rotate(var(--eye-rot)) translateX(-3px) scaleY(1); }
    50% { transform: rotate(var(--eye-rot)) translateX(3px) scaleY(1); }
    90% { transform: rotate(var(--eye-rot)) translateX(0px) scaleY(0.1); }
    100% { transform: rotate(var(--eye-rot)) translateX(0px) scaleY(1); }
  }

  .visitor-nostril {
    position: absolute;
    bottom: 12px;
    width: 2.5px;
    height: 3.5px;
    border-radius: 50%;
    background: #00ff66;
    box-shadow: 0 0 3px #00ff66;
  }

  .visitor-nostril.n1 { left: 26px; }
  .visitor-nostril.n2 { right: 26px; }

  .visitor-pulse {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
    animation: visitor-third 0.8s ease-in-out infinite alternate;
  }

  @keyframes visitor-third {
    0% { transform: scale(0.6); opacity: 0.3; }
    100% { transform: scale(1.6); opacity: 1; }
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

  /* v2: Classic Roswell Grey alien */
  .visitorc {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Telepathic aura */
  .visitorc-aura {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(56, 189, 248, 0.3) 0 40%, transparent 70%);
    box-shadow: 0 0 16px rgba(0, 240, 255, 0.5);
    animation: visitorc-aura 1.2s ease-in-out infinite alternate;
  }

  @keyframes visitorc-aura {
    0% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.85); }
    100% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
  }

  /* Pearlescent grey-silver head */
  .visitorc-head {
    position: relative;
    width: 58px;
    height: 70px;
    border-radius: 50% 50% 46% 46% / 62% 62% 38% 38%;
    background: linear-gradient(180deg, #e2e8f0 0%, #94a3b8 50%, #475569 100%);
    border: 1.5px solid #cbd5e1;
    box-shadow:
      inset 0 6px 10px rgba(255, 255, 255, 0.8),
      0 4px 14px rgba(0, 0, 0, 0.9);
    transform-origin: center 80%;
    animation: visitorc-hover 1.4s ease-in-out infinite alternate;
  }

  @keyframes visitorc-hover {
    0% { transform: translateY(-8px) rotate(-10deg) scale(0.94); }
    100% { transform: translateY(8px) rotate(10deg) scale(1.06); }
  }

  /* Deep glossy obsidian almond eyes with specular starfield */
  .visitorc-eye {
    position: absolute;
    top: 26px;
    width: 20px;
    height: 30px;
    border-radius: 52% 48% 50% 50% / 68% 68% 32% 32%;
    background: radial-gradient(circle at 34% 28%, #ffffff 0 15%, #38bdf8 30%, #09090b 55%);
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5), 0 0 8px #00f0ff;
    animation: visitorc-eye-scan 1.0s ease-in-out infinite alternate;
  }

  .visitorc-eye.left {
    left: 5px;
    --eye-rot: 24deg;
  }

  .visitorc-eye.right {
    right: 5px;
    --eye-rot: -24deg;
  }

  @keyframes visitorc-eye-scan {
    0% { transform: rotate(var(--eye-rot)) translateX(-3px) scaleY(1); }
    50% { transform: rotate(var(--eye-rot)) translateX(3px) scaleY(1); }
    90% { transform: rotate(var(--eye-rot)) translateX(0px) scaleY(0.1); }
    100% { transform: rotate(var(--eye-rot)) translateX(0px) scaleY(1); }
  }

  /* Slit nostrils */
  .visitorc-nostril {
    position: absolute;
    bottom: 12px;
    width: 2.5px;
    height: 3.5px;
    border-radius: 50%;
    background: #334155;
  }

  .visitorc-nostril.n1 { left: 26px; }
  .visitorc-nostril.n2 { right: 26px; }

  /* Telepathic third eye cyan pulse */
  .visitorc-pulse {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 10px #00f0ff, 0 0 16px #38bdf8;
    animation: visitorc-third 0.8s ease-in-out infinite alternate;
  }

  @keyframes visitorc-third {
    0% { transform: scale(0.6); opacity: 0.3; }
    100% { transform: scale(1.6); opacity: 1; }
  }
  `,
};

const visitorMarkup = {
  v1: `
      <div class="visitor">
        <div class="visitor-aura"></div>
        <div class="visitor-head">
          <div class="visitor-pulse"></div>
          <div class="visitor-eye left"></div>
          <div class="visitor-eye right"></div>
          <div class="visitor-nostril n1"></div>
          <div class="visitor-nostril n2"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="visitorc">
        <div class="visitorc-aura"></div>
        <div class="visitorc-head">
          <div class="visitorc-pulse"></div>
          <div class="visitorc-eye left"></div>
          <div class="visitorc-eye right"></div>
          <div class="visitorc-nostril n1"></div>
          <div class="visitorc-nostril n2"></div>
        </div>
      </div>
    `,
};

class ConceptVisitor extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${visitorStyles[version] || visitorStyles.v2}</style>${visitorMarkup[version] || visitorMarkup.v2}`;
  }
}

if (!customElements.get('concept-visitor')) {
  customElements.define('concept-visitor', ConceptVisitor);
}
