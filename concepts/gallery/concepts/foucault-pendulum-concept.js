const foucaultStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .foc {
    width: 116px;
    height: 106px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 260px;
  }

  /* Floor dial / compass ring with perspective tilt */
  .foc-floor {
    position: absolute;
    bottom: 6px;
    width: 90px;
    height: 38px;
    border-radius: 50%;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    background: radial-gradient(ellipse at 50% 50%, rgba(0, 40, 10, 0.5), #020703 80%);
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.2);
    transform: rotateX(55deg);
  }

  /* Standing pins / pegs around ring */
  .foc-pin {
    position: absolute;
    width: 2px;
    height: 8px;
    background: #d6ffe0;
    border-radius: 1px;
    box-shadow: 0 0 4px #8cffaa;
  }

  .foc-pin.p1 { left: 14px; top: 14px; }
  .foc-pin.p2 { right: 14px; top: 14px; }
  .foc-pin.p3 { left: 44px; top: 2px; }
  .foc-pin.p4 { left: 44px; bottom: 2px; }
  .foc-pin.p5 { left: 24px; top: 26px; }
  .foc-pin.p6 { right: 24px; top: 26px; }

  /* Knocked down pin */
  .foc-pin.fallen {
    height: 2px;
    width: 7px;
    background: rgba(140, 255, 170, 0.5);
    box-shadow: none;
    transform: rotate(20deg);
  }

  /* Suspension ceiling anchor */
  .foc-ceiling {
    position: absolute;
    top: 4px;
    width: 18px;
    height: 5px;
    background: rgba(0, 180, 30, 0.8);
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
  }

  /* Precessing plane gimbal */
  .foc-plane {
    position: absolute;
    top: 6px;
    width: 80px;
    height: 86px;
    animation: foc-precession 20s linear infinite;
  }

  @keyframes foc-precession {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Swing arm oscillation */
  .foc-arm {
    position: absolute;
    top: 0;
    left: 39px;
    width: 2px;
    height: 80px;
    transform-origin: top center;
    animation: foc-swing 2.8s ease-in-out infinite alternate;
  }

  @keyframes foc-swing {
    0% { transform: rotate(-28deg); }
    100% { transform: rotate(28deg); }
  }

  /* Wire */
  .foc-wire {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 68px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(140, 255, 170, 0.7));
  }

  /* Heavy brass bob */
  .foc-bob {
    position: absolute;
    bottom: 2px;
    left: -6px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #8cffaa 40%, #007711 90%);
    border: 1px solid #d6ffe0;
    box-shadow: 0 0 10px #8cffaa, inset 0 0 4px #003300;
  }

  /* Pointer tip at bottom of bob */
  .foc-bob::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 5px;
    width: 2px;
    height: 5px;
    background: #ffffff;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }

  /* Shadow on floor following pendulum */
  .foc-shadow {
    position: absolute;
    bottom: 12px;
    width: 14px;
    height: 6px;
    border-radius: 50%;
    background: rgba(0, 204, 0, 0.25);
    filter: blur(1.5px);
    animation: foc-shadow-swing 2.8s ease-in-out infinite alternate;
  }

  @keyframes foc-shadow-swing {
    0% { transform: translateX(-24px) scale(0.8); opacity: 0.2; }
    50% { opacity: 0.6; }
    100% { transform: translateX(24px) scale(0.8); opacity: 0.2; }
  }
`;

class ConceptFoucaultPendulum extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${foucaultStyles}</style>
      <div class="foc">
        <div class="foc-floor">
          <div class="foc-pin p1 fallen"></div>
          <div class="foc-pin p2"></div>
          <div class="foc-pin p3"></div>
          <div class="foc-pin p4"></div>
          <div class="foc-pin p5"></div>
          <div class="foc-pin p6"></div>
        </div>
        <div class="foc-shadow"></div>
        <div class="foc-ceiling"></div>
        <div class="foc-plane">
          <div class="foc-arm">
            <div class="foc-wire"></div>
            <div class="foc-bob"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-foucault-pendulum')) {
  customElements.define('concept-foucault-pendulum', ConceptFoucaultPendulum);
}
