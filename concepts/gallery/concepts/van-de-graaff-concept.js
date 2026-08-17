const vdgStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vdg {
    width: 118px;
    height: 108px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Main column base */
  .vdg-base {
    position: absolute;
    bottom: 6px;
    left: 20px;
    width: 38px;
    height: 16px;
    background: linear-gradient(180deg, rgba(0, 100, 20, 0.9), #010602);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 3px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  /* Clear insulating column */
  .vdg-column {
    position: absolute;
    bottom: 22px;
    left: 31px;
    width: 16px;
    height: 48px;
    border-left: 1.5px solid rgba(140, 255, 170, 0.6);
    border-right: 1.5px solid rgba(140, 255, 170, 0.6);
    background: rgba(0, 40, 10, 0.25);
    overflow: hidden;
  }

  /* Rotating rubber belt */
  .vdg-belt {
    position: absolute;
    left: 5px;
    top: 0;
    width: 6px;
    height: 100%;
    background: rgba(0, 100, 20, 0.8);
    border-left: 1px solid #8cffaa;
    border-right: 1px solid #8cffaa;
  }

  /* Discrete electrostatic charge carrier packets traveling up to the dome */
  .vdg-charge-carrier {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #8cffaa;
    left: 6px;
    animation: vdg-charge-up 1.2s linear infinite;
  }

  .cg1 { animation-delay: 0s; }
  .cg2 { animation-delay: 0.4s; }
  .cg3 { animation-delay: 0.8s; }

  @keyframes vdg-charge-up {
    0% { bottom: 0; opacity: 0; transform: scale(0.6); }
    15% { opacity: 1; transform: scale(1); }
    85% { opacity: 1; transform: scale(1); }
    100% { bottom: 44px; opacity: 0; transform: scale(1.4); }
  }

  /* Top hollow dome electrode */
  .vdg-dome {
    position: absolute;
    top: 6px;
    left: 15px;
    width: 48px;
    height: 44px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #ffffff 0%, #8cffaa 30%, #006611 75%, #010a03 100%);
    border: 1.5px solid #d6ffe0;
    box-shadow: 0 0 12px rgba(140, 255, 170, 0.6);
    animation: vdg-dome-charge 2.4s ease-in-out infinite;
  }

  @keyframes vdg-dome-charge {
    0% { filter: drop-shadow(0 0 4px #8cffaa); transform: scale(0.98); }
    85% { filter: drop-shadow(0 0 18px #ffffff); transform: scale(1.02); }
    90%, 100% { filter: drop-shadow(0 0 4px #8cffaa); transform: scale(0.98); }
  }

  /* Grounded discharge sphere & stand */
  .vdg-ground-rod {
    position: absolute;
    bottom: 6px;
    right: 22px;
    width: 4px;
    height: 48px;
    background: linear-gradient(180deg, #d6ffe0, #008818);
    border-radius: 2px;
  }

  .vdg-ground-sphere {
    position: absolute;
    top: 26px;
    right: 14px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #ffffff, #8cffaa 45%, #004408 90%);
    border: 1.5px solid #d6ffe0;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
  }

  /* High-voltage electrostatic arc spark */
  .vdg-spark-svg {
    position: absolute;
    top: 20px;
    left: 45px;
    width: 46px;
    height: 28px;
    pointer-events: none;
    animation: vdg-spark-flash 2.4s ease-in-out infinite;
  }

  @keyframes vdg-spark-flash {
    0%, 82% { opacity: 0; transform: scaleX(0.2); }
    85% { opacity: 1; transform: scaleX(1); filter: drop-shadow(0 0 8px #ffffff); }
    88% { opacity: 0; }
    90% { opacity: 1; transform: scaleX(1); filter: drop-shadow(0 0 14px #ffffff); }
    95%, 100% { opacity: 0; }
  }

  /* Electrostatic corona discharge aura */
  .vdg-corona {
    position: absolute;
    top: 2px;
    left: 11px;
    width: 56px;
    height: 52px;
    border-radius: 50%;
    border: 1.5px dotted rgba(214, 255, 224, 0.7);
    animation: vdg-corona-pulse 1.2s ease-in-out infinite alternate;
  }

  @keyframes vdg-corona-pulse {
    0% { transform: scale(0.94); opacity: 0.3; }
    100% { transform: scale(1.1); opacity: 0.9; }
  }
`;

class ConceptVanDeGraaff extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${vdgStyles}</style>
      <div class="vdg">
        <div class="vdg-corona"></div>
        <div class="vdg-base"></div>
        <div class="vdg-column">
          <div class="vdg-belt"></div>
          <div class="vdg-charge-carrier cg1"></div>
          <div class="vdg-charge-carrier cg2"></div>
          <div class="vdg-charge-carrier cg3"></div>
        </div>
        <div class="vdg-dome"></div>

        <div class="vdg-ground-rod"></div>
        <div class="vdg-ground-sphere"></div>

        <svg class="vdg-spark-svg" viewBox="0 0 46 28">
          <polyline points="2,14 12,6 18,20 28,8 34,22 42,12" stroke="#ffffff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          <polyline points="12,6 16,2 24,10" stroke="#8cffaa" stroke-width="1.5" fill="none" />
          <polyline points="28,8 32,4 38,12" stroke="#8cffaa" stroke-width="1.5" fill="none" />
        </svg>
      </div>
    `;
  }
}

if (!customElements.get('concept-van-de-graaff')) {
  customElements.define('concept-van-de-graaff', ConceptVanDeGraaff);
}
