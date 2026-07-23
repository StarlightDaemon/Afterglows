const anemometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A cup anemometer spinning up and down with the wind: three cups
     whirl faster on a gust (motion-blurring), the dial needle chases
     the speed, and streaks blow past. */
  .an {
    width: 104px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Mast + hub. */
  .an-mast {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 4px;
    height: 40px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.7), rgba(0, 90, 18, 0.7));
  }

  .an-hub {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.7);
    z-index: 2;
  }

  /* The rotor: three arms at 120deg with a cup on each. Speeds up
     and slows via one variable-rate spin plus a blur that tracks it. */
  .an-rotor {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 0;
    height: 0;
    animation: an-spin 2.6s linear infinite;
  }

  @keyframes an-spin {
    to { transform: rotate(360deg); }
  }

  .an-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 30px;
    height: 2px;
    background: rgba(140, 255, 170, 0.8);
    transform-origin: 0% 50%;
  }

  .an-arm.a1 { transform: rotate(0deg); }
  .an-arm.a2 { transform: rotate(120deg); }
  .an-arm.a3 { transform: rotate(240deg); }

  /* Cups: C-shaped so they catch the wind on one side. */
  .an-cup {
    position: absolute;
    right: -8px;
    top: -6px;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(190, 255, 205, 0.9);
    border-radius: 50%;
    border-right-color: transparent;
    background: radial-gradient(circle at 30% 40%, rgba(140, 255, 170, 0.5), transparent 70%);
    box-sizing: border-box;
  }

  /* Blur overlay ramps opacity with the (implied) speed cycle. */
  .an-blur {
    position: absolute;
    left: 50%;
    top: 44px;
    width: 68px;
    height: 68px;
    margin: -34px 0 0 -34px;
    border-radius: 50%;
    border: 6px solid rgba(140, 255, 170, 0.18);
    box-sizing: border-box;
    animation: an-blur 6.5s ease-in-out infinite;
    opacity: 0;
  }

  @keyframes an-blur {
    0%, 100% { opacity: 0; }
    40%, 55% { opacity: 1; }
  }

  /* Speed dial in the corner. */
  .an-dial {
    position: absolute;
    left: 4px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: rgba(0, 30, 6, 0.7);
  }

  .an-dial-needle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2px;
    height: 12px;
    margin: -12px 0 0 -1px;
    background: #d6ffe0;
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.8);
    transform-origin: 50% 100%;
    animation: an-dial 6.5s ease-in-out infinite;
  }

  @keyframes an-dial {
    0%, 100% { transform: rotate(-70deg); }
    40%, 55% { transform: rotate(70deg); }
  }

  /* Wind streaks. */
  .an-gust {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.6), transparent);
    opacity: 0;
    animation: an-gust 3.2s ease-in infinite;
  }

  .an-gust.g1 { top: 26px; left: 0; width: 30px; }
  .an-gust.g2 { top: 52px; left: 8px; width: 40px; animation-delay: -1.6s; }

  @keyframes an-gust {
    0%, 16% { transform: translateX(-24px); opacity: 0; }
    26% { opacity: 0.85; }
    54% { transform: translateX(90px); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Speed readout. */
  .an-read {
    position: absolute;
    right: 4px;
    bottom: 4px;
    font-size: 8px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 4px rgba(0, 204, 0, 0.6);
  }

  .an-read::before {
    content: '4 m/s';
    animation: an-read 6.5s steps(1) infinite;
  }

  @keyframes an-read {
    0% { content: '4 m/s'; }
    30% { content: '11 m/s'; }
    45% { content: '17 m/s'; }
    62% { content: '12 m/s'; }
    85% { content: '4 m/s'; }
  }
`;

class ConceptAnemometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${anemometerStyles}</style>
      <div class="an">
        <div class="an-gust g1"></div>
        <div class="an-gust g2"></div>
        <div class="an-mast"></div>
        <div class="an-blur"></div>
        <div class="an-rotor">
          <div class="an-arm a1"><div class="an-cup"></div></div>
          <div class="an-arm a2"><div class="an-cup"></div></div>
          <div class="an-arm a3"><div class="an-cup"></div></div>
        </div>
        <div class="an-hub"></div>
        <div class="an-dial"><div class="an-dial-needle"></div></div>
        <div class="an-read"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-anemometer')) {
  customElements.define('concept-anemometer', ConceptAnemometer);
}
