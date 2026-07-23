const diceStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A 5s throw: the die tumbles in from the left, bouncing lower
     each time while its face flickers through values, then settles
     on a six with a settle flash. */
  .dice {
    width: 112px;
    height: 88px;
    position: relative;
  }

  .dice-floor {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 10px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.5), transparent);
  }

  /* Tumble carrier: horizontal travel. */
  .dice-x {
    position: absolute;
    left: 2px;
    bottom: 14px;
    animation: dice-x 5s infinite;
  }

  @keyframes dice-x {
    0% { transform: translateX(-26px); }
    58% { transform: translateX(64px); }
    100% { transform: translateX(64px); }
  }

  /* Bounce carrier: decaying hops. */
  .dice-y {
    animation: dice-y 5s infinite;
  }

  @keyframes dice-y {
    0% { transform: translateY(-52px); animation-timing-function: ease-in; }
    14% { transform: translateY(0); animation-timing-function: ease-out; }
    26% { transform: translateY(-26px); animation-timing-function: ease-in; }
    38% { transform: translateY(0); animation-timing-function: ease-out; }
    47% { transform: translateY(-11px); animation-timing-function: ease-in; }
    56% { transform: translateY(0); }
    60% { transform: translateY(-3px); }
    63%, 100% { transform: translateY(0); }
  }

  /* The cube: rotates while tumbling, squares up on rest. */
  .dice-cube {
    position: relative;
    width: 26px;
    height: 26px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 5px;
    background: linear-gradient(135deg, rgba(0, 80, 16, 0.5), rgba(0, 35, 7, 0.8));
    animation: dice-spin 5s infinite;
    box-sizing: border-box;
  }

  @keyframes dice-spin {
    0% { transform: rotate(-160deg); }
    14% { transform: rotate(-88deg); }
    26% { transform: rotate(-44deg); }
    38% { transform: rotate(-14deg); }
    52% { transform: rotate(4deg); }
    60%, 100% { transform: rotate(0deg); }
    63% { box-shadow: 0 0 14px rgba(0, 204, 0, 0.95); }
    70% { box-shadow: 0 0 4px rgba(0, 204, 0, 0.3); }
  }

  /* Pip layouts: three faces that flicker while tumbling; the six
     holds from the settle. */
  .dice-face {
    position: absolute;
    inset: 0;
    opacity: 0;
  }

  .dice-pip {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 3px rgba(0, 204, 0, 0.8);
  }

  /* Face 3 (diagonal). */
  .dice-face.f3 .dice-pip.a { left: 3px; top: 3px; }
  .dice-face.f3 .dice-pip.b { left: 50%; top: 50%; margin: -2.5px 0 0 -2.5px; }
  .dice-face.f3 .dice-pip.c { right: 3px; bottom: 3px; }

  /* Face 5. */
  .dice-face.f5 .dice-pip.a { left: 3px; top: 3px; }
  .dice-face.f5 .dice-pip.b { right: 3px; top: 3px; }
  .dice-face.f5 .dice-pip.c { left: 50%; top: 50%; margin: -2.5px 0 0 -2.5px; }
  .dice-face.f5 .dice-pip.d { left: 3px; bottom: 3px; }
  .dice-face.f5 .dice-pip.e { right: 3px; bottom: 3px; }

  /* Face 6. */
  .dice-face.f6 .dice-pip.a { left: 3px; top: 2px; }
  .dice-face.f6 .dice-pip.b { left: 3px; top: 50%; margin-top: -2.5px; }
  .dice-face.f6 .dice-pip.c { left: 3px; bottom: 2px; }
  .dice-face.f6 .dice-pip.d { right: 3px; top: 2px; }
  .dice-face.f6 .dice-pip.e { right: 3px; top: 50%; margin-top: -2.5px; }
  .dice-face.f6 .dice-pip.f { right: 3px; bottom: 2px; }

  .dice-face.f3 { animation: dice-f3 5s steps(1) infinite; }
  .dice-face.f5 { animation: dice-f5 5s steps(1) infinite; }
  .dice-face.f6 { animation: dice-f6 5s steps(1) infinite; }

  @keyframes dice-f3 {
    0% { opacity: 1; }
    14% { opacity: 0; }
    26% { opacity: 1; }
    38% { opacity: 0; }
  }

  @keyframes dice-f5 {
    0% { opacity: 0; }
    14% { opacity: 1; }
    26% { opacity: 0; }
    38% { opacity: 1; }
    52% { opacity: 0; }
  }

  @keyframes dice-f6 {
    0%, 38% { opacity: 0; }
    52% { opacity: 1; }
  }

  /* Impact puffs at the first two bounces. */
  .dice-puff {
    position: absolute;
    bottom: 12px;
    width: 14px;
    height: 4px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.5);
    opacity: 0;
    animation: dice-puff 5s infinite;
  }

  .dice-puff.p1 { left: 18px; }
  .dice-puff.p2 { left: 48px; animation-delay: 1.2s; }

  @keyframes dice-puff {
    0%, 13% { transform: scale(0.3); opacity: 0; }
    15% { opacity: 0.9; }
    24% { transform: scale(1.6); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Score callout after the settle. */
  .dice-score {
    position: absolute;
    right: 6px;
    top: 8px;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.8);
    opacity: 0;
    animation: dice-score 5s steps(1) infinite;
  }

  @keyframes dice-score {
    0%, 62% { opacity: 0; }
    66%, 92% { opacity: 1; }
    96%, 100% { opacity: 0; }
  }
`;

class ConceptDice extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${diceStyles}</style>
      <div class="dice">
        <div class="dice-puff p1"></div>
        <div class="dice-puff p2"></div>
        <div class="dice-floor"></div>
        <div class="dice-x">
          <div class="dice-y">
            <div class="dice-cube">
              <div class="dice-face f3">
                <div class="dice-pip a"></div><div class="dice-pip b"></div><div class="dice-pip c"></div>
              </div>
              <div class="dice-face f5">
                <div class="dice-pip a"></div><div class="dice-pip b"></div><div class="dice-pip c"></div>
                <div class="dice-pip d"></div><div class="dice-pip e"></div>
              </div>
              <div class="dice-face f6">
                <div class="dice-pip a"></div><div class="dice-pip b"></div><div class="dice-pip c"></div>
                <div class="dice-pip d"></div><div class="dice-pip e"></div><div class="dice-pip f"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="dice-score">SIX &#9856;</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-dice')) {
  customElements.define('concept-dice', ConceptDice);
}
