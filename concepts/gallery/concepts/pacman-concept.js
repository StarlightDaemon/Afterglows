const pacmanStyles = {
  /* Shared by v1 and v2: the pre-refinement sheet, preserved verbatim. */
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

  /* Pac-Man himself travels across the dot row and eats each one as his
     mouth reaches it, rather than sitting still while dots drift past. */
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

  /* Each dot sits at a fixed spot on the row and vanishes the instant
     Pac-Man's leading (right) edge reaches it. pac-travel moves that
     edge from scene-x 42 to 108 over 2.4s linearly, so each dot's own
     keyframe percentage is solved directly from its position - no
     animation-delay juggling, which is what made the previous attempt
     drift out of sync. */
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

  /* Trail dots sit at scene-x 44, 60, 76, 92; Pac-Man's right edge
     reaches each at t = (x - 42) / 66 * 2.4s -> 3%, 27%, 52%, 76%. */
  .pac-dot.d1 { left: 0px; animation: pac-eat-1 2.4s steps(1) infinite; }
  .pac-dot.d2 { left: 16px; animation: pac-eat-2 2.4s steps(1) infinite; }
  .pac-dot.d3 { left: 32px; animation: pac-eat-3 2.4s steps(1) infinite; }
  .pac-dot.d4 { left: 48px; animation: pac-eat-4 2.4s steps(1) infinite; }

  @keyframes pac-eat-1 { 0%, 2% { opacity: 1; } 3%, 100% { opacity: 0; } }
  @keyframes pac-eat-2 { 0%, 26% { opacity: 1; } 27%, 100% { opacity: 0; } }
  @keyframes pac-eat-3 { 0%, 51% { opacity: 1; } 52%, 100% { opacity: 0; } }
  @keyframes pac-eat-4 { 0%, 75% { opacity: 1; } 76%, 100% { opacity: 0; } }

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
};

class ConceptPacman extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() {
    const version = this.getAttribute('version') || 'v3';
    const legacy = version === 'v1' || version === 'v2';
    const styles = legacy ? pacmanStyles.legacy : pacmanStyles.v3;
    const markup = pacmanMarkup[version] || pacmanMarkup.v3;
    this.shadowRoot.innerHTML = `<style>${styles}</style>${markup}`;
  }
}

if (!customElements.get('concept-pacman')) {
  customElements.define('concept-pacman', ConceptPacman);
}
