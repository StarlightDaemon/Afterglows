const tardigradeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tdg {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Microscopic moss leaf strand substrate */
  .tdg-moss {
    position: absolute;
    bottom: 18px;
    width: 110px;
    height: 12px;
    background: linear-gradient(180deg, #008818, #012208);
    border-top: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  /* Water bear body assembly */
  .tdg-bear {
    position: relative;
    width: 82px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: tdg-waddle 2.4s ease-in-out infinite alternate;
  }

  @keyframes tdg-waddle {
    0% { transform: translateY(-1px) rotate(-1deg); }
    100% { transform: translateY(1px) rotate(1deg); }
  }

  /* 4 Plump segmented body cuticle lobes */
  .tdg-cuticle {
    position: absolute;
    height: 32px;
    background: radial-gradient(circle at 40% 30%, #8cffaa 0%, #008818 60%, #011f07 100%);
    border: 1.5px solid #d6ffe0;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
  }

  .tdg-cuticle.c1 { left: 16px; width: 20px; z-index: 4; } /* Head */
  .tdg-cuticle.c2 { left: 28px; width: 22px; z-index: 3; }
  .tdg-cuticle.c3 { left: 42px; width: 22px; z-index: 2; }
  .tdg-cuticle.c4 { left: 56px; width: 20px; z-index: 1; } /* Rear */

  /* Tubular snout / mouthcone */
  .tdg-snout {
    position: absolute;
    left: 8px;
    top: 18px;
    width: 10px;
    height: 8px;
    background: #ffffff;
    border: 1px solid #00aa22;
    border-radius: 4px;
    box-shadow: 0 0 4px #8cffaa;
    z-index: 5;
    animation: tdg-nibble 1.2s ease-in-out infinite alternate;
  }

  @keyframes tdg-nibble {
    0% { transform: scaleX(0.8); }
    100% { transform: scaleX(1.1); }
  }

  /* 4 Pairs of stubby clawed legs with harmonic gait */
  .tdg-leg {
    position: absolute;
    bottom: -4px;
    width: 8px;
    height: 14px;
    background: #8cffaa;
    border: 1px solid #004408;
    border-radius: 4px;
    transform-origin: top center;
    z-index: 5;
  }

  .tdg-leg::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 1px;
    width: 6px;
    height: 3px;
    border-bottom: 2px solid #ffffff;
    border-radius: 50%;
  }

  .tdg-leg.l1 { left: 22px; animation: tdg-step 1.2s ease-in-out infinite alternate; }
  .tdg-leg.l2 { left: 36px; animation: tdg-step 1.2s ease-in-out infinite alternate-reverse; }
  .tdg-leg.l3 { left: 50px; animation: tdg-step 1.2s ease-in-out infinite alternate; }
  .tdg-leg.l4 { left: 64px; animation: tdg-step 1.2s ease-in-out infinite alternate-reverse; }

  @keyframes tdg-step {
    0% { transform: rotate(-22deg); }
    100% { transform: rotate(22deg); }
  }

  /* Microscopic reticle / scale bar */
  .tdg-scale {
    position: absolute;
    top: 6px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: rgba(140, 255, 170, 0.7);
    letter-spacing: 0.5px;
  }
`;

class ConceptTardigrade extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tardigradeStyles}</style>
      <div class="tdg">
        <div class="tdg-scale">200 µm ⟷</div>
        <div class="tdg-moss"></div>

        <div class="tdg-bear">
          <div class="tdg-snout"></div>
          <div class="tdg-cuticle c1"></div>
          <div class="tdg-cuticle c2"></div>
          <div class="tdg-cuticle c3"></div>
          <div class="tdg-cuticle c4"></div>

          <div class="tdg-leg l1"></div>
          <div class="tdg-leg l2"></div>
          <div class="tdg-leg l3"></div>
          <div class="tdg-leg l4"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tardigrade')) {
  customElements.define('concept-tardigrade', ConceptTardigrade);
}
