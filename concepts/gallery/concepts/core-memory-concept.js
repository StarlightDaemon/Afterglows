const coreMemoryStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cor {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #03140a 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ceramic memory plane circuit frame */
  .cor-plane {
    position: relative;
    width: 82px;
    height: 74px;
    background: #021106;
    border: 1.2px solid #00cc00;
    border-radius: 3px;
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Wiring plane grid SVG */
  .cor-wires-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .cor-drive-x {
    stroke: rgba(0, 255, 100, 0.7);
    stroke-width: 1.2;
  }

  .cor-drive-y {
    stroke: rgba(0, 255, 100, 0.7);
    stroke-width: 1.2;
  }

  .cor-sense {
    stroke: #ffffff;
    stroke-width: 1;
    stroke-dasharray: 3 2;
    animation: cor-sense-pulse 2s linear infinite;
  }

  @keyframes cor-sense-pulse {
    to { stroke-dashoffset: -10; }
  }

  /* Toroidal ferrite core rings */
  .cor-ring {
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid #00ff66;
    border-radius: 50%;
    box-shadow: 0 0 4px #8cffaa;
    transform: rotate(45deg);
  }

  .cor-ring.active {
    border-color: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 12px #00ff66;
    animation: cor-flip 1.5s ease-in-out infinite alternate;
  }

  @keyframes cor-flip {
    0% { transform: rotate(45deg) scale(0.9); }
    100% { transform: rotate(225deg) scale(1.15); filter: drop-shadow(0 0 6px #ffffff); }
  }

  .r00 { top: 12px; left: 16px; }
  .r01 { top: 12px; left: 37px; }
  .r02 { top: 12px; left: 58px; }

  .r10 { top: 33px; left: 16px; }
  .r11 { top: 33px; left: 37px; } /* Selected coincident target */
  .r12 { top: 33px; left: 58px; }

  .r20 { top: 54px; left: 16px; }
  .r21 { top: 54px; left: 37px; }
  .r22 { top: 54px; left: 58px; }

  .cor-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCoreMemory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${coreMemoryStyles}</style>
      <div class="cor">
        <div class="cor-plane">
          <svg class="cor-wires-svg" viewBox="0 0 82 74">
            <!-- X drive lines -->
            <line class="cor-drive-x" x1="6" y1="16" x2="76" y2="16" />
            <line class="cor-drive-x" x1="6" y1="37" x2="76" y2="37" stroke="#ffffff" stroke-width="1.6" />
            <line class="cor-drive-x" x1="6" y1="58" x2="76" y2="58" />

            <!-- Y drive lines -->
            <line class="cor-drive-y" x1="20" y1="6" x2="20" y2="68" />
            <line class="cor-drive-y" x1="41" y1="6" x2="41" y2="68" stroke="#ffffff" stroke-width="1.6" />
            <line class="cor-drive-y" x1="62" y1="6" x2="62" y2="68" />

            <!-- Diagonal Sense / Inhibit wire threading through all cores -->
            <path class="cor-sense" d="M 6 6 L 20 16 L 41 37 L 62 58 L 76 68" fill="none" />
          </svg>

          <div class="cor-ring r00"></div>
          <div class="cor-ring r01"></div>
          <div class="cor-ring r02"></div>

          <div class="cor-ring r10"></div>
          <div class="cor-ring r11 active"></div>
          <div class="cor-ring r12"></div>

          <div class="cor-ring r20"></div>
          <div class="cor-ring r21"></div>
          <div class="cor-ring r22"></div>
        </div>

        <div class="cor-label">FERRITE CORE MEMORY</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-core-memory')) {
  customElements.define('concept-core-memory', ConceptCoreMemory);
}
