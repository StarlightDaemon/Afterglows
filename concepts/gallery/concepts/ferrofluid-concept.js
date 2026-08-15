const ferrofluidStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ferro {
    width: 116px;
    height: 100px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  /* Glass dish base */
  .ferro-dish {
    position: relative;
    width: 86px;
    height: 48px;
    border-radius: 0 0 43px 43px;
    border: 1.5px solid rgba(0, 204, 0, 0.7);
    border-top: none;
    background: radial-gradient(ellipse at 50% 20%, rgba(0, 50, 15, 0.5), #020803 80%);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.2);
    overflow: hidden;
  }

  .ferro-rim {
    position: absolute;
    top: 26px;
    width: 88px;
    height: 14px;
    border-radius: 50%;
    border: 1.5px solid rgba(140, 255, 170, 0.8);
    background: rgba(0, 30, 8, 0.6);
    box-shadow: inset 0 0 6px rgba(0, 204, 0, 0.4);
    z-index: 2;
  }

  /* Magnetic spikes (Rosensweig instability hedgehog) */
  .ferro-pool {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 38px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .ferro-spike-svg {
    width: 64px;
    height: 38px;
    filter: drop-shadow(0 0 4px #8cffaa);
    animation: ferro-spike-pulse 3.5s ease-in-out infinite;
  }

  @keyframes ferro-spike-pulse {
    0%, 100% {
      transform: scaleY(0.4) scaleX(0.9);
      opacity: 0.7;
    }
    45%, 65% {
      transform: scaleY(1.15) scaleX(1);
      opacity: 1;
      filter: drop-shadow(0 0 8px #d6ffe0);
    }
  }

  /* Electromagnet base underneath */
  .ferro-magnet {
    margin-top: 2px;
    width: 48px;
    height: 16px;
    background: linear-gradient(180deg, rgba(0, 100, 20, 0.9), rgba(0, 40, 10, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 4px;
    box-sizing: border-box;
  }

  .ferro-coil {
    width: 5px;
    height: 10px;
    background: #d6ffe0;
    border-radius: 1px;
    opacity: 0.6;
    animation: ferro-coil-glow 3.5s ease-in-out infinite;
  }

  @keyframes ferro-coil-glow {
    0%, 100% { opacity: 0.3; background: #8cffaa; }
    45%, 65% { opacity: 1; background: #ffffff; box-shadow: 0 0 6px #8cffaa; }
  }

  /* Magnetic flux lines */
  .ferro-flux {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
`;

class ConceptFerrofluid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ferrofluidStyles}</style>
      <div class="ferro">
        <svg class="ferro-flux" viewBox="0 0 116 100">
          <!-- Magnetic field loops -->
          <path d="M 28 85 C 10 60 10 30 58 20 C 106 30 106 60 88 85" stroke="rgba(0, 204, 0, 0.3)" stroke-width="1" stroke-dasharray="3,3" fill="none" />
          <path d="M 38 85 C 25 65 25 40 58 32 C 91 40 91 65 78 85" stroke="rgba(140, 255, 170, 0.4)" stroke-width="1" stroke-dasharray="2,3" fill="none" />
        </svg>
        <div class="ferro-rim"></div>
        <div class="ferro-dish">
          <div class="ferro-pool">
            <svg class="ferro-spike-svg" viewBox="0 0 64 38">
              <!-- Rosensweig instability spiked crown -->
              <polygon points="
                4,36 8,24 13,34 18,12 23,32 28,6 32,2 36,6 41,32 46,12 51,34 56,24 60,36
              " fill="url(#ferroGrad)" stroke="#8cffaa" stroke-width="1.2" />
              <defs>
                <linearGradient id="ferroGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#d6ffe0" />
                  <stop offset="40%" stop-color="#00aa22" />
                  <stop offset="100%" stop-color="#021a06" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div class="ferro-magnet">
          <div class="ferro-coil"></div>
          <div class="ferro-coil"></div>
          <div class="ferro-coil"></div>
          <div class="ferro-coil"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-ferrofluid')) {
  customElements.define('concept-ferrofluid', ConceptFerrofluid);
}
