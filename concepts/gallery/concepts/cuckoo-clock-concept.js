const cuckooClockStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cuk {
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

  /* Wooden chalet clock housing */
  .cuk-chalet {
    position: relative;
    top: -10px;
    width: 68px;
    height: 62px;
    background: #011206;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
  }

  /* Gabled chalet roof */
  .cuk-roof {
    position: absolute;
    top: -12px;
    width: 78px;
    height: 14px;
    background: linear-gradient(180deg, #d6ffe0, #008818);
    border: 1.5px solid #ffffff;
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    box-shadow: 0 0 6px #8cffaa;
  }

  /* Attic cuckoo bird door */
  .cuk-attic-door {
    position: absolute;
    top: 6px;
    width: 18px;
    height: 16px;
    background: #000803;
    border: 1px solid #ffffff;
    border-radius: 8px 8px 2px 2px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Animated pop-out Cuckoo bird */
  .cuk-bird-rig {
    position: absolute;
    width: 14px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: cuk-bird-pop 4s cubic-bezier(0.6, 0, 0.2, 1) infinite;
  }

  @keyframes cuk-bird-pop {
    0%, 30% { transform: scale(0); opacity: 0; }
    40%, 75% { transform: scale(1.2) translateY(1px); opacity: 1; filter: drop-shadow(0 0 4px #8cffaa); }
    85%, 100% { transform: scale(0); opacity: 0; }
  }

  .cuk-bird-body {
    width: 10px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #00aa22;
    box-shadow: 0 0 4px #ffffff;
  }

  .cuk-bird-beak {
    position: absolute;
    left: -3px;
    top: 3px;
    width: 4px;
    height: 3px;
    background: #8cffaa;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
  }

  /* Clock dial & hands */
  .cuk-dial {
    position: absolute;
    bottom: 6px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #000802;
    border: 1.5px solid #d6ffe0;
    box-shadow: inset 0 0 6px rgba(0, 204, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cuk-hand-h {
    position: absolute;
    width: 1.5px;
    height: 7px;
    background: #ffffff;
    transform-origin: bottom center;
    transform: rotate(0deg);
  }

  .cuk-hand-m {
    position: absolute;
    width: 1.5px;
    height: 10px;
    background: #8cffaa;
    transform-origin: bottom center;
    transform: rotate(0deg);
  }

  /* Swinging carved leaf pendulum below */
  .cuk-pendulum-rod {
    position: absolute;
    bottom: -16px;
    left: 33px;
    width: 2px;
    height: 24px;
    background: #8cffaa;
    transform-origin: top center;
    animation: cuk-pendulum-swing 1.6s ease-in-out infinite alternate;
    z-index: 2;
  }

  @keyframes cuk-pendulum-swing {
    0% { transform: rotate(-14deg); }
    100% { transform: rotate(14deg); }
  }

  .cuk-leaf-bob {
    position: absolute;
    bottom: -4px;
    left: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50% 0 50% 0;
    background: #ffffff;
    border: 1px solid #008818;
    box-shadow: 0 0 6px #8cffaa;
  }

  /* Cast pinecone weights hanging on chains */
  .cuk-weight-l {
    position: absolute;
    bottom: 6px;
    left: 28px;
    width: 6px;
    height: 14px;
    background: linear-gradient(180deg, #d6ffe0, #005510);
    border-radius: 2px 2px 4px 4px;
    border: 1px solid #ffffff;
    z-index: 1;
  }

  .cuk-weight-r {
    position: absolute;
    bottom: 12px;
    right: 28px;
    width: 6px;
    height: 14px;
    background: linear-gradient(180deg, #d6ffe0, #005510);
    border-radius: 2px 2px 4px 4px;
    border: 1px solid #ffffff;
    z-index: 1;
  }

  /* Caption */
  .cuk-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptCuckooClock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cuckooClockStyles}</style>
      <div class="cuk">
        <div class="cuk-chalet">
          <div class="cuk-roof"></div>

          <div class="cuk-attic-door">
            <div class="cuk-bird-rig">
              <div class="cuk-bird-body">
                <div class="cuk-bird-beak"></div>
              </div>
            </div>
          </div>

          <div class="cuk-dial">
            <div class="cuk-hand-h"></div>
            <div class="cuk-hand-m"></div>
          </div>

          <div class="cuk-pendulum-rod">
            <div class="cuk-leaf-bob"></div>
          </div>
        </div>

        <div class="cuk-weight-l"></div>
        <div class="cuk-weight-r"></div>

        <div class="cuk-label">CUCKOO CLOCK 12:00</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cuckoo-clock')) {
  customElements.define('concept-cuckoo-clock', ConceptCuckooClock);
}
