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
    background: radial-gradient(circle, rgba(0, 204, 0, 0.14) 0 40%, transparent 70%);
    animation: visitor-aura 4.5s ease-in-out infinite;
  }

  .visitor-head {
    position: relative;
    width: 58px;
    height: 70px;
    border-radius: 50% 50% 46% 46% / 62% 62% 38% 38%;
    background: linear-gradient(180deg, #0c2410 0%, #071a0b 55%, #041106 100%);
    box-shadow:
      inset 0 6px 10px rgba(140, 255, 165, 0.18),
      0 0 14px rgba(0, 204, 0, 0.2);
    transform-origin: center 80%;
    animation: visitor-tilt 6.5s ease-in-out infinite;
  }

  .visitor-eye {
    position: absolute;
    top: 26px;
    width: 19px;
    height: 30px;
    border-radius: 52% 48% 50% 50% / 68% 68% 32% 32%;
    background: radial-gradient(circle at 34% 28%, rgba(220, 255, 228, 0.85) 0 12%, rgba(10, 20, 12, 0.98) 40%);
    box-shadow: inset 0 0 5px rgba(160, 255, 180, 0.4), 0 0 6px rgba(0, 204, 0, 0.35);
    animation: visitor-blink 4.8s ease-in-out infinite;
  }

  .visitor-eye.left {
    left: 5px;
    transform: rotate(24deg);
  }

  .visitor-eye.right {
    right: 5px;
    transform: rotate(-24deg);
  }

  .visitor-nostril {
    position: absolute;
    bottom: 12px;
    width: 2px;
    height: 3px;
    border-radius: 50%;
    background: rgba(140, 255, 165, 0.35);
  }

  .visitor-nostril.n1 { left: 26px; }
  .visitor-nostril.n2 { right: 26px; }

  .visitor-pulse {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 3px;
    height: 3px;
    margin-left: -1.5px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.9);
    box-shadow: 0 0 6px rgba(190, 255, 205, 0.8);
    animation: visitor-third 4.5s ease-in-out infinite;
  }

  @keyframes visitor-aura {
    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.94); }
    50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
  }

  @keyframes visitor-tilt {
    0%, 100% { transform: rotate(-4deg); }
    45% { transform: rotate(5deg); }
    70% { transform: rotate(2deg); }
  }

  @keyframes visitor-blink {
    0%, 40%, 100% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
    43% { transform: rotate(var(--eye-rot, 24deg)) scaleY(0.06); }
    46% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
    72% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
    75% { transform: rotate(var(--eye-rot, 24deg)) scaleY(0.06); }
    78% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
  }

  .visitor-eye.left { --eye-rot: 24deg; }
  .visitor-eye.right { --eye-rot: -24deg; }

  @keyframes visitor-third {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 1; }
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

  /* v2: Classic Roswell Grey alien with smooth pearlescent silver skin,
     giant star-reflecting obsidian eyes, glowing cyan telepathy node, and cosmic aura */
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
    background: radial-gradient(circle, rgba(56, 189, 248, 0.25) 0 40%, transparent 70%);
    box-shadow: 0 0 16px rgba(0, 240, 255, 0.3);
    animation: visitorc-aura 4.5s ease-in-out infinite;
  }

  /* Pearlescent grey-silver head */
  .visitorc-head {
    position: relative;
    width: 58px;
    height: 70px;
    border-radius: 50% 50% 46% 46% / 62% 62% 38% 38%;
    background: linear-gradient(180deg, #e2e8f0 0%, #94a3b8 50%, #475569 100%);
    border: 1px solid #cbd5e1;
    box-shadow:
      inset 0 6px 10px rgba(255, 255, 255, 0.6),
      0 4px 14px rgba(0, 0, 0, 0.8);
    transform-origin: center 80%;
    animation: visitorc-tilt 6.5s ease-in-out infinite;
  }

  /* Deep glossy obsidian almond eyes with specular starfield */
  .visitorc-eye {
    position: absolute;
    top: 26px;
    width: 19px;
    height: 30px;
    border-radius: 52% 48% 50% 50% / 68% 68% 32% 32%;
    background: radial-gradient(circle at 34% 28%, #ffffff 0 12%, #38bdf8 20%, #09090b 45%);
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.4), 0 0 8px rgba(0, 0, 0, 0.9);
    animation: visitorc-blink 4.8s ease-in-out infinite;
  }

  .visitorc-eye.left {
    left: 5px;
    transform: rotate(24deg);
  }

  .visitorc-eye.right {
    right: 5px;
    transform: rotate(-24deg);
  }

  /* Slit nostrils */
  .visitorc-nostril {
    position: absolute;
    bottom: 12px;
    width: 2px;
    height: 3px;
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
    width: 3px;
    height: 3px;
    margin-left: -1.5px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 8px #00f0ff, 0 0 12px #38bdf8;
    animation: visitorc-third 4.5s ease-in-out infinite;
  }

  @keyframes visitorc-aura {
    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.94); }
    50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
  }

  @keyframes visitorc-tilt {
    0%, 100% { transform: rotate(-4deg); }
    45% { transform: rotate(5deg); }
    70% { transform: rotate(2deg); }
  }

  @keyframes visitorc-blink {
    0%, 40%, 100% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
    43% { transform: rotate(var(--eye-rot, 24deg)) scaleY(0.06); }
    46% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
    72% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
    75% { transform: rotate(var(--eye-rot, 24deg)) scaleY(0.06); }
    78% { transform: rotate(var(--eye-rot, 24deg)) scaleY(1); }
  }

  .visitorc-eye.left { --eye-rot: 24deg; }
  .visitorc-eye.right { --eye-rot: -24deg; }

  @keyframes visitorc-third {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
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
