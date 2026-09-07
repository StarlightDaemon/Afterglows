const spinthariscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .spn {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #010c04 0%, #000301 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ocular microscope circular dark field of view */
  .spn-viewfield {
    position: relative;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: #000802;
    border: 2px solid var(--accent, #00cc00);
    box-shadow: inset 0 0 16px rgba(0, 204, 0, 0.4), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Central radium needle pointer holding radioactive source */
  .spn-needle {
    position: absolute;
    bottom: 2px;
    left: 36px;
    width: 2px;
    height: 28px;
    background: linear-gradient(180deg, #ffffff, #008818);
    border-radius: 1px;
    box-shadow: 0 0 6px #ffffff;
    z-index: 5;
  }

  .spn-radium-tip {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #8cffaa;
  }

  /* Zinc sulfide phosphor screen scintillation flashes */
  .spn-flash {
    position: absolute;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #8cffaa, 0 0 10px #00ff44;
    animation: spn-scintillate 1.8s ease-out infinite;
  }

  .spn-flash.f1 { top: 18px; left: 22px; width: 3px; height: 3px; animation-delay: 0.1s; }
  .spn-flash.f2 { top: 12px; right: 26px; width: 4px; height: 4px; animation-delay: 0.4s; }
  .spn-flash.f3 { top: 32px; left: 14px; width: 3px; height: 3px; animation-delay: 0.7s; }
  .spn-flash.f4 { top: 28px; right: 18px; width: 4px; height: 4px; animation-delay: 1.0s; }
  .spn-flash.f5 { top: 48px; left: 20px; width: 3px; height: 3px; animation-delay: 1.3s; }
  .spn-flash.f6 { top: 46px; right: 22px; width: 3.5px; height: 3.5px; animation-delay: 1.6s; }
  .spn-flash.f7 { top: 20px; left: 42px; width: 4px; height: 4px; animation-delay: 0.85s; }

  @keyframes spn-scintillate {
    0% { opacity: 0; transform: scale(0.2); }
    15% { opacity: 1; transform: scale(1.4); filter: drop-shadow(0 0 8px #ffffff); }
    40% { opacity: 0.4; transform: scale(0.8); }
    70%, 100% { opacity: 0; }
  }

  /* Microscopic phosphor grain texture */
  .spn-grain-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 45% 45%, rgba(140, 255, 170, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }

  /* Focus reticle ring */
  .spn-reticle {
    position: absolute;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 1px dashed rgba(140, 255, 170, 0.35);
    pointer-events: none;
  }

  /* Scintillation count caption */
  .spn-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptSpinthariscope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${spinthariscopeStyles}</style>
      <div class="spn">
        <div class="spn-viewfield">
          <div class="spn-grain-overlay"></div>
          <div class="spn-reticle"></div>

          <div class="spn-needle">
            <div class="spn-radium-tip"></div>
          </div>

          <div class="spn-flash f1"></div>
          <div class="spn-flash f2"></div>
          <div class="spn-flash f3"></div>
          <div class="spn-flash f4"></div>
          <div class="spn-flash f5"></div>
          <div class="spn-flash f6"></div>
          <div class="spn-flash f7"></div>
        </div>

        <div class="spn-label">ZnS α-SCINTILLATION</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-spinthariscope')) {
  customElements.define('concept-spinthariscope', ConceptSpinthariscope);
}
