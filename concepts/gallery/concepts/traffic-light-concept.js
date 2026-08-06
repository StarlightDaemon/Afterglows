// v1 below is the archived original; v2 closes the signal's dead gap (the
// stop phase ended at 92%, leaving 0.64s of all-three-dark before green),
// re-centers the housing and hoods on the pole (both sat 2px off), and
// gives the car its promised queue behavior: it now rolls up during red,
// waits at the line, and pulls away on green - a seamless loop instead of
// one pass and 5.6s of empty road.
// v3 is the full rebuild: the signal now governs actual flow. An explicit
// road with a stop line and zebra crossing carries a three-car queue that
// builds during the red (arrivals stack nose-to-tail), drains as a
// staggered chain on the green - each car launching only after the one
// ahead clears - and a pedestrian crosses at the zebra while the cars
// are held. Same 8s cycle and monochrome luminance lamp semantics.
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
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A working intersection on one 8s signal cycle: green drains the
     three-car queue as a staggered chain (each car launches only after
     the one ahead clears), amber empties the road, and through the red
     the queue rebuilds nose-to-tail while a pedestrian crosses at the
     zebra. Lamps keep the monochrome luminance semantics: stop dim and
     hollow, caution mid, go bright. */
  .tli {
    width: 104px;
    height: 100px;
    position: relative;
  }

  .tli-pole {
    position: absolute;
    left: 50%;
    bottom: 11px;
    width: 4px;
    height: 10px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(0, 204, 0, 0.7), rgba(0, 80, 16, 0.6));
  }

  .tli-housing {
    position: absolute;
    left: 50%;
    top: 1px;
    width: 30px;
    height: 74px;
    margin-left: -17px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 45, 9, 0.6), rgba(0, 20, 4, 0.85));
    box-shadow: inset 0 0 8px rgba(0, 204, 0, 0.15);
  }

  /* Lens hoods, centered over their lamps. */
  .tli-hood {
    position: absolute;
    left: 4px;
    width: 22px;
    height: 5px;
    border-radius: 3px 3px 0 0;
    background: rgba(0, 204, 0, 0.5);
  }

  .tli-hood.h1 { top: 3px; }
  .tli-hood.h2 { top: 26px; }
  .tli-hood.h3 { top: 49px; }

  .tli-lamp {
    position: absolute;
    left: 50%;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.5);
  }

  .tli-lamp.stop { top: 8px; background: rgba(0, 204, 0, 0.18); animation: tli-stop 8s steps(1) infinite; }
  .tli-lamp.caution { top: 31px; background: rgba(0, 204, 0, 0.18); animation: tli-caution 8s steps(1) infinite; }
  .tli-lamp.go { top: 54px; background: rgba(0, 204, 0, 0.18); animation: tli-go 8s steps(1) infinite; }

  @keyframes tli-go {
    0% {
      background: radial-gradient(circle at 38% 32%, #d6ffe0, #29e029 60%);
      box-shadow: 0 0 16px rgba(0, 204, 0, 0.95), 0 0 30px rgba(0, 204, 0, 0.4);
    }
    42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  @keyframes tli-caution {
    0% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    42% {
      background: radial-gradient(circle at 38% 32%, #f2ffdd, #9ade5a 60%);
      box-shadow: 0 0 12px rgba(160, 230, 90, 0.9);
    }
    54% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
  }

  @keyframes tli-stop {
    0%, 42% { background: rgba(0, 204, 0, 0.18); box-shadow: none; }
    54%, 100% {
      background: radial-gradient(circle at 38% 32%, #eaffe6, #57b657 55%, #1d5b2a);
      box-shadow: 0 0 10px rgba(80, 180, 90, 0.8), inset 0 0 5px rgba(230, 255, 230, 0.6);
    }
  }

  /* The road: a band along the bottom the whole scene stands on. */
  .tli-road {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1px;
    height: 11px;
    border-top: 1px solid rgba(0, 204, 0, 0.4);
    border-bottom: 1px solid rgba(0, 204, 0, 0.25);
    background: rgba(0, 22, 4, 0.5);
  }

  /* Stop line the queue holds at. */
  .tli-stopline {
    position: absolute;
    left: 38px;
    bottom: 2px;
    width: 2px;
    height: 9px;
    background: rgba(190, 255, 205, 0.75);
  }

  /* Zebra crossing between the stop line and the signal. */
  .tli-zebra {
    position: absolute;
    bottom: 3px;
    width: 3px;
    height: 7px;
    background: rgba(140, 255, 170, 0.22);
  }

  .tli-zebra.z1 { left: 45px; }
  .tli-zebra.z2 { left: 51px; }
  .tli-zebra.z3 { left: 57px; }

  /* Light spill on the road, tracking the active lamp. */
  .tli-spill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 60px;
    height: 8px;
    margin-left: -30px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(0, 204, 0, 0.4), transparent 70%);
    animation: tli-spill 8s steps(1) infinite;
  }

  @keyframes tli-spill {
    0% { opacity: 1; }
    42% { opacity: 0.25; }
    54%, 100% { opacity: 0.45; }
  }

  /* Cars: 13px glyphs, wheels as pseudo-elements. Each waits nose to
     the queue position, launches after the car ahead, exits right,
     teleports back offscreen-left behind a stepped segment, and rolls
     up again during the red. */
  .tli-car {
    position: absolute;
    bottom: 4px;
    left: -13px;
    width: 13px;
    height: 7px;
    border-radius: 3px 4px 2px 2px;
    background: rgba(140, 255, 170, 0.65);
    animation-duration: 8s;
    animation-iteration-count: infinite;
  }

  .tli-car::before,
  .tli-car::after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #0a1f0e;
    border: 1px solid rgba(140, 255, 170, 0.8);
  }

  .tli-car::before { left: 1px; }
  .tli-car::after { right: 1px; }

  .tli-car.c1 { animation-name: tli-c1; }
  .tli-car.c2 { animation-name: tli-c2; }
  .tli-car.c3 { animation-name: tli-c3; }

  /* Exits park at 140px: the terminal box shows ~17px of overflow past
     the 104px tile on each side, so anything nearer leaves a glowing
     sliver of "offscreen" car visible at the box edge during the hold. */

  /* Front of the queue: first to react when the green wraps in. */
  @keyframes tli-c1 {
    0%, 4% { transform: translateX(36px); animation-timing-function: ease-in; }
    20% { transform: translateX(140px); animation-timing-function: steps(1, end); }
    56% { transform: translateX(140px); animation-timing-function: steps(1, end); }
    58% { transform: translateX(0px); animation-timing-function: ease-out; }
    70%, 100% { transform: translateX(36px); }
  }

  /* Second in line: launches once the leader clears. */
  @keyframes tli-c2 {
    0%, 8% { transform: translateX(21px); animation-timing-function: ease-in; }
    24% { transform: translateX(140px); animation-timing-function: steps(1, end); }
    66% { transform: translateX(140px); animation-timing-function: steps(1, end); }
    68% { transform: translateX(0px); animation-timing-function: ease-out; }
    80%, 100% { transform: translateX(21px); }
  }

  /* Tail of the queue: nose just peeking into frame while waiting. */
  @keyframes tli-c3 {
    0%, 12% { transform: translateX(6px); animation-timing-function: ease-in; }
    28% { transform: translateX(140px); animation-timing-function: steps(1, end); }
    76% { transform: translateX(140px); animation-timing-function: steps(1, end); }
    78% { transform: translateX(0px); animation-timing-function: ease-out; }
    90%, 100% { transform: translateX(6px); }
  }

  /* Pedestrian: crosses at the zebra while the cars are held, gone
     well before the green wraps in. Head + body glyph with a small
     walking bob. */
  .tli-ped {
    position: absolute;
    left: 49px;
    top: 74px;
    width: 4px;
    height: 9px;
    opacity: 0;
    animation: tli-ped 8s infinite, tli-ped-bob 0.4s ease-in-out infinite alternate;
  }

  .tli-ped::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 3px;
    height: 3px;
    margin-left: -1.5px;
    border-radius: 50%;
    background: #f2ffdd;
    box-shadow: 0 0 4px rgba(214, 255, 224, 0.9);
  }

  .tli-ped::after {
    content: '';
    position: absolute;
    top: 3.5px;
    left: 50%;
    width: 2px;
    height: 5.5px;
    margin-left: -1px;
    border-radius: 1px 1px 0 0;
    background: rgba(214, 255, 224, 0.95);
  }

  @keyframes tli-ped {
    0%, 58% { transform: translateY(0); opacity: 0; }
    62% { transform: translateY(3px); opacity: 1; }
    84% { transform: translateY(14px); opacity: 1; }
    88%, 100% { transform: translateY(16px); opacity: 0; }
  }

  @keyframes tli-ped-bob {
    from { margin-top: 0; }
    to { margin-top: -0.8px; }
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
  v3: `
      <div class="tli">
        <div class="tli-spill"></div>
        <div class="tli-road"></div>
        <div class="tli-stopline"></div>
        <div class="tli-zebra z1"></div>
        <div class="tli-zebra z2"></div>
        <div class="tli-zebra z3"></div>
        <div class="tli-car c1"></div>
        <div class="tli-car c2"></div>
        <div class="tli-car c3"></div>
        <div class="tli-ped"></div>
        <div class="tli-pole"></div>
        <div class="tli-housing">
          <div class="tli-hood h1"></div>
          <div class="tli-hood h2"></div>
          <div class="tli-hood h3"></div>
          <div class="tli-lamp stop"></div>
          <div class="tli-lamp caution"></div>
          <div class="tli-lamp go"></div>
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${trafficLightStyles[version] || trafficLightStyles.v3}</style>${trafficLightMarkup[version] || trafficLightMarkup.v3}`;
  }
}

if (!customElements.get('concept-traffic-light')) {
  customElements.define('concept-traffic-light', ConceptTrafficLight);
}
