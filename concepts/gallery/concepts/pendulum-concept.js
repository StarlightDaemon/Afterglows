const pendulumStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pend {
    width: 104px;
    height: 104px;
    position: relative;
  }

  /* Mount beam and pivot. */
  .pend-beam {
    position: absolute;
    top: 14px;
    left: 16px;
    right: 16px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 204, 0, 0.15), rgba(140, 255, 170, 0.6), rgba(0, 204, 0, 0.15));
  }

  .pend-pivot {
    position: absolute;
    top: 12px;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    border-radius: 50%;
    background: #0c2c14;
    border: 1px solid rgba(190, 255, 205, 0.8);
    z-index: 2;
  }

  /* Escapement wheel behind the pivot, advancing one notch per half-swing. */
  .pend-wheel {
    position: absolute;
    top: 4px;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-radius: 50%;
    border: 1px dashed rgba(140, 255, 170, 0.5);
    animation: pend-escape 2.4s steps(2, jump-none) infinite;
  }

  .pend-wheel::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    width: 3px;
    height: 6px;
    margin-left: -1.5px;
    background: rgba(190, 255, 205, 0.85);
    border-radius: 1px;
  }

  /* Swing arm: rod + bob, hinged at the pivot. */
  .pend-arm {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 2px;
    height: 58px;
    margin-left: -1px;
    transform-origin: top center;
    animation: pend-swing 2.4s ease-in-out infinite;
  }

  .pend-rod {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.9), rgba(0, 204, 0, 0.5));
  }

  .pend-bob {
    position: absolute;
    bottom: -14px;
    left: 50%;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #d8ffbb 0%, #2a8a3e 55%, #123c1e 100%);
    box-shadow: 0 0 9px rgba(0, 204, 0, 0.5);
  }

  /* Dashed arc the bob travels along: a circle centred on the pivot
     (radius = rod + bob), clipped to the band the bob actually sweeps. */
  .pend-arc {
    position: absolute;
    top: -48px;
    left: 50%;
    width: 128px;
    height: 128px;
    margin-left: -64px;
    border-radius: 50%;
    border: 1px dashed rgba(0, 204, 0, 0.3);
    clip-path: polygon(0% 90%, 100% 90%, 100% 101%, 0% 101%);
  }

  /* Tick flashes at each swing extreme, timed to the arm's turnaround. */
  .pend-tick {
    position: absolute;
    top: 84px;
    font-family: monospace;
    font-size: 9px;
    color: rgba(200, 255, 210, 0.9);
    opacity: 0;
    animation: pend-tick 2.4s linear infinite;
  }

  .pend-tick.left { left: 10px; }
  .pend-tick.right { right: 8px; animation-delay: -1.2s; }

  @keyframes pend-swing {
    0%, 100% { transform: rotate(-26deg); }
    50% { transform: rotate(26deg); }
  }

  @keyframes pend-escape {
    from { transform: rotate(0deg); }
    to { transform: rotate(60deg); }
  }

  @keyframes pend-tick {
    0%, 3% { opacity: 1; }
    12%, 100% { opacity: 0; }
  }
`;

class ConceptPendulum extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pendulumStyles}</style>
      <div class="pend">
        <div class="pend-wheel"></div>
        <div class="pend-beam"></div>
        <div class="pend-pivot"></div>
        <div class="pend-arc"></div>
        <div class="pend-arm">
          <div class="pend-rod"></div>
          <div class="pend-bob"></div>
        </div>
        <span class="pend-tick left">tick</span>
        <span class="pend-tick right">tock</span>
      </div>
    `;
  }
}

if (!customElements.get('concept-pendulum')) {
  customElements.define('concept-pendulum', ConceptPendulum);
}
