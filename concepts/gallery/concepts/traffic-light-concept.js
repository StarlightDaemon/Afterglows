// v1 below is the archived original; v2 closes the signal's dead gap (the
// stop phase ended at 92%, leaving 0.64s of all-three-dark before green),
// re-centers the housing and hoods on the pole (both sat 2px off), and
// gives the car its promised queue behavior: it now rolls up during red,
// waits at the line, and pulls away on green - a seamless loop instead of
// one pass and 5.6s of empty road.
const trafficLightStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* One 8s signal cycle with real proportions: a long go, a short
     caution, a long stop. Each lamp throws its own halo, and the
     housing carries a hood over every lens. */
  .tl {
    width: 104px;
    height: 100px;
    position: relative;
  }

  .tl-pole {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 4px;
    height: 18px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(0, 204, 0, 0.7), rgba(0, 80, 16, 0.6));
  }

  .tl-housing {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 34px;
    height: 82px;
    margin-left: -17px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 45, 9, 0.6), rgba(0, 20, 4, 0.85));
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.15);
  }

  /* Lens hoods. */
  .tl-hood {
    position: absolute;
    left: 3px;
    width: 24px;
    height: 5px;
    border-radius: 3px 3px 0 0;
    background: rgba(0, 204, 0, 0.5);
  }

  .tl-hood.h1 { top: 3px; }
  .tl-hood.h2 { top: 29px; }
  .tl-hood.h3 { top: 55px; }

  .tl-lamp {
    position: absolute;
    left: 50%;
    width: 18px;
    height: 18px;
    margin-left: -9px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.5);
  }

  /* Phosphor palette: stop is drawn dim and hollow, caution mid,
     go bright - read by luminance, like a monochrome monitor would. */
  .tl-lamp.stop { top: 8px; background: rgba(0, 204, 0, 0.18); animation: tl-stop 8s steps(1) infinite; }
  .tl-lamp.caution { top: 34px; background: rgba(0, 204, 0, 0.18); animation: tl-caution 8s steps(1) infinite; }
  .tl-lamp.go { top: 60px; background: rgba(0, 204, 0, 0.18); animation: tl-go 8s steps(1) infinite; }

  @keyframes tl-go {
    0% {
      background: radial-gradient(circle at 38% 32%, #d6ffe0, #29e029 60%);
      box-shadow: 0 0 16px rgba(0, 204, 0, 0.95), 0 0 30px rgba(0, 204, 0, 0.4);
    }
    42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  @keyframes tl-caution {
    0% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    42% {
      background: radial-gradient(circle at 38% 32%, #f2ffdd, #9ade5a 60%);
      box-shadow: 0 0 12px rgba(160, 230, 90, 0.9);
    }
    54% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  @keyframes tl-stop {
    0%, 42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    54% {
      background: radial-gradient(circle at 38% 32%, #eaffe6, #57b657 55%, #1d5b2a);
      box-shadow: 0 0 10px rgba(80, 180, 90, 0.8), inset 0 0 5px rgba(230, 255, 230, 0.6);
    }
    92% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  /* Light spill on the ground, synced to the go phase. */
  .tl-spill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 60px;
    height: 8px;
    margin-left: -30px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(0, 204, 0, 0.4), transparent 70%);
    animation: tl-spill 8s steps(1) infinite;
  }

  @keyframes tl-spill {
    0% { opacity: 1; }
    42% { opacity: 0.25; }
    54% { opacity: 0.45; }
    92% { opacity: 0.25; }
  }

  /* A car glyph that pulls away on green and queues up on red. */
  .tl-car {
    position: absolute;
    bottom: 2px;
    left: -34px;
    width: 22px;
    height: 9px;
    border-radius: 4px 6px 2px 2px;
    background: rgba(140, 255, 170, 0.65);
    animation: tl-car 8s infinite;
  }

  .tl-car::before,
  .tl-car::after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #0a1f0e;
    border: 1px solid rgba(140, 255, 170, 0.8);
  }

  .tl-car::before { left: 2px; }
  .tl-car::after { right: 2px; }

  @keyframes tl-car {
    0% { transform: translateX(0); }
    18% { transform: translateX(70px); }
    30%, 100% { transform: translateX(150px); }
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

  /* One 8s signal cycle with real proportions: a long go, a short
     caution, a long stop that hands straight back to go. A car rolls
     up during the red, waits at the line, and pulls away on green. */
  .tl {
    width: 104px;
    height: 100px;
    position: relative;
  }

  .tl-pole {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 4px;
    height: 18px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(0, 204, 0, 0.7), rgba(0, 80, 16, 0.6));
  }

  .tl-housing {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 34px;
    height: 82px;
    margin-left: -19px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 45, 9, 0.6), rgba(0, 20, 4, 0.85));
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.15);
  }

  /* Lens hoods, centered over their lamps. */
  .tl-hood {
    position: absolute;
    left: 5px;
    width: 24px;
    height: 5px;
    border-radius: 3px 3px 0 0;
    background: rgba(0, 204, 0, 0.5);
  }

  .tl-hood.h1 { top: 3px; }
  .tl-hood.h2 { top: 29px; }
  .tl-hood.h3 { top: 55px; }

  .tl-lamp {
    position: absolute;
    left: 50%;
    width: 18px;
    height: 18px;
    margin-left: -9px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.5);
  }

  /* Phosphor palette: stop is drawn dim and hollow, caution mid,
     go bright - read by luminance, like a monochrome monitor would. */
  .tl-lamp.stop { top: 8px; background: rgba(0, 204, 0, 0.18); animation: tl-stop 8s steps(1) infinite; }
  .tl-lamp.caution { top: 34px; background: rgba(0, 204, 0, 0.18); animation: tl-caution 8s steps(1) infinite; }
  .tl-lamp.go { top: 60px; background: rgba(0, 204, 0, 0.18); animation: tl-go 8s steps(1) infinite; }

  @keyframes tl-go {
    0% {
      background: radial-gradient(circle at 38% 32%, #d6ffe0, #29e029 60%);
      box-shadow: 0 0 16px rgba(0, 204, 0, 0.95), 0 0 30px rgba(0, 204, 0, 0.4);
    }
    42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  @keyframes tl-caution {
    0% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    42% {
      background: radial-gradient(circle at 38% 32%, #f2ffdd, #9ade5a 60%);
      box-shadow: 0 0 12px rgba(160, 230, 90, 0.9);
    }
    54% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  /* Stop holds to the wrap so red hands directly to green - no
     all-dark gap at the end of the cycle. */
  @keyframes tl-stop {
    0%, 42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    54%, 100% {
      background: radial-gradient(circle at 38% 32%, #eaffe6, #57b657 55%, #1d5b2a);
      box-shadow: 0 0 10px rgba(80, 180, 90, 0.8), inset 0 0 5px rgba(230, 255, 230, 0.6);
    }
  }

  /* Light spill on the ground, tracking the active lamp. */
  .tl-spill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 60px;
    height: 8px;
    margin-left: -30px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(0, 204, 0, 0.4), transparent 70%);
    animation: tl-spill 8s steps(1) infinite;
  }

  @keyframes tl-spill {
    0% { opacity: 1; }
    42% { opacity: 0.25; }
    54%, 100% { opacity: 0.45; }
  }

  /* The car: waits at the line through the red, pulls away when the
     green wraps in at 0%, and the next one rolls up during the red.
     Both offscreen teleports are hidden by a stepped segment. */
  .tl-car {
    position: absolute;
    bottom: 2px;
    left: -34px;
    width: 22px;
    height: 9px;
    border-radius: 4px 6px 2px 2px;
    background: rgba(140, 255, 170, 0.65);
    animation: tl-car 8s infinite;
  }

  .tl-car::before,
  .tl-car::after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #0a1f0e;
    border: 1px solid rgba(140, 255, 170, 0.8);
  }

  .tl-car::before { left: 2px; }
  .tl-car::after { right: 2px; }

  @keyframes tl-car {
    /* Green: a beat of reaction time, then away. */
    0%, 4% { transform: translateX(44px); animation-timing-function: ease-in; }
    18% { transform: translateX(150px); animation-timing-function: steps(1, end); }
    /* Hidden jump from offscreen-right to offscreen-left. */
    56% { transform: translateX(150px); animation-timing-function: steps(1, end); }
    58% { transform: translateX(0px); animation-timing-function: ease-out; }
    /* Rolls up during the red and waits at the line. */
    74%, 100% { transform: translateX(44px); }
  }
`,
};

const trafficLightMarkup = {
  v1: `
      <div class="tl">
        <div class="tl-spill"></div>
        <div class="tl-car"></div>
        <div class="tl-pole"></div>
        <div class="tl-housing">
          <div class="tl-hood h1"></div>
          <div class="tl-hood h2"></div>
          <div class="tl-hood h3"></div>
          <div class="tl-lamp stop"></div>
          <div class="tl-lamp caution"></div>
          <div class="tl-lamp go"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="tl">
        <div class="tl-spill"></div>
        <div class="tl-car"></div>
        <div class="tl-pole"></div>
        <div class="tl-housing">
          <div class="tl-hood h1"></div>
          <div class="tl-hood h2"></div>
          <div class="tl-hood h3"></div>
          <div class="tl-lamp stop"></div>
          <div class="tl-lamp caution"></div>
          <div class="tl-lamp go"></div>
        </div>
      </div>
    `,
};

class ConceptTrafficLight extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${trafficLightStyles[version] || trafficLightStyles.v2}</style>${trafficLightMarkup[version] || trafficLightMarkup.v2}`;
  }
}

if (!customElements.get('concept-traffic-light')) {
  customElements.define('concept-traffic-light', ConceptTrafficLight);
}
