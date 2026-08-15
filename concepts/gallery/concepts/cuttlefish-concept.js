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

  /* Cuttlefish body rig */
  .cut-body-rig {
    position: relative;
    width: 90px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: cut-hover 3s ease-in-out infinite alternate;
  }

  @keyframes cut-hover {
    0% { transform: translateY(-2px) rotate(-1deg); }
    100% { transform: translateY(2px) rotate(1deg); }
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
    animation: cut-fin-wave 1.2s ease-in-out infinite alternate;
  }

  .cut-fin-bot {
    position: absolute;
    bottom: -4px;
    left: 8px;
    width: 60px;
    height: 6px;
    border-bottom: 1.5px dashed #8cffaa;
    border-radius: 50%;
    animation: cut-fin-wave 1.2s ease-in-out infinite alternate-reverse;
  }

  @keyframes cut-fin-wave {
    0% { transform: scaleY(0.6) skewX(-4deg); opacity: 0.6; }
    100% { transform: scaleY(1.4) skewX(4deg); opacity: 1; }
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

  /* Chromatophore dynamic traveling zebra bands */
  .cut-chromato-band {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 8px;
    background: repeating-linear-gradient(
      180deg,
      #ffffff 0px,
      #ffffff 3px,
      transparent 3px,
      transparent 7px
    );
    opacity: 0.8;
    filter: drop-shadow(0 0 4px #8cffaa);
    animation: cut-band-sweep 2.5s ease-in-out infinite;
  }

  .cut-chromato-band.b1 { left: 10px; animation-delay: 0s; }
  .cut-chromato-band.b2 { left: 24px; animation-delay: 0.4s; }
  .cut-chromato-band.b3 { left: 38px; animation-delay: 0.8s; }
  .cut-chromato-band.b4 { left: 52px; animation-delay: 1.2s; }

  @keyframes cut-band-sweep {
    0%, 100% { opacity: 0.2; transform: scaleX(0.5); }
    50% { opacity: 1; transform: scaleX(1.3); }
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

  /* Front tentacle cluster */
  .cut-arms {
    position: absolute;
    right: -10px;
    width: 12px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .cut-arm {
    width: 10px;
    height: 2px;
    background: #8cffaa;
    border-radius: 1px;
    animation: cut-arm-flex 2s ease-in-out infinite alternate;
  }
  .cut-arm.a1 { animation-delay: 0.1s; }
  .cut-arm.a2 { animation-delay: 0.4s; }
  .cut-arm.a3 { animation-delay: 0.7s; }

  @keyframes cut-arm-flex {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(12deg); }
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
            <div class="cut-chromato-band b1"></div>
            <div class="cut-chromato-band b2"></div>
            <div class="cut-chromato-band b3"></div>
            <div class="cut-chromato-band b4"></div>
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
      </div>
    `;
  }
}

if (!customElements.get('concept-cuttlefish')) {
  customElements.define('concept-cuttlefish', ConceptCuttlefish);
}
