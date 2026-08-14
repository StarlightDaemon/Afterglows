// v1 is the archived original (readout clipped at the tile edge on "AIR: HI");
// v2 widens and recenters the readout;
// v3 introduces physical flame thermochemistry: a lazy yellow/orange safety
// flame when the brass collar is closed (AIR: LO), roaring into an intense
// cobalt/cyan non-luminous flame with a bright inner reaction cone when open (AIR: HI).
const bunsenStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bn {
    width: 92px;
    height: 100px;
    position: relative;
  }

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
    40%, 60% { transform: scaleY(1.35) scaleX(0.8); opacity: 1; }
  }

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
`,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bn {
    width: 92px;
    height: 100px;
    position: relative;
  }

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
    40%, 60% { transform: scaleY(1.35) scaleX(0.8); opacity: 1; }
  }

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

  .bn-read {
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 46px;
    margin-left: -23px;
    text-align: center;
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
`,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bnc {
    width: 92px;
    height: 100px;
    position: relative;
  }

  /* Heavy cast iron dark base */
  .bnc-base {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 40px;
    height: 8px;
    margin-left: -20px;
    border-radius: 50% 50% 3px 3px;
    background: linear-gradient(180deg, #2a2e36, #14171c);
    border: 1px solid #3d434d;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  }

  /* Nickel-plated steel barrel */
  .bnc-barrel {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 12px;
    height: 40px;
    margin-left: -6px;
    border-radius: 2px;
    background: linear-gradient(90deg, #606875, #b8c2d0, #606875);
    border: 1px solid #4a515e;
  }

  /* Polished brass collar */
  .bnc-collar {
    position: absolute;
    left: 50%;
    bottom: 18px;
    width: 16px;
    height: 8px;
    margin-left: -8px;
    border-radius: 2px;
    background: linear-gradient(90deg, #c4942c, #ffd56b, #b38220);
    border: 1px solid #e0aa35;
    animation: bnc-collar 6s ease-in-out infinite;
  }

  .bnc-collar::after {
    content: '';
    position: absolute;
    right: 2px;
    top: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #111;
  }

  @keyframes bnc-collar {
    0%, 100% { transform: rotate(0deg); }
    40%, 60% { transform: rotate(-18deg); }
  }

  /* Outer flame: Shifts from luminous yellow-orange (LO air) to roaring cyan/blue (HI air) */
  .bnc-flame-outer {
    position: absolute;
    left: 50%;
    bottom: 50px;
    width: 24px;
    height: 42px;
    margin-left: -12px;
    border-radius: 50% 50% 50% 50% / 74% 74% 26% 26%;
    filter: blur(0.5px);
    transform-origin: 50% 100%;
    animation: bnc-outer 6s ease-in-out infinite, bnc-flicker 0.18s steps(2) infinite;
  }

  @keyframes bnc-outer {
    0%, 100% {
      transform: scaleY(1.1) scaleX(1.15);
      background: radial-gradient(ellipse at 50% 85%, #fff2a8, #ff9911 50%, rgba(230, 60, 0, 0.4) 80%, transparent);
      box-shadow: 0 0 16px rgba(255, 140, 0, 0.6);
      opacity: 0.92;
    }
    40%, 60% {
      transform: scaleY(1.35) scaleX(0.78);
      background: radial-gradient(ellipse at 50% 85%, #d4f8ff, #00c3ff 45%, rgba(0, 80, 240, 0.6) 80%, transparent);
      box-shadow: 0 0 20px rgba(0, 180, 255, 0.85);
      opacity: 1;
    }
  }

  /* Inner cone: Unburnt gas / primary reaction zone; becomes distinct & pale cyan when roaring */
  .bnc-flame-inner {
    position: absolute;
    left: 50%;
    bottom: 50px;
    width: 8px;
    height: 20px;
    margin-left: -4px;
    border-radius: 50% 50% 40% 40% / 70% 70% 30% 30%;
    transform-origin: 50% 100%;
    animation: bnc-inner 6s ease-in-out infinite, bnc-flicker 0.15s steps(2) infinite;
  }

  @keyframes bnc-inner {
    0%, 100% {
      transform: scaleY(0.4);
      background: radial-gradient(ellipse at 50% 80%, #ffffff, rgba(255, 200, 50, 0.6) 60%, transparent);
      opacity: 0.4;
    }
    40%, 60% {
      transform: scaleY(1.3);
      background: radial-gradient(ellipse at 50% 80%, #ffffff, #72f2ff 65%, transparent);
      box-shadow: 0 0 10px #72f2ff;
      opacity: 1;
    }
  }

  @keyframes bnc-flicker {
    0% { margin-left: -12px; }
    100% { margin-left: -10px; }
  }

  .bnc-haze {
    position: absolute;
    left: 50%;
    bottom: 88px;
    width: 3px;
    height: 14px;
    border-radius: 2px;
    background: linear-gradient(180deg, transparent, rgba(200, 230, 255, 0.4) 60%, transparent);
    filter: blur(1px);
    animation: bnc-haze 2s ease-in-out infinite;
  }

  .bnc-haze.h2 { margin-left: -6px; animation-delay: -0.7s; }
  .bnc-haze.h3 { margin-left: 4px; animation-delay: -1.3s; }

  @keyframes bnc-haze {
    0% { transform: translateY(6px) skewX(0deg); opacity: 0; }
    30% { opacity: 0.7; }
    100% { transform: translateY(-8px) skewX(8deg); opacity: 0; }
  }

  .bnc-read {
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 48px;
    margin-left: -24px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    animation: bnc-read-col 6s steps(1) infinite;
  }

  .bnc-read::before {
    content: 'AIR: LO';
    animation: bnc-read-txt 6s steps(1) infinite;
  }

  @keyframes bnc-read-txt {
    0% { content: 'AIR: LO'; }
    40% { content: 'AIR: HI'; }
    64% { content: 'AIR: LO'; }
  }

  @keyframes bnc-read-col {
    0%, 100% { color: #ffb833; text-shadow: 0 0 6px rgba(255, 180, 50, 0.6); }
    40%, 60% { color: #55d6ff; text-shadow: 0 0 6px rgba(80, 210, 255, 0.8); }
  }
`,
};

const bunsenMarkup = {
  v1: `
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
  `,
  v2: `
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
  `,
  v3: `
    <div class="bnc">
      <div class="bnc-haze"></div>
      <div class="bnc-haze h2"></div>
      <div class="bnc-haze h3"></div>
      <div class="bnc-flame-outer"></div>
      <div class="bnc-flame-inner"></div>
      <div class="bnc-barrel"></div>
      <div class="bnc-collar"></div>
      <div class="bnc-base"></div>
      <div class="bnc-read"></div>
    </div>
  `,
};

class ConceptBunsen extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${bunsenStyles[version] || bunsenStyles.v3}</style>${bunsenMarkup[version] || bunsenMarkup.v3}`;
  }
}

if (!customElements.get('concept-bunsen')) {
  customElements.define('concept-bunsen', ConceptBunsen);
}
