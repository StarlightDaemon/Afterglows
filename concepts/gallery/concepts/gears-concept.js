const gearsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gears {
    width: 104px;
    height: 104px;
    position: relative;
  }

  /* A gear is a spinning wrapper holding four tooth bars (an 8-point star)
     under a circular body, so only the bar tips show as teeth. */
  .gear {
    position: absolute;
    animation: gear-spin linear infinite;
  }

  .gear-tooth {
    position: absolute;
    top: 50%;
    left: -4px;
    right: -4px;
    height: 7px;
    margin-top: -3.5px;
    border-radius: 2px;
    background: #1d5c2e;
  }

  .gear-tooth.t2 { transform: rotate(45deg); }
  .gear-tooth.t3 { transform: rotate(90deg); }
  .gear-tooth.t4 { transform: rotate(135deg); }

  .gear-body {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #1a5229 0%, #0c2c14 60%, #071c0c 100%);
    border: 2px solid rgba(140, 255, 170, 0.55);
    box-sizing: border-box;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.25);
  }

  /* Axle hole + spoke cutouts on the body. */
  .gear-hub {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 26%;
    height: 26%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #010401;
    border: 1px solid rgba(140, 255, 170, 0.5);
  }

  .gear-spoke {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 68%;
    height: 3px;
    transform: translate(-50%, -50%);
    background: rgba(140, 255, 170, 0.22);
  }

  .gear-spoke.s2 { transform: translate(-50%, -50%) rotate(90deg); }

  .gear.big {
    top: 12px;
    left: 10px;
    width: 46px;
    height: 46px;
    animation-duration: 7s;
  }

  .gear.mid {
    top: 40px;
    left: 54px;
    width: 34px;
    height: 34px;
    animation-duration: 5.15s;
    animation-direction: reverse;
  }

  .gear.small {
    top: 66px;
    left: 26px;
    width: 24px;
    height: 24px;
    animation-duration: 3.65s;
    animation-direction: reverse;
  }

  .gear.small .gear-tooth { height: 5px; margin-top: -2.5px; left: -3px; right: -3px; }
  .gear.small .gear-body { border-width: 1px; }

  /* Faint mounting plate behind everything. */
  .gears-plate {
    position: absolute;
    inset: 8px;
    border-radius: 10px;
    border: 1px dashed rgba(0, 204, 0, 0.18);
  }

  /* Rivet glints wandering the plate corners (main-thread shimmer). */
  .gears-rivet {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.7);
    animation: gear-rivet 3.4s ease-in-out infinite;
  }

  .gears-rivet.r1 { top: 12px; left: 12px; }
  .gears-rivet.r2 { top: 12px; right: 12px; animation-delay: -0.9s; }
  .gears-rivet.r3 { bottom: 12px; right: 12px; animation-delay: -1.7s; }
  .gears-rivet.r4 { bottom: 12px; left: 12px; animation-delay: -2.5s; }

  @keyframes gear-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes gear-rivet {
    0%, 100% { opacity: 0.25; box-shadow: 0 0 0 rgba(190, 255, 205, 0); }
    50% { opacity: 1; box-shadow: 0 0 5px rgba(190, 255, 205, 0.6); }
  }
`;

function gearMarkup(sizeClass) {
  return `
    <div class="gear ${sizeClass}">
      <div class="gear-tooth"></div>
      <div class="gear-tooth t2"></div>
      <div class="gear-tooth t3"></div>
      <div class="gear-tooth t4"></div>
      <div class="gear-body"></div>
      <div class="gear-spoke"></div>
      <div class="gear-spoke s2"></div>
      <div class="gear-hub"></div>
    </div>
  `;
}

class ConceptGears extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${gearsStyles}</style>
      <div class="gears">
        <div class="gears-plate"></div>
        <div class="gears-rivet r1"></div>
        <div class="gears-rivet r2"></div>
        <div class="gears-rivet r3"></div>
        <div class="gears-rivet r4"></div>
        ${gearMarkup('big')}
        ${gearMarkup('mid')}
        ${gearMarkup('small')}
      </div>
    `;
  }
}

if (!customElements.get('concept-gears')) {
  customElements.define('concept-gears', ConceptGears);
}
