const blenderStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .blender {
    width: 104px;
    height: 98px;
    position: relative;
  }

  .blender-jar {
    position: absolute;
    left: 28px;
    top: 8px;
    width: 48px;
    height: 52px;
    animation: blender-shake 3.8s infinite;
  }

  @keyframes blender-shake {
    0%, 18%, 62%, 100% { transform: translate(0, 0); }
    24% { transform: translate(-1px, 0.5px); }
    30% { transform: translate(1px, -0.5px); }
    36% { transform: translate(-1px, 0); }
    42% { transform: translate(1px, 0.5px); }
    48% { transform: translate(-0.5px, 0); }
    54% { transform: translate(0.5px, 0); }
  }

  .blender-glass {
    position: absolute;
    inset: 0;
    clip-path: polygon(2% 0, 98% 0, 84% 100%, 16% 100%);
    background: linear-gradient(180deg, rgba(0, 40, 8, 0.25), rgba(0, 30, 6, 0.45));
    overflow: hidden;
  }

  .blender-wall {
    position: absolute;
    top: -1px;
    width: 2px;
    height: 54px;
    background: var(--accent, #00cc00);
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.4);
  }

  .blender-wall.left { left: 2px; transform: rotate(-7.5deg); transform-origin: top center; }
  .blender-wall.right { right: 2px; transform: rotate(7.5deg); transform-origin: top center; }

  .blender-floor {
    position: absolute;
    bottom: 0;
    left: 8px;
    right: 8px;
    height: 2px;
    background: var(--accent, #00cc00);
  }

  .blender-liquid {
    position: absolute;
    left: -4px;
    right: -4px;
    bottom: 0;
    height: 22px;
    background: linear-gradient(180deg, rgba(0, 140, 28, 0.5), rgba(0, 60, 12, 0.8));
    border-radius: 40% 40% 0 0 / 26% 26% 0 0;
    animation: blender-liquid 3.8s ease-in-out infinite;
  }

  @keyframes blender-liquid {
    0%, 16%, 66%, 100% { border-radius: 40% 40% 0 0 / 10% 10% 0 0; height: 22px; }
    30% { border-radius: 62% 58% 0 0 / 84% 78% 0 0; height: 28px; }
    44% { border-radius: 55% 65% 0 0 / 74% 88% 0 0; height: 27px; }
    56% { border-radius: 60% 56% 0 0 / 80% 72% 0 0; height: 28px; }
  }

  .blender-ticks {
    position: absolute;
    left: 8px;
    top: 8px;
    bottom: 8px;
    width: 6px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.5) 0 1px,
      transparent 1px 9px);
    transform: rotate(-7.5deg);
  }

  .blender-blade {
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 14px;
    height: 8px;
    margin-left: -7px;
    animation: blender-blade 3.8s infinite;
  }

  .blender-blade::before,
  .blender-blade::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 7px;
    height: 2px;
    background: #baffc9;
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.8);
  }

  .blender-blade::before { transform: rotate(-28deg); margin-left: -7px; border-radius: 1px 0 0 1px; }
  .blender-blade::after { transform: rotate(28deg); border-radius: 0 1px 1px 0; }

  @keyframes blender-blade {
    0%, 14% { transform: rotate(0deg); filter: blur(0); }
    20% { transform: rotate(340deg); filter: blur(0.5px); }
    58% { transform: rotate(2900deg); filter: blur(1.5px); }
    66% { transform: rotate(3060deg); filter: blur(0); }
    100% { transform: rotate(3060deg); filter: blur(0); }
  }

  .blender-bubble {
    position: absolute;
    bottom: 6px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    border: 1px solid rgba(190, 255, 205, 0.8);
    opacity: 0;
    animation: blender-bubble 3.8s infinite;
  }

  .blender-bubble.b1 { left: 12px; --by: -24px; }
  .blender-bubble.b2 { right: 13px; --by: -28px; animation-delay: 0.25s; }
  .blender-bubble.b3 { left: 22px; --by: -18px; animation-delay: 0.5s; }

  @keyframes blender-bubble {
    0%, 22% { transform: translateY(0) scale(0.6); opacity: 0; }
    30% { opacity: 0.9; }
    52% { transform: translateY(var(--by)) scale(1.1); opacity: 0; }
    100% { opacity: 0; }
  }

  .blender-lid {
    position: absolute;
    left: 24px;
    top: 4px;
    width: 56px;
    height: 4px;
    border-radius: 2px;
    border: 1px solid rgba(140, 255, 170, 0.85);
    background: rgba(0, 60, 12, 0.6);
  }

  .blender-lid::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    width: 12px;
    height: 3px;
    margin-left: -6px;
    border-radius: 2px 2px 0 0;
    border: 1px solid rgba(140, 255, 170, 0.7);
    border-bottom: none;
    background: rgba(0, 40, 8, 0.6);
  }

  .blender-base {
    position: absolute;
    left: 22px;
    bottom: 8px;
    width: 60px;
    height: 22px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px 4px 9px 9px;
    background: linear-gradient(180deg, rgba(0, 60, 12, 0.6), rgba(0, 25, 5, 0.8));
  }

  .blender-dial {
    position: absolute;
    left: 8px;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.8);
  }

  .blender-dial::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 1px;
    background: #d6ffe0;
    transform-origin: 0 50%;
    animation: blender-dial 3.8s infinite;
  }

  @keyframes blender-dial {
    0%, 14% { transform: rotate(160deg); }
    18%, 60% { transform: rotate(20deg); }
    66%, 100% { transform: rotate(160deg); }
  }

  .blender-lamp {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent, #00cc00);
    animation: blender-lamp 3.8s steps(1) infinite;
  }

  @keyframes blender-lamp {
    0%, 14% { opacity: 0.25; box-shadow: none; }
    16%, 62% { opacity: 1; box-shadow: 0 0 7px rgba(0, 204, 0, 0.9); }
    64%, 100% { opacity: 0.25; box-shadow: none; }
  }

  .blender-foot {
    position: absolute;
    left: 28px;
    bottom: 4px;
    width: 48px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.45);
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

  /* v2: High-speed kitchen blender with stainless motor base, clear glass jar,
     swirling crimson berry smoothie vortex, spinning steel blades, and LED power lamp */
  .blenderc {
    width: 104px;
    height: 98px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Shaking jar assembly */
  .blenderc-jar {
    position: absolute;
    left: 28px;
    top: 8px;
    width: 48px;
    height: 52px;
    animation: blenderc-shake 3.8s infinite;
  }

  @keyframes blenderc-shake {
    0%, 18%, 62%, 100% { transform: translate(0, 0); }
    24% { transform: translate(-1px, 0.5px); }
    30% { transform: translate(1px, -0.5px); }
    36% { transform: translate(-1px, 0); }
    42% { transform: translate(1px, 0.5px); }
    48% { transform: translate(-0.5px, 0); }
    54% { transform: translate(0.5px, 0); }
  }

  /* Tapered transparent glass pitcher */
  .blenderc-glass {
    position: absolute;
    inset: 0;
    clip-path: polygon(2% 0, 98% 0, 84% 100%, 16% 100%);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(56, 189, 248, 0.15) 100%);
    box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.3);
    overflow: hidden;
  }

  .blenderc-wall {
    position: absolute;
    top: -1px;
    width: 2px;
    height: 54px;
    background: #38bdf8;
    box-shadow: 0 0 4px #00f0ff;
  }

  .blenderc-wall.left { left: 2px; transform: rotate(-7.5deg); transform-origin: top center; }
  .blenderc-wall.right { right: 2px; transform: rotate(7.5deg); transform-origin: top center; }

  .blenderc-floor {
    position: absolute;
    bottom: 0;
    left: 8px;
    right: 8px;
    height: 2px;
    background: #94a3b8;
  }

  /* Swirling raspberry-strawberry smoothie liquid vortex */
  .blenderc-liquid {
    position: absolute;
    left: -4px;
    right: -4px;
    bottom: 0;
    height: 22px;
    background: linear-gradient(180deg, #fb7185 0%, #e11d48 50%, #881337 100%);
    box-shadow: 0 0 10px rgba(225, 29, 72, 0.8);
    border-radius: 40% 40% 0 0 / 26% 26% 0 0;
    animation: blenderc-liquid 3.8s ease-in-out infinite;
  }

  @keyframes blenderc-liquid {
    0%, 16%, 66%, 100% { border-radius: 40% 40% 0 0 / 10% 10% 0 0; height: 22px; }
    30% { border-radius: 62% 58% 0 0 / 84% 78% 0 0; height: 28px; }
    44% { border-radius: 55% 65% 0 0 / 74% 88% 0 0; height: 27px; }
    56% { border-radius: 60% 56% 0 0 / 80% 72% 0 0; height: 28px; }
  }

  /* Pitcher volume scale ticks */
  .blenderc-ticks {
    position: absolute;
    left: 8px;
    top: 8px;
    bottom: 8px;
    width: 6px;
    background: repeating-linear-gradient(180deg,
      #38bdf8 0 1px,
      transparent 1px 9px);
    transform: rotate(-7.5deg);
  }

  /* Stainless steel high-speed blades */
  .blenderc-blade {
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 14px;
    height: 8px;
    margin-left: -7px;
    animation: blenderc-blade 3.8s infinite;
  }

  .blenderc-blade::before,
  .blenderc-blade::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 7px;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 0 4px #cbd5e1;
  }

  .blenderc-blade::before { transform: rotate(-28deg); margin-left: -7px; border-radius: 1px 0 0 1px; }
  .blenderc-blade::after { transform: rotate(28deg); border-radius: 0 1px 1px 0; }

  @keyframes blenderc-blade {
    0%, 14% { transform: rotate(0deg); filter: blur(0); }
    20% { transform: rotate(340deg); filter: blur(0.5px); }
    58% { transform: rotate(2900deg); filter: blur(1.5px); }
    66% { transform: rotate(3060deg); filter: blur(0); }
    100% { transform: rotate(3060deg); filter: blur(0); }
  }

  /* Whipped smoothie bubbles */
  .blenderc-bubble {
    position: absolute;
    bottom: 6px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffe4e6;
    border: 1px solid #f43f5e;
    box-shadow: 0 0 4px #fb7185;
    opacity: 0;
    animation: blenderc-bubble 3.8s infinite;
  }

  .blenderc-bubble.b1 { left: 12px; --by: -24px; }
  .blenderc-bubble.b2 { right: 13px; --by: -28px; animation-delay: 0.25s; }
  .blenderc-bubble.b3 { left: 22px; --by: -18px; animation-delay: 0.5s; }

  @keyframes blenderc-bubble {
    0%, 22% { transform: translateY(0) scale(0.6); opacity: 0; }
    30% { opacity: 0.95; }
    52% { transform: translateY(var(--by)) scale(1.1); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Rubberized airtight lid with central plug */
  .blenderc-lid {
    position: absolute;
    left: 24px;
    top: 4px;
    width: 56px;
    height: 4px;
    border-radius: 2px;
    border: 1px solid #475569;
    background: #18181b;
  }

  .blenderc-lid::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    width: 12px;
    height: 3px;
    margin-left: -6px;
    border-radius: 2px 2px 0 0;
    border: 1px solid #64748b;
    border-bottom: none;
    background: #09090b;
  }

  /* Brushed stainless steel motor base */
  .blenderc-base {
    position: absolute;
    left: 22px;
    bottom: 8px;
    width: 60px;
    height: 22px;
    border: 2px solid #64748b;
    border-radius: 4px 4px 9px 9px;
    background: linear-gradient(180deg, #475569 0%, #1e293b 60%, #0f172a 100%);
    box-shadow: inset 0 1px 2px #cbd5e1, 0 4px 10px rgba(0, 0, 0, 0.8);
  }

  /* Rotary chrome speed dial */
  .blenderc-dial {
    position: absolute;
    left: 8px;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #334155;
    border: 1px solid #cbd5e1;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }

  .blenderc-dial::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 1px;
    background: #38bdf8;
    transform-origin: 0 50%;
    animation: blenderc-dial 3.8s infinite;
  }

  @keyframes blenderc-dial {
    0%, 14% { transform: rotate(160deg); }
    18%, 60% { transform: rotate(20deg); }
    66%, 100% { transform: rotate(160deg); }
  }

  /* Power status pilot LED */
  .blenderc-lamp {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    animation: blenderc-lamp 3.8s steps(1) infinite;
  }

  @keyframes blenderc-lamp {
    0%, 14% { opacity: 0.25; box-shadow: none; }
    16%, 62% { opacity: 1; box-shadow: 0 0 8px #22c55e, 0 0 12px #4ade80; }
    64%, 100% { opacity: 0.25; box-shadow: none; }
  }

  /* Non-slip rubber feet */
  .blenderc-foot {
    position: absolute;
    left: 28px;
    bottom: 4px;
    width: 48px;
    height: 4px;
    border-radius: 2px;
    background: #09090b;
  }
  `,
};

const blenderMarkup = {
  v1: `
      <div class="blender">
        <div class="blender-jar">
          <div class="blender-glass">
            <div class="blender-liquid"></div>
            <div class="blender-bubble b1"></div>
            <div class="blender-bubble b2"></div>
            <div class="blender-bubble b3"></div>
            <div class="blender-blade"></div>
          </div>
          <div class="blender-ticks"></div>
          <div class="blender-wall left"></div>
          <div class="blender-wall right"></div>
          <div class="blender-floor"></div>
        </div>
        <div class="blender-lid"></div>
        <div class="blender-base">
          <div class="blender-dial"></div>
          <div class="blender-lamp"></div>
        </div>
        <div class="blender-foot"></div>
      </div>
    `,
  v2: `
      <div class="blenderc">
        <div class="blenderc-jar">
          <div class="blenderc-glass">
            <div class="blenderc-liquid"></div>
            <div class="blenderc-bubble b1"></div>
            <div class="blenderc-bubble b2"></div>
            <div class="blenderc-bubble b3"></div>
            <div class="blenderc-blade"></div>
          </div>
          <div class="blenderc-ticks"></div>
          <div class="blenderc-wall left"></div>
          <div class="blenderc-wall right"></div>
          <div class="blenderc-floor"></div>
        </div>
        <div class="blenderc-lid"></div>
        <div class="blenderc-base">
          <div class="blenderc-dial"></div>
          <div class="blenderc-lamp"></div>
        </div>
        <div class="blenderc-foot"></div>
      </div>
    `,
};

class ConceptBlender extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${blenderStyles[version] || blenderStyles.v2}</style>${blenderMarkup[version] || blenderMarkup.v2}`;
  }
}

if (!customElements.get('concept-blender')) {
  customElements.define('concept-blender', ConceptBlender);
}
