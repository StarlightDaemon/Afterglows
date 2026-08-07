const marimbaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A concert marimba in melodic cascade: two mallets strike a graduated bank
     of tone bars from low to high, depressing each bar and exciting concentric
     resonance glows inside the tuned resonator tubes beneath. */
  .mar {
    width: 118px;
    height: 96px;
    position: relative;
  }

  /* Support frame stand */
  .mar-frame {
    position: absolute;
    left: 10px;
    bottom: 6px;
    width: 98px;
    height: 24px;
    border-bottom: 2px solid var(--accent, #00cc00);
    border-left: 2px solid var(--accent, #00cc00);
    border-right: 2px solid var(--accent, #00cc00);
  }

  /* Graduated resonator tubes hung underneath bars */
  .mar-tubes {
    position: absolute;
    left: 14px;
    top: 40px;
    width: 90px;
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .mar-tube {
    width: 10px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.7), rgba(0, 40, 8, 0.95));
    border: 1px solid var(--accent, #00cc00);
    animation: mar-res-glow 2.8s ease-out infinite;
  }

  .mar-tube.t1 { height: 38px; animation-delay: 0s; }
  .mar-tube.t2 { height: 32px; animation-delay: 0.7s; }
  .mar-tube.t3 { height: 26px; animation-delay: 1.4s; }
  .mar-tube.t4 { height: 20px; animation-delay: 2.1s; }

  @keyframes mar-res-glow {
    0%, 15% { box-shadow: inset 0 0 8px rgba(140, 255, 170, 0.9), 0 0 6px rgba(0, 204, 0, 0.8); }
    30%, 100% { box-shadow: inset 0 0 2px rgba(0, 50, 10, 0.4), 0 0 0 transparent; }
  }

  /* Tone bars graduated from long (left/low) to short (right/high) */
  .mar-bars {
    position: absolute;
    left: 10px;
    top: 30px;
    width: 98px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }

  .mar-bar {
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.85), rgba(0, 100, 20, 0.9));
    border: 1px solid var(--accent, #00cc00);
    animation: mar-bar-hit 2.8s ease-in-out infinite;
  }

  .mar-bar.b1 { width: 18px; height: 14px; animation-delay: 0s; }
  .mar-bar.b2 { width: 18px; height: 12px; animation-delay: 0.7s; }
  .mar-bar.b3 { width: 18px; height: 10px; animation-delay: 1.4s; }
  .mar-bar.b4 { width: 18px; height: 8px; animation-delay: 2.1s; }

  @keyframes mar-bar-hit {
    0% { transform: translateY(0); filter: brightness(1); }
    8% { transform: translateY(3px); filter: brightness(1.4); }
    18% { transform: translateY(-1px); }
    28% { transform: translateY(0); filter: brightness(1); }
    100% { transform: translateY(0); }
  }

  /* Mallets bouncing across the bar bank in a run */
  .mar-mallet {
    position: absolute;
    width: 20px;
    height: 28px;
    z-index: 5;
    pointer-events: none;
  }

  .mar-mallet-shaft {
    position: absolute;
    right: 2px;
    top: 0;
    width: 2px;
    height: 22px;
    background: rgba(140, 255, 170, 0.9);
  }

  .mar-mallet-head {
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(190, 255, 205, 1), rgba(0, 180, 40, 0.9));
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.9);
  }

  /* Left mallet: hits bar 1 (0s) and bar 3 (1.4s) */
  .mar-mallet.m-left {
    animation: mar-run-left 2.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes mar-run-left {
    0% { left: 16px; top: 22px; transform: rotate(10deg); }
    8% { left: 16px; top: 12px; transform: rotate(-5deg); }
    40% { left: 62px; top: 10px; transform: rotate(15deg); }
    50% { left: 62px; top: 22px; transform: rotate(10deg); }
    58% { left: 62px; top: 12px; transform: rotate(-5deg); }
    90% { left: 16px; top: 10px; transform: rotate(15deg); }
    100% { left: 16px; top: 22px; transform: rotate(10deg); }
  }

  /* Right mallet: hits bar 2 (0.7s) and bar 4 (2.1s) */
  .mar-mallet.m-right {
    animation: mar-run-right 2.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes mar-run-right {
    0% { left: 38px; top: 10px; transform: rotate(15deg); }
    25% { left: 38px; top: 22px; transform: rotate(10deg); }
    33% { left: 38px; top: 12px; transform: rotate(-5deg); }
    65% { left: 86px; top: 10px; transform: rotate(15deg); }
    75% { left: 86px; top: 22px; transform: rotate(10deg); }
    83% { left: 86px; top: 12px; transform: rotate(-5deg); }
    100% { left: 38px; top: 10px; transform: rotate(15deg); }
  }
`;

class ConceptMarimba extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${marimbaStyles}</style>
      <div class="mar">
        <div class="mar-frame"></div>
        <div class="mar-tubes">
          <div class="mar-tube t1"></div>
          <div class="mar-tube t2"></div>
          <div class="mar-tube t3"></div>
          <div class="mar-tube t4"></div>
        </div>
        <div class="mar-bars">
          <div class="mar-bar b1"></div>
          <div class="mar-bar b2"></div>
          <div class="mar-bar b3"></div>
          <div class="mar-bar b4"></div>
        </div>
        <div class="mar-mallet m-left">
          <div class="mar-mallet-shaft"></div>
          <div class="mar-mallet-head"></div>
        </div>
        <div class="mar-mallet m-right">
          <div class="mar-mallet-shaft"></div>
          <div class="mar-mallet-head"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-marimba')) {
  customElements.define('concept-marimba', ConceptMarimba);
}
