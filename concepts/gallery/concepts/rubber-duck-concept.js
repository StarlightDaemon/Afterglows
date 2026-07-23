const rubberDuckStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A rubber duck bobbing in the bath: it rides a passing ripple,
     rocking and dipping, spreading rings out from its waterline while
     a couple of soap bubbles drift up and pop. */
  .rd {
    width: 108px;
    height: 92px;
    position: relative;
    overflow: hidden;
  }

  /* Water. */
  .rd-water {
    position: absolute;
    left: 0;
    right: 0;
    top: 52px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 110, 22, 0.35), rgba(0, 55, 11, 0.55));
    border-top: 1px solid rgba(140, 255, 170, 0.5);
  }

  /* Waterline shimmer. */
  .rd-shimmer {
    position: absolute;
    left: 0;
    right: 0;
    top: 54px;
    height: 30px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.14) 0 1px,
      transparent 1px 7px);
    animation: rd-shimmer 3s ease-in-out infinite;
  }

  @keyframes rd-shimmer {
    0%, 100% { transform: translateX(0); opacity: 0.6; }
    50% { transform: translateX(4px); opacity: 1; }
  }

  /* Expanding rings at the duck's waterline. */
  .rd-ring {
    position: absolute;
    left: 50%;
    top: 52px;
    width: 30px;
    height: 8px;
    margin-left: -15px;
    border: 1px solid rgba(140, 255, 170, 0.6);
    border-radius: 50%;
    opacity: 0;
    animation: rd-ring 3s ease-out infinite;
  }

  .rd-ring.r2 { animation-delay: 1.5s; }

  @keyframes rd-ring {
    0% { transform: scale(0.6); opacity: 0.8; }
    100% { transform: scale(2.4); opacity: 0; }
  }

  /* The duck: bobs up-down and rocks on the ripple. */
  .rd-duck {
    position: absolute;
    left: 50%;
    top: 20px;
    width: 48px;
    height: 40px;
    margin-left: -24px;
    animation: rd-bob 3s ease-in-out infinite;
  }

  @keyframes rd-bob {
    0%, 100% { transform: translateY(0) rotate(-4deg); }
    30% { transform: translateY(3px) rotate(3deg); }
    60% { transform: translateY(-2px) rotate(-2deg); }
  }

  /* Body. */
  .rd-body {
    position: absolute;
    left: 4px;
    top: 16px;
    width: 40px;
    height: 22px;
    border-radius: 60% 50% 50% 60% / 70% 60% 60% 80%;
    background: radial-gradient(ellipse at 35% 30%,
      rgba(242, 255, 221, 0.9),
      rgba(154, 222, 90, 0.85) 55%,
      rgba(0, 150, 30, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  /* Tail flip. */
  .rd-body::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 2px;
    width: 10px;
    height: 8px;
    clip-path: polygon(100% 50%, 0 0, 0 100%);
    background: rgba(154, 222, 90, 0.85);
  }

  /* Head. */
  .rd-head {
    position: absolute;
    left: 26px;
    top: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #9ade5a 65%);
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  /* Eye. */
  .rd-head::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 5px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #041a0a;
  }

  /* Bill. */
  .rd-bill {
    position: absolute;
    left: 40px;
    top: 8px;
    width: 12px;
    height: 6px;
    border-radius: 40% 60% 60% 40%;
    background: rgba(0, 200, 40, 0.9);
  }

  /* Soap bubbles drifting up. */
  .rd-bubble {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(190, 255, 205, 0.75);
    background: radial-gradient(circle at 35% 30%, rgba(190, 255, 205, 0.3), transparent 60%);
    animation: rd-bubble ease-in infinite;
  }

  .rd-bubble.b1 { left: 20px; top: 64px; width: 6px; height: 6px; animation-duration: 3.4s; }
  .rd-bubble.b2 { left: 78px; top: 68px; width: 8px; height: 8px; animation-duration: 4.2s; animation-delay: -2s; }
  .rd-bubble.b3 { left: 64px; top: 72px; width: 4px; height: 4px; animation-duration: 3s; animation-delay: -1.2s; }

  @keyframes rd-bubble {
    0% { transform: translateY(0) scale(0.7); opacity: 0; }
    20% { opacity: 0.9; }
    85% { transform: translateY(-40px) scale(1.1); opacity: 0.6; }
    92% { transform: translateY(-44px) scale(1.3); opacity: 0; }
    100% { opacity: 0; }
  }
`;

class ConceptRubberDuck extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${rubberDuckStyles}</style>
      <div class="rd">
        <div class="rd-water"></div>
        <div class="rd-shimmer"></div>
        <div class="rd-ring"></div>
        <div class="rd-ring r2"></div>
        <div class="rd-bubble b1"></div>
        <div class="rd-bubble b2"></div>
        <div class="rd-bubble b3"></div>
        <div class="rd-duck">
          <div class="rd-body"></div>
          <div class="rd-head"></div>
          <div class="rd-bill"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-rubber-duck')) {
  customElements.define('concept-rubber-duck', ConceptRubberDuck);
}
