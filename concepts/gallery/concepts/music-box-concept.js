// v1 below is the archived original; v2 fixes two real layout bugs (the
// winding key collided with the rightmost comb teeth, and the open lid's
// skew pushed it past the tile's right edge) and reworks the comb into a
// graduated bank mounted above the cylinder instead of a cramped stack
// beside it, so the pins/comb/key read as distinct parts at a glance.
const musicBoxStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* An open music box: the pinned cylinder scrolls, comb teeth flick
     as pins pass (staggered plucks), and note sparks drift up out of
     the case while the winding key turns behind it. */
  .mb {
    width: 112px;
    height: 92px;
    position: relative;
  }

  /* Case. */
  .mb-case {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 38px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(0, 50, 10, 0.55), rgba(0, 22, 4, 0.8));
  }

  /* Open lid, propped at an angle. */
  .mb-lid {
    position: absolute;
    left: 10px;
    bottom: 44px;
    width: 96px;
    height: 26px;
    border: 2px solid rgba(0, 204, 0, 0.7);
    border-radius: 4px 4px 0 0;
    background: rgba(0, 40, 8, 0.35);
    transform: skewX(-24deg) scaleY(0.9);
    transform-origin: bottom left;
  }

  /* Inner lid mirror glint. */
  .mb-lid::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: linear-gradient(115deg, transparent 30%, rgba(140, 255, 170, 0.25) 45%, transparent 60%);
    animation: mb-glint 6s ease-in-out infinite;
  }

  @keyframes mb-glint {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }

  /* The cylinder: pins rendered as a dot grid scrolling horizontally. */
  .mb-cyl {
    position: absolute;
    left: 16px;
    bottom: 22px;
    width: 62px;
    height: 16px;
    border-radius: 8px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background:
      radial-gradient(circle 1.5px, rgba(214, 255, 224, 0.95) 98%, transparent) 0 0 / 9px 5px,
      linear-gradient(180deg, rgba(0, 130, 26, 0.7), rgba(0, 60, 12, 0.85));
    background-repeat: repeat;
    animation: mb-cyl 2.4s linear infinite;
    overflow: hidden;
  }

  @keyframes mb-cyl {
    to { background-position: -36px 0, 0 0; }
  }

  /* End caps. */
  .mb-cap {
    position: absolute;
    bottom: 22px;
    width: 5px;
    height: 16px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .mb-cap.c1 { left: 13px; }
  .mb-cap.c2 { left: 77px; }

  /* Comb: five teeth pointing at the cylinder, each plucking in a
     repeating pattern that matches the 2.4s pin pass. */
  .mb-tooth {
    position: absolute;
    bottom: 24px;
    width: 3px;
    background: linear-gradient(180deg, #baffc9, rgba(0, 204, 0, 0.65));
    border-radius: 1px;
    transform-origin: bottom center;
    animation: mb-pluck 2.4s infinite;
  }

  .mb-tooth.t1 { left: 86px; height: 15px; animation-delay: 0s; }
  .mb-tooth.t2 { left: 91px; height: 13px; animation-delay: -0.9s; }
  .mb-tooth.t3 { left: 96px; height: 11px; animation-delay: -1.5s; }
  .mb-tooth.t4 { left: 100px; height: 9px; animation-delay: -0.4s; }
  .mb-tooth.t5 { left: 104px; height: 8px; animation-delay: -1.9s; }

  @keyframes mb-pluck {
    0%, 78% { transform: rotate(0deg); box-shadow: none; }
    82% { transform: rotate(-9deg); box-shadow: 0 0 6px rgba(0, 204, 0, 0.9); }
    86% { transform: rotate(3deg); }
    90% { transform: rotate(-1.5deg); }
    94%, 100% { transform: rotate(0deg); }
  }

  /* Winding key on the case side, turning slowly with pauses. */
  .mb-key {
    position: absolute;
    right: -2px;
    bottom: 20px;
    width: 12px;
    height: 12px;
    animation: mb-key 4.8s ease-in-out infinite;
  }

  .mb-key::before,
  .mb-key::after {
    content: '';
    position: absolute;
    background: rgba(140, 255, 170, 0.85);
    border-radius: 2px;
  }

  .mb-key::before { left: 5px; top: 0; width: 2px; height: 12px; }
  .mb-key::after { left: 0; top: 5px; width: 12px; height: 2px; }

  @keyframes mb-key {
    0%, 12% { transform: rotate(0deg); }
    38%, 62% { transform: rotate(180deg); }
    88%, 100% { transform: rotate(360deg); }
  }

  /* Note sparks drifting up from the comb. */
  .mb-note {
    position: absolute;
    bottom: 44px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: #baffc9;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    opacity: 0;
    animation: mb-note 2.4s infinite;
  }

  .mb-note.n1 { left: 88px; }
  .mb-note.n2 { left: 96px; animation-delay: -0.9s; }
  .mb-note.n3 { left: 82px; animation-delay: -1.5s; }

  @keyframes mb-note {
    0%, 78% { transform: translateY(0) rotate(0deg); opacity: 0; }
    82% { opacity: 1; }
    96% { transform: translateY(-16px) rotate(-10deg); opacity: 0; }
    100% { opacity: 0; }
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

  /* An open music box viewed from the front: the pinned cylinder scrolls
     below a graduated comb that flicks tooth-by-tooth as pins pass, a
     winding key turns in the case's clear end-cap, and note sparks lift
     off the comb. Every part sits inside the 112x92 tile with room to
     spare, so nothing collides or bleeds past the edge. */
  .mb {
    width: 112px;
    height: 92px;
    position: relative;
  }

  /* Case. */
  .mb-case {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 8px;
    height: 40px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(0, 50, 10, 0.55), rgba(0, 22, 4, 0.8));
  }

  /* Open lid, propped backward. A centered skew keeps both top corners
     inside the tile instead of shearing the whole panel off one edge. */
  .mb-lid {
    position: absolute;
    left: 16px;
    bottom: 46px;
    width: 80px;
    height: 22px;
    border: 2px solid rgba(0, 204, 0, 0.7);
    border-radius: 4px 4px 0 0;
    background: rgba(0, 40, 8, 0.35);
    transform: skewX(-16deg);
    transform-origin: bottom center;
  }

  /* Inner lid mirror glint. */
  .mb-lid::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: linear-gradient(115deg, transparent 30%, rgba(140, 255, 170, 0.25) 45%, transparent 60%);
    animation: mb-glint 6s ease-in-out infinite;
  }

  @keyframes mb-glint {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }

  /* The cylinder: pins rendered as a dot grid scrolling horizontally,
     spanning most of the case width so the comb reads as sitting above
     it rather than crammed off to one side. */
  .mb-cyl {
    position: absolute;
    left: 12px;
    bottom: 16px;
    width: 62px;
    height: 14px;
    border-radius: 7px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    background:
      radial-gradient(circle 1.5px, rgba(214, 255, 224, 0.95) 98%, transparent) 0 0 / 9px 5px,
      linear-gradient(180deg, rgba(0, 130, 26, 0.7), rgba(0, 60, 12, 0.85));
    background-repeat: repeat;
    animation: mb-cyl 2.4s linear infinite;
    overflow: hidden;
  }

  @keyframes mb-cyl {
    to { background-position: -36px 0, 0 0; }
  }

  /* End caps. */
  .mb-cap {
    position: absolute;
    bottom: 16px;
    width: 4px;
    height: 14px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .mb-cap.c1 { left: 9px; }
  .mb-cap.c2 { left: 71px; }

  /* Comb: five teeth mounted from a shared bar near the case top,
     graduated shortest-to-longest left to right like a real comb's
     bass-to-treble taper, tips resting just above the cylinder. Each
     flicks at the tip (top-anchored) as its pin passes. */
  .mb-tooth {
    position: absolute;
    top: 46px;
    width: 3px;
    background: linear-gradient(180deg, #baffc9, rgba(0, 204, 0, 0.65));
    border-radius: 1px;
    transform-origin: top center;
    animation: mb-pluck 2.4s infinite;
  }

  .mb-tooth.t1 { left: 16px; height: 16px; animation-delay: -1.9s; }
  .mb-tooth.t2 { left: 30px; height: 14px; animation-delay: -0.4s; }
  .mb-tooth.t3 { left: 44px; height: 12px; animation-delay: -1.5s; }
  .mb-tooth.t4 { left: 58px; height: 10px; animation-delay: -0.9s; }
  .mb-tooth.t5 { left: 68px; height: 8px; animation-delay: 0s; }

  @keyframes mb-pluck {
    0%, 78% { transform: rotate(0deg); box-shadow: none; }
    82% { transform: rotate(9deg); box-shadow: 0 0 6px rgba(0, 204, 0, 0.9); }
    86% { transform: rotate(-3deg); }
    90% { transform: rotate(1.5deg); }
    94%, 100% { transform: rotate(0deg); }
  }

  /* Winding key, seated in the case's clear right end-cap where it
     can't overlap the comb or cylinder. */
  .mb-key-mount {
    position: absolute;
    left: 87px;
    bottom: 14px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1.5px solid rgba(140, 255, 170, 0.5);
    background: radial-gradient(circle at 35% 30%, rgba(0, 90, 20, 0.6), rgba(0, 20, 4, 0.85));
  }

  .mb-key {
    position: absolute;
    left: 93px;
    bottom: 17px;
    width: 12px;
    height: 12px;
    animation: mb-key 4.8s ease-in-out infinite;
  }

  .mb-key::before,
  .mb-key::after {
    content: '';
    position: absolute;
    background: rgba(140, 255, 170, 0.85);
    border-radius: 2px;
  }

  .mb-key::before { left: 5px; top: 0; width: 2px; height: 12px; }
  .mb-key::after { left: 0; top: 5px; width: 12px; height: 2px; }

  @keyframes mb-key {
    0%, 12% { transform: rotate(0deg); }
    38%, 62% { transform: rotate(180deg); }
    88%, 100% { transform: rotate(360deg); }
  }

  /* Note sparks lifting off the comb, staying clear of the lid's edge. */
  .mb-note {
    position: absolute;
    bottom: 50px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: #baffc9;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    opacity: 0;
    animation: mb-note 2.4s infinite;
  }

  .mb-note.n1 { left: 34px; animation-delay: -1.9s; }
  .mb-note.n2 { left: 48px; animation-delay: -0.9s; }
  .mb-note.n3 { left: 60px; animation-delay: 0s; }

  @keyframes mb-note {
    0%, 78% { transform: translateY(0) rotate(0deg); opacity: 0; }
    82% { opacity: 1; }
    96% { transform: translateY(-16px) rotate(10deg); opacity: 0; }
    100% { opacity: 0; }
  }
`,
};

const musicBoxMarkup = {
  v1: `
      <div class="mb">
        <div class="mb-lid"></div>
        <div class="mb-case"></div>
        <div class="mb-cyl"></div>
        <div class="mb-cap c1"></div>
        <div class="mb-cap c2"></div>
        <div class="mb-tooth t1"></div>
        <div class="mb-tooth t2"></div>
        <div class="mb-tooth t3"></div>
        <div class="mb-tooth t4"></div>
        <div class="mb-tooth t5"></div>
        <div class="mb-key"></div>
        <div class="mb-note n1">&#9834;</div>
        <div class="mb-note n2">&#9833;</div>
        <div class="mb-note n3">&#9834;</div>
      </div>
    `,
  v2: `
      <div class="mb">
        <div class="mb-lid"></div>
        <div class="mb-case"></div>
        <div class="mb-cyl"></div>
        <div class="mb-cap c1"></div>
        <div class="mb-cap c2"></div>
        <div class="mb-tooth t1"></div>
        <div class="mb-tooth t2"></div>
        <div class="mb-tooth t3"></div>
        <div class="mb-tooth t4"></div>
        <div class="mb-tooth t5"></div>
        <div class="mb-key-mount"></div>
        <div class="mb-key"></div>
        <div class="mb-note n1">&#9834;</div>
        <div class="mb-note n2">&#9833;</div>
        <div class="mb-note n3">&#9834;</div>
      </div>
    `,
};

class ConceptMusicBox extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${musicBoxStyles[version] || musicBoxStyles.v2}</style>${musicBoxMarkup[version] || musicBoxMarkup.v2}`;
  }
}

if (!customElements.get('concept-music-box')) {
  customElements.define('concept-music-box', ConceptMusicBox);
}
