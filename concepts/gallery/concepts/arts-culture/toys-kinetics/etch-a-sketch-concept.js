const etchASketchStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .eas {
    width: 116px;
    height: 98px;
    position: relative;
  }

  .eas-frame {
    position: absolute;
    inset: 4px;
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.9), rgba(0, 45, 10, 0.98));
    border: 2px solid var(--accent, #00cc00);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.35);
    animation: eas-shake 2.4s ease-in-out infinite;
  }

  @keyframes eas-shake {
    0%, 48% { transform: translate(0, 0) rotate(0deg); }
    54% { transform: translate(-8px, -3px) rotate(-5deg); }
    62% { transform: translate(8px, 3px) rotate(5deg); }
    70% { transform: translate(-8px, 3px) rotate(-5deg); }
    78% { transform: translate(8px, -3px) rotate(5deg); }
    86%, 100% { transform: translate(0, 0) rotate(0deg); }
  }

  .eas-screen {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 84px;
    height: 52px;
    border-radius: 4px;
    background: radial-gradient(circle at center, rgba(0, 50, 12, 0.95), rgba(0, 20, 4, 0.98));
    border: 1.5px solid rgba(140, 255, 170, 0.8);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.9);
    overflow: hidden;
  }

  .eas-path {
    position: absolute;
    inset: 0;
    animation: eas-erase 2.4s ease-in-out infinite;
  }

  @keyframes eas-erase {
    0%, 50% { opacity: 1; }
    65%, 85% { opacity: 0; }
    95%, 100% { opacity: 1; }
  }

  .eas-seg {
    position: absolute;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.9);
  }

  .eas-seg.h1 { left: 10px; top: 14px; width: 24px; height: 2px; animation: eas-draw-h1 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .eas-seg.v1 { left: 32px; top: 14px; width: 2px; height: 18px; animation: eas-draw-v1 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .eas-seg.h2 { left: 32px; top: 30px; width: 28px; height: 2px; animation: eas-draw-h2 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .eas-seg.v2 { left: 58px; bottom: 20px; width: 2px; height: 10px; animation: eas-draw-v2 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .eas-seg.h3 { left: 58px; top: 22px; width: 18px; height: 2px; animation: eas-draw-h3 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }

  @keyframes eas-draw-h1 {
    0% { width: 0; }
    12% { width: 24px; }
    50% { width: 24px; }
    60%, 100% { width: 0; }
  }

  @keyframes eas-draw-v1 {
    0%, 12% { height: 0; }
    22% { height: 18px; }
    50% { height: 18px; }
    60%, 100% { height: 0; }
  }

  @keyframes eas-draw-h2 {
    0%, 22% { width: 0; }
    34% { width: 28px; }
    50% { width: 28px; }
    60%, 100% { width: 0; }
  }

  @keyframes eas-draw-v2 {
    0%, 34% { height: 0; }
    42% { height: 10px; }
    50% { height: 10px; }
    60%, 100% { height: 0; }
  }

  @keyframes eas-draw-h3 {
    0%, 42% { width: 0; }
    50% { width: 18px; }
    60%, 100% { width: 0; }
  }

  .eas-stylus {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 8px rgba(140, 255, 170, 1);
    animation: eas-trace 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
  }

  @keyframes eas-trace {
    0% { left: 10px; top: 13px; }
    12% { left: 32px; top: 13px; }
    22% { left: 32px; top: 29px; }
    34% { left: 58px; top: 29px; }
    42% { left: 58px; top: 21px; }
    50% { left: 74px; top: 21px; opacity: 1; }
    60%, 85% { opacity: 0; }
    100% { left: 10px; top: 13px; opacity: 1; }
  }

  .eas-knob {
    position: absolute;
    bottom: 6px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, rgba(190, 255, 205, 1), rgba(0, 120, 24, 0.9) 70%, rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.6);
  }

  .eas-knob.kl {
    left: 10px;
    animation: eas-knob-spin-l 2.4s linear infinite;
  }

  .eas-knob.kr {
    right: 10px;
    animation: eas-knob-spin-r 2.4s linear infinite;
  }

  @keyframes eas-knob-spin-l {
    0% { transform: rotate(0deg); }
    12% { transform: rotate(180deg); }
    22% { transform: rotate(180deg); }
    34% { transform: rotate(360deg); }
    50%, 100% { transform: rotate(540deg); }
  }

  @keyframes eas-knob-spin-r {
    0% { transform: rotate(0deg); }
    12% { transform: rotate(0deg); }
    22% { transform: rotate(180deg); }
    34% { transform: rotate(180deg); }
    42% { transform: rotate(-90deg); }
    50%, 100% { transform: rotate(-90deg); }
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

  /* v2: Cherry red plastic Etch A Sketch with gold border, aluminum powder screen,
     ivory rotary knobs, and glowing cyan vector line trace */
  .easc {
    width: 116px;
    height: 98px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Cherry red case with shake-to-erase animation */
  .easc-frame {
    position: absolute;
    inset: 4px;
    border-radius: 8px;
    background: linear-gradient(180deg, #ef4444 0%, #dc2626 60%, #991b1b 100%);
    border: 2px solid #f87171;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8), inset 0 1px 2px #fecaca;
    animation: easc-shake 2.4s ease-in-out infinite;
  }

  @keyframes easc-shake {
    0%, 48% { transform: translate(0, 0) rotate(0deg); }
    54% { transform: translate(-8px, -3px) rotate(-5deg); }
    62% { transform: translate(8px, 3px) rotate(5deg); }
    70% { transform: translate(-8px, 3px) rotate(-5deg); }
    78% { transform: translate(8px, -3px) rotate(5deg); }
    86%, 100% { transform: translate(0, 0) rotate(0deg); }
  }

  /* Aluminum powder screen with gold border */
  .easc-screen {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 84px;
    height: 52px;
    border-radius: 4px;
    background: radial-gradient(circle at center, #475569 0%, #334155 70%, #1e293b 100%);
    border: 1.5px solid #facc15;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.9), 0 0 4px #eab308;
    overflow: hidden;
  }

  /* Path container with erase fade */
  .easc-path {
    position: absolute;
    inset: 0;
    animation: easc-erase 2.4s ease-in-out infinite;
  }

  @keyframes easc-erase {
    0%, 50% { opacity: 1; }
    65%, 85% { opacity: 0; }
    95%, 100% { opacity: 1; }
  }

  /* Glowing silver/cyan drawn lines */
  .easc-seg {
    position: absolute;
    background: #ffffff;
    box-shadow: 0 0 4px #38bdf8;
  }

  .easc-seg.h1 { left: 10px; top: 14px; width: 24px; height: 2px; animation: easc-draw-h1 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .easc-seg.v1 { left: 32px; top: 14px; width: 2px; height: 18px; animation: easc-draw-v1 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .easc-seg.h2 { left: 32px; top: 30px; width: 28px; height: 2px; animation: easc-draw-h2 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .easc-seg.v2 { left: 58px; bottom: 20px; width: 2px; height: 10px; animation: easc-draw-v2 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .easc-seg.h3 { left: 58px; top: 22px; width: 18px; height: 2px; animation: easc-draw-h3 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }

  @keyframes easc-draw-h1 {
    0% { width: 0; }
    12% { width: 24px; }
    50% { width: 24px; }
    60%, 100% { width: 0; }
  }

  @keyframes easc-draw-v1 {
    0%, 12% { height: 0; }
    22% { height: 18px; }
    50% { height: 18px; }
    60%, 100% { height: 0; }
  }

  @keyframes easc-draw-h2 {
    0%, 22% { width: 0; }
    34% { width: 28px; }
    50% { width: 28px; }
    60%, 100% { width: 0; }
  }

  @keyframes easc-draw-v2 {
    0%, 34% { height: 0; }
    42% { height: 10px; }
    50% { height: 10px; }
    60%, 100% { height: 0; }
  }

  @keyframes easc-draw-h3 {
    0%, 42% { width: 0; }
    50% { width: 18px; }
    60%, 100% { width: 0; }
  }

  /* Stylus cursor */
  .easc-stylus {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 6px #00f0ff, 0 0 10px #ffffff;
    animation: easc-trace 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
  }

  @keyframes easc-trace {
    0% { left: 10px; top: 13px; }
    12% { left: 32px; top: 13px; }
    22% { left: 32px; top: 29px; }
    34% { left: 58px; top: 29px; }
    42% { left: 58px; top: 21px; }
    50% { left: 74px; top: 21px; opacity: 1; }
    60%, 85% { opacity: 0; }
    100% { left: 10px; top: 13px; opacity: 1; }
  }

  /* Ivory rotary knobs */
  .easc-knob {
    position: absolute;
    bottom: 6px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #ffffff 0%, #e2e8f0 70%, #94a3b8 100%);
    border: 1.5px solid #cbd5e1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  .easc-knob.kl {
    left: 10px;
    animation: easc-knob-spin-l 2.4s linear infinite;
  }

  .easc-knob.kr {
    right: 10px;
    animation: easc-knob-spin-r 2.4s linear infinite;
  }

  @keyframes easc-knob-spin-l {
    0% { transform: rotate(0deg); }
    12% { transform: rotate(180deg); }
    22% { transform: rotate(180deg); }
    34% { transform: rotate(360deg); }
    50%, 100% { transform: rotate(540deg); }
  }

  @keyframes easc-knob-spin-r {
    0% { transform: rotate(0deg); }
    12% { transform: rotate(0deg); }
    22% { transform: rotate(180deg); }
    34% { transform: rotate(180deg); }
    42% { transform: rotate(-90deg); }
    50%, 100% { transform: rotate(-90deg); }
  }
  `,
};

const etchASketchMarkup = {
  v1: `
      <div class="eas">
        <div class="eas-frame">
          <div class="eas-screen">
            <div class="eas-path">
              <div class="eas-seg h1"></div>
              <div class="eas-seg v1"></div>
              <div class="eas-seg h2"></div>
              <div class="eas-seg v2"></div>
              <div class="eas-seg h3"></div>
              <div class="eas-stylus"></div>
            </div>
          </div>
          <div class="eas-knob kl"></div>
          <div class="eas-knob kr"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="easc">
        <div class="easc-frame">
          <div class="easc-screen">
            <div class="easc-path">
              <div class="easc-seg h1"></div>
              <div class="easc-seg v1"></div>
              <div class="easc-seg h2"></div>
              <div class="easc-seg v2"></div>
              <div class="easc-seg h3"></div>
              <div class="easc-stylus"></div>
            </div>
          </div>
          <div class="easc-knob kl"></div>
          <div class="easc-knob kr"></div>
        </div>
      </div>
    `,
};

class ConceptEtchASketch extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${etchASketchStyles[version] || etchASketchStyles.v2}</style>${etchASketchMarkup[version] || etchASketchMarkup.v2}`;
  }
}

if (!customElements.get('concept-etch-a-sketch')) {
  customElements.define('concept-etch-a-sketch', ConceptEtchASketch);
}
