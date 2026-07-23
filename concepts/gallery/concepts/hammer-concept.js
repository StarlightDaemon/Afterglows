const hammerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Three strikes per 4.8s cycle: the hammer arcs down, the nail
     sinks a step with each hit while the board shudders and a spark
     jumps, then a fresh nail fades in and it starts over. */
  .ham {
    width: 108px;
    height: 92px;
    position: relative;
  }

  /* The board. */
  .ham-board {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 14px;
    height: 16px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 3px;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.14) 0 12px, transparent 12px 26px),
      rgba(0, 40, 8, 0.6);
    animation: ham-shudder 4.8s infinite;
  }

  /* Wood grain knot. */
  .ham-board::after {
    content: '';
    position: absolute;
    left: 16px;
    top: 4px;
    width: 8px;
    height: 5px;
    border-radius: 50%;
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  @keyframes ham-shudder {
    0%, 15%, 41%, 67%, 100% { transform: translateY(0); }
    17% { transform: translateY(1.5px); }
    19% { transform: translateY(0); }
    43% { transform: translateY(1.5px); }
    45% { transform: translateY(0); }
    69% { transform: translateY(1.5px); }
    71% { transform: translateY(0); }
  }

  /* The nail: sinks in three steps, then a new one fades in. */
  .ham-nail {
    position: absolute;
    left: 62px;
    bottom: 28px;
    width: 3px;
    height: 26px;
    background: linear-gradient(180deg, #d6ffe0, rgba(140, 255, 170, 0.7));
    animation: ham-nail 4.8s steps(1) infinite;
  }

  .ham-nail::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -3px;
    width: 9px;
    height: 2.5px;
    border-radius: 1px;
    background: #d6ffe0;
  }

  @keyframes ham-nail {
    0% { transform: translateY(0); opacity: 1; }
    17% { transform: translateY(8px); }
    43% { transform: translateY(15px); }
    69% { transform: translateY(21px); }
    88% { transform: translateY(21px); opacity: 0; }
    94% { transform: translateY(0); opacity: 0.35; }
    98% { transform: translateY(0); opacity: 1; }
  }

  /* The hammer: pivots from a wrist point up-right, three swings. */
  .ham-tool {
    position: absolute;
    right: 2px;
    top: 4px;
    width: 54px;
    height: 54px;
    transform-origin: 90% 85%;
    animation: ham-swing 4.8s infinite;
  }

  /* Handle, with the head attached at its far end so the assembly
     can never separate. */
  .ham-handle {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 44px;
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.9), rgba(0, 130, 26, 0.85));
    transform: rotate(-38deg);
    transform-origin: 100% 50%;
  }

  /* Head: cheek + face, crossing the handle tip. */
  .ham-head {
    position: absolute;
    left: -6px;
    top: -8px;
    width: 10px;
    height: 21px;
    border-radius: 3px 3px 4px 4px;
    background: linear-gradient(180deg, #baffc9, rgba(0, 140, 28, 0.95));
  }

  /* Claw curling off the top of the head. */
  .ham-head::after {
    content: '';
    position: absolute;
    right: -5px;
    top: -2px;
    width: 9px;
    height: 7px;
    clip-path: polygon(0 100%, 45% 0, 100% 40%, 60% 100%);
    background: rgba(140, 255, 170, 0.8);
  }

  /* Swing: wind up, drive down, bounce, wind up again - three times,
     then rest during the nail swap. */
  @keyframes ham-swing {
    0%, 6% { transform: rotate(4deg); }
    13% { transform: rotate(46deg); animation-timing-function: ease-in; }
    17% { transform: rotate(-6deg); }
    20% { transform: rotate(2deg); }
    32% { transform: rotate(4deg); }
    39% { transform: rotate(46deg); animation-timing-function: ease-in; }
    43% { transform: rotate(-6deg); }
    46% { transform: rotate(2deg); }
    58% { transform: rotate(4deg); }
    65% { transform: rotate(46deg); animation-timing-function: ease-in; }
    69% { transform: rotate(-6deg); }
    72% { transform: rotate(2deg); }
    82%, 100% { transform: rotate(4deg); }
  }

  /* Impact sparks. */
  .ham-spark {
    position: absolute;
    left: 58px;
    bottom: 52px;
    width: 12px;
    height: 12px;
    opacity: 0;
    animation: ham-spark 4.8s steps(1) infinite;
  }

  .ham-spark::before,
  .ham-spark::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 1px;
    background: #f2ffdd;
  }

  .ham-spark::before { transform: rotate(40deg); }
  .ham-spark::after { transform: rotate(-40deg); }

  @keyframes ham-spark {
    0%, 16% { opacity: 0; }
    17%, 19% { opacity: 1; }
    20%, 42% { opacity: 0; }
    43%, 45% { opacity: 1; }
    46%, 68% { opacity: 0; }
    69%, 71% { opacity: 1; }
    72%, 100% { opacity: 0; }
  }

  /* Legs under the board. */
  .ham-leg {
    position: absolute;
    bottom: 4px;
    width: 4px;
    height: 12px;
    background: rgba(0, 204, 0, 0.55);
  }

  .ham-leg.g1 { left: 18px; transform: skewX(-12deg); }
  .ham-leg.g2 { right: 18px; transform: skewX(12deg); }
`;

class ConceptHammer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${hammerStyles}</style>
      <div class="ham">
        <div class="ham-leg g1"></div>
        <div class="ham-leg g2"></div>
        <div class="ham-nail"></div>
        <div class="ham-board"></div>
        <div class="ham-spark"></div>
        <div class="ham-tool">
          <div class="ham-handle"><div class="ham-head"></div></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-hammer')) {
  customElements.define('concept-hammer', ConceptHammer);
}
