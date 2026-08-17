const mobiusStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mob {
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

  /* Rotating 3D Mobius loop rig with wide isometric rocking */
  .mob-loop-rig {
    position: relative;
    width: 86px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: mob-wobble 3.6s ease-in-out infinite alternate;
  }

  @keyframes mob-wobble {
    0% { transform: rotate(-14deg) scale(0.9); }
    100% { transform: rotate(14deg) scale(1.12); }
  }

  /* Mobius strip ribbon curves SVG */
  .mob-ribbon-svg {
    width: 86px;
    height: 64px;
    filter: drop-shadow(0 0 4px #8cffaa);
  }

  /* Traveling photon particles traversing the single continuous surface */
  .mob-particle {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #8cffaa;
    offset-path: path("M 14 32 C 14 14 42 14 56 32 C 70 50 82 50 82 32 C 82 14 56 14 42 32 C 28 50 14 50 14 32");
    animation: mob-traverse 2.6s linear infinite;
    z-index: 5;
  }

  .mp1 { animation-delay: 0s; }
  .mp2 { animation-delay: 1.3s; }

  @keyframes mob-traverse {
    0% { offset-distance: 0%; transform: scale(1); }
    25% { transform: scale(0.6); opacity: 0.6; }
    50% { offset-distance: 50%; transform: scale(1.3); opacity: 1; }
    75% { transform: scale(0.6); opacity: 0.6; }
    100% { offset-distance: 100%; transform: scale(1); }
  }

  /* Topological property label */
  .mob-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptMobiusStrip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${mobiusStyles}</style>
      <div class="mob">
        <div class="mob-loop-rig">
          <svg class="mob-ribbon-svg" viewBox="0 0 86 64">
            <defs>
              <linearGradient id="mobGrad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#d6ffe0" />
                <stop offset="50%" stop-color="#00aa22" />
                <stop offset="100%" stop-color="#012208" />
              </linearGradient>
              <linearGradient id="mobGrad2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#8cffaa" />
                <stop offset="50%" stop-color="#006611" />
                <stop offset="100%" stop-color="#021004" />
              </linearGradient>
            </defs>

            <!-- Front loop half -->
            <path d="M 14 32 C 14 14 42 14 56 32 C 70 50 82 50 82 32" stroke="url(#mobGrad1)" stroke-width="6" fill="none" stroke-linecap="round" />
            <!-- Back twist loop half -->
            <path d="M 82 32 C 82 14 56 14 42 32 C 28 50 14 50 14 32" stroke="url(#mobGrad2)" stroke-width="4" stroke-dasharray="3,2" fill="none" stroke-linecap="round" />
            <!-- Center seam core line -->
            <path d="M 14 32 C 14 14 42 14 56 32 C 70 50 82 50 82 32 C 82 14 56 14 42 32 C 28 50 14 50 14 32" stroke="#ffffff" stroke-width="1.2" fill="none" opacity="0.8" />
          </svg>

          <div class="mob-particle mp1"></div>
          <div class="mob-particle mp2"></div>
        </div>

        <div class="mob-label">χ = 0 • 1-SIDED</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-mobius-strip')) {
  customElements.define('concept-mobius-strip', ConceptMobiusStrip);
}
