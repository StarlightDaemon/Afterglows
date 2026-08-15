const caduceusStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #061e12 0%, #010804 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 230, 118, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hc-stage {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Central Gold Rod / Wand */
  .hc-rod {
    position: absolute;
    width: 3px;
    height: 64px;
    background: linear-gradient(180deg, #ffffff 0%, #ffd700 50%, #ff8f00 100%);
    border-radius: 1.5px;
    box-shadow: 0 0 6px #ffd700;
  }

  /* Crown Solar Orb */
  .hc-orb {
    position: absolute;
    top: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #ffd700;
    box-shadow: 0 0 10px #ffd700, 0 0 16px #00e676;
    animation: hc-orb-glow 2s ease-in-out infinite alternate;
  }

  @keyframes hc-orb-glow {
    0% { transform: scale(0.9); box-shadow: 0 0 8px #ffd700; }
    100% { transform: scale(1.15); box-shadow: 0 0 14px #00e676; }
  }

  /* Alchemical Wings */
  .hc-wings-svg {
    position: absolute;
    top: 10px;
    width: 52px;
    height: 16px;
    animation: hc-wings-flap 3s ease-in-out infinite alternate;
  }

  @keyframes hc-wings-flap {
    0% { transform: scaleY(0.85); }
    100% { transform: scaleY(1.1); }
  }

  /* Dual Intertwined Helical Serpents */
  .hc-serpents-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .hc-serpent-left {
    stroke: #00e676;
    stroke-dasharray: 6 3;
    animation: hc-helix-l 2s linear infinite;
  }

  @keyframes hc-helix-l {
    to { stroke-dashoffset: -18; }
  }

  .hc-serpent-right {
    stroke: #ffd700;
    stroke-dasharray: 6 3;
    animation: hc-helix-r 2s linear infinite;
  }

  @keyframes hc-helix-r {
    to { stroke-dashoffset: 18; }
  }

  .hc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptHermeticCaduceus extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${caduceusStyles}</style>
      <div class="hc-box">
        <div class="hc-stage">
          <svg class="hc-wings-svg" viewBox="0 0 52 16">
            <path d="M 26 12 C 16 0, 0 4, 2 14 C 10 10, 18 12, 26 12 Z" fill="rgba(255, 215, 0, 0.6)" stroke="#ffffff" stroke-width="0.8" />
            <path d="M 26 12 C 36 0, 52 4, 50 14 C 42 10, 34 12, 26 12 Z" fill="rgba(255, 215, 0, 0.6)" stroke="#ffffff" stroke-width="0.8" />
          </svg>

          <div class="hc-rod"></div>

          <svg class="hc-serpents-svg" viewBox="0 0 80 80">
            <!-- Left Emerald Serpent Helix -->
            <path class="hc-serpent-left" d="M 40 70 Q 26 60 40 50 Q 54 40 40 30 Q 26 20 40 12" fill="none" stroke-width="2" stroke-linecap="round" />
            <!-- Right Solar Serpent Helix -->
            <path class="hc-serpent-right" d="M 40 70 Q 54 60 40 50 Q 26 40 40 30 Q 54 20 40 12" fill="none" stroke-width="2" stroke-linecap="round" />
          </svg>

          <div class="hc-orb"></div>
        </div>

        <div class="hc-label">HERMETIC CADUCEUS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-hermetic-caduceus')) {
  customElements.define('concept-hermetic-caduceus', ConceptHermeticCaduceus);
}
