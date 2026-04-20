const pacmanStyles = `
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
`;

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
};

class ConceptPacman extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${pacmanStyles}</style>${pacmanMarkup[version] || pacmanMarkup.v2}`;
  }
}

if (!customElements.get('concept-pacman')) {
  customElements.define('concept-pacman', ConceptPacman);
}
