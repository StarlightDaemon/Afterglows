const wipersStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Looking out the windshield in the rain: streaks fall steadily,
     and every 2.6s the two blades sweep across in tandem, dragging a
     brief clean-wake highlight behind them. */
  .wp {
    width: 116px;
    height: 88px;
    position: relative;
  }

  .wp-glass {
    position: absolute;
    inset: 0 4px 14px 4px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 14px 14px 6px 6px;
    background: linear-gradient(180deg, rgba(0, 40, 8, 0.35), rgba(0, 18, 4, 0.6));
    overflow: hidden;
  }

  /* Rain streaks angling down the glass. */
  .wp-drop {
    position: absolute;
    width: 1.5px;
    height: 7px;
    border-radius: 1px;
    background: linear-gradient(180deg, transparent, rgba(190, 255, 205, 0.8));
    transform: rotate(14deg);
    animation: wp-drop linear infinite;
  }

  .wp-drop.d1 { left: 12%; animation-duration: 1.1s; }
  .wp-drop.d2 { left: 26%; animation-duration: 0.9s; animation-delay: -0.4s; }
  .wp-drop.d3 { left: 41%; animation-duration: 1.25s; animation-delay: -0.7s; }
  .wp-drop.d4 { left: 55%; animation-duration: 0.95s; animation-delay: -0.2s; }
  .wp-drop.d5 { left: 68%; animation-duration: 1.15s; animation-delay: -0.55s; }
  .wp-drop.d6 { left: 82%; animation-duration: 1s; animation-delay: -0.85s; }
  .wp-drop.d7 { left: 92%; animation-duration: 1.2s; animation-delay: -0.3s; }

  @keyframes wp-drop {
    0% { top: -10px; opacity: 0; }
    12% { opacity: 0.9; }
    100% { top: 74px; opacity: 0.55; }
  }

  /* Beaded droplets that sit on the glass between sweeps. */
  .wp-bead {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, rgba(214, 255, 224, 0.9), rgba(0, 204, 0, 0.3));
    animation: wp-bead 2.6s infinite;
  }

  .wp-bead.b1 { left: 22%; top: 30%; width: 3px; height: 3px; }
  .wp-bead.b2 { left: 58%; top: 18%; width: 4px; height: 4px; animation-delay: -0.1s; }
  .wp-bead.b3 { left: 76%; top: 44%; width: 3px; height: 3px; animation-delay: -0.2s; }

  /* Beads accumulate, then vanish as the blade passes (~55%). */
  @keyframes wp-bead {
    0%, 8% { opacity: 0; transform: scale(0.4); }
    30% { opacity: 0.9; transform: scale(1); }
    52% { opacity: 0.9; }
    56%, 100% { opacity: 0; transform: scale(0.3); }
  }

  /* Wiper arms: pivots at the cowl, sweeping together. */
  .wp-arm {
    position: absolute;
    bottom: 12px;
    width: 3px;
    height: 52px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.95), rgba(0, 204, 0, 0.7));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
    transform-origin: 50% 100%;
    animation: wp-sweep 2.6s ease-in-out infinite;
  }

  .wp-arm.a1 { left: 28px; }
  .wp-arm.a2 { left: 76px; }

  /* Blade shoe at the arm tip. */
  .wp-arm::after {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    width: 16px;
    height: 3px;
    margin-left: -8px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.95);
  }

  @keyframes wp-sweep {
    0%, 34% { transform: rotate(-38deg); }
    52% { transform: rotate(38deg); }
    58% { transform: rotate(34deg); }
    76%, 100% { transform: rotate(-38deg); }
  }

  /* Clean wake: a soft bright fan that chases each blade. */
  .wp-wake {
    position: absolute;
    bottom: 12px;
    width: 30px;
    height: 48px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.18), transparent 80%);
    transform-origin: 50% 100%;
    opacity: 0;
    animation: wp-wake 2.6s ease-in-out infinite;
  }

  .wp-wake.w1 { left: 15px; }
  .wp-wake.w2 { left: 63px; }

  @keyframes wp-wake {
    0%, 36% { transform: rotate(-30deg); opacity: 0; }
    46% { transform: rotate(6deg); opacity: 0.8; }
    58% { transform: rotate(30deg); opacity: 0.3; }
    66%, 100% { transform: rotate(-30deg); opacity: 0; }
  }

  /* Cowl the arms pivot from. */
  .wp-cowl {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(0, 90, 18, 0.8), rgba(0, 40, 8, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }
`;

class ConceptWipers extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${wipersStyles}</style>
      <div class="wp">
        <div class="wp-glass">
          <div class="wp-drop d1"></div>
          <div class="wp-drop d2"></div>
          <div class="wp-drop d3"></div>
          <div class="wp-drop d4"></div>
          <div class="wp-drop d5"></div>
          <div class="wp-drop d6"></div>
          <div class="wp-drop d7"></div>
          <div class="wp-bead b1"></div>
          <div class="wp-bead b2"></div>
          <div class="wp-bead b3"></div>
          <div class="wp-wake w1"></div>
          <div class="wp-wake w2"></div>
          <div class="wp-arm a1"></div>
          <div class="wp-arm a2"></div>
        </div>
        <div class="wp-cowl"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-wipers')) {
  customElements.define('concept-wipers', ConceptWipers);
}
