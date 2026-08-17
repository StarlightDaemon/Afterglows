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
    width: 3.5px;
    height: 64px;
    background: linear-gradient(180deg, #ffffff 0%, #ffd700 50%, #ff8f00 100%);
    border-radius: 1.5px;
    box-shadow: 0 0 6px #ffd700;
  }

  /* Crown Solar Orb */
  .hc-orb {
    position: absolute;
    top: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #ffd700;
    box-shadow: 0 0 10px #ffd700, 0 0 16px #00e676;
    animation: hc-orb-glow 1.8s ease-in-out infinite alternate;
  }

  @keyframes hc-orb-glow {
    0% { transform: scale(0.85); box-shadow: 0 0 8px #ffd700; }
    100% { transform: scale(1.25); box-shadow: 0 0 16px #00e676; }
  }

  /* Alchemical Wings with active flapping sweep */
  .hc-wings-svg {
    position: absolute;
    top: 6px;
    width: 56px;
    height: 20px;
    animation: hc-wings-flap 2.2s ease-in-out infinite alternate;
    transform-origin: 28px 16px;
  }

  @keyframes hc-wings-flap {
    0% { transform: rotate(-14deg) scaleY(0.8); }
    100% { transform: rotate(14deg) scaleY(1.2); }
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
    stroke-width: 2.2;
    stroke-linecap: round;
    fill: none;
  }

  .hc-serpent-right {
    stroke: #ffd700;
    stroke-width: 2.2;
    stroke-linecap: round;
    fill: none;
  }

  /* Ascending kundalini/transmutation spark nodes along serpent helices */
  .hc-kundalini-spark {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    z-index: 6;
  }

  .ks-left {
    box-shadow: 0 0 6px #00e676, 0 0 10px #ffffff;
    animation: hc-ascend-left 2.4s ease-in-out infinite;
  }

  .ks-right {
    box-shadow: 0 0 6px #ffd700, 0 0 10px #ffffff;
    animation: hc-ascend-right 2.4s ease-in-out infinite;
    animation-delay: 1.2s;
  }

  @keyframes hc-ascend-left {
    0% { transform: translate(-14px, 32px) scale(0.7); opacity: 0; }
    20% { opacity: 1; }
    50% { transform: translate(14px, 2px) scale(1.3); }
    80% { opacity: 1; }
    100% { transform: translate(-10px, -30px) scale(1.5); opacity: 0; }
  }

  @keyframes hc-ascend-right {
    0% { transform: translate(14px, 32px) scale(0.7); opacity: 0; }
    20% { opacity: 1; }
    50% { transform: translate(-14px, 2px) scale(1.3); }
    80% { opacity: 1; }
    100% { transform: translate(10px, -30px) scale(1.5); opacity: 0; }
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
            <path d="M 26 12 C 16 0, 0 4, 2 14 C 10 10, 18 12, 26 12 Z" fill="rgba(255, 215, 0, 0.8)" stroke="#ffffff" stroke-width="1" />
            <path d="M 26 12 C 36 0, 52 4, 50 14 C 42 10, 34 12, 26 12 Z" fill="rgba(255, 215, 0, 0.8)" stroke="#ffffff" stroke-width="1" />
          </svg>

          <div class="hc-rod"></div>

          <svg class="hc-serpents-svg" viewBox="0 0 80 80">
            <!-- Left Emerald Serpent Helix -->
            <path class="hc-serpent-left" d="M 40 70 Q 26 60 40 50 Q 54 40 40 30 Q 26 20 40 12" />
            <!-- Right Solar Serpent Helix -->
            <path class="hc-serpent-right" d="M 40 70 Q 54 60 40 50 Q 26 40 40 30 Q 54 20 40 12" />
          </svg>

          <div class="hc-kundalini-spark ks-left"></div>
          <div class="hc-kundalini-spark ks-right"></div>
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
