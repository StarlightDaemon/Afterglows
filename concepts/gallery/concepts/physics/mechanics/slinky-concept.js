// Slinky walking down an endless staircase flipping end over end.
// v1 and v2 are preserved.
// v3 adds full color: polished mahogany wood stairs with brass edge trim,
// rainbow spectrum spring coils (ruby, amber, yellow, emerald, cyan, blue, violet),
// and dynamic contact shadow.
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
    clip-path: polygon(
      0 28%, 19% 28%, 19% 47%, 38% 47%, 38% 66%, 57% 66%,
      57% 85%, 76% 85%, 76% 104%, 100% 104%, 100% 200%, 0 200%);
    animation: sl-convey 2.6s linear infinite;
  }

  @keyframes sl-convey {
    0% { transform: translate(0, 0); }
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

  /* The slinky: seven rings sharing one flip cycle at staggered phases. */
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

  .sl-ring.g1 { animation-delay: 0s; }
  .sl-ring.g2 { animation-delay: -0.13s; opacity: 0.95; }
  .sl-ring.g3 { animation-delay: -0.26s; opacity: 0.9; }
  .sl-ring.g4 { animation-delay: -0.39s; opacity: 0.85; }
  .sl-ring.g5 { animation-delay: -0.52s; opacity: 0.8; }
  .sl-ring.g6 { animation-delay: -0.65s; opacity: 0.75; }
  .sl-ring.g7 { animation-delay: -0.78s; opacity: 0.7; }

  @keyframes sl-flip {
    0%, 8% { transform: translate(0, 0) rotate(-12deg); }
    30% { transform: translate(10px, -14px) rotate(30deg); }
    50% { transform: translate(20px, -8px) rotate(78deg); }
    68% { transform: translate(28px, 8px) rotate(96deg); }
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
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Rainbow spectrum spring coil walking down mahogany stairs
     with brass nosing trim and contact shadows */
  .slc {
    width: 112px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Mahogany Hardwood Stairs Conveyor */
  .slc-stairs {
    position: absolute;
    left: -56px;
    right: -56px;
    top: 18px;
    bottom: -28px;
    background:
      repeating-linear-gradient(90deg,
        transparent 0 26px,
        #78350f 26px 27px,
        transparent 27px 28px),
      repeating-linear-gradient(180deg,
        #451a03 0 17px,
        #78350f 17px 18px,
        #291002 18px 28px);
    clip-path: polygon(
      0 28%, 19% 28%, 19% 47%, 38% 47%, 38% 66%, 57% 66%,
      57% 85%, 76% 85%, 76% 104%, 100% 104%, 100% 200%, 0 200%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    animation: slc-convey 2.6s linear infinite;
  }

  @keyframes slc-convey {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-28px, -18px); }
  }

  /* Golden Brass Stair Nosing Trim */
  .slc-edge {
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
    background: #facc15;
    box-shadow: 0 0 4px #ca8a04;
    animation: slc-convey 2.6s linear infinite;
  }

  /* Rainbow Spectrum Slinky Rig */
  .slc-coil {
    position: absolute;
    left: 30px;
    top: 20px;
    width: 0;
    height: 0;
  }

  .slc-ring {
    position: absolute;
    left: -13px;
    top: -8px;
    width: 26px;
    height: 18px;
    border-radius: 50%;
    animation: slc-flip 2.6s ease-in-out infinite;
  }

  /* 7 Chromatic Rainbow Rings */
  .slc-ring.g1 { border: 2.5px solid #ef4444; box-shadow: 0 0 6px rgba(239, 68, 68, 0.6); animation-delay: 0s; }
  .slc-ring.g2 { border: 2.5px solid #f59e0b; box-shadow: 0 0 6px rgba(245, 158, 11, 0.6); animation-delay: -0.13s; }
  .slc-ring.g3 { border: 2.5px solid #facc15; box-shadow: 0 0 6px rgba(250, 204, 21, 0.6); animation-delay: -0.26s; }
  .slc-ring.g4 { border: 2.5px solid #22c55e; box-shadow: 0 0 6px rgba(34, 197, 94, 0.6); animation-delay: -0.39s; }
  .slc-ring.g5 { border: 2.5px solid #06b6d4; box-shadow: 0 0 6px rgba(6, 182, 212, 0.6); animation-delay: -0.52s; }
  .slc-ring.g6 { border: 2.5px solid #3b82f6; box-shadow: 0 0 6px rgba(59, 130, 246, 0.6); animation-delay: -0.65s; }
  .slc-ring.g7 { border: 2.5px solid #d946ef; box-shadow: 0 0 6px rgba(217, 70, 239, 0.6); animation-delay: -0.78s; }

  @keyframes slc-flip {
    0%, 8% { transform: translate(0, 0) rotate(-12deg); }
    30% { transform: translate(10px, -14px) rotate(30deg); }
    50% { transform: translate(20px, -8px) rotate(78deg); }
    68% { transform: translate(28px, 8px) rotate(96deg); }
    80%, 100% { transform: translate(28px, 18px) rotate(90deg); }
  }

  /* Contact Step Shadow */
  .slc-shadow {
    position: absolute;
    left: 24px;
    top: 52px;
    width: 44px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.7), transparent 70%);
    animation: slc-shadow 2.6s ease-in-out infinite;
  }

  @keyframes slc-shadow {
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
  v3: `
      <div class="slc">
        <div class="slc-stairs"></div>
        <div class="slc-edge"></div>
        <div class="slc-shadow"></div>
        <div class="slc-coil">
          <div class="slc-ring g7"></div>
          <div class="slc-ring g6"></div>
          <div class="slc-ring g5"></div>
          <div class="slc-ring g4"></div>
          <div class="slc-ring g3"></div>
          <div class="slc-ring g2"></div>
          <div class="slc-ring g1"></div>
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${slinkyStyles[version] || slinkyStyles.v3}</style>${slinkyMarkup[version] || slinkyMarkup.v3}`;
  }
}

if (!customElements.get('concept-slinky')) {
  customElements.define('concept-slinky', ConceptSlinky);
}
