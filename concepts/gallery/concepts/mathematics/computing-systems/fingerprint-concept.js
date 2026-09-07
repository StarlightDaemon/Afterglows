const fingerprintStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fp-plate {
    width: 84px;
    height: 104px;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 22, 0, 0.55), rgba(0, 0, 0, 0.92));
    overflow: hidden;
  }

  .fp-corner {
    position: absolute;
    width: 13px;
    height: 13px;
    pointer-events: none;
  }

  .fp-corner.tl { top: 0; left: 0; border-top: 2px solid rgba(0, 204, 0, 0.7); border-left: 2px solid rgba(0, 204, 0, 0.7); }
  .fp-corner.tr { top: 0; right: 0; border-top: 2px solid rgba(0, 204, 0, 0.7); border-right: 2px solid rgba(0, 204, 0, 0.7); }
  .fp-corner.bl { bottom: 0; left: 0; border-bottom: 2px solid rgba(0, 204, 0, 0.7); border-left: 2px solid rgba(0, 204, 0, 0.7); }
  .fp-corner.br { bottom: 0; right: 0; border-bottom: 2px solid rgba(0, 204, 0, 0.7); border-right: 2px solid rgba(0, 204, 0, 0.7); }

  .fp-print {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 62px;
    height: 80px;
    transform: translate(-50%, -50%);
  }

  .fp-ridge {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(0, 204, 0, 0.55);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 0 2px rgba(0, 204, 0, 0.2));
  }

  .fp-ridge.r1 { width: 10px; height: 14px; }
  .fp-ridge.r2 { width: 22px; height: 30px; transform: translate(-50%, -50%) rotate(6deg); border-bottom-color: transparent; }
  .fp-ridge.r3 { width: 34px; height: 46px; transform: translate(-50%, -50%) rotate(-5deg); border-left-color: transparent; }
  .fp-ridge.r4 { width: 46px; height: 62px; transform: translate(-50%, -50%) rotate(4deg); border-bottom-color: transparent; }
  .fp-ridge.r5 { width: 58px; height: 78px; transform: translate(-50%, -50%) rotate(-3deg); border-right-color: transparent; }

  .fp-scanline {
    position: absolute;
    left: 4px;
    right: 4px;
    top: 6px;
    height: 3px;
    border-radius: 999px;
    background: linear-gradient(90deg, transparent, rgba(170, 255, 170, 0.95), transparent);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.55);
    animation: fp-sweep 2.4s ease-in-out infinite alternate;
  }

  .fp-glow {
    position: absolute;
    left: 0;
    right: 0;
    top: 6px;
    height: 22px;
    background: linear-gradient(180deg, rgba(0, 204, 0, 0.16), transparent);
    animation: fp-sweep 2.4s ease-in-out infinite alternate;
  }

  @keyframes fp-sweep {
    0% { transform: translateY(0); }
    100% { transform: translateY(86px); }
  }
`;

class ConceptFingerprint extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fingerprintStyles}</style>
      <div class="fp-plate">
        <div class="fp-print">
          <div class="fp-ridge r1"></div>
          <div class="fp-ridge r2"></div>
          <div class="fp-ridge r3"></div>
          <div class="fp-ridge r4"></div>
          <div class="fp-ridge r5"></div>
        </div>
        <div class="fp-glow"></div>
        <div class="fp-scanline"></div>
        <span class="fp-corner tl"></span>
        <span class="fp-corner tr"></span>
        <span class="fp-corner bl"></span>
        <span class="fp-corner br"></span>
      </div>
    `;
  }
}

if (!customElements.get('concept-fingerprint')) {
  customElements.define('concept-fingerprint', ConceptFingerprint);
}
