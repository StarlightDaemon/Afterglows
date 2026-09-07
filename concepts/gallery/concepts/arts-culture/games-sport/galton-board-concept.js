const galtonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .glt {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #08140a 0%, #010602 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Funnel inlet at top */
  .glt-funnel {
    position: absolute;
    top: 6px;
    width: 22px;
    height: 8px;
    background: linear-gradient(180deg, #021a08, #053b14);
    border: 1px solid #00cc00;
    clip-path: polygon(0 0, 100% 0, 65% 100%, 35% 100%);
  }

  /* Triangular pegboard grid */
  .glt-peg-grid {
    position: absolute;
    top: 18px;
    width: 76px;
    height: 40px;
  }

  .glt-pin {
    position: absolute;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
  }

  /* Falling bouncing beads */
  .glt-bead {
    position: absolute;
    width: 7px;
    height: 7px;
    margin: -2px 0 0 -2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #00ff66, 0 0 4px #d6ffe0;
  }

  .b1 { animation: glt-bounce-1 1.6s ease-in-out infinite; }
  .b2 { animation: glt-bounce-2 1.6s ease-in-out infinite 0.4s; }
  .b3 { animation: glt-bounce-3 1.6s ease-in-out infinite 0.8s; }
  .b4 { animation: glt-bounce-4 1.6s ease-in-out infinite 1.2s; }

  @keyframes glt-bounce-1 {
    0% { top: 10px; left: 59px; opacity: 0; }
    15% { top: 22px; left: 57px; opacity: 1; }
    35% { top: 32px; left: 63px; }
    60% { top: 45px; left: 58px; }
    85% { top: 58px; left: 59px; }
    100% { top: 68px; left: 59px; opacity: 0; }
  }

  @keyframes glt-bounce-2 {
    0% { top: 10px; left: 59px; opacity: 0; }
    15% { top: 22px; left: 61px; opacity: 1; }
    35% { top: 32px; left: 55px; }
    60% { top: 45px; left: 51px; }
    85% { top: 58px; left: 48px; }
    100% { top: 68px; left: 48px; opacity: 0; }
  }

  @keyframes glt-bounce-3 {
    0% { top: 10px; left: 59px; opacity: 0; }
    15% { top: 22px; left: 57px; opacity: 1; }
    35% { top: 32px; left: 63px; }
    60% { top: 45px; left: 69px; }
    85% { top: 58px; left: 70px; }
    100% { top: 68px; left: 70px; opacity: 0; }
  }

  @keyframes glt-bounce-4 {
    0% { top: 10px; left: 59px; opacity: 0; }
    15% { top: 22px; left: 59px; opacity: 1; }
    35% { top: 32px; left: 59px; }
    60% { top: 45px; left: 59px; }
    85% { top: 58px; left: 59px; }
    100% { top: 68px; left: 59px; opacity: 0; }
  }

  /* Collection bins and histogram columns */
  .glt-bins {
    position: absolute;
    bottom: 16px;
    width: 78px;
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1.5px solid #00cc00;
  }

  .glt-bin-col {
    width: 7px;
    background: linear-gradient(180deg, #8cffaa 0%, rgba(0, 204, 0, 0.4) 100%);
    border: 1px solid #00ff66;
    border-bottom: none;
    border-radius: 1px 1px 0 0;
    box-shadow: 0 0 4px rgba(0, 255, 100, 0.3);
  }

  .c1 { height: 3px; }
  .c2 { height: 6px; }
  .c3 { height: 11px; }
  .c4 { height: 18px; }
  .c5 { height: 22px; background: linear-gradient(180deg, #ffffff 0%, #00ff66 100%); box-shadow: 0 0 6px #8cffaa; }
  .c6 { height: 18px; }
  .c7 { height: 11px; }
  .c8 { height: 6px; }
  .c9 { height: 3px; }

  /* Gaussian normal distribution curve overlay */
  .glt-bell-svg {
    position: absolute;
    bottom: 16px;
    width: 78px;
    height: 24px;
    pointer-events: none;
  }

  .glt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGaltonBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${galtonStyles}</style>
      <div class="glt">
        <div class="glt-funnel"></div>

        <div class="glt-peg-grid">
          <!-- Row 1 (1 pin) -->
          <div class="glt-pin" style="top: 2px; left: 37px;"></div>
          <!-- Row 2 (2 pins) -->
          <div class="glt-pin" style="top: 10px; left: 32px;"></div>
          <div class="glt-pin" style="top: 10px; left: 42px;"></div>
          <!-- Row 3 (3 pins) -->
          <div class="glt-pin" style="top: 18px; left: 27px;"></div>
          <div class="glt-pin" style="top: 18px; left: 37px;"></div>
          <div class="glt-pin" style="top: 18px; left: 47px;"></div>
          <!-- Row 4 (4 pins) -->
          <div class="glt-pin" style="top: 26px; left: 22px;"></div>
          <div class="glt-pin" style="top: 26px; left: 32px;"></div>
          <div class="glt-pin" style="top: 26px; left: 42px;"></div>
          <div class="glt-pin" style="top: 26px; left: 52px;"></div>
          <!-- Row 5 (5 pins) -->
          <div class="glt-pin" style="top: 34px; left: 17px;"></div>
          <div class="glt-pin" style="top: 34px; left: 27px;"></div>
          <div class="glt-pin" style="top: 34px; left: 37px;"></div>
          <div class="glt-pin" style="top: 34px; left: 47px;"></div>
          <div class="glt-pin" style="top: 34px; left: 57px;"></div>
        </div>

        <div class="glt-bead b1"></div>
        <div class="glt-bead b2"></div>
        <div class="glt-bead b3"></div>
        <div class="glt-bead b4"></div>

        <div class="glt-bins">
          <div class="glt-bin-col c1"></div>
          <div class="glt-bin-col c2"></div>
          <div class="glt-bin-col c3"></div>
          <div class="glt-bin-col c4"></div>
          <div class="glt-bin-col c5"></div>
          <div class="glt-bin-col c6"></div>
          <div class="glt-bin-col c7"></div>
          <div class="glt-bin-col c8"></div>
          <div class="glt-bin-col c9"></div>
        </div>

        <svg class="glt-bell-svg" viewBox="0 0 78 24">
          <path d="M 2 23 Q 39 -2 76 23" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="2 1.5" />
        </svg>

        <div class="glt-label">GALTON QUINCUNX</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-galton-board')) {
  customElements.define('concept-galton-board', ConceptGaltonBoard);
}
