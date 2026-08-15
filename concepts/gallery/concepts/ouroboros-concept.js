const ouroborosStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .our {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #03140a 0%, #000402 100%);
    border: 1.5px solid rgba(0, 255, 136, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 255, 136, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rotating ouroboros body ring */
  .our-ring {
    position: absolute;
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: our-rotate 12s linear infinite;
  }

  @keyframes our-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .our-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .our-body {
    fill: none;
    stroke: #00ff88;
    stroke-width: 4;
    stroke-linecap: round;
    filter: drop-shadow(0 0 4px #00cc66);
  }

  .our-scales {
    fill: none;
    stroke: #ffffff;
    stroke-width: 1.5;
    stroke-dasharray: 2 4;
  }

  /* Serpent head swallowing tail tip */
  .our-head {
    position: absolute;
    top: 4px;
    left: 42px;
    width: 14px;
    height: 10px;
    background: #00ff88;
    clip-path: polygon(0 50%, 70% 0, 100% 35%, 100% 65%, 70% 100%);
    box-shadow: 0 0 8px #ffffff;
    z-index: 6;
  }

  .our-eye {
    position: absolute;
    top: 2px;
    left: 7px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #ffffff;
  }

  /* Central alchemical symbol (Philosopher's stone squared circle) */
  .our-center-glyph {
    position: absolute;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: our-glyph-pulse 3s ease-in-out infinite alternate;
  }

  @keyframes our-glyph-pulse {
    0% { transform: scale(0.85); opacity: 0.7; }
    100% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 6px #00ff88); }
  }

  .our-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 255, 136, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptOuroboros extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ouroborosStyles}</style>
      <div class="our">
        <div class="our-ring">
          <svg class="our-svg" viewBox="0 0 76 76">
            <!-- Serpent coiled circular torus body -->
            <circle class="our-body" cx="38" cy="38" r="28" stroke-dasharray="160 20" />
            <circle class="our-scales" cx="38" cy="38" r="28" />
            <!-- Tail tapering into head maw -->
            <path d="M 40 10 Q 48 10 52 14" fill="none" stroke="#8cffaa" stroke-width="2" stroke-linecap="round" />
          </svg>

          <div class="our-head">
            <div class="our-eye"></div>
          </div>
        </div>

        <div class="our-center-glyph">
          <svg viewBox="0 0 32 32" style="width: 100%; height: 100%;">
            <!-- Alchemical triangle in circle -->
            <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(0, 255, 136, 0.5)" stroke-width="1" stroke-dasharray="2 2" />
            <polygon points="16,3 27,24 5,24" fill="none" stroke="#ffffff" stroke-width="1" />
            <rect x="10" y="10" width="12" height="12" fill="none" stroke="#00ff88" stroke-width="1" />
            <circle cx="16" cy="16" r="3" fill="#ffffff" />
          </svg>
        </div>

        <div class="our-label">OUROBOROS ETERNAL LOOP</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-ouroboros')) {
  customElements.define('concept-ouroboros', ConceptOuroboros);
}
