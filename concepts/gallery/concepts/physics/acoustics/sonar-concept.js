const sonarStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .sonar-basic {
    position: relative;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border: 2px solid #00ff66;
    box-shadow: 0 0 12px rgba(0, 255, 100, 0.4);
    overflow: hidden;
  }

  .sonar-sweep {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 48px;
    height: 48px;
    transform-origin: 0% 0%;
    background: conic-gradient(from 0deg, rgba(0, 255, 100, 0.8) 0deg, rgba(0, 255, 100, 0.1) 45deg, transparent 60deg);
    animation: sonar-sweep 1.4s linear infinite;
  }

  @keyframes sonar-sweep {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .sonar-basic-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid #00ff66;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ping-basic 1.2s ease-out infinite;
  }

  @keyframes ping-basic {
    0% { width: 10px; height: 10px; opacity: 1; }
    100% { width: 90px; height: 90px; opacity: 0; }
  }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .sonar {
    width: 96px;
    height: 96px;
    position: relative;
    border-radius: 50%;
    border: 1.5px solid #00ff66;
    background:
      radial-gradient(circle at center, rgba(0, 204, 0, 0.2) 0 8%, transparent 9%),
      linear-gradient(180deg, rgba(0, 22, 10, 0.95), rgba(0, 0, 0, 0.98));
    box-shadow: inset 0 0 18px rgba(0, 255, 100, 0.25), 0 0 12px rgba(0, 255, 100, 0.35);
    overflow: hidden;
  }

  .sonar-sweep {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 48px;
    height: 48px;
    transform-origin: 0% 0%;
    background: conic-gradient(from 0deg, rgba(0, 255, 100, 0.8) 0deg, rgba(0, 255, 100, 0.15) 45deg, transparent 60deg);
    animation: sonar-sweep 1.4s linear infinite;
  }

  @keyframes sonar-sweep {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .sonar-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1.5px solid #00ff66;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 8px #00ff66;
    animation: sonar-ping 1.2s ease-out infinite;
  }

  .sonar-ring.r2 { animation-delay: 0.4s; }
  .sonar-ring.r3 { animation-delay: 0.8s; }

  .sonar-axis {
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    transform: translateX(-50%);
    background: linear-gradient(180deg, transparent, #00ff66, transparent);
  }

  .sonar-source {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1.5px solid #ffffff;
    background: #00ff66;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px #00ff66;
    z-index: 2;
  }

  @keyframes sonar-ping {
    0% { width: 12px; height: 12px; opacity: 1; }
    100% { width: 92px; height: 92px; opacity: 0; }
  }
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  /* v3: Naval active acoustic sonar PPI scope */
  .sonarc {
    width: 96px;
    height: 96px;
    position: relative;
    border-radius: 50%;
    background:
      radial-gradient(circle at center, rgba(0, 240, 255, 0.2) 0 8%, transparent 9%),
      radial-gradient(circle at center, #082f49 0%, #031726 65%, #010810 100%);
    box-shadow: inset 0 0 16px rgba(0, 229, 255, 0.35), 0 0 14px rgba(0, 229, 255, 0.4);
    border: 1.5px solid #38bdf8;
    overflow: hidden;
  }

  .sonarc-sweep {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 48px;
    height: 48px;
    transform-origin: 0% 0%;
    background: conic-gradient(from 0deg, #00f0ff 0deg, rgba(0, 240, 255, 0.2) 45deg, transparent 60deg);
    animation: sonar-sweep 1.4s linear infinite;
  }

  /* Concentric tactical range graticule */
  .sonarc-grid {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background:
      radial-gradient(circle at center, transparent 30%, rgba(56, 189, 248, 0.3) 30.5%, transparent 32%),
      radial-gradient(circle at center, transparent 60%, rgba(56, 189, 248, 0.3) 60.5%, transparent 62%);
  }

  .sonarc-axis-v {
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    transform: translateX(-50%);
    background: linear-gradient(180deg, transparent, rgba(56, 189, 248, 0.6), transparent);
  }

  .sonarc-axis-h {
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    width: 100%;
    transform: translateY(-50%);
    background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.6), transparent);
  }

  /* Expanding acoustic pressure wavefronts */
  .sonarc-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1.5px solid #00f0ff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.6);
    animation: sonarc-ping 1.2s ease-out infinite;
  }

  .sonarc-ring.r2 { animation-delay: 0.4s; }
  .sonarc-ring.r3 { animation-delay: 0.8s; }

  @keyframes sonarc-ping {
    0% { width: 12px; height: 12px; opacity: 1; }
    100% { width: 92px; height: 92px; opacity: 0; }
  }

  /* Hostile submarine target contact */
  .sonarc-blip-sub {
    position: absolute;
    top: 24px;
    right: 22px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ff3b30;
    box-shadow: 0 0 10px #ff3b30, 0 0 16px rgba(255, 59, 48, 0.9);
    animation: sonarc-sub-travel 1.8s ease-in-out infinite alternate;
  }

  @keyframes sonarc-sub-travel {
    0% { transform: translate(-24px, -14px); }
    100% { transform: translate(14px, 20px); }
  }

  .sonarc-blip-reef {
    position: absolute;
    bottom: 26px;
    left: 20px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 10px #10b981;
    animation: sonarc-reef-pulse 1.4s ease-in-out infinite alternate;
  }

  @keyframes sonarc-reef-pulse {
    0% { transform: scale(0.7) translateY(-2px); }
    100% { transform: scale(1.3) translateY(2px); }
  }

  /* Transducer central dome */
  .sonarc-source {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1.5px solid #fbbf24;
    background: radial-gradient(circle at 35% 35%, #ffffff, #d97706);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(251, 191, 36, 0.9);
    z-index: 2;
  }
  `,
};

const sonarMarkup = {
  v1: `
    <div class="sonar-basic">
      <div class="sonar-sweep"></div>
      <div class="sonar-basic-ring"></div>
      <div class="sonar-basic-ring" style="animation-delay:0.6s"></div>
    </div>
  `,
  v2: `
    <div class="sonar">
      <div class="sonar-sweep"></div>
      <div class="sonar-axis"></div>
      <div class="sonar-ring r1"></div>
      <div class="sonar-ring r2"></div>
      <div class="sonar-ring r3"></div>
      <div class="sonar-source"></div>
    </div>
  `,
  v3: `
    <div class="sonarc">
      <div class="sonarc-sweep"></div>
      <div class="sonarc-grid"></div>
      <div class="sonarc-axis-v"></div>
      <div class="sonarc-axis-h"></div>
      <div class="sonarc-ring r1"></div>
      <div class="sonarc-ring r2"></div>
      <div class="sonarc-ring r3"></div>
      <div class="sonarc-blip-sub"></div>
      <div class="sonarc-blip-reef"></div>
      <div class="sonarc-source"></div>
    </div>
  `,
};

class ConceptSonar extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${sonarStyles[version] || sonarStyles.v3}</style>${sonarMarkup[version] || sonarMarkup.v3}`;
  }
}

if (!customElements.get('concept-sonar')) {
  customElements.define('concept-sonar', ConceptSonar);
}
