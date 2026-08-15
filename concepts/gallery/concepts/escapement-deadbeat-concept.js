const deadbeatStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dbt {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Escape wheel */
  .dbt-escape-wheel {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 48px;
    height: 48px;
    margin-left: -24px;
    border: 1.5px solid #00cc00;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.3);
    animation: dbt-step-rot 2s steps(8) infinite;
  }

  @keyframes dbt-step-rot {
    to { transform: rotate(360deg); }
  }

  .dbt-tooth {
    position: absolute;
    width: 2px;
    height: 6px;
    background: #ffffff;
    border-radius: 1px;
  }

  .t0 { top: -4px; left: 23px; transform: rotate(15deg); }
  .t1 { top: 3px; right: 3px; transform: rotate(60deg); }
  .t2 { top: 21px; right: -4px; transform: rotate(105deg); }
  .t3 { bottom: 3px; right: 3px; transform: rotate(150deg); }
  .t4 { bottom: -4px; left: 23px; transform: rotate(195deg); }
  .t5 { bottom: 3px; left: 3px; transform: rotate(240deg); }
  .t6 { top: 21px; left: -4px; transform: rotate(285deg); }
  .t7 { top: 3px; left: 3px; transform: rotate(330deg); }

  /* Deadbeat anchor fork pallets rocking on pivot */
  .dbt-anchor-fork {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 52px;
    height: 24px;
    margin-left: -26px;
    transform-origin: 50% 0%;
    animation: dbt-pallet-rock 2s ease-in-out infinite;
  }

  @keyframes dbt-pallet-rock {
    0%, 100% { transform: rotate(-12deg); }
    50% { transform: rotate(12deg); }
  }

  /* Pallet arms and jewel pads */
  .dbt-pallet-left {
    position: absolute;
    left: 4px;
    top: 6px;
    width: 6px;
    height: 12px;
    background: linear-gradient(135deg, #ffffff, #00ffaa);
    border-radius: 1px;
    box-shadow: 0 0 4px #8cffaa;
  }

  .dbt-pallet-right {
    position: absolute;
    right: 4px;
    top: 6px;
    width: 6px;
    height: 12px;
    background: linear-gradient(225deg, #ffffff, #00ffaa);
    border-radius: 1px;
    box-shadow: 0 0 4px #8cffaa;
  }

  /* Anchor pivot */
  .dbt-pivot {
    position: absolute;
    top: 12px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    z-index: 5;
  }

  /* Pendulum crutch wire swinging down */
  .dbt-crutch {
    position: absolute;
    top: 15px;
    left: 50%;
    width: 1.5px;
    height: 68px;
    background: linear-gradient(180deg, #ffffff, rgba(0, 204, 0, 0.4));
    transform-origin: 50% 0%;
    animation: dbt-pallet-rock 2s ease-in-out infinite;
    pointer-events: none;
  }

  .dbt-bob {
    position: absolute;
    bottom: 0;
    left: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #00ff66;
    box-shadow: 0 0 8px #8cffaa;
  }

  .dbt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptEscapementDeadbeat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${deadbeatStyles}</style>
      <div class="dbt">
        <div class="dbt-escape-wheel">
          <div class="dbt-tooth t0"></div>
          <div class="dbt-tooth t1"></div>
          <div class="dbt-tooth t2"></div>
          <div class="dbt-tooth t3"></div>
          <div class="dbt-tooth t4"></div>
          <div class="dbt-tooth t5"></div>
          <div class="dbt-tooth t6"></div>
          <div class="dbt-tooth t7"></div>
        </div>

        <div class="dbt-anchor-fork">
          <div class="dbt-pallet-left"></div>
          <div class="dbt-pallet-right"></div>
          <svg style="position: absolute; inset: 0; width: 100%; height: 100%;" viewBox="0 0 52 24">
            <path d="M 26 0 L 7 12 M 26 0 L 45 12" fill="none" stroke="#d6ffe0" stroke-width="1.8" />
          </svg>
        </div>

        <div class="dbt-pivot"></div>

        <div class="dbt-crutch">
          <div class="dbt-bob"></div>
        </div>

        <div class="dbt-label">DEADBEAT ESCAPEMENT</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-escapement-deadbeat')) {
  customElements.define('concept-escapement-deadbeat', ConceptEscapementDeadbeat);
}
