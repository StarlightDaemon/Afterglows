const gearsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor gears --- */
  .gears {
    width: 104px;
    height: 104px;
    position: relative;
  }

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

  .gears-plate {
    position: absolute;
    inset: 8px;
    border-radius: 10px;
    border: 1px dashed rgba(0, 204, 0, 0.18);
  }

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

  /* --- v2: Horological Differential Metal Clockwork ---
     Large Brass Main Drive Gear, Mid Tempered Blued Steel Gear, Small Polished Bronze/Copper Pinion,
     and Titanium Baseplate with Brass Rivets. */
  .grc {
    width: 104px;
    height: 104px;
    position: relative;
  }

  .grc-plate {
    position: absolute;
    inset: 8px;
    border-radius: 10px;
    border: 1px solid #475569;
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.8));
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
  }

  .grc-rivet {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #f59e0b;
    box-shadow: 0 0 4px #fbbf24;
    animation: gear-rivet 3.4s ease-in-out infinite;
  }

  .grc-rivet.r1 { top: 12px; left: 12px; }
  .grc-rivet.r2 { top: 12px; right: 12px; animation-delay: -0.9s; }
  .grc-rivet.r3 { bottom: 12px; right: 12px; animation-delay: -1.7s; }
  .grc-rivet.r4 { bottom: 12px; left: 12px; animation-delay: -2.5s; }

  /* Big Gear: Polished Brass */
  .gear.big.brass .gear-tooth { background: #b45309; }
  .gear.big.brass .gear-body {
    background: radial-gradient(circle at 38% 32%, #fde047 0%, #f59e0b 60%, #b45309 100%);
    border: 2px solid #fef08a;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.4);
  }
  .gear.big.brass .gear-spoke { background: rgba(180, 83, 9, 0.5); }
  .gear.big.brass .gear-hub { border: 1px solid #fde047; background: #451a03; }

  /* Mid Gear: Blued Tempered Horology Steel */
  .gear.mid.steel .gear-tooth { background: #1e3a8a; }
  .gear.mid.steel .gear-body {
    background: radial-gradient(circle at 38% 32%, #60a5fa 0%, #2563eb 60%, #1e3a8a 100%);
    border: 2px solid #93c5fd;
    box-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
  }
  .gear.mid.steel .gear-spoke { background: rgba(30, 58, 138, 0.5); }
  .gear.mid.steel .gear-hub { border: 1px solid #93c5fd; background: #0f172a; }

  /* Small Gear: Polished Bronze / Copper */
  .gear.small.copper .gear-tooth { background: #9a3412; }
  .gear.small.copper .gear-body {
    background: radial-gradient(circle at 38% 32%, #fdba74 0%, #ea580c 60%, #9a3412 100%);
    border: 1px solid #fed7aa;
    box-shadow: 0 0 8px rgba(234, 88, 12, 0.4);
  }
  .gear.small.copper .gear-spoke { background: rgba(154, 52, 18, 0.5); }
  .gear.small.copper .gear-hub { border: 1px solid #fed7aa; background: #431407; }
`;

function gearMarkupV1(sizeClass) {
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

function gearMarkupV2(sizeClass, metalClass) {
  return `
    <div class="gear ${sizeClass} ${metalClass}">
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

const gearsMarkup = {
  v1: `
    <div class="gears">
      <div class="gears-plate"></div>
      <div class="gears-rivet r1"></div>
      <div class="gears-rivet r2"></div>
      <div class="gears-rivet r3"></div>
      <div class="gears-rivet r4"></div>
      ${gearMarkupV1('big')}
      ${gearMarkupV1('mid')}
      ${gearMarkupV1('small')}
    </div>
  `,
  v2: `
    <div class="grc">
      <div class="grc-plate"></div>
      <div class="grc-rivet r1"></div>
      <div class="grc-rivet r2"></div>
      <div class="grc-rivet r3"></div>
      <div class="grc-rivet r4"></div>
      ${gearMarkupV2('big', 'brass')}
      ${gearMarkupV2('mid', 'steel')}
      ${gearMarkupV2('small', 'copper')}
    </div>
  `,
};

class ConceptGears extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${gearsStyles}</style>${gearsMarkup[version] || gearsMarkup.v2}`;
  }
}

if (!customElements.get('concept-gears')) {
  customElements.define('concept-gears', ConceptGears);
}
