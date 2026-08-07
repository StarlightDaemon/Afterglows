const etchASketchStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A mechanical drawing screen toy: two dual-axis rotary knobs drive an internal
     stylus to trace orthogonal vector lines across aluminum powder, followed by
     a vigorous shake-to-erase cycle resetting the screen. */
  .eas {
    width: 116px;
    height: 98px;
    position: relative;
  }

  /* Shake-to-erase frame oscillation */
  .eas-frame {
    position: absolute;
    inset: 4px;
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.9), rgba(0, 45, 10, 0.98));
    border: 2px solid var(--accent, #00cc00);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.35);
    animation: eas-shake 5.5s ease-in-out infinite;
  }

  @keyframes eas-shake {
    0%, 75% { transform: translate(0, 0) rotate(0deg); }
    78% { transform: translate(-6px, 0) rotate(-3deg); }
    81% { transform: translate(6px, 0) rotate(3deg); }
    84% { transform: translate(-6px, 0) rotate(-3deg); }
    87% { transform: translate(6px, 0) rotate(3deg); }
    90% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }

  /* Drawing glass screen */
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

  /* Orthogonal drawn line segments */
  .eas-path {
    position: absolute;
    inset: 0;
    animation: eas-erase 5.5s ease-in-out infinite;
  }

  @keyframes eas-erase {
    0%, 75% { opacity: 1; }
    85%, 95% { opacity: 0; }
    100% { opacity: 1; }
  }

  .eas-seg {
    position: absolute;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.9);
  }

  /* Each segment grows from zero at the moment the stylus reaches it, in
     the same left-to-right / top-to-bottom (or bottom-to-top, for v2)
     direction the trace actually travels — a real progressive draw rather
     than a pre-drawn line with a dot moving over it. */
  .eas-seg.h1 { left: 10px; top: 14px; width: 24px; height: 2px; animation: eas-draw-h1 5.5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .eas-seg.v1 { left: 32px; top: 14px; width: 2px; height: 18px; animation: eas-draw-v1 5.5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .eas-seg.h2 { left: 32px; top: 30px; width: 28px; height: 2px; animation: eas-draw-h2 5.5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .eas-seg.v2 { left: 58px; bottom: 20px; width: 2px; height: 10px; animation: eas-draw-v2 5.5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
  .eas-seg.h3 { left: 58px; top: 22px; width: 18px; height: 2px; animation: eas-draw-h3 5.5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }

  @keyframes eas-draw-h1 {
    0% { width: 0; }
    15% { width: 24px; }
    75% { width: 24px; }
    85%, 100% { width: 0; }
  }

  @keyframes eas-draw-v1 {
    0%, 15% { height: 0; }
    30% { height: 18px; }
    75% { height: 18px; }
    85%, 100% { height: 0; }
  }

  @keyframes eas-draw-h2 {
    0%, 30% { width: 0; }
    45% { width: 28px; }
    75% { width: 28px; }
    85%, 100% { width: 0; }
  }

  @keyframes eas-draw-v2 {
    0%, 45% { height: 0; }
    60% { height: 10px; }
    75% { height: 10px; }
    85%, 100% { height: 0; }
  }

  @keyframes eas-draw-h3 {
    0%, 60% { width: 0; }
    70% { width: 18px; }
    75% { width: 18px; }
    85%, 100% { width: 0; }
  }

  /* Moving stylus point */
  .eas-stylus {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 1);
    animation: eas-trace 5.5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
  }

  @keyframes eas-trace {
    0% { left: 10px; top: 13px; }
    15% { left: 32px; top: 13px; }
    30% { left: 32px; top: 29px; }
    45% { left: 58px; top: 29px; }
    60% { left: 58px; top: 21px; }
    70%, 75% { left: 74px; top: 21px; opacity: 1; }
    85%, 95% { opacity: 0; }
    100% { left: 10px; top: 13px; opacity: 1; }
  }

  /* Bottom dual-axis rotary knobs */
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
    animation: eas-knob-spin-l 5.5s linear infinite;
  }

  .eas-knob.kr {
    right: 10px;
    animation: eas-knob-spin-r 5.5s linear infinite;
  }

  @keyframes eas-knob-spin-l {
    0% { transform: rotate(0deg); }
    15% { transform: rotate(180deg); }
    30% { transform: rotate(180deg); }
    45% { transform: rotate(360deg); }
    60% { transform: rotate(360deg); }
    70%, 100% { transform: rotate(540deg); }
  }

  @keyframes eas-knob-spin-r {
    0% { transform: rotate(0deg); }
    15% { transform: rotate(0deg); }
    30% { transform: rotate(180deg); }
    45% { transform: rotate(180deg); }
    60% { transform: rotate(-90deg); }
    70%, 100% { transform: rotate(-90deg); }
  }
`;

class ConceptEtchASketch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${etchASketchStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-etch-a-sketch')) {
  customElements.define('concept-etch-a-sketch', ConceptEtchASketch);
}
