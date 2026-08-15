const bobbinStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bob {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d120a 0%, #030502 100%);
    border: 1.5px solid rgba(140, 255, 170, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Lace pillow parchment pattern (pricking pattern) */
  .bob-pillow {
    position: absolute;
    width: 86px;
    height: 74px;
    background: #081a0e;
    border: 1.2px solid #00cc00;
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Brass pricking pins stuck in pillow */
  .bob-pin {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
  }

  .p-c { top: 22px; left: 42px; }
  .p-l1 { top: 28px; left: 28px; }
  .p-r1 { top: 28px; right: 28px; }
  .p-l2 { top: 40px; left: 34px; }
  .p-r2 { top: 40px; right: 34px; }

  /* Intricate lace thread network SVG */
  .bob-threads-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .bob-thread {
    fill: none;
    stroke: #ffffff;
    stroke-width: 1.2;
    stroke-linecap: round;
    filter: drop-shadow(0 0 3px #8cffaa);
  }

  .bob-braid {
    fill: none;
    stroke: #8cffaa;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Swinging pairs of wooden bobbins hanging down */
  .bob-bobbin-row {
    position: absolute;
    bottom: 12px;
    width: 76px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  .bob-pair {
    display: flex;
    gap: 3px;
    animation: bob-swing 2s ease-in-out infinite alternate;
  }

  .pair-1 { animation-delay: 0s; }
  .pair-2 { animation-delay: 0.5s; }
  .pair-3 { animation-delay: 1s; }

  @keyframes bob-swing {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }

  .bob-spindle {
    width: 3.5px;
    height: 16px;
    background: linear-gradient(180deg, #d6ffe0 0%, #1b4724 40%, #031407 100%);
    border: 0.8px solid #8cffaa;
    border-radius: 1px 1px 2px 2px;
    box-shadow: 0 0 3px rgba(140, 255, 170, 0.4);
  }

  .bob-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBobbinLace extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bobbinStyles}</style>
      <div class="bob">
        <div class="bob-pillow">
          <svg class="bob-threads-svg" viewBox="0 0 86 74">
            <!-- Torchon lace diamond grounds -->
            <polygon points="43,14 62,32 43,50 24,32" fill="none" stroke="#8cffaa" stroke-width="1.2" />
            <!-- Cross and twist braids radiating down to bobbins -->
            <path class="bob-thread" d="M 43 14 L 43 50" />
            <path class="bob-thread" d="M 24 32 L 62 32" />
            <path class="bob-braid" d="M 24 32 L 20 66" />
            <path class="bob-braid" d="M 34 44 L 38 66" />
            <path class="bob-braid" d="M 52 44 L 48 66" />
            <path class="bob-braid" d="M 62 32 L 66 66" />
          </svg>

          <div class="bob-pin p-c"></div>
          <div class="bob-pin p-l1"></div>
          <div class="bob-pin p-r1"></div>
          <div class="bob-pin p-l2"></div>
          <div class="bob-pin p-r2"></div>

          <div class="bob-bobbin-row">
            <div class="bob-pair pair-1">
              <div class="bob-spindle"></div>
              <div class="bob-spindle"></div>
            </div>
            <div class="bob-pair pair-2">
              <div class="bob-spindle"></div>
              <div class="bob-spindle"></div>
            </div>
            <div class="bob-pair pair-3">
              <div class="bob-spindle"></div>
              <div class="bob-spindle"></div>
            </div>
          </div>
        </div>

        <div class="bob-label">BOBBIN LACE WEAVE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bobbin-lace')) {
  customElements.define('concept-bobbin-lace', ConceptBobbinLace);
}
