const lungsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A steady 5s breath: the lobes swell and brighten on the inhale
     as air motes stream down the trachea, then everything releases
     and the diaphragm line rises again. */
  .lu {
    width: 104px;
    height: 96px;
    position: relative;
  }

  /* Trachea. */
  .lu-trachea {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 8px;
    height: 26px;
    margin-left: -4px;
    background:
      repeating-linear-gradient(180deg,
        rgba(140, 255, 170, 0.75) 0 3px,
        rgba(0, 90, 18, 0.6) 3px 6px);
    border-radius: 4px;
  }

  /* Bronchi forking into each lobe. */
  .lu-bronchus {
    position: absolute;
    top: 27px;
    width: 18px;
    height: 5px;
    background: rgba(140, 255, 170, 0.6);
    border-radius: 3px;
  }

  .lu-bronchus.left { left: 33px; transform: rotate(32deg); }
  .lu-bronchus.right { right: 33px; transform: rotate(-32deg); }

  /* Lobes: breathe via scale, brightening at full inhale. */
  .lu-lobe {
    position: absolute;
    top: 32px;
    width: 38px;
    height: 50px;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(ellipse at 50% 36%,
      rgba(0, 160, 32, 0.4),
      rgba(0, 60, 12, 0.6) 75%);
    animation: lu-breathe 5s ease-in-out infinite;
    box-sizing: border-box;
  }

  .lu-lobe.left {
    left: 8px;
    border-radius: 55% 40% 45% 60% / 42% 34% 66% 58%;
    transform-origin: 90% 20%;
  }

  .lu-lobe.right {
    right: 8px;
    border-radius: 40% 55% 60% 45% / 34% 42% 58% 66%;
    transform-origin: 10% 20%;
  }

  @keyframes lu-breathe {
    0%, 100% { transform: scale(0.92); box-shadow: inset 0 0 6px rgba(0, 204, 0, 0.2); }
    38%, 52% { transform: scale(1.04); box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.5), 0 0 10px rgba(0, 204, 0, 0.35); }
  }

  /* Alveolar speckle inside each lobe. */
  .lu-speckle {
    position: absolute;
    top: 40px;
    width: 26px;
    height: 34px;
    background:
      radial-gradient(circle 1.5px, rgba(140, 255, 170, 0.5) 98%, transparent) 0 0 / 7px 8px;
    border-radius: 50%;
    animation: lu-speckle 5s ease-in-out infinite;
  }

  .lu-speckle.left { left: 13px; }
  .lu-speckle.right { right: 13px; }

  @keyframes lu-speckle {
    0%, 100% { opacity: 0.35; }
    40%, 52% { opacity: 0.9; }
  }

  /* Air motes: streaming down on the inhale, back up on the exhale. */
  .lu-air {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 3px;
    height: 3px;
    margin-left: -1.5px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.9);
    opacity: 0;
    animation: lu-air 5s infinite;
  }

  .lu-air.a2 { animation-delay: 0.35s; }
  .lu-air.a3 { animation-delay: 0.7s; }

  @keyframes lu-air {
    0% { transform: translateY(0); opacity: 0; }
    6% { opacity: 1; }
    /* Inhale: down and fork into a lobe. */
    22% { transform: translate(-9px, 30px); opacity: 0.9; }
    34% { transform: translate(-16px, 40px); opacity: 0; }
    /* Exhale: back out. */
    58% { transform: translate(-9px, 30px); opacity: 0.7; }
    76% { transform: translateY(0); opacity: 0; }
    100% { opacity: 0; }
  }

  .lu-air.a2 {
    animation-name: lu-air-right;
  }

  @keyframes lu-air-right {
    0% { transform: translateY(0); opacity: 0; }
    6% { opacity: 1; }
    22% { transform: translate(9px, 30px); opacity: 0.9; }
    34% { transform: translate(16px, 40px); opacity: 0; }
    58% { transform: translate(9px, 30px); opacity: 0.7; }
    76% { transform: translateY(0); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Diaphragm: a curve that flattens on the inhale. */
  .lu-diaphragm {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 4px;
    height: 12px;
    border-top: 2px solid rgba(140, 255, 170, 0.7);
    border-radius: 50% 50% 0 0;
    animation: lu-diaphragm 5s ease-in-out infinite;
  }

  @keyframes lu-diaphragm {
    0%, 100% { transform: scaleY(1); }
    38%, 52% { transform: scaleY(0.3); }
  }

  /* Breath phase readout. */
  .lu-phase {
    position: absolute;
    right: 2px;
    top: 4px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
  }

  .lu-phase::before {
    content: 'IN';
    animation: lu-phase 5s steps(1) infinite;
  }

  @keyframes lu-phase {
    0% { content: 'IN'; }
    40% { content: 'HOLD'; }
    52% { content: 'OUT'; }
    96% { content: 'IN'; }
  }
`;

class ConceptLungs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lungsStyles}</style>
      <div class="lu">
        <div class="lu-trachea"></div>
        <div class="lu-bronchus left"></div>
        <div class="lu-bronchus right"></div>
        <div class="lu-lobe left"></div>
        <div class="lu-lobe right"></div>
        <div class="lu-speckle left"></div>
        <div class="lu-speckle right"></div>
        <div class="lu-air"></div>
        <div class="lu-air a2"></div>
        <div class="lu-air a3"></div>
        <div class="lu-diaphragm"></div>
        <div class="lu-phase"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-lungs')) {
  customElements.define('concept-lungs', ConceptLungs);
}
