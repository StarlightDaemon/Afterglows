const invaderStyles = `
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
    filter: drop-shadow(0 0 6px rgba(0, 204, 0, 0.35));
    animation: invader-shuffle 3.2s steps(1) infinite;
  }

  /* Pixel-art frames: each frame is a single invisible 6x6 "pixel" whose
     box-shadow list paints the full 11x8 sprite. Two frames alternate to
     step the classic arms-up / arms-down walk. */
  .invader-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 6px;
    background: transparent;
    animation: invader-swap 0.8s steps(1) infinite;
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
    animation-delay: -0.4s;
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

  @keyframes invader-shuffle {
    0% { transform: translateX(0); }
    25% { transform: translateX(6px); }
    50% { transform: translateX(0); }
    75% { transform: translateX(-6px); }
    100% { transform: translateX(0); }
  }
`;

class ConceptInvader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${invaderStyles}</style>
      <div class="invader">
        <div class="invader-frame a"></div>
        <div class="invader-frame b"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-invader')) {
  customElements.define('concept-invader', ConceptInvader);
}
