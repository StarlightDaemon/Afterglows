// Scissors cutting along a line with opening/closing blades and splitting halves.
// v1 and v2 are preserved.
// v3 adds full color: polished brass shears handles, stainless steel blades,
// brass pivot screw, crimson satin fabric ribbon, and golden snip sparks.
const scissorsStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Scissors cutting along a dashed line: the blades snip open and
     shut as the pair advances left across a sheet of paper, and the
     cut edge opens into two curling halves behind them. */
  .sc {
    width: 116px;
    height: 84px;
    position: relative;
  }

  /* Paper sheet. */
  .sc-paper {
    position: absolute;
    left: 6px;
    top: 22px;
    width: 104px;
    height: 40px;
    border: 1px solid rgba(140, 255, 170, 0.6);
    background: linear-gradient(180deg, rgba(0, 40, 8, 0.5), rgba(0, 25, 5, 0.6));
  }

  /* Cut-line guide (dashes) down the middle. */
  .sc-line {
    position: absolute;
    left: 12px;
    right: 12px;
    top: 42px;
    height: 1px;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.6) 0 4px,
      transparent 4px 8px);
  }

  /* Upper cut half: peels up behind the scissors. */
  .sc-half-top {
    position: absolute;
    right: 12px;
    top: 22px;
    width: 0;
    height: 20px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.4), rgba(0, 80, 16, 0.5));
    border: 1px solid rgba(140, 255, 170, 0.5);
    border-bottom: none;
    transform-origin: 100% 100%;
    animation: sc-half-top 5s linear infinite;
  }

  @keyframes sc-half-top {
    0% { width: 0; transform: rotate(0deg); }
    85% { width: 84px; transform: rotate(-6deg); }
    /* Reset (new sheet). */
    90% { width: 84px; }
    92% { width: 0; transform: rotate(0deg); }
    100% { width: 0; }
  }

  /* Lower cut half: peels down. */
  .sc-half-bot {
    position: absolute;
    right: 12px;
    top: 42px;
    width: 0;
    height: 20px;
    background: linear-gradient(180deg, rgba(0, 80, 16, 0.5), rgba(0, 130, 26, 0.4));
    border: 1px solid rgba(140, 255, 170, 0.5);
    border-top: none;
    transform-origin: 100% 0%;
    animation: sc-half-bot 5s linear infinite;
  }

  @keyframes sc-half-bot {
    0% { width: 0; transform: rotate(0deg); }
    85% { width: 84px; transform: rotate(6deg); }
    90% { width: 84px; }
    92% { width: 0; transform: rotate(0deg); }
    100% { width: 0; }
  }

  /* The scissors: advance leftward while snipping. */
  .sc-tool {
    position: absolute;
    top: 30px;
    right: 8px;
    width: 44px;
    height: 24px;
    animation: sc-advance 5s linear infinite;
  }

  @keyframes sc-advance {
    0% { transform: translateX(0); }
    85% { transform: translateX(-84px); }
    90% { transform: translateX(-84px); }
    92% { transform: translateX(0); }
    100% { transform: translateX(0); }
  }

  /* Pivot screw. */
  .sc-pivot {
    position: absolute;
    right: 18px;
    top: 11px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.7);
    z-index: 3;
  }

  /* Blades: pivot at the screw, opening/closing. Point to the left. */
  .sc-blade {
    position: absolute;
    right: 20px;
    top: 12px;
    width: 30px;
    height: 3px;
    transform-origin: 100% 50%;
  }

  .sc-blade::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 2px 0 0 2px;
    background: linear-gradient(90deg, rgba(214, 255, 224, 0.95), rgba(0, 130, 26, 0.85));
  }

  .sc-blade.top { animation: sc-snip-top 0.5s ease-in-out infinite; }
  .sc-blade.bot { animation: sc-snip-bot 0.5s ease-in-out infinite; }

  @keyframes sc-snip-top {
    0%, 100% { transform: rotate(-16deg); }
    50% { transform: rotate(-2deg); }
  }

  @keyframes sc-snip-bot {
    0%, 100% { transform: rotate(16deg); }
    50% { transform: rotate(2deg); }
  }

  /* Finger-loop handles on the right. */
  .sc-handle {
    position: absolute;
    right: 0;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(140, 255, 170, 0.85);
    border-radius: 50%;
    transform-origin: 0% 50%;
  }

  .sc-handle.top { top: 2px; animation: sc-hand-top 0.5s ease-in-out infinite; }
  .sc-handle.bot { top: 12px; animation: sc-hand-bot 0.5s ease-in-out infinite; }

  @keyframes sc-hand-top {
    0%, 100% { transform: rotate(14deg); }
    50% { transform: rotate(2deg); }
  }

  @keyframes sc-hand-bot {
    0%, 100% { transform: rotate(-14deg); }
    50% { transform: rotate(-2deg); }
  }

  /* Snip spark at the blade tips. */
  .sc-spark {
    position: absolute;
    left: 0;
    top: 12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    animation: sc-spark 0.5s steps(1) infinite;
  }

  @keyframes sc-spark {
    0%, 40% { opacity: 0; }
    50% { opacity: 1; }
    60%, 100% { opacity: 0; }
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

  .sc {
    width: 116px;
    height: 92px;
    position: relative;
  }

  /* Paper sheet, filling most of the frame. */
  .sc-paper {
    position: absolute;
    left: 4px;
    top: 26px;
    width: 108px;
    height: 44px;
    border: 1px solid rgba(140, 255, 170, 0.6);
    background: linear-gradient(180deg, rgba(0, 40, 8, 0.5), rgba(0, 25, 5, 0.6));
  }

  /* Cut-line guide (dashes), only visible ahead of the blades. */
  .sc-line {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 48px;
    height: 1px;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.6) 0 4px,
      transparent 4px 8px);
  }

  /* Cut halves: start as the paper's full height, split and curl apart
     behind the advancing blades. */
  .sc-half-top {
    position: absolute;
    right: 10px;
    top: 26px;
    width: 0;
    height: 22px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.5), rgba(0, 90, 18, 0.55));
    border: 1px solid rgba(140, 255, 170, 0.55);
    border-bottom: none;
    transform-origin: 100% 100%;
    animation: sc-half-top 5s linear infinite;
  }

  @keyframes sc-half-top {
    0% { width: 0; transform: rotate(0deg); }
    85% { width: 96px; transform: rotate(-8deg); }
    90% { width: 96px; }
    92% { width: 0; transform: rotate(0deg); }
    100% { width: 0; }
  }

  .sc-half-bot {
    position: absolute;
    right: 10px;
    top: 48px;
    width: 0;
    height: 22px;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.55), rgba(0, 150, 30, 0.5));
    border: 1px solid rgba(140, 255, 170, 0.55);
    border-top: none;
    transform-origin: 100% 0%;
    animation: sc-half-bot 5s linear infinite;
  }

  @keyframes sc-half-bot {
    0% { width: 0; transform: rotate(0deg); }
    85% { width: 96px; transform: rotate(8deg); }
    90% { width: 96px; }
    92% { width: 0; transform: rotate(0deg); }
    100% { width: 0; }
  }

  /* The scissors: bigger, advancing leftward while snipping. */
  .sc-tool {
    position: absolute;
    top: 22px;
    right: 6px;
    width: 62px;
    height: 34px;
    animation: sc-advance 5s linear infinite;
  }

  @keyframes sc-advance {
    0% { transform: translateX(0); }
    85% { transform: translateX(-96px); }
    90% { transform: translateX(-96px); }
    92% { transform: translateX(0); }
    100% { transform: translateX(0); }
  }

  /* Pivot screw. */
  .sc-pivot {
    position: absolute;
    right: 24px;
    top: 15px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d6ffe0;
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
    z-index: 3;
  }

  /* Blades: pivot at the screw, opening/closing, pointed left. */
  .sc-blade {
    position: absolute;
    right: 27px;
    top: 17px;
    width: 40px;
    height: 4px;
    transform-origin: 100% 50%;
  }

  .sc-blade::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 2px 0 0 2px;
    background: linear-gradient(90deg, rgba(214, 255, 224, 0.95), rgba(0, 150, 30, 0.85));
    box-shadow: 0 0 3px rgba(0, 204, 0, 0.3);
  }

  .sc-blade.top { animation: sc-snip-top 0.5s ease-in-out infinite; }
  .sc-blade.bot { animation: sc-snip-bot 0.5s ease-in-out infinite; }

  @keyframes sc-snip-top {
    0%, 100% { transform: rotate(-20deg); }
    50% { transform: rotate(-2deg); }
  }

  @keyframes sc-snip-bot {
    0%, 100% { transform: rotate(20deg); }
    50% { transform: rotate(2deg); }
  }

  /* Finger-loop handles on the right. */
  .sc-handle {
    position: absolute;
    right: 0;
    width: 16px;
    height: 16px;
    border: 2.5px solid rgba(140, 255, 170, 0.85);
    border-radius: 50%;
    transform-origin: 0% 50%;
  }

  .sc-handle.top { top: 2px; animation: sc-hand-top 0.5s ease-in-out infinite; }
  .sc-handle.bot { top: 16px; animation: sc-hand-bot 0.5s ease-in-out infinite; }

  @keyframes sc-hand-top {
    0%, 100% { transform: rotate(16deg); }
    50% { transform: rotate(2deg); }
  }

  @keyframes sc-hand-bot {
    0%, 100% { transform: rotate(-16deg); }
    50% { transform: rotate(-2deg); }
  }

  /* Snip spark at the blade tips. */
  .sc-spark {
    position: absolute;
    left: -4px;
    top: 15px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    animation: sc-spark 0.5s steps(1) infinite;
  }

  @keyframes sc-spark {
    0%, 40% { opacity: 0; }
    50% { opacity: 1; }
    60%, 100% { opacity: 0; }
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

  /* v3: Polished brass tailor's shears cutting a crimson satin fabric ribbon
     with stainless steel blades, brass handles, and golden snip sparks */
  .scc {
    width: 116px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Crimson Satin Fabric Strip */
  .scc-paper {
    position: absolute;
    left: 4px;
    top: 26px;
    width: 108px;
    height: 44px;
    border: 1px solid #f87171;
    background: linear-gradient(180deg, #991b1b 0%, #dc2626 50%, #7f1d1d 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  }

  /* White Dashed Cutting Guide Line */
  .scc-line {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 48px;
    height: 1.5px;
    background: repeating-linear-gradient(90deg,
      #ffffff 0 4px,
      transparent 4px 8px);
    opacity: 0.8;
  }

  /* Top Ribbon Half: Peels Upward */
  .scc-half-top {
    position: absolute;
    right: 10px;
    top: 26px;
    width: 0;
    height: 22px;
    background: linear-gradient(180deg, #ef4444 0%, #dc2626 100%);
    border: 1px solid #fca5a5;
    border-bottom: none;
    box-shadow: 0 -2px 6px rgba(239, 68, 68, 0.4);
    transform-origin: 100% 100%;
    animation: scc-half-top 5s linear infinite;
  }

  @keyframes scc-half-top {
    0% { width: 0; transform: rotate(0deg); }
    85% { width: 96px; transform: rotate(-8deg); }
    90% { width: 96px; }
    92% { width: 0; transform: rotate(0deg); }
    100% { width: 0; }
  }

  /* Bottom Ribbon Half: Peels Downward */
  .scc-half-bot {
    position: absolute;
    right: 10px;
    top: 48px;
    width: 0;
    height: 22px;
    background: linear-gradient(180deg, #b91c1c 0%, #991b1b 100%);
    border: 1px solid #fca5a5;
    border-top: none;
    box-shadow: 0 2px 6px rgba(185, 28, 28, 0.4);
    transform-origin: 100% 0%;
    animation: scc-half-bot 5s linear infinite;
  }

  @keyframes scc-half-bot {
    0% { width: 0; transform: rotate(0deg); }
    85% { width: 96px; transform: rotate(8deg); }
    90% { width: 96px; }
    92% { width: 0; transform: rotate(0deg); }
    100% { width: 0; }
  }

  /* Shears Tool Assembly */
  .scc-tool {
    position: absolute;
    top: 22px;
    right: 6px;
    width: 62px;
    height: 34px;
    animation: scc-advance 5s linear infinite;
  }

  @keyframes scc-advance {
    0% { transform: translateX(0); }
    85% { transform: translateX(-96px); }
    90% { transform: translateX(-96px); }
    92% { transform: translateX(0); }
    100% { transform: translateX(0); }
  }

  /* Brass Pivot Bolt */
  .scc-pivot {
    position: absolute;
    right: 24px;
    top: 15px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 0 0 6px #facc15;
    z-index: 3;
  }

  /* High-Carbon Stainless Steel Blades */
  .scc-blade {
    position: absolute;
    right: 27px;
    top: 17px;
    width: 40px;
    height: 4px;
    transform-origin: 100% 50%;
  }

  .scc-blade::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 2px 0 0 2px;
    background: linear-gradient(90deg, #f8fafc 0%, #cbd5e1 50%, #94a3b8 100%);
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.6);
  }

  .scc-blade.top { animation: scc-snip-top 0.5s ease-in-out infinite; }
  .scc-blade.bot { animation: scc-snip-bot 0.5s ease-in-out infinite; }

  @keyframes scc-snip-top {
    0%, 100% { transform: rotate(-20deg); }
    50% { transform: rotate(-2deg); }
  }

  @keyframes scc-snip-bot {
    0%, 100% { transform: rotate(20deg); }
    50% { transform: rotate(2deg); }
  }

  /* Polished Brass Loop Handles */
  .scc-handle {
    position: absolute;
    right: 0;
    width: 16px;
    height: 16px;
    border: 2.5px solid #facc15;
    background: radial-gradient(circle, transparent 40%, rgba(202, 138, 4, 0.3) 100%);
    box-shadow: 0 0 6px rgba(250, 204, 21, 0.5);
    border-radius: 50%;
    transform-origin: 0% 50%;
  }

  .scc-handle.top { top: 2px; animation: scc-hand-top 0.5s ease-in-out infinite; }
  .scc-handle.bot { top: 16px; animation: scc-hand-bot 0.5s ease-in-out infinite; }

  @keyframes scc-hand-top {
    0%, 100% { transform: rotate(16deg); }
    50% { transform: rotate(2deg); }
  }

  @keyframes scc-hand-bot {
    0%, 100% { transform: rotate(-16deg); }
    50% { transform: rotate(-2deg); }
  }

  /* Golden Snip Cutting Spark */
  .scc-spark {
    position: absolute;
    left: -4px;
    top: 15px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, #fde047 0%, #facc15 50%, transparent 75%);
    box-shadow: 0 0 8px #facc15;
    animation: scc-spark 0.5s steps(1) infinite;
  }

  @keyframes scc-spark {
    0%, 40% { opacity: 0; }
    50% { opacity: 1; }
    60%, 100% { opacity: 0; }
  }
  `,
};

const scissorsMarkup = {
  v1: `
      <div class="sc">
        <div class="sc-paper"></div>
        <div class="sc-line"></div>
        <div class="sc-half-top"></div>
        <div class="sc-half-bot"></div>
        <div class="sc-tool">
          <div class="sc-spark"></div>
          <div class="sc-blade top"></div>
          <div class="sc-blade bot"></div>
          <div class="sc-pivot"></div>
          <div class="sc-handle top"></div>
          <div class="sc-handle bot"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="sc">
        <div class="sc-paper"></div>
        <div class="sc-line"></div>
        <div class="sc-half-top"></div>
        <div class="sc-half-bot"></div>
        <div class="sc-tool">
          <div class="sc-spark"></div>
          <div class="sc-blade top"></div>
          <div class="sc-blade bot"></div>
          <div class="sc-pivot"></div>
          <div class="sc-handle top"></div>
          <div class="sc-handle bot"></div>
        </div>
      </div>
    `,
  v3: `
      <div class="scc">
        <div class="scc-paper"></div>
        <div class="scc-line"></div>
        <div class="scc-half-top"></div>
        <div class="scc-half-bot"></div>
        <div class="scc-tool">
          <div class="scc-spark"></div>
          <div class="scc-blade top"></div>
          <div class="scc-blade bot"></div>
          <div class="scc-pivot"></div>
          <div class="scc-handle top"></div>
          <div class="scc-handle bot"></div>
        </div>
      </div>
    `,
};

class ConceptScissors extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${scissorsStyles[version] || scissorsStyles.v3}</style>${scissorsMarkup[version] || scissorsMarkup.v3}`;
  }
}

if (!customElements.get('concept-scissors')) {
  customElements.define('concept-scissors', ConceptScissors);
}
