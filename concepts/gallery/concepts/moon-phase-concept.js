const moonPhaseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .moon-phase {
    width: 96px;
    height: 96px;
    position: relative;
  }

  .moon {
    position: absolute;
    top: 14px;
    left: 14px;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 34%, #ecffe6, #a8e4a2 55%, #619f5e);
    box-shadow: 0 0 14px rgba(170, 255, 170, 0.22);
    overflow: hidden;
  }

  .moon-craters {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 26%, rgba(60, 110, 58, 0.55) 0 5px, transparent 6px),
      radial-gradient(circle at 66% 44%, rgba(60, 110, 58, 0.45) 0 7px, transparent 8px),
      radial-gradient(circle at 42% 68%, rgba(60, 110, 58, 0.5) 0 4px, transparent 5px),
      radial-gradient(circle at 74% 74%, rgba(60, 110, 58, 0.4) 0 3px, transparent 4px),
      radial-gradient(circle at 22% 52%, rgba(60, 110, 58, 0.35) 0 3px, transparent 4px);
    opacity: 0.8;
  }

  .moon-shadow {
    position: absolute;
    top: -4px;
    left: -4px;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: #020502;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.85);
    animation: moon-cycle 9s ease-in-out infinite;
  }

  .moon-phase-track {
    position: absolute;
    left: 50%;
    bottom: 0;
    display: flex;
    gap: 7px;
    transform: translateX(-50%);
  }

  .moon-phase-tick {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 1px solid rgba(170, 255, 170, 0.5);
    background: transparent;
    animation: moon-tick 9s linear infinite;
  }

  .moon-phase-tick.t2 { animation-delay: -6.75s; }
  .moon-phase-tick.t3 { animation-delay: -4.5s; }
  .moon-phase-tick.t4 { animation-delay: -2.25s; }

  @keyframes moon-cycle {
    0% { transform: translateX(-84px); }
    16% { transform: translateX(-46px); }
    30% { transform: translateX(0); }
    44% { transform: translateX(0); }
    58% { transform: translateX(44px); }
    76% { transform: translateX(84px); }
    100% { transform: translateX(-84px); }
  }

  @keyframes moon-tick {
    0%, 78%, 100% { background: transparent; box-shadow: none; }
    80%, 98% {
      background: rgba(190, 255, 190, 0.95);
      box-shadow: 0 0 6px rgba(170, 255, 170, 0.55);
    }
  }
`;

class ConceptMoonPhase extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${moonPhaseStyles}</style>
      <div class="moon-phase">
        <div class="moon">
          <div class="moon-craters"></div>
          <div class="moon-shadow"></div>
        </div>
        <div class="moon-phase-track">
          <span class="moon-phase-tick t1"></span>
          <span class="moon-phase-tick t2"></span>
          <span class="moon-phase-tick t3"></span>
          <span class="moon-phase-tick t4"></span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-moon-phase')) {
  customElements.define('concept-moon-phase', ConceptMoonPhase);
}
