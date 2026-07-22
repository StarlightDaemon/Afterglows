const spiritOrbsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .orbs {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: radial-gradient(circle at 50% 62%, #041006 0%, #010401 55%, #000 100%);
  }

  .orbs-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 26px;
    background: linear-gradient(0deg, rgba(0, 204, 0, 0.1), transparent);
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 34%, rgba(235, 255, 240, 0.95) 0 18%, rgba(160, 255, 185, 0.65) 42%, rgba(60, 220, 100, 0.18) 72%, transparent 100%);
    filter: blur(0.4px);
  }

  .orb::after {
    content: '';
    position: absolute;
    inset: -60%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(140, 255, 170, 0.28), transparent 65%);
  }

  .orb.o1 {
    width: 15px;
    height: 15px;
    left: 16px;
    top: 62px;
    animation: orb-path1 7.5s ease-in-out infinite, orb-flare 5s ease-in-out infinite;
  }

  .orb.o2 {
    width: 10px;
    height: 10px;
    left: 66px;
    top: 70px;
    animation: orb-path2 9s ease-in-out infinite, orb-flare 6.4s ease-in-out infinite -2.1s;
  }

  .orb.o3 {
    width: 7px;
    height: 7px;
    left: 44px;
    top: 40px;
    animation: orb-path3 11s ease-in-out infinite, orb-flare 4.4s ease-in-out infinite -1.3s;
  }

  .orb.o4 {
    width: 5px;
    height: 5px;
    left: 80px;
    top: 30px;
    animation: orb-path4 8.2s ease-in-out infinite, orb-flare 5.8s ease-in-out infinite -3.4s;
  }

  .orb-trail {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.5);
    opacity: 0;
    animation: orb-dust 3.2s linear infinite;
  }

  .orb-trail.t1 { left: 30px; top: 74px; animation-delay: 0s; }
  .orb-trail.t2 { left: 58px; top: 52px; animation-delay: -1.1s; }
  .orb-trail.t3 { left: 78px; top: 78px; animation-delay: -2.2s; }

  @keyframes orb-path1 {
    0%, 100% { transform: translate(0, 0); }
    28% { transform: translate(26px, -22px); }
    55% { transform: translate(52px, -6px); }
    80% { transform: translate(18px, 10px); }
  }

  @keyframes orb-path2 {
    0%, 100% { transform: translate(0, 0); }
    30% { transform: translate(-24px, -30px); }
    58% { transform: translate(-40px, -4px); }
    82% { transform: translate(-10px, -16px); }
  }

  @keyframes orb-path3 {
    0%, 100% { transform: translate(0, 0); }
    26% { transform: translate(18px, 22px); }
    50% { transform: translate(-14px, 34px); }
    76% { transform: translate(-22px, 8px); }
  }

  @keyframes orb-path4 {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(-16px, 26px); }
    66% { transform: translate(-34px, 44px); }
  }

  @keyframes orb-flare {
    0%, 100% { opacity: 0.45; }
    12% { opacity: 1; }
    22% { opacity: 0.55; }
    60% { opacity: 0.85; }
  }

  @keyframes orb-dust {
    0% { opacity: 0; transform: translateY(0); }
    20% { opacity: 0.7; }
    100% { opacity: 0; transform: translateY(-18px); }
  }
`;

class ConceptSpiritOrbs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${spiritOrbsStyles}</style>
      <div class="orbs">
        <div class="orbs-floor"></div>
        <div class="orb o1"></div>
        <div class="orb o2"></div>
        <div class="orb o3"></div>
        <div class="orb o4"></div>
        <div class="orb-trail t1"></div>
        <div class="orb-trail t2"></div>
        <div class="orb-trail t3"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-spirit-orbs')) {
  customElements.define('concept-spirit-orbs', ConceptSpiritOrbs);
}
