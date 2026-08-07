const vacuumRadioStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A 1930s cathedral vacuum tube radio in live broadcast: warm triode tubes
     glow behind the grille, a tuning dial sweeps across shortwave frequencies,
     and a green magic-eye tube narrows its beam at resonance. */
  .vrad {
    width: 114px;
    height: 100px;
    position: relative;
  }

  /* Cathedral arched wooden radio cabinet */
  .vrad-cabinet {
    position: absolute;
    left: 12px;
    bottom: 6px;
    width: 90px;
    height: 88px;
    border-radius: 45px 45px 4px 4px;
    background: radial-gradient(circle at 50% 30%, rgba(0, 110, 24, 0.9), rgba(0, 30, 6, 0.98));
    border: 2px solid var(--accent, #00cc00);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.35);
    overflow: hidden;
  }

  /* Vacuum tubes glowing in top arch */
  .vrad-tubes {
    position: absolute;
    left: 20px;
    top: 14px;
    width: 50px;
    height: 22px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }

  .vrad-tube {
    width: 10px;
    height: 18px;
    border-radius: 5px 5px 2px 2px;
    background: radial-gradient(circle at 50% 40%, rgba(190, 255, 205, 1), rgba(0, 160, 35, 0.8) 60%, rgba(0, 40, 8, 0.9));
    border: 1px solid rgba(140, 255, 170, 0.9);
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.9);
    animation: vrad-tube-glow 2.5s ease-in-out infinite alternate;
  }

  .vrad-tube.t1 { animation-delay: 0s; }
  .vrad-tube.t2 { height: 22px; animation-delay: -0.8s; }
  .vrad-tube.t3 { animation-delay: -1.6s; }

  @keyframes vrad-tube-glow {
    0% { filter: brightness(0.85); box-shadow: 0 0 4px rgba(140, 255, 170, 0.6); }
    100% { filter: brightness(1.3); box-shadow: 0 0 10px rgba(190, 255, 205, 1); }
  }

  /* Magic-eye tuning indicator tube (6E5 cathode-ray target) */
  .vrad-eye {
    position: absolute;
    left: 36px;
    top: 38px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(190, 255, 205, 1), rgba(0, 180, 40, 0.9) 70%, rgba(0, 40, 8, 1));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.9);
    overflow: hidden;
  }

  /* Magic-eye green phosphor aperture shadow angle converging */
  .vrad-eye-beam {
    position: absolute;
    inset: 0;
    clip-path: polygon(50% 50%, 0 0, 100% 0);
    background: rgba(0, 30, 6, 0.95);
    animation: vrad-eye-tune 4.2s ease-in-out infinite;
  }

  @keyframes vrad-eye-tune {
    0%, 100% { transform: scaleX(1.4); }
    50% { transform: scaleX(0.2); }
  }

  /* Frequency tuning dial glass window */
  .vrad-dial {
    position: absolute;
    left: 16px;
    top: 60px;
    width: 58px;
    height: 10px;
    border-radius: 2px;
    background: rgba(0, 20, 4, 0.95);
    border: 1px solid rgba(140, 255, 170, 0.8);
    overflow: hidden;
  }

  /* Dial frequency tick marks */
  .vrad-ticks {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(90deg, rgba(140, 255, 170, 0.6) 0 1px, transparent 1px 6px);
  }

  /* Tuning needle pointer sweeping frequencies */
  .vrad-needle {
    position: absolute;
    top: 0;
    width: 2px;
    height: 100%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 1);
    animation: vrad-dial-sweep 4.2s ease-in-out infinite alternate;
  }

  @keyframes vrad-dial-sweep {
    0% { left: 4px; }
    100% { left: 52px; }
  }

  /* Rotary control knobs */
  .vrad-knob {
    position: absolute;
    bottom: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, rgba(140, 255, 170, 0.95), rgba(0, 80, 16, 0.9));
    border: 1px solid var(--accent, #00cc00);
  }

  .vrad-knob.kl { left: 18px; }
  .vrad-knob.kr { right: 18px; }
`;

class ConceptVacuumRadio extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${vacuumRadioStyles}</style>
      <div class="vrad">
        <div class="vrad-cabinet">
          <div class="vrad-tubes">
            <div class="vrad-tube t1"></div>
            <div class="vrad-tube t2"></div>
            <div class="vrad-tube t3"></div>
          </div>
          <div class="vrad-eye">
            <div class="vrad-eye-beam"></div>
          </div>
          <div class="vrad-dial">
            <div class="vrad-ticks"></div>
            <div class="vrad-needle"></div>
          </div>
          <div class="vrad-knob kl"></div>
          <div class="vrad-knob kr"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-vacuum-radio')) {
  customElements.define('concept-vacuum-radio', ConceptVacuumRadio);
}
