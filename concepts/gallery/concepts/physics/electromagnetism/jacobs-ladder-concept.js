const jacobsLadderStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .jcb {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* High voltage transformer base box */
  .jcb-base {
    position: absolute;
    bottom: 8px;
    width: 68px;
    height: 16px;
    background: linear-gradient(180deg, #008818, #011405);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 3px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.3);
    z-index: 2;
  }

  /* Ceramic ribbed standoff insulators */
  .jcb-insulator-l {
    position: absolute;
    bottom: 24px;
    left: 36px;
    width: 10px;
    height: 14px;
    background: repeating-linear-gradient(
      180deg,
      #d6ffe0 0px,
      #d6ffe0 2px,
      #005510 2px,
      #005510 4px
    );
    border: 1px solid #ffffff;
    border-radius: 2px;
    z-index: 3;
  }

  .jcb-insulator-r {
    position: absolute;
    bottom: 24px;
    right: 36px;
    width: 10px;
    height: 14px;
    background: repeating-linear-gradient(
      180deg,
      #d6ffe0 0px,
      #d6ffe0 2px,
      #005510 2px,
      #005510 4px
    );
    border: 1px solid #ffffff;
    border-radius: 2px;
    z-index: 3;
  }

  /* Diverging V-shaped copper electrode rods */
  .jcb-rod-l {
    position: absolute;
    bottom: 38px;
    left: 40px;
    width: 2.5px;
    height: 52px;
    background: linear-gradient(180deg, #ffffff, #8cffaa 40%, #008818 100%);
    border-radius: 1px;
    transform-origin: bottom center;
    transform: rotate(-14deg);
    box-shadow: 0 0 4px #8cffaa;
    z-index: 4;
  }

  .jcb-rod-r {
    position: absolute;
    bottom: 38px;
    right: 40px;
    width: 2.5px;
    height: 52px;
    background: linear-gradient(180deg, #ffffff, #8cffaa 40%, #008818 100%);
    border-radius: 1px;
    transform-origin: bottom center;
    transform: rotate(14deg);
    box-shadow: 0 0 4px #8cffaa;
    z-index: 4;
  }

  /* Climbing electric spark arc */
  .jcb-arc {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 6px;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 16px #8cffaa;
    z-index: 5;
    animation: jcb-arc-climb 2.4s cubic-bezier(0.3, 0.7, 0.4, 1) infinite;
  }

  @keyframes jcb-arc-climb {
    0% {
      bottom: 40px;
      width: 14px;
      opacity: 0;
      clip-path: polygon(0 40%, 30% 0, 70% 100%, 100% 40%);
    }
    10% {
      opacity: 1;
      width: 16px;
      filter: drop-shadow(0 0 10px #ffffff);
    }
    50% {
      bottom: 64px;
      width: 26px;
      opacity: 0.9;
      clip-path: polygon(0 60%, 25% 10%, 60% 90%, 80% 20%, 100% 50%);
    }
    85% {
      bottom: 86px;
      width: 38px;
      opacity: 0.95;
      filter: drop-shadow(0 0 14px #ffffff);
      clip-path: polygon(0 30%, 20% 80%, 50% 0%, 75% 100%, 100% 30%);
    }
    92% {
      bottom: 90px;
      width: 42px;
      opacity: 0.8;
    }
    96%, 100% {
      bottom: 92px;
      width: 44px;
      opacity: 0;
    }
  }

  /* Corona ozone glow wisps */
  .jcb-corona {
    position: absolute;
    top: 10px;
    width: 60px;
    height: 40px;
    background: radial-gradient(circle, rgba(140, 255, 170, 0.18), transparent 70%);
    filter: blur(2px);
    pointer-events: none;
    animation: jcb-corona-pulse 0.4s ease-in-out infinite alternate;
  }

  @keyframes jcb-corona-pulse {
    0% { opacity: 0.3; }
    100% { opacity: 0.9; }
  }

  /* Caption */
  .jcb-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptJacobsLadder extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${jacobsLadderStyles}</style>
      <div class="jcb">
        <div class="jcb-corona"></div>

        <div class="jcb-base"></div>
        <div class="jcb-insulator-l"></div>
        <div class="jcb-insulator-r"></div>

        <div class="jcb-rod-l"></div>
        <div class="jcb-rod-r"></div>

        <div class="jcb-arc"></div>

        <div class="jcb-label">15 kV SPARK GAP</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-jacobs-ladder')) {
  customElements.define('concept-jacobs-ladder', ConceptJacobsLadder);
}
