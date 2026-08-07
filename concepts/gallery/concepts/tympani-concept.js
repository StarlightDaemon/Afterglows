const tympaniStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* An orchestral tympani kettle drum under mallet strike: the parchment head
     deforms on impact, launching concentric standing ripples across the bowl
     while the side pitch tension gauge needle kicks and dampens. */
  .tym {
    width: 116px;
    height: 98px;
    position: relative;
  }

  /* Tripod base stand */
  .tym-stand {
    position: absolute;
    left: 36px;
    bottom: 4px;
    width: 44px;
    height: 14px;
    border-bottom: 2px solid var(--accent, #00cc00);
    border-left: 2px solid var(--accent, #00cc00);
    border-right: 2px solid var(--accent, #00cc00);
  }

  /* Parabolic copper kettle bowl */
  .tym-bowl {
    position: absolute;
    left: 20px;
    top: 24px;
    width: 76px;
    height: 52px;
    border-radius: 6px 6px 50% 50% / 4px 4px 60% 60%;
    background: radial-gradient(circle at 50% 40%, rgba(0, 140, 30, 0.85), rgba(0, 35, 8, 0.98));
    border: 2px solid var(--accent, #00cc00);
    box-shadow: inset 0 -6px 12px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 204, 0, 0.25);
    z-index: 2;
  }

  /* Tuning lugs around rim */
  .tym-lug {
    position: absolute;
    top: 20px;
    width: 5px;
    height: 8px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.9);
    border: 1px solid var(--accent, #00cc00);
    z-index: 4;
  }

  .tym-lug.l1 { left: 24px; }
  .tym-lug.l2 { left: 56px; }
  .tym-lug.l3 { left: 88px; }

  /* Parchment drumhead rim */
  .tym-head {
    position: absolute;
    left: 18px;
    top: 18px;
    width: 80px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(190, 255, 205, 0.9), rgba(0, 110, 24, 0.9) 60%, rgba(0, 40, 8, 0.95));
    border: 2px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
    z-index: 3;
    animation: tym-head-deform 2.4s cubic-bezier(0.1, 0.9, 0.2, 1) infinite;
  }

  @keyframes tym-head-deform {
    0%, 15% { transform: scale(1); filter: brightness(1); }
    18% { transform: scale(0.97, 0.94) translateY(2px); filter: brightness(1.3); }
    28% { transform: scale(1.02, 1.04) translateY(-1px); }
    40% { transform: scale(1); }
    100% { transform: scale(1); }
  }

  /* Concentric circular standing ripples on drumhead */
  .tym-ripple {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1.5px solid rgba(140, 255, 170, 0.9);
    transform: translate(-50%, -50%);
    animation: tym-ripple-expand 2.4s ease-out infinite;
    pointer-events: none;
  }

  .tym-ripple.r1 { animation-delay: 0.4s; }
  .tym-ripple.r2 { animation-delay: 0.65s; }

  @keyframes tym-ripple-expand {
    0%, 15% { opacity: 0; width: 4px; height: 2px; }
    18% { opacity: 1; width: 12px; height: 5px; }
    45% { opacity: 0.8; width: 46px; height: 12px; }
    70% { opacity: 0; width: 68px; height: 16px; }
    100% { opacity: 0; }
  }

  /* Felt mallet striking the drumhead */
  .tym-mallet {
    position: absolute;
    left: 54px;
    top: 2px;
    width: 28px;
    height: 30px;
    transform-origin: right top;
    animation: tym-mallet-strike 2.4s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
    z-index: 5;
  }

  .tym-shaft {
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    height: 24px;
    background: rgba(140, 255, 170, 0.9);
    transform: rotate(25deg);
  }

  .tym-ball {
    position: absolute;
    left: 4px;
    bottom: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, rgba(190, 255, 205, 1), rgba(0, 180, 40, 0.9));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.8);
  }

  @keyframes tym-mallet-strike {
    0%, 10% { transform: translate(0, -6px) rotate(-20deg); }
    18% { transform: translate(-8px, 14px) rotate(5deg); }
    26% { transform: translate(-4px, 0px) rotate(-15deg); }
    50%, 100% { transform: translate(0, -6px) rotate(-20deg); }
  }

  /* Side pitch tension indicator gauge */
  .tym-gauge {
    position: absolute;
    right: 6px;
    top: 40px;
    width: 14px;
    height: 24px;
    border-radius: 2px;
    background: rgba(0, 40, 8, 0.95);
    border: 1px solid var(--accent, #00cc00);
    z-index: 4;
  }

  .tym-needle {
    position: absolute;
    left: 2px;
    top: 11px;
    width: 10px;
    height: 2px;
    background: rgba(190, 255, 205, 0.95);
    transform-origin: left center;
    animation: tym-gauge-jump 2.4s ease-out infinite;
  }

  @keyframes tym-gauge-jump {
    0%, 15% { transform: rotate(-10deg); }
    18% { transform: rotate(25deg); }
    30% { transform: rotate(5deg); }
    45% { transform: rotate(-5deg); }
    60%, 100% { transform: rotate(-10deg); }
  }
`;

class ConceptTympani extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tympaniStyles}</style>
      <div class="tym">
        <div class="tym-stand"></div>
        <div class="tym-bowl"></div>
        <div class="tym-lug l1"></div>
        <div class="tym-lug l2"></div>
        <div class="tym-lug l3"></div>
        <div class="tym-head">
          <div class="tym-ripple r1"></div>
          <div class="tym-ripple r2"></div>
        </div>
        <div class="tym-mallet">
          <div class="tym-shaft"></div>
          <div class="tym-ball"></div>
        </div>
        <div class="tym-gauge">
          <div class="tym-needle"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tympani')) {
  customElements.define('concept-tympani', ConceptTympani);
}
