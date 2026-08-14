const submarineStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A patrol boat holding depth: hull bobs on a slow swell, the prop
     churns a bubble wake, the periscope sweeps, and a sonar ping
     blooms from the bow every few seconds. */
  .sub {
    width: 116px;
    height: 90px;
    position: relative;
  }

  .sub-boat {
    position: absolute;
    left: 4px;
    top: 30px;
    width: 108px;
    height: 40px;
    animation: sub-bob 5s ease-in-out infinite;
  }

  @keyframes sub-bob {
    0%, 100% { transform: translateY(0) rotate(0.6deg); }
    50% { transform: translateY(-5px) rotate(-1deg); }
  }

  /* Hull: rounded capsule, bow to the left. */
  .sub-hull {
    position: absolute;
    left: 0;
    top: 14px;
    width: 92px;
    height: 24px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 14px 10px 10px 14px / 12px 10px 10px 12px;
    background: linear-gradient(180deg, rgba(0, 70, 14, 0.5), rgba(0, 30, 6, 0.75));
    box-shadow: inset 0 -5px 8px rgba(0, 204, 0, 0.15);
  }

  /* Portholes glowing along the hull. */
  .sub-port {
    position: absolute;
    top: 22px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.9);
    background: rgba(0, 204, 0, 0.5);
    animation: sub-port 2.4s ease-in-out infinite;
  }

  .sub-port.p1 { left: 18px; }
  .sub-port.p2 { left: 36px; animation-delay: -0.8s; }
  .sub-port.p3 { left: 54px; animation-delay: -1.6s; }

  @keyframes sub-port {
    0%, 100% { box-shadow: 0 0 2px rgba(0, 204, 0, 0.3); }
    50% { box-shadow: 0 0 7px rgba(0, 204, 0, 0.9); }
  }

  /* Conning tower and sweeping periscope. */
  .sub-tower {
    position: absolute;
    left: 34px;
    top: 2px;
    width: 24px;
    height: 14px;
    border: 2px solid var(--accent, #00cc00);
    border-bottom: none;
    border-radius: 6px 6px 0 0;
    background: rgba(0, 50, 10, 0.6);
  }

  .sub-scope {
    position: absolute;
    left: 44px;
    top: -8px;
    width: 2px;
    height: 10px;
    background: rgba(140, 255, 170, 0.9);
    transform-origin: bottom center;
    animation: sub-scope 5s ease-in-out infinite;
  }

  .sub-scope::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 2px;
    background: rgba(140, 255, 170, 0.9);
  }

  @keyframes sub-scope {
    0%, 35%, 100% { transform: rotate(0deg); }
    50%, 70% { transform: rotate(-14deg); }
  }

  /* Propeller: two blades alternating squash to fake rotation. */
  .sub-prop {
    position: absolute;
    left: 94px;
    top: 18px;
    width: 6px;
    height: 16px;
    animation: sub-prop 0.5s linear infinite;
  }

  .sub-prop::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: rgba(140, 255, 170, 0.85);
  }

  @keyframes sub-prop {
    0% { transform: scaleY(1); opacity: 0.9; }
    50% { transform: scaleY(0.2); opacity: 0.6; }
    100% { transform: scaleY(1); opacity: 0.9; }
  }

  /* Wake bubbles streaming off the prop. */
  .sub-wake {
    position: absolute;
    left: 102px;
    top: 24px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    border: 1px solid rgba(190, 255, 205, 0.75);
    opacity: 0;
    animation: sub-wake 1.6s linear infinite;
  }

  .sub-wake.w2 { animation-delay: -0.5s; top: 20px; }
  .sub-wake.w3 { animation-delay: -1.1s; top: 28px; }

  @keyframes sub-wake {
    0% { transform: translate(0, 0) scale(0.6); opacity: 0.9; }
    100% { transform: translate(14px, -12px) scale(1.2); opacity: 0; }
  }

  /* Sonar ping from the bow. */
  .sub-ping {
    position: absolute;
    left: 0;
    top: 24px;
    width: 14px;
    height: 14px;
    margin: -7px;
    border: 1px solid rgba(140, 255, 170, 0.9);
    border-radius: 50%;
    opacity: 0;
    animation: sub-ping 3.4s ease-out infinite;
  }

  .sub-ping.g2 { animation-delay: 0.35s; }

  @keyframes sub-ping {
    0%, 8% { transform: scale(0.3); opacity: 0; }
    12% { opacity: 0.9; }
    45% { transform: scale(2.6); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Depth motes drifting past to sell forward motion. */
  .sub-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.6);
    animation: sub-mote linear infinite;
  }

  .sub-mote.m1 { top: 14px; animation-duration: 3.2s; }
  .sub-mote.m2 { top: 56px; animation-duration: 4.1s; animation-delay: -1.7s; }
  .sub-mote.m3 { top: 78px; animation-duration: 3.6s; animation-delay: -2.4s; }

  @keyframes sub-mote {
    0% { left: 112px; opacity: 0; }
    12% { opacity: 0.8; }
    88% { opacity: 0.8; }
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

  /* v2: Deep-ocean exploration submersible with high-visibility yellow hull,
     illuminated cyan portholes, red beacon scope, brass propeller,
     aerated bubble wake, and bright acoustic cyan sonar pings. */
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
    animation: subc-bob 5s ease-in-out infinite;
  }

  @keyframes subc-bob {
    0%, 100% { transform: translateY(0) rotate(0.6deg); }
    50% { transform: translateY(-5px) rotate(-1deg); }
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
    animation: subc-port 2.4s ease-in-out infinite;
  }

  .subc-port.p1 { left: 18px; }
  .subc-port.p2 { left: 36px; animation-delay: -0.8s; }
  .subc-port.p3 { left: 54px; animation-delay: -1.6s; }

  @keyframes subc-port {
    0%, 100% { box-shadow: 0 0 4px #00f0ff; }
    50% { box-shadow: 0 0 10px #00f0ff, 0 0 16px rgba(0, 240, 255, 0.8); }
  }

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
    width: 2px;
    height: 10px;
    background: #e2e8f0;
    transform-origin: bottom center;
    animation: subc-scope 5s ease-in-out infinite;
  }

  .subc-scope::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 6px #ef4444;
  }

  @keyframes subc-scope {
    0%, 35%, 100% { transform: rotate(0deg); }
    50%, 70% { transform: rotate(-14deg); }
  }

  /* Brass screw propeller */
  .subc-prop {
    position: absolute;
    left: 94px;
    top: 18px;
    width: 6px;
    height: 16px;
    animation: subc-prop 0.5s linear infinite;
  }

  .subc-prop::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: linear-gradient(180deg, #fde047 0%, #d97706 100%);
    box-shadow: 0 0 4px #eab308;
  }

  @keyframes subc-prop {
    0% { transform: scaleY(1); opacity: 0.95; }
    50% { transform: scaleY(0.2); opacity: 0.6; }
    100% { transform: scaleY(1); opacity: 0.95; }
  }

  /* Cavitating bubble wake */
  .subc-wake {
    position: absolute;
    left: 102px;
    top: 24px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    border: 1px solid #bae6fd;
    background: rgba(224, 242, 254, 0.7);
    box-shadow: 0 0 4px #38bdf8;
    opacity: 0;
    animation: subc-wake 1.6s linear infinite;
  }

  .subc-wake.w2 { animation-delay: -0.5s; top: 20px; }
  .subc-wake.w3 { animation-delay: -1.1s; top: 28px; }

  @keyframes subc-wake {
    0% { transform: translate(0, 0) scale(0.6); opacity: 0.9; }
    100% { transform: translate(14px, -12px) scale(1.3); opacity: 0; }
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
    box-shadow: 0 0 6px rgba(0, 240, 255, 0.8);
    opacity: 0;
    animation: subc-ping 3.4s ease-out infinite;
  }

  .subc-ping.g2 { animation-delay: 0.35s; }

  @keyframes subc-ping {
    0%, 8% { transform: scale(0.3); opacity: 0; }
    12% { opacity: 1; }
    45% { transform: scale(2.8); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Marine snow motes */
  .subc-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(186, 230, 253, 0.6);
    animation: subc-mote linear infinite;
  }

  .subc-mote.m1 { top: 14px; animation-duration: 3.2s; }
  .subc-mote.m2 { top: 56px; animation-duration: 4.1s; animation-delay: -1.7s; }
  .subc-mote.m3 { top: 78px; animation-duration: 3.6s; animation-delay: -2.4s; }

  @keyframes subc-mote {
    0% { left: 112px; opacity: 0; }
    12% { opacity: 0.8; }
    88% { opacity: 0.8; }
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
