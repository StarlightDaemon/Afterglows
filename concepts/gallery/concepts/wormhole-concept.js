const wormholeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: the original spinning cone --- */
  .wormhole {
    width: 100%;
    height: 100%;
    background: conic-gradient(from 0deg, #000, var(--accent, #00cc00));
    border-radius: 50%;
    animation: spin 0.5s linear infinite;
    mask-image: radial-gradient(transparent 30%, black 70%);
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  /* --- v2: a throat with depth ---
     Rings fall endlessly toward the singularity while debris streaks
     spiral in. A slow accretion swirl turns behind everything and the
     event horizon holds a hard bright rim around true black. */
  .wh2 {
    width: 104px;
    height: 104px;
    position: relative;
  }

  .wh2-swirl {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(from 0deg,
      rgba(0, 204, 0, 0.05), rgba(0, 204, 0, 0.4), rgba(0, 204, 0, 0.05),
      rgba(0, 204, 0, 0.35), rgba(0, 204, 0, 0.05));
    -webkit-mask-image: radial-gradient(circle, transparent 0 24%, black 40% 92%, transparent 96%);
    mask-image: radial-gradient(circle, transparent 0 24%, black 40% 92%, transparent 96%);
    animation: wh2-turn 7s linear infinite;
    opacity: 0.7;
  }

  @keyframes wh2-turn {
    to { transform: rotate(360deg); }
  }

  /* Rings falling inward. Scale eases faster near the center, the way
     things accelerate down a gravity well. */
  .wh2-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 96px;
    height: 96px;
    margin: -48px 0 0 -48px;
    border: 1px solid rgba(140, 255, 170, 0.7);
    border-radius: 50%;
    animation: wh2-fall 3.2s cubic-bezier(0.5, 0, 0.9, 0.4) infinite;
  }

  .wh2-ring.r2 { animation-delay: -0.64s; }
  .wh2-ring.r3 { animation-delay: -1.28s; }
  .wh2-ring.r4 { animation-delay: -1.92s; }
  .wh2-ring.r5 { animation-delay: -2.56s; }

  @keyframes wh2-fall {
    0% { transform: scale(1.06); opacity: 0; }
    12% { opacity: 0.75; }
    70% { opacity: 0.55; }
    100% { transform: scale(0.16); opacity: 0; }
  }

  /* Debris streaks: carriers rotate while the mote slides inward, so
     each one traces a genuine spiral. */
  .wh2-carrier {
    position: absolute;
    inset: 0;
    animation: wh2-turn 2.4s linear infinite;
  }

  .wh2-carrier.c2 { animation-duration: 3.1s; animation-delay: -1.1s; }
  .wh2-carrier.c3 { animation-duration: 2.7s; animation-delay: -0.6s; }

  .wh2-mote {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7px;
    height: 2px;
    margin: -1px 0 0 0;
    border-radius: 1px;
    background: linear-gradient(90deg, rgba(214, 255, 224, 0.95), transparent);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
    animation: wh2-infall 2.4s ease-in infinite;
  }

  .wh2-carrier.c2 .wh2-mote { animation-duration: 3.1s; animation-delay: -1.1s; }
  .wh2-carrier.c3 .wh2-mote { animation-duration: 2.7s; animation-delay: -0.6s; }

  @keyframes wh2-infall {
    0% { transform: translateX(46px); opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 0.9; }
    100% { transform: translateX(9px); opacity: 0; }
  }

  /* Event horizon: black core with a hard rim and breathing corona. */
  .wh2-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    margin: -15px 0 0 -15px;
    border-radius: 50%;
    background: #000;
    border: 2px solid rgba(190, 255, 205, 0.95);
    box-shadow:
      0 0 12px rgba(0, 204, 0, 0.8),
      inset 0 0 8px rgba(0, 204, 0, 0.5);
    animation: wh2-corona 2.6s ease-in-out infinite;
  }

  @keyframes wh2-corona {
    0%, 100% { box-shadow: 0 0 10px rgba(0, 204, 0, 0.6), inset 0 0 6px rgba(0, 204, 0, 0.4); }
    50% { box-shadow: 0 0 20px rgba(0, 204, 0, 1), inset 0 0 10px rgba(0, 204, 0, 0.7); }
  }
`;

const wormholeMarkup = {
  v1: `<div class="wormhole"></div>`,
  v2: `
    <div class="wh2">
      <div class="wh2-swirl"></div>
      <div class="wh2-ring"></div>
      <div class="wh2-ring r2"></div>
      <div class="wh2-ring r3"></div>
      <div class="wh2-ring r4"></div>
      <div class="wh2-ring r5"></div>
      <div class="wh2-carrier"><div class="wh2-mote"></div></div>
      <div class="wh2-carrier c2"><div class="wh2-mote"></div></div>
      <div class="wh2-carrier c3"><div class="wh2-mote"></div></div>
      <div class="wh2-core"></div>
    </div>
  `,
};

class ConceptWormhole extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${wormholeStyles}</style>${wormholeMarkup[version] || wormholeMarkup.v2}`;
  }
}

if (!customElements.get('concept-wormhole')) {
  customElements.define('concept-wormhole', ConceptWormhole);
}
