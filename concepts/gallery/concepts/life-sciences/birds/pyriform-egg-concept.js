const pyriformStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pe-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #0c1a24 0%, #03080d 100%);
    border: 1.5px solid rgba(80, 227, 194, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(80, 227, 194, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pe-stage {
    position: relative;
    width: 96px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Narrow cliff ledge */
  .pe-cliff {
    position: absolute;
    bottom: 12px;
    left: 4px;
    right: 28px;
    height: 18px;
    background: linear-gradient(180deg, #2a3b4c 0%, #121d28 100%);
    border-top: 1.5px solid #50e3c2;
    border-right: 1.5px solid #50e3c2;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
  }

  /* Sea drop-off void with foam line */
  .pe-sea-foam {
    position: absolute;
    bottom: 8px;
    right: 6px;
    width: 24px;
    height: 4px;
    border-bottom: 1px dashed rgba(80, 227, 194, 0.4);
  }

  /* Pyriform (pointed conical) egg that pivots in tight circles */
  .pe-egg-pivot {
    position: absolute;
    bottom: 24px;
    left: 32px;
    width: 32px;
    height: 40px;
    transform-origin: 8px 34px;
    animation: pe-spin-wobble 2.4s ease-in-out infinite alternate;
  }

  @keyframes pe-spin-wobble {
    0% { transform: rotate(-24deg); }
    50% { transform: rotate(18deg) scale(0.96); }
    100% { transform: rotate(-10deg); }
  }

  .pe-egg-svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7));
  }

  /* Tight circular roll arc guide (showing it stays on ledge) */
  .pe-roll-orbit {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 38px;
    height: 18px;
    border: 1px dashed rgba(80, 227, 194, 0.35);
    border-radius: 50%;
    transform: rotateX(60deg);
  }

  .pe-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(80, 227, 194, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPyriformEgg extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pyriformStyles}</style>
      <div class="pe-box">
        <div class="pe-stage">
          <div class="pe-cliff"></div>
          <div class="pe-sea-foam"></div>
          <div class="pe-roll-orbit"></div>

          <div class="pe-egg-pivot">
            <svg class="pe-egg-svg" viewBox="0 0 32 40">
              <!-- Murre pyriform egg body (tapered top, blunt heavy base) -->
              <path d="M 16 2 C 22 2, 28 16, 26 30 C 24 38, 8 38, 6 30 C 4 16, 10 2, 16 2 Z" fill="#2bd9b0" stroke="#ffffff" stroke-width="1" />
              <!-- Dark speckles & scribbles typical of sea bird cliff camouflage -->
              <circle cx="14" cy="12" r="1.5" fill="#082b24" />
              <circle cx="20" cy="22" r="1.8" fill="#082b24" />
              <circle cx="10" cy="28" r="2.2" fill="#082b24" />
              <circle cx="17" cy="33" r="1.4" fill="#082b24" />
              <path d="M 11 18 Q 16 20 18 16" fill="none" stroke="#082b24" stroke-width="1" stroke-linecap="round" />
            </svg>
          </div>
        </div>

        <div class="pe-label">PYRIFORM CLIFF EGG</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pyriform-egg')) {
  customElements.define('concept-pyriform-egg', ConceptPyriformEgg);
}
