const submarineStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sub {
    width: 116px;
    height: 90px;
    position: relative;
    overflow: hidden;
  }

  .sub-boat {
    position: absolute;
    left: 4px;
    top: 30px;
    width: 108px;
    height: 40px;
    animation: sub-cruise 1.8s ease-in-out infinite alternate;
  }

  @keyframes sub-cruise {
    0% { transform: translate(-16px, 8px) rotate(-8deg); }
    50% { transform: translate(4px, -4px) rotate(2deg); }
    100% { transform: translate(16px, -10px) rotate(8deg); }
  }

  /* Hull: rounded capsule, bow to the left. */
  .sub-hull {
    position: absolute;
    left: 0;
    top: 14px;
    width: 92px;
    height: 24px;
    border: 2px solid #00ff66;
    border-radius: 14px 10px 10px 14px / 12px 10px 10px 12px;
    background: linear-gradient(180deg, rgba(0, 70, 14, 0.8), rgba(0, 30, 6, 0.95));
    box-shadow: inset 0 -5px 8px rgba(0, 255, 100, 0.3), 0 0 10px rgba(0, 255, 100, 0.3);
  }

  /* Portholes glowing along the hull. */
  .sub-port {
    position: absolute;
    top: 22px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    background: #00ff66;
    box-shadow: 0 0 6px #00ff66;
  }

  .sub-port.p1 { left: 18px; }
  .sub-port.p2 { left: 36px; }
  .sub-port.p3 { left: 54px; }

  /* Conning tower and sweeping periscope. */
  .sub-tower {
    position: absolute;
    left: 34px;
    top: 2px;
    width: 24px;
    height: 14px;
    border: 2px solid #00ff66;
    border-bottom: none;
    border-radius: 6px 6px 0 0;
    background: rgba(0, 50, 10, 0.8);
  }

  .sub-scope {
    position: absolute;
    left: 44px;
    top: -8px;
    width: 2.5px;
    height: 12px;
    background: #ffffff;
    transform-origin: bottom center;
    animation: sub-scope 1.4s ease-in-out infinite alternate;
  }

  .sub-scope::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 3px;
    background: #00ff66;
  }

  @keyframes sub-scope {
    0% { transform: rotate(-12deg); }
    100% { transform: rotate(12deg); }
  }

  /* Propeller */
  .sub-prop {
    position: absolute;
    left: 94px;
    top: 18px;
    width: 6px;
    height: 16px;
    transform-origin: center center;
    animation: sub-prop-spin 0.4s linear infinite;
  }

  .sub-prop::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
  }

  @keyframes sub-prop-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Wake bubbles */
  .sub-wake {
    position: absolute;
    left: 102px;
    top: 24px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    background: rgba(0, 255, 100, 0.6);
    box-shadow: 0 0 6px #00ff66;
    animation: sub-wake 1.0s ease-out infinite;
  }

  .sub-wake.w2 { animation-delay: -0.33s; top: 20px; }
  .sub-wake.w3 { animation-delay: -0.66s; top: 28px; }

  @keyframes sub-wake {
    0% { transform: translate(0, 0) scale(0.6); opacity: 1; }
    100% { transform: translate(32px, -16px) scale(1.6); opacity: 0; }
  }

  /* Sonar ping from the bow. */
  .sub-ping {
    position: absolute;
    left: 0;
    top: 24px;
    width: 14px;
    height: 14px;
    margin: -7px;
    border: 1.5px solid #00ff66;
    border-radius: 50%;
    box-shadow: 0 0 8px #00ff66;
    animation: sub-ping 1.2s ease-out infinite;
  }

  .sub-ping.g2 { animation-delay: 0.6s; }

  @keyframes sub-ping {
    0% { transform: scale(0.3); opacity: 1; }
    100% { transform: scale(2.8); opacity: 0; }
  }

  /* Depth motes */
  .sub-mote {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #00ff66;
    animation: sub-mote linear infinite;
  }

  .sub-mote.m1 { top: 14px; animation-duration: 2.0s; }
  .sub-mote.m2 { top: 56px; animation-duration: 2.6s; animation-delay: -1.0s; }
  .sub-mote.m3 { top: 78px; animation-duration: 2.2s; animation-delay: -1.5s; }

  @keyframes sub-mote {
    0% { left: 112px; opacity: 1; }
    100% { left: -4px; opacity: 0; }
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

  /* v2: Deep-ocean exploration submersible with high-visibility yellow hull */
  .subc {
    width: 116px;
    height: 90px;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #032035 0%, #011020 60%, #01060e 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .subc-boat {
    position: absolute;
    left: 4px;
    top: 30px;
    width: 108px;
    height: 40px;
    animation: subc-cruise 1.8s ease-in-out infinite alternate;
  }

  @keyframes subc-cruise {
    0% { transform: translate(-16px, 8px) rotate(-8deg); }
    50% { transform: translate(4px, -4px) rotate(2deg); }
    100% { transform: translate(16px, -10px) rotate(8deg); }
  }

  /* High-visibility deep-sea exploration yellow & titanium hull */
  .subc-hull {
    position: absolute;
    left: 0;
    top: 14px;
    width: 92px;
    height: 24px;
    border: 1.5px solid #facc15;
    border-radius: 14px 10px 10px 14px / 12px 10px 10px 12px;
    background: linear-gradient(180deg, #f59e0b 0%, #d97706 45%, #78350f 85%, #1e293b 100%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.4);
  }

  /* Illuminated cyan portholes */
  .subc-port {
    position: absolute;
    top: 22px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1.2px solid #ffffff;
    background: #00f0ff;
    box-shadow: 0 0 8px #00f0ff;
  }

  .subc-port.p1 { left: 18px; }
  .subc-port.p2 { left: 36px; }
  .subc-port.p3 { left: 54px; }

  /* Conning tower */
  .subc-tower {
    position: absolute;
    left: 34px;
    top: 2px;
    width: 24px;
    height: 14px;
    border: 1.5px solid #facc15;
    border-bottom: none;
    border-radius: 6px 6px 0 0;
    background: linear-gradient(180deg, #f59e0b 0%, #b45309 100%);
  }

  /* Periscope with flashing red beacon */
  .subc-scope {
    position: absolute;
    left: 44px;
    top: -8px;
    width: 2.5px;
    height: 12px;
    background: #e2e8f0;
    transform-origin: bottom center;
    animation: subc-scope 1.4s ease-in-out infinite alternate;
  }

  .subc-scope::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 6px #ef4444;
  }

  @keyframes subc-scope {
    0% { transform: rotate(-12deg); }
    100% { transform: rotate(12deg); }
  }

  /* Brass screw propeller */
  .subc-prop {
    position: absolute;
    left: 94px;
    top: 18px;
    width: 6px;
    height: 16px;
    transform-origin: center center;
    animation: subc-prop-spin 0.4s linear infinite;
  }

  .subc-prop::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: linear-gradient(180deg, #fde047 0%, #d97706 100%);
    box-shadow: 0 0 6px #eab308;
  }

  @keyframes subc-prop-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Cavitating bubble wake */
  .subc-wake {
    position: absolute;
    left: 102px;
    top: 24px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid #bae6fd;
    background: rgba(224, 242, 254, 0.8);
    box-shadow: 0 0 6px #38bdf8;
    animation: subc-wake 1.0s ease-out infinite;
  }

  .subc-wake.w2 { animation-delay: -0.33s; top: 20px; }
  .subc-wake.w3 { animation-delay: -0.66s; top: 28px; }

  @keyframes subc-wake {
    0% { transform: translate(0, 0) scale(0.6); opacity: 1; }
    100% { transform: translate(32px, -16px) scale(1.6); opacity: 0; }
  }

  /* Acoustic sonar ping rings */
  .subc-ping {
    position: absolute;
    left: 0;
    top: 24px;
    width: 14px;
    height: 14px;
    margin: -7px;
    border: 1.5px solid #00f0ff;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 240, 255, 0.9);
    animation: subc-ping 1.2s ease-out infinite;
  }

  .subc-ping.g2 { animation-delay: 0.6s; }

  @keyframes subc-ping {
    0% { transform: scale(0.3); opacity: 1; }
    100% { transform: scale(2.8); opacity: 0; }
  }

  /* Marine snow motes */
  .subc-mote {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 4px #00f0ff;
    animation: subc-mote linear infinite;
  }

  .subc-mote.m1 { top: 14px; animation-duration: 2.0s; }
  .subc-mote.m2 { top: 56px; animation-duration: 2.6s; animation-delay: -1.0s; }
  .subc-mote.m3 { top: 78px; animation-duration: 2.2s; animation-delay: -1.5s; }

  @keyframes subc-mote {
    0% { left: 112px; opacity: 1; }
    100% { left: -4px; opacity: 0; }
  }
  `,
};

const submarineMarkup = {
  v1: `
      <div class="sub">
        <div class="sub-mote m1"></div>
        <div class="sub-mote m2"></div>
        <div class="sub-mote m3"></div>
        <div class="sub-boat">
          <div class="sub-scope"></div>
          <div class="sub-tower"></div>
          <div class="sub-hull"></div>
          <div class="sub-port p1"></div>
          <div class="sub-port p2"></div>
          <div class="sub-port p3"></div>
          <div class="sub-prop"></div>
          <div class="sub-wake"></div>
          <div class="sub-wake w2"></div>
          <div class="sub-wake w3"></div>
          <div class="sub-ping"></div>
          <div class="sub-ping g2"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="subc">
        <div class="subc-mote m1"></div>
        <div class="subc-mote m2"></div>
        <div class="subc-mote m3"></div>
        <div class="subc-boat">
          <div class="subc-scope"></div>
          <div class="subc-tower"></div>
          <div class="subc-hull"></div>
          <div class="subc-port p1"></div>
          <div class="subc-port p2"></div>
          <div class="subc-port p3"></div>
          <div class="subc-prop"></div>
          <div class="subc-wake"></div>
          <div class="subc-wake w2"></div>
          <div class="subc-wake w3"></div>
          <div class="subc-ping"></div>
          <div class="subc-ping g2"></div>
        </div>
      </div>
    `,
};

class ConceptSubmarine extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${submarineStyles[version] || submarineStyles.v2}</style>${submarineMarkup[version] || submarineMarkup.v2}`;
  }
}

if (!customElements.get('concept-submarine')) {
  customElements.define('concept-submarine', ConceptSubmarine);
}
