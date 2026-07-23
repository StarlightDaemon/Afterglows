const drillStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A 5.5s bore: trigger lamp on, the bit's flutes race, the drill
     leans in with a fine chatter while the hole deepens and chips
     spray, then it backs out clean. */
  .drl {
    width: 116px;
    height: 88px;
    position: relative;
  }

  /* Wall being drilled, on the right. */
  .drl-wall {
    position: absolute;
    right: 0;
    top: 4px;
    bottom: 4px;
    width: 18px;
    border: 2px solid var(--accent, #00cc00);
    border-right: none;
    background:
      repeating-linear-gradient(45deg, rgba(0, 204, 0, 0.12) 0 4px, transparent 4px 9px),
      rgba(0, 40, 8, 0.6);
  }

  /* The deepening hole. */
  .drl-hole {
    position: absolute;
    right: 12px;
    top: 40px;
    width: 0;
    height: 6px;
    border-radius: 3px 0 0 3px;
    background: #020602;
    border: 1px solid rgba(0, 204, 0, 0.4);
    border-right: none;
    animation: drl-hole 5.5s infinite;
  }

  @keyframes drl-hole {
    0%, 18% { width: 0; opacity: 0; }
    22% { width: 2px; opacity: 1; }
    60% { width: 9px; }
    78% { width: 9px; }
    88%, 100% { width: 0; opacity: 0; }
  }

  /* Drill body: advances, chatters, retreats. */
  .drl-body {
    position: absolute;
    left: 2px;
    top: 22px;
    width: 84px;
    height: 46px;
    animation: drl-advance 5.5s ease-in-out infinite;
  }

  @keyframes drl-advance {
    0% { transform: translateX(-8px); }
    18% { transform: translateX(0); }
    24% { transform: translateX(1px) translateY(-0.5px); }
    30% { transform: translateX(2px) translateY(0.5px); }
    36% { transform: translateX(3px) translateY(-0.5px); }
    42% { transform: translateX(4px) translateY(0.5px); }
    48% { transform: translateX(5px) translateY(-0.5px); }
    54% { transform: translateX(6px) translateY(0.5px); }
    60% { transform: translateX(7px); }
    78% { transform: translateX(7px); }
    92%, 100% { transform: translateX(-8px); }
  }

  /* Motor housing. */
  .drl-housing {
    position: absolute;
    left: 12px;
    top: 0;
    width: 42px;
    height: 24px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 6px 10px 4px 4px;
    background: linear-gradient(180deg, rgba(0, 70, 14, 0.6), rgba(0, 30, 6, 0.8));
  }

  /* Vents. */
  .drl-housing::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 5px;
    width: 14px;
    height: 12px;
    background: repeating-linear-gradient(90deg,
      rgba(0, 204, 0, 0.5) 0 2px,
      transparent 2px 5px);
  }

  /* Chuck. */
  .drl-chuck {
    position: absolute;
    left: 54px;
    top: 5px;
    width: 12px;
    height: 14px;
    border-radius: 2px 4px 4px 2px;
    background: linear-gradient(180deg, #baffc9, rgba(0, 120, 24, 0.95));
  }

  /* Bit: flute pattern scrolls to read as spin. */
  .drl-bit {
    position: absolute;
    left: 66px;
    top: 9px;
    width: 26px;
    height: 6px;
    background:
      repeating-linear-gradient(115deg,
        rgba(214, 255, 224, 0.95) 0 3px,
        rgba(0, 110, 22, 0.9) 3px 7px);
    animation: drl-spin 0.4s linear infinite;
  }

  .drl-bit::after {
    content: '';
    position: absolute;
    right: -4px;
    top: 0;
    width: 5px;
    height: 6px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: #d6ffe0;
  }

  @keyframes drl-spin {
    to { background-position: -7px 0; }
  }

  /* Grip and trigger. */
  .drl-grip {
    position: absolute;
    left: 22px;
    top: 22px;
    width: 12px;
    height: 26px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 3px 3px 6px 6px;
    background: rgba(0, 50, 10, 0.7);
    transform: skewX(-8deg);
  }

  .drl-trigger {
    position: absolute;
    left: 37px;
    top: 26px;
    width: 4px;
    height: 8px;
    border-radius: 2px;
    background: #baffc9;
    animation: drl-trigger 5.5s steps(1) infinite;
  }

  @keyframes drl-trigger {
    0%, 8% { transform: translateX(0); box-shadow: none; }
    10%, 80% { transform: translateX(-2px); box-shadow: 0 0 6px rgba(0, 204, 0, 0.9); }
    82%, 100% { transform: translateX(0); box-shadow: none; }
  }

  /* Battery pack. */
  .drl-pack {
    position: absolute;
    left: 18px;
    top: 46px;
    width: 22px;
    height: 9px;
    border-radius: 2px;
    border: 1px solid rgba(140, 255, 170, 0.7);
    background: rgba(0, 90, 18, 0.7);
  }

  /* Chips spraying off the hole while boring. */
  .drl-chip {
    position: absolute;
    right: 22px;
    top: 40px;
    width: 3px;
    height: 2px;
    border-radius: 1px;
    background: #d6ffe0;
    opacity: 0;
    animation: drl-chip 0.8s infinite, drl-chipgate 5.5s steps(1) infinite;
  }

  .drl-chip.c2 { animation-delay: -0.3s, 0s; }
  .drl-chip.c3 { animation-delay: -0.55s, 0s; }

  .drl-chip.c1 { --cx: -14px; --cy: -12px; }
  .drl-chip.c2 { --cx: -18px; --cy: 2px; }
  .drl-chip.c3 { --cx: -10px; --cy: 12px; }

  @keyframes drl-chip {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.95; }
    100% { transform: translate(var(--cx), var(--cy)) rotate(200deg); opacity: 0; }
  }

  @keyframes drl-chipgate {
    0%, 20% { visibility: hidden; }
    22%, 76% { visibility: visible; }
    78%, 100% { visibility: hidden; }
  }

  /* Dust drift settling below the hole. */
  .drl-dustfall {
    position: absolute;
    right: 16px;
    bottom: 8px;
    width: 12px;
    height: 3px;
    border-radius: 50% 50% 0 0;
    background: rgba(140, 255, 170, 0.45);
    transform-origin: bottom center;
    animation: drl-dustfall 5.5s infinite;
  }

  @keyframes drl-dustfall {
    0%, 20% { transform: scale(0.15, 0.2); }
    78% { transform: scale(1, 1); }
    86% { transform: scale(1, 1); }
    92%, 100% { transform: scale(0.15, 0.2); }
  }
`;

class ConceptDrill extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${drillStyles}</style>
      <div class="drl">
        <div class="drl-wall"></div>
        <div class="drl-hole"></div>
        <div class="drl-chip c1"></div>
        <div class="drl-chip c2"></div>
        <div class="drl-chip c3"></div>
        <div class="drl-dustfall"></div>
        <div class="drl-body">
          <div class="drl-housing"></div>
          <div class="drl-chuck"></div>
          <div class="drl-bit"></div>
          <div class="drl-grip"></div>
          <div class="drl-trigger"></div>
          <div class="drl-pack"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-drill')) {
  customElements.define('concept-drill', ConceptDrill);
}
