const rainStyles = {
  v1: `
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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Nocturnal rainstorm with deep slate-blue atmosphere,
     translucent cyan & diamond rain streaks, and ground puddle reflection */
  .rainc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 60%, #020617 100%);
    border-radius: 6px;
  }

  /* Wet ground reflection puddle */
  .rainc::after {
    content: '';
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 7px;
    height: 2px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, #38bdf8 50%, transparent);
    box-shadow: 0 0 8px #00f0ff;
  }

  /* Individual rain streaks */
  .rainc-drop {
    position: absolute;
    top: -18px;
    width: 2px;
    height: 14px;
    border-radius: 999px;
    background: linear-gradient(180deg, transparent, #38bdf8 40%, #ffffff 100%);
    box-shadow: 0 0 4px #00f0ff;
    animation: rainc-fall 1.3s linear infinite;
  }

  .rainc-drop.d1 { left: 8px;  animation-duration: 1.15s; animation-delay: -0.2s; opacity: 0.85; }
  .rainc-drop.d2 { left: 20px; animation-duration: 1.5s;  animation-delay: -0.9s; opacity: 0.5; height: 11px; }
  .rainc-drop.d3 { left: 31px; animation-duration: 1.05s; animation-delay: -0.5s; opacity: 0.95; }
  .rainc-drop.d4 { left: 43px; animation-duration: 1.6s;  animation-delay: -1.2s; opacity: 0.45; height: 10px; }
  .rainc-drop.d5 { left: 54px; animation-duration: 1.2s;  animation-delay: -0.7s; opacity: 0.9; }
  .rainc-drop.d6 { left: 66px; animation-duration: 1.45s; animation-delay: -0.3s; opacity: 0.55; height: 12px; }
  .rainc-drop.d7 { left: 77px; animation-duration: 1.1s;  animation-delay: -1s;   opacity: 0.95; }
  .rainc-drop.d8 { left: 89px; animation-duration: 1.55s; animation-delay: -0.6s; opacity: 0.5; height: 11px; }
  .rainc-drop.d9 { left: 97px; animation-duration: 1.25s; animation-delay: -1.4s; opacity: 0.8; }

  @keyframes rainc-fall {
    to { transform: translateY(126px); }
  }
  `,
};

const rainMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="rainc">
        <div class="rainc-drop d1"></div>
        <div class="rainc-drop d2"></div>
        <div class="rainc-drop d3"></div>
        <div class="rainc-drop d4"></div>
        <div class="rainc-drop d5"></div>
        <div class="rainc-drop d6"></div>
        <div class="rainc-drop d7"></div>
        <div class="rainc-drop d8"></div>
        <div class="rainc-drop d9"></div>
      </div>
    `,
};

class ConceptRain extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${rainStyles[version] || rainStyles.v2}</style>${rainMarkup[version] || rainMarkup.v2}`;
  }
}

if (!customElements.get('concept-rain')) {
  customElements.define('concept-rain', ConceptRain);
}
