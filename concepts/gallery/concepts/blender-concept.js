const blenderStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Pulse-blend cycle: the blades spin up, the liquid surface whips
     into a vortex with bubbles climbing the tapered jar, then
     everything settles between pulses. */
  .blender {
    width: 104px;
    height: 98px;
    position: relative;
  }

  /* Tapered glass: wider at the rim, narrower at the floor. The glass
     itself is borderless and clipped; the walls are drawn as slanted
     lines so the taper reads clearly. */
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

  /* Liquid: sits low in the glass; its surface whips into a vortex
     dip mid-pulse. Clipped to the taper by the glass. */
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

  /* Measurement ticks on the left wall. */
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

  /* Two short angled blades just above the floor. */
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

  /* Spin-up, hold at speed (blur), spin-down. */
  @keyframes blender-blade {
    0%, 14% { transform: rotate(0deg); filter: blur(0); }
    20% { transform: rotate(340deg); filter: blur(0.5px); }
    58% { transform: rotate(2900deg); filter: blur(1.5px); }
    66% { transform: rotate(3060deg); filter: blur(0); }
    100% { transform: rotate(3060deg); filter: blur(0); }
  }

  /* Bubbles climbing the wall during the pulse. */
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

  /* Lid: overhangs the rim, with a small filler cap. */
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

  /* Motor base: wider than the jar foot, with dial and pulse lamp. */
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

  /* Dial pointer swings to speed during the pulse. */
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
`;

class ConceptBlender extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${blenderStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-blender')) {
  customElements.define('concept-blender', ConceptBlender);
}
