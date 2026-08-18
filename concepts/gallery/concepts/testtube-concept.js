const testtubeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor testtube rack --- */
  .tt {
    width: 108px;
    height: 96px;
    position: relative;
  }

  .tt-rack {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 12px;
    height: 10px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.7), rgba(0, 70, 14, 0.85));
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.4);
  }

  .tt-rack-top {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 22px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0, 110, 22, 0.8);
    border: 1px solid #00ff66;
  }

  .tt-hole {
    position: absolute;
    top: 22px;
    width: 16px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0, 30, 6, 0.9);
  }

  .tt-hole.h1 { left: 18px; }
  .tt-hole.h2 { left: 46px; }
  .tt-hole.h3 { left: 74px; }

  .tt-tube {
    position: absolute;
    top: 20px;
    width: 16px;
    height: 56px;
    border: 2px solid #00ff66;
    border-top: none;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    background: rgba(0, 20, 4, 0.6);
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.3);
    transform-origin: top center;
    animation: tt-shake 1.4s ease-in-out infinite alternate;
  }

  .tt-tube.t1 { left: 18px; animation-delay: 0s; }
  .tt-tube.t2 { left: 46px; animation-delay: -0.45s; }
  .tt-tube.t3 { left: 74px; animation-delay: -0.9s; }

  @keyframes tt-shake {
    0% { transform: rotate(-8deg) translateY(-4px); }
    100% { transform: rotate(8deg) translateY(2px); }
  }

  .tt-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 32px;
    background: linear-gradient(180deg, #ffffff, #00ff66 60%, rgba(0, 150, 30, 0.9));
    box-shadow: 0 0 8px #00ff66;
    animation: tt-liquid-slosh 1.4s ease-in-out infinite alternate;
  }

  @keyframes tt-liquid-slosh {
    0% { transform: skewY(-8deg) scaleY(0.9); }
    100% { transform: skewY(8deg) scaleY(1.1); }
  }

  .tt-fizz {
    position: absolute;
    bottom: 2px;
    left: 4px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #00ff66;
    animation: tt-fizz 0.8s ease-in infinite;
  }

  .tt-fizz.f2 { left: 8px; animation-delay: -0.4s; }

  @keyframes tt-fizz {
    0% { transform: translateY(0) scale(0.6); opacity: 1; }
    100% { transform: translateY(-34px) scale(1.4); opacity: 0; }
  }

  .tt-drop {
    position: absolute;
    top: 6px;
    width: 3px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: tt-fall 1.0s linear infinite;
  }

  .tt-drop.d1 { left: 25px; animation-delay: 0s; }
  .tt-drop.d2 { left: 53px; animation-delay: -0.33s; }
  .tt-drop.d3 { left: 81px; animation-delay: -0.66s; }

  @keyframes tt-fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(18px); opacity: 0; }
  }

  /* --- v2: Chemical reagents & reactions --- */
  .ttc {
    width: 108px;
    height: 96px;
    position: relative;
  }

  .ttc-rack {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 12px;
    height: 10px;
    border-radius: 3px;
    background: linear-gradient(180deg, #78350f, #451a03);
    border: 1px solid #92400e;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
  }

  .ttc-rack-top {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 22px;
    height: 4px;
    border-radius: 2px;
    background: #92400e;
    border: 1px solid #b45309;
  }

  .ttc-hole {
    position: absolute;
    top: 22px;
    width: 16px;
    height: 4px;
    border-radius: 2px;
    background: #2b1104;
  }

  .ttc-hole.h1 { left: 18px; }
  .ttc-hole.h2 { left: 46px; }
  .ttc-hole.h3 { left: 74px; }

  .ttc-tube {
    position: absolute;
    top: 20px;
    width: 16px;
    height: 56px;
    border: 1.5px solid rgba(220, 240, 255, 0.9);
    border-top: none;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3), 0 0 8px rgba(0, 0, 0, 0.4);
    transform-origin: top center;
    animation: ttc-shake 1.4s ease-in-out infinite alternate;
  }

  .ttc-tube.t1 { left: 18px; animation-delay: 0s; }
  .ttc-tube.t2 { left: 46px; animation-delay: -0.45s; }
  .ttc-tube.t3 { left: 74px; animation-delay: -0.9s; }

  @keyframes ttc-shake {
    0% { transform: rotate(-8deg) translateY(-4px); }
    100% { transform: rotate(8deg) translateY(2px); }
  }

  .ttc-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 32px;
    animation: ttc-liquid-slosh 1.4s ease-in-out infinite alternate;
  }

  @keyframes ttc-liquid-slosh {
    0% { transform: skewY(-8deg) scaleY(0.9); }
    100% { transform: skewY(8deg) scaleY(1.1); }
  }

  .ttc-tube.t1 .ttc-liquid {
    background: linear-gradient(180deg, #f43f5e, #be123c);
    box-shadow: inset 0 0 8px #f43f5e;
  }

  .ttc-tube.t2 .ttc-liquid {
    background: linear-gradient(180deg, #38bdf8, #1d4ed8);
    box-shadow: inset 0 0 8px #60a5fa;
  }

  .ttc-tube.t3 .ttc-liquid {
    background: linear-gradient(180deg, #facc15, #ea580c);
    box-shadow: inset 0 0 8px #fde047;
  }

  .ttc-fizz {
    position: absolute;
    bottom: 2px;
    left: 4px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #ffffff;
    animation: ttc-fizz 0.8s ease-in infinite;
  }

  .ttc-fizz.f2 { left: 8px; animation-delay: -0.4s; }

  @keyframes ttc-fizz {
    0% { transform: translateY(0) scale(0.6); opacity: 1; }
    100% { transform: translateY(-34px) scale(1.4); opacity: 0; }
  }

  .ttc-drop {
    position: absolute;
    top: 6px;
    width: 3px;
    height: 8px;
    border-radius: 50%;
    animation: ttc-fall 1.0s linear infinite;
  }

  .ttc-drop.d1 { left: 25px; background: #f43f5e; box-shadow: 0 0 6px #f43f5e; animation-delay: 0s; }
  .ttc-drop.d2 { left: 53px; background: #38bdf8; box-shadow: 0 0 6px #38bdf8; animation-delay: -0.33s; }
  .ttc-drop.d3 { left: 81px; background: #facc15; box-shadow: 0 0 6px #facc15; animation-delay: -0.66s; }

  @keyframes ttc-fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(18px); opacity: 0; }
  }
`;

const testtubeMarkup = {
  v1: `
    <div class="tt">
      <div class="tt-drop d1"></div>
      <div class="tt-drop d2"></div>
      <div class="tt-drop d3"></div>
      <div class="tt-tube t1"><div class="tt-liquid"></div><div class="tt-fizz"></div><div class="tt-fizz f2"></div></div>
      <div class="tt-tube t2"><div class="tt-liquid"></div><div class="tt-precip"></div><div class="tt-fizz"></div><div class="tt-fizz f2"></div></div>
      <div class="tt-tube t3"><div class="tt-liquid"></div><div class="tt-foam"></div><div class="tt-fizz"></div><div class="tt-fizz f2"></div></div>
      <div class="tt-hole h1"></div>
      <div class="tt-hole h2"></div>
      <div class="tt-hole h3"></div>
      <div class="tt-rack-top"></div>
      <div class="tt-rack"></div>
    </div>
  `,
  v2: `
    <div class="ttc">
      <div class="ttc-drop d1"></div>
      <div class="ttc-drop d2"></div>
      <div class="ttc-drop d3"></div>
      <div class="ttc-tube t1"><div class="ttc-liquid"></div><div class="ttc-fizz"></div><div class="ttc-fizz f2"></div></div>
      <div class="ttc-tube t2"><div class="ttc-liquid"></div><div class="ttc-precip"></div><div class="ttc-fizz"></div><div class="ttc-fizz f2"></div></div>
      <div class="ttc-tube t3"><div class="ttc-liquid"></div><div class="ttc-foam"></div><div class="ttc-fizz"></div><div class="ttc-fizz f2"></div></div>
      <div class="ttc-hole h1"></div>
      <div class="ttc-hole h2"></div>
      <div class="ttc-hole h3"></div>
      <div class="ttc-rack-top"></div>
      <div class="ttc-rack"></div>
    </div>
  `,
};

class ConceptTesttube extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${testtubeStyles}</style>${testtubeMarkup[version] || testtubeMarkup.v2}`;
  }
}

if (!customElements.get('concept-testtube')) {
  customElements.define('concept-testtube', ConceptTesttube);
}
