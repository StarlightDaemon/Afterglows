const pachinkoStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pck {
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

  /* Playfield board */
  .pck-field {
    position: relative;
    width: 82px;
    height: 86px;
    background: #011206;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 6px rgba(0, 204, 0, 0.2);
    overflow: hidden;
  }

  /* Outer launch curved shooter track */
  .pck-track {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 74px;
    height: 78px;
    border-top: 2px solid #8cffaa;
    border-right: 2px solid #8cffaa;
    border-radius: 0 38px 0 0;
    pointer-events: none;
  }

  /* Grid of brass pins */
  .pck-pins-grid {
    position: absolute;
    top: 18px;
    left: 10px;
    right: 10px;
    bottom: 22px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-between;
  }

  .pck-pin {
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 3px #8cffaa;
  }

  /* Tulip catcher gate at center */
  .pck-tulip {
    position: absolute;
    bottom: 20px;
    left: 33px;
    width: 16px;
    height: 12px;
    background: #00aa22;
    border: 1.5px solid #ffffff;
    border-radius: 0 0 6px 6px;
    box-shadow: 0 0 6px #8cffaa;
    display: flex;
    justify-content: space-between;
    padding: 0 1px;
  }

  /* Animated opening tulip petal wings */
  .pck-petal-l {
    width: 4px;
    height: 8px;
    background: #ffffff;
    border-radius: 2px;
    animation: pck-tulip-flap 1.5s ease-in-out infinite alternate;
  }

  .pck-petal-r {
    width: 4px;
    height: 8px;
    background: #ffffff;
    border-radius: 2px;
    animation: pck-tulip-flap 1.5s ease-in-out infinite alternate;
  }

  @keyframes pck-tulip-flap {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-25deg); }
  }

  /* Cascading / bouncing chrome pachinko ball */
  .pck-ball {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
    z-index: 6;
    offset-path: path("M 72 80 C 72 10 40 6 24 18 C 12 28 32 38 48 46 C 36 56 42 66 41 74");
    animation: pck-ball-drop 2.2s cubic-bezier(0.2, 0.7, 0.4, 1) infinite;
  }

  @keyframes pck-ball-drop {
    0% { offset-distance: 0%; opacity: 0; }
    10% { opacity: 1; }
    90% { offset-distance: 100%; opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  /* Score / payout flashes */
  .pck-payout-tray {
    position: absolute;
    bottom: 2px;
    left: 8px;
    right: 8px;
    height: 10px;
    background: linear-gradient(180deg, #008818, #011405);
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
  }

  /* Readout */
  .pck-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptPachinko extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pachinkoStyles}</style>
      <div class="pck">
        <div class="pck-field">
          <div class="pck-track"></div>

          <div class="pck-pins-grid">
            <div class="pck-pin"></div><div class="pck-pin"></div><div class="pck-pin"></div><div class="pck-pin"></div>
            <div class="pck-pin"></div><div class="pck-pin"></div><div class="pck-pin"></div><div class="pck-pin"></div>
            <div class="pck-pin"></div><div class="pck-pin"></div><div class="pck-pin"></div><div class="pck-pin"></div>
            <div class="pck-pin"></div><div class="pck-pin"></div><div class="pck-pin"></div><div class="pck-pin"></div>
            <div class="pck-pin"></div><div class="pck-pin"></div><div class="pck-pin"></div><div class="pck-pin"></div>
          </div>

          <div class="pck-tulip">
            <div class="pck-petal-l"></div>
            <div class="pck-petal-r"></div>
          </div>

          <div class="pck-ball"></div>
          <div class="pck-payout-tray"></div>
        </div>

        <div class="pck-label">PACHINKO パチンコ</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pachinko')) {
  customElements.define('concept-pachinko', ConceptPachinko);
}
