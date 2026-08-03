// A spider hanging on its dragline, rebuilt for legibility (2026-08-01):
// the eight legs are proper two-segment limbs arched up-and-out from the
// body in mirrored pairs, stepping in a staggered ripple. The spider drops
// a little, dangles with a slow pendulum sway, and reels back up — the
// thread rides with it so the line never detaches.
// v1 is the archived original; v2 (default) is the rebuild.
const spiderStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A spider rappelling on its dragline: it drops on a lengthening
     thread, its eight legs bicycling, pauses dangling with a sway,
     then reels itself back up. */
  .sp {
    width: 88px;
    height: 100px;
    position: relative;
  }

  /* Anchor point at the top. */
  .sp-anchor {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 8px;
    height: 3px;
    margin-left: -4px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.6);
  }

  /* Silk thread: scales with the spider's descent. */
  .sp-thread {
    position: absolute;
    left: 50%;
    top: 6px;
    width: 1px;
    margin-left: -0.5px;
    height: 44px;
    background: rgba(190, 255, 205, 0.6);
    transform-origin: top center;
    animation: sp-thread 5s ease-in-out infinite;
  }

  @keyframes sp-thread {
    0% { transform: scaleY(0.2); }
    30% { transform: scaleY(1); }
    64% { transform: scaleY(1); }
    92%, 100% { transform: scaleY(0.2); }
  }

  /* Spider carrier riding the thread end, with a gentle sway. */
  .sp-body {
    position: absolute;
    left: 50%;
    top: 6px;
    width: 0;
    height: 0;
    animation: sp-drop 5s ease-in-out infinite, sp-sway 2.4s ease-in-out infinite;
  }

  @keyframes sp-drop {
    0% { transform: translateY(8px); }
    30% { transform: translateY(50px); }
    64% { transform: translateY(50px); }
    92%, 100% { transform: translateY(8px); }
  }

  @keyframes sp-sway {
    0%, 100% { margin-left: -2px; }
    50% { margin-left: 2px; }
  }

  /* Abdomen + cephalothorax. */
  .sp-abdomen {
    position: absolute;
    left: -9px;
    top: 0;
    width: 18px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%,
      rgba(190, 255, 205, 0.75),
      rgba(0, 150, 30, 0.8) 60%,
      rgba(0, 90, 18, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  /* Hourglass marking. */
  .sp-abdomen::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 3px;
    width: 4px;
    height: 8px;
    margin-left: -2px;
    clip-path: polygon(0 0, 100% 0, 30% 50%, 100% 100%, 0 100%, 70% 50%);
    background: rgba(214, 255, 224, 0.8);
  }

  .sp-cephalo {
    position: absolute;
    left: -5px;
    top: -6px;
    width: 10px;
    height: 8px;
    border-radius: 50%;
    background: rgba(0, 120, 24, 0.9);
  }

  /* Eyes. */
  .sp-cephalo::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 2px;
    width: 1.5px;
    height: 1.5px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 3px 0 0 #d6ffe0;
  }

  /* Legs: four each side, bicycling. Drawn as bent lines. */
  .sp-leg {
    position: absolute;
    top: -2px;
    width: 16px;
    height: 12px;
    border: 1.5px solid rgba(140, 255, 170, 0.75);
    border-radius: 60%;
    border-right-color: transparent;
    border-bottom-color: transparent;
    animation: sp-legmove 0.6s ease-in-out infinite;
  }

  .sp-leg.l1 { left: -20px; transform: rotate(20deg); }
  .sp-leg.l2 { left: -18px; top: 2px; transform: rotate(0deg); animation-delay: -0.15s; }
  .sp-leg.l3 { left: -18px; top: 6px; transform: rotate(-20deg); animation-delay: -0.3s; }
  .sp-leg.l4 { left: -16px; top: 10px; transform: rotate(-40deg); animation-delay: -0.45s; }
  .sp-leg.r1 { right: -20px; transform: scaleX(-1) rotate(20deg); }
  .sp-leg.r2 { right: -18px; top: 2px; transform: scaleX(-1) rotate(0deg); animation-delay: -0.15s; }
  .sp-leg.r3 { right: -18px; top: 6px; transform: scaleX(-1) rotate(-20deg); animation-delay: -0.3s; }
  .sp-leg.r4 { right: -16px; top: 10px; transform: scaleX(-1) rotate(-40deg); animation-delay: -0.45s; }

  @keyframes sp-legmove {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-2px) rotate(6deg); }
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

  .sp {
    width: 96px;
    height: 96px;
    position: relative;
  }

  /* Pendulum sway about the thread's anchor point above the frame. */
  .sp-sway {
    position: absolute;
    inset: 0;
    transform-origin: 50% -40px;
    animation: sp-sway 5s ease-in-out infinite;
  }

  @keyframes sp-sway {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  /* Drop-and-reel: the whole rig (thread + spider) rides this. */
  .sp-drop {
    position: absolute;
    inset: 0;
    animation: sp-drop 5s ease-in-out infinite;
  }

  @keyframes sp-drop {
    0%, 100% { transform: translateY(-10px); }
    35%, 65% { transform: translateY(8px); }
  }

  /* Dragline: anchored to the spider, extending well past the frame top. */
  .sp-thread {
    position: absolute;
    left: 50%;
    bottom: 62px;
    width: 1.5px;
    height: 140px;
    margin-left: -0.75px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.15), rgba(140, 255, 170, 0.7));
  }

  /* Body group: legs attach to the cephalothorax point. */
  .sp-body {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 0;
    height: 0;
  }

  /* Cephalothorax (front, upper) and abdomen (rear, hanging lower). */
  .sp-ceph {
    position: absolute;
    left: -8px;
    top: -10px;
    width: 16px;
    height: 13px;
    border-radius: 50%;
    background: radial-gradient(circle at 42% 35%, rgba(160, 255, 185, 0.9), rgba(0, 120, 24, 0.95) 75%);
    border: 1px solid rgba(0, 204, 0, 0.6);
    z-index: 2;
  }

  .sp-abdomen {
    position: absolute;
    left: -12px;
    top: 0;
    width: 24px;
    height: 20px;
    border-radius: 50% 50% 46% 54%;
    background:
      radial-gradient(circle at 50% 30%, rgba(190, 255, 205, 0.55) 0 3px, transparent 4px),
      radial-gradient(circle at 42% 36%, rgba(120, 235, 150, 0.8), rgba(0, 90, 18, 0.95) 78%);
    border: 1px solid rgba(0, 204, 0, 0.6);
    z-index: 1;
  }

  /* Eyes on the cephalothorax. */
  .sp-eye {
    position: absolute;
    top: -6px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #eaffea;
    box-shadow: 0 0 3px rgba(190, 255, 205, 0.9);
    z-index: 3;
  }

  .sp-eye.e1 { left: -4.5px; }
  .sp-eye.e2 { left: 2px; }

  /* Legs: femur (parent) + tibia (child), origin at the body point.
     Femurs arch upward-out; tibias bend back down — the classic hanging
     silhouette. Each leg steps on its own phase. */
  .sp-leg {
    position: absolute;
    left: 0;
    top: -4px;
    width: 15px;
    height: 2px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.85);
    transform-origin: 0 50%;
    animation: sp-step 1.6s ease-in-out infinite;
  }

  .sp-shin {
    position: absolute;
    left: 100%;
    top: 0;
    width: 13px;
    height: 2px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.7);
    transform-origin: 0 50%;
  }

  /* Right side: four legs fanned from steep-up to shallow-down. */
  .sp-leg.r1 { transform: rotate(-64deg); }
  .sp-leg.r2 { transform: rotate(-38deg); }
  .sp-leg.r3 { transform: rotate(-12deg); }
  .sp-leg.r4 { transform: rotate(16deg); width: 13px; }
  .sp-leg.r1 .sp-shin { transform: rotate(78deg); }
  .sp-leg.r2 .sp-shin { transform: rotate(64deg); }
  .sp-leg.r3 .sp-shin { transform: rotate(52deg); }
  .sp-leg.r4 .sp-shin { transform: rotate(40deg); }

  /* Left side mirrors. */
  .sp-leg.l1 { transform: rotate(-116deg); }
  .sp-leg.l2 { transform: rotate(-142deg); }
  .sp-leg.l3 { transform: rotate(-168deg); }
  .sp-leg.l4 { transform: rotate(-196deg); width: 13px; }
  .sp-leg.l1 .sp-shin { transform: rotate(-78deg); }
  .sp-leg.l2 .sp-shin { transform: rotate(-64deg); }
  .sp-leg.l3 .sp-shin { transform: rotate(-52deg); }
  .sp-leg.l4 .sp-shin { transform: rotate(-40deg); }

  /* Stepping ripple: a gentle rotate wobble, phase-staggered so pairs
     alternate rather than flail. Uses a CSS var so each leg keeps its
     own base angle. */
  .sp-leg.r1 { --base: -64deg; animation-delay: 0s; }
  .sp-leg.r2 { --base: -38deg; animation-delay: -0.4s; }
  .sp-leg.r3 { --base: -12deg; animation-delay: -0.8s; }
  .sp-leg.r4 { --base: 16deg;  animation-delay: -1.2s; }
  .sp-leg.l1 { --base: -116deg; animation-delay: -0.8s; }
  .sp-leg.l2 { --base: -142deg; animation-delay: -1.2s; }
  .sp-leg.l3 { --base: -168deg; animation-delay: 0s; }
  .sp-leg.l4 { --base: -196deg; animation-delay: -0.4s; }

  @keyframes sp-step {
    0%, 100% { transform: rotate(var(--base)); }
    50% { transform: rotate(calc(var(--base) + 5deg)); }
  }

  /* Spinnerets glint where the thread meets the body. */
  .sp-spinneret {
    position: absolute;
    left: -1.5px;
    top: -2px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #d8ffbb;
    box-shadow: 0 0 4px rgba(216, 255, 187, 0.8);
    z-index: 3;
  }
`,
};

const spiderMarkup = {
  v1: `
      <div class="sp">
        <div class="sp-anchor"></div>
        <div class="sp-thread"></div>
        <div class="sp-body">
          <div class="sp-leg l1"></div><div class="sp-leg l2"></div>
          <div class="sp-leg l3"></div><div class="sp-leg l4"></div>
          <div class="sp-leg r1"></div><div class="sp-leg r2"></div>
          <div class="sp-leg r3"></div><div class="sp-leg r4"></div>
          <div class="sp-abdomen"></div>
          <div class="sp-cephalo"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="sp">
        <div class="sp-sway">
          <div class="sp-drop">
            <div class="sp-thread"></div>
            <div class="sp-body">
              <div class="sp-leg r1"><div class="sp-shin"></div></div>
              <div class="sp-leg r2"><div class="sp-shin"></div></div>
              <div class="sp-leg r3"><div class="sp-shin"></div></div>
              <div class="sp-leg r4"><div class="sp-shin"></div></div>
              <div class="sp-leg l1"><div class="sp-shin"></div></div>
              <div class="sp-leg l2"><div class="sp-shin"></div></div>
              <div class="sp-leg l3"><div class="sp-shin"></div></div>
              <div class="sp-leg l4"><div class="sp-shin"></div></div>
              <div class="sp-abdomen"></div>
              <div class="sp-ceph"></div>
              <div class="sp-spinneret"></div>
              <div class="sp-eye e1"></div>
              <div class="sp-eye e2"></div>
            </div>
          </div>
        </div>
      </div>
    `,
};

class ConceptSpider extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${spiderStyles[version] || spiderStyles.v2}</style>${spiderMarkup[version] || spiderMarkup.v2}`;
  }
}

if (!customElements.get('concept-spider')) {
  customElements.define('concept-spider', ConceptSpider);
}
