const caliperStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .clp {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Fixed main beam bar */
  .clp-beam {
    position: absolute;
    top: 42px;
    left: 8px;
    width: 102px;
    height: 14px;
    background: linear-gradient(180deg, #008818, #011c06);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 2px;
    display: flex;
    align-items: flex-end;
    padding: 0 4px;
    box-sizing: border-box;
  }

  /* Beam scale tick marks */
  .clp-ticks {
    width: 100%;
    height: 6px;
    background: repeating-linear-gradient(
      90deg,
      #d6ffe0 0px,
      #d6ffe0 1px,
      transparent 1px,
      transparent 5px
    );
  }

  /* Fixed reference jaw (left) */
  .clp-fixed-jaw {
    position: absolute;
    top: 26px;
    left: 8px;
    width: 10px;
    height: 48px;
    background: linear-gradient(90deg, #00aa22, #005510);
    border: 1.5px solid #d6ffe0;
    border-radius: 2px;
    clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
    z-index: 2;
  }

  /* Sliding vernier cursor jaw assembly */
  .clp-slider {
    position: absolute;
    top: 24px;
    left: 36px;
    width: 24px;
    height: 52px;
    animation: clp-measure 4.5s ease-in-out infinite alternate;
    z-index: 3;
  }

  @keyframes clp-measure {
    0% { transform: translateX(0); }
    40% { transform: translateX(24px); }
    70% { transform: translateX(12px); }
    100% { transform: translateX(0); }
  }

  .clp-slider-body {
    position: absolute;
    top: 14px;
    left: 0;
    width: 24px;
    height: 22px;
    background: #011406;
    border: 1.5px solid #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 6px #8cffaa;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Vernier fine graduation sub-scale */
  .clp-vernier-ticks {
    width: 18px;
    height: 5px;
    background: repeating-linear-gradient(
      90deg,
      #ffffff 0px,
      #ffffff 1px,
      transparent 1px,
      transparent 3.5px
    );
  }

  /* Moving jaw leg */
  .clp-sliding-jaw {
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 52px;
    background: linear-gradient(90deg, #00aa22, #005510);
    border: 1.5px solid #ffffff;
    border-radius: 2px;
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 85%);
  }

  /* Object being measured (precision brass cylinder) */
  .clp-object {
    position: absolute;
    top: 48px;
    left: 20px;
    width: 16px;
    height: 18px;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #8cffaa 40%, #006611 100%);
    border: 1.5px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 1;
  }

  /* Micrometer digital/vernier dimension readout */
  .clp-readout {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptCaliper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${caliperStyles}</style>
      <div class="clp">
        <div class="clp-fixed-jaw"></div>
        <div class="clp-beam">
          <div class="clp-ticks"></div>
        </div>

        <div class="clp-object"></div>

        <div class="clp-slider">
          <div class="clp-sliding-jaw"></div>
          <div class="clp-slider-body">
            <div class="clp-vernier-ticks"></div>
          </div>
        </div>

        <div class="clp-readout">VERNIER: 16.24 mm</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-caliper')) {
  customElements.define('concept-caliper', ConceptCaliper);
}
