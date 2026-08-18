const moonPhaseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor moon phase --- */
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
    background: radial-gradient(circle at 38% 34%, #ffffff, #a8e4a2 55%, #619f5e);
    box-shadow: 0 0 16px rgba(0, 255, 100, 0.5);
    overflow: hidden;
    animation: moon-libration 2.4s ease-in-out infinite alternate;
  }

  @keyframes moon-libration {
    0% { transform: rotate(-8deg) scale(0.96); }
    100% { transform: rotate(8deg) scale(1.04); }
  }

  .moon-craters {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 26%, rgba(60, 110, 58, 0.7) 0 5px, transparent 6px),
      radial-gradient(circle at 66% 44%, rgba(60, 110, 58, 0.6) 0 7px, transparent 8px),
      radial-gradient(circle at 42% 68%, rgba(60, 110, 58, 0.65) 0 4px, transparent 5px),
      radial-gradient(circle at 74% 74%, rgba(60, 110, 58, 0.55) 0 3px, transparent 4px),
      radial-gradient(circle at 22% 52%, rgba(60, 110, 58, 0.5) 0 3px, transparent 4px);
    opacity: 0.9;
  }

  .moon-shadow {
    position: absolute;
    top: -4px;
    left: -4px;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: #020502;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.95);
    animation: moon-cycle 2.4s ease-in-out infinite alternate;
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
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid rgba(170, 255, 170, 0.8);
    background: transparent;
    animation: moon-tick 2.4s linear infinite;
  }

  .moon-phase-tick.t2 { animation-delay: -1.8s; }
  .moon-phase-tick.t3 { animation-delay: -1.2s; }
  .moon-phase-tick.t4 { animation-delay: -0.6s; }

  @keyframes moon-cycle {
    0% { transform: translateX(-76px); }
    100% { transform: translateX(76px); }
  }

  @keyframes moon-tick {
    0%, 100% { background: transparent; box-shadow: none; }
    50% {
      background: #00ff66;
      box-shadow: 0 0 8px #00ff66;
    }
  }

  /* --- v2: Astronomical lunar regolith & maria realism --- */
  .mpc {
    width: 96px;
    height: 96px;
    position: relative;
  }

  .mpc-moon {
    position: absolute;
    top: 14px;
    left: 14px;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 34%, #ffffff, #e2e8f0 55%, #94a3b8);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
    overflow: hidden;
    animation: moon-libration 2.4s ease-in-out infinite alternate;
  }

  .mpc-craters {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 26%, rgba(71, 85, 105, 0.85) 0 5px, transparent 6px),
      radial-gradient(circle at 66% 44%, rgba(51, 65, 85, 0.8) 0 7px, transparent 8px),
      radial-gradient(circle at 42% 68%, rgba(71, 85, 105, 0.8) 0 4px, transparent 5px),
      radial-gradient(circle at 74% 74%, rgba(51, 65, 85, 0.7) 0 3px, transparent 4px),
      radial-gradient(circle at 22% 52%, rgba(71, 85, 105, 0.75) 0 3px, transparent 4px);
    opacity: 0.95;
  }

  .mpc-shadow {
    position: absolute;
    top: -4px;
    left: -4px;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: #030712;
    box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.98), 0 0 10px rgba(0, 0, 0, 0.95);
    animation: moon-cycle 2.4s ease-in-out infinite alternate;
  }

  .mpc-track {
    position: absolute;
    left: 50%;
    bottom: 0;
    display: flex;
    gap: 7px;
    transform: translateX(-50%);
  }

  .mpc-tick {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid #38bdf8;
    background: transparent;
    animation: mpc-tick 2.4s linear infinite;
  }

  .mpc-tick.t2 { animation-delay: -1.8s; }
  .mpc-tick.t3 { animation-delay: -1.2s; }
  .mpc-tick.t4 { animation-delay: -0.6s; }

  @keyframes mpc-tick {
    0%, 100% { background: transparent; box-shadow: none; }
    50% {
      background: #38bdf8;
      box-shadow: 0 0 8px #00f0ff;
    }
  }
`;

const moonPhaseMarkup = {
  v1: `
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
  `,
  v2: `
    <div class="mpc">
      <div class="mpc-moon">
        <div class="mpc-craters"></div>
        <div class="mpc-shadow"></div>
      </div>
      <div class="mpc-track">
        <span class="mpc-tick t1"></span>
        <span class="mpc-tick t2"></span>
        <span class="mpc-tick t3"></span>
        <span class="mpc-tick t4"></span>
      </div>
    </div>
  `,
};

class ConceptMoonPhase extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${moonPhaseStyles}</style>${moonPhaseMarkup[version] || moonPhaseMarkup.v2}`;
  }
}

if (!customElements.get('concept-moon-phase')) {
  customElements.define('concept-moon-phase', ConceptMoonPhase);
}
