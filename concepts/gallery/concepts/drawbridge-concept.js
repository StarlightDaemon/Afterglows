const drawbridgeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A double-leaf bascule drawbridge over an urban shipping canal: twin counterweighted
     roadway spans pivot upward on trunnion bearings, warning signal beacons flash,
     and a tall-masted ship steams through the cleared channel. */
  .drw {
    width: 116px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  /* Canal water channel */
  .drw-water {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 22px;
    background: radial-gradient(ellipse at 50% 100%, rgba(0, 80, 18, 0.9), rgba(0, 20, 4, 0.98));
    border-top: 1.5px solid var(--accent, #00cc00);
  }

  /* Left abutment pier */
  .drw-pier-l {
    position: absolute;
    left: 4px;
    bottom: 12px;
    width: 24px;
    height: 38px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, rgba(0, 120, 25, 0.9), rgba(0, 40, 8, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    z-index: 3;
  }

  /* Right abutment pier */
  .drw-pier-r {
    position: absolute;
    right: 4px;
    bottom: 12px;
    width: 24px;
    height: 38px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, rgba(0, 120, 25, 0.9), rgba(0, 40, 8, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    z-index: 3;
  }

  /* Warning signal beacons on piers */
  .drw-beacon {
    position: absolute;
    top: -6px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 1);
    animation: drw-beacon-blink 0.8s ease-in-out infinite alternate;
  }

  .drw-beacon.bl { left: 9px; }
  .drw-beacon.br { right: 9px; }

  @keyframes drw-beacon-blink {
    0% { opacity: 0.3; }
    100% { opacity: 1; filter: drop-shadow(0 0 4px rgba(190, 255, 205, 1)); }
  }

  /* Left bascule bridge leaf span */
  .drw-leaf-l {
    position: absolute;
    left: 24px;
    bottom: 42px;
    width: 36px;
    height: 6px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 160, 35, 0.95), rgba(140, 255, 170, 0.85));
    border: 1px solid var(--accent, #00cc00);
    transform-origin: left center;
    z-index: 4;
    animation: drw-lift-l 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes drw-lift-l {
    0%, 25% { transform: rotate(0deg); }
    45%, 75% { transform: rotate(-65deg); }
    95%, 100% { transform: rotate(0deg); }
  }

  /* Right bascule bridge leaf span */
  .drw-leaf-r {
    position: absolute;
    right: 24px;
    bottom: 42px;
    width: 36px;
    height: 6px;
    border-radius: 2px;
    background: linear-gradient(270deg, rgba(0, 160, 35, 0.95), rgba(140, 255, 170, 0.85));
    border: 1px solid var(--accent, #00cc00);
    transform-origin: right center;
    z-index: 4;
    animation: drw-lift-r 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes drw-lift-r {
    0%, 25% { transform: rotate(0deg); }
    45%, 75% { transform: rotate(65deg); }
    95%, 100% { transform: rotate(0deg); }
  }

  /* Tall-masted ship steaming through channel */
  .drw-ship {
    position: absolute;
    bottom: 8px;
    width: 32px;
    height: 28px;
    z-index: 2;
    animation: drw-ship-transit 5.5s linear infinite;
  }

  @keyframes drw-ship-transit {
    0%, 25% { left: -36px; opacity: 0; }
    35% { opacity: 1; }
    55% { left: 42px; opacity: 1; }
    75% { opacity: 1; }
    85%, 100% { left: 120px; opacity: 0; }
  }

  .drw-hull {
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 32px;
    height: 10px;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
    background: rgba(140, 255, 170, 0.95);
    border: 1px solid var(--accent, #00cc00);
  }

  .drw-mast {
    position: absolute;
    left: 15px;
    bottom: 12px;
    width: 2px;
    height: 22px;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.9);
  }
`;

class ConceptDrawbridge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${drawbridgeStyles}</style>
      <div class="drw">
        <div class="drw-water"></div>
        <div class="drw-ship">
          <div class="drw-mast"></div>
          <div class="drw-hull"></div>
        </div>
        <div class="drw-pier-l">
          <div class="drw-beacon bl"></div>
        </div>
        <div class="drw-pier-r">
          <div class="drw-beacon br"></div>
        </div>
        <div class="drw-leaf-l"></div>
        <div class="drw-leaf-r"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-drawbridge')) {
  customElements.define('concept-drawbridge', ConceptDrawbridge);
}
