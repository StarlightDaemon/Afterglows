const centrifugalGovernorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A Watt centrifugal flyball steam governor: a vertical spindle accelerates,
     swinging hinged brass counterweights outward under centrifugal force to lift
     a sliding throttle collar in classic negative-feedback speed regulation. */
  .gov {
    width: 114px;
    height: 100px;
    position: relative;
  }

  /* Vertical drive spindle */
  .gov-spindle {
    position: absolute;
    left: 55px;
    top: 8px;
    width: 4px;
    height: 80px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(190, 255, 205, 1), rgba(0, 100, 20, 0.9));
    border: 1px solid var(--accent, #00cc00);
    z-index: 2;
  }

  /* Top mounting collar bracket */
  .gov-top-collar {
    position: absolute;
    left: 49px;
    top: 14px;
    width: 16px;
    height: 8px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.95);
    border: 1px solid var(--accent, #00cc00);
    z-index: 5;
  }

  /* Sliding sleeve collar lifting vertically with speed */
  .gov-slide-sleeve {
    position: absolute;
    left: 49px;
    top: 52px;
    width: 16px;
    height: 10px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 1);
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.8);
    z-index: 5;
    animation: gov-sleeve-lift 3.2s ease-in-out infinite alternate;
  }

  @keyframes gov-sleeve-lift {
    0% { transform: translateY(8px); }
    100% { transform: translateY(-16px); }
  }

  /* Left hinged flyball arm swinging outward */
  .gov-arm-l {
    position: absolute;
    left: 20px;
    top: 18px;
    width: 36px;
    height: 38px;
    transform-origin: right top;
    z-index: 3;
    animation: gov-swing-l 3.2s ease-in-out infinite alternate;
  }

  @keyframes gov-swing-l {
    0% { transform: rotate(-18deg); }
    100% { transform: rotate(-52deg); }
  }

  .gov-rod-l {
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;
    height: 2px;
    background: rgba(140, 255, 170, 0.9);
    transform-origin: right center;
    transform: rotate(45deg);
  }

  .gov-ball-l {
    position: absolute;
    left: 2px;
    bottom: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, rgba(190, 255, 205, 1), rgba(0, 160, 35, 0.9) 60%, rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.8);
  }

  /* Right hinged flyball arm swinging outward */
  .gov-arm-r {
    position: absolute;
    right: 20px;
    top: 18px;
    width: 36px;
    height: 38px;
    transform-origin: left top;
    z-index: 3;
    animation: gov-swing-r 3.2s ease-in-out infinite alternate;
  }

  @keyframes gov-swing-r {
    0% { transform: rotate(18deg); }
    100% { transform: rotate(52deg); }
  }

  .gov-rod-r {
    position: absolute;
    left: 0;
    top: 0;
    width: 32px;
    height: 2px;
    background: rgba(140, 255, 170, 0.9);
    transform-origin: left center;
    transform: rotate(-45deg);
  }

  .gov-ball-r {
    position: absolute;
    right: 2px;
    bottom: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, rgba(190, 255, 205, 1), rgba(0, 160, 35, 0.9) 60%, rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.8);
  }

  /* Lower linkage struts connecting balls to sliding sleeve */
  .gov-link-l {
    position: absolute;
    left: 36px;
    top: 48px;
    width: 20px;
    height: 2px;
    background: rgba(140, 255, 170, 0.8);
    transform-origin: right center;
    animation: gov-link-angle-l 3.2s ease-in-out infinite alternate;
    z-index: 3;
  }

  .gov-link-r {
    position: absolute;
    right: 36px;
    top: 48px;
    width: 20px;
    height: 2px;
    background: rgba(140, 255, 170, 0.8);
    transform-origin: left center;
    animation: gov-link-angle-r 3.2s ease-in-out infinite alternate;
    z-index: 3;
  }

  @keyframes gov-link-angle-l {
    0% { transform: rotate(-35deg); }
    100% { transform: rotate(-10deg); }
  }
  @keyframes gov-link-angle-r {
    0% { transform: rotate(35deg); }
    100% { transform: rotate(10deg); }
  }

  /* Base bevel gear drive */
  .gov-base {
    position: absolute;
    left: 38px;
    bottom: 8px;
    width: 38px;
    height: 12px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.9), rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }
`;

class ConceptCentrifugalGovernor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${centrifugalGovernorStyles}</style>
      <div class="gov">
        <div class="gov-spindle"></div>
        <div class="gov-top-collar"></div>
        <div class="gov-slide-sleeve"></div>
        <div class="gov-arm-l">
          <div class="gov-rod-l"></div>
          <div class="gov-ball-l"></div>
        </div>
        <div class="gov-arm-r">
          <div class="gov-rod-r"></div>
          <div class="gov-ball-r"></div>
        </div>
        <div class="gov-link-l"></div>
        <div class="gov-link-r"></div>
        <div class="gov-base"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-centrifugal-governor')) {
  customElements.define('concept-centrifugal-governor', ConceptCentrifugalGovernor);
}
