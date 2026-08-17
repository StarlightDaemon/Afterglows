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

  /* Fruiting mushroom bodies with organic respiration */
  .myc-shroom {
    position: absolute;
    top: 10px;
    left: 48px;
    width: 22px;
    height: 16px;
    z-index: 2;
    animation: myc-shroom-breathe 3.2s ease-in-out infinite alternate;
    transform-origin: 11px 16px;
  }

  @keyframes myc-shroom-breathe {
    0% { transform: rotate(-5deg) scale(0.94); }
    100% { transform: rotate(5deg) scale(1.08); }
  }

  .myc-cap {
    width: 22px;
    height: 10px;
    border-radius: 12px 12px 2px 2px;
    background: linear-gradient(180deg, #d6ffe0, #008818);
    border: 1.2px solid #ffffff;
    box-shadow: 0 0 8px #8cffaa;
  }

  .myc-stem {
    width: 4px;
    height: 8px;
    background: #8cffaa;
    margin: 0 auto;
    border-radius: 1px;
  }

  /* Spore particles floating up from gills continuously */
  .myc-spore {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #8cffaa;
    animation: myc-spore-drift 2.4s ease-out infinite;
  }

  .myc-spore.sp1 { left: 46px; top: 18px; animation-delay: 0.2s; --sx: -10px; }
  .myc-spore.sp2 { left: 56px; top: 16px; animation-delay: 1.0s; --sx: 4px; }
  .myc-spore.sp3 { left: 66px; top: 18px; animation-delay: 1.8s; --sx: 12px; }

  @keyframes myc-spore-drift {
    0% { transform: translate(0, 0) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(var(--sx, 4px), -24px) scale(1.2); opacity: 0; }
  }

  /* Hyphae branching network SVG */
  .myc-hyphae-svg {
    position: absolute;
    bottom: 0;
    width: 118px;
    height: 76px;
    filter: drop-shadow(0 0 3px #8cffaa);
  }

  /* Action potential electrical signal pulses traveling through hyphae */
  .myc-signal-packet {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #8cffaa;
    z-index: 6;
    animation: myc-signal-flow 2.4s linear infinite;
  }

  .sig1 {
    offset-path: path("M 22 64 L 36 38 L 59 20 L 59 8");
    animation-delay: 0s;
  }

  .sig2 {
    offset-path: path("M 98 62 L 84 36 L 59 20 L 59 8");
    animation-delay: 1.2s;
  }

  @keyframes myc-signal-flow {
    0% { offset-distance: 0%; opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  .myc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: #8cffaa;
    letter-spacing: 0.5px;
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

        <div class="myc-signal-packet sig1"></div>
        <div class="myc-signal-packet sig2"></div>

        <svg class="myc-hyphae-svg" viewBox="0 0 118 76">
          <!-- Primary hyphal cords & anastomosis cross-links -->
          <path d="M 59 8 L 59 20 L 36 38 L 22 64" stroke="#d6ffe0" stroke-width="1.8" fill="none" />
          <path d="M 59 20 L 84 36 L 98 62" stroke="#d6ffe0" stroke-width="1.8" fill="none" />
          <path d="M 36 38 L 59 48 L 84 36" stroke="#8cffaa" stroke-width="1.4" stroke-dasharray="3,2" fill="none" />
          <path d="M 36 38 L 48 68" stroke="#8cffaa" stroke-width="1.4" fill="none" />
          <path d="M 59 48 L 62 70" stroke="#8cffaa" stroke-width="1.4" fill="none" />
          <path d="M 84 36 L 74 66" stroke="#8cffaa" stroke-width="1.4" fill="none" />
          <!-- Fine rootlets -->
          <path d="M 22 64 L 10 74 M 22 64 L 28 75 M 98 62 L 108 72 M 98 62 L 92 75" stroke="rgba(140, 255, 170, 0.8)" stroke-width="1.2" fill="none" />
        </svg>

        <div class="myc-label">MYCELIUM NETWORK</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-mycelium-network')) {
  customElements.define('concept-mycelium-network', ConceptMyceliumNetwork);
}
