const centrifugalGovernorStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gov {
    width: 114px;
    height: 100px;
    position: relative;
  }

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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Watt centrifugal governor with polished brass flyballs, chrome spindle shaft,
     sliding steel sleeve, and cast iron base */
  .govc {
    width: 114px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Chrome steel vertical spindle */
  .govc-spindle {
    position: absolute;
    left: 55px;
    top: 8px;
    width: 4px;
    height: 80px;
    border-radius: 2px;
    background: linear-gradient(90deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%);
    border: 0.5px solid #ffffff;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.6);
    z-index: 2;
  }

  /* Top brass mounting collar */
  .govc-top-collar {
    position: absolute;
    left: 49px;
    top: 14px;
    width: 16px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(180deg, #fde047, #ca8a04);
    border: 1px solid #facc15;
    box-shadow: 0 0 4px #eab308;
    z-index: 5;
  }

  /* Sliding steel sleeve */
  .govc-slide-sleeve {
    position: absolute;
    left: 49px;
    top: 52px;
    width: 16px;
    height: 10px;
    border-radius: 2px;
    background: linear-gradient(180deg, #ffffff 0%, #94a3b8 100%);
    border: 1px solid #cbd5e1;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
    z-index: 5;
    animation: govc-sleeve-lift 3.2s ease-in-out infinite alternate;
  }

  @keyframes govc-sleeve-lift {
    0% { transform: translateY(8px); }
    100% { transform: translateY(-16px); }
  }

  /* Left hinged brass flyball arm */
  .govc-arm-l {
    position: absolute;
    left: 20px;
    top: 18px;
    width: 36px;
    height: 38px;
    transform-origin: right top;
    z-index: 3;
    animation: govc-swing-l 3.2s ease-in-out infinite alternate;
  }

  @keyframes govc-swing-l {
    0% { transform: rotate(-18deg); }
    100% { transform: rotate(-52deg); }
  }

  .govc-rod-l {
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;
    height: 2.5px;
    background: #facc15;
    box-shadow: 0 0 3px #ca8a04;
    transform-origin: right center;
    transform: rotate(45deg);
  }

  .govc-ball-l {
    position: absolute;
    left: 2px;
    bottom: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #fde047 30%, #ca8a04 80%, #78350f 100%);
    border: 1px solid #facc15;
    box-shadow: 0 0 10px #facc15, 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Right hinged brass flyball arm */
  .govc-arm-r {
    position: absolute;
    right: 20px;
    top: 18px;
    width: 36px;
    height: 38px;
    transform-origin: left top;
    z-index: 3;
    animation: govc-swing-r 3.2s ease-in-out infinite alternate;
  }

  @keyframes govc-swing-r {
    0% { transform: rotate(18deg); }
    100% { transform: rotate(52deg); }
  }

  .govc-rod-r {
    position: absolute;
    left: 0;
    top: 0;
    width: 32px;
    height: 2.5px;
    background: #facc15;
    box-shadow: 0 0 3px #ca8a04;
    transform-origin: left center;
    transform: rotate(-45deg);
  }

  .govc-ball-r {
    position: absolute;
    right: 2px;
    bottom: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #fde047 30%, #ca8a04 80%, #78350f 100%);
    border: 1px solid #facc15;
    box-shadow: 0 0 10px #facc15, 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Linkage struts */
  .govc-link-l {
    position: absolute;
    left: 36px;
    top: 48px;
    width: 20px;
    height: 2px;
    background: #e2e8f0;
    transform-origin: right center;
    animation: govc-link-angle-l 3.2s ease-in-out infinite alternate;
    z-index: 3;
  }

  .govc-link-r {
    position: absolute;
    right: 36px;
    top: 48px;
    width: 20px;
    height: 2px;
    background: #e2e8f0;
    transform-origin: left center;
    animation: govc-link-angle-r 3.2s ease-in-out infinite alternate;
    z-index: 3;
  }

  @keyframes govc-link-angle-l {
    0% { transform: rotate(-35deg); }
    100% { transform: rotate(-10deg); }
  }
  @keyframes govc-link-angle-r {
    0% { transform: rotate(35deg); }
    100% { transform: rotate(10deg); }
  }

  /* Cast-iron bevel gear drive base */
  .govc-base {
    position: absolute;
    left: 38px;
    bottom: 8px;
    width: 38px;
    height: 12px;
    border-radius: 2px;
    background: linear-gradient(180deg, #475569 0%, #1e293b 60%, #09090b 100%);
    border: 1px solid #64748b;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
  }
  `,
};

const centrifugalGovernorMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="govc">
        <div class="govc-spindle"></div>
        <div class="govc-top-collar"></div>
        <div class="govc-slide-sleeve"></div>
        <div class="govc-arm-l">
          <div class="govc-rod-l"></div>
          <div class="govc-ball-l"></div>
        </div>
        <div class="govc-arm-r">
          <div class="govc-rod-r"></div>
          <div class="govc-ball-r"></div>
        </div>
        <div class="govc-link-l"></div>
        <div class="govc-link-r"></div>
        <div class="govc-base"></div>
      </div>
    `,
};

class ConceptCentrifugalGovernor extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${centrifugalGovernorStyles[version] || centrifugalGovernorStyles.v2}</style>${centrifugalGovernorMarkup[version] || centrifugalGovernorMarkup.v2}`;
  }
}

if (!customElements.get('concept-centrifugal-governor')) {
  customElements.define('concept-centrifugal-governor', ConceptCentrifugalGovernor);
}
