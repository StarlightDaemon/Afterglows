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

  .sonar-basic-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid #00cc00;
    border-radius: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    animation: ping-basic 2s infinite;
  }

  .sonar-basic {
    position: relative;
    width: 100px;
    height: 100px;
  }

  @keyframes ping-basic {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 100px;
      height: 100px;
      opacity: 0;
    }
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
    background:
      radial-gradient(circle at center, rgba(0, 204, 0, 0.1) 0 8%, transparent 9%),
      linear-gradient(180deg, rgba(0, 22, 10, 0.85), rgba(0, 0, 0, 0.98));
    box-shadow: inset 0 0 18px rgba(0, 204, 0, 0.08), 0 0 10px rgba(0, 204, 0, 0.08);
  }

  .sonar-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid rgba(120, 255, 120, 0.75);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 8px rgba(120, 255, 120, 0.18);
    opacity: 0;
    animation: sonar-ping 2.8s ease-out infinite;
  }

  .sonar-ring.r2 {
    animation-delay: 0.7s;
  }

  .sonar-ring.r3 {
    animation-delay: 1.4s;
  }

  .sonar-axis {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 1px;
    height: calc(100% - 20px);
    transform: translateX(-50%);
    background: linear-gradient(180deg, transparent, rgba(0, 204, 0, 0.2), transparent);
  }

  .sonar-source {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid rgba(170, 255, 170, 0.85);
    background: #021702;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(120, 255, 120, 0.45);
  }

  .sonar-source::before,
  .sonar-source::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(170, 255, 170, 0.95), transparent);
  }

  .sonar-source::before {
    bottom: 100%;
    height: 20px;
    margin-bottom: 4px;
  }

  .sonar-source::after {
    top: 100%;
    height: 12px;
    margin-top: 4px;
    opacity: 0.4;
  }

  @keyframes sonar-ping {
    0% {
      width: 18px;
      height: 18px;
      opacity: 0.95;
      border-width: 1.5px;
    }
    100% {
      width: 94px;
      height: 94px;
      opacity: 0;
      border-width: 1px;
    }
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

  /* v3: Naval active acoustic sonar PPI scope in deep ocean navy/cyan
     with concentric range rings, brass hydrophone emitter, electric cyan acoustic wavefronts,
     and glowing target echo contacts (hostile submarine in pulsing amber-red, bathymetric reef in green). */
  .sonarc {
    width: 96px;
    height: 96px;
    position: relative;
    border-radius: 50%;
    background:
      radial-gradient(circle at center, rgba(0, 240, 255, 0.15) 0 8%, transparent 9%),
      radial-gradient(circle at center, #082f49 0%, #031726 65%, #010810 100%);
    box-shadow: inset 0 0 16px rgba(0, 229, 255, 0.25), 0 0 12px rgba(0, 229, 255, 0.2);
    border: 1.5px solid rgba(56, 189, 248, 0.5);
    overflow: hidden;
  }

  /* Concentric tactical range graticule */
  .sonarc-grid {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background:
      radial-gradient(circle at center, transparent 30%, rgba(56, 189, 248, 0.15) 30.5%, transparent 32%),
      radial-gradient(circle at center, transparent 60%, rgba(56, 189, 248, 0.15) 60.5%, transparent 62%);
  }

  /* Hydrophone bearing axes */
  .sonarc-axis-v {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 1px;
    height: calc(100% - 16px);
    transform: translateX(-50%);
    background: linear-gradient(180deg, transparent, rgba(56, 189, 248, 0.4) 30%, rgba(56, 189, 248, 0.4) 70%, transparent);
  }

  .sonarc-axis-h {
    position: absolute;
    top: 50%;
    left: 8px;
    height: 1px;
    width: calc(100% - 16px);
    transform: translateY(-50%);
    background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.4) 30%, rgba(56, 189, 248, 0.4) 70%, transparent);
  }

  /* Expanding acoustic pressure wavefronts */
  .sonarc-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    border: 1.5px solid #00f0ff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.6);
    opacity: 0;
    animation: sonarc-ping 2.8s ease-out infinite;
  }

  .sonarc-ring.r2 { animation-delay: 0.93s; }
  .sonarc-ring.r3 { animation-delay: 1.86s; }

  @keyframes sonarc-ping {
    0% {
      width: 14px;
      height: 14px;
      opacity: 1;
      border-width: 2px;
    }
    100% {
      width: 94px;
      height: 94px;
      opacity: 0;
      border-width: 1px;
    }
  }

  /* Hostile submarine target contact at bearing 045° */
  .sonarc-blip-sub {
    position: absolute;
    top: 24px;
    right: 22px;
    width: 5px;
    height: 3px;
    border-radius: 2px;
    background: #ff3b30;
    box-shadow: 0 0 8px #ff3b30, 0 0 14px rgba(255, 59, 48, 0.8);
    animation: sonarc-blip 2.8s ease-out infinite 0.7s;
  }

  /* Sea mount / reef bathymetry echo at bearing 210° */
  .sonarc-blip-reef {
    position: absolute;
    bottom: 26px;
    left: 20px;
    width: 6px;
    height: 4px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
    animation: sonarc-blip 2.8s ease-out infinite 1.2s;
  }

  @keyframes sonarc-blip {
    0%, 10% { opacity: 0; transform: scale(0.6); }
    15% { opacity: 1; transform: scale(1.3); }
    35% { opacity: 0.8; transform: scale(1); }
    80%, 100% { opacity: 0.2; transform: scale(1); }
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
    background: radial-gradient(circle at 35% 35%, #fde047, #d97706);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(251, 191, 36, 0.8);
    z-index: 2;
  }

  .sonarc-source::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
    width: 2px;
    height: 16px;
    margin-bottom: 2px;
    background: linear-gradient(180deg, #38bdf8, transparent);
  }
  `,
};

const sonarMarkup = {
  v1: `
    <div class="sonar-basic">
      <div class="sonar-basic-ring"></div>
      <div class="sonar-basic-ring" style="animation-delay:1s"></div>
    </div>
  `,
  v2: `
    <div class="sonar">
      <div class="sonar-axis"></div>
      <div class="sonar-ring r1"></div>
      <div class="sonar-ring r2"></div>
      <div class="sonar-ring r3"></div>
      <div class="sonar-source"></div>
    </div>
  `,
  v3: `
    <div class="sonarc">
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
