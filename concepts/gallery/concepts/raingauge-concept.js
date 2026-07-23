const raingaugeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A rain gauge filling in a shower: drops fall into the funnel and
     the measuring tube climbs the scale; a downpour surge fills it
     fast, then it's tipped empty and the count resets. */
  .rg {
    width: 88px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Funnel mouth. */
  .rg-funnel {
    position: absolute;
    left: 50%;
    top: 6px;
    width: 48px;
    height: 16px;
    margin-left: -24px;
    clip-path: polygon(0 0, 100% 0, 62% 100%, 38% 100%);
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.5), rgba(0, 90, 18, 0.6));
    border: 1px solid rgba(0, 204, 0, 0.6);
    border-bottom: none;
  }

  /* Measuring tube. */
  .rg-tube {
    position: absolute;
    left: 50%;
    top: 22px;
    width: 22px;
    height: 62px;
    margin-left: -11px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 0 0 4px 4px;
    background: rgba(0, 30, 6, 0.6);
    overflow: hidden;
  }

  /* Collected water rising in the tube. */
  .rg-water {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.55), rgba(0, 150, 30, 0.7));
    border-top: 1px solid rgba(214, 255, 224, 0.8);
    animation: rg-fill 8s infinite;
  }

  @keyframes rg-fill {
    0%, 4% { height: 3px; }
    30% { height: 20px; }
    /* Downpour surge. */
    42% { height: 30px; }
    54% { height: 52px; }
    72% { height: 54px; }
    /* Tipped empty. */
    80% { height: 54px; }
    86% { height: 2px; }
    100% { height: 3px; }
  }

  /* Meniscus shimmer line. */
  .rg-surface {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(214, 255, 224, 0.9);
    animation: rg-surface 8s infinite;
  }

  @keyframes rg-surface {
    0%, 4% { bottom: 3px; }
    30% { bottom: 20px; }
    42% { bottom: 30px; }
    54% { bottom: 52px; }
    72% { bottom: 54px; }
    80% { bottom: 54px; }
    86% { bottom: 2px; }
    100% { bottom: 3px; }
  }

  /* Scale ticks. */
  .rg-scale {
    position: absolute;
    left: 50%;
    top: 24px;
    width: 8px;
    height: 58px;
    margin-left: 13px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.7) 0 1px,
      transparent 1px 7px);
  }

  /* Falling drops into the funnel. */
  .rg-drop {
    position: absolute;
    top: -6px;
    width: 3px;
    height: 8px;
    border-radius: 0 0 50% 50%;
    background: linear-gradient(180deg, transparent, rgba(190, 255, 205, 0.9));
    animation: rg-drop linear infinite;
  }

  .rg-drop.d1 { left: 30px; animation-duration: 0.7s; }
  .rg-drop.d2 { left: 44px; animation-duration: 0.55s; animation-delay: -0.2s; }
  .rg-drop.d3 { left: 54px; animation-duration: 0.8s; animation-delay: -0.4s; }
  .rg-drop.d4 { left: 38px; animation-duration: 0.6s; animation-delay: -0.5s; }

  @keyframes rg-drop {
    0% { top: -6px; opacity: 0; }
    20% { opacity: 1; }
    100% { top: 18px; opacity: 0.6; }
  }

  /* Splash at the funnel mouth. */
  .rg-splash {
    position: absolute;
    left: 50%;
    top: 16px;
    width: 4px;
    height: 4px;
    margin-left: -2px;
    border-radius: 50%;
    border: 1px solid rgba(190, 255, 205, 0.8);
    opacity: 0;
    animation: rg-splash 0.5s ease-out infinite;
  }

  @keyframes rg-splash {
    0% { transform: scale(0.4); opacity: 0.9; }
    100% { transform: scale(1.8); opacity: 0; }
  }

  /* mm readout. */
  .rg-read {
    position: absolute;
    left: 0;
    bottom: 2px;
    font-size: 8px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 4px rgba(0, 204, 0, 0.6);
  }

  .rg-read::before {
    content: '0mm';
    animation: rg-read 8s steps(1) infinite;
  }

  @keyframes rg-read {
    0% { content: '0mm'; }
    30% { content: '4mm'; }
    54% { content: '11mm'; }
    72% { content: '12mm'; }
    86% { content: '0mm'; }
  }
`;

class ConceptRaingauge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${raingaugeStyles}</style>
      <div class="rg">
        <div class="rg-drop d1"></div>
        <div class="rg-drop d2"></div>
        <div class="rg-drop d3"></div>
        <div class="rg-drop d4"></div>
        <div class="rg-funnel"></div>
        <div class="rg-splash"></div>
        <div class="rg-scale"></div>
        <div class="rg-tube">
          <div class="rg-water"></div>
          <div class="rg-surface"></div>
        </div>
        <div class="rg-read"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-raingauge')) {
  customElements.define('concept-raingauge', ConceptRaingauge);
}
