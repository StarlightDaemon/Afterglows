const tarotStyles = {
  v1: `
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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Royal tarot card reading with midnight velvet cloth, gold filigree card backs,
     3D perspective flips, and glowing Moon, Star, Sun occult emblems */
  .tarotc {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    perspective: 320px;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .tarotc-card {
    position: relative;
    width: 26px;
    height: 42px;
    transform-style: preserve-3d;
  }

  .tarotc-card.c1 { animation: tarotc-flip 9s ease-in-out infinite; }
  .tarotc-card.c2 { animation: tarotc-flip 9s ease-in-out infinite; animation-delay: -3s; }
  .tarotc-card.c3 { animation: tarotc-flip 9s ease-in-out infinite; animation-delay: -6s; }

  .tarotc-face {
    position: absolute;
    inset: 0;
    border-radius: 4px;
    border: 1.5px solid #facc15;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
    backface-visibility: hidden;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Card back: midnight navy with gold filigree grid */
  .tarotc-face.back {
    background:
      repeating-linear-gradient(45deg, rgba(250, 204, 21, 0.3) 0 2px, transparent 2px 7px),
      repeating-linear-gradient(-45deg, rgba(250, 204, 21, 0.3) 0 2px, transparent 2px 7px),
      #09090b;
  }

  .tarotc-face.back::after {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 1.5px solid #fde047;
    background: radial-gradient(circle, #facc15, #ca8a04);
  }

  /* Card front: mystical black field with illuminated celestial emblem */
  .tarotc-face.front {
    background: linear-gradient(180deg, #1e1b4b 0%, #09090b 100%);
    transform: rotateY(180deg);
    font-family: monospace;
    font-size: 15px;
    font-weight: bold;
  }

  .tarotc-card.c1 .tarotc-face.front { color: #38bdf8; text-shadow: 0 0 8px #00f0ff; }
  .tarotc-card.c2 .tarotc-face.front { color: #c084fc; text-shadow: 0 0 8px #a855f7; }
  .tarotc-card.c3 .tarotc-face.front { color: #fde047; text-shadow: 0 0 8px #facc15; }

  .tarotc-face.front .emblem {
    animation: tarotc-emblem 9s ease-in-out infinite;
  }

  .tarotc-card.c2 .tarotc-face.front .emblem { animation-delay: -3s; }
  .tarotc-card.c3 .tarotc-face.front .emblem { animation-delay: -6s; }

  /* Astral velvet glow */
  .tarotc-glow {
    position: absolute;
    bottom: 18px;
    left: 50%;
    width: 92px;
    height: 20px;
    margin-left: -46px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.4), transparent 70%);
    animation: tarotc-glow 4.5s ease-in-out infinite;
  }

  /* Glowing mystic motes */
  .tarotc-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 0 0 4px #facc15;
    opacity: 0;
    animation: tarotc-mote 3.8s linear infinite;
  }

  .tarotc-mote.m1 { left: 18px; top: 66px; animation-delay: 0s; background: #38bdf8; box-shadow: 0 0 4px #38bdf8; }
  .tarotc-mote.m2 { left: 52px; top: 70px; animation-delay: -1.4s; background: #c084fc; box-shadow: 0 0 4px #c084fc; }
  .tarotc-mote.m3 { left: 84px; top: 64px; animation-delay: -2.6s; }

  @keyframes tarotc-flip {
    0%, 6% { transform: translateY(0) rotateY(0deg); }
    14% { transform: translateY(-9px) rotateY(0deg); }
    22% { transform: translateY(-9px) rotateY(180deg); }
    30% { transform: translateY(0) rotateY(180deg); }
    52% { transform: translateY(0) rotateY(180deg); }
    60% { transform: translateY(-9px) rotateY(180deg); }
    68% { transform: translateY(-9px) rotateY(360deg); }
    76%, 100% { transform: translateY(0) rotateY(360deg); }
  }

  @keyframes tarotc-emblem {
    0%, 20% { opacity: 0.4; }
    26%, 50% { opacity: 1; }
    70%, 100% { opacity: 0.4; }
  }

  @keyframes tarotc-glow {
    0%, 100% { opacity: 0.55; }
    50% { opacity: 1; }
  }

  @keyframes tarotc-mote {
    0% { opacity: 0; transform: translateY(0); }
    22% { opacity: 0.95; }
    100% { opacity: 0; transform: translateY(-26px); }
  }
  `,
};

class ConceptTarot extends HTMLElement {
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
    const card = (cls, emblem) => version === 'v2' ? `
      <div class="tarotc-card ${cls}">
        <div class="tarotc-face back"></div>
        <div class="tarotc-face front"><span class="emblem">${emblem}</span></div>
      </div>
    ` : `
      <div class="tarot-card ${cls}">
        <div class="tarot-face back"></div>
        <div class="tarot-face front"><span class="emblem">${emblem}</span></div>
      </div>
    `;

    const pfx = version === 'v2' ? 'tarotc' : 'tarot';
    const markup = `
      <div class="${pfx}">
        <div class="${pfx}-glow"></div>
        ${card('c1', '☾')}
        ${card('c2', '✶')}
        ${card('c3', '☀')}
        <div class="${pfx}-mote m1"></div>
        <div class="${pfx}-mote m2"></div>
        <div class="${pfx}-mote m3"></div>
      </div>
    `;
    this.shadowRoot.innerHTML = `<style>${tarotStyles[version] || tarotStyles.v2}</style>${markup}`;
  }
}

if (!customElements.get('concept-tarot')) {
  customElements.define('concept-tarot', ConceptTarot);
}
