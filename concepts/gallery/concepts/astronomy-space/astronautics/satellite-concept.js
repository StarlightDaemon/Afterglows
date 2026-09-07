const satelliteStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sat {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #010401 0%, #020a03 100%);
  }

  /* Planet limb: curved horizon along the bottom. */
  .sat-planet {
    position: absolute;
    bottom: -76px;
    left: 50%;
    width: 160px;
    height: 100px;
    margin-left: -80px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 22%, #16482a 0%, #0a2411 45%, #051206 100%);
    border-top: 1px solid rgba(140, 255, 170, 0.55);
    box-shadow: 0 -4px 14px rgba(0, 204, 0, 0.25);
  }

  /* Ground station dish on the horizon. */
  .sat-dish {
    position: absolute;
    bottom: 24px;
    left: 46px;
    width: 10px;
    height: 5px;
    border-radius: 5px 5px 0 0;
    border: 1px solid rgba(190, 255, 205, 0.8);
    border-bottom: none;
    background: rgba(10, 36, 17, 0.9);
  }

  .sat-dish::after {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    width: 1px;
    height: 4px;
    background: rgba(190, 255, 205, 0.8);
  }

  /* The satellite rides an arc across the sky (translate + slight tilt). */
  .sat-craft {
    position: absolute;
    top: 0;
    left: 0;
    animation: sat-orbit 7s linear infinite;
  }

  .sat-bus {
    position: absolute;
    width: 10px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(160deg, #2a8a3e, #123c1e);
    border: 1px solid rgba(190, 255, 205, 0.7);
    box-sizing: border-box;
  }

  /* Solar panels: striped wings either side of the bus. */
  .sat-panel {
    position: absolute;
    top: 1px;
    width: 12px;
    height: 6px;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.75) 0 2px, rgba(20, 70, 35, 0.8) 2px 4px);
    border: 1px solid rgba(140, 255, 170, 0.5);
    box-sizing: border-box;
  }

  .sat-panel.left { left: -14px; }
  .sat-panel.right { left: 12px; }

  /* Blinking beacon on the bus. */
  .sat-beacon {
    position: absolute;
    top: -3px;
    left: 4px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #d8ffbb;
    animation: sat-beacon 1.4s linear infinite;
  }

  /* Downlink: dashed beam appearing when the craft is mid-sky. */
  .sat-beam {
    position: absolute;
    top: 8px;
    left: 4px;
    width: 0;
    height: 34px;
    border-left: 2px dashed rgba(160, 255, 185, 0.7);
    transform-origin: top center;
    transform: rotate(-16deg);
    animation: sat-beam 7s linear infinite;
  }

  /* Expanding rings at the dish when the beam lands. */
  .sat-ping {
    position: absolute;
    bottom: 22px;
    left: 43px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid rgba(160, 255, 185, 0.8);
    opacity: 0;
    animation: sat-ping 7s linear infinite;
  }

  .sat-ping.p2 { animation-delay: 0.45s; }

  /* Star field dots. */
  .sat::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 14% 26%, rgba(210, 255, 215, 0.6) 0 1px, transparent 1.4px),
      radial-gradient(circle at 78% 14%, rgba(210, 255, 215, 0.5) 0 1px, transparent 1.4px),
      radial-gradient(circle at 56% 40%, rgba(210, 255, 215, 0.35) 0 1px, transparent 1.4px),
      radial-gradient(circle at 90% 34%, rgba(210, 255, 215, 0.45) 0 1px, transparent 1.4px);
  }

  /* Left-to-right shallow arc, tilting with the path. */
  @keyframes sat-orbit {
    0% { transform: translate(-20px, 40px) rotate(-14deg); }
    50% { transform: translate(48px, 18px) rotate(0deg); }
    100% { transform: translate(118px, 40px) rotate(14deg); }
  }

  @keyframes sat-beacon {
    0%, 78%, 100% { opacity: 0.15; box-shadow: none; }
    86%, 92% { opacity: 1; box-shadow: 0 0 5px rgba(216, 255, 187, 0.8); }
  }

  /* Beam only while overhead (33% - 66% of the pass). */
  @keyframes sat-beam {
    0%, 30% { opacity: 0; }
    36%, 62% { opacity: 0.85; }
    68%, 100% { opacity: 0; }
  }

  @keyframes sat-ping {
    0%, 38% { opacity: 0; transform: scale(0.2); }
    44% { opacity: 0.9; transform: scale(0.5); }
    58% { opacity: 0; transform: scale(1.4); }
    100% { opacity: 0; transform: scale(1.4); }
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

  /* v2: Spacecraft orbital mechanics in true color: deep blue Earth limb with
     cyan atmospheric aurora glow, gold foil MLI insulation satellite bus,
     photovoltaic blue solar wings, pulsing red strobe beacon, and electric cyan downlink telemetry. */
  .satc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 60% 20%, #0f172a 0%, #020617 100%);
  }

  /* Star field */
  .satc::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 14% 26%, #ffffff 0 1px, transparent 1.4px),
      radial-gradient(circle at 78% 14%, #93c5fd 0 1px, transparent 1.4px),
      radial-gradient(circle at 56% 40%, #fef08a 0 1px, transparent 1.4px),
      radial-gradient(circle at 90% 34%, #ffffff 0 1px, transparent 1.4px),
      radial-gradient(circle at 30% 12%, #bfdbfe 0 1px, transparent 1.4px);
  }

  /* Planet Earth limb with atmospheric Rayleigh scatter */
  .satc-planet {
    position: absolute;
    bottom: -76px;
    left: 50%;
    width: 160px;
    height: 100px;
    margin-left: -80px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 20%, #1e3a8a 0%, #0f172a 55%, #020617 100%);
    border-top: 1.5px solid #38bdf8;
    box-shadow: 0 -4px 18px rgba(56, 189, 248, 0.45);
  }

  /* Ground station parabolic dish */
  .satc-dish {
    position: absolute;
    bottom: 24px;
    left: 46px;
    width: 10px;
    height: 5px;
    border-radius: 5px 5px 0 0;
    border: 1px solid #e2e8f0;
    border-bottom: none;
    background: #475569;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
  }

  .satc-dish::after {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    width: 1px;
    height: 4px;
    background: #ef4444;
  }

  /* Satellite orbital trajectory */
  .satc-craft {
    position: absolute;
    top: 0;
    left: 0;
    animation: satc-orbit 7s linear infinite;
  }

  /* Multi-Layer Insulation (MLI) gold foil bus */
  .satc-bus {
    position: absolute;
    width: 10px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(135deg, #fde047 0%, #ca8a04 60%, #854d0e 100%);
    border: 1px solid #fef08a;
    box-shadow: 0 0 6px rgba(250, 204, 21, 0.6);
    box-sizing: border-box;
  }

  /* Photovoltaic silicon solar cell panels */
  .satc-panel {
    position: absolute;
    top: 1px;
    width: 12px;
    height: 6px;
    background: repeating-linear-gradient(90deg,
      #0284c7 0 2px, #082f49 2px 4px);
    border: 1px solid #38bdf8;
    box-shadow: 0 0 4px rgba(56, 189, 248, 0.4);
    box-sizing: border-box;
  }

  .satc-panel.left { left: -14px; }
  .satc-panel.right { left: 12px; }

  /* Navigation red warning beacon */
  .satc-beacon {
    position: absolute;
    top: -3px;
    left: 4px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ff453a;
    animation: satc-beacon 1.4s linear infinite;
  }

  /* Laser telemetry downlink */
  .satc-beam {
    position: absolute;
    top: 8px;
    left: 4px;
    width: 0;
    height: 34px;
    border-left: 2px dashed #00f0ff;
    box-shadow: 0 0 8px rgba(0, 240, 255, 0.8);
    transform-origin: top center;
    transform: rotate(-16deg);
    animation: satc-beam 7s linear infinite;
  }

  /* Ground station RF reception wavefronts */
  .satc-ping {
    position: absolute;
    bottom: 22px;
    left: 43px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #00f0ff;
    box-shadow: 0 0 6px rgba(0, 240, 255, 0.6);
    opacity: 0;
    animation: satc-ping 7s linear infinite;
  }

  .satc-ping.p2 { animation-delay: 0.45s; }

  @keyframes satc-orbit {
    0% { transform: translate(-20px, 40px) rotate(-14deg); }
    50% { transform: translate(48px, 18px) rotate(0deg); }
    100% { transform: translate(118px, 40px) rotate(14deg); }
  }

  @keyframes satc-beacon {
    0%, 78%, 100% { opacity: 0.2; box-shadow: none; }
    86%, 92% { opacity: 1; box-shadow: 0 0 6px #ff453a; }
  }

  @keyframes satc-beam {
    0%, 30% { opacity: 0; }
    36%, 62% { opacity: 0.95; }
    68%, 100% { opacity: 0; }
  }

  @keyframes satc-ping {
    0%, 38% { opacity: 0; transform: scale(0.2); }
    44% { opacity: 1; transform: scale(0.5); }
    58% { opacity: 0; transform: scale(1.4); }
    100% { opacity: 0; transform: scale(1.4); }
  }
  `,
};

const satelliteMarkup = {
  v1: `
    <div class="sat">
      <div class="sat-craft">
        <div class="sat-beam"></div>
        <div class="sat-panel left"></div>
        <div class="sat-panel right"></div>
        <div class="sat-bus"></div>
        <div class="sat-beacon"></div>
      </div>
      <div class="sat-planet"></div>
      <div class="sat-dish"></div>
      <div class="sat-ping"></div>
      <div class="sat-ping p2"></div>
    </div>
  `,
  v2: `
    <div class="satc">
      <div class="satc-craft">
        <div class="satc-beam"></div>
        <div class="satc-panel left"></div>
        <div class="satc-panel right"></div>
        <div class="satc-bus"></div>
        <div class="satc-beacon"></div>
      </div>
      <div class="satc-planet"></div>
      <div class="satc-dish"></div>
      <div class="satc-ping"></div>
      <div class="satc-ping p2"></div>
    </div>
  `,
};

class ConceptSatellite extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${satelliteStyles[version] || satelliteStyles.v2}</style>${satelliteMarkup[version] || satelliteMarkup.v2}`;
  }
}

if (!customElements.get('concept-satellite')) {
  customElements.define('concept-satellite', ConceptSatellite);
}
