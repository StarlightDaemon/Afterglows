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

  /* Rotating rubber belt with charge dots */
  .vdg-belt {
    position: absolute;
    left: 4px;
    top: -20px;
    width: 6px;
    height: 80px;
    background: repeating-linear-gradient(
      180deg,
      #8cffaa 0px,
      #8cffaa 4px,
      rgba(0, 100, 20, 0.8) 4px,
      rgba(0, 100, 20, 0.8) 8px
    );
    animation: vdg-belt-run 0.35s linear infinite;
  }

  @keyframes vdg-belt-run {
    0% { transform: translateY(0); }
    100% { transform: translateY(-8px); }
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
    0% { filter: drop-shadow(0 0 4px #8cffaa); }
    85% { filter: drop-shadow(0 0 16px #ffffff); }
    90%, 100% { filter: drop-shadow(0 0 4px #8cffaa); }
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
    0%, 86% { opacity: 0; }
    88% { opacity: 1; filter: drop-shadow(0 0 6px #ffffff); }
    90% { opacity: 0; }
    92% { opacity: 1; filter: drop-shadow(0 0 10px #ffffff); }
    96%, 100% { opacity: 0; }
  }

  /* Electrostatic corona discharge aura */
  .vdg-corona {
    position: absolute;
    top: 2px;
    left: 11px;
    width: 56px;
    height: 52px;
    border-radius: 50%;
    border: 1px dotted rgba(214, 255, 224, 0.5);
    animation: vdg-corona-pulse 1.2s ease-in-out infinite alternate;
  }

  @keyframes vdg-corona-pulse {
    0% { transform: scale(0.96); opacity: 0.2; }
    100% { transform: scale(1.06); opacity: 0.8; }
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
        </div>
        <div class="vdg-dome"></div>

        <div class="vdg-ground-rod"></div>
        <div class="vdg-ground-sphere"></div>

        <svg class="vdg-spark-svg" viewBox="0 0 46 28">
          <polyline points="2,14 12,6 18,20 28,8 34,22 42,12" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          <polyline points="12,6 16,2 24,10" stroke="#8cffaa" stroke-width="1.2" fill="none" />
          <polyline points="28,8 32,4 38,12" stroke="#8cffaa" stroke-width="1.2" fill="none" />
        </svg>
      </div>
    `;
  }
}

if (!customElements.get('concept-van-de-graaff')) {
  customElements.define('concept-van-de-graaff', ConceptVanDeGraaff);
}
