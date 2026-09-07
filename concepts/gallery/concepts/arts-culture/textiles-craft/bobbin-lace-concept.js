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
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
  }

  .p-c { top: 18px; left: 41px; }
  .p-l1 { top: 26px; left: 24px; }
  .p-r1 { top: 26px; right: 24px; }
  .p-l2 { top: 38px; left: 32px; }
  .p-r2 { top: 38px; right: 32px; }

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
    stroke-width: 1.2;
  }

  /* Traversing working weaver lace knot traveling horizontally across pillow */
  .bob-weaver-knot {
    position: absolute;
    top: 32px;
    left: 41px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #8cffaa, 0 0 14px #00ff44;
    z-index: 6;
    animation: bob-knot-travel 2.4s ease-in-out infinite alternate;
  }

  @keyframes bob-knot-travel {
    0% { transform: translate(-22px, -8px); }
    50% { transform: translate(0, 6px); }
    100% { transform: translate(22px, -8px); }
  }

  /* Active cross-and-twist bobbin rows */
  .bob-bobbin-row {
    position: absolute;
    bottom: 8px;
    width: 80px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  .bob-pair {
    display: flex;
    gap: 4px;
  }

  .pair-1 { animation: bob-cross-1 1.8s ease-in-out infinite alternate; }
  .pair-2 { animation: bob-cross-2 1.8s ease-in-out infinite alternate; animation-delay: 0.45s; }
  .pair-3 { animation: bob-cross-1 1.8s ease-in-out infinite alternate; animation-delay: 0.9s; }

  @keyframes bob-cross-1 {
    0% { transform: rotate(-24deg) translateX(-4px); }
    100% { transform: rotate(24deg) translateX(4px); }
  }

  @keyframes bob-cross-2 {
    0% { transform: rotate(24deg) translateX(4px); }
    100% { transform: rotate(-24deg) translateX(-4px); }
  }

  .bob-spindle {
    width: 4px;
    height: 18px;
    background: linear-gradient(180deg, #d6ffe0 0%, #1b4724 40%, #031407 100%);
    border: 1px solid #8cffaa;
    border-radius: 2px 2px 3px 3px;
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.5);
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
            <path class="bob-braid" d="M 24 32 L 20 62" />
            <path class="bob-braid" d="M 34 44 L 38 62" />
            <path class="bob-braid" d="M 52 44 L 48 62" />
            <path class="bob-braid" d="M 62 32 L 66 62" />
          </svg>

          <div class="bob-pin p-c"></div>
          <div class="bob-pin p-l1"></div>
          <div class="bob-pin p-r1"></div>
          <div class="bob-pin p-l2"></div>
          <div class="bob-pin p-r2"></div>

          <div class="bob-weaver-knot"></div>

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
