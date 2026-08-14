// Oscillating desk fan: head pans behind cage, blades spin in blur, note flutters.
// v1 and v2 are preserved.
// v3 adds full color: vintage turquoise metal housing, chrome wire cage,
// bronze motor casing, cream spinning blades, and fluttering desk memo.
const deskfanStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* An oscillating desk fan: the head pans left and right behind its
     cage, blades a spinning blur, and a loose note on the desk lifts
     and flutters each time the draft swings across it. */
  .df {
    width: 108px;
    height: 96px;
    position: relative;
  }

  /* Base + neck. */
  .df-base {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 40px;
    height: 8px;
    margin-left: -20px;
    border-radius: 50% 50% 4px 4px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.7), rgba(0, 80, 16, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  .df-neck {
    position: absolute;
    left: 50%;
    bottom: 14px;
    width: 5px;
    height: 24px;
    margin-left: -2.5px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.7), rgba(0, 90, 18, 0.7));
  }

  /* Oscillating head assembly, pivoting at the neck top. */
  .df-head {
    position: absolute;
    left: 50%;
    bottom: 36px;
    width: 0;
    height: 0;
    transform-origin: 50% 100%;
    animation: df-oscillate 5s ease-in-out infinite;
  }

  @keyframes df-oscillate {
    0%, 100% { transform: rotate(-24deg); }
    50% { transform: rotate(24deg); }
  }

  /* Cage ring. */
  .df-cage {
    position: absolute;
    left: -30px;
    top: -60px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle, rgba(0, 45, 9, 0.35), rgba(0, 20, 4, 0.55));
  }

  /* Cage guard bars: a spoked ring. */
  .df-cage::after {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: repeating-conic-gradient(rgba(0, 204, 0, 0.35) 0 1deg, transparent 1deg 22deg);
    -webkit-mask-image: radial-gradient(circle, black 0 96%, transparent 98%);
    mask-image: radial-gradient(circle, black 0 96%, transparent 98%);
  }

  /* Hub cap. */
  .df-hub {
    position: absolute;
    left: -6px;
    top: -36px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.6);
    z-index: 3;
  }

  /* Spinning blades: four petals rotating fast with a blur ring. */
  .df-blades {
    position: absolute;
    left: -26px;
    top: -56px;
    width: 52px;
    height: 52px;
    animation: df-spin 0.35s linear infinite;
  }

  .df-blade {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 14px;
    border-radius: 60% 40% 60% 40%;
    background: linear-gradient(120deg, rgba(190, 255, 205, 0.6), rgba(0, 130, 26, 0.5));
    transform-origin: 0% 50%;
    opacity: 0.7;
  }

  .df-blade.a { transform: rotate(0deg); }
  .df-blade.b { transform: rotate(90deg); }
  .df-blade.c { transform: rotate(180deg); }
  .df-blade.d { transform: rotate(270deg); }

  @keyframes df-spin {
    to { transform: rotate(360deg); }
  }

  /* Blur disc overlay to sell the speed. */
  .df-blur {
    position: absolute;
    left: -24px;
    top: -54px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, rgba(140, 255, 170, 0.14), transparent 40%, rgba(140, 255, 170, 0.14) 60%, transparent);
    animation: df-spin 0.2s linear infinite;
  }

  /* The desk note fluttering when the draft hits it. */
  .df-note {
    position: absolute;
    right: 6px;
    bottom: 8px;
    width: 20px;
    height: 24px;
    border: 1px solid rgba(140, 255, 170, 0.7);
    background: rgba(0, 30, 6, 0.5);
    transform-origin: bottom right;
    animation: df-flutter 5s ease-in-out infinite;
  }

  .df-note::after {
    content: '';
    position: absolute;
    left: 3px;
    right: 3px;
    top: 4px;
    height: 12px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.35) 0 1px,
      transparent 1px 4px);
  }

  /* Flutter peaks when the head faces right (draft on the note). */
  @keyframes df-flutter {
    0%, 30% { transform: rotate(0deg) skewX(0deg); }
    50% { transform: rotate(-10deg) skewX(-8deg); }
    58% { transform: rotate(-4deg) skewX(4deg); }
    66% { transform: rotate(-8deg) skewX(-5deg); }
    80%, 100% { transform: rotate(0deg) skewX(0deg); }
  }

  /* Draft streaks blowing from the fan. */
  .df-draft {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.5), transparent);
    opacity: 0;
    animation: df-draft 1.4s ease-in infinite;
  }

  .df-draft.d1 { top: 40px; left: 62px; width: 24px; }
  .df-draft.d2 { top: 54px; left: 60px; width: 30px; animation-delay: -0.6s; }

  @keyframes df-draft {
    0% { transform: translateX(-10px); opacity: 0; }
    30% { opacity: 0.7; }
    100% { transform: translateX(30px); opacity: 0; }
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

  /* An oscillating desk fan: the head pans left and right behind its
     cage, blades a spinning blur, and a loose note on the desk lifts
     and flutters each time the draft swings across it. */
  .df {
    width: 108px;
    height: 96px;
    position: relative;
  }

  /* Base + neck. */
  .df-base {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 40px;
    height: 8px;
    margin-left: -20px;
    border-radius: 50% 50% 4px 4px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.7), rgba(0, 80, 16, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  .df-neck {
    position: absolute;
    left: 50%;
    bottom: 14px;
    width: 5px;
    height: 24px;
    margin-left: -2.5px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.7), rgba(0, 90, 18, 0.7));
  }

  /* Oscillating head assembly. Real fans yaw about a vertical axis, so
     the 2D read is a sideways drift plus a width squash as the face
     turns away. */
  .df-head {
    position: absolute;
    left: 50%;
    bottom: 36px;
    width: 0;
    height: 0;
    animation: df-oscillate 5s ease-in-out infinite;
  }

  @keyframes df-oscillate {
    0%, 100% { transform: translateX(-7px) scaleX(0.84); }
    25% { transform: translateX(0) scaleX(1); }
    50% { transform: translateX(7px) scaleX(0.84); }
    75% { transform: translateX(0) scaleX(1); }
  }

  /* Motor housing joining the neck to the cage's backside. */
  .df-motor {
    position: absolute;
    left: -7px;
    top: -16px;
    width: 14px;
    height: 17px;
    border-radius: 5px 5px 3px 3px;
    background: linear-gradient(180deg, rgba(0, 140, 28, 0.85), rgba(0, 80, 16, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.55);
  }

  /* Cage ring. */
  .df-cage {
    position: absolute;
    left: -30px;
    top: -60px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle, rgba(0, 45, 9, 0.35), rgba(0, 20, 4, 0.55));
  }

  /* Cage guard bars: a spoked ring. */
  .df-cage::after {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: repeating-conic-gradient(rgba(0, 204, 0, 0.35) 0 1deg, transparent 1deg 22deg);
    -webkit-mask-image: radial-gradient(circle, black 0 96%, transparent 98%);
    mask-image: radial-gradient(circle, black 0 96%, transparent 98%);
  }

  /* Hub cap. */
  .df-hub {
    position: absolute;
    left: -6px;
    top: -36px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.6);
    z-index: 3;
  }

  /* Spinning blades: four petals rotating fast with a blur ring. */
  .df-blades {
    position: absolute;
    left: -26px;
    top: -56px;
    width: 52px;
    height: 52px;
    animation: df-spin 0.35s linear infinite;
  }

  .df-blade {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 14px;
    border-radius: 60% 40% 60% 40%;
    background: linear-gradient(120deg, rgba(190, 255, 205, 0.6), rgba(0, 130, 26, 0.5));
    transform-origin: 0% 50%;
    opacity: 0.7;
  }

  .df-blade.a { transform: rotate(0deg); }
  .df-blade.b { transform: rotate(90deg); }
  .df-blade.c { transform: rotate(180deg); }
  .df-blade.d { transform: rotate(270deg); }

  @keyframes df-spin {
    to { transform: rotate(360deg); }
  }

  /* Blur disc overlay to sell the speed. */
  .df-blur {
    position: absolute;
    left: -24px;
    top: -54px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, rgba(140, 255, 170, 0.14), transparent 40%, rgba(140, 255, 170, 0.14) 60%, transparent);
    animation: df-spin 0.2s linear infinite;
  }

  /* The desk note fluttering when the draft hits it. */
  .df-note {
    position: absolute;
    right: 6px;
    bottom: 8px;
    width: 20px;
    height: 24px;
    border: 1px solid rgba(140, 255, 170, 0.7);
    background: rgba(0, 30, 6, 0.5);
    transform-origin: bottom right;
    animation: df-flutter 5s ease-in-out infinite;
  }

  .df-note::after {
    content: '';
    position: absolute;
    left: 3px;
    right: 3px;
    top: 4px;
    height: 12px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.35) 0 1px,
      transparent 1px 4px);
  }

  /* Flutter peaks when the head faces right (draft on the note). */
  @keyframes df-flutter {
    0%, 30% { transform: rotate(0deg) skewX(0deg); }
    50% { transform: rotate(-10deg) skewX(-8deg); }
    58% { transform: rotate(-4deg) skewX(4deg); }
    66% { transform: rotate(-8deg) skewX(-5deg); }
    80%, 100% { transform: rotate(0deg) skewX(0deg); }
  }

  /* Draft streaks blowing from the fan. */
  .df-draft {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.5), transparent);
    opacity: 0;
    animation: df-draft 5s ease-in infinite;
  }

  .df-draft.d1 { top: 40px; left: 62px; width: 24px; }
  .df-draft.d2 { top: 54px; left: 60px; width: 30px; animation-delay: 0.12s; }

  @keyframes df-draft {
    0%, 38% { transform: translateX(-10px); opacity: 0; }
    46% { opacity: 0.75; }
    62% { transform: translateX(28px); opacity: 0; }
    100% { opacity: 0; }
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

  /* v3: Vintage Turquoise electric desk fan with chrome wire cage,
     bronze motor housing, cream aerofoil blades, and fluttering memo */
  .dfc {
    width: 108px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Cast Iron Base with Turquoise Enamel */
  .dfc-base {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 40px;
    height: 8px;
    margin-left: -20px;
    border-radius: 50% 50% 4px 4px;
    background: linear-gradient(180deg, #06b6d4 0%, #0891b2 60%, #0e7490 100%);
    border: 1px solid #22d3ee;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Chrome Supporting Neck */
  .dfc-neck {
    position: absolute;
    left: 50%;
    bottom: 14px;
    width: 5px;
    height: 24px;
    margin-left: -2.5px;
    background: linear-gradient(90deg, #ffffff, #94a3b8, #475569);
  }

  /* Oscillating Fan Head */
  .dfc-head {
    position: absolute;
    left: 50%;
    bottom: 36px;
    width: 0;
    height: 0;
    animation: dfc-oscillate 5s ease-in-out infinite;
  }

  @keyframes dfc-oscillate {
    0%, 100% { transform: translateX(-7px) scaleX(0.84); }
    25% { transform: translateX(0) scaleX(1); }
    50% { transform: translateX(7px) scaleX(0.84); }
    75% { transform: translateX(0) scaleX(1); }
  }

  /* Antique Bronze Motor Housing */
  .dfc-motor {
    position: absolute;
    left: -7px;
    top: -16px;
    width: 14px;
    height: 17px;
    border-radius: 5px 5px 3px 3px;
    background: linear-gradient(180deg, #b45309 0%, #78350f 70%, #451a03 100%);
    border: 1px solid #d97706;
  }

  /* Polished Chrome Wire Cage */
  .dfc-cage {
    position: absolute;
    left: -30px;
    top: -60px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #e2e8f0;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
    background: radial-gradient(circle, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.7) 100%);
  }

  /* Radial Spokes */
  .dfc-cage::after {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: repeating-conic-gradient(#94a3b8 0 1deg, transparent 1deg 22deg);
    -webkit-mask-image: radial-gradient(circle, black 0 96%, transparent 98%);
    mask-image: radial-gradient(circle, black 0 96%, transparent 98%);
  }

  /* Brass Center Hub */
  .dfc-hub {
    position: absolute;
    left: -6px;
    top: -36px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #fde047, #ca8a04 75%);
    box-shadow: 0 0 6px #facc15;
    z-index: 3;
  }

  /* Spinning Cream Aerofoil Blades */
  .dfc-blades {
    position: absolute;
    left: -26px;
    top: -56px;
    width: 52px;
    height: 52px;
    animation: dfc-spin 0.35s linear infinite;
  }

  .dfc-blade {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 14px;
    border-radius: 60% 40% 60% 40%;
    background: linear-gradient(120deg, #fef3c7 0%, #fde68a 60%, #d97706 100%);
    transform-origin: 0% 50%;
    opacity: 0.85;
  }

  .dfc-blade.a { transform: rotate(0deg); }
  .dfc-blade.b { transform: rotate(90deg); }
  .dfc-blade.c { transform: rotate(180deg); }
  .dfc-blade.d { transform: rotate(270deg); }

  @keyframes dfc-spin {
    to { transform: rotate(360deg); }
  }

  /* Motion Blur Disc */
  .dfc-blur {
    position: absolute;
    left: -24px;
    top: -54px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, rgba(254, 243, 199, 0.2), transparent 40%, rgba(56, 189, 248, 0.2) 60%, transparent);
    animation: dfc-spin 0.2s linear infinite;
  }

  /* Fluttering Yellow Memo Note */
  .dfc-note {
    position: absolute;
    right: 6px;
    bottom: 8px;
    width: 20px;
    height: 24px;
    border: 1px solid #fde047;
    background: linear-gradient(135deg, #fef08a, #fef9c3);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    transform-origin: bottom right;
    animation: dfc-flutter 5s ease-in-out infinite;
  }

  .dfc-note::after {
    content: '';
    position: absolute;
    left: 3px;
    right: 3px;
    top: 4px;
    height: 12px;
    background: repeating-linear-gradient(180deg,
      #ca8a04 0 1px,
      transparent 1px 4px);
  }

  @keyframes dfc-flutter {
    0%, 30% { transform: rotate(0deg) skewX(0deg); }
    50% { transform: rotate(-10deg) skewX(-8deg); }
    58% { transform: rotate(-4deg) skewX(4deg); }
    66% { transform: rotate(-8deg) skewX(-5deg); }
    80%, 100% { transform: rotate(0deg) skewX(0deg); }
  }

  /* Sky-Cyan Air Draft Streaks */
  .dfc-draft {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.8), transparent);
    opacity: 0;
    animation: dfc-draft 5s ease-in infinite;
  }

  .dfc-draft.d1 { top: 40px; left: 62px; width: 24px; }
  .dfc-draft.d2 { top: 54px; left: 60px; width: 30px; animation-delay: 0.12s; }

  @keyframes dfc-draft {
    0%, 38% { transform: translateX(-10px); opacity: 0; }
    46% { opacity: 0.85; }
    62% { transform: translateX(28px); opacity: 0; }
    100% { opacity: 0; }
  }
  `,
};

const deskfanMarkup = {
  v1: `
      <div class="df">
        <div class="df-draft d1"></div>
        <div class="df-draft d2"></div>
        <div class="df-note"></div>
        <div class="df-base"></div>
        <div class="df-neck"></div>
        <div class="df-head">
          <div class="df-cage"></div>
          <div class="df-blur"></div>
          <div class="df-blades">
            <div class="df-blade a"></div>
            <div class="df-blade b"></div>
            <div class="df-blade c"></div>
            <div class="df-blade d"></div>
          </div>
          <div class="df-hub"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="df">
        <div class="df-draft d1"></div>
        <div class="df-draft d2"></div>
        <div class="df-note"></div>
        <div class="df-base"></div>
        <div class="df-neck"></div>
        <div class="df-head">
          <div class="df-motor"></div>
          <div class="df-cage"></div>
          <div class="df-blur"></div>
          <div class="df-blades">
            <div class="df-blade a"></div>
            <div class="df-blade b"></div>
            <div class="df-blade c"></div>
            <div class="df-blade d"></div>
          </div>
          <div class="df-hub"></div>
        </div>
      </div>
    `,
  v3: `
      <div class="dfc">
        <div class="dfc-draft d1"></div>
        <div class="dfc-draft d2"></div>
        <div class="dfc-note"></div>
        <div class="dfc-base"></div>
        <div class="dfc-neck"></div>
        <div class="dfc-head">
          <div class="dfc-motor"></div>
          <div class="dfc-cage"></div>
          <div class="dfc-blur"></div>
          <div class="dfc-blades">
            <div class="dfc-blade a"></div>
            <div class="dfc-blade b"></div>
            <div class="dfc-blade c"></div>
            <div class="dfc-blade d"></div>
          </div>
          <div class="dfc-hub"></div>
        </div>
      </div>
    `,
};

class ConceptDeskfan extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${deskfanStyles[version] || deskfanStyles.v3}</style>${deskfanMarkup[version] || deskfanMarkup.v3}`;
  }
}

if (!customElements.get('concept-deskfan')) {
  customElements.define('concept-deskfan', ConceptDeskfan);
}
