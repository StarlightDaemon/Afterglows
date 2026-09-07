// Ferris Wheel: v1 and v2 preserved.
// v3 adds carnival night illumination:
// midnight sky, golden wheel truss framework, six chromatic passenger gondolas
// (magenta, amber, cyan, lime, cobalt, violet), chasing carnival marquee bulbs, and illuminated hub.
const ferrisStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fw {
    width: 104px;
    height: 100px;
    position: relative;
  }

  .fw-ground {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 6px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.55), transparent);
  }

  .fw-leg {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 3px;
    height: 46px;
    background: rgba(0, 204, 0, 0.65);
    transform-origin: top center;
  }

  .fw-leg.g1 { transform: translateX(-1.5px) rotate(24deg); }
  .fw-leg.g2 { transform: translateX(-1.5px) rotate(-24deg); }

  .fw-wheel {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 72px;
    height: 72px;
    margin-left: -36px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 50%;
    background:
      repeating-conic-gradient(rgba(140, 255, 170, 0.5) 0 1.6deg, transparent 1.6deg 60deg);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.3);
    animation: fw-turn 14s linear infinite;
  }

  @keyframes fw-turn {
    to { transform: rotate(360deg); }
  }

  .fw-seat {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 72px;
    height: 72px;
    margin-left: -36px;
    animation: fw-turn 14s linear infinite;
  }

  .fw-arm {
    position: absolute;
    inset: 0;
    transform: rotate(var(--seat));
  }

  .fw-car {
    position: absolute;
    top: -5px;
    left: 50%;
    width: 12px;
    height: 10px;
    margin-left: -6px;
    transform-origin: 50% 2px;
    animation: fw-counter 14s linear infinite;
  }

  @keyframes fw-counter {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  .fw-cab {
    position: absolute;
    inset: 0;
    transform: rotate(calc(-1 * var(--seat)));
    transform-origin: 50% 2px;
  }

  .fw-cab::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 1px;
    width: 10px;
    height: 7px;
    border-radius: 2px 2px 5px 5px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.9), rgba(0, 110, 22, 0.85));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.55);
  }

  .fw-cab::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 4px;
    margin-left: -0.5px;
    background: rgba(140, 255, 170, 0.8);
  }

  .fw-arm.s1 { --seat: 0deg; }
  .fw-arm.s2 { --seat: 60deg; }
  .fw-arm.s3 { --seat: 120deg; }
  .fw-arm.s4 { --seat: 180deg; }
  .fw-arm.s5 { --seat: 240deg; }
  .fw-arm.s6 { --seat: 300deg; }

  .fw-hub {
    position: absolute;
    left: 50%;
    top: 40px;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 32%, #d6ffe0, #2a8a3e 75%);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.7);
    animation: fw-hub 1.4s ease-in-out infinite;
  }

  @keyframes fw-hub {
    0%, 100% { box-shadow: 0 0 5px rgba(0, 204, 0, 0.5); }
    50% { box-shadow: 0 0 12px rgba(0, 204, 0, 1); }
  }

  .fw-bulbs {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    border-radius: 50%;
    background: repeating-conic-gradient(rgba(214, 255, 224, 0.9) 0 3deg, transparent 3deg 30deg);
    -webkit-mask-image: radial-gradient(circle, transparent 0 88%, black 90% 97%, transparent 99%);
    mask-image: radial-gradient(circle, transparent 0 88%, black 90% 97%, transparent 99%);
    animation: fw-bulbs 6s linear infinite reverse;
    opacity: 0.8;
  }

  @keyframes fw-bulbs {
    to { transform: rotate(360deg); }
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

  .fw {
    width: 104px;
    height: 100px;
    position: relative;
  }

  .fw-ground {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 6px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.55), transparent);
  }

  .fw-leg {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 3px;
    height: 48px;
    background: rgba(0, 204, 0, 0.65);
    transform-origin: top center;
  }

  .fw-leg.g1 { transform: translateX(-1.5px) rotate(24deg); }
  .fw-leg.g2 { transform: translateX(-1.5px) rotate(-24deg); }

  .fw-wheel {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 72px;
    height: 72px;
    margin-left: -36px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 50%;
    background:
      repeating-conic-gradient(rgba(140, 255, 170, 0.5) 0 1.6deg, transparent 1.6deg 60deg);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.3);
    animation: fw-turn 14s linear infinite;
  }

  @keyframes fw-turn {
    to { transform: rotate(360deg); }
  }

  .fw-seat {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 72px;
    height: 72px;
    margin-left: -36px;
    animation: fw-turn 14s linear infinite;
  }

  .fw-arm {
    position: absolute;
    inset: 0;
    transform: rotate(var(--seat));
  }

  .fw-car {
    position: absolute;
    top: -4px;
    left: 50%;
    width: 12px;
    height: 10px;
    margin-left: -6px;
    transform-origin: 50% 2px;
    animation: fw-counter 14s linear infinite;
  }

  @keyframes fw-counter {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  .fw-cab {
    position: absolute;
    inset: 0;
    transform: rotate(calc(-1 * var(--seat)));
    transform-origin: 50% 2px;
  }

  .fw-cab::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 1px;
    width: 10px;
    height: 7px;
    border-radius: 2px 2px 5px 5px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.9), rgba(0, 110, 22, 0.85));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.55);
  }

  .fw-cab::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 4px;
    margin-left: -0.5px;
    background: rgba(140, 255, 170, 0.8);
  }

  .fw-arm.s1 { --seat: 0deg; }
  .fw-arm.s2 { --seat: 60deg; }
  .fw-arm.s3 { --seat: 120deg; }
  .fw-arm.s4 { --seat: 180deg; }
  .fw-arm.s5 { --seat: 240deg; }
  .fw-arm.s6 { --seat: 300deg; }

  .fw-hub {
    position: absolute;
    left: 50%;
    top: 38px;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 32%, #d6ffe0, #2a8a3e 75%);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.7);
    animation: fw-hub 1.4s ease-in-out infinite;
  }

  @keyframes fw-hub {
    0%, 100% { box-shadow: 0 0 5px rgba(0, 204, 0, 0.5); }
    50% { box-shadow: 0 0 12px rgba(0, 204, 0, 1); }
  }

  .fw-bulbs {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    border-radius: 50%;
    background: repeating-conic-gradient(rgba(214, 255, 224, 0.9) 0 3deg, transparent 3deg 30deg);
    -webkit-mask-image: radial-gradient(circle closest-side, transparent 0 86%, black 88% 96%, transparent 98%);
    mask-image: radial-gradient(circle closest-side, transparent 0 86%, black 88% 96%, transparent 98%);
    animation: fw-bulbs 6s linear infinite reverse;
    opacity: 0.8;
  }

  @keyframes fw-bulbs {
    to { transform: rotate(360deg); }
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

  /* v3: Carnival night Ferris Wheel with midnight sky, golden truss framework,
     illuminated multicolor passenger gondolas (magenta, amber, cyan, emerald, cobalt, violet),
     chasing marquee lights, and glowing central hub. */
  .fwc {
    width: 104px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .fwc-ground {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 6px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #fbbf24 50%, transparent);
    box-shadow: 0 0 6px #f59e0b;
  }

  /* Structural A-frame steel support legs */
  .fwc-leg {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 3px;
    height: 48px;
    background: linear-gradient(180deg, #facc15, #b45309);
    box-shadow: 0 0 4px rgba(250, 204, 21, 0.4);
    transform-origin: top center;
  }

  .fwc-leg.g1 { transform: translateX(-1.5px) rotate(24deg); }
  .fwc-leg.g2 { transform: translateX(-1.5px) rotate(-24deg); }

  /* Rotating golden wheel truss */
  .fwc-wheel {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 72px;
    height: 72px;
    margin-left: -36px;
    border: 2px solid #facc15;
    border-radius: 50%;
    background:
      repeating-conic-gradient(#fde047 0 1.6deg, transparent 1.6deg 60deg);
    box-shadow: 0 0 12px rgba(250, 204, 21, 0.4);
    animation: fwc-turn 14s linear infinite;
  }

  @keyframes fwc-turn {
    to { transform: rotate(360deg); }
  }

  .fwc-seat {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 72px;
    height: 72px;
    margin-left: -36px;
    animation: fwc-turn 14s linear infinite;
  }

  .fwc-arm {
    position: absolute;
    inset: 0;
    transform: rotate(var(--seat));
  }

  .fwc-car {
    position: absolute;
    top: -4px;
    left: 50%;
    width: 12px;
    height: 10px;
    margin-left: -6px;
    transform-origin: 50% 2px;
    animation: fwc-counter 14s linear infinite;
  }

  @keyframes fwc-counter {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  .fwc-cab {
    position: absolute;
    inset: 0;
    transform: rotate(calc(-1 * var(--seat)));
    transform-origin: 50% 2px;
  }

  /* Chrome hanger pin */
  .fwc-cab::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 4px;
    margin-left: -0.5px;
    background: #ffffff;
  }

  /* Chromatic passenger gondolas */
  .fwc-cab::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 1px;
    width: 10px;
    height: 7px;
    border-radius: 2px 2px 5px 5px;
    box-shadow: 0 0 6px currentColor;
  }

  /* 6 distinct neon colors for the 6 gondolas */
  .fwc-arm.s1 { --seat: 0deg; }
  .fwc-arm.s1 .fwc-cab::after { background: linear-gradient(180deg, #fecdd3, #f43f5e); color: #f43f5e; }

  .fwc-arm.s2 { --seat: 60deg; }
  .fwc-arm.s2 .fwc-cab::after { background: linear-gradient(180deg, #fef08a, #facc15); color: #facc15; }

  .fwc-arm.s3 { --seat: 120deg; }
  .fwc-arm.s3 .fwc-cab::after { background: linear-gradient(180deg, #e0f2fe, #00f0ff); color: #00f0ff; }

  .fwc-arm.s4 { --seat: 180deg; }
  .fwc-arm.s4 .fwc-cab::after { background: linear-gradient(180deg, #dcfce7, #10b981); color: #10b981; }

  .fwc-arm.s5 { --seat: 240deg; }
  .fwc-arm.s5 .fwc-cab::after { background: linear-gradient(180deg, #dbeafe, #3b82f6); color: #3b82f6; }

  .fwc-arm.s6 { --seat: 300deg; }
  .fwc-arm.s6 .fwc-cab::after { background: linear-gradient(180deg, #f3e8ff, #a855f7); color: #a855f7; }

  /* Illuminated central axle hub */
  .fwc-hub {
    position: absolute;
    left: 50%;
    top: 38px;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 32%, #ffffff, #facc15 65%, #b45309 100%);
    box-shadow: 0 0 10px #fde047;
    animation: fwc-hub 1.4s ease-in-out infinite;
  }

  @keyframes fwc-hub {
    0%, 100% { box-shadow: 0 0 6px #facc15; filter: brightness(1); }
    50% { box-shadow: 0 0 14px #ffffff, 0 0 22px #fde047; filter: brightness(1.4); }
  }

  /* Chasing carnival marquee rim bulbs */
  .fwc-bulbs {
    position: absolute;
    left: 50%;
    top: 4px;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    border-radius: 50%;
    background: repeating-conic-gradient(#ffffff 0 3deg, #fde047 3deg 6deg, transparent 6deg 30deg);
    -webkit-mask-image: radial-gradient(circle closest-side, transparent 0 86%, black 88% 96%, transparent 98%);
    mask-image: radial-gradient(circle closest-side, transparent 0 86%, black 88% 96%, transparent 98%);
    animation: fwc-bulbs 6s linear infinite reverse;
    opacity: 0.9;
  }

  @keyframes fwc-bulbs {
    to { transform: rotate(360deg); }
  }
  `,
};

const ferrisMarkup = {
  v1: `
      <div class="fw">
        <div class="fw-bulbs"></div>
        <div class="fw-wheel"></div>
        <div class="fw-seat">
          <div class="fw-arm s1"><div class="fw-car"><div class="fw-cab"></div></div></div>
          <div class="fw-arm s2"><div class="fw-car"><div class="fw-cab"></div></div></div>
          <div class="fw-arm s3"><div class="fw-car"><div class="fw-cab"></div></div></div>
          <div class="fw-arm s4"><div class="fw-car"><div class="fw-cab"></div></div></div>
          <div class="fw-arm s5"><div class="fw-car"><div class="fw-cab"></div></div></div>
          <div class="fw-arm s6"><div class="fw-car"><div class="fw-cab"></div></div></div>
        </div>
        <div class="fw-leg g1"></div>
        <div class="fw-leg g2"></div>
        <div class="fw-hub"></div>
        <div class="fw-ground"></div>
      </div>
    `,
  v2: `
      <div class="fw">
        <div class="fw-bulbs"></div>
        <div class="fw-wheel"></div>
        <div class="fw-seat">
          <div class="fw-arm s1"><div class="fw-car"><div class="fw-cab"></div></div></div>
          <div class="fw-arm s2"><div class="fw-car"><div class="fw-cab"></div></div></div>
          <div class="fw-arm s3"><div class="fw-car"><div class="fw-cab"></div></div></div>
          <div class="fw-arm s4"><div class="fw-car"><div class="fw-cab"></div></div></div>
          <div class="fw-arm s5"><div class="fw-car"><div class="fw-cab"></div></div></div>
          <div class="fw-arm s6"><div class="fw-car"><div class="fw-cab"></div></div></div>
        </div>
        <div class="fw-leg g1"></div>
        <div class="fw-leg g2"></div>
        <div class="fw-hub"></div>
        <div class="fw-ground"></div>
      </div>
    `,
  v3: `
      <div class="fwc">
        <div class="fwc-bulbs"></div>
        <div class="fwc-wheel"></div>
        <div class="fwc-seat">
          <div class="fwc-arm s1"><div class="fwc-car"><div class="fwc-cab"></div></div></div>
          <div class="fwc-arm s2"><div class="fwc-car"><div class="fwc-cab"></div></div></div>
          <div class="fwc-arm s3"><div class="fwc-car"><div class="fwc-cab"></div></div></div>
          <div class="fwc-arm s4"><div class="fwc-car"><div class="fwc-cab"></div></div></div>
          <div class="fwc-arm s5"><div class="fwc-car"><div class="fwc-cab"></div></div></div>
          <div class="fwc-arm s6"><div class="fwc-car"><div class="fwc-cab"></div></div></div>
        </div>
        <div class="fwc-leg g1"></div>
        <div class="fwc-leg g2"></div>
        <div class="fwc-hub"></div>
        <div class="fwc-ground"></div>
      </div>
    `,
};

class ConceptFerris extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${ferrisStyles[version] || ferrisStyles.v3}</style>${ferrisMarkup[version] || ferrisMarkup.v3}`;
  }
}

if (!customElements.get('concept-ferris')) {
  customElements.define('concept-ferris', ConceptFerris);
}
