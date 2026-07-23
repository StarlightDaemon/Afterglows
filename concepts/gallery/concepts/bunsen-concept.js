const bunsenStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A bunsen burner tuned through its range: the collar opens, the
     lazy luminous flame roars into a tight roaring cone, holds, and
     eases back. Heat haze wavers above it throughout. */
  .bn {
    width: 92px;
    height: 100px;
    position: relative;
  }

  /* Gas hose + base. */
  .bn-base {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 40px;
    height: 8px;
    margin-left: -20px;
    border-radius: 50% 50% 3px 3px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.7), rgba(0, 80, 16, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  /* Barrel. */
  .bn-barrel {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 12px;
    height: 40px;
    margin-left: -6px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 130, 26, 0.9), rgba(190, 255, 205, 0.6), rgba(0, 130, 26, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  /* Air collar with a hole; rotates open/closed. */
  .bn-collar {
    position: absolute;
    left: 50%;
    bottom: 18px;
    width: 16px;
    height: 8px;
    margin-left: -8px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
    animation: bn-collar 6s ease-in-out infinite;
  }

  .bn-collar::after {
    content: '';
    position: absolute;
    right: 2px;
    top: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(0, 40, 8, 0.9);
  }

  @keyframes bn-collar {
    0%, 100% { transform: rotate(0deg); }
    40%, 60% { transform: rotate(-18deg); }
  }

  /* Luminous outer flame: big and lazy when air is closed. */
  .bn-flame-outer {
    position: absolute;
    left: 50%;
    bottom: 50px;
    width: 22px;
    height: 40px;
    margin-left: -11px;
    border-radius: 50% 50% 50% 50% / 74% 74% 26% 26%;
    background: radial-gradient(ellipse at 50% 80%,
      rgba(214, 255, 224, 0.85),
      rgba(140, 255, 170, 0.6) 45%,
      rgba(0, 160, 32, 0.4) 75%,
      transparent);
    filter: blur(0.6px);
    transform-origin: 50% 100%;
    animation: bn-outer 6s ease-in-out infinite, bn-flicker 0.18s steps(2) infinite;
  }

  @keyframes bn-outer {
    0%, 100% { transform: scaleY(1.1) scaleX(1.15); opacity: 0.9; }
    /* Roaring: taller, tighter, brighter. */
    40%, 60% { transform: scaleY(1.35) scaleX(0.8); opacity: 1; }
  }

  /* Inner cone: appears sharp when the flame roars. */
  .bn-flame-inner {
    position: absolute;
    left: 50%;
    bottom: 50px;
    width: 8px;
    height: 20px;
    margin-left: -4px;
    border-radius: 50% 50% 40% 40% / 70% 70% 30% 30%;
    background: radial-gradient(ellipse at 50% 80%, #f2ffdd, #baffc9 60%, transparent);
    transform-origin: 50% 100%;
    animation: bn-inner 6s ease-in-out infinite, bn-flicker 0.15s steps(2) infinite;
  }

  @keyframes bn-inner {
    0%, 100% { transform: scaleY(0.4); opacity: 0.3; }
    40%, 60% { transform: scaleY(1.3); opacity: 1; }
  }

  @keyframes bn-flicker {
    0% { margin-left: -11px; }
    100% { margin-left: -9px; }
  }

  /* Heat haze wisps above the flame. */
  .bn-haze {
    position: absolute;
    left: 50%;
    bottom: 88px;
    width: 3px;
    height: 14px;
    border-radius: 2px;
    background: linear-gradient(180deg, transparent, rgba(140, 255, 170, 0.35) 60%, transparent);
    filter: blur(1px);
    animation: bn-haze 2s ease-in-out infinite;
  }

  .bn-haze.h2 { margin-left: -6px; animation-delay: -0.7s; }
  .bn-haze.h3 { margin-left: 4px; animation-delay: -1.3s; }

  @keyframes bn-haze {
    0% { transform: translateY(6px) skewX(0deg); opacity: 0; }
    30% { opacity: 0.7; }
    100% { transform: translateY(-8px) skewX(8deg); opacity: 0; }
  }

  /* Air-flow readout. */
  .bn-read {
    position: absolute;
    right: 2px;
    bottom: 24px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
  }

  .bn-read::before {
    content: 'AIR: LO';
    animation: bn-read 6s steps(1) infinite;
  }

  @keyframes bn-read {
    0% { content: 'AIR: LO'; }
    40% { content: 'AIR: HI'; }
    64% { content: 'AIR: LO'; }
  }
`;

class ConceptBunsen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bunsenStyles}</style>
      <div class="bn">
        <div class="bn-haze"></div>
        <div class="bn-haze h2"></div>
        <div class="bn-haze h3"></div>
        <div class="bn-flame-outer"></div>
        <div class="bn-flame-inner"></div>
        <div class="bn-barrel"></div>
        <div class="bn-collar"></div>
        <div class="bn-base"></div>
        <div class="bn-read"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bunsen')) {
  customElements.define('concept-bunsen', ConceptBunsen);
}
