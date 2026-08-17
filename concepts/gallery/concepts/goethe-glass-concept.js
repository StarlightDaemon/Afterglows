const goetheStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #161824 0%, #06070a 100%);
    border: 1.5px solid rgba(68, 138, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(68, 138, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gg-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Wrought iron hanging wall bracket */
  .gg-bracket {
    position: absolute;
    top: 6px;
    left: 18px;
    width: 4px;
    height: 60px;
    background: #37474f;
    border: 1px solid #78909c;
  }

  /* Blown glass flagon bulb */
  .gg-vessel-svg {
    position: absolute;
    width: 72px;
    height: 64px;
    filter: drop-shadow(0 0 6px rgba(68, 138, 255, 0.4));
  }

  /* Water level inside the swan-neck spout responding dynamically to barometric drop */
  .gg-spout-water {
    stroke: #00e5ff;
    stroke-dasharray: 60;
    animation: gg-water-rise 2.4s ease-in-out infinite alternate;
  }

  @keyframes gg-water-rise {
    0% { stroke-dashoffset: 40; }
    100% { stroke-dashoffset: 0; }
  }

  /* Continuous storm water droplets overflowing from spout tip */
  .gg-storm-drop {
    position: absolute;
    top: 14px;
    left: 23px;
    width: 4px;
    height: 6px;
    border-radius: 50% 50% 20% 20%;
    background: #00e5ff;
    box-shadow: 0 0 6px #00e5ff;
    z-index: 5;
    animation: gg-drop-fall 2.4s linear infinite;
  }

  .sd1 { animation-delay: 1.2s; }
  .sd2 { animation-delay: 2.0s; }

  @keyframes gg-drop-fall {
    0% { transform: translateY(0) scale(0.6); opacity: 0; }
    30% { opacity: 1; transform: translateY(4px) scale(1); }
    80% { opacity: 1; }
    100% { transform: translateY(22px) scale(0.4); opacity: 0; }
  }

  /* Trapped air bulb breathing */
  .gg-air-bubble {
    animation: gg-bubble-breathe 2.4s ease-in-out infinite alternate;
    transform-origin: 44px 24px;
  }

  @keyframes gg-bubble-breathe {
    0% { transform: scale(1.08); }
    100% { transform: scale(0.92); }
  }

  .gg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(68, 138, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGoetheGlass extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${goetheStyles}</style>
      <div class="gg-box">
        <div class="gg-stage">
          <div class="gg-bracket"></div>

          <svg class="gg-vessel-svg" viewBox="0 0 72 64">
            <!-- Glass Main Body (trapped air pocket + water base) -->
            <path d="M 44 14 C 58 14, 66 30, 64 46 C 62 58, 40 60, 36 54 C 34 50, 32 44, 32 36 C 32 24, 36 14, 44 14 Z" fill="rgba(68, 138, 255, 0.12)" stroke="#90caf9" stroke-width="1.5" />
            
            <!-- Trapped Air Pocket Expansion -->
            <g class="gg-air-bubble">
              <circle cx="44" cy="24" r="8" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255, 255, 255, 0.4)" stroke-width="0.8" />
            </g>

            <!-- Blue water in main flask body -->
            <path d="M 33 42 C 34 56, 62 58, 63 46 C 64 40, 32 38, 33 42 Z" fill="rgba(0, 229, 255, 0.5)" />

            <!-- Long narrow swan-neck spout -->
            <path d="M 36 54 Q 18 54 18 36 Q 18 16 26 12" fill="none" stroke="#90caf9" stroke-width="3.5" stroke-linecap="round" />
            <path class="gg-spout-water" d="M 36 54 Q 18 54 18 36 Q 18 16 26 12" fill="none" stroke-width="2.2" stroke-linecap="round" />
          </svg>

          <div class="gg-storm-drop sd1"></div>
          <div class="gg-storm-drop sd2"></div>
        </div>

        <div class="gg-label">GOETHE THUNDER GLASS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-goethe-glass')) {
  customElements.define('concept-goethe-glass', ConceptGoetheGlass);
}
