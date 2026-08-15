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
    bottom: 12px;
    width: 88px;
    height: 14px;
    background: #102a3a;
    border: 1px solid #4dd0e1;
    border-radius: 2px;
    box-shadow: inset 0 0 6px rgba(77, 208, 225, 0.3);
  }

  /* Horizontal rotating spindle shaft */
  .gh-spindle {
    position: absolute;
    top: 32px;
    width: 86px;
    height: 2px;
    background: #ffcc80;
    box-shadow: 0 0 4px #ffb74d;
  }

  /* Nested graduated glass bowls */
  .gh-bowls {
    position: absolute;
    top: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .gh-bowl {
    border: 1.5px solid #e0f7fa;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(224, 247, 250, 0.25) 0%, rgba(77, 208, 225, 0.1) 70%);
    box-shadow: 0 0 8px rgba(77, 208, 225, 0.5);
    animation: gh-spin 2s linear infinite;
  }

  @keyframes gh-spin {
    0% { transform: rotate(0deg) scaleY(1); }
    50% { transform: rotate(180deg) scaleY(0.95); }
    100% { transform: rotate(360deg) scaleY(1); }
  }

  .gh-b1 { width: 14px; height: 20px; }
  .gh-b2 { width: 18px; height: 26px; }
  .gh-b3 { width: 22px; height: 32px; }
  .gh-b4 { width: 26px; height: 38px; }

  /* Acoustic resonant tone rings radiating from rim */
  .gh-ripple {
    position: absolute;
    top: 18px;
    right: 22px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.5px solid #80deea;
    animation: gh-ring-pulse 1.8s ease-out infinite;
    pointer-events: none;
  }

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

          <div class="gh-ripple"></div>
        </div>

        <div class="gh-label">GLASS ARMONICA</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-glass-harmonica')) {
  customElements.define('concept-glass-harmonica', ConceptGlassHarmonica);
}
