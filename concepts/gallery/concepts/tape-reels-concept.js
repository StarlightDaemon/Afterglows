const tapeReelsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tape-reels {
    width: 96px;
    height: 60px;
    position: relative;
    border: 1px solid rgba(170, 255, 170, 0.35);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 20, 0, 0.95), rgba(0, 6, 0, 0.95));
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.08);
  }

  .tape-reel {
    position: absolute;
    top: 14px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid rgba(170, 255, 170, 0.75);
    animation: reel-spin 2.6s linear infinite;
  }

  .tape-reel.left { left: 14px; }
  .tape-reel.right { right: 14px; animation-direction: reverse; }

  .tape-reel::before {
    content: '';
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1px solid rgba(170, 255, 170, 0.45);
  }

  .tape-reel::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d8ffbb;
    transform: translate(-50%, -50%);
  }

  .tape-window {
    position: absolute;
    top: 25px;
    left: 39px;
    width: 18px;
    height: 8px;
    border: 1px solid rgba(170, 255, 170, 0.35);
    background: rgba(0, 204, 0, 0.1);
  }

  @keyframes reel-spin { to { transform: rotate(360deg); } }
`;

class ConceptTapeReels extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tapeReelsStyles}</style>
      <div class="tape-reels">
        <div class="tape-reel left"></div>
        <div class="tape-reel right"></div>
        <div class="tape-window"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tape-reels')) {
  customElements.define('concept-tape-reels', ConceptTapeReels);
}
