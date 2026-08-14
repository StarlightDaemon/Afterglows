const orreryStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .orrery {
    width: 104px;
    height: 104px;
    position: relative;
  }

  .orrery-stand {
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 40px;
    height: 6px;
    margin-left: -20px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.5), rgba(20, 70, 35, 0.7));
  }

  .orrery-stem {
    position: absolute;
    bottom: 12px;
    left: 50%;
    width: 3px;
    height: 40px;
    margin-left: -1.5px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.35), rgba(140, 255, 170, 0.7));
  }

  .orrery-sun {
    position: absolute;
    top: 44px;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 32%, #f2ffdd, #b9ff8e 55%, #4fae4f);
    animation: orrery-sun 3s ease-in-out infinite;
    z-index: 3;
  }

  .orrery-orbit {
    position: absolute;
    top: 50px;
    left: 50%;
    border-radius: 50%;
    border: 1px dashed rgba(0, 204, 0, 0.25);
  }

  .orrery-orbit.o1 { width: 52px; height: 52px; margin: -26px 0 0 -26px; }
  .orrery-orbit.o2 { width: 84px; height: 84px; margin: -42px 0 0 -42px; }

  .orrery-arm {
    position: absolute;
    top: 50px;
    left: 50%;
    height: 2px;
    margin-top: -1px;
    transform-origin: left center;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.75), rgba(140, 255, 170, 0.25));
    animation: orrery-turn linear infinite;
  }

  .orrery-arm.a1 {
    width: 26px;
    animation-duration: 6s;
  }

  .orrery-arm.a2 {
    width: 42px;
    animation-duration: 13.5s;
    animation-delay: -8s;
  }

  .orrery-planet {
    position: absolute;
    right: -4px;
    top: 50%;
    width: 9px;
    height: 9px;
    margin-top: -4.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #d0ffd8, #2a8a3e 70%);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.5);
  }

  .orrery-arm.a2 .orrery-planet {
    width: 7px;
    height: 7px;
    margin-top: -3.5px;
    background: radial-gradient(circle at 36% 30%, #ffffe0, #6a9a3e 70%);
  }

  .orrery-moonarm {
    position: absolute;
    right: 0;
    top: 50%;
    width: 8px;
    height: 1px;
    transform-origin: left center;
    animation: orrery-turn 2.2s linear infinite;
  }

  .orrery-moon {
    position: absolute;
    right: -2px;
    top: -1.5px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #d8ffe2;
  }

  @keyframes orrery-turn {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes orrery-sun {
    0%, 100% { box-shadow: 0 0 6px rgba(216, 255, 187, 0.5); }
    50% { box-shadow: 0 0 14px rgba(216, 255, 187, 0.9); }
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

  /* v2: Clockwork astronomical brass orrery with radiant golden Sun,
     Mars, turquoise/sapphire Earth with orbiting ivory Moon, and celestial brass gears */
  .orreryc {
    width: 104px;
    height: 104px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Brass stand pedestal */
  .orreryc-stand {
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 40px;
    height: 6px;
    margin-left: -20px;
    border-radius: 3px;
    background: linear-gradient(180deg, #fde047 0%, #ca8a04 50%, #78350f 100%);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  }

  /* Brass stem shaft */
  .orreryc-stem {
    position: absolute;
    bottom: 12px;
    left: 50%;
    width: 3px;
    height: 40px;
    margin-left: -1.5px;
    background: linear-gradient(180deg, #fde047, #ca8a04);
  }

  /* Radiant golden Sun */
  .orreryc-sun {
    position: absolute;
    top: 44px;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 32%, #ffffff 0%, #fef08a 35%, #facc15 70%, #ea580c 100%);
    box-shadow: 0 0 14px #facc15;
    animation: orreryc-sun 3s ease-in-out infinite;
    z-index: 3;
  }

  /* Golden orbital guide rings */
  .orreryc-orbit {
    position: absolute;
    top: 50px;
    left: 50%;
    border-radius: 50%;
    border: 1px dashed rgba(250, 204, 21, 0.4);
  }

  .orreryc-orbit.o1 { width: 52px; height: 52px; margin: -26px 0 0 -26px; }
  .orreryc-orbit.o2 { width: 84px; height: 84px; margin: -42px 0 0 -42px; }

  /* Brass gear arms */
  .orreryc-arm {
    position: absolute;
    top: 50px;
    left: 50%;
    height: 2px;
    margin-top: -1px;
    transform-origin: left center;
    background: linear-gradient(90deg, #facc15, #ca8a04);
    animation: orreryc-turn linear infinite;
  }

  .orreryc-arm.a1 {
    width: 26px;
    animation-duration: 6s;
  }

  .orreryc-arm.a2 {
    width: 42px;
    animation-duration: 13.5s;
    animation-delay: -8s;
  }

  /* Inner planet (Mars: red ochre) */
  .orreryc-planet {
    position: absolute;
    right: -4px;
    top: 50%;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #fca5a5, #dc2626 70%, #7f1d1d 100%);
    box-shadow: 0 0 6px rgba(239, 68, 68, 0.6);
  }

  /* Outer planet (Earth: sapphire & emerald) */
  .orreryc-arm.a2 .orreryc-planet {
    width: 9px;
    height: 9px;
    margin-top: -4.5px;
    background: radial-gradient(circle at 36% 30%, #38bdf8, #0284c7 50%, #15803d 85%);
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.7);
  }

  /* Moon sub-orbit */
  .orreryc-moonarm {
    position: absolute;
    right: 0;
    top: 50%;
    width: 8px;
    height: 1px;
    transform-origin: left center;
    animation: orreryc-turn 2.2s linear infinite;
  }

  /* Ivory Moon */
  .orreryc-moon {
    position: absolute;
    right: -2px;
    top: -1.5px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #f8fafc;
    box-shadow: 0 0 3px #ffffff;
  }

  @keyframes orreryc-turn {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes orreryc-sun {
    0%, 100% { box-shadow: 0 0 8px #facc15; }
    50% { box-shadow: 0 0 18px #fde047, 0 0 24px #ea580c; }
  }
  `,
};

const orreryMarkup = {
  v1: `
      <div class="orrery">
        <div class="orrery-stand"></div>
        <div class="orrery-stem"></div>
        <div class="orrery-orbit o1"></div>
        <div class="orrery-orbit o2"></div>
        <div class="orrery-arm a1"><div class="orrery-planet"></div></div>
        <div class="orrery-arm a2">
          <div class="orrery-planet"></div>
          <div class="orrery-moonarm"><div class="orrery-moon"></div></div>
        </div>
        <div class="orrery-sun"></div>
      </div>
    `,
  v2: `
      <div class="orreryc">
        <div class="orreryc-stand"></div>
        <div class="orreryc-stem"></div>
        <div class="orreryc-orbit o1"></div>
        <div class="orreryc-orbit o2"></div>
        <div class="orreryc-arm a1"><div class="orreryc-planet"></div></div>
        <div class="orreryc-arm a2">
          <div class="orreryc-planet"></div>
          <div class="orreryc-moonarm"><div class="orreryc-moon"></div></div>
        </div>
        <div class="orreryc-sun"></div>
      </div>
    `,
};

class ConceptOrrery extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${orreryStyles[version] || orreryStyles.v2}</style>${orreryMarkup[version] || orreryMarkup.v2}`;
  }
}

if (!customElements.get('concept-orrery')) {
  customElements.define('concept-orrery', ConceptOrrery);
}
