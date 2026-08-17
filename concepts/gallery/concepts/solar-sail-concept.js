const solarSailStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sls {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 20% 20%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Distant starfield */
  .sls-starfield {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 15px 25px, #ffffff, transparent),
      radial-gradient(1px 1px at 85px 15px, #8cffaa, transparent),
      radial-gradient(1px 1px at 95px 75px, #ffffff, transparent),
      radial-gradient(1px 1px at 25px 85px, #8cffaa, transparent);
  }

  /* Solar Sail assembly rig accelerating through deep space */
  .sls-sail-rig {
    position: relative;
    width: 82px;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: sls-orbital-glide 3.8s ease-in-out infinite alternate;
  }

  @keyframes sls-orbital-glide {
    0% { transform: translate(-10px, -8px) rotate(-8deg) scale(0.92); }
    100% { transform: translate(10px, 8px) rotate(8deg) scale(1.08); }
  }

  /* 4-Quadrant Reflective Membrane Diamond Sail */
  .sls-membrane-svg {
    position: absolute;
    width: 78px;
    height: 78px;
    filter: drop-shadow(0 0 4px #8cffaa);
  }

  /* Central spacecraft avionics bus core */
  .sls-core-bus {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #ffffff;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 2px;
    box-shadow: 0 0 8px #ffffff;
    z-index: 6;
  }

  /* Traveling incident solar photon momentum packets impacting and reflecting */
  .sls-photon-spark {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #8cffaa;
    z-index: 7;
    animation: sls-photon-bounce 1.6s linear infinite;
  }

  .ph1 {
    offset-path: path("M 10 10 L 40 40 L 70 20");
    animation-delay: 0s;
  }

  .ph2 {
    offset-path: path("M 15 25 L 45 45 L 75 30");
    animation-delay: 0.6s;
  }

  @keyframes sls-photon-bounce {
    0% { offset-distance: 0%; opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  /* Solar radiation pressure vector readout */
  .sls-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptSolarSail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${solarSailStyles}</style>
      <div class="sls">
        <div class="sls-starfield"></div>

        <div class="sls-sail-rig">
          <div class="sls-photon-spark ph1"></div>
          <div class="sls-photon-spark ph2"></div>

          <svg class="sls-membrane-svg" viewBox="0 0 78 78">
            <defs>
              <linearGradient id="sailGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#ffffff" />
                <stop offset="40%" stop-color="#8cffaa" />
                <stop offset="80%" stop-color="#00aa22" />
                <stop offset="100%" stop-color="#011f07" />
              </linearGradient>
            </defs>

            <!-- 4 Membrane Quadrants -->
            <polygon points="39,4 74,39 39,39" fill="url(#sailGrad)" stroke="#d6ffe0" stroke-width="0.8" opacity="0.9" />
            <polygon points="74,39 39,74 39,39" fill="url(#sailGrad)" stroke="#d6ffe0" stroke-width="0.8" opacity="0.8" />
            <polygon points="39,74 4,39 39,39" fill="url(#sailGrad)" stroke="#d6ffe0" stroke-width="0.8" opacity="0.9" />
            <polygon points="4,39 39,4 39,39" fill="url(#sailGrad)" stroke="#d6ffe0" stroke-width="0.8" opacity="0.8" />

            <!-- 4 Diagonal carbon composite structural deployment booms -->
            <line x1="4" y1="4" x2="74" y2="74" stroke="#ffffff" stroke-width="1.8" />
            <line x1="74" y1="4" x2="4" y2="74" stroke="#ffffff" stroke-width="1.8" />
          </svg>

          <div class="sls-core-bus"></div>
        </div>

        <div class="sls-label">PHOTON THRUST: 9.1 µN/m²</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-solar-sail')) {
  customElements.define('concept-solar-sail', ConceptSolarSail);
}
