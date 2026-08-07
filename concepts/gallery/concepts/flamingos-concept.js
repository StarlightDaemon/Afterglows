const flamingosStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A flamingo balancing on a single stilt leg in shallow water: inverted-pendulum
     center-of-gravity micro-shifts, counterbalanced by sinuous S-curve neck
     adjustments and beak dips into water ripples. */
  .flam {
    width: 112px;
    height: 100px;
    position: relative;
  }

  /* Water surface waterline & concentric dipping ripples */
  .flam-water {
    position: absolute;
    left: 8px;
    bottom: 10px;
    width: 96px;
    height: 6px;
    border-top: 1.5px solid var(--accent, #00cc00);
  }

  .flam-ripple {
    position: absolute;
    left: 48px;
    bottom: 8px;
    width: 28px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.8);
    animation: flam-ripple-wash 3.8s ease-out infinite;
    pointer-events: none;
  }

  @keyframes flam-ripple-wash {
    0%, 40% { opacity: 0; transform: scale(0.2); }
    55% { opacity: 0.9; transform: scale(1); }
    80% { opacity: 0; transform: scale(1.8); }
    100% { opacity: 0; }
  }

  /* Standing stilt leg (single pivot anchor) */
  .flam-leg-stand {
    position: absolute;
    left: 56px;
    bottom: 12px;
    width: 2px;
    height: 46px;
    background: rgba(140, 255, 170, 0.9);
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.6);
  }

  /* Tucked second leg */
  .flam-leg-tuck {
    position: absolute;
    left: 50px;
    top: 44px;
    width: 14px;
    height: 16px;
    border-bottom: 2px solid rgba(140, 255, 170, 0.85);
    border-left: 2px solid rgba(140, 255, 170, 0.85);
    border-radius: 0 0 0 6px;
    transform: rotate(20deg);
  }

  /* Inverted pendulum balance carrier: shifts COG */
  .flam-body-rig {
    position: absolute;
    left: 36px;
    top: 10px;
    width: 50px;
    height: 52px;
    transform-origin: 21px 48px;
    animation: flam-balance 3.8s ease-in-out infinite;
  }

  @keyframes flam-balance {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-3.5deg); }
    50% { transform: rotate(2deg); }
    75% { transform: rotate(-1.5deg); }
  }

  /* Oval torso body */
  .flam-torso {
    position: absolute;
    left: 10px;
    top: 26px;
    width: 28px;
    height: 20px;
    border-radius: 50% 60% 40% 50%;
    background: radial-gradient(circle at 40% 40%, rgba(0, 160, 35, 0.9), rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  /* Tail plume */
  .flam-tail {
    position: absolute;
    right: 6px;
    top: 28px;
    width: 10px;
    height: 6px;
    border-radius: 0 6px 6px 0;
    background: rgba(140, 255, 170, 0.75);
  }

  /* S-curve neck assembly with counter-balance dipping */
  .flam-neck-rig {
    position: absolute;
    left: 0;
    top: 0;
    width: 26px;
    height: 36px;
    transform-origin: 18px 30px;
    animation: flam-neck-dip 3.8s ease-in-out infinite;
  }

  @keyframes flam-neck-dip {
    0%, 100% { transform: rotate(0deg); }
    45%, 60% { transform: rotate(18deg) translate(-2px, 8px); }
    80% { transform: rotate(-4deg); }
  }

  /* S-curve neck arch */
  .flam-neck {
    position: absolute;
    left: 8px;
    top: 6px;
    width: 14px;
    height: 26px;
    border-left: 2.5px solid rgba(140, 255, 170, 0.95);
    border-top: 2.5px solid rgba(140, 255, 170, 0.95);
    border-radius: 12px 0 0 12px;
  }

  /* Head with hooked filter-feeding beak */
  .flam-head {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
  }

  .flam-beak {
    position: absolute;
    left: -4px;
    top: 4px;
    width: 8px;
    height: 6px;
    border-bottom: 2px solid var(--accent, #00cc00);
    border-left: 2px solid var(--accent, #00cc00);
    border-radius: 0 0 0 6px;
    transform: rotate(30deg);
  }
`;

class ConceptFlamingos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${flamingosStyles}</style>
      <div class="flam">
        <div class="flam-water"></div>
        <div class="flam-ripple"></div>
        <div class="flam-leg-stand"></div>
        <div class="flam-leg-tuck"></div>
        <div class="flam-body-rig">
          <div class="flam-tail"></div>
          <div class="flam-torso"></div>
          <div class="flam-neck-rig">
            <div class="flam-neck"></div>
            <div class="flam-head">
              <div class="flam-beak"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-flamingos')) {
  customElements.define('concept-flamingos', ConceptFlamingos);
}
