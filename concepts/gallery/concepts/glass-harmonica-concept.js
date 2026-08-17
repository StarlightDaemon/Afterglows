const glassHarmonicaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gh-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #081826 0%, #02060b 100%);
    border: 1.5px solid rgba(77, 208, 225, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(77, 208, 225, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gh-stage {
    position: relative;
    width: 96px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Mahogany & brass trough stand */
  .gh-trough {
    position: absolute;
    bottom: 10px;
    width: 88px;
    height: 14px;
    background: #102a3a;
    border: 1.2px solid #4dd0e1;
    border-radius: 2px;
    box-shadow: inset 0 0 6px rgba(77, 208, 225, 0.3);
  }

  /* Horizontal rotating spindle shaft */
  .gh-spindle {
    position: absolute;
    top: 32px;
    width: 86px;
    height: 3px;
    background: #ffcc80;
    box-shadow: 0 0 6px #ffb74d;
    z-index: 3;
  }

  /* Nested graduated spinning glass bowls */
  .gh-bowls {
    position: absolute;
    top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    z-index: 4;
  }

  .gh-bowl {
    border: 1.8px solid #e0f7fa;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(224, 247, 250, 0.35) 0%, rgba(77, 208, 225, 0.15) 70%);
    box-shadow: 0 0 8px rgba(77, 208, 225, 0.6);
    animation: gh-spin 1.8s linear infinite;
  }

  @keyframes gh-spin {
    0% { transform: rotate(0deg) scaleY(1); }
    50% { transform: rotate(180deg) scaleY(0.92); }
    100% { transform: rotate(360deg) scaleY(1); }
  }

  .gh-b1 { width: 14px; height: 22px; }
  .gh-b2 { width: 18px; height: 28px; }
  .gh-b3 { width: 22px; height: 34px; }
  .gh-b4 { width: 26px; height: 40px; }

  /* Moist playing fingertip translating horizontally across bowls */
  .gh-fingertip {
    position: absolute;
    top: 10px;
    width: 6px;
    height: 10px;
    border-radius: 3px;
    background: #ffe0b2;
    border: 1px solid #ffb74d;
    box-shadow: 0 0 6px #ffffff;
    z-index: 6;
    animation: gh-play-stroke 3.6s ease-in-out infinite alternate;
  }

  @keyframes gh-play-stroke {
    0% { transform: translate(-30px, 0); }
    33% { transform: translate(-10px, 2px); }
    66% { transform: translate(10px, 4px); }
    100% { transform: translate(30px, 6px); }
  }

  /* Acoustic resonant tone rings radiating from touched rim */
  .gh-ripple {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1.8px solid #80deea;
    pointer-events: none;
    z-index: 5;
    animation: gh-ring-pulse 1.8s cubic-bezier(0.1, 0.7, 0.3, 1) infinite;
  }

  .r1 { top: 16px; left: 24px; animation-delay: 0s; }
  .r2 { top: 18px; right: 24px; animation-delay: 0.9s; }

  @keyframes gh-ring-pulse {
    0% { transform: scale(0.3); opacity: 1; }
    100% { transform: scale(2.2); opacity: 0; }
  }

  .gh-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(77, 208, 225, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGlassHarmonica extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${glassHarmonicaStyles}</style>
      <div class="gh-box">
        <div class="gh-stage">
          <div class="gh-trough"></div>
          <div class="gh-spindle"></div>

          <div class="gh-bowls">
            <div class="gh-bowl gh-b1"></div>
            <div class="gh-bowl gh-b2"></div>
            <div class="gh-bowl gh-b3"></div>
            <div class="gh-bowl gh-b4"></div>
          </div>

          <div class="gh-fingertip"></div>
          <div class="gh-ripple r1"></div>
          <div class="gh-ripple r2"></div>
        </div>

        <div class="gh-label">GLASS ARMONICA 1761</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-glass-harmonica')) {
  customElements.define('concept-glass-harmonica', ConceptGlassHarmonica);
}
