const solitaireStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ps-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #22140a 0%, #0a0603 100%);
    border: 1.5px solid rgba(255, 183, 77, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 183, 77, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ps-stage {
    position: relative;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    background: #3e2723;
    border: 2px solid #ffb74d;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 8px rgba(255, 183, 77, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Outer marble gutter groove */
  .ps-gutter {
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    border: 1px dashed rgba(255, 183, 77, 0.3);
  }

  /* 33-Hole Cross Grid */
  .ps-cross-grid {
    position: absolute;
    width: 50px;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 3px;
  }

  .ps-hole {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1a0f07;
    border: 0.5px solid #ffb74d;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ps-empty { visibility: hidden; }

  /* Marble peg sitting in hole */
  .ps-peg {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #4fc3f7;
    box-shadow: 0 0 4px #00e5ff;
  }

  /* Jumping peg performing a capture leap */
  .ps-jump-peg {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffd54f;
    box-shadow: 0 0 6px #ffd54f;
    animation: ps-leap-capture 3s ease-in-out infinite;
  }

  @keyframes ps-leap-capture {
    0%, 30% { top: 22px; left: 12px; transform: scale(1); }
    45% { top: 12px; left: 24px; transform: scale(1.3); }
    60%, 100% { top: 22px; left: 36px; transform: scale(1); }
  }

  .ps-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 183, 77, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPegSolitaire extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${solitaireStyles}</style>
      <div class="ps-box">
        <div class="ps-stage">
          <div class="ps-gutter"></div>

          <div class="ps-cross-grid">
            <div class="ps-hole ps-empty"></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole ps-empty"></div>

            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>

            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"></div> <!-- Center vacant hole -->
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>

            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>

            <div class="ps-hole ps-empty"></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole"><div class="ps-peg"></div></div>
            <div class="ps-hole ps-empty"></div>
          </div>

          <div class="ps-jump-peg"></div>
        </div>

        <div class="ps-label">CROSS PEG SOLITAIRE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-peg-solitaire')) {
  customElements.define('concept-peg-solitaire', ConceptPegSolitaire);
}
