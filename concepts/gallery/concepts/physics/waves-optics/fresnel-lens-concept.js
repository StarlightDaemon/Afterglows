const fresnelStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .frs {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031408 0%, #000502 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Central light source burner */
  .frs-lamp {
    position: absolute;
    left: 18px;
    top: 50%;
    width: 10px;
    height: 10px;
    margin-top: -5px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 12px #aaffaa, 0 0 20px #00ff66;
    z-index: 5;
    animation: frs-flicker 1.8s ease-in-out infinite alternate;
  }

  @keyframes frs-flicker {
    0% { transform: scale(0.9); opacity: 0.85; filter: drop-shadow(0 0 4px #00ff66); }
    100% { transform: scale(1.15); opacity: 1; filter: drop-shadow(0 0 10px #ffffff); }
  }

  /* Stepped Fresnel annular prism lens structure */
  .frs-lens-assembly {
    position: absolute;
    left: 44px;
    top: 14px;
    bottom: 14px;
    width: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .frs-prism-ring {
    width: 14px;
    height: 10px;
    background: linear-gradient(135deg, rgba(200, 255, 220, 0.9), rgba(0, 204, 0, 0.4));
    border: 1px solid #8cffaa;
    border-radius: 2px;
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 80%);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.4);
  }

  .frs-prism-ring.center {
    height: 14px;
    clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
    background: linear-gradient(90deg, #ffffff, rgba(0, 255, 100, 0.8));
  }

  .frs-prism-ring.inv {
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
  }

  /* Diverging rays from lamp to lens */
  .frs-divergent-rays {
    position: absolute;
    left: 22px;
    top: 18px;
    width: 24px;
    height: 66px;
    pointer-events: none;
  }

  /* Collimated sweeping beam */
  .frs-beam-sweep {
    position: absolute;
    left: 56px;
    top: 50%;
    width: 60px;
    height: 48px;
    margin-top: -24px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.75) 0%, rgba(0, 204, 0, 0.3) 60%, transparent 100%);
    clip-path: polygon(0 35%, 100% 0, 100% 100%, 0 65%);
    transform-origin: 0% 50%;
    animation: frs-sweep 4s ease-in-out infinite alternate;
    pointer-events: none;
    filter: drop-shadow(0 0 8px rgba(0, 255, 100, 0.6));
  }

  @keyframes frs-sweep {
    0% { transform: rotate(-14deg); opacity: 0.7; }
    50% { transform: rotate(0deg); opacity: 1; }
    100% { transform: rotate(14deg); opacity: 0.7; }
  }

  /* Parallel ray lines */
  .frs-ray-lines {
    position: absolute;
    left: 58px;
    top: 24px;
    width: 54px;
    height: 54px;
    pointer-events: none;
  }

  .frs-ray {
    stroke: #d6ffe0;
    stroke-width: 1.2;
    stroke-dasharray: 4 2;
    animation: frs-ray-flow 1s linear infinite;
  }

  @keyframes frs-ray-flow {
    to { stroke-dashoffset: -12; }
  }

  .frs-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptFresnelLens extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${fresnelStyles}</style>
      <div class="frs">
        <svg class="frs-divergent-rays" viewBox="0 0 24 66">
          <line x1="2" y1="33" x2="22" y2="10" stroke="rgba(140, 255, 170, 0.6)" stroke-width="1" stroke-dasharray="2 2" />
          <line x1="2" y1="33" x2="22" y2="24" stroke="rgba(140, 255, 170, 0.8)" stroke-width="1.2" />
          <line x1="2" y1="33" x2="22" y2="33" stroke="#ffffff" stroke-width="1.5" />
          <line x1="2" y1="33" x2="22" y2="42" stroke="rgba(140, 255, 170, 0.8)" stroke-width="1.2" />
          <line x1="2" y1="33" x2="22" y2="56" stroke="rgba(140, 255, 170, 0.6)" stroke-width="1" stroke-dasharray="2 2" />
        </svg>

        <div class="frs-lamp"></div>

        <div class="frs-lens-assembly">
          <div class="frs-prism-ring"></div>
          <div class="frs-prism-ring center"></div>
          <div class="frs-prism-ring inv"></div>
        </div>

        <div class="frs-beam-sweep"></div>

        <svg class="frs-ray-lines" viewBox="0 0 54 54">
          <line class="frs-ray" x1="0" y1="12" x2="52" y2="12" />
          <line class="frs-ray" x1="0" y1="27" x2="52" y2="27" stroke="#ffffff" />
          <line class="frs-ray" x1="0" y1="42" x2="52" y2="42" />
        </svg>

        <div class="frs-label">FRESNEL COLLIMATOR</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-fresnel-lens')) {
  customElements.define('concept-fresnel-lens', ConceptFresnelLens);
}
