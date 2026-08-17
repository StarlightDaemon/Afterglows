const chrysalisStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .chr {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Supporting plant stem/twig at top */
  .chr-twig {
    position: absolute;
    top: 14px;
    width: 104px;
    height: 6px;
    background: linear-gradient(180deg, #008818, #011d06);
    border: 1px solid var(--accent, #00cc00);
    border-radius: 3px;
    transform: rotate(-4deg);
    z-index: 3;
  }

  /* Silk cremaster anchor button */
  .chr-cremaster {
    position: absolute;
    top: 18px;
    left: 56px;
    width: 4px;
    height: 8px;
    background: #ffffff;
    border-radius: 1px;
    box-shadow: 0 0 4px #ffffff;
    z-index: 4;
  }

  /* Hanging Chrysalis Pupa assembly with active muscular sway */
  .chr-pupa-rig {
    position: absolute;
    top: 24px;
    left: 42px;
    width: 32px;
    height: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: chr-active-sway 2.6s ease-in-out infinite alternate;
    transform-origin: top center;
    z-index: 5;
  }

  @keyframes chr-active-sway {
    0% { transform: rotate(-14deg) scale(0.95); }
    50% { transform: rotate(0deg) scale(1.05); }
    100% { transform: rotate(14deg) scale(0.95); }
  }

  /* Pupa body shell SVG */
  .chr-pupa-svg {
    width: 32px;
    height: 58px;
    filter: drop-shadow(0 0 6px rgba(0, 204, 0, 0.5));
  }

  /* Golden reflective decorative spots */
  .chr-gold-spot {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #ffd700;
    animation: chr-gold-glint 1.3s ease-in-out infinite alternate;
  }

  .chr-gold-spot.g1 { top: 12px; left: 6px; animation-delay: 0s; }
  .chr-gold-spot.g2 { top: 12px; right: 6px; animation-delay: 0.3s; }
  .chr-gold-spot.g3 { top: 22px; left: 4px; animation-delay: 0.6s; }
  .chr-gold-spot.g4 { top: 22px; right: 4px; animation-delay: 0.9s; }

  @keyframes chr-gold-glint {
    0% { transform: scale(0.7); opacity: 0.4; }
    100% { transform: scale(1.4); opacity: 1; filter: drop-shadow(0 0 10px #ffffff); }
  }

  /* Developing butterfly wing venation actively unfurling inside */
  .chr-wing-venation {
    position: absolute;
    top: 18px;
    width: 20px;
    height: 30px;
    border: 1.5px dashed rgba(255, 255, 255, 0.85);
    border-radius: 50% 50% 30% 30%;
    animation: chr-wing-expand 2.6s ease-in-out infinite alternate;
  }

  @keyframes chr-wing-expand {
    0% { transform: scale(0.75) rotate(-5deg); opacity: 0.4; }
    100% { transform: scale(1.2) rotate(5deg); opacity: 1; filter: drop-shadow(0 0 6px #8cffaa); }
  }

  /* Metamorphosis label */
  .chr-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptChrysalis extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${chrysalisStyles}</style>
      <div class="chr">
        <div class="chr-twig"></div>
        <div class="chr-cremaster"></div>

        <div class="chr-pupa-rig">
          <svg class="chr-pupa-svg" viewBox="0 0 32 58">
            <defs>
              <linearGradient id="pupaGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#d6ffe0" />
                <stop offset="45%" stop-color="#00aa22" />
                <stop offset="100%" stop-color="#012409" />
              </linearGradient>
            </defs>
            <!-- Jade green monarch chrysalis contoured body -->
            <path d="M 16 2 C 26 8 30 20 28 36 C 26 48 20 56 16 58 C 12 56 6 48 4 36 C 2 20 6 8 16 2 Z" fill="url(#pupaGrad)" stroke="#ffffff" stroke-width="1.2" />
            <!-- Abdominal segments -->
            <path d="M 8 14 Q 16 18 24 14" stroke="#ffffff" stroke-width="1" fill="none" />
            <path d="M 9 24 Q 16 28 23 24" stroke="#d6ffe0" stroke-width="1" fill="none" />
            <path d="M 11 34 Q 16 38 21 34" stroke="#d6ffe0" stroke-width="1" fill="none" />
          </svg>

          <div class="chr-wing-venation"></div>
          <div class="chr-gold-spot g1"></div>
          <div class="chr-gold-spot g2"></div>
          <div class="chr-gold-spot g3"></div>
          <div class="chr-gold-spot g4"></div>
        </div>

        <div class="chr-label">METAMORPHOSIS PUPA</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-chrysalis')) {
  customElements.define('concept-chrysalis', ConceptChrysalis);
}
