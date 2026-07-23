const microscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* At the bench: the mirror throws light up through the slide, the
     focus knob hunts, and the view inset drifts from blur to a crisp
     field of swimming cells - then someone nudges the stage. */
  .mi {
    width: 116px;
    height: 96px;
    position: relative;
  }

  /* Base and arm. */
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

  /* Eyepiece tube, angled. */
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

  /* Objective turret with two lenses. */
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

  /* Stage with slide. */
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

  /* Mirror under the stage, rocking light up. */
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

  /* Light shaft from mirror to slide. */
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

  /* Focus knob: hunts back and forth early, then settles. */
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

  /* The view inset: a circular field, blurred then crisp. */
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

  /* Cells drifting inside the field. */
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

  /* Whole-field focus: blur eases off as the knob settles. */
  @keyframes mi-focus {
    0% { filter: blur(2.2px); }
    12% { filter: blur(1.4px); }
    26% { filter: blur(2.6px); }
    38% { filter: blur(0.8px); }
    46%, 64% { filter: blur(0); }
    /* The nudge knocks it soft again briefly. */
    68% { filter: blur(1.6px); }
    76%, 100% { filter: blur(0.2px); }
  }

  /* Field label. */
  .mi-mag {
    position: absolute;
    right: 8px;
    top: 50px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
  }
`;

class ConceptMicroscope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${microscopeStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-microscope')) {
  customElements.define('concept-microscope', ConceptMicroscope);
}
