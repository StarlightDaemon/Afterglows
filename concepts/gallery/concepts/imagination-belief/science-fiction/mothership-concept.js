const mothershipStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ms {
    width: 104px;
    height: 96px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 204, 0, 0.25);
    box-sizing: border-box;
    background: linear-gradient(180deg, #010b04, #04180a 70%, #062310);
  }

  .ms-ship {
    position: absolute;
    top: -10px;
    left: 50%;
    width: 150px;
    height: 52px;
    margin-left: -75px;
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(180deg, #04180a 30%, rgba(0, 90, 20, 0.85) 60%, rgba(0, 190, 45, 0.5) 88%, rgba(150, 255, 180, 0.55));
    box-shadow: 0 4px 14px rgba(0, 255, 100, 0.5);
    animation: ms-loom 2.4s ease-in-out infinite alternate;
  }

  @keyframes ms-loom {
    0% { transform: translate(-14px, -4px) rotate(-4deg); }
    100% { transform: translate(14px, 4px) rotate(4deg); }
  }

  .ms-ring {
    position: absolute;
    left: 50%;
    border: 1px solid rgba(0, 204, 0, 0.35);
    border-radius: 50%;
  }

  .ms-ring.r1 {
    width: 112px;
    height: 34px;
    margin-left: -56px;
    bottom: -12px;
  }

  .ms-ring.r2 {
    width: 72px;
    height: 22px;
    margin-left: -36px;
    bottom: -7px;
  }

  .ms-rim {
    position: absolute;
    bottom: 6px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #b8ffc6;
    box-shadow: 0 0 6px #00ff66;
    animation: ms-rimlight 0.8s linear infinite;
  }

  .ms-rim.l1 { left: 15%; animation-delay: 0s; }
  .ms-rim.l2 { left: 32%; bottom: 3px; animation-delay: -0.15s; }
  .ms-rim.l3 { left: 49%; bottom: 2px; animation-delay: -0.3s; }
  .ms-rim.l4 { left: 66%; bottom: 3px; animation-delay: -0.45s; }
  .ms-rim.l5 { left: 83%; animation-delay: -0.6s; }

  @keyframes ms-rimlight {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  .ms-core {
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 14px;
    height: 12px;
    margin-left: -7px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 60%, #ffffff, rgba(0, 204, 0, 0.9) 55%, rgba(0, 204, 0, 0) 75%);
    box-shadow: 0 0 14px #00ff66;
  }

  .ms-beam {
    position: absolute;
    left: 50%;
    top: 32px;
    width: 14px;
    height: 52px;
    margin-left: -7px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(0, 255, 100, 0.7) 60%, rgba(0, 204, 0, 0.2));
    box-shadow: 0 0 12px #00ff66;
    transform-origin: top center;
    z-index: 1;
    animation: ms-beam-sweep 1.6s ease-in-out infinite alternate;
  }

  @keyframes ms-beam-sweep {
    0% { transform: translateX(-16px) rotate(-8deg) scaleY(0.9); opacity: 0.8; }
    100% { transform: translateX(16px) rotate(8deg) scaleY(1.05); opacity: 1; }
  }

  .ms-impact {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 36px;
    height: 10px;
    margin-left: -18px;
    border-radius: 50%;
    background: radial-gradient(closest-side, #ffffff, rgba(0, 255, 100, 0.8), rgba(0, 204, 0, 0) 80%);
    box-shadow: 0 0 16px #00ff66;
    z-index: 3;
    animation: ms-impact-sweep 1.6s ease-in-out infinite alternate;
  }

  @keyframes ms-impact-sweep {
    0% { transform: translateX(-16px) scale(0.8); opacity: 0.7; }
    100% { transform: translateX(16px) scale(1.25); opacity: 1; }
  }

  .ms-city {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 18px;
    z-index: 2;
    animation: ms-cityflash 8s linear infinite;
  }

  .ms-city span {
    position: absolute;
    bottom: 0;
    background:
      repeating-linear-gradient(0deg, rgba(140, 255, 170, 0.3) 0 1px, transparent 1px 4px),
      #052a10;
  }

  .ms-city .b1 { left: 2px; width: 12px; height: 13px; }
  .ms-city .b2 { left: 17px; width: 9px; height: 9px; }
  .ms-city .b3 { left: 29px; width: 14px; height: 16px; }
  .ms-city .b4 { left: 47px; width: 10px; height: 8px; }
  .ms-city .b5 { left: 60px; width: 13px; height: 12px; }
  .ms-city .b6 { left: 77px; width: 11px; height: 15px; }
  .ms-city .b7 { left: 91px; width: 9px; height: 10px; }

  @keyframes ms-cityflash {
    0%, 63% { filter: brightness(1); }
    66% { filter: brightness(1.8); }
    70% { filter: brightness(1.3); }
    74% { filter: brightness(1.9); }
    80% { filter: brightness(1.5); }
    85%, 100% { filter: brightness(1); }
  }

  .ms-cloud {
    position: absolute;
    height: 4px;
    border-radius: 3px;
    background: rgba(160, 255, 180, 0.22);
    z-index: 4;
    opacity: 0;
  }

  .ms-cloud.c1 {
    top: 36px;
    width: 30px;
    animation: ms-cloud 14s linear infinite;
  }

  .ms-cloud.c2 {
    top: 43px;
    width: 20px;
    height: 3px;
    animation: ms-cloud 19s linear infinite;
    animation-delay: -7s;
  }

  @keyframes ms-cloud {
    0% { transform: translateX(-32px); opacity: 0; }
    10% { opacity: 0.8; }
    90% { opacity: 0.8; }
    100% { transform: translateX(122px); opacity: 0; }
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

  /* v2: Star dreadnought mothership with gunmetal hull, cyan running lights,
     devastating blue-white plasma superlaser beam, and glowing city skyline */
  .msc {
    width: 104px;
    height: 96px;
    position: relative;
    overflow: hidden;
    border: 1.5px solid #38bdf8;
    border-radius: 6px;
    box-sizing: border-box;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
  }

  /* Colossal gunmetal dreadnought hull */
  .msc-ship {
    position: absolute;
    top: -10px;
    left: 50%;
    width: 150px;
    height: 52px;
    margin-left: -75px;
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(180deg, #09090b 20%, #1e293b 50%, #334155 80%, #94a3b8 100%);
    border: 1px solid #475569;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.9);
    animation: msc-loom 2.4s ease-in-out infinite alternate;
  }

  @keyframes msc-loom {
    0% { transform: translate(-14px, -4px) rotate(-4deg); }
    100% { transform: translate(14px, 4px) rotate(4deg); }
  }

  /* Hull armor rings */
  .msc-ring {
    position: absolute;
    left: 50%;
    border: 1px solid rgba(56, 189, 248, 0.4);
    border-radius: 50%;
  }

  .msc-ring.r1 {
    width: 112px;
    height: 34px;
    margin-left: -56px;
    bottom: -12px;
  }

  .msc-ring.r2 {
    width: 72px;
    height: 22px;
    margin-left: -36px;
    bottom: -7px;
  }

  /* Cyan perimeter running beacons */
  .msc-rim {
    position: absolute;
    bottom: 6px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 6px #00f0ff;
    animation: msc-rimlight 0.8s linear infinite;
  }

  .msc-rim.l1 { left: 15%; animation-delay: 0s; }
  .msc-rim.l2 { left: 32%; bottom: 3px; animation-delay: -0.15s; }
  .msc-rim.l3 { left: 49%; bottom: 2px; animation-delay: -0.3s; }
  .msc-rim.l4 { left: 66%; bottom: 3px; animation-delay: -0.45s; }
  .msc-rim.l5 { left: 83%; animation-delay: -0.6s; }

  @keyframes msc-rimlight {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  /* Superlaser charging aperture */
  .msc-core {
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 14px;
    height: 12px;
    margin-left: -7px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 60%, #ffffff 0%, #38bdf8 40%, #ea580c 80%, transparent 100%);
    box-shadow: 0 0 16px #00f0ff;
  }

  /* Incandescent plasma superlaser beam */
  .msc-beam {
    position: absolute;
    left: 50%;
    top: 32px;
    width: 14px;
    height: 52px;
    margin-left: -7px;
    background: linear-gradient(180deg, #ffffff 0%, #38bdf8 60%, rgba(56, 189, 248, 0.2) 100%);
    box-shadow: 0 0 16px #00f0ff;
    transform-origin: top center;
    z-index: 1;
    animation: msc-beam-sweep 1.6s ease-in-out infinite alternate;
  }

  @keyframes msc-beam-sweep {
    0% { transform: translateX(-16px) rotate(-8deg) scaleY(0.9); opacity: 0.85; }
    100% { transform: translateX(16px) rotate(8deg) scaleY(1.05); opacity: 1; }
  }

  /* Superlaser impact explosion bloom */
  .msc-impact {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 36px;
    height: 10px;
    margin-left: -18px;
    border-radius: 50%;
    background: radial-gradient(closest-side, #ffffff 0%, #38bdf8 60%, transparent 90%);
    box-shadow: 0 0 20px #00f0ff, 0 0 30px #ea580c;
    z-index: 3;
    animation: msc-impact-sweep 1.6s ease-in-out infinite alternate;
  }

  @keyframes msc-impact-sweep {
    0% { transform: translateX(-16px) scale(0.8); opacity: 0.8; }
    100% { transform: translateX(16px) scale(1.25); opacity: 1; }
  }

  /* Metropolis skyline */
  .msc-city {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 18px;
    z-index: 2;
    animation: msc-cityflash 8s linear infinite;
  }

  .msc-city span {
    position: absolute;
    bottom: 0;
    background:
      repeating-linear-gradient(0deg, rgba(250, 204, 21, 0.6) 0 1px, transparent 1px 4px),
      #09090b;
    border: 1px solid #18181b;
  }

  .msc-city .b1 { left: 2px; width: 12px; height: 13px; }
  .msc-city .b2 { left: 17px; width: 9px; height: 9px; }
  .msc-city .b3 { left: 29px; width: 14px; height: 16px; }
  .msc-city .b4 { left: 47px; width: 10px; height: 8px; }
  .msc-city .b5 { left: 60px; width: 13px; height: 12px; }
  .msc-city .b6 { left: 77px; width: 11px; height: 15px; }
  .msc-city .b7 { left: 91px; width: 9px; height: 10px; }

  @keyframes msc-cityflash {
    0%, 63% { filter: brightness(1); }
    66% { filter: brightness(2.2); }
    70% { filter: brightness(1.4); }
    74% { filter: brightness(2.4); }
    80% { filter: brightness(1.7); }
    85%, 100% { filter: brightness(1); }
  }

  /* Drifting low clouds */
  .msc-cloud {
    position: absolute;
    height: 4px;
    border-radius: 3px;
    background: rgba(226, 232, 240, 0.3);
    z-index: 4;
    opacity: 0;
  }

  .msc-cloud.c1 {
    top: 36px;
    width: 30px;
    animation: msc-cloud 14s linear infinite;
  }

  .msc-cloud.c2 {
    top: 43px;
    width: 20px;
    height: 3px;
    animation: msc-cloud 19s linear infinite;
    animation-delay: -7s;
  }

  @keyframes msc-cloud {
    0% { transform: translateX(-32px); opacity: 0; }
    10% { opacity: 0.8; }
    90% { opacity: 0.8; }
    100% { transform: translateX(122px); opacity: 0; }
  }
  `,
};

const mothershipMarkup = {
  v1: `
      <div class="ms">
        <div class="ms-ship">
          <div class="ms-ring r1"></div>
          <div class="ms-ring r2"></div>
          <span class="ms-rim l1"></span>
          <span class="ms-rim l2"></span>
          <span class="ms-rim l3"></span>
          <span class="ms-rim l4"></span>
          <span class="ms-rim l5"></span>
          <div class="ms-core"></div>
        </div>
        <div class="ms-beam"></div>
        <div class="ms-impact"></div>
        <div class="ms-city">
          <span class="b1"></span>
          <span class="b2"></span>
          <span class="b3"></span>
          <span class="b4"></span>
          <span class="b5"></span>
          <span class="b6"></span>
          <span class="b7"></span>
        </div>
        <div class="ms-cloud c1"></div>
        <div class="ms-cloud c2"></div>
      </div>
    `,
  v2: `
      <div class="msc">
        <div class="msc-ship">
          <div class="msc-ring r1"></div>
          <div class="msc-ring r2"></div>
          <span class="msc-rim l1"></span>
          <span class="msc-rim l2"></span>
          <span class="msc-rim l3"></span>
          <span class="msc-rim l4"></span>
          <span class="msc-rim l5"></span>
          <div class="msc-core"></div>
        </div>
        <div class="msc-beam"></div>
        <div class="msc-impact"></div>
        <div class="msc-city">
          <span class="b1"></span>
          <span class="b2"></span>
          <span class="b3"></span>
          <span class="b4"></span>
          <span class="b5"></span>
          <span class="b6"></span>
          <span class="b7"></span>
        </div>
        <div class="msc-cloud c1"></div>
        <div class="msc-cloud c2"></div>
      </div>
    `,
};

class ConceptMothership extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${mothershipStyles[version] || mothershipStyles.v2}</style>${mothershipMarkup[version] || mothershipMarkup.v2}`;
  }
}

if (!customElements.get('concept-mothership')) {
  customElements.define('concept-mothership', ConceptMothership);
}
