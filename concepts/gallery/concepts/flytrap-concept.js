// Venus flytrap, rebuilt (2026-08-02): the trap now tells its whole
// story — the toothed lobes hold open and sway on a sturdy stem, a fly
// buzzes in and lands on the trigger hairs, the trap SNAPS shut in a
// blink with the cilia interlocking, squeezes twice, then creaks back
// open, empty. A small rosette of leaves grounds the base.
// v1 is the archived original (side-hinged lobes, digest glow).
const flytrapStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A Venus flytrap lying in wait: its toothed lobes hold open,
     trigger hairs twitching, a fly wanders in - snap - the trap
     clamps shut, then slowly relaxes open again for the next. */
  .vt {
    width: 104px;
    height: 96px;
    position: relative;
  }

  /* Stem + base. */
  .vt-stem {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 4px;
    height: 40px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.8), rgba(0, 110, 22, 0.8));
  }

  .vt-base {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 26px;
    height: 8px;
    margin-left: -13px;
    border-radius: 50% 50% 40% 40%;
    background: rgba(0, 90, 18, 0.7);
  }

  /* The trap head. */
  .vt-head {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 0;
    height: 0;
  }

  /* Two lobes hinged along the midline. */
  .vt-lobe {
    position: absolute;
    top: 0;
    width: 26px;
    height: 34px;
    background: radial-gradient(ellipse at 50% 40%,
      rgba(190, 255, 205, 0.55),
      rgba(0, 160, 32, 0.6) 60%,
      rgba(0, 90, 18, 0.75));
    border: 1px solid rgba(140, 255, 170, 0.7);
    transform-origin: 100% 50%;
  }

  .vt-lobe.left {
    left: -26px;
    border-radius: 80% 20% 30% 70% / 60% 40% 60% 40%;
    animation: vt-snap-l 6s infinite;
  }

  .vt-lobe.right {
    left: 0;
    transform-origin: 0% 50%;
    border-radius: 20% 80% 70% 30% / 40% 60% 40% 60%;
    animation: vt-snap-r 6s infinite;
  }

  /* Teeth: cilia along the outer rim. */
  .vt-teeth {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 6px;
    background: repeating-linear-gradient(180deg,
      rgba(214, 255, 224, 0.9) 0 2px,
      transparent 2px 6px);
  }

  .vt-lobe.left .vt-teeth { left: -3px; }
  .vt-lobe.right .vt-teeth { right: -3px; }

  /* Trigger hairs inside. */
  .vt-hair {
    position: absolute;
    width: 1px;
    height: 6px;
    background: rgba(140, 255, 170, 0.8);
    animation: vt-twitch 6s infinite;
  }

  .vt-lobe.left .vt-hair.h1 { left: 8px; top: 10px; }
  .vt-lobe.left .vt-hair.h2 { left: 14px; top: 18px; }
  .vt-lobe.right .vt-hair.h1 { right: 8px; top: 10px; }
  .vt-lobe.right .vt-hair.h2 { right: 14px; top: 18px; }

  @keyframes vt-twitch {
    0%, 28% { transform: rotate(0deg); }
    30% { transform: rotate(-12deg); }
    33% { transform: rotate(8deg); }
    36%, 100% { transform: rotate(0deg); }
  }

  /* The snap: open (splayed) most of the cycle, clamp fast at 38%,
     hold, then ease open. */
  @keyframes vt-snap-l {
    0%, 36% { transform: rotate(-32deg); }
    40% { transform: rotate(-2deg); }
    44% { transform: rotate(-6deg); }
    70% { transform: rotate(-6deg); }
    90%, 100% { transform: rotate(-32deg); }
  }

  @keyframes vt-snap-r {
    0%, 36% { transform: rotate(32deg); }
    40% { transform: rotate(2deg); }
    44% { transform: rotate(6deg); }
    70% { transform: rotate(6deg); }
    90%, 100% { transform: rotate(32deg); }
  }

  /* The fly: buzzes in, gets caught at the snap. */
  .vt-fly {
    position: absolute;
    left: 0;
    top: 20px;
    width: 6px;
    height: 4px;
    animation: vt-fly 6s infinite;
  }

  .vt-fly::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(0, 70, 14, 0.95);
    box-shadow: 0 0 3px rgba(140, 255, 170, 0.6);
  }

  /* Wing shimmer. */
  .vt-fly::after {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    width: 8px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.4);
    animation: vt-flywing 0.08s steps(2) infinite;
  }

  @keyframes vt-flywing {
    0% { transform: scaleY(1); }
    100% { transform: scaleY(0.5); }
  }

  @keyframes vt-fly {
    0% { left: 4px; top: 8px; opacity: 0; }
    8% { opacity: 1; }
    /* Wander toward the open trap. */
    22% { left: 34px; top: 28px; }
    34% { left: 48px; top: 24px; }
    /* Caught - vanishes as the trap closes. */
    38% { left: 50px; top: 24px; opacity: 1; }
    41% { left: 50px; top: 24px; opacity: 0; }
    100% { opacity: 0; }
  }

  /* Digest glow while clamped. */
  .vt-glow {
    position: absolute;
    left: 50%;
    top: 24px;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 204, 0, 0.4), transparent 70%);
    opacity: 0;
    animation: vt-glow 6s infinite;
  }

  @keyframes vt-glow {
    0%, 42% { opacity: 0; }
    50% { opacity: 0.9; }
    68% { opacity: 0.5; }
    80%, 100% { opacity: 0; }
  }
`,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vf {
    width: 104px;
    height: 96px;
    position: relative;
  }

  /* Base rosette. */
  .vf-rosette {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 0;
    height: 0;
  }

  .vf-baseleaf {
    position: absolute;
    bottom: 0;
    left: -5px;
    width: 26px;
    height: 9px;
    border-radius: 10% 90% 30% 90% / 60% 90% 40% 90%;
    background: linear-gradient(100deg, rgba(0, 140, 28, 0.7), rgba(0, 80, 16, 0.8));
    transform-origin: 0 50%;
  }

  .vf-baseleaf.b1 { transform: rotate(-160deg); }
  .vf-baseleaf.b2 { transform: rotate(-20deg); }
  .vf-baseleaf.b3 { transform: rotate(-120deg); width: 20px; opacity: 0.8; }
  .vf-baseleaf.b4 { transform: rotate(-60deg); width: 20px; opacity: 0.8; }

  /* Stem: sturdy, arching slightly, swaying with the trap. */
  .vf-stem {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 5px;
    height: 40px;
    margin-left: -2.5px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.9), rgba(0, 100, 20, 0.9));
    transform-origin: 50% 100%;
    animation: vf-sway 9s ease-in-out infinite;
  }

  @keyframes vf-sway {
    0%, 100% { transform: rotate(-2deg); }
    30% { transform: rotate(2deg); }
    /* Recoil at the snap. */
    47% { transform: rotate(-5deg); }
    52% { transform: rotate(1deg); }
    70% { transform: rotate(-1deg); }
  }

  /* Trap head assembly rides the stem top. */
  .vf-trap {
    position: absolute;
    left: 50%;
    bottom: 44px;
    width: 0;
    height: 0;
    animation: vf-sway 9s ease-in-out infinite;
  }

  /* Lobes: two toothed halves hinged at the bottom midline. Teeth are
     drawn with a zig-zag clip on each lobe's rim. */
  .vf-lobe {
    position: absolute;
    bottom: 0;
    width: 19px;
    height: 27px;
    background: radial-gradient(ellipse at 50% 88%,
      rgba(0, 70, 14, 0.9) 0 16%,
      rgba(0, 160, 32, 0.85) 55%,
      rgba(160, 255, 185, 0.95));
    border: 1.5px solid rgba(0, 204, 0, 0.75);
    clip-path: polygon(
      0 100%, 0 30%, 12% 12%, 30% 4%,
      /* toothed rim */
      45% 0, 55% 14%, 68% 2%, 78% 16%, 90% 6%, 100% 20%,
      100% 100%);
    animation-duration: 9s;
    animation-timing-function: cubic-bezier(0.6, 0, 0.2, 1);
    animation-iteration-count: infinite;
  }

  .vf-lobe.left {
    left: -19px;
    transform-origin: 100% 100%;
    animation-name: vf-lobe-l;
  }

  .vf-lobe.right {
    left: 0;
    transform: scaleX(-1);
    transform-origin: 0% 100%;
    animation-name: vf-lobe-r;
  }

  /* Open a symmetric ±28° V; SNAP shut in a blink at 46%; squeeze
     pulses; creak back open from 88%. */
  @keyframes vf-lobe-l {
    0%, 44% { transform: rotate(-28deg); }
    46%, 56% { transform: rotate(-2deg); }
    60% { transform: rotate(-6deg); }
    64%, 74% { transform: rotate(-2deg); }
    88%, 100% { transform: rotate(-28deg); }
  }

  @keyframes vf-lobe-r {
    0%, 44% { transform: scaleX(-1) rotate(-28deg); }
    46%, 56% { transform: scaleX(-1) rotate(-2deg); }
    60% { transform: scaleX(-1) rotate(-6deg); }
    64%, 74% { transform: scaleX(-1) rotate(-2deg); }
    88%, 100% { transform: scaleX(-1) rotate(-28deg); }
  }

  /* Trigger-hair glints inside the open trap. */
  .vf-hair {
    position: absolute;
    bottom: 6px;
    width: 1.5px;
    height: 6px;
    background: rgba(214, 255, 224, 0.8);
    opacity: 0;
    animation: vf-hair 9s infinite;
  }

  .vf-hair.h1 { left: -8px; transform: rotate(-16deg); }
  .vf-hair.h2 { left: 6px; transform: rotate(14deg); }

  @keyframes vf-hair {
    0%, 20% { opacity: 0.5; }
    38%, 44% { opacity: 1; }
    46%, 100% { opacity: 0; }
  }

  /* The fly: buzzes a loop, lands between the lobes at 40%, gone at
     the 46% snap. */
  .vf-fly {
    position: absolute;
    left: 10px;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d8ffbb;
    box-shadow: 0 0 5px rgba(216, 255, 187, 0.9);
    opacity: 0;
    animation: vf-fly 9s infinite;
  }

  .vf-fly::after {
    content: '';
    position: absolute;
    left: -1px;
    top: -3px;
    width: 6px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.4);
    filter: blur(0.5px);
  }

  @keyframes vf-fly {
    0%, 8% { opacity: 0; transform: translate(0, 0); }
    14% { opacity: 1; transform: translate(14px, 10px); }
    22% { transform: translate(30px, 2px); }
    30% { transform: translate(40px, 14px); }
    36% { transform: translate(44px, 24px); }
    /* Lands on the trap mouth (trap centre ≈ x 52, y 30). */
    40%, 45% { opacity: 1; transform: translate(42px, 30px); }
    /* Snapped. */
    46%, 100% { opacity: 0; transform: translate(42px, 30px); }
  }

  /* Snap flash ring. */
  .vf-snap {
    position: absolute;
    left: 50%;
    bottom: 56px;
    width: 22px;
    height: 22px;
    margin-left: -11px;
    border: 1.5px solid rgba(190, 255, 205, 0.9);
    border-radius: 50%;
    opacity: 0;
    animation: vf-snap 9s ease-out infinite;
  }

  @keyframes vf-snap {
    0%, 45% { transform: scale(0.4); opacity: 0; }
    47% { opacity: 0.9; }
    56% { transform: scale(1.7); opacity: 0; }
    100% { opacity: 0; }
  }
`,
};

const flytrapMarkup = {
  v1: `
      <div class="vt">
        <div class="vt-base"></div>
        <div class="vt-stem"></div>
        <div class="vt-head">
          <div class="vt-glow"></div>
          <div class="vt-lobe left">
            <div class="vt-teeth"></div>
            <div class="vt-hair h1"></div>
            <div class="vt-hair h2"></div>
          </div>
          <div class="vt-lobe right">
            <div class="vt-teeth"></div>
            <div class="vt-hair h1"></div>
            <div class="vt-hair h2"></div>
          </div>
        </div>
        <div class="vt-fly"></div>
      </div>
    `,
  v2: `
      <div class="vf">
        <div class="vf-rosette">
          <div class="vf-baseleaf b1"></div>
          <div class="vf-baseleaf b2"></div>
          <div class="vf-baseleaf b3"></div>
          <div class="vf-baseleaf b4"></div>
        </div>
        <div class="vf-stem"></div>
        <div class="vf-fly"></div>
        <div class="vf-snap"></div>
        <div class="vf-trap">
          <div class="vf-hair h1"></div>
          <div class="vf-hair h2"></div>
          <div class="vf-lobe left"></div>
          <div class="vf-lobe right"></div>
        </div>
      </div>
    `,
};

class ConceptFlytrap extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${flytrapStyles[version] || flytrapStyles.v2}</style>${flytrapMarkup[version] || flytrapMarkup.v2}`;
  }
}

if (!customElements.get('concept-flytrap')) {
  customElements.define('concept-flytrap', ConceptFlytrap);
}
