const spinningTopStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A spinning top's whole life in 6s: it spins up tight and upright,
     holds a fast blur, then slows - precessing in a widening wobble -
     until it loses balance, topples, and rolls to a stop. */
  .tp {
    width: 100px;
    height: 96px;
    position: relative;
  }

  /* Floor + shadow that widens as the top wobbles. */
  .tp-floor {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 16px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.4), transparent);
  }

  .tp-shadow {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 30px;
    height: 6px;
    margin-left: -15px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(0, 204, 0, 0.35), transparent 70%);
    animation: tp-shadow 6s ease-in infinite;
  }

  @keyframes tp-shadow {
    0%, 40% { transform: scaleX(1); opacity: 0.5; }
    75% { transform: scaleX(1.4); opacity: 0.7; }
    90%, 100% { transform: scaleX(1.8); opacity: 0.3; }
  }

  /* Precession carrier: leans the top over more and more. */
  .tp-lean {
    position: absolute;
    left: 50%;
    bottom: 18px;
    width: 0;
    height: 0;
    transform-origin: 50% 100%;
    animation: tp-lean 6s ease-in infinite;
  }

  @keyframes tp-lean {
    0%, 40% { transform: rotate(0deg); }
    55% { transform: rotate(6deg); }
    68% { transform: rotate(-10deg); }
    78% { transform: rotate(14deg); }
    /* Topple. */
    88% { transform: rotate(58deg); }
    96%, 100% { transform: rotate(78deg); }
  }

  /* The top body: cone + stem, spinning (band scroll) with a blur. */
  .tp-body {
    position: absolute;
    left: -16px;
    bottom: 0;
    width: 32px;
    height: 32px;
    clip-path: polygon(50% 100%, 0 30%, 20% 20%, 80% 20%, 100% 30%);
    background:
      repeating-linear-gradient(90deg,
        rgba(214, 255, 224, 0.9) 0 4px,
        rgba(0, 130, 26, 0.85) 4px 8px);
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: tp-spin 0.3s linear infinite, tp-blur 6s ease-in infinite;
  }

  @keyframes tp-spin {
    to { background-position: -8px 0; }
  }

  /* Blur eases off as it slows. */
  @keyframes tp-blur {
    0%, 40% { filter: blur(1.4px); }
    70% { filter: blur(0.6px); }
    88%, 100% { filter: blur(0); }
  }

  /* Cap dome on top. */
  .tp-cap {
    position: absolute;
    left: -10px;
    bottom: 24px;
    width: 20px;
    height: 8px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.85), rgba(0, 150, 30, 0.7));
  }

  /* Stem knob. */
  .tp-stem {
    position: absolute;
    left: -2px;
    bottom: 30px;
    width: 4px;
    height: 8px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  /* Spin streaks around the fast phase. */
  .tp-streak {
    position: absolute;
    bottom: 24px;
    width: 14px;
    height: 2px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.5);
    opacity: 0;
    animation: tp-streak 6s ease-in infinite;
  }

  .tp-streak.s1 { left: 20px; }
  .tp-streak.s2 { right: 20px; animation-delay: 0.15s; }

  @keyframes tp-streak {
    0%, 8% { opacity: 0; }
    20%, 44% { opacity: 0.7; }
    60%, 100% { opacity: 0; }
  }
`;

class ConceptSpinningTop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${spinningTopStyles}</style>
      <div class="tp">
        <div class="tp-floor"></div>
        <div class="tp-shadow"></div>
        <div class="tp-streak s1"></div>
        <div class="tp-streak s2"></div>
        <div class="tp-lean">
          <div class="tp-body"></div>
          <div class="tp-cap"></div>
          <div class="tp-stem"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-spinning-top')) {
  customElements.define('concept-spinning-top', ConceptSpinningTop);
}
