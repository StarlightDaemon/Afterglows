const thaumaturgyStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .thm {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #150518 0%, #050107 100%);
    border: 1.5px solid rgba(220, 0, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(220, 0, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Outer clockwise rotating runic circle */
  .thm-ring-outer {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1.5px solid #d400ff;
    box-shadow: 0 0 8px rgba(212, 0, 255, 0.4);
    animation: thm-spin-cw 12s linear infinite;
  }

  @keyframes thm-spin-cw {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Inner counter-clockwise rotating geometric ring */
  .thm-ring-inner {
    position: absolute;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1.2px dashed #ffffff;
    box-shadow: 0 0 6px #ff88ff;
    animation: thm-spin-ccw 8s linear infinite;
  }

  @keyframes thm-spin-ccw {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  /* Central elemental transmutation core */
  .thm-crucible-core {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0%, #ff00ea 60%, transparent 100%);
    box-shadow: 0 0 12px #ff00ea, 0 0 20px #ffffff;
    animation: thm-pulse-crucible 2s ease-in-out infinite alternate;
  }

  @keyframes thm-pulse-crucible {
    0% { transform: scale(0.8); opacity: 0.7; }
    100% { transform: scale(1.3); opacity: 1; filter: drop-shadow(0 0 8px #ffffff); }
  }

  /* Radiant runic ray runes */
  .thm-rune {
    position: absolute;
    font-size: 7px;
    color: #ffccff;
    text-shadow: 0 0 4px #ff00ea;
  }

  .rn-1 { top: 2px; left: 36px; }
  .rn-2 { top: 36px; right: 2px; }
  .rn-3 { bottom: 2px; left: 36px; }
  .rn-4 { top: 36px; left: 2px; }

  .thm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 140, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptThaumaturgyCircle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${thaumaturgyStyles}</style>
      <div class="thm">
        <div class="thm-ring-outer">
          <svg viewBox="0 0 80 80" style="position: absolute; inset: 0; width: 100%; height: 100%;">
            <!-- Outer Hexagram transmutation seal -->
            <polygon points="40,4 71,58 9,58" fill="none" stroke="rgba(212, 0, 255, 0.6)" stroke-width="1" />
            <polygon points="40,76 71,22 9,22" fill="none" stroke="rgba(212, 0, 255, 0.6)" stroke-width="1" />
            <circle cx="40" cy="40" r="32" fill="none" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="2 4" />
          </svg>
          <div class="thm-rune rn-1">🜍</div>
          <div class="thm-rune rn-2">🜂</div>
          <div class="thm-rune rn-3">🜔</div>
          <div class="thm-rune rn-4">🝆</div>
        </div>

        <div class="thm-ring-inner">
          <svg viewBox="0 0 54 54" style="position: absolute; inset: 0; width: 100%; height: 100%;">
            <!-- Inner heptagram / octagram star -->
            <rect x="11" y="11" width="32" height="32" fill="none" stroke="#ff88ff" stroke-width="1" />
            <rect x="11" y="11" width="32" height="32" fill="none" stroke="#ff88ff" stroke-width="1" transform="rotate(45 27 27)" />
          </svg>
        </div>

        <div class="thm-crucible-core"></div>

        <div class="thm-label">TRANSMUTATION CIRCLE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-thaumaturgy-circle')) {
  customElements.define('concept-thaumaturgy-circle', ConceptThaumaturgyCircle);
}
