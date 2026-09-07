const foosballStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fsb {
    width: 116px;
    height: 98px;
    position: relative;
    overflow: hidden;
  }

  .fsb-pitch {
    position: absolute;
    inset: 8px;
    border-radius: 4px;
    background: radial-gradient(circle at 50% 50%, rgba(0, 100, 22, 0.9), rgba(0, 30, 6, 0.98));
    border: 2px solid var(--accent, #00cc00);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 204, 0, 0.3);
  }

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

  .fsb-goal {
    position: absolute;
    right: 0;
    top: 24px;
    width: 8px;
    height: 34px;
    border-left: 2px solid rgba(190, 255, 205, 1);
    background: rgba(0, 20, 4, 0.9);
  }

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

  .fsb-rod {
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 2.5px;
    background: linear-gradient(90deg, rgba(190, 255, 205, 1), rgba(140, 255, 170, 0.8));
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
  }

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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Foosball table with emerald pitch, chrome rod, red & blue molded players,
     and ivory cork soccer ball */
  .fsbc {
    width: 116px;
    height: 98px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Emerald football pitch */
  .fsbc-pitch {
    position: absolute;
    inset: 8px;
    border-radius: 4px;
    background: radial-gradient(circle at 50% 50%, #16a34a 0%, #15803d 60%, #14532d 100%);
    border: 2px solid #22c55e;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.8);
  }

  /* Field markings */
  .fsbc-center-circle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 28px;
    height: 28px;
    margin-left: -14px;
    margin-top: -14px;
    border-radius: 50%;
    border: 1.5px dashed rgba(255, 255, 255, 0.6);
  }

  .fsbc-half-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1.5px;
    background: rgba(255, 255, 255, 0.6);
  }

  /* Goal pocket */
  .fsbc-goal {
    position: absolute;
    right: 0;
    top: 24px;
    width: 8px;
    height: 34px;
    border-left: 2.5px solid #ffffff;
    background: #020617;
    box-shadow: inset 0 0 6px #000000;
  }

  /* Sliding rod */
  .fsbc-rod-rig {
    position: absolute;
    left: 42px;
    top: 0;
    bottom: 0;
    width: 18px;
    animation: fsbc-rod-slide 2.8s ease-in-out infinite alternate;
    z-index: 4;
  }

  @keyframes fsbc-rod-slide {
    0% { transform: translateY(-8px); }
    100% { transform: translateY(8px); }
  }

  /* Chrome steel rod */
  .fsbc-rod {
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 2.5px;
    background: linear-gradient(90deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%);
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
  }

  /* Red & Blue molded players */
  .fsbc-player {
    position: absolute;
    left: 2px;
    width: 14px;
    height: 16px;
    border-radius: 3px;
    transform-origin: center center;
    animation: fsbc-flip-kick 2.8s cubic-bezier(0.2, 0.9, 0.3, 1) infinite;
  }

  .fsbc-player.p1 {
    top: 12px;
    background: linear-gradient(180deg, #ef4444 0%, #dc2626 60%, #991b1b 100%);
    border: 1px solid #f87171;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  .fsbc-player.p2 {
    top: 38px;
    background: linear-gradient(180deg, #3b82f6 0%, #2563eb 60%, #1d4ed8 100%);
    border: 1px solid #60a5fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  .fsbc-player.p3 {
    top: 64px;
    background: linear-gradient(180deg, #ef4444 0%, #dc2626 60%, #991b1b 100%);
    border: 1px solid #f87171;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  @keyframes fsbc-flip-kick {
    0%, 35% { transform: scaleX(1) rotate(0deg); }
    45% { transform: scaleX(0.2) rotate(90deg); }
    55% { transform: scaleX(1) rotate(360deg); }
    100% { transform: scaleX(1) rotate(360deg); }
  }

  /* White soccer ball */
  .fsbc-ball {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #cbd5e1 70%, #94a3b8 100%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.9);
    z-index: 5;
    animation: fsbc-ball-path 2.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes fsbc-ball-path {
    0% { left: 24px; top: 34px; }
    45% { left: 44px; top: 44px; }
    55% { left: 82px; top: 18px; }
    75% { left: 96px; top: 40px; }
    85% { left: 92px; top: 42px; opacity: 1; }
    100% { left: 24px; top: 34px; opacity: 1; }
  }
  `,
};

const foosballMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="fsbc">
        <div class="fsbc-pitch">
          <div class="fsbc-center-circle"></div>
          <div class="fsbc-half-line"></div>
          <div class="fsbc-goal"></div>
          <div class="fsbc-rod-rig">
            <div class="fsbc-rod"></div>
            <div class="fsbc-player p1"></div>
            <div class="fsbc-player p2"></div>
            <div class="fsbc-player p3"></div>
          </div>
          <div class="fsbc-ball"></div>
        </div>
      </div>
    `,
};

class ConceptFoosball extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${foosballStyles[version] || foosballStyles.v2}</style>${foosballMarkup[version] || foosballMarkup.v2}`;
  }
}

if (!customElements.get('concept-foosball')) {
  customElements.define('concept-foosball', ConceptFoosball);
}
