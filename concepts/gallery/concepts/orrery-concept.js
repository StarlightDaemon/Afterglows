const orreryStyles = `
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

  /* Pedestal stand. */
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

  /* Central sun on top of the stem. */
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

  /* Dashed orbit guides, centred on the sun (top 50px = sun centre). */
  .orrery-orbit {
    position: absolute;
    top: 50px;
    left: 50%;
    border-radius: 50%;
    border: 1px dashed rgba(0, 204, 0, 0.25);
  }

  .orrery-orbit.o1 { width: 52px; height: 52px; margin: -26px 0 0 -26px; }
  .orrery-orbit.o2 { width: 84px; height: 84px; margin: -42px 0 0 -42px; }

  /* Brass arms: thin bars pivoting about the sun, planet at the tip.
     The arm is a full-diameter line so it reads as machinery, with a
     counterweight nub on the far end. */
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

  /* Tiny moon riding the outer planet on its own fast pivot. */
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
`;

class ConceptOrrery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${orreryStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-orrery')) {
  customElements.define('concept-orrery', ConceptOrrery);
}
