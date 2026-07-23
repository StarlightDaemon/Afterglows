const sharpenerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A crank pencil sharpener at work: the handle turns, the pencil
     spins and inches in, curled shavings peel off and fall, and the
     tip emerges honed to a fresh point. */
  .sh {
    width: 116px;
    height: 84px;
    position: relative;
  }

  /* Mounting body of the sharpener, right side. */
  .sh-body {
    position: absolute;
    right: 6px;
    top: 22px;
    width: 34px;
    height: 34px;
    border-radius: 6px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.7), rgba(0, 80, 16, 0.9));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Shavings chamber window. */
  .sh-body::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 8px;
    width: 16px;
    height: 18px;
    border-radius: 3px;
    background: rgba(0, 30, 6, 0.7);
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  /* Crank handle turning. */
  .sh-crank {
    position: absolute;
    right: 2px;
    top: 39px;
    width: 0;
    height: 0;
    animation: sh-turn 1.4s linear infinite;
  }

  @keyframes sh-turn {
    to { transform: rotate(360deg); }
  }

  .sh-crank-arm {
    position: absolute;
    top: -1.5px;
    left: 0;
    width: 18px;
    height: 3px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
    transform-origin: 0% 50%;
  }

  .sh-crank-knob {
    position: absolute;
    left: 16px;
    top: -3px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
  }

  /* The pencil: spins and creeps rightward into the sharpener,
     retreating (fresh pencil) at the cycle's end. */
  .sh-pencil {
    position: absolute;
    left: 6px;
    top: 33px;
    width: 62px;
    height: 12px;
    animation: sh-feed 5s ease-in-out infinite;
  }

  /* Barrel: hex facets via banded gradient; the band scroll reads as
     rotation. */
  .sh-barrel {
    position: absolute;
    left: 0;
    top: 0;
    width: 44px;
    height: 12px;
    border-radius: 2px 0 0 2px;
    background:
      linear-gradient(180deg, rgba(0,0,0,0.25), transparent 30%, transparent 70%, rgba(0,0,0,0.25)),
      repeating-linear-gradient(90deg,
        rgba(190, 255, 205, 0.85) 0 5px,
        rgba(0, 110, 22, 0.85) 5px 10px);
    border: 1px solid rgba(0, 204, 0, 0.6);
    animation: sh-spin 0.5s linear infinite;
  }

  @keyframes sh-spin {
    to { background-position: 0 0, 10px 0; }
  }

  /* Eraser end. */
  .sh-eraser {
    position: absolute;
    left: -6px;
    top: 1px;
    width: 6px;
    height: 10px;
    border-radius: 3px 0 0 3px;
    background: rgba(140, 255, 170, 0.8);
  }

  /* The sharpened wood cone + graphite tip. */
  .sh-tip {
    position: absolute;
    left: 44px;
    top: 0;
    width: 16px;
    height: 12px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: linear-gradient(90deg, rgba(0, 150, 30, 0.7), rgba(214, 255, 224, 0.9));
    animation: sh-tip 5s ease-in-out infinite;
  }

  /* Tip goes from blunt (short cone) to sharp (long cone). */
  @keyframes sh-tip {
    0%, 10% { width: 8px; }
    60% { width: 18px; }
    82% { width: 18px; }
    90%, 100% { width: 8px; }
  }

  @keyframes sh-feed {
    0%, 10% { transform: translateX(0); }
    60% { transform: translateX(8px); }
    82% { transform: translateX(8px); }
    /* Pull out the finished pencil, drop a fresh one in. */
    88% { transform: translateX(-6px); }
    100% { transform: translateX(0); }
  }

  /* Curled shavings peeling off and falling. */
  .sh-shaving {
    position: absolute;
    right: 30px;
    top: 40px;
    width: 8px;
    height: 8px;
    border: 1.5px solid rgba(190, 255, 205, 0.8);
    border-radius: 50% 50% 50% 0;
    border-right-color: transparent;
    opacity: 0;
    animation: sh-shaving 1.6s ease-in infinite;
  }

  .sh-shaving.v2 { animation-delay: -0.6s; right: 34px; }
  .sh-shaving.v3 { animation-delay: -1.1s; right: 26px; }

  @keyframes sh-shaving {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
    20% { opacity: 0.9; }
    100% { transform: translate(-6px, 26px) rotate(160deg); opacity: 0; }
  }

  /* Shaving pile growing below. */
  .sh-pile {
    position: absolute;
    right: 20px;
    bottom: 8px;
    width: 22px;
    height: 6px;
    border-radius: 50% 50% 0 0;
    background: rgba(140, 255, 170, 0.45);
    transform-origin: bottom center;
    animation: sh-pile 5s infinite;
  }

  @keyframes sh-pile {
    0% { transform: scale(0.2, 0.3); }
    82% { transform: scale(1, 1); }
    88% { transform: scale(1, 1); }
    92%, 100% { transform: scale(0.2, 0.3); }
  }
`;

class ConceptSharpener extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sharpenerStyles}</style>
      <div class="sh">
        <div class="sh-shaving"></div>
        <div class="sh-shaving v2"></div>
        <div class="sh-shaving v3"></div>
        <div class="sh-pile"></div>
        <div class="sh-body"></div>
        <div class="sh-crank">
          <div class="sh-crank-arm"></div>
          <div class="sh-crank-knob"></div>
        </div>
        <div class="sh-pencil">
          <div class="sh-eraser"></div>
          <div class="sh-barrel"></div>
          <div class="sh-tip"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-sharpener')) {
  customElements.define('concept-sharpener', ConceptSharpener);
}
