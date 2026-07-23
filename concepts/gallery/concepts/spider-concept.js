const spiderStyles = `
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
`;

class ConceptSpider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${spiderStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-spider')) {
  customElements.define('concept-spider', ConceptSpider);
}
