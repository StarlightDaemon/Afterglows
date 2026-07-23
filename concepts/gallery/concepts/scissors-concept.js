const scissorsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Scissors cutting along a dashed line: the blades snip open and
     shut as the pair advances left across a sheet of paper, and the
     cut edge opens into two curling halves behind them. */
  .sc {
    width: 116px;
    height: 84px;
    position: relative;
  }

  /* Paper sheet. */
  .sc-paper {
    position: absolute;
    left: 6px;
    top: 22px;
    width: 104px;
    height: 40px;
    border: 1px solid rgba(140, 255, 170, 0.6);
    background: linear-gradient(180deg, rgba(0, 40, 8, 0.5), rgba(0, 25, 5, 0.6));
  }

  /* Cut-line guide (dashes) down the middle. */
  .sc-line {
    position: absolute;
    left: 12px;
    right: 12px;
    top: 42px;
    height: 1px;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.6) 0 4px,
      transparent 4px 8px);
  }

  /* Upper cut half: peels up behind the scissors. */
  .sc-half-top {
    position: absolute;
    right: 12px;
    top: 22px;
    width: 0;
    height: 20px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.4), rgba(0, 80, 16, 0.5));
    border: 1px solid rgba(140, 255, 170, 0.5);
    border-bottom: none;
    transform-origin: 100% 100%;
    animation: sc-half-top 5s linear infinite;
  }

  @keyframes sc-half-top {
    0% { width: 0; transform: rotate(0deg); }
    85% { width: 84px; transform: rotate(-6deg); }
    /* Reset (new sheet). */
    90% { width: 84px; }
    92% { width: 0; transform: rotate(0deg); }
    100% { width: 0; }
  }

  /* Lower cut half: peels down. */
  .sc-half-bot {
    position: absolute;
    right: 12px;
    top: 42px;
    width: 0;
    height: 20px;
    background: linear-gradient(180deg, rgba(0, 80, 16, 0.5), rgba(0, 130, 26, 0.4));
    border: 1px solid rgba(140, 255, 170, 0.5);
    border-top: none;
    transform-origin: 100% 0%;
    animation: sc-half-bot 5s linear infinite;
  }

  @keyframes sc-half-bot {
    0% { width: 0; transform: rotate(0deg); }
    85% { width: 84px; transform: rotate(6deg); }
    90% { width: 84px; }
    92% { width: 0; transform: rotate(0deg); }
    100% { width: 0; }
  }

  /* The scissors: advance leftward while snipping. */
  .sc-tool {
    position: absolute;
    top: 30px;
    right: 8px;
    width: 44px;
    height: 24px;
    animation: sc-advance 5s linear infinite;
  }

  @keyframes sc-advance {
    0% { transform: translateX(0); }
    85% { transform: translateX(-84px); }
    90% { transform: translateX(-84px); }
    92% { transform: translateX(0); }
    100% { transform: translateX(0); }
  }

  /* Pivot screw. */
  .sc-pivot {
    position: absolute;
    right: 18px;
    top: 11px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.7);
    z-index: 3;
  }

  /* Blades: pivot at the screw, opening/closing. Point to the left. */
  .sc-blade {
    position: absolute;
    right: 20px;
    top: 12px;
    width: 30px;
    height: 3px;
    transform-origin: 100% 50%;
  }

  .sc-blade::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 2px 0 0 2px;
    background: linear-gradient(90deg, rgba(214, 255, 224, 0.95), rgba(0, 130, 26, 0.85));
  }

  .sc-blade.top { animation: sc-snip-top 0.5s ease-in-out infinite; }
  .sc-blade.bot { animation: sc-snip-bot 0.5s ease-in-out infinite; }

  @keyframes sc-snip-top {
    0%, 100% { transform: rotate(-16deg); }
    50% { transform: rotate(-2deg); }
  }

  @keyframes sc-snip-bot {
    0%, 100% { transform: rotate(16deg); }
    50% { transform: rotate(2deg); }
  }

  /* Finger-loop handles on the right. */
  .sc-handle {
    position: absolute;
    right: 0;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(140, 255, 170, 0.85);
    border-radius: 50%;
    transform-origin: 0% 50%;
  }

  .sc-handle.top { top: 2px; animation: sc-hand-top 0.5s ease-in-out infinite; }
  .sc-handle.bot { top: 12px; animation: sc-hand-bot 0.5s ease-in-out infinite; }

  @keyframes sc-hand-top {
    0%, 100% { transform: rotate(14deg); }
    50% { transform: rotate(2deg); }
  }

  @keyframes sc-hand-bot {
    0%, 100% { transform: rotate(-14deg); }
    50% { transform: rotate(-2deg); }
  }

  /* Snip spark at the blade tips. */
  .sc-spark {
    position: absolute;
    left: 0;
    top: 12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    animation: sc-spark 0.5s steps(1) infinite;
  }

  @keyframes sc-spark {
    0%, 40% { opacity: 0; }
    50% { opacity: 1; }
    60%, 100% { opacity: 0; }
  }
`;

class ConceptScissors extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${scissorsStyles}</style>
      <div class="sc">
        <div class="sc-paper"></div>
        <div class="sc-line"></div>
        <div class="sc-half-top"></div>
        <div class="sc-half-bot"></div>
        <div class="sc-tool">
          <div class="sc-spark"></div>
          <div class="sc-blade top"></div>
          <div class="sc-blade bot"></div>
          <div class="sc-pivot"></div>
          <div class="sc-handle top"></div>
          <div class="sc-handle bot"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-scissors')) {
  customElements.define('concept-scissors', ConceptScissors);
}
