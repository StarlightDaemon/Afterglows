const airlockStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .alk {
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

  /* Airlock chamber hull bulkhead */
  .alk-bulkhead {
    position: relative;
    width: 84px;
    height: 76px;
    background: #011206;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 6px;
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Dual sliding hermetic blast door leaves */
  .alk-door-l {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 42px;
    background: linear-gradient(90deg, #008818, #012209);
    border-right: 2px solid #ffffff;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.4);
    z-index: 3;
    animation: alk-door-cycle-l 2.8s cubic-bezier(0.7, 0, 0.3, 1) infinite alternate;
  }

  .alk-door-r {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 42px;
    background: linear-gradient(270deg, #008818, #012209);
    border-left: 2px solid #ffffff;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.4);
    z-index: 3;
    animation: alk-door-cycle-r 2.8s cubic-bezier(0.7, 0, 0.3, 1) infinite alternate;
  }

  @keyframes alk-door-cycle-l {
    0%, 20% { transform: translateX(0); } /* Sealed */
    80%, 100% { transform: translateX(-34px); } /* Open */
  }

  @keyframes alk-door-cycle-r {
    0%, 20% { transform: translateX(0); } /* Sealed */
    80%, 100% { transform: translateX(34px); } /* Open */
  }

  /* Rotating perimeter locking lugs */
  .alk-locking-lug {
    position: absolute;
    width: 6px;
    height: 14px;
    background: #ffd700;
    border-radius: 2px;
    box-shadow: 0 0 4px #ffd700;
    z-index: 4;
    animation: alk-lug-turn 2.8s ease-in-out infinite alternate;
  }

  .alk-lug-top { top: 6px; left: 39px; }
  .alk-lug-bot { bottom: 6px; left: 39px; }

  @keyframes alk-lug-turn {
    0%, 25% { transform: rotate(90deg); }
    75%, 100% { transform: rotate(0deg); }
  }

  /* Pressurized cargo pod traversing the chamber */
  .alk-cargo-pod {
    position: absolute;
    width: 22px;
    height: 26px;
    background: #0284c7;
    border: 1.5px solid #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 8px #38bdf8;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: alk-cargo-travel 2.8s ease-in-out infinite alternate;
  }

  .alk-cargo-pod::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background: #fbbf24;
    box-shadow: 0 0 4px #fbbf24;
  }

  @keyframes alk-cargo-travel {
    0% { transform: translateX(-36px); opacity: 0.3; }
    30% { opacity: 1; }
    70% { opacity: 1; }
    100% { transform: translateX(36px); opacity: 0.3; }
  }

  /* Hazard warning beacon at top */
  .alk-beacon {
    position: absolute;
    top: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px #ffffff;
    z-index: 5;
    animation: alk-beacon-flash 0.6s ease-in-out infinite alternate;
  }

  @keyframes alk-beacon-flash {
    0% { opacity: 0.3; }
    100% { opacity: 1; filter: drop-shadow(0 0 8px #ffffff); }
  }

  /* Rapid depressurization vapor jet wisps */
  .alk-vapor-vent-l {
    position: absolute;
    left: 6px;
    top: 32px;
    width: 24px;
    height: 12px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.9), transparent 80%);
    filter: blur(1px);
    z-index: 4;
    animation: alk-vent 2.8s ease-in-out infinite alternate;
  }

  .alk-vapor-vent-r {
    position: absolute;
    right: 6px;
    top: 32px;
    width: 24px;
    height: 12px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.9), transparent 80%);
    filter: blur(1px);
    z-index: 4;
    animation: alk-vent 2.8s ease-in-out infinite alternate;
  }

  @keyframes alk-vent {
    0%, 30% { opacity: 0; transform: scale(0.2); }
    50%, 75% { opacity: 0.9; transform: scale(1.3); }
    90%, 100% { opacity: 0; transform: scale(0.2); }
  }

  /* Status telemetry readout */
  .alk-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptAirlockCycle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${airlockStyles}</style>
      <div class="alk">
        <div class="alk-bulkhead">
          <div class="alk-beacon"></div>
          <div class="alk-vapor-vent-l"></div>
          <div class="alk-vapor-vent-r"></div>

          <div class="alk-cargo-pod"></div>

          <div class="alk-locking-lug alk-lug-top"></div>
          <div class="alk-locking-lug alk-lug-bot"></div>

          <div class="alk-door-l"></div>
          <div class="alk-door-r"></div>
        </div>

        <div class="alk-label">CYCLE: ACTIVE DEPLOY</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-airlock-cycle')) {
  customElements.define('concept-airlock-cycle', ConceptAirlockCycle);
}
