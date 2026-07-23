const tetrisStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tetris {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Playfield well: 6 columns x 9 rows of 9px cells (54 x 81). */
  .tetris-well {
    position: relative;
    width: 56px;
    height: 83px;
    border: 1px solid rgba(140, 255, 170, 0.55);
    border-top: none;
    background: linear-gradient(180deg, rgba(2, 10, 3, 0.6), rgba(4, 17, 6, 0.9));
    overflow: hidden;
  }

  .tetris-cell {
    position: absolute;
    width: 8px;
    height: 8px;
    border: 1px solid rgba(160, 255, 185, 0.8);
    background: rgba(30, 110, 55, 0.7);
    box-sizing: border-box;
  }

  /* Settled stack (irregular, with a T-shaped hole at columns 2-4). */
  .tetris-cell.s1 { left: 1px;  top: 73px; }
  .tetris-cell.s2 { left: 10px; top: 73px; }
  .tetris-cell.s3 { left: 46px; top: 73px; }
  .tetris-cell.s4 { left: 1px;  top: 64px; }
  .tetris-cell.s5 { left: 46px; top: 64px; }
  .tetris-cell.s6 { left: 37px; top: 73px; }
  .tetris-cell.s7 { left: 1px;  top: 55px; }

  /* Falling T-piece: drops in discrete steps, then locks into the hole.
     The lock flash and the piece share one 4.5s cycle. */
  .tetris-piece {
    position: absolute;
    top: -18px;
    left: 10px;
    width: 27px;
    height: 18px;
    animation: tetris-fall 4.5s steps(8, end) infinite;
  }

  .tetris-piece .tetris-cell.p1 { left: 9px;  top: 0; }
  .tetris-piece .tetris-cell.p2 { left: 0;    top: 9px; }
  .tetris-piece .tetris-cell.p3 { left: 9px;  top: 9px; }
  .tetris-piece .tetris-cell.p4 { left: 18px; top: 9px; }

  .tetris-piece .tetris-cell {
    background: rgba(120, 230, 110, 0.9);
    box-shadow: 0 0 5px rgba(140, 255, 130, 0.5);
  }

  /* Landing flash where the piece locks in. */
  .tetris-flash {
    position: absolute;
    left: 10px;
    top: 55px;
    width: 27px;
    height: 18px;
    background: rgba(216, 255, 187, 0.9);
    opacity: 0;
    animation: tetris-flash 4.5s linear infinite;
  }

  /* Next-piece preview floating beside the well. */
  .tetris-next {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 20px;
    height: 20px;
    border: 1px dashed rgba(0, 204, 0, 0.35);
  }

  .tetris-next .tetris-cell { width: 6px; height: 6px; }
  .tetris-next .tetris-cell.n1 { left: 3px; top: 3px; }
  .tetris-next .tetris-cell.n2 { left: 9px; top: 3px; }
  .tetris-next .tetris-cell.n3 { left: 3px; top: 9px; }
  .tetris-next .tetris-cell.n4 { left: 9px; top: 9px; }

  .tetris-next .tetris-cell {
    background: rgba(30, 110, 55, 0.55);
    animation: tetris-next 4.5s ease-in-out infinite;
  }

  /* Score readout ticking up each lock. */
  .tetris-score {
    position: absolute;
    top: 6px;
    left: 6px;
    font-family: monospace;
    font-size: 8px;
    color: rgba(140, 255, 170, 0.7);
    animation: tetris-score 4.5s linear infinite;
  }

  /* 8 steps of 9px: from spawn (-18px) down to lock at top 55px
     relative to the well = 73px of travel. */
  @keyframes tetris-fall {
    0% { transform: translateY(0); opacity: 1; }
    72% { transform: translateY(73px); opacity: 1; }
    73%, 82% { transform: translateY(73px); opacity: 0; }
    83%, 100% { transform: translateY(0); opacity: 0; }
  }

  @keyframes tetris-flash {
    0%, 71% { opacity: 0; }
    74% { opacity: 0.95; }
    78% { opacity: 0.25; }
    81% { opacity: 0.8; }
    86%, 100% { opacity: 0; }
  }

  @keyframes tetris-next {
    0%, 70% { opacity: 1; }
    74%, 82% { opacity: 0.25; }
    88%, 100% { opacity: 1; }
  }

  @keyframes tetris-score {
    0%, 73% { opacity: 0.7; }
    75%, 80% { opacity: 1; text-shadow: 0 0 5px rgba(140, 255, 170, 0.8); }
    84%, 100% { opacity: 0.7; }
  }
`;

class ConceptTetris extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tetrisStyles}</style>
      <div class="tetris">
        <span class="tetris-score">0400</span>
        <div class="tetris-next">
          <div class="tetris-cell n1"></div>
          <div class="tetris-cell n2"></div>
          <div class="tetris-cell n3"></div>
          <div class="tetris-cell n4"></div>
        </div>
        <div class="tetris-well">
          <div class="tetris-cell s1"></div>
          <div class="tetris-cell s2"></div>
          <div class="tetris-cell s3"></div>
          <div class="tetris-cell s4"></div>
          <div class="tetris-cell s5"></div>
          <div class="tetris-cell s6"></div>
          <div class="tetris-cell s7"></div>
          <div class="tetris-piece">
            <div class="tetris-cell p1"></div>
            <div class="tetris-cell p2"></div>
            <div class="tetris-cell p3"></div>
            <div class="tetris-cell p4"></div>
          </div>
          <div class="tetris-flash"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tetris')) {
  customElements.define('concept-tetris', ConceptTetris);
}
