const cuttlefishStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cut {
    width: 118px;
    height: 102px;
    position: relative;
    background: #010803;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Water ambience */
  .cut-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 40, 12, 0.4), #000803 90%);
  }

  /* Cuttlefish body rig with swimming forward/back translation */
  .cut-body-rig {
    position: relative;
    width: 90px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: cut-swim-glide 3.2s ease-in-out infinite alternate;
  }

  @keyframes cut-swim-glide {
    0% { transform: translate(-10px, -4px) rotate(-3deg); }
    50% { transform: translate(4px, 2px) rotate(1deg); }
    100% { transform: translate(12px, -2px) rotate(4deg); }
  }

  /* Undulating marginal fin ribbon along mantle edge */
  .cut-fin-top {
    position: absolute;
    top: -4px;
    left: 8px;
    width: 60px;
    height: 6px;
    border-top: 1.5px dashed #8cffaa;
    border-radius: 50%;
    animation: cut-fin-wave 1s ease-in-out infinite alternate;
  }

  .cut-fin-bot {
    position: absolute;
    bottom: -4px;
    left: 8px;
    width: 60px;
    height: 6px;
    border-bottom: 1.5px dashed #8cffaa;
    border-radius: 50%;
    animation: cut-fin-wave 1s ease-in-out infinite alternate-reverse;
  }

  @keyframes cut-fin-wave {
    0% { transform: scaleY(0.5) skewX(-8deg); opacity: 0.6; }
    100% { transform: scaleY(1.5) skewX(8deg); opacity: 1; }
  }

  /* Main mantle dome with chromatophore skin */
  .cut-mantle {
    width: 68px;
    height: 38px;
    border-radius: 40px 14px 14px 40px;
    background: linear-gradient(90deg, #012208 0%, #008818 50%, #021a05 100%);
    border: 1.5px solid var(--accent, #00cc00);
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.3);
  }

  /* Chromatophore traveling waves moving across the cuttlefish skin */
  .cut-chromato-wave {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10px;
    background: radial-gradient(circle, #ffffff 30%, #8cffaa 70%, transparent 100%);
    border-radius: 50%;
    box-shadow: 0 0 6px #8cffaa, 0 0 10px #00ff44;
    animation: cut-wave-travel 2.4s linear infinite;
  }

  .cw1 { animation-delay: 0s; }
  .cw2 { animation-delay: 0.8s; }
  .cw3 { animation-delay: 1.6s; }

  @keyframes cut-wave-travel {
    0% { transform: translateX(-15px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateX(75px) scale(1.3); opacity: 0; }
  }

  /* Head and W-shaped pupil eye */
  .cut-head {
    position: absolute;
    right: 6px;
    width: 22px;
    height: 30px;
    border-radius: 4px 14px 14px 4px;
    background: #005510;
    border: 1.5px solid #d6ffe0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* W-shaped pupil */
  .cut-eye {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #8cffaa;
    box-shadow: 0 0 6px #ffffff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cut-pupil-w {
    font-size: 7px;
    font-weight: bold;
    color: #010a03;
    line-height: 1;
    font-family: sans-serif;
  }

  /* Front tentacle cluster extending and undulating */
  .cut-arms {
    position: absolute;
    right: -14px;
    width: 16px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .cut-arm {
    width: 14px;
    height: 2.5px;
    background: #8cffaa;
    border-radius: 1px;
    box-shadow: 0 0 4px #8cffaa;
    animation: cut-arm-flex 1.6s ease-in-out infinite alternate;
  }
  .cut-arm.a1 { animation-delay: 0.1s; }
  .cut-arm.a2 { animation-delay: 0.4s; }
  .cut-arm.a3 { animation-delay: 0.7s; }

  @keyframes cut-arm-flex {
    0% { transform: scaleX(0.7) rotate(-16deg); }
    100% { transform: scaleX(1.4) rotate(18deg); }
  }

  .cut-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCuttlefish extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cuttlefishStyles}</style>
      <div class="cut">
        <div class="cut-bg"></div>
        <div class="cut-body-rig">
          <div class="cut-fin-top"></div>
          <div class="cut-fin-bot"></div>

          <div class="cut-mantle">
            <div class="cut-chromato-wave cw1"></div>
            <div class="cut-chromato-wave cw2"></div>
            <div class="cut-chromato-wave cw3"></div>
          </div>

          <div class="cut-head">
            <div class="cut-eye">
              <div class="cut-pupil-w">W</div>
            </div>
          </div>

          <div class="cut-arms">
            <div class="cut-arm a1"></div>
            <div class="cut-arm a2"></div>
            <div class="cut-arm a3"></div>
          </div>
        </div>

        <div class="cut-label">CUTTLEFISH CAMOUFLAGE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cuttlefish')) {
  customElements.define('concept-cuttlefish', ConceptCuttlefish);
}
