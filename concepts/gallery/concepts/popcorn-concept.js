const popcornStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Kernels leave the pot on real arcs (rise, hang, fall) while the
     lid jumps and the burner shimmers. Every kernel has its own
     trajectory and timing, so the pot feels genuinely at full pop. */
  .popcorn {
    width: 108px;
    height: 96px;
    position: relative;
  }

  .popcorn-pot {
    position: absolute;
    left: 26px;
    bottom: 10px;
    width: 56px;
    height: 34px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px 4px 14px 14px;
    background: linear-gradient(180deg, rgba(0, 60, 12, 0.5), rgba(0, 25, 5, 0.75));
  }

  /* Pot handles. */
  .popcorn-pot::before,
  .popcorn-pot::after {
    content: '';
    position: absolute;
    top: 6px;
    width: 8px;
    height: 4px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.8);
  }

  .popcorn-pot::before { left: -10px; }
  .popcorn-pot::after { right: -10px; }

  .popcorn-lid {
    position: absolute;
    left: 22px;
    bottom: 44px;
    width: 64px;
    height: 6px;
    border-radius: 3px;
    background: rgba(140, 255, 170, 0.9);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.5);
    animation: popcorn-lid 1.1s infinite;
  }

  /* Knob. */
  .popcorn-lid::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    width: 8px;
    height: 4px;
    margin-left: -4px;
    border-radius: 2px 2px 0 0;
    background: rgba(140, 255, 170, 0.9);
  }

  @keyframes popcorn-lid {
    0%, 34%, 100% { transform: translateY(0) rotate(0deg); }
    12% { transform: translateY(-4px) rotate(-2.5deg); }
    20% { transform: translateY(-1px) rotate(1deg); }
    58% { transform: translateY(-3px) rotate(2deg); }
    70% { transform: translateY(0) rotate(0deg); }
  }

  /* Kernels: pop out through the lid gap on staggered parabolas.
     Two-part trick: the carrier translates X linearly while the
     kernel inside translates Y with ease-out up / ease-in down. */
  .popcorn-arc {
    position: absolute;
    left: 50%;
    bottom: 46px;
    animation: popcorn-x linear infinite;
  }

  .popcorn-kernel {
    width: 6px;
    height: 6px;
    border-radius: 50% 40% 55% 45%;
    background: radial-gradient(circle at 35% 30%, #f2ffdd, #7bd88f 75%);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
    animation: popcorn-y infinite;
  }

  .popcorn-arc.k1 { --dx: -34px; animation-duration: 2.2s; }
  .popcorn-arc.k1 .popcorn-kernel { --peak: -34px; animation-duration: 2.2s; }
  .popcorn-arc.k2 { --dx: 28px; animation-duration: 1.9s; animation-delay: -0.7s; }
  .popcorn-arc.k2 .popcorn-kernel { --peak: -42px; animation-duration: 1.9s; animation-delay: -0.7s; }
  .popcorn-arc.k3 { --dx: -14px; animation-duration: 2.5s; animation-delay: -1.4s; }
  .popcorn-arc.k3 .popcorn-kernel { --peak: -28px; animation-duration: 2.5s; animation-delay: -1.4s; }
  .popcorn-arc.k4 { --dx: 40px; animation-duration: 2.1s; animation-delay: -1.0s; }
  .popcorn-arc.k4 .popcorn-kernel { --peak: -36px; animation-duration: 2.1s; animation-delay: -1.0s; }
  .popcorn-arc.k5 { --dx: 8px; animation-duration: 1.7s; animation-delay: -0.3s; }
  .popcorn-arc.k5 .popcorn-kernel { --peak: -46px; animation-duration: 1.7s; animation-delay: -0.3s; }

  @keyframes popcorn-x {
    0% { transform: translateX(0); opacity: 1; }
    55% { opacity: 1; }
    64% { transform: translateX(var(--dx)); opacity: 0; }
    100% { transform: translateX(var(--dx)); opacity: 0; }
  }

  /* Up fast, hang, then accelerate down past the rim. */
  @keyframes popcorn-y {
    0% { transform: translateY(0) rotate(0deg); }
    26% { transform: translateY(var(--peak)) rotate(140deg); animation-timing-function: ease-in; }
    30% { transform: translateY(var(--peak)) rotate(160deg); }
    60% { transform: translateY(6px) rotate(320deg); }
    100% { transform: translateY(6px) rotate(320deg); }
  }

  .popcorn-burner {
    position: absolute;
    left: 30px;
    right: 30px;
    bottom: 3px;
    height: 3px;
    border-radius: 2px;
    background: repeating-linear-gradient(90deg,
      var(--accent, #00cc00) 0 4px,
      transparent 4px 8px);
    animation: popcorn-burner 0.7s ease-in-out infinite;
  }

  @keyframes popcorn-burner {
    0%, 100% { opacity: 0.45; }
    50% { opacity: 1; box-shadow: 0 0 7px rgba(0, 204, 0, 0.7); }
  }
`;

class ConceptPopcorn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${popcornStyles}</style>
      <div class="popcorn">
        <div class="popcorn-arc k1"><div class="popcorn-kernel"></div></div>
        <div class="popcorn-arc k2"><div class="popcorn-kernel"></div></div>
        <div class="popcorn-arc k3"><div class="popcorn-kernel"></div></div>
        <div class="popcorn-arc k4"><div class="popcorn-kernel"></div></div>
        <div class="popcorn-arc k5"><div class="popcorn-kernel"></div></div>
        <div class="popcorn-pot"></div>
        <div class="popcorn-lid"></div>
        <div class="popcorn-burner"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-popcorn')) {
  customElements.define('concept-popcorn', ConceptPopcorn);
}
