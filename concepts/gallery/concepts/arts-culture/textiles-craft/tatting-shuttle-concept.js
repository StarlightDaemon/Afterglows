const tattingShuttleStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tat {
    width: 116px;
    height: 98px;
    position: relative;
  }

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

  .tat-shuttle {
    position: absolute;
    inset: 0;
    border-radius: 50% 50% 50% 50% / 80% 80% 80% 80%;
    background: radial-gradient(ellipse at center, rgba(190, 255, 205, 0.95), rgba(0, 150, 30, 0.9) 60%, rgba(0, 40, 8, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.4);
  }

  .tat-pick {
    position: absolute;
    right: -4px;
    top: 7px;
    width: 6px;
    height: 3px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: rgba(190, 255, 205, 1);
  }

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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Amber tortoiseshell tatting shuttle with ivory picot lace ring,
     gold bobbin, and figure-8 looping motion */
  .tatc {
    width: 116px;
    height: 98px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Ivory core thread loop */
  .tatc-core-loop {
    position: absolute;
    left: 14px;
    top: 40px;
    width: 88px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #fef3c7;
    box-shadow: 0 0 4px #fde047;
    border-bottom: none;
    z-index: 2;
  }

  /* Chained lace ring */
  .tatc-lace-ring {
    position: absolute;
    left: 18px;
    top: 24px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px dashed #ffffff;
    box-shadow: 0 0 8px rgba(254, 240, 138, 0.8);
    z-index: 3;
  }

  /* Decorative picot micro-loops */
  .tatc-picot {
    position: absolute;
    width: 6px;
    height: 6px;
    border: 1.5px solid #fef08a;
    border-radius: 50%;
    animation: tatc-picot-pop 3.2s ease-in-out infinite;
  }

  .tatc-picot.p1 { left: 4px; top: 0; }
  .tatc-picot.p2 { right: 2px; top: 6px; }
  .tatc-picot.p3 { left: 14px; bottom: -2px; }

  @keyframes tatc-picot-pop {
    0%, 100% { transform: scale(0.85); opacity: 0.7; }
    50% { transform: scale(1.2); opacity: 1; filter: drop-shadow(0 0 4px #facc15); }
  }

  /* Shuttle figure-8 orbit */
  .tatc-shuttle-orbit {
    position: absolute;
    left: 45px;
    top: 30px;
    width: 32px;
    height: 18px;
    z-index: 5;
    animation: tatc-fig8 3.2s ease-in-out infinite;
  }

  @keyframes tatc-fig8 {
    0% { transform: translate(0, 0) rotate(15deg); }
    25% { transform: translate(22px, -14px) rotate(45deg); }
    50% { transform: translate(32px, 12px) rotate(10deg); }
    75% { transform: translate(10px, 20px) rotate(-35deg); }
    100% { transform: translate(0, 0) rotate(15deg); }
  }

  /* Amber resin shuttle hull */
  .tatc-shuttle {
    position: absolute;
    inset: 0;
    border-radius: 50% 50% 50% 50% / 80% 80% 80% 80%;
    background: radial-gradient(ellipse at center, #fde047 0%, #d97706 50%, #78350f 100%);
    border: 1.5px solid #facc15;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8), 0 0 6px rgba(250, 204, 21, 0.4);
  }

  .tatc-pick {
    position: absolute;
    right: -4px;
    top: 7px;
    width: 6px;
    height: 3px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: #fef08a;
  }

  /* Golden spool bobbin */
  .tatc-bobbin {
    position: absolute;
    left: 8px;
    top: 4px;
    width: 14px;
    height: 8px;
    border-radius: 4px;
    background: repeating-linear-gradient(90deg, #fef3c7 0 2px, #ca8a04 2px 4px);
    border: 1px solid #eab308;
  }

  /* Active thread strand */
  .tatc-active-thread {
    position: absolute;
    left: 36px;
    top: 36px;
    width: 30px;
    height: 24px;
    border-bottom: 1.5px solid #fef3c7;
    border-left: 1.5px solid #fef3c7;
    box-shadow: 0 0 3px #fde047;
    border-radius: 0 0 0 12px;
    animation: tatc-thread-cinch 3.2s ease-in-out infinite;
  }

  @keyframes tatc-thread-cinch {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(0.6) translate(10px, 4px); opacity: 1; }
  }
  `,
};

const tattingShuttleMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="tatc">
        <div class="tatc-core-loop"></div>
        <div class="tatc-lace-ring">
          <div class="tatc-picot p1"></div>
          <div class="tatc-picot p2"></div>
          <div class="tatc-picot p3"></div>
        </div>
        <div class="tatc-active-thread"></div>
        <div class="tatc-shuttle-orbit">
          <div class="tatc-shuttle">
            <div class="tatc-bobbin"></div>
          </div>
          <div class="tatc-pick"></div>
        </div>
      </div>
    `,
};

class ConceptTattingShuttle extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${tattingShuttleStyles[version] || tattingShuttleStyles.v2}</style>${tattingShuttleMarkup[version] || tattingShuttleMarkup.v2}`;
  }
}

if (!customElements.get('concept-tatting-shuttle')) {
  customElements.define('concept-tatting-shuttle', ConceptTattingShuttle);
}
