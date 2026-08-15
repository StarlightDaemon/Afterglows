const scytaleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .scy {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #081109 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Wooden cylindrical baton rod */
  .scy-baton {
    position: absolute;
    width: 96px;
    height: 38px;
    background: linear-gradient(180deg, #1b3820 0%, #0a1f0f 50%, #020b04 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.7);
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 204, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  /* Helical parchment ribbons wound around baton */
  .scy-wrap {
    width: 14px;
    height: 38px;
    background: linear-gradient(135deg, rgba(0, 255, 100, 0.15) 0%, rgba(200, 255, 220, 0.25) 50%, rgba(0, 180, 50, 0.1) 100%);
    border-left: 1px dashed rgba(140, 255, 170, 0.8);
    border-right: 1px dashed rgba(140, 255, 170, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: skewX(-8deg);
  }

  .scy-char {
    font-size: 6.5px;
    font-family: monospace;
    font-weight: bold;
    color: #8cffaa;
  }

  /* Horizontal message line glowing on aligned wrap */
  .scy-aligned-row {
    position: absolute;
    top: 50%;
    left: 14px;
    right: 14px;
    height: 10px;
    margin-top: -5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    pointer-events: none;
  }

  .scy-decrypted {
    font-size: 7px;
    font-family: monospace;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 0 6px #00ff66, 0 0 10px #ffffff;
    animation: scy-glow 2s ease-in-out infinite alternate;
  }

  @keyframes scy-glow {
    0% { opacity: 0.6; filter: brightness(0.9); }
    100% { opacity: 1; filter: brightness(1.4); }
  }

  /* Unwinding trailing parchment strip */
  .scy-trail {
    position: absolute;
    bottom: 12px;
    right: 6px;
    width: 48px;
    height: 12px;
    border-top: 1px dashed rgba(0, 255, 100, 0.7);
    border-bottom: 1px dashed rgba(0, 255, 100, 0.7);
    background: rgba(0, 60, 20, 0.3);
    transform: rotate(12deg);
    display: flex;
    align-items: center;
    justify-content: space-around;
    animation: scy-unwind 3s ease-in-out infinite alternate;
  }

  @keyframes scy-unwind {
    0% { transform: rotate(8deg) translateX(0); opacity: 0.6; }
    100% { transform: rotate(16deg) translateX(6px); opacity: 1; }
  }

  .scy-cipher-char {
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.7);
  }

  .scy-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptScytale extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${scytaleStyles}</style>
      <div class="scy">
        <div class="scy-baton">
          <div class="scy-wrap">
            <span class="scy-char">X</span>
            <span class="scy-char">S</span>
            <span class="scy-char">P</span>
          </div>
          <div class="scy-wrap">
            <span class="scy-char">A</span>
            <span class="scy-char">E</span>
            <span class="scy-char">R</span>
          </div>
          <div class="scy-wrap">
            <span class="scy-char">R</span>
            <span class="scy-char">N</span>
            <span class="scy-char">T</span>
          </div>
          <div class="scy-wrap">
            <span class="scy-char">M</span>
            <span class="scy-char">D</span>
            <span class="scy-char">A</span>
          </div>
          <div class="scy-wrap">
            <span class="scy-char">Y</span>
            <span class="scy-char">S</span>
            <span class="scy-char">N</span>
          </div>
        </div>

        <div class="scy-aligned-row">
          <span class="scy-decrypted">S</span>
          <span class="scy-decrypted">E</span>
          <span class="scy-decrypted">N</span>
          <span class="scy-decrypted">D</span>
          <span class="scy-decrypted">S</span>
        </div>

        <div class="scy-trail">
          <span class="scy-cipher-char">X</span>
          <span class="scy-cipher-char">A</span>
          <span class="scy-cipher-char">R</span>
          <span class="scy-cipher-char">M</span>
          <span class="scy-cipher-char">Y</span>
        </div>

        <div class="scy-label">SPARTAN SCYTALE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-scytale')) {
  customElements.define('concept-scytale', ConceptScytale);
}
