const solenoidStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sol {
    width: 118px;
    height: 102px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Engine mounting base */
  .sol-base {
    position: absolute;
    bottom: 12px;
    width: 106px;
    height: 10px;
    background: linear-gradient(180deg, #008818, #011404);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 3px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  /* Solenoid coil barrel */
  .sol-coil-casing {
    position: absolute;
    left: 10px;
    top: 36px;
    width: 44px;
    height: 28px;
    border: 1.5px solid var(--accent, #00cc00);
    background: #020903;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 2px;
    box-sizing: border-box;
    z-index: 2;
  }

  .sol-windings {
    width: 4px;
    height: 20px;
    background: #8cffaa;
    border-radius: 1px;
    animation: sol-coil-flash 1.2s cubic-bezier(0.1, 0.7, 0.3, 1) infinite;
  }

  @keyframes sol-coil-flash {
    0%, 30% { background: #ffffff; box-shadow: 0 0 8px #d6ffe0; }
    40%, 100% { background: rgba(0, 140, 28, 0.7); box-shadow: none; }
  }

  /* Plunger iron core translating in/out */
  .sol-plunger {
    position: absolute;
    top: 45px;
    left: 20px;
    width: 32px;
    height: 10px;
    background: linear-gradient(180deg, #d6ffe0, #007711);
    border: 1px solid #ffffff;
    border-radius: 2px;
    z-index: 3;
    animation: sol-plunger-move 1.2s ease-in-out infinite;
  }

  @keyframes sol-plunger-move {
    0% { transform: translateX(0); }
    50% { transform: translateX(20px); }
    100% { transform: translateX(0); }
  }

  /* Connecting rod linking plunger to crank */
  .sol-conrod {
    position: absolute;
    top: 48px;
    left: 48px;
    width: 34px;
    height: 4px;
    background: #8cffaa;
    border: 1px solid #004408;
    border-radius: 2px;
    transform-origin: left center;
    z-index: 3;
    animation: sol-conrod-swing 1.2s ease-in-out infinite;
  }

  @keyframes sol-conrod-swing {
    0% { transform: translateX(0) rotate(0deg); }
    25% { transform: translateX(10px) rotate(-14deg); }
    50% { transform: translateX(20px) rotate(0deg); }
    75% { transform: translateX(10px) rotate(14deg); }
    100% { transform: translateX(0) rotate(0deg); }
  }

  /* Rotating flywheel with crank pin & counterweight */
  .sol-flywheel {
    position: absolute;
    right: 8px;
    top: 26px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 50% 50%, #010602 0%, #003308 80%);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.4);
    animation: sol-flywheel-spin 1.2s linear infinite;
    z-index: 2;
  }

  @keyframes sol-flywheel-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Flywheel spokes and crank pin */
  .sol-spoke {
    position: absolute;
    top: 22px;
    left: 3px;
    width: 42px;
    height: 2px;
    background: rgba(140, 255, 170, 0.7);
  }
  .sol-spoke.s2 { transform: rotate(90deg); }

  .sol-crankpin {
    position: absolute;
    top: 4px;
    left: 20px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #00aa22;
    box-shadow: 0 0 6px #8cffaa;
  }

  /* Magnetic flux pulse rings */
  .sol-flux {
    position: absolute;
    left: 2px;
    top: 28px;
    width: 60px;
    height: 44px;
    pointer-events: none;
    z-index: 1;
  }
`;

class ConceptSolenoidEngine extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${solenoidStyles}</style>
      <div class="sol">
        <svg class="sol-flux" viewBox="0 0 60 44">
          <ellipse cx="30" cy="22" rx="26" ry="18" stroke="rgba(140, 255, 170, 0.35)" stroke-width="1" stroke-dasharray="2,3" fill="none" />
        </svg>
        <div class="sol-base"></div>
        <div class="sol-coil-casing">
          <div class="sol-windings"></div>
          <div class="sol-windings"></div>
          <div class="sol-windings"></div>
          <div class="sol-windings"></div>
          <div class="sol-windings"></div>
        </div>
        <div class="sol-plunger"></div>
        <div class="sol-conrod"></div>
        <div class="sol-flywheel">
          <div class="sol-spoke s1"></div>
          <div class="sol-spoke s2"></div>
          <div class="sol-crankpin"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-solenoid-engine')) {
  customElements.define('concept-solenoid-engine', ConceptSolenoidEngine);
}
