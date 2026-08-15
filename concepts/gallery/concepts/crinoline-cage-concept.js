const crinolineStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #1e1319 0%, #0a0408 100%);
    border: 1.5px solid rgba(240, 98, 146, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(240, 98, 146, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cg-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: cg-cage-sway 3s ease-in-out infinite alternate;
  }

  @keyframes cg-cage-sway {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
  }

  /* Waistband yoke at top */
  .cg-waistband {
    position: absolute;
    top: 8px;
    width: 16px;
    height: 4px;
    background: #f06292;
    border-radius: 2px;
    box-shadow: 0 0 4px #f06292;
  }

  /* Tiered sprung steel hoop rings */
  .cg-hoop {
    position: absolute;
    border-radius: 50%;
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 4px #f06292;
    transform: rotateX(65deg);
  }

  .cg-h1 { top: 16px; width: 26px; height: 12px; }
  .cg-h2 { top: 28px; width: 42px; height: 16px; }
  .cg-h3 { top: 40px; width: 58px; height: 20px; }
  .cg-h4 { top: 52px; width: 72px; height: 24px; }

  /* Vertical supporting ribbon tapes */
  .cg-tapes-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .cg-tape-line {
    stroke: rgba(240, 98, 146, 0.7);
    stroke-width: 1.2;
    stroke-dasharray: 3 2;
  }

  .cg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(240, 98, 146, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCrinolineCage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${crinolineStyles}</style>
      <div class="cg-box">
        <div class="cg-stage">
          <svg class="cg-tapes-svg" viewBox="0 0 96 78">
            <!-- Vertical rib tape lines from waist to hem -->
            <line class="cg-tape-line" x1="48" y1="10" x2="16" y2="64" />
            <line class="cg-tape-line" x1="48" y1="10" x2="36" y2="64" />
            <line class="cg-tape-line" x1="48" y1="10" x2="60" y2="64" />
            <line class="cg-tape-line" x1="48" y1="10" x2="80" y2="64" />
          </svg>

          <div class="cg-waistband"></div>
          <div class="cg-hoop cg-h1"></div>
          <div class="cg-hoop cg-h2"></div>
          <div class="cg-hoop cg-h3"></div>
          <div class="cg-hoop cg-h4"></div>
        </div>

        <div class="cg-label">VICTORIAN CRINOLINE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-crinoline-cage')) {
  customElements.define('concept-crinoline-cage', ConceptCrinolineCage);
}
