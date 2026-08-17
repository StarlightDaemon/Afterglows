const calciteStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cct {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Paper printed substrate base */
  .cct-paper {
    position: relative;
    width: 86px;
    height: 76px;
    background: #011206;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Iceland Spar Rhombohedron Crystal */
  .cct-crystal-rig {
    position: relative;
    width: 58px;
    height: 48px;
    animation: cct-crystal-turn 3.6s linear infinite;
  }

  @keyframes cct-crystal-turn {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Rhombohedral crystal facets SVG */
  .cct-rhombohedron-svg {
    position: absolute;
    inset: 0;
    width: 58px;
    height: 48px;
    filter: drop-shadow(0 0 4px #8cffaa);
  }

  /* Stationary ordinary (O-ray) image */
  .cct-ray-o {
    position: absolute;
    top: 18px;
    left: 8px;
    font-family: monospace;
    font-size: 8.5px;
    font-weight: bold;
    color: #ffffff;
    letter-spacing: 1px;
    text-shadow: 0 0 4px #ffffff;
    z-index: 5;
  }

  /* Extraordinary (E-ray) image rotating around the ordinary ray */
  .cct-ray-e {
    position: absolute;
    top: 18px;
    left: 8px;
    font-family: monospace;
    font-size: 8.5px;
    font-weight: bold;
    color: #8cffaa;
    letter-spacing: 1px;
    text-shadow: 0 0 6px #8cffaa;
    z-index: 5;
    animation: cct-e-ray-orbit 3.6s linear infinite;
  }

  @keyframes cct-e-ray-orbit {
    0% { transform: rotate(0deg) translateX(11px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(11px) rotate(-360deg); }
  }

  /* Optical cleavage gleam line */
  .cct-cleavage-gleam {
    position: absolute;
    top: 0;
    left: 10px;
    width: 1px;
    height: 46px;
    background: linear-gradient(180deg, transparent, #ffffff, transparent);
    transform: rotate(38deg);
    opacity: 0.8;
  }

  /* Caption */
  .cct-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptCalciteBirefringence extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${calciteStyles}</style>
      <div class="cct">
        <div class="cct-paper">
          <div class="cct-crystal-rig">
            <svg class="cct-rhombohedron-svg" viewBox="0 0 58 48">
              <!-- Iceland Spar Rhomboid Faces -->
              <polygon points="12,4 52,4 44,42 4,42" fill="rgba(0, 50, 15, 0.45)" stroke="#ffffff" stroke-width="1.5" />
              <polygon points="52,4 56,12 48,46 44,42" fill="rgba(0, 80, 25, 0.3)" stroke="#d6ffe0" stroke-width="1" />
              <polygon points="4,42 44,42 48,46 8,46" fill="rgba(0, 30, 10, 0.5)" stroke="#d6ffe0" stroke-width="1" />
            </svg>

            <div class="cct-cleavage-gleam"></div>
            <div class="cct-ray-o">CALCITE</div>
            <div class="cct-ray-e">CALCITE</div>
          </div>
        </div>

        <div class="cct-label">BIREFRINGENCE Δn=0.172</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-calcite-birefringence')) {
  customElements.define('concept-calcite-birefringence', ConceptCalciteBirefringence);
}
