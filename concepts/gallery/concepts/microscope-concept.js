// 2026-08-01 split: the view inset's cell field and focus-blur mechanic
// moved to microbes-concept.js, where it gets the full frame. v1 preserves
// the original two-subjects-at-once render; v2 lets the instrument stand
// alone — recentred, with the objective turret clicking between powers and
// the mag readout following.
// v3 adds authentic laboratory instrument materials: enamelled matte black limb and base,
// polished brass nosepiece turret and coarse adjustment wheels, stainless steel tube,
// and a crystal glass slide with a stained blue biological specimen illuminated by the sub-stage mirror.
const microscopeStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mi {
    width: 116px;
    height: 96px;
    position: relative;
  }

  .mi-base {
    position: absolute;
    left: 8px;
    bottom: 6px;
    width: 54px;
    height: 7px;
    border-radius: 3px 6px 2px 2px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.85), rgba(0, 60, 12, 0.9));
  }

  .mi-arm {
    position: absolute;
    left: 44px;
    bottom: 10px;
    width: 9px;
    height: 56px;
    border-radius: 6px 10px 2px 2px;
    background: linear-gradient(90deg, rgba(0, 150, 30, 0.85), rgba(0, 80, 16, 0.9));
    transform: rotate(-8deg);
  }

  .mi-tube {
    position: absolute;
    left: 28px;
    top: 6px;
    width: 8px;
    height: 26px;
    border-radius: 4px 4px 2px 2px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.9), rgba(0, 120, 24, 0.9));
    transform: rotate(24deg);
  }

  .mi-turret {
    position: absolute;
    left: 30px;
    top: 32px;
    width: 16px;
    height: 6px;
    border-radius: 3px;
    background: rgba(140, 255, 170, 0.85);
  }

  .mi-obj {
    position: absolute;
    top: 6px;
    width: 4px;
    height: 9px;
    background: rgba(190, 255, 205, 0.9);
    border-radius: 0 0 2px 2px;
  }

  .mi-obj.o1 { left: 3px; }
  .mi-obj.o2 { left: 9px; height: 6px; opacity: 0.7; }

  .mi-stage {
    position: absolute;
    left: 16px;
    top: 52px;
    width: 42px;
    height: 4px;
    background: rgba(0, 204, 0, 0.7);
    border-radius: 2px;
    animation: mi-nudge 9s infinite;
  }

  .mi-slide {
    position: absolute;
    left: 24px;
    top: 49px;
    width: 22px;
    height: 3px;
    background: rgba(190, 255, 205, 0.6);
    border-radius: 1px;
    animation: mi-nudge 9s infinite;
  }

  @keyframes mi-nudge {
    0%, 66% { transform: translateX(0); }
    68% { transform: translateX(3px); }
    70% { transform: translateX(2px); }
    100% { transform: translateX(2px); }
  }

  .mi-mirror {
    position: absolute;
    left: 32px;
    top: 62px;
    width: 12px;
    height: 5px;
    border-radius: 50%;
    background: linear-gradient(180deg, #d6ffe0, rgba(0, 140, 28, 0.9));
    transform-origin: 50% 50%;
    animation: mi-mirror 9s ease-in-out infinite;
  }

  @keyframes mi-mirror {
    0%, 100% { transform: rotate(-14deg); }
    30%, 60% { transform: rotate(-24deg); }
  }

  .mi-shaft {
    position: absolute;
    left: 35px;
    top: 52px;
    width: 6px;
    height: 12px;
    clip-path: polygon(20% 100%, 80% 100%, 100% 0, 0 0);
    background: linear-gradient(0deg, rgba(214, 255, 224, 0.6), rgba(140, 255, 170, 0.15));
    animation: mi-shaft 9s ease-in-out infinite;
  }

  @keyframes mi-shaft {
    0%, 100% { opacity: 0.5; }
    30%, 62% { opacity: 1; }
  }

  .mi-knob {
    position: absolute;
    left: 56px;
    top: 34px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.85);
    box-sizing: border-box;
    animation: mi-knob 9s infinite;
  }

  .mi-knob::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 1.5px;
    height: 3px;
    margin-left: -0.75px;
    background: rgba(214, 255, 224, 0.95);
  }

  @keyframes mi-knob {
    0% { transform: rotate(0deg); }
    12% { transform: rotate(-70deg); }
    26% { transform: rotate(40deg); }
    38% { transform: rotate(-15deg); }
    46%, 66% { transform: rotate(0deg); }
    72% { transform: rotate(25deg); }
    82%, 100% { transform: rotate(10deg); }
  }

  .mi-view {
    position: absolute;
    right: 2px;
    top: 6px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle, rgba(0, 90, 18, 0.5), rgba(0, 40, 8, 0.8));
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.3);
  }

  .mi-cell {
    position: absolute;
    border-radius: 46% 54% 52% 48%;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.5), rgba(0, 110, 22, 0.5));
    animation: mi-cell ease-in-out infinite, mi-focus 9s infinite;
  }

  .mi-cell::after {
    content: '';
    position: absolute;
    left: 30%;
    top: 26%;
    width: 40%;
    height: 40%;
    border-radius: 50%;
    background: rgba(0, 160, 32, 0.7);
  }

  .mi-cell.x1 { left: 6px; top: 10px; width: 13px; height: 11px; animation-duration: 6s, 9s; }
  .mi-cell.x2 { left: 24px; top: 20px; width: 10px; height: 9px; animation-duration: 7.4s, 9s; animation-delay: -3s, 0s; }
  .mi-cell.x3 { left: 14px; top: 28px; width: 8px; height: 7px; animation-duration: 6.8s, 9s; animation-delay: -5s, 0s; }

  @keyframes mi-cell {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(4px, -3px) rotate(8deg); }
    66% { transform: translate(-3px, 3px) rotate(-6deg); }
  }

  @keyframes mi-focus {
    0% { filter: blur(2.2px); }
    12% { filter: blur(1.4px); }
    26% { filter: blur(2.6px); }
    38% { filter: blur(0.8px); }
    46%, 64% { filter: blur(0); }
    68% { filter: blur(1.6px); }
    76%, 100% { filter: blur(0.2px); }
  }

  .mi-mag {
    position: absolute;
    right: 8px;
    top: 50px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
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

  .mi2 {
    width: 104px;
    height: 96px;
    position: relative;
  }

  .mi2-base {
    position: absolute;
    left: 22px;
    bottom: 6px;
    width: 54px;
    height: 7px;
    border-radius: 3px 6px 2px 2px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.85), rgba(0, 60, 12, 0.9));
  }

  .mi2-arm {
    position: absolute;
    left: 58px;
    bottom: 10px;
    width: 9px;
    height: 56px;
    border-radius: 6px 10px 2px 2px;
    background: linear-gradient(90deg, rgba(0, 150, 30, 0.85), rgba(0, 80, 16, 0.9));
    transform: rotate(-8deg);
  }

  .mi2-tube {
    position: absolute;
    left: 42px;
    top: 6px;
    width: 8px;
    height: 26px;
    border-radius: 4px 4px 2px 2px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.9), rgba(0, 120, 24, 0.9));
    transform: rotate(24deg);
  }

  .mi2-turret {
    position: absolute;
    left: 44px;
    top: 32px;
    width: 16px;
    height: 6px;
    border-radius: 3px;
    background: rgba(140, 255, 170, 0.85);
    animation: mi2-swap 9s infinite;
  }

  @keyframes mi2-swap {
    0%, 44% { transform: translateX(0); }
    46%, 94% { transform: translateX(-6px); }
    96%, 100% { transform: translateX(0); }
  }

  .mi2-obj {
    position: absolute;
    top: 6px;
    width: 4px;
    background: rgba(190, 255, 205, 0.9);
    border-radius: 0 0 2px 2px;
  }

  .mi2-obj.o1 { left: 3px; height: 9px; animation: mi2-obj-a 9s infinite; }
  .mi2-obj.o2 { left: 9px; height: 6px; animation: mi2-obj-b 9s infinite; }

  @keyframes mi2-obj-a {
    0%, 44% { opacity: 1; }
    46%, 94% { opacity: 0.55; }
    96%, 100% { opacity: 1; }
  }

  @keyframes mi2-obj-b {
    0%, 44% { opacity: 0.55; }
    46%, 94% { opacity: 1; }
    96%, 100% { opacity: 0.55; }
  }

  .mi2-stage {
    position: absolute;
    left: 30px;
    top: 52px;
    width: 42px;
    height: 4px;
    background: rgba(0, 204, 0, 0.7);
    border-radius: 2px;
    animation: mi2-nudge 9s infinite;
  }

  .mi2-slide {
    position: absolute;
    left: 38px;
    top: 49px;
    width: 22px;
    height: 3px;
    background: rgba(190, 255, 205, 0.6);
    border-radius: 1px;
    animation: mi2-nudge 9s infinite;
  }

  @keyframes mi2-nudge {
    0%, 66% { transform: translateX(0); }
    68% { transform: translateX(3px); }
    70% { transform: translateX(2px); }
    100% { transform: translateX(2px); }
  }

  .mi2-mirror {
    position: absolute;
    left: 46px;
    top: 62px;
    width: 12px;
    height: 5px;
    border-radius: 50%;
    background: linear-gradient(180deg, #d6ffe0, rgba(0, 140, 28, 0.9));
    transform-origin: 50% 50%;
    animation: mi2-mirror 9s ease-in-out infinite;
  }

  @keyframes mi2-mirror {
    0%, 100% { transform: rotate(-14deg); }
    30%, 60% { transform: rotate(-24deg); }
  }

  .mi2-shaft {
    position: absolute;
    left: 49px;
    top: 52px;
    width: 6px;
    height: 12px;
    clip-path: polygon(20% 100%, 80% 100%, 100% 0, 0 0);
    background: linear-gradient(0deg, rgba(214, 255, 224, 0.6), rgba(140, 255, 170, 0.15));
    animation: mi2-shaft 9s ease-in-out infinite;
  }

  @keyframes mi2-shaft {
    0%, 100% { opacity: 0.5; }
    38%, 44% { opacity: 1; }
    48% { opacity: 0.55; }
    68%, 92% { opacity: 1; }
  }

  .mi2-knob {
    position: absolute;
    left: 70px;
    top: 34px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.85);
    box-sizing: border-box;
    animation: mi2-knob 9s infinite;
  }

  .mi2-knob::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 1.5px;
    height: 3px;
    margin-left: -0.75px;
    background: rgba(214, 255, 224, 0.95);
  }

  @keyframes mi2-knob {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(-70deg); }
    22% { transform: rotate(40deg); }
    32% { transform: rotate(-12deg); }
    38%, 46% { transform: rotate(0deg); }
    54% { transform: rotate(-45deg); }
    62% { transform: rotate(28deg); }
    68%, 100% { transform: rotate(8deg); }
  }

  .mi2-mag {
    position: absolute;
    right: 4px;
    bottom: 10px;
    width: 26px;
    height: 10px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
    text-align: right;
  }

  .mi2-mag span {
    position: absolute;
    right: 0;
    top: 0;
  }

  .mi2-mag .m100 { animation: mi2-mag-a 9s infinite; }
  .mi2-mag .m400 { animation: mi2-mag-b 9s infinite; }

  @keyframes mi2-mag-a {
    0%, 44% { opacity: 1; }
    46%, 94% { opacity: 0; }
    96%, 100% { opacity: 1; }
  }

  @keyframes mi2-mag-b {
    0%, 44% { opacity: 0; }
    46%, 94% { opacity: 1; }
    96%, 100% { opacity: 0; }
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

  .mic {
    width: 104px;
    height: 96px;
    position: relative;
  }

  /* Heavy cast iron enameled black horseshoe base */
  .mic-base {
    position: absolute;
    left: 22px;
    bottom: 6px;
    width: 54px;
    height: 7px;
    border-radius: 3px 6px 2px 2px;
    background: linear-gradient(180deg, #374151, #111827);
    border: 1px solid #4b5563;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  /* Curved cast iron arm */
  .mic-arm {
    position: absolute;
    left: 58px;
    bottom: 10px;
    width: 9px;
    height: 56px;
    border-radius: 6px 10px 2px 2px;
    background: linear-gradient(90deg, #374151, #1f2937 50%, #111827);
    border: 1px solid #4b5563;
    transform: rotate(-8deg);
  }

  /* Polished chrome optical drawtube */
  .mic-tube {
    position: absolute;
    left: 42px;
    top: 6px;
    width: 8px;
    height: 26px;
    border-radius: 4px 4px 2px 2px;
    background: linear-gradient(90deg, #94a3b8, #f8fafc, #94a3b8);
    border: 1px solid #64748b;
    transform: rotate(24deg);
  }

  /* Polished brass revolving turret */
  .mic-turret {
    position: absolute;
    left: 44px;
    top: 32px;
    width: 16px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, #d97706, #fbbf24, #b45309);
    border: 1px solid #f59e0b;
    box-shadow: 0 0 4px rgba(245, 158, 11, 0.5);
    animation: mi2-swap 9s infinite;
  }

  .mic-obj {
    position: absolute;
    top: 6px;
    width: 4px;
    border-radius: 0 0 2px 2px;
  }

  /* Objective lenses with brass & chrome collars */
  .mic-obj.o1 {
    left: 3px;
    height: 9px;
    background: linear-gradient(180deg, #d97706, #3b82f6 40%, #e2e8f0);
    border: 1px solid #60a5fa;
    animation: mi2-obj-a 9s infinite;
  }
  .mic-obj.o2 {
    left: 9px;
    height: 6px;
    background: linear-gradient(180deg, #d97706, #e11d48 40%, #e2e8f0);
    border: 1px solid #f43f5e;
    animation: mi2-obj-b 9s infinite;
  }

  /* Mechanical stage */
  .mic-stage {
    position: absolute;
    left: 30px;
    top: 52px;
    width: 42px;
    height: 4px;
    background: #1e293b;
    border: 1px solid #475569;
    border-radius: 2px;
    animation: mi2-nudge 9s infinite;
  }

  /* Specimen slide with stained blue biological culture */
  .mic-slide {
    position: absolute;
    left: 38px;
    top: 49px;
    width: 22px;
    height: 3px;
    background: rgba(220, 240, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 1px;
    animation: mi2-nudge 9s infinite;
  }

  .mic-slide::after {
    content: '';
    position: absolute;
    left: 9px;
    top: 0;
    width: 4px;
    height: 3px;
    border-radius: 50%;
    background: #2563eb;
    box-shadow: 0 0 3px #60a5fa;
  }

  /* Sub-stage concave mirror */
  .mic-mirror {
    position: absolute;
    left: 46px;
    top: 62px;
    width: 12px;
    height: 5px;
    border-radius: 50%;
    background: linear-gradient(180deg, #ffffff, #94a3b8);
    border: 1px solid #cbd5e1;
    transform-origin: 50% 50%;
    animation: mi2-mirror 9s ease-in-out infinite;
  }

  /* Illuminated optical light path */
  .mic-shaft {
    position: absolute;
    left: 49px;
    top: 52px;
    width: 6px;
    height: 12px;
    clip-path: polygon(20% 100%, 80% 100%, 100% 0, 0 0);
    background: linear-gradient(0deg, rgba(254, 240, 138, 0.8), rgba(254, 240, 138, 0.15));
    animation: mi2-shaft 9s ease-in-out infinite;
  }

  /* Brass fine-focus adjustment wheel */
  .mic-knob {
    position: absolute;
    left: 70px;
    top: 34px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #f59e0b;
    background: #78350f;
    box-sizing: border-box;
    box-shadow: 0 0 4px rgba(245, 158, 11, 0.4);
    animation: mi2-knob 9s infinite;
  }

  .mic-knob::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 1.5px;
    height: 3px;
    margin-left: -0.75px;
    background: #fde047;
  }

  /* Magnification indicator */
  .mic-mag {
    position: absolute;
    right: 4px;
    bottom: 10px;
    width: 28px;
    height: 10px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #38bdf8;
    text-shadow: 0 0 5px rgba(56, 189, 248, 0.7);
    text-align: right;
  }

  .mic-mag span {
    position: absolute;
    right: 0;
    top: 0;
  }

  .mic-mag .m100 { animation: mi2-mag-a 9s infinite; }
  .mic-mag .m400 { animation: mi2-mag-b 9s infinite; }
`,
};

const microscopeMarkup = {
  v1: `
    <div class="mi">
      <div class="mi-arm"></div>
      <div class="mi-tube"></div>
      <div class="mi-turret">
        <div class="mi-obj o1"></div>
        <div class="mi-obj o2"></div>
      </div>
      <div class="mi-shaft"></div>
      <div class="mi-stage"></div>
      <div class="mi-slide"></div>
      <div class="mi-mirror"></div>
      <div class="mi-knob"></div>
      <div class="mi-base"></div>
      <div class="mi-view">
        <div class="mi-cell x1"></div>
        <div class="mi-cell x2"></div>
        <div class="mi-cell x3"></div>
      </div>
      <div class="mi-mag">&#215;400</div>
    </div>
  `,
  v2: `
    <div class="mi2">
      <div class="mi2-arm"></div>
      <div class="mi2-tube"></div>
      <div class="mi2-turret">
        <div class="mi2-obj o1"></div>
        <div class="mi2-obj o2"></div>
      </div>
      <div class="mi2-shaft"></div>
      <div class="mi2-stage"></div>
      <div class="mi2-slide"></div>
      <div class="mi2-mirror"></div>
      <div class="mi2-knob"></div>
      <div class="mi2-base"></div>
      <div class="mi2-mag">
        <span class="m100">&#215;100</span>
        <span class="m400">&#215;400</span>
      </div>
    </div>
  `,
  v3: `
    <div class="mic">
      <div class="mic-arm"></div>
      <div class="mic-tube"></div>
      <div class="mic-turret">
        <div class="mic-obj o1"></div>
        <div class="mic-obj o2"></div>
      </div>
      <div class="mic-shaft"></div>
      <div class="mic-stage"></div>
      <div class="mic-slide"></div>
      <div class="mic-mirror"></div>
      <div class="mic-knob"></div>
      <div class="mic-base"></div>
      <div class="mic-mag">
        <span class="m100">&#215;100</span>
        <span class="m400">&#215;400</span>
      </div>
    </div>
  `,
};

class ConceptMicroscope extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${microscopeStyles[version] || microscopeStyles.v3}</style>${microscopeMarkup[version] || microscopeMarkup.v3}`;
  }
}

if (!customElements.get('concept-microscope')) {
  customElements.define('concept-microscope', ConceptMicroscope);
}
