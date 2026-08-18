const centrifugeStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A benchtop centrifuge: the lid closes, the rotor spins up to a
     blur (tubes swinging outward), holds, and spins down - and the
     sample in each tube separates into banded layers by the end. */
  .cf {
    width: 104px;
    height: 96px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Casing with high-RPM vibration */
  .cf-case {
    position: absolute;
    left: 8px;
    top: 16px;
    width: 88px;
    height: 66px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 50% 40%, rgba(0, 55, 11, 0.5), rgba(0, 20, 4, 0.8));
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.2);
    animation: cf-vibe 0.08s ease-in-out infinite alternate;
  }

  @keyframes cf-vibe {
    0% { transform: translate(-1px, 0.5px); }
    100% { transform: translate(1px, -0.5px); }
  }

  /* The rotor: four arms holding swinging buckets. Spins continuously at high speed. */
  .cf-rotor {
    position: absolute;
    left: 50%;
    top: 49px;
    width: 0;
    height: 0;
    animation: cf-spin 0.4s linear infinite;
  }

  @keyframes cf-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .cf-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 30px;
    height: 2px;
    background: rgba(140, 255, 170, 0.7);
    transform-origin: 0% 50%;
  }

  .cf-arm.a1 { transform: rotate(0deg); }
  .cf-arm.a2 { transform: rotate(90deg); }
  .cf-arm.a3 { transform: rotate(180deg); }
  .cf-arm.a4 { transform: rotate(270deg); }

  /* Bucket at each arm tip: swings outward at speed. */
  .cf-bucket {
    position: absolute;
    right: -5px;
    top: -6px;
    width: 8px;
    height: 14px;
    border-radius: 2px 2px 4px 4px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background: rgba(0, 60, 12, 0.7);
    overflow: hidden;
    transform-origin: 50% 0;
    animation: cf-swing 1.6s ease-in-out infinite alternate;
  }

  @keyframes cf-swing {
    0% { transform: rotate(20deg); }
    100% { transform: rotate(78deg); }
  }

  /* Sample separating into layers as the run completes. */
  .cf-sample {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 11px;
    background: linear-gradient(180deg,
      rgba(190, 255, 205, 0.7) 0 45%,
      rgba(0, 150, 30, 0.8) 45% 72%,
      rgba(214, 255, 224, 0.95) 72% 100%);
  }

  /* Blur ring while spinning fast. */
  .cf-blur {
    position: absolute;
    left: 50%;
    top: 49px;
    width: 62px;
    height: 62px;
    margin: -31px 0 0 -31px;
    border-radius: 50%;
    border: 7px solid rgba(140, 255, 170, 0.25);
    box-sizing: border-box;
    opacity: 0.8;
    animation: cf-blur 1.2s ease-in-out infinite alternate;
  }

  @keyframes cf-blur {
    0% { transform: scale(0.92); opacity: 0.5; }
    100% { transform: scale(1.08); opacity: 0.9; }
  }

  /* Spindle cap. */
  .cf-cap {
    position: absolute;
    left: 50%;
    top: 49px;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.6);
    z-index: 3;
  }

  /* Transparent viewing lid. */
  .cf-lid {
    position: absolute;
    left: 8px;
    top: 16px;
    width: 88px;
    height: 66px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.25), rgba(0, 45, 9, 0.35));
    border: 2px solid var(--accent, #00cc00);
    transform-origin: 50% 0;
    pointer-events: none;
    z-index: 4;
  }

  .cf-lid::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 8px;
    width: 20px;
    height: 4px;
    margin-left: -10px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.7);
  }

  /* Speed readout. */
  .cf-read {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 8px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 4px rgba(0, 204, 0, 0.7);
  }

  .cf-read::before {
    content: '12k rpm';
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

  /* v2: Laboratory microcentrifuge with blood density separation:
     clinical graphite/stainless housing, anodized cobalt rotor with swinging buckets,
     smoke-tinted safety lid, and high-G fractionation of blood into golden plasma,
     white buffy coat, and dense packed red blood cells. */
  .cfc {
    width: 104px;
    height: 96px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Instrument chassis and stainless rotor bowl */
  .cfc-case {
    position: absolute;
    left: 8px;
    top: 16px;
    width: 88px;
    height: 66px;
    border-radius: 50%;
    border: 2px solid #64748b;
    background: radial-gradient(circle at 50% 40%, #1e293b 0%, #0f172a 80%);
    box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.8), 0 4px 10px rgba(0, 0, 0, 0.6);
    animation: cfc-vibe 0.08s ease-in-out infinite alternate;
  }

  @keyframes cfc-vibe {
    0% { transform: translate(-1px, 0.5px); }
    100% { transform: translate(1px, -0.5px); }
  }

  /* Rotor assembly */
  .cfc-rotor {
    position: absolute;
    left: 50%;
    top: 49px;
    width: 0;
    height: 0;
    animation: cfc-spin 0.4s linear infinite;
  }

  @keyframes cfc-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .cfc-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 30px;
    height: 2px;
    background: #0284c7;
    box-shadow: 0 0 3px rgba(2, 132, 199, 0.5);
    transform-origin: 0% 50%;
  }

  .cfc-arm.a1 { transform: rotate(0deg); }
  .cfc-arm.a2 { transform: rotate(90deg); }
  .cfc-arm.a3 { transform: rotate(180deg); }
  .cfc-arm.a4 { transform: rotate(270deg); }

  /* Swinging-bucket polycarbonate tube holders */
  .cfc-bucket {
    position: absolute;
    right: -5px;
    top: -6px;
    width: 8px;
    height: 14px;
    border-radius: 2px 2px 4px 4px;
    border: 1px solid rgba(224, 242, 254, 0.85);
    background: rgba(30, 41, 59, 0.85);
    overflow: hidden;
    transform-origin: 50% 0;
    animation: cfc-swing 1.6s ease-in-out infinite alternate;
  }

  @keyframes cfc-swing {
    0% { transform: rotate(20deg); }
    100% { transform: rotate(78deg); }
  }

  /* Centrifugal fractionation of whole blood */
  .cfc-sample {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 11px;
    background: linear-gradient(180deg,
      #fef08a 0%, #fbbf24 45%,
      #ffffff 45.1%, #ffffff 52%,
      #991b1b 52.1%, #450a0a 100%);
  }

  /* High-RPM motion blur vortex ring */
  .cfc-blur {
    position: absolute;
    left: 50%;
    top: 49px;
    width: 62px;
    height: 62px;
    margin: -31px 0 0 -31px;
    border-radius: 50%;
    border: 7px solid rgba(56, 189, 248, 0.35);
    box-sizing: border-box;
    opacity: 0.8;
    animation: cfc-blur 1.2s ease-in-out infinite alternate;
  }

  @keyframes cfc-blur {
    0% { transform: scale(0.92); opacity: 0.5; }
    100% { transform: scale(1.08); opacity: 0.9; }
  }

  /* Anodized cobalt center spindle cap */
  .cfc-cap {
    position: absolute;
    left: 50%;
    top: 49px;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #38bdf8, #0284c7 60%, #0369a1);
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.6);
    z-index: 3;
  }

  /* Transparent smoke acrylic safety lid */
  .cfc-lid {
    position: absolute;
    left: 8px;
    top: 16px;
    width: 88px;
    height: 66px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(51, 65, 85, 0.25), rgba(15, 23, 42, 0.35));
    border: 2px solid #94a3b8;
    transform-origin: 50% 0;
    pointer-events: none;
    z-index: 4;
  }

  .cfc-lid::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 8px;
    width: 20px;
    height: 4px;
    margin-left: -10px;
    border-radius: 2px;
    background: #38bdf8;
    box-shadow: 0 0 4px rgba(56, 189, 248, 0.6);
  }

  /* Digital tachometer display */
  .cfc-read {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #38bdf8;
    text-shadow: 0 0 6px rgba(56, 189, 248, 0.8);
  }

  .cfc-read::before {
    content: '13k rpm';
  }
  `,
};

const centrifugeMarkup = {
  v1: `
    <div class="cf">
      <div class="cf-case"></div>
      <div class="cf-rotor">
        <div class="cf-arm a1"><div class="cf-bucket"><div class="cf-sample"></div></div></div>
        <div class="cf-arm a2"><div class="cf-bucket"><div class="cf-sample"></div></div></div>
        <div class="cf-arm a3"><div class="cf-bucket"><div class="cf-sample"></div></div></div>
        <div class="cf-arm a4"><div class="cf-bucket"><div class="cf-sample"></div></div></div>
      </div>
      <div class="cf-blur"></div>
      <div class="cf-cap"></div>
      <div class="cf-lid"></div>
      <div class="cf-read"></div>
    </div>
  `,
  v2: `
    <div class="cfc">
      <div class="cfc-case"></div>
      <div class="cfc-rotor">
        <div class="cfc-arm a1"><div class="cfc-bucket"><div class="cfc-sample"></div></div></div>
        <div class="cfc-arm a2"><div class="cfc-bucket"><div class="cfc-sample"></div></div></div>
        <div class="cfc-arm a3"><div class="cfc-bucket"><div class="cfc-sample"></div></div></div>
        <div class="cfc-arm a4"><div class="cfc-bucket"><div class="cfc-sample"></div></div></div>
      </div>
      <div class="cfc-blur"></div>
      <div class="cfc-cap"></div>
      <div class="cfc-lid"></div>
      <div class="cfc-read"></div>
    </div>
  `,
};

class ConceptCentrifuge extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${centrifugeStyles[version] || centrifugeStyles.v2}</style>${centrifugeMarkup[version] || centrifugeMarkup.v2}`;
  }
}

if (!customElements.get('concept-centrifuge')) {
  customElements.define('concept-centrifuge', ConceptCentrifuge);
}
