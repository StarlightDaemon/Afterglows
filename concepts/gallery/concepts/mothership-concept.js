const mothershipStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mship {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: linear-gradient(180deg, #000 0%, #010401 60%, #021002 100%);
  }

  .mship::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 10% 76%, rgba(215, 255, 220, 0.6) 0 1px, transparent 1.4px),
      radial-gradient(circle at 88% 68%, rgba(215, 255, 220, 0.5) 0 1px, transparent 1.4px),
      radial-gradient(circle at 46% 84%, rgba(215, 255, 220, 0.4) 0 1px, transparent 1.4px),
      radial-gradient(circle at 70% 92%, rgba(215, 255, 220, 0.35) 0 1px, transparent 1.4px);
    pointer-events: none;
  }

  .mship-hull {
    position: absolute;
    top: 0;
    left: -12px;
    right: -12px;
    height: 44px;
    clip-path: polygon(0 0, 100% 0, 82% 100%, 18% 100%);
    background: linear-gradient(180deg, #030a04 0%, #071408 70%, #0d2410 100%);
    box-shadow: inset 0 -4px 10px rgba(0, 204, 0, 0.12);
    animation: mship-drift 9s ease-in-out infinite;
  }

  .mship-hull::after {
    content: '';
    position: absolute;
    left: 18%;
    right: 18%;
    bottom: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(120, 255, 150, 0.5), transparent);
  }

  .mship-port {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 1px;
    background: rgba(180, 255, 195, 0.9);
    opacity: 0.1;
    animation: mship-port 3.8s linear infinite;
  }

  .mship-port.p1 { top: 12px; left: 18px; animation-delay: 0s; }
  .mship-port.p2 { top: 12px; left: 34px; animation-delay: 0.35s; }
  .mship-port.p3 { top: 12px; left: 50px; animation-delay: 0.7s; }
  .mship-port.p4 { top: 12px; left: 66px; animation-delay: 1.05s; }
  .mship-port.p5 { top: 12px; left: 82px; animation-delay: 1.4s; }
  .mship-port.p6 { top: 24px; left: 26px; animation-delay: 1.9s; }
  .mship-port.p7 { top: 24px; left: 44px; animation-delay: 2.25s; }
  .mship-port.p8 { top: 24px; left: 62px; animation-delay: 2.6s; }
  .mship-port.p9 { top: 24px; left: 78px; animation-delay: 2.95s; }

  .mship-hatch {
    position: absolute;
    top: 38px;
    left: 50%;
    width: 26px;
    height: 8px;
    margin-left: -13px;
    border-radius: 0 0 6px 6px;
    background: linear-gradient(180deg, rgba(200, 255, 210, 0.9), rgba(0, 204, 0, 0.35));
    box-shadow: 0 0 12px rgba(140, 255, 165, 0.6);
    transform-origin: top center;
    animation: mship-hatch 7.5s ease-in-out infinite;
  }

  .mship-beacon {
    position: absolute;
    top: 44px;
    left: 50%;
    width: 2px;
    height: 40px;
    margin-left: -1px;
    background: linear-gradient(180deg, rgba(150, 255, 175, 0.6), transparent);
    filter: blur(0.5px);
    animation: mship-beacon 7.5s ease-in-out infinite;
  }

  .mship-drone {
    position: absolute;
    top: 48px;
    left: 50%;
    width: 4px;
    height: 3px;
    border-radius: 50%;
    background: #c8ffce;
    box-shadow: 0 0 5px rgba(180, 255, 195, 0.8);
    opacity: 0;
    animation: mship-drone 7.5s ease-in infinite;
  }

  .mship-drone.d2 { animation-delay: 1.1s; }
  .mship-drone.d3 { animation-delay: 2.3s; }

  @keyframes mship-drift {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(5px); }
  }

  @keyframes mship-port {
    0%, 100% { opacity: 0.12; }
    8% { opacity: 1; box-shadow: 0 0 5px rgba(180, 255, 195, 0.7); }
    24% { opacity: 0.12; box-shadow: none; }
  }

  @keyframes mship-hatch {
    0%, 18%, 92%, 100% { transform: scaleX(0.1); opacity: 0.15; }
    30%, 78% { transform: scaleX(1); opacity: 1; }
  }

  @keyframes mship-beacon {
    0%, 20%, 94%, 100% { opacity: 0; }
    32%, 76% { opacity: 0.8; }
  }

  @keyframes mship-drone {
    0%, 30% { opacity: 0; transform: translate(0, 0); }
    36% { opacity: 1; }
    62% { opacity: 1; transform: translate(-30px, 34px); }
    74%, 100% { opacity: 0; transform: translate(-44px, 46px); }
  }

  .mship-drone.d2 {
    animation-name: mship-drone-right;
  }

  @keyframes mship-drone-right {
    0%, 30% { opacity: 0; transform: translate(0, 0); }
    36% { opacity: 1; }
    62% { opacity: 1; transform: translate(28px, 30px); }
    74%, 100% { opacity: 0; transform: translate(40px, 44px); }
  }
`;

class ConceptMothership extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${mothershipStyles}</style>
      <div class="mship">
        <div class="mship-hull"></div>
        <div class="mship-port p1"></div>
        <div class="mship-port p2"></div>
        <div class="mship-port p3"></div>
        <div class="mship-port p4"></div>
        <div class="mship-port p5"></div>
        <div class="mship-port p6"></div>
        <div class="mship-port p7"></div>
        <div class="mship-port p8"></div>
        <div class="mship-port p9"></div>
        <div class="mship-hatch"></div>
        <div class="mship-beacon"></div>
        <div class="mship-drone d1"></div>
        <div class="mship-drone d2"></div>
        <div class="mship-drone d3"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-mothership')) {
  customElements.define('concept-mothership', ConceptMothership);
}
