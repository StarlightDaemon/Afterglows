// v1 below is the archived original; v2 fixes layout bugs and comb geometry.
// v3 adds full heirloom color: rich mahogany cabinet, gold brass cylinder,
// blued steel comb teeth, and floating golden musical notes.
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
    animation: mb-lid-rock 1.8s ease-in-out infinite alternate;
  }

  @keyframes mb-lid-rock {
    0% { transform: skewX(-24deg) rotate(-6deg) scaleY(0.9); }
    100% { transform: skewX(-24deg) rotate(4deg) scaleY(0.95); }
  }

  /* Inner lid mirror glint. */
  .mb-lid::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: linear-gradient(115deg, transparent 30%, rgba(140, 255, 170, 0.25) 45%, transparent 60%);
    animation: mb-glint 1.8s ease-in-out infinite alternate;
  }

  @keyframes mb-glint {
    0% { opacity: 0.4; }
    100% { opacity: 1; }
  }

  /* The cylinder */
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
    animation: mb-cyl 1.2s linear infinite;
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

  /* Comb */
  .mb-tooth {
    position: absolute;
    bottom: 24px;
    width: 3px;
    background: linear-gradient(180deg, #ffffff, rgba(0, 204, 0, 0.85));
    border-radius: 1px;
    transform-origin: bottom center;
    animation: mb-pluck 1.2s ease-in-out infinite alternate;
  }

  .mb-tooth.t1 { left: 86px; height: 15px; animation-delay: 0s; }
  .mb-tooth.t2 { left: 91px; height: 13px; animation-delay: -0.25s; }
  .mb-tooth.t3 { left: 96px; height: 11px; animation-delay: -0.5s; }
  .mb-tooth.t4 { left: 100px; height: 9px; animation-delay: -0.75s; }
  .mb-tooth.t5 { left: 104px; height: 8px; animation-delay: -1.0s; }

  @keyframes mb-pluck {
    0% { transform: rotate(-14deg); box-shadow: 0 0 8px #00ff66; }
    100% { transform: rotate(14deg); box-shadow: none; }
  }

  /* Winding key */
  .mb-key {
    position: absolute;
    right: -2px;
    bottom: 20px;
    width: 12px;
    height: 12px;
    animation: mb-key 1.4s linear infinite;
  }

  .mb-key::before,
  .mb-key::after {
    content: '';
    position: absolute;
    background: rgba(140, 255, 170, 0.95);
    box-shadow: 0 0 6px #00ff66;
    border-radius: 2px;
  }

  .mb-key::before { left: 5px; top: 0; width: 2px; height: 12px; }
  .mb-key::after { left: 0; top: 5px; width: 12px; height: 2px; }

  @keyframes mb-key {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Note sparks drifting up from the comb */
  .mb-note {
    position: absolute;
    bottom: 44px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 0 8px #00ff66, 0 0 14px #00ff66;
    animation: mb-note 1.4s ease-out infinite;
  }

  .mb-note.n1 { left: 88px; animation-delay: 0s; }
  .mb-note.n2 { left: 96px; animation-delay: -0.45s; }
  .mb-note.n3 { left: 82px; animation-delay: -0.9s; }

  @keyframes mb-note {
    0% { transform: translateY(0) rotate(-15deg); opacity: 1; }
    100% { transform: translateY(-30px) rotate(15deg); opacity: 0.1; }
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

  /* Open lid, propped backward */
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
    animation: mb-lid-rock 1.8s ease-in-out infinite alternate;
  }

  /* Inner lid mirror glint. */
  .mb-lid::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: linear-gradient(115deg, transparent 30%, rgba(140, 255, 170, 0.25) 45%, transparent 60%);
    animation: mb-glint 1.8s ease-in-out infinite alternate;
  }

  /* The cylinder */
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
    animation: mb-cyl 1.2s linear infinite;
    overflow: hidden;
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

  /* Comb */
  .mb-tooth {
    position: absolute;
    top: 46px;
    width: 3px;
    background: linear-gradient(180deg, #ffffff, rgba(0, 204, 0, 0.85));
    border-radius: 1px;
    transform-origin: top center;
    animation: mb-pluck 1.2s ease-in-out infinite alternate;
  }

  .mb-tooth.t1 { left: 16px; height: 16px; animation-delay: -1.0s; }
  .mb-tooth.t2 { left: 30px; height: 14px; animation-delay: -0.25s; }
  .mb-tooth.t3 { left: 44px; height: 12px; animation-delay: -0.75s; }
  .mb-tooth.t4 { left: 58px; height: 10px; animation-delay: -0.5s; }
  .mb-tooth.t5 { left: 68px; height: 8px; animation-delay: 0s; }

  /* Winding key */
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
    animation: mb-key 1.4s linear infinite;
  }

  .mb-key::before,
  .mb-key::after {
    content: '';
    position: absolute;
    background: rgba(140, 255, 170, 0.95);
    box-shadow: 0 0 6px #00ff66;
    border-radius: 2px;
  }

  .mb-key::before { left: 5px; top: 0; width: 2px; height: 12px; }
  .mb-key::after { left: 0; top: 5px; width: 12px; height: 2px; }

  /* Note sparks lifting off the comb */
  .mb-note {
    position: absolute;
    bottom: 50px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 0 8px #00ff66, 0 0 14px #00ff66;
    animation: mb-note 1.4s ease-out infinite;
  }

  .mb-note.n1 { left: 34px; animation-delay: -1.0s; }
  .mb-note.n2 { left: 48px; animation-delay: -0.5s; }
  .mb-note.n3 { left: 60px; animation-delay: 0s; }
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Full color antique Swiss music box with mahogany cabinet,
     inlaid brass trim, crystal mirror lid, gold cylinder & spring steel comb */
  .mbc {
    width: 112px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Mahogany & Rosewood Heirloom Case */
  .mbc-case {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 8px;
    height: 40px;
    border: 2px solid #ca8a04;
    border-radius: 4px;
    background: linear-gradient(180deg, #7c2d12 0%, #451a03 70%, #291002 100%);
    box-shadow: inset 0 2px 4px rgba(250, 204, 21, 0.3), 0 2px 8px rgba(0, 0, 0, 0.8);
  }

  /* Crystal Mirror Hinged Lid */
  .mbc-lid {
    position: absolute;
    left: 16px;
    bottom: 46px;
    width: 80px;
    height: 22px;
    border: 2px solid #ca8a04;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(135deg, rgba(69, 26, 3, 0.9), rgba(124, 45, 18, 0.9));
    transform: skewX(-16deg);
    transform-origin: bottom center;
    animation: mbc-lid-rock 1.8s ease-in-out infinite alternate;
  }

  @keyframes mbc-lid-rock {
    0% { transform: skewX(-16deg) rotate(-6deg); }
    100% { transform: skewX(-16deg) rotate(4deg); }
  }

  /* Inner Mirror Silver Glint */
  .mbc-lid::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: linear-gradient(115deg, transparent 30%, rgba(255, 255, 255, 0.6) 45%, transparent 60%);
    animation: mbc-glint 1.8s ease-in-out infinite alternate;
  }

  @keyframes mbc-glint {
    0% { opacity: 0.4; }
    100% { opacity: 1; }
  }

  /* Rotating 24k Brass Pinned Cylinder */
  .mbc-cyl {
    position: absolute;
    left: 12px;
    bottom: 16px;
    width: 62px;
    height: 14px;
    border-radius: 7px;
    border: 1px solid #fde047;
    background:
      radial-gradient(circle 1.5px, #ffffff 98%, transparent) 0 0 / 9px 5px,
      linear-gradient(180deg, #fde047 0%, #eab308 50%, #ca8a04 100%);
    background-repeat: repeat;
    box-shadow: 0 0 6px rgba(250, 204, 21, 0.6);
    animation: mbc-cyl 1.2s linear infinite;
    overflow: hidden;
  }

  @keyframes mbc-cyl {
    to { background-position: -36px 0, 0 0; }
  }

  /* Brass End Caps */
  .mbc-cap {
    position: absolute;
    bottom: 16px;
    width: 4px;
    height: 14px;
    border-radius: 2px;
    background: #facc15;
    border: 0.5px solid #ca8a04;
  }

  .mbc-cap.c1 { left: 9px; }
  .mbc-cap.c2 { left: 71px; }

  /* Graduated Blued Steel Comb Teeth with Gold Pluck Flash */
  .mbc-tooth {
    position: absolute;
    top: 46px;
    width: 3px;
    background: linear-gradient(180deg, #ffffff 0%, #94a3b8 60%, #475569 100%);
    border-radius: 1px;
    transform-origin: top center;
    animation: mbc-pluck 1.2s ease-in-out infinite alternate;
  }

  .mbc-tooth.t1 { left: 16px; height: 16px; animation-delay: -1.0s; }
  .mbc-tooth.t2 { left: 30px; height: 14px; animation-delay: -0.25s; }
  .mbc-tooth.t3 { left: 44px; height: 12px; animation-delay: -0.75s; }
  .mbc-tooth.t4 { left: 58px; height: 10px; animation-delay: -0.5s; }
  .mbc-tooth.t5 { left: 68px; height: 8px; animation-delay: 0s; }

  @keyframes mbc-pluck {
    0% { transform: rotate(-14deg); box-shadow: 0 0 8px #fde047; }
    100% { transform: rotate(14deg); box-shadow: none; }
  }

  /* Brass Winding Key Mount */
  .mbc-key-mount {
    position: absolute;
    left: 87px;
    bottom: 14px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1.5px solid #ca8a04;
    background: radial-gradient(circle at 35% 30%, #451a03 0%, #1c0a02 100%);
  }

  .mbc-key {
    position: absolute;
    left: 93px;
    bottom: 17px;
    width: 12px;
    height: 12px;
    animation: mbc-key 1.4s linear infinite;
  }

  .mbc-key::before,
  .mbc-key::after {
    content: '';
    position: absolute;
    background: #facc15;
    box-shadow: 0 0 6px #eab308;
    border-radius: 2px;
  }

  .mbc-key::before { left: 5px; top: 0; width: 2px; height: 12px; }
  .mbc-key::after { left: 0; top: 5px; width: 12px; height: 2px; }

  @keyframes mbc-key {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Floating Golden Notes (♪ ♫ ♪) */
  .mbc-note {
    position: absolute;
    bottom: 50px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    font-weight: bold;
    color: #fde047;
    text-shadow: 0 0 8px #facc15, 0 0 16px #f59e0b;
    animation: mbc-note 1.4s ease-out infinite;
  }

  .mbc-note.n1 { left: 34px; animation-delay: -1.0s; }
  .mbc-note.n2 { left: 48px; animation-delay: -0.5s; }
  .mbc-note.n3 { left: 60px; animation-delay: 0s; }

  @keyframes mbc-note {
    0% { transform: translateY(0) rotate(-15deg); opacity: 1; }
    100% { transform: translateY(-30px) rotate(15deg); opacity: 0.1; }
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
  v3: `
      <div class="mbc">
        <div class="mbc-lid"></div>
        <div class="mbc-case"></div>
        <div class="mbc-cyl"></div>
        <div class="mbc-cap c1"></div>
        <div class="mbc-cap c2"></div>
        <div class="mbc-tooth t1"></div>
        <div class="mbc-tooth t2"></div>
        <div class="mbc-tooth t3"></div>
        <div class="mbc-tooth t4"></div>
        <div class="mbc-tooth t5"></div>
        <div class="mbc-key-mount"></div>
        <div class="mbc-key"></div>
        <div class="mbc-note n1">&#9834;</div>
        <div class="mbc-note n2">&#9833;</div>
        <div class="mbc-note n3">&#9834;</div>
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${musicBoxStyles[version] || musicBoxStyles.v3}</style>${musicBoxMarkup[version] || musicBoxMarkup.v3}`;
  }
}

if (!customElements.get('concept-music-box')) {
  customElements.define('concept-music-box', ConceptMusicBox);
}
