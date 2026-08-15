const crookesStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ct-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 70% 50%, #031c0d 0%, #010804 100%);
    border: 1.5px solid rgba(0, 255, 136, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 255, 136, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ct-stage {
    position: relative;
    width: 100px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Glass bulb vacuum envelope */
  .ct-envelope {
    position: absolute;
    width: 92px;
    height: 52px;
    border: 1.5px solid rgba(0, 255, 136, 0.6);
    border-radius: 26px 40px 40px 26px;
    background: radial-gradient(circle at 80% 50%, rgba(0, 255, 136, 0.2) 0%, rgba(0, 20, 10, 0.4) 80%);
    box-shadow: inset 0 0 12px rgba(0, 255, 136, 0.25);
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  /* Cathode electrode on left */
  .ct-cathode {
    position: absolute;
    left: 8px;
    width: 4px;
    height: 20px;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 8px #00ff88;
  }

  /* Electron stream glow */
  .ct-beam {
    position: absolute;
    left: 12px;
    width: 50px;
    height: 28px;
    background: linear-gradient(90deg, rgba(0, 255, 136, 0.5) 0%, rgba(0, 255, 136, 0.15) 100%);
    clip-path: polygon(0 40%, 100% 0%, 100% 100%, 0 60%);
    animation: ct-beam-flicker 0.15s infinite alternate;
  }

  @keyframes ct-beam-flicker {
    0% { opacity: 0.85; }
    100% { opacity: 1; }
  }

  /* Hinged Metal Maltese Cross */
  .ct-cross {
    position: absolute;
    left: 46px;
    width: 16px;
    height: 16px;
    background: #00ff88;
    clip-path: polygon(
      35% 0%, 65% 0%, 55% 35%, 100% 35%, 100% 65%, 55% 65%, 65% 100%, 35% 100%, 45% 65%, 0% 65%, 0% 35%, 45% 35%
    );
    box-shadow: 0 0 4px #00ff88;
  }

  /* Phosphor green fluorescent glass back wall */
  .ct-phosphor-screen {
    position: absolute;
    right: 0px;
    width: 32px;
    height: 52px;
    background: radial-gradient(ellipse at 100% 50%, #00ff88 0%, rgba(0, 255, 136, 0.4) 60%, transparent 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Crisp projected shadow on the phosphor screen */
  .ct-shadow {
    position: absolute;
    right: 4px;
    width: 22px;
    height: 22px;
    background: #021207;
    clip-path: polygon(
      35% 0%, 65% 0%, 55% 35%, 100% 35%, 100% 65%, 55% 65%, 65% 100%, 35% 100%, 45% 65%, 0% 65%, 0% 35%, 45% 35%
    );
  }

  .ct-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 255, 136, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCrookesTube extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${crookesStyles}</style>
      <div class="ct-box">
        <div class="ct-stage">
          <div class="ct-envelope">
            <div class="ct-cathode"></div>
            <div class="ct-beam"></div>
            <div class="ct-cross"></div>
            <div class="ct-phosphor-screen">
              <div class="ct-shadow"></div>
            </div>
          </div>
        </div>

        <div class="ct-label">MALTESE CROOKES TUBE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-crookes-tube')) {
  customElements.define('concept-crookes-tube', ConceptCrookesTube);
}
