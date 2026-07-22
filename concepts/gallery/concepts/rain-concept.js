const rainStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rain {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(0, 14, 0, 0.4), rgba(0, 0, 0, 0.1) 70%);
  }

  .rain::after {
    content: '';
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 7px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.5), transparent);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  .rain-drop {
    position: absolute;
    top: -18px;
    width: 2px;
    height: 14px;
    border-radius: 999px;
    background: linear-gradient(180deg, transparent, rgba(140, 255, 140, 0.9));
    animation: rain-fall 1.3s linear infinite;
  }

  .rain-drop.d1 { left: 8px;  animation-duration: 1.15s; animation-delay: -0.2s; opacity: 0.85; }
  .rain-drop.d2 { left: 20px; animation-duration: 1.5s;  animation-delay: -0.9s; opacity: 0.5; height: 11px; }
  .rain-drop.d3 { left: 31px; animation-duration: 1.05s; animation-delay: -0.5s; opacity: 0.95; }
  .rain-drop.d4 { left: 43px; animation-duration: 1.6s;  animation-delay: -1.2s; opacity: 0.45; height: 10px; }
  .rain-drop.d5 { left: 54px; animation-duration: 1.2s;  animation-delay: -0.7s; opacity: 0.9; }
  .rain-drop.d6 { left: 66px; animation-duration: 1.45s; animation-delay: -0.3s; opacity: 0.55; height: 12px; }
  .rain-drop.d7 { left: 77px; animation-duration: 1.1s;  animation-delay: -1s;   opacity: 0.95; }
  .rain-drop.d8 { left: 89px; animation-duration: 1.55s; animation-delay: -0.6s; opacity: 0.5; height: 11px; }
  .rain-drop.d9 { left: 97px; animation-duration: 1.25s; animation-delay: -1.4s; opacity: 0.8; }

  @keyframes rain-fall {
    to { transform: translateY(126px); }
  }
`;

class ConceptRain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${rainStyles}</style>
      <div class="rain">
        <div class="rain-drop d1"></div>
        <div class="rain-drop d2"></div>
        <div class="rain-drop d3"></div>
        <div class="rain-drop d4"></div>
        <div class="rain-drop d5"></div>
        <div class="rain-drop d6"></div>
        <div class="rain-drop d7"></div>
        <div class="rain-drop d8"></div>
        <div class="rain-drop d9"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-rain')) {
  customElements.define('concept-rain', ConceptRain);
}
