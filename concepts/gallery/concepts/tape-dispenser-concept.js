const tapeDispenserStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A weighted tape dispenser: a length pulls off the roll (which
     shrinks as it feeds), drapes over the serrated cutter, and is
     torn free with a snap - the strip flutters down and the stub
     springs back. */
  .td {
    width: 116px;
    height: 84px;
    position: relative;
  }

  /* Dispenser body (curved weighted base). */
  .td-body {
    position: absolute;
    left: 6px;
    bottom: 8px;
    width: 78px;
    height: 44px;
    border-radius: 40px 40px 8px 40px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.55), rgba(0, 60, 12, 0.8));
    border: 2px solid var(--accent, #00cc00);
  }

  /* The tape roll: concentric rings that shrink as tape feeds. */
  .td-roll {
    position: absolute;
    left: 16px;
    bottom: 16px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.8);
    background:
      repeating-radial-gradient(circle,
        rgba(190, 255, 205, 0.35) 0 2px,
        rgba(0, 110, 22, 0.4) 2px 4px);
    animation: td-roll 4s linear infinite, td-shrink 8s ease-in-out infinite;
  }

  /* Hub. */
  .td-roll::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    border-radius: 50%;
    background: rgba(0, 40, 8, 0.9);
    border: 1px solid rgba(140, 255, 170, 0.7);
  }

  @keyframes td-roll {
    to { transform: rotate(360deg); }
  }

  @keyframes td-shrink {
    0%, 20% { width: 44px; height: 44px; left: 16px; bottom: 16px; }
    70% { width: 36px; height: 36px; left: 20px; bottom: 20px; }
    /* New roll loaded. */
    80% { width: 36px; height: 36px; }
    88% { width: 44px; height: 44px; left: 16px; bottom: 16px; }
  }

  /* Cutter: serrated blade at the front lip. */
  .td-cutter {
    position: absolute;
    left: 78px;
    bottom: 30px;
    width: 14px;
    height: 6px;
    clip-path: polygon(0 0, 100% 0, 100% 40%, 88% 100%, 76% 40%, 64% 100%, 52% 40%, 40% 100%, 28% 40%, 16% 100%, 4% 40%, 0 40%);
    background: rgba(190, 255, 205, 0.9);
    animation: td-cutter 4s steps(1) infinite;
  }

  /* Cutter flashes on the tear. */
  @keyframes td-cutter {
    0%, 60% { filter: none; }
    64%, 70% { filter: drop-shadow(0 0 6px rgba(0, 204, 0, 0.9)); }
    74%, 100% { filter: none; }
  }

  /* The pulled strip: extends over the cutter, then tears and drops. */
  .td-strip {
    position: absolute;
    left: 58px;
    bottom: 34px;
    height: 8px;
    background: linear-gradient(90deg, rgba(190, 255, 205, 0.55), rgba(140, 255, 170, 0.3));
    border: 1px solid rgba(140, 255, 170, 0.5);
    border-radius: 0 2px 2px 0;
    transform-origin: 0% 50%;
    animation: td-strip 4s ease-in-out infinite;
  }

  @keyframes td-strip {
    0% { width: 6px; transform: rotate(0deg); opacity: 1; }
    40% { width: 34px; transform: rotate(0deg); opacity: 1; }
    /* Torn free. */
    62% { width: 34px; transform: rotate(0deg); opacity: 1; }
    66% { width: 34px; transform: rotate(6deg) translateY(2px); }
    /* Stub springs back. */
    70% { width: 6px; transform: rotate(0deg); opacity: 1; }
    100% { width: 6px; transform: rotate(0deg); opacity: 1; }
  }

  /* The torn-off piece fluttering down. */
  .td-piece {
    position: absolute;
    left: 88px;
    bottom: 34px;
    width: 26px;
    height: 8px;
    background: linear-gradient(90deg, rgba(190, 255, 205, 0.5), rgba(140, 255, 170, 0.25));
    border: 1px solid rgba(140, 255, 170, 0.5);
    opacity: 0;
    animation: td-piece 4s ease-in infinite;
  }

  @keyframes td-piece {
    0%, 62% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
    66% { opacity: 1; }
    100% { transform: translate(6px, 32px) rotate(40deg); opacity: 0; }
  }

  /* Non-slip feet. */
  .td-feet {
    position: absolute;
    left: 14px;
    bottom: 4px;
    width: 62px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.45);
  }
`;

class ConceptTapeDispenser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tapeDispenserStyles}</style>
      <div class="td">
        <div class="td-body"></div>
        <div class="td-roll"></div>
        <div class="td-strip"></div>
        <div class="td-piece"></div>
        <div class="td-cutter"></div>
        <div class="td-feet"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tape-dispenser')) {
  customElements.define('concept-tape-dispenser', ConceptTapeDispenser);
}
