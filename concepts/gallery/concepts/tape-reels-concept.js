// Tape Reels, rebuilt (2026-08-02): the spin was real but invisible — two
// perfectly concentric rings rotating around their own center have no
// visual asymmetry, so a full 360° turn looked frozen. Now each reel has
// six spokes (asymmetric under rotation) and a tape PACK whose radius
// shrinks on the left reel and grows on the right — the classic
// winding-across read, not just two spinning wheels.
// v1 is the archived original from before the rebuild, preserved verbatim.
const tapeReelsStyles = {
  v1: `
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
`,
  v2: `
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
    overflow: hidden;
  }

  .tape-reel {
    position: absolute;
    top: 14px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid rgba(170, 255, 170, 0.75);
  }

  .tape-reel.left { left: 14px; }
  .tape-reel.right { right: 14px; }

  /* Tape pack: the wound tape's radius, shrinking as it plays off the
     left reel and building on the right. */
  .tape-pack {
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: rgba(0, 150, 30, 0.35);
    animation: pack-shrink 9s linear infinite;
  }

  .tape-reel.right .tape-pack {
    animation-name: pack-grow;
  }

  @keyframes pack-shrink {
    0% { inset: 3px; opacity: 0.55; }
    100% { inset: 9.5px; opacity: 0.2; }
  }

  @keyframes pack-grow {
    0% { inset: 9.5px; opacity: 0.2; }
    100% { inset: 3px; opacity: 0.55; }
  }

  /* Hub with six spokes: the actual spin-carrying geometry, since a
     plain ring rotating on its own axis reads as static. */
  .tape-hub {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1px solid rgba(170, 255, 170, 0.45);
    animation: reel-spin 2.6s linear infinite;
  }

  .tape-reel.right .tape-hub { animation-direction: reverse; }

  .tape-spoke {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 40%;
    height: 1.5px;
    margin-top: -0.75px;
    background: rgba(170, 255, 170, 0.65);
    transform-origin: 0 50%;
  }

  .tape-spoke.k1 { transform: rotate(0deg); }
  .tape-spoke.k2 { transform: rotate(60deg); }
  .tape-spoke.k3 { transform: rotate(120deg); }
  .tape-spoke.k4 { transform: rotate(180deg); }
  .tape-spoke.k5 { transform: rotate(240deg); }
  .tape-spoke.k6 { transform: rotate(300deg); }

  .tape-hub::after {
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

  @keyframes reel-spin { to { transform: rotate(360deg); } }

  /* Tape path: two strands running reel to reel, so the pair reads as
     connected by something rather than two independent wheels. */
  .tape-strand {
    position: absolute;
    left: 40px;
    right: 40px;
    height: 1.5px;
    background: rgba(170, 255, 170, 0.4);
  }

  .tape-strand.upper { top: 21px; }
  .tape-strand.lower { bottom: 21px; }

  .tape-window {
    position: absolute;
    top: 25px;
    left: 39px;
    width: 18px;
    height: 8px;
    border: 1px solid rgba(170, 255, 170, 0.35);
    background: rgba(0, 204, 0, 0.1);
    z-index: 2;
  }

  /* A single frame of tape crossing the window, so motion reads even
     when the reels themselves are glanced at only briefly. */
  .tape-window::after {
    content: '';
    position: absolute;
    inset: 0 0 0 -100%;
    width: 300%;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.35) 0 2px,
      transparent 2px 5px);
    animation: tape-run 0.5s linear infinite;
  }

  @keyframes tape-run {
    to { transform: translateX(33.33%); }
  }
`,
};

const tapeReelsMarkup = {
  v1: `
      <div class="tape-reels">
        <div class="tape-reel left"></div>
        <div class="tape-reel right"></div>
        <div class="tape-window"></div>
      </div>
    `,
  v2: `
      <div class="tape-reels">
        <div class="tape-strand upper"></div>
        <div class="tape-strand lower"></div>
        <div class="tape-reel left">
          <div class="tape-pack"></div>
          <div class="tape-hub">
            <div class="tape-spoke k1"></div>
            <div class="tape-spoke k2"></div>
            <div class="tape-spoke k3"></div>
            <div class="tape-spoke k4"></div>
            <div class="tape-spoke k5"></div>
            <div class="tape-spoke k6"></div>
          </div>
        </div>
        <div class="tape-reel right">
          <div class="tape-pack"></div>
          <div class="tape-hub">
            <div class="tape-spoke k1"></div>
            <div class="tape-spoke k2"></div>
            <div class="tape-spoke k3"></div>
            <div class="tape-spoke k4"></div>
            <div class="tape-spoke k5"></div>
            <div class="tape-spoke k6"></div>
          </div>
        </div>
        <div class="tape-window"></div>
      </div>
    `,
};

class ConceptTapeReels extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${tapeReelsStyles[version] || tapeReelsStyles.v2}</style>${tapeReelsMarkup[version] || tapeReelsMarkup.v2}`;
  }
}

if (!customElements.get('concept-tape-reels')) {
  customElements.define('concept-tape-reels', ConceptTapeReels);
}
