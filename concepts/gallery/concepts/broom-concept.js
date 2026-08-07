const broomStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* An enchanted broom in unsupported flight: it banks along a full S-curve
     path across the frame, bristles fluttering with airflow and a trail of
     fading spark motes streaming off the twine — no floor, no sweeping,
     no ground contact anywhere in the cycle. */
  .brm {
    width: 114px;
    height: 98px;
    position: relative;
    overflow: hidden;
  }

  /* Broom carrier: banks left and right along an S-curve flight path */
  .brm-rig {
    position: absolute;
    left: 14px;
    top: 10px;
    width: 48px;
    height: 80px;
    transform-origin: 24px 40px;
    animation: brm-bank-flight 4.4s ease-in-out infinite;
  }

  @keyframes brm-bank-flight {
    0%   { transform: translate(0, 0) rotate(16deg); }
    20%  { transform: translate(18px, -8px) rotate(-20deg); }
    40%  { transform: translate(42px, 2px) rotate(22deg); }
    60%  { transform: translate(20px, 6px) rotate(-16deg); }
    80%  { transform: translate(2px, -4px) rotate(18deg); }
    100% { transform: translate(0, 0) rotate(16deg); }
  }

  /* Wooden broom handle */
  .brm-handle {
    position: absolute;
    left: 22px;
    top: 0;
    width: 4px;
    height: 54px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.9), rgba(0, 100, 20, 0.9));
    border: 1px solid var(--accent, #00cc00);
    transform: rotate(-12deg);
    transform-origin: bottom center;
  }

  /* Twig bristle bundle */
  .brm-bristles {
    position: absolute;
    left: 10px;
    bottom: 4px;
    width: 26px;
    height: 28px;
    clip-path: polygon(30% 0, 70% 0, 100% 100%, 0 100%);
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.9), rgba(0, 50, 10, 0.95));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    animation: brm-bristle-flex 2.2s ease-in-out infinite;
  }

  @keyframes brm-bristle-flex {
    0%, 100% { transform: skewX(-12deg); }
    40% { transform: skewX(18deg) scaleY(0.85); }
    60% { transform: skewX(-8deg); }
  }

  /* Twine wrapping around bristles */
  .brm-twine {
    position: absolute;
    left: 16px;
    bottom: 24px;
    width: 14px;
    height: 6px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 0.95);
    border: 1px solid var(--accent, #00cc00);
  }

  /* Fading spark-mote contrail streaming off the bristles in flight —
     nested inside the banking rig so it travels with the broom. */
  .brm-dust {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.9);
    animation: brm-spark-trail 1.1s ease-out infinite;
    pointer-events: none;
  }

  .brm-dust.d1 { left: 14px; bottom: 2px; animation-delay: 0s; }
  .brm-dust.d2 { left: 18px; bottom: 8px; animation-delay: -0.35s; }
  .brm-dust.d3 { left: 12px; bottom: 14px; animation-delay: -0.7s; }

  @keyframes brm-spark-trail {
    0% { opacity: 0.9; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(-10px, 8px) scale(0.3); }
  }
`;

class ConceptBroom extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${broomStyles}</style>
      <div class="brm">
        <div class="brm-rig">
          <div class="brm-handle"></div>
          <div class="brm-bristles"></div>
          <div class="brm-twine"></div>
          <div class="brm-dust d1"></div>
          <div class="brm-dust d2"></div>
          <div class="brm-dust d3"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-broom')) {
  customElements.define('concept-broom', ConceptBroom);
}
