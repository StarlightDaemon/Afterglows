const runicCompassStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rnc {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000602 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rotating outer Elder Futhark rune ring */
  .rnc-outer-ring {
    position: absolute;
    width: 84px;
    height: 84px;
    border-radius: 50%;
    border: 1.5px dashed rgba(140, 255, 170, 0.6);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.3);
    animation: rnc-spin-ring 24s linear infinite;
  }

  @keyframes rnc-spin-ring {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Vegvisir 8-stave stave compass SVG */
  .rnc-staves-svg {
    position: relative;
    width: 72px;
    height: 72px;
    filter: drop-shadow(0 0 4px #8cffaa);
    animation: rnc-stave-pulse 3.5s ease-in-out infinite alternate;
  }

  @keyframes rnc-stave-pulse {
    0% { transform: scale(0.96); opacity: 0.75; }
    100% { transform: scale(1.04); opacity: 1; filter: drop-shadow(0 0 8px #ffffff); }
  }

  /* Geomagnetic guide wayfinding pulse */
  .rnc-pulse-ring {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #d6ffe0;
    animation: rnc-expand-pulse 3s cubic-bezier(0.1, 0.8, 0.4, 1) infinite;
  }

  @keyframes rnc-expand-pulse {
    0% { transform: scale(0.2); opacity: 0.9; }
    80% { transform: scale(1.8); opacity: 0.1; }
    100% { transform: scale(2.2); opacity: 0; }
  }

  /* Central bindrune core */
  .rnc-center-core {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #ffffff;
    z-index: 5;
  }

  /* Wayfinder caption */
  .rnc-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptRunicCompass extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${runicCompassStyles}</style>
      <div class="rnc">
        <div class="rnc-pulse-ring"></div>
        <div class="rnc-outer-ring"></div>

        <svg class="rnc-staves-svg" viewBox="0 0 72 72">
          <!-- 8 Stave Arms of the Vegvisir Wayfinder -->
          <!-- N Stave -->
          <line x1="36" y1="36" x2="36" y2="6" stroke="#d6ffe0" stroke-width="1.8" stroke-linecap="round" />
          <line x1="32" y1="12" x2="40" y2="12" stroke="#ffffff" stroke-width="1.2" />
          <circle cx="36" cy="6" r="2" fill="#8cffaa" />

          <!-- S Stave -->
          <line x1="36" y1="36" x2="36" y2="66" stroke="#d6ffe0" stroke-width="1.8" stroke-linecap="round" />
          <line x1="30" y1="60" x2="42" y2="60" stroke="#ffffff" stroke-width="1.2" />
          <line x1="33" y1="54" x2="39" y2="54" stroke="#8cffaa" stroke-width="1.2" />

          <!-- E Stave -->
          <line x1="36" y1="36" x2="66" y2="36" stroke="#d6ffe0" stroke-width="1.8" stroke-linecap="round" />
          <line x1="60" y1="31" x2="60" y2="41" stroke="#ffffff" stroke-width="1.2" />
          <circle cx="66" cy="36" r="2" fill="#8cffaa" />

          <!-- W Stave -->
          <line x1="36" y1="36" x2="6" y2="36" stroke="#d6ffe0" stroke-width="1.8" stroke-linecap="round" />
          <line x1="12" y1="31" x2="12" y2="41" stroke="#ffffff" stroke-width="1.2" />
          <circle cx="6" cy="36" r="2" fill="#8cffaa" />

          <!-- Diagonal NE Stave -->
          <line x1="36" y1="36" x2="57" y2="15" stroke="#8cffaa" stroke-width="1.5" stroke-linecap="round" />
          <line x1="50" y1="18" x2="54" y2="22" stroke="#ffffff" stroke-width="1.2" />

          <!-- Diagonal NW Stave -->
          <line x1="36" y1="36" x2="15" y2="15" stroke="#8cffaa" stroke-width="1.5" stroke-linecap="round" />
          <line x1="18" y1="22" x2="22" y2="18" stroke="#ffffff" stroke-width="1.2" />

          <!-- Diagonal SE Stave -->
          <line x1="36" y1="36" x2="57" y2="57" stroke="#8cffaa" stroke-width="1.5" stroke-linecap="round" />
          <line x1="50" y1="54" x2="54" y2="50" stroke="#ffffff" stroke-width="1.2" />

          <!-- Diagonal SW Stave -->
          <line x1="36" y1="36" x2="15" y2="57" stroke="#8cffaa" stroke-width="1.5" stroke-linecap="round" />
          <line x1="18" y1="50" x2="22" y2="54" stroke="#ffffff" stroke-width="1.2" />
        </svg>

        <div class="rnc-center-core"></div>
        <div class="rnc-label">VEGVÍSIR WAYFINDER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-runic-compass')) {
  customElements.define('concept-runic-compass', ConceptRunicCompass);
}
