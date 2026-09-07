const invaderStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .invader {
    width: 66px;
    height: 48px;
    position: relative;
    filter: drop-shadow(0 0 8px rgba(0, 255, 100, 0.8));
    animation: invader-march 2.2s ease-in-out infinite;
  }

  .invader-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 6px;
    background: transparent;
    animation: invader-swap 0.36s steps(1) infinite;
  }

  .invader-frame.a {
    box-shadow:
      12px 0 var(--accent, #00cc00), 48px 0 var(--accent, #00cc00),
      18px 6px var(--accent, #00cc00), 42px 6px var(--accent, #00cc00),
      12px 12px var(--accent, #00cc00), 18px 12px var(--accent, #00cc00), 24px 12px var(--accent, #00cc00), 30px 12px var(--accent, #00cc00), 36px 12px var(--accent, #00cc00), 42px 12px var(--accent, #00cc00), 48px 12px var(--accent, #00cc00),
      6px 18px var(--accent, #00cc00), 12px 18px var(--accent, #00cc00), 24px 18px var(--accent, #00cc00), 30px 18px var(--accent, #00cc00), 36px 18px var(--accent, #00cc00), 48px 18px var(--accent, #00cc00), 54px 18px var(--accent, #00cc00),
      0 24px var(--accent, #00cc00), 6px 24px var(--accent, #00cc00), 12px 24px var(--accent, #00cc00), 18px 24px var(--accent, #00cc00), 24px 24px var(--accent, #00cc00), 30px 24px var(--accent, #00cc00), 36px 24px var(--accent, #00cc00), 42px 24px var(--accent, #00cc00), 48px 24px var(--accent, #00cc00), 54px 24px var(--accent, #00cc00), 60px 24px var(--accent, #00cc00),
      0 30px var(--accent, #00cc00), 12px 30px var(--accent, #00cc00), 18px 30px var(--accent, #00cc00), 24px 30px var(--accent, #00cc00), 30px 30px var(--accent, #00cc00), 36px 30px var(--accent, #00cc00), 42px 30px var(--accent, #00cc00), 48px 30px var(--accent, #00cc00), 60px 30px var(--accent, #00cc00),
      0 36px var(--accent, #00cc00), 12px 36px var(--accent, #00cc00), 48px 36px var(--accent, #00cc00), 60px 36px var(--accent, #00cc00),
      18px 42px var(--accent, #00cc00), 24px 42px var(--accent, #00cc00), 36px 42px var(--accent, #00cc00), 42px 42px var(--accent, #00cc00);
  }

  .invader-frame.b {
    animation-delay: -0.18s;
    box-shadow:
      12px 0 var(--accent, #00cc00), 48px 0 var(--accent, #00cc00),
      0 6px var(--accent, #00cc00), 18px 6px var(--accent, #00cc00), 42px 6px var(--accent, #00cc00), 60px 6px var(--accent, #00cc00),
      0 12px var(--accent, #00cc00), 12px 12px var(--accent, #00cc00), 18px 12px var(--accent, #00cc00), 24px 12px var(--accent, #00cc00), 30px 12px var(--accent, #00cc00), 36px 12px var(--accent, #00cc00), 42px 12px var(--accent, #00cc00), 48px 12px var(--accent, #00cc00), 60px 12px var(--accent, #00cc00),
      0 18px var(--accent, #00cc00), 6px 18px var(--accent, #00cc00), 12px 18px var(--accent, #00cc00), 24px 18px var(--accent, #00cc00), 30px 18px var(--accent, #00cc00), 36px 18px var(--accent, #00cc00), 48px 18px var(--accent, #00cc00), 54px 18px var(--accent, #00cc00), 60px 18px var(--accent, #00cc00),
      6px 24px var(--accent, #00cc00), 12px 24px var(--accent, #00cc00), 18px 24px var(--accent, #00cc00), 24px 24px var(--accent, #00cc00), 30px 24px var(--accent, #00cc00), 36px 24px var(--accent, #00cc00), 42px 24px var(--accent, #00cc00), 48px 24px var(--accent, #00cc00), 54px 24px var(--accent, #00cc00),
      12px 30px var(--accent, #00cc00), 18px 30px var(--accent, #00cc00), 24px 30px var(--accent, #00cc00), 30px 30px var(--accent, #00cc00), 36px 30px var(--accent, #00cc00), 42px 30px var(--accent, #00cc00), 48px 30px var(--accent, #00cc00),
      12px 36px var(--accent, #00cc00), 48px 36px var(--accent, #00cc00),
      6px 42px var(--accent, #00cc00), 54px 42px var(--accent, #00cc00);
  }

  @keyframes invader-swap {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  @keyframes invader-march {
    0% { transform: translate(-22px, -8px); }
    25% { transform: translate(22px, -8px); }
    50% { transform: translate(22px, 8px); }
    75% { transform: translate(-22px, 8px); }
    100% { transform: translate(-22px, -8px); }
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

  /* v2: Arcade CRT monitor with vivid neon cyan phosphor glow and scanlines */
  .invaderc {
    width: 100px;
    height: 84px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #082f49 0%, #020617 100%);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 10px rgba(0, 240, 255, 0.2);
    overflow: hidden;
  }

  /* CRT Scanlines overlay */
  .invaderc::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0 2px, transparent 2px 4px);
    pointer-events: none;
    z-index: 2;
  }

  .invaderc-sprite {
    width: 66px;
    height: 48px;
    position: relative;
    filter: drop-shadow(0 0 10px #00f0ff);
    animation: invaderc-march 2.2s ease-in-out infinite;
  }

  .invaderc-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 6px;
    background: transparent;
    animation: invaderc-swap 0.36s steps(1) infinite;
  }

  /* Frame A in vivid electric cyan phosphor pixels */
  .invaderc-frame.a {
    box-shadow:
      12px 0 #00f0ff, 48px 0 #00f0ff,
      18px 6px #00f0ff, 42px 6px #00f0ff,
      12px 12px #00f0ff, 18px 12px #00f0ff, 24px 12px #00f0ff, 30px 12px #00f0ff, 36px 12px #00f0ff, 42px 12px #00f0ff, 48px 12px #00f0ff,
      6px 18px #00f0ff, 12px 18px #00f0ff, 24px 18px #00f0ff, 30px 18px #00f0ff, 36px 18px #00f0ff, 48px 18px #00f0ff, 54px 18px #00f0ff,
      0 24px #00f0ff, 6px 24px #00f0ff, 12px 24px #00f0ff, 18px 24px #00f0ff, 24px 24px #00f0ff, 30px 24px #00f0ff, 36px 24px #00f0ff, 42px 24px #00f0ff, 48px 24px #00f0ff, 54px 24px #00f0ff, 60px 24px #00f0ff,
      0 30px #00f0ff, 12px 30px #00f0ff, 18px 30px #00f0ff, 24px 30px #00f0ff, 30px 30px #00f0ff, 36px 30px #00f0ff, 42px 30px #00f0ff, 48px 30px #00f0ff, 60px 30px #00f0ff,
      0 36px #00f0ff, 12px 36px #00f0ff, 48px 36px #00f0ff, 60px 36px #00f0ff,
      18px 42px #00f0ff, 24px 42px #00f0ff, 36px 42px #00f0ff, 42px 42px #00f0ff;
  }

  /* Frame B in electric cyan phosphor pixels */
  .invaderc-frame.b {
    animation-delay: -0.18s;
    box-shadow:
      12px 0 #00f0ff, 48px 0 #00f0ff,
      0 6px #00f0ff, 18px 6px #00f0ff, 42px 6px #00f0ff, 60px 6px #00f0ff,
      0 12px #00f0ff, 12px 12px #00f0ff, 18px 12px #00f0ff, 24px 12px #00f0ff, 30px 12px #00f0ff, 36px 12px #00f0ff, 42px 12px #00f0ff, 48px 12px #00f0ff, 60px 12px #00f0ff,
      0 18px #00f0ff, 6px 18px #00f0ff, 12px 18px #00f0ff, 24px 18px #00f0ff, 30px 18px #00f0ff, 36px 18px #00f0ff, 48px 18px #00f0ff, 54px 18px #00f0ff, 60px 18px #00f0ff,
      6px 24px #00f0ff, 12px 24px #00f0ff, 18px 24px #00f0ff, 24px 24px #00f0ff, 30px 24px #00f0ff, 36px 24px #00f0ff, 42px 24px #00f0ff, 48px 24px #00f0ff, 54px 24px #00f0ff,
      12px 30px #00f0ff, 18px 30px #00f0ff, 24px 30px #00f0ff, 30px 30px #00f0ff, 36px 30px #00f0ff, 42px 30px #00f0ff, 48px 30px #00f0ff,
      12px 36px #00f0ff, 48px 36px #00f0ff,
      6px 42px #00f0ff, 54px 42px #00f0ff;
  }

  @keyframes invaderc-swap {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  @keyframes invaderc-march {
    0% { transform: translate(-22px, -8px); }
    25% { transform: translate(22px, -8px); }
    50% { transform: translate(22px, 8px); }
    75% { transform: translate(-22px, 8px); }
    100% { transform: translate(-22px, -8px); }
  }
  `,
};

const invaderMarkup = {
  v1: `
      <div class="invader">
        <div class="invader-frame a"></div>
        <div class="invader-frame b"></div>
      </div>
    `,
  v2: `
      <div class="invaderc">
        <div class="invaderc-sprite">
          <div class="invaderc-frame a"></div>
          <div class="invaderc-frame b"></div>
        </div>
      </div>
    `,
};

class ConceptInvader extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${invaderStyles[version] || invaderStyles.v2}</style>${invaderMarkup[version] || invaderMarkup.v2}`;
  }
}

if (!customElements.get('concept-invader')) {
  customElements.define('concept-invader', ConceptInvader);
}
