const kiteStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A diamond kite carving a lazy figure through gusty air: the tail
     bows chase its path a beat behind, the line sways from its
     anchor, and wind streaks slide past. */
  .kite {
    width: 112px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  /* The kite rig: swoops around the upper field. */
  .kite-rig {
    position: absolute;
    left: 64px;
    top: 26px;
    width: 0;
    height: 0;
    animation: kite-swoop 7s ease-in-out infinite;
  }

  @keyframes kite-swoop {
    0% { transform: translate(0, 0) rotate(6deg); }
    18% { transform: translate(-20px, -10px) rotate(-10deg); }
    36% { transform: translate(8px, -16px) rotate(9deg); }
    52% { transform: translate(24px, 2px) rotate(14deg); }
    70% { transform: translate(-6px, 10px) rotate(-6deg); }
    86% { transform: translate(-16px, 2px) rotate(-9deg); }
    100% { transform: translate(0, 0) rotate(6deg); }
  }

  /* Diamond sail with spars. */
  .kite-sail {
    position: absolute;
    left: -14px;
    top: -18px;
    width: 28px;
    height: 36px;
    clip-path: polygon(50% 0, 100% 42%, 50% 100%, 0 42%);
    background: linear-gradient(150deg, rgba(140, 255, 170, 0.75), rgba(0, 110, 22, 0.85));
    border: 1px solid rgba(140, 255, 170, 0.6);
    box-sizing: border-box;
  }

  /* Spars: cross frame lines. */
  .kite-sail::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    background: rgba(214, 255, 224, 0.7);
  }

  .kite-sail::after {
    content: '';
    position: absolute;
    left: 0;
    top: 42%;
    width: 100%;
    height: 1px;
    background: rgba(214, 255, 224, 0.7);
  }

  /* Tail: five bows trailing the rig with increasing lag. */
  .kite-bow {
    position: absolute;
    width: 8px;
    height: 4px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.85);
    animation: kite-swoop 7s ease-in-out infinite;
  }

  /* Each bow runs the same path, delayed - and hangs lower via its
     static offset so the tail drapes. */
  .kite-bow.t1 { left: 62px; top: 46px; animation-delay: -0.25s; transform: rotate(20deg); }
  .kite-bow.t2 { left: 60px; top: 56px; animation-delay: -0.5s; width: 7px; }
  .kite-bow.t3 { left: 58px; top: 65px; animation-delay: -0.75s; transform: rotate(-18deg); width: 6px; }
  .kite-bow.t4 { left: 56px; top: 73px; animation-delay: -1s; width: 5px; }
  .kite-bow.t5 { left: 54px; top: 80px; animation-delay: -1.25s; transform: rotate(14deg); width: 4px; }

  /* Flying line: anchored bottom-left, top end chasing the kite. */
  .kite-line {
    position: absolute;
    left: 10px;
    bottom: 2px;
    width: 76px;
    height: 1px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.8), rgba(140, 255, 170, 0.25));
    transform-origin: 0% 50%;
    transform: rotate(-38deg);
    animation: kite-line 7s ease-in-out infinite;
  }

  @keyframes kite-line {
    0% { transform: rotate(-37deg) scaleX(1); }
    18% { transform: rotate(-44deg) scaleX(0.94); }
    36% { transform: rotate(-46deg) scaleX(1); }
    52% { transform: rotate(-31deg) scaleX(1.05); }
    70% { transform: rotate(-34deg) scaleX(0.97); }
    86% { transform: rotate(-42deg) scaleX(0.95); }
    100% { transform: rotate(-37deg) scaleX(1); }
  }

  /* Anchor spool. */
  .kite-spool {
    position: absolute;
    left: 5px;
    bottom: 0;
    width: 10px;
    height: 8px;
    border-radius: 2px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background: repeating-linear-gradient(0deg,
      rgba(140, 255, 170, 0.5) 0 1px,
      transparent 1px 3px);
  }

  /* Wind streaks gusting through. */
  .kite-wind {
    position: absolute;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.5), transparent);
    opacity: 0;
    animation: kite-wind linear infinite;
  }

  .kite-wind.w1 { top: 16px; width: 30px; animation-duration: 2.4s; }
  .kite-wind.w2 { top: 38px; width: 22px; animation-duration: 3.1s; animation-delay: -1.4s; }
  .kite-wind.w3 { top: 70px; width: 26px; animation-duration: 2.7s; animation-delay: -0.9s; }

  @keyframes kite-wind {
    0% { left: 112px; opacity: 0; }
    12% { opacity: 0.8; }
    88% { opacity: 0.6; }
    100% { left: -32px; opacity: 0; }
  }

  /* A cloud drifting behind. */
  .kite-cloud {
    position: absolute;
    top: 10px;
    width: 26px;
    height: 8px;
    border-radius: 5px;
    background: rgba(140, 255, 170, 0.18);
    filter: blur(1px);
    animation: kite-cloud 12s linear infinite;
  }

  @keyframes kite-cloud {
    0% { left: 112px; }
    100% { left: -30px; }
  }
`;

class ConceptKite extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kiteStyles}</style>
      <div class="kite">
        <div class="kite-cloud"></div>
        <div class="kite-wind w1"></div>
        <div class="kite-wind w2"></div>
        <div class="kite-wind w3"></div>
        <div class="kite-line"></div>
        <div class="kite-spool"></div>
        <div class="kite-bow t5"></div>
        <div class="kite-bow t4"></div>
        <div class="kite-bow t3"></div>
        <div class="kite-bow t2"></div>
        <div class="kite-bow t1"></div>
        <div class="kite-rig">
          <div class="kite-sail"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-kite')) {
  customElements.define('concept-kite', ConceptKite);
}
