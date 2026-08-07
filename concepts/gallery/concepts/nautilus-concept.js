const nautilusStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A chambered nautilus swimming via hydro-jet propulsion: sharp forward
     impulse surges on siphon discharge, followed by pitch recoil and drag
     deceleration while trailing tentacles pulsate in counter-phase. */
  .nau {
    width: 112px;
    height: 92px;
    position: relative;
  }

  /* Swimming body running jet pulse cycle: fast forward push, gentle backward drift */
  .nau-body {
    position: absolute;
    left: 20px;
    top: 18px;
    width: 72px;
    height: 60px;
    animation: nau-swim 3.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
  }

  @keyframes nau-swim {
    0% { transform: translate(0, 0) rotate(0deg); }
    18% { transform: translate(16px, -3px) rotate(-8deg); }
    45% { transform: translate(10px, 2px) rotate(4deg); }
    75% { transform: translate(3px, 1px) rotate(1deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }

  /* Logarithmic spiral shell */
  .nau-shell {
    position: absolute;
    left: 0;
    top: 0;
    width: 52px;
    height: 52px;
    border-radius: 50% 45% 55% 40% / 55% 45% 50% 40%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 70% 30%, rgba(0, 100, 24, 0.7), rgba(0, 35, 8, 0.95));
    box-shadow: inset -4px -4px 10px rgba(0, 0, 0, 0.8), 0 0 6px rgba(0, 204, 0, 0.3);
    overflow: hidden;
  }

  /* Radial chamber septa lines across shell */
  .nau-septum {
    position: absolute;
    border: 1px solid rgba(140, 255, 170, 0.45);
    border-radius: 50%;
  }

  .nau-septum.s1 { right: -10px; top: -5px; width: 44px; height: 44px; }
  .nau-septum.s2 { right: -5px; top: 0px; width: 32px; height: 32px; }
  .nau-septum.s3 { right: 2px; top: 8px; width: 20px; height: 20px; }

  /* Shell aperture / hood */
  .nau-hood {
    position: absolute;
    left: 36px;
    top: 14px;
    width: 22px;
    height: 24px;
    border-radius: 6px 14px 14px 4px;
    background: rgba(0, 140, 30, 0.85);
    border: 1.5px solid var(--accent, #00cc00);
  }

  /* Eye */
  .nau-eye {
    position: absolute;
    left: 42px;
    top: 24px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.95);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
  }

  /* Flexible siphon nozzle pulsing water jet */
  .nau-siphon {
    position: absolute;
    left: 30px;
    top: 36px;
    width: 14px;
    height: 7px;
    border-radius: 3px 0 0 3px;
    background: rgba(0, 180, 40, 0.7);
    border: 1px solid rgba(140, 255, 170, 0.8);
    transform-origin: right center;
    animation: nau-siphon-jet 3.2s ease-in-out infinite;
  }

  @keyframes nau-siphon-jet {
    0%, 100% { transform: rotate(0deg) scaleX(1); }
    12% { transform: rotate(-10deg) scaleX(0.8); }
    22% { transform: rotate(-5deg) scaleX(1.15); }
    60% { transform: rotate(0deg) scaleX(1); }
  }

  /* Water jet exhaust plume */
  .nau-jet {
    position: absolute;
    left: 14px;
    top: 37px;
    width: 18px;
    height: 5px;
    border-radius: 50%;
    background: radial-gradient(ellipse at right, rgba(140, 255, 170, 0.8), transparent 70%);
    animation: nau-jet-blast 3.2s ease-out infinite;
    pointer-events: none;
  }

  @keyframes nau-jet-blast {
    0%, 10% { opacity: 0; transform: scale(0.2) translateX(8px); }
    16% { opacity: 0.9; transform: scale(1.4) translateX(-6px); }
    30% { opacity: 0; transform: scale(2) translateX(-18px); }
    100% { opacity: 0; }
  }

  /* Trailing tentacles cluster */
  .nau-tentacles {
    position: absolute;
    left: 48px;
    top: 22px;
    width: 24px;
    height: 24px;
  }

  .nau-tent {
    position: absolute;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.9), transparent);
    border-radius: 1px;
    transform-origin: left center;
    animation: nau-tent-wave 3.2s ease-in-out infinite;
  }

  .nau-tent.t1 { top: 2px; width: 18px; animation-delay: -0.1s; }
  .nau-tent.t2 { top: 6px; width: 22px; animation-delay: -0.3s; }
  .nau-tent.t3 { top: 11px; width: 20px; animation-delay: -0.5s; }
  .nau-tent.t4 { top: 16px; width: 16px; animation-delay: -0.2s; }
  .nau-tent.t5 { top: 20px; width: 14px; animation-delay: -0.4s; }

  @keyframes nau-tent-wave {
    0%, 100% { transform: rotate(0deg) scaleX(1); }
    18% { transform: rotate(-15deg) scaleX(0.85); }
    45% { transform: rotate(10deg) scaleX(1.1); }
    70% { transform: rotate(-4deg) scaleX(0.95); }
  }
`;

class ConceptNautilus extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${nautilusStyles}</style>
      <div class="nau">
        <div class="nau-body">
          <div class="nau-jet"></div>
          <div class="nau-siphon"></div>
          <div class="nau-shell">
            <div class="nau-septum s1"></div>
            <div class="nau-septum s2"></div>
            <div class="nau-septum s3"></div>
          </div>
          <div class="nau-hood"></div>
          <div class="nau-eye"></div>
          <div class="nau-tentacles">
            <div class="nau-tent t1"></div>
            <div class="nau-tent t2"></div>
            <div class="nau-tent t3"></div>
            <div class="nau-tent t4"></div>
            <div class="nau-tent t5"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-nautilus')) {
  customElements.define('concept-nautilus', ConceptNautilus);
}
