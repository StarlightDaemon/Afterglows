const radiometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rad {
    width: 116px;
    height: 108px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Glass bulb */
  .rad-bulb {
    position: absolute;
    top: 4px;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    border: 1.5px solid rgba(140, 255, 170, 0.7);
    background: radial-gradient(circle at 35% 30%, rgba(140, 255, 170, 0.18), rgba(0, 30, 8, 0.4) 60%, rgba(0, 15, 4, 0.8));
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.25), 0 0 8px rgba(0, 204, 0, 0.15);
  }

  /* Glass bulb specular highlight */
  .rad-specular {
    position: absolute;
    top: 10px;
    left: 26px;
    width: 24px;
    height: 14px;
    border-radius: 50%;
    transform: rotate(-35deg);
    background: radial-gradient(ellipse, rgba(240, 255, 240, 0.6) 0%, rgba(190, 255, 205, 0) 70%);
    pointer-events: none;
  }

  /* Glass stem & base */
  .rad-stem {
    position: absolute;
    bottom: 12px;
    width: 14px;
    height: 22px;
    border-left: 1.5px solid rgba(140, 255, 170, 0.6);
    border-right: 1.5px solid rgba(140, 255, 170, 0.6);
    background: rgba(0, 40, 10, 0.4);
  }

  .rad-base {
    position: absolute;
    bottom: 6px;
    width: 42px;
    height: 9px;
    border-radius: 4px;
    border: 1.5px solid var(--accent, #00cc00);
    background: linear-gradient(180deg, rgba(0, 120, 25, 0.8), rgba(0, 30, 8, 0.95));
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  /* Central spindle needle */
  .rad-spindle {
    position: absolute;
    top: 26px;
    width: 2px;
    height: 44px;
    background: linear-gradient(180deg, #f2ffdd, rgba(140, 255, 170, 0.8), rgba(0, 140, 28, 0.6));
    border-radius: 1px;
    z-index: 2;
  }

  .rad-pivot-cap {
    position: absolute;
    top: 22px;
    width: 6px;
    height: 8px;
    background: #ffffff;
    border-radius: 3px 3px 1px 1px;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 3;
  }

  /* Rotor vane assembly rotating in 3D */
  .rad-rotor {
    position: absolute;
    top: 28px;
    width: 62px;
    height: 26px;
    transform-style: preserve-3d;
    animation: rad-spin 2.6s linear infinite;
    z-index: 2;
  }

  @keyframes rad-spin {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }

  /* 4 Vanes */
  .rad-vane {
    position: absolute;
    top: 3px;
    width: 14px;
    height: 18px;
    border-radius: 1px;
    box-sizing: border-box;
    backface-visibility: visible;
  }

  /* Vane 1: North arm */
  .rad-vane.v1 {
    left: 24px;
    transform-origin: center center;
    transform: translateZ(24px);
    background: linear-gradient(90deg, #112211 0% 48%, rgba(200, 255, 215, 0.95) 52% 100%);
    border: 1px solid rgba(140, 255, 170, 0.8);
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.4);
  }

  /* Vane 2: South arm */
  .rad-vane.v2 {
    left: 24px;
    transform-origin: center center;
    transform: translateZ(-24px) rotateY(180deg);
    background: linear-gradient(90deg, #112211 0% 48%, rgba(200, 255, 215, 0.95) 52% 100%);
    border: 1px solid rgba(140, 255, 170, 0.8);
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.4);
  }

  /* Vane 3: East arm */
  .rad-vane.v3 {
    left: 24px;
    transform-origin: center center;
    transform: translateX(24px) rotateY(90deg);
    background: linear-gradient(90deg, #112211 0% 48%, rgba(200, 255, 215, 0.95) 52% 100%);
    border: 1px solid rgba(140, 255, 170, 0.8);
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.4);
  }

  /* Vane 4: West arm */
  .rad-vane.v4 {
    left: 24px;
    transform-origin: center center;
    transform: translateX(-24px) rotateY(-90deg);
    background: linear-gradient(90deg, #112211 0% 48%, rgba(200, 255, 215, 0.95) 52% 100%);
    border: 1px solid rgba(140, 255, 170, 0.8);
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.4);
  }

  /* Wire cross arms connecting to spindle */
  .rad-rotor::before {
    content: '';
    position: absolute;
    top: 11px;
    left: 7px;
    width: 48px;
    height: 1px;
    background: rgba(190, 255, 205, 0.9);
  }

  .rad-rotor::after {
    content: '';
    position: absolute;
    top: 11px;
    left: 7px;
    width: 48px;
    height: 1px;
    background: rgba(190, 255, 205, 0.9);
    transform: rotateY(90deg);
  }

  /* Incident thermal radiation rays */
  .rad-light-rays {
    position: absolute;
    left: 0;
    top: 20px;
    width: 30px;
    height: 40px;
    pointer-events: none;
  }

  .rad-ray {
    position: absolute;
    height: 1.5px;
    background: linear-gradient(90deg, rgba(255, 255, 180, 0.8), transparent);
    animation: rad-beam-pulse 1.8s ease-in-out infinite alternate;
  }
  .rad-ray.r1 { top: 6px; width: 28px; transform: rotate(15deg); }
  .rad-ray.r2 { top: 18px; width: 32px; transform: rotate(15deg); animation-delay: 0.3s; }
  .rad-ray.r3 { top: 30px; width: 26px; transform: rotate(15deg); animation-delay: 0.6s; }

  @keyframes rad-beam-pulse {
    0% { opacity: 0.3; }
    100% { opacity: 0.9; filter: drop-shadow(0 0 3px rgba(255, 255, 180, 0.8)); }
  }
`;

class ConceptCrookesRadiometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${radiometerStyles}</style>
      <div class="rad">
        <div class="rad-light-rays">
          <div class="rad-ray r1"></div>
          <div class="rad-ray r2"></div>
          <div class="rad-ray r3"></div>
        </div>
        <div class="rad-bulb"></div>
        <div class="rad-specular"></div>
        <div class="rad-stem"></div>
        <div class="rad-base"></div>
        <div class="rad-spindle"></div>
        <div class="rad-pivot-cap"></div>
        <div class="rad-rotor">
          <div class="rad-vane v1"></div>
          <div class="rad-vane v2"></div>
          <div class="rad-vane v3"></div>
          <div class="rad-vane v4"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-crookes-radiometer')) {
  customElements.define('concept-crookes-radiometer', ConceptCrookesRadiometer);
}
