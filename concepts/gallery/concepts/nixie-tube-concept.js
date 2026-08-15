const nixieStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .nix {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #150901 0%, #050200 100%);
    border: 1.5px solid rgba(255, 120, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 120, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Glass tube vacuum envelope */
  .nix-envelope {
    position: relative;
    width: 52px;
    height: 72px;
    background: linear-gradient(180deg, rgba(255, 180, 100, 0.08) 0%, rgba(20, 10, 5, 0.6) 80%, #100602 100%);
    border: 1.5px solid rgba(255, 150, 50, 0.5);
    border-radius: 26px 26px 8px 8px;
    box-shadow: inset 0 0 12px rgba(255, 100, 0, 0.2), 0 0 10px rgba(255, 80, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Anode wire mesh grid behind digits */
  .nix-mesh {
    position: absolute;
    inset: 10px 6px;
    border: 1px dashed rgba(255, 120, 40, 0.3);
    border-radius: 18px 18px 4px 4px;
    background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255, 100, 0, 0.1) 4px),
                repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255, 100, 0, 0.1) 4px);
  }

  /* Stacked cathode numeral filaments */
  .nix-digit {
    position: absolute;
    font-size: 38px;
    font-family: 'Courier New', monospace;
    font-weight: 900;
    line-height: 1;
    color: #ff9933;
    text-shadow: 0 0 4px #ffffff, 0 0 10px #ff7700, 0 0 20px #ff3300;
    filter: drop-shadow(0 0 6px rgba(255, 80, 0, 0.9));
  }

  .d-8 {
    animation: nix-cycle-8 4s steps(1) infinite;
  }

  .d-3 {
    animation: nix-cycle-3 4s steps(1) infinite;
  }

  @keyframes nix-cycle-8 {
    0%, 49% { opacity: 1; transform: scale(1); }
    50%, 100% { opacity: 0; transform: scale(0.98); }
  }

  @keyframes nix-cycle-3 {
    0%, 49% { opacity: 0; transform: scale(0.98); }
    50%, 100% { opacity: 1; transform: scale(1); }
  }

  /* Neon gas plasma corona ionization glow */
  .nix-plasma-glow {
    position: absolute;
    width: 36px;
    height: 48px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 120, 0, 0.35) 0%, transparent 70%);
    animation: nix-flicker 0.2s ease-in-out infinite alternate;
  }

  @keyframes nix-flicker {
    0% { transform: scale(0.96); opacity: 0.85; }
    100% { transform: scale(1.04); opacity: 1; }
  }

  /* Ceramic base pins */
  .nix-base {
    position: absolute;
    bottom: 8px;
    width: 44px;
    height: 6px;
    background: #2b1408;
    border: 1px solid #ff7700;
    border-radius: 2px;
    display: flex;
    justify-content: space-around;
  }

  .nix-pin {
    width: 2px;
    height: 4px;
    background: #ffcc88;
  }

  .nix-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 140, 50, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptNixieTube extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${nixieStyles}</style>
      <div class="nix">
        <div class="nix-envelope">
          <div class="nix-mesh"></div>
          <div class="nix-plasma-glow"></div>
          <div class="nix-digit d-8">8</div>
          <div class="nix-digit d-3">3</div>
        </div>

        <div class="nix-base">
          <div class="nix-pin"></div>
          <div class="nix-pin"></div>
          <div class="nix-pin"></div>
          <div class="nix-pin"></div>
        </div>

        <div class="nix-label">IN-14 NIXIE TUBE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-nixie-tube')) {
  customElements.define('concept-nixie-tube', ConceptNixieTube);
}
