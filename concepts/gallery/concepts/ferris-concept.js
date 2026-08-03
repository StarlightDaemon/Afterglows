// v1 below is the archived original; v2 fixes the invisible marquee ring
// (the mask's radial gradient defaulted to farthest-corner, ~56px, which
// put the whole visible ring outside the element's clipped 40px circle -
// closest-side brings it back onto the rim), aligns the hub and leg apex
// to the wheel's true center (both sat 2px low), and lifts the gondola
// pivots 1px so cabins clear the ground line at six o'clock.
const ferrisStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* The wheel turns at fairground pace; every gondola rides its spoke
     tip while counter-rotating to hang level. Hub bulbs chase and the
     A-frame anchors the whole thing to the ground line. */
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

  /* Support legs. */
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

  /* The rotating wheel: rim + spokes as one element. */
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

  /* Gondola carriers: same rotation as the wheel, each pre-rotated to
     its seat angle; the car inside counter-rotates to stay level. */
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

  /* Pivot point at the spoke tip: carries only the counter-rotation
     animation. The cab inside carries the static negative seat angle,
     so the two transforms compose and every cabin hangs level. */
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

  /* The visible cabin hangs below its pivot. */
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

  /* Hub with chasing bulbs. */
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

  /* Rim marquee bulbs: a dashed ring pulsing out of phase with the
     wheel to feel like chasing lights. */
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

  /* The wheel turns at fairground pace; every gondola rides its spoke
     tip while counter-rotating to hang level. Marquee bulbs chase
     around the rim, and the A-frame apex meets the hub dead on the
     wheel's center. */
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

  /* Support legs: tops meet at the wheel center (y44). */
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

  /* The rotating wheel: rim + spokes as one element. */
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

  /* Gondola carriers: same rotation as the wheel, each pre-rotated to
     its seat angle; the car inside counter-rotates to stay level. */
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

  /* Pivot point at the spoke tip: carries only the counter-rotation
     animation. The cab inside carries the static negative seat angle,
     so the two transforms compose and every cabin hangs level. Pivot
     sits 2px above the rim so cabins clear the ground at bottom. */
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

  /* The visible cabin hangs below its pivot. */
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

  /* Hub, centered on the wheel's true center. */
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

  /* Rim marquee bulbs: a dashed ring chasing counter to the wheel.
     The mask's gradient is sized closest-side so the visible ring
     (88-96% of 40px = 35-38px) actually lands on the rim instead of
     outside the element's clipped circle. */
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
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${ferrisStyles[version] || ferrisStyles.v2}</style>${ferrisMarkup[version] || ferrisMarkup.v2}`;
  }
}

if (!customElements.get('concept-ferris')) {
  customElements.define('concept-ferris', ConceptFerris);
}
