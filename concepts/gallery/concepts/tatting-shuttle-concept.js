const tattingShuttleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A boat-shaped tatting shuttle forming lace: darting in a continuous figure-8
     orbit around a tensioned core thread loop, flipping half-hitch knots and
     cinching double stitches with protruding decorative picot loops. */
  .tat {
    width: 116px;
    height: 98px;
    position: relative;
  }

  /* Hand loop core thread spanning across frame */
  .tat-core-loop {
    position: absolute;
    left: 14px;
    top: 40px;
    width: 88px;
    height: 32px;
    border-radius: 50%;
    border: 1.5px solid rgba(140, 255, 170, 0.9);
    border-bottom: none;
    z-index: 2;
  }

  /* Formed lace ring with delicate picot loops */
  .tat-lace-ring {
    position: absolute;
    left: 18px;
    top: 24px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px dashed rgba(190, 255, 205, 0.9);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.6);
    z-index: 3;
  }

  /* Decorative picot micro-loops protruding outward */
  .tat-picot {
    position: absolute;
    width: 6px;
    height: 6px;
    border: 1.5px solid rgba(190, 255, 205, 1);
    border-radius: 50%;
    animation: tat-picot-pop 3.2s ease-in-out infinite;
  }

  .tat-picot.p1 { left: 4px; top: 0; }
  .tat-picot.p2 { right: 2px; top: 6px; }
  .tat-picot.p3 { left: 14px; bottom: -2px; }

  @keyframes tat-picot-pop {
    0%, 100% { transform: scale(0.85); opacity: 0.7; }
    50% { transform: scale(1.2); opacity: 1; filter: drop-shadow(0 0 3px rgba(140, 255, 170, 1)); }
  }

  /* Orbiting boat-shaped shuttle carrier executing figure-8 path */
  .tat-shuttle-orbit {
    position: absolute;
    left: 45px;
    top: 30px;
    width: 32px;
    height: 18px;
    z-index: 5;
    animation: tat-fig8 3.2s ease-in-out infinite;
  }

  @keyframes tat-fig8 {
    0% { transform: translate(0, 0) rotate(15deg); }
    25% { transform: translate(22px, -14px) rotate(45deg); }
    50% { transform: translate(32px, 12px) rotate(10deg); }
    75% { transform: translate(10px, 20px) rotate(-35deg); }
    100% { transform: translate(0, 0) rotate(15deg); }
  }

  /* Boat-shaped shuttle hull */
  .tat-shuttle {
    position: absolute;
    inset: 0;
    border-radius: 50% 50% 50% 50% / 80% 80% 80% 80%;
    background: radial-gradient(ellipse at center, rgba(190, 255, 205, 0.95), rgba(0, 150, 30, 0.9) 60%, rgba(0, 40, 8, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.4);
  }

  /* Pointed pick beak on shuttle tip */
  .tat-pick {
    position: absolute;
    right: -4px;
    top: 7px;
    width: 6px;
    height: 3px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: rgba(190, 255, 205, 1);
  }

  /* Internal thread bobbin window */
  .tat-bobbin {
    position: absolute;
    left: 8px;
    top: 4px;
    width: 14px;
    height: 8px;
    border-radius: 4px;
    background: repeating-linear-gradient(90deg, rgba(140, 255, 170, 0.9) 0 2px, rgba(0, 70, 14, 0.9) 2px 4px);
    border: 1px solid var(--accent, #00cc00);
  }

  /* Active thread strand pulling from shuttle */
  .tat-active-thread {
    position: absolute;
    left: 36px;
    top: 36px;
    width: 30px;
    height: 24px;
    border-bottom: 1.5px solid rgba(140, 255, 170, 0.9);
    border-left: 1.5px solid rgba(140, 255, 170, 0.9);
    border-radius: 0 0 0 12px;
    animation: tat-thread-cinch 3.2s ease-in-out infinite;
  }

  @keyframes tat-thread-cinch {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(0.6) translate(10px, 4px); opacity: 1; }
  }
`;

class ConceptTattingShuttle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tattingShuttleStyles}</style>
      <div class="tat">
        <div class="tat-core-loop"></div>
        <div class="tat-lace-ring">
          <div class="tat-picot p1"></div>
          <div class="tat-picot p2"></div>
          <div class="tat-picot p3"></div>
        </div>
        <div class="tat-active-thread"></div>
        <div class="tat-shuttle-orbit">
          <div class="tat-shuttle">
            <div class="tat-bobbin"></div>
          </div>
          <div class="tat-pick"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tatting-shuttle')) {
  customElements.define('concept-tatting-shuttle', ConceptTattingShuttle);
}
