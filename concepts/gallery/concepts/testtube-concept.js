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
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  .tt-rack-top {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 22px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0, 110, 22, 0.6);
    border: 1px solid rgba(0, 204, 0, 0.4);
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
    border: 2px solid var(--accent, #00cc00);
    border-top: none;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    background: rgba(0, 20, 4, 0.4);
  }

  .tt-tube.t1 { left: 18px; }
  .tt-tube.t2 { left: 46px; }
  .tt-tube.t3 { left: 74px; }

  .tt-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 30px;
  }

  .tt-tube.t1 .tt-liquid { animation: tt-color1 9s infinite; }
  .tt-tube.t2 .tt-liquid { animation: tt-color2 9s infinite; }
  .tt-tube.t3 .tt-liquid { animation: tt-color3 9s infinite; }

  @keyframes tt-color1 {
    0%, 8% { background: linear-gradient(180deg, rgba(0, 90, 18, 0.5), rgba(0, 60, 12, 0.7)); }
    18%, 90% { background: linear-gradient(180deg, rgba(140, 255, 170, 0.6), rgba(0, 150, 30, 0.75)); }
    97%, 100% { background: linear-gradient(180deg, rgba(0, 90, 18, 0.5), rgba(0, 60, 12, 0.7)); }
  }

  @keyframes tt-color2 {
    0%, 30% { background: linear-gradient(180deg, rgba(0, 110, 22, 0.5), rgba(0, 70, 14, 0.7)); }
    40%, 90% { background: linear-gradient(180deg, rgba(190, 255, 205, 0.55), rgba(0, 120, 24, 0.8)); }
    97%, 100% { background: linear-gradient(180deg, rgba(0, 110, 22, 0.5), rgba(0, 70, 14, 0.7)); }
  }

  @keyframes tt-color3 {
    0%, 52% { background: linear-gradient(180deg, rgba(0, 100, 20, 0.5), rgba(0, 60, 12, 0.7)); }
    62%, 90% { background: linear-gradient(180deg, rgba(0, 200, 40, 0.6), rgba(0, 90, 18, 0.85)); }
    97%, 100% { background: linear-gradient(180deg, rgba(0, 100, 20, 0.5), rgba(0, 60, 12, 0.7)); }
  }

  .tt-fizz {
    position: absolute;
    bottom: 2px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.85);
    animation: tt-fizz 0.9s ease-in infinite;
  }

  .tt-tube.t1 .tt-fizz { animation-name: tt-fizz, tt-gate1; animation-duration: 0.9s, 9s; }
  .tt-tube.t2 .tt-fizz { animation-name: tt-fizz, tt-gate2; animation-duration: 0.8s, 9s; }
  .tt-tube.t3 .tt-fizz { animation-name: tt-fizz, tt-gate3; animation-duration: 1s, 9s; }

  .tt-fizz.f2 { left: 8px; animation-delay: -0.4s, 0s; }

  @keyframes tt-fizz {
    0% { transform: translateY(0); opacity: 0; }
    20% { opacity: 0.9; }
    100% { transform: translateY(-26px); opacity: 0; }
  }

  @keyframes tt-gate1 { 0%, 12% { visibility: hidden; } 16%, 92% { visibility: visible; } 96%, 100% { visibility: hidden; } }
  @keyframes tt-gate2 { 0%, 34% { visibility: hidden; } 38%, 92% { visibility: visible; } 96%, 100% { visibility: hidden; } }
  @keyframes tt-gate3 { 0%, 56% { visibility: hidden; } 60%, 92% { visibility: visible; } 96%, 100% { visibility: hidden; } }

  .tt-precip {
    position: absolute;
    left: 2px;
    right: 2px;
    bottom: 0;
    height: 0;
    background: repeating-linear-gradient(180deg,
      rgba(214, 255, 224, 0.7) 0 1px,
      transparent 1px 3px);
    animation: tt-precip 9s infinite;
  }

  @keyframes tt-precip {
    0%, 40% { height: 0; }
    55% { height: 10px; }
    90% { height: 10px; }
    96%, 100% { height: 0; }
  }

  .tt-foam {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    height: 0;
    background:
      radial-gradient(circle 2px, rgba(214, 255, 224, 0.85) 90%, transparent) 0 0 / 5px 5px;
    animation: tt-foam 9s infinite;
  }

  @keyframes tt-foam {
    0%, 60% { height: 0; }
    72% { height: 12px; }
    90% { height: 12px; }
    96%, 100% { height: 0; }
  }

  .tt-drop {
    position: absolute;
    top: 8px;
    width: 3px;
    height: 6px;
    border-radius: 0 0 50% 50%;
    background: rgba(190, 255, 205, 0.9);
    opacity: 0;
    animation: tt-fall 9s infinite;
  }

  .tt-drop.d1 { left: 25px; animation-delay: 0s; }
  .tt-drop.d2 { left: 53px; animation-delay: 2.1s; }
  .tt-drop.d3 { left: 81px; animation-delay: 4.2s; }

  @keyframes tt-fall {
    0% { transform: translateY(0); opacity: 0; }
    2% { opacity: 1; }
    5% { transform: translateY(14px); opacity: 0; }
    100% { opacity: 0; }
  }

  /* --- v2: Distinct chemical reagents & reactions ---
     Mahogany wood rack, 3 distinct chemistry reactions:
     1. Phenolphthalein indicator: Amber -> Vibrant Magenta with effervescence
     2. Copper sulfate: Pale Cyan -> Deep Cobalt Blue with settling white precipitate
     3. Catalytic effervescence: Tea -> Golden-Yellow with rich foaming head */
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
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
    border: 1.5px solid rgba(220, 240, 255, 0.85);
    border-top: none;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 0 0 4px rgba(255, 255, 255, 0.2);
  }

  .ttc-tube.t1 { left: 18px; }
  .ttc-tube.t2 { left: 46px; }
  .ttc-tube.t3 { left: 74px; }

  .ttc-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 30px;
  }

  .ttc-tube.t1 .ttc-liquid { animation: ttc-color1 9s infinite; }
  .ttc-tube.t2 .ttc-liquid { animation: ttc-color2 9s infinite; }
  .ttc-tube.t3 .ttc-liquid { animation: ttc-color3 9s infinite; }

  @keyframes ttc-color1 {
    0%, 8% { background: linear-gradient(180deg, rgba(234, 179, 8, 0.6), rgba(161, 98, 7, 0.8)); }
    18%, 90% {
      background: linear-gradient(180deg, #f43f5e, #be123c);
      box-shadow: inset 0 0 8px #f43f5e;
    }
    97%, 100% { background: linear-gradient(180deg, rgba(234, 179, 8, 0.6), rgba(161, 98, 7, 0.8)); }
  }

  @keyframes ttc-color2 {
    0%, 30% { background: linear-gradient(180deg, rgba(56, 189, 248, 0.5), rgba(14, 116, 144, 0.7)); }
    40%, 90% {
      background: linear-gradient(180deg, #3b82f6, #1d4ed8);
      box-shadow: inset 0 0 8px #60a5fa;
    }
    97%, 100% { background: linear-gradient(180deg, rgba(56, 189, 248, 0.5), rgba(14, 116, 144, 0.7)); }
  }

  @keyframes ttc-color3 {
    0%, 52% { background: linear-gradient(180deg, rgba(217, 119, 6, 0.6), rgba(146, 64, 14, 0.8)); }
    62%, 90% {
      background: linear-gradient(180deg, #facc15, #eab308);
      box-shadow: inset 0 0 8px #fde047;
    }
    97%, 100% { background: linear-gradient(180deg, rgba(217, 119, 6, 0.6), rgba(146, 64, 14, 0.8)); }
  }

  .ttc-fizz {
    position: absolute;
    bottom: 2px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    animation: ttc-fizz 0.9s ease-in infinite;
  }

  .ttc-tube.t1 .ttc-fizz { animation-name: ttc-fizz, ttc-gate1; animation-duration: 0.9s, 9s; }
  .ttc-tube.t2 .ttc-fizz { animation-name: ttc-fizz, ttc-gate2; animation-duration: 0.8s, 9s; }
  .ttc-tube.t3 .ttc-fizz { animation-name: ttc-fizz, ttc-gate3; animation-duration: 1s, 9s; }

  .ttc-fizz.f2 { left: 8px; animation-delay: -0.4s, 0s; }

  @keyframes ttc-fizz {
    0% { transform: translateY(0); opacity: 0; }
    20% { opacity: 0.95; }
    100% { transform: translateY(-26px); opacity: 0; }
  }

  @keyframes ttc-gate1 { 0%, 12% { visibility: hidden; } 16%, 92% { visibility: visible; } 96%, 100% { visibility: hidden; } }
  @keyframes ttc-gate2 { 0%, 34% { visibility: hidden; } 38%, 92% { visibility: visible; } 96%, 100% { visibility: hidden; } }
  @keyframes ttc-gate3 { 0%, 56% { visibility: hidden; } 60%, 92% { visibility: visible; } 96%, 100% { visibility: hidden; } }

  .ttc-precip {
    position: absolute;
    left: 2px;
    right: 2px;
    bottom: 0;
    height: 0;
    background: repeating-linear-gradient(180deg,
      #e0f2fe 0 1px,
      #bae6fd 1px 3px);
    box-shadow: 0 0 4px #e0f2fe;
    animation: ttc-precip 9s infinite;
  }

  @keyframes ttc-precip {
    0%, 40% { height: 0; }
    55% { height: 10px; }
    90% { height: 10px; }
    96%, 100% { height: 0; }
  }

  .ttc-foam {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    height: 0;
    background:
      radial-gradient(circle 2px, #fef08a 90%, transparent) 0 0 / 5px 5px;
    border-radius: 4px 4px 0 0;
    box-shadow: 0 0 6px #fef08a;
    animation: ttc-foam 9s infinite;
  }

  @keyframes ttc-foam {
    0%, 60% { height: 0; }
    72% { height: 12px; }
    90% { height: 12px; }
    96%, 100% { height: 0; }
  }

  .ttc-drop {
    position: absolute;
    top: 8px;
    width: 3px;
    height: 6px;
    border-radius: 0 0 50% 50%;
    opacity: 0;
    animation: ttc-fall 9s infinite;
  }

  .ttc-drop.d1 { left: 25px; background: #e11d48; animation-delay: 0s; box-shadow: 0 0 4px #f43f5e; }
  .ttc-drop.d2 { left: 53px; background: #38bdf8; animation-delay: 2.1s; box-shadow: 0 0 4px #38bdf8; }
  .ttc-drop.d3 { left: 81px; background: #fef08a; animation-delay: 4.2s; box-shadow: 0 0 4px #fef08a; }

  @keyframes ttc-fall {
    0% { transform: translateY(0); opacity: 0; }
    2% { opacity: 1; }
    5% { transform: translateY(14px); opacity: 0; }
    100% { opacity: 0; }
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
