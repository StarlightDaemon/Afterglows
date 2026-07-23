const centrifugeStyles = `
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

  /* Casing. */
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
  }

  /* The rotor: four arms holding swinging buckets. Spins up/down. */
  .cf-rotor {
    position: absolute;
    left: 50%;
    top: 49px;
    width: 0;
    height: 0;
    animation: cf-spin 8s cubic-bezier(0.3, 0, 0.5, 1) infinite;
  }

  @keyframes cf-spin {
    0% { transform: rotate(0deg); }
    /* Spin up, plateau, spin down. */
    18% { transform: rotate(720deg); }
    70% { transform: rotate(5400deg); }
    88%, 100% { transform: rotate(5760deg); }
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
    animation: cf-swing 8s ease-in-out infinite;
  }

  @keyframes cf-swing {
    0%, 100% { transform: rotate(0deg); }
    18%, 70% { transform: rotate(78deg); }
  }

  /* Sample separating into layers as the run completes. */
  .cf-sample {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 11px;
    background: rgba(0, 130, 26, 0.7);
    animation: cf-separate 8s steps(1) infinite;
  }

  @keyframes cf-separate {
    0%, 60% { background: rgba(0, 130, 26, 0.7); }
    /* Banded: pellet, medium, plasma. */
    72%, 100% { background: linear-gradient(180deg,
      rgba(190, 255, 205, 0.55) 0 45%,
      rgba(0, 150, 30, 0.7) 45% 72%,
      rgba(214, 255, 224, 0.85) 72% 100%); }
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
    border: 7px solid rgba(140, 255, 170, 0.16);
    box-sizing: border-box;
    opacity: 0;
    animation: cf-blur 8s ease-in-out infinite;
  }

  @keyframes cf-blur {
    0%, 12% { opacity: 0; }
    24%, 66% { opacity: 1; }
    78%, 100% { opacity: 0; }
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

  /* Lid that closes over the top before spin. */
  .cf-lid {
    position: absolute;
    left: 8px;
    top: 16px;
    width: 88px;
    height: 66px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.85), rgba(0, 45, 9, 0.9));
    border: 2px solid var(--accent, #00cc00);
    transform-origin: 50% 0;
    animation: cf-lid 8s ease-in-out infinite;
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

  @keyframes cf-lid {
    0% { transform: perspective(120px) rotateX(-82deg); }
    /* Closed during the run. */
    10%, 82% { transform: perspective(120px) rotateX(0deg); }
    94%, 100% { transform: perspective(120px) rotateX(-82deg); }
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
    content: '0 rpm';
    animation: cf-read 8s steps(1) infinite;
  }

  @keyframes cf-read {
    0% { content: '0 rpm'; }
    18% { content: '4k rpm'; }
    40% { content: '12k rpm'; }
    70% { content: '13k rpm'; }
    84% { content: '3k rpm'; }
    94% { content: '0 rpm'; }
  }
`;

class ConceptCentrifuge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${centrifugeStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-centrifuge')) {
  customElements.define('concept-centrifuge', ConceptCentrifuge);
}
