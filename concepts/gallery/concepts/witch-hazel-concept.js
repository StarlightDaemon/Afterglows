const witchHazelStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wh-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #20170a 0%, #080501 100%);
    border: 1.5px solid rgba(255, 193, 7, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 193, 7, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wh-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Woody Twig Branch */
  .wh-twig {
    position: absolute;
    bottom: 12px;
    left: 8px;
    width: 44px;
    height: 4px;
    background: #4e342e;
    border-radius: 2px;
    transform: rotate(20deg);
  }

  /* Woody two-valved capsule pod */
  .wh-capsule {
    position: absolute;
    bottom: 24px;
    left: 32px;
    width: 24px;
    height: 28px;
    display: flex;
    justify-content: space-between;
  }

  .wh-valve-l {
    width: 11px;
    height: 26px;
    background: #5d4037;
    border: 1.2px solid #ffb300;
    border-radius: 12px 2px 2px 12px;
    transform-origin: bottom center;
    animation: wh-pop-l 3s ease-in-out infinite;
  }

  @keyframes wh-pop-l {
    0%, 65% { transform: rotate(0deg); }
    70%, 100% { transform: rotate(-25deg); }
  }

  .wh-valve-r {
    width: 11px;
    height: 26px;
    background: #5d4037;
    border: 1.2px solid #ffb300;
    border-radius: 2px 12px 12px 2px;
    transform-origin: bottom center;
    animation: wh-pop-r 3s ease-in-out infinite;
  }

  @keyframes wh-pop-r {
    0%, 65% { transform: rotate(0deg); }
    70%, 100% { transform: rotate(25deg); }
  }

  /* Explosively shot glossy black seed */
  .wh-seed {
    position: absolute;
    width: 6px;
    height: 4px;
    border-radius: 50%;
    background: #111111;
    border: 1px solid #ffd54f;
    box-shadow: 0 0 6px #ffc107;
    animation: wh-shoot 3s ease-in-out infinite;
  }

  @keyframes wh-shoot {
    0%, 68% { bottom: 34px; left: 41px; opacity: 1; transform: scale(1); }
    72% { bottom: 62px; left: 74px; opacity: 1; transform: scale(1.1) rotate(45deg); }
    78%, 100% { bottom: 68px; left: 88px; opacity: 0; transform: scale(0.5); }
  }

  /* Golden crinkled strap petals of witch-hazel bloom */
  .wh-petals-svg {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 32px;
    height: 32px;
  }

  .wh-strap-petal {
    stroke: #ffd54f;
    stroke-width: 1.2;
    fill: none;
  }

  .wh-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 193, 7, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptWitchHazel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${witchHazelStyles}</style>
      <div class="wh-box">
        <div class="wh-stage">
          <div class="wh-twig"></div>

          <svg class="wh-petals-svg" viewBox="0 0 32 32">
            <!-- Crinkled yellow strap ribbon petals -->
            <path class="wh-strap-petal" d="M 16 16 Q 8 6 4 10" />
            <path class="wh-strap-petal" d="M 16 16 Q 22 4 28 8" />
            <path class="wh-strap-petal" d="M 16 16 Q 6 26 2 24" />
          </svg>

          <div class="wh-capsule">
            <div class="wh-valve-l"></div>
            <div class="wh-valve-r"></div>
          </div>

          <div class="wh-seed"></div>
        </div>

        <div class="wh-label">WITCH-HAZEL SEED</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-witch-hazel')) {
  customElements.define('concept-witch-hazel', ConceptWitchHazel);
}
