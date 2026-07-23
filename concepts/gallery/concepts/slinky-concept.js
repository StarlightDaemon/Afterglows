const slinkyStyles = `
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
`;

class ConceptSlinky extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${slinkyStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-slinky')) {
  customElements.define('concept-slinky', ConceptSlinky);
}
