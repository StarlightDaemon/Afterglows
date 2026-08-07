const macrameStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A bohemian macramé wall hanging suspended from a wooden dowel: four cord
     strands interlace through sequential square knots and half-hitch sinuous
     lattice braids, culminating in a fringed tassel hem swaying gently below. */
  .mac {
    width: 114px;
    height: 100px;
    position: relative;
  }

  /* Suspension wooden dowel */
  .mac-dowel {
    position: absolute;
    left: 8px;
    top: 10px;
    width: 98px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.9), rgba(0, 100, 20, 0.9));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  /* Hanging cord mounting loops on dowel */
  .mac-loop {
    position: absolute;
    top: 14px;
    width: 10px;
    height: 8px;
    border-radius: 0 0 5px 5px;
    border: 2px solid rgba(140, 255, 170, 0.9);
    border-top: none;
  }

  .mac-loop.l1 { left: 24px; }
  .mac-loop.l2 { left: 42px; }
  .mac-loop.l3 { left: 60px; }
  .mac-loop.l4 { left: 78px; }

  /* Square-knot lattice diamond pattern */
  .mac-lattice {
    position: absolute;
    left: 20px;
    top: 22px;
    width: 74px;
    height: 48px;
  }

  /* Interlocking braided cord strands running cinch wave */
  .mac-knot {
    position: absolute;
    width: 18px;
    height: 12px;
    border-radius: 4px;
    background: linear-gradient(135deg, rgba(190, 255, 205, 0.95), rgba(0, 120, 24, 0.9));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.6);
    animation: mac-knot-cinch 3.6s ease-in-out infinite;
  }

  .mac-knot.k1 { left: 8px; top: 0; animation-delay: 0s; }
  .mac-knot.k2 { left: 44px; top: 0; animation-delay: -0.4s; }
  .mac-knot.k3 { left: 26px; top: 16px; animation-delay: -0.8s; }
  .mac-knot.k4 { left: 8px; top: 32px; animation-delay: -1.2s; }
  .mac-knot.k5 { left: 44px; top: 32px; animation-delay: -1.6s; }

  @keyframes mac-knot-cinch {
    0%, 100% { transform: scale(1); filter: brightness(1); }
    50% { transform: scale(1.1) rotate(4deg); filter: brightness(1.3); }
  }

  /* Diagonal filler cords: each arcs from its resting diagonal toward a
     shallower crossing angle in sync with its nearest knot's cinch, then
     springs back — the actual "cords cross over and cinch" motion, not a
     static lattice with only the knot blobs pulsing. */
  .mac-strand {
    position: absolute;
    width: 2px;
    background: rgba(140, 255, 170, 0.8);
    transform-origin: top center;
    animation: mac-strand-cross 3.6s ease-in-out infinite;
  }

  .mac-strand.s1 { left: 18px; top: 8px; height: 18px; --base-rot: 40deg; animation-delay: 0s; }
  .mac-strand.s2 { left: 52px; top: 8px; height: 18px; --base-rot: -40deg; animation-delay: -0.4s; }
  .mac-strand.s3 { left: 34px; top: 24px; height: 18px; --base-rot: -40deg; animation-delay: -0.8s; }
  .mac-strand.s4 { left: 38px; top: 24px; height: 18px; --base-rot: 40deg; animation-delay: -1.2s; }

  @keyframes mac-strand-cross {
    0%, 100% { transform: rotate(var(--base-rot)); }
    50% { transform: rotate(calc(var(--base-rot) * 0.3)); }
  }

  /* Fringed tassel bottom hem with gentle pendulum sway */
  .mac-fringe-rig {
    position: absolute;
    left: 20px;
    top: 66px;
    width: 74px;
    height: 28px;
    transform-origin: top center;
    animation: mac-fringe-sway 4s ease-in-out infinite;
  }

  @keyframes mac-fringe-sway {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  .mac-fringe {
    position: absolute;
    top: 0;
    width: 2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.9), transparent);
    border-radius: 1px;
  }

  .mac-fringe.f1 { left: 10px; height: 26px; }
  .mac-fringe.f2 { left: 22px; height: 22px; }
  .mac-fringe.f3 { left: 34px; height: 28px; }
  .mac-fringe.f4 { left: 46px; height: 24px; }
  .mac-fringe.f5 { left: 58px; height: 20px; }
`;

class ConceptMacrame extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${macrameStyles}</style>
      <div class="mac">
        <div class="mac-dowel"></div>
        <div class="mac-loop l1"></div>
        <div class="mac-loop l2"></div>
        <div class="mac-loop l3"></div>
        <div class="mac-loop l4"></div>
        <div class="mac-lattice">
          <div class="mac-strand s1"></div>
          <div class="mac-strand s2"></div>
          <div class="mac-strand s3"></div>
          <div class="mac-strand s4"></div>
          <div class="mac-knot k1"></div>
          <div class="mac-knot k2"></div>
          <div class="mac-knot k3"></div>
          <div class="mac-knot k4"></div>
          <div class="mac-knot k5"></div>
        </div>
        <div class="mac-fringe-rig">
          <div class="mac-fringe f1"></div>
          <div class="mac-fringe f2"></div>
          <div class="mac-fringe f3"></div>
          <div class="mac-fringe f4"></div>
          <div class="mac-fringe f5"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-macrame')) {
  customElements.define('concept-macrame', ConceptMacrame);
}
