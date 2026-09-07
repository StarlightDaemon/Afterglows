const sextantStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sxt {
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

  /* Celestial night sky backdrop */
  .sxt-sky {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 75% 20%, rgba(0, 50, 15, 0.5), #010602 90%);
  }

  /* Celestial star/sun target */
  .sxt-star {
    position: absolute;
    top: 14px;
    right: 18px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #8cffaa, 0 0 14px #ffffff;
    animation: sxt-star-glint 2s ease-in-out infinite alternate;
  }

  @keyframes sxt-star-glint {
    0% { transform: scale(0.85); opacity: 0.8; }
    100% { transform: scale(1.15); opacity: 1; }
  }

  /* Sextant triangular brass frame & arc */
  .sxt-frame-svg {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 78px;
    height: 74px;
    filter: drop-shadow(0 0 4px rgba(0, 204, 0, 0.4));
  }

  /* Pivoting index arm swinging across the graduated arc */
  .sxt-index-arm {
    position: absolute;
    top: 18px;
    left: 24px;
    width: 3px;
    height: 60px;
    background: linear-gradient(180deg, #ffffff, #8cffaa 40%, #008818 100%);
    border-radius: 1.5px;
    transform-origin: top center;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 4;
    animation: sxt-arm-measure 5s ease-in-out infinite alternate;
  }

  @keyframes sxt-arm-measure {
    0% { transform: rotate(-8deg); }
    50% { transform: rotate(26deg); }
    100% { transform: rotate(14deg); }
  }

  /* Index mirror at top pivot */
  .sxt-index-mirror {
    position: absolute;
    top: 14px;
    left: 20px;
    width: 10px;
    height: 10px;
    background: #ffffff;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 2px;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 5;
  }

  /* Horizon glass (split mirror/clear) */
  .sxt-horizon-glass {
    position: absolute;
    top: 42px;
    left: 36px;
    width: 8px;
    height: 14px;
    border: 1px solid #d6ffe0;
    background: linear-gradient(90deg, #8cffaa 0% 50%, rgba(0, 50, 15, 0.4) 50% 100%);
    z-index: 3;
  }

  /* Sighting telescope barrel */
  .sxt-telescope {
    position: absolute;
    top: 50px;
    left: 10px;
    width: 38px;
    height: 6px;
    background: linear-gradient(180deg, #d6ffe0, #005510);
    border: 1px solid #ffffff;
    border-radius: 2px;
    transform: rotate(-18deg);
    z-index: 4;
  }

  /* Vernier micrometer angle readout */
  .sxt-readout {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptSextant extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sextantStyles}</style>
      <div class="sxt">
        <div class="sxt-sky"></div>
        <div class="sxt-star"></div>

        <svg class="sxt-frame-svg" viewBox="0 0 78 74">
          <!-- Triangular frame struts and 60-degree graduated limb arc -->
          <line x1="14" y1="8" x2="68" y2="28" stroke="#00aa22" stroke-width="2" />
          <line x1="14" y1="8" x2="28" y2="64" stroke="#00aa22" stroke-width="2" />
          <!-- Graduated arc limb with ticks -->
          <path d="M 24 64 A 62 62 0 0 0 68 28" stroke="#d6ffe0" stroke-width="3" fill="none" />
          <path d="M 24 64 A 62 62 0 0 0 68 28" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2,3" fill="none" />
        </svg>

        <div class="sxt-telescope"></div>
        <div class="sxt-horizon-glass"></div>
        <div class="sxt-index-mirror"></div>
        <div class="sxt-index-arm"></div>

        <div class="sxt-readout">ALT: 42° 18.4'</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-sextant')) {
  customElements.define('concept-sextant', ConceptSextant);
}
