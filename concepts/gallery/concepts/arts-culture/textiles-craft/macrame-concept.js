const macrameStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mac {
    width: 114px;
    height: 100px;
    position: relative;
    transform-origin: 50% 10px;
    animation: mac-hanging-sway 1.8s ease-in-out infinite alternate;
  }

  @keyframes mac-hanging-sway {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
  }

  .mac-dowel {
    position: absolute;
    left: 8px;
    top: 10px;
    width: 98px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.95), rgba(0, 100, 20, 0.95));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.4);
  }

  .mac-loop {
    position: absolute;
    top: 14px;
    width: 10px;
    height: 8px;
    border-radius: 0 0 5px 5px;
    border: 2px solid rgba(140, 255, 170, 0.95);
    border-top: none;
  }

  .mac-loop.l1 { left: 24px; }
  .mac-loop.l2 { left: 42px; }
  .mac-loop.l3 { left: 60px; }
  .mac-loop.l4 { left: 78px; }

  .mac-lattice {
    position: absolute;
    left: 20px;
    top: 22px;
    width: 74px;
    height: 48px;
  }

  .mac-knot {
    position: absolute;
    width: 18px;
    height: 12px;
    border-radius: 4px;
    background: linear-gradient(135deg, rgba(190, 255, 205, 1), rgba(0, 150, 30, 0.95));
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.7);
    animation: mac-knot-cinch 1.2s ease-in-out infinite alternate;
  }

  .mac-knot.k1 { left: 8px; top: 0; animation-delay: 0s; }
  .mac-knot.k2 { left: 44px; top: 0; animation-delay: -0.2s; }
  .mac-knot.k3 { left: 26px; top: 16px; animation-delay: -0.4s; }
  .mac-knot.k4 { left: 8px; top: 32px; animation-delay: -0.6s; }
  .mac-knot.k5 { left: 44px; top: 32px; animation-delay: -0.8s; }

  @keyframes mac-knot-cinch {
    0% { transform: scale(0.85) rotate(-8deg); }
    100% { transform: scale(1.3) rotate(8deg); }
  }

  .mac-strand {
    position: absolute;
    width: 2.5px;
    background: rgba(140, 255, 170, 0.9);
    box-shadow: 0 0 4px #00ff66;
    transform-origin: top center;
    animation: mac-strand-cross 1.2s ease-in-out infinite alternate;
  }

  .mac-strand.s1 { left: 18px; top: 8px; height: 18px; --base-rot: 40deg; animation-delay: 0s; }
  .mac-strand.s2 { left: 52px; top: 8px; height: 18px; --base-rot: -40deg; animation-delay: -0.3s; }
  .mac-strand.s3 { left: 34px; top: 24px; height: 18px; --base-rot: -40deg; animation-delay: -0.6s; }
  .mac-strand.s4 { left: 38px; top: 24px; height: 18px; --base-rot: 40deg; animation-delay: -0.9s; }

  @keyframes mac-strand-cross {
    0% { transform: rotate(calc(var(--base-rot) * 1.3)); }
    100% { transform: rotate(calc(var(--base-rot) * 0.2)); }
  }

  .mac-fringe-rig {
    position: absolute;
    left: 20px;
    top: 66px;
    width: 74px;
    height: 28px;
    transform-origin: top center;
    animation: mac-fringe-sway 1.2s ease-in-out infinite alternate;
  }

  @keyframes mac-fringe-sway {
    0% { transform: rotate(-16deg) skewX(-14deg); }
    100% { transform: rotate(16deg) skewX(14deg); }
  }

  .mac-fringe {
    position: absolute;
    top: 0;
    width: 2.5px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 1), transparent);
    border-radius: 1px;
    box-shadow: 0 0 4px rgba(0, 255, 100, 0.6);
  }

  .mac-fringe.f1 { left: 10px; height: 26px; }
  .mac-fringe.f2 { left: 22px; height: 22px; }
  .mac-fringe.f3 { left: 34px; height: 28px; }
  .mac-fringe.f4 { left: 46px; height: 24px; }
  .mac-fringe.f5 { left: 58px; height: 20px; }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Ecru cotton macramé hanging from driftwood dowel with terracotta square knots
     and swaying fringed tassels */
  .macc {
    width: 114px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
    transform-origin: 50% 10px;
    animation: macc-hanging-sway 1.8s ease-in-out infinite alternate;
  }

  @keyframes macc-hanging-sway {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
  }

  /* Driftwood dowel */
  .macc-dowel {
    position: absolute;
    left: 8px;
    top: 10px;
    width: 98px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(180deg, #ca8a04 0%, #78350f 100%);
    border: 1px solid #d97706;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Hanging ecru cord loops */
  .macc-loop {
    position: absolute;
    top: 14px;
    width: 10px;
    height: 8px;
    border-radius: 0 0 5px 5px;
    border: 2px solid #fef3c7;
    box-shadow: 0 0 4px #fde047;
    border-top: none;
  }

  .macc-loop.l1 { left: 24px; }
  .macc-loop.l2 { left: 42px; }
  .macc-loop.l3 { left: 60px; }
  .macc-loop.l4 { left: 78px; }

  /* Lattice rig */
  .macc-lattice {
    position: absolute;
    left: 20px;
    top: 22px;
    width: 74px;
    height: 48px;
  }

  /* Interlocking braided knots with terracotta & ecru */
  .macc-knot {
    position: absolute;
    width: 18px;
    height: 12px;
    border-radius: 4px;
    background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 50%, #ea580c 100%);
    border: 1.5px solid #fde047;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8), 0 0 8px rgba(254, 240, 138, 0.8);
    animation: macc-knot-cinch 1.2s ease-in-out infinite alternate;
  }

  .macc-knot.k1 { left: 8px; top: 0; animation-delay: 0s; }
  .macc-knot.k2 { left: 44px; top: 0; animation-delay: -0.2s; }
  .macc-knot.k3 { left: 26px; top: 16px; animation-delay: -0.4s; }
  .macc-knot.k4 { left: 8px; top: 32px; animation-delay: -0.6s; }
  .macc-knot.k5 { left: 44px; top: 32px; animation-delay: -0.8s; }

  @keyframes macc-knot-cinch {
    0% { transform: scale(0.85) rotate(-8deg); }
    100% { transform: scale(1.3) rotate(8deg); }
  }

  /* Crossing ecru cord strands */
  .macc-strand {
    position: absolute;
    width: 2.5px;
    background: #fef3c7;
    box-shadow: 0 0 4px #fde68a;
    transform-origin: top center;
    animation: macc-strand-cross 1.2s ease-in-out infinite alternate;
  }

  .macc-strand.s1 { left: 18px; top: 8px; height: 18px; --base-rot: 40deg; animation-delay: 0s; }
  .macc-strand.s2 { left: 52px; top: 8px; height: 18px; --base-rot: -40deg; animation-delay: -0.3s; }
  .macc-strand.s3 { left: 34px; top: 24px; height: 18px; --base-rot: -40deg; animation-delay: -0.6s; }
  .macc-strand.s4 { left: 38px; top: 24px; height: 18px; --base-rot: 40deg; animation-delay: -0.9s; }

  @keyframes macc-strand-cross {
    0% { transform: rotate(calc(var(--base-rot) * 1.3)); }
    100% { transform: rotate(calc(var(--base-rot) * 0.2)); }
  }

  /* Tassel fringe bottom hem */
  .macc-fringe-rig {
    position: absolute;
    left: 20px;
    top: 66px;
    width: 74px;
    height: 28px;
    transform-origin: top center;
    animation: macc-fringe-sway 1.2s ease-in-out infinite alternate;
  }

  @keyframes macc-fringe-sway {
    0% { transform: rotate(-16deg) skewX(-14deg); }
    100% { transform: rotate(16deg) skewX(14deg); }
  }

  .macc-fringe {
    position: absolute;
    top: 0;
    width: 2.5px;
    background: linear-gradient(180deg, #fef3c7 0%, rgba(254, 243, 199, 0) 100%);
    border-radius: 1px;
    box-shadow: 0 0 4px #fef3c7;
  }

  .macc-fringe.f1 { left: 10px; height: 26px; }
  .macc-fringe.f2 { left: 22px; height: 22px; }
  .macc-fringe.f3 { left: 34px; height: 28px; }
  .macc-fringe.f4 { left: 46px; height: 24px; }
  .macc-fringe.f5 { left: 58px; height: 20px; }
  `,
};

const macrameMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="macc">
        <div class="macc-dowel"></div>
        <div class="macc-loop l1"></div>
        <div class="macc-loop l2"></div>
        <div class="macc-loop l3"></div>
        <div class="macc-loop l4"></div>
        <div class="macc-lattice">
          <div class="macc-strand s1"></div>
          <div class="macc-strand s2"></div>
          <div class="macc-strand s3"></div>
          <div class="macc-strand s4"></div>
          <div class="macc-knot k1"></div>
          <div class="macc-knot k2"></div>
          <div class="macc-knot k3"></div>
          <div class="macc-knot k4"></div>
          <div class="macc-knot k5"></div>
        </div>
        <div class="macc-fringe-rig">
          <div class="macc-fringe f1"></div>
          <div class="macc-fringe f2"></div>
          <div class="macc-fringe f3"></div>
          <div class="macc-fringe f4"></div>
          <div class="macc-fringe f5"></div>
        </div>
      </div>
    `,
};

class ConceptMacrame extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${macrameStyles[version] || macrameStyles.v2}</style>${macrameMarkup[version] || macrameMarkup.v2}`;
  }
}

if (!customElements.get('concept-macrame')) {
  customElements.define('concept-macrame', ConceptMacrame);
}
