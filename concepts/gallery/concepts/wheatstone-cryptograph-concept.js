const wheatstoneStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #2b1d0e 0%, #0c0803 100%);
    border: 1.5px solid rgba(255, 183, 77, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 183, 77, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wc-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wc-svg {
    width: 76px;
    height: 72px;
  }

  /* Long Plaintext Hand (26 divisions) */
  .wc-hand-plain {
    transform-origin: 38px 36px;
    animation: wc-spin-plain 8s linear infinite;
  }

  @keyframes wc-spin-plain {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Short Ciphertext Hand (27 divisions - differential gear advance) */
  .wc-hand-cipher {
    transform-origin: 38px 36px;
    animation: wc-spin-cipher 7.7s linear infinite;
  }

  @keyframes wc-spin-cipher {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Differential brass gear meshing */
  .wc-center-gears {
    animation: wc-gear-wiggle 1s ease-in-out infinite alternate;
  }

  @keyframes wc-gear-wiggle {
    0% { filter: drop-shadow(0 0 1px #ffb74d); }
    100% { filter: drop-shadow(0 0 4px #ffd54f); }
  }

  .wc-dial-rim {
    fill: #3e2723;
    stroke: #ffb74d;
    stroke-width: 1.2;
  }

  .wc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 183, 77, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptWheatstoneCryptograph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${wheatstoneStyles}</style>
      <div class="wc-box">
        <div class="wc-stage">
          <svg class="wc-svg" viewBox="0 0 76 72">
            <!-- Brass Clockwork Case Frame -->
            <circle class="wc-dial-rim" cx="38" cy="36" r="32" />
            <circle cx="38" cy="36" r="24" fill="#2d1c14" stroke="#ffb74d" stroke-width="0.8" />
            <circle cx="38" cy="36" r="16" fill="#1b100a" stroke="#d7ccc8" stroke-width="0.6" stroke-dasharray="2 2" />

            <!-- Outer Plaintext Circle Ticks (26 letters) -->
            <g stroke="#ffd54f" stroke-width="0.6">
              <line x1="38" y1="4" x2="38" y2="10" />
              <line x1="60.6" y1="13.4" x2="56.3" y2="17.7" />
              <line x1="70" y1="36" x2="64" y2="36" />
              <line x1="60.6" y1="58.6" x2="56.3" y2="54.3" />
              <line x1="38" y1="68" x2="38" y2="62" />
              <line x1="15.4" y1="58.6" x2="19.7" y2="54.3" />
              <line x1="6" y1="36" x2="12" y2="36" />
              <line x1="15.4" y1="13.4" x2="19.7" y2="17.7" />
            </g>

            <!-- Inner Ciphertext Circle Ticks (27 symbols including blank) -->
            <g stroke="#ff8a65" stroke-width="0.5">
              <line x1="38" y1="12" x2="38" y2="16" />
              <line x1="55" y1="19" x2="52" y2="22" />
              <line x1="62" y1="36" x2="58" y2="36" />
              <line x1="55" y1="53" x2="52" y2="50" />
              <line x1="38" y1="60" x2="38" y2="56" />
              <line x1="21" y1="53" x2="24" y2="50" />
              <line x1="14" y1="36" x2="18" y2="36" />
              <line x1="21" y1="19" x2="24" y2="22" />
            </g>

            <!-- Dial Letter Samples -->
            <g font-family="sans-serif" font-size="3.5" fill="#ffe082" text-anchor="middle">
              <text x="38" y="9">A</text>
              <text x="63" y="37">G</text>
              <text x="38" y="66">N</text>
              <text x="13" y="37">U</text>
            </g>

            <!-- Long Plaintext Hand (Outer needle, brass-gold) -->
            <g class="wc-hand-plain">
              <line x1="38" y1="36" x2="38" y2="10" stroke="#ffd54f" stroke-width="1.2" stroke-linecap="round" />
              <polygon points="38,8 36,12 40,12" fill="#ffd54f" />
            </g>

            <!-- Short Ciphertext Hand (Inner needle, red enamel) -->
            <g class="wc-hand-cipher">
              <line x1="38" y1="36" x2="38" y2="18" stroke="#ff3d00" stroke-width="1.4" stroke-linecap="round" />
              <polygon points="38,16 35.5,20 40.5,20" fill="#ff3d00" />
            </g>

            <!-- Differential Sun & Planet Center Pinion Hub -->
            <g class="wc-center-gears">
              <circle cx="38" cy="36" r="5" fill="#ffb74d" stroke="#ff8f00" stroke-width="1" />
              <circle cx="38" cy="36" r="2" fill="#3e2723" />
            </g>
          </svg>
        </div>
        <div class="wc-label">WHEATSTONE CRYPTOGRAPH</div>
      </div>
    `;
  }
}

customElements.define('concept-wheatstone-cryptograph', ConceptWheatstoneCryptograph);
