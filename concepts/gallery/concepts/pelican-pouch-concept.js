const pelicanStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0a1c24 0%, #02070a 100%);
    border: 1.5px solid rgba(255, 202, 40, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 202, 40, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pp-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Upper mandible (beak roof) */
  .pp-upper-beak {
    position: absolute;
    top: 24px;
    left: 14px;
    width: 58px;
    height: 5px;
    background: #ffca28;
    border: 1px solid #ffffff;
    border-radius: 2px 8px 1px 2px;
    box-shadow: 0 0 4px #ffca28;
    z-index: 5;
  }

  /* Pelican Eye and Head Crown */
  .pp-head {
    position: absolute;
    top: 14px;
    left: 64px;
    width: 22px;
    height: 20px;
    background: #e0e0e0;
    border: 1.2px solid #ffca28;
    border-radius: 50% 50% 30% 30%;
    z-index: 6;
  }

  .pp-eye {
    position: absolute;
    top: 5px;
    left: 6px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #000000;
    border: 1px solid #ffd54f;
  }

  /* Distensible elastic gular pouch dip-net */
  .pp-pouch-svg {
    position: absolute;
    top: 28px;
    left: 14px;
    width: 58px;
    height: 38px;
    transform-origin: 52px 0px;
    animation: pp-pouch-scoop 4s ease-in-out infinite alternate;
  }

  @keyframes pp-pouch-scoop {
    0% { transform: scaleY(0.4); }
    50% { transform: scaleY(1.3); }
    100% { transform: scaleY(0.4); }
  }

  /* Schooling fish trapped inside pouch */
  .pp-fish {
    position: absolute;
    width: 6px;
    height: 3px;
    border-radius: 50% 50% 0 0;
    background: #ffffff;
    box-shadow: 0 0 4px #00e5ff;
    animation: pp-fish-swim 2s ease-in-out infinite alternate;
  }

  @keyframes pp-fish-swim {
    0% { transform: translate(0, 0) scaleX(1); }
    100% { transform: translate(8px, -4px) scaleX(-1); }
  }

  .pp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 202, 40, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPelicanPouch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pelicanStyles}</style>
      <div class="pp-box">
        <div class="pp-stage">
          <div class="pp-head">
            <div class="pp-eye"></div>
          </div>

          <div class="pp-upper-beak"></div>

          <svg class="pp-pouch-svg" viewBox="0 0 58 38">
            <!-- Distensible vascularized yellow-pink throat skin -->
            <path d="M 4 2 Q 25 36 54 2 Z" fill="rgba(255, 202, 40, 0.35)" stroke="#ffca28" stroke-width="1.5" />
            <!-- Elastic keratin struts & blood vessels -->
            <path d="M 12 4 Q 28 28 50 4" fill="none" stroke="rgba(255, 112, 67, 0.6)" stroke-width="1" stroke-dasharray="3 2" />
          </svg>

          <div class="pp-fish" style="top: 40px; left: 32px;"></div>
          <div class="pp-fish" style="top: 46px; left: 44px; animation-delay: -0.6s;"></div>
        </div>

        <div class="pp-label">PELICAN GULAR POUCH</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pelican-pouch')) {
  customElements.define('concept-pelican-pouch', ConceptPelicanPouch);
}
