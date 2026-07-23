const balloonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Drifting flight: the balloon sways on a slow figure, and each
     burner blast flares the envelope's underside and nudges the whole
     rig upward before it settles again. Clouds slide past behind. */
  .hab {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .hab-rig {
    position: absolute;
    left: 50%;
    top: 6px;
    width: 0;
    height: 0;
    animation: hab-drift 7s ease-in-out infinite;
  }

  @keyframes hab-drift {
    0%, 100% { transform: translate(-6px, 6px) rotate(-2deg); }
    /* Burner blast at 30% lifts the rig. */
    36% { transform: translate(2px, -4px) rotate(1.5deg); }
    60% { transform: translate(7px, 1px) rotate(1deg); }
    80% { transform: translate(0px, 5px) rotate(-1deg); }
  }

  /* Envelope with gore stripes. */
  .hab-envelope {
    position: absolute;
    left: -26px;
    top: 0;
    width: 52px;
    height: 56px;
    border-radius: 50% 50% 42% 42% / 58% 58% 40% 40%;
    border: 2px solid var(--accent, #00cc00);
    background:
      linear-gradient(90deg,
        rgba(0, 110, 22, 0.7) 0 14%,
        rgba(0, 204, 0, 0.45) 14% 28%,
        rgba(0, 110, 22, 0.7) 28% 42%,
        rgba(0, 204, 0, 0.45) 42% 58%,
        rgba(0, 110, 22, 0.7) 58% 72%,
        rgba(0, 204, 0, 0.45) 72% 86%,
        rgba(0, 110, 22, 0.7) 86% 100%);
    box-shadow: inset 0 -8px 12px rgba(0, 204, 0, 0.25);
    animation: hab-glow 7s ease-in-out infinite;
  }

  /* The blast lights the envelope from below. */
  @keyframes hab-glow {
    0%, 24%, 52%, 100% { box-shadow: inset 0 -8px 12px rgba(0, 204, 0, 0.25); }
    30%, 40% { box-shadow: inset 0 -16px 20px rgba(140, 255, 170, 0.6), 0 0 14px rgba(0, 204, 0, 0.4); }
  }

  /* Skirt at the envelope mouth. */
  .hab-skirt {
    position: absolute;
    left: -10px;
    top: 54px;
    width: 20px;
    height: 7px;
    clip-path: polygon(12% 0, 88% 0, 100% 100%, 0 100%);
    background: rgba(0, 90, 18, 0.8);
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  /* Burner flame: leaps during the blast. */
  .hab-flame {
    position: absolute;
    left: -3px;
    top: 58px;
    width: 6px;
    height: 5px;
    border-radius: 50% 50% 50% 50% / 62% 62% 38% 38%;
    background: radial-gradient(circle at 50% 80%, #f2ffdd, #9ade5a 60%, transparent);
    opacity: 0.35;
    animation: hab-flame 7s ease-in-out infinite;
  }

  @keyframes hab-flame {
    0%, 24%, 52%, 100% { transform: scaleY(0.7); opacity: 0.3; }
    28% { transform: scaleY(1.6) scaleX(1.15); opacity: 1; }
    34% { transform: scaleY(2.1) scaleX(1.05); opacity: 1; }
    40% { transform: scaleY(1.4); opacity: 0.85; }
  }

  /* Suspension lines. */
  .hab-line {
    position: absolute;
    top: 56px;
    width: 1px;
    height: 16px;
    background: rgba(140, 255, 170, 0.7);
  }

  .hab-line.n1 { left: -16px; transform: rotate(14deg); }
  .hab-line.n2 { left: -5px; transform: rotate(4deg); }
  .hab-line.n3 { left: 4px; transform: rotate(-4deg); }
  .hab-line.n4 { left: 15px; transform: rotate(-14deg); }

  /* Wicker basket. */
  .hab-basket {
    position: absolute;
    left: -11px;
    top: 71px;
    width: 22px;
    height: 13px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 3px 3px 6px 6px;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.35) 0 3px, transparent 3px 6px),
      rgba(0, 45, 9, 0.7);
  }

  /* Sandbag swinging on the basket rim. */
  .hab-bag {
    position: absolute;
    left: -14px;
    top: 74px;
    width: 5px;
    height: 7px;
    border-radius: 2px 2px 3px 3px;
    background: rgba(140, 255, 170, 0.7);
    transform-origin: top center;
    animation: hab-bag 3.4s ease-in-out infinite;
  }

  @keyframes hab-bag {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(9deg); }
  }

  /* Clouds sliding past on parallax layers. */
  .hab-cloud {
    position: absolute;
    height: 8px;
    border-radius: 5px;
    background: rgba(140, 255, 170, 0.22);
    filter: blur(1px);
    animation: hab-cloud linear infinite;
  }

  .hab-cloud.c1 { top: 18px; width: 30px; animation-duration: 9s; }
  .hab-cloud.c2 { top: 52px; width: 22px; animation-duration: 12s; animation-delay: -5s; }
  .hab-cloud.c3 { top: 82px; width: 34px; animation-duration: 10s; animation-delay: -8s; }

  @keyframes hab-cloud {
    0% { left: 104px; }
    100% { left: -40px; }
  }
`;

class ConceptBalloon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${balloonStyles}</style>
      <div class="hab">
        <div class="hab-cloud c1"></div>
        <div class="hab-cloud c2"></div>
        <div class="hab-cloud c3"></div>
        <div class="hab-rig">
          <div class="hab-envelope"></div>
          <div class="hab-skirt"></div>
          <div class="hab-flame"></div>
          <div class="hab-line n1"></div>
          <div class="hab-line n2"></div>
          <div class="hab-line n3"></div>
          <div class="hab-line n4"></div>
          <div class="hab-basket"></div>
          <div class="hab-bag"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-balloon')) {
  customElements.define('concept-balloon', ConceptBalloon);
}
