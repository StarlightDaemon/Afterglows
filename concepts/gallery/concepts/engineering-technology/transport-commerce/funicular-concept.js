const funicularStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fun {
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

  /* Mountain cliff slope backdrop */
  .fun-cliff-svg {
    position: absolute;
    inset: 0;
    width: 118px;
    height: 102px;
    z-index: 1;
  }

  /* Summit cable drive sheave pulley at top right */
  .fun-summit-pulley {
    position: absolute;
    top: 8px;
    right: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.5px solid #ffffff;
    background: #011406;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 4;
    animation: fun-pulley-turn 2.5s linear infinite;
  }

  /* Sheave spokes: without these the spinning circle is rotationally
     symmetric and the rotation renders as a no-op */
  .fun-summit-pulley::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: 50%;
    background:
      linear-gradient(0deg, transparent 42%, #8cffaa 42% 58%, transparent 58%),
      linear-gradient(90deg, transparent 42%, #8cffaa 42% 58%, transparent 58%);
  }

  @keyframes fun-pulley-turn {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Connecting steel traction cable */
  .fun-cable {
    position: absolute;
    top: 15px;
    left: 14px;
    width: 90px;
    height: 1px;
    background: rgba(214, 255, 224, 0.6);
    transform: rotate(-32deg);
    z-index: 2;
  }

  /* Ascending Passenger Tram Car (Car A) */
  .fun-car-a {
    position: absolute;
    width: 18px;
    height: 14px;
    background: linear-gradient(135deg, #ffffff, #00aa22);
    border: 1px solid #ffffff;
    border-radius: 3px;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 5;
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
    offset-path: path("M 14 84 L 46 54 L 54 48 L 92 22");
    animation: fun-car-a-travel 4.5s ease-in-out infinite alternate;
  }

  @keyframes fun-car-a-travel {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }

  /* Descending Passenger Tram Car (Car B - uses Abt passing loop) */
  .fun-car-b {
    position: absolute;
    width: 18px;
    height: 14px;
    background: linear-gradient(135deg, #d6ffe0, #008818);
    border: 1px solid #ffffff;
    border-radius: 3px;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 5;
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
    offset-path: path("M 92 22 L 62 44 L 54 50 L 14 84");
    animation: fun-car-b-travel 4.5s ease-in-out infinite alternate;
  }

  @keyframes fun-car-b-travel {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }

  /* Funicular gradient readout */
  .fun-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptFunicular extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${funicularStyles}</style>
      <div class="fun">
        <svg class="fun-cliff-svg" viewBox="0 0 118 102">
          <!-- Mountain incline slope -->
          <polygon points="0,102 118,30 118,102" fill="rgba(0, 40, 10, 0.35)" />
          <!-- Steep inclined railway tracks with center Abt passing loop -->
          <line x1="8" y1="88" x2="48" y2="54" stroke="#8cffaa" stroke-width="2" />
          <!-- Abt passing turnout loop split -->
          <path d="M 48 54 Q 52 46 62 44" stroke="#d6ffe0" stroke-width="1.8" fill="none" />
          <path d="M 48 54 Q 56 56 62 44" stroke="#d6ffe0" stroke-width="1.8" fill="none" />
          <line x1="62" y1="44" x2="98" y2="18" stroke="#8cffaa" stroke-width="2" />
          <!-- Sleepers / ties -->
          <line x1="12" y1="88" x2="16" y2="82" stroke="rgba(140, 255, 170, 0.6)" stroke-width="1.5" />
          <line x1="32" y1="72" x2="36" y2="66" stroke="rgba(140, 255, 170, 0.6)" stroke-width="1.5" />
          <line x1="74" y1="38" x2="78" y2="32" stroke="rgba(140, 255, 170, 0.6)" stroke-width="1.5" />
          <line x1="90" y1="24" x2="94" y2="18" stroke="rgba(140, 255, 170, 0.6)" stroke-width="1.5" />
        </svg>

        <div class="fun-cable"></div>
        <div class="fun-summit-pulley"></div>

        <div class="fun-car-a"></div>
        <div class="fun-car-b"></div>

        <div class="fun-label">FUNICULAR 48% INCLINE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-funicular')) {
  customElements.define('concept-funicular', ConceptFunicular);
}
