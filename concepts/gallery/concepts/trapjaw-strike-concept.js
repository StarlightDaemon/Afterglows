const trapjawStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tpj {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ant head capsule */
  .tpj-head-rig {
    position: relative;
    width: 82px;
    height: 74px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tpj-head-capsule {
    width: 36px;
    height: 32px;
    background: #021a0a;
    border: 1.5px solid #00cc00;
    border-radius: 18px 18px 8px 8px;
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.4);
    position: relative;
    z-index: 5;
  }

  /* Compound eyes */
  .tpj-eye-l, .tpj-eye-r {
    position: absolute;
    top: 6px;
    width: 5px;
    height: 7px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
  }

  .tpj-eye-l { left: 2px; }
  .tpj-eye-r { right: 2px; }

  /* Sensitive trigger hairs on clypeus */
  .tpj-trigger-hair {
    position: absolute;
    bottom: -6px;
    width: 1px;
    height: 8px;
    background: #ffffff;
    box-shadow: 0 0 3px #ffffff;
  }

  .th-l { left: 14px; transform: rotate(-10deg); }
  .th-r { right: 14px; transform: rotate(10deg); }

  /* Left mandible blade (cocked 180° -> sudden snap 0°) */
  .tpj-mandible-left {
    position: absolute;
    bottom: -18px;
    left: 4px;
    width: 14px;
    height: 24px;
    background: linear-gradient(135deg, #ffffff 0%, #00cc00 40%, #03240d 100%);
    border: 1px solid #8cffaa;
    border-radius: 4px 4px 1px 1px;
    clip-path: polygon(0 0, 100% 15%, 80% 100%, 0 85%);
    transform-origin: 100% 0%;
    animation: tpj-snap-left 2s cubic-bezier(0.1, 0.9, 0.2, 1) infinite;
  }

  /* Right mandible blade */
  .tpj-mandible-right {
    position: absolute;
    bottom: -18px;
    right: 4px;
    width: 14px;
    height: 24px;
    background: linear-gradient(225deg, #ffffff 0%, #00cc00 40%, #03240d 100%);
    border: 1px solid #8cffaa;
    border-radius: 4px 4px 1px 1px;
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 20% 100%);
    transform-origin: 0% 0%;
    animation: tpj-snap-right 2s cubic-bezier(0.1, 0.9, 0.2, 1) infinite;
  }

  @keyframes tpj-snap-left {
    0%, 45% { transform: rotate(-85deg); } /* Cocked wide at 180 deg latch */
    50% { transform: rotate(0deg); } /* Ultra-fast 0.13ms snap strike! */
    90%, 100% { transform: rotate(-85deg); }
  }

  @keyframes tpj-snap-right {
    0%, 45% { transform: rotate(85deg); } /* Cocked wide at 180 deg latch */
    50% { transform: rotate(0deg); } /* Ultra-fast 0.13ms snap strike! */
    90%, 100% { transform: rotate(85deg); }
  }

  /* Strike impact acoustic shockwave */
  .tpj-shockwave {
    position: absolute;
    bottom: -14px;
    width: 14px;
    height: 14px;
    border: 1.5px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px #00ff66;
    animation: tpj-shock-anim 2s ease-out infinite;
  }

  @keyframes tpj-shock-anim {
    0%, 48% { opacity: 0; transform: scale(0.2); }
    50% { opacity: 1; transform: scale(0.6); }
    70% { opacity: 0.8; transform: scale(2.8); border-color: #8cffaa; }
    85%, 100% { opacity: 0; transform: scale(4.5); }
  }

  .tpj-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptTrapjawStrike extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${trapjawStyles}</style>
      <div class="tpj">
        <div class="tpj-head-rig">
          <div class="tpj-head-capsule">
            <div class="tpj-eye-l"></div>
            <div class="tpj-eye-r"></div>
            <div class="tpj-trigger-hair th-l"></div>
            <div class="tpj-trigger-hair th-r"></div>

            <div class="tpj-mandible-left"></div>
            <div class="tpj-mandible-right"></div>
            <div class="tpj-shockwave"></div>
          </div>
        </div>

        <div class="tpj-label">TRAP-JAW MANDIBLE SNAP</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-trapjaw-strike')) {
  customElements.define('concept-trapjaw-strike', ConceptTrapjawStrike);
}
