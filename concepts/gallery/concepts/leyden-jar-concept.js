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
    animation: lyd-foil-charge 2.2s ease-in-out infinite alternate;
  }

  @keyframes lyd-foil-charge {
    0% { transform: scale(0.92); opacity: 0.7; }
    85% { transform: scale(1.08); opacity: 1; filter: drop-shadow(0 0 6px #00ffcc); }
    100% { transform: scale(0.92); opacity: 0.7; }
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

  /* Grounding discharge wand on right, brought toward the knob and back */
  .lyd-wand {
    position: absolute;
    top: 16px;
    right: 14px;
    width: 24px;
    height: 48px;
    animation: lyd-approach 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes lyd-approach {
    0% { transform: translate(14px, -6px) rotate(14deg); }
    40% { transform: translate(-18px, 4px) rotate(-10deg); }
    55% { transform: translate(-18px, 4px) rotate(-10deg); }
    100% { transform: translate(14px, -6px) rotate(14deg); }
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

  /* Intense electrostatic spark discharge jumping at closest approach */
  .lyd-spark-svg {
    position: absolute;
    top: 18px;
    left: 54px;
    width: 28px;
    height: 16px;
    pointer-events: none;
    animation: lyd-spark-fire 2.2s ease-in-out infinite;
  }

  @keyframes lyd-spark-fire {
    0%, 40% { opacity: 0; transform: scale(0.2); }
    43% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 8px #ffffff); }
    48% { opacity: 0; }
    50% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 12px #00ffcc); }
    54%, 100% { opacity: 0; }
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

        <svg class="lyd-spark-svg" viewBox="0 0 28 16">
          <polyline points="2,8 8,2 14,14 20,4 26,8" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          <polyline points="8,2 12,0 18,6" stroke="#00ffcc" stroke-width="1.2" fill="none" />
        </svg>

        <div class="lyd-label">LEYDEN JAR CONDENSER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-leyden-jar')) {
  customElements.define('concept-leyden-jar', ConceptLeydenJar);
}
