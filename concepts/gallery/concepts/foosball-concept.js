const foosballStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A high-speed foosball table action snapshot: a steel rod with three molded
     players translates laterally and snaps through 360° flip-kicks, striking a
     cork ball into a goal-line bank ricochet. */
  .fsb {
    width: 116px;
    height: 98px;
    position: relative;
    overflow: hidden;
  }

  /* Foosball green pitch field */
  .fsb-pitch {
    position: absolute;
    inset: 8px;
    border-radius: 4px;
    background: radial-gradient(circle at 50% 50%, rgba(0, 100, 22, 0.9), rgba(0, 30, 6, 0.98));
    border: 2px solid var(--accent, #00cc00);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 204, 0, 0.3);
  }

  /* Pitch center circle & field markings */
  .fsb-center-circle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 28px;
    height: 28px;
    margin-left: -14px;
    margin-top: -14px;
    border-radius: 50%;
    border: 1px dashed rgba(140, 255, 170, 0.5);
  }

  .fsb-half-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(140, 255, 170, 0.5);
  }

  /* Goal pocket at right */
  .fsb-goal {
    position: absolute;
    right: 0;
    top: 24px;
    width: 8px;
    height: 34px;
    border-left: 2px solid rgba(190, 255, 205, 1);
    background: rgba(0, 20, 4, 0.9);
  }

  /* Moving steel rod with 3 player men */
  .fsb-rod-rig {
    position: absolute;
    left: 42px;
    top: 0;
    bottom: 0;
    width: 18px;
    animation: fsb-rod-slide 2.8s ease-in-out infinite alternate;
    z-index: 4;
  }

  @keyframes fsb-rod-slide {
    0% { transform: translateY(-8px); }
    100% { transform: translateY(8px); }
  }

  /* Steel rod shaft */
  .fsb-rod {
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 2.5px;
    background: linear-gradient(90deg, rgba(190, 255, 205, 1), rgba(140, 255, 170, 0.8));
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
  }

  /* Molded player figures running rapid flip-kick spin */
  .fsb-player {
    position: absolute;
    left: 2px;
    width: 14px;
    height: 16px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 1), rgba(0, 150, 30, 0.9));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.8);
    transform-origin: center center;
    animation: fsb-flip-kick 2.8s cubic-bezier(0.2, 0.9, 0.3, 1) infinite;
  }

  .fsb-player.p1 { top: 12px; }
  .fsb-player.p2 { top: 38px; }
  .fsb-player.p3 { top: 64px; }

  @keyframes fsb-flip-kick {
    0%, 35% { transform: scaleX(1) rotate(0deg); }
    45% { transform: scaleX(0.2) rotate(90deg); }
    55% { transform: scaleX(1) rotate(360deg); }
    100% { transform: scaleX(1) rotate(360deg); }
  }

  /* Rapid cork ball ricocheting across table */
  .fsb-ball {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, rgba(190, 255, 205, 1), rgba(140, 255, 170, 0.9));
    box-shadow: 0 0 8px rgba(140, 255, 170, 1);
    z-index: 5;
    animation: fsb-ball-path 2.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes fsb-ball-path {
    0% { left: 24px; top: 34px; }
    45% { left: 44px; top: 44px; }
    55% { left: 82px; top: 18px; }
    75% { left: 96px; top: 40px; }
    85% { left: 92px; top: 42px; opacity: 1; }
    100% { left: 24px; top: 34px; opacity: 1; }
  }
`;

class ConceptFoosball extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${foosballStyles}</style>
      <div class="fsb">
        <div class="fsb-pitch">
          <div class="fsb-center-circle"></div>
          <div class="fsb-half-line"></div>
          <div class="fsb-goal"></div>
          <div class="fsb-rod-rig">
            <div class="fsb-rod"></div>
            <div class="fsb-player p1"></div>
            <div class="fsb-player p2"></div>
            <div class="fsb-player p3"></div>
          </div>
          <div class="fsb-ball"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-foosball')) {
  customElements.define('concept-foosball', ConceptFoosball);
}
