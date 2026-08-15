const myceliumStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .myc {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020703;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Forest floor surface line */
  .myc-surface {
    position: absolute;
    top: 26px;
    width: 100%;
    height: 1.5px;
    background: rgba(0, 204, 0, 0.6);
  }

  /* Fruiting mushroom bodies above surface */
  .myc-shroom {
    position: absolute;
    top: 10px;
    left: 48px;
    width: 22px;
    height: 16px;
    z-index: 2;
  }

  .myc-cap {
    width: 22px;
    height: 10px;
    border-radius: 12px 12px 2px 2px;
    background: linear-gradient(180deg, #d6ffe0, #008818);
    border: 1px solid #ffffff;
    box-shadow: 0 0 8px #8cffaa;
  }

  .myc-stem {
    width: 4px;
    height: 8px;
    background: #8cffaa;
    margin: 0 auto;
    border-radius: 1px;
  }

  /* Spore particles floating up from gills */
  .myc-spore {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
    animation: myc-spore-drift 3s ease-out infinite;
  }

  .myc-spore.sp1 { left: 46px; top: 18px; animation-delay: 0.3s; }
  .myc-spore.sp2 { left: 56px; top: 16px; animation-delay: 1.2s; }
  .myc-spore.sp3 { left: 66px; top: 18px; animation-delay: 2.1s; }

  @keyframes myc-spore-drift {
    0% { transform: translate(0, 0); opacity: 0; }
    20% { opacity: 1; }
    100% { transform: translate(calc(var(--sx, 4px)), -16px); opacity: 0; }
  }
  .myc-spore.sp1 { --sx: -8px; }
  .myc-spore.sp2 { --sx: 2px; }
  .myc-spore.sp3 { --sx: 10px; }

  /* Hyphae branching network SVG */
  .myc-hyphae-svg {
    position: absolute;
    bottom: 0;
    width: 118px;
    height: 76px;
    filter: drop-shadow(0 0 3px #8cffaa);
  }

  /* Action potential electrical signal pulses traveling through hyphae */
  .myc-pulse-node {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #8cffaa;
    animation: myc-pulse 2.8s ease-in-out infinite;
  }

  .myc-pulse-node.n1 { left: 56px; top: 38px; animation-delay: 0s; }
  .myc-pulse-node.n2 { left: 34px; top: 56px; animation-delay: 0.7s; }
  .myc-pulse-node.n3 { left: 82px; top: 54px; animation-delay: 0.9s; }
  .myc-pulse-node.n4 { left: 20px; top: 82px; animation-delay: 1.6s; }
  .myc-pulse-node.n5 { left: 96px; top: 80px; animation-delay: 1.8s; }

  @keyframes myc-pulse {
    0%, 100% { transform: scale(0.6); opacity: 0.3; }
    50% { transform: scale(1.4); opacity: 1; box-shadow: 0 0 12px #ffffff; }
  }
`;

class ConceptMyceliumNetwork extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${myceliumStyles}</style>
      <div class="myc">
        <div class="myc-surface"></div>

        <div class="myc-shroom">
          <div class="myc-cap"></div>
          <div class="myc-stem"></div>
        </div>

        <div class="myc-spore sp1"></div>
        <div class="myc-spore sp2"></div>
        <div class="myc-spore sp3"></div>

        <svg class="myc-hyphae-svg" viewBox="0 0 118 76">
          <!-- Primary hyphal cords & anastomosis cross-links -->
          <path d="M 59 8 L 59 20 L 36 38 L 22 64" stroke="#d6ffe0" stroke-width="1.6" fill="none" />
          <path d="M 59 20 L 84 36 L 98 62" stroke="#d6ffe0" stroke-width="1.6" fill="none" />
          <path d="M 36 38 L 59 48 L 84 36" stroke="#8cffaa" stroke-width="1.2" stroke-dasharray="3,2" fill="none" />
          <path d="M 36 38 L 48 68" stroke="#8cffaa" stroke-width="1.2" fill="none" />
          <path d="M 59 48 L 62 70" stroke="#8cffaa" stroke-width="1.2" fill="none" />
          <path d="M 84 36 L 74 66" stroke="#8cffaa" stroke-width="1.2" fill="none" />
          <!-- Fine rootlets -->
          <path d="M 22 64 L 10 74 M 22 64 L 28 75 M 98 62 L 108 72 M 98 62 L 92 75" stroke="rgba(140, 255, 170, 0.7)" stroke-width="1" fill="none" />
        </svg>

        <div class="myc-pulse-node n1"></div>
        <div class="myc-pulse-node n2"></div>
        <div class="myc-pulse-node n3"></div>
        <div class="myc-pulse-node n4"></div>
        <div class="myc-pulse-node n5"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-mycelium-network')) {
  customElements.define('concept-mycelium-network', ConceptMyceliumNetwork);
}
