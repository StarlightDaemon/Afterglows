const accordionStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .acc {
    width: 116px;
    height: 94px;
    position: relative;
  }

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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Italian ruby-red celluloid accordion with silver-black pleated bellows,
     ivory keys, chrome trim, and harmonic golden musical note */
  .accc {
    width: 116px;
    height: 94px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Left bass end-board */
  .accc-bass {
    position: absolute;
    left: 8px;
    top: 20px;
    width: 16px;
    height: 54px;
    border-radius: 4px;
    background: linear-gradient(180deg, #ef4444 0%, #991b1b 100%);
    border: 1.5px solid #cbd5e1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.4);
    z-index: 3;
    animation: accc-bass-pump 3.2s ease-in-out infinite;
  }

  @keyframes accc-bass-pump {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(18px); }
  }

  /* Pleated black & silver bellows */
  .accc-bellows {
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

  .accc-fold {
    width: 6px;
    height: 100%;
    background: repeating-linear-gradient(180deg, #f8fafc 0 3px, #18181b 3px 6px);
    border-left: 1px solid #94a3b8;
    border-right: 1px solid #09090b;
    transform-origin: center;
    animation: accc-fold-compress 3.2s ease-in-out infinite;
  }

  .accc-fold:nth-child(even) {
    transform: skewY(6deg);
  }
  .accc-fold:nth-child(odd) {
    transform: skewY(-6deg);
  }

  @keyframes accc-fold-compress {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.55); }
  }

  /* Right treble keyboard box */
  .accc-treble {
    position: absolute;
    right: 14px;
    top: 16px;
    width: 24px;
    height: 62px;
    border-radius: 4px;
    background: linear-gradient(180deg, #ef4444 0%, #991b1b 100%);
    border: 1.5px solid #cbd5e1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.4);
    z-index: 3;
  }

  /* Ivory treble keys */
  .accc-key {
    position: absolute;
    right: 3px;
    width: 14px;
    height: 6px;
    border-radius: 1px;
    background: linear-gradient(90deg, #ffffff, #f1f5f9);
    border: 1px solid #cbd5e1;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    animation: accc-key-press 0.8s ease-in-out infinite alternate;
  }

  .accc-key.k1 { top: 12px; animation-delay: 0s; }
  .accc-key.k2 { top: 22px; animation-delay: -0.3s; }
  .accc-key.k3 { top: 32px; animation-delay: -0.6s; }
  .accc-key.k4 { top: 42px; animation-delay: -0.2s; }

  @keyframes accc-key-press {
    0% { transform: translateX(0); background: #ffffff; }
    100% { transform: translateX(-3px); background: #fef08a; box-shadow: 0 0 6px #fde047; }
  }

  /* Pneumatic exhaust air puff */
  .accc-air {
    position: absolute;
    left: 48px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 70%);
    animation: accc-air-puff 3.2s ease-out infinite;
    pointer-events: none;
  }

  @keyframes accc-air-puff {
    0%, 40% { opacity: 0; transform: scale(0.3) translateY(6px); }
    50% { opacity: 0.9; transform: scale(1.2) translateY(0); }
    70% { opacity: 0; transform: scale(2) translateY(-10px); }
    100% { opacity: 0; }
  }

  /* Harmonic floating musical note */
  .accc-note {
    position: absolute;
    right: 20px;
    top: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #fde047;
    text-shadow: 0 0 8px #facc15;
    animation: accc-note-float 2.4s ease-out infinite;
    pointer-events: none;
  }

  @keyframes accc-note-float {
    0% { opacity: 0; transform: translate(0, 10px) scale(0.6); }
    30% { opacity: 1; }
    100% { opacity: 0; transform: translate(12px, -18px) scale(1.2); }
  }
  `,
};

const accordionMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="accc">
        <div class="accc-bass"></div>
        <div class="accc-bellows">
          <div class="accc-fold"></div>
          <div class="accc-fold"></div>
          <div class="accc-fold"></div>
          <div class="accc-fold"></div>
          <div class="accc-fold"></div>
          <div class="accc-fold"></div>
        </div>
        <div class="accc-treble">
          <div class="accc-key k1"></div>
          <div class="accc-key k2"></div>
          <div class="accc-key k3"></div>
          <div class="accc-key k4"></div>
        </div>
        <div class="accc-air"></div>
        <div class="accc-note">♪</div>
      </div>
    `,
};

class ConceptAccordion extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${accordionStyles[version] || accordionStyles.v2}</style>${accordionMarkup[version] || accordionMarkup.v2}`;
  }
}

if (!customElements.get('concept-accordion')) {
  customElements.define('concept-accordion', ConceptAccordion);
}
