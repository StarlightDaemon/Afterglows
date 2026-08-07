const accordionStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A concertina accordion in rhythmic performance: pleated bellows expand and
     compress horizontally between end-boards, driving pneumatic air exhaust puffs,
     treble key actuations, and rising harmonic note glyphs. */
  .acc {
    width: 116px;
    height: 94px;
    position: relative;
  }

  /* Left bass end-board */
  .acc-bass {
    position: absolute;
    left: 8px;
    top: 20px;
    width: 16px;
    height: 54px;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(0, 120, 25, 0.85), rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    z-index: 3;
    animation: acc-bass-pump 3.2s ease-in-out infinite;
  }

  @keyframes acc-bass-pump {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(18px); }
  }

  /* Pleated bellows assembly */
  .acc-bellows {
    position: absolute;
    left: 24px;
    top: 22px;
    width: 54px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    z-index: 2;
  }

  .acc-fold {
    width: 6px;
    height: 100%;
    background: repeating-linear-gradient(180deg, rgba(140, 255, 170, 0.6) 0 3px, rgba(0, 60, 12, 0.8) 3px 6px);
    border-left: 1px solid var(--accent, #00cc00);
    border-right: 1px solid rgba(0, 60, 12, 0.8);
    transform-origin: center;
    animation: acc-fold-compress 3.2s ease-in-out infinite;
  }

  .acc-fold:nth-child(even) {
    transform: skewY(6deg);
  }
  .acc-fold:nth-child(odd) {
    transform: skewY(-6deg);
  }

  @keyframes acc-fold-compress {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.55); }
  }

  /* Right treble keyboard box */
  .acc-treble {
    position: absolute;
    right: 14px;
    top: 16px;
    width: 24px;
    height: 62px;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.85), rgba(0, 45, 10, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    z-index: 3;
  }

  /* Treble keys depressing */
  .acc-key {
    position: absolute;
    right: 3px;
    width: 14px;
    height: 6px;
    border-radius: 1px;
    background: rgba(190, 255, 205, 0.95);
    border: 1px solid var(--accent, #00cc00);
    animation: acc-key-press 0.8s ease-in-out infinite alternate;
  }

  .acc-key.k1 { top: 12px; animation-delay: 0s; }
  .acc-key.k2 { top: 22px; animation-delay: -0.3s; }
  .acc-key.k3 { top: 32px; animation-delay: -0.6s; }
  .acc-key.k4 { top: 42px; animation-delay: -0.2s; }

  @keyframes acc-key-press {
    0% { transform: translateX(0); opacity: 0.85; }
    100% { transform: translateX(-3px); opacity: 1; filter: drop-shadow(0 0 3px rgba(140, 255, 170, 0.9)); }
  }

  /* Air exhaust puffing on compression stroke */
  .acc-air {
    position: absolute;
    left: 48px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(140, 255, 170, 0.8), transparent 70%);
    animation: acc-air-puff 3.2s ease-out infinite;
    pointer-events: none;
  }

  @keyframes acc-air-puff {
    0%, 40% { opacity: 0; transform: scale(0.3) translateY(6px); }
    50% { opacity: 0.9; transform: scale(1.2) translateY(0); }
    70% { opacity: 0; transform: scale(2) translateY(-10px); }
    100% { opacity: 0; }
  }

  /* Rising musical note */
  .acc-note {
    position: absolute;
    right: 20px;
    top: 8px;
    font-size: 13px;
    color: rgba(140, 255, 170, 0.95);
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    animation: acc-note-float 2.4s ease-out infinite;
    pointer-events: none;
  }

  @keyframes acc-note-float {
    0% { opacity: 0; transform: translate(0, 10px) scale(0.6); }
    30% { opacity: 1; }
    100% { opacity: 0; transform: translate(12px, -18px) scale(1.2); }
  }
`;

class ConceptAccordion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${accordionStyles}</style>
      <div class="acc">
        <div class="acc-bass"></div>
        <div class="acc-bellows">
          <div class="acc-fold"></div>
          <div class="acc-fold"></div>
          <div class="acc-fold"></div>
          <div class="acc-fold"></div>
          <div class="acc-fold"></div>
          <div class="acc-fold"></div>
        </div>
        <div class="acc-treble">
          <div class="acc-key k1"></div>
          <div class="acc-key k2"></div>
          <div class="acc-key k3"></div>
          <div class="acc-key k4"></div>
        </div>
        <div class="acc-air"></div>
        <div class="acc-note">♪</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-accordion')) {
  customElements.define('concept-accordion', ConceptAccordion);
}
