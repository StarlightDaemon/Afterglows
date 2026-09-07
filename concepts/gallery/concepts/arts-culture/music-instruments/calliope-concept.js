const calliopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cal {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020803;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Boiler steam manifold header pipe */
  .cal-manifold {
    position: absolute;
    bottom: 16px;
    width: 96px;
    height: 12px;
    background: linear-gradient(180deg, #00aa22, #011d06);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    z-index: 3;
  }

  /* 5 Tuned brass whistle pipes of graduated heights */
  .cal-pipe-rig {
    position: absolute;
    bottom: 28px;
    width: 90px;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    z-index: 2;
  }

  .cal-pipe {
    width: 10px;
    background: linear-gradient(90deg, #005510, #8cffaa 40%, #008818 100%);
    border: 1.5px solid #d6ffe0;
    border-radius: 2px 2px 0 0;
    position: relative;
  }

  /* Whistle sound languid mouth slit */
  .cal-pipe::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 1px;
    right: 1px;
    height: 3px;
    background: #010602;
    border-bottom: 1px solid #ffffff;
  }

  .cal-pipe.p1 { height: 48px; }
  .cal-pipe.p2 { height: 40px; }
  .cal-pipe.p3 { height: 32px; }
  .cal-pipe.p4 { height: 26px; }
  .cal-pipe.p5 { height: 20px; }

  /* Puffing steam plumes jetting from pipe tops */
  .cal-steam-puff {
    position: absolute;
    width: 12px;
    height: 18px;
    border-radius: 50% 50% 20% 20%;
    background: radial-gradient(circle, #ffffff 0%, rgba(140, 255, 170, 0.7) 40%, transparent 80%);
    filter: drop-shadow(0 0 4px #8cffaa);
    transform-origin: bottom center;
  }

  .cal-steam-puff.pf1 { top: -20px; left: -1px; animation: cal-puff 1.4s ease-out infinite; animation-delay: 0s; }
  .cal-steam-puff.pf2 { top: -20px; left: -1px; animation: cal-puff 1.4s ease-out infinite; animation-delay: 0.35s; }
  .cal-steam-puff.pf3 { top: -20px; left: -1px; animation: cal-puff 1.4s ease-out infinite; animation-delay: 0.7s; }
  .cal-steam-puff.pf4 { top: -20px; left: -1px; animation: cal-puff 1.4s ease-out infinite; animation-delay: 1.05s; }
  .cal-steam-puff.pf5 { top: -20px; left: -1px; animation: cal-puff 1.4s ease-out infinite; animation-delay: 0.5s; }

  @keyframes cal-puff {
    0% { transform: scale(0.2) translateY(6px); opacity: 0; }
    20% { transform: scale(1.1) translateY(-4px); opacity: 1; filter: drop-shadow(0 0 8px #ffffff); }
    80% { transform: scale(1.4) translateY(-14px); opacity: 0.3; }
    100% { transform: scale(1.6) translateY(-20px); opacity: 0; }
  }

  /* Steam pressure gauge */
  .cal-gauge {
    position: absolute;
    top: 6px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptCalliope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${calliopeStyles}</style>
      <div class="cal">
        <div class="cal-gauge">STEAM: 120 PSI</div>

        <div class="cal-pipe-rig">
          <div class="cal-pipe p1">
            <div class="cal-steam-puff pf1"></div>
          </div>
          <div class="cal-pipe p2">
            <div class="cal-steam-puff pf2"></div>
          </div>
          <div class="cal-pipe p3">
            <div class="cal-steam-puff pf3"></div>
          </div>
          <div class="cal-pipe p4">
            <div class="cal-steam-puff pf4"></div>
          </div>
          <div class="cal-pipe p5">
            <div class="cal-steam-puff pf5"></div>
          </div>
        </div>

        <div class="cal-manifold"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-calliope')) {
  customElements.define('concept-calliope', ConceptCalliope);
}
