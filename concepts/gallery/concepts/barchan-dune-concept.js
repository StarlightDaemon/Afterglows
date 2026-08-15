const barchanStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dune {
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

  /* Desert sky gradient & haze */
  .dune-sky {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #010602 0%, #031c0a 60%, #020803 100%);
  }

  /* Wind saltation streamlines blowing from left to right */
  .dune-wind-stream {
    position: absolute;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(214, 255, 224, 0.8), transparent);
    animation: dune-wind 1.8s linear infinite;
  }

  .dune-wind-stream.w1 { top: 18px; left: -60px; width: 80px; animation-delay: 0s; }
  .dune-wind-stream.w2 { top: 32px; left: -80px; width: 100px; animation-delay: 0.5s; }
  .dune-wind-stream.w3 { top: 46px; left: -50px; width: 70px; animation-delay: 0.9s; }
  .dune-wind-stream.w4 { top: 60px; left: -70px; width: 90px; animation-delay: 1.3s; }

  @keyframes dune-wind {
    0% { transform: translateX(0); opacity: 0; }
    30% { opacity: 0.9; }
    100% { transform: translateX(200px); opacity: 0; }
  }

  /* Crescent Barchan Dune Body SVG */
  .dune-body-svg {
    position: absolute;
    bottom: 8px;
    width: 108px;
    height: 64px;
    filter: drop-shadow(0 0 4px rgba(0, 204, 0, 0.4));
  }

  /* Saltating sand grains tumbling down slip face */
  .dune-grain {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
    animation: dune-sand-fall 2.2s linear infinite;
  }

  .dune-grain.g1 { left: 62px; top: 52px; animation-delay: 0.2s; }
  .dune-grain.g2 { left: 68px; top: 56px; animation-delay: 0.7s; }
  .dune-grain.g3 { left: 74px; top: 62px; animation-delay: 1.2s; }
  .dune-grain.g4 { left: 58px; top: 68px; animation-delay: 1.6s; }

  @keyframes dune-sand-fall {
    0% { transform: translate(0, 0); opacity: 0; }
    20% { opacity: 1; }
    100% { transform: translate(14px, 16px); opacity: 0; }
  }

  /* Compass / wind direction indicator */
  .dune-wind-indicator {
    position: absolute;
    top: 6px;
    left: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: rgba(140, 255, 170, 0.7);
    letter-spacing: 0.5px;
  }
`;

class ConceptBarchanDune extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${barchanStyles}</style>
      <div class="dune">
        <div class="dune-sky"></div>
        <div class="dune-wind-indicator">WIND ➔➔</div>

        <div class="dune-wind-stream w1"></div>
        <div class="dune-wind-stream w2"></div>
        <div class="dune-wind-stream w3"></div>
        <div class="dune-wind-stream w4"></div>

        <svg class="dune-body-svg" viewBox="0 0 108 64">
          <defs>
            <linearGradient id="barchanGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#8cffaa" />
              <stop offset="50%" stop-color="#008818" />
              <stop offset="100%" stop-color="#011a05" />
            </linearGradient>
          </defs>
          <!-- Windward gentle slope -->
          <path d="M 6 56 C 24 54 42 38 60 22 C 78 36 94 48 102 56 C 88 50 78 44 60 44 C 42 44 22 52 6 56 Z" fill="url(#barchanGrad)" stroke="var(--accent, #00cc00)" stroke-width="1.2" />
          <!-- Steep slip face between crescent horns -->
          <path d="M 60 22 C 68 34 82 46 102 56 C 82 52 70 42 60 22 Z" fill="#03240a" stroke="#d6ffe0" stroke-width="1" />
          <!-- Crest ridge line -->
          <path d="M 60 22 C 76 35 90 46 102 56" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="1.5,2" fill="none" />
        </svg>

        <div class="dune-grain g1"></div>
        <div class="dune-grain g2"></div>
        <div class="dune-grain g3"></div>
        <div class="dune-grain g4"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-barchan-dune')) {
  customElements.define('concept-barchan-dune', ConceptBarchanDune);
}
