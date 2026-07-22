const tarotStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tarot {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    perspective: 320px;
  }

  .tarot-card {
    position: relative;
    width: 26px;
    height: 42px;
    transform-style: preserve-3d;
  }

  .tarot-card.c1 { animation: tarot-flip 9s ease-in-out infinite; }
  .tarot-card.c2 { animation: tarot-flip 9s ease-in-out infinite; animation-delay: -3s; }
  .tarot-card.c3 { animation: tarot-flip 9s ease-in-out infinite; animation-delay: -6s; }

  .tarot-face {
    position: absolute;
    inset: 0;
    border-radius: 4px;
    border: 1px solid rgba(0, 204, 0, 0.5);
    backface-visibility: hidden;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Card back: lattice pattern. */
  .tarot-face.back {
    background:
      repeating-linear-gradient(45deg, rgba(0, 204, 0, 0.18) 0 2px, transparent 2px 7px),
      repeating-linear-gradient(-45deg, rgba(0, 204, 0, 0.18) 0 2px, transparent 2px 7px),
      #061206;
  }

  .tarot-face.back::after {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.6);
  }

  /* Card front: dark field with a glowing emblem. */
  .tarot-face.front {
    background: linear-gradient(180deg, #0a2010, #04100a);
    transform: rotateY(180deg);
    color: #b8ffc4;
    font-family: monospace;
    font-size: 15px;
    text-shadow: 0 0 8px rgba(140, 255, 170, 0.9);
  }

  .tarot-face.front .emblem {
    animation: tarot-emblem 9s ease-in-out infinite;
  }

  .tarot-card.c2 .tarot-face.front .emblem { animation-delay: -3s; }
  .tarot-card.c3 .tarot-face.front .emblem { animation-delay: -6s; }

  .tarot-glow {
    position: absolute;
    bottom: 18px;
    left: 50%;
    width: 92px;
    height: 20px;
    margin-left: -46px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0, 204, 0, 0.22), transparent 70%);
    animation: tarot-glow 4.5s ease-in-out infinite;
  }

  .tarot-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(200, 255, 212, 0.85);
    opacity: 0;
    animation: tarot-mote 3.8s linear infinite;
  }

  .tarot-mote.m1 { left: 18px; top: 66px; animation-delay: 0s; }
  .tarot-mote.m2 { left: 52px; top: 70px; animation-delay: -1.4s; }
  .tarot-mote.m3 { left: 84px; top: 64px; animation-delay: -2.6s; }

  /* Each card lifts, flips face-up, holds, and settles back. */
  @keyframes tarot-flip {
    0%, 6% { transform: translateY(0) rotateY(0deg); }
    14% { transform: translateY(-9px) rotateY(0deg); }
    22% { transform: translateY(-9px) rotateY(180deg); }
    30% { transform: translateY(0) rotateY(180deg); }
    52% { transform: translateY(0) rotateY(180deg); }
    60% { transform: translateY(-9px) rotateY(180deg); }
    68% { transform: translateY(-9px) rotateY(360deg); }
    76%, 100% { transform: translateY(0) rotateY(360deg); }
  }

  @keyframes tarot-emblem {
    0%, 20% { opacity: 0.4; }
    26%, 50% { opacity: 1; }
    70%, 100% { opacity: 0.4; }
  }

  @keyframes tarot-glow {
    0%, 100% { opacity: 0.55; }
    50% { opacity: 1; }
  }

  @keyframes tarot-mote {
    0% { opacity: 0; transform: translateY(0); }
    22% { opacity: 0.9; }
    100% { opacity: 0; transform: translateY(-26px); }
  }
`;

class ConceptTarot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const card = (cls, emblem) => `
      <div class="tarot-card ${cls}">
        <div class="tarot-face back"></div>
        <div class="tarot-face front"><span class="emblem">${emblem}</span></div>
      </div>
    `;
    this.shadowRoot.innerHTML = `
      <style>${tarotStyles}</style>
      <div class="tarot">
        <div class="tarot-glow"></div>
        ${card('c1', '☾')}
        ${card('c2', '✶')}
        ${card('c3', '☀')}
        <div class="tarot-mote m1"></div>
        <div class="tarot-mote m2"></div>
        <div class="tarot-mote m3"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tarot')) {
  customElements.define('concept-tarot', ConceptTarot);
}
