// Slinky, rebuilt (2026-08-02): the previous version froze as a static
// staircase with an arch that never walked. Now the walk IS the scene —
// an endless staircase conveys up-and-back beneath a slinky flipping end
// over end in place: rings peel off the back stack, arc over the top,
// and pile onto the front stack, one step per cycle.
// v1 is the archived original; v2 (default) is the rebuild.
const slinkyStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A slinky walking down a staircase: the coil flips end over end,
     its trailing loops arcing over to the next step, the mass of
     rings shifting down one tread at a time. */
  .sl {
    width: 108px;
    height: 96px;
    position: relative;
  }

  /* Staircase (three steps). */
  .sl-step {
    position: absolute;
    background: linear-gradient(180deg, rgba(0, 120, 24, 0.5), rgba(0, 70, 14, 0.7));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .sl-step.s1 { left: 8px; top: 24px; width: 34px; height: 8px; }
  .sl-step.s2 { left: 38px; top: 44px; width: 34px; height: 8px; }
  .sl-step.s3 { left: 68px; top: 64px; width: 34px; height: 8px; }

  /* Step risers. */
  .sl-riser {
    position: absolute;
    width: 8px;
    background: rgba(0, 90, 18, 0.6);
    border-left: 1px solid rgba(0, 204, 0, 0.4);
  }

  .sl-riser.r1 { left: 38px; top: 32px; height: 20px; }
  .sl-riser.r2 { left: 68px; top: 52px; height: 20px; }

  /* The slinky: a stack of rings that flips from one step to the next.
     Two "blobs" of coil - the settled base and the arcing arch - swap
     roles each flip via a 3s cycle that advances one step. */
  .sl-coil {
    position: absolute;
    left: 0;
    top: 0;
    animation: sl-walk 3s ease-in-out infinite;
  }

  @keyframes sl-walk {
    0% { transform: translate(14px, 8px); }
    /* Arch over to the second step. */
    50% { transform: translate(44px, 28px); }
    /* And onto the third. */
    100% { transform: translate(74px, 48px); }
  }

  /* Settled base coil (compressed stack of rings). */
  .sl-base {
    position: absolute;
    left: 0;
    top: 0;
    width: 22px;
    height: 16px;
    background:
      repeating-linear-gradient(180deg,
        rgba(214, 255, 224, 0.85) 0 2px,
        rgba(0, 130, 26, 0.7) 2px 4px);
    border-radius: 40% 40% 30% 30%;
    border: 1px solid rgba(0, 204, 0, 0.5);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.3);
    animation: sl-compress 3s ease-in-out infinite;
  }

  @keyframes sl-compress {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.6); }
  }

  /* The arch: a spread arc of rings sweeping over. */
  .sl-arch {
    position: absolute;
    left: 6px;
    top: -12px;
    width: 30px;
    height: 22px;
    border: 3px solid transparent;
    border-top: 3px solid rgba(190, 255, 205, 0.85);
    border-right: 3px solid rgba(190, 255, 205, 0.7);
    border-radius: 60% 60% 0 0 / 100% 100% 0 0;
    /* Coil texture on the arch. */
    background:
      repeating-linear-gradient(90deg,
        transparent 0 2px,
        rgba(140, 255, 170, 0.3) 2px 4px);
    animation: sl-arch 3s ease-in-out infinite;
    transform-origin: 0% 100%;
  }

  @keyframes sl-arch {
    0% { transform: rotate(0deg) scaleX(1); opacity: 1; }
    /* Flips over to lead onto the next step. */
    50% { transform: rotate(20deg) scaleX(1.1); opacity: 1; }
    75% { transform: rotate(-8deg); }
    100% { transform: rotate(0deg) scaleX(1); opacity: 1; }
  }

  /* Motion arcs hinting the flip. */
  .sl-motion {
    position: absolute;
    width: 20px;
    height: 14px;
    border-top: 1px dashed rgba(140, 255, 170, 0.4);
    border-radius: 50% 50% 0 0;
    opacity: 0;
    animation: sl-motion 3s ease-in-out infinite;
  }

  .sl-motion.m1 { left: 28px; top: 30px; }
  .sl-motion.m2 { left: 58px; top: 50px; animation-delay: 0.4s; }

  @keyframes sl-motion {
    0%, 20% { opacity: 0; }
    40% { opacity: 0.7; }
    60%, 100% { opacity: 0; }
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

  .sl {
    width: 112px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  /* Endless staircase: two repeating step layers sliding diagonally
     up-left by exactly one step per walk cycle, so the descent loops. */
  .sl-stairs {
    position: absolute;
    left: -56px;
    right: -56px;
    top: 18px;
    bottom: -28px;
    background:
      repeating-linear-gradient(90deg,
        transparent 0 26px,
        rgba(0, 204, 0, 0.5) 26px 27px,
        transparent 27px 28px),
      repeating-linear-gradient(180deg,
        transparent 0 17px,
        rgba(0, 204, 0, 0.5) 17px 18px,
        transparent 18px 28px);
    /* Carve the gradient field into a descending step edge. */
    clip-path: polygon(
      0 28%, 19% 28%, 19% 47%, 38% 47%, 38% 66%, 57% 66%,
      57% 85%, 76% 85%, 76% 104%, 100% 104%, 100% 200%, 0 200%);
    animation: sl-convey 2.6s linear infinite;
  }

  @keyframes sl-convey {
    0% { transform: translate(0, 0); }
    /* One tread left-up per cycle (tread 28px x rise 19% of 96 ≈ 18px). */
    100% { transform: translate(-28px, -18px); }
  }

  /* Step-edge glow line for depth. */
  .sl-edge {
    position: absolute;
    left: -56px;
    right: -56px;
    top: 18px;
    bottom: -28px;
    clip-path: polygon(
      0 28%, 19% 28%, 19% 47%, 38% 47%, 38% 66%, 57% 66%,
      57% 85%, 76% 85%, 76% 104%, 100% 104%,
      100% 106%, 76% 106%, 76% 87%, 57% 87%, 57% 68%, 38% 68%,
      38% 49%, 19% 49%, 19% 30%, 0 30%);
    background: rgba(140, 255, 170, 0.55);
    animation: sl-convey 2.6s linear infinite;
  }

  /* The slinky: seven rings sharing one flip cycle at staggered phases.
     Each ring travels the same arc from the back (upper) stack to the
     front (lower) stack; the stagger makes the coil stretch into the
     arch and re-stack — the classic end-over-end walk. */
  .sl-coil {
    position: absolute;
    left: 30px;
    top: 20px;
    width: 0;
    height: 0;
  }

  .sl-ring {
    position: absolute;
    left: -13px;
    top: -8px;
    width: 26px;
    height: 18px;
    border: 2.5px solid rgba(160, 255, 185, 0.9);
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.35);
    animation: sl-flip 2.6s ease-in-out infinite;
  }

  /* Phase stagger: rings leave the back stack one after another. */
  .sl-ring.g1 { animation-delay: 0s; }
  .sl-ring.g2 { animation-delay: -0.13s; opacity: 0.95; }
  .sl-ring.g3 { animation-delay: -0.26s; opacity: 0.9; }
  .sl-ring.g4 { animation-delay: -0.39s; opacity: 0.85; }
  .sl-ring.g5 { animation-delay: -0.52s; opacity: 0.8; }
  .sl-ring.g6 { animation-delay: -0.65s; opacity: 0.75; }
  .sl-ring.g7 { animation-delay: -0.78s; opacity: 0.7; }

  /* The arc: dwell on the back step, rise and tumble over, land one
     tread down-right, dwell. The conveyor then carries the landing spot
     back to the start position, closing the loop. */
  @keyframes sl-flip {
    0%, 8% { transform: translate(0, 0) rotate(-12deg); }
    30% { transform: translate(10px, -14px) rotate(30deg); }
    50% { transform: translate(20px, -8px) rotate(78deg); }
    68% { transform: translate(28px, 8px) rotate(96deg); }
    /* Landed on the next tread. */
    80%, 100% { transform: translate(28px, 18px) rotate(90deg); }
  }

  /* A soft contact shadow under the action. */
  .sl-shadow {
    position: absolute;
    left: 24px;
    top: 52px;
    width: 44px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0, 204, 0, 0.25), transparent 70%);
    animation: sl-shadow 2.6s ease-in-out infinite;
  }

  @keyframes sl-shadow {
    0%, 8% { transform: translate(0, 0) scaleX(0.7); opacity: 0.5; }
    50% { transform: translate(12px, 6px) scaleX(1.15); opacity: 0.9; }
    80%, 100% { transform: translate(20px, 12px) scaleX(0.75); opacity: 0.55; }
  }
`,
};

const slinkyMarkup = {
  v1: `
      <div class="sl">
        <div class="sl-step s1"></div>
        <div class="sl-step s2"></div>
        <div class="sl-step s3"></div>
        <div class="sl-riser r1"></div>
        <div class="sl-riser r2"></div>
        <div class="sl-motion m1"></div>
        <div class="sl-motion m2"></div>
        <div class="sl-coil">
          <div class="sl-arch"></div>
          <div class="sl-base"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="sl">
        <div class="sl-stairs"></div>
        <div class="sl-edge"></div>
        <div class="sl-shadow"></div>
        <div class="sl-coil">
          <div class="sl-ring g7"></div>
          <div class="sl-ring g6"></div>
          <div class="sl-ring g5"></div>
          <div class="sl-ring g4"></div>
          <div class="sl-ring g3"></div>
          <div class="sl-ring g2"></div>
          <div class="sl-ring g1"></div>
        </div>
      </div>
    `,
};

class ConceptSlinky extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${slinkyStyles[version] || slinkyStyles.v2}</style>${slinkyMarkup[version] || slinkyMarkup.v2}`;
  }
}

if (!customElements.get('concept-slinky')) {
  customElements.define('concept-slinky', ConceptSlinky);
}
