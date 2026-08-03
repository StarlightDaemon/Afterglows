// v1 below is the archived original; v2 fixes the missed contact: with the
// rod's -38deg rotation worked through, the iron's tip landed ~14px right
// of the pad and never touched the joint it was supposedly making. The
// whole iron assembly shifts left so the tip meets the bead exactly during
// the molten phase, and the second component leg now carries a small
// already-cooled bead so the loop reads "one joint done, one in progress"
// instead of a bead materializing from nothing.
const solderStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* One joint per 6.5s: iron and wire meet over the pad, the bead
     grows molten-bright under a curl of smoke, then both pull away
     and the joint cools to a settled gleam. */
  .sol {
    width: 112px;
    height: 92px;
    position: relative;
  }

  /* Board edge with pads and traces. */
  .sol-board {
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 10px;
    height: 14px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 2px;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.2) 0 2px, transparent 2px 14px),
      rgba(0, 35, 7, 0.7);
  }

  /* Component legs sticking up from the pad. */
  .sol-leg {
    position: absolute;
    bottom: 24px;
    width: 2px;
    height: 10px;
    background: rgba(190, 255, 205, 0.85);
  }

  .sol-leg.p1 { left: 52px; }
  .sol-leg.p2 { left: 62px; }

  /* Component body above the legs. */
  .sol-comp {
    position: absolute;
    left: 46px;
    bottom: 33px;
    width: 24px;
    height: 9px;
    border-radius: 2px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background: rgba(0, 70, 14, 0.8);
  }

  /* The solder bead on pad 1: grows and glows, then cools. */
  .sol-bead {
    position: absolute;
    left: 49px;
    bottom: 22px;
    width: 8px;
    height: 5px;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(circle at 40% 30%, #f2ffdd, rgba(0, 160, 32, 0.95));
    transform: scale(0);
    transform-origin: bottom center;
    animation: sol-bead 6.5s infinite;
  }

  @keyframes sol-bead {
    0%, 20% { transform: scale(0); box-shadow: none; }
    30% { transform: scale(0.5); box-shadow: 0 0 8px rgba(190, 255, 205, 0.9); }
    46% { transform: scale(1.05); box-shadow: 0 0 14px rgba(214, 255, 224, 1); }
    56% { transform: scale(1); box-shadow: 0 0 10px rgba(140, 255, 170, 0.8); }
    /* Cooling: glow dies to a hard gleam. */
    72% { transform: scale(1); box-shadow: 0 0 3px rgba(0, 204, 0, 0.5); }
    92% { transform: scale(1); box-shadow: 0 0 2px rgba(0, 204, 0, 0.35); }
    96%, 100% { transform: scale(0); box-shadow: none; }
  }

  /* The iron: enters from the right, tip to the pad, retreats. */
  .sol-iron {
    position: absolute;
    right: 2px;
    top: 8px;
    width: 62px;
    height: 46px;
    transform-origin: 90% 10%;
    animation: sol-iron 6.5s ease-in-out infinite;
  }

  @keyframes sol-iron {
    0%, 8% { transform: translate(10px, -8px) rotate(4deg); }
    20%, 56% { transform: translate(0, 0) rotate(0deg); }
    70%, 100% { transform: translate(10px, -8px) rotate(4deg); }
  }

  /* One rigid rod, rotated as a unit: handle, shaft and tip laid out
     end to end along its axis. */
  .sol-rod {
    position: absolute;
    right: 2px;
    top: 16px;
    width: 62px;
    height: 10px;
    transform: rotate(-38deg);
    transform-origin: 100% 50%;
  }

  .sol-handle {
    position: absolute;
    right: 0;
    top: 0;
    width: 28px;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(0, 130, 26, 0.9), rgba(0, 60, 12, 0.95));
    border: 1px solid rgba(0, 204, 0, 0.6);
    box-sizing: border-box;
  }

  .sol-shaft {
    position: absolute;
    right: 26px;
    top: 3px;
    width: 26px;
    height: 4px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .sol-tip {
    position: absolute;
    right: 50px;
    top: 3.5px;
    width: 10px;
    height: 3px;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    background: #d6ffe0;
    animation: sol-tipglow 6.5s infinite;
  }

  @keyframes sol-tipglow {
    0%, 100% { filter: drop-shadow(0 0 2px rgba(0, 204, 0, 0.5)); }
    30%, 56% { filter: drop-shadow(0 0 7px rgba(214, 255, 224, 1)); }
  }

  /* Solder wire feeding in from the left. */
  .sol-wire {
    position: absolute;
    left: -6px;
    top: 36px;
    width: 62px;
    height: 2px;
    border-radius: 1px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.4), rgba(214, 255, 224, 0.95));
    transform: rotate(22deg);
    transform-origin: 0% 50%;
    animation: sol-wire 6.5s ease-in-out infinite;
  }

  @keyframes sol-wire {
    0%, 8% { transform: rotate(22deg) translateX(-14px); opacity: 0.4; }
    22%, 50% { transform: rotate(22deg) translateX(0); opacity: 1; }
    /* The wire tip shortens as it melts into the joint. */
    56% { transform: rotate(22deg) translateX(-4px); opacity: 1; }
    68%, 100% { transform: rotate(22deg) translateX(-16px); opacity: 0.4; }
  }

  /* Smoke: a wisp curling off the joint while molten. */
  .sol-smoke {
    position: absolute;
    left: 52px;
    bottom: 30px;
    width: 3px;
    height: 18px;
    border-radius: 2px;
    background: linear-gradient(180deg, transparent, rgba(140, 255, 170, 0.5) 60%, transparent);
    filter: blur(1px);
    opacity: 0;
    animation: sol-smoke 6.5s infinite;
  }

  .sol-smoke.s2 { left: 56px; animation-delay: 0.5s; height: 14px; }

  @keyframes sol-smoke {
    0%, 26% { transform: translateY(0) skewX(0deg); opacity: 0; }
    34% { opacity: 0.85; }
    46% { transform: translateY(-12px) skewX(-10deg); opacity: 0.6; }
    58% { transform: translateY(-22px) skewX(8deg); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Status readout. */
  .sol-temp {
    position: absolute;
    right: 4px;
    bottom: 0;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
  }

  .sol-temp::before {
    content: '350\\00B0C';
    animation: sol-temp 6.5s steps(1) infinite;
  }

  @keyframes sol-temp {
    0% { content: '350\\00B0C'; }
    24% { content: '362\\00B0C'; }
    56% { content: '341\\00B0C'; }
    74% { content: 'JOINT \\2713'; }
    94% { content: '350\\00B0C'; }
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

  /* One joint per 6.5s: iron and wire meet ON the pad, the bead grows
     molten-bright under a curl of smoke, then both pull away and the
     joint cools. The neighboring leg already wears its cooled bead. */
  .sol {
    width: 112px;
    height: 92px;
    position: relative;
  }

  /* Board edge with pads and traces. */
  .sol-board {
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 10px;
    height: 14px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 2px;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.2) 0 2px, transparent 2px 14px),
      rgba(0, 35, 7, 0.7);
  }

  /* Component legs sticking up from the pad. */
  .sol-leg {
    position: absolute;
    bottom: 24px;
    width: 2px;
    height: 10px;
    background: rgba(190, 255, 205, 0.85);
  }

  .sol-leg.p1 { left: 52px; }
  .sol-leg.p2 { left: 62px; }

  /* Component body above the legs. */
  .sol-comp {
    position: absolute;
    left: 46px;
    bottom: 33px;
    width: 24px;
    height: 9px;
    border-radius: 2px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background: rgba(0, 70, 14, 0.8);
  }

  /* The solder bead on pad 1: grows and glows, then cools. */
  .sol-bead {
    position: absolute;
    left: 49px;
    bottom: 22px;
    width: 8px;
    height: 5px;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(circle at 40% 30%, #f2ffdd, rgba(0, 160, 32, 0.95));
    transform: scale(0);
    transform-origin: bottom center;
    animation: sol-bead 6.5s infinite;
  }

  @keyframes sol-bead {
    0%, 20% { transform: scale(0); box-shadow: none; }
    30% { transform: scale(0.5); box-shadow: 0 0 8px rgba(190, 255, 205, 0.9); }
    46% { transform: scale(1.05); box-shadow: 0 0 14px rgba(214, 255, 224, 1); }
    56% { transform: scale(1); box-shadow: 0 0 10px rgba(140, 255, 170, 0.8); }
    /* Cooling: glow dies to a hard gleam. */
    72% { transform: scale(1); box-shadow: 0 0 3px rgba(0, 204, 0, 0.5); }
    92% { transform: scale(1); box-shadow: 0 0 2px rgba(0, 204, 0, 0.35); }
    96%, 100% { transform: scale(0); box-shadow: none; }
  }

  /* The finished joint on pad 2: already cooled, a settled gleam. */
  .sol-bead2 {
    position: absolute;
    left: 59px;
    bottom: 22px;
    width: 8px;
    height: 5px;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(circle at 40% 30%, rgba(214, 255, 224, 0.75), rgba(0, 120, 24, 0.85));
    box-shadow: 0 0 2px rgba(0, 204, 0, 0.35);
  }

  /* The iron: enters from the right, tip onto the pad, retreats.
     Shifted left of the v1 position so the rotated rod's tip lands
     on the bead at (53, 64) during the contact phase. */
  .sol-iron {
    position: absolute;
    right: 16px;
    top: 9px;
    width: 62px;
    height: 46px;
    transform-origin: 90% 10%;
    animation: sol-iron 6.5s ease-in-out infinite;
  }

  @keyframes sol-iron {
    0%, 8% { transform: translate(10px, -8px) rotate(4deg); }
    20%, 56% { transform: translate(0, 0) rotate(0deg); }
    70%, 100% { transform: translate(10px, -8px) rotate(4deg); }
  }

  /* One rigid rod, rotated as a unit: handle, shaft and tip laid out
     end to end along its axis. */
  .sol-rod {
    position: absolute;
    right: 2px;
    top: 16px;
    width: 62px;
    height: 10px;
    transform: rotate(-38deg);
    transform-origin: 100% 50%;
  }

  .sol-handle {
    position: absolute;
    right: 0;
    top: 0;
    width: 28px;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(0, 130, 26, 0.9), rgba(0, 60, 12, 0.95));
    border: 1px solid rgba(0, 204, 0, 0.6);
    box-sizing: border-box;
  }

  .sol-shaft {
    position: absolute;
    right: 26px;
    top: 3px;
    width: 26px;
    height: 4px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .sol-tip {
    position: absolute;
    right: 50px;
    top: 3.5px;
    width: 10px;
    height: 3px;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    background: #d6ffe0;
    animation: sol-tipglow 6.5s infinite;
  }

  @keyframes sol-tipglow {
    0%, 100% { filter: drop-shadow(0 0 2px rgba(0, 204, 0, 0.5)); }
    30%, 56% { filter: drop-shadow(0 0 7px rgba(214, 255, 224, 1)); }
  }

  /* Solder wire feeding in from the left, meeting the tip at the pad. */
  .sol-wire {
    position: absolute;
    left: -6px;
    top: 36px;
    width: 62px;
    height: 2px;
    border-radius: 1px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.4), rgba(214, 255, 224, 0.95));
    transform: rotate(22deg);
    transform-origin: 0% 50%;
    animation: sol-wire 6.5s ease-in-out infinite;
  }

  @keyframes sol-wire {
    0%, 8% { transform: rotate(22deg) translateX(-14px); opacity: 0.4; }
    22%, 50% { transform: rotate(22deg) translateX(0); opacity: 1; }
    /* The wire tip shortens as it melts into the joint. */
    56% { transform: rotate(22deg) translateX(-4px); opacity: 1; }
    68%, 100% { transform: rotate(22deg) translateX(-16px); opacity: 0.4; }
  }

  /* Smoke: a wisp curling off the joint while molten. */
  .sol-smoke {
    position: absolute;
    left: 52px;
    bottom: 30px;
    width: 3px;
    height: 18px;
    border-radius: 2px;
    background: linear-gradient(180deg, transparent, rgba(140, 255, 170, 0.5) 60%, transparent);
    filter: blur(1px);
    opacity: 0;
    animation: sol-smoke 6.5s infinite;
  }

  .sol-smoke.s2 { left: 56px; animation-delay: 0.5s; height: 14px; }

  @keyframes sol-smoke {
    0%, 26% { transform: translateY(0) skewX(0deg); opacity: 0; }
    34% { opacity: 0.85; }
    46% { transform: translateY(-12px) skewX(-10deg); opacity: 0.6; }
    58% { transform: translateY(-22px) skewX(8deg); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Status readout. */
  .sol-temp {
    position: absolute;
    right: 4px;
    bottom: 0;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
  }

  .sol-temp::before {
    content: '350\\00B0C';
    animation: sol-temp 6.5s steps(1) infinite;
  }

  @keyframes sol-temp {
    0% { content: '350\\00B0C'; }
    24% { content: '362\\00B0C'; }
    56% { content: '341\\00B0C'; }
    74% { content: 'JOINT \\2713'; }
    94% { content: '350\\00B0C'; }
  }
`,
};

const solderMarkup = {
  v1: `
      <div class="sol">
        <div class="sol-smoke"></div>
        <div class="sol-smoke s2"></div>
        <div class="sol-comp"></div>
        <div class="sol-leg p1"></div>
        <div class="sol-leg p2"></div>
        <div class="sol-bead"></div>
        <div class="sol-board"></div>
        <div class="sol-wire"></div>
        <div class="sol-iron">
          <div class="sol-rod">
            <div class="sol-handle"></div>
            <div class="sol-shaft"></div>
            <div class="sol-tip"></div>
          </div>
        </div>
        <div class="sol-temp"></div>
      </div>
    `,
  v2: `
      <div class="sol">
        <div class="sol-smoke"></div>
        <div class="sol-smoke s2"></div>
        <div class="sol-comp"></div>
        <div class="sol-leg p1"></div>
        <div class="sol-leg p2"></div>
        <div class="sol-bead"></div>
        <div class="sol-bead2"></div>
        <div class="sol-board"></div>
        <div class="sol-wire"></div>
        <div class="sol-iron">
          <div class="sol-rod">
            <div class="sol-handle"></div>
            <div class="sol-shaft"></div>
            <div class="sol-tip"></div>
          </div>
        </div>
        <div class="sol-temp"></div>
      </div>
    `,
};

class ConceptSolder extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${solderStyles[version] || solderStyles.v2}</style>${solderMarkup[version] || solderMarkup.v2}`;
  }
}

if (!customElements.get('concept-solder')) {
  customElements.define('concept-solder', ConceptSolder);
}
