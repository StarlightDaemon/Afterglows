const leydenStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .lyd {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031412 0%, #000504 100%);
    border: 1.5px solid rgba(0, 255, 204, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 255, 204, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Glass condenser jar */
  .lyd-jar {
    position: absolute;
    bottom: 14px;
    width: 48px;
    height: 52px;
    background: #021a17;
    border: 1.5px solid rgba(0, 255, 204, 0.5);
    border-radius: 4px 4px 10px 10px;
    box-shadow: inset 0 0 10px rgba(0, 255, 204, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Outer tin foil coating wrapping lower half */
  .lyd-foil-outer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 32px;
    background: linear-gradient(180deg, #07473e 0%, #02241f 100%);
    border-top: 1.5px solid #00ffcc;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 0 6px rgba(0, 255, 204, 0.3);
  }

  /* Cork stopper */
  .lyd-cork {
    position: absolute;
    top: -6px;
    width: 22px;
    height: 6px;
    background: #2b1f0c;
    border: 1px solid #ffaa00;
    border-radius: 2px 2px 0 0;
  }

  /* Central brass rod with top spherical electrode knob */
  .lyd-rod {
    position: absolute;
    top: -24px;
    width: 3px;
    height: 24px;
    background: #ffffff;
    border-radius: 1.5px;
    box-shadow: 0 0 4px #00ffcc;
  }

  .lyd-knob {
    position: absolute;
    top: -30px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #00ffcc;
    box-shadow: 0 0 10px #ffffff, 0 0 18px #00ffcc;
    z-index: 6;
  }

  /* Grounding discharge wand on right */
  .lyd-wand {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 24px;
    height: 48px;
  }

  .lyd-wand-knob {
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ffcc;
  }

  /* Intense electrostatic spark discharge jumping between knobs */
  .lyd-spark {
    position: absolute;
    top: 22px;
    left: 54px;
    width: 22px;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 16px #00ffcc;
    animation: lyd-spark-fire 2.2s steps(1) infinite;
  }

  @keyframes lyd-spark-fire {
    0%, 93% { opacity: 0; transform: scaleX(0); }
    94% { opacity: 1; transform: scaleX(1) translateY(-1px); }
    96% { opacity: 1; transform: scaleX(1) translateY(1px); }
    97%, 100% { opacity: 0; transform: scaleX(0); }
  }

  .lyd-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 255, 204, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLeydenJar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${leydenStyles}</style>
      <div class="lyd">
        <div class="lyd-jar">
          <div class="lyd-cork"></div>
          <div class="lyd-rod"></div>
          <div class="lyd-knob"></div>
          <div class="lyd-foil-outer"></div>
        </div>

        <div class="lyd-wand">
          <div class="lyd-wand-knob"></div>
          <svg viewBox="0 0 24 48" style="position: absolute; inset: 0; width: 100%; height: 100%;">
            <!-- Brass grounding wand handle -->
            <path d="M 4 4 Q 20 20 20 48" fill="none" stroke="#00ffcc" stroke-width="1.8" />
          </svg>
        </div>

        <div class="lyd-spark"></div>

        <div class="lyd-label">LEYDEN JAR CONDENSER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-leyden-jar')) {
  customElements.define('concept-leyden-jar', ConceptLeydenJar);
}
