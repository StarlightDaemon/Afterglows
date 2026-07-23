const turntableStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tt {
    width: 104px;
    height: 104px;
    position: relative;
  }

  /* Plinth. */
  .tt-plinth {
    position: absolute;
    inset: 10px;
    border-radius: 8px;
    background: linear-gradient(160deg, #0c2c14 0%, #071c0c 60%, #041106 100%);
    border: 1px solid rgba(140, 255, 170, 0.4);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.2);
  }

  /* Platter: spins continuously; grooves are concentric rings, the label
     dot makes the rotation readable. */
  .tt-platter {
    position: absolute;
    top: 20px;
    left: 16px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background:
      repeating-radial-gradient(circle at 50% 50%,
        rgba(140, 255, 170, 0.16) 0 1px, transparent 1px 5px),
      radial-gradient(circle at 50% 50%, #061607 0 28%, #0a2411 90%);
    border: 2px solid rgba(140, 255, 170, 0.5);
    box-sizing: border-box;
    animation: tt-spin 3.2s linear infinite;
  }

  .tt-label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    margin: -9px 0 0 -9px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 32%, #2a8a3e, #123c1e 75%);
    border: 1px solid rgba(190, 255, 205, 0.6);
  }

  /* Off-center dot on the label: the visible rotation marker. */
  .tt-label::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    width: 3px;
    height: 3px;
    margin-left: -1.5px;
    border-radius: 50%;
    background: #d8ffbb;
  }

  .tt-spindle {
    position: absolute;
    top: 49px;
    left: 45px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #e6ffd2;
    z-index: 3;
  }

  /* Tonearm: pivots at top-right, needle tracking slowly inward
     across the record, then lifting back out. */
  .tt-arm {
    position: absolute;
    top: 22px;
    right: 14px;
    width: 3px;
    height: 46px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.9), rgba(90, 220, 130, 0.6));
    transform-origin: top center;
    animation: tt-track 9s ease-in-out infinite;
  }

  .tt-arm::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    width: 9px;
    height: 9px;
    margin-left: -4.5px;
    border-radius: 50%;
    background: #0c2c14;
    border: 1px solid rgba(190, 255, 205, 0.7);
  }

  .tt-arm::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: 7px;
    height: 4px;
    border-radius: 2px;
    background: #d8ffbb;
    box-shadow: 0 0 5px rgba(216, 255, 187, 0.6);
  }

  /* Sound ripples off the needle while it tracks. */
  .tt-note {
    position: absolute;
    top: 58px;
    left: 62px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid rgba(160, 255, 185, 0.7);
    opacity: 0;
    animation: tt-note 1.6s ease-out infinite;
  }

  .tt-note.n2 { animation-delay: -0.8s; }

  /* Speed pip on the plinth. */
  .tt-pip {
    position: absolute;
    bottom: 15px;
    left: 20px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.9);
    animation: tt-pip 1.6s ease-in-out infinite;
  }

  .tt-rpm {
    position: absolute;
    bottom: 13px;
    left: 28px;
    font-family: monospace;
    font-size: 8px;
    color: rgba(140, 255, 170, 0.6);
  }

  @keyframes tt-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Arm sweeps in ~18deg over the side of the platter, then returns. */
  @keyframes tt-track {
    0%, 6% { transform: rotate(0deg); }
    14% { transform: rotate(24deg); }
    82% { transform: rotate(38deg); }
    92%, 100% { transform: rotate(0deg); }
  }

  @keyframes tt-note {
    0% { opacity: 0.8; transform: scale(0.4); }
    100% { opacity: 0; transform: scale(2); }
  }

  @keyframes tt-pip {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; box-shadow: 0 0 5px rgba(140, 255, 170, 0.7); }
  }
`;

class ConceptTurntable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${turntableStyles}</style>
      <div class="tt">
        <div class="tt-plinth"></div>
        <div class="tt-platter"><div class="tt-label"></div></div>
        <div class="tt-spindle"></div>
        <div class="tt-note"></div>
        <div class="tt-note n2"></div>
        <div class="tt-arm"></div>
        <div class="tt-pip"></div>
        <span class="tt-rpm">33⅓</span>
      </div>
    `;
  }
}

if (!customElements.get('concept-turntable')) {
  customElements.define('concept-turntable', ConceptTurntable);
}
