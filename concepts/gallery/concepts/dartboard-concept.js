const dartboardStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Three darts thrown at the board: each flies in from the right,
     thuds into a ring (a hit ripple flaring), and the last lands the
     bullseye - BULLSEYE flashes and the score climbs. */
  .db {
    width: 104px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Board: concentric scoring rings. */
  .db-board {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background:
      radial-gradient(circle,
        rgba(190, 255, 205, 0.85) 0 8%,
        rgba(0, 130, 26, 0.7) 8% 14%,
        rgba(0, 40, 8, 0.7) 14% 38%,
        rgba(0, 150, 30, 0.5) 38% 44%,
        rgba(0, 40, 8, 0.7) 44% 70%,
        rgba(0, 150, 30, 0.5) 70% 78%,
        rgba(0, 40, 8, 0.7) 78% 100%);
  }

  /* Wedge spokes. */
  .db-board::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: repeating-conic-gradient(rgba(0, 204, 0, 0.35) 0 0.6deg, transparent 0.6deg 18deg);
    -webkit-mask-image: radial-gradient(circle, transparent 0 14%, black 15% 100%);
    mask-image: radial-gradient(circle, transparent 0 14%, black 15% 100%);
  }

  /* Darts: fly in from the right and stick. */
  .db-dart {
    position: absolute;
    width: 26px;
    height: 4px;
    animation: db-throw 6s infinite;
  }

  .db-dart.d1 { left: 40px; top: 30px; animation-delay: 0s; }
  .db-dart.d2 { left: 54px; top: 50px; animation-delay: 2s; }
  .db-dart.d3 { left: 46px; top: 46px; animation-delay: 4s; }

  .db-dart-shaft {
    position: absolute;
    left: 6px;
    top: 1px;
    width: 16px;
    height: 2px;
    background: rgba(140, 255, 170, 0.9);
  }

  .db-dart-tip {
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 4px;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    background: #d6ffe0;
  }

  .db-dart-flight {
    position: absolute;
    right: 0;
    top: -3px;
    width: 6px;
    height: 10px;
    clip-path: polygon(0 50%, 100% 0, 70% 50%, 100% 100%);
    background: rgba(190, 255, 205, 0.8);
  }

  /* Each dart flies in over its ~0.5s slot (of the 6s cycle) then
     holds stuck for the rest. */
  @keyframes db-throw {
    0% { transform: translateX(90px) scale(1.2); opacity: 0; }
    3% { opacity: 1; }
    8% { transform: translateX(0) scale(1); opacity: 1; }
    10% { transform: translateX(-2px) scale(1); }
    12% { transform: translateX(0) scale(1); }
    100% { transform: translateX(0) scale(1); opacity: 1; }
  }

  /* Hit ripples at each impact. */
  .db-ripple {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1px solid rgba(214, 255, 224, 0.9);
    border-radius: 50%;
    opacity: 0;
    animation: db-ripple 6s infinite;
  }

  .db-ripple.r1 { left: 42px; top: 30px; animation-delay: 0s; }
  .db-ripple.r2 { left: 56px; top: 50px; animation-delay: 2s; }
  .db-ripple.r3 { left: 44px; top: 44px; animation-delay: 4s; }

  @keyframes db-ripple {
    0%, 7% { transform: scale(0.4); opacity: 0; }
    9% { opacity: 0.95; }
    16% { transform: scale(2.4); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Bullseye flash on the third dart. */
  .db-bull {
    position: absolute;
    left: 44px;
    top: 44px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    opacity: 0;
    animation: db-bull 6s infinite;
  }

  @keyframes db-bull {
    0%, 67% { opacity: 0; transform: scale(0.5); }
    70% { opacity: 1; transform: scale(1.6); }
    78% { opacity: 0.6; }
    84%, 100% { opacity: 0; }
  }

  /* Score. */
  .db-score {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    text-align: center;
    font-size: 9px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
  }

  .db-score::before {
    content: '0';
    animation: db-score 6s steps(1) infinite;
  }

  @keyframes db-score {
    0% { content: '0'; }
    9% { content: '20'; }
    42% { content: '45'; }
    70% { content: 'BULL 95'; }
    96% { content: '0'; }
  }
`;

class ConceptDartboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dartboardStyles}</style>
      <div class="db">
        <div class="db-board"></div>
        <div class="db-ripple r1"></div>
        <div class="db-ripple r2"></div>
        <div class="db-ripple r3"></div>
        <div class="db-bull"></div>
        <div class="db-dart d1"><div class="db-dart-tip"></div><div class="db-dart-shaft"></div><div class="db-dart-flight"></div></div>
        <div class="db-dart d2"><div class="db-dart-tip"></div><div class="db-dart-shaft"></div><div class="db-dart-flight"></div></div>
        <div class="db-dart d3"><div class="db-dart-tip"></div><div class="db-dart-shaft"></div><div class="db-dart-flight"></div></div>
        <div class="db-score"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-dartboard')) {
  customElements.define('concept-dartboard', ConceptDartboard);
}
