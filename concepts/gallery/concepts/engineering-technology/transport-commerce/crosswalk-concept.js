const crosswalkStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Monochrome phosphor crosswalk --- */
  .cw {
    width: 92px;
    height: 96px;
    position: relative;
  }

  .cw-box {
    position: absolute;
    left: 50%;
    top: 0;
    width: 78px;
    height: 84px;
    margin-left: -39px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 40, 8, 0.6), rgba(0, 18, 4, 0.85));
  }

  .cw-pole {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 4px;
    height: 14px;
    margin-left: -2px;
    background: rgba(0, 204, 0, 0.6);
  }

  .cw-walker {
    position: absolute;
    left: 10px;
    top: 16px;
    width: 24px;
    height: 46px;
    animation: cw-walk-across 3.2s linear infinite;
  }

  @keyframes cw-walk-across {
    0% { transform: translateX(-14px); opacity: 1; }
    100% { transform: translateX(22px); opacity: 1; }
  }

  .cw-head {
    position: absolute;
    top: 0;
    left: 8px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #baffc9;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.8);
    animation: cw-headbob 0.8s ease-in-out infinite;
  }

  @keyframes cw-headbob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(2px); }
  }

  .cw-torso {
    position: absolute;
    top: 9px;
    left: 7px;
    width: 11px;
    height: 18px;
    border-radius: 4px 4px 2px 2px;
    background: #9fe8ae;
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
  }

  .cw-leg {
    position: absolute;
    top: 25px;
    left: 11px;
    width: 4px;
    height: 18px;
    border-radius: 2px;
    background: #9fe8ae;
    transform-origin: top center;
  }

  .cw-leg.front { animation: cw-leg-front 0.8s ease-in-out infinite; }
  .cw-leg.back { animation: cw-leg-back 0.8s ease-in-out infinite; }

  @keyframes cw-leg-front {
    0%, 100% { transform: rotate(28deg); }
    50% { transform: rotate(-24deg); }
  }

  @keyframes cw-leg-back {
    0%, 100% { transform: rotate(-24deg); }
    50% { transform: rotate(28deg); }
  }

  .cw-arm {
    position: absolute;
    top: 11px;
    left: 11px;
    width: 3px;
    height: 13px;
    border-radius: 2px;
    background: #7bd88f;
    transform-origin: top center;
    animation: cw-arm 0.8s ease-in-out infinite;
  }

  @keyframes cw-arm {
    0%, 100% { transform: rotate(-28deg); }
    50% { transform: rotate(26deg); }
  }

  .cw-hand {
    position: absolute;
    right: 12px;
    top: 18px;
    width: 20px;
    height: 24px;
    clip-path: polygon(
      18% 100%, 18% 42%, 6% 30%, 12% 22%, 24% 32%, 24% 12%, 34% 8%, 38% 30%,
      44% 2%, 54% 2%, 56% 30%, 62% 4%, 72% 6%, 72% 32%, 82% 14%, 92% 20%,
      84% 48%, 84% 100%);
    background: rgba(140, 255, 170, 0.9);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.8);
    opacity: 0.8;
    animation: cw-hand-wave 1.2s ease-in-out infinite;
  }

  @keyframes cw-hand-wave {
    0%, 100% { transform: rotate(-8deg) scale(0.95); }
    50% { transform: rotate(8deg) scale(1.1); }
  }

  .cw-count {
    position: absolute;
    right: 14px;
    top: 48px;
    width: 16px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    font-weight: bold;
    color: #d6ffe0;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
  }

  .cw-count::before {
    content: '';
    animation: cw-count 9s steps(1) infinite;
  }

  @keyframes cw-count {
    0% { content: ''; }
    44% { content: '9'; }
    50% { content: '8'; }
    56% { content: '7'; }
    62% { content: '6'; }
    68% { content: '5'; }
    74% { content: '4'; }
    80% { content: '3'; }
    86% { content: '2'; }
    92% { content: '1'; }
    98% { content: '0'; }
  }

  .cw-legend {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: rgba(140, 255, 170, 0.85);
  }

  .cw-legend::before {
    content: 'WALK';
    animation: cw-legend 9s steps(1) infinite;
  }

  @keyframes cw-legend {
    0% { content: 'WALK'; }
    44% { content: 'WAIT'; }
  }

  /* --- v2: Authentic Portland Orange & Lunar White pedestrian signal --- */
  .cwc {
    width: 92px;
    height: 96px;
    position: relative;
  }

  .cwc-box {
    position: absolute;
    left: 50%;
    top: 0;
    width: 78px;
    height: 84px;
    margin-left: -39px;
    border: 2px solid #2d333b;
    border-radius: 8px;
    background: #0d1117;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.6);
  }

  .cwc-pole {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 4px;
    height: 14px;
    margin-left: -2px;
    background: #30363d;
  }

  /* Walker: Crisp Lunar White */
  .cwc-walker {
    position: absolute;
    left: 10px;
    top: 16px;
    width: 24px;
    height: 46px;
    animation: cwc-walk-across 3.2s linear infinite;
  }

  @keyframes cwc-walk-across {
    0% { transform: translateX(-14px); opacity: 1; }
    100% { transform: translateX(22px); opacity: 1; }
  }

  .cwc-head {
    position: absolute;
    top: 0;
    left: 8px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
    animation: cwc-headbob 0.8s ease-in-out infinite;
  }

  @keyframes cwc-headbob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(2px); }
  }

  .cwc-torso {
    position: absolute;
    top: 9px;
    left: 7px;
    width: 11px;
    height: 18px;
    border-radius: 4px 4px 2px 2px;
    background: #f0f6fc;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
  }

  .cwc-leg {
    position: absolute;
    top: 25px;
    left: 11px;
    width: 4px;
    height: 18px;
    border-radius: 2px;
    background: #f0f6fc;
    transform-origin: top center;
  }

  .cwc-leg.front { animation: cwc-leg-front 0.8s ease-in-out infinite; }
  .cwc-leg.back { animation: cwc-leg-back 0.8s ease-in-out infinite; }

  @keyframes cwc-leg-front {
    0%, 100% { transform: rotate(28deg); }
    50% { transform: rotate(-24deg); }
  }

  @keyframes cwc-leg-back {
    0%, 100% { transform: rotate(-24deg); }
    50% { transform: rotate(28deg); }
  }

  .cwc-arm {
    position: absolute;
    top: 11px;
    left: 11px;
    width: 3px;
    height: 13px;
    border-radius: 2px;
    background: #d0d7de;
    transform-origin: top center;
    animation: cwc-arm 0.8s ease-in-out infinite;
  }

  @keyframes cwc-arm {
    0%, 100% { transform: rotate(-28deg); }
    50% { transform: rotate(26deg); }
  }

  /* Raised Hand: Radiant Portland Orange */
  .cwc-hand {
    position: absolute;
    right: 12px;
    top: 18px;
    width: 20px;
    height: 24px;
    clip-path: polygon(
      18% 100%, 18% 42%, 6% 30%, 12% 22%, 24% 32%, 24% 12%, 34% 8%, 38% 30%,
      44% 2%, 54% 2%, 56% 30%, 62% 4%, 72% 6%, 72% 32%, 82% 14%, 92% 20%,
      84% 48%, 84% 100%);
    background: #ff5e00;
    box-shadow: 0 0 12px rgba(255, 94, 0, 0.95);
    opacity: 0.9;
    animation: cwc-hand-wave 1.2s ease-in-out infinite;
  }

  @keyframes cwc-hand-wave {
    0%, 100% { transform: rotate(-8deg) scale(0.95); }
    50% { transform: rotate(8deg) scale(1.1); }
  }

  /* Countdown Readout: Safety Amber / Orange */
  .cwc-count {
    position: absolute;
    right: 14px;
    top: 48px;
    width: 16px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    font-weight: bold;
    color: #ff9900;
    text-shadow: 0 0 8px rgba(255, 153, 0, 0.95);
  }

  .cwc-count::before {
    content: '';
    animation: cwc-count 9s steps(1) infinite;
  }

  @keyframes cwc-count {
    0% { content: ''; }
    44% { content: '9'; }
    50% { content: '8'; }
    56% { content: '7'; }
    62% { content: '6'; }
    68% { content: '5'; }
    74% { content: '4'; }
    80% { content: '3'; }
    86% { content: '2'; }
    92% { content: '1'; }
    98% { content: '0'; }
  }

  .cwc-legend {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    font-weight: bold;
    animation: cwc-leg-col 9s steps(1) infinite;
  }

  .cwc-legend::before {
    content: 'WALK';
    animation: cwc-legend 9s steps(1) infinite;
  }

  @keyframes cwc-legend {
    0% { content: 'WALK'; }
    44% { content: 'WAIT'; }
  }

  @keyframes cwc-leg-col {
    0% { color: #ffffff; text-shadow: 0 0 5px rgba(255, 255, 255, 0.8); }
    44% { color: #ff5e00; text-shadow: 0 0 5px rgba(255, 94, 0, 0.8); }
  }
`;

const crosswalkMarkup = {
  v1: `
    <div class="cw">
      <div class="cw-pole"></div>
      <div class="cw-box">
        <div class="cw-walker">
          <div class="cw-leg back"></div>
          <div class="cw-torso"></div>
          <div class="cw-arm"></div>
          <div class="cw-leg front"></div>
          <div class="cw-head"></div>
        </div>
        <div class="cw-hand"></div>
        <div class="cw-count"></div>
        <div class="cw-legend"></div>
      </div>
    </div>
  `,
  v2: `
    <div class="cwc">
      <div class="cwc-pole"></div>
      <div class="cwc-box">
        <div class="cwc-walker">
          <div class="cwc-leg back"></div>
          <div class="cwc-torso"></div>
          <div class="cwc-arm"></div>
          <div class="cwc-leg front"></div>
          <div class="cwc-head"></div>
        </div>
        <div class="cwc-hand"></div>
        <div class="cwc-count"></div>
        <div class="cwc-legend"></div>
      </div>
    </div>
  `,
};

class ConceptCrosswalk extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${crosswalkStyles}</style>${crosswalkMarkup[version] || crosswalkMarkup.v2}`;
  }
}

if (!customElements.get('concept-crosswalk')) {
  customElements.define('concept-crosswalk', ConceptCrosswalk);
}
