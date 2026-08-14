const dartboardStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .db {
    width: 104px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

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

  .db-board::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: repeating-conic-gradient(rgba(0, 204, 0, 0.35) 0 0.6deg, transparent 0.6deg 18deg);
    -webkit-mask-image: radial-gradient(circle, transparent 0 14%, black 15% 100%);
    mask-image: radial-gradient(circle, transparent 0 14%, black 15% 100%);
  }

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

  @keyframes db-throw {
    0% { transform: translateX(90px) scale(1.2); opacity: 0; }
    3% { opacity: 1; }
    8% { transform: translateX(0) scale(1); opacity: 1; }
    10% { transform: translateX(-2px) scale(1); }
    12% { transform: translateX(0) scale(1); }
    100% { transform: translateX(0) scale(1); opacity: 1; }
  }

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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Professional tournament sisal dartboard with red & green rings,
     cream/black segments, brass darts, bullseye flash, and score ticker */
  .dbc {
    width: 104px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    font-family: 'Courier New', monospace;
    overflow: hidden;
  }

  /* Sisal tournament board with red & green scoring rings */
  .dbc-board {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    border: 2px solid #cbd5e1;
    background:
      radial-gradient(circle,
        #dc2626 0 7%,
        #15803d 7% 14%,
        #18181b 14% 38%,
        #dc2626 38% 44%,
        #18181b 44% 70%,
        #15803d 70% 78%,
        #18181b 78% 100%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
  }

  /* Radial wire spider segments */
  .dbc-board::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: repeating-conic-gradient(#cbd5e1 0 0.6deg, transparent 0.6deg 18deg);
    -webkit-mask-image: radial-gradient(circle, transparent 0 14%, black 15% 100%);
    mask-image: radial-gradient(circle, transparent 0 14%, black 15% 100%);
  }

  /* Brass darts */
  .dbc-dart {
    position: absolute;
    width: 26px;
    height: 4px;
    animation: dbc-throw 6s infinite;
  }

  .dbc-dart.d1 { left: 40px; top: 30px; animation-delay: 0s; }
  .dbc-dart.d2 { left: 54px; top: 50px; animation-delay: 2s; }
  .dbc-dart.d3 { left: 46px; top: 46px; animation-delay: 4s; }

  .dbc-dart-shaft {
    position: absolute;
    left: 6px;
    top: 1px;
    width: 16px;
    height: 2px;
    background: linear-gradient(90deg, #ca8a04, #facc15);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }

  .dbc-dart-tip {
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 4px;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    background: #cbd5e1;
  }

  .dbc-dart-flight {
    position: absolute;
    right: 0;
    top: -3px;
    width: 6px;
    height: 10px;
    clip-path: polygon(0 50%, 100% 0, 70% 50%, 100% 100%);
    background: #ef4444;
    border-left: 1px solid #facc15;
  }

  @keyframes dbc-throw {
    0% { transform: translateX(90px) scale(1.2); opacity: 0; }
    3% { opacity: 1; }
    8% { transform: translateX(0) scale(1); opacity: 1; }
    10% { transform: translateX(-2px) scale(1); }
    12% { transform: translateX(0) scale(1); }
    100% { transform: translateX(0) scale(1); opacity: 1; }
  }

  /* Impact hit ripples */
  .dbc-ripple {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1.5px solid #fde047;
    border-radius: 50%;
    opacity: 0;
    animation: dbc-ripple 6s infinite;
  }

  .dbc-ripple.r1 { left: 42px; top: 30px; animation-delay: 0s; }
  .dbc-ripple.r2 { left: 56px; top: 50px; animation-delay: 2s; }
  .dbc-ripple.r3 { left: 44px; top: 44px; animation-delay: 4s; }

  @keyframes dbc-ripple {
    0%, 7% { transform: scale(0.4); opacity: 0; }
    9% { opacity: 0.95; }
    16% { transform: scale(2.4); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Radiant Bullseye flash */
  .dbc-bull {
    position: absolute;
    left: 44px;
    top: 44px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #fde047 0%, #ef4444 60%, transparent 70%);
    box-shadow: 0 0 12px #facc15;
    opacity: 0;
    animation: dbc-bull 6s infinite;
  }

  @keyframes dbc-bull {
    0%, 67% { opacity: 0; transform: scale(0.5); }
    70% { opacity: 1; transform: scale(1.8); }
    78% { opacity: 0.7; }
    84%, 100% { opacity: 0; }
  }

  /* Match score ticker */
  .dbc-score {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    text-align: center;
    font-size: 9px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fde047;
    text-shadow: 0 0 6px #facc15;
  }

  .dbc-score::before {
    content: '0';
    animation: dbc-score 6s steps(1) infinite;
  }

  @keyframes dbc-score {
    0% { content: '0'; }
    9% { content: '20'; }
    42% { content: '45'; }
    70% { content: 'BULL 95!'; }
    96% { content: '0'; }
  }
  `,
};

const dartboardMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="dbc">
        <div class="dbc-board"></div>
        <div class="dbc-ripple r1"></div>
        <div class="dbc-ripple r2"></div>
        <div class="dbc-ripple r3"></div>
        <div class="dbc-bull"></div>
        <div class="dbc-dart d1"><div class="dbc-dart-tip"></div><div class="dbc-dart-shaft"></div><div class="dbc-dart-flight"></div></div>
        <div class="dbc-dart d2"><div class="dbc-dart-tip"></div><div class="dbc-dart-shaft"></div><div class="dbc-dart-flight"></div></div>
        <div class="dbc-dart d3"><div class="dbc-dart-tip"></div><div class="dbc-dart-shaft"></div><div class="dbc-dart-flight"></div></div>
        <div class="dbc-score"></div>
      </div>
    `,
};

class ConceptDartboard extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${dartboardStyles[version] || dartboardStyles.v2}</style>${dartboardMarkup[version] || dartboardMarkup.v2}`;
  }
}

if (!customElements.get('concept-dartboard')) {
  customElements.define('concept-dartboard', ConceptDartboard);
}
