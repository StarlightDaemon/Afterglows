const pacmanStyles = {
  legacy: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pac {
    position: relative;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, var(--accent, #00cc00) 0 45deg, transparent 45deg 135deg, var(--accent, #00cc00) 135deg 360deg);
    box-shadow: 0 0 12px rgba(0, 204, 0, 0.28);
    animation: pac-chomp 0.45s ease-in-out infinite;
  }

  .pac::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 20px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #021702;
  }

  .pac-scene {
    width: 100px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    position: relative;
  }

  .pac-trail {
    position: absolute;
    left: 44px;
    right: 0;
    top: 50%;
    height: 10px;
    transform: translateY(-50%);
    overflow: hidden;
  }

  .pac-dots {
    position: absolute;
    left: 0;
    top: 50%;
    display: flex;
    gap: 12px;
    transform: translateY(-50%);
    animation: pac-dots-move 1.2s linear infinite;
  }

  .pac-dots span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #caffad;
    box-shadow: 0 0 6px rgba(202, 255, 173, 0.45);
  }

  .pac-basic {
    width: 0;
    height: 0;
    border: 20px solid var(--accent, #00cc00);
    border-right-color: transparent;
    border-radius: 50%;
    animation: eat 0.5s infinite;
  }

  @keyframes pac-chomp {
    0%, 100% {
      transform: rotate(0deg);
      background: conic-gradient(from 0deg, var(--accent, #00cc00) 0 45deg, transparent 45deg 135deg, var(--accent, #00cc00) 135deg 360deg);
    }
    50% {
      transform: rotate(0deg);
      background: conic-gradient(from 0deg, var(--accent, #00cc00) 0 77deg, transparent 77deg 103deg, var(--accent, #00cc00) 103deg 360deg);
    }
  }

  @keyframes pac-dots-move {
    0% { transform: translateY(-50%) translateX(0); opacity: 1; }
    100% { transform: translateY(-50%) translateX(-36px); opacity: 0.55; }
  }

  @keyframes eat {
    50% { transform: rotate(360deg) }
  }
`,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pac {
    position: relative;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, var(--accent, #00cc00) 0 45deg, transparent 45deg 135deg, var(--accent, #00cc00) 135deg 360deg);
    box-shadow: 0 0 12px rgba(0, 204, 0, 0.28);
    animation: pac-chomp 0.45s ease-in-out infinite;
  }

  .pac::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 20px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #021702;
  }

  .pac-scene {
    width: 112px;
    height: 48px;
    position: relative;
  }

  .pac-scene .pac {
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -21px;
    animation: pac-travel 2.4s linear infinite;
  }

  @keyframes pac-travel {
    0% { left: 0; }
    100% { left: 66px; }
  }

  .pac-trail {
    position: absolute;
    left: 44px;
    right: 0;
    top: 50%;
    height: 10px;
    transform: translateY(-50%);
  }

  .pac-dot {
    position: absolute;
    top: 50%;
    width: 6px;
    height: 6px;
    margin-top: -3px;
    border-radius: 50%;
    background: #caffad;
    box-shadow: 0 0 6px rgba(202, 255, 173, 0.45);
  }

  .pac-dot.d1 { left: 0px; animation: pac-eat-1 2.4s steps(1) infinite; }
  .pac-dot.d2 { left: 16px; animation: pac-eat-2 2.4s steps(1) infinite; }
  .pac-dot.d3 { left: 32px; animation: pac-eat-3 2.4s steps(1) infinite; }
  .pac-dot.d4 { left: 48px; animation: pac-eat-4 2.4s steps(1) infinite; }

  @keyframes pac-eat-1 { 0%, 2% { opacity: 1; } 3%, 100% { opacity: 0; } }
  @keyframes pac-eat-2 { 0%, 26% { opacity: 1; } 27%, 100% { opacity: 0; } }
  @keyframes pac-eat-3 { 0%, 51% { opacity: 1; } 52%, 100% { opacity: 0; } }
  @keyframes pac-eat-4 { 0%, 75% { opacity: 1; } 76%, 100% { opacity: 0; } }

  @keyframes pac-chomp {
    0%, 100% {
      transform: rotate(0deg);
      background: conic-gradient(from 0deg, var(--accent, #00cc00) 0 45deg, transparent 45deg 135deg, var(--accent, #00cc00) 135deg 360deg);
    }
    50% {
      transform: rotate(0deg);
      background: conic-gradient(from 0deg, var(--accent, #00cc00) 0 77deg, transparent 77deg 103deg, var(--accent, #00cc00) 103deg 360deg);
    }
  }
`,
  v4: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v4: Classic 1980 Arcade Palette ---
     Golden-yellow Pac-Man, glowing peach pellet dots, and authentic arcade red Blinky ghost. */
  .pacc-scene {
    width: 112px;
    height: 48px;
    position: relative;
  }

  .pacc {
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -21px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #fbbf24 0 45deg, transparent 45deg 135deg, #fbbf24 135deg 360deg);
    box-shadow: 0 0 14px rgba(251, 191, 36, 0.6);
    animation: pacc-chomp 0.45s ease-in-out infinite, pac-travel 2.4s linear infinite;
  }

  .pacc::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 20px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #020617;
  }

  @keyframes pacc-chomp {
    0%, 100% {
      background: conic-gradient(from 0deg, #fbbf24 0 45deg, transparent 45deg 135deg, #fbbf24 135deg 360deg);
    }
    50% {
      background: conic-gradient(from 0deg, #fbbf24 0 77deg, transparent 77deg 103deg, #fbbf24 103deg 360deg);
    }
  }

  @keyframes pac-travel {
    0% { left: 0; }
    100% { left: 66px; }
  }

  .pacc-trail {
    position: absolute;
    left: 44px;
    right: 0;
    top: 50%;
    height: 10px;
    transform: translateY(-50%);
  }

  .pacc-dot {
    position: absolute;
    top: 50%;
    width: 6px;
    height: 6px;
    margin-top: -3px;
    border-radius: 50%;
    background: #ffedd5;
    box-shadow: 0 0 8px rgba(254, 215, 170, 0.9), 0 0 14px rgba(251, 191, 36, 0.5);
  }

  .pacc-dot.d1 { left: 0px; animation: pac-eat-1 2.4s steps(1) infinite; }
  .pacc-dot.d2 { left: 16px; animation: pac-eat-2 2.4s steps(1) infinite; }
  .pacc-dot.d3 { left: 32px; animation: pac-eat-3 2.4s steps(1) infinite; }
  .pacc-dot.d4 { left: 48px; animation: pac-eat-4 2.4s steps(1) infinite; }

  @keyframes pac-eat-1 { 0%, 2% { opacity: 1; } 3%, 100% { opacity: 0; } }
  @keyframes pac-eat-2 { 0%, 26% { opacity: 1; } 27%, 100% { opacity: 0; } }
  @keyframes pac-eat-3 { 0%, 51% { opacity: 1; } 52%, 100% { opacity: 0; } }
  @keyframes pac-eat-4 { 0%, 75% { opacity: 1; } 76%, 100% { opacity: 0; } }

  /* Blinky gives chase a fixed distance behind Pac-Man. */
  .pacc-ghost {
    position: absolute;
    top: 50%;
    margin-top: -13px;
    width: 26px;
    height: 26px;
    background: #ef4444;
    border-radius: 13px 13px 3px 3px;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.55);
    animation: ghost-chase 2.4s linear infinite;
  }

  /* Eyes with pupils fixed on Pac-Man ahead; pupil gradients painted
     first so they sit on top of the white eyeballs. */
  .pacc-ghost::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 2px;
    width: 22px;
    height: 10px;
    background:
      radial-gradient(circle at 8px 5px, #1e3a8a 0 1.8px, transparent 2.3px),
      radial-gradient(circle at 18px 5px, #1e3a8a 0 1.8px, transparent 2.3px),
      radial-gradient(circle at 6.5px 5px, #ffffff 0 3.6px, transparent 4.2px),
      radial-gradient(circle at 16.5px 5px, #ffffff 0 3.6px, transparent 4.2px);
  }

  /* Scalloped skirt hem. */
  .pacc-ghost::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px;
    height: 6px;
    background:
      radial-gradient(circle at 4.5px 0, #ef4444 0 4px, transparent 4.6px),
      radial-gradient(circle at 13px 0, #ef4444 0 4px, transparent 4.6px),
      radial-gradient(circle at 21.5px 0, #ef4444 0 4px, transparent 4.6px);
  }

  @keyframes ghost-chase {
    0% { left: -32px; }
    100% { left: 34px; }
  }
`,
};

const pacmanMarkup = {
  v1: `
    <div class="pac-basic"></div>
  `,
  v2: `
    <div class="pac-scene">
      <div class="pac"></div>
      <div class="pac-trail">
        <div class="pac-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `,
  v3: `
    <div class="pac-scene">
      <div class="pac-trail">
        <div class="pac-dot d1"></div>
        <div class="pac-dot d2"></div>
        <div class="pac-dot d3"></div>
        <div class="pac-dot d4"></div>
      </div>
      <div class="pac"></div>
    </div>
  `,
  v4: `
    <div class="pacc-scene">
      <div class="pacc-trail">
        <div class="pacc-dot d1"></div>
        <div class="pacc-dot d2"></div>
        <div class="pacc-dot d3"></div>
        <div class="pacc-dot d4"></div>
      </div>
      <div class="pacc-ghost"></div>
      <div class="pacc"></div>
    </div>
  `,
};

class ConceptPacman extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() {
    const version = this.getAttribute('version') || 'v4';
    const legacy = version === 'v1' || version === 'v2';
    const styles = legacy ? pacmanStyles.legacy : (pacmanStyles[version] || pacmanStyles.v4);
    const markup = pacmanMarkup[version] || pacmanMarkup.v4;
    this.shadowRoot.innerHTML = `<style>${styles}</style>${markup}`;
  }
}

if (!customElements.get('concept-pacman')) {
  customElements.define('concept-pacman', ConceptPacman);
}
