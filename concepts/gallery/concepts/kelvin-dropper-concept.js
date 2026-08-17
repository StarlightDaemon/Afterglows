const kelvinStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .klv {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #041007 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Header reservoir manifold */
  .klv-header {
    position: absolute;
    top: 6px;
    width: 76px;
    height: 10px;
    background: #06220e;
    border: 1px solid #00cc00;
    border-radius: 2px;
    box-shadow: inset 0 0 4px rgba(0, 204, 0, 0.4);
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }

  .klv-nozzle {
    width: 4px;
    height: 4px;
    background: #aaffaa;
    border-radius: 0 0 2px 2px;
  }

  /* Water streams and falling droplets */
  .klv-stream-left, .klv-stream-right {
    position: absolute;
    top: 16px;
    width: 6px;
    height: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .klv-stream-left { left: 28px; }
  .klv-stream-right { right: 28px; }

  .klv-drop {
    width: 7px;
    height: 11px;
    background: #ffffff;
    border-radius: 50% 50% 60% 60%;
    box-shadow: 0 0 9px #8cffaa, 0 0 4px #d6ffe0;
    animation: klv-fall 0.8s ease-in infinite;
  }

  .klv-drop:nth-child(2) { animation-delay: 0.26s; }
  .klv-drop:nth-child(3) { animation-delay: 0.52s; }

  @keyframes klv-fall {
    0% { transform: translateY(0) scale(0.7); opacity: 0.5; }
    50% { transform: translateY(18px) scale(1); opacity: 1; }
    100% { transform: translateY(38px) scale(0.9); opacity: 0.2; }
  }

  /* Induction rings */
  .klv-ring-left, .klv-ring-right {
    position: absolute;
    top: 32px;
    width: 14px;
    height: 8px;
    border: 1.5px solid;
    border-radius: 50%;
    box-shadow: 0 0 6px;
    z-index: 3;
  }

  .klv-ring-left {
    left: 24px;
    border-color: #00ffaa;
    box-shadow: 0 0 6px rgba(0, 255, 170, 0.6);
  }

  .klv-ring-right {
    right: 24px;
    border-color: #ffaa00;
    box-shadow: 0 0 6px rgba(255, 170, 0, 0.6);
  }

  /* Cross-connection wire SVG */
  .klv-wires-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  /* Collection cans */
  .klv-can-left, .klv-can-right {
    position: absolute;
    bottom: 18px;
    width: 18px;
    height: 22px;
    border: 1.5px solid;
    border-radius: 2px 2px 4px 4px;
    background: #021206;
  }

  .klv-can-left {
    left: 22px;
    border-color: #ffaa00;
    box-shadow: 0 0 6px rgba(255, 170, 0, 0.4);
  }

  .klv-can-right {
    right: 22px;
    border-color: #00ffaa;
    box-shadow: 0 0 6px rgba(0, 255, 170, 0.4);
  }

  /* Spark gap electrodes */
  .klv-spark-gap {
    position: absolute;
    bottom: 24px;
    left: 50%;
    width: 20px;
    height: 10px;
    margin-left: -10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .klv-electrode {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #ffffff;
  }

  /* High voltage electrostatic spark */
  .klv-spark {
    position: absolute;
    left: 5px;
    right: 5px;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 0 8px #aaffff, 0 0 16px #00ffff;
    animation: klv-spark-discharge 2.4s steps(1) infinite;
  }

  @keyframes klv-spark-discharge {
    0%, 88% { opacity: 0; transform: scaleX(0); }
    90% { opacity: 1; transform: scaleX(1) translateY(-1px); }
    93% { opacity: 1; transform: scaleX(1) translateY(1px); }
    96% { opacity: 1; transform: scaleX(1) translateY(-1px); }
    98%, 100% { opacity: 0; transform: scaleX(0); }
  }

  .klv-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptKelvinDropper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kelvinStyles}</style>
      <div class="klv">
        <div class="klv-header">
          <div class="klv-nozzle"></div>
          <div class="klv-nozzle"></div>
        </div>

        <svg class="klv-wires-svg" viewBox="0 0 118 102">
          <!-- Cross connection: left ring (31, 36) -> right can (96, 70) -->
          <path d="M 31 36 Q 59 45 88 70" fill="none" stroke="#00ffaa" stroke-width="1.2" stroke-dasharray="3 1.5" />
          <!-- Cross connection: right ring (87, 36) -> left can (22, 70) -->
          <path d="M 87 36 Q 59 45 30 70" fill="none" stroke="#ffaa00" stroke-width="1.2" stroke-dasharray="3 1.5" />
          <!-- Spark gap leads -->
          <path d="M 31 70 L 49 72" fill="none" stroke="#ffaa00" stroke-width="1.2" />
          <path d="M 87 70 L 69 72" fill="none" stroke="#00ffaa" stroke-width="1.2" />
        </svg>

        <div class="klv-stream-left">
          <div class="klv-drop"></div>
          <div class="klv-drop"></div>
          <div class="klv-drop"></div>
        </div>

        <div class="klv-stream-right">
          <div class="klv-drop"></div>
          <div class="klv-drop"></div>
          <div class="klv-drop"></div>
        </div>

        <div class="klv-ring-left"></div>
        <div class="klv-ring-right"></div>

        <div class="klv-can-left"></div>
        <div class="klv-can-right"></div>

        <div class="klv-spark-gap">
          <div class="klv-electrode"></div>
          <div class="klv-spark"></div>
          <div class="klv-electrode"></div>
        </div>

        <div class="klv-label">KELVIN WATER DROPPER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-kelvin-dropper')) {
  customElements.define('concept-kelvin-dropper', ConceptKelvinDropper);
}
